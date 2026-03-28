import { useLocation, Link, Navigate } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import { getAgeGroupBySlug, ageIQData } from "@/data/ageIQData";

const AgeIQ = () => {
  const { pathname } = useLocation();
  const slug = pathname.replace("/iq-by-age/", "");
  const ageGroup = slug ? getAgeGroupBySlug(slug) : undefined;

  if (!ageGroup) return <Navigate to="/what-is-iq" replace />;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ageGroup.faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const otherAgeGroups = ageIQData.filter((a) => a.slug !== ageGroup.slug);

  const relatedPages = [
    { title: "What Is IQ? Complete Guide", href: "/what-is-iq" },
    { title: "How to Improve Your IQ", href: "/how-to-improve-iq" },
    { title: "Does IQ Decrease with Age?", href: "/iq-myths/does-iq-decrease-with-age" },
    ...otherAgeGroups.slice(0, 3).map((a) => ({ title: `IQ for ${a.ageGroup}`, href: `/iq-by-age/${a.slug}` })),
    { title: "IQ Score Ranges", href: "/iq-score-ranges" },
  ];

  return (
    <ContentPage ctaText="Curious about your IQ? Take the free test" relatedPages={relatedPages}>
      <SEOHead
        title={`Average IQ for ${ageGroup.ageGroup}: What's Normal? | MyIQScores`}
        description={`What is a normal IQ for ${ageGroup.ageGroup.toLowerCase()}? Average IQ range is ${ageGroup.avgIQRange}. Learn how age affects intelligence and what to expect.`}
        canonicalUrl={`/iq-by-age/${ageGroup.slug}`}
        ogType="article"
        jsonLd={faqSchema}
      />

      <h1>
        Average IQ for <span className="gradient-text">{ageGroup.ageGroup}</span>
      </h1>

      <div className="glass-card p-5 text-center rounded-xl my-8">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Typical IQ Range</p>
        <p className="font-heading font-bold text-3xl gradient-text">{ageGroup.avgIQRange}</p>
        <p className="text-sm text-muted-foreground mt-2">Age-normed average is always 100</p>
      </div>

      <h2>IQ and {ageGroup.ageGroup}</h2>
      <p>{ageGroup.description}</p>

      <p>
        For a full explanation of how IQ scores work and what they measure, see our{" "}
        <Link to="/what-is-iq">complete guide to IQ</Link>. To understand what different score levels
        mean, check our <Link to="/iq-score-ranges">IQ score ranges page</Link>.
      </p>

      <h2>Key Factors Affecting IQ at This Age</h2>
      <p>{ageGroup.keyFactors}</p>

      <h2>IQ Across the Lifespan</h2>
      <table>
        <thead>
          <tr>
            <th>Age Group</th>
            <th>Typical Range</th>
            <th>Key Trend</th>
          </tr>
        </thead>
        <tbody>
          {ageIQData.map((a) => (
            <tr key={a.slug} className={a.slug === ageGroup.slug ? "bg-[rgba(0,229,255,0.05)]" : ""}>
              <td>
                {a.slug === ageGroup.slug ? (
                  <strong>{a.ageGroup}</strong>
                ) : (
                  <Link to={`/iq-by-age/${a.slug}`}>{a.ageGroup}</Link>
                )}
              </td>
              <td>{a.avgIQRange}</td>
              <td className="text-sm">
                {a.slug === "children" && "Rapid development, high variability"}
                {a.slug === "teenagers" && "Stabilizing, prefrontal cortex developing"}
                {a.slug === "young-adults" && "Fluid intelligence peaks"}
                {a.slug === "adults" && "Most stable period"}
                {a.slug === "older-adults" && "Knowledge peaks, speed declines"}
                {a.slug === "seniors" && "Crystallized stays, fluid declines"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Frequently Asked Questions</h2>
      {ageGroup.faqItems.map((item, i) => (
        <div key={i}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}

      <h2>Explore Other Age Groups</h2>
      <div className="flex flex-wrap gap-3 my-4">
        {otherAgeGroups.map((a) => (
          <Link
            key={a.slug}
            to={`/iq-by-age/${a.slug}`}
            className="glass-card px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-[rgba(255,255,255,0.08)] transition-colors no-underline"
          >
            {a.ageGroup}
          </Link>
        ))}
      </div>

      <p className="mt-6">
        <Link to="/test">Take our free IQ test</Link> to see where you stand, or learn{" "}
        <Link to="/how-to-improve-iq">how to improve your IQ</Link> at any age.
      </p>
    </ContentPage>
  );
};

export default AgeIQ;
