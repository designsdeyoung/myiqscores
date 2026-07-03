import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import { trackToolUsed, trackResultShared } from "@/lib/analytics";

const START_DIGITS = 3;

// Digit-span population reference: average forward span is 7 ± 2 digits.
function spanRating(digits: number): { label: string; percentile: number } {
  if (digits >= 12) return { label: "Exceptional", percentile: 99 };
  if (digits >= 10) return { label: "Excellent", percentile: 92 };
  if (digits >= 8) return { label: "Above average", percentile: 72 };
  if (digits >= 6) return { label: "Average", percentile: 50 };
  if (digits >= 5) return { label: "Below average", percentile: 25 };
  return { label: "Warm up and try again", percentile: 10 };
}

function randomDigits(n: number): string {
  let s = "";
  for (let i = 0; i < n; i++) {
    // No leading zero, otherwise uniform.
    s += i === 0 ? String(1 + Math.floor(Math.random() * 9)) : String(Math.floor(Math.random() * 10));
  }
  return s;
}

type Phase = "idle" | "showing" | "recall" | "roundResult" | "done";

const faqItems = [
  {
    question: "How many digits can the average person remember?",
    answer:
      "About 7, plus or minus 2 — the famous 'magical number' from George Miller's 1956 paper. Forward digit span (repeating numbers in order) averages around 7 digits for adults; backward span (reversing them) averages about 5. Reaching 10+ without memory techniques is rare.",
  },
  {
    question: "Is digit span part of real IQ tests?",
    answer:
      "Yes. Digit Span is a core working-memory subtest on the Wechsler scales (WAIS and WISC): the examiner reads digit sequences aloud, and the examinee repeats them forward, backward, and in ascending order. Working memory is one of the four index scores that build the full-scale IQ.",
  },
  {
    question: "How can I remember more digits?",
    answer:
      "Chunking is the main technique: group 8-6-7-5-3-0-9 into 867-53-09 and you're holding 3 chunks, not 7 digits. Memory athletes push spans past 100 digits by converting number groups into vivid images (the Major system). Raw span barely trains, but technique-assisted span is nearly unlimited.",
  },
  {
    question: "Does a bad memory score mean low IQ?",
    answer:
      "No. One informal test measures one ability on one day — anxiety, fatigue, and distraction all depress it. Working memory correlates with IQ but is just one of several index abilities, and clinical interpretation always uses multiple subtests under standardized conditions.",
  },
  {
    question: "Why do I remember numbers better when I say them out loud?",
    answer:
      "Speaking recruits the phonological loop — the auditory rehearsal system in working memory — which is exactly the system digit span measures. Subvocal rehearsal ('saying' the digits in your head) is the standard strategy and completely legitimate.",
  },
];

