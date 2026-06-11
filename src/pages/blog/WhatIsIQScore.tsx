import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Is an IQ Score? The Complete Scientific Explanation",
  description:
    "IQ scores measure specific cognitive abilities — but what exactly are they measuring, and how accurate are they?",
  datePublished: "2026-04-06",
  dateModified: "2026-04-06",
  author: { "@type": "Person", name: "MyIQScores Editorial Team", url: "https://www.myiqscores.com/about" },
  publisher: { "@type": "Organization", name: "MyIQScores", url: "https://www.myiqscores.com" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does IQ stand for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IQ stands for Intelligence Quotient. The term dates to German psychologist William Stern, who in 1912 proposed dividing a child's mental age by their chronological age. Modern IQ tests no longer use this formula — they instead compare your performance to a large normative sample.",
      },
    },
    {
      "@type": "Question",
      name: "What is the average IQ score?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The average IQ is always 100 by design. IQ tests are periodically re-normed so that 100 represents the median performance of the current population. About 68% of people score between 85 and 115.",
      },
    },
    {
      "@type": "Question",
      name: "What is a high IQ score?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A score of 120 or above is considered high (top ~10%). Scores of 130+ are in the gifted range (top 2%), and 145+ is in the highly gifted or genius range (top 0.1%).",
      },
    },
    {
      "@type": "Question",
      name: "Do IQ scores change over time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most adults, IQ scores are relatively stable. However, significant changes in education, nutrition, health, or environment can shift scores. In childhood, scores can be more variable. Across populations, average IQ has risen roughly 3 points per decade — a phenomenon called the Flynn Effect.",
      },
    },
  ],
};

