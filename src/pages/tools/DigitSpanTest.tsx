import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import { trackToolUsed, trackResultShared } from "@/lib/analytics";

type Mode = "forward" | "backward";
const START = { forward: 3, backward: 2 };

// Clinical norms: forward span averages ~7, backward ~5 (WAIS Digit Span).
function spanRating(mode: Mode, span: number): { label: string; percentile: number } {
  const avg = mode === "forward" ? 7 : 5;
  const diff = span - avg;
  if (diff >= 4) return { label: "Exceptional", percentile: 99 };
  if (diff >= 2) return { label: "Excellent", percentile: 90 };
  if (diff >= 1) return { label: "Above average", percentile: 70 };
  if (diff >= 0) return { label: "Average", percentile: 50 };
  if (diff >= -1) return { label: "Below average", percentile: 28 };
  return { label: "Warm up and try again", percentile: 12 };
}

type Phase = "idle" | "presenting" | "recall" | "roundResult" | "done";

const faqItems = [
  {
    question: "What is a digit span test?",
    answer:
      "A working-memory test in which digits are presented one at a time and repeated back — in order (forward span) or reversed (backward span). It's a core subtest on the Wechsler IQ scales and one of the oldest standardized measures in psychology, dating to the 1880s.",
  },
  {
    question: "What is the average digit span?",
    answer:
      "About 7 digits forward (the famous 'seven, plus or minus two') and about 5 backward. Backward span is harder because you must store the sequence and mentally reverse it — storage plus manipulation, which is why clinicians weight it more heavily.",
  },
  {
    question: "Why does the real WAIS present digits one at a time?",
    answer:
      "Sequential presentation (one digit per second, spoken) prevents visual chunking — you can't photograph '4829175' as a group. This tool mimics that: digits appear singly, so your phonological rehearsal loop does the work, just like in clinical administration.",
  },
  {
    question: "What does a low backward span mean?",
    answer:
      "A single informal result means little — fatigue and distraction depress it easily. Clinically, a large forward-backward gap can flag working-memory manipulation difficulties, which is why psychologists always interpret Digit Span within a full battery, never alone.",
  },
  {
    question: "Digit span vs number memory test — what's the difference?",
    answer:
      "Our number memory test shows the whole number at once and grows it each round (visual, Human Benchmark-style). This digit span test presents digits one at a time and includes the harder backward mode — the format professional IQ tests actually use.",
  },
];

