import { useLocation, Link, Navigate } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import { getFamousPersonBySlug, famousIQData } from "@/data/famousIQData";

const FamousIQ = () => {
  const { pathname } = useLocation();
  const slug = pathname.replace("/famous-iq/", "");
  const person = slug ? getFamousPersonBySlug(slug) : undefined;

  if (!person) return <Navigate to="/what-is-iq" replace />;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: person.faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const otherPeople = famousIQData.filter((p) => p.slug !== person.slug);

  const relatedPages = [
    { title: "Famous People IQ Scores (Full List)", href: "/famous-iq" },
    { title: "Highest IQ Ever Recorded", href: "/highest-iq-ever" },
    { title: "Genius IQ Guide", href: "/genius-iq" },
    ...otherPeople.slice(0, 3).map((p) => ({ title: `${p.name}'s IQ (${p.estimatedIQ})`, href: `/famous-iq/${p.slug}` })),
    { title: "What Is a Good IQ Score?", href: "/good-iq-score" },
  ];

  return (
    <ContentPage ctaText="How does your IQ compare? Take the free test" relatedPages={relatedPages}>
      <SEOHead
        title={`${person.name}'s IQ: ${person.estimatedIQ} — What It Means | MyIQScores`}
        description={`${person.name}'s IQ is estimated at ${person.estimatedIQ}. Learn what this means, how it compares, and what made ${person.name} a genius.`}
        canonicalUrl={`/famous-iq/${person.slug}`}
        ogType="article"
        jsonLd={faqSchema}
      />

      <h1>
        <span className="gradient-text">{person.name}'s IQ</span>: {person.estimatedIQ}
      </h1>

      <div className="grid grid-cols-2 gap-4 my-8">
        <div className="glass-card p-5 text-center rounded-xl">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Estimated IQ</p>
          <p className="font-heading font-bold text-3xl gradient-text">{person.estimatedIQ}</p>
        </div>
        <div className="glass-card p-5 text-center rounded-xl">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Known For</p>
          <p className="font-heading font-medium text-sm text-foreground">{person.knownFor}</p>
        </div>
      </div>

      <h2>About {person.name}</h2>
      <p>{person.description}</p>

      <h2>What an IQ of {person.estimatedIQ} Means</h2>
      <p>{person.iqContext}</p>

      <p>
        To understand where this falls on the IQ scale, see our{" "}
        <Link to="/iq-score-ranges">complete IQ score ranges guide</Link>, or learn{" "}
        <Link to="/what-is-iq">what IQ actually measures</Link>.
      </p>

      <h2>Famous IQ Comparison</h2>
      <table>
        <thead>
          <tr>
            <th>Person</th>
            <th>Estimated IQ</th>
            <th>Known For</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-[rgba(0,229,255,0.05)]">
            <td><strong>{person.name}</strong></td>
            <td><strong>{person.estimatedIQ}</strong></td>
            <td>{person.knownFor}</td>
          </tr>
          {otherPeople.map((p) => (
            <tr key={p.slug}>
              <td><Link to={`/famous-iq/${p.slug}`}>{p.name}</Link></td>
              <td>{p.estimatedIQ}</td>
              <td>{p.knownFor}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Frequently Asked Questions</h2>
      {person.faqItems.map((item, i) => (
        <div key={i}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}

      <h2>Explore More Famous IQs</h2>
      <div className="flex flex-wrap gap-3 my-4">
        {otherPeople.slice(0, 5).map((p) => (
          <Link
            key={p.slug}
            to={`/famous-iq/${p.slug}`}
            className="glass-card px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-[rgba(255,255,255,0.08)] transition-colors no-underline"
          >
            {p.name} ({p.estimatedIQ})
          </Link>
        ))}
      </div>

      <p className="mt-6">
        <Link to="/test">Take our free IQ test</Link> to discover your own score, or explore{" "}
        <Link to="/is-130-iq-good">what a gifted IQ means</Link>.
      </p>
    </ContentPage>
  );
};

export default FamousIQ;
