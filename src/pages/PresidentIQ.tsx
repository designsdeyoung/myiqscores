import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which US president had the highest IQ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "John Adams is most frequently estimated as having the highest IQ of any US president, at approximately 173. Thomas Jefferson (160) and Woodrow Wilson (155) are often ranked close behind. These are estimates by political scientists and historians analyzing writing, decision-making, and academic achievement — not verified test scores. All historical IQ estimates carry significant uncertainty.",
      },
    },
    {
      "@type": "Question",
      name: "What is Donald Trump's IQ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Donald Trump's IQ is estimated at 120–156 depending on the source. He attended the Wharton School at UPenn for his undergraduate economics degree and has publicly claimed to have a very high IQ. Political scientist Dean Simonton's academic research estimated Trump's IQ at approximately 156, while other analysts place it lower. His cognitive strengths appear to lie in persuasion, branding, and media intuition rather than traditional analytical domains.",
      },
    },
    {
      "@type": "Question",
      name: "What is Barack Obama's IQ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Barack Obama's IQ is estimated at 130–145. He graduated magna cum laude from Harvard Law School and was the first African American president of the Harvard Law Review. His verbal reasoning, constitutional law expertise, and ability to synthesize complex policy information suggest a superior-to-gifted range IQ.",
      },
    },
    {
      "@type": "Question",
      name: "Does a high IQ make a president successful?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not automatically. Warren Harding is sometimes estimated at 140 yet is historically ranked among the worst presidents. Jimmy Carter, estimated at 156, is widely regarded as an exceptionally intelligent president who struggled politically. Conversely, several presidents with moderate IQ estimates were very effective leaders. Political intelligence, emotional intelligence, communication ability, and strategic judgment matter as much as raw cognitive power.",
      },
    },
  ],
};

