import * as React from 'npm:react@18.3.1'
import {
  Body, Button, Container, Head, Heading, Hr, Html, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "MyIQScores"
const TEST_LINK = "https://www.myiqscores.com"
const IMPROVE_LINK = "https://www.myiqscores.com/how-to-improve-iq"

interface RetestReminderProps {
  name?: string
  iqScore?: number
  percentile?: number
}

const RetestReminderEmail = ({ name, iqScore = 100, percentile = 50 }: RetestReminderProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>
      Two weeks ago you scored {String(iqScore)}. Scores usually rise on a retake.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={headerSection}>
          <Text style={logoText}>🧠 {SITE_NAME}</Text>
        </Section>

        <Section>
          <Heading style={heading}>
            {name ? `${name}, c` : 'C'}an you beat your {iqScore}?
          </Heading>
          <Text style={subheading}>
            It's been two weeks since you scored {iqScore} ({percentile}th percentile).
            Here's something most people don't know: retest scores usually go up.
          </Text>
        </Section>

        <Hr style={divider} />

        <Section>
          <Text style={sectionLabel}>WHY RETAKE SCORES IMPROVE</Text>
          <Text style={bodyText}>
            Psychologists call it the <strong>practice effect</strong>: familiarity with question
            formats, less test anxiety, and better pacing typically add measurable points on a
            second attempt — even with different questions.
          </Text>
          <Text style={bodyText}>
            Your first attempt set your baseline. A retake shows you whether your pattern
            recognition, logic, and working speed are sharper today.
          </Text>
        </Section>

        <Section style={{ textAlign: 'center' as const }}>
          <Button style={ctaButton} href={TEST_LINK}>
            Retake the Test — Beat {iqScore} →
          </Button>
          <Text style={{ fontSize: '12px', color: '#999', margin: '10px 0 0', textAlign: 'center' as const }}>
            Takes about 10 minutes. Free, no sign-up.
          </Text>
        </Section>

        <Hr style={divider} />

        <Section>
          <Text style={sectionLabel}>WANT AN EDGE FIRST?</Text>
          <Text style={bodyText}>
            Read our guide on <a href={IMPROVE_LINK} style={{ color: '#8B5CF6' }}>what actually
            improves cognitive performance</a> (sleep, dual n-back training, and the habits with
            real research behind them) — then take your shot.
          </Text>
        </Section>

        <Hr style={divider} />

        <Section>
          <Text style={footerText}>
            You're receiving this because you completed the IQ test at {SITE_NAME}.
          </Text>
          <Text style={footerText}>
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: RetestReminderEmail,
  subject: (data: Record<string, any>) =>
    data.name
      ? `${data.name}, can you beat your ${data.iqScore ?? ''} from two weeks ago?`
      : 'Can you beat your IQ score from two weeks ago?',
  displayName: 'Retest Reminder (Day 14)',
  previewData: {
    name: 'Alex',
    iqScore: 118,
    percentile: 88,
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'Arial', 'Helvetica', sans-serif" }
const container = { padding: '20px 25px', maxWidth: '560px', margin: '0 auto' }
const headerSection = { textAlign: 'center' as const, padding: '20px 0 10px' }
const logoText = { fontSize: '18px', fontWeight: 'bold', color: '#0A0E1A', margin: '0' }
const heading = { fontSize: '22px', fontWeight: 'bold', color: '#0A0E1A', margin: '0 0 12px' }
const subheading = { fontSize: '14px', color: '#55575d', lineHeight: '1.6', margin: '0 0 5px' }
const sectionLabel = { fontSize: '10px', fontWeight: 'bold', color: '#8B5CF6', letterSpacing: '1px', textTransform: 'uppercase' as const, margin: '0 0 10px' }
const bodyText = { fontSize: '14px', color: '#333', lineHeight: '1.6', margin: '0 0 12px' }
const divider = { borderColor: '#e5e7eb', margin: '20px 0' }
const ctaButton = {
  backgroundColor: '#8B5CF6',
  color: '#ffffff',
  padding: '13px 28px',
  borderRadius: '8px',
  fontSize: '15px',
  fontWeight: 'bold',
  textDecoration: 'none',
  display: 'inline-block' as const,
}
const footerText = { fontSize: '11px', color: '#999', margin: '4px 0', textAlign: 'center' as const }
