import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What IQ score is considered genius?",
      acceptedAnswer: { "@type": "Answer", text: "An IQ of 140 or above is most commonly cited as the genius threshold, representing the top 0.4% of the population (about 1 in 261 people). Some definitions use 130 (Mensa's gifted threshold) or 145. There is no single official definition." }},
    { "@type": "Question", name: "What percentage of people are geniuses?",
      acceptedAnswer: { "@type": "Answer", text: "Using the 140+ threshold, approximately 0.4% of people qualify as geniuses — about 1 in 261. Using the 130+ threshold (gifted), about 2.1% qualify — 1 in 50 people. The rarer the threshold, the fewer who qualify." }},
    { "@type": "Question", name: "Can you become a genius?",
      acceptedAnswer: { "@type": "Answer", text: "IQ is largely determined by genetics (50-80%) and is relatively stable in adulthood. While you can optimize cognitive function through exercise, sleep, and learning, dramatically raising your IQ from average to genius is not realistic. However, genius-level contributions to a field don't always require genius-level IQ — passion, expertise, and creativity matter enormously." }},
    { "@type": "Question", name: "What are the signs of a genius?",
      acceptedAnswer: { "@type": "Answer", text: "Common traits associated with very high IQ include rapid learning, exceptional memory, ability to see patterns others miss, intense curiosity, preference for complex problems, and sometimes social difficulties or feeling different from peers. However, these traits vary widely among high-IQ individuals." }},
  ],
};

