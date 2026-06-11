import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What IQ do you need for Mensa?",
      acceptedAnswer: { "@type": "Answer", text: "Mensa requires a score at or above the 98th percentile on a standardized intelligence test. On most IQ tests using a standard deviation of 15, this corresponds to an IQ of approximately 130 or higher. On tests with a standard deviation of 16 (like the Stanford-Binet), the cutoff is about 132." }},
    { "@type": "Question", name: "How do I join Mensa?",
      acceptedAnswer: { "@type": "Answer", text: "You can join Mensa by either taking the Mensa Admission Test (offered at local chapters) or submitting qualifying scores from a previously taken standardized intelligence test (WAIS, Stanford-Binet, GRE, etc.). Prior qualifying test scores are accepted if they meet the 98th percentile threshold." }},
    { "@type": "Question", name: "What percentage of people qualify for Mensa?",
      acceptedAnswer: { "@type": "Answer", text: "Exactly 2% of the population qualifies for Mensa membership (the top 2nd percentile, or 98th percentile and above). That's about 1 in 50 people. In the US, this means approximately 6.6 million people qualify, though only about 50,000 are actually members." }},
    { "@type": "Question", name: "Is the Mensa test the same as an IQ test?",
      acceptedAnswer: { "@type": "Answer", text: "The Mensa Admission Test is a culture-fair intelligence test that correlates highly with standard IQ tests. It produces a percentile ranking rather than a traditional IQ score. A score at the 98th percentile on the Mensa test is equivalent to approximately 130 IQ on most standard tests." }},
  ],
};

