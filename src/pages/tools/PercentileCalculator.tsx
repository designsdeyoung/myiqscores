import { useState } from "react";
import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import BellCurve from "@/components/BellCurve";
import PercentileBar from "@/components/PercentileBar";
import Breadcrumb from "@/components/Breadcrumb";
import { iqPercentile, iqRarity, ordinal, formatRarity, classification } from "@/lib/iqMath";
import { trackToolUsed } from "@/lib/analytics";

const faqItems = [
  {
    question: "How is an IQ percentile calculated?",
    answer:
      "IQ tests are normed so scores follow a normal distribution with a mean of 100 and a standard deviation of 15. Your percentile is the share of the population scoring below you on that curve. An IQ of 100 is the 50th percentile, 115 is roughly the 84th, and 130 is roughly the 98th.",
  },
  {
    question: "What percentile is an IQ of 120?",
    answer:
      "An IQ of 120 sits at about the 91st percentile, meaning a score higher than roughly 9 out of 10 people. It falls in the superior range on most classification systems.",
  },
  {
    question: "Is a higher percentile always better?",
    answer:
      "A higher percentile means rarer performance on the test, but IQ measures a specific set of reasoning abilities, not worth or potential. Conscientiousness, creativity, and social skill all predict life outcomes independently of IQ.",
  },
  {
    question: "Why do different tests give slightly different percentiles?",
    answer:
      "Tests are normed on different samples in different years, and some use a standard deviation of 16 instead of 15. The same underlying performance can therefore land a point or two apart across tests. Treat percentiles as close estimates rather than exact figures.",
  },
];

const PercentileCalculator = () => {
  const [score, setScore] = useState(120);
  const pct = iqPercentile(score);
  const rarity = iqRarity(score);

  const handleChange = (v: number) => {
    const clamped = Math.max(40, Math.min(200, v));
    setScore(clamped);
    trackToolUsed("iq_percentile_calculator", { score: clamped });
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "IQ Percentile Calculator",
    url: "https://www.myiqscores.com/tools/iq-percentile-calculator",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <ContentPage ctaText="Want a score to plug in? Take the free IQ test">
      <SEOHead
        title="IQ Percentile Calculator: See Where Your Score Ranks"
        description="Enter any IQ score and instantly see your percentile, rarity (1 in X people), and where you land on the bell curve. Free, no sign-up."
        canonicalUrl="/tools/iq-percentile-calculator"
        jsonLd={[appSchema, faqSchema]}
      />

      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Tools", href: "/tools" }, { label: "IQ Percentile Calculator" }]} />

      <h1>
        <span className="gradient-text">IQ Percentile Calculator</span>
      </h1>
      <p>
        Enter an IQ score to see exactly where it falls in the population: the percentile, how rare
        the score is, and its position on the bell curve. The math uses the standard scoring model
        behind every major modern IQ test: a normal distribution with a mean of 100 and a standard
        deviation of 15.
      </p>

      {/* Interactive calculator */}
      <div className="glass-card p-6 rounded-xl my-8">
        <label htmlFor="iq-input" className="block text-sm text-muted-foreground mb-2">
          Your IQ score
        </label>
        <div className="flex items-center gap-4 flex-wrap">
          <input
            id="iq-input"
            type="number"
            min={40}
            max={200}
            value={score}
            onChange={(e) => handleChange(Number(e.target.value))}
            className="w-28 rounded-lg bg-background border border-[rgba(255,255,255,0.15)] px-4 py-3 text-2xl font-heading font-bold text-foreground"
          />
          <input
            type="range"
            min={40}
            max={200}
            value={score}
            onChange={(e) => handleChange(Number(e.target.value))}
            className="flex-1 min-w-[180px] accent-[hsl(var(--primary))]"
            aria-label="IQ score slider"
          />
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6">
          <div className="text-center">
            <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-1">Percentile</p>
            <p className="font-heading font-bold text-lg sm:text-2xl text-primary">{ordinal(pct)}</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-1">Rarity</p>
            <p className="font-heading font-bold text-lg sm:text-2xl text-foreground">{formatRarity(rarity)}</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-1">Classification</p>
            <p className="font-heading font-bold text-lg sm:text-2xl text-foreground">{classification(score)}</p>
          </div>
        </div>
      </div>

      <PercentileBar percentile={Math.round(pct)} label={`IQ ${score} Percentile Ranking`} />
      <div className="my-8">
        <BellCurve score={score} />
      </div>

      <p>
        See the full breakdown for this score on our{" "}
        <Link to={`/is-${Math.max(40, Math.min(200, Math.round(score)))}-iq-good`}>
          Is {Math.max(40, Math.min(200, Math.round(score)))} IQ good?
        </Link>{" "}
        page, or compare against the <Link to="/iq-percentile-chart">complete IQ percentile chart</Link>.
      </p>

      <h2>How the Calculation Works</h2>
      <p>
        IQ is a standardized score. When a test is developed, it is given to a large normative
        sample, and raw performance is mapped onto a scale where the average is 100 and one standard
        deviation is 15 points. That design choice means percentiles follow directly from the normal
        curve: a score of 115 is one standard deviation above the mean, which works out to about the
        84th percentile, while 130 is two standard deviations up, around the 98th. This calculator
        applies the exact cumulative normal distribution rather than a lookup table, so every score
        from 40 to 200 gets a mathematically precise percentile and rarity figure.
      </p>
      <p>
        Rarity is the same number viewed from the other direction. If a score sits at the 98th
        percentile, then roughly 1 person in 50 scores at that level or higher. Rarity grows
        explosively in the tails: moving from 130 to 145 takes you from 1 in 44 to roughly 1 in 741,
        and 160 is beyond 1 in 31,000. This is why claimed celebrity scores above 180 deserve
        skepticism: at that level there are only a few thousand people on Earth, and{" "}
        <Link to="/methodology">almost none of them have verified test results</Link>.
      </p>

      <h2>What Percentiles Mean in Practice</h2>
      <p>
        Percentiles are most useful for understanding relative standing, not for predicting any
        individual outcome. Research summarized in our guide to{" "}
        <Link to="/blog/iq-and-workplace">IQ in the workplace</Link> shows general cognitive ability
        is among the strongest single predictors of job performance, yet the correlation still
        leaves most of the variation unexplained. A 91st-percentile score opens no doors by itself,
        and a 40th-percentile score closes none. If you have not measured your score recently, our{" "}
        <Link to="/test">free 30-question IQ test</Link> gives an instant estimate you can bring
        back to this calculator.
      </p>

      <h2>Frequently Asked Questions</h2>
      {faqItems.map((f, i) => (
        <div key={i}>
          <h3>{f.question}</h3>
          <p>{f.answer}</p>
        </div>
      ))}

      <h2>More Free IQ Tools</h2>
      <ul>
        <li><Link to="/tools/iq-rarity">How Rare Is Your IQ?</Link>: shareable rarity card for any score</li>
        <li><Link to="/tools/sat-to-iq-converter">SAT, ACT and GRE to IQ Converter</Link>: estimate IQ from test scores</li>
        <li><Link to="/tools/celebrity-iq-match">Celebrity IQ Match</Link>: see which famous figures share your score</li>
      </ul>
    </ContentPage>
  );
};

export default PercentileCalculator;
