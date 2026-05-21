import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";

const RELATED_PAGES = [
  { title: "Logical Reasoning Test", href: "/tests/logical-reasoning" },
  { title: "Pattern Recognition Test", href: "/tests/pattern-recognition" },
  { title: "Numerical Reasoning Test", href: "/tests/numerical-reasoning" },
  { title: "Spatial Reasoning Test", href: "/tests/spatial-reasoning" },
  { title: "Memory Test", href: "/tests/memory" },
  { title: "Free IQ Test", href: "/" },
  { title: "IQ vs EQ", href: "/iq-vs-eq" },
];

const faqItems = [
  {
    question: "What does a verbal reasoning test measure?",
    answer:
      "Verbal reasoning tests measure your ability to understand and analyze written information, identify logical relationships between words and concepts, and draw conclusions from text. In IQ frameworks, this corresponds to crystallized intelligence (Gc) and verbal comprehension.",
  },
  {
    question: "Is verbal reasoning the same as vocabulary?",
    answer:
      "No. Verbal reasoning goes beyond vocabulary. It measures how well you can use language to think — analyzing analogies, identifying logical relationships, drawing inferences from passages, and detecting argument flaws. Vocabulary is one input; reasoning with that vocabulary is the target skill.",
  },
  {
    question: "How do verbal IQ tests differ from language proficiency tests?",
    answer:
      "IQ verbal tests measure reasoning with language, not knowledge of grammar rules or writing conventions. A language proficiency test (like TOEFL or IELTS) measures mastery of a specific language. Verbal IQ tests are sensitive to vocabulary breadth but focus on logical and inferential reasoning.",
  },
  {
    question: "Do verbal reasoning scores change with education?",
    answer:
      "Yes, more so than non-verbal reasoning scores. Crystallized intelligence (verbal comprehension) accumulates throughout life and is strongly influenced by reading habits, formal education, and exposure to complex ideas. Fluid reasoning (pattern-based) is less influenced by learning.",
  },
  {
    question: "How can I improve verbal reasoning?",
    answer:
      "The most effective approach is sustained reading of complex material — academic articles, quality journalism, and nonfiction books with dense argumentation. Vocabulary building, logic puzzle solving, and practicing verbal analogy problems also show consistent gains.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Verbal Reasoning Test: What It Measures and How to Improve",
  description:
    "Learn what verbal reasoning tests measure in IQ assessments, how verbal comprehension relates to crystallized intelligence, and how to improve verbal reasoning skills.",
  publisher: { "@type": "Organization", name: "MyIQScores", url: "https://www.myiqscores.com" },
};

const VerbalReasoning = () => (
  <>
    <SEOHead
      title="Verbal Reasoning Test: What It Measures & How to Improve | MyIQScores"
      description="Understand what verbal reasoning tests measure in IQ assessments, the difference between vocabulary and verbal reasoning, and how to improve your verbal comprehension score."
      canonicalUrl="/tests/verbal-reasoning"
      ogType="article"
      jsonLd={[articleSchema]}
    />
    <ContentPage
      relatedPages={RELATED_PAGES}
      ctaText="Test your verbal reasoning — free IQ test, instant results"
      lastUpdated="May 2026"
      readingTime={5}
    >
      <h1>
        Verbal Reasoning Test:{" "}
        <span className="gradient-text">What It Measures</span>
      </h1>
      <p className="text-muted-foreground text-lg">
        Verbal reasoning tests evaluate how well you can analyze and reason with language — not just how large your
        vocabulary is. It's a core component of every major IQ battery and maps directly to verbal comprehension,
        one of the four primary cognitive abilities in the WAIS-IV.
      </p>

      <h2>Verbal Reasoning vs. Vocabulary</h2>
      <p>
        A common misconception is that verbal IQ tests just measure vocabulary. They don't. While vocabulary is
        measured as a subcomponent, the primary target is <strong>verbal reasoning</strong>: the ability to identify
        relationships between concepts, analyze arguments, draw inferences from text, and apply logic using language as
        the medium.
      </p>
      <p>
        In the CHC intelligence model, verbal reasoning maps to <strong>Crystallized Intelligence (Gc)</strong> — the
        accumulated product of education, reading, and language exposure. Unlike fluid intelligence (which peaks in
        young adulthood), Gc tends to remain stable or increase well into older age.
      </p>

      <h2>Common Verbal Reasoning Question Types</h2>
      <ul>
        <li>
          <strong>Verbal analogies</strong> — "Doctor is to patient as teacher is to ___"
        </li>
        <li>
          <strong>Synonyms and antonyms</strong> — select the word closest in meaning or opposite in meaning
        </li>
        <li>
          <strong>Sentence completion</strong> — fill in the blank with the word that best fits the context
        </li>
        <li>
          <strong>Reading comprehension</strong> — answer inference and reasoning questions about a passage
        </li>
        <li>
          <strong>Logical argument analysis</strong> — identify conclusions, assumptions, or flaws in an argument
        </li>
        <li>
          <strong>Word classification</strong> — identify the word that doesn't belong in a category
        </li>
      </ul>

      <h2>Verbal Reasoning in Major IQ Tests</h2>
      <p>The WAIS-IV (the gold-standard adult IQ test) includes a dedicated <strong>Verbal Comprehension Index (VCI)</strong> composed of:</p>
      <ul>
        <li><strong>Similarities</strong> — "In what way are a dog and a cat alike?"</li>
        <li><strong>Vocabulary</strong> — define a word precisely</li>
        <li><strong>Information</strong> — general knowledge questions</li>
        <li><strong>Comprehension</strong> (supplemental) — reasoning about social scenarios</li>
      </ul>
      <p>
        The Verbal Comprehension Index is one of four composite scores that make up the Full-Scale IQ. A high VCI with
        a lower Perceptual Reasoning Index (visual-spatial) suggests a "verbal" cognitive profile, common among strong
        readers and people in language-heavy fields.
      </p>

      <h2>Who Tends to Score High on Verbal Reasoning?</h2>
      <p>
        Verbal reasoning correlates strongly with reading volume, formal education level, and proficiency in the test
        language. Lawyers, writers, academics, and professionals who work extensively with complex written material
        tend to score in the top quartile.{" "}
        <Link to="/iq-by-career">See average IQ by career</Link> for how verbal ability maps to different professions.
      </p>

      <h2>How to Improve Verbal Reasoning</h2>
      <ul>
        <li>Read widely and deliberately — dense non-fiction, academic writing, and long-form journalism</li>
        <li>Build vocabulary systematically using spaced repetition (Anki)</li>
        <li>Practice verbal analogy problems from standardized test prep materials</li>
        <li>Summarize arguments in your own words to test comprehension</li>
        <li>Engage in structured debate or writing to develop precision in language use</li>
      </ul>

      <FAQSection items={faqItems} withSchema={true} />
    </ContentPage>
  </>
);

export default VerbalReasoning;