const PresidentIQ = () => (
  <ContentPage>
    <SEOHead
      title="IQ of US Presidents: Who Was the Smartest? | MyIQScores"
      description="Estimated IQ scores of US presidents from Washington to Biden. Who had the highest IQ? See how Trump, Obama, Clinton, and others rank intellectually."
      canonicalUrl="/iq-of-presidents"
      ogType="article"
      jsonLd={faqSchema}
    />

    <h1>
      <span className="gradient-text">IQ Scores of US Presidents:</span> Who Was the Smartest?
    </h1>

    <p>
      <strong>Important note:</strong> Presidential IQ scores are estimates — not verified test
      results. No sitting or former US president has publicly released a certified IQ score. These
      estimates come from political scientists, historians, and psychologists who analyze
      presidents' writing, academic records, decision-making patterns, and cognitive achievements
      to infer approximate IQ ranges. The most rigorous academic work in this area was conducted
      by psychologist Dean Keith Simonton of UC Davis, whose research on presidential intelligence
      and leadership has been published in peer-reviewed journals. Other estimates come from
      historians and political scientists applying their own analytical frameworks.
    </p>
    <p>
      All estimates below carry meaningful uncertainty — they should be read as informed scholarly
      guesses, not measurements. To learn more about what IQ actually measures, see our{" "}
      <Link to="/what-is-iq">IQ explained guide</Link>.
    </p>

    <h2>Estimated IQ of US Presidents</h2>
    <table>
      <thead>
        <tr>
          <th>President</th>
          <th>Term(s)</th>
          <th>Estimated IQ</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Adams</td>
          <td>1797–1801</td>
          <td>~173</td>
          <td>Harvard graduate, prolific writer, legal scholar</td>
        </tr>
        <tr>
          <td>Thomas Jefferson</td>
          <td>1801–1809</td>
          <td>~160</td>
          <td>Polymath, architect, author of Declaration of Independence</td>
        </tr>
        <tr>
          <td>Woodrow Wilson</td>
          <td>1913–1921</td>
          <td>~155</td>
          <td>PhD, Princeton president, 14 Points architect</td>
        </tr>
        <tr>
          <td>Jimmy Carter</td>
          <td>1977–1981</td>
          <td>~156</td>
          <td>Naval nuclear engineer, widely considered among the most intelligent presidents</td>
        </tr>
        <tr>
          <td>John F. Kennedy</td>
          <td>1961–1963</td>
          <td>~159</td>
          <td>Harvard graduate, Pulitzer Prize-winning author</td>
        </tr>
        <tr>
          <td>Bill Clinton</td>
          <td>1993–2001</td>
          <td>~159</td>
          <td>Rhodes Scholar, Yale Law, Oxford University</td>
        </tr>
        <tr>
          <td>Theodore Roosevelt</td>
          <td>1901–1909</td>
          <td>~149</td>
          <td>Harvard graduate, prolific author of 35+ books, Nobel Peace Prize</td>
        </tr>
        <tr>
          <td>Barack Obama</td>
          <td>2009–2017</td>
          <td>~145</td>
          <td>Harvard Law magna cum laude, Harvard Law Review president</td>
        </tr>
        <tr>
          <td>Abraham Lincoln</td>
          <td>1861–1865</td>
          <td>~128</td>
          <td>Self-educated lawyer, exceptional rhetorical ability</td>
        </tr>
        <tr>
          <td>Franklin D. Roosevelt</td>
          <td>1933–1945</td>
          <td>~139</td>
          <td>Harvard, Columbia Law, managed WWII and Great Depression</td>
        </tr>
        <tr>
          <td>Richard Nixon</td>
          <td>1969–1974</td>
          <td>~143</td>
          <td>Duke Law School, exceptional memory, strategic mind</td>
        </tr>
        <tr>
          <td>Donald Trump</td>
          <td>2017–2021, 2025–</td>
          <td>~120–156</td>
          <td>Wharton (UPenn) undergraduate economics; estimates vary widely</td>
        </tr>
        <tr>
          <td>George W. Bush</td>
          <td>2001–2009</td>
          <td>~125</td>
          <td>Yale BA, Harvard MBA; higher than most expect</td>
        </tr>
        <tr>
          <td>Joe Biden</td>
          <td>2021–2025</td>
          <td>~133</td>
          <td>University of Delaware, Syracuse Law; later cognitive concerns noted</td>
        </tr>
        <tr>
          <td>George Washington</td>
          <td>1789–1797</td>
          <td>~132</td>
          <td>Self-educated, exceptional strategic and leadership ability</td>
        </tr>
      </tbody>
    </table>

    <h2>The Most Surprising Estimates</h2>
    <p>
      <strong>George W. Bush (~125):</strong> Bush is often assumed to have been below average
      intellectually, partly due to gaffes and a folksy communication style. But he earned a
      bachelor's degree from Yale and an MBA from Harvard Business School — both highly selective
      programs. Psychologist Dean Simonton's research estimates his IQ at approximately 125,
      placing him in the superior range. His presidency's outcomes are a separate question from
      his cognitive ability.
    </p>
    <p>
      <strong>Abraham Lincoln (~128):</strong> Lincoln had almost no formal education — less than
      a year total — yet taught himself law, read voraciously, and produced some of the most
      eloquent presidential prose in American history (the Gettysburg Address, Second Inaugural).
      His estimated IQ is relatively modest for this list, but his achievement given his
      circumstances may represent the most impressive cognitive story of any president.
    </p>
    <p>
      <strong>Jimmy Carter (~156):</strong> Carter graduated from the US Naval Academy and was
      selected for the Navy's nuclear submarine program under Admiral Hyman Rickover — one of the
      most cognitively demanding selection processes in the US military. He is widely estimated as
      one of the most intellectually capable presidents. His political difficulties in office
      illustrate that high IQ doesn't guarantee effective leadership.
    </p>

    <h2>What Makes a President Smart?</h2>
    <p>
      Presidential effectiveness depends on multiple types of intelligence that IQ tests only
      partially capture:
    </p>
    <ul>
      <li>
        <strong>Political intelligence:</strong> Understanding power dynamics, coalition-building,
        and the art of what's achievable. FDR was a master; Carter, despite higher estimated IQ,
        struggled here.
      </li>
      <li>
        <strong>Communication intelligence:</strong> The ability to distill complex ideas into
        persuasive public language. Lincoln, Obama, and Reagan excelled at this regardless of
        IQ differences.
      </li>
      <li>
        <strong>Crisis intelligence:</strong> Remaining analytical under extreme pressure with
        incomplete information. Kennedy's handling of the Cuban Missile Crisis is the canonical
        example.
      </li>
      <li>
        <strong>Strategic intelligence:</strong> Long-term planning and anticipating consequences.
        Nixon's China opening required cognitive flexibility that purely high-IQ analytical
        thinking might not have produced.
      </li>
    </ul>

    <h2>The IQ-Success Paradox in the White House</h2>
    <p>
      Perhaps the most instructive finding from presidential IQ research is the weak relationship
      between estimated IQ and historical presidential ranking. Warren Harding — often rated the
      worst president in American history — has been estimated at IQ 140+. Jimmy Carter, estimated
      at 156, is consistently ranked in the middle tier despite his exceptional intellect. Some of
      the most consequential presidents (Lincoln, Washington, Truman) had more modest estimated
      IQs compared to their peers.
    </p>
    <p>
      This pattern mirrors research on CEOs and leaders more broadly: above a threshold of roughly
      120, incremental IQ gains matter far less than judgment, emotional intelligence, communication
      skill, and the ability to build trust. The presidency rewards a particular combination of
      cognitive, social, and emotional abilities that no single test captures.
    </p>
    <p>
      For more on this theme, see our guide on <Link to="/genius-iq">what genius IQ really means</Link>{" "}
      and explore individual famous person pages for <Link to="/famous-iq/donald-trump">Donald Trump's IQ</Link>{" "}
      and <Link to="/famous-iq/barack-obama">Barack Obama's IQ</Link>.
    </p>

    <h2>Frequently Asked Questions</h2>

    <h3>Which US president had the highest IQ?</h3>
    <p>
      John Adams is most frequently estimated as the highest at approximately 173. Thomas Jefferson
      (~160) and Woodrow Wilson (~155) are commonly ranked close behind. These are scholarly
      estimates, not verified scores.
    </p>

    <h3>What is Donald Trump's IQ?</h3>
    <p>
      Estimates range from approximately 120 to 156 depending on the analyst. His Wharton School
      degree and business achievements suggest above-average intelligence, while academic researcher
      Dean Simonton's model placed him around 156. The wide range reflects genuine analytical
      disagreement. See our full analysis on the{" "}
      <Link to="/famous-iq/donald-trump">Donald Trump IQ page</Link>.
    </p>

    <h3>What is Barack Obama's IQ?</h3>
    <p>
      Obama's IQ is estimated at 130–145 based on his Harvard Law magna cum laude degree and
      Harvard Law Review presidency. See our{" "}
      <Link to="/famous-iq/barack-obama">Barack Obama IQ page</Link> for full analysis.
    </p>

    <h3>Does a high IQ make a president successful?</h3>
    <p>
      Not reliably. The historical record shows weak correlation between presidential IQ estimates
      and historical effectiveness rankings. Political intelligence, communication ability, and
      emotional judgment appear equally or more important than raw cognitive ability.
    </p>

    <p className="mt-8">
      Curious about your own score?{" "}
      <Link to="/test">Take our free IQ test</Link>, or explore the{" "}
      <Link to="/famous-iq">famous people IQ hub</Link> for scores across hundreds of public figures.
    </p>
  </ContentPage>
);

export default PresidentIQ;
