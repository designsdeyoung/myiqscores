import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the average IQ in the United States?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The average IQ in the United States is approximately 98, slightly below the global norm of 100. This is because IQ tests are periodically re-normed against current populations, and the US score reflects the most recent norming adjustments. Scores range from about 85 (one standard deviation below average) to 115 (one standard deviation above) for the majority of Americans.",
      },
    },
    {
      "@type": "Question",
      name: "Is the US IQ average declining?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Recent studies suggest the Flynn Effect — the long-term rise in IQ scores throughout the 20th century — has plateaued or even reversed slightly in some Western countries, including the US. Scores rose steadily from the 1930s through roughly 2000, but research published since 2010 indicates the trend has stalled. The causes are debated: changing educational systems, reduced nutrition gains, increased screen time, or simply reaching a biological ceiling.",
      },
    },
    {
      "@type": "Question",
      name: "Which US state has the highest average IQ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Studies of IQ by state typically rank Massachusetts, New Hampshire, and Connecticut among the highest, while Mississippi, Louisiana, and New Mexico tend to rank lower. However, these differences largely reflect educational attainment, income levels, and healthcare access rather than any inherent cognitive difference between state populations. Estimates vary significantly between studies.",
      },
    },
    {
      "@type": "Question",
      name: "How does US IQ compare to other countries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The US ranks roughly 24th–30th globally in average IQ depending on the study. East Asian countries (Singapore, Japan, South Korea, China) consistently rank highest, with averages of 104–108. Nordic countries (Finland, Norway, Sweden) are comparable to or slightly above the US. The US average of 98 is close to most Western European nations. These differences are strongly influenced by educational quality, nutrition, and economic development.",
      },
    },
  ],
};

