import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import FAQSection from "@/components/FAQSection";
import { trackToolUsed, trackResultShared } from "@/lib/analytics";

const ROUNDS = 5;

// Population reference points for click reaction time (visual stimulus, ms).
// Median online-sample reaction is ~273ms (Human Benchmark aggregate data).
function reactionRating(ms: number): { label: string; percentile: number } {
  if (ms < 200) return { label: "Exceptional", percentile: 99 };
  if (ms < 230) return { label: "Excellent", percentile: 90 };
  if (ms < 255) return { label: "Above average", percentile: 70 };
  if (ms < 285) return { label: "Average", percentile: 50 };
  if (ms < 330) return { label: "Below average", percentile: 30 };
  if (ms < 400) return { label: "Slow — warm up and retry", percentile: 12 };
  return { label: "Much slower than typical", percentile: 5 };
}

type Phase = "idle" | "waiting" | "ready" | "tooSoon" | "between" | "done";

const faqItems = [
  {
    question: "What is a good reaction time?",
    answer:
      "For a visual click test, the median online score is around 270–280 milliseconds. Under 230ms is excellent, under 200ms is elite territory (professional esports players and athletes), and 280–330ms is a perfectly normal result. Hardware adds delay: monitor and input lag typically contribute 20–50ms.",
  },
  {
    question: "Does reaction time relate to IQ?",
    answer:
      "Modestly, yes. Simple reaction time correlates with measured IQ at roughly r = 0.2–0.3, and choice reaction time (deciding between responses) correlates more strongly. Processing speed is one of the core index scores on professional IQ tests like the WAIS, which is why slowed reactions with age parallel changes in fluid ability.",
  },
  {
    question: "How can I improve my reaction time?",
    answer:
      "Sleep is the biggest lever — deprivation slows reactions as much as alcohol. Beyond that: regular aerobic exercise, practice on the specific task (gains of 10-20% are common), caffeine in moderation, and minimizing distractions. Hardware matters too: a high-refresh monitor and low-latency mouse can shave 20-30ms off your measured score.",
  },
  {
    question: "Why is my reaction time different on my phone?",
    answer:
      "Touchscreens add 50-100ms of input latency compared to a gaming mouse, and mobile browsers process touch events differently. Compare your scores only within the same device, and treat cross-device comparisons as rough.",
  },
  {
    question: "Does reaction time decline with age?",
    answer:
      "Yes — simple reaction time is fastest in the late teens and twenties, then slows gradually by roughly 2-6ms per decade, accelerating after 60. Experience compensates in real-world tasks: older drivers anticipate hazards earlier, offsetting slower raw reactions.",
  },
];

