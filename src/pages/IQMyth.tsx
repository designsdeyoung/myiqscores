import { useLocation, Link, Navigate } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import { getMythBySlug, iqMythData } from "@/data/iqMythData";

const IQMyth = () => {
  const { pathname } = useLocation();
  const slug = pathname.replace("/iq-myths/", "");
  const myth = slug ? getMythBySlug(slug) : undefined;

  if (!myth) return <Navigate to="/what-is-iq" replace />;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: myth.faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const otherMyths = iqMythData.filter((m) => m.slug !== myth.slug);

  const relatedPages = [
    { title: "What Is IQ? Complete Guide", href: "/what-is-iq" },
    { title: "How to Improve Your IQ", href: "/how-to-improve-iq" },
    ...otherMyths.slice(0, 3).map((m) => ({ title: m.title, href: `/iq-myths/${m.slug}` })),
    { title: "IQ Score Ranges", href: "/iq-score-ranges" },
    { title: "Does IQ Determine Success?", href: "/iq-myths/does-iq-determine-success" },
  ];

  return (
    <ContentPage relatedPages={relatedPages}>
      <SEOHead
        title={`${myth.title} | IQ Myths Debunked | MyIQScores`}
        description={`${myth.myth} Find out what science actually says about this common IQ myth.`}
        canonicalUrl={`/iq-myths/${myth.slug}`}
        ogType="article"
        jsonLd={faqSchema}
      />

      <h1><span className="gradient-text">{myth.title}</span></h1>

      <div className="glass-card p-5 rounded-xl my-8">
        <p className="text-sm text-muted-foreground mb-2"><strong className="text-foreground">The Myth:</strong> {myth.myth}</p>
        <p className="text-sm text-muted-foreground"><strong className="text-primary">The Reality:</strong> {myth.reality}</p>
      </div>

      <h2>What the Science Says</h2>
      <p>{myth.explanation}</p>

      <p>
        Learn more about <Link to="/what-is-iq">what IQ actually measures</Link> and{" "}
        <Link to="/iq-score-ranges">what different scores mean</Link>.
      </p>

      <h2>Frequently Asked Questions</h2>
      {myth.faqItems.map((item, i) => (
        <div key={i}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}

      <h2>More IQ Myths Debunked</h2>
      <div className="flex flex-wrap gap-3 my-4">
        {otherMyths.map((m) => (
          <Link key={m.slug} to={`/iq-myths/${m.slug}`}
            className="glass-card px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-[rgba(255,255,255,0.08)] transition-colors no-underline">
            {m.title}
          </Link>
        ))}
      </div>

      <p className="mt-6">
        <Link to="/test">Take our free IQ test</Link> to see where you stand, or explore{" "}
        <Link to="/how-to-improve-iq">science-backed ways to improve your IQ</Link>.
      </p>
    </ContentPage>
  );
};

export default IQMyth;