const DigitSpanTest = () => {
  const [mode, setMode] = useState<Mode>("forward");
  const [phase, setPhase] = useState<Phase>("idle");
  const [span, setSpan] = useState(START.forward);
  const [digits, setDigits] = useState<string>("");
  const [shownDigit, setShownDigit] = useState<string | null>(null);
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const clearTimers = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };
  useEffect(() => clearTimers, []);
  useEffect(() => {
    if (phase === "recall") inputRef.current?.focus();
  }, [phase]);

  const present = (len: number) => {
    let seq = "";
    for (let i = 0; i < len; i++) seq += String(Math.floor(Math.random() * 10));
    setDigits(seq);
    setInput("");
    setPhase("presenting");
    clearTimers();
    // One digit per second, like clinical administration.
    for (let i = 0; i < len; i++) {
      timersRef.current.push(setTimeout(() => setShownDigit(seq[i]), i * 1000));
      timersRef.current.push(setTimeout(() => setShownDigit(null), i * 1000 + 750));
    }
    timersRef.current.push(setTimeout(() => setPhase("recall"), len * 1000));
  };

  const start = (m: Mode) => {
    setMode(m);
    setSpan(START[m]);
    setCopied(false);
    trackToolUsed("digit_span", { mode: m });
    present(START[m]);
  };

  const expected = mode === "forward" ? digits : [...digits].reverse().join("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === expected) {
      setPhase("roundResult");
      timersRef.current.push(setTimeout(() => {
        setSpan((s) => s + 1);
        present(span + 1);
      }, 900));
    } else {
      setPhase("done");
      trackToolUsed("digit_span", { mode, max_span: span - 1 });
    }
  };

  const finalSpan = span - 1;
  const rating = spanRating(mode, finalSpan);
  const shareText = `My ${mode} digit span: ${finalSpan} digits — "${rating.label}" (~${rating.percentile}th percentile). Test yours: myiqscores.com/tools/digit-span-test`;

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
    name: "Digit Span Test (Forward & Backward)",
    url: "https://www.myiqscores.com/tools/digit-span-test",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <ContentPage
      relatedPages={[
        { title: "Number Memory Test", href: "/tools/number-memory-test" },
        { title: "Sequence Memory Test", href: "/tools/sequence-memory-test" },
        { title: "Working Memory and IQ", href: "/blog/working-memory-and-iq" },
        { title: "Memory Test Guide", href: "/tests/memory" },
        { title: "All Free Tools", href: "/tools" },
      ]}
      ctaText="Working memory is one of five domains — test them all free"
    >
      <SEOHead
        title="Digit Span Test: Forward & Backward, Like the Real WAIS | MyIQScores"
        description="Free digit span test in the clinical format — digits shown one at a time, forward and backward modes. Average forward span is 7, backward is 5. Instant percentile."
        canonicalUrl="/tools/digit-span-test"
        jsonLd={[appSchema, faqSchema]}
      />

      <h1>
        Digit Span Test: <span className="gradient-text">The Clinical Classic</span>
      </h1>
      <p className="text-muted-foreground text-lg">
        Digits appear one per second — hold them, then type them back in order (forward) or
        reversed (backward). This is the same format the WAIS Digit Span subtest uses; average
        adults manage 7 forward, 5 backward.
      </p>

      <div
        className="rounded-2xl my-8 flex flex-col items-center justify-center select-none p-8"
        style={{ minHeight: "300px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
      >
        {phase === "idle" && (
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-5">Choose a mode:</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button onClick={() => start("forward")} className="glow-button text-base px-7 py-3.5">
                Forward Span
              </button>
              <button
                onClick={() => start("backward")}
                className="glass-card px-7 py-3.5 rounded-lg font-heading font-bold text-foreground hover:bg-[rgba(255,255,255,0.08)]"
              >
                Backward Span (harder)
              </button>
            </div>
          </div>
        )}
        {phase === "presenting" && (
          <>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 m-0">
              {mode} · {span} digits — watch…
            </p>
            <p className="font-heading font-bold m-0" style={{ fontSize: "4rem", minHeight: "5rem" }}>
              {shownDigit ?? ""}
            </p>
          </>
        )}
        {phase === "recall" && (
          <form onSubmit={submit} className="w-full max-w-sm text-center">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
              Type the digits {mode === "backward" ? "IN REVERSE ORDER" : "in order"}
            </p>
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
        {phase === "roundResult" && (
          <p className="font-heading text-2xl font-bold text-success m-0">Correct! ✓ Next: {span + 1} digits</p>
        )}
        {phase === "done" && (
          <>
            <p className="text-xs uppercase tracking-widest text-primary font-bold mb-2 m-0">
              Your {mode} digit span
            </p>
            <p className="font-heading font-bold m-0" style={{ fontSize: "3rem" }}>{finalSpan} digits</p>
            <p className="text-muted-foreground mt-1 m-0">
              <strong className="text-foreground">{rating.label}</strong> (~{rating.percentile}th percentile
              for {mode} span)
            </p>
            <div className="flex flex-wrap gap-3 justify-center mt-5">
              <button onClick={handleCopy} className="glow-button text-sm px-5 py-2.5">
                {copied ? "Copied!" : "Copy My Score"}
              </button>
              <button onClick={() => start(mode)} className="glass-card px-5 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-[rgba(255,255,255,0.08)]">
                Try Again
              </button>
              <button onClick={() => start(mode === "forward" ? "backward" : "forward")} className="glass-card px-5 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-[rgba(255,255,255,0.08)]">
                Try {mode === "forward" ? "Backward" : "Forward"}
              </button>
              <Link to="/" className="glass-card px-5 py-2.5 rounded-lg text-sm font-medium text-foreground no-underline hover:bg-[rgba(255,255,255,0.08)]">
                Full IQ Test →
              </Link>
            </div>
          </>
        )}
      </div>

      <h2>Why Digit Span Is the Clinical Standard</h2>
      <p>
        Digit span has been measured continuously since the 1880s and sits inside every Wechsler
        intelligence scale as part of the Working Memory Index. The one-digit-per-second
        sequential presentation is deliberate: it blocks visual chunking and forces your{" "}
        <strong>phonological loop</strong> — the mental rehearsal system — to do the work, which
        is what makes it comparable across people and eras.
      </p>
      <p>
        The backward mode is the diagnostic heart of the subtest: storing digits is one system,
        mentally reversing them recruits executive manipulation on top. A typical adult loses
        about two digits going backward (7 forward → 5 backward). Prefer the see-the-whole-number
        format? That's our <Link to="/tools/number-memory-test">number memory test</Link> — and
        the research context lives in{" "}
        <Link to="/blog/working-memory-and-iq">working memory and IQ</Link>.
      </p>

      <h2>Digit Span Benchmarks</h2>
      <div className="glass-card rounded-xl p-5 my-4 text-sm">
        <ul className="space-y-2 text-muted-foreground">
          <li><strong>Forward:</strong> 5 below average · 6–8 normal · 9+ excellent · 11+ rare</li>
          <li><strong>Backward:</strong> 3 below average · 4–6 normal · 7+ excellent · 9+ rare</li>
          <li><strong>Gap check:</strong> forward minus backward is normally 1–3; larger gaps on repeated, rested attempts are worth professional curiosity, not panic</li>
        </ul>
      </div>

      <FAQSection items={faqItems} withSchema={false} />
    </ContentPage>
  );
};

export default DigitSpanTest;
