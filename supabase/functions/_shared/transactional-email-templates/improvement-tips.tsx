import * as React from 'npm:react@18.3.1'
import {
  Body, Button, Container, Head, Heading, Hr, Html, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "MyIQScores"
const IMPROVE_PAGE = "https://www.myiqscores.com/how-to-improve-iq"

interface ImprovementTipsProps {
  name?: string
  iqScore?: number
}

const ImprovementTipsEmail = ({ name, iqScore = 100 }: ImprovementTipsProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>
      3 science-backed ways to raise your IQ score — backed by research
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={headerSection}>
          <Text style={logoText}>🧠 {SITE_NAME}</Text>
        </Section>

        <Section>
          <Heading style={heading}>
            3 ways to raise your IQ score{name ? `, ${name}` : ''}
          </Heading>
          <Text style={subheading}>
            IQ is not fixed. Research shows targeted interventions produce measurable, lasting gains. Here's what the evidence supports.
          </Text>
        </Section>

        <Hr style={divider} />

        <Section>
          <Text style={tipNumber}>1</Text>
          <Text style={tipTitle}>Aerobic exercise (30 min, 3×/week)</Text>
          <Text style={tipText}>
            Meta-analyses spanning 30+ RCTs show aerobic exercise reliably improves working memory, processing speed, and executive function — the three primary drivers of fluid IQ. Effect sizes are largest for HIIT and sustained moderate-intensity cardio. Six weeks of consistent aerobic exercise produces statistically significant fluid intelligence gains.
          </Text>
        </Section>

        <Hr style={divider} />

        <Section>
          <Text style={tipNumber}>2</Text>
          <Text style={tipTitle}>Sleep optimization (7–9 hours, consistent schedule)</Text>
          <Text style={tipText}>
            Chronic sleep restriction (6h or less) reduces working memory capacity, processing speed, and executive function by amounts equivalent to a 10–15 IQ point deficit. The good news: these deficits are fully reversible with adequate sleep. A consistent sleep schedule also improves NREM slow-wave sleep, which is critical for memory consolidation.
          </Text>
        </Section>

        <Hr style={divider} />

        <Section>
          <Text style={tipNumber}>3</Text>
          <Text style={tipTitle}>Dual n-back training (20 min/day)</Text>
          <Text style={tipText}>
            Dual n-back training is the most rigorously studied cognitive intervention. A 2008 Science study (Jaeggi et al.) found 19 days of dual n-back training improved fluid intelligence scores by a statistically significant margin, with gains transferring to untrained IQ tasks. It's free, measurable, and evidence-backed.
          </Text>
        </Section>

        <Hr style={divider} />

        <Section style={{ textAlign: 'center' as const }}>
          <Button style={ctaButton} href={IMPROVE_PAGE}>
            Read the Full Improvement Guide →
          </Button>
          <Text style={noteText}>
            Includes citations for all research referenced above.
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
  component: ImprovementTipsEmail,
  subject: (data: Record<string, any>) =>
    data.name
      ? `${data.name}, 3 science-backed ways to improve your IQ`
      : '3 science-backed ways to improve your IQ score',
  displayName: 'Improvement Tips (Day 3)',
  previewData: {
    name: 'Alex',
    iqScore: 114,
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'Arial', 'Helvetica', sans-serif" }
const container = { padding: '20px 25px', maxWidth: '560px', margin: '0 auto' }
const headerSection = { textAlign: 'center' as const, padding: '20px 0 10px' }
const logoText = { fontSize: '18px', fontWeight: 'bold', color: '#0A0E1A', margin: '0' }
const heading = { fontSize: '22px', fontWeight: 'bold', color: '#0A0E1A', margin: '0 0 12px' }
const subheading = { fontSize: '14px', color: '#55575d', lineHeight: '1.6', margin: '0 0 5px' }
const tipNumber = { fontSize: '32px', fontWeight: 'bold', color: '#00E5FF', margin: '0 0 4px', lineHeight: '1' }
const tipTitle = { fontSize: '16px', fontWeight: 'bold', color: '#0A0E1A', margin: '0 0 8px' }
const tipText = { fontSize: '14px', color: '#333', lineHeight: '1.6', margin: '0 0 5px' }
const divider = { borderColor: '#e5e7eb', margin: '20px 0' }
const ctaButton = {
  backgroundColor: '#00E5FF',
  color: '#0A0E1A',
  padding: '13px 28px',
  borderRadius: '8px',
  fontSize: '15px',
  fontWeight: 'bold',
  textDecoration: 'none',
  display: 'inline-block' as const,
}
const noteText = { fontSize: '11px', color: '#999', margin: '10px 0 0', textAlign: 'center' as const }
const footerText = { fontSize: '11px', color: '#999', margin: '4px 0', textAlign: 'center' as const }
