import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import { trackToolUsed, trackResultShared } from "@/lib/analytics";

// Level → grid side and tile count (Human Benchmark-style progression).
function levelConfig(level: number): { side: number; tiles: number } {
  const tiles = level + 2; // level 1 = 3 tiles
  const side = tiles <= 4 ? 3 : tiles <= 8 ? 4 : tiles <= 13 ? 5 : tiles <= 19 ? 6 : 7;
  return { side, tiles };
}

function visualRating(level: number): { label: string; percentile: number } {
  if (level >= 14) return { label: "Exceptional", percentile: 99 };
  if (level >= 11) return { label: "Excellent", percentile: 90 };
  if (level >= 9) return { label: "Above average", percentile: 70 };
  if (level >= 7) return { label: "Average", percentile: 50 };
  if (level >= 5) return { label: "Below average", percentile: 28 };
  return { label: "Warm up and try again", percentile: 10 };
}

type Phase = "idle" | "showing" | "recall" | "levelDone" | "done";

const faqItems = [
  {
    question: "What does a visual memory test measure?",
    answer:
      "Short-term visuospatial memory: how many positions you can hold in mind at once after a brief exposure. Unlike sequence tests, order doesn't matter — it's a pure capacity measure of the visuospatial sketchpad in working memory.",
  },
  {
    question: "What is a good visual memory score?",
    answer:
      "Most people plateau around level 7–9 on this format (9–11 tiles). Level 11+ is excellent and level 14+ is rare. Scores dip sharply when the tile count exceeds what you can chunk into a shape or pattern.",
  },
  {
    question: "Why do I remember tile patterns as shapes?",
    answer:
      "That's chunking — the visual system compresses several positions into one meaningful unit (a line, an L, a diagonal). It's the same mechanism that lets chess masters recall whole board positions: expertise turns many items into few chunks. Using it isn't cheating; it's how visual memory actually works.",
  },
  {
    question: "Is visual memory related to IQ?",
    answer:
      "Yes — visuospatial working memory correlates substantially with fluid reasoning, and visual-spatial ability is one of the five index scores on the WISC-V. That said, a single informal test is a snapshot, not a diagnosis.",
  },
];

