import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import InArticleAd from "@/components/InArticleAd";
import Breadcrumb from "@/components/Breadcrumb";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the average IQ score?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The average IQ score is 100. IQ tests are designed and periodically re-normed so that 100 always represents the median score for the general population being tested. Roughly 50% of people score between 90 and 110, and about 68% score between 85 and 115.",
      },
    },
    {
      "@type": "Question",
      name: "What is a good IQ score compared to average?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Any score above 100 is above average. Scores of 110–119 are considered high average or above average. Scores of 120–129 are superior, and 130+ is very superior or gifted. Only about 2% of people score 130 or above. A score of 115 puts you in the top 16% — better than 84 out of 100 people.",
      },
    },
    {
      "@type": "Question",
      name: "What is the average IQ in the United States?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The average IQ in the United States is approximately 98–100, depending on the study and year. The U.S. scores slightly below the global average of roughly 100 on some international comparisons, but this varies by methodology. Educational attainment, nutrition, healthcare access, and socioeconomic factors all influence measured averages.",
      },
    },
    {
      "@type": "Question",
      name: "Does average IQ differ by country?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, measured average IQ varies significantly by country — from around 56 to 108 in published datasets. However, these differences reflect educational access, testing methodology, nutrition, healthcare, and socioeconomic factors far more than any innate differences. Countries with strong public education systems and robust childhood nutrition programs consistently score higher.",
      },
    },
    {
      "@type": "Question",
      name: "Has the average IQ been changing over time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Average IQ scores rose significantly throughout the 20th century — approximately 3 IQ points per decade in developed countries. This trend, known as the Flynn Effect, is attributed to better nutrition, education, healthcare, and reduced exposure to environmental toxins. In some developed nations, the Flynn Effect appears to have slowed or reversed slightly since the 1990s.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Is the Average IQ Score? A Complete Guide",
  description: "The average IQ is 100. Learn what average IQ means, how it varies by age, country, and education, and how your score compares to the population.",
  datePublished: "2026-05-21",
  dateModified: "2026-05-21",
  author: { "@type": "Person", name: "MyIQScores Editorial Team", url: "https://www.myiqscores.com/about" },
  publisher: { "@type": "Organization", name: "MyIQScores", url: "https://www.myiqscores.com" },
};

