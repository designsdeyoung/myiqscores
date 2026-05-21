import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ContentPage from "@/components/ContentPage";
import InArticleAd from "@/components/InArticleAd";
import Breadcrumb from "@/components/Breadcrumb";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does the MyIQScores IQ test work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You answer 30 IQ-style reasoning questions covering pattern recognition, logical reasoning, verbal reasoning, spatial reasoning, and numerical reasoning. When you finish, our scoring algorithm compares your performance to population norms and generates an educational IQ estimate. The test takes approximately 15–20 minutes and is completely free with no sign-up required.",
      },
    },
    {
      "@type": "Question",
      name: "How is the IQ score calculated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your score is based on the number of correct answers weighted by question difficulty. The raw score is then converted to an IQ-scale estimate using a normative conversion table calibrated against population distributions. The result approximates how your performance compares to a general adult population. Results are educational estimates, not clinically validated scores.",
      },
    },
    {
      "@type": "Question",
      name: "Is this a real IQ test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The MyIQScores test is an IQ-style cognitive reasoning assessment, not a clinically administered IQ test. It measures the same broad categories as professional IQ tests (reasoning, pattern recognition, working memory) but is not equivalent to tests like the WAIS-IV or Stanford-Binet administered by licensed psychologists. Results are educational estimates.",
      },
    },
    {
      "@type": "Question",
      name: "What do the different question categories measure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pattern Recognition measures fluid intelligence — your ability to find rules in sequences. Logical Reasoning tests deductive and inductive reasoning. Verbal Reasoning measures language-based analogy and comprehension. Spatial Reasoning tests mental rotation and geometric thinking. Numerical Reasoning assesses quantitative problem-solving. Together these cover the main domains of cognitive ability measured by professional IQ batteries.",
      },
    },
  ],
};

