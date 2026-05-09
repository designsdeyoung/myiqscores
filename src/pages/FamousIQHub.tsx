import { useState } from "react";
import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import { famousIQData } from "@/data/famousIQData";

const CATEGORIES = ["All", "Scientists", "Business", "Athletes", "Politicians", "Musicians"] as const;
type Category = typeof CATEGORIES[number];

const categoryMap: Record<string, Category> = {
  "albert-einstein": "Scientists",
  "stephen-hawking": "Scientists",
  "nikola-tesla": "Scientists",
  "elon-musk": "Business",
  "mark-zuckerberg": "Business",
  "bill-gates": "Business",
  "jeff-bezos": "Business",
  "sam-altman": "Business",
  "jensen-huang": "Business",
  "ryan-reynolds": "Business",
  "rihanna": "Business",
  "kim-kardashian": "Business",
  "cristiano-ronaldo": "Athletes",
  "lionel-messi": "Athletes",
  "lebron-james": "Athletes",
  "michael-jordan": "Athletes",
  "tiger-woods": "Athletes",
  "donald-trump": "Politicians",
  "vladimir-putin": "Politicians",
  "joe-biden": "Politicians",
  "kamala-harris": "Politicians",
  "xi-jinping": "Politicians",
  "barron-trump": "Politicians",
  "taylor-swift": "Musicians",
  "kanye-west": "Musicians",
  "beyonce": "Musicians",
  "michael-jackson": "Musicians",
  "drake": "Musicians",
  "the-weeknd": "Musicians",
  "dua-lipa": "Musicians",
  "sabrina-carpenter": "Musicians",
  "harry-styles": "Musicians",
  "chappell-roan": "Musicians",
  "peso-pluma": "Musicians",
  "jungkook-bts": "Musicians",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who has the highest IQ in the world?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Terence Tao, a mathematician, is often cited with one of the highest verified IQ scores at around 225–230. Historical figures like William James Sidis are sometimes listed higher, though those estimates are largely speculative. Among living public figures, Elon Musk, Jeff Bezos, and other tech billionaires are frequently estimated in the 145–160 range.",
      },
    },
    {
      "@type": "Question",
      name: "What is the average celebrity IQ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most celebrity IQ estimates fall in the 110–130 range. Entertainers and athletes tend to cluster around 110–120, while tech entrepreneurs and scientists often score higher at 130–160. These are estimates — very few celebrities have taken verified, professionally administered IQ tests.",
      },
    },
    {
      "@type": "Question",
      name: "Are celebrity IQ scores accurate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most are not verified. Celebrity IQ scores are typically estimates based on academic records, career achievements, problem-solving ability, and self-reported claims. Only a small fraction of public figures have taken standardized IQ tests under controlled conditions. Treat these numbers as rough approximations rather than precise measurements.",
      },
    },
    {
      "@type": "Question",
      name: "What IQ is considered genius level?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most psychologists define genius as an IQ of 140 or above (top 0.4% of the population). Some definitions set the threshold at 160+. However, genius is a fuzzy concept — many people with IQs below 140 have made extraordinary contributions, while high IQ alone does not guarantee exceptional achievement.",
      },
    },
  ],
};

const FamousIQHub = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const sorted = [...famousIQData].sort((a, b) => {
    const aIQ = parseInt(a.estimatedIQ);
    const bIQ = parseInt(b.estimatedIQ);
    return bIQ - aIQ;
  });

  const filtered = activeCategory === "All"
    ? sorted
    : sorted.filter((p) => categoryMap[p.slug] === activeCategory);

  return (
    <ContentPage>
      <SEOHead
        title="Famous People IQ Scores: Complete List with Estimates | MyIQScores"
        description="See the estimated IQ scores of famous people — scientists, entrepreneurs, athletes, actors, and more. From Einstein (160) to everyday celebrities."
        canonicalUrl="/famous-iq"
        ogType="article"
        jsonLd={faqSchema}
      />

      <h1><span className="gradient-text">Famous People IQ Scores:</span> Complete List</h1>

      <p>
        How smart are the world's most famous people? Below is our complete database of estimated IQ
        scores for celebrities, scientists, entrepreneurs, athletes, and historical figures. Click any
        name for a detailed analysis of their cognitive abilities and achievements.
      </p>

      <p className="text-sm text-muted-foreground">
        <strong>Note:</strong> Most celebrity IQ scores are estimates based on academic records,
        career achievements, and public statements. Very few have verified, professionally
        administered IQ test results. See our guide on{" "}
        <Link to="/types-of-iq-tests">how IQ tests work</Link>.
      </p>

      <h2>Browse by Category</h2>
      <div className="flex flex-wrap gap-2 my-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground"
                : "glass-card text-foreground hover:bg-[rgba(255,255,255,0.08)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <table>
        <thead>
          <tr><th>Name</th><th>Estimated IQ</th><th>Known For</th></tr>
        </thead>
        <tbody>
          {filtered.map((p) => (
            <tr key={p.slug}>
              <td><Link to={`/famous-iq/${p.slug}`}>{p.name}</Link></td>
              <td className="font-mono font-semibold text-foreground">{p.estimatedIQ}</td>
              <td className="text-sm">{p.knownFor}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="mt-8">
        See also: <Link to="/highest-iq-ever">Highest IQ scores ever recorded</Link>,{" "}
        <Link to="/genius-iq">What IQ makes you a genius</Link>, or{" "}
        <Link to="/test">take our free IQ test</Link> to see where you stand.
      </p>

      <h2>Related Articles</h2>
      <ul>
        <li><Link to="/genius-iq">What Is a Genius IQ?</Link> — How high does your IQ need to be to qualify as a genius?</li>
        <li><Link to="/highest-iq-ever">Highest IQ Ever Recorded</Link> — The most extreme IQ scores in history</li>
        <li><Link to="/average-iq-by-country">Average IQ by Country</Link> — How nations compare on cognitive benchmarks</li>
        <li><Link to="/good-iq-score">What Is a Good IQ Score?</Link> — Understanding the full IQ scale</li>
      </ul>
    </ContentPage>
  );
};

export default FamousIQHub;
