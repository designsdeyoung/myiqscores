import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";

const RELATED_PAGES = [
  { title: "IQ Test for Kids", href: "/iq-test-for-kids" },
  { title: "IQ by Age Group", href: "/iq-by-age/teenagers" },
  { title: "SAT to IQ Conversion", href: "/sat-to-iq" },
  { title: "Practice IQ Test", href: "/practice-iq-test" },
  { title: "IQ Score Ranges", href: "/iq-score-ranges" },
];

const faqItems = [
  {
    question: "What is the average IQ for a teenager?",
    answer:
      "100 — the same as every age group, because scores are normed within age bands. A 15-year-old scoring 115 performed one standard deviation above other 15-year-olds. Raw ability is still rising through the teens, but the scoring system already accounts for that.",
  },
  {
    question: "Can a teenager take a real IQ test?",
    answer:
      "Yes. The WISC-V covers ages 6–16 and the adult WAIS-IV takes over at 16. Teens are also the age group where high-IQ society admission via testing becomes practical — Mensa accepts supervised scores from age 14 in many countries, and even younger with prior evidence.",
  },
  {
    question: "Do SAT or ACT scores show a teen's IQ?",
    answer:
      "Roughly. College admissions tests correlate strongly with IQ (r ≈ 0.7–0.8 in research using older SAT forms), which is why conversion estimates exist — see our SAT to IQ converter. But they also reflect preparation and coursework, so they're an imperfect proxy.",
  },
  {
    question: "Is a teen's IQ score final?",
    answer:
      "Mostly but not entirely. By mid-adolescence scores are quite stable, yet documented individual shifts of 10+ points between 14 and 18 exist — imaging studies link them to real structural brain changes. Treat a teen score as a strong estimate, not a ceiling.",
  },
  {
    question: "Should my teen prepare before taking an IQ test?",
    answer:
      "Light preparation is sensible and fair: familiarity with question formats removes novelty penalty, and a full night's sleep matters more than any drilling. Heavy coaching before a clinical or placement test distorts the result and can work against the teen's interests.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "IQ Test for Teens: Scores, Tests, and What They Mean at 13–19",
  description:
    "IQ testing for teenagers: WISC vs WAIS, what average means for teens, SAT/ACT conversions, Mensa eligibility, and how stable teen scores really are.",
  publisher: { "@type": "Organization", name: "MyIQScores", url: "https://www.myiqscores.com" },
};

const IQTestForTeens = () => (
  <>
    <SEOHead
      title="IQ Test for Teens: What Scores Mean at 13–19 | MyIQScores"
      description="IQ testing for teenagers explained: which tests apply (WISC-V vs WAIS-IV), what average means, SAT/ACT-to-IQ estimates, Mensa at 14+, and score stability."
      canonicalUrl="/iq-test-for-teens"
      ogType="article"
      jsonLd={[articleSchema]}
    />
    <ContentPage
      relatedPages={RELATED_PAGES}
      ctaText="16 or older? Take the free IQ-style test now"
      lastUpdated="July 2026"
      readingTime={6}
    >
      <h1>
        IQ Test for Teens: <span className="gradient-text">What Scores Mean at 13–19</span>
      </h1>

      <div className="glass-card p-5 rounded-xl my-8 border-l-4 border-primary">
        <p className="text-xs uppercase tracking-widest text-primary font-bold mb-2">The Short Version</p>
        <p className="text-foreground leading-relaxed m-0">
          Teens take the WISC-V through age 16 and the adult WAIS-IV from 16 up. Average is 100
          at every age because scores compare you to your own age group. Scores are fairly
          stable by mid-adolescence but can still move 10+ points. From 16, our free online
          test gives a reasonable adult-normed estimate; younger teens should treat it as practice.
        </p>
      </div>

      <h2>Which Test Applies to Your Age</h2>
      <ul>
        <li><strong>13–15</strong> — WISC-V, administered by a psychologist; group screeners (CogAT/PSAT) at school</li>
        <li><strong>16–19</strong> — WAIS-IV, the adult scale; online adult-normed tests become meaningful estimates</li>
        <li><strong>Mensa</strong> — supervised testing from age 14 in the US (younger with prior professional scores); the qualifying bar is the top 2% regardless of age</li>
      </ul>
      <p>
        The age norming is the key idea: a 14-year-old and a 45-year-old with the same score are
        equally far above <em>their own</em> age peers. That's also why "average teen IQ" is 100
        by definition — see <Link to="/iq-by-age/teenagers">IQ by age group</Link> for how raw
        ability develops beneath the constant average.
      </p>

      <h2>SAT, ACT, PSAT: The Tests Teens Already Take</h2>
      <p>
        College admissions tests overlap heavily with what IQ tests measure — older-format SAT
        scores correlated with g at roughly r = 0.7–0.8, among the strongest proxies known. If
        you have an SAT or ACT score, our <Link to="/sat-to-iq">SAT to IQ converter</Link> gives
        a research-based estimate without any additional testing. It's an estimate, not a
        diagnosis: prep courses move admissions scores in ways they can't move a supervised IQ test.
      </p>

      <h2>How Stable Is a Teen's Score?</h2>
      <p>
        More stable than a child's, less final than an adult's. A well-known 2011 imaging study
        (Ramsden et al., Nature) retested teens four years apart and found some shifted 15–20
        points, with corresponding structural brain changes — real change, not just measurement
        noise. The practical read: a teen score is a strong current estimate, and neither a
        guarantee nor a limit. What moves the needle is the boring stuff:{" "}
        <Link to="/blog/sleep-and-iq">sleep</Link>, challenge, and education —{" "}
        <Link to="/how-to-improve-iq">here's what the research supports</Link>.
      </p>

      <h2>Want a Number Today?</h2>
      <p>
        If you're 16+, <Link to="/">our free 30-question test</Link> uses adult norms and gives
        an instant estimate with a five-domain breakdown. Younger? Use it as format practice —
        the question types are the same ones you'll meet on the WISC, CogAT, and eventually the
        SAT, and format familiarity is the one prep advantage everyone agrees is fair.
      </p>

      <FAQSection items={faqItems} withSchema={true} />
    </ContentPage>
  </>
);

export default IQTestForTeens;
