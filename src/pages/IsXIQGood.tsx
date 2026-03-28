import { useLocation, Link, Navigate } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import BellCurve from "@/components/BellCurve";
import { iqScoreData, getAdjacentScores, iqScores } from "@/data/iqScoreData";

const IsXIQGood = () => {
  const { pathname } = useLocation();
  const match = pathname.match(/\/is-(\d+)-iq-good/);
  const score = match ? Number(match[1]) : 0;
  const data = iqScoreData[score];

  if (!data) return <Navigate to="/iq-score-ranges" replace />;

  const adjacent = getAdjacentScores(score);

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

  return (
    <ContentPage ctaText="Think you can score higher? Take the free IQ test">
      <SEOHead
        title={`Is an IQ of ${score} Good? What It Means & Where You Stand | MyIQScores`}
        description={`Is ${score} a good IQ score? Learn what an IQ of ${score} means, what percentile it falls in, and what it says about your cognitive abilities.`}
        canonicalUrl={`/is-${score}-iq-good`}
        ogType="article"
        jsonLd={[faqSchema, articleSchema]}
      />

      <h1>
        Is an IQ of <span className="gradient-text">{score}</span> Good? What It Means &amp; Where You Stand
      </h1>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 my-8">
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

      <h2>How Does an IQ of {score} Compare?</h2>
      <p>
        Here's how a score of {score} compares to nearby IQ scores:
      </p>

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
