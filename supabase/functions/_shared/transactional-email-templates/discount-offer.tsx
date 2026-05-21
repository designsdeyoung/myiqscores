import * as React from 'npm:react@18.3.1'
import {
  Body, Button, Container, Head, Heading, Hr, Html, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "MyIQScores"
const PREMIUM_REPORT_LINK = "https://buy.stripe.com/14AbJ0eH5cmJ9z48oSasg00"

interface DiscountOfferProps {
  name?: string
  iqScore?: number
  label?: string
}

const DiscountOfferEmail = ({ name, iqScore = 100, label = 'Average' }: DiscountOfferProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>
      Last chance: 60% off your full cognitive report — offer expires tonight
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={headerSection}>
          <Text style={logoText}>🧠 {SITE_NAME}</Text>
        </Section>

        <Section style={{ textAlign: 'center' as const }}>
          <Text style={urgencyBadge}>⏳ FINAL OFFER — EXPIRES TONIGHT</Text>
          <Heading style={heading}>
            {name ? `${name}, your` : 'Your'} full cognitive report is 60% off
          </Heading>
          <Text style={scoreReminder}>
            IQ {iqScore} · {label}
          </Text>
        </Section>

        <Hr style={divider} />

        <Section>
          <Text style={sectionLabel}>WHAT'S IN YOUR FULL REPORT</Text>
          <Text style={featureItem}>📊 12-page breakdown of all 5 cognitive domains</Text>
          <Text style={featureItem}>🎯 Personalized strengths &amp; weakness analysis</Text>
          <Text style={featureItem}>📈 Your score vs. profession-specific benchmarks</Text>
          <Text style={featureItem}>🧩 Domain-specific improvement plan with exercises</Text>
          <Text style={featureItem}>🎓 IQ certificate (printable PDF)</Text>
          <Text style={featureItem}>📚 Research citations for your score range</Text>
        </Section>

        <Hr style={divider} />

        <Section style={{ textAlign: 'center' as const }}>
          <Text style={oldPriceText}>Regular price: $19.99</Text>
          <Text style={newPriceText}>$7.99 tonight only</Text>
          <Text style={savingsText}>You save $12.00 — 60% off</Text>
          <Button style={ctaButton} href={PREMIUM_REPORT_LINK}>
            Get My Full Report — $7.99
          </Button>
          <Text style={guaranteeText}>
            🔒 Secure Stripe checkout · 30-day money-back guarantee · Instant delivery
          </Text>
        </Section>

        <Hr style={divider} />

        <Section>
          <Text style={footerText}>
            This discount offer is only available to IQ test completers and expires at midnight.
          </Text>
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
  component: DiscountOfferEmail,
  subject: (data: Record<string, any>) =>
    data.name
      ? `${data.name}, 60% off your full IQ report — expires tonight`
      : '60% off your full cognitive report — expires tonight',
  displayName: 'Discount Offer (Day 5)',
  previewData: {
    name: 'Alex',
    iqScore: 121,
    label: 'Superior',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'Arial', 'Helvetica', sans-serif" }
const container = { padding: '20px 25px', maxWidth: '560px', margin: '0 auto' }
const headerSection = { textAlign: 'center' as const, padding: '20px 0 10px' }
const logoText = { fontSize: '18px', fontWeight: 'bold', color: '#0A0E1A', margin: '0' }
const urgencyBadge = { fontSize: '11px', fontWeight: 'bold', color: '#ef4444', letterSpacing: '1px', textAlign: 'center' as const, margin: '0 0 12px' }
const heading = { fontSize: '22px', fontWeight: 'bold', color: '#0A0E1A', margin: '0 0 8px' }
const scoreReminder = { fontSize: '14px', color: '#8B5CF6', fontWeight: 'bold', margin: '0 0 5px', textAlign: 'center' as const }
const sectionLabel = { fontSize: '10px', fontWeight: 'bold', color: '#8B5CF6', letterSpacing: '1px', textTransform: 'uppercase' as const, margin: '0 0 12px' }
const featureItem = { fontSize: '14px', color: '#333', lineHeight: '1.5', margin: '0 0 8px' }
const divider = { borderColor: '#e5e7eb', margin: '20px 0' }
const oldPriceText = { fontSize: '13px', color: '#999', textDecoration: 'line-through', textAlign: 'center' as const, margin: '0 0 4px' }
const newPriceText = { fontSize: '36px', fontWeight: 'bold', color: '#22c55e', textAlign: 'center' as const, margin: '0 0 4px', lineHeight: '1.1' }
const savingsText = { fontSize: '13px', color: '#22c55e', fontWeight: 'bold', textAlign: 'center' as const, margin: '0 0 16px' }
const ctaButton = {
  backgroundColor: '#22c55e',
  color: '#ffffff',
  padding: '14px 32px',
  borderRadius: '8px',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  display: 'inline-block' as const,
}
const guaranteeText = { fontSize: '11px', color: '#999', margin: '12px 0 0', textAlign: 'center' as const }
const footerText = { fontSize: '11px', color: '#999', margin: '4px 0', textAlign: 'center' as const }