const NumberMemoryTest = () => {
  const [phase, setPhase] = useState<Phase>("idle");
  const [level, setLevel] = useState(START_DIGITS);
  const [number, setNumber] = useState("");
  const [input, setInput] = useState("");
  const [lastCorrect, setLastCorrect] = useState(true);
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);
  useEffect(() => {
    if (phase === "recall") inputRef.current?.focus();
  }, [phase]);

  const showNumber = (digits: number) => {
    const n = randomDigits(digits);
    setNumber(n);
    setInput("");
    setPhase("showing");
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    // Display time scales with length: ~1s base + 650ms per digit.
    timeoutRef.current = setTimeout(() => setPhase("recall"), 1000 + digits * 650);
  };

  const start = () => {
    setLevel(START_DIGITS);
    setCopied(false);
    trackToolUsed("number_memory", { action: 1 });
    showNumber(START_DIGITS);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const correct = input.trim() === number;
    setLastCorrect(correct);
    if (correct) {
      setPhase("roundResult");
    } else {
      setPhase("done");
      trackToolUsed("number_memory", { max_digits: level - 1 });
    }
  };

  const nextRound = () => {
    const next = level + 1;
    setLevel(next);
    showNumber(next);
  };

  // Final span = last level completed successfully.
  const finalSpan = level - 1;
  const rating = spanRating(finalSpan);
  const shareText = `I remembered a ${finalSpan}-digit number — "${rating.label}" (~${rating.percentile}th percentile). Test your number memory free: myiqscores.com/tools/number-memory-test`;

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
    name: "Number Memory Test",
    url: "https://www.myiqscores.com/tools/number-memory-test",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <ContentPage
      relatedPages={[
        { title: "Reaction Time Test", href: "/tools/reaction-time-test" },
        { title: "Free IQ Test", href: "/" },
        { title: "Memory Test Guide", href: "/tests/memory" },
        { title: "Working Memory and IQ", href: "/blog/working-memory-and-iq" },
        { title: "All Free IQ Tools", href: "/tools" },
      ]}
      ctaText="Working memory is one piece — get your full profile free"
    >
      <SEOHead
        title="Number Memory Test: How Many Digits Can You Hold? | MyIQScores"
        description="Free number memory test — memorize a number, type it back, one digit longer each round. Instant digit-span score with percentile. Average is 7 ± 2."
        canonicalUrl="/tools/number-memory-test"
        jsonLd={[appSchema, faqSchema]}
      />

      <h1>
        Number Memory Test: <span className="gradient-text">What's Your Digit Span?</span>
      </h1>
      <p className="text-muted-foreground text-lg">
        A number appears; memorize it before it disappears, then type it back. Each round adds
        a digit. The average adult taps out around 7 — the "magical number" of working memory.
      </p>

      {/* The test itself */}
      <div
        className="rounded-2xl my-8 flex flex-col items-center justify-center select-none font-heading text-foreground p-8"
        style={{ minHeight: "260px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
      >
        {phase === "idle" && (
          <button onClick={start} className="glow-button text-base px-8 py-4">Start the Test</button>
        )}
        {phase === "showing" && (
          <>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 m-0">Level {level - START_DIGITS + 1} · {level} digits</p>
            <p className="font-bold m-0" style={{ fontSize: "2.6rem", letterSpacing: "0.12em" }}>{number}</p>
            <p className="text-xs text-muted-foreground mt-4 m-0">Memorize it…</p>
          </>
        )}
        {phase === "recall" && (
          <form onSubmit={submit} className="w-full max-w-sm text-center">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">What was the number?</p>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value.replace(/\D/g, ""))}
              inputMode="numeric"
              autoComplete="off"
              className="w-full text-center bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.12)] rounded-lg px-4 py-3 text-foreground text-2xl font-heading tracking-widest focus:outline-none focus:border-primary"
            />
            <button type="submit" className="glow-button text-sm px-6 py-2.5 mt-4">Submit</button>
          </form>
        )}
        {phase === "roundResult" && lastCorrect && (
          <>
            <p className="font-heading text-2xl font-bold text-success m-0">Correct! ✓</p>
            <p className="text-sm text-muted-foreground mt-2 m-0">{level} digits down. Next: {level + 1}.</p>
            <button onClick={nextRound} className="glow-button text-sm px-6 py-2.5 mt-4">Next Level →</button>
          </>
        )}
        {phase === "done" && (
          <>
            <p className="text-xs uppercase tracking-widest text-primary font-bold mb-2 m-0">Your Digit Span</p>
            <p className="font-heading font-bold m-0" style={{ fontSize: "3rem" }}>{finalSpan} digits</p>
            <p className="text-muted-foreground mt-1 m-0">
              <strong className="text-foreground">{rating.label}</strong> (~{rating.percentile}th percentile)
            </p>
            <p className="text-sm text-muted-foreground mt-2 m-0">
              The number was <span className="text-foreground font-medium tracking-wider">{number}</span> — you typed{" "}
              <span className="text-foreground font-medium tracking-wider">{input || "nothing"}</span>
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

      <h2>What Your Digit Span Means</h2>
      <p>
        This test measures the storage capacity of your <strong>working memory</strong> — the
        mental workspace where you hold information while using it. George Miller's classic 1956
        paper put the typical capacity at "seven, plus or minus two" items, and modern testing
        agrees: most adults manage 6–8 digits forward, and reaching 10 or more without technique
        is genuinely uncommon.
      </p>
      <p>
        Working memory matters far beyond number games: it's one of the four index abilities in
        professional IQ testing (the WAIS Digit Span subtest works almost exactly like this
        tool), and it correlates strongly with reasoning, reading comprehension, and mental
        arithmetic. Read more in our guide to{" "}
        <Link to="/blog/working-memory-and-iq">working memory and IQ</Link>.
      </p>

      <h2>Digit Span Benchmarks</h2>
      <div className="glass-card rounded-xl p-5 my-4 text-sm">
        <ul className="space-y-2 text-muted-foreground">
          <li><strong>5 or fewer</strong> — below typical; retest rested before reading anything into it</li>
          <li><strong>6–8</strong> — the normal adult range; 7 is the classic average</li>
          <li><strong>9–10</strong> — excellent natural span, top ~10%</li>
          <li><strong>11–12</strong> — rare without chunking strategies</li>
          <li><strong>13+</strong> — almost always technique (chunking, number-image systems)</li>
        </ul>
      </div>

      <FAQSection items={faqItems} withSchema={false} />
    </ContentPage>
  );
};

export default NumberMemoryTest;
