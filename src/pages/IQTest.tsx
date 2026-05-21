import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import InArticleAd from "@/components/InArticleAd";
import Breadcrumb from "@/components/Breadcrumb";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an IQ test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An IQ test is a standardized assessment designed to measure cognitive abilities including logical reasoning, pattern recognition, working memory, verbal comprehension, and spatial reasoning. The result is expressed as an Intelligence Quotient (IQ) score, where 100 represents the average for the population being tested. Online IQ-style tests like ours are educational tools that estimate your performance in these areas.",
      },
    },
    {
      "@type": "Question",
      name: "How long does an IQ test take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Clinical IQ tests administered by psychologists typically take 60–90 minutes. Online IQ-style tests are usually shorter — the MyIQScores test has 30 questions and takes approximately 15–20 minutes. Rushing can hurt your score, so take your time on each question.",
      },
    },
    {
      "@type": "Question",
      name: "Are online IQ tests accurate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Online IQ-style tests provide useful educational estimates but are not as accurate as clinically administered tests. They can't control for testing environment, test anxiety, or the many standardization factors that clinical tests use. Treat online results as an educational estimate of your reasoning performance, not a definitive clinical score.",
      },
    },
    {
      "@type": "Question",
      name: "Is the IQ test on MyIQScores free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The IQ-style reasoning test on MyIQScores is completely free. There is no sign-up required, no email wall, and no paywall. You get your estimated score and a breakdown instantly after completing the 30 questions.",
      },
    },
    {
      "@type": "Question",
      name: "What does an IQ test measure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most IQ tests measure: pattern recognition and abstract reasoning (fluid intelligence), verbal comprehension and vocabulary, working memory capacity, spatial reasoning, and processing speed. They do not directly measure creativity, emotional intelligence, practical wisdom, or many other valuable forms of human intelligence.",
      },
    },
    {
      "@type": "Question",
      name: "What is a good score on an IQ test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A score of 100 is exactly average. Scores of 90–109 are in the average range. 110–119 is above average, 120–129 is superior, and 130+ is considered very superior or gifted. Only about 2% of people score 130 or above. Most people score between 85 and 115.",
      },
    },
  ],
};

const websiteAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "MyIQScores Free IQ-Style Test",
  url: "https://www.myiqscores.com",
  description: "Free online IQ-style reasoning test. 30 questions covering pattern recognition, logical reasoning, verbal ability, spatial reasoning, and numerical skills. Instant educational score estimate.",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  featureList: [
    "30 IQ-style reasoning questions",
    "Pattern recognition tasks",
    "Logical reasoning problems",
    "Verbal and numerical reasoning",
    "Spatial reasoning challenges",
    "Instant educational score estimate",
    "Score percentile breakdown",
    "No sign-up required",
  ],
};

