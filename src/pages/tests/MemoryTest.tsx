import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";

const RELATED_PAGES = [
  { title: "Logical Reasoning Test", href: "/tests/logical-reasoning" },
  { title: "Pattern Recognition Test", href: "/tests/pattern-recognition" },
  { title: "Verbal Reasoning Test", href: "/tests/verbal-reasoning" },
  { title: "Spatial Reasoning Test", href: "/tests/spatial-reasoning" },
  { title: "Numerical Reasoning Test", href: "/tests/numerical-reasoning" },
  { title: "Free IQ Test", href: "/" },
  { title: "How to Improve IQ", href: "/how-to-improve-iq" },
];

const faqItems = [
  {
    question: "What type of memory does an IQ test measure?",
    answer:
      "IQ tests primarily measure working memory — the ability to hold and manipulate information in real time. This is different from long-term memory (remembering past events or learned facts). Working memory is measured through digit span tasks, letter-number sequencing, and mental arithmetic under time pressure.",
  },
  {
    question: "Is working memory the same as intelligence?",
    answer:
      "Working memory capacity correlates strongly with IQ (r ≈ 0.50–0.60 with general intelligence), but they are not identical. Working memory is better understood as a cognitive bottleneck: limited capacity slows reasoning on complex problems. Higher working memory allows you to juggle more pieces of a problem simultaneously.",
  },
  {
    question: "Can working memory be improved?",
    answer:
      "Research shows that working memory can be trained with targeted exercises, most notably the dual n-back task. Gains on working memory tasks are consistent; transfer to broader IQ scores is more modest. Reducing cognitive load through sleep, exercise, and stress management also significantly improves effective working memory.",
  },
  {
    question: "What is digit span and why is it in IQ tests?",
    answer:
      "Digit span tests present a series of numbers (e.g., 5-8-2-9-1) that must be recalled in order (forward span) or in reverse (backward span). The number of digits you can reliably hold is your span. Average adult forward span is 7 ± 2. Backward span is typically 2 digits shorter and is a stronger predictor of fluid intelligence.",
  },
  {
    question: "How does memory affect learning speed?",
    answer:
      "Working memory is the primary bottleneck for learning speed. When learning new material, you hold it in working memory while connecting it to long-term knowledge. Larger working memory capacity means more material can be processed simultaneously, leading to faster schema formation and retention.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Memory Test: Working Memory, IQ, and How to Improve Your Cognitive Capacity",
  description:
    "Learn what memory tests in IQ assessments actually measure, the difference between working memory and long-term memory, and evidence-based methods to improve cognitive capacity.",
  publisher: { "@type": "Organization", name: "MyIQScores", url: "https://www.myiqscores.com" },
};

const MemoryTest = () => (
  <>
    <SEOHead
      title="Memory Test: Working Memory, IQ & Improvement | MyIQScores"
      description="Understand what memory tests in IQ assessments measure, how working memory relates to intelligence, and research-backed ways to improve cognitive capacity and memory span."
      canonicalUrl="/tests/memory"
      ogType="article"
      jsonLd={[articleSchema]}
    />
    <ContentPage
      relatedPages={RELATED_PAGES}
      ctaText="Test your working memory — free IQ test, instant results"
      lastUpdated="May 2026"
      readingTime={5}
    >
      <h1>
        Memory Test:{" "}
        <span className="gradient-text">Working Memory & IQ</span>
      </h1>
      <p className="text-muted-foreground text-lg">
        IQ tests don't measure how much you can memorize. They measure <strong>working memory</strong> — the ability
        to hold and actively manipulate information in real time. It's one of the four primary factors in the WAIS-IV
        and one of the strongest predictors of fluid intelligence.
      </p>

      <h2>Working Memory vs. Long-Term Memory</h2>
      <p>
        The distinction is critical for understanding what IQ tests actually measure:
      </p>
      <ul>
        <li>
          <strong>Working memory</strong> — a temporary, high-bandwidth mental workspace. Holds 7 ± 2 items for ~20
          seconds without rehearsal. Used for in-progress thinking: following an argument, calculating in your head,
          or keeping track of a conversation thread.
        </li>
        <li>
          <strong>Long-term memory</strong> — permanent storage of learned facts, skills, and experiences. Capacity
          is essentially unlimited. Accessed via retrieval cues. Not what IQ memory tasks primarily test.
        </li>
      </ul>
      <p>
        IQ tests target <em>working memory</em> because it predicts reasoning ability. A larger working memory means
        you can hold more pieces of a complex problem in mind simultaneously — which is why working memory and fluid
        reasoning scores correlate so strongly (r ≈ 0.60).
      </p>

      <h2>How Memory Is Tested in IQ Assessments</h2>
      <p>
        The WAIS-IV includes a dedicated <strong>Working Memory Index (WMI)</strong> composed of three subtests:
      </p>
      <ul>
        <li>
          <strong>Digit Span</strong> — recall a series of numbers forward, backward, or in ascending order. Average
          adults score 7 ± 2 items forward, ~5 backward.
        </li>
        <li>
          <strong>Arithmetic</strong> — mental math word problems under time pressure. Requires holding problem
          components in working memory while calculating.
        </li>
        <li>
          <strong>Letter-Number Sequencing</strong> — hear a mixed letter/number string, then recall numbers in
          ascending order followed by letters alphabetically.
        </li>
      </ul>

      <h2>Working Memory and Learning Speed</h2>
      <p>
        Working memory is the primary cognitive bottleneck in learning. When you encounter new information, it passes
        through working memory before being encoded to long-term memory. Limited working memory capacity means less
        information can be processed per pass — requiring more repetitions to consolidate the same material.
      </p>
      <p>
        This is why students with high working memory tend to need fewer repetitions to master new concepts, and why
        classroom instruction that overloads working memory (too much new information at once) is so ineffective for
        all but the highest-capacity learners.
      </p>

      <h2>Common Working Memory Question Types</h2>
      <div className="glass-card rounded-xl p-5 my-4 text-sm">
        <ul className="space-y-3 text-muted-foreground">
          <li><strong>Forward digit span:</strong> Hear "3-7-1-9-4" → recall "3-7-1-9-4"</li>
          <li><strong>Backward digit span:</strong> Hear "6-2-8" → recall "8-2-6"</li>
          <li><strong>Letter-number sequencing:</strong> Hear "K-3-B-7-A-2" → recall "2-3-7-A-B-K"</li>
          <li><strong>Mental arithmetic:</strong> "If you have 14 apples, give 5 away, buy 3 more, how many?" (without writing)</li>
          <li><strong>Dual n-back:</strong> Remember both the position and identity of a stimulus from n steps ago</li>
        </ul>
      </div>

      <h2>How to Improve Working Memory</h2>
      <p>
        Working memory capacity is partially trainable, though gains vary by method:
      </p>
      <ul>
        <li>
          <strong>Dual n-back training</strong> — the most studied method; shows consistent gains on working memory
          tasks, with modest transfer to fluid reasoning
        </li>
        <li>
          <strong>Digit span practice</strong> — deliberately extending the number of items you can hold forward and
          backward
        </li>
        <li>
          <strong>Sleep</strong> — working memory capacity is severely impaired by poor sleep; 7–9 hours restores
          full capacity
        </li>
        <li>
          <strong>Aerobic exercise</strong> — meta-analyses show consistent working memory improvements following
          regular aerobic training
        </li>
        <li>
          <strong>Mindfulness meditation</strong> — reduces the intrusive thoughts that consume working memory
          capacity on unrelated rumination
        </li>
      </ul>
      <p>
        See our complete guide on <Link to="/how-to-improve-iq">how to improve IQ</Link> for a full review of
        cognitive enhancement research.
      </p>

      <FAQSection items={faqItems} withSchema={true} />
    </ContentPage>
  </>
);

export default MemoryTest;
