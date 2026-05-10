import { useState } from "react";
import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import { majorIQData } from "@/data/majorIQData";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What college major has the highest average IQ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Physics and mathematics majors consistently show the highest average IQ estimates, with ranges of 125–135. This reflects the extreme quantitative demands of these fields. GRE Quantitative score data confirms that physics and mathematics graduates score highest among all disciplines. Philosophy is notable for producing exceptionally high LSAT and GRE Verbal scores despite being a humanities field.",
      },
    },
    {
      "@type": "Question",
      name: "Does your college major determine your IQ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — your college major does not determine your IQ. IQ is relatively stable across adulthood. Rather, students with certain cognitive profiles tend to be drawn to and succeed in particular fields. Selection effects explain why physics majors average higher IQs: the demands of the major filter for high quantitative reasoning ability. Choosing a demanding major will not raise your IQ, though it will develop domain-specific knowledge and skills.",
      },
    },
    {
      "@type": "Question",
      name: "How do IQ estimates by major get calculated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IQ estimates by major are derived from large-scale standardized test data. The strongest source is the Educational Testing Service's GRE data, which shows average scores by undergraduate major for the millions of test-takers each year. GRE Quantitative and Verbal scores correlate with IQ subtests measuring the same underlying abilities. LSAT, MCAT, and GMAT data provide additional triangulation. These are population averages — individual scores within any major vary widely.",
      },
    },
    {
      "@type": "Question",
      name: "What is the average IQ of a college graduate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "College graduates as a group average approximately 110–115 IQ, above the general population mean of 100. This reflects both selection (higher-IQ individuals are more likely to attend and complete college) and possibly some cognitive development from education. The average varies substantially by institution and major — graduates of highly selective universities and demanding programs score considerably higher than the overall college graduate average.",
      },
    },
  ],
};

const MajorIQHub = () => {
  const [sortField, setSortField] = useState<"major" | "minIQ">("minIQ");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  const sorted = [...majorIQData].sort((a, b) => {
    const valA = sortField === "minIQ" ? a.minIQ : a.major.toLowerCase();
    const valB = sortField === "minIQ" ? b.minIQ : b.major.toLowerCase();
    if (valA < valB) return sortDir === "asc" ? -1 : 1;
    if (valA > valB) return sortDir === "asc" ? 1 : -1;
    return 0;
  });

  const handleSort = (field: "major" | "minIQ") => {
    if (sortField === field) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDir(field === "minIQ" ? "desc" : "asc");
    }
  };

  const sortIndicator = (field: "major" | "minIQ") => {
    if (sortField !== field) return " ↕";
    return sortDir === "asc" ? " ↑" : " ↓";
  };

  return (
    <ContentPage>
      <SEOHead
        title="Average IQ by College Major: Full Chart | MyIQScores"
        description="What is the average IQ for every college major? See estimated IQ ranges for 40 majors from physics to real estate, based on GRE, SAT, LSAT, and MCAT score data."
        canonicalUrl="/iq-by-major"
        ogType="article"
        jsonLd={faqSchema}
      />

      <h1>
        <span className="gradient-text">Average IQ by College Major:</span> Full Chart
      </h1>

      <p>
        Which college majors attract the highest-IQ students? Below is our complete chart of average
        IQ estimates for 40 college majors, derived from GRE, SAT, LSAT, MCAT, and GMAT score data.
        Click any major for detailed analysis including cognitive demands, SAT/GRE correlations,
        top programs, and career paths.
      </p>

      <p>
        Remember: these are population averages with wide variation within each major. A physics
        major with a 105 IQ and an English major with a 135 IQ both exist. Cognitive ability is
        one factor among many in academic and career success. See our guide on{" "}
        <Link to="/iq-myths/does-iq-determine-success">whether IQ determines success</Link>.
      </p>

      <table>
        <thead>
          <tr>
            <th
              className="cursor-pointer select-none hover:text-foreground transition-colors"
              onClick={() => handleSort("major")}
            >
              Major{sortIndicator("major")}
            </th>
            <th
              className="cursor-pointer select-none hover:text-foreground transition-colors"
              onClick={() => handleSort("minIQ")}
            >
              Average IQ Range{sortIndicator("minIQ")}
            </th>
            <th>Top Career Paths</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((m) => (
            <tr key={m.slug}>
              <td>
                <Link to={`/iq-by-major/${m.slug}`}>{m.major}</Link>
              </td>
              <td className="font-mono font-semibold text-foreground">{m.avgIQRange}</td>
              <td className="text-sm text-muted-foreground">{m.careerPaths.slice(0, 2).join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Frequently Asked Questions</h2>
      {faqSchema.mainEntity.map((item, i) => (
        <div key={i}>
          <h3>{item.name}</h3>
          <p>{item.acceptedAnswer.text}</p>
        </div>
      ))}

      <p className="mt-8">
        Learn more about <Link to="/what-is-iq">what IQ measures</Link>,{" "}
        <Link to="/iq-score-ranges">IQ score ranges</Link>,{" "}
        <Link to="/iq-by-career">IQ by career</Link>, or{" "}
        <Link to="/test">take our free IQ test</Link>.
      </p>
    </ContentPage>
  );
};

export default MajorIQHub;
