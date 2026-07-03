import { useState } from "react";
import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import { trackToolUsed, trackResultShared } from "@/lib/analytics";

// Common English words — mixed concreteness so "seen" judgments rely on
// episodic memory rather than word rarity.
const WORD_BANK = [
  "river", "candle", "orbit", "velvet", "hammer", "lantern", "meadow", "cipher", "anchor", "breeze",
  "canyon", "dusk", "ember", "fable", "glacier", "harbor", "island", "jungle", "kettle", "ladder",
  "marble", "nectar", "oasis", "parade", "quartz", "ribbon", "saddle", "temple", "umbrella", "valley",
  "walnut", "yonder", "zephyr", "attic", "basket", "cradle", "dagger", "engine", "feather", "goblet",
  "helmet", "ivory", "jacket", "kernel", "lagoon", "mirror", "needle", "orchard", "pillow", "quiver",
  "rocket", "shadow", "tunnel", "urchin", "vessel", "whisker", "yeast", "zenith", "acorn", "beacon",
  "cobble", "drizzle", "easel", "fjord", "gutter", "hinge", "inkwell", "jester", "knoll", "lumber",
  "mantle", "nozzle", "opal", "pebble", "quarry", "rudder", "spindle", "thicket", "utensil", "vellum",
  "wharf", "yarn", "zigzag", "almond", "bramble", "chisel", "dew", "elm", "flint", "grove",
  "hearth", "iceberg", "jigsaw", "keel", "lily", "moss", "nutmeg", "onyx", "prairie", "quill",
  "reef", "sleet", "tide", "under", "vine", "willow", "yodel", "zeal", "arch", "bluff",
  "crest", "delta", "eddy", "ferry", "gale", "haze", "inlet", "jetty", "knot", "ledge",
];

function verbalRating(score: number): { label: string; percentile: number } {
  if (score >= 90) return { label: "Exceptional", percentile: 99 };
  if (score >= 60) return { label: "Excellent", percentile: 90 };
  if (score >= 40) return { label: "Above average", percentile: 70 };
  if (score >= 25) return { label: "Average", percentile: 50 };
  if (score >= 15) return { label: "Below average", percentile: 28 };
  return { label: "Warm up and try again", percentile: 10 };
}

type Phase = "idle" | "playing" | "done";

const faqItems = [
  {
    question: "What does a verbal memory test measure?",
    answer:
      "Recognition memory for words: with every word you must judge 'have I seen this in this session?' As the seen-list grows, the task loads both working memory and short-term episodic memory — the longer you last, the more items you're tracking simultaneously.",
  },
  {
    question: "What is a good verbal memory score?",
    answer:
      "On keep-going-until-three-strikes formats like this, typical scores land between 25 and 40 words. Passing 60 is excellent, and 90+ is exceptional. Scores climb with vocabulary exposure and attention, and dip sharply when fatigued.",
  },
  {
    question: "Why do familiar words trip me up?",
    answer:
      "That's the test's core difficulty: source confusion. You must distinguish 'I saw this word two minutes ago' from 'this word just feels familiar.' False alarms on common words are the classic error pattern, which is why this bank mixes everyday and less-common words.",
  },
  {
    question: "Is verbal memory the same as vocabulary?",
    answer:
      "No. Vocabulary is crystallized knowledge (words you know); verbal memory is the episodic record of what you've just encountered. IQ tests measure both separately — vocabulary on verbal comprehension subtests, and short-term retention on memory subtests.",
  },
];

