import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is the highest IQ ever recorded?",
      acceptedAnswer: { "@type": "Answer", text: "The highest recorded IQ is debated. William James Sidis is estimated at 250-300 (disputed). Terence Tao tested at 220-230 as a child. Marilyn vos Savant was listed at 228 in the Guinness Book before the category was removed. Most psychologists consider scores above 160 to be unreliable measurements." }},
    { "@type": "Question", name: "Who has the highest IQ in the world right now?",
      acceptedAnswer: { "@type": "Answer", text: "Terence Tao, an Australian-American mathematician, is often cited with the highest IQ estimate among living people — around 220-230 from childhood ratio-based testing. Christopher Hirata (225) and Kim Ung-Yong (210) are also frequently mentioned. However, scores at these extremes are estimates: adult IQ at that level is beyond what standardized tests can reliably verify." }},
    { "@type": "Question", name: "Is an IQ of 200 possible?",
      acceptedAnswer: { "@type": "Answer", text: "Theoretically yes, but practically unmeasurable. Standard IQ tests cannot validate scores above 150-160. Claims of 200+ IQs are controversial among psychologists because the statistical basis becomes unreliable at such extremes. A few individuals clearly demonstrate extraordinary cognitive abilities, but assigning a precise number is scientifically questionable." }},
    { "@type": "Question", name: "What was Einstein's IQ?",
      acceptedAnswer: { "@type": "Answer", text: "Einstein's IQ is estimated at approximately 160, though he never took a modern IQ test. This estimate is based on analysis of his cognitive achievements. Some researchers estimate it could have been higher (170-180), but all such estimates for historical figures are approximations." }},
  ],
};

