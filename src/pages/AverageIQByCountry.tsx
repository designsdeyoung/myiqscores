import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import { countryIQData } from "@/data/countryIQData";

type SortField = "name" | "avgIQ" | "rank" | "continent";
type SortDir = "asc" | "desc";

const AverageIQByCountry = () => {
  const [sortField, setSortField] = useState<SortField>("rank");
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [filterContinent, setFilterContinent] = useState<string>("all");

  const continents = useMemo(
    () => Array.from(new Set(countryIQData.map((c) => c.continent))).sort(),
    [],
  );

  const sortedData = useMemo(() => {
    let filtered =
      filterContinent === "all"
        ? [...countryIQData]
        : countryIQData.filter((c) => c.continent === filterContinent);

    filtered.sort((a, b) => {
      let cmp = 0;
      switch (sortField) {
        case "name":
          cmp = a.name.localeCompare(b.name);
          break;
        case "avgIQ":
          cmp = a.avgIQ - b.avgIQ;
          break;
        case "rank":
          cmp = a.rank - b.rank;
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
      setSortDir(field === "name" || field === "continent" ? "asc" : "asc");
    }
  };

  const SortHeader = ({ field, label }: { field: SortField; label: string }) => (
    <th
      onClick={() => handleSort(field)}
      className="cursor-pointer select-none hover:text-primary transition-colors"
    >
      {label} {sortField === field ? (sortDir === "asc" ? "\u2191" : "\u2193") : ""}
    </th>
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which country has the highest average IQ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Singapore and Hong Kong are often reported with the highest average IQ scores at around 108, followed closely by Japan and South Korea at 106. However, these rankings vary depending on the study and methodology used.",
        },
      },
      {
        "@type": "Question",
        name: "What is the average IQ worldwide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The global average IQ is approximately 100, as IQ tests are normed to produce a mean score of 100 in the populations where they are standardized. However, when comparing across countries using different testing conditions, averages range from approximately 69 to 108.",
        },
      },
      {
        "@type": "Question",
        name: "Why do average IQ scores differ between countries?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Differences in national average IQ scores are primarily influenced by environmental factors including quality of education, access to healthcare and nutrition, socioeconomic development, urbanization, and testing conditions. The Flynn Effect shows that as these factors improve, IQ scores tend to rise.",
        },
      },
    ],
  };

  return (
    <ContentPage>
      <SEOHead
        title="Average IQ by Country: The Complete Global Ranking | MyIQScores"
        description="Compare average IQ scores across 50 countries worldwide. Sortable rankings with scores, global position, and analysis of what drives national IQ differences."
        canonicalUrl="/average-iq-by-country"
        ogType="article"
        jsonLd={faqSchema}
      />

      <h1>
        Average IQ by Country: <span className="gradient-text">The Complete Global Ranking</span>
      </h1>

      <p>
        The table below presents estimated average IQ scores for 50 countries, ranked by global
        position. These estimates are compiled from published research studies and should be interpreted
        with important caveats about methodology and the many factors that influence national averages.
      </p>

      <div className="glass-card p-5 rounded-xl border-l-4 border-primary/40 my-8">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Methodology note:</strong> National IQ estimates are derived
          from meta-analyses of cognitive ability studies conducted across different time periods,
          populations, and testing conditions. These figures are influenced by access to education,
          healthcare, nutrition, socioeconomic development, and sample representativeness. They reflect
          population-level trends and do <strong>not</strong> predict or reflect the intelligence of any
          individual. For more on how IQ is measured, see our{" "}
          <Link to="/what-is-iq">complete guide to IQ</Link>.
        </p>
      </div>

      {/* Filter */}
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
              <SortHeader field="rank" label="Rank" />
              <SortHeader field="name" label="Country" />
              <SortHeader field="avgIQ" label="Avg IQ" />
              <SortHeader field="continent" label="Region" />
            </tr>
          </thead>
          <tbody>
            {sortedData.map((c) => (
              <tr key={c.slug}>
                <td>#{c.rank}</td>
                <td>
                  <Link to={`/average-iq/${c.slug}`}>{c.name}</Link>
                </td>
                <td className="font-mono font-semibold text-foreground">{c.avgIQ}</td>
                <td>{c.continent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-sm text-muted-foreground mt-2">
        Showing {sortedData.length} of {countryIQData.length} countries. Click column headers to sort.
      </p>

      <h2>What Drives National IQ Differences?</h2>
      <p>
        Research consistently shows that environmental factors play a major role in national IQ
        averages. Key factors include education quality and access, childhood nutrition, healthcare
        availability, socioeconomic development, and urbanization rates. The{" "}
        <strong>Flynn Effect</strong> — the well-documented rise in IQ scores over time — demonstrates
        that as these conditions improve, populations tend to score higher on cognitive tests.
      </p>
      <p>
        Many countries with currently lower average scores are experiencing rapid improvements in
        education and economic development, which research suggests will be reflected in rising cognitive
        test scores over time. This makes cross-country IQ comparisons a snapshot of current conditions
        rather than a fixed attribute.
      </p>

      <h2>Frequently Asked Questions</h2>
      <h3>Which country has the highest average IQ?</h3>
      <p>
        Singapore and Hong Kong are often reported with the highest average IQ scores at around 108,
        followed closely by Japan and South Korea at 106. However, these rankings vary depending on the
        study and methodology used.
      </p>

      <h3>What is the average IQ worldwide?</h3>
      <p>
        The global average IQ is approximately 100, as IQ tests are normed to produce a mean score of
        100 in the populations where they are standardized. When comparing across countries using
        different testing conditions, averages range from approximately 69 to 108.
      </p>

      <h3>Why do average IQ scores differ between countries?</h3>
      <p>
        Differences in national average IQ scores are primarily influenced by environmental factors
        including quality of education, access to healthcare and nutrition, socioeconomic development,
        urbanization, and testing conditions. The Flynn Effect shows that as these factors improve, IQ
        scores tend to rise.
      </p>

      <p className="mt-8">
        Learn more about <Link to="/what-is-iq">what IQ means</Link>, explore{" "}
        <Link to="/iq-score-ranges">IQ score ranges</Link>, or{" "}
        <Link to="/test">take our free IQ test</Link>.
      </p>
    </ContentPage>
  );
};

export default AverageIQByCountry;