const AverageIQUS = () => (
  <ContentPage>
    <SEOHead
      title="Average IQ in the US: What Is America's IQ? | MyIQScores"
      description="The average IQ in the United States is 98-100. See how American IQ compares by state, education level, age group, and how it's changed over time."
      canonicalUrl="/average-iq-us"
      ogType="article"
      jsonLd={faqSchema}
    />

    <h1>
      <span className="gradient-text">Average IQ in the United States:</span> What Is America's IQ?
    </h1>

    <p>
      The average IQ in the United States is approximately <strong>98</strong> — just below the
      global norm of 100. If you've heard that 100 is the universal average, that's technically
      correct: IQ tests are designed so that 100 represents the median score at the time the test
      was standardized. Because the US re-normed its tests more recently than some other countries,
      American scores sit fractionally below the theoretical 100 midpoint on current global
      comparisons. In practical terms, a score of 98 is statistically indistinguishable from average.
    </p>

    <p>
      To understand where any IQ score sits on the distribution, see our{" "}
      <Link to="/iq-score-ranges">complete IQ score ranges guide</Link> or our{" "}
      <Link to="/iq-percentile-chart">IQ percentile chart</Link>.
    </p>

    <h2>The Flynn Effect: How American IQ Has Changed</h2>
    <p>
      One of the most striking findings in intelligence research is the <strong>Flynn Effect</strong>
      — the long-term rise in raw IQ scores that has been documented across virtually every country
      that has collected data over multiple decades. In the United States, average IQ scores
      increased by approximately <strong>3 points per decade</strong> from the 1930s through the
      late 1990s — a total rise of roughly 20–25 points over that 70-year period.
    </p>
    <p>
      The drivers of this rise include improved nutrition (particularly in early childhood),
      rising educational attainment, better access to healthcare, and the growing familiarity with
      abstract and visual thinking required by modern life. IQ tests were not getting easier —
      people genuinely became better at the cognitive tasks these tests measure.
    </p>
    <p>
      However, research published since 2010 suggests the Flynn Effect has{" "}
      <strong>plateaued in the United States</strong> and may even be reversing slightly. Studies
      from Norway, Denmark, Finland, and the UK show modest IQ declines since roughly 2000 in some
      demographic groups. In the US, the evidence is mixed — some studies show stable scores, others
      show slight declines, particularly in verbal reasoning. Proposed explanations include changing
      educational quality, increased screen time displacing complex reading, and potential nutritional
      factors including lead exposure in earlier cohorts aging out of the population.
    </p>

    <h2>Average IQ by Education Level</h2>
    <p>
      IQ and educational attainment are strongly correlated — not because education directly raises
      IQ dramatically, but because higher-IQ individuals are more likely to pursue and complete
      advanced education. The following are average IQ estimates by highest level of education
      completed, based on meta-analyses of US psychometric data:
    </p>
    <table>
      <thead>
        <tr>
          <th>Education Level</th>
          <th>Average IQ (Estimate)</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Less than high school diploma</td>
          <td>~87</td>
          <td>Below average range</td>
        </tr>
        <tr>
          <td>High school diploma / GED</td>
          <td>~98</td>
          <td>US national average</td>
        </tr>
        <tr>
          <td>Some college (no degree)</td>
          <td>~104</td>
          <td>Average to high average</td>
        </tr>
        <tr>
          <td>Bachelor's degree</td>
          <td>~115</td>
          <td>High average / superior</td>
        </tr>
        <tr>
          <td>Master's degree</td>
          <td>~120</td>
          <td>Superior range</td>
        </tr>
        <tr>
          <td>Doctoral / professional degree</td>
          <td>~122–130</td>
          <td>Superior to gifted range</td>
        </tr>
      </tbody>
    </table>
    <p>
      Important caveat: these are population averages with wide distributions. Many people without
      college degrees have very high IQs, and not all doctoral graduates score above 120. The
      correlation between education and IQ is real but imperfect — socioeconomic access, motivation,
      and circumstances influence educational attainment independently of cognitive ability.
    </p>

    <h2>Average IQ by Age Group</h2>
    <p>
      IQ scores are always measured relative to one's age group — that's how IQ tests are designed.
      A 10-year-old scoring 100 and a 40-year-old scoring 100 have both performed at the median
      for their respective age cohorts. Raw cognitive abilities follow a predictable developmental
      arc:
    </p>
    <ul>
      <li><strong>Childhood (5–12):</strong> Processing speed and fluid intelligence develop rapidly</li>
      <li><strong>Adolescence (13–19):</strong> Peak development of most cognitive abilities</li>
      <li><strong>Young adulthood (20–35):</strong> Peak fluid intelligence (novel problem-solving)</li>
      <li><strong>Middle age (35–60):</strong> Crystallized intelligence (accumulated knowledge) continues to grow even as fluid intelligence plateaus</li>
      <li><strong>Older adulthood (60+):</strong> Processing speed declines; wisdom and crystallized knowledge partially compensate</li>
    </ul>
    <p>
      For detailed analysis by age, see our guide on{" "}
      <Link to="/what-is-iq">what IQ actually measures</Link>.
    </p>

    <h2>Average IQ by State</h2>
    <p>
      Several researchers have estimated average IQ by US state using educational achievement data,
      SAT/ACT scores, and direct IQ testing samples. The variation across states is real but
      relatively modest — typically within 8–12 IQ points from the lowest to the highest state.
      States with higher average incomes, better-funded public schools, and lower rates of childhood
      poverty tend to score higher. States with higher rates of childhood lead exposure, food
      insecurity, and underfunded schools tend to score lower.
    </p>
    <p>
      Consistently higher-ranking states include Massachusetts, Connecticut, New Hampshire, Vermont,
      and New Jersey. States consistently ranked lower include Mississippi, Louisiana, New Mexico,
      and Alabama. These differences are not fixed — they respond to policy changes, economic
      conditions, and educational investment over time.
    </p>
    <p>
      We have individual pages for each US state's average IQ. Explore your state's data to see how
      local education and economic factors shape cognitive outcomes.
    </p>

    <h2>How the US Compares to Other Countries</h2>
    <p>
      Internationally, the US ranks approximately <strong>24th to 30th</strong> in average IQ
      depending on the study and methodology. The most comprehensive recent analysis (Lynn &amp;
      Becker, 2019) places the US at approximately 98, consistent with most Western nations.
    </p>
    <table>
      <thead>
        <tr>
          <th>Country / Region</th>
          <th>Average IQ (Estimate)</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Singapore</td>
          <td>~108</td>
          <td>Consistently top-ranked</td>
        </tr>
        <tr>
          <td>Japan</td>
          <td>~106</td>
          <td>Strong math / science education</td>
        </tr>
        <tr>
          <td>South Korea</td>
          <td>~106</td>
          <td>Rigorous educational culture</td>
        </tr>
        <tr>
          <td>Finland</td>
          <td>~101</td>
          <td>Top educational system</td>
        </tr>
        <tr>
          <td>Germany</td>
          <td>~100</td>
          <td>Near the global norm</td>
        </tr>
        <tr>
          <td>United States</td>
          <td>~98</td>
          <td>Typical Western average</td>
        </tr>
        <tr>
          <td>United Kingdom</td>
          <td>~100</td>
          <td>Comparable to US</td>
        </tr>
      </tbody>
    </table>
    <p>
      For a full breakdown, see our <Link to="/average-iq-by-country">average IQ by country</Link> page.
    </p>

    <h2>What Drives Differences in National and Regional IQ?</h2>
    <p>
      The question of why IQ averages differ across countries and regions is one of the most
      actively debated topics in intelligence research. Current scientific consensus points to
      several environmental factors as primary drivers:
    </p>
    <ul>
      <li>
        <strong>Educational quality and access:</strong> Countries with better-funded, more equitable
        schools produce higher average scores. This is the single strongest predictor of national IQ.
      </li>
      <li>
        <strong>Nutrition, particularly in early childhood:</strong> Iodine deficiency alone can
        reduce IQ by 10–15 points. Iron, folate, and omega-3 fatty acids are also critical for
        brain development. The Flynn Effect in developed countries closely tracks improvements in
        childhood nutrition.
      </li>
      <li>
        <strong>Healthcare and reduction of infectious disease:</strong> Childhood illness — even
        subclinical infections — can disrupt cognitive development. Countries with better childhood
        healthcare consistently score higher.
      </li>
      <li>
        <strong>Reduction of toxin exposure:</strong> The removal of lead from gasoline and paint
        in the 1970s–1980s is estimated to have raised average US IQ by 2–5 points. Lead exposure
        disproportionately affects lower-income communities.
      </li>
      <li>
        <strong>Socioeconomic equality:</strong> Countries with lower income inequality tend to
        score higher on average, as more children have access to cognitive enrichment.
      </li>
    </ul>
    <p>
      Genetic differences between national populations are not supported by current evidence as a
      meaningful driver of average IQ differences. The large Flynn Effect gains over mere
      generations — too fast for genetic change — demonstrate that these differences are
      environmental in nature.
    </p>

    <h2>Frequently Asked Questions</h2>

    <h3>What is the average IQ in the United States?</h3>
    <p>
      Approximately 98 — just below the theoretical global norm of 100. In practical terms, this
      is statistically equivalent to average. Most Americans score between 85 and 115.
    </p>

    <h3>Is the US IQ average declining?</h3>
    <p>
      The Flynn Effect — the long rise in US IQ scores from the 1930s to 2000 — appears to have
      plateaued. Some studies suggest a modest decline in verbal reasoning since 2000, though the
      evidence is mixed. The causes are debated among researchers.
    </p>

    <h3>Which US state has the highest average IQ?</h3>
    <p>
      States with the highest estimated averages tend to be Massachusetts, Connecticut, and New
      Hampshire — states with high educational attainment and lower childhood poverty rates. Estimates
      vary significantly between studies.
    </p>

    <h3>How does US IQ compare to other countries?</h3>
    <p>
      The US ranks approximately 24th–30th globally, behind East Asian countries (Singapore, Japan,
      South Korea) and comparable to most Western European nations. These differences primarily
      reflect educational quality and childhood nutrition rather than inherent cognitive differences.
    </p>

    <p className="mt-8">
      Want to know how your score stacks up against the US average?{" "}
      <Link to="/test">Take our free IQ test</Link>, or explore{" "}
      <Link to="/iq-score-ranges">what your IQ score range means</Link>.
    </p>
  </ContentPage>
);

export default AverageIQUS;