const HighestIQEver = () => (
  <ContentPage>
    <SEOHead
      title="Highest IQ Ever Recorded: The Smartest People in History | MyIQScores"
      description="Who has the highest IQ ever? See the complete list of the highest recorded IQ scores in history, from William James Sidis to Terence Tao, with verified scores and estimates."
      canonicalUrl="/highest-iq-ever"
      ogType="article"
      jsonLd={faqSchema}
    />

    <h1><span className="gradient-text">Highest IQ Ever Recorded:</span> The Smartest People in History</h1>

    <p>
      Who has the highest IQ in the world? It's one of the most searched questions about intelligence.
      The answer is complicated — IQ scores above 160 are extremely difficult to measure reliably, and
      many historical claims are disputed. Here's what we actually know about the highest IQ scores
      ever documented.
    </p>

    <h2>The 15 Highest Recorded IQ Scores</h2>
    <table>
      <thead>
        <tr><th>Rank</th><th>Name</th><th>Estimated IQ</th><th>Known For</th><th>Verified?</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>William James Sidis</td><td>250–300</td><td>Child prodigy, polymath</td><td>Disputed</td></tr>
        <tr><td>2</td><td>Terence Tao</td><td>220–230</td><td>Fields Medal mathematician</td><td>Childhood test</td></tr>
        <tr><td>3</td><td>Marilyn vos Savant</td><td>228</td><td>Columnist, author</td><td>Mega Test</td></tr>
        <tr><td>4</td><td>Christopher Hirata</td><td>225</td><td>Astrophysicist</td><td>Childhood test</td></tr>
        <tr><td>5</td><td>Kim Ung-Yong</td><td>210</td><td>Child prodigy, NASA</td><td>Childhood test</td></tr>
        <tr><td>6</td><td><Link to="/famous-iq/isaac-newton">Isaac Newton</Link></td><td>190–200</td><td>Laws of motion, calculus</td><td>Estimate</td></tr>
        <tr><td>7</td><td><Link to="/famous-iq/leonardo-da-vinci">Leonardo da Vinci</Link></td><td>180–200</td><td>Polymath, artist, inventor</td><td>Estimate</td></tr>
        <tr><td>8</td><td><Link to="/famous-iq/garry-kasparov">Garry Kasparov</Link></td><td>190 (myth)</td><td>Chess world champion</td><td>No — documented test ≈123</td></tr>
        <tr><td>9</td><td><Link to="/famous-iq/marie-curie">Marie Curie</Link></td><td>180–200</td><td>Two Nobel Prizes</td><td>Estimate</td></tr>
        <tr><td>10</td><td>Johann Wolfgang von Goethe</td><td>180–195</td><td>Writer, polymath</td><td>Estimate</td></tr>
        <tr><td>11</td><td><Link to="/famous-iq/nikola-tesla">Nikola Tesla</Link></td><td>160–200</td><td>AC electricity inventor</td><td>Estimate</td></tr>
        <tr><td>12</td><td><Link to="/famous-iq/albert-einstein">Albert Einstein</Link></td><td>160</td><td>Theory of relativity</td><td>Estimate</td></tr>
        <tr><td>13</td><td><Link to="/famous-iq/stephen-hawking">Stephen Hawking</Link></td><td>160</td><td>Black holes, cosmology</td><td>Estimate</td></tr>
        <tr><td>14</td><td><Link to="/famous-iq/bill-gates">Bill Gates</Link></td><td>150–160</td><td>Microsoft founder</td><td>SAT-based</td></tr>
        <tr><td>15</td><td><Link to="/famous-iq/elon-musk">Elon Musk</Link></td><td>150–155</td><td>Tesla, SpaceX</td><td>Estimate</td></tr>
      </tbody>
    </table>

    <h2>Why Extreme IQ Scores Are Controversial</h2>
    <p>
      Most psychologists are skeptical of IQ scores above 160 for several important reasons:
    </p>
    <ul>
      <li><strong>Test ceiling effects</strong> — Standard tests like the WAIS max out around 160. Scores above this require specialized high-range tests with limited validation.</li>
      <li><strong>Statistical unreliability</strong> — IQ follows a normal distribution. At the extremes, tiny measurement errors translate into enormous score differences. The difference between "160" and "200" may not be meaningful.</li>
      <li><strong>Childhood vs adult scores</strong> — Many extreme scores (Tao, Kim, Hirata) were obtained in childhood. The ratio method (mental age / chronological age × 100) inflates scores for precocious children. A 7-year-old performing at a 14-year-old's level gets a 200, but this doesn't mean adult IQ is 200.</li>
      <li><strong>Historical estimates are guesses</strong> — Newton, da Vinci, and Goethe never took IQ tests. Their "scores" are researcher estimates based on achievements, which is inherently speculative.</li>
    </ul>

    <h2>William James Sidis: The Controversial #1</h2>
    <p>
      William James Sidis (1898-1944) is often cited as having the highest IQ ever — estimated between
      250 and 300. Sidis was a spectacular child prodigy: he was reading at 18 months, gave a lecture at
      Harvard at age 11, and reportedly spoke over 25 languages. However, his adult life was unremarkable
      by genius standards — he worked clerical jobs and lived in relative obscurity until his death at 46.
    </p>
    <p>
      The 250-300 estimate is highly disputed. It's based on the ratio method applied to his childhood
      precocity, which most modern psychologists consider invalid for producing accurate adult IQ scores.
      Sidis' story is often used to illustrate that extreme childhood IQ doesn't guarantee adult
      achievement, and that social and emotional factors matter enormously.
    </p>

    <h2>Terence Tao: The Living Genius</h2>
    <p>
      Terence Tao, born 1975, is widely considered the most intelligent living person by conventional
      measures. He scored 220-230 on IQ tests as a child, began university-level mathematics at age 9,
      earned his PhD at 21, and won the Fields Medal (mathematics' equivalent of the Nobel Prize) at 31.
      Unlike many child prodigies, Tao has sustained his intellectual output into adulthood, making
      contributions across multiple areas of mathematics.
    </p>
    <p>
      Tao's case is significant because his childhood promise was fully realized in adult achievement —
      a rarity among extremely high-IQ individuals. He is a professor at UCLA and has published over
      300 research papers spanning diverse mathematical fields.
    </p>

    <h2>What Is the Realistic Maximum Human IQ?</h2>
    <p>
      Most intelligence researchers believe the realistic measurable maximum for human IQ is somewhere
      around 170-190 on modern deviation-based tests. Claims above 200 are generally considered
      artifacts of outdated ratio-based scoring or unreliable high-range tests rather than genuine
      measurements. The important point is that above approximately 145-150, additional IQ points
      become less meaningful — the difference between a 150 and a 180 in real-world capability is far
      less than the difference between a 100 and a 130.
    </p>

    <h2>Highest IQ by Category</h2>

    <h3>Highest IQ Among Scientists</h3>
    <p>
      <Link to="/famous-iq/isaac-newton">Isaac Newton</Link> (190-200 estimated) and{" "}
      <Link to="/famous-iq/marie-curie">Marie Curie</Link> (180-200 estimated) are typically ranked
      as the most cognitively gifted scientists in history. Among living scientists, Terence Tao
      leads, with physicist Edward Witten and computer scientist Donald Knuth also frequently mentioned.
    </p>

    <h3>Highest IQ Among World Leaders</h3>
    <p>
      Among US presidents, John Quincy Adams (estimated 175), Thomas Jefferson (estimated 160), and
      John F. Kennedy (estimated 150-160) are typically ranked highest. Among global leaders,
      Benjamin Franklin (estimated 160) and Winston Churchill (estimated 150) are frequently cited.
    </p>

    <h3>Highest IQ Among Athletes</h3>
    <p>
      While athletes are rarely tested, those known for strategic thinking score above average.
      <Link to="/famous-iq/cristiano-ronaldo"> Cristiano Ronaldo</Link> is estimated at 105-115.
      Chess grandmaster Magnus Carlsen has been estimated at 190, though chess-specific intelligence
      doesn't directly translate to general IQ.
    </p>

    <h2>Frequently Asked Questions</h2>

    <h3>What is the highest IQ ever recorded?</h3>
    <p>
      William James Sidis is estimated at 250-300 (disputed). Terence Tao tested at 220-230 as a
      child. Marilyn vos Savant was listed at 228. Most psychologists consider scores above 160 unreliable.
    </p>

    <h3>Who has the highest IQ in the world right now?</h3>
    <p>
      Terence Tao (220-230) is most commonly cited. Christopher Hirata (225) and Kim Ung-Yong (210)
      are also mentioned. Adult verification of such extreme scores is extremely difficult.
    </p>

    <h3>Is an IQ of 200 possible?</h3>
    <p>
      Theoretically yes, but practically unmeasurable with any reliability. Standard tests cannot
      validate scores above 150-160. See our page on{" "}
      <Link to="/is-200-iq-good">what an IQ of 200 means</Link>.
    </p>

    <h3>What was Einstein's IQ?</h3>
    <p>
      Einstein's IQ is estimated at approximately 160. Read more on our{" "}
      <Link to="/famous-iq/albert-einstein">Einstein IQ page</Link>.
    </p>

    <p className="mt-8">
      Curious where you fall on the scale? <Link to="/test">Take our free IQ test</Link> for an
      instant estimate. Learn more about <Link to="/what-is-iq">how IQ is measured</Link> and{" "}
      <Link to="/iq-score-ranges">what every score range means</Link>.
    </p>
  </ContentPage>
);

export default HighestIQEver;
