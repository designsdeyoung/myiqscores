import { useLocation, Link, Navigate } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import { getCareerBySlug, careerIQData } from "@/data/careerIQData";

const CareerIQ = () => {
  const { pathname } = useLocation();
  const slug = pathname.replace("/iq-needed-for/", "");
  const career = slug ? getCareerBySlug(slug) : undefined;

  if (!career) return <Navigate to="/what-is-iq" replace />;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: career.faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const relatedCareers = career.relatedCareers
    .map((s) => careerIQData.find((c) => c.slug === s))
    .filter(Boolean);

  return (
    <ContentPage ctaText={`Think you have what it takes? Test your IQ now`}>
      <SEOHead
        title={`IQ Needed to Be a ${career.career}: Average Score & Requirements | MyIQScores`}
        description={`What IQ do you need to be a ${career.career.toLowerCase()}? The average IQ for ${career.career.toLowerCase()}s is ${career.avgIQRange}. Learn the cognitive requirements and how to qualify.`}
        canonicalUrl={`/iq-needed-for/${career.slug}`}
        ogType="article"
        jsonLd={faqSchema}
      />

      <h1>
        IQ Needed to Be a <span className="gradient-text">{career.career}</span>
      </h1>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4 my-8">
        <div className="glass-card p-5 text-center rounded-xl">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Average IQ Range</p>
          <p className="font-heading font-bold text-3xl gradient-text">{career.avgIQRange}</p>
        </div>
        <div className="glass-card p-5 text-center rounded-xl">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">IQ Classification</p>
          <p className="font-heading font-bold text-lg text-foreground">
            {career.minIQ >= 120 ? "Superior" : career.minIQ >= 110 ? "High Average" : "Average"} range
          </p>
        </div>
      </div>

      <h2>Cognitive Requirements</h2>
      <p>{career.description}</p>

      <p>
        To understand what these IQ ranges mean, see our{" "}
        <Link to="/iq-score-ranges">complete IQ score ranges guide</Link>. You can also check where
        specific scores fall: <Link to={`/is-${Math.round((career.minIQ + career.maxIQ) / 2 / 5) * 5}-iq-good`}>
          Is {Math.round((career.minIQ + career.maxIQ) / 2 / 5) * 5} IQ Good?
        </Link>
      </p>

      <h2>Education Path</h2>
      <p>{career.educationPath}</p>

      <h2>How Does This Compare to Other Careers?</h2>
      <table>
        <thead>
          <tr>
            <th>Career</th>
            <th>Average IQ Range</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-[rgba(0,229,255,0.05)]">
            <td><strong>{career.career}</strong></td>
            <td><strong>{career.avgIQRange}</strong></td>
          </tr>
          {relatedCareers.map((c) => c && (
            <tr key={c.slug}>
              <td><Link to={`/iq-needed-for/${c.slug}`}>{c.career}</Link></td>
              <td>{c.avgIQRange}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Frequently Asked Questions</h2>
      {career.faqItems.map((item, i) => (
        <div key={i}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}

      <h2>Explore More Careers</h2>
      <div className="flex flex-wrap gap-3 my-4">
        {careerIQData
          .filter((c) => c.slug !== career.slug)
          .slice(0, 5)
          .map((c) => (
            <Link
              key={c.slug}
              to={`/iq-needed-for/${c.slug}`}
              className="glass-card px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-[rgba(255,255,255,0.08)] transition-colors no-underline"
            >
              {c.career} ({c.avgIQRange})
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

export default CareerIQ;
