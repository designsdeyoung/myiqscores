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
      name: "What IQ is a 36 ACT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A perfect 36 ACT score roughly corresponds to an IQ of approximately 145–150, placing you in the exceptionally gifted range. Only about 0.1% of test-takers earn a 36, reflecting the rarity of this level of cognitive performance. However, this is an estimate — the ACT measures achievement and learned skills in addition to raw cognitive ability.",
      },
    },
    {
      "@type": "Question",
      name: "Can you convert ACT to IQ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can estimate IQ from ACT scores, but it's not an exact conversion. The ACT correlates with IQ at about 0.7, meaning there's a strong but imperfect relationship. A 30 ACT roughly corresponds to an IQ of about 122–126, while a 24 ACT roughly corresponds to an IQ of about 107–111.",
      },
    },
    {
      "@type": "Question",
      name: "What ACT score is genius?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An ACT score of 34 or above roughly corresponds to the 'gifted' or 'genius' IQ range (135+). A 36 (perfect score) maps to approximately IQ 145–150. About 1% of test-takers score 34 or above. For context, Mensa requires an IQ in the top 2%, which roughly corresponds to an ACT of 32 or higher.",
      },
    },
    {
      "@type": "Question",
      name: "Is the ACT an IQ test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, the ACT is a college readiness assessment, not an IQ test. It measures knowledge and skills in English, math, reading, and science that students are expected to have learned in high school. However, ACT scores correlate with IQ (r ≈ 0.7) because both require similar cognitive abilities like reasoning, working memory, and verbal comprehension.",
      },
    },
  ],
};

const actToIQ = (actScore: number): number => {
  return Math.round(85 + ((actScore - 1) / 35) * 65);
};

