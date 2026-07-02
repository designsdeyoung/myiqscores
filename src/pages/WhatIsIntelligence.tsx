import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";

const RELATED_PAGES = [
  { title: "What Is IQ? Complete Guide", href: "/what-is-iq" },
  { title: "IQ vs EQ: What's the Difference?", href: "/iq-vs-eq" },
  { title: "Fluid vs Crystallized Intelligence", href: "/blog/fluid-vs-crystallized-intelligence" },
  { title: "Multiple Intelligences Theory", href: "/blog/multiple-intelligences-theory" },
  { title: "IQ Score Ranges", href: "/iq-score-ranges" },
  { title: "Free IQ Test", href: "/" },
];

const faqItems = [
  {
    question: "What is the simplest definition of intelligence?",
    answer:
      "The most widely cited research definition: a very general mental capability that involves the ability to reason, plan, solve problems, think abstractly, comprehend complex ideas, learn quickly, and learn from experience (Gottfredson, 1997, signed by 52 intelligence researchers).",
  },
  {
    question: "Is intelligence the same as IQ?",
    answer:
      "No. IQ is a score on a standardized test that estimates certain cognitive abilities — reasoning, memory, processing speed. Intelligence is the broader underlying capacity, which also expresses itself in ways tests don't fully capture, like creativity, judgment, and adaptive real-world problem-solving.",
  },
  {
    question: "What are the main theories of intelligence?",
    answer:
      "The dominant research framework is the Cattell-Horn-Carroll (CHC) model, which organizes abilities into a general factor (g) over broad abilities like fluid and crystallized intelligence. Alternative frameworks include Gardner's multiple intelligences and Sternberg's triarchic theory, which are popular in education but have weaker psychometric support.",
  },
  {
    question: "Is intelligence fixed or changeable?",
    answer:
      "Both, in parts. General cognitive ability is substantially heritable and relatively stable in adulthood, but education measurably raises it (roughly 1–5 IQ points per additional year of schooling), crystallized knowledge grows across life, and skills within any domain respond strongly to practice.",
  },
  {
    question: "Do animals have intelligence?",
    answer:
      "Yes — comparative psychology documents problem-solving, tool use, planning, and even numerical ability across species from corvids to primates to octopuses. Human intelligence is distinguished mainly by abstract symbolic reasoning and cumulative culture, not by problem-solving per se.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Is Intelligence? Definitions, Theories, and What Science Knows",
  description:
    "What intelligence actually means: the research definition, the g factor, CHC theory, multiple intelligences, and how intelligence relates to IQ scores.",
  publisher: { "@type": "Organization", name: "MyIQScores", url: "https://www.myiqscores.com" },
};

const WhatIsIntelligence = () => (
  <>
    <SEOHead
      title="What Is Intelligence? Definition, Theories & Science | MyIQScores"
      description="What is intelligence, really? The research definition, the g factor, fluid vs crystallized ability, multiple intelligences, and how it all relates to IQ."
      canonicalUrl="/what-is-intelligence"
      ogType="article"
      jsonLd={[articleSchema]}
    />
    <ContentPage
      relatedPages={RELATED_PAGES}
      ctaText="See how your reasoning measures — free IQ test"
      lastUpdated="July 2026"
      readingTime={7}
    >
      <h1>
        What Is <span className="gradient-text">Intelligence?</span>
      </h1>

      <div className="glass-card p-5 rounded-xl my-8 border-l-4 border-primary">
        <p className="text-xs uppercase tracking-widest text-primary font-bold mb-2">Quick Answer</p>
        <p className="text-foreground leading-relaxed m-0">
          Intelligence is the general mental capability to reason, plan, solve problems, think
          abstractly, comprehend complex ideas, and learn from experience. It is broader than any
          test score: IQ tests estimate core parts of it — reasoning, memory, processing speed —
          but not qualities like creativity, judgment, or practical skill.
        </p>
      </div>

      <h2>The Definition Researchers Actually Use</h2>
      <p>
        In 1997, 52 intelligence researchers signed a consensus statement defining intelligence as
        "a very general mental capability that, among other things, involves the ability to reason,
        plan, solve problems, think abstractly, comprehend complex ideas, learn quickly and learn
        from experience." Two things stand out in that definition: intelligence is <em>general</em>
        (it shows up across very different tasks) and it centers on <em>novelty</em> — handling
        situations you haven't rehearsed.
      </p>

      <h2>The g Factor: Why Abilities Travel Together</h2>
      <p>
        The foundational finding of intelligence research, replicated for over a century, is that
        performance on very different mental tasks correlates. People who excel at vocabulary tend
        to also do better than average at mental rotation, arithmetic, and memory tasks. Charles
        Spearman named the shared statistical core <strong>g</strong> — general cognitive ability —
        in 1904, and it remains the best-supported construct in psychometrics.
      </p>
      <p>
        Modern research organizes abilities in the <strong>Cattell-Horn-Carroll (CHC) model</strong>:
        g sits at the top, broad abilities beneath it — including{" "}
        <Link to="/blog/fluid-vs-crystallized-intelligence">fluid reasoning (Gf) and crystallized
        knowledge (Gc)</Link>, working memory, processing speed, and visual-spatial ability — and
        dozens of narrow skills below those. Every major modern IQ test is built on this model.
      </p>

      <h2>Competing Theories</h2>
      <p>
        <strong>Gardner's multiple intelligences</strong> (1983) proposed eight-plus independent
        intelligences — musical, bodily-kinesthetic, interpersonal, and more. The theory is beloved
        in education for widening what counts as talent, but psychometric studies consistently find
        the proposed intelligences correlate with each other and with g, undermining the claim of
        independence. Read our full guide to{" "}
        <Link to="/blog/multiple-intelligences-theory">multiple intelligences theory</Link>.
      </p>
      <p>
        <strong>Sternberg's triarchic theory</strong> splits intelligence into analytical, creative,
        and practical components. It highlights real gaps in what tests measure, though its own
        measurement instruments have shown mixed validity.{" "}
        <strong>Emotional intelligence</strong> — perceiving and managing emotions — captures
        socially crucial skills largely missed by IQ tests; see{" "}
        <Link to="/iq-vs-eq">IQ vs EQ</Link> for how the two relate.
      </p>

      <h2>Where Intelligence Comes From</h2>
      <p>
        Twin and adoption studies put the heritability of adult IQ around 50–80%, yet environment
        matters enormously: each additional year of schooling adds roughly 1–5 IQ points, early
        nutrition and health shape cognitive development, and raw test performance rose about 3
        points per decade through the 20th century (<Link to="/blog/flynn-effect">the Flynn
        effect</Link>) — far too fast for genetics to explain. Heritability describes variation
        within a population, not a limit on any individual. For the full picture, see{" "}
        <Link to="/blog/iq-genetics-nature-vs-nurture">nature vs nurture in IQ</Link>.
      </p>

      <h2>Intelligence vs IQ: The Map and the Territory</h2>
      <p>
        An IQ score is a snapshot of measured performance on reasoning, memory, and speed tasks,
        normed against your age group — a useful, reliable estimate of g. But the construct it
        estimates is wider than the test. Motivation, curiosity, creativity, wisdom, and practical
        judgment all shape how intelligence expresses itself in a life, and none appear on a score
        report. That's why psychologists treat IQ as one strong indicator among several, not a
        verdict. Learn <Link to="/what-is-iq">how IQ is measured</Link> and{" "}
        <Link to="/iq-score-ranges">what the score ranges mean</Link>.
      </p>

      <h2>Test Your Reasoning</h2>
      <p>
        The fastest way to make this concrete is to experience the tasks researchers use.{" "}
        <Link to="/">Our free 30-question test</Link> samples five domains — pattern recognition,
        logic, verbal, spatial, and numerical reasoning — and shows your profile across them in
        about 12 minutes.
      </p>

      <FAQSection items={faqItems} withSchema={true} />
    </ContentPage>
  </>
);

export default WhatIsIntelligence;
