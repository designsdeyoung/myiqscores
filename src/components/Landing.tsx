import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { trackQuizStarted } from "@/lib/analytics";
import {
  Brain,
  FlaskConical,
  Timer,
  Globe,
  ChevronDown,
  BookOpen,
  BarChart3,
  MapPin,
  ChevronRight,
  Trophy,
  HelpCircle,
  ClipboardCheck,
  Scale,
  Plus,
  Minus,
} from "lucide-react";
import { useState } from "react";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};
const viewReveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

interface LandingProps {
  onStart: () => void;
}

// ── FAQ Accordion ──
const FAQ_ITEMS = [
  {
    q: "Is this IQ test accurate?",
    a: "Our test is designed based on established psychometric principles and measures the same cognitive domains as professional IQ assessments — pattern recognition, logical reasoning, verbal ability, spatial reasoning, and numerical processing. While no online test replaces a formal assessment, our 30-question format provides a reliable estimate for most adults.",
  },
  {
    q: "How long does the test take?",
    a: "Most people complete the test in 10-15 minutes. There's no time limit per question, but the test considers both accuracy and completion time, so working at a natural pace gives the most useful estimate.",
  },
  {
    q: "Do I need to create an account?",
    a: "No. The test is completely free with no sign-up required. You start immediately and get your full results instantly — no email gate, no paywall, no credit card.",
  },
  {
    q: "What does my IQ score mean?",
    a: "IQ scores follow a bell curve with an average of 100. About 68% of people score between 85-115. Scores above 130 are in the top 2%, and scores below 70 occur in about 2% of the population. After your test, we'll show you exactly where you stand and link you to detailed explanations.",
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="flex flex-col gap-3">
      {FAQ_ITEMS.map(({ q, a }, i) => (
        <div key={q} className="faq-item">
          <button
            className="w-full flex items-start justify-between gap-4 p-6 text-left"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <div className="flex items-start gap-3">
              <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="font-heading font-semibold text-foreground text-sm sm:text-base">{q}</span>
            </div>
            <span className="flex-shrink-0 w-6 h-6 rounded-full border border-[rgba(255,255,255,0.15)] flex items-center justify-center text-primary mt-0.5">
              {openIndex === i ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
            </span>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                key="answer"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <p className="text-muted-foreground text-sm leading-relaxed px-6 pb-6 pl-14">{a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

// ── Score Bands ──
const SCORE_BANDS = [
  { label: "Below Average", range: "Below 85", pct: "~16% of people", fillWidth: "16%", variant: "muted" },
  { label: "Average", range: "85–100", pct: "~34% of people", fillWidth: "34%", variant: "neutral" },
  { label: "Above Average", range: "100–115", pct: "~34% of people", fillWidth: "34%", variant: "highlight" },
  { label: "Superior", range: "115–130", pct: "~14% of people", fillWidth: "14%", variant: "primary" },
  { label: "Gifted / Genius", range: "130+", pct: "~2% of people", fillWidth: "2%", variant: "gradient" },
];

const bandStyle: Record<string, string> = {
  muted: "bg-muted/30 border-[rgba(255,255,255,0.08)]",
  neutral: "bg-[rgba(255,255,255,0.05)] border-[rgba(255,255,255,0.10)]",
  highlight: "bg-primary/10 border-primary/20",
  primary: "bg-primary/20 border-primary/40",
  gradient: "bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/30",
};

const bandBarStyle: Record<string, string> = {
  muted: "bg-muted-foreground/40",
  neutral: "bg-foreground/30",
  highlight: "bg-primary/50",
  primary: "bg-primary/80",
  gradient: "bg-gradient-to-r from-primary to-secondary",
};

// ── Sample results preview items ──
const SAMPLE_RESULTS = [
  {
    label: "Pattern Recognition",
    score: "5 / 6",
    pct: 83,
    color: "hsl(var(--primary))",
  },
  {
    label: "Logical Reasoning",
    score: "4 / 6",
    pct: 67,
    color: "hsl(var(--secondary))",
  },
  {
    label: "Verbal",
    score: "6 / 6",
    pct: 100,
    color: "hsl(var(--success))",
  },
  {
    label: "Spatial",
    score: "4 / 6",
    pct: 67,
    color: "#F59E0B",
  },
  {
    label: "Numerical",
    score: "5 / 6",
    pct: 83,
    color: "#EC4899",
  },
];

const Landing = ({ onStart }: LandingProps) => {

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center px-4 pt-20 pb-16 relative"
      variants={stagger}
      initial="hidden"
      animate="show"
    >
      {/* ── HERO SECTION ── */}
      <motion.div variants={fadeUp} className="mb-8">
        <div className="relative">
          <Brain className="w-20 h-20 text-primary opacity-80" />
          <div className="absolute inset-0 w-20 h-20 rounded-full" style={{ animation: "pulse-glow 3s ease-in-out infinite" }} />
        </div>
      </motion.div>

      <motion.h1
        variants={fadeUp}
        className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center leading-tight max-w-4xl"
      >
        <span className="gradient-text">Free IQ Test —</span>
        <br />
        <span className="gradient-text">Find Your Score Instantly</span>
      </motion.h1>

      <motion.p variants={fadeUp} className="mt-6 text-muted-foreground text-center text-lg sm:text-xl max-w-2xl">
        30 questions across 5 cognitive domains. No sign-up. No paywall. Instant results with a full score breakdown.
      </motion.p>

      <motion.div variants={fadeUp} className="mt-10">
        <button onClick={() => { trackQuizStarted(); onStart(); }} className="glow-button text-lg">
          Start Free IQ Test →
        </button>
      </motion.div>

      <motion.div variants={fadeUp} className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-10">
        {[
          { icon: FlaskConical, text: "Reasoning-Based Questions" },
          { icon: Timer, text: "Takes ~12 Minutes" },
          { icon: Globe, text: "No Sign-Up or Paywall" },
        ].map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-2 text-muted-foreground text-sm">
            <Icon className="w-4 h-4 text-primary" />
            <span>{text}</span>
          </div>
        ))}
      </motion.div>

      <motion.p variants={fadeUp} className="mt-8 text-muted-foreground text-sm text-center max-w-xl">
        Results include your estimated score range, percentile context, and plain-language notes on what an online test can and cannot tell you.
      </motion.p>

      <motion.p variants={fadeUp} className="mt-3 text-xs text-muted-foreground/50 text-center">
        Basic results always free · Optional detailed report available after
      </motion.p>

      {/* ── TRUST BADGES ── */}
      <motion.div variants={fadeUp} className="mt-10">
        <div className="flex items-center gap-3 glass-card rounded-full px-5 py-2.5">
          <span className="pulse-dot" />
          <span className="text-sm text-muted-foreground">
            <span className="font-heading font-bold text-foreground">Free</span>{" "}
            · No sign-up · Instant results
          </span>
        </div>
      </motion.div>

      {/* ── SOCIAL PROOF BAR ── */}
      <motion.div variants={fadeUp} className="mt-14 w-full max-w-3xl">
        <div className="glass-card rounded-2xl px-6 py-5 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[rgba(255,255,255,0.08)] gap-0">
          {[
            { emoji: "📋", label: "Transparent methodology", sub: "Clear limits and scoring notes" },
            { emoji: "🧠", label: "30 reasoning questions", sub: "Covering 5 cognitive domains" },
            { emoji: "⚡", label: "Instant educational report", sub: "No sign-up required" },
          ].map(({ emoji, label, sub }) => (
            <div key={label} className="flex flex-col items-center text-center py-4 sm:py-0 sm:px-6">
              <span className="text-2xl mb-1">{emoji}</span>
              <span className="text-sm font-semibold text-foreground">{label}</span>
              <span className="text-xs text-muted-foreground mt-0.5">{sub}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── SCORE RANGE PREVIEW BANDS ── */}
      <motion.div
        {...viewReveal}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-20 w-full max-w-3xl"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-center text-foreground mb-2">
          Where Does Your Score Land?
        </h2>
        <p className="text-center text-muted-foreground text-sm mb-10">
          IQ follows a bell curve — see where each range sits
        </p>
        <Link to="/iq-score-ranges" className="block group">
          <div className="flex flex-col gap-3">
            {SCORE_BANDS.map(({ label, range, pct, fillWidth, variant }) => (
              <div
                key={label}
                className={`rounded-xl border p-4 ${bandStyle[variant]} transition-all duration-200 group-hover:ring-1 group-hover:ring-primary/20`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className={variant === "gradient" ? "gradient-text font-heading font-bold text-sm" : "font-heading font-semibold text-foreground text-sm"}>
                      {label}
                    </span>
                    <span className="text-xs text-muted-foreground border border-[rgba(255,255,255,0.1)] rounded-full px-2 py-0.5">
                      {range}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">{pct}</span>
                </div>
                <div className="h-1.5 rounded-full bg-[rgba(255,255,255,0.06)] overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${bandBarStyle[variant]}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: fillWidth }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-primary mt-4 group-hover:underline">
            See full score range guide →
          </p>
        </Link>
      </motion.div>

      {/* ── HOW IT WORKS ── */}
      <motion.div
        {...viewReveal}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-20 w-full max-w-4xl"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-center text-foreground mb-2">How It Works</h2>
        <p className="text-center text-muted-foreground text-sm mb-10">Three steps to your IQ score</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            {
              step: "1",
              icon: BookOpen,
              title: "Answer 30 Questions",
              desc: "Each question is carefully designed to measure different cognitive abilities: pattern recognition, verbal reasoning, spatial intelligence, and more.",
            },
            {
              step: "2",
              icon: BarChart3,
              title: "Get Your IQ Score",
              desc: "Receive your precise IQ score, percentile ranking, and a breakdown of your performance across 5 cognitive categories.",
            },
            {
              step: "3",
              icon: Trophy,
              title: "Discover What It Means",
              desc: "See where you rank against the general population, compare with famous people near your score, and explore what it means for your career.",
            },
          ].map(({ step, icon: Icon, title, desc }) => (
            <div key={step} className="glass-card rounded-2xl p-6 flex flex-col gap-3 card-hover">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                  {step}
                </span>
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-base">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── TRUST & METHODOLOGY ── */}
      <motion.div
        {...viewReveal}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-20 w-full max-w-4xl"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-center text-foreground mb-2">How We Keep the Test Honest</h2>
        <p className="text-center text-muted-foreground text-sm mb-10">A free online result should be useful without pretending to be a clinical diagnosis</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            {
              icon: ClipboardCheck,
              title: "Transparent Scoring",
              text: "Your result is an estimate based on accuracy and completion time across reasoning categories, with clear score-range explanations.",
            },
            {
              icon: Scale,
              title: "Plain Limitations",
              text: "Online IQ-style tests are not a substitute for WAIS, Stanford-Binet, or a licensed psychologist's assessment.",
            },
            {
              icon: BookOpen,
              title: "Educational Context",
              text: "The site includes guides on score ranges, percentiles, test types, and how to interpret cognitive assessments responsibly.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="glass-card rounded-2xl p-6 flex flex-col gap-3 card-hover">
              <Icon className="w-6 h-6 text-primary" />
              <h3 className="font-heading font-semibold text-foreground text-base">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── POPULAR ON MYIQSCORES ── */}
      <motion.div
        {...viewReveal}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-20 w-full max-w-4xl"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-center text-foreground mb-2">Popular on MyIQScores</h2>
        <p className="text-center text-muted-foreground text-sm mb-10">Explore IQ research and famous scores</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            { title: "Is 130 IQ Good?", href: "/is-130-iq-good", sub: "Top 2% of the population. See what it means." },
            { title: "Elon Musk's IQ", href: "/famous-iq/elon-musk", sub: "Estimated at 150-155. How he compares." },
            { title: "Average IQ in the US", href: "/average-iq-us", sub: "Is America's IQ above or below average?" },
            { title: "IQ of US Presidents", href: "/iq-of-presidents", sub: "Who was the smartest president?" },
            { title: "What Is a Genius IQ?", href: "/genius-iq", sub: "The threshold, famous geniuses, and more." },
            { title: "IQ Score Ranges", href: "/iq-score-ranges", sub: "From 70 to 160 — what each range means." },
          ].map(({ title, href, sub }) => (
            <Link
              key={href}
              to={href}
              className="glass-card rounded-xl p-4 flex flex-col gap-2 hover:bg-[rgba(255,255,255,0.06)] transition-colors group card-hover"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">{title}</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5 group-hover:text-primary transition-colors" />
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{sub}</p>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* ── SAMPLE RESULTS PREVIEW ── */}
      <motion.div
        {...viewReveal}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-20 w-full max-w-3xl"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-center text-foreground mb-2">
          What Your Results Look Like
        </h2>
        <p className="text-center text-muted-foreground text-sm mb-10">
          A sample breakdown — your score varies by performance across 5 cognitive domains
        </p>
        <div className="glass-card rounded-2xl p-6 sm:p-8">
          {/* Sample score header */}
          <div className="flex items-center justify-between mb-6 pb-5 border-b border-[rgba(255,255,255,0.08)]">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Sample IQ Score</p>
              <p className="text-5xl font-heading font-extrabold gradient-text">118</p>
              <p className="text-primary text-sm font-semibold mt-1">Above Average</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground mb-1">Percentile rank</p>
              <p className="text-3xl font-heading font-bold text-foreground">88<span className="text-sm text-muted-foreground">th</span></p>
              <p className="text-xs text-muted-foreground mt-1">Scores higher than 88%</p>
            </div>
          </div>
          {/* Sample category bars */}
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Category Breakdown</p>
          <div className="space-y-3">
            {SAMPLE_RESULTS.map(({ label, score, pct, color }) => (
              <div key={label}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">{label}</span>
                  <span className="text-foreground font-medium">{score}</span>
                </div>
                <div className="h-2 rounded-full bg-[rgba(255,255,255,0.06)] overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground/50 text-center mt-5">
            Example results for illustration — your actual scores will differ
          </p>
        </div>
      </motion.div>

      {/* ── SECOND CTA BLOCK ── */}
      <motion.div
        {...viewReveal}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-20 w-full max-w-2xl"
      >
        <div className="glass-card rounded-3xl p-10 text-center relative overflow-hidden">
          {/* Background shimmer */}
          <div className="absolute inset-0 shimmer opacity-50 pointer-events-none" />
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground mb-3 relative z-10">
            Ready to Find Out?
          </h2>
          <p className="text-muted-foreground mb-8 relative z-10">
            A free, no-login IQ-style reasoning test. Takes about 12 minutes. Instant results.
          </p>
          <button
            onClick={() => { trackQuizStarted(); onStart(); }}
            className="glow-button text-lg relative z-10"
            style={{ animation: "pulse-glow 3s ease-in-out infinite" }}
          >
            Start Free IQ Test →
          </button>
          <div className="mt-5 flex items-center justify-center gap-4 text-xs text-muted-foreground relative z-10">
            {["Free", "No Sign-Up", "Instant Results"].map((badge) => (
              <span key={badge} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── MINI FAQ ── */}
      <motion.div
        {...viewReveal}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-20 w-full max-w-3xl"
      >
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-center text-foreground mb-2">Frequently Asked Questions</h2>
        <p className="text-center text-muted-foreground text-sm mb-10">Everything you need to know before you start</p>
        <FAQAccordion />
      </motion.div>

      {/* ── SECOND CTA / CONTENT LINKS ── */}
      <motion.div
        {...viewReveal}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-20 w-full max-w-3xl"
      >
        <p className="text-center text-sm text-muted-foreground mb-6">Learn more about IQ</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link to="/what-is-iq" className="glass-card p-5 rounded-xl hover:bg-[rgba(255,255,255,0.06)] transition-colors text-center group card-hover">
            <BookOpen className="w-6 h-6 text-primary mx-auto mb-3" />
            <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors block mb-1">What Is IQ?</span>
            <span className="text-xs text-muted-foreground">The science behind intelligence testing</span>
          </Link>
          <Link to="/iq-score-ranges" className="glass-card p-5 rounded-xl hover:bg-[rgba(255,255,255,0.06)] transition-colors text-center group card-hover">
            <BarChart3 className="w-6 h-6 text-primary mx-auto mb-3" />
            <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors block mb-1">IQ Score Ranges</span>
            <span className="text-xs text-muted-foreground">From borderline to genius — explained</span>
          </Link>
          <Link to="/average-iq-by-country" className="glass-card p-5 rounded-xl hover:bg-[rgba(255,255,255,0.06)] transition-colors text-center group card-hover">
            <MapPin className="w-6 h-6 text-primary mx-auto mb-3" />
            <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors block mb-1">IQ by Country</span>
            <span className="text-xs text-muted-foreground">See how your country compares globally</span>
          </Link>
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="mt-12"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </motion.div>
  );
};

export default Landing;