const AverageIQ = () => (
  <ContentPage
    readingTime={9}
    lastUpdated="May 2026"
    relatedPages={[
      { title: "IQ Score Ranges Chart", href: "/iq-score-ranges" },
      { title: "IQ Percentile Chart", href: "/iq-percentile-chart" },
      { title: "Average IQ by Country", href: "/average-iq-by-country" },
      { title: "Average IQ in the US", href: "/average-iq-us" },
      { title: "Average IQ by State", href: "/average-iq-by-state" },
      { title: "What Is a Good IQ Score?", href: "/good-iq-score" },
      { title: "IQ by Career", href: "/iq-by-career" },
      { title: "Take the Free IQ Test", href: "/" },
    ]}
  >
    <SEOHead
      title="What Is the Average IQ Score? A Complete Guide | MyIQScores"
      description="The average IQ score is 100. Learn what average IQ means, how scores are distributed, how average IQ varies by country and age, and how your score compares."
      canonicalUrl="/average-iq"
      ogType="article"
      jsonLd={[articleSchema, faqSchema]}
    />

    <Breadcrumb crumbs={[
      { label: "Home", href: "/" },
      { label: "Average IQ" },
    ]} />

    <h1>What Is the <span className="gradient-text">Average IQ Score</span>? A Complete Guide</h1>

    <p>
      The average IQ score is <strong>100</strong>. This isn't a coincidence — IQ tests are specifically designed and
      periodically re-normed so that 100 always represents the median performance of the population being tested.
      Understanding what "average" means in the context of IQ scores, and how your own score compares, requires
      understanding how the IQ scale is constructed.
    </p>

    <p>
      This guide covers what the average IQ actually means, how scores are distributed around the average,
      how averages differ by country and age group, what factors influence where people fall on the scale,
      and how to interpret your own IQ-style test result in context.
    </p>

    <h2>Why Is the Average IQ Always 100?</h2>
    <p>
      Modern IQ tests don't have a fixed scoring system where the same performance always produces the same number.
      Instead, they use <strong>deviation IQ scoring</strong>: your performance is compared to a normative sample —
      thousands of people in your age group — and your score represents where you fall relative to that group.
      The distribution is set with a <strong>mean of 100</strong> and a <strong>standard deviation of 15</strong>.
    </p>
    <p>
      This means that every few years, when tests are re-normed to account for population changes, the same raw
      performance might produce a slightly different IQ score. The number 100 always represents the middle —
      what's changed is the absolute level of performance that earns it. This is connected to the
      <Link to="/blog/flynn-effect"> Flynn Effect</Link> — the documented rise in raw cognitive test performance
      across generations.
    </p>

    <h2>How IQ Scores Are Distributed Around the Average</h2>
    <p>
      IQ scores follow a normal distribution (the bell curve). Here's how the population is distributed:
    </p>

    <div className="overflow-x-auto my-6">
      <table>
        <thead>
          <tr>
            <th>IQ Range</th>
            <th>Classification</th>
            <th>% of Population</th>
            <th>Percentile</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>130 and above</td><td>Very Superior / Gifted</td><td>~2.2%</td><td>Top 2%</td></tr>
          <tr><td>120–129</td><td>Superior</td><td>~6.7%</td><td>Top 9%</td></tr>
          <tr><td>110–119</td><td>High Average</td><td>~16.1%</td><td>Top 25%</td></tr>
          <tr><td>90–109</td><td>Average</td><td>~50%</td><td>25th–75th percentile</td></tr>
          <tr><td>80–89</td><td>Low Average</td><td>~16.1%</td><td>Bottom 25%</td></tr>
          <tr><td>70–79</td><td>Borderline</td><td>~6.7%</td><td>Bottom 9%</td></tr>
          <tr><td>Below 70</td><td>Extremely Low</td><td>~2.2%</td><td>Bottom 2%</td></tr>
        </tbody>
      </table>
    </div>

    <p>
      About <strong>50% of the population scores between 90 and 110</strong> — the broad "average" band.
      About 68% score between 85 and 115 (within one standard deviation of 100). Roughly 95% of people
      score between 70 and 130. Scores above 130 or below 70 are genuinely rare.
    </p>

    <p>
      For a complete breakdown of what each score range means, including career correlations and percentile data,
      see our <Link to="/iq-score-ranges">IQ score ranges guide</Link>.
    </p>

    <InArticleAd />

    <h2>What Does "Average IQ" Actually Tell You?</h2>
    <p>
      An IQ score of 100 means you performed at the median level for your age group on the specific cognitive
      tasks measured by that test. This covers abilities like:
    </p>
    <ul>
      <li>Pattern recognition and abstract reasoning</li>
      <li>Working memory and information processing</li>
      <li>Verbal comprehension and reasoning</li>
      <li>Spatial reasoning and mental rotation</li>
      <li>Numerical and quantitative reasoning</li>
    </ul>
    <p>
      What "average IQ" does <em>not</em> tell you: how creative you are, your emotional intelligence, your
      social skills, your motivation and work ethic, your practical wisdom, or your potential for success in
      most areas of life. People with perfectly average IQ scores routinely outperform higher-IQ individuals
      in careers, relationships, and personal achievement.
    </p>

    <h2>Average IQ by Age Group</h2>
    <p>
      Because IQ is normalized within age groups, the average score is always 100 for any given age cohort.
      But cognitive abilities themselves do change with age. Research shows:
    </p>
    <ul>
      <li><strong>Fluid intelligence</strong> (raw reasoning, pattern detection) peaks in the mid-20s and gradually declines from the 30s onward.</li>
      <li><strong>Crystallized intelligence</strong> (accumulated knowledge, vocabulary, wisdom) continues growing through the 60s before leveling off.</li>
      <li><strong>Processing speed</strong> declines gradually from early adulthood.</li>
      <li><strong>Working memory</strong> peaks around 25–30 then slowly declines.</li>
    </ul>
    <p>
      This means that what it takes to score 100 changes depending on your age — the test adjusts for
      these shifts so that scores remain comparable. A 50-year-old scoring 100 is performing at the median
      for 50-year-olds, not for 25-year-olds. See our guide on{" "}
      <Link to="/blog/iq-and-age">how IQ changes with age</Link> for a deeper look.
    </p>

    <InArticleAd />

    <h2>Average IQ by Country</h2>
    <p>
      Measured average IQ varies significantly across countries. Nations with strong educational infrastructure,
      robust early childhood nutrition programs, and high healthcare access consistently score higher on
      international cognitive assessments. Some highlights:
    </p>
    <ul>
      <li><strong>Japan, Singapore, Taiwan, South Korea</strong>: Consistently score among the highest globally (estimated averages: 104–108)</li>
      <li><strong>United States</strong>: Approximately 98–100 on most measures</li>
      <li><strong>United Kingdom</strong>: Around 99–100</li>
      <li><strong>Germany, Austria, Netherlands</strong>: Around 99–102</li>
      <li><strong>Sub-Saharan African nations</strong>: Often reported lower averages (60–75), but these are heavily influenced by educational access, malnutrition, and testing methodology concerns</li>
    </ul>
    <p>
      These differences are almost entirely explained by environmental factors — education quality, childhood
      nutrition (especially iodine deficiency), healthcare, and lead exposure — not genetics. Countries that
      have invested heavily in these areas have seen rapid IQ gains over decades.
    </p>
    <p>
      Explore detailed data in our <Link to="/average-iq-by-country">average IQ by country</Link> guide or
      see how the <Link to="/average-iq-us">average IQ in the US</Link> breaks down by state.
    </p>

    <h2>Average IQ by Education Level</h2>
    <p>
      IQ scores correlate strongly with educational attainment — though causation runs in both directions.
      Higher IQ makes education easier, and more education develops cognitive skills that IQ tests measure.
      Research-based estimates:
    </p>
    <ul>
      <li><strong>No high school diploma</strong>: Average IQ approximately 80–85</li>
      <li><strong>High school diploma</strong>: Average IQ approximately 95–100</li>
      <li><strong>Some college</strong>: Average IQ approximately 100–105</li>
      <li><strong>Bachelor's degree</strong>: Average IQ approximately 108–115</li>
      <li><strong>Graduate or professional degree</strong>: Average IQ approximately 115–125</li>
    </ul>
    <p>
      This doesn't mean education causes IQ gains directly — it's more complex than that. People with higher
      fluid intelligence are more likely to pursue and complete advanced education, and education itself
      develops and exercises certain cognitive abilities.
    </p>

    <InArticleAd />

    <h2>How Has Average IQ Changed Over Time?</h2>
    <p>
      One of the most important findings in IQ research is that average scores have risen significantly over
      the 20th century — a trend called the <Link to="/blog/flynn-effect">Flynn Effect</Link>. In developed
      countries, raw performance on IQ tests improved by approximately <strong>3 IQ points per decade</strong>
      between the 1930s and 1990s.
    </p>
    <p>
      The probable causes: better childhood nutrition (especially reduced iodine and lead exposure), more
      years of formal education, greater visual-spatial demands in modern environments, and smaller family
      sizes allowing more cognitive investment per child. In some developed nations, the Flynn Effect appears
      to have plateaued or slightly reversed since the 1990s.
    </p>

    <h2>If I Score Below Average, What Does That Mean?</h2>
    <p>
      Scoring below 100 on an IQ-style test doesn't mean there's something wrong with you — it means your
      performance on this particular set of cognitive tasks was below the median for your age group, on this
      particular day. Many factors can temporarily suppress test performance:
    </p>
    <ul>
      <li>Sleep deprivation (can reduce scores by 5–15 points temporarily)</li>
      <li>Test anxiety and unfamiliarity with the test format</li>
      <li>Not having English as a first language (for English-language tests)</li>
      <li>Reduced access to education or cognitive enrichment earlier in life</li>
      <li>Mental health conditions that impair focus or processing speed</li>
    </ul>
    <p>
      If you're interested in what skills the test measures and how to practice, see our
      <Link to="/practice-iq-test"> practice IQ test guide</Link> or our article on
      <Link to="/how-to-improve-iq"> how to improve cognitive performance</Link>.
    </p>

    <h2>How Does Your Score Compare to Average?</h2>
    <p>
      If you've taken our free IQ-style test, here's a quick reference for interpreting your result:
    </p>
    <ul>
      <li><strong>Below 85</strong>: Below average — in the bottom 16%. Consider factors that might have affected your performance.</li>
      <li><strong>85–99</strong>: Low average to average — in the bottom half. Perfectly functional for most tasks.</li>
      <li><strong>100</strong>: Exactly average — you performed at the median for your age group.</li>
      <li><strong>101–115</strong>: Above average — in the top 50–84%. A strong result.</li>
      <li><strong>116–129</strong>: High average to superior — top 9–16%. Cognitively strong across tested areas.</li>
      <li><strong>130 and above</strong>: Very superior — top 2%. Genuinely exceptional performance.</li>
    </ul>
    <p>
      Remember: online IQ-style tests are educational estimates. For a clinically valid score, see a licensed
      psychologist.
    </p>

    <h2>Frequently Asked Questions About Average IQ</h2>

    <h3>What is the average IQ score?</h3>
    <p>The average IQ is 100. Tests are re-normed periodically so 100 always represents the median. About 50% of people score between 90 and 110.</p>

    <h3>What is a good IQ score compared to average?</h3>
    <p>Any score above 100 is above average. 110–119 is high average, 120–129 is superior, 130+ is very superior. About 16% of people score above 115.</p>

    <h3>What is the average IQ in the United States?</h3>
    <p>Approximately 98–100, depending on the study. See our detailed <Link to="/average-iq-us">average IQ in the US guide</Link>.</p>

    <h3>Does average IQ differ by country?</h3>
    <p>Yes. Differences are driven almost entirely by educational access, nutrition, and healthcare — not genetics. See <Link to="/average-iq-by-country">average IQ by country</Link>.</p>

    <h3>Has the average IQ been changing over time?</h3>
    <p>Yes. Average scores rose ~3 points per decade in the 20th century (the Flynn Effect) due to better nutrition, education, and reduced toxin exposure.</p>

    <div className="mt-8 p-4 rounded-xl border border-primary/20 bg-primary/5">
      <p className="text-sm text-muted-foreground">
        <strong>Educational disclaimer:</strong> IQ scores on MyIQScores are educational estimates from an IQ-style
        reasoning test, not a clinically administered assessment. Results are for educational and entertainment purposes
        only. For clinical assessment, consult a licensed psychologist.
      </p>
    </div>
  </ContentPage>
);

export default AverageIQ;
