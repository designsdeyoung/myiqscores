import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you convert SAT scores to IQ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can estimate IQ from SAT scores, but it's not an exact conversion. The SAT correlates with IQ at about 0.7-0.8, meaning there's a strong but imperfect relationship. A 1200 SAT roughly corresponds to an IQ of about 115, while a 1400 SAT roughly corresponds to an IQ of about 125.",
      },
    },
    {
      "@type": "Question",
      name: "What IQ is a 1500 SAT score?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 1500 SAT score roughly corresponds to an IQ of approximately 130-135, placing you in the gifted range. However, this is an estimate — the SAT measures achievement and learned skills in addition to raw cognitive ability, so the correlation is not perfect.",
      },
    },
    {
      "@type": "Question",
      name: "What IQ is a 1200 SAT score?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A 1200 SAT score roughly corresponds to an IQ of approximately 113-117, placing you in the high average range. This represents a solid score that demonstrates above-average cognitive ability and academic preparation.",
      },
    },
    {
      "@type": "Question",
      name: "Is the SAT an IQ test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, the SAT is not an IQ test. It's a college readiness assessment that measures math and verbal skills. However, SAT scores correlate strongly with IQ (r = 0.7-0.8) because both tests require similar cognitive abilities like reasoning, pattern recognition, and working memory.",
      },
    },
  ],
};