const VerbalMemoryTest = () => {
  const [phase, setPhase] = useState<Phase>("idle");
  const [seen, setSeen] = useState<Set<string>>(new Set());
  const [current, setCurrent] = useState("");
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [copied, setCopied] = useState(false);

  const nextWord = (seenSet: Set<string>) => {
    // 40% chance of a repeat once enough words have been shown.
    const showSeen = seenSet.size >= 4 && Math.random() < 0.4;
    if (showSeen) {
      const arr = [...seenSet];
      setCurrent(arr[Math.floor(Math.random() * arr.length)]);
    } else {
      const unseen = WORD_BANK.filter((w) => !seenSet.has(w));
      if (unseen.length === 0) {
        const arr = [...seenSet];
        setCurrent(arr[Math.floor(Math.random() * arr.length)]);
        return;
      }
      setCurrent(unseen[Math.floor(Math.random() * unseen.length)]);
    }
  };

  const start = () => {
    const fresh = new Set<string>();
    setSeen(fresh);
    setScore(0);
    setLives(3);
    setCopied(false);
    setPhase("playing");
    trackToolUsed("verbal_memory", { action: 1 });
    nextWord(fresh);
  };

  const answer = (saidSeen: boolean) => {
    const wasSeen = seen.has(current);
    const correct = saidSeen === wasSeen;
    const nextSeen = new Set(seen).add(current);
    setSeen(nextSeen);
    if (correct) {
      setScore((s) => s + 1);
      nextWord(nextSeen);
    } else {
      const remaining = lives - 1;
      setLives(remaining);
      if (remaining <= 0) {
        setPhase("done");
        trackToolUsed("verbal_memory", { final_score: score });
      } else {
        nextWord(nextSeen);
      }
    }
  };

  const rating = verbalRating(score);
  const shareText = `I scored ${score} on the verbal memory test — "${rating.label}" (~${rating.percentile}th percentile). Beat me: myiqscores.com/tools/verbal-memory-test`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    trackResultShared("copy");
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Verbal Memory Test",
    url: "https://www.myiqscores.com/tools/verbal-memory-test",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <ContentPage
      relatedPages={[
        { title: "Number Memory Test", href: "/tools/number-memory-test" },
        { title: "Visual Memory Test", href: "/tools/visual-memory-test" },
        { title: "Sequence Memory Test", href: "/tools/sequence-memory-test" },
        { title: "Verbal Reasoning Test Guide", href: "/tests/verbal-reasoning" },
        { title: "All Free Tools", href: "/tools" },
      ]}
      ctaText="Verbal memory is one domain — get your full profile free"
    >
      <SEOHead
        title="Verbal Memory Test: Seen or New? | MyIQScores"
        description="Free verbal memory test — words appear one at a time; say whether each is new or one you've already seen. Three strikes ends it. Average score is 25–40."
        canonicalUrl="/tools/verbal-memory-test"
        jsonLd={[appSchema, faqSchema]}
      />

      <h1>
        Verbal Memory Test: <span className="gradient-text">Seen or New?</span>
      </h1>
      <p className="text-muted-foreground text-lg">
        Words appear one at a time. For each, decide: is it new, or have you already seen it this
        run? Every correct call scores a point; three mistakes ends the test.
      </p>

      <div
        className="rounded-2xl my-8 flex flex-col items-center justify-center select-none p-8"
        style={{ minHeight: "280px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
      >
        {phase === "idle" && (
          <button onClick={start} className="glow-button text-base px-8 py-4">Start the Test</button>
        )}
        {phase === "playing" && (
          <>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 m-0">
              Score {score} · Lives {"❤".repeat(lives)}
            </p>
            <p className="font-heading font-bold text-foreground m-0" style={{ fontSize: "2.6rem" }}>{current}</p>
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => answer(true)}
                className="glass-card px-8 py-3 rounded-lg font-heading font-bold text-foreground hover:bg-[rgba(139,92,246,0.25)] transition-colors"
              >
                SEEN
              </button>
              <button
                onClick={() => answer(false)}
                className="glass-card px-8 py-3 rounded-lg font-heading font-bold text-foreground hover:bg-[rgba(0,229,255,0.2)] transition-colors"
              >
                NEW
              </button>
            </div>
          </>
        )}
        {phase === "done" && (
          <>
            <p className="text-xs uppercase tracking-widest text-primary font-bold mb-2 m-0">Your Verbal Memory</p>
            <p className="font-heading font-bold m-0" style={{ fontSize: "3rem" }}>{score} words</p>
            <p className="text-muted-foreground mt-1 m-0">
              <strong className="text-foreground">{rating.label}</strong> (~{rating.percentile}th percentile)
            </p>
            <div className="flex flex-wrap gap-3 justify-center mt-5">
              <button onClick={handleCopy} className="glow-button text-sm px-5 py-2.5">
                {copied ? "Copied!" : "Copy My Score"}
              </button>
              <button onClick={start} className="glass-card px-5 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-[rgba(255,255,255,0.08)]">
                Try Again
              </button>
              <Link to="/" className="glass-card px-5 py-2.5 rounded-lg text-sm font-medium text-foreground no-underline hover:bg-[rgba(255,255,255,0.08)]">
                Full IQ Test →
              </Link>
            </div>
          </>
        )}
      </div>

      <h2>What Verbal Memory Measures</h2>
      <p>
        Every word forces a recognition judgment: <em>did this appear earlier in this session?</em>{" "}
        As your seen-list grows past a few dozen words, you're maintaining a running episodic
        record while fighting <strong>source confusion</strong> — the false sense of familiarity
        that makes common words feel "seen." That combination of storage and monitoring is why
        recognition tasks appear in clinical memory batteries like the WMS (Wechsler Memory Scale).
      </p>
      <p>
        Verbal memory is distinct from vocabulary (knowing words) and from{" "}
        <Link to="/tools/number-memory-test">digit span</Link> (rehearsing sequences) — three
        systems that professional testing measures separately. See how the verbal domain fits
        the bigger picture in our <Link to="/tests/verbal-reasoning">verbal reasoning guide</Link>,
        or get your five-domain profile from <Link to="/">the full test</Link>.
      </p>

      <h2>Verbal Memory Benchmarks</h2>
      <div className="glass-card rounded-xl p-5 my-4 text-sm">
        <ul className="space-y-2 text-muted-foreground">
          <li><strong>Under 15</strong> — below typical; attention drift is the usual cause</li>
          <li><strong>15–24</strong> — slightly below average</li>
          <li><strong>25–40</strong> — the normal range for a focused run</li>
          <li><strong>41–89</strong> — excellent recognition memory</li>
          <li><strong>90+</strong> — exceptional, top ~1%</li>
        </ul>
      </div>

      <FAQSection items={faqItems} withSchema={false} />
    </ContentPage>
  );
};

export default VerbalMemoryTest;
