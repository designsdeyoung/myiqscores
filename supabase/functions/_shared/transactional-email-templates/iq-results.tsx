import * as React from 'npm:react@18.3.1'
import {
  Body, Button, Container, Head, Heading, Hr, Html, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "MyIQScores"
const PREMIUM_REPORT_LINK = "https://buy.stripe.com/14AbJ0eH5cmJ9z48oSasg00"

interface IQResultsProps {
  name?: string
  iqScore?: number
  label?: string
  percentile?: number
  correctCount?: number
  totalQuestions?: number
}

const IQResultsEmail = ({
  name,
  iqScore = 100,
  label = 'Average',
  percentile = 50,
  correctCount = 15,
  totalQuestions = 30,
}: IQResultsProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>
      {name ? `${name}, your` : 'Your'} IQ Score is {iqScore} — See your full report
    </Preview>
    <Body style={main}>
      <Container style={container}>
        {/* Header */}
        <Section style={headerSection}>
          <Text style={logoText}>🧠 {SITE_NAME}</Text>
        </Section>

        {/* Score Hero */}
        <Section style={scoreSection}>
          <Heading style={greeting}>
            {name ? `${name}, here are your results` : 'Here are your results'}
          </Heading>
          <Text style={scoreNumber}>{iqScore}</Text>
          <Text style={scoreLabel}>{label}</Text>
          <Text style={percentileText}>
            You scored higher than {percentile}% of test takers
          </Text>
        </Section>

        <Hr style={divider} />

        {/* Stats */}
        <Section style={statsSection}>
          <Text style={statLine}>
            ✅ Correct Answers: {correctCount}/{totalQuestions}
          </Text>
          <Text style={statLine}>
            📊 IQ Score: {iqScore}
          </Text>
          <Text style={statLine}>
            🏆 Percentile: Top {100 - percentile}%
          </Text>
        </Section>

        <Hr style={divider} />

        {/* Upsell */}
        <Section style={upsellSection}>
          <Heading style={upsellHeading}>
            🔓 Unlock Your Full Cognitive Report
          </Heading>
          <Text style={upsellText}>
            Get a detailed 12-page analysis of your cognitive strengths,
            weaknesses, and a personalized improvement plan.
          </Text>
          <Text style={discountText}>
            🎁 24-Hour Exclusive Discount — 60% Off
          </Text>
          <Text style={priceRow}>
            <span style={oldPrice}>$19.99</span>{' '}
            <span style={newPrice}>$7.99</span>
          </Text>
          <Button style={ctaButton} href={PREMIUM_REPORT_LINK}>
            Get My Full Report — $7.99
          </Button>
          <Text style={guaranteeText}>
            🔒 Secure payment via Stripe · 30-day money-back guarantee
          </Text>
        </Section>

        <Hr style={divider} />

        {/* Footer */}
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
  component: IQResultsEmail,
  subject: (data: Record<string, any>) =>
    data.name
      ? `${data.name}, your IQ score is ${data.iqScore ?? 'ready'}!`
      : `Your IQ score is ${data.iqScore ?? 'ready'}!`,
  displayName: 'IQ Test Results',
  previewData: {
    name: 'Alex',
    iqScore: 121,
    label: 'Superior',
    percentile: 92,
    correctCount: 23,
    totalQuestions: 30,
  },
} satisfies TemplateEntry

// Styles
const main = { backgroundColor: '#ffffff', fontFamily: "'Arial', 'Helvetica', sans-serif" }
const container = { padding: '20px 25px', maxWidth: '560px', margin: '0 auto' }
const headerSection = { textAlign: 'center' as const, padding: '20px 0 10px' }
const logoText = { fontSize: '18px', fontWeight: 'bold', color: '#0A0E1A', margin: '0' }
const scoreSection = { textAlign: 'center' as const, padding: '10px 0' }
const greeting = { fontSize: '20px', fontWeight: 'bold', color: '#0A0E1A', margin: '0 0 20px' }
const scoreNumber = { fontSize: '64px', fontWeight: 'bold', color: '#00E5FF', margin: '0', lineHeight: '1.1' }
const scoreLabel = { fontSize: '18px', fontWeight: '600', color: '#8B5CF6', margin: '5px 0 15px' }
const percentileText = { fontSize: '14px', color: '#55575d', margin: '0' }
const divider = { borderColor: '#e5e7eb', margin: '25px 0' }
const statsSection = { padding: '0' }
const statLine = { fontSize: '14px', color: '#333', margin: '6px 0', lineHeight: '1.5' }
const upsellSection = { textAlign: 'center' as const, padding: '0' }
const upsellHeading = { fontSize: '18px', fontWeight: 'bold', color: '#0A0E1A', margin: '0 0 10px' }
const upsellText = { fontSize: '14px', color: '#55575d', lineHeight: '1.5', margin: '0 0 15px' }
const discountText = { fontSize: '15px', fontWeight: 'bold', color: '#22c55e', margin: '0 0 10px' }
const priceRow = { fontSize: '14px', margin: '0 0 15px' }
const oldPrice = { textDecoration: 'line-through', color: '#999' }
const newPrice = { fontSize: '22px', fontWeight: 'bold', color: '#22c55e' }
const ctaButton = {
  backgroundColor: '#22c55e',
  color: '#ffffff',
  padding: '14px 30px',
  borderRadius: '8px',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  display: 'inline-block' as const,
}
const guaranteeText = { fontSize: '11px', color: '#999', margin: '12px 0 0' }
const footerText = { fontSize: '11px', color: '#999', margin: '4px 0', textAlign: 'center' as const }
