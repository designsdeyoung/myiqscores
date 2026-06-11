import { useLocation, Link, Navigate } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import { fitTitle, preferTitle } from "@/lib/seo";
import { ringNeighbors } from "@/lib/internalLinks";
import { getConditionBySlug, conditionIQData } from "@/data/conditionIQData";

const ConditionIQ = () => {
  const { pathname } = useLocation();
  const slug = pathname.replace("/iq-and/", "");
  const condition = slug ? getConditionBySlug(slug) : undefined;

  if (!condition) return <Navigate to="/what-is-iq" replace />;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: condition.faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const conditionIndex = conditionIQData.findIndex((c) => c.slug === condition.slug);
  // Ring neighbors spread sibling links evenly so no condition page orphans.
  const otherConditions = ringNeighbors(conditionIQData, conditionIndex, 6);

  const relatedPages = [
    { title: "What Is IQ? Complete Guide", href: "/what-is-iq" },
    { title: "IQ Score Ranges", href: "/iq-score-ranges" },
    { title: "Take the Free IQ Test", href: "/test" },
    ...otherConditions.slice(0, 3).map((c) => ({
      title: c.headline,
      href: `/iq-and/${c.slug}`,
    })),
  ];

  // Split the headline to apply gradient text to the condition name
  const headlineWords = condition.headline.split(":");
  const headlinePrimary = headlineWords[0];
  const headlineRest = headlineWords.slice(1).join(":");

  return (
    <ContentPage ctaText="Discover your own IQ — take the free test" relatedPages={relatedPages}>
      <SEOHead
        title={preferTitle(`${condition.headline} | MyIQScores`, fitTitle(`${condition.name} and IQ`, [": What the Research Shows", ": Research Findings"]))}
        description={condition.metaDescription}
        canonicalUrl={`/iq-and/${condition.slug}`}
        ogType="article"
        jsonLd={faqSchema}
      />

      <h1>
        <span className="gradient-text">{headlinePrimary}</span>
        {headlineRest ? `:${headlineRest}` : ""}
      </h1>

      <p>{condition.overview}</p>

      <div className="glass-card p-6 rounded-xl my-8">
        <h2 className="mt-0">How {condition.name} Affects IQ Test Performance</h2>
        <p className="mb-0">{condition.iqImpact}</p>
      </div>

      <h2>What the Research Shows</h2>
      <p>{condition.researchFindings}</p>

      <p>
        To understand how IQ scores are structured, see our{" "}
        <Link to="/iq-score-ranges">complete IQ score ranges guide</Link>, or learn{" "}
        <Link to="/what-is-iq">what IQ actually measures</Link>.
      </p>

      <h2>Frequently Asked Questions</h2>
      {condition.faqItems.map((item, i) => (
        <div key={i}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}

      <h2>Related Conditions and IQ</h2>
      <div className="flex flex-wrap gap-3 my-4">
        {otherConditions.slice(0, 6).map((c) => (
          <Link
            key={c.slug}
            to={`/iq-and/${c.slug}`}
            className="glass-card px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-[rgba(255,255,255,0.08)] transition-colors no-underline"
          >
            {c.name} and IQ
          </Link>
        ))}
      </div>

      <p className="mt-6">
        <Link to="/test">Take our free IQ test</Link> to see where you stand, or explore{" "}
        <Link to="/iq-score-ranges">what different IQ scores mean</Link>.
      </p>
    </ContentPage>
  );
};

export default ConditionIQ;
