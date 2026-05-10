import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import { cityIQData } from "@/data/cityIQData";

type SortField = "city" | "estimatedAvgIQ" | "country" | "continent";
type SortDir = "asc" | "desc";

const CityIQHub = () => {
  const [sortField, setSortField] = useState<SortField>("estimatedAvgIQ");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const [filterContinent, setFilterContinent] = useState<string>("all");

  const continents = useMemo(
    () => Array.from(new Set(cityIQData.map((c) => c.continent))).sort(),
    [],
  );

  const sortedData = useMemo(() => {
    let filtered =
      filterContinent === "all"
        ? [...cityIQData]
        : cityIQData.filter((c) => c.continent === filterContinent);

    filtered.sort((a, b) => {
      let cmp = 0;
      switch (sortField) {
        case "city":
          cmp = a.city.localeCompare(b.city);
          break;
        case "estimatedAvgIQ":
          cmp = a.estimatedAvgIQ - b.estimatedAvgIQ;
          break;
        case "country":
          cmp = a.country.localeCompare(b.country);
          break;
        case "continent":
          cmp = a.continent.localeCompare(b.continent);
          break;
      }
      return sortDir === "asc" ? cmp : -cmp;
    });

    return filtered;
  }, [sortField, sortDir, filterContinent]);

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortDir(field === "estimatedAvgIQ" ? "desc" : "asc");
    }
  };

  const SortHeader = ({ field, label }: { field: SortField; label: string }) => (
    <th
      onClick={() => handleSort(field)}
      className="cursor-pointer select-none hover:text-primary transition-colors"
    >
      {label} {sortField === field ? (sortDir === "asc" ? "↑" : "↓") : ""}
    </th>
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which city has the highest average IQ in the world?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Singapore consistently scores highest among world cities on international cognitive assessments, with an estimated average IQ around 110. Hong Kong (109), Tokyo (108), and Seoul (108) are close behind. These cities share high-pressure education cultures, strong economies, and large concentrations of highly educated residents.",
        },
      },
      {
        "@type": "Question",
        name: "Why do cities score higher than their national averages?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cities typically score 5–10 points above national averages due to selection effects: ambitious, highly educated individuals migrate to economic capitals for education and career opportunities. Capital cities and major financial or technology hubs concentrate cognitive ability through this self-reinforcing process. Better access to quality education, healthcare, and nutrition in urban centers also plays a role.",
        },
      },
      {
        "@type": "Question",
        name: "Are city IQ estimates reliable?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "City-level IQ estimates are less reliable than national figures because there are no comprehensive city-wide IQ studies for most cities. These figures are extrapolated from national averages, PISA regional scores where available (e.g., Shanghai), educational attainment data, and economic selection effect research. They should be treated as rough estimates rather than precise measurements.",
        },
      },
      {
        "@type": "Question",
        name: "Which American city has the highest average IQ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "San Francisco (107) and Boston (106) consistently rank as the highest-IQ major American cities, due to the Bay Area's extraordinary technology industry concentration and Boston's world-leading university density (Harvard, MIT, and over 100 other colleges). Seattle (106) and New York (105) follow closely behind.",
        },
      },
    ],
  };

  return (
    <ContentPage>
      <SEOHead
        title="Average IQ by City: World's Smartest Cities Ranked | MyIQScores"
        description="Compare estimated average IQ scores across 50 world cities. Sortable rankings by continent with analysis of what drives urban cognitive score differences."
        canonicalUrl="/iq-by-city"
        ogType="article"
        jsonLd={faqSchema}
      />

      <h1>
        Average IQ by City: <span className="gradient-text">World's Smartest Cities Ranked</span>
      </h1>

      <p>
        The table below presents estimated average IQ scores for 50 major world cities. City-level
        estimates are extrapolated from national averages adjusted for urban selection effects,
        educational attainment, PISA regional scores where available, and economic composition of
        the resident population. Cities typically score 5–10 points above their national averages
        due to the concentration of educated professionals in economic and educational hubs.
      </p>

      <div className="glass-card p-5 rounded-xl border-l-4 border-primary/40 my-8">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Methodology note:</strong> These are estimates, not
          direct measurements. No comprehensive city-wide IQ studies exist for most cities. Figures
          are derived from national averages, PISA city/region scores (where available), educational
          attainment data, and research on urban cognitive selection effects. They reflect
          population-level trends and do <strong>not</strong> predict the intelligence of any
          individual. For more on how IQ is measured, see our{" "}
          <Link to="/what-is-iq">complete guide to IQ</Link>.
        </p>
      </div>

      {/* Continent filter */}
      <div className="flex flex-wrap gap-2 my-6">
        <button
          onClick={() => setFilterContinent("all")}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            filterContinent === "all"
              ? "bg-primary text-primary-foreground"
              : "glass-card text-muted-foreground hover:text-foreground"
          }`}
        >
          All Regions
        </button>
        {continents.map((c) => (
          <button
            key={c}
            onClick={() => setFilterContinent(c)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              filterContinent === c
                ? "bg-primary text-primary-foreground"
                : "glass-card text-muted-foreground hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <SortHeader field="city" label="City" />
              <SortHeader field="country" label="Country" />
              <SortHeader field="estimatedAvgIQ" label="Est. IQ" />
              <SortHeader field="continent" label="Region" />
            </tr>
          </thead>
          <tbody>
            {sortedData.map((c, idx) => (
              <tr key={c.slug}>
                <td className="text-muted-foreground">{idx + 1}</td>
                <td>
                  <Link to={`/iq-by-city/${c.slug}`}>{c.city}</Link>
                </td>
                <td>
                  <Link to={`/average-iq/${c.countrySlug}`} className="text-muted-foreground hover:text-foreground transition-colors">
                    {c.country}
                  </Link>
                </td>
                <td className="font-mono font-semibold text-foreground">{c.estimatedAvgIQ}</td>
                <td>{c.continent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-sm text-muted-foreground mt-2">
        Showing {sortedData.length} of {cityIQData.length} cities. Click column headers to sort.
      </p>

      <h2>What Drives IQ Differences Between Cities?</h2>
      <p>
        Urban IQ differences are driven by two main forces: <strong>selection effects</strong> and{" "}
        <strong>environmental factors</strong>.
      </p>
      <p>
        Selection effects occur when cities attract ambitious, educated individuals through economic
        opportunity and educational prestige. Tech hubs like San Francisco and Seoul draw STEM
        graduates from across their countries and the world. Financial capitals like London, New York,
        and Zurich attract highly educated professionals in finance, law, and consulting. Academic
        centers like Boston concentrate researchers and students at elite institutions.
      </p>
      <p>
        Environmental factors include the quality and availability of education in the city,
        healthcare access, childhood nutrition, and economic conditions that allow parents to invest
        in their children's cognitive development. Cities in wealthy countries with strong public
        services tend to score higher not just because of selection effects but because the
        environment supports cognitive development across all socioeconomic strata.
      </p>

      <h2>Asia: Highest-Scoring Region</h2>
      <p>
        East and Southeast Asian cities dominate the top of the rankings. Singapore (110), Hong Kong
        (109), Tokyo and Seoul (both 108), and Shenzhen and Shanghai (both 108) reflect the
        extraordinary investment in education across this region. High-pressure testing cultures,
        supplementary tutoring industries, and strong cultural emphasis on academic achievement
        contribute to consistently exceptional performance on cognitive assessments.
      </p>

      <h2>North America: Technology and University Hubs Lead</h2>
      <p>
        Among American cities, the pattern is clear: cities with the densest concentrations of
        technology companies or world-leading universities score highest. San Francisco (107) and
        Boston (106) outperform larger cities like New York (105) and Chicago (103). In Canada,
        Toronto and Montreal (both around 103–104) benefit from the country's points-based
        immigration system that selects for educational attainment.
      </p>

      <h2>Europe: Nordic and Swiss Cities Cluster at the Top</h2>
      <p>
        European cities show a clear north-south gradient, with Nordic capitals (Oslo, Stockholm,
        Copenhagen) and Swiss cities (Zurich) scoring around 103–104, reflecting their wealthy
        welfare states that invest heavily in universal education and healthcare. Southern European
        capitals like Madrid and Rome score around 97–99, below the EU average but above their
        national figures.
      </p>

      <h2>Frequently Asked Questions</h2>
      <h3>Which city has the highest average IQ in the world?</h3>
      <p>
        Singapore consistently scores highest among world cities, with an estimated average IQ around
        110. Hong Kong (109), Tokyo (108), and Seoul (108) are close behind. These cities share
        high-pressure education cultures, strong economies, and large concentrations of highly
        educated residents.
      </p>

      <h3>Why do cities score higher than their national averages?</h3>
      <p>
        Cities typically score 5–10 points above national averages due to selection effects: ambitious,
        highly educated individuals migrate to economic capitals for education and career opportunities.
        Capital cities and major financial or technology hubs concentrate cognitive ability through
        this self-reinforcing process. Better access to quality education, healthcare, and nutrition
        in urban centers also plays a role.
      </p>

      <h3>Are city IQ estimates reliable?</h3>
      <p>
        City-level IQ estimates are less reliable than national figures because there are no
        comprehensive city-wide IQ studies for most cities. These figures are extrapolated from
        national averages, PISA regional scores where available, educational attainment data, and
        economic selection effect research. They should be treated as rough estimates.
      </p>

      <h3>Which American city has the highest average IQ?</h3>
      <p>
        San Francisco (107) and Boston (106) consistently rank as the highest-IQ major American
        cities, due to the Bay Area's extraordinary technology industry and Boston's world-leading
        university density. Seattle (106) and New York (105) follow closely.
      </p>

      <p className="mt-8">
        Learn more about <Link to="/what-is-iq">what IQ means</Link>, explore the{" "}
        <Link to="/average-iq-by-country">Average IQ by Country</Link> rankings, or{" "}
        <Link to="/test">take our free IQ test</Link>.
      </p>
    </ContentPage>
  );
};

export default CityIQHub;
