import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What are the main types of IQ tests?",
      acceptedAnswer: { "@type": "Answer", text: "The most widely used IQ tests are the WAIS (Wechsler Adult Intelligence Scale), Stanford-Binet, Raven's Progressive Matrices, and the Cattell Culture Fair test. Each measures slightly different aspects of cognitive ability. The WAIS is the gold standard for clinical assessment." }},
    { "@type": "Question", name: "Which IQ test is most accurate?",
      acceptedAnswer: { "@type": "Answer", text: "The WAIS-IV (Wechsler Adult Intelligence Scale) is considered the most accurate and comprehensive IQ test for adults. It measures verbal comprehension, perceptual reasoning, working memory, and processing speed across multiple subtests, producing the most reliable results." }},
    { "@type": "Question", name: "Are online IQ tests accurate?",
      acceptedAnswer: { "@type": "Answer", text: "Most online IQ tests are not clinically validated and may overestimate scores by 10-20 points. They can provide a rough estimate but should not be treated as accurate measurements. For a reliable IQ score, take a professionally administered test like the WAIS from a licensed psychologist." }},
  ],
};

const TypesOfIQTests = () => (
  <ContentPage>
    <SEOHead
      title="Types of IQ Tests: WAIS, Stanford-Binet, Raven's & More"
      description="Compare the main types of IQ tests: WAIS, Stanford-Binet, Raven's Progressive Matrices, and more. Learn which test is most accurate and what each measures."
      canonicalUrl="/types-of-iq-tests"
      ogType="article"
      jsonLd={faqSchema}
    />

    <h1>Types of IQ Tests: <span className="gradient-text">Complete Guide to Intelligence Testing</span></h1>

    <p>
      Not all IQ tests are created equal. From the gold-standard clinical WAIS to free online
      assessments, IQ tests vary enormously in what they measure, how accurate they are, and what
      their scores mean. Here's a complete breakdown of every major IQ test type, who they're
      designed for, and which ones actually produce reliable results.
    </p>

    <h2>The Major Clinical IQ Tests</h2>

    <h3>WAIS — Wechsler Adult Intelligence Scale</h3>
    <p>
      The <strong>WAIS-IV</strong> is the gold standard for adult IQ testing worldwide. Developed
      by David Wechsler, it measures four cognitive domains across 10 core subtests:
    </p>
    <ul>
      <li><strong>Verbal Comprehension</strong> — vocabulary, similarities, information</li>
      <li><strong>Perceptual Reasoning</strong> — block design, matrix reasoning, visual puzzles</li>
      <li><strong>Working Memory</strong> — digit span, arithmetic</li>
      <li><strong>Processing Speed</strong> — symbol search, coding</li>
    </ul>
    <p>
      The WAIS produces a Full Scale IQ score (mean 100, SD 15) and is administered one-on-one by
      a licensed psychologist over 1-2 hours. It costs $200-$500 depending on the provider. This
      is the test to take if you want the most reliable, comprehensive IQ measurement. See our{" "}
      <Link to="/iq-score-ranges">IQ score ranges guide</Link> for what WAIS scores mean.
    </p>

    <h3>WISC — Wechsler Intelligence Scale for Children</h3>
    <p>
      The <strong>WISC-V</strong> is the WAIS equivalent for children ages 6-16. It measures the
      same four domains plus a fifth (Fluid Reasoning) and is the most commonly used test for
      identifying giftedness and learning disabilities in children. Schools often use the WISC
      for special education eligibility. See our <Link to="/iq-by-age/children">children's IQ page</Link>.
    </p>

    <h3>Stanford-Binet Intelligence Scales</h3>
    <p>
      The <strong>Stanford-Binet 5</strong> has the longest history of any IQ test, originating
      from Alfred Binet's 1905 test. The current version measures five factors: Fluid Reasoning,
      Knowledge, Quantitative Reasoning, Visual-Spatial Processing, and Working Memory. It's
      used for ages 2 through adulthood and is particularly useful for testing at the extremes
      (very high or very low IQ). Learn more about <Link to="/what-is-iq">the history of IQ testing</Link>.
    </p>

    <h3>Raven's Progressive Matrices</h3>
    <p>
      <strong>Raven's SPM</strong> (Standard Progressive Matrices) is a non-verbal test that
      measures fluid intelligence — abstract reasoning without relying on language or cultural
      knowledge. Test-takers complete visual patterns of increasing difficulty. It's widely used
      in cross-cultural research because it minimizes language and cultural bias. The test takes
      about 45 minutes and produces a percentile ranking.
    </p>

    <h3>Cattell Culture Fair Intelligence Test</h3>
    <p>
      Designed to minimize cultural and educational bias, the <strong>Cattell CFIT</strong> uses
      abstract shapes and patterns rather than language-dependent questions. It primarily measures
      fluid intelligence and is useful for testing individuals from different cultural backgrounds.
      <Link to="/mensa-iq-test"> Mensa</Link> uses the Cattell scale (SD 24) alongside other tests.
    </p>

    <h2>Specialized and Screening Tests</h2>

    <h3>Wonderlic Personnel Test</h3>
    <p>
      The <strong>Wonderlic</strong> is a 12-minute, 50-question test widely used in employment
      screening, most famously by the NFL at the Scouting Combine. It measures general cognitive
      ability and produces scores from 0-50 (average ~20, roughly equivalent to IQ 100). It's
      quick but less comprehensive than full clinical tests.
    </p>

    <h3>Cognitive Abilities Test (CogAT)</h3>
    <p>
      The <strong>CogAT</strong> is commonly used in US schools for gifted program placement.
      It measures verbal, quantitative, and nonverbal reasoning in children grades K-12. While
      not technically an IQ test, CogAT scores correlate highly with IQ and are used similarly.
    </p>

    <h3>Kaufman Assessment Battery for Children (KABC)</h3>
    <p>
      The <strong>KABC-II</strong> is designed to be more culturally fair than the WISC, with
      less emphasis on verbal skills. It measures simultaneous processing, sequential processing,
      planning, learning, and knowledge. It's often used when traditional IQ tests may
      disadvantage children from non-English-speaking backgrounds.
    </p>

    <h2>Online IQ Tests: Are They Accurate?</h2>
    <p>
      Most online IQ tests are <strong>not clinically validated</strong> and should be treated as
      entertainment rather than accurate measurement. Common issues include:
    </p>
    <ul>
      <li><strong>Score inflation</strong> — many online tests overestimate IQ by 10-20 points to make users feel good and share results</li>
      <li><strong>No standardization</strong> — they aren't normed on representative populations</li>
      <li><strong>No proctoring</strong> — users can look up answers or take the test multiple times</li>
      <li><strong>Limited subtests</strong> — most only measure one or two cognitive domains</li>
      <li><strong>Self-selection bias</strong> — people who take online IQ tests aren't representative of the general population</li>
    </ul>
    <p>
      That said, well-designed online tests can provide a <strong>rough estimate</strong> (±10-15
      points) of your cognitive ability. <Link to="/test">Our free IQ test</Link> uses pattern
      recognition and logical reasoning questions similar to those on standardized tests.
      For a precise measurement, consult a licensed psychologist.
    </p>

    <h2>IQ Test Comparison Table</h2>
    <table>
      <thead>
        <tr><th>Test</th><th>Ages</th><th>Duration</th><th>Cost</th><th>Accuracy</th></tr>
      </thead>
      <tbody>
        <tr><td>WAIS-IV</td><td>16-90</td><td>1-2 hours</td><td>$200-500</td><td>Gold standard</td></tr>
        <tr><td>WISC-V</td><td>6-16</td><td>1-2 hours</td><td>$200-500</td><td>Gold standard (children)</td></tr>
        <tr><td>Stanford-Binet 5</td><td>2-85+</td><td>45-90 min</td><td>$200-500</td><td>Excellent</td></tr>
        <tr><td>Raven's SPM</td><td>5-65</td><td>45 min</td><td>$50-200</td><td>Good (fluid IQ only)</td></tr>
        <tr><td>Cattell CFIT</td><td>4-adult</td><td>30 min</td><td>$50-150</td><td>Good (culture-fair)</td></tr>
        <tr><td>Wonderlic</td><td>Adult</td><td>12 min</td><td>$5-25</td><td>Moderate (screening)</td></tr>
        <tr><td><Link to="/mensa-iq-test">Mensa Test</Link></td><td>Adult</td><td>90 min</td><td>~$40</td><td>Good (qualifying only)</td></tr>
        <tr><td>Online tests</td><td>Varies</td><td>15-30 min</td><td>Free-$20</td><td>Low-moderate</td></tr>
      </tbody>
    </table>

    <h2>How to Choose the Right IQ Test</h2>
    <ul>
      <li><strong>For clinical diagnosis</strong> (learning disability, giftedness): WAIS or WISC from a licensed psychologist</li>
      <li><strong>For <Link to="/mensa-iq-test">Mensa qualification</Link></strong>: Mensa Admission Test or qualifying score on WAIS/Stanford-Binet</li>
      <li><strong>For cross-cultural comparison</strong>: Raven's Progressive Matrices or Cattell CFIT</li>
      <li><strong>For employment screening</strong>: Wonderlic (employer-administered)</li>
      <li><strong>For a rough estimate</strong>: <Link to="/test">Our free IQ test</Link> or similar online assessments</li>
      <li><strong>For children's <Link to="/iq-by-age/children">school placement</Link></strong>: WISC-V or CogAT (school-administered)</li>
    </ul>

    <h2>Frequently Asked Questions</h2>

    <h3>What are the main types of IQ tests?</h3>
    <p>The WAIS, Stanford-Binet, Raven's Progressive Matrices, and Cattell CFIT are the most widely used. The WAIS is the gold standard for adults.</p>

    <h3>Which IQ test is most accurate?</h3>
    <p>The WAIS-IV is considered the most accurate and comprehensive for adults. For children, the WISC-V. For culture-fair testing, Raven's Progressive Matrices.</p>

    <h3>Are online IQ tests accurate?</h3>
    <p>Most are not clinically validated and may overestimate scores by 10-20 points. They can provide a rough estimate but not a reliable measurement.</p>

    <p className="mt-8">
      Ready to get an estimate? <Link to="/test">Take our free IQ test</Link> — 30 questions,
      instant results. For the most accurate measurement, find a licensed psychologist who
      administers the WAIS. Learn more about <Link to="/what-is-iq">what IQ measures</Link>,{" "}
      <Link to="/iq-score-ranges">score ranges</Link>, and{" "}
      <Link to="/how-to-improve-iq">how to improve your cognitive function</Link>.
    </p>
  </ContentPage>
);

export default TypesOfIQTests;
