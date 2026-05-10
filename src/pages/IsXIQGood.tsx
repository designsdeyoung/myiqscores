import { useLocation, Link, Navigate } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import BellCurve from "@/components/BellCurve";
import IQMeter from "@/components/IQMeter";
import PercentileBar from "@/components/PercentileBar";
import ComparisonChart from "@/components/ComparisonChart";
import Breadcrumb from "@/components/Breadcrumb";
import { iqScoreData, getAdjacentScores, iqScores } from "@/data/iqScoreData";
import { iqExtendedData } from "@/data/iqExtendedData";
import { iqExtendedDataMid } from "@/data/iqExtendedDataMid";
import { iqExtendedDataHigh } from "@/data/iqExtendedDataHigh";
import { famousIQData } from "@/data/famousIQData";
import { careerIQData } from "@/data/careerIQData";

const IsXIQGood = () => {
  const { pathname } = useLocation();
  const match = pathname.match(/\/is-(\d+)-iq-good/);
  const score = match ? Number(match[1]) : 0;
  const data = iqScoreData[score];
  const extended = iqExtendedData[score] ?? iqExtendedDataMid[score] ?? iqExtendedDataHigh[score] ?? null;

  if (!data) return <Navigate to="/iq-score-ranges" replace />;

  const adjacent = getAdjacentScores(score);

  const relatedPages = [
    { title: "What Is IQ? Complete Guide", href: "/what-is-iq" },
    { title: "IQ Score Ranges Chart", href: "/iq-score-ranges" },
    { title: "IQ Percentile Chart", href: "/iq-percentile-chart" },
    { title: "What Is a Good IQ Score?", href: "/good-iq-score" },
    ...adjacent.map((s) => ({ title: `Is ${s} IQ Good?`, href: `/is-${s}-iq-good` })),
    score >= 130 ? { title: "Genius IQ Guide", href: "/genius-iq" } : { title: "How to Improve Your IQ", href: "/how-to-improve-iq" },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Is an IQ of ${score} Good? What It Means & Where You Stand`,
    description: `Is ${score} a good IQ score? Learn what an IQ of ${score} means, what percentile it falls in, and what it says about your cognitive abilities.`,
    publisher: {
      "@type": "Organization",
      name: "MyIQScores",
      url: "https://www.myiqscores.com",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.myiqscores.com" },
      { "@type": "ListItem", position: 2, name: "IQ Score Ranges", item: "https://www.myiqscores.com/iq-score-ranges" },
      { "@type": "ListItem", position: 3, name: `Is ${score} IQ Good?`, item: `https://www.myiqscores.com/is-${score}-iq-good` },
    ],
  };

  const pctNum = parseFloat(data.percentile);
  let seoTitle: string;
  if (score <= 79) {
    seoTitle = `Is ${score} IQ Low? What It Actually Means | MyIQScores`;
  } else if (score <= 89) {
    seoTitle = `Is ${score} IQ Good? Here's Where You Stand | MyIQScores`;
  } else if (score <= 109) {
    seoTitle = `Is ${score} IQ Good? You're ${data.percentile} Percentile | MyIQScores`;
  } else if (score <= 119) {
    seoTitle = `Is ${score} IQ Good? Smarter Than ${Math.round(pctNum)}% of People | MyIQScores`;
  } else if (score <= 129) {
    const topPct = Math.round(100 - pctNum);
    seoTitle = `Is ${score} IQ Good? Top ${topPct}% — Here's What It Means | MyIQScores`;
  } else if (score <= 139) {
    seoTitle = `Is ${score} IQ Good? Gifted Range Explained | MyIQScores`;
  } else {
    seoTitle = `Is ${score} IQ Good? Genius-Level Breakdown | MyIQScores`;
  }
  const seoDesc = `Is ${score} a good IQ? At the ${data.percentile} percentile, you score higher than ${pctNum}% of people. See what this ${data.classification.toLowerCase()} score means for careers and life.`;

  const citations = [
    {
      author: "Wechsler, D.",
      year: 2008,
      text: "Wechsler Adult Intelligence Scale — Fourth Edition (WAIS-IV): Administration and Scoring Manual. Pearson.",
    },
    {
      author: "Gottfredson, L. S.",
      year: 1997,
      text: "Why g matters: The complexity of everyday life. Intelligence, 24(1), 79–132.",
      url: "https://doi.org/10.1016/S0160-2896(97)90014-3",
    },
    {
      author: "Schmidt, F. L., & Hunter, J. E.",
      year: 1998,
      text: "The validity and utility of selection methods in personnel psychology: Practical and theoretical implications of 85 years of research findings. Psychological Bulletin, 124(2), 262–274.",
      url: "https://doi.org/10.1037/0033-2909.124.2.262",
    },
    {
      author: "Deary, I. J., Strand, S., Smith, P., & Fernandes, C.",
      year: 2007,
      text: "Intelligence and educational achievement. Intelligence, 35(1), 13–21.",
      url: "https://doi.org/10.1016/j.intell.2006.02.001",
    },
  ];

  return (
    <ContentPage ctaText="Think you can score higher? Take the free IQ test" relatedPages={relatedPages} citations={citations}>
      <SEOHead
        title={seoTitle}
        description={seoDesc}
        canonicalUrl={`/is-${score}-iq-good`}
        ogType="article"
        jsonLd={[faqSchema, articleSchema, breadcrumbSchema]}
      />

      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "IQ Score Ranges", href: "/iq-score-ranges" }, { label: `Is ${score} IQ Good?` }]} />

      <h1>
        Is an IQ of <span className="gradient-text">{score}</span> Good? What It Means &amp; Where You Stand
      </h1>

      {/* IQ Meter Visual */}
      <div className="my-8">
        <IQMeter score={score} />
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 my-4">
        <div className="glass-card p-3 sm:p-4 text-center rounded-xl">
          <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-1">Classification</p>
          <p className="font-heading font-bold text-sm sm:text-lg text-foreground">{data.classification}</p>
        </div>
        <div className="glass-card p-3 sm:p-4 text-center rounded-xl">
          <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-1">Percentile</p>
          <p className="font-heading font-bold text-sm sm:text-lg text-primary">{data.percentile}</p>
        </div>
        <div className="glass-card p-3 sm:p-4 text-center rounded-xl">
          <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-1">Rarity</p>
          <p className="font-heading font-bold text-sm sm:text-lg text-foreground">{data.rarity}</p>
        </div>
      </div>

      {/* Percentile Bar */}
      <PercentileBar
        percentile={parseInt(data.percentile)}
        label={`IQ ${score} Percentile Ranking`}
      />

      {/* Bell Curve */}
      <div className="my-8">
        <BellCurve score={score} />
      </div>

      <h2>What Does an IQ of {score} Mean?</h2>
      <p>{data.detailedExplanation}</p>

      <p>
        An IQ of {score} places you at the <strong>{data.percentile} percentile</strong>, which means you
        scored higher than approximately {data.percentile.replace(/[a-z]/g, "")}% of the general population
        on a standardized intelligence test. This score falls into the{" "}
        <strong>{data.classification}</strong> range on the IQ scale. With a rarity of{" "}
        <strong>{data.rarity}</strong>, this score is{" "}
        {score >= 120
          ? "uncommon and indicates strong cognitive abilities"
          : score >= 90
            ? "within the range where most people score"
            : "less common, but IQ is just one measure of cognitive ability"}
        .
      </p>

      <p>
        To understand how IQ scores are calculated and what they measure, see our complete guide on{" "}
        <Link to="/what-is-iq">what IQ is and how it works</Link>. For a full breakdown of all score
        ranges and their meanings, visit our{" "}
        <Link to="/iq-score-ranges">IQ score ranges page</Link>.
      </p>

      <h2>Career Context for an IQ of {score}</h2>
      <p>{data.careerContext}</p>

      {extended && (
        <>
          <h2>Cognitive Profile at IQ {score}</h2>
          <p>{extended.cognitiveProfile}</p>

          <h2>What Research Says About IQ {score}</h2>
          <p>{extended.researchContext}</p>

          <h2>Day-to-Day Life with an IQ of {score}</h2>
          <p>{extended.realWorldScenarios}</p>

          {extended.satEquivalent > 0 && (
            <div className="grid grid-cols-2 gap-4 my-6">
              <div className="glass-card p-4 text-center rounded-xl">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">SAT Equivalent</p>
                <p className="font-heading font-bold text-2xl text-primary">{extended.satEquivalent}</p>
                <p className="text-xs text-muted-foreground mt-1">old 1600 scale</p>
              </div>
              <div className="glass-card p-4 text-center rounded-xl">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">ACT Equivalent</p>
                <p className="font-heading font-bold text-2xl text-primary">{extended.actEquivalent}</p>
                <p className="text-xs text-muted-foreground mt-1">composite score</p>
              </div>
            </div>
          )}
        </>
      )}

      <h2>How Does an IQ of {score} Compare?</h2>
      <p>
        Here's how a score of {score} compares to nearby IQ scores:
      </p>

      {/* Visual comparison chart */}
      <ComparisonChart
        title="Nearby IQ Score Comparison"
        items={iqScores
          .filter((s) => Math.abs(s - score) <= 15)
          .slice(0, 7)
          .map((s) => ({
            label: `IQ ${s} — ${iqScoreData[s]?.classification || ""}`,
            value: s,
            href: s !== score ? `/is-${s}-iq-good` : undefined,
            highlight: s === score,
          }))}
        maxValue={160}
      />

      <table>
        <thead>
          <tr>
            <th>Score</th>
            <th>Classification</th>
            <th>Percentile</th>
          </tr>
        </thead>
        <tbody>
          {iqScores
            .filter((s) => Math.abs(s - score) <= 15 && s !== score)
            .slice(0, 5)
            .map((s) => (
              <tr key={s}>
                <td>
                  <Link to={`/is-${s}-iq-good`}>IQ {s}</Link>
                </td>
                <td>{iqScoreData[s].classification}</td>
                <td>{iqScoreData[s].percentile}</td>
              </tr>
            ))}
        </tbody>
      </table>

      <h2>Frequently Asked Questions</h2>
      {data.faqItems.map((item, i) => (
        <div key={i}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}

      {/* Famous People at this IQ */}
      {(() => {
        const famous = famousIQData.filter((p) => {
          const iq = parseInt(p.estimatedIQ);
          return !isNaN(iq) && Math.abs(iq - score) <= 5;
        }).slice(0, 5);
        if (famous.length === 0) return null;
        return (
          <>
            <h2>Famous People with an IQ Around {score}</h2>
            <p>The following well-known figures have estimated IQ scores close to {score}:</p>
            <ul>
              {famous.map((p) => (
                <li key={p.slug}>
                  <Link to={`/famous-iq/${p.slug}`}>{p.name}</Link> — {p.knownFor} (estimated IQ: {p.estimatedIQ})
                </li>
              ))}
            </ul>
          </>
        );
      })()}

      {/* Careers for this IQ Range */}
      {(() => {
        const careers = careerIQData.filter((c) => score >= c.minIQ - 5 && score <= c.maxIQ + 5).slice(0, 5);
        if (careers.length === 0) return null;
        return (
          <>
            <h2>Careers That Suit an IQ of {score}</h2>
            <p>People with an IQ around {score} are well-suited for the following career paths:</p>
            <ul>
              {careers.map((c) => (
                <li key={c.slug}>
                  <Link to={`/iq-needed-for/${c.slug}`}>{c.career}</Link> — average IQ range: {c.avgIQRange}
                </li>
              ))}
            </ul>
            <p>See the full <Link to="/iq-by-career">IQ by career chart</Link> for all professions.</p>
          </>
        );
      })()}

      {/* Adjacent Score Links */}
      <h2>Explore Other IQ Scores</h2>
      <div className="flex flex-wrap gap-3 my-4">
        {adjacent.map((s) => (
          <Link
            key={s}
            to={`/is-${s}-iq-good`}
            className="glass-card px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-[rgba(255,255,255,0.08)] transition-colors no-underline"
          >
            Is {s} IQ Good?
          </Link>
        ))}
      </div>

      <p className="mt-6">
        <Link to="/test">Take our free IQ test</Link> to find out where you stand, or learn more about{" "}
        <Link to="/what-is-iq">what IQ really measures</Link>.
      </p>
    </ContentPage>
  );
};

export default IsXIQGood;
