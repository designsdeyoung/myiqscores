import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import ComparisonChart from "@/components/ComparisonChart";

const RELATED_PAGES = [
  { title: "Pattern Recognition Test", href: "/tests/pattern-recognition" },
  { title: "Verbal Reasoning Test", href: "/tests/verbal-reasoning" },
  { title: "Spatial Reasoning Test", href: "/tests/spatial-reasoning" },
  { title: "Numerical Reasoning Test", href: "/tests/numerical-reasoning" },
  { title: "Memory Test", href: "/tests/memory" },
  { title: "Free IQ Test", href: "/" },
  { title: "Types of IQ Tests", href: "/types-of-iq-tests" },
];

const faqItems = [
  {
    question: "What is a logical reasoning test?",
    answer:
      "A logical reasoning test measures your ability to analyze information, identify patterns, and draw valid conclusions. It evaluates deductive reasoning (top-down logic) and inductive reasoning (pattern generalization), both of which are core components of general intelligence.",
  },
  {
    question: "How is logical reasoning measured in IQ tests?",
    answer:
      "Logical reasoning is typically measured through syllogism problems, matrix completion, analogy questions, and sequence puzzles. Scores are normed against age-matched populations to produce a standardized IQ-style score.",
  },
  {
    question: "Can you improve logical reasoning ability?",
    answer:
      "Yes. Research shows that regular practice with logic puzzles, formal deduction exercises, and strategy games (chess, Go) can measurably improve logical reasoning performance over time. These gains reflect improved working memory and processing efficiency.",
  },
  {
    question: "What score indicates strong logical reasoning?",
    answer:
      "On standardized tests, a score at or above the 75th percentile indicates above-average logical reasoning. Scores at the 90th percentile and above are considered highly proficient.",
  },
  {
    question: "How is logical reasoning different from general IQ?",
    answer:
      "Logical reasoning is one major component of general IQ (g factor). A full IQ test also includes verbal comprehension, processing speed, working memory, and spatial reasoning. Strong logical reasoning usually predicts a high overall IQ, but the two are not identical.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Logical Reasoning Test: What It Measures and How to Prepare",
  description:
    "Learn what logical reasoning tests measure, how they relate to IQ, what example questions look like, and how to improve your deductive and inductive reasoning skills.",
  publisher: { "@type": "Organization", name: "MyIQScores", url: "https://www.myiqscores.com" },
};

const LogicalReasoning = () => (
  <>
    <SEOHead
      title="Logical Reasoning Test: What It Measures & How to Improve | MyIQScores"
      description="Understand what logical reasoning tests measure, how they relate to IQ scores, and what deductive vs. inductive reasoning actually tests. Includes example questions."
      canonicalUrl="/tests/logical-reasoning"
      ogType="article"
      jsonLd={[articleSchema]}
    />
    <ContentPage
      relatedPages={RELATED_PAGES}
      ctaText="Test your logical reasoning now — free, no sign-up"
      lastUpdated="May 2026"
      readingTime={5}
    >
      <h1>
        Logical Reasoning Test:{" "}
        <span className="gradient-text">What It Measures</span>
      </h1>
      <p className="text-muted-foreground text-lg">
        Logical reasoning is one of the core cognitive domains tested in every major IQ assessment. It evaluates how well
        you can analyze a problem, apply structured thinking, and arrive at valid conclusions — without relying on
        memorized facts.
      </p>

      <h2>What Logical Reasoning Tests Measure</h2>
      <p>
        Logical reasoning tests assess two primary thinking modes: <strong>deductive reasoning</strong> — applying
        general rules to specific situations — and <strong>inductive reasoning</strong> — observing specific examples to
        form general rules. Both are fundamental to problem-solving and are strongly correlated with the g factor (general
        intelligence) in psychometric research.
      </p>
      <p>
        The most common question types include:
      </p>
      <ul>
        <li><strong>Syllogisms</strong> — given two premises, determine a valid conclusion</li>
        <li><strong>Sequence problems</strong> — identify the next item in a logical series</li>
        <li><strong>Analogy problems</strong> — "A is to B as C is to ?"</li>
        <li><strong>Matrix reasoning</strong> — complete a 3×3 grid using pattern logic</li>
        <li><strong>Conditional reasoning</strong> — "if P then Q" implication problems</li>
      </ul>

      <h2>How Logical Reasoning Relates to IQ</h2>
      <p>
        In the CHC (Cattell-Horn-Carroll) model of intelligence — the framework behind modern IQ tests — logical
        reasoning maps primarily to <strong>Fluid Intelligence (Gf)</strong>. Fluid intelligence is the ability to
        solve novel problems without relying on prior knowledge. It peaks in early adulthood and declines gradually with
        age, unlike crystallized intelligence (accumulated knowledge), which remains stable into older age.
      </p>
      <p>
        Studies consistently show that logical reasoning scores are among the best predictors of academic achievement,
        occupational performance, and learning speed across domains.{" "}
        <Link to="/iq-by-career">See how IQ relates to different careers</Link>.
      </p>

      <ComparisonChart
        title="Logical Reasoning vs. Other IQ Domains"
        items={[
          { label: "Logical Reasoning (Gf)", value: 92, highlight: true },
          { label: "Verbal Comprehension (Gc)", value: 85 },
          { label: "Processing Speed (Gs)", value: 78 },
          { label: "Working Memory (Gwm)", value: 82 },
          { label: "Spatial Reasoning (Gv)", value: 79 },
        ]}
        maxValue={100}
      />
      <p className="text-xs text-muted-foreground -mt-2">
        Correlation with general IQ (g) by domain, based on CHC model meta-analysis data.
      </p>

      <h2>Example Logical Reasoning Questions</h2>
      <div className="glass-card rounded-xl p-5 my-4 text-sm">
        <p className="font-semibold text-foreground mb-3">Syllogism example:</p>
        <p className="text-muted-foreground mb-1">All mammals are warm-blooded. Dolphins are mammals.</p>
        <p className="text-muted-foreground mb-3">Therefore: <em>Dolphins are warm-blooded.</em> ✓</p>

        <p className="font-semibold text-foreground mb-3">Sequence example:</p>
        <p className="text-muted-foreground mb-1">2 → 6 → 18 → 54 → ?</p>
        <p className="text-muted-foreground">Answer: <em>162</em> (multiply by 3 each time)</p>
      </div>

      <h2>How to Improve Logical Reasoning</h2>
      <p>
        Logical reasoning ability can be trained. The most evidence-backed approaches:
      </p>
      <ul>
        <li><strong>Logic puzzles</strong> — Sudoku, nonograms, logic grid puzzles</li>
        <li><strong>Strategy games</strong> — Chess, Go, and bridge all require multi-step reasoning</li>
        <li><strong>Formal logic practice</strong> — Working through propositional logic and syllogisms explicitly</li>
        <li><strong>Dual n-back training</strong> — Research shows modest working memory gains that transfer to fluid reasoning</li>
        <li><strong>Deliberate practice</strong> — Timed test practice improves processing efficiency</li>
      </ul>
      <p>
        See our full guide on <Link to="/how-to-improve-iq">how to improve your IQ</Link> for a research-backed
        overview of all cognitive training methods.
      </p>

      <h2>Take a Free Logical Reasoning Test</h2>
      <p>
        Our free IQ test includes a logical reasoning section as part of a 30-question assessment across five cognitive
        domains. You'll receive a full breakdown of your performance in each area, not just an overall score.{" "}
        <Link to="/">Take the free test now</Link>.
      </p>

      <FAQSection items={faqItems} withSchema={true} />
    </ContentPage>
  </>
);

export default LogicalReasoning;
