import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is considered a good IQ score?",
      acceptedAnswer: { "@type": "Answer", text: "Any IQ score of 90 or above is considered average or better. Scores of 110-119 are high average, 120-129 are superior, and 130+ is gifted. However, 'good' depends on context — a 100 IQ is perfectly good for living a successful, fulfilling life, while competitive academic programs may look for 120+." }},
    { "@type": "Question", name: "Is 120 a good IQ?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, 120 is an excellent IQ score. It places you in the superior range at the 91st percentile, meaning you score higher than about 91% of the population. People with a 120 IQ typically excel in academic and professional settings." }},
    { "@type": "Question", name: "Is 100 IQ good or bad?",
      acceptedAnswer: { "@type": "Answer", text: "100 is a perfectly good IQ — it's literally the average. Most successful people in the world have IQs near 100. Average does not mean mediocre; it means your cognitive abilities are typical for the general population, and IQ is not the primary determinant of life success." }},
    { "@type": "Question", name: "What IQ is considered genius?",
      acceptedAnswer: { "@type": "Answer", text: "An IQ of 140 or above is commonly considered genius-level, though some definitions use 130 or 145 as the threshold. Only about 0.4% of the population (1 in 261 people) scores 140 or higher." }},
  ],
};

const GoodIQScore = () => (
  <ContentPage>
    <SEOHead
      title="What Is a Good IQ Score? Ranges & Percentiles | MyIQScores"
      description="What is a good IQ score? A score of 100 is average, 110+ is above average, 120+ is superior, and 130+ is gifted. Find out what your IQ score means and where you stand."
      canonicalUrl="/good-iq-score"
      ogType="article"
      jsonLd={faqSchema}
    />

    <h1>What Is a <span className="gradient-text">Good IQ Score</span>?</h1>

    <p>
      "Is my IQ good?" It's the most common question people ask after taking an IQ test. The short
      answer: <strong>any score of 90 or above is considered average or better</strong>, and the
      vast majority of people fall in the 85-115 range. But what counts as "good" depends entirely
      on what you're comparing against and what your goals are.
    </p>

    <h2>IQ Score Ranges: Quick Reference</h2>
    <table>
      <thead>
        <tr><th>Score</th><th>Classification</th><th>% of Population</th><th>Is It "Good"?</th></tr>
      </thead>
      <tbody>
        <tr><td><Link to="/is-130-iq-good">130+</Link></td><td>Gifted</td><td>~2%</td><td>Exceptional</td></tr>
        <tr><td><Link to="/is-120-iq-good">120–129</Link></td><td>Superior</td><td>~7%</td><td>Excellent</td></tr>
        <tr><td><Link to="/is-110-iq-good">110–119</Link></td><td>High Average</td><td>~16%</td><td>Very good</td></tr>
        <tr><td><Link to="/is-100-iq-good">90–109</Link></td><td>Average</td><td>~50%</td><td>Good — this is where most people are</td></tr>
        <tr><td><Link to="/is-85-iq-good">80–89</Link></td><td>Low Average</td><td>~16%</td><td>Functional — no limitations for daily life</td></tr>
        <tr><td><Link to="/is-75-iq-good">70–79</Link></td><td>Borderline</td><td>~7%</td><td>May benefit from additional support</td></tr>
        <tr><td><Link to="/is-65-iq-good">Below 70</Link></td><td>Extremely Low</td><td>~2%</td><td>May qualify for support services</td></tr>
      </tbody>
    </table>

    <p>
      For the complete breakdown, see our <Link to="/iq-score-ranges">IQ Score Ranges guide</Link>.
    </p>

    <h2>What "Good" Really Means</h2>
    <p>
      Here's the truth most IQ discussions miss: <strong>a "good" IQ is whatever allows you to
      achieve your goals</strong>. A score of 100 is perfectly good for running a successful business,
      raising a family, or excelling in most careers. A score of 130 isn't "better" in any universal
      sense — it just means certain types of abstract reasoning come more easily.
    </p>
    <p>
      Research consistently shows that above an IQ of approximately 115-120, additional IQ points
      have <strong>diminishing returns</strong> for career success, income, and life satisfaction.
      Personality traits like conscientiousness, social skills, emotional intelligence, and
      opportunity become the dominant factors. Many people with 100 IQs outperform people with 130
      IQs in their careers because of superior motivation, work ethic, or interpersonal skills.
    </p>

    <h2>Good IQ Scores for Specific Goals</h2>

    <h3>For College</h3>
    <p>
      An IQ of <Link to="/is-100-iq-good">100</Link> (average) is sufficient for most college
      programs. Competitive universities may implicitly select for IQs of 115+, and elite programs
      (Ivy League, MIT) may average 130+. But IQ is just one factor — GPA, extracurriculars, and
      test prep matter too. See our <Link to="/sat-to-iq">SAT to IQ conversion</Link> for how
      standardized test scores relate.
    </p>

    <h3>For Most Careers</h3>
    <p>
      An IQ of <Link to="/is-90-iq-good">90-110</Link> is adequate for the vast majority of
      careers. Demanding fields like <Link to="/iq-needed-for/doctor">medicine</Link> (120-130),{" "}
      <Link to="/iq-needed-for/lawyer">law</Link> (115-130), and{" "}
      <Link to="/iq-needed-for/engineer">engineering</Link> (115-128) tend to have higher averages,
      but individual variation is wide. See our full{" "}
      <Link to="/iq-needed-for/doctor">career IQ pages</Link> for specific professions.
    </p>

    <h3>For Mensa</h3>
    <p>
      <Link to="/is-130-iq-good">130</Link> is the minimum for Mensa membership (98th percentile).
      Only about 2% of the population qualifies. If your goal is Mensa, you need a "very superior"
      or "gifted" score.
    </p>

    <h3>For "Genius"</h3>
    <p>
      <Link to="/is-140-iq-good">140</Link> is the commonly cited genius threshold, though some
      definitions use 130 or 145. Only about 0.4% of people score this high. See our page on the{" "}
      <Link to="/highest-iq-ever">highest IQ scores ever recorded</Link>.
    </p>

    <h2>Why You Shouldn't Obsess Over Your Score</h2>
    <p>
      IQ tests measure specific types of cognitive ability — logical reasoning, pattern recognition,
      processing speed, working memory. They do <strong>not</strong> measure:
    </p>
    <ul>
      <li>Creativity and artistic ability</li>
      <li>Emotional intelligence and empathy</li>
      <li>Practical wisdom and common sense</li>
      <li>Motivation, discipline, and work ethic</li>
      <li>Social skills and leadership ability</li>
      <li>Musical, athletic, or physical intelligence</li>
    </ul>
    <p>
      A "good" life doesn't require a high IQ. It requires finding work that suits your strengths,
      building meaningful relationships, maintaining your health, and pursuing goals that matter to
      you. IQ is one tool in a large toolkit.
    </p>

    <h2>Good IQ by Age</h2>
    <p>
      IQ is age-normed, so "good" is the same at every age — 100 is always average for your age
      group. However, cognitive abilities change across the lifespan:
    </p>
    <ul>
      <li><Link to="/iq-by-age/children">Children</Link> — scores can be volatile; don't over-interpret</li>
      <li><Link to="/iq-by-age/teenagers">Teenagers</Link> — scores stabilizing, good time to test</li>
      <li><Link to="/iq-by-age/young-adults">Young adults</Link> — fluid intelligence peaks</li>
      <li><Link to="/iq-by-age/adults">Adults</Link> — most stable period for IQ measurement</li>
      <li><Link to="/iq-by-age/seniors">Seniors</Link> — crystallized intelligence stays strong</li>
    </ul>

    <h2>Frequently Asked Questions</h2>

    <h3>What is considered a good IQ score?</h3>
    <p>
      Any score of 90 or above is average or better. Scores of 110-119 are high average, 120-129 are
      superior, and 130+ is gifted. "Good" depends on context.
    </p>

    <h3>Is 120 a good IQ?</h3>
    <p>
      Yes, <Link to="/is-120-iq-good">120 is excellent</Link> — superior range at the 91st
      percentile. It's associated with strong academic and professional achievement.
    </p>

    <h3>Is 100 IQ good or bad?</h3>
    <p>
      <Link to="/is-100-iq-good">100 is perfectly good</Link> — it's the average. Most successful
      people have IQs near 100.
    </p>

    <h3>What IQ is considered genius?</h3>
    <p>
      <Link to="/is-140-iq-good">140+</Link> is commonly cited as genius-level. Only about 1 in 261
      people score this high.
    </p>

    <p className="mt-8">
      Ready to find out your score? <Link to="/test">Take our free IQ test</Link> — 30 questions,
      instant results. Then check your score on our{" "}
      <Link to="/iq-score-ranges">complete score ranges chart</Link>.
    </p>
  </ContentPage>
);

export default GoodIQScore;
