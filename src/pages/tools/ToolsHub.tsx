import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import { Calculator, BarChart3, Sparkles, Users, Zap, Brain, Grid3X3, Eye, BookOpen, ListOrdered } from "lucide-react";

const tools = [
  {
    href: "/tools/reaction-time-test",
    title: "Reaction Time Test",
    desc: "Click when the box turns green. Five rounds, instant average, percentile rating.",
    Icon: Zap,
  },
  {
    href: "/tools/number-memory-test",
    title: "Number Memory Test",
    desc: "How many digits can you hold? Test your digit span against the famous 7 ± 2.",
    Icon: Brain,
  },
  {
    href: "/tools/sequence-memory-test",
    title: "Sequence Memory Test",
    desc: "Watch the tiles light up, repeat the pattern. One step longer every level.",
    Icon: Grid3X3,
  },
  {
    href: "/tools/visual-memory-test",
    title: "Visual Memory Test",
    desc: "Tiles flash and vanish — click where they were. Grids grow until you miss.",
    Icon: Eye,
  },
  {
    href: "/tools/verbal-memory-test",
    title: "Verbal Memory Test",
    desc: "Seen or new? Track a growing word list until three strikes end the run.",
    Icon: BookOpen,
  },
  {
    href: "/tools/digit-span-test",
    title: "Digit Span Test (Clinical Format)",
    desc: "Digits one at a time, forward and backward — the same format the WAIS uses.",
    Icon: ListOrdered,
  },
  {
    href: "/tools/iq-percentile-calculator",
    title: "IQ Percentile Calculator",
    desc: "Enter any score and instantly see your percentile, rarity, and bell curve position.",
    Icon: Calculator,
  },
  {
    href: "/tools/iq-rarity",
    title: "How Rare Is Your IQ?",
    desc: "A shareable 1-in-X rarity card with real-world crowd comparisons.",
    Icon: Sparkles,
  },
  {
    href: "/tools/sat-to-iq-converter",
    title: "SAT, ACT and GRE to IQ Converter",
    desc: "Research-based conversion between test scores and estimated IQ, in both directions.",
    Icon: BarChart3,
  },
  {
    href: "/tools/celebrity-iq-match",
    title: "Celebrity IQ Match",
    desc: "See which of 300+ famous figures share your estimated score.",
    Icon: Users,
  },
];

const ToolsHub = () => (
  <ContentPage ctaText="Start with the source: take the free IQ test">
    <SEOHead
      title="Free Brain Tests & IQ Tools: Reaction Time, Memory, Percentile"
      description="Ten free interactive tools: reaction time, number/visual/verbal/sequence memory, clinical digit span, IQ percentile calculator, rarity checker, and converters."
      canonicalUrl="/tools"
    />

    <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Tools" }]} />

    <h1>
      <span className="gradient-text">Free IQ Tools</span>
    </h1>
    <p>
      Ten fast, free, no-sign-up tools. The cognitive tests measure your reaction speed and
      working memory (verbal, visual, and sequential) directly in the browser; the calculators
      are built on the same statistics that power professional IQ scoring — a normal
      distribution with mean 100 and standard deviation 15.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
      {tools.map(({ href, title, desc, Icon }) => (
        <Link
          key={href}
          to={href}
          className="glass-card p-6 rounded-xl no-underline card-hover border-t-2"
          style={{ borderTopColor: "hsl(var(--primary) / 0.5)" }}
        >
          <Icon className="w-6 h-6 text-primary mb-3" />
          <h2 className="font-heading text-lg font-bold text-foreground mt-0 mb-2">{title}</h2>
          <p className="text-sm text-muted-foreground mb-0">{desc}</p>
        </Link>
      ))}
    </div>

    <h2>Which Tool Should You Use?</h2>
    <p>
      Start with the <Link to="/tools/iq-percentile-calculator">percentile calculator</Link> if you
      already have a score from any test and want to know what it means in population terms. It
      answers the most common question we get: is my number good? If you want the same answer in a
      form built for sharing, the <Link to="/tools/iq-rarity">rarity checker</Link> reframes your
      percentile as a 1-in-X figure with a crowd comparison, which lands better in a group chat than
      a percentile does. The <Link to="/tools/sat-to-iq-converter">test score converter</Link> is for
      people who never took an IQ test but have an SAT, ACT, or GRE score on record: published
      research maps those scores onto the IQ scale with useful accuracy, and the tool runs the
      conversion in both directions. The <Link to="/tools/celebrity-iq-match">celebrity matcher</Link>{" "}
      is the fun one: it pulls from the same database of 300+ estimated celebrity scores that powers
      our <Link to="/famous-iq">famous IQ profiles</Link>, with the same disclaimer that estimates
      are not verified results.
    </p>
    <p>
      A note on precision: professional IQ tests carry a standard error of about 3 points, and
      online estimates carry more. Treat every output here as a well-grounded approximation, and
      read our <Link to="/methodology">methodology page</Link> for exactly how each number is
      produced.
    </p>

    <h2>Why These Tools Exist</h2>
    <p>
      IQ statistics are often quoted but rarely shown. These tools make the underlying math
      explorable: how percentiles map to scores, how rarity explodes past 130, how standardized
      tests relate to measured ability, and how your score compares to publicly estimated celebrity
      figures. Every number is computed live from the normal distribution rather than from rounded
      lookup tables, and the conversion tools cite their research sources directly on the page. If
      you do not have a recent score to plug in, our <Link to="/test">free 30-question IQ test</Link>{" "}
      produces an instant estimate, and the <Link to="/iq-percentile-chart">IQ percentile chart</Link>{" "}
      and <Link to="/iq-score-ranges">score ranges guide</Link> provide the reference background.
    </p>
  </ContentPage>
);

export default ToolsHub;