const MensaIQ = () => (
  <ContentPage>
    <SEOHead
      title="Mensa IQ Test: Score Required & How to Join | MyIQScores"
      description="What IQ do you need for Mensa? You need a score in the top 2% (IQ 130+). Learn about the Mensa test, how to qualify, accepted tests, and what membership offers."
      canonicalUrl="/mensa-iq-test"
      ogType="article"
      jsonLd={faqSchema}
    />

    <h1><span className="gradient-text">Mensa IQ Test:</span> How to Qualify & Join</h1>

    <p>
      Mensa is the world's oldest and largest high-IQ society, with over 145,000 members in 90+
      countries. To join, you need to score in the <strong>top 2%</strong> of the population on a
      standardized intelligence test — that's an IQ of approximately{" "}
      <Link to="/is-130-iq-good">130 or higher</Link>. Here's everything you need to know about
      qualifying, testing, and what membership actually involves.
    </p>

    <h2>Mensa IQ Requirements</h2>
    <div className="glass-card p-6 text-center rounded-xl my-8">
      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Minimum IQ for Mensa</p>
      <p className="font-heading font-bold text-4xl gradient-text">130+</p>
      <p className="text-sm text-muted-foreground mt-2">98th percentile — top 2% of population</p>
    </div>

    <p>
      The exact score depends on which test you take:
    </p>
    <table>
      <thead>
        <tr><th>IQ Test</th><th>Standard Deviation</th><th>Mensa Cutoff Score</th></tr>
      </thead>
      <tbody>
        <tr><td>WAIS (Wechsler)</td><td>15</td><td>130</td></tr>
        <tr><td>Stanford-Binet 5</td><td>15</td><td>130</td></tr>
        <tr><td>Stanford-Binet (older)</td><td>16</td><td>132</td></tr>
        <tr><td>Cattell</td><td>24</td><td>148</td></tr>
        <tr><td>Mensa Admission Test</td><td>N/A</td><td>98th percentile</td></tr>
      </tbody>
    </table>

    <h2>How to Take the Mensa Test</h2>
    <p>There are two ways to qualify for Mensa:</p>

    <h3>Option 1: Take the Mensa Admission Test</h3>
    <p>
      American Mensa offers its own admission test at local chapter events nationwide. The test
      costs about $40 and takes approximately 90 minutes. It includes two separate tests: the Mensa
      Admission Test (a culture-fair reasoning test) and the Mensa Wonderlic-style test. You receive
      your results within a few weeks. If you score at the 98th percentile on either test, you qualify.
    </p>

    <h3>Option 2: Submit Prior Test Scores</h3>
    <p>
      Mensa accepts qualifying scores from over 200 standardized tests, including:
    </p>
    <ul>
      <li><strong>WAIS or WISC</strong> — score of 130+ (the gold standard)</li>
      <li><strong>Stanford-Binet</strong> — score of 130+ (SD 15) or 132+ (SD 16)</li>
      <li><strong>GRE</strong> — combined score of 1300+ (old scale) or approximate equivalent</li>
      <li><strong>SAT</strong> — score of 1250+ (pre-1994) — see our <Link to="/sat-to-iq">SAT to IQ conversion</Link></li>
      <li><strong>LSAT</strong> — score in the 95th+ percentile</li>
      <li><strong>ACT</strong> — composite score of 29+</li>
      <li><strong>Military ASVAB</strong> — AFQT score of 95+</li>
    </ul>

    <h2>What Does Mensa Membership Get You?</h2>
    <ul>
      <li><strong>Local chapter events</strong> — social gatherings, lectures, game nights with other high-IQ members</li>
      <li><strong>Special Interest Groups (SIGs)</strong> — 200+ groups covering everything from astronomy to wine tasting</li>
      <li><strong>Mensa Bulletin</strong> — monthly magazine with puzzles, articles, and member content</li>
      <li><strong>Annual Gathering</strong> — national convention with speakers, workshops, and social events</li>
      <li><strong>Networking</strong> — connections with accomplished people across diverse fields</li>
      <li><strong>Scholarships</strong> — Mensa Foundation awards over $200,000 annually in scholarships</li>
    </ul>

    <h2>Is Mensa Worth Joining?</h2>
    <p>
      Opinions vary widely. Members report that the social connections and intellectual stimulation
      are the primary benefits — particularly for people who've felt intellectually isolated.
      Critics argue the $79/year dues aren't justified, and that defining yourself by an IQ score
      is limiting. The practical career value of Mensa membership is minimal — most employers
      don't care about it.
    </p>
    <p>
      The biggest value is typically for people who want to connect with intellectual peers in a
      low-pressure social environment. If that appeals to you, membership can be worthwhile.
    </p>

    <h2>How to Prepare for the Mensa Test</h2>
    <p>
      Since the Mensa test measures reasoning ability rather than knowledge, traditional "studying"
      doesn't apply. However, you can prepare by:
    </p>
    <ul>
      <li>Practicing pattern recognition and matrix reasoning puzzles (similar to Raven's Progressive Matrices)</li>
      <li>Getting adequate sleep the night before (sleep deprivation can reduce effective IQ by 5-10 points)</li>
      <li>Eating well and staying hydrated on test day</li>
      <li>Managing test anxiety through relaxation techniques</li>
      <li>Taking practice IQ tests to familiarize yourself with the format</li>
    </ul>
    <p>
      <Link to="/test">Our free IQ test</Link> can give you a rough estimate of where you stand
      before committing to the official Mensa test.
    </p>

    <h2>Frequently Asked Questions</h2>

    <h3>What IQ do you need for Mensa?</h3>
    <p>130+ on most standard IQ tests (98th percentile). See the table above for specific test cutoffs.</p>

    <h3>How do I join Mensa?</h3>
    <p>Take the Mensa Admission Test (~$40 at local chapters) or submit qualifying scores from a previously taken standardized test.</p>

    <h3>What percentage of people qualify for Mensa?</h3>
    <p>Exactly 2% — about 1 in 50 people. In the US, ~6.6 million qualify but only ~50,000 are members.</p>

    <h3>Is the Mensa test the same as an IQ test?</h3>
    <p>It's similar — a culture-fair reasoning test that produces a percentile score equivalent to approximately IQ 130 at the qualifying threshold.</p>

    <p className="mt-8">
      Curious if you could qualify? <Link to="/test">Take our free IQ test</Link> for a quick
      estimate. Or learn more about <Link to="/is-130-iq-good">what a 130 IQ means</Link> and{" "}
      <Link to="/genius-iq">genius-level intelligence</Link>.
    </p>
  </ContentPage>
);

export default MensaIQ;