const GeniusIQ = () => (
  <ContentPage>
    <SEOHead
      title="Genius IQ: What Score Makes You a Genius? | MyIQScores"
      description="What IQ makes you a genius? A score of 140+ is the most common threshold. Learn what genius-level IQ means, how rare it is, famous geniuses' scores, and signs of genius."
      canonicalUrl="/genius-iq"
      ogType="article"
      jsonLd={faqSchema}
    />

    <h1><span className="gradient-text">Genius IQ:</span> What Score Makes You a Genius?</h1>

    <p>
      The word "genius" gets thrown around casually, but in IQ terms, it has a specific meaning. While
      there's no single official threshold, <strong>an IQ of 140 or above</strong> is the most widely
      accepted definition of genius-level intelligence. Here's everything you need to know about what
      it means to be a genius — by the numbers and beyond.
    </p>

    <h2>Genius IQ Thresholds</h2>
    <table>
      <thead>
        <tr><th>Threshold</th><th>IQ Score</th><th>% of Population</th><th>Rarity</th><th>Used By</th></tr>
      </thead>
      <tbody>
        <tr><td>Gifted</td><td><Link to="/is-130-iq-good">130+</Link></td><td>2.1%</td><td>1 in 50</td><td>Mensa, most gifted programs</td></tr>
        <tr><td>Highly Gifted</td><td><Link to="/is-140-iq-good">140+</Link></td><td>0.4%</td><td>1 in 261</td><td>Most common "genius" definition</td></tr>
        <tr><td>Exceptionally Gifted</td><td><Link to="/is-145-iq-good">145+</Link></td><td>0.1%</td><td>1 in 741</td><td>Triple Nine Society</td></tr>
        <tr><td>Profoundly Gifted</td><td><Link to="/is-160-iq-good">160+</Link></td><td>0.003%</td><td>1 in 31,000</td><td>Prometheus Society</td></tr>
      </tbody>
    </table>

    <h2>What Does Genius-Level IQ Look Like?</h2>
    <p>
      People with IQs of <Link to="/is-140-iq-good">140+</Link> often describe their experience of
      thinking as qualitatively different from the norm:
    </p>
    <ul>
      <li><strong>Rapid pattern recognition</strong> — seeing connections between seemingly unrelated ideas almost instantly</li>
      <li><strong>Deep abstraction</strong> — comfortably thinking several levels of abstraction above concrete reality</li>
      <li><strong>Information hunger</strong> — a near-constant drive to learn, understand, and analyze</li>
      <li><strong>Complex working memory</strong> — holding and manipulating many variables simultaneously</li>
      <li><strong>Intellectual impatience</strong> — frustration when others can't keep up or when explanations are too slow</li>
    </ul>
    <p>
      However, not all geniuses fit the stereotype. Many are socially skilled, emotionally healthy,
      and lead conventional lives. The "tortured genius" trope is more myth than reality for most
      high-IQ individuals.
    </p>

    <h2>Famous Geniuses and Their IQs</h2>
    <table>
      <thead>
        <tr><th>Person</th><th>Estimated IQ</th><th>Achievement</th></tr>
      </thead>
      <tbody>
        <tr><td><Link to="/famous-iq/isaac-newton">Isaac Newton</Link></td><td>190-200</td><td>Laws of motion, calculus</td></tr>
        <tr><td><Link to="/famous-iq/leonardo-da-vinci">Leonardo da Vinci</Link></td><td>180-200</td><td>Art, science, engineering polymath</td></tr>
        <tr><td><Link to="/famous-iq/marie-curie">Marie Curie</Link></td><td>180-200</td><td>Two Nobel Prizes in different sciences</td></tr>
        <tr><td><Link to="/famous-iq/albert-einstein">Albert Einstein</Link></td><td>~160</td><td>Theory of relativity</td></tr>
        <tr><td><Link to="/famous-iq/elon-musk">Elon Musk</Link></td><td>150-155</td><td>Tesla, SpaceX, transforming multiple industries</td></tr>
        <tr><td><Link to="/famous-iq/bill-gates">Bill Gates</Link></td><td>150-160</td><td>Microsoft, global philanthropy</td></tr>
        <tr><td><Link to="/famous-iq/stephen-hawking">Stephen Hawking</Link></td><td>~160</td><td>Black hole theory, popular science</td></tr>
      </tbody>
    </table>
    <p>
      See our complete <Link to="/highest-iq-ever">highest IQ ever recorded</Link> page for more.
    </p>

    <h2>The Genius Paradox</h2>
    <p>
      Here's something counterintuitive: <strong>genius-level IQ doesn't guarantee genius-level
      achievement</strong>. The Terman Study followed 1,500 children with IQs above 135 throughout
      their lives. While many became successful professionals, none won a Nobel Prize. Meanwhile, two
      children who were <em>rejected</em> from the study for having IQs that were too low — William
      Shockley and Luis Alvarez — both went on to win Nobel Prizes.
    </p>
    <p>
      This paradox reveals that above a threshold of approximately 120-130, factors other than IQ
      become dominant: creativity, persistence, domain expertise, timing, and luck. Having a 140 IQ
      gives you the cognitive <em>tools</em> for genius-level work, but using those tools effectively
      requires traits that IQ tests don't measure.
    </p>

    <h2>The Dark Side of Genius</h2>
    <p>
      Research on very high-IQ individuals reveals some challenges:
    </p>
    <ul>
      <li><strong>Intellectual isolation</strong> — difficulty finding peers who think at a similar level</li>
      <li><strong>Perfectionism</strong> — holding oneself to impossibly high standards</li>
      <li><strong>Existential overthinking</strong> — heightened awareness of life's complexities and uncertainties</li>
      <li><strong>Underachievement</strong> — some gifted individuals struggle with motivation when nothing feels challenging enough</li>
      <li><strong>Imposter syndrome</strong> — paradoxically common among the gifted, who compare themselves to unrealistically high standards</li>
    </ul>
    <p>
      These challenges are manageable, and most high-IQ individuals lead fulfilling lives. But the
      notion that genius is purely a blessing oversimplifies the reality.
    </p>

    <h2>Can You Become a Genius?</h2>
    <p>
      Honestly? Probably not in the IQ sense. IQ is 50-80% genetic and relatively stable in adulthood.
      However, you <em>can</em> develop genius-level expertise in a specific domain through what
      researcher Anders Ericsson called "deliberate practice" — focused, structured improvement over
      many years. Many of history's greatest contributions came not from the highest-IQ people but
      from deeply dedicated experts who worked at the frontier of their fields for decades.
    </p>
    <p>
      Learn more about <Link to="/how-to-improve-iq">evidence-based ways to improve cognitive function</Link>.
    </p>

    <h2>Frequently Asked Questions</h2>

    <h3>What IQ score is considered genius?</h3>
    <p>140+ is the most common threshold. Some use 130 or 145. About 1 in 261 people score 140+.</p>

    <h3>What percentage of people are geniuses?</h3>
    <p>About 0.4% at the 140+ threshold, or 2.1% at the 130+ (gifted) threshold.</p>

    <h3>Can you become a genius?</h3>
    <p>IQ is largely fixed, but genius-level contributions to a field don't always require genius-level IQ. Deep expertise, creativity, and persistence matter enormously.</p>

    <h3>What are the signs of a genius?</h3>
    <p>Rapid learning, exceptional pattern recognition, intense curiosity, and preference for complex problems — but these vary widely among high-IQ individuals.</p>

    <p className="mt-8">
      Think you might be in the gifted range? <Link to="/test">Take our free IQ test</Link> to
      find out, or explore <Link to="/iq-score-ranges">what every score level means</Link>.
    </p>
  </ContentPage>
);

export default GeniusIQ;
