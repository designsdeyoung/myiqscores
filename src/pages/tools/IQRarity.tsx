import { useState } from "react";
import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import BellCurve from "@/components/BellCurve";
import Breadcrumb from "@/components/Breadcrumb";
import { iqPercentile, iqRarity, ordinal, formatRarity, classification } from "@/lib/iqMath";
import { trackToolUsed, trackResultShared } from "@/lib/analytics";

// Concrete crowd sizes make "1 in N" tangible.
const crowdComparison = (n: number): string => {
  if (!Number.isFinite(n)) return "rarer than one person on Earth";
  if (n <= 3) return "common: you would find several in any room";
  if (n <= 12) return "about one per dinner party";
  if (n <= 50) return "about one per school classroom or two";
  if (n <= 250) return "about one per packed movie theater";
  if (n <= 2500) return "about one per large high school";
  if (n <= 20000) return "about one per basketball arena";
  if (n <= 100000) return "about one per packed football stadium";
  if (n <= 1500000) return "about one per mid-sized city";
  if (n <= 40000000) return "about one per large country region";
  return "a handful of people per country";
};

const faqItems = [
  {
    question: "How rare is an IQ of 130?",
    answer:
      "An IQ of 130 is two standard deviations above the mean, around the 98th percentile. Roughly 1 in 44 people score at or above this level, which is the common cutoff for gifted programs and high-IQ societies like Mensa.",
  },
  {
    question: "How rare is an IQ of 145 or higher?",
    answer:
      "About 1 in 741 people score 145 or above. At 160 the rarity reaches roughly 1 in 31,000, which is why claimed scores at or above that level for public figures are almost always speculative estimates rather than verified results.",
  },
  {
    question: "Is a rare IQ score always a high one?",
    answer:
      "Rarity is symmetric. An IQ of 70 is exactly as statistically rare as an IQ of 130, because the normal curve has two tails. This tool reports the rarity of the tail your score falls in.",
  },
];

const IQRarity = () => {
  const [score, setScore] = useState(130);
  const [copied, setCopied] = useState(false);
  const pct = iqPercentile(score);
  const rarity = iqRarity(score);

  const handleChange = (v: number) => {
    const clamped = Math.max(40, Math.min(200, v));
    setScore(clamped);
    setCopied(false);
    trackToolUsed("iq_rarity", { score: clamped });
  };

  const shareText = `My IQ of ${score} is ${formatRarity(rarity)} people (${ordinal(pct)} percentile). How rare is yours? Check at myiqscores.com/tools/iq-rarity`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    trackResultShared("copy");
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
    name: "How Rare Is Your IQ?",
    url: "https://www.myiqscores.com/tools/iq-rarity",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <ContentPage ctaText="Don't know your score yet? Take the free IQ test">
      <SEOHead
        title="How Rare Is Your IQ? Instant 1-in-X Rarity Checker"
        description="Find out exactly how rare your IQ is: 1 in how many people, your percentile, and a real-world crowd comparison. Free and shareable."
        canonicalUrl="/tools/iq-rarity"
        jsonLd={[appSchema, faqSchema]}
      />

      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Tools", href: "/tools" }, { label: "IQ Rarity" }]} />

      <h1>
        <span className="gradient-text">How Rare Is Your IQ?</span>
      </h1>
      <p>
        Every IQ score corresponds to an exact slice of the population. Enter yours and see the
        1-in-X rarity, your percentile, and a real-world comparison that makes the number tangible.
        Rarity is computed from the standard normal model used by all major IQ tests: mean 100,
        standard deviation 15.
      </p>

      <div className="glass-card p-6 rounded-xl my-8">
        <label htmlFor="rarity-input" className="block text-sm text-muted-foreground mb-2">Your IQ score</label>
        <div className="flex items-center gap-4 flex-wrap">
          <input
            id="rarity-input"
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

        <div className="text-center mt-6">
          <p className="font-heading font-bold text-4xl gradient-text mb-1">{formatRarity(rarity)}</p>
          <p className="text-sm text-muted-foreground">
            people score {score >= 100 ? "this high or higher" : "this low or lower"} ({ordinal(pct)} percentile,{" "}
            {classification(score)} range)
          </p>
          <p className="text-sm text-foreground mt-3">In crowd terms: {crowdComparison(rarity)}.</p>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={handleCopy}
            className="glow-button text-sm px-6 py-3"
          >
            {copied ? "Copied!" : "Copy my rarity card"}
          </button>
        </div>
      </div>

      <div className="my-8">
        <BellCurve score={score} />
      </div>

      <h2>Rarity Reference Table</h2>
      <table>
        <thead>
          <tr><th>IQ score</th><th>Percentile</th><th>Rarity</th></tr>
        </thead>
        <tbody>
          {[100, 110, 120, 130, 140, 145, 150, 160].map((s) => (
            <tr key={s}>
              <td><Link to={`/is-${s}-iq-good`}>IQ {s}</Link></td>
              <td>{ordinal(iqPercentile(s))}</td>
              <td>{formatRarity(iqRarity(s))}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Why Rarity Explodes in the Tails</h2>
      <p>
        The normal distribution is dense in the middle and vanishingly thin at the edges. Half the
        population scores between 90 and 110, so a ten-point move near the average barely changes
        rarity. Past 130, every additional ten points cuts the qualifying population by an order of
        magnitude or more. That asymmetry explains two things you see across this site: why{" "}
        <Link to="/genius-iq">genius-range scores</Link> dominate public fascination, and why our{" "}
        <Link to="/famous-iq">celebrity IQ estimates</Link> above 160 carry explicit disclaimers.
        Population statistics simply do not support a world full of verified 180s. For the deeper
        statistics, see our <Link to="/iq-percentile-chart">IQ percentile chart</Link> and the guide
        to <Link to="/iq-score-ranges">IQ score ranges</Link>.
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
        <li><Link to="/tools/iq-percentile-calculator">IQ Percentile Calculator</Link>: full percentile breakdown</li>
        <li><Link to="/tools/sat-to-iq-converter">SAT, ACT and GRE to IQ Converter</Link>: estimate IQ from test scores</li>
        <li><Link to="/tools/celebrity-iq-match">Celebrity IQ Match</Link>: famous figures at your score</li>
      </ul>
    </ContentPage>
  );
};

export default IQRarity;
