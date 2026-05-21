import * as React from 'npm:react@18.3.1'
import {
  Body, Button, Container, Head, Heading, Hr, Html, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "MyIQScores"
const CAREER_PAGE = "https://www.myiqscores.com/iq-by-career"
const TEST_LINK = "https://www.myiqscores.com"

interface CareerFitProps {
  name?: string
  iqScore?: number
  label?: string
  percentile?: number
}

const CareerFitEmail = ({
  name,
  iqScore = 100,
  label = 'Average',
  percentile = 50,
}: CareerFitProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>
      Which careers match an IQ of {iqScore}? Here's your cognitive career map.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={headerSection}>
          <Text style={logoText}>🧠 {SITE_NAME}</Text>
        </Section>

        <Section style={heroSection}>
          <Heading style={heading}>
            {name ? `${name}, which careers` : 'Which careers'} match your IQ?
          </Heading>
          <Text style={subheading}>
            Your score of <strong style={{ color: '#00E5FF' }}>{iqScore}</strong> ({label}, {percentile}th percentile) opens specific career paths — and closes others. Here's what the research says.
          </Text>
        </Section>

        <Hr style={divider} />

        <Section>
          <Text style={sectionLabel}>WHAT YOUR SCORE PREDICTS</Text>
          {iqScore >= 125 ? (
            <>
              <Text style={bodyText}>
                Scores above 125 correlate with high performance in roles requiring strategic reasoning, complex problem-solving, and multi-domain synthesis. Research by Schmidt &amp; Hunter (1998) found that IQ is the single strongest predictor of job performance across all occupational categories.
              </Text>
              <Text style={bodyText}>
                Fields where your cognitive profile is a strong match: law, medicine, research science, engineering leadership, finance strategy, and data science.
              </Text>
            </>
          ) : iqScore >= 110 ? (
            <>
              <Text style={bodyText}>
                Scores in the 110–124 range are well-suited for professional and technical careers requiring sustained abstract reasoning. This range represents the average IQ for most graduate-level professions.
              </Text>
              <Text style={bodyText}>
                Fields with strong career-IQ alignment at your score: accounting, software engineering, nursing, business analysis, and technical management.
              </Text>
            </>
          ) : (
            <>
              <Text style={bodyText}>
                Scores in the 90–109 range represent the most common professional IQ band. The majority of careers in healthcare support, skilled trades, teaching, and business operations fall squarely in this range.
              </Text>
              <Text style={bodyText}>
                Research consistently shows that within-field success depends more on conscientiousness, emotional intelligence, and domain knowledge than on raw IQ above a threshold.
              </Text>
            </>
          )}
        </Section>

        <Hr style={divider} />

        <Section style={{ textAlign: 'center' as const }}>
          <Text style={sectionLabel}>EXPLORE YOUR CAREER MAP</Text>
          <Text style={bodyText}>
            See average IQ ranges for 50+ careers — from surgeons to electricians — with research citations.
          </Text>
          <Button style={ctaButton} href={CAREER_PAGE}>
            See IQ by Career →
          </Button>
        </Section>

        <Hr style={divider} />

        <Section>
          <Text style={footerText}>
            You're receiving this because you completed the IQ test at {SITE_NAME}.{' '}
            To unsubscribe, click the link in the email footer or visit our unsubscribe page.
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
  component: CareerFitEmail,
  subject: (data: Record<string, any>) =>
    data.name
      ? `${data.name}, which careers match an IQ of ${data.iqScore ?? 100}?`
      : `Which careers match your IQ of ${data.iqScore ?? 100}?`,
  displayName: 'Career Fit (Day 1)',
  previewData: {
    name: 'Alex',
    iqScore: 121,
    label: 'Superior',
    percentile: 92,
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'Arial', 'Helvetica', sans-serif" }
const container = { padding: '20px 25px', maxWidth: '560px', margin: '0 auto' }
const headerSection = { textAlign: 'center' as const, padding: '20px 0 10px' }
const logoText = { fontSize: '18px', fontWeight: 'bold', color: '#0A0E1A', margin: '0' }
const heroSection = { padding: '10px 0 5px' }
const heading = { fontSize: '22px', fontWeight: 'bold', color: '#0A0E1A', margin: '0 0 12px' }
const subheading = { fontSize: '15px', color: '#55575d', lineHeight: '1.6', margin: '0 0 5px' }
const sectionLabel = { fontSize: '10px', fontWeight: 'bold', color: '#8B5CF6', letterSpacing: '1px', textTransform: 'uppercase' as const, margin: '0 0 8px' }
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
