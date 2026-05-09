import { useLocation, Link, Navigate } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import IQMeter from "@/components/IQMeter";
import Breadcrumb from "@/components/Breadcrumb";
import { getMajorBySlug, majorIQData } from "@/data/majorIQData";

const MajorIQ = () => {
  const { pathname } = useLocation();
  const slug = pathname.replace("/iq-by-major/", "");
  const major = slug ? getMajorBySlug(slug) : undefined;

  if (!major) return <Navigate to="/what-is-iq" replace />;

  const midIQ = Math.round((major.minIQ + major.maxIQ) / 2 / 5) * 5;

  const relatedPages = [
    { title: "IQ by College Major (Full Chart)", href: "/iq-by-major" },
    { title: `Is ${midIQ} IQ Good?`, href: `/is-${midIQ}-iq-good` },
    { title: "IQ Score Ranges Chart", href: "/iq-score-ranges" },
    ...major.relatedMajors.slice(0, 3).map((s) => {
      const m = majorIQData.find((x) => x.slug === s);
      return m ? { title: `IQ for ${m.major} Majors`, href: `/iq-by-major/${m.slug}` } : null;
    }).filter(Boolean) as { title: string; href: string }[],
    { title: "IQ by Career", href: "/iq-by-career" },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: major.faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.myiqscores.com" },
      { "@type": "ListItem", position: 2, name: "IQ by College Major", item: "https://www.myiqscores.com/iq-by-major" },
      { "@type": "ListItem", position: 3, name: `${major.major} Major IQ`, item: `https://www.myiqscores.com/iq-by-major/${major.slug}` },
    ],
  };

  const relatedMajorsList = major.relatedMajors
    .map((s) => majorIQData.find((m) => m.slug === s))
    .filter(Boolean);

  return (
    <ContentPage ctaText={`Think you have what it takes? Test your IQ now`} relatedPages={relatedPages}>
      <SEOHead
        title={`Average IQ for ${major.major} Majors | MyIQScores`}
        description={`What is the average IQ for ${major.major.toLowerCase()} majors? The average IQ range is ${major.avgIQRange}. Learn about the cognitive demands, SAT/GRE correlations, top schools, and career paths.`}
        canonicalUrl={`/iq-by-major/${major.slug}`}
        ogType="article"
        jsonLd={[faqSchema, breadcrumbSchema]}
      />

      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/" },
          { label: "IQ by College Major", href: "/iq-by-major" },
          { label: `${major.major} Major IQ` },
        ]}
      />

      <h1>
        Average IQ for <span className="gradient-text">{major.major}</span> Majors
      </h1>

      {/* IQ Meter for major midpoint */}
      <IQMeter score={Math.round((major.minIQ + major.maxIQ) / 2)} label={`Avg ${major.major}`} />

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4 my-6">
        <div className="glass-card p-5 text-center rounded-xl">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Average IQ Range</p>
          <p className="font-heading font-bold text-3xl gradient-text">{major.avgIQRange}</p>
        </div>
        <div className="glass-card p-5 text-center rounded-xl">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">IQ Classification</p>
          <p className="font-heading font-bold text-lg text-foreground">
            {major.minIQ >= 120 ? "Superior" : major.minIQ >= 110 ? "High Average" : "Average"} range
          </p>
        </div>
      </div>

      <h2>Overview</h2>
      <p>{major.description}</p>

      <p>
        To understand what these IQ ranges mean, see our{" "}
        <Link to="/iq-score-ranges">complete IQ score ranges guide</Link>. You can also check where
        specific scores fall:{" "}
        <Link to={`/is-${midIQ}-iq-good`}>Is {midIQ} IQ Good?</Link>
      </p>

      <h2>SAT &amp; GRE Correlation</h2>
      <p>{major.satCorrelation}</p>

      <p>
        For more on how standardized test scores relate to IQ, see our{" "}
        <Link to="/sat-to-iq">SAT to IQ conversion guide</Link> and{" "}
        <Link to="/gre-to-iq">GRE to IQ conversion guide</Link>.
      </p>

      <h2>Top Programs</h2>
      <ul>
        {major.topSchools.map((school) => (
          <li key={school}>{school}</li>
        ))}
      </ul>

      <h2>Career Paths</h2>
      <ul>
        {major.careerPaths.map((career) => (
          <li key={career}>{career}</li>
        ))}
      </ul>

      <p>
        Curious how these careers compare? See our{" "}
        <Link to="/iq-by-career">full IQ by career chart</Link>.
      </p>

      <h2>How Does {major.major} Compare to Other Majors?</h2>

      <table>
        <thead>
          <tr>
            <th>Major</th>
            <th>Average IQ Range</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-[rgba(0,229,255,0.05)]">
            <td><strong>{major.major}</strong></td>
            <td><strong>{major.avgIQRange}</strong></td>
          </tr>
          {relatedMajorsList.map((m) => m && (
            <tr key={m.slug}>
              <td><Link to={`/iq-by-major/${m.slug}`}>{m.major}</Link></td>
              <td>{m.avgIQRange}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Frequently Asked Questions</h2>
      {major.faqItems.map((item, i) => (
        <div key={i}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}

      <h2>Explore More Majors</h2>
      <div className="flex flex-wrap gap-3 my-4">
        {majorIQData
          .filter((m) => m.slug !== major.slug)
          .slice(0, 6)
          .map((m) => (
            <Link
              key={m.slug}
              to={`/iq-by-major/${m.slug}`}
              className="glass-card px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-[rgba(255,255,255,0.08)] transition-colors no-underline"
            >
              {m.major} ({m.avgIQRange})
            </Link>
          ))}
      </div>

      <p className="mt-6">
        Learn more about <Link to="/what-is-iq">what IQ measures</Link>, or{" "}
        <Link to="/test">take our free IQ test</Link> to see where you stand.
      </p>
    </ContentPage>
  );
};

export default MajorIQ;
