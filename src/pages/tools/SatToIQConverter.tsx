import { useState } from "react";
import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import Breadcrumb from "@/components/Breadcrumb";
import { CONVERSION_TABLES, testToIQ, iqToTest } from "@/lib/testConversions";
import { iqPercentile, ordinal } from "@/lib/iqMath";
import { nearestScore } from "@/lib/internalLinks";
import { trackToolUsed } from "@/lib/analytics";

const faqItems = [
  {
    question: "How accurate is converting SAT scores to IQ?",
    answer:
      "Research by Frey and Detterman (2004) found the SAT correlates around 0.7 to 0.8 with general cognitive ability, which makes it a strong but imperfect proxy. A converted figure is a reasonable estimate with an error band of roughly 5 to 10 IQ points, and heavy test prep can inflate a SAT score relative to underlying ability.",
  },
  {
    question: "What IQ does a 1400 SAT correspond to?",
    answer:
      "A 1400 SAT total maps to an estimated IQ of about 129 on this converter, putting it near the 97th percentile of the general population. The SAT-taking pool is more selective than the general population, which the regression mapping accounts for.",
  },
  {
    question: "Why does the GRE convert differently than the SAT?",
    answer:
      "GRE takers are college graduates planning postgraduate study, a much more selective group than SAT takers. The same numerical position within the GRE pool therefore represents a higher general-population percentile, and the mapping reflects that selectivity.",
  },
  {
    question: "Can I convert my IQ back to an expected SAT score?",
    answer:
      "Yes, the tool runs in both directions. Flip the direction toggle, enter an IQ, and it estimates the corresponding test score. The reverse estimate carries the same uncertainty as the forward one.",
  },
];