const IQTest = () => (
  <ContentPage
    readingTime={7}
    lastUpdated="May 2026"
    relatedPages={[
      { title: "Take the Free IQ Test Now", href: "/" },
      { title: "Practice IQ Test Questions", href: "/practice-iq-test" },
      { title: "IQ Score Ranges Explained", href: "/iq-score-ranges" },
      { title: "What Is IQ?", href: "/what-is-iq" },
      { title: "Average IQ Score Guide", href: "/average-iq" },
      { title: "Types of IQ Tests", href: "/types-of-iq-tests" },
      { title: "IQ Percentile Chart", href: "/iq-percentile-chart" },
      { title: "How to Improve Your IQ", href: "/how-to-improve-iq" },
    ]}
  >
    <SEOHead
      title="Free IQ Test Online: 30 Questions, Instant Results | MyIQScores"
      description="Take a free online IQ-style reasoning test. 30 questions covering pattern recognition, logic, verbal and spatial reasoning. Get your estimated score instantly — no sign-up needed."
      canonicalUrl="/iq-test"
      ogType="article"
      jsonLd={[websiteAppSchema, faqSchema]}
    />

    <Breadcrumb crumbs={[
      { label: "Home", href: "/" },
      { label: "IQ Test" },
    ]} />

    <h1>Free <span className="gradient-text">IQ Test</span> Online: 30 Questions, Instant Results</h1>

    <p>
      An IQ test is a standardized assessment measuring how well you perform on key cognitive tasks —
      pattern recognition, logical reasoning, verbal comprehension, spatial reasoning, and numerical ability.
      The MyIQScores free IQ-style test gives you an educational estimate of your cognitive performance across
      all these areas in about 15–20 minutes, with instant results and no sign-up required.
    </p>

    <div className="my-6 p-6 rounded-2xl text-center"
      style={{ background: "linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--secondary) / 0.1))", border: "1px solid hsl(var(--primary) / 0.2)" }}>
      <h2 className="font-heading text-xl font-bold mb-2">Ready to Take the Test?</h2>
      <p className="text-muted-foreground text-sm mb-4">30 questions · ~15 minutes · Free · No sign-up</p>
      <Link to="/" className="glow-button inline-block">Start Free IQ Test →</Link>
    </div>

    <h2>What Is an IQ Test?</h2>
    <p>
      IQ stands for Intelligence Quotient — a standardized score comparing your cognitive performance to the
      general population. The average IQ is set at 100. A score of 115 means you outperformed about 84% of
      people your age; a score of 130 puts you in the top 2%.
    </p>
    <p>
      Modern IQ tests measure a construct psychologists call <em>general intelligence</em> or <em>g</em> —
      an underlying factor that predicts performance across many different cognitive domains. Our IQ-style test
      covers five core domains:
    </p>
    <ul>
      <li><strong>Pattern Recognition</strong> — finding rules in numerical and visual sequences</li>
      <li><strong>Logical Reasoning</strong> — deductive and inductive reasoning problems</li>
      <li><strong>Verbal Reasoning</strong> — analogies, vocabulary, and language-based logic</li>
      <li><strong>Spatial Reasoning</strong> — mental rotation and geometric thinking</li>
      <li><strong>Numerical Reasoning</strong> — mathematical problem-solving and quantitative logic</li>
    </ul>

    <InArticleAd />

    <h2>How Our Free IQ-Style Test Works</h2>
    <p>Here's what to expect when you take the MyIQScores free test:</p>
    <ol>
      <li><strong>30 questions</strong> across five cognitive categories</li>
      <li>Questions range from straightforward to genuinely challenging — the difficulty curve is intentional</li>
      <li>Take about 15–20 minutes to complete; there is no strict time limit</li>
      <li>After completing, you see an estimated IQ score, your percentile, and a breakdown by category</li>
      <li>No sign-up, no email, no paywall — completely free</li>
    </ol>
    <p>
      Our test is an <strong>IQ-style educational assessment</strong>. It is not a clinically administered or
      psychologist-supervised test, and results should be treated as educational estimates. For a clinically
      valid IQ score, contact a licensed psychologist.
    </p>

    <h2>Types of IQ Tests</h2>
    <p>
      There are several major categories of IQ tests, each with different strengths:
    </p>
    <ul>
      <li><strong>Clinical intelligence batteries</strong> (WAIS-IV, Stanford-Binet 5, WISC-V): Administered by psychologists. Take 60–90 minutes. Highly reliable, diagnostically valid. Used for educational placement, disability assessment, and research.</li>
      <li><strong>Group-administered tests</strong>: Used in educational and military settings. Less individualized than clinical batteries but valid for group comparisons.</li>
      <li><strong>Culture-fair tests</strong> (Raven's Progressive Matrices, Cattell Culture Fair): Emphasize non-verbal pattern recognition to minimize language and cultural bias.</li>
      <li><strong>Online IQ-style tests</strong> (like ours): Educational tools for self-assessment and cognitive skill practice. Not clinically diagnostic but useful for benchmarking.</li>
    </ul>
    <p>
      For a deeper look at all test types, see our <Link to="/types-of-iq-tests">types of IQ tests guide</Link>.
    </p>

    <InArticleAd />

    <h2>How to Perform Your Best on an IQ Test</h2>
    <p>
      A few evidence-based tips to maximize your performance:
    </p>
    <ul>
      <li><strong>Sleep well</strong> — sleep deprivation can temporarily reduce scored performance by 5–15 points. See <Link to="/blog/sleep-and-iq">how sleep affects IQ</Link>.</li>
      <li><strong>Don't rush</strong> — read each question carefully. Careless mistakes cost more than slow deliberation.</li>
      <li><strong>Eliminate wrong answers first</strong> — narrowing down options improves your odds on difficult questions.</li>
      <li><strong>Practice the question types</strong> — pattern recognition and logical reasoning improve with familiarity. See <Link to="/practice-iq-test">practice IQ test questions</Link>.</li>
      <li><strong>Stay calm</strong> — test anxiety genuinely impairs working memory performance.</li>
    </ul>

    <h2>Understanding Your IQ Test Score</h2>
    <p>Once you finish, use this reference to interpret your result:</p>
    <div className="overflow-x-auto my-4">
      <table>
        <thead>
          <tr><th>Score</th><th>Classification</th><th>Percentile</th></tr>
        </thead>
        <tbody>
          <tr><td>130+</td><td>Very Superior</td><td>Top 2%</td></tr>
          <tr><td>120–129</td><td>Superior</td><td>Top 9%</td></tr>
          <tr><td>110–119</td><td>High Average</td><td>Top 25%</td></tr>
          <tr><td>90–109</td><td>Average</td><td>25th–75th</td></tr>
          <tr><td>80–89</td><td>Low Average</td><td>Bottom 25%</td></tr>
          <tr><td>70–79</td><td>Borderline</td><td>Bottom 9%</td></tr>
          <tr><td>Below 70</td><td>Extremely Low</td><td>Bottom 2%</td></tr>
        </tbody>
      </table>
    </div>
    <p>
      For detailed explanations of what any specific score means, visit our
      <Link to="/iq-score-ranges"> complete IQ score ranges chart</Link> or look up any specific score on
      our <Link to="/is-100-iq-good">Is X IQ Good?</Link> pages.
    </p>

    <h2>Frequently Asked Questions About IQ Tests</h2>

    <h3>What is an IQ test?</h3>
    <p>A standardized assessment measuring cognitive abilities including reasoning, pattern recognition, memory, and verbal skills. Results are expressed as a score where 100 = average.</p>

    <h3>How long does an IQ test take?</h3>
    <p>Clinical tests take 60–90 minutes. Our free online test takes approximately 15–20 minutes (30 questions).</p>

    <h3>Are online IQ tests accurate?</h3>
    <p>Online tests provide useful educational estimates. They can't replicate the controlled conditions of clinical testing, so treat results as estimates rather than clinical scores.</p>

    <h3>Is the test on MyIQScores free?</h3>
    <p>Yes — completely free, no sign-up, no paywall. Instant results after 30 questions.</p>

    <h3>What does an IQ test measure?</h3>
    <p>Pattern recognition, logical reasoning, verbal comprehension, working memory, spatial reasoning, and numerical ability. Not creativity, emotional intelligence, or practical wisdom.</p>

    <h3>What is a good score on an IQ test?</h3>
    <p>100 is average. 110–119 is above average. 120–129 is superior. 130+ is very superior (top 2%).</p>

    <div className="mt-8 p-4 rounded-xl border border-primary/20 bg-primary/5">
      <p className="text-sm text-muted-foreground">
        <strong>Educational disclaimer:</strong> The MyIQScores test is an IQ-style educational assessment, not a
        clinically administered or psychologist-supervised intelligence test. Results are educational estimates for
        practice and self-reflection. For clinical assessment or diagnosis, consult a licensed psychologist.
      </p>
    </div>
  </ContentPage>
);

export default IQTest;