const WhatIsIQScore = () => (
  <ContentPage>
    <SEOHead
      title="What Is an IQ Score? A Scientific Explanation | MyIQScores"
      description="IQ scores measure specific cognitive abilities — but what exactly are they measuring, and how accurate are they? A complete scientific breakdown."
      canonicalUrl="/blog/what-is-iq-score"
      ogType="article"
      jsonLd={[articleSchema, faqSchema]}
    />

    <h1>What Is an <span className="gradient-text">IQ Score</span>? The Complete Scientific Explanation</h1>

    <p>
      You've probably heard the term "IQ" hundreds of times. But what does an IQ score actually
      measure? How is it calculated? And should you trust what it says about you? This guide covers
      everything — from the history of IQ testing to the science behind the bell curve, to what
      modern cognitive psychology says about intelligence.
    </p>

    <h2>A Brief History of IQ Testing</h2>
    <p>
      The concept of measuring intelligence began with French psychologist Alfred Binet, who in 1905
      developed the first practical intelligence test to identify schoolchildren who needed extra
      support. His work was imported to the United States by Lewis Terman of Stanford, who created
      the Stanford-Binet test — still in use today.
    </p>
    <p>
      The term "IQ" (Intelligence Quotient) was coined by William Stern in 1912. He proposed
      dividing a child's mental age by chronological age and multiplying by 100. So a 10-year-old
      performing at a 12-year-old level would score 120. Modern tests have largely abandoned this
      formula in favor of deviation IQ, which compares your score to a standardized normative
      sample.
    </p>

    <h2>How the Bell Curve Works: Mean 100, SD 15</h2>
    <p>
      Modern IQ tests are designed to produce scores that follow a normal (bell curve) distribution.
      The mean is set at 100, and the standard deviation is 15. This means:
    </p>
    <table>
      <thead>
        <tr><th>IQ Range</th><th>Classification</th><th>% of Population</th><th>Percentile</th></tr>
      </thead>
      <tbody>
        <tr><td>145+</td><td>Highly Gifted / Genius</td><td>~0.1%</td><td>99.9th</td></tr>
        <tr><td>130–144</td><td>Gifted</td><td>~2%</td><td>98th</td></tr>
        <tr><td>120–129</td><td>Superior</td><td>~7%</td><td>91st</td></tr>
        <tr><td>110–119</td><td>High Average</td><td>~16%</td><td>75th</td></tr>
        <tr><td>90–109</td><td>Average</td><td>~50%</td><td>25th–75th</td></tr>
        <tr><td>80–89</td><td>Low Average</td><td>~16%</td><td>9th</td></tr>
        <tr><td>70–79</td><td>Borderline</td><td>~7%</td><td>2nd</td></tr>
        <tr><td>Below 70</td><td>Extremely Low</td><td>~2%</td><td>Below 2nd</td></tr>
      </tbody>
    </table>
    <p>
      For a detailed breakdown with percentile equivalents, see our{" "}
      <Link to="/iq-percentile-chart">IQ percentile chart</Link> and{" "}
      <Link to="/iq-score-ranges">IQ score ranges guide</Link>.
    </p>

    <h2>The 5 Domains Most IQ Tests Measure</h2>
    <p>
      Modern IQ tests don't ask trivia questions — they probe specific cognitive processes. Most
      major tests (WAIS, Stanford-Binet, Raven's Matrices) assess some combination of these five
      domains:
    </p>

    <h3>1. Pattern Recognition (Fluid Reasoning)</h3>
    <p>
      The ability to identify relationships, complete sequences, and solve novel problems using
      logic alone. Pattern recognition is widely considered the "purest" measure of raw intelligence
      because it relies minimally on prior knowledge. Matrix reasoning questions are a classic
      example.
    </p>

    <h3>2. Logical Reasoning</h3>
    <p>
      Deductive and inductive reasoning — drawing valid conclusions from premises, spotting logical
      fallacies, and working through multi-step problems. This domain overlaps heavily with fluid
      reasoning but emphasizes structured argumentation.
    </p>

    <h3>3. Verbal Comprehension</h3>
    <p>
      Vocabulary knowledge, reading comprehension, verbal analogies, and language-based reasoning.
      This is the most culturally loaded domain and shows the largest differences across educational
      backgrounds.
    </p>

    <h3>4. Spatial Reasoning</h3>
    <p>
      Mentally rotating shapes, understanding maps, visualizing three-dimensional objects, and
      tracking moving parts in your mind. Spatial IQ is strongly linked to performance in STEM
      fields, architecture, and surgery.
    </p>

    <h3>5. Numerical / Quantitative Reasoning</h3>
    <p>
      Working with numbers, identifying numerical patterns, and solving mathematical problems without
      requiring advanced math knowledge. This overlaps with logical and fluid reasoning but anchors
      the quantitative channel specifically.
    </p>

    <h2>What IQ Tests Measure — and What They Don't</h2>
    <p>
      IQ tests are well-validated predictors of academic achievement, job performance in complex
      roles, and the ability to learn new skills quickly. However, they do not measure:
    </p>
    <ul>
      <li>Creativity and divergent thinking</li>
      <li>Emotional intelligence (see our <Link to="/iq-vs-eq">IQ vs. EQ guide</Link>)</li>
      <li>Practical wisdom and common sense</li>
      <li>Motivation, conscientiousness, or work ethic</li>
      <li>Social skills and leadership ability</li>
      <li>Musical, athletic, or artistic talent</li>
    </ul>
    <p>
      Psychologist Howard Gardner's theory of multiple intelligences argues that there are at least
      8 distinct intelligences. While this framework isn't universally accepted in academic
      psychology, it's a useful reminder that IQ captures only one narrow slice of human capability.
    </p>

    <h2>Reliability and Validity of IQ Testing</h2>
    <p>
      Well-designed IQ tests have excellent <strong>test-retest reliability</strong> — roughly 0.9
      on a scale of 0 to 1 for clinical instruments like the WAIS-IV and Stanford-Binet 5. This
      means if you take the same test twice under similar conditions, your scores will be very close.
    </p>
    <p>
      <strong>Predictive validity</strong> is also strong. IQ correlates approximately 0.5 with
      academic achievement, 0.5 with job performance in intellectually demanding roles, and 0.4 with
      income. These are among the strongest predictors in all of social science.
    </p>
    <p>
      That said, IQ explains roughly 25% of the variance in outcomes like income — which means 75%
      is explained by other factors. Intelligence is important, but it is far from the whole story.
    </p>

    <h2>Frequently Asked Questions</h2>

    <h3>What does IQ stand for?</h3>
    <p>
      IQ stands for Intelligence Quotient. The name dates to 1912 but modern tests use deviation
      scoring, not an actual quotient. Learn more on our <Link to="/what-is-iq">What Is IQ</Link> page.
    </p>

    <h3>What is the average IQ score?</h3>
    <p>
      The average is always 100 by design. About 68% of people score between 85 and 115. See our{" "}
      <Link to="/iq-score-ranges">IQ score ranges</Link> for the full breakdown.
    </p>

    <h3>What is a high IQ score?</h3>
    <p>
      120+ is high (top ~10%), 130+ is gifted (top 2%), and 145+ is highly gifted or genius-level
      (top 0.1%). Check our <Link to="/iq-percentile-chart">IQ percentile chart</Link> to see
      exactly where any score lands.
    </p>

    <h3>Do IQ scores change over time?</h3>
    <p>
      For adults, IQ is relatively stable. Populations have trended upward ~3 points per decade
      (the Flynn Effect). In childhood, scores can be more variable.
    </p>

    <p className="mt-8">
      Curious where your score falls? <Link to="/test">Take our free IQ test</Link> — 30 questions,
      instant results. Then explore our <Link to="/iq-score-ranges">complete score ranges guide</Link>{" "}
      to understand exactly what your number means.
    </p>
  </ContentPage>
);

export default WhatIsIQScore;
