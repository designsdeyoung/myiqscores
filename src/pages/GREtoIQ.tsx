import { useState } from "react";
import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What IQ is a perfect 340 GRE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A perfect GRE total score of 340 (170 Verbal + 170 Quantitative) roughly corresponds to an IQ of 145 or above, placing you in the exceptionally gifted range. Fewer than 1% of GRE test-takers achieve a perfect 340. This is an estimate — the GRE measures academic aptitude more than pure general intelligence.",
      },
    },
    {
      "@type": "Question",
      name: "What is a good GRE score for IQ purposes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A GRE total of 320+ (roughly 85th percentile) corresponds to an estimated IQ of 132–136, placing you in the gifted range. A score of 310–320 maps to approximately IQ 126–131, and 300–310 maps to approximately IQ 120–125. Even a score of 280–300 represents above-average cognitive ability.",
      },
    },
    {
      "@type": "Question",
      name: "Does the GRE Verbal or Quantitative section better predict IQ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GRE Verbal tends to correlate more strongly with crystallized intelligence (verbal reasoning, vocabulary, reading comprehension) and overall g factor, while GRE Quantitative correlates with fluid intelligence and mathematical reasoning. Research suggests that verbal IQ components correlate slightly more with overall IQ (g), but both sections contribute meaningfully.",
      },
    },
    {
      "@type": "Question",
      name: "Is the GRE an IQ test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, the GRE is a graduate school admissions test, not an IQ test. However, it correlates with IQ at roughly 0.6–0.7. The GRE measures academic aptitude — verbal reasoning, quantitative reasoning, and analytical writing — skills that heavily overlap with those tapped by IQ tests, particularly for graduate-level education requirements.",
      },
    },
  ],
};

const greToIQ = (total: number): number => {
  // Total ranges from 260 to 340 (80-point range)
  // Maps to IQ approximately 96 to 145 (49-point range)
  return Math.round(96 + ((total - 260) / 80) * 49);
};

