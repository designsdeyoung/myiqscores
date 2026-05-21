import * as React from 'npm:react@18.3.1'
import {
  Body, Button, Container, Head, Heading, Hr, Html, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "MyIQScores"
const TEST_LINK = "https://www.myiqscores.com"
const PRACTICE_LINK = "https://www.myiqscores.com/practice-iq-test"

interface BrainTeaserProps {
  name?: string
  iqScore?: number
}

const BrainTeaserEmail = ({ name, iqScore = 100 }: BrainTeaserProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>
      Can you solve this in under 30 seconds? Most people can't.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={headerSection}>
          <Text style={logoText}>🧠 {SITE_NAME}</Text>
        </Section>

        <Section>
          <Heading style={heading}>
            {name ? `${name}, c` : 'C'}an you solve this in 30 seconds?
          </Heading>
          <Text style={subheading}>
            Most people — including those with above-average IQs — get this wrong on first attempt. It's a classic logical reasoning problem used in cognitive research.
          </Text>
        </Section>

        <Hr style={divider} />

        <Section style={puzzleBox}>
          <Text style={puzzleLabel}>🎯 THE PUZZLE</Text>
          <Text style={puzzleText}>
            A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the ball. How much does the ball cost?
          </Text>
        </Section>

        <Hr style={divider} />

        <Section>
          <Text style={sectionLabel}>WHAT MOST PEOPLE ANSWER</Text>
          <Text style={bodyText}>
            <strong>10 cents.</strong> And they're wrong.
          </Text>
          <Text style={bodyText}>
            If the ball costs $0.10, then the bat costs $1.10, making the total $1.20 — not $1.10. This is the "cognitive reflection" trap: the intuitive answer is wrong, and catching it requires deliberate thinking.
          </Text>
          <Text style={bodyText}>
            <strong>The correct answer: 5 cents.</strong> The ball costs $0.05 and the bat costs $1.05. Total: $1.10. ✓
          </Text>
          <Text style={bodyText}>
            This is the most famous item from the Cognitive Reflection Test (CRT), developed by Shane Frederick at MIT (2005). Research found that only 17% of college students answered it correctly without prompting. Higher IQ individuals solve it more reliably — but it still requires deliberate, System 2 thinking regardless of raw ability.
          </Text>
        </Section>

        <Hr style={divider} />

        <Section style={{ textAlign: 'center' as const }}>
          <Text style={sectionLabel}>WANT MORE LIKE THIS?</Text>
          <Text style={bodyText}>
            Our practice IQ test includes questions calibrated to the same cognitive domains used in professional assessments.
          </Text>
          <Button style={ctaButton} href={PRACTICE_LINK}>
            Try the Practice IQ Test →
          </Button>
          <Text style={{ fontSize: '12px', color: '#999', margin: '10px 0 0', textAlign: 'center' as const }}>
            Or <a href={TEST_LINK} style={{ color: '#8B5CF6' }}>retake the full IQ test</a> to see if your score has changed.
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
  component: BrainTeaserEmail,
  subject: (data: Record<string, any>) =>
    data.name
      ? `${data.name}, can you solve this in 30 seconds?`
      : 'Can you solve this in 30 seconds? Most people can\'t.',
  displayName: 'Brain Teaser (Day 7)',
  previewData: {
    name: 'Alex',
    iqScore: 118,
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'Arial', 'Helvetica', sans-serif" }
const container = { padding: '20px 25px', maxWidth: '560px', margin: '0 auto' }
const headerSection = { textAlign: 'center' as const, padding: '20px 0 10px' }
const logoText = { fontSize: '18px', fontWeight: 'bold', color: '#0A0E1A', margin: '0' }
const heading = { fontSize: '22px', fontWeight: 'bold', color: '#0A0E1A', margin: '0 0 12px' }
const subheading = { fontSize: '14px', color: '#55575d', lineHeight: '1.6', margin: '0 0 5px' }
const puzzleBox = {
  backgroundColor: '#f8f9ff',
  borderLeft: '4px solid #8B5CF6',
  padding: '20px',
  borderRadius: '0 8px 8px 0',
}
const puzzleLabel = { fontSize: '11px', fontWeight: 'bold', color: '#8B5CF6', letterSpacing: '1px', margin: '0 0 10px' }
const puzzleText = { fontSize: '18px', fontWeight: 'bold', color: '#0A0E1A', lineHeight: '1.5', margin: '0' }
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