const SATtoIQ = () => (
  <ContentPage>
    <SEOHead
      title="SAT to IQ Conversion: Estimate Your IQ from SAT Scores | MyIQScores"
      description="Convert your SAT score to an estimated IQ. See the SAT to IQ conversion table, understand the correlation between SAT and IQ, and what your score means."
      canonicalUrl="/sat-to-iq"
      ogType="article"
      jsonLd={faqSchema}
    />

    <h1>
      SAT to IQ Conversion: <span className="gradient-text">Estimate Your IQ from SAT Scores</span>
    </h1>

    <p>
      Many people wonder what their SAT score says about their IQ. While the SAT isn't an IQ test,
      the two are strongly correlated — research shows a correlation coefficient of about 0.7–0.8
      between SAT scores and IQ. This means your SAT score can provide a rough estimate of your
      cognitive ability, though it's not a perfect conversion.
    </p>

    <h2>SAT to IQ Conversion Table</h2>
    <p>
      This table shows estimated IQ equivalents for SAT scores (current 400–1600 scale). These are
      approximations based on published research correlating SAT performance with standardized IQ tests.
    </p>
    <table>
      <thead>
        <tr>
          <th>SAT Score</th>
          <th>Estimated IQ</th>
          <th>IQ Classification</th>
          <th>Percentile</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1600</td><td>~140+</td><td><Link to="/is-140-iq-good">Genius-level</Link></td><td>99.6th+</td></tr>
        <tr><td>1550</td><td>~137</td><td><Link to="/is-135-iq-good">Very Superior</Link></td><td>99th</td></tr>
        <tr><td>1500</td><td>~132</td><td><Link to="/is-130-iq-good">Gifted</Link></td><td>98th</td></tr>
        <tr><td>1450</td><td>~128</td><td><Link to="/is-125-iq-good">Superior</Link></td><td>96th</td></tr>
        <tr><td>1400</td><td>~125</td><td><Link to="/is-125-iq-good">Superior</Link></td><td>95th</td></tr>
        <tr><td>1350</td><td>~122</td><td><Link to="/is-120-iq-good">Superior</Link></td><td>93rd</td></tr>
        <tr><td>1300</td><td>~119</td><td><Link to="/is-120-iq-good">High Average</Link></td><td>90th</td></tr>
        <tr><td>1250</td><td>~117</td><td><Link to="/is-115-iq-good">High Average</Link></td><td>87th</td></tr>
        <tr><td>1200</td><td>~115</td><td><Link to="/is-115-iq-good">High Average</Link></td><td>84th</td></tr>
        <tr><td>1150</td><td>~112</td><td><Link to="/is-110-iq-good">High Average</Link></td><td>79th</td></tr>
        <tr><td>1100</td><td>~110</td><td><Link to="/is-110-iq-good">High Average</Link></td><td>75th</td></tr>
        <tr><td>1050</td><td>~107</td><td><Link to="/is-105-iq-good">Average</Link></td><td>68th</td></tr>
        <tr><td>1000</td><td>~104</td><td><Link to="/is-105-iq-good">Average</Link></td><td>61st</td></tr>
        <tr><td>950</td><td>~101</td><td><Link to="/is-100-iq-good">Average</Link></td><td>53rd</td></tr>
        <tr><td>900</td><td>~98</td><td><Link to="/is-100-iq-good">Average</Link></td><td>45th</td></tr>
        <tr><td>850</td><td>~95</td><td><Link to="/is-95-iq-good">Average</Link></td><td>37th</td></tr>
        <tr><td>800</td><td>~92</td><td><Link to="/is-90-iq-good">Average</Link></td><td>30th</td></tr>
      </tbody>
    </table>

    <h2>Why SAT and IQ Correlate</h2>
    <p>
      The SAT and IQ tests share underlying cognitive demands. Both require:
    </p>
    <ul>
      <li><strong>Logical reasoning</strong> — deducing correct answers through systematic thinking</li>
      <li><strong>Pattern recognition</strong> — identifying relationships in data and text</li>
      <li><strong>Working memory</strong> — holding multiple pieces of information simultaneously</li>
      <li><strong>Processing speed</strong> — working accurately under time pressure</li>
      <li><strong>Verbal comprehension</strong> — understanding complex reading passages</li>
    </ul>
    <p>
      The SAT was originally derived from Army IQ tests used in World War I. While the College Board
      has distanced the test from IQ measurement, the cognitive overlap remains substantial.
    </p>

    <h2>Why This Isn't a Perfect Conversion</h2>
    <p>
      Several important factors make SAT-to-IQ conversion imprecise:
    </p>
    <ul>
      <li><strong>Test preparation</strong> — SAT scores can be improved through coaching and practice; IQ is harder to train for</li>
      <li><strong>Subject knowledge</strong> — the SAT tests learned math and reading skills, not just raw ability</li>
      <li><strong>Motivation</strong> — students who care about college admission try harder on the SAT than they might on an IQ test</li>
      <li><strong>Score ceiling</strong> — the SAT caps at 1600, compressing differences at the top; IQ tests measure higher</li>
      <li><strong>Test anxiety</strong> — the high-stakes nature of the SAT affects some students more than a low-stakes IQ test would</li>
    </ul>

    <h2>SAT Scores by College Selectivity</h2>
    <table>
      <thead>
        <tr>
          <th>College Tier</th>
          <th>Typical SAT Range</th>
          <th>Estimated IQ Range</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Ivy League / Top 10</td><td>1480–1580</td><td>130–140+</td></tr>
        <tr><td>Top 25 Universities</td><td>1400–1520</td><td>125–135</td></tr>
        <tr><td>Top 50 Universities</td><td>1300–1440</td><td>119–128</td></tr>
        <tr><td>Competitive State Schools</td><td>1150–1350</td><td>112–122</td></tr>
        <tr><td>Average State Schools</td><td>1000–1200</td><td>104–115</td></tr>
        <tr><td>Open Admission</td><td>800–1050</td><td>92–107</td></tr>
      </tbody>
    </table>

    <h2>Old SAT (2400 Scale) to IQ</h2>
    <p>
      If you took the SAT before 2016 when it used the 2400-point scale, here are approximate
      conversions:
    </p>
    <table>
      <thead>
        <tr>
          <th>Old SAT (2400)</th>
          <th>New SAT (1600)</th>
          <th>Estimated IQ</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>2400</td><td>1600</td><td>~140+</td></tr>
        <tr><td>2200</td><td>1490</td><td>~131</td></tr>
        <tr><td>2000</td><td>1370</td><td>~123</td></tr>
        <tr><td>1800</td><td>1250</td><td>~117</td></tr>
        <tr><td>1600</td><td>1130</td><td>~111</td></tr>
        <tr><td>1400</td><td>1010</td><td>~104</td></tr>
        <tr><td>1200</td><td>900</td><td>~98</td></tr>
      </tbody>
    </table>

    <h2>Frequently Asked Questions</h2>

    <h3>Can you convert SAT scores to IQ?</h3>
    <p>
      You can estimate IQ from SAT scores, but it's not exact. The correlation is about 0.7–0.8. A
      1200 SAT roughly corresponds to an IQ of ~115, while a 1400 SAT roughly corresponds to ~125.
    </p>

    <h3>What IQ is a 1500 SAT score?</h3>
    <p>
      A 1500 SAT roughly corresponds to an IQ of approximately 130–135, placing you in the{" "}
      <Link to="/is-130-iq-good">gifted range</Link>.
    </p>

    <h3>What IQ is a 1200 SAT score?</h3>
    <p>
      A 1200 SAT roughly corresponds to an IQ of approximately 113–117, placing you in the{" "}
      <Link to="/is-115-iq-good">high average range</Link>.
    </p>

    <h3>Is the SAT an IQ test?</h3>
    <p>
      No, the SAT is a college readiness assessment, not an IQ test. However, both tests require
      similar cognitive abilities, which is why they correlate strongly.
    </p>

    <p className="mt-8">
      Want a more direct measure of your cognitive ability?{" "}
      <Link to="/test">Take our free IQ test</Link> for an instant estimate. Or learn more about{" "}
      <Link to="/what-is-iq">what IQ really measures</Link>.
    </p>
  </ContentPage>
);

export default SATtoIQ;
