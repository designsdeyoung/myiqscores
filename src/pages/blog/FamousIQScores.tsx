import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Most Surprising Celebrity IQ Scores Ever Revealed",
  description:
    "Some of the smartest (and least expected) IQ scores from entertainers, athletes, and world leaders.",
  datePublished: "2026-04-06",
  dateModified: "2026-04-06",
  author: { "@type": "Organization", name: "MyIQScores" },
  publisher: { "@type": "Organization", name: "MyIQScores", url: "https://www.myiqscores.com" },
};

const FamousIQScores = () => (
  <ContentPage>
    <SEOHead
      title="The Most Surprising Celebrity IQ Scores | MyIQScores"
      description="Some of the smartest (and least expected) IQ scores from entertainers, athletes, and world leaders. Full table of famous IQ estimates with context."
      canonicalUrl="/blog/famous-iq-scores"
      ogType="article"
      jsonLd={articleSchema}
    />

    <h1>The Most <span className="gradient-text">Surprising Celebrity IQ Scores</span> Ever Revealed</h1>

    <p>
      Celebrity IQ claims are everywhere — but how accurate are they? Some are based on documented
      test scores, others on self-reports or estimations by researchers. We've compiled a list of
      the most notable famous IQ scores, sorted out what's verified versus estimated, and
      highlighted the ones that surprised us most.
    </p>

    <h2>The Full List: 12 Famous People and Their Estimated IQs</h2>
    <table>
      <thead>
        <tr><th>Person</th><th>Estimated IQ</th><th>Known For</th><th>Source Reliability</th></tr>
      </thead>
      <tbody>
        <tr><td><Link to="/famous-iq/albert-einstein">Albert Einstein</Link></td><td>~160</td><td>Theoretical physics</td><td>Estimate (never tested)</td></tr>
        <tr><td>Stephen Hawking</td><td>~160</td><td>Theoretical physics / cosmology</td><td>Self-reported ("I have no idea")</td></tr>
        <tr><td><Link to="/famous-iq/garry-kasparov">Garry Kasparov</Link></td><td>190 (myth)</td><td>World chess champion</td><td>Unsourced — his documented 1987 magazine test reportedly yielded ~123</td></tr>
        <tr><td>Sharon Stone</td><td>~154</td><td>Actress (Basic Instinct)</td><td>Claimed; reported Mensa membership was later retracted</td></tr>
        <tr><td>Dolph Lundgren</td><td>~160</td><td>Actor / chemical engineer</td><td>Estimated; Fulbright scholar</td></tr>
        <tr><td>Bill Gates</td><td>~150–160</td><td>Microsoft / philanthropy</td><td>Estimate based on SAT/academic record</td></tr>
        <tr><td><Link to="/famous-iq/elon-musk">Elon Musk</Link></td><td>~150–155</td><td>Tesla, SpaceX, X</td><td>Estimated</td></tr>
        <tr><td>Quentin Tarantino</td><td>~163</td><td>Filmmaker (Pulp Fiction)</td><td>Reported (IQ test at age 6)</td></tr>
        <tr><td>Ashton Kutcher</td><td>~160</td><td>Actor / tech investor</td><td>Self-reported; biochem major</td></tr>
        <tr><td>Jodie Foster</td><td>~132</td><td>Actress / director</td><td>Reportedly tested; Yale graduate</td></tr>
        <tr><td>Barack Obama</td><td>~145</td><td>44th U.S. President</td><td>Estimated from academic record / LSAT</td></tr>
        <tr><td>Donald Trump</td><td>~156 (est.)</td><td>45th / 47th U.S. President</td><td>Self-claimed "very high"; estimated</td></tr>
      </tbody>
    </table>

    <p>
      For our comprehensive database of famous person IQ estimates, see the{" "}
      <Link to="/famous-iq">Famous IQ hub</Link>.
    </p>

    <h2>Who's Surprisingly High?</h2>

    <h3>Dolph Lundgren (160)</h3>
    <p>
      Best known as Ivan Drago in Rocky IV, Lundgren holds a master's degree in chemical engineering
      from the Royal Institute of Technology in Stockholm and was awarded a Fulbright scholarship
      to MIT. His estimated IQ of 160 is almost certainly not far off — and is a reminder that
      Hollywood doesn't require you to leave your brain at the door.
    </p>

    <h3>Quentin Tarantino (163)</h3>
    <p>
      The director of Pulp Fiction, Kill Bill, and Inglourious Basterds famously dropped out of
      high school. Yet his IQ was reportedly tested at 163 when he was six years old. His
      extraordinary recall of film history and ability to construct labyrinthine narrative
      structures supports the estimate. A reminder that IQ and formal education are not the
      same thing.
    </p>

    <h3>Garry Kasparov (the 190 myth)</h3>
    <p>
      The former world chess champion is a perfect case study in how celebrity IQ myths spread.
      The "190" repeated across the internet has no documented source. The one documented data
      point — an extensive test battery administered by the German magazine Der Spiegel in the
      late 1980s — reportedly produced an overall score around 123, alongside exceptional memory
      results. Chess mastery at the grandmaster level draws on extraordinary trained pattern
      recognition and working memory, which overlap with but are not the same as general IQ. For
      more on the upper extremes of intelligence, see our{" "}
      <Link to="/highest-iq-ever">highest IQ ever recorded page</Link>.
    </p>

    <h2>Who's Surprisingly Low (or Just Human)?</h2>

    <h3>Jodie Foster (132)</h3>
    <p>
      A two-time Oscar winner who graduated magna cum laude from Yale, Foster's IQ of ~132 is
      exceptional by any normal standard — but lower than the 160+ scores often attributed to the
      "smartest" celebrities. It's a reminder that extraordinary achievement in creative fields
      requires much more than raw IQ.
    </p>

    <h3>Stephen Hawking ("I have no idea")</h3>
    <p>
      When asked his IQ, Hawking famously replied: "I have no idea. People who boast about their
      IQ are losers." His theoretical physics work at Cambridge was undeniably exceptional — but
      there's no formal documented test score. His estimated ~160 is an inference, not a measurement.
    </p>

    <h2>Important Caveats About Celebrity IQ Estimates</h2>
    <p>
      The vast majority of celebrity IQ scores circulating online are <strong>not verified</strong>.
      They come from a mix of self-reports, journalist estimates, researcher inferences from academic
      records, and outright fabrication. Even when a real test was taken, it may have been a
      specific instrument in unusual conditions that doesn't map cleanly to a population-normed
      IQ score.
    </p>
    <p>
      Additionally, IQ has a measurement error of approximately 5–7 points even on well-designed
      clinical tests. A reported score of "163" should be understood as somewhere in the range of
      155–170. The league tables of celebrity IQs are entertainment — not precise science.
    </p>
    <p>
      What they do illustrate is that remarkable cognitive ability can show up in surprising places —
      actors, athletes, entertainers — and that formal credentials (or lack thereof) are a poor
      proxy for intelligence.
    </p>

    <p className="mt-8">
      Curious how your IQ compares? <Link to="/test">Take our free IQ test</Link> for instant
      results. Or explore more individual famous IQs like{" "}
      <Link to="/famous-iq/albert-einstein">Einstein's estimated IQ</Link> or{" "}
      <Link to="/famous-iq/elon-musk">Elon Musk's IQ</Link>.
    </p>
  </ContentPage>
);

export default FamousIQScores;
