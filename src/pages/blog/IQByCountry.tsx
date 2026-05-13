import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "IQ by Country: Why Nations Score Differently",
  description:
    "Average IQ varies dramatically by nation. The reasons are more about policy than genetics — a deep look at what drives national IQ differences.",
  datePublished: "2026-04-06",
  dateModified: "2026-04-06",
  author: { "@type": "Person", name: "MyIQScores Editorial Team", url: "https://www.myiqscores.com/about" },
  publisher: { "@type": "Organization", name: "MyIQScores", url: "https://www.myiqscores.com" },
};

const IQByCountry = () => (
  <ContentPage>
    <SEOHead
      title="IQ by Country: Why Nations Score Differently | MyIQScores"
      description="Average IQ varies dramatically by nation. The reasons are more about policy than genetics. A data-driven look at national IQ differences and what causes them."
      canonicalUrl="/blog/iq-by-country"
      ogType="article"
      jsonLd={articleSchema}
    />

    <h1>IQ by Country: Why <span className="gradient-text">Nations Score Differently</span></h1>

    <p>
      Some of the most striking — and most controversial — data in intelligence research concerns
      national differences in average IQ scores. The gaps are large, the implications matter for
      policy, and the causes are fiercely debated. Here's a clear-eyed look at what the data
      actually shows and what it doesn't.
    </p>

    <h2>Top 20 Countries by Average Estimated IQ</h2>
    <p>
      The figures below are drawn primarily from the Lynn-Vanhanen database and subsequent updates
      by researchers including Rindermann. They should be treated as estimates with substantial
      measurement uncertainty — typically ±5 IQ points.
    </p>
    <table>
      <thead>
        <tr><th>Rank</th><th>Country</th><th>Estimated Avg. IQ</th><th>Notes</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>Singapore</td><td>~108</td><td>PISA top performer; strong education system</td></tr>
        <tr><td>2</td><td>Hong Kong</td><td>~108</td><td>High test scores; intensive academic culture</td></tr>
        <tr><td>3</td><td>Japan</td><td>~106</td><td>High literacy; strong STEM tradition</td></tr>
        <tr><td>3</td><td>Taiwan</td><td>~106</td><td>World leader in PISA math scores</td></tr>
        <tr><td>3</td><td>South Korea</td><td>~106</td><td>Intensive "hagwon" education culture</td></tr>
        <tr><td>6</td><td>China</td><td>~105</td><td>Wide regional variation; rapidly improving</td></tr>
        <tr><td>7</td><td>Italy</td><td>~103</td><td>Northern Italy significantly higher than south</td></tr>
        <tr><td>8</td><td>Switzerland</td><td>~102</td><td>Strong education + nutrition + healthcare</td></tr>
        <tr><td>9</td><td>Finland</td><td>~101</td><td>Famous PISA performer; strong public education</td></tr>
        <tr><td>10</td><td>Netherlands</td><td>~101</td><td>Long-term Flynn Effect well documented</td></tr>
        <tr><td>11</td><td>Germany</td><td>~100</td><td>Strong vocational + academic track system</td></tr>
        <tr><td>11</td><td>United Kingdom</td><td>~100</td><td>Flynn Effect plateau since ~2000</td></tr>
        <tr><td>13</td><td>Australia</td><td>~99</td><td>Highly educated immigrant population boosts avg</td></tr>
        <tr><td>14</td><td>Canada</td><td>~99</td><td>Strong public education; diverse population</td></tr>
        <tr><td>15</td><td>New Zealand</td><td>~99</td><td>Similar to Australia</td></tr>
        <tr><td>16</td><td>United States</td><td>~98</td><td>Wide internal variation by state/region</td></tr>
        <tr><td>17</td><td>France</td><td>~98</td><td>Grandes écoles system produces high-end tail</td></tr>
        <tr><td>18</td><td>Spain</td><td>~97</td><td>Education investment has improved in recent decades</td></tr>
        <tr><td>19</td><td>Russia</td><td>~97</td><td>Strong STEM tradition; legacy of Soviet education</td></tr>
        <tr><td>20</td><td>Brazil</td><td>~87</td><td>Large inequality gap; significant regional variance</td></tr>
      </tbody>
    </table>

    <p>
      For detailed country-by-country analysis, explore our{" "}
      <Link to="/average-iq-by-country">average IQ by country page</Link> or check the{" "}
      <Link to="/average-iq-us">average IQ in the US</Link>.
    </p>

    <h2>The Lynn-Vanhanen Controversy</h2>
    <p>
      The most comprehensive dataset on national IQs was compiled by Richard Lynn and Tatu Vanhanen
      in their books <em>IQ and the Wealth of Nations</em> (2002) and subsequent updates. Their work
      documented strong correlations between national IQ and GDP, health, and other outcomes.
    </p>
    <p>
      The dataset has attracted significant criticism: many country scores were based on small,
      unrepresentative samples; testing conditions varied enormously; and some estimates were
      interpolated from neighboring countries rather than directly measured. Critics argue the
      data reflects <strong>test familiarity and educational exposure</strong> more than innate
      cognitive capacity.
    </p>
    <p>
      The controversy intensified because Lynn drew hereditarian conclusions that many researchers
      consider unsupported. The mainstream scientific consensus, including the American Psychological
      Association's task force report, is that existing data does not establish a genetic basis for
      national or racial IQ differences.
    </p>

    <h2>What Actually Drives National IQ Differences</h2>

    <h3>Education Quality and Access</h3>
    <p>
      Countries that invest heavily in early childhood education, teacher quality, and universal
      access to schooling consistently score higher. Singapore, Finland, and South Korea — the
      top performers — are famous for prioritizing education policy. Each additional year of
      education adds approximately 1–5 IQ points at the individual level; at the national level,
      improving average years of schooling dramatically shifts the distribution.
    </p>

    <h3>Nutrition and Public Health</h3>
    <p>
      Iodine deficiency — entirely preventable through iodized salt — can reduce population IQ
      by 10–15 points. Many lower-scoring countries had significant iodine deficiency through
      much of the 20th century. Similarly, lead poisoning (from paint, fuel, pipes) measurably
      reduces IQ at population scale. Countries that eliminated these hazards early saw cognitive
      gains. Malnutrition during critical developmental windows (first 1,000 days) has lasting
      effects on brain development.
    </p>

    <h3>Wealth and Economic Development</h3>
    <p>
      GDP per capita correlates strongly with average national IQ — but the causal direction
      runs both ways. Wealthier countries can afford better nutrition, healthcare, and education.
      But higher average cognitive capacity also contributes to economic productivity. The
      relationship is bidirectional and cumulative over generations.
    </p>

    <h3>Test-Taking Culture and Familiarity</h3>
    <p>
      Populations with more experience taking standardized tests tend to score higher, independent
      of underlying cognitive ability. East Asian countries with intense exam cultures may have
      a systematic advantage on IQ-style tests that doesn't fully reflect real-world cognitive
      differences. Conversely, populations with low test familiarity may underperform relative
      to their actual abilities.
    </p>

    <h2>The Flynn Effect in Developing Nations</h2>
    <p>
      The Flynn Effect — the documented rise of ~3 IQ points per decade — continues in many
      developing nations even as it has plateaued in high-income countries. As nutrition improves,
      education expands, and economic development proceeds, average scores rise. This is direct
      evidence that current score differences are driven by environmental factors, not fixed
      genetic potential.
    </p>
    <p>
      To understand more about what IQ measures and its limitations, see our{" "}
      <Link to="/what-is-iq">What Is IQ</Link> explainer.
    </p>

    <p className="mt-8">
      Want to see where you stand? <Link to="/test">Take our free IQ test</Link> — 30 questions,
      instant results. No sign-up required.
    </p>
  </ContentPage>
);

export default IQByCountry;
