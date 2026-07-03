import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import { trackToolUsed, trackResultShared } from "@/lib/analytics";

const GRID = 9; // 3×3

function sequenceRating(len: number): { label: string; percentile: number } {
  if (len >= 20) return { label: "Exceptional", percentile: 99 };
  if (len >= 15) return { label: "Excellent", percentile: 92 };
  if (len >= 11) return { label: "Above average", percentile: 72 };
  if (len >= 8) return { label: "Average", percentile: 50 };
  if (len >= 6) return { label: "Below average", percentile: 28 };
  return { label: "Warm up and try again", percentile: 10 };
}

type Phase = "idle" | "watching" | "repeating" | "levelDone" | "done";

const faqItems = [
  {
    question: "What does a sequence memory test measure?",
    answer:
      "Sequential working memory — holding an ordered series of positions and reproducing it. It combines visuospatial storage with ordering, similar to the Corsi block-tapping task used in neuropsychology since the 1970s.",
  },
  {
    question: "What is a good sequence memory score?",
    answer:
      "On grid tests like this one, most people plateau between 8 and 12 steps. Getting past 15 is excellent, and past 20 is rare. The Corsi block span — the clinical cousin of this test — averages about 6 forward for adults, but repeating grids and visual feedback let online scores run higher.",
  },
  {
    question: "How is this different from the number memory test?",
    answer:
      "Number memory tests the phonological loop (verbal rehearsal of digits), while sequence memory tests the visuospatial sketchpad (locations in order). They're separate subsystems of working memory — many people are noticeably stronger at one than the other.",
  },
  {
    question: "Can I improve my sequence memory?",
    answer:
      "Task-specific gains come quickly: chunking positions into shapes or paths ('L-shape, then diagonal') can add several steps within a session. Transfer to general memory is limited — you're learning a strategy, which is exactly how memory athletes operate.",
  },
];