const ReactionTimeTest = () => {
  const [phase, setPhase] = useState<Phase>("idle");
  const [times, setTimes] = useState<number[]>([]);
  const [lastTime, setLastTime] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const greenAtRef = useRef(0);

  const clearTimer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
  };
  useEffect(() => clearTimer, []);

  const armRound = useCallback(() => {
    setPhase("waiting");
    clearTimer();
    // Random 1.5–4s delay so the green flash can't be anticipated.
    timeoutRef.current = setTimeout(() => {
      greenAtRef.current = performance.now();
      setPhase("ready");
    }, 1500 + Math.random() * 2500);
  }, []);

  const start = () => {
    setTimes([]);
    setLastTime(null);
    setCopied(false);
    trackToolUsed("reaction_time", { action: 1 });
    armRound();
  };

  const handleZoneClick = () => {
    if (phase === "idle" || phase === "done") {
      start();
      return;
    }
    if (phase === "waiting") {
      clearTimer();
      setPhase("tooSoon");
      return;
    }
    if (phase === "tooSoon" || phase === "between") {
      armRound();
      return;
    }
    if (phase === "ready") {
      const ms = Math.round(performance.now() - greenAtRef.current);
      const next = [...times, ms];
      setTimes(next);
      setLastTime(ms);
      if (next.length >= ROUNDS) {
        setPhase("done");
        const avg = Math.round(next.reduce((a, b) => a + b, 0) / next.length);
        trackToolUsed("reaction_time", { average_ms: avg });
      } else {
        setPhase("between");
      }
    }
  };

  const avg = times.length ? Math.round(times.reduce((a, b) => a + b, 0) / times.length) : null;
  const best = times.length ? Math.min(...times) : null;
  const rating = avg !== null ? reactionRating(avg) : null;

  const shareText =
    avg !== null
      ? `My reaction time: ${avg}ms average (best ${best}ms) — "${rating?.label}". Test yours free: myiqscores.com/tools/reaction-time-test`
      : "";

  const handleCopy = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    trackResultShared("copy");
  };

  const zoneStyles: Record<Phase, { bg: string; text: string }> = {
    idle: { bg: "rgba(255,255,255,0.04)", text: "Click to start" },
    waiting: { bg: "rgba(220,50,50,0.25)", text: "Wait for green…" },
    ready: { bg: "rgba(34,197,94,0.45)", text: "CLICK NOW!" },
    tooSoon: { bg: "rgba(245,158,11,0.25)", text: "Too soon! Click to retry" },
    between: { bg: "rgba(255,255,255,0.04)", text: `${lastTime}ms — click for round ${times.length + 1} of ${ROUNDS}` },
    done: { bg: "rgba(139,92,246,0.25)", text: "Done! See your results below — click to go again" },
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
    name: "Reaction Time Test",
    url: "https://www.myiqscores.com/tools/reaction-time-test",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <ContentPage
      relatedPages={[
        { title: "Number Memory Test", href: "/tools/number-memory-test" },
        { title: "Free IQ Test", href: "/" },
        { title: "Memory Test Guide", href: "/tests/memory" },
        { title: "All Free IQ Tools", href: "/tools" },
        { title: "Working Memory and IQ", href: "/blog/working-memory-and-iq" },
      ]}
      ctaText="See your full cognitive profile — free IQ test"
    >
      <SEOHead
        title="Reaction Time Test: Measure Your Speed in 5 Clicks | MyIQScores"
        description="Free reaction time test — click when the box turns green, 5 rounds, instant average with percentile rating. See how your speed compares and what it means."
        canonicalUrl="/tools/reaction-time-test"
        jsonLd={[appSchema, faqSchema]}
      />

      <h1>
        Reaction Time Test: <span className="gradient-text">How Fast Are You?</span>
      </h1>
      <p className="text-muted-foreground text-lg">
        When the red box turns green, click as fast as you can. Five rounds, then your average,
        best time, and how you compare to everyone else.
      </p>

      {/* The test itself */}
      <div
        role="button"
        tabIndex={0}
        aria-label="Reaction time test area"
        onMouseDown={handleZoneClick}
        onKeyDown={(e) => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); handleZoneClick(); } }}
        className="rounded-2xl my-8 flex items-center justify-center select-none cursor-pointer font-heading font-bold text-xl text-foreground transition-colors duration-100"
        style={{ minHeight: "260px", background: zoneStyles[phase].bg, border: "1px solid rgba(255,255,255,0.1)" }}
      >
        {zoneStyles[phase].text}
      </div>

      {phase === "done" && avg !== null && rating && (
        <div className="glass-card p-6 rounded-xl my-6 text-center">
          <p className="text-xs uppercase tracking-widest text-primary font-bold mb-2">Your Result</p>
          <p className="font-heading text-4xl font-bold text-foreground m-0">{avg}ms</p>
          <p className="text-muted-foreground mt-1">
            average of {ROUNDS} · best {best}ms · <strong className="text-foreground">{rating.label}</strong>{" "}
            (~{rating.percentile}th percentile)
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Rounds: {times.map((t) => `${t}ms`).join(" · ")}
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-4">
            <button onClick={handleCopy} className="glow-button text-sm px-5 py-2.5">
              {copied ? "Copied!" : "Copy My Score"}
            </button>
            <Link to="/" className="glass-card px-5 py-2.5 rounded-lg text-sm font-medium text-foreground no-underline hover:bg-[rgba(255,255,255,0.08)]">
              Take the Full IQ Test →
            </Link>
          </div>
        </div>
      )}

      <h2>What Your Reaction Time Means</h2>
      <p>
        Simple visual reaction time — see a stimulus, respond — takes the median person about
        270–280 milliseconds in online tests. Roughly 190–200ms of that is biology (retina →
        visual cortex → decision → motor command → muscle), and the rest is your hardware:
        monitors, browsers, and mice each add measurable lag. That's why elite esports players
        obsess over 240Hz monitors, and why you should compare scores only on the same device.
      </p>
      <p>
        Reaction speed is cognitively meaningful: processing speed is one of the four index
        scores in professional IQ testing, and simple reaction time correlates modestly (r ≈
        0.2–0.3) with full-scale IQ. It's also one of the most trainable cognitive metrics —
        sleep, exercise, and practice all move it. For the broader picture of what speed does
        and doesn't say about ability, see our guide to{" "}
        <Link to="/what-is-iq">what IQ actually measures</Link>.
      </p>

      <h2>Reaction Time Benchmarks</h2>
      <div className="glass-card rounded-xl p-5 my-4 text-sm">
        <ul className="space-y-2 text-muted-foreground">
          <li><strong>Under 200ms</strong> — elite: pro gamers, sprinters off the blocks</li>
          <li><strong>200–230ms</strong> — excellent, top ~10%</li>
          <li><strong>230–255ms</strong> — above average</li>
          <li><strong>255–285ms</strong> — average (the online median sits here)</li>
          <li><strong>285–330ms</strong> — below average, still normal</li>
          <li><strong>Over 330ms</strong> — tired, distracted, or high-latency device</li>
        </ul>
      </div>

      <FAQSection items={faqItems} withSchema={false} />
    </ContentPage>
  );
};

export default ReactionTimeTest;