const GREtoIQ = () => {
  const [verbal, setVerbal] = useState<string>("");
  const [quant, setQuant] = useState<string>("");

  const v = Number(verbal);
  const q = Number(quant);
  const total = v && q ? v + q : null;
  const estimatedIQ = total !== null ? greToIQ(total) : null;

  const verbalValid = verbal !== "" && v >= 130 && v <= 170;
  const quantValid = quant !== "" && q >= 130 && q <= 170;
  const showResult = verbalValid && quantValid;

  return (
    <ContentPage>
      <SEOHead
        title="GRE to IQ Conversion Chart & Calculator | MyIQScores"
        description="Convert your GRE score to an estimated IQ. A perfect 340 GRE roughly corresponds to an IQ of 145+. See the full GRE to IQ conversion chart."
        canonicalUrl="/gre-to-iq"
        ogType="article"
        jsonLd={faqSchema}
      />

      <h1>
        GRE to IQ Conversion: <span className="gradient-text">Estimate Your IQ from Your GRE Score</span>
      </h1>

      <p>
        The GRE (Graduate Record Examination) is one of the best standardized proxies for estimating
        cognitive ability beyond high school. Graduate applicants are typically older, more
        academically developed, and harder to compare on simple achievement metrics — making the GRE
        a particularly interesting lens for IQ estimation. Research suggests a correlation of
        approximately 0.6–0.7 between GRE total scores and IQ.
      </p>

      <h2>GRE to IQ Calculator</h2>
      <p>Enter your GRE Verbal and Quantitative scores (130–170 each) to estimate your IQ:</p>

      <div className="glass-card p-6 rounded-xl my-6 max-w-sm">
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2 text-white/80" htmlFor="greVerbal">
            GRE Verbal (130–170)
          </label>
          <input
            id="greVerbal"
            type="number"
            min={130}
            max={170}
            value={verbal}
            onChange={(e) => {
              const val = e.target.value;
              if (val === "" || (Number(val) >= 130 && Number(val) <= 170)) {
                setVerbal(val);
              }
            }}
            placeholder="e.g. 158"
            className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary text-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2 text-white/80" htmlFor="greQuant">
            GRE Quantitative (130–170)
          </label>
          <input
            id="greQuant"
            type="number"
            min={130}
            max={170}
            value={quant}
            onChange={(e) => {
              const val = e.target.value;
              if (val === "" || (Number(val) >= 130 && Number(val) <= 170)) {
                setQuant(val);
              }
            }}
            placeholder="e.g. 162"
            className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary text-lg"
          />
        </div>
        {showResult && estimatedIQ !== null && total !== null && (
          <div className="mt-2 p-4 rounded-lg bg-primary/20 border border-primary/30 text-center">
            <p className="text-white/70 text-sm mb-1">GRE Total: {total}</p>
            <p className="text-white/70 text-sm mb-1">Estimated IQ</p>
            <p className="text-3xl font-bold gradient-text">~{estimatedIQ}</p>
            <p className="text-white/60 text-xs mt-1">
              Approximate range: IQ {estimatedIQ - 3}–{estimatedIQ + 3}
            </p>
          </div>
        )}
      </div>

      <h2>GRE Total Score to IQ Conversion Table</h2>
      <p>
        This table shows estimated IQ equivalents for GRE combined total scores (Verbal + Quantitative,
        260–340 scale). These are approximations based on the correlation between GRE performance and
        standardized IQ assessments.
      </p>
      <table>
        <thead>
          <tr>
            <th>GRE Total (V+Q)</th>
            <th>Estimated IQ</th>
            <th>IQ Classification</th>
            <th>GRE Percentile</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>340</td><td>145+</td><td>Exceptionally Gifted</td><td>99th+</td></tr>
          <tr><td>330</td><td>138–142</td><td>Very Superior / Gifted</td><td>97th</td></tr>
          <tr><td>320</td><td>132–136</td><td>Superior / Gifted</td><td>91st</td></tr>
          <tr><td>310</td><td>126–130</td><td>Superior</td><td>78th</td></tr>
          <tr><td>300</td><td>120–124</td><td>Superior</td><td>58th</td></tr>
          <tr><td>290</td><td>114–118</td><td>High Average</td><td>38th</td></tr>
          <tr><td>280</td><td>108–112</td><td>High Average</td><td>21st</td></tr>
          <tr><td>270</td><td>102–106</td><td>Average</td><td>10th</td></tr>
          <tr><td>260</td><td>96–100</td><td>Average</td><td>2nd</td></tr>
        </tbody>
      </table>

      <h2>GRE Verbal vs. Quantitative: Different IQ Dimensions</h2>
      <p>
        The two main GRE sections tap into different aspects of cognitive ability:
      </p>
      <ul>
        <li>
          <strong>GRE Verbal (130–170)</strong> — predicts crystallized intelligence: vocabulary
          depth, reading comprehension, analogical reasoning, and linguistic pattern recognition.
          High verbal scorers typically show strong verbal IQ (VIQ) and excel at humanities,
          law, and social science disciplines.
        </li>
        <li>
          <strong>GRE Quantitative (130–170)</strong> — predicts fluid intelligence: abstract
          reasoning, mathematical problem-solving, spatial thinking, and data analysis.
          High quant scorers typically show strong performance IQ (PIQ) and excel in
          STEM, economics, and engineering fields.
        </li>
      </ul>
      <p>
        Research suggests GRE Verbal scores correlate slightly more strongly with overall g
        (general intelligence factor) than Quantitative, though both sections contribute
        meaningfully to a holistic IQ estimate. A perfect 170 Verbal with a lower Quant score
        may indicate a different cognitive profile than the reverse.
      </p>

      <h2>Why GRE-to-IQ Conversion Isn't Exact</h2>
      <ul>
        <li>
          <strong>Population selection</strong> — GRE test-takers are already a pre-selected,
          college-educated population, compressing the range at the lower end. The average
          GRE test-taker is already smarter than the general population.
        </li>
        <li>
          <strong>Test preparation</strong> — GRE scores can be improved substantially through
          practice, vocabulary memorization, and strategy coaching; raw IQ is less trainable.
        </li>
        <li>
          <strong>Subject-specific knowledge</strong> — the Quantitative section assumes
          undergraduate-level math comfort, which varies by educational background.
        </li>
        <li>
          <strong>Motivation and context</strong> — high-stakes graduate admissions motivate
          effort in ways that low-stakes IQ tests may not.
        </li>
      </ul>

      <h2>Frequently Asked Questions</h2>

      <h3>What IQ is a perfect 340 GRE?</h3>
      <p>
        A perfect 340 GRE (170V + 170Q) roughly corresponds to an IQ of 145 or above — the
        exceptionally gifted range. Fewer than 1% of test-takers achieve this.
      </p>

      <h3>What is a good GRE score for IQ purposes?</h3>
      <p>
        A GRE total of 320+ maps to approximately IQ 132–136 (gifted range). A score of 310
        maps to IQ 126–130 (superior), and 300 maps to IQ 120–124 (also superior).
      </p>

      <h3>Does the GRE Verbal or Quantitative section better predict IQ?</h3>
      <p>
        Both contribute meaningfully. GRE Verbal correlates slightly more with overall IQ (g),
        while GRE Quantitative predicts mathematical and fluid reasoning ability. Together they
        provide a more complete cognitive profile.
      </p>

      <h3>Is the GRE an IQ test?</h3>
      <p>
        No — the GRE is a graduate admissions test that measures academic aptitude, not pure
        general intelligence. However, GRE scores correlate with IQ at roughly 0.6–0.7, making
        it a useful proxy.
      </p>

      <p className="mt-8">
        Compare across standardized tests:{" "}
        <Link to="/sat-to-iq">SAT to IQ converter</Link> |{" "}
        <Link to="/act-to-iq">ACT to IQ converter</Link>. Curious about what these scores mean?
        See <Link to="/genius-iq">what qualifies as genius IQ</Link> or{" "}
        <Link to="/test">take our free IQ test</Link>.
      </p>
    </ContentPage>
  );
};

export default GREtoIQ;
