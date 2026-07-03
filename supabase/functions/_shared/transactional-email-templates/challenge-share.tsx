import * as React from 'npm:react@18.3.1'
import {
  Body, Button, Container, Head, Heading, Hr, Html, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "MyIQScores"
const TEST_LINK = "https://www.myiqscores.com"

interface ChallengeShareProps {
  name?: string
  iqScore?: number
  percentile?: number
}

const ChallengeShareEmail = ({ name, iqScore = 100, percentile = 50 }: ChallengeShareProps) => {
  const challengeUrl = `${TEST_LINK}/share?s=${iqScore}&p=${percentile}`
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>
        You scored {String(iqScore)}. Think your friends can beat it?
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={headerSection}>
            <Text style={logoText}>🧠 {SITE_NAME}</Text>
          </Section>

          <Section>
            <Heading style={heading}>
              {name ? `${name}, y` : 'Y'}ou scored {iqScore}. Think your friends can beat it?
            </Heading>
            <Text style={subheading}>
              Your score put you in the {percentile}th percentile. Here's the fun part: most people
              overestimate how they'd do — until they take the test.
            </Text>
          </Section>

          <Hr style={divider} />

          <Section style={scoreBox}>
            <Text style={scoreLabel}>YOUR SCORE TO BEAT</Text>
            <Text style={scoreText}>{iqScore}</Text>
            <Text style={scorePercentile}>{percentile}th percentile</Text>
          </Section>

          <Hr style={divider} />

          <Section>
            <Text style={sectionLabel}>HOW THE CHALLENGE WORKS</Text>
            <Text style={bodyText}>
              1. Send your challenge link to a friend (or your group chat).
            </Text>
            <Text style={bodyText}>
              2. They take the same free 30-question test — no sign-up needed.
            </Text>
            <Text style={bodyText}>
              3. Their result shows up side-by-side with your {iqScore}. Bragging rights settled.
            </Text>
          </Section>

          <Section style={{ textAlign: 'center' as const }}>
            <Button style={ctaButton} href={challengeUrl}>
              Get My Challenge Link →
            </Button>
            <Text style={{ fontSize: '12px', color: '#999', margin: '10px 0 0', textAlign: 'center' as const }}>
              Or forward this email — the link above carries your score.
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
}

export const template = {
  component: ChallengeShareEmail,
  subject: (data: Record<string, any>) =>
    data.name
      ? `${data.name}, think your friends can beat ${data.iqScore ?? 'your score'}?`
      : `Think your friends can beat your IQ score?`,
  displayName: 'Challenge a Friend (Day 2)',
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
const scoreBox = {
  backgroundColor: '#f8f9ff',
  borderLeft: '4px solid #8B5CF6',
  padding: '20px',
  borderRadius: '0 8px 8px 0',
  textAlign: 'center' as const,
}
const scoreLabel = { fontSize: '11px', fontWeight: 'bold', color: '#8B5CF6', letterSpacing: '1px', margin: '0 0 6px' }
const scoreText = { fontSize: '40px', fontWeight: 'bold', color: '#0A0E1A', lineHeight: '1.1', margin: '0' }
const scorePercentile = { fontSize: '13px', color: '#55575d', margin: '4px 0 0' }
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
