import { useState } from "react";
import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import { famousIQData } from "@/data/famousIQData";
import { iqPercentile, ordinal } from "@/lib/iqMath";
import { nearestScore } from "@/lib/internalLinks";
import { trackToolUsed } from "@/lib/analytics";

const faqItems = [
  {
    question: "Are these celebrity IQ scores real?",
    answer:
      "They are estimates compiled from public sources such as documented academic records, reported test scores, and historiometric studies. Almost no public figure has released a verified, professionally administered IQ result, so every match here should be read as approximate.",
  },
  {
    question: "What does it mean to match a celebrity's IQ?",
    answer:
      "It means your score falls within a few points of the midpoint of that person's publicly estimated range. It is a fun comparison, not an equivalence: two people with identical IQ scores can have completely different cognitive profiles, skills, and accomplishments.",
  },
  {
    question: "Which celebrities have an IQ around 120?",
    answer:
      "The 115 to 125 band is the most heavily populated range in our database, including many successful actors, musicians, and athletes. Enter 120 in the matcher to see the current list, drawn from over 300 profiled figures.",
  },
];

const CelebrityIQMatch = () => {
  const [score, setScore] = useState(125);

  const handleChange = (v: number) => {
    const clamped = Math.max(40, Math.min(200, v));
    setScore(clamped);
    trackToolUsed("celebrity_iq_match", { score: clamped });
  };

  const matches = famousIQData
    .map((p) => ({ ...p, diff: Math.abs(p.estimatedIQMid - score) }))
    .filter((p) => p.diff <= 4)
    .sort((a, b) => a.diff - b.diff)
    .slice(0, 12);

  const pct = iqPercentile(score);

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
    name: "Celebrity IQ Match",
    url: "https://www.myiqscores.com/tools/celebrity-iq-match",
    applicationCategory: "EntertainmentApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <ContentPage ctaText="Get your real score first: take the free IQ test">
      <SEOHead
        title="Celebrity IQ Match: Which Famous People Share Your IQ?"
        description="Enter your IQ and instantly see which celebrities, scientists, and athletes share your estimated score, from a database of 300+ figures."
        canonicalUrl="/tools/celebrity-iq-match"
        jsonLd={[appSchema, faqSchema]}
      />

      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Tools", href: "/tools" }, { label: "Celebrity IQ Match" }]} />

      <h1>
        <span className="gradient-text">Celebrity IQ Match</span>
      </h1>
      <p>
        Enter your IQ score and see which famous figures are estimated to share it. Matches come
        from our database of more than 300 profiled scientists, entrepreneurs, athletes, musicians,
        actors, and historical figures, using the midpoint of each person&apos;s publicly estimated
        range.
      </p>
      <p className="text-sm text-muted-foreground">
        <strong>Note:</strong> celebrity scores are speculative estimates compiled from public
        sources, not verified results. <Link to="/methodology">How we compile estimates</Link>.
      </p>

      <div className="glass-card p-6 rounded-xl my-8">
        <label htmlFor="match-input" className="block text-sm text-muted-foreground mb-2">Your IQ score</label>
        <div className="flex items-center gap-4 flex-wrap">
          <input
            id="match-input"
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
        <p className="text-sm text-muted-foreground mt-3 mb-0">
          An IQ of {score} sits at the {ordinal(pct)} percentile, which would put you in the same
          estimated band as {matches.length > 0 ? `${matches.length} figures in our database` : "no one in our database; try a score closer to 100"}.
        </p>
      </div>

      {matches.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
          {matches.map((p) => (
            <Link
              key={p.slug}
              to={`/famous-iq/${p.slug}`}
              className="glass-card p-4 rounded-xl flex items-center justify-between gap-3 no-underline hover:bg-[rgba(255,255,255,0.06)] transition-colors"
            >
              <div>
                <p className="font-heading font-semibold text-foreground mb-0.5">{p.name}</p>
                <p className="text-xs text-muted-foreground mb-0">{p.field} · {p.knownFor}</p>
              </div>
              <span className="font-mono font-bold text-primary whitespace-nowrap">{p.estimatedIQ}</span>
            </Link>
          ))}
        </div>
      )}

      <p>
        Want the full breakdown of what a {score} means for percentile, careers, and rarity? See{" "}
        <Link to={`/is-${nearestScore(score)}-iq-good`}>Is {nearestScore(score)} IQ good?</Link> or
        browse the <Link to="/famous-iq">complete famous IQ list</Link>.
      </p>

      <h2>How the Matching Works</h2>
      <p>
        Each figure in our database carries an estimated IQ range compiled from public sources:
        documented academic records, standardized test scores where they have been reported,
        historiometric research for historical figures, and credible media analysis. We store the
        midpoint of that range and match it against your input within a four-point window, which is
        roughly the standard error of measurement on a professional IQ test. In other words, if you
        and a matched celebrity both took the same test on the same day, your scores would be
        statistically difficult to tell apart. The estimates themselves remain far less precise than
        a real test, which is why every profile page lists its sources and carries a disclaimer.
      </p>
      <p>
        The database skews toward high scores because public fascination does: there are far more
        circulated estimates for physicists and chess champions than for figures near the average.
        That is a sampling artifact of fame, not evidence that celebrities are smarter than everyone
        else. For an honest look at how much IQ actually predicts success, read our guide to{" "}
        <Link to="/blog/iq-vs-success">IQ versus success</Link>.
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
        <li><Link to="/tools/iq-percentile-calculator">IQ Percentile Calculator</Link>: percentile and rarity for any score</li>
        <li><Link to="/tools/iq-rarity">How Rare Is Your IQ?</Link>: shareable rarity card</li>
        <li><Link to="/tools/sat-to-iq-converter">SAT, ACT and GRE to IQ Converter</Link>: estimate IQ from test scores</li>
      </ul>
    </ContentPage>
  );
};

export default CelebrityIQMatch;
