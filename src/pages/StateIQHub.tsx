import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
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

const StateIQHub = () => (
  <>
    <SEOHead
      title="Average IQ by State: All 50 US States Ranked | MyIQScores"
      description="See the average IQ ranking for all 50 US states. Massachusetts ranks #1 at 104.3. Find your state's estimated IQ and see how it compares."
      canonicalUrl="/average-iq-by-state"
      ogType="article"
    />

    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <div className="max-w-5xl mx-auto px-4 py-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Average IQ by <span className="gradient-text">US State</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            All 50 states ranked by estimated average IQ — click any state to see details,
            methodology, and how it compares to neighbors.
          </p>
        </motion.div>

        {/* Methodology note */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="glass-card rounded-xl p-5 mb-8 text-sm text-white/70 leading-relaxed"
        >
          <strong className="text-white">Methodology:</strong> State IQ estimates are derived from
          NAEP (National Assessment of Educational Progress) scores, SAT/ACT average results, and
          published academic research correlating state-level test performance with standardized IQ
          assessments. These are estimates of cognitive performance, not innate ability — they
          reflect education quality, socioeconomic factors, and demographic composition. Individual
          IQs vary enormously within every state.
        </motion.div>

        {/* Regional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
        >
          {regions.map((region) => (
            <div key={region} className="glass-card rounded-xl p-4 text-center">
              <p className="text-white/60 text-xs uppercase tracking-wider mb-1">{region}</p>
              <p className="text-2xl font-bold gradient-text">{regionalAvg(region)}</p>
              <p className="text-white/50 text-xs mt-1">Regional avg IQ</p>
            </div>
          ))}
        </motion.div>

        {/* Color Legend */}
        <div className="flex flex-wrap gap-4 mb-4 text-sm">
          <span className="text-emerald-400 font-semibold">● 103+ (High)</span>
          <span className="text-blue-400 font-semibold">● 100–102 (Above avg)</span>
          <span className="text-yellow-400 font-semibold">● 97–99 (Average)</span>
          <span className="text-orange-400 font-semibold">● Below 97 (Below avg)</span>
        </div>

        {/* State Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="glass-card rounded-xl overflow-hidden"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="text-left px-4 py-3 text-white/70 font-semibold w-12">Rank</th>
                <th className="text-left px-4 py-3 text-white/70 font-semibold">State</th>
                <th className="text-center px-4 py-3 text-white/70 font-semibold">Avg IQ</th>
                <th className="text-left px-4 py-3 text-white/70 font-semibold hidden sm:table-cell">Region</th>
              </tr>
            </thead>
            <tbody>
              {sortedStates.map((state, idx) => (
                <tr
                  key={state.slug}
                  className={`border-b border-white/5 hover:bg-white/5 transition-colors ${
                    idx % 2 === 0 ? "" : "bg-white/[0.02]"
                  }`}
                >
                  <td className="px-4 py-3 text-white/40 font-mono text-xs">#{state.rank}</td>
                  <td className="px-4 py-3">
                    <Link
                      to={`/average-iq-by-state/${state.slug}`}
                      className="text-white hover:text-primary transition-colors font-medium"
                    >
                      {state.name}
                    </Link>
                  </td>
                  <td className={`px-4 py-3 text-center font-bold tabular-nums ${iqColor(state.avgIQ)}`}>
                    {state.avgIQ.toFixed(1)}
                  </td>
                  <td className="px-4 py-3 text-white/50 hidden sm:table-cell">{state.region}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Internal links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-10 text-center text-white/60 text-sm space-y-2"
        >
          <p>
            Also see:{" "}
            <Link to="/average-iq-us" className="text-primary hover:underline">
              Average IQ in the US
            </Link>{" "}
            |{" "}
            <Link to="/average-iq-by-country" className="text-primary hover:underline">
              Average IQ by Country
            </Link>{" "}
            |{" "}
            <Link to="/iq-by-city" className="text-primary hover:underline">
              IQ by City
            </Link>{" "}
            |{" "}
            <Link to="/iq-by-career" className="text-primary hover:underline">
              IQ by Career
            </Link>{" "}
            |{" "}
            <Link to="/what-is-iq" className="text-primary hover:underline">
              What Is IQ?
            </Link>{" "}
            |{" "}
            <Link to="/test" className="text-primary hover:underline">
              Take the Free IQ Test
            </Link>
          </p>
        </motion.div>

      </div>
    </div>
  </>
);

export default StateIQHub;