const HowItWorks = () => (
  <ContentPage
    readingTime={5}
    lastUpdated="May 2026"
    relatedPages={[
      { title: "Take the Free IQ Test", href: "/" },
      { title: "IQ Test Overview", href: "/iq-test" },
      { title: "Practice IQ Questions", href: "/practice-iq-test" },
      { title: "IQ Score Ranges", href: "/iq-score-ranges" },
      { title: "Our Methodology", href: "/methodology" },
      { title: "About MyIQScores", href: "/about" },
    ]}
  >
    <SEOHead
      title="How It Works: The MyIQScores IQ-Style Test Explained | MyIQScores"
      description="Learn how the MyIQScores free IQ-style test works: question categories, scoring methodology, result interpretation, and what your estimated score means."
      canonicalUrl="/how-it-works"
      ogType="article"
      jsonLd={faqSchema}
    />

    <Breadcrumb crumbs={[
      { label: "Home", href: "/" },
      { label: "How It Works" },
    ]} />

    <h1>How <span className="gradient-text">It Works</span>: The MyIQScores Test Explained</h1>

    <p>
      MyIQScores offers a free IQ-style cognitive reasoning test designed to give you an educational estimate
      of your reasoning performance across the main domains measured by professional intelligence assessments.
      Here's exactly how the test works — from the question design to how your score is calculated.
    </p>

    <h2>Step 1: The Test Questions</h2>
    <p>
      The test contains <strong>30 questions</strong> across five cognitive domains, each measuring a
      different aspect of reasoning ability:
    </p>
    <ul>
      <li>
        <strong>Pattern Recognition (6 questions)</strong> — Number and letter sequences where you identify the rule and predict what comes next. Tests fluid intelligence — your ability to detect patterns without prior knowledge.
      </li>
      <li>
        <strong>Logical Reasoning (6 questions)</strong> — Syllogisms, comparative reasoning, and deductive logic problems. Tests how accurately you can reason from premises to conclusions.
      </li>
      <li>
        <strong>Verbal Reasoning (6 questions)</strong> — Analogies, vocabulary-based logic, and language-structure problems. Tests verbal intelligence and comprehension.
      </li>
      <li>
        <strong>Spatial Reasoning (6 questions)</strong> — Mental rotation, paper-folding, geometric thinking, and 3D object visualization. Tests visual-spatial intelligence.
      </li>
      <li>
        <strong>Numerical Reasoning (6 questions)</strong> — Arithmetic, percentages, algebra, and quantitative logic. Tests numerical intelligence and mathematical reasoning.
      </li>
    </ul>
    <p>
      Questions range from accessible to genuinely challenging. The difficulty distribution is intentional —
      it allows the test to differentiate across a wide range of performance levels.
    </p>

    <InArticleAd />

    <h2>Step 2: Answering the Questions</h2>
    <p>
      The test is self-paced with no strict time limit (though we recommend treating it as a timed exercise
      to simulate real testing conditions). For each question, select the best answer from four options.
      You can't go back to previous questions once you advance.
    </p>
    <p>
      Tips for best results:
    </p>
    <ul>
      <li>Read each question carefully before looking at the options</li>
      <li>Use elimination to narrow down answers on difficult questions</li>
      <li>Don't rush — a thoughtful wrong answer is still wrong</li>
      <li>Take the test in a quiet, distraction-free environment</li>
    </ul>

    <h2>Step 3: Score Calculation</h2>
    <p>
      After completing all 30 questions, your responses are evaluated automatically. Here's how the score
      is calculated:
    </p>
    <ol>
      <li><strong>Correct answers are counted</strong> and weighted by question difficulty. Harder questions that you answer correctly contribute more to your raw score.</li>
      <li><strong>Your raw score is converted to an IQ-scale estimate</strong> using a normative conversion table. This table maps raw performance to estimated IQ scores calibrated against population distributions from large-sample cognitive research.</li>
      <li><strong>Your percentile is calculated</strong> — showing what proportion of the test-taking population typically scores below your result.</li>
      <li><strong>A breakdown by category</strong> gives you insight into your relative strengths (pattern recognition, logic, verbal, spatial, numerical).</li>
    </ol>

    <h2>Step 4: Understanding Your Results</h2>
    <p>
      Your result page shows:
    </p>
    <ul>
      <li>Your estimated IQ score (on the standard scale where 100 = average)</li>
      <li>Your percentile rank</li>
      <li>Your classification (Average, Above Average, Superior, etc.)</li>
      <li>A breakdown of performance by cognitive category</li>
      <li>Links to detailed explanations of your score range</li>
    </ul>
    <p>
      For a detailed explanation of what your specific score means, visit our{" "}
      <Link to="/iq-score-ranges">IQ score ranges guide</Link>.
    </p>

    <InArticleAd />

    <h2>Important Limitations</h2>
    <p>
      The MyIQScores test is an <strong>educational IQ-style assessment</strong>, not a clinically
      administered IQ test. Here's what that means:
    </p>
    <ul>
      <li>Results are educational estimates, not clinical diagnoses</li>
      <li>The test cannot be used for educational placement, disability assessment, legal proceedings, or medical purposes</li>
      <li>Clinically valid IQ tests (WAIS-IV, Stanford-Binet 5) are administered by licensed psychologists under controlled conditions — our test does not replicate those conditions</li>
      <li>Performance can vary based on fatigue, anxiety, distractions, and other day-to-day factors</li>
    </ul>
    <p>
      If you need a clinically valid IQ assessment, please contact a licensed psychologist or neuropsychologist.
    </p>

    <h2>Frequently Asked Questions</h2>

    <h3>How does the MyIQScores IQ test work?</h3>
    <p>30 questions across five cognitive domains. After answering all questions, an algorithm scores your performance and generates an estimated IQ score and percentile. Free, instant, no sign-up.</p>

    <h3>How is the IQ score calculated?</h3>
    <p>Correct answers are counted and weighted by difficulty. Your raw score is converted to an IQ-scale estimate using normative conversion data. Results are educational estimates, not clinical scores.</p>

    <h3>Is this a real IQ test?</h3>
    <p>It's an IQ-style educational assessment covering the same cognitive domains as professional tests. It is not equivalent to a clinically administered test like the WAIS-IV. Results are educational estimates.</p>

    <h3>What do the different question categories measure?</h3>
    <p>Pattern Recognition (fluid intelligence), Logical Reasoning (deductive reasoning), Verbal Reasoning (language intelligence), Spatial Reasoning (visual-spatial ability), Numerical Reasoning (quantitative reasoning).</p>

    <div className="mt-6 p-4 rounded-xl border border-primary/20 bg-primary/5">
      <p className="text-sm text-muted-foreground">
        <strong>Educational disclaimer:</strong> All tests and results on MyIQScores.com are for educational and
        entertainment purposes only. Results are not clinically validated IQ scores. For clinical assessment,
        consult a licensed psychologist. See our full <Link to="/disclaimer">Disclaimer</Link> and{" "}
        <Link to="/methodology">Methodology</Link>.
      </p>
    </div>
  </ContentPage>
);

export default HowItWorks;