const SequenceMemoryTest = () => {
  const [phase, setPhase] = useState<Phase>("idle");
  const [sequence, setSequence] = useState<number[]>([]);
  const [litTile, setLitTile] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [clickFlash, setClickFlash] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };
  useEffect(() => clearTimers, []);

  const playSequence = (seq: number[]) => {
    setPhase("watching");
    setProgress(0);
    clearTimers();
    seq.forEach((tile, i) => {
      timersRef.current.push(setTimeout(() => setLitTile(tile), i * 700));
      timersRef.current.push(setTimeout(() => setLitTile(null), i * 700 + 420));
    });
    timersRef.current.push(setTimeout(() => setPhase("repeating"), seq.length * 700));
  };

  const startLevel = (prev: number[]) => {
    const next = [...prev, Math.floor(Math.random() * GRID)];
    setSequence(next);
    playSequence(next);
  };

  const start = () => {
    setCopied(false);
    trackToolUsed("sequence_memory", { action: 1 });
    startLevel([]);
  };

  const handleTile = (idx: number) => {
    if (phase !== "repeating") return;
    setClickFlash(idx);
    setTimeout(() => setClickFlash(null), 180);
    if (idx === sequence[progress]) {
      const nextProgress = progress + 1;
      if (nextProgress >= sequence.length) {
        setPhase("levelDone");
        timersRef.current.push(setTimeout(() => startLevel(sequence), 900));
      } else {
        setProgress(nextProgress);
      }
    } else {
      setPhase("done");
      trackToolUsed("sequence_memory", { max_level: sequence.length - 1 });
    }
  };

  const finalLevel = Math.max(0, sequence.length - 1);
  const rating = sequenceRating(finalLevel);
  const shareText = `I reached level ${finalLevel} on the sequence memory test — "${rating.label}" (~${rating.percentile}th percentile). Beat me: myiqscores.com/tools/sequence-memory-test`;

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
    name: "Sequence Memory Test",
    url: "https://www.myiqscores.com/tools/sequence-memory-test",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  const statusText: Record<Phase, string> = {
    idle: "",
    watching: `Watch the pattern… (level ${sequence.length})`,
    repeating: `Your turn — repeat it (${progress}/${sequence.length})`,
    levelDone: "Correct! Next level…",
    done: "",
  };

  return (
    <ContentPage
      relatedPages={[
        { title: "Number Memory Test", href: "/tools/number-memory-test" },
        { title: "Visual Memory Test", href: "/tools/visual-memory-test" },
        { title: "Reaction Time Test", href: "/tools/reaction-time-test" },
        { title: "Memory Test Guide", href: "/tests/memory" },
        { title: "All Free Tools", href: "/tools" },
      ]}
      ctaText="Memory is one domain — see your full profile free"
    >
      <SEOHead
        title="Sequence Memory Test: How Long a Pattern Can You Repeat? | MyIQScores"
        description="Free sequence memory test — watch the tiles light up, repeat the pattern, one step longer each level. Instant score with percentile. Most people reach 8–12."
        canonicalUrl="/tools/sequence-memory-test"
        jsonLd={[appSchema, faqSchema]}
      />

      <h1>
        Sequence Memory Test: <span className="gradient-text">Repeat the Pattern</span>
      </h1>
      <p className="text-muted-foreground text-lg">
        Tiles light up in order; repeat the sequence by clicking. Every level adds one step.
        One wrong tile ends the run. Most people top out between 8 and 12.
      </p>

      <div
        className="rounded-2xl my-8 flex flex-col items-center justify-center select-none p-8"
        style={{ minHeight: "340px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
      >
        {phase === "idle" && (
          <button onClick={start} className="glow-button text-base px-8 py-4">Start the Test</button>
        )}
        {(phase === "watching" || phase === "repeating" || phase === "levelDone") && (
          <>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">{statusText[phase]}</p>
            <div className="grid grid-cols-3 gap-3">
              {Array.from({ length: GRID }, (_, i) => (
                <button
                  key={i}
                  onClick={() => handleTile(i)}
                  aria-label={`Tile ${i + 1}`}
                  className="rounded-xl transition-colors duration-100"
                  style={{
                    width: "72px",
                    height: "72px",
                    background:
                      litTile === i
                        ? "rgba(139,92,246,0.9)"
                        : clickFlash === i
                          ? "rgba(0,229,255,0.6)"
                          : "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    cursor: phase === "repeating" ? "pointer" : "default",
                  }}
                />
              ))}
            </div>
          </>
        )}
        {phase === "done" && (
          <>
            <p className="text-xs uppercase tracking-widest text-primary font-bold mb-2 m-0">Your Sequence Memory</p>
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

      <h2>What Sequence Memory Measures</h2>
      <p>
        This task loads your <strong>visuospatial sketchpad</strong> — the working-memory
        subsystem that stores locations and movements — plus the ordering machinery that keeps
        "where" bound to "when." It's the online descendant of the Corsi block-tapping task,
        used in neuropsychology since the 1970s to assess spatial working memory, and a cousin
        of the Digit Span subtest that professional IQ tests use for the verbal equivalent.
      </p>
      <p>
        Spatial and verbal working memory are partly independent: plenty of people crush this
        test and struggle with <Link to="/tools/number-memory-test">digit recall</Link>, or vice
        versa. Comparing your percentiles across both is a genuinely informative mini-profile —
        and the full picture comes from{" "}
        <Link to="/">the complete test</Link>, which samples five domains.
      </p>

      <h2>Sequence Memory Benchmarks</h2>
      <div className="glass-card rounded-xl p-5 my-4 text-sm">
        <ul className="space-y-2 text-muted-foreground">
          <li><strong>5 or fewer</strong> — below typical; attention or unfamiliarity, retest</li>
          <li><strong>6–7</strong> — slightly below the online average</li>
          <li><strong>8–12</strong> — the normal plateau for most people</li>
          <li><strong>13–19</strong> — excellent; strong chunking at work</li>
          <li><strong>20+</strong> — rare territory, top ~1%</li>
        </ul>
      </div>

      <FAQSection items={faqItems} withSchema={false} />
    </ContentPage>
  );
};

export default SequenceMemoryTest;