const SatToIQConverter = () => {
  const [tableId, setTableId] = useState<"sat" | "act" | "gre">("sat");
  const [reverse, setReverse] = useState(false);
  const [testScore, setTestScore] = useState(1300);
  const [iqInput, setIqInput] = useState(120);

  const table = CONVERSION_TABLES.find((t) => t.id === tableId)!;
  const estimatedIQ = testToIQ(table, Math.max(table.min, Math.min(table.max, testScore)));
  const estimatedTest = iqToTest(table, Math.max(40, Math.min(200, iqInput)));
  const pct = iqPercentile(reverse ? iqInput : estimatedIQ);

  const selectTable = (id: "sat" | "act" | "gre") => {
    setTableId(id);
    const t = CONVERSION_TABLES.find((x) => x.id === id)!;
    setTestScore(Math.max(t.min, Math.min(t.max, id === "sat" ? 1300 : id === "act" ? 26 : 315)));
    trackToolUsed("sat_to_iq_converter", { test: id });
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
    name: "SAT, ACT and GRE to IQ Converter",
    url: "https://www.myiqscores.com/tools/sat-to-iq-converter",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <ContentPage ctaText="Skip the conversion: measure your IQ directly">
      <SEOHead
        title="SAT to IQ Converter: ACT and GRE Supported, Both Ways"
        description="Convert SAT, ACT, or GRE scores to an estimated IQ instantly, or run it in reverse. Based on published correlation research. Free tool."
        canonicalUrl="/tools/sat-to-iq-converter"
        jsonLd={[appSchema, faqSchema]}
      />

      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Tools", href: "/tools" }, { label: "SAT to IQ Converter" }]} />

      <h1>
        <span className="gradient-text">SAT, ACT and GRE to IQ</span> Converter
      </h1>
      <p>
        Standardized test scores correlate strongly with general cognitive ability, strongly enough
        that researchers have published regression formulas linking them. This tool applies those
        published mappings to estimate IQ from an SAT, ACT, or GRE score, or to run the conversion
        in reverse. Every result is an estimate, not a measurement.
      </p>

      <div className="glass-card p-6 rounded-xl my-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {CONVERSION_TABLES.map((t) => (
            <button
              key={t.id}
              onClick={() => selectTable(t.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                tableId === t.id
                  ? "bg-primary text-primary-foreground"
                  : "glass-card text-foreground hover:bg-[rgba(255,255,255,0.08)]"
              }`}
            >
              {t.label}
            </button>
          ))}
          <button
            onClick={() => { setReverse((r) => !r); trackToolUsed("sat_to_iq_converter", { direction: reverse ? "to_iq" : "to_test" }); }}
            className="ml-auto px-4 py-2 rounded-lg text-sm font-medium glass-card text-primary hover:bg-[rgba(255,255,255,0.08)]"
          >
            {reverse ? `IQ → ${table.label}` : `${table.label} → IQ`} (switch)
          </button>
        </div>

        {!reverse ? (
          <>
            <label htmlFor="test-input" className="block text-sm text-muted-foreground mb-2">{table.scoreLabel}</label>
            <input
              id="test-input"
              type="number"
              min={table.min}
              max={table.max}
              step={table.step}
              value={testScore}
              onChange={(e) => setTestScore(Number(e.target.value))}
              className="w-36 rounded-lg bg-background border border-[rgba(255,255,255,0.15)] px-4 py-3 text-2xl font-heading font-bold text-foreground"
            />
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Estimated IQ</p>
                <p className="font-heading font-bold text-3xl gradient-text">{estimatedIQ}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Percentile</p>
                <p className="font-heading font-bold text-3xl text-foreground">{ordinal(pct)}</p>
              </div>
            </div>
          </>
        ) : (
          <>
            <label htmlFor="iq-rev-input" className="block text-sm text-muted-foreground mb-2">Your IQ (40-200)</label>
            <input
              id="iq-rev-input"
              type="number"
              min={40}
              max={200}
              value={iqInput}
              onChange={(e) => setIqInput(Number(e.target.value))}
              className="w-36 rounded-lg bg-background border border-[rgba(255,255,255,0.15)] px-4 py-3 text-2xl font-heading font-bold text-foreground"
            />
            <div className="mt-5 text-center">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Estimated {table.label} score</p>
              <p className="font-heading font-bold text-3xl gradient-text">{estimatedTest}</p>
            </div>
          </>
        )}
        <p className="text-xs text-muted-foreground mt-4 mb-0">{table.note}</p>
      </div>

      {!reverse && (
        <p>
          Curious what an IQ of {estimatedIQ} actually means? See the full percentile, career, and
          rarity breakdown on{" "}
          <Link to={`/is-${nearestScore(estimatedIQ)}-iq-good`}>our IQ {nearestScore(estimatedIQ)} page</Link>.
        </p>
      )}

      <h2>The Research Behind the Conversion</h2>
      <p>
        The SAT mapping follows Frey and Detterman&apos;s 2004 study in Psychological Science, which
        found SAT scores predict general cognitive ability about as well as some abbreviated IQ
        tests. The ACT mapping follows the 2008 follow-up by Koenig, Frey and Detterman, which
        reported a 0.77 correlation between ACT composites and g-loaded measures. GRE figures adjust
        for the selectivity of the graduate-bound population. We keep the full methodology, including
        each anchor point, documented on our <Link to="/methodology">methodology page</Link>.
      </p>
      <p>
        Three caveats matter. First, intensive prep moves test scores more than it moves underlying
        ability, so a heavily prepped 1500 likely overstates the converted IQ. Second, these exams
        weight verbal and quantitative reasoning differently than IQ batteries, which also include
        spatial and working-memory tasks; someone with an uneven profile converts less cleanly.
        Third, older SAT scales (pre-2016, and especially pre-1995) map differently, and this tool
        assumes the current 1600-point scale. For deeper dives, see our written guides to{" "}
        <Link to="/sat-to-iq">SAT to IQ</Link>, <Link to="/act-to-iq">ACT to IQ</Link>, and{" "}
        <Link to="/gre-to-iq">GRE to IQ</Link> conversion.
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
        <li><Link to="/tools/celebrity-iq-match">Celebrity IQ Match</Link>: famous figures at your score</li>
      </ul>
    </ContentPage>
  );
};

export default SatToIQConverter;
