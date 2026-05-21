import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";

const RELATED_PAGES = [
  { title: "Logical Reasoning Test", href: "/tests/logical-reasoning" },
  { title: "Pattern Recognition Test", href: "/tests/pattern-recognition" },
  { title: "Verbal Reasoning Test", href: "/tests/verbal-reasoning" },
  { title: "Spatial Reasoning Test", href: "/tests/spatial-reasoning" },
  { title: "Memory Test", href: "/tests/memory" },
  { title: "Free IQ Test", href: "/" },
  { title: "SAT to IQ Converter", href: "/sat-to-iq" },
];

const faqItems = [
  {
    question: "What does a numerical reasoning test measure?",
    answer:
      "Numerical reasoning tests measure your ability to interpret and reason with numerical data — not arithmetic skill alone. They include number series, data interpretation (charts, tables), numerical word problems, and quantitative reasoning. The target skill is mathematical thinking, not memorized procedures.",
  },
  {
    question: "Is numerical reasoning the same as math ability?",
    answer:
      "No. Numerical reasoning is broader than procedural math. Arithmetic tests check whether you can follow learned procedures; numerical reasoning tests check whether you can figure out what to do with unfamiliar numerical information. High numerical reasoning with average arithmetic often indicates strong quantitative intelligence.",
  },
  {
    question: "How does numerical reasoning relate to IQ?",
    answer:
      "In the CHC model, numerical reasoning maps to Quantitative Knowledge (Gq) and also engages Fluid Intelligence (Gf) for novel problem-solving. In the WAIS-IV, arithmetic and numerical abilities contribute to the Working Memory Index and, to a lesser degree, the Full-Scale IQ.",
  },
  {
    question: "Which jobs test for numerical reasoning?",
    answer:
      "Finance, investment banking, engineering, data science, and management consulting firms routinely use numerical reasoning tests as hiring screens. Tests like the SHL Numerical Reasoning Test, Korn Ferry, and Talent Q are widely used in corporate recruitment.",
  },
  {
    question: "Can numerical reasoning be improved?",
    answer:
      "Yes. Consistent practice with number series, mental arithmetic drills, and data interpretation exercises produces measurable improvements. Working memory training also helps, since numerical reasoning draws heavily on working memory to hold intermediate results while solving multi-step problems.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Numerical Reasoning Test: What It Measures and How to Prepare",
  description:
    "Learn what numerical reasoning tests measure beyond basic math, how they relate to IQ, what question types appear in corporate hiring tests, and how to improve.",
  publisher: { "@type": "Organization", name: "MyIQScores", url: "https://www.myiqscores.com" },
};

const NumericalReasoning = () => (
  <>
    <SEOHead
      title="Numerical Reasoning Test: What It Measures & How to Prepare | MyIQScores"
      description="Understand what numerical reasoning tests measure beyond math, how quantitative ability relates to IQ, what to expect in corporate aptitude tests, and how to prepare."
      canonicalUrl="/tests/numerical-reasoning"
      ogType="article"
      jsonLd={[articleSchema]}
    />
    <ContentPage
      relatedPages={RELATED_PAGES}
      ctaText="Test your numerical reasoning — free IQ test, no sign-up required"
      lastUpdated="May 2026"
      readingTime={5}
    >
      <h1>
        Numerical Reasoning Test:{" "}
        <span className="gradient-text">What It Measures</span>
      </h1>
      <p className="text-muted-foreground text-lg">
        Numerical reasoning tests evaluate how well you think with numbers — not just whether you can perform arithmetic.
        They're used in IQ batteries, corporate hiring assessments, and academic admissions to measure quantitative
        problem-solving ability.
      </p>

      <h2>Numerical Reasoning vs. Arithmetic</h2>
      <p>
        There's a critical distinction: <strong>arithmetic</strong> tests whether you can execute memorized procedures
        (long division, fraction rules). <strong>Numerical reasoning</strong> tests whether you can figure out what to
        do with unfamiliar quantitative information — analyzing trends in data, identifying numerical relationships, and
        applying logic to quantitative scenarios.
      </p>
      <p>
        In IQ frameworks, this distinction maps to <strong>Crystallized quantitative knowledge (Gq)</strong> vs.
        <strong>Fluid numerical reasoning (Gf applied to numbers)</strong>. Top-scoring numerical reasoners often aren't
        the fastest mental calculators — they're the most efficient logical thinkers in a quantitative context.
      </p>

      <h2>Types of Numerical Reasoning Questions</h2>
      <ul>
        <li>
          <strong>Number series</strong> — "2, 5, 10, 17, 26, ?" (identify the pattern and next value)
        </li>
        <li>
          <strong>Data interpretation</strong> — read a chart or table and answer questions (most common in hiring tests)
        </li>
        <li>
          <strong>Numerical word problems</strong> — multi-step reasoning applied to quantitative scenarios
        </li>
        <li>
          <strong>Estimation problems</strong> — derive approximate answers efficiently without precise calculation
        </li>
        <li>
          <strong>Ratio and proportion</strong> — work with rates, percentages, and scaling relationships
        </li>
      </ul>

      <h2>Numerical Reasoning in Corporate Hiring</h2>
      <p>
        Finance, consulting, data science, and engineering companies routinely screen candidates with numerical reasoning
        tests. Common assessments include:
      </p>
      <ul>
        <li><strong>SHL Numerical Reasoning Test</strong> — used by Goldman Sachs, Deloitte, McKinsey</li>
        <li><strong>Talent Q Elements</strong> — adaptive difficulty numerical test</li>
        <li><strong>Korn Ferry Numerical Reasoning</strong> — common in executive hiring</li>
        <li><strong>Cut-e scales numerical</strong> — used across European markets</li>
      </ul>
      <p>
        These tests are typically timed (20–35 minutes for 15–20 questions), penalizing slow working and rewarding efficient estimation over exact calculation.
      </p>

      <h2>Numerical Reasoning and IQ Scores</h2>
      <p>
        Standardized IQ tests include numerical subtests. In the WAIS-IV, the Arithmetic subtest (mental math word
        problems under time pressure) contributes to the <strong>Working Memory Index (WMI)</strong>. High performance
        requires holding multiple numerical values in working memory while executing multi-step reasoning — which is why
        working memory capacity and numerical reasoning scores correlate so strongly.
      </p>
      <p>
        If you're curious how standardized test scores like the SAT relate to IQ, see our{" "}
        <Link to="/sat-to-iq">SAT to IQ converter</Link>.
      </p>

      <h2>How to Improve Numerical Reasoning</h2>
      <ul>
        <li>Practice number series with progressively harder sequences</li>
        <li>Train mental arithmetic to reduce cognitive load during data interpretation</li>
        <li>Work through data analysis problems with real charts and tables</li>
        <li>Build estimation intuition — practice "ballpark" calculations before exact ones</li>
        <li>Use working memory training (dual n-back) to improve multi-step retention</li>
      </ul>

      <FAQSection items={faqItems} withSchema={true} />
    </ContentPage>
  </>
);

export default NumericalReasoning;
