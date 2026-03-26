import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a normal IQ score?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A normal or average IQ score falls between 90 and 109. The IQ scale is designed so that 100 is the exact middle, and roughly 50% of the population scores within this range. Scoring in the average range means your cognitive abilities are typical for the general population.",
      },
    },
    {
      "@type": "Question",
      name: "What IQ score is considered gifted?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An IQ score of 130 or above is generally considered gifted or very superior. This places an individual in the top 2% of the population. Many gifted programs and organizations like Mensa use 130 as their threshold for membership or qualification.",
      },
    },
    {
      "@type": "Question",
      name: "Can your IQ score change over time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, IQ scores can change over time, particularly during childhood and adolescence. Factors such as education, environment, health, and cognitive engagement can influence scores. However, for most adults, IQ scores tend to remain relatively stable after the mid-20s.",
      },
    },
    {
      "@type": "Question",
      name: "What percentage of people have an IQ above 120?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Approximately 9% of the population has an IQ score of 120 or above. This places individuals in the superior range of cognitive ability. About 2% score above 130, and less than 0.1% score above 145.",
      },
    },
    {
      "@type": "Question",
      name: "Does a higher IQ guarantee success in life?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, a higher IQ does not guarantee success. While higher IQ scores are correlated with academic achievement and certain career outcomes, success depends on many factors including motivation, emotional intelligence, social skills, work ethic, and opportunity. Many highly successful people have average IQ scores.",
      },
    },
  ],
};

