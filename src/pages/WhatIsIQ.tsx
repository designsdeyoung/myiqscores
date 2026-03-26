import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does IQ stand for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IQ stands for Intelligence Quotient. It is a standardized score derived from cognitive tests designed to measure human intelligence relative to the general population. The average IQ score is 100.",
      },
    },
    {
      "@type": "Question",
      name: "What is a good IQ score?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An IQ score between 90 and 109 is considered average. Scores of 110-119 are above average, 120-129 are superior, and 130 or above is considered very superior or gifted. About 68% of people score between 85 and 115.",
      },
    },
    {
      "@type": "Question",
      name: "Can you increase your IQ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Research suggests that certain activities may help improve cognitive function, including regular physical exercise, learning new skills, reading, puzzle-solving, proper sleep, and nutrition.",
      },
    },
    {
      "@type": "Question",
      name: "How is IQ measured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IQ is measured through standardized intelligence tests that assess logical reasoning, pattern recognition, problem-solving, working memory, and verbal comprehension. The most widely used tests include the WAIS and Stanford-Binet.",
      },
    },
    {
      "@type": "Question",
      name: "Is IQ the same as intelligence?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IQ measures certain types of cognitive ability, but intelligence is much broader. IQ tests do not measure creativity, emotional intelligence, practical wisdom, or many other forms of human capability.",
      },
    },
  ],
};

