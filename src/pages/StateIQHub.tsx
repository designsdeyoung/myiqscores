import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import ContentPage from "@/components/ContentPage";
import { stateIQData } from "@/data/stateIQData";

// Sort states by rank ascending
const sortedStates = [...stateIQData].sort((a, b) => a.rank - b.rank);

// Regional averages (pre-calculated)
const regions = ["Northeast", "Midwest", "West", "South"] as const;

function regionalAvg(region: string): string {
  const states = stateIQData.filter((s) => s.region === region);
  const avg = states.reduce((sum, s) => sum + s.avgIQ, 0) / states.length;
  return avg.toFixed(1);
}

function iqColor(iq: number): string {
  if (iq >= 103) return "text-emerald-400";
  if (iq >= 100) return "text-blue-400";
  if (iq >= 97) return "text-yellow-400";
  return "text-orange-400";
}

const RELATED_PAGES = [
  { title: "Average IQ in the US", href: "/average-iq-us" },
  { title: "Average IQ by Country", href: "/average-iq-by-country" },
  { title: "IQ by City", href: "/iq-by-city" },
  { title: "IQ by Career", href: "/iq-by-career" },
  { title: "IQ Score Ranges", href: "/iq-score-ranges" },
  { title: "What Is IQ?", href: "/what-is-iq" },
];

const StateIQHub = () => (
  <>
    <SEOHead
      title="Average IQ by State: All 50 US States Ranked | MyIQScores"
      description="See the average IQ ranking for all 50 US states. Massachusetts ranks #1 at 104.3. Find your state's estimated IQ and see how it compares."
      canonicalUrl="/average-iq-by-state"
      ogType="article"
    />

    <ContentPage
      showSidebar={false}
      showLeaderboard={true}
      ctaText="Curious about your own IQ? Take the free test"
      relatedPages={RELATED_PAGES}
      lastUpdated="May 2026"
      readingTime={4}
    >
      <h1>
        Average IQ by <span className="gradient-text">US State</span>
      </h1>
      <p className="text-muted-foreground text-lg">
        All 50 states ranked by estimated average IQ. Click any state to see details,
        methodology, and how it compares to neighboring states.
      </p>

      {/* Methodology note */}
      <div className="glass-card rounded-xl p-5 my-6 text-sm text-muted-foreground leading-relaxed not-prose">
        <strong className="text-foreground">Methodology:</strong> State IQ estimates are derived from
        NAEP (National Assessment of Educational Progress) scores, SAT/ACT average results, and
        published academic research correlating state-level test performance with standardized IQ
        assessments. These are estimates of cognitive performance, not innate ability — they
        reflect education quality, socioeconomic factors, and demographic composition. Individual
        IQs vary enormously within every state.
      </div>

      {/* Regional Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8 not-prose">
        {regions.map((region) => (
          <div key={region} className="glass-card rounded-xl p-4 text-center">
            <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">{region}</p>
            <p className="text-2xl font-bold gradient-text">{regionalAvg(region)}</p>
            <p className="text-muted-foreground/50 text-xs mt-1">Regional avg IQ</p>
          </div>
        ))}
      </div>

      {/* Color Legend */}
      <div className="flex flex-wrap gap-4 mb-4 text-sm not-prose">
        <span className="text-emerald-400 font-semibold">● 103+ (High)</span>
        <span className="text-blue-400 font-semibold">● 100–102 (Above avg)</span>
        <span className="text-yellow-400 font-semibold">● 97–99 (Average)</span>
        <span className="text-orange-400 font-semibold">● Below 97 (Below avg)</span>
      </div>

      {/* State Table */}
      <div className="glass-card rounded-xl overflow-hidden not-prose">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)]">
              <th className="text-left px-4 py-3 text-muted-foreground font-semibold w-12">Rank</th>
              <th className="text-left px-4 py-3 text-muted-foreground font-semibold">State</th>
              <th className="text-center px-4 py-3 text-muted-foreground font-semibold">Avg IQ</th>
              <th className="text-left px-4 py-3 text-muted-foreground font-semibold hidden sm:table-cell">Region</th>
            </tr>
          </thead>
          <tbody>
            {sortedStates.map((state, idx) => (
              <motion.tr
                key={state.slug}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: Math.min(idx * 0.01, 0.5) }}
                className={`border-b border-[rgba(255,255,255,0.04)] hover:bg-[rgba(255,255,255,0.04)] transition-colors ${
                  idx % 2 === 0 ? "" : "bg-[rgba(255,255,255,0.02)]"
                }`}
              >
                <td className="px-4 py-3 text-muted-foreground/40 font-mono text-xs">#{state.rank}</td>
                <td className="px-4 py-3">
                  <Link
                    to={`/average-iq-by-state/${state.slug}`}
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    {state.name}
                  </Link>
                </td>
                <td className={`px-4 py-3 text-center font-bold tabular-nums ${iqColor(state.avgIQ)}`}>
                  {state.avgIQ.toFixed(1)}
                </td>
                <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell">{state.region}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>About State IQ Estimates</h2>
      <p>
        State-level IQ estimates are calculated from proxy measures including NAEP academic
        achievement scores, average SAT/ACT performance, and peer-reviewed studies on regional
        cognitive assessment data. These numbers represent statistical averages and should not
        be used to make judgments about individuals — IQ varies enormously within any state based
        on education, environment, socioeconomic conditions, and many other factors.
      </p>
      <p>
        States with higher average scores tend to have higher levels of educational attainment,
        more public investment in schools, and lower rates of poverty — all factors that
        significantly influence IQ test performance.
      </p>
    </ContentPage>
  </>
);

export default StateIQHub;
