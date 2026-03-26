import { useLocation, Link, Navigate } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import { getCountryBySlug, countryIQData } from "@/data/countryIQData";

const CountryIQ = () => {
  const { pathname } = useLocation();
  const slug = pathname.replace("/average-iq/", "");
  const country = slug ? getCountryBySlug(slug) : undefined;

  if (!country) return <Navigate to="/average-iq-by-country" replace />;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: country.faqItems.map((item) => ({
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
    headline: `Average IQ in ${country.name}: Score, Ranking & Analysis`,
    description: country.metaDescription,
    publisher: {
      "@type": "Organization",
      name: "MyIQScores",
      url: "https://myiqscores.com",
    },
  };

  // Get related country data
  const relatedCountries = country.relatedCountries
    .map((s) => countryIQData.find((c) => c.slug === s))
    .filter(Boolean);

  // Get countries in same continent for comparison
  const continentPeers = countryIQData
    .filter((c) => c.continent === country.continent && c.slug !== country.slug)
    .sort((a, b) => a.rank - b.rank)
    .slice(0, 5);

  // Get similarly ranked countries globally
  const similarRanked = countryIQData
    .filter((c) => Math.abs(c.rank - country.rank) <= 10 && c.slug !== country.slug)
    .sort((a, b) => a.rank - b.rank)
    .slice(0, 5);

  return (
    <ContentPage ctaText="Test your IQ and see how you compare">
      <SEOHead
        title={`Average IQ in ${country.name}: ${country.avgIQ}, Ranked #${country.rank} Globally | MyIQScores`}
        description={country.metaDescription}
        canonicalUrl={`/average-iq/${country.slug}`}
        ogType="article"
        jsonLd={[faqSchema, articleSchema]}
      />

      <h1>
        Average IQ in <span className="gradient-text">{country.name}</span>: Score, Ranking &amp; Analysis
      </h1>

      {/* Prominent Score Display */}
      <div className="grid grid-cols-3 gap-4 my-8">
        <div className="glass-card p-6 text-center rounded-xl">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Average IQ</p>
          <p className="font-heading font-bold text-4xl gradient-text">{country.avgIQ}</p>
        </div>
        <div className="glass-card p-6 text-center rounded-xl">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Global Ranking</p>
          <p className="font-heading font-bold text-4xl text-foreground">#{country.rank}</p>
          <p className="text-xs text-muted-foreground mt-1">out of ~199 countries</p>
        </div>
        <div className="glass-card p-6 text-center rounded-xl">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Region</p>
          <p className="font-heading font-bold text-lg text-foreground">{country.continent}</p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="glass-card p-5 rounded-xl border-l-4 border-primary/40 my-8">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Important note:</strong> National average IQ scores are
          estimates based on limited sample sizes and vary across studies. These figures are heavily
          influenced by socioeconomic factors, access to quality education, healthcare, nutrition, and
          testing conditions. They do <strong>not</strong> reflect the intelligence or potential of any
          individual from that country. IQ scores measure specific cognitive skills and should be
          interpreted within their proper scientific context.
        </p>
      </div>

      <h2>Education System in {country.name}</h2>
      <p>{country.educationOverview}</p>

      <p>
        To understand what IQ scores measure and how they're calculated, see our guide on{" "}
        <Link to="/what-is-iq">what IQ is</Link>. For a breakdown of what different score levels mean,
        visit our <Link to="/iq-score-ranges">IQ score ranges page</Link>.
      </p>

      {/* Continent Comparison */}
      {continentPeers.length > 0 && (
        <>
          <h2>{country.name} Compared to {country.continent}</h2>
          <p>
            Here is how {country.name} compares to other countries in {country.continent} that are
            included in our database:
          </p>
          <table>
            <thead>
              <tr>
                <th>Country</th>
                <th>Average IQ</th>
                <th>Global Rank</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[rgba(0,229,255,0.05)]">
                <td><strong>{country.name}</strong></td>
                <td><strong>{country.avgIQ}</strong></td>
                <td><strong>#{country.rank}</strong></td>
              </tr>
              {continentPeers.map((c) => (
                <tr key={c!.slug}>
                  <td>
                    <Link to={`/average-iq/${c!.slug}`}>{c!.name}</Link>
                  </td>
                  <td>{c!.avgIQ}</td>
                  <td>#{c!.rank}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {/* Similarly Ranked Countries */}
      {similarRanked.length > 0 && (
        <>
          <h2>Countries with Similar Rankings</h2>
          <p>
            These countries have similar average IQ scores and global rankings to {country.name}:
          </p>
          <table>
            <thead>
              <tr>
                <th>Country</th>
                <th>Average IQ</th>
                <th>Global Rank</th>
                <th>Region</th>
              </tr>
            </thead>
            <tbody>
              {similarRanked.map((c) => (
                <tr key={c.slug}>
                  <td>
                    <Link to={`/average-iq/${c.slug}`}>{c.name}</Link>
                  </td>
                  <td>{c.avgIQ}</td>
                  <td>#{c.rank}</td>
                  <td>{c.continent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      <h2>Understanding IQ Distribution</h2>
      <p>
        It's crucial to remember that national averages represent the middle of a wide distribution.
        Within every country, individual IQ scores span the full range from below 70 to above 130 and
        beyond. A country with an average IQ of {country.avgIQ} will have many individuals scoring well
        above and below that number. Factors like socioeconomic status, nutrition, education quality, and
        access to healthcare play significant roles in cognitive development and test performance.
      </p>
      <p>
        The Flynn Effect — the observation that IQ scores have risen substantially over time in many
        countries — suggests that environmental improvements like better nutrition, healthcare, and
        education access can significantly impact cognitive test performance at the population level.
        Many developing nations are experiencing rapid improvements in these areas.
      </p>

      <h2>Frequently Asked Questions</h2>
      {country.faqItems.map((item, i) => (
        <div key={i}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}

      {/* Related Countries */}
      <h2>Explore More Countries</h2>
      <div className="flex flex-wrap gap-3 my-4">
        {relatedCountries.map(
          (c) =>
            c && (
              <Link
                key={c.slug}
                to={`/average-iq/${c.slug}`}
                className="glass-card px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-[rgba(255,255,255,0.08)] transition-colors no-underline"
              >
                {c.name} ({c.avgIQ})
              </Link>
            ),
        )}
      </div>

      <p className="mt-6">
        See the full list of all countries on our{" "}
        <Link to="/average-iq-by-country">Average IQ by Country</Link> page, or{" "}
        <Link to="/test">take our free IQ test</Link> to see how you compare.
      </p>
    </ContentPage>
  );
};

export default CountryIQ;