const IQScoreRanges = () => {
  return (
    <ContentPage>
      <SEOHead
        title="IQ Score Ranges: What Every Score Means (Chart + Percentiles) | MyIQScores"
        description="What does your IQ score mean? See the complete IQ scale with score ranges, percentiles, career correlations, and what each level says about your cognitive abilities."
        canonicalUrl="/iq-score-ranges"
        ogType="article"
        jsonLd={faqSchema}
      />

      <h1>
        <span className="gradient-text">IQ Score Ranges</span>: What Every Score Means
      </h1>

      {/* Introduction */}
      <p>
        IQ scores are one of the most widely recognized measures of cognitive ability, but
        understanding what a specific score actually means requires context. The modern IQ
        scale is built on a normal distribution (bell curve) with a <strong>mean of 100</strong> and
        a <strong>standard deviation of 15</strong>. This means that about 68% of all people score
        between 85 and 115, and roughly 95% score between 70 and 130.
      </p>
      <p>
        Whether you have just received your results from a professional assessment or you are
        curious about where you fall on the scale, this guide breaks down every IQ score range
        in detail — including what each classification means, how rare it is, and what career
        paths are commonly associated with each level. If you want a deeper understanding of
        what IQ measures and how it is assessed, see our{" "}
        <Link to="/what-is-iq">complete guide to IQ</Link>.
      </p>

      {/* Complete IQ Score Range Chart */}
      <h2>Complete IQ Score Range Chart</h2>
      <p>
        The table below summarizes the major IQ score classifications used by most modern
        intelligence tests, including the Wechsler Adult Intelligence Scale (WAIS) and the
        Stanford-Binet. Use this as a quick reference to see where any score falls on the
        overall scale.
      </p>
      <table>
        <thead>
          <tr>
            <th>Score Range</th>
            <th>Classification</th>
            <th>Percentile</th>
            <th>% of Population</th>
            <th>Rarity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>145+</td>
            <td>Genius / Near-Genius</td>
            <td>99.9th+</td>
            <td>~0.1%</td>
            <td>1 in 1,000</td>
          </tr>
          <tr>
            <td>130–144</td>
            <td>Gifted / Very Superior</td>
            <td>98th–99.8th</td>
            <td>~2%</td>
            <td>1 in 50</td>
          </tr>
          <tr>
            <td>120–129</td>
            <td>Superior</td>
            <td>91st–97th</td>
            <td>~6.7%</td>
            <td>1 in 15</td>
          </tr>
          <tr>
            <td>110–119</td>
            <td>High Average</td>
            <td>75th–90th</td>
            <td>~16.1%</td>
            <td>1 in 6</td>
          </tr>
          <tr>
            <td>90–109</td>
            <td>Average</td>
            <td>25th–74th</td>
            <td>~50%</td>
            <td>1 in 2</td>
          </tr>
          <tr>
            <td>80–89</td>
            <td>Low Average</td>
            <td>9th–24th</td>
            <td>~16.1%</td>
            <td>1 in 6</td>
          </tr>
          <tr>
            <td>70–79</td>
            <td>Borderline</td>
            <td>2nd–8th</td>
            <td>~6.7%</td>
            <td>1 in 15</td>
          </tr>
          <tr>
            <td>Below 70</td>
            <td>Extremely Low</td>
            <td>Below 2nd</td>
            <td>~2.2%</td>
            <td>1 in 50</td>
          </tr>
        </tbody>
      </table>

      {/* IQ 130+ */}
      <h2>IQ 130+ — Gifted / Very Superior</h2>
      <p>
        An IQ score of 130 or above places an individual in the top 2% of the population. This
        is the threshold most commonly associated with intellectual giftedness, and it is the
        minimum score required for admission to <strong>Mensa</strong>, the world's largest and
        oldest high-IQ society. People who score in this range typically demonstrate exceptional
        abilities in abstract reasoning, pattern recognition, and complex problem-solving.
      </p>
      <p>
        Individuals with IQs in the 130+ range often excel in highly demanding intellectual
        careers. Research shows that this group is disproportionately represented among
        researchers, university professors, physicians, surgeons, and engineers. They tend to
        grasp new concepts quickly, make connections between seemingly unrelated ideas, and
        thrive in environments that reward deep analytical thinking.
      </p>
      <p>
        However, a gifted IQ does not automatically translate to success or happiness. Research
        on gifted individuals suggests they may face unique challenges, including perfectionism,
        social isolation, and heightened sensitivity. Emotional intelligence, persistence, and
        social skills remain crucial factors in translating raw intellectual ability into
        real-world achievement. Curious where specific scores in this range fall? Read more
        about <Link to="/is-130-iq-good">IQ 130</Link>,{" "}
        <Link to="/is-135-iq-good">IQ 135</Link>, and{" "}
        <Link to="/is-140-iq-good">IQ 140</Link>.
      </p>

      {/* IQ 120-129 */}
      <h2>IQ 120–129 — Superior</h2>
      <p>
        Scoring between 120 and 129 places you in the top 9% of the population, a range
        classified as "superior" intelligence. Interestingly, research has identified the range
        of approximately 120–125 as a potential <strong>"sweet spot" for leadership</strong>.
        Studies suggest that leaders who are significantly smarter than their peers can
        sometimes struggle to communicate effectively with them, while leaders in this range
        tend to be intelligent enough to strategize at a high level yet relatable enough to
        inspire and motivate their teams.
      </p>
      <p>
        People in the superior range frequently pursue and succeed in careers that demand strong
        analytical and verbal reasoning skills. Common career paths include law, accounting,
        senior management, financial analysis, and software development. Academically, they tend
        to perform well in graduate-level programs and often hold advanced degrees.
      </p>
      <p>
        While not quite at the "gifted" threshold, individuals in this range possess a
        significant cognitive advantage in most professional and academic settings. They
        typically learn new material faster than average and can handle high levels of
        complexity in their work. For a deeper look at specific scores, explore our pages
        on <Link to="/is-120-iq-good">IQ 120</Link> and{" "}
        <Link to="/is-125-iq-good">IQ 125</Link>.
      </p>

      {/* IQ 110-119 */}
      <h2>IQ 110–119 — High Average</h2>
      <p>
        An IQ between 110 and 119 is classified as "high average" and represents the upper
        quartile of cognitive ability. While not in the superior or gifted ranges, individuals
        who score here enjoy a <strong>noticeable advantage in academic settings</strong>. They
        tend to find traditional schooling manageable and are often among the stronger students
        in a typical classroom, even if they are not always at the very top of the class.
      </p>
      <p>
        This range is particularly well-suited for graduate education. Many people with high
        average IQs successfully complete master's degrees and professional certifications.
        Career paths commonly associated with this range include teaching, nursing, mid-level
        management, social work, and technical roles. These are professions that require solid
        reasoning skills and the ability to absorb and apply new information consistently.
      </p>
      <p>
        People scoring in the 110–119 range should recognize that they have a genuine cognitive
        edge over the majority of the population — roughly 75% of people score lower. Combined
        with strong motivation and good study habits, this level of intelligence opens the door
        to a wide array of professional opportunities. Learn more about what specific scores
        mean: <Link to="/is-110-iq-good">IQ 110</Link> and{" "}
        <Link to="/is-115-iq-good">IQ 115</Link>.
      </p>

      {/* IQ 90-109 */}
      <h2>IQ 90–109 — Average</h2>
      <p>
        The average IQ range of 90 to 109 is where <strong>approximately 50% of the
        population</strong> falls. This is the largest single category on the IQ scale, and it
        represents the cognitive baseline against which all other scores are measured. If you
        score in this range, you are in very good company — half of humanity is right there
        with you.
      </p>
      <p>
        It is essential to understand that <strong>"average" does not mean limited</strong>. The
        vast majority of people with average IQ scores lead successful, fulfilling, and
        productive lives. IQ measures only a narrow slice of human capability — it does not
        capture creativity, emotional intelligence, social skills, practical wisdom, artistic
        talent, or determination. Many entrepreneurs, artists, athletes, and community leaders
        have IQ scores squarely in the average range.
      </p>
      <p>
        A wide range of careers is accessible to people in this category, from administrative
        roles and sales to small business ownership, customer service, and many technical
        positions. Success in any career depends far more on effort, experience, and
        interpersonal skills than on IQ points. For more insight into where specific average
        scores stand, see our detailed breakdowns for{" "}
        <Link to="/is-90-iq-good">IQ 90</Link>,{" "}
        <Link to="/is-95-iq-good">IQ 95</Link>,{" "}
        <Link to="/is-100-iq-good">IQ 100</Link>, and{" "}
        <Link to="/is-105-iq-good">IQ 105</Link>.
      </p>

      {/* IQ 80-89 */}
      <h2>IQ 80–89 — Low Average</h2>
      <p>
        About <strong>16% of the population</strong> scores in the low average range of 80 to
        89. Individuals in this range have cognitive abilities that are somewhat below the
        statistical midpoint but are still well within the bounds of normal functioning. Many
        people in this range complete high school, hold steady employment, and manage the
        demands of daily life without significant difficulty.
      </p>
      <p>
        That said, people in the low average range may need <strong>more time when working
        with complex academic material</strong>. Abstract or theoretical content can be more
        challenging, and these individuals may benefit from hands-on, practical learning
        approaches rather than purely lecture-based instruction. Patience, repetition, and
        real-world application are often the most effective learning strategies.
      </p>
      <p>
        Career paths that align well with the low average range include skilled trades (such as
        carpentry, plumbing, and electrical work), service industry positions, food preparation,
        transportation, and many other practical careers that value reliability, manual
        dexterity, and real-world problem-solving over abstract reasoning. These are essential
        roles that keep society running. Explore more at{" "}
        <Link to="/is-80-iq-good">IQ 80</Link> and{" "}
        <Link to="/is-85-iq-good">IQ 85</Link>.
      </p>

      {/* IQ Below 80 */}
      <h2>IQ Below 80 — Borderline and Below</h2>
      <p>
        IQ scores below 80 fall into the borderline range (70–79) and, below 70, into ranges
        that may indicate intellectual disability. It is important to approach this topic with
        sensitivity and to recognize that <strong>an IQ score alone does not define a person's
        potential, value, or worth</strong>. People across every part of the IQ spectrum
        contribute meaningfully to their families, communities, and workplaces.
      </p>
      <p>
        Individuals who score in the borderline range (70–79) may face challenges with tasks
        that require complex reasoning or rapid information processing, but many live
        independently and hold jobs successfully. Those who score below 70 may qualify for
        additional support services, including educational accommodations, vocational training,
        and assisted living programs designed to help them achieve the greatest possible
        independence and quality of life.
      </p>
      <p>
        Modern perspectives emphasize a strengths-based approach: rather than focusing solely on
        cognitive limitations, educators and support professionals work to identify and develop
        each individual's unique abilities, whether in social connection, artistic expression,
        physical skills, or practical tasks. For more nuanced discussions, see our pages
        on <Link to="/is-70-iq-good">IQ 70</Link> and{" "}
        <Link to="/is-75-iq-good">IQ 75</Link>.
      </p>

      {/* IQ Scores by Career */}
      <h2>IQ Scores by Career</h2>
      <p>
        Research has consistently found correlations between IQ scores and career choice. The
        table below shows estimated average IQ ranges for common professions, based on
        aggregated data from multiple studies. Keep in mind that these are averages — there is
        significant overlap between professions, and individual variation within any career is
        substantial.
      </p>
      <table>
        <thead>
          <tr>
            <th>Profession</th>
            <th>Estimated Average IQ Range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Physicians / Surgeons</td>
            <td>120–130</td>
          </tr>
          <tr>
            <td>Attorneys</td>
            <td>115–130</td>
          </tr>
          <tr>
            <td>Engineers</td>
            <td>115–128</td>
          </tr>
          <tr>
            <td>College Professors</td>
            <td>115–130</td>
          </tr>
          <tr>
            <td>Accountants</td>
            <td>110–125</td>
          </tr>
          <tr>
            <td>Teachers</td>
            <td>105–120</td>
          </tr>
          <tr>
            <td>Nurses</td>
            <td>105–115</td>
          </tr>
          <tr>
            <td>Police Officers</td>
            <td>100–115</td>
          </tr>
          <tr>
            <td>Skilled Trades</td>
            <td>95–110</td>
          </tr>
          <tr>
            <td>Sales</td>
            <td>95–115</td>
          </tr>
        </tbody>
      </table>

      {/* How IQ Percentiles Work */}
      <h2>How IQ Percentiles Work</h2>
      <p>
        A percentile rank tells you the percentage of the population that scores at or below a
        given IQ score. For example, if your IQ is at the 84th percentile, you scored higher
        than 84% of the population. Percentiles are a useful way to understand exactly where
        you stand relative to everyone else, without getting caught up in the raw numbers.
      </p>
      <table>
        <thead>
          <tr>
            <th>IQ Score</th>
            <th>Percentile</th>
            <th>What It Means</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>145</td>
            <td>99.9th</td>
            <td>Higher than 999 out of 1,000</td>
          </tr>
          <tr>
            <td>130</td>
            <td>98th</td>
            <td>Higher than 98 out of 100</td>
          </tr>
          <tr>
            <td>120</td>
            <td>91st</td>
            <td>Higher than 91 out of 100</td>
          </tr>
          <tr>
            <td>115</td>
            <td>84th</td>
            <td>Higher than 84 out of 100</td>
          </tr>
          <tr>
            <td>100</td>
            <td>50th</td>
            <td>Higher than half the population</td>
          </tr>
          <tr>
            <td>85</td>
            <td>16th</td>
            <td>Higher than 16 out of 100</td>
          </tr>
          <tr>
            <td>70</td>
            <td>2nd</td>
            <td>Higher than 2 out of 100</td>
          </tr>
        </tbody>
      </table>

      {/* Frequently Asked Questions */}
      <h2>Frequently Asked Questions</h2>

      <h3>What is a normal IQ score?</h3>
      <p>
        A normal or average IQ score falls between 90 and 109. The IQ scale is designed so that
        100 is the exact middle, and roughly 50% of the population scores within this range.
        Scoring in the average range means your cognitive abilities are typical for the general
        population — and it says nothing negative about your potential for success.
      </p>

      <h3>What IQ score is considered gifted?</h3>
      <p>
        An IQ score of 130 or above is generally considered gifted or very superior. This
        places an individual in the top 2% of the population. Many gifted education programs
        and organizations like Mensa use 130 as their threshold for qualification or membership.
      </p>

      <h3>Can your IQ score change over time?</h3>
      <p>
        Yes, IQ scores can change over time, particularly during childhood and adolescence.
        Factors such as education, environment, nutrition, health, and sustained cognitive
        engagement can all influence scores. However, for most adults, IQ scores tend to remain
        relatively stable after the mid-20s, with only modest fluctuations.
      </p>

      <h3>What percentage of people have an IQ above 120?</h3>
      <p>
        Approximately 9% of the population has an IQ score of 120 or higher. This places
        individuals in the superior range of cognitive ability. About 2% score above 130
        (gifted), and fewer than 0.1% score above 145 (genius-level).
      </p>

      <h3>Does a higher IQ guarantee success in life?</h3>
      <p>
        No. While higher IQ scores are correlated with academic achievement and certain career
        outcomes, success in life depends on many factors — including motivation, emotional
        intelligence, social skills, work ethic, creativity, and opportunity. Many highly
        successful people have average IQ scores, and many people with very high IQs do not
        achieve traditional markers of success.
      </p>

      {/* CTA */}
      <h2>Find Out Where You Stand</h2>
      <p>
        Curious about your own IQ score? Our free assessment gives you a reliable estimate in
        just 15 minutes. No sign-up, no paywall — just{" "}
        <Link to="/test">take the free IQ test</Link> and discover where you fall on the scale.
      </p>
    </ContentPage>
  );
};

export default IQScoreRanges;
