import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";

const RELATED_PAGES = [
  { title: "IQ Testing in Children", href: "/blog/iq-testing-in-children" },
  { title: "Gifted Children and IQ", href: "/blog/gifted-children-iq" },
  { title: "What Age Can a Child Take an IQ Test?", href: "/questions/what-age-can-a-child-take-an-iq-test" },
  { title: "IQ Test for Teens", href: "/iq-test-for-teens" },
  { title: "IQ Score Ranges", href: "/iq-score-ranges" },
];

const faqItems = [
  {
    question: "What is the best IQ test for kids?",
    answer:
      "The WISC-V (Wechsler Intelligence Scale for Children, ages 6–16) is the clinical standard, administered one-on-one by a psychologist. For ages 2.5–7.5 the WPPSI-IV is used, and the Stanford-Binet 5 covers ages 2 and up. School districts typically use one of these, sometimes preceded by a group screener like the CogAT or NNAT.",
  },
  {
    question: "Can my child take a real IQ test online?",
    answer:
      "No online test is clinically valid for children. Real pediatric IQ testing requires a trained examiner managing attention, rapport, and standardized conditions. Online quizzes — including ours, which is designed and normed for adults — can be a fun reasoning exercise for older kids but should never inform educational decisions.",
  },
  {
    question: "What IQ is considered gifted for a child?",
    answer:
      "Most US gifted programs use 130 (98th percentile) on a professionally administered test as the cutoff, though some districts use 125 or multi-criteria assessments that weigh achievement, creativity, and teacher recommendations alongside the score.",
  },
  {
    question: "How much does a children's IQ test cost?",
    answer:
      "Private psychoeducational evaluations typically run $200–$800 for cognitive testing alone and $1,500–$5,000 when learning-disability assessment is included. If a disability affecting education is suspected, US public schools are required under IDEA to evaluate at no cost.",
  },
  {
    question: "Will my child's IQ score change as they grow?",
    answer:
      "It can, meaningfully. Scores measured before age 5 correlate weakly with adult ability, stabilize considerably between 6 and 8, and can still shift 10–20 points through adolescence. Psychologists treat early scores as provisional snapshots, not fixed labels.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "IQ Test for Kids: How Children's IQ Testing Actually Works",
  description:
    "How IQ testing works for children: the WISC-V and WPPSI, gifted cutoffs, school evaluations, costs, and why online tests aren't valid for kids.",
  publisher: { "@type": "Organization", name: "MyIQScores", url: "https://www.myiqscores.com" },
};

const IQTestForKids = () => (
  <>
    <SEOHead
      title="IQ Test for Kids: How Children's Testing Works (Parent Guide) | MyIQScores"
      description="A parent's guide to IQ tests for kids: which tests professionals use (WISC-V, WPPSI), gifted cutoffs, free school evaluations, costs, and what scores really mean."
      canonicalUrl="/iq-test-for-kids"
      ogType="article"
      jsonLd={[articleSchema]}
    />
    <ContentPage
      relatedPages={RELATED_PAGES}
      ctaText="Parents: curious about your own score? Take the free adult test"
      lastUpdated="July 2026"
      readingTime={6}
    >
      <h1>
        IQ Test for Kids: <span className="gradient-text">A Parent's Guide</span>
      </h1>

      <div className="glass-card p-5 rounded-xl my-8 border-l-4 border-primary">
        <p className="text-xs uppercase tracking-widest text-primary font-bold mb-2">The Short Version</p>
        <p className="text-foreground leading-relaxed m-0">
          Valid IQ testing for children is done in person by a psychologist using the WISC-V
          (ages 6–16) or WPPSI-IV (ages 2.5–7.5). Schools must test for free when a learning
          disability is suspected; private evaluations run $200–$800+. No online IQ test —
          including ours — is valid for children or for educational decisions.
        </p>
      </div>

      <h2>Which Tests Professionals Actually Use</h2>
      <p>
        Pediatric IQ testing is its own discipline. The examiner manages attention span, builds
        rapport, and follows standardized start/stop rules — which is why results from a trained
        psychologist carry weight that no screen-based quiz can. The instruments you'll encounter:
      </p>
      <ul>
        <li><strong>WISC-V</strong> (ages 6–16) — the standard for school-age children; produces a full-scale IQ plus five index scores (verbal, visual-spatial, fluid reasoning, working memory, processing speed)</li>
        <li><strong>WPPSI-IV</strong> (ages 2.5–7.5) — the preschool Wechsler, with shorter, play-friendlier tasks</li>
        <li><strong>Stanford-Binet 5</strong> (ages 2+) — common alternative, strong at the extremes of ability</li>
        <li><strong>CogAT / NNAT / OLSAT</strong> — group-administered school screeners; not full IQ tests, but often the first gate into gifted programs</li>
      </ul>

      <h2>The Gifted Question</h2>
      <p>
        Most gifted programs set their bar at an IQ of 130 — the 98th percentile, roughly 1 in 44
        children. But the practical gate is usually a district screener (CogAT and similar) given
        to whole grade levels, with individual testing offered to top scorers. If your child
        misses a group-screener cutoff you believe undersells them, you can typically request
        individual evaluation or submit private testing — check your district's appeal process.
        For what the thresholds mean, see our guides to{" "}
        <Link to="/blog/gifted-children-iq">gifted children and IQ</Link> and{" "}
        <Link to="/iq-score-ranges">score ranges</Link>.
      </p>

      <h2>Free Testing Through Your School</h2>
      <p>
        Under the federal IDEA law, US public schools must conduct a comprehensive evaluation —
        including cognitive testing — at no cost when a disability affecting education is
        suspected, and parents can request this in writing. Timelines are regulated (typically 60
        days from consent). This route exists for identifying support needs, not gifted placement,
        but it's the same instruments administered by qualified staff.
      </p>

      <h2>What About Online Tests for Kids?</h2>
      <p>
        Be skeptical of any website offering a "kids IQ test." Children's scores are exquisitely
        sensitive to attention, motivation, reading level, and rapport — none of which a browser
        quiz can manage — and our own test is designed and normed for adults. Treat online
        puzzles as entertainment and practice, full stop. When a real decision rides on the
        number (placement, diagnosis, services), only a professionally administered test counts.
        Curious what a child's score even means at different ages? Start with{" "}
        <Link to="/questions/what-age-can-a-child-take-an-iq-test">what age children can be tested</Link>.
      </p>

      <FAQSection items={faqItems} withSchema={true} />
    </ContentPage>
  </>
);

export default IQTestForKids;
