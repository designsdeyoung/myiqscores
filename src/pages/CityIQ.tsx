import { useLocation, Link, Navigate } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import { fitTitle } from "@/lib/seo";
import IQMeter from "@/components/IQMeter";
import { getCityBySlug, cityIQData } from "@/data/cityIQData";

const CityIQ = () => {
  const { pathname } = useLocation();
  const slug = pathname.replace("/iq-by-city/", "");
  const city = slug ? getCityBySlug(slug) : undefined;

  if (!city) return <Navigate to="/what-is-iq" replace />;

  const relatedCities = city.relatedCities
    .map((s) => cityIQData.find((c) => c.slug === s))
    .filter(Boolean);

  const relatedPages = [
    { title: `Average IQ in ${city.country}`, href: `/average-iq/${city.countrySlug}` },
    ...relatedCities.slice(0, 3).map((c) =>
      c ? { title: `Average IQ in ${c.city}`, href: `/iq-by-city/${c.slug}` } : null
    ).filter(Boolean) as { title: string; href: string }[],
    { title: "Average IQ by Country", href: "/average-iq-by-country" },
    { title: "IQ Score Ranges Chart", href: "/iq-score-ranges" },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: city.faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.myiqscores.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "IQ by City",
        item: "https://www.myiqscores.com/iq-by-city",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: city.city,
        item: `https://www.myiqscores.com/iq-by-city/${city.slug}`,
      },
    ],
  };

  return (
    <ContentPage ctaText="Test your IQ and see how you compare" relatedPages={relatedPages}>
      <SEOHead
        title={fitTitle(`Average IQ in ${city.city}`, [`: ${city.estimatedAvgIQ} Estimate and Key Factors`, `: ${city.estimatedAvgIQ} Estimate`, `: ${city.estimatedAvgIQ}`])}
        description={`What is the average IQ in ${city.city}? Estimated average IQ of ${city.estimatedAvgIQ} (range ${city.avgIQRange}). Learn about the key factors shaping cognitive performance in ${city.city}.`}
        canonicalUrl={`/iq-by-city/${city.slug}`}
        ogType="article"
        jsonLd={[faqSchema, breadcrumbSchema]}
      />

      <h1>
        Average IQ in <span className="gradient-text">{city.city}</span> ({city.country}): Estimates &amp; Key Factors
      </h1>

      {/* IQ Meter */}
      <IQMeter score={city.estimatedAvgIQ} label={city.city} />

      {/* Score display cards */}
      <div className="grid grid-cols-3 gap-4 my-8">
        <div className="glass-card p-6 text-center rounded-xl">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Estimated Avg IQ</p>
          <p className="font-heading font-bold text-4xl gradient-text">{city.estimatedAvgIQ}</p>
        </div>
        <div className="glass-card p-6 text-center rounded-xl">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">IQ Range</p>
          <p className="font-heading font-bold text-2xl text-foreground">{city.avgIQRange}</p>
        </div>
        <div className="glass-card p-6 text-center rounded-xl">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Region</p>
          <p className="font-heading font-bold text-lg text-foreground">{city.continent}</p>
        </div>
      </div>

      {/* Description */}
      <p>{city.description}</p>

      {/* Disclaimer */}
      <div className="glass-card p-5 rounded-xl border-l-4 border-primary/40 my-8">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Important note:</strong> City-level IQ estimates are
          especially approximate. They reflect selection effects — cities attract educated, ambitious
          migrants — as well as local education quality, economic conditions, and available data.
          These figures do <strong>not</strong> reflect the intelligence or potential of any individual
          resident. For context on what IQ scores measure, see our{" "}
          <Link to="/what-is-iq">guide to IQ</Link>.
        </p>
      </div>

      {/* Key Factors */}
      <h2>Key Factors Shaping IQ in {city.city}</h2>
      <div className="glass-card p-6 rounded-xl my-6">
        <ul className="space-y-3 list-none pl-0">
          {city.keyFactors.map((factor, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-primary font-bold mt-0.5">•</span>
              <span>{factor}</span>
            </li>
          ))}
        </ul>
      </div>

      <p>
        To understand what IQ scores measure and how they're calculated, see our guide on{" "}
        <Link to="/what-is-iq">what IQ is</Link>. For a breakdown of what different score levels mean,
        visit our <Link to="/iq-score-ranges">IQ score ranges page</Link>.
      </p>

      {/* Country comparison */}
      <h2>{city.city} vs. {city.country} National Average</h2>
      <p>
        Cities typically score above national averages due to selection effects — highly educated and
        ambitious individuals tend to migrate toward economic and cultural capitals. {city.city}'s
        estimated average IQ of {city.estimatedAvgIQ} reflects this urban premium above{" "}
        <Link to={`/average-iq/${city.countrySlug}`}>{city.country}'s national average</Link>.
      </p>

      {/* FAQ */}
      <h2>Frequently Asked Questions</h2>
      {city.faqItems.map((item, i) => (
        <div key={i}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}

      {/* Related cities */}
      {relatedCities.length > 0 && (
        <>
          <h2>Explore More Cities</h2>
          <div className="flex flex-wrap gap-3 my-4">
            {relatedCities.map(
              (c) =>
                c && (
                  <Link
                    key={c.slug}
                    to={`/iq-by-city/${c.slug}`}
                    className="glass-card px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-[rgba(255,255,255,0.08)] transition-colors no-underline"
                  >
                    {c.city} ({c.estimatedAvgIQ})
                  </Link>
                )
            )}
          </div>
        </>
      )}

      <p className="mt-6">
        See all cities on our <Link to="/iq-by-city">Average IQ by City</Link> page, or{" "}
        <Link to="/test">take our free IQ test</Link> to see how you compare.
      </p>
    </ContentPage>
  );
};

export default CityIQ;