const VisualMemoryTest = () => {
  const [phase, setPhase] = useState<Phase>("idle");
  const [level, setLevel] = useState(1);
  const [lives, setLives] = useState(3);
  const [targets, setTargets] = useState<Set<number>>(new Set());
  const [found, setFound] = useState<Set<number>>(new Set());
  const [misses, setMisses] = useState<Set<number>>(new Set());
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  const startLevel = (lvl: number) => {
    const { side, tiles } = levelConfig(lvl);
    const cells = side * side;
    const picked = new Set<number>();
    while (picked.size < tiles) picked.add(Math.floor(Math.random() * cells));
    setTargets(picked);
    setFound(new Set());
    setMisses(new Set());
    setLevel(lvl);
    setPhase("showing");
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setPhase("recall"), 1000 + tiles * 120);
  };

  const start = () => {
    setLives(3);
    setCopied(false);
    trackToolUsed("visual_memory", { action: 1 });
    startLevel(1);
  };

  const endRun = (finalLevel: number) => {
    setPhase("done");
    trackToolUsed("visual_memory", { max_level: finalLevel });
  };

  const handleTile = (idx: number) => {
    if (phase !== "recall" || found.has(idx) || misses.has(idx)) return;
    if (targets.has(idx)) {
      const nextFound = new Set(found).add(idx);
      setFound(nextFound);
      if (nextFound.size === targets.size) {
        setPhase("levelDone");
        timerRef.current = setTimeout(() => startLevel(level + 1), 900);
      }
    } else {
      const nextMisses = new Set(misses).add(idx);
      setMisses(nextMisses);
      // Three misclicks within a level costs a life and replays a fresh board.
      if (nextMisses.size >= 3) {
        const remaining = lives - 1;
        setLives(remaining);
        if (remaining <= 0) {
          endRun(level - 1);
        } else {
          setPhase("levelDone");
          timerRef.current = setTimeout(() => startLevel(level), 900);
        }
      }
    }
  };

  const { side } = levelConfig(level);
  const cells = side * side;
  const finalLevel = Math.max(0, level - 1);
  const rating = visualRating(finalLevel);
  const shareText = `I reached level ${finalLevel} on the visual memory test — "${rating.label}" (~${rating.percentile}th percentile). Beat me: myiqscores.com/tools/visual-memory-test`;

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
    name: "Visual Memory Test",
    url: "https://www.myiqscores.com/tools/visual-memory-test",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <ContentPage
      relatedPages={[
        { title: "Sequence Memory Test", href: "/tools/sequence-memory-test" },
        { title: "Number Memory Test", href: "/tools/number-memory-test" },
        { title: "Reaction Time Test", href: "/tools/reaction-time-test" },
        { title: "Memory Test Guide", href: "/tests/memory" },
        { title: "All Free Tools", href: "/tools" },
      ]}
      ctaText="Visual memory is one domain — get your full profile free"
    >
      <SEOHead
        title="Visual Memory Test: How Many Tiles Can You Remember? | MyIQScores"
        description="Free visual memory test — tiles flash, then vanish; click where they were. Levels grow until you miss. Instant score with percentile. Average is level 7–9."
        canonicalUrl="/tools/visual-memory-test"
        jsonLd={[appSchema, faqSchema]}
      />

      <h1>
        Visual Memory Test: <span className="gradient-text">Remember the Tiles</span>
      </h1>
      <p className="text-muted-foreground text-lg">
        A pattern of tiles flashes, then disappears — click every position from memory. Each
        level adds a tile and the grid grows. Three misclicks costs a life; three lives per run.
      </p>

      <div
        className="rounded-2xl my-8 flex flex-col items-center justify-center select-none p-8"
        style={{ minHeight: "380px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
      >
        {phase === "idle" && (
          <button onClick={start} className="glow-button text-base px-8 py-4">Start the Test</button>
        )}
        {(phase === "showing" || phase === "recall" || phase === "levelDone") && (
          <>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Level {level} · Lives {"❤".repeat(lives)}{" "}
              {phase === "showing" ? "· Memorize!" : phase === "recall" ? "· Click the tiles" : "· ✓"}
            </p>
            <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${side}, 1fr)` }}>
              {Array.from({ length: cells }, (_, i) => {
                const showLit = phase === "showing" && targets.has(i);
                const isFound = found.has(i);
                const isMiss = misses.has(i);
                return (
                  <button
                    key={i}
                    onClick={() => handleTile(i)}
                    aria-label={`Tile ${i + 1}`}
                    className="rounded-lg transition-colors duration-150"
                    style={{
                      width: side >= 6 ? "44px" : "56px",
                      height: side >= 6 ? "44px" : "56px",
                      background: showLit || isFound
                        ? "rgba(139,92,246,0.9)"
                        : isMiss
                          ? "rgba(220,50,50,0.5)"
                          : "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      cursor: phase === "recall" ? "pointer" : "default",
                    }}
                  />
                );
              })}
            </div>
          </>
        )}
        {phase === "done" && (
          <>
            <p className="text-xs uppercase tracking-widest text-primary font-bold mb-2 m-0">Your Visual Memory</p>
            <p className="font-heading font-bold m-0" style={{ fontSize: "3rem" }}>Level {finalLevel}</p>
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

      <h2>What Visual Memory Is (and Isn't)</h2>
      <p>
        This measures short-term <strong>visuospatial capacity</strong>: how many locations you
        can encode from a brief glance. Order doesn't matter here, which separates it from the{" "}
        <Link to="/tools/sequence-memory-test">sequence memory test</Link> — together they cover
        the "how much" and "in what order" halves of spatial working memory. The verbal
        equivalent is the <Link to="/tools/number-memory-test">number memory test</Link>.
      </p>
      <p>
        Your score jumps when tiles happen to form shapes — that's chunking, the same mechanism
        behind chess masters recalling whole boards. It's not a flaw in the test; compressing
        many items into few chunks is how visual memory actually scales, and why deliberate
        pattern-spotting is the one strategy that reliably raises scores.
      </p>

      <h2>Visual Memory Benchmarks</h2>
      <div className="glass-card rounded-xl p-5 my-4 text-sm">
        <ul className="space-y-2 text-muted-foreground">
          <li><strong>Level 4 or lower</strong> — below typical; retest when focused</li>
          <li><strong>Level 5–6</strong> — slightly below average</li>
          <li><strong>Level 7–9</strong> — the normal plateau (9–11 tiles)</li>
          <li><strong>Level 10–13</strong> — excellent, top ~10%</li>
          <li><strong>Level 14+</strong> — rare, top ~1%</li>
        </ul>
      </div>

      <FAQSection items={faqItems} withSchema={false} />
    </ContentPage>
  );
};

export default VisualMemoryTest;
