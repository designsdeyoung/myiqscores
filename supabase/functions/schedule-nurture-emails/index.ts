/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'
import { renderAsync } from 'npm:@react-email/components@0.0.22'
import { createClient } from 'npm:@supabase/supabase-js@2'
import { TEMPLATES } from '../_shared/transactional-email-templates/registry.ts'

const FROM_ADDRESS = 'MyIQScores <noreply@myiqscores.com>'
const UNSUBSCRIBE_BASE = 'https://www.myiqscores.com/unsubscribe'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Nurture sequence: templateName → delay in hours from now
const NURTURE_SEQUENCE: Array<{ template: string; delayHours: number }> = [
  { template: 'career-fit',        delayHours: 24  },  // Day 1
  { template: 'challenge-share',   delayHours: 48  },  // Day 2 — share loop
  { template: 'improvement-tips',  delayHours: 72  },  // Day 3
  { template: 'discount-offer',    delayHours: 120 },  // Day 5
  { template: 'brain-teaser',      delayHours: 168 },  // Day 7
  { template: 'retest-reminder',   delayHours: 336 },  // Day 14 — come back & retest
]

function hoursFromNow(hours: number): string {
  return new Date(Date.now() + hours * 60 * 60 * 1000).toISOString()
}

function generateToken(): string {
  const bytes = new Uint8Array(32)
  crypto.getRandomValues(bytes)
  return Array.from(bytes).map((b) => b.toString(16).padStart(2, '0')).join('')
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  const resendApiKey = Deno.env.get('RESEND_API_KEY')
  const supabaseUrl = Deno.env.get('SUPABASE_URL')
  const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')

  if (!resendApiKey || !supabaseUrl || !supabaseServiceKey) {
    return new Response(
      JSON.stringify({ error: 'Server configuration error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }

  let email: string
  let name: string | undefined
  let iqScore: number
  let label: string
  let percentile: number

  try {
    const body = await req.json()
    email = body.email?.trim().toLowerCase()
    name = body.name?.trim() || undefined
    iqScore = Number(body.iqScore) || 100
    label = body.label || 'Average'
    percentile = Number(body.percentile) || 50
    if (!email || !email.includes('@')) throw new Error('invalid email')
  } catch {
    return new Response(
      JSON.stringify({ error: 'email, iqScore, label, and percentile are required' }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey)

  // 1. Check suppression list
  const { data: suppressed, error: suppressionError } = await supabase
    .from('suppressed_emails')
    .select('id')
    .eq('email', email)
    .maybeSingle()

  if (suppressionError) {
    console.error('Suppression check failed', { error: suppressionError })
    return new Response(
      JSON.stringify({ error: 'Failed to verify suppression status' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }

  if (suppressed) {
    return new Response(
      JSON.stringify({ success: false, reason: 'email_suppressed' }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }

  // 2. Get or create unsubscribe token
  let unsubscribeToken: string
  const { data: existingToken } = await supabase
    .from('email_unsubscribe_tokens')
    .select('token, used_at')
    .eq('email', email)
    .maybeSingle()

  if (existingToken && !existingToken.used_at) {
    unsubscribeToken = existingToken.token
  } else if (!existingToken) {
    const newToken = generateToken()
    await supabase
      .from('email_unsubscribe_tokens')
      .upsert({ token: newToken, email }, { onConflict: 'email', ignoreDuplicates: true })
    const { data: storedToken } = await supabase
      .from('email_unsubscribe_tokens')
      .select('token')
      .eq('email', email)
      .maybeSingle()
    unsubscribeToken = storedToken?.token ?? newToken
  } else {
    // Token used — treat as suppressed
    return new Response(
      JSON.stringify({ success: false, reason: 'email_suppressed' }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }

  const templateData = { name, iqScore, label, percentile }
  const scheduled: string[] = []
  const errors: string[] = []

  // 3. Schedule each nurture email via Resend's scheduled_at parameter
  for (const { template: templateName, delayHours } of NURTURE_SEQUENCE) {
    const entry = TEMPLATES[templateName]
    if (!entry) {
      errors.push(`Template not found: ${templateName}`)
      continue
    }

    const html = await renderAsync(React.createElement(entry.component, templateData))
    const text = await renderAsync(React.createElement(entry.component, templateData), { plainText: true })
    const subject = typeof entry.subject === 'function' ? entry.subject(templateData) : entry.subject
    const scheduledAt = hoursFromNow(delayHours)
    const messageId = crypto.randomUUID()

    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: FROM_ADDRESS,
          to: email,
          subject,
          html,
          text,
          scheduled_at: scheduledAt,
          headers: {
            'List-Unsubscribe': `<${UNSUBSCRIBE_BASE}?token=${unsubscribeToken}>`,
            'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
            'X-Entity-Ref-ID': messageId,
          },
        }),
      })

      const status = res.ok ? 'scheduled' : 'failed'
      const errorMessage = res.ok ? undefined : (await res.text().catch(() => res.statusText)).slice(0, 500)

      await supabase.from('email_send_log').insert({
        message_id: messageId,
        template_name: templateName,
        recipient_email: email,
        status,
        error_message: errorMessage ?? null,
      })

      if (res.ok) {
        scheduled.push(templateName)
      } else {
        console.error('Failed to schedule nurture email', { templateName, status: res.status, errorMessage })
        errors.push(`${templateName}: ${res.status} ${errorMessage}`)
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      console.error('Network error scheduling nurture email', { templateName, error: msg })
      errors.push(`${templateName}: ${msg}`)
    }
  }

  return new Response(
    JSON.stringify({ success: true, scheduled, errors: errors.length > 0 ? errors : undefined }),
    { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
  )
})