const WhatIsIQ = () => (
  <ContentPage>
    <SEOHead
      title="What Is IQ? The Complete Guide to Intelligence Quotient | MyIQScores"
      description="What does IQ actually mean? Learn how IQ is measured, what your score means, the IQ bell curve, score ranges, and how to test your intelligence — all explained simply."
      canonicalUrl="/what-is-iq"
      ogType="article"
      jsonLd={faqSchema}
    />

    <h1>
      What Is IQ? <span className="gradient-text">The Complete Guide to Intelligence Quotient</span>
    </h1>

    <p>
      IQ stands for <strong>Intelligence Quotient</strong> — a standardized score that represents
      cognitive ability relative to the general population. The average IQ is set at 100, and most
      people (about 68%) score between 85 and 115. IQ tests measure specific cognitive skills like
      logical reasoning, pattern recognition, working memory, and problem-solving speed.
    </p>
    <p>
      Whether you're curious about your own score or trying to understand what IQ numbers really mean,
      this guide covers everything you need to know — from the history of IQ testing to what modern
      science says about intelligence.{" "}
      <Link to="/test">Take our free IQ test</Link> to discover your own score.
    </p>

    <h2>What Does IQ Stand For?</h2>
    <p>
      The term "Intelligence Quotient" was coined by German psychologist <strong>William Stern</strong>{" "}
      in 1912. The original formula was simple: divide a person's <em>mental age</em> (determined by
      cognitive tests) by their <em>chronological age</em>, then multiply by 100. A 10-year-old who
      performed at the level of a 12-year-old would have an IQ of 120 (12/10 × 100).
    </p>
    <p>
      This ratio method worked reasonably well for children but broke down for adults — mental age
      doesn't increase linearly throughout life. In 1939, psychologist <strong>David Wechsler</strong>{" "}
      introduced the <em>deviation IQ</em>, which compares an individual's performance to the
      statistical average of their age group. This is the system used today: a score of 100 is the
      mean, and a standard deviation of 15 points defines the spread. This means about 68% of people
      score between 85 and 115, and about 95% score between 70 and 130.
    </p>

    <h2>How Is IQ Measured?</h2>
    <p>
      Modern IQ tests assess several distinct cognitive abilities rather than producing a single
      "intelligence" score. The main domains tested include:
    </p>
    <ul>
      <li><strong>Logical Reasoning</strong> — identifying patterns, sequences, and rules in abstract information</li>
      <li><strong>Problem-Solving</strong> — applying reasoning to novel situations without prior knowledge</li>
      <li><strong>Working Memory</strong> — holding and manipulating information in short-term memory</li>
      <li><strong>Processing Speed</strong> — how quickly you can perform simple cognitive tasks accurately</li>
      <li><strong>Verbal Comprehension</strong> — understanding and reasoning with language</li>
      <li><strong>Spatial Reasoning</strong> — mentally manipulating shapes and visualizing spatial relationships</li>
    </ul>
    <p>
      The most widely used professional IQ tests include the <strong>Wechsler Adult Intelligence
      Scale (WAIS)</strong>, now in its fourth edition, which is the gold standard for adult IQ
      assessment. The <strong>Stanford-Binet Intelligence Scales</strong>, currently in its fifth
      edition, is another major test with a long history. <strong>Raven's Progressive Matrices</strong>{" "}
      is a non-verbal test that focuses specifically on abstract reasoning and is often used in
      cross-cultural research because it minimizes language and cultural bias.
    </p>
    <p>
      Online IQ tests, including <Link to="/test">ours</Link>, provide estimates based on similar
      principles but should not be considered clinical-grade assessments. For a formal IQ evaluation,
      consult a licensed psychologist who can administer a standardized test in a controlled setting.
    </p>

    <h2>The IQ Scale: What Your Score Means</h2>
    <p>
      IQ scores follow a normal distribution (bell curve) with a mean of 100 and standard deviation
      of 15. Here is what each range means:
    </p>
    <table>
      <thead>
        <tr>
          <th>Score Range</th>
          <th>Classification</th>
          <th>% of Population</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><Link to="/is-130-iq-good">130+</Link></td>
          <td>Very Superior / Gifted</td>
          <td>~2.1%</td>
        </tr>
        <tr>
          <td><Link to="/is-120-iq-good">120–129</Link></td>
          <td>Superior</td>
          <td>~6.7%</td>
        </tr>
        <tr>
          <td><Link to="/is-110-iq-good">110–119</Link></td>
          <td>High Average</td>
          <td>~16.1%</td>
        </tr>
        <tr>
          <td><Link to="/is-100-iq-good">90–109</Link></td>
          <td>Average</td>
          <td>~50%</td>
        </tr>
        <tr>
          <td><Link to="/is-85-iq-good">80–89</Link></td>
          <td>Low Average</td>
          <td>~16.1%</td>
        </tr>
        <tr>
          <td><Link to="/is-75-iq-good">70–79</Link></td>
          <td>Borderline</td>
          <td>~6.7%</td>
        </tr>
        <tr>
          <td><Link to="/is-70-iq-good">Below 70</Link></td>
          <td>Extremely Low</td>
          <td>~2.1%</td>
        </tr>
      </tbody>
    </table>
    <p>
      For a detailed breakdown of every score range with percentiles, career correlations, and
      what each level means in practice, see our{" "}
      <Link to="/iq-score-ranges">complete IQ score ranges guide</Link>.
    </p>

    <h2>The IQ Bell Curve Explained</h2>
    <p>
      IQ scores follow a <strong>normal distribution</strong> (also called a Gaussian distribution or
      bell curve). This means scores cluster around the average of 100, with progressively fewer people
      at the extremes. The standard deviation is 15 points, which defines the spread:
    </p>
    <ul>
      <li><strong>68%</strong> of people score between 85 and 115 (within 1 standard deviation)</li>
      <li><strong>95%</strong> of people score between 70 and 130 (within 2 standard deviations)</li>
      <li><strong>99.7%</strong> of people score between 55 and 145 (within 3 standard deviations)</li>
    </ul>
    <p>
      An important phenomenon to understand is the <strong>Flynn Effect</strong> — the observation that
      IQ scores have risen substantially over time, approximately 3 points per decade across many
      countries. This means a person scoring 100 today would have scored about 115 by the standards of
      the 1950s. The Flynn Effect is attributed to improvements in nutrition, education, healthcare,
      and environmental complexity. IQ tests are periodically re-normed to keep 100 as the average.
    </p>

    <h2>A Brief History of IQ Testing</h2>
    <p>
      <strong>1905 — Binet-Simon Test:</strong> French psychologist Alfred Binet and his colleague
      Theodore Simon created the first practical intelligence test at the request of the French
      government, which wanted to identify students needing additional educational support. Binet
      emphasized that his test measured current cognitive performance, not innate or fixed intelligence.
    </p>
    <p>
      <strong>1916 — Stanford-Binet:</strong> Lewis Terman at Stanford University adapted the
      Binet-Simon test for American use, creating the Stanford-Binet Intelligence Scales. Terman
      introduced the IQ ratio scoring method and began the longest-running longitudinal study of gifted
      individuals (the "Terman Study"), following over 1,500 high-IQ children throughout their lives.
    </p>
    <p>
      <strong>1939 — Wechsler Tests:</strong> David Wechsler developed the Wechsler-Bellevue
      Intelligence Scale, later refined into the WAIS (for adults) and WISC (for children). Wechsler
      introduced the deviation IQ system still used today and designed subtests measuring different
      cognitive domains rather than producing a single score.
    </p>
    <p>
      <strong>Modern Era:</strong> Today's IQ testing landscape includes computerized adaptive tests,
      increased awareness of cultural bias, and a broader understanding that IQ captures only a portion
      of human cognitive ability. Researchers continue refining tests to be more equitable and to better
      reflect the complexity of intelligence.
    </p>

    <h2>Types of Intelligence: IQ Isn't Everything</h2>
    <p>
      IQ tests measure specific types of cognitive ability, but human intelligence is far broader than
      what any single test can capture. Several influential theories have expanded our understanding:
    </p>
    <p>
      <strong>Fluid vs. Crystallized Intelligence:</strong> Psychologist Raymond Cattell distinguished
      between fluid intelligence (the ability to reason with novel information, which peaks in early
      adulthood and gradually declines) and crystallized intelligence (accumulated knowledge and skills,
      which continues growing throughout life). IQ tests measure both, but fluid intelligence is
      considered more closely related to raw cognitive ability.
    </p>
    <p>
      <strong>Gardner's Multiple Intelligences:</strong> Howard Gardner proposed eight distinct types of
      intelligence: linguistic, logical-mathematical, spatial, musical, bodily-kinesthetic,
      interpersonal, intrapersonal, and naturalistic. Traditional IQ tests primarily assess
      linguistic, logical-mathematical, and spatial intelligences, leaving the others largely unmeasured.
    </p>
    <p>
      <strong>Emotional Intelligence (EQ):</strong> Daniel Goleman popularized the concept of emotional
      intelligence — the ability to recognize, understand, manage, and reason with emotions. Research
      suggests EQ may be as important as IQ for personal and professional success, particularly in
      leadership and relationship-dependent roles.
    </p>
    <p>
      <strong>Practical Intelligence:</strong> Robert Sternberg's triarchic theory includes practical
      intelligence — the ability to solve real-world problems, adapt to new situations, and "read"
      social contexts effectively. This "street smarts" is often poorly correlated with IQ test
      performance but highly predictive of real-world success.
    </p>

    <h2>Can You Improve Your IQ?</h2>
    <p>
      Research suggests that genetics account for approximately <strong>50–80%</strong> of the
      variation in IQ scores, with the genetic contribution increasing from childhood to adulthood.
      However, the remaining 20–50% is influenced by environmental factors, meaning there is real
      room for improvement.
    </p>
    <p>
      Activities that research associates with cognitive improvement include:
    </p>
    <ul>
      <li><strong>Regular physical exercise</strong> — increases blood flow to the brain and promotes neurogenesis</li>
      <li><strong>Learning new skills</strong> — playing musical instruments, learning languages, and studying new subjects build neural connections</li>
      <li><strong>Adequate sleep</strong> — critical for memory consolidation and cognitive function</li>
      <li><strong>Proper nutrition</strong> — omega-3 fatty acids, antioxidants, and adequate micronutrients support brain health</li>
      <li><strong>Challenging cognitive activities</strong> — puzzle-solving, reading complex material, and strategic games exercise working memory</li>
    </ul>
    <p>
      It's important to be realistic: dramatic IQ increases in adulthood are unlikely. Most research
      shows modest improvements of a few points from sustained cognitive engagement and lifestyle
      improvements. However, optimizing these factors ensures your brain operates at its best, and
      the practical benefits of a healthier, more engaged mind extend far beyond what any IQ number
      can capture.
    </p>

    <h2>IQ and Real-World Outcomes</h2>
    <p>
      Research has found moderate correlations between IQ and several life outcomes, but these are
      statistical trends across large populations — not destiny for any individual.
    </p>
    <ul>
      <li><strong>Academic performance:</strong> IQ correlates about 0.5 with school grades — meaningful but far from deterministic. Study habits, motivation, and teaching quality matter enormously.</li>
      <li><strong>Career success:</strong> Higher IQ correlates with higher occupational status and income, but the relationship weakens significantly above average IQ. Personality traits like conscientiousness become stronger predictors of career success than IQ.</li>
      <li><strong>Health outcomes:</strong> Higher IQ is associated with better health and longer life expectancy, likely because higher cognitive ability helps people understand health information, make better lifestyle choices, and navigate healthcare systems.</li>
      <li><strong>Income:</strong> Each IQ point above average is associated with a small income premium, but the effect is modest compared to factors like education level, field of work, social capital, and luck.</li>
    </ul>
    <p>
      The most important takeaway is that IQ is <em>one factor among many</em>. Motivation, emotional
      intelligence, social skills, creativity, physical health, and opportunity all play crucial roles
      in determining life outcomes. Many people with average IQ scores lead extraordinarily successful
      lives, while some high-IQ individuals struggle. Your IQ score describes one dimension of your
      cognitive profile — it does not define your potential.
    </p>

    <h2>Frequently Asked Questions</h2>

    <h3>What does IQ stand for?</h3>
    <p>
      IQ stands for Intelligence Quotient. It is a standardized score derived from cognitive tests
      designed to measure human intelligence relative to the general population. The average IQ
      score is 100.
    </p>

    <h3>What is a good IQ score?</h3>
    <p>
      An IQ score between 90 and 109 is considered average. Scores of 110–119 are above average,
      120–129 are superior, and 130 or above is considered very superior or gifted. About 68% of
      people score between 85 and 115. See our{" "}
      <Link to="/iq-score-ranges">IQ score ranges guide</Link> for more detail.
    </p>

    <h3>Can you increase your IQ?</h3>
    <p>
      Research suggests that certain activities may help improve cognitive function, including regular
      physical exercise, learning new skills, reading, puzzle-solving, proper sleep, and nutrition.
      While dramatic changes are unlikely for adults, modest improvements are achievable.
    </p>

    <h3>How is IQ measured?</h3>
    <p>
      IQ is measured through standardized intelligence tests that assess logical reasoning, pattern
      recognition, problem-solving, working memory, and verbal comprehension. The most widely used
      tests include the WAIS (Wechsler Adult Intelligence Scale) and Stanford-Binet.
    </p>

    <h3>Is IQ the same as intelligence?</h3>
    <p>
      IQ measures certain types of cognitive ability, but intelligence is much broader. IQ tests do
      not measure creativity, emotional intelligence, practical wisdom, or many other forms of human
      capability. Think of IQ as one important dimension of a much larger picture.
    </p>

    <p className="mt-8">
      Ready to see where you stand?{" "}
      <Link to="/test">Take our free IQ test</Link> — 30 questions, 15 minutes, instant results. Or
      explore <Link to="/iq-score-ranges">what every IQ score range means</Link> and{" "}
      <Link to="/average-iq-by-country">how IQ varies by country</Link>.
    </p>
  </ContentPage>
);

export default WhatIsIQ;
