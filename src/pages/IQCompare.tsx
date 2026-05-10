import { useLocation, Link, Navigate } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import { getCompareBySlug, iqCompareData } from "@/data/iqCompareData";

const IQCompare = () => {
  const { pathname } = useLocation();
  const slug = pathname.replace("/iq-compare/", "");
  const compare = slug ? getCompareBySlug(slug) : undefined;

  if (!compare) return <Navigate to="/what-is-iq" replace />;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: compare.faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const relatedComparisons = compare.relatedSlugs
    .map((s) => iqCompareData.find((c) => c.slug === s))
    .filter(Boolean) as typeof iqCompareData;

  const relatedPages = [
    ...relatedComparisons.map((c) => ({ title: c.title, href: `/iq-compare/${c.slug}` })),
    { title: "IQ Score Ranges", href: "/iq-score-ranges" },
    { title: "Famous People IQ Scores", href: "/famous-iq" },
    { title: "All IQ Comparisons", href: "/iq-compare" },
  ];

  return (
    <ContentPage relatedPages={relatedPages}>
      <SEOHead
        title={compare.metaTitle}
        description={compare.metaDescription}
        canonicalUrl={`/iq-compare/${compare.slug}`}
        ogType="article"
        jsonLd={faqSchema}
      />

      <h1>
        <span className="gradient-text">{compare.title}</span>
      </h1>

      <p className="text-lg text-muted-foreground mt-2 mb-8">{compare.overview}</p>

      {/* Side-by-side comparison */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
        {/* Side A */}
        <div className="glass-card p-6 rounded-xl border border-[rgba(255,255,255,0.08)]">
          <h2 className="font-heading text-xl font-bold text-foreground mb-1">
            {compare.sideA.label}
          </h2>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-4xl font-bold text-primary">{compare.sideA.avgIQ}</span>
            <span className="text-sm text-muted-foreground">avg IQ</span>
          </div>
          <p className="text-xs text-muted-foreground mb-3">
            Typical range: {compare.sideA.range}
          </p>
          <p className="text-sm text-muted-foreground">{compare.sideA.notes}</p>
        </div>

        {/* Side B */}
        <div className="glass-card p-6 rounded-xl border border-[rgba(255,255,255,0.08)]">
          <h2 className="font-heading text-xl font-bold text-foreground mb-1">
            {compare.sideB.label}
          </h2>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-4xl font-bold text-secondary">{compare.sideB.avgIQ}</span>
            <span className="text-sm text-muted-foreground">avg IQ</span>
          </div>
          <p className="text-xs text-muted-foreground mb-3">
            Typical range: {compare.sideB.range}
          </p>
          <p className="text-sm text-muted-foreground">{compare.sideB.notes}</p>
        </div>
      </div>

      <h2>Key Findings</h2>
      <ul>
        {compare.keyFindings.map((finding, i) => (
          <li key={i}>{finding}</li>
        ))}
      </ul>

      <h2>Verdict</h2>
      <div className="glass-card p-5 rounded-xl my-6">
        <p className="text-muted-foreground">{compare.verdict}</p>
      </div>

      <p>
        For more context, see{" "}
        <Link to="/iq-score-ranges">what different IQ scores actually mean</Link> and explore{" "}
        <Link to="/famous-iq">famous people's IQ scores</Link>.
      </p>

      <h2>Frequently Asked Questions</h2>
      {compare.faqItems.map((item, i) => (
        <div key={i}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}

      <h2>More IQ Comparisons</h2>
      <div className="flex flex-wrap gap-3 my-4">
        {relatedComparisons.map((c) => (
          <Link
            key={c.slug}
            to={`/iq-compare/${c.slug}`}
            className="glass-card px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-[rgba(255,255,255,0.08)] transition-colors no-underline"
          >
            {c.title}
          </Link>
        ))}
        <Link
          to="/iq-compare"
          className="glass-card px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-[rgba(255,255,255,0.08)] transition-colors no-underline"
        >
          View All Comparisons →
        </Link>
      </div>

      <p className="mt-6">
        <Link to="/test">Take our free IQ test</Link> to find out where you stand, or explore{" "}
        <Link to="/how-to-improve-iq">science-backed ways to improve your IQ</Link>.
      </p>
    </ContentPage>
  );
};

export default IQCompare;
