import { useLocation, Link, Navigate } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import { getStateBySlug, stateIQData } from "@/data/stateIQData";

const StateIQ = () => {
  const { pathname } = useLocation();
  const slug = pathname.replace("/average-iq-by-state/", "");
  const state = slug ? getStateBySlug(slug) : undefined;

  if (!state) return <Navigate to="/what-is-iq" replace />;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: state.faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const otherStates = stateIQData
    .filter((s) => s.slug !== state.slug)
    .sort((a, b) => a.rank - b.rank)
    .slice(0, 8);

  const regionPeers = stateIQData
    .filter((s) => s.region === state.region && s.slug !== state.slug)
    .sort((a, b) => a.rank - b.rank);

  return (
    <ContentPage ctaText="How smart is your state? Test your own IQ">
      <SEOHead
        title={`Average IQ in ${state.name}: ${state.avgIQ}, Ranked #${state.rank} | MyIQScores`}
        description={`${state.name}'s average IQ is ${state.avgIQ}, ranking #${state.rank} among US states. Learn what drives ${state.name}'s cognitive scores and how it compares.`}
        canonicalUrl={`/average-iq-by-state/${state.slug}`}
        ogType="article"
        jsonLd={faqSchema}
      />

      <h1>
        Average IQ in <span className="gradient-text">{state.name}</span>
      </h1>

      <div className="grid grid-cols-3 gap-4 my-8">
        <div className="glass-card p-5 text-center rounded-xl">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Average IQ</p>
          <p className="font-heading font-bold text-3xl gradient-text">{state.avgIQ}</p>
        </div>
        <div className="glass-card p-5 text-center rounded-xl">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">US Ranking</p>
          <p className="font-heading font-bold text-3xl text-foreground">#{state.rank}</p>
          <p className="text-xs text-muted-foreground mt-1">of 50 states</p>
        </div>
        <div className="glass-card p-5 text-center rounded-xl">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Region</p>
          <p className="font-heading font-bold text-lg text-foreground">{state.region}</p>
        </div>
      </div>

      <div className="glass-card p-5 rounded-xl border-l-4 border-primary/40 my-8">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Note:</strong> State-level IQ estimates are derived from
          standardized test scores (NAEP, SAT, ACT) and demographic data. They reflect population-level
          trends influenced by education funding, socioeconomic factors, and demographics — not the
          intelligence of any individual resident.
        </p>
      </div>

      <h2>About {state.name}'s IQ Ranking</h2>
      <p>{state.description}</p>

      {state.analysis && (
        <>
          <h2>What Shapes {state.name}'s Cognitive Profile</h2>
          <p>{state.analysis}</p>
        </>
      )}

      <p>
        For global context, see how the US compares in our{" "}
        <Link to="/average-iq/united-states">United States IQ page</Link> and the full{" "}
        <Link to="/average-iq-by-country">country rankings</Link>.
      </p>

      {regionPeers.length > 0 && (
        <>
          <h2>{state.name} vs Other {state.region} States</h2>
          <table>
            <thead>
              <tr><th>State</th><th>Average IQ</th><th>US Rank</th></tr>
            </thead>
            <tbody>
              <tr className="bg-[rgba(0,229,255,0.05)]">
                <td><strong>{state.name}</strong></td>
                <td><strong>{state.avgIQ}</strong></td>
                <td><strong>#{state.rank}</strong></td>
              </tr>
              {regionPeers.map((s) => (
                <tr key={s.slug}>
                  <td><Link to={`/average-iq-by-state/${s.slug}`}>{s.name}</Link></td>
                  <td>{s.avgIQ}</td>
                  <td>#{s.rank}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      <h2>Frequently Asked Questions</h2>
      {state.faqItems.map((item, i) => (
        <div key={i}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}

      <h2>Explore Other States</h2>
      <div className="flex flex-wrap gap-3 my-4">
        {otherStates.map((s) => (
          <Link key={s.slug} to={`/average-iq-by-state/${s.slug}`}
            className="glass-card px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-[rgba(255,255,255,0.08)] transition-colors no-underline">
            {s.name} ({s.avgIQ})
          </Link>
        ))}
      </div>

      <p className="mt-6">
        <Link to="/test">Take our free IQ test</Link> to see how you compare, or learn{" "}
        <Link to="/what-is-iq">what IQ actually measures</Link>.
      </p>
    </ContentPage>
  );
};

export default StateIQ;