const ACTtoIQ = () => {
  const [actScore, setActScore] = useState<string>("");
  const estimatedIQ = actScore !== "" ? actToIQ(Number(actScore)) : null;

  return (
    <ContentPage>
      <SEOHead
        title="ACT to IQ Conversion Chart & Calculator | MyIQScores"
        description="Convert your ACT score to an estimated IQ. A 36 ACT correlates to approximately IQ 145. See the full ACT to IQ conversion table."
        canonicalUrl="/act-to-iq"
        ogType="article"
        jsonLd={faqSchema}
      />

      <h1>
        ACT to IQ Conversion: <span className="gradient-text">Estimate Your IQ from Your ACT Score</span>
      </h1>

      <p>
        Your ACT score can offer a rough estimate of your IQ. While the ACT is a college readiness
        exam — not an intelligence test — research shows a correlation of approximately 0.7 between
        ACT performance and IQ scores on standardized tests. This means ACT scores are a meaningful
        but imperfect proxy for cognitive ability.
      </p>

      <h2>ACT to IQ Calculator</h2>
      <p>Enter your ACT composite score (1–36) to see an estimated IQ range:</p>

      <div className="glass-card p-6 rounded-xl my-6 max-w-sm">
        <label className="block text-sm font-semibold mb-2 text-white/80" htmlFor="actInput">
          ACT Composite Score
        </label>
        <input
          id="actInput"
          type="number"
          min={1}
          max={36}
          value={actScore}
          onChange={(e) => {
            const val = e.target.value;
            if (val === "" || (Number(val) >= 1 && Number(val) <= 36)) {
              setActScore(val);
            }
          }}
          placeholder="e.g. 28"
          className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-primary text-lg"
        />
        {estimatedIQ !== null && actScore !== "" && (
          <div className="mt-4 p-4 rounded-lg bg-primary/20 border border-primary/30 text-center">
            <p className="text-white/70 text-sm mb-1">Estimated IQ</p>
            <p className="text-3xl font-bold gradient-text">~{estimatedIQ}</p>
            <p className="text-white/60 text-xs mt-1">
              ACT {actScore} → approximately IQ {estimatedIQ - 2}–{estimatedIQ + 2}
            </p>
          </div>
        )}
      </div>

      <h2>ACT to IQ Conversion Table</h2>
      <p>
        This table shows estimated IQ equivalents for key ACT composite scores based on published
        research correlating ACT performance with standardized IQ assessments.
      </p>
      <table>
        <thead>
          <tr>
            <th>ACT Score</th>
            <th>Estimated IQ Range</th>
            <th>IQ Classification</th>
            <th>ACT Percentile</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>36</td><td>145–150</td><td>Exceptionally Gifted</td><td>99.9th+</td></tr>
          <tr><td>34</td><td>135–140</td><td>Very Superior / Gifted</td><td>99th</td></tr>
          <tr><td>32</td><td>128–132</td><td>Superior / Gifted</td><td>97th</td></tr>
          <tr><td>30</td><td>122–126</td><td>Superior</td><td>95th</td></tr>
          <tr><td>28</td><td>117–121</td><td>High Average</td><td>90th</td></tr>
          <tr><td>26</td><td>112–116</td><td>High Average</td><td>82nd</td></tr>
          <tr><td>24</td><td>107–111</td><td>High Average</td><td>74th</td></tr>
          <tr><td>22</td><td>102–106</td><td>Average</td><td>62nd</td></tr>
          <tr><td>20</td><td>97–101</td><td>Average</td><td>49th</td></tr>
          <tr><td>18</td><td>92–96</td><td>Average</td><td>36th</td></tr>
          <tr><td>16</td><td>87–91</td><td>Low Average</td><td>24th</td></tr>
        </tbody>
      </table>

      <h2>Why ACT and IQ Correlate</h2>
      <p>
        Both the ACT and IQ tests draw on overlapping cognitive skills. The ACT's four sections —
        English, Math, Reading, and Science — all require:
      </p>
      <ul>
        <li><strong>Verbal reasoning</strong> — parsing complex text and identifying logical relationships</li>
        <li><strong>Quantitative reasoning</strong> — applying mathematical concepts under time pressure</li>
        <li><strong>Working memory</strong> — holding multiple pieces of information simultaneously</li>
        <li><strong>Processing speed</strong> — producing accurate answers quickly</li>
        <li><strong>Fluid reasoning</strong> — applying learned knowledge to novel problems</li>
      </ul>
      <p>
        Research by Frey and Detterman (2004) found a correlation of 0.77 between the old SAT and
        general intelligence (g). The ACT, which measures similar constructs, shows a comparable
        relationship. A correlation of ~0.7 means ACT scores explain roughly 49% of the variance
        in IQ — substantial, but far from the whole picture.
      </p>

      <h2>Achievement vs. Aptitude: Key Differences</h2>
      <p>
        The core distinction between the ACT and an IQ test is what each measures:
      </p>
      <ul>
        <li>
          <strong>ACT (achievement)</strong> — measures what you have learned in school: specific
          grammar rules, geometry formulas, biology concepts. Coaching, test prep, and strong
          schooling can meaningfully raise ACT scores.
        </li>
        <li>
          <strong>IQ (aptitude)</strong> — measures reasoning ability more independent of specific
          learned content. IQ is more resistant to coaching, though practice on test formats can
          still provide modest gains.
        </li>
      </ul>
      <p>
        This means two students with identical IQs might score very differently on the ACT depending
        on school quality, effort, and test preparation. Conversely, a student who test-preps
        intensively may score higher on the ACT than their underlying cognitive ability would predict.
      </p>

      <h2>ACT Score Distributions</h2>
      <table>
        <thead>
          <tr>
            <th>ACT Range</th>
            <th>Label</th>
            <th>% of Test-Takers</th>
            <th>Typical College Tier</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>33–36</td><td>Exceptional</td><td>~3%</td><td>Ivy League / Top 10</td></tr>
          <tr><td>29–32</td><td>Strong</td><td>~10%</td><td>Top 25–50</td></tr>
          <tr><td>25–28</td><td>Above Average</td><td>~20%</td><td>Selective State Schools</td></tr>
          <tr><td>20–24</td><td>Average</td><td>~35%</td><td>Most 4-Year Colleges</td></tr>
          <tr><td>Below 20</td><td>Below Average</td><td>~32%</td><td>Open/Community Colleges</td></tr>
        </tbody>
      </table>

      <h2>Frequently Asked Questions</h2>

      <h3>What IQ is a 36 ACT?</h3>
      <p>
        A perfect 36 ACT score roughly corresponds to an IQ of approximately 145–150 — the
        exceptionally gifted range. Only about 0.1% of test-takers achieve a 36.
      </p>

      <h3>Can you convert ACT to IQ?</h3>
      <p>
        You can estimate IQ from ACT scores with moderate confidence. The correlation is roughly 0.7.
        A 30 ACT maps to approximately IQ 122–126, while a 24 maps to approximately IQ 107–111.
      </p>

      <h3>What ACT score is genius?</h3>
      <p>
        An ACT of 34+ roughly corresponds to the gifted/genius range (IQ 135+). A perfect 36
        maps to approximately IQ 145–150. For Mensa-level (top 2%), an ACT of 32 or higher is
        the rough threshold.
      </p>

      <h3>Is the ACT an IQ test?</h3>
      <p>
        No — the ACT tests academic achievement, not pure cognitive ability. However, ACT scores
        correlate with IQ at ~0.7, because both tasks require similar reasoning and verbal skills.
      </p>

      <p className="mt-8">
        Want to compare scores from different tests?{" "}
        <Link to="/sat-to-iq">See our SAT to IQ converter</Link> or explore{" "}
        <Link to="/iq-score-ranges">IQ score ranges and classifications</Link>. Ready for a direct
        measure? <Link to="/test">Take our free IQ test</Link>.
      </p>

      <p>
        Also see: <Link to="/good-iq-score">What is a good IQ score?</Link>
      </p>
    </ContentPage>
  );
};

export default ACTtoIQ;
