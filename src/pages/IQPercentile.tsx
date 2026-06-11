import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What IQ percentile am I in?",
      acceptedAnswer: { "@type": "Answer", text: "Your IQ percentile indicates what percentage of the population you score higher than. An IQ of 100 = 50th percentile, 115 = 84th percentile, 130 = 98th percentile. Use our chart below to find your exact percentile." }},
    { "@type": "Question", name: "What does 99th percentile IQ mean?",
      acceptedAnswer: { "@type": "Answer", text: "The 99th percentile means you score higher than 99% of the population. This corresponds to an IQ of approximately 135, meaning only 1 in 100 people score this high. The 99.9th percentile (IQ ~145) means higher than 999 out of 1,000." }},
    { "@type": "Question", name: "What percentile is an IQ of 120?",
      acceptedAnswer: { "@type": "Answer", text: "An IQ of 120 is at the 91st percentile, meaning you score higher than approximately 91% of the population. Only about 9% of people score 120 or above." }},
  ],
};

const IQPercentile = () => (
  <ContentPage>
    <SEOHead
      title="IQ Percentile Chart: Find Your Exact Ranking | MyIQScores"
      description="What percentile is your IQ score? Use our complete IQ percentile chart to find exactly where you rank. IQ 100 = 50th percentile, 115 = 84th, 130 = 98th."
      canonicalUrl="/iq-percentile-chart"
      ogType="article"
      jsonLd={faqSchema}
    />

    <h1>IQ Percentile Chart: <span className="gradient-text">Find Your Exact Ranking</span></h1>

    <p>
      Your IQ percentile tells you what percentage of the population you score higher than. An IQ of
      100 is the 50th percentile (higher than half), while an IQ of 130 is the 98th percentile
      (higher than 98%). Use the chart below to find your exact ranking.
    </p>

    <h2>Complete IQ Percentile Table</h2>
    <table>
      <thead>
        <tr><th>IQ Score</th><th>Percentile</th><th>Higher Than</th><th>Rarity</th></tr>
      </thead>
      <tbody>
        <tr><td><Link to="/is-160-iq-good">160</Link></td><td>99.997th</td><td>99.997% of people</td><td>1 in 31,000</td></tr>
        <tr><td><Link to="/is-155-iq-good">155</Link></td><td>99.99th</td><td>99.99% of people</td><td>1 in 10,000</td></tr>
        <tr><td><Link to="/is-150-iq-good">150</Link></td><td>99.96th</td><td>99.96% of people</td><td>1 in 2,330</td></tr>
        <tr><td><Link to="/is-145-iq-good">145</Link></td><td>99.9th</td><td>99.9% of people</td><td>1 in 741</td></tr>
        <tr><td><Link to="/is-140-iq-good">140</Link></td><td>99.6th</td><td>99.6% of people</td><td>1 in 261</td></tr>
        <tr><td><Link to="/is-135-iq-good">135</Link></td><td>99th</td><td>99% of people</td><td>1 in 100</td></tr>
        <tr><td><Link to="/is-130-iq-good">130</Link></td><td>98th</td><td>98% of people</td><td>1 in 50</td></tr>
        <tr><td><Link to="/is-125-iq-good">125</Link></td><td>95th</td><td>95% of people</td><td>1 in 20</td></tr>
        <tr><td><Link to="/is-120-iq-good">120</Link></td><td>91st</td><td>91% of people</td><td>1 in 11</td></tr>
        <tr><td><Link to="/is-115-iq-good">115</Link></td><td>84th</td><td>84% of people</td><td>1 in 6</td></tr>
        <tr><td><Link to="/is-110-iq-good">110</Link></td><td>75th</td><td>75% of people</td><td>1 in 4</td></tr>
        <tr><td><Link to="/is-105-iq-good">105</Link></td><td>63rd</td><td>63% of people</td><td>Common</td></tr>
        <tr><td><Link to="/is-100-iq-good">100</Link></td><td>50th</td><td>50% of people</td><td>Most common</td></tr>
        <tr><td><Link to="/is-95-iq-good">95</Link></td><td>37th</td><td>37% of people</td><td>Common</td></tr>
        <tr><td><Link to="/is-90-iq-good">90</Link></td><td>25th</td><td>25% of people</td><td>1 in 4</td></tr>
        <tr><td><Link to="/is-85-iq-good">85</Link></td><td>16th</td><td>16% of people</td><td>1 in 6</td></tr>
        <tr><td><Link to="/is-80-iq-good">80</Link></td><td>9th</td><td>9% of people</td><td>1 in 11</td></tr>
        <tr><td><Link to="/is-75-iq-good">75</Link></td><td>5th</td><td>5% of people</td><td>1 in 20</td></tr>
        <tr><td><Link to="/is-70-iq-good">70</Link></td><td>2nd</td><td>2% of people</td><td>1 in 50</td></tr>
      </tbody>
    </table>

    <h2>How IQ Percentiles Work</h2>
    <p>
      IQ scores follow a <strong>normal distribution</strong> (bell curve) with a mean of 100 and
      standard deviation of 15. This mathematical relationship allows precise conversion between IQ
      scores and percentiles:
    </p>
    <ul>
      <li>Each 15-point increase above 100 moves you roughly one standard deviation higher</li>
      <li><strong>68%</strong> of people score between <Link to="/is-85-iq-good">85</Link> and <Link to="/is-115-iq-good">115</Link> (within 1 SD)</li>
      <li><strong>95%</strong> of people score between <Link to="/is-70-iq-good">70</Link> and <Link to="/is-130-iq-good">130</Link> (within 2 SD)</li>
      <li><strong>99.7%</strong> of people score between 55 and <Link to="/is-145-iq-good">145</Link> (within 3 SD)</li>
    </ul>

    <h2>Percentiles for Common IQ Questions</h2>

    <h3>What percentile is <Link to="/is-120-iq-good">IQ 120</Link>?</h3>
    <p>91st percentile — you score higher than ~91% of people. About 1 in 11 people score this high. This is classified as <Link to="/iq-score-ranges">superior</Link>.</p>

    <h3>What percentile is <Link to="/is-130-iq-good">IQ 130</Link>?</h3>
    <p>98th percentile — top 2% of the population. This is the <Link to="/mensa-iq-test">Mensa</Link> qualification threshold and the beginning of the <Link to="/genius-iq">gifted</Link> range.</p>

    <h3>What percentile is <Link to="/is-140-iq-good">IQ 140</Link>?</h3>
    <p>99.6th percentile — top 0.4%, or about 1 in 261 people. This is the commonly cited <Link to="/genius-iq">genius threshold</Link>.</p>

    <h3>What percentile is <Link to="/is-100-iq-good">IQ 100</Link>?</h3>
    <p>50th percentile — exactly average. You score higher than half the population and lower than the other half. See our page on <Link to="/good-iq-score">what makes a good IQ score</Link>.</p>

    <h2>Frequently Asked Questions</h2>

    <h3>What IQ percentile am I in?</h3>
    <p>Find your score in the table above. Or as a rule of thumb: IQ 100 = 50th percentile, with each 5 points adding roughly 10-15 percentile points in the middle range.</p>

    <h3>What does 99th percentile IQ mean?</h3>
    <p>It means you score higher than 99% of people — only 1 in 100 score as high or higher. This corresponds to an IQ of approximately <Link to="/is-135-iq-good">135</Link>.</p>

    <h3>What percentile is an IQ of 120?</h3>
    <p><Link to="/is-120-iq-good">120 IQ</Link> is at the 91st percentile — higher than about 91% of the population.</p>

    <p className="mt-8">
      <Link to="/test">Take our free IQ test</Link> to find your percentile ranking. Learn more
      about <Link to="/what-is-iq">how IQ is measured</Link>,{" "}
      <Link to="/iq-score-ranges">score ranges</Link>, and{" "}
      <Link to="/average-iq-by-country">how IQ varies by country</Link>.
    </p>
  </ContentPage>
);

export default IQPercentile;
