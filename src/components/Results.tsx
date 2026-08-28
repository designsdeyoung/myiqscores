import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { trackResultViewed, trackResultShared } from "@/lib/analytics";
import { Shield, Twitter, Facebook, Linkedin, Copy, Check, Lock, Award } from "lucide-react";
import AdUnit from "./AdUnit";
import { AD_SLOTS } from "@/config/adsense";
import IQCertificate from "./IQCertificate";
import { questions } from "@/data/questions";
import { calculateIQ, getIQLabel, getPercentile, getCategoryScores, categories } from "@/data/questions";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const PREMIUM_REPORT_LINK = "https://buy.stripe.com/14AbJ0eH5cmJ9z48oSasg00";
const CERTIFICATE_LINK = "https://buy.stripe.com/28E14mbuT1I512yeNgasg01";

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

function AnimatedNumber({ target }: { target: number }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const duration = 1500;
    const start = Date.now();
    const tick = () => {
      const t = Math.min((Date.now() - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(eased * target));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target]);
  return <>{val}</>;
}

function BellCurve({ iq }: { iq: number }) {
  const width = 300;
  const height = 120;
  const points: string[] = [];
  for (let x = 0; x <= width; x++) {
    const iqVal = 55 + (x / width) * 90;
    const z = (iqVal - 100) / 15;
    const y = height - Math.exp(-z * z / 2) * (height * 0.85);
    points.push(`${x},${y}`);
  }
  const markerX = ((iq - 55) / 90) * width;
  const markerZ = (iq - 100) / 15;
  const markerY = height - Math.exp(-markerZ * markerZ / 2) * (height * 0.85);

  return (
    <svg viewBox={`0 0 ${width} ${height + 20}`} className="w-full max-w-xs mx-auto">
      <defs>
        <linearGradient id="bellGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline points={points.join(" ")} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <polygon points={`0,${height} ${points.join(" ")} ${width},${height}`} fill="url(#bellGrad)" />
      <motion.circle
        cx={markerX} cy={markerY} r="5" fill="hsl(var(--primary))"
        initial={{ scale: 0 }} animate={{ scale: 1 }}
        transition={{ delay: 1.6, type: "spring", stiffness: 300 }}
      />
      <motion.circle
        cx={markerX} cy={markerY} r="10" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.4"
        initial={{ scale: 0 }} animate={{ scale: [1, 1.5, 1] }}
        transition={{ delay: 1.8, duration: 2, repeat: Infinity }}
      />
      <text x={markerX} y={height + 15} textAnchor="middle" fill="hsl(var(--primary))" fontSize="10" fontFamily="var(--font-mono)">
        {iq}
      </text>
    </svg>
  );
}

function formatElapsed(s: number): string {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  if (m === 0) return `${sec} second${sec !== 1 ? "s" : ""}`;
  return `${m} minute${m !== 1 ? "s" : ""} ${sec} second${sec !== 1 ? "s" : ""}`;
}

function getRecommendations(iq: number): { title: string; href: string }[] {
  if (iq >= 130) {
    return [
      { title: "What Is a Genius IQ?", href: "/genius-iq" },
      { title: "Mensa IQ Test Requirements", href: "/mensa-iq-test" },
      { title: `Is ${iq} IQ Good? Full Breakdown`, href: `/is-${iq}-iq-good` },
      { title: "Albert Einstein's IQ Explained", href: "/famous-iq/albert-einstein" },
      { title: "IQ Score Ranges Chart", href: "/iq-score-ranges" },
    ];
  }
  if (iq >= 110) {
    return [
      { title: `Is ${iq} IQ Good? Full Breakdown`, href: `/is-${iq}-iq-good` },
      { title: "What Is a Good IQ Score?", href: "/good-iq-score" },
      { title: "IQ by Career — Where Do You Fit?", href: "/iq-by-career" },
      { title: "IQ Score Ranges Chart", href: "/iq-score-ranges" },
      { title: "IQ Percentile Chart", href: "/iq-percentile-chart" },
    ];
  }
  if (iq >= 90) {
    return [
      { title: `Is ${iq} IQ Good? Full Breakdown`, href: `/is-${iq}-iq-good` },
      { title: "What Is IQ? Complete Guide", href: "/what-is-iq" },
      { title: "IQ Score Ranges Chart", href: "/iq-score-ranges" },
      { title: "Average IQ by Age Group", href: "/iq-by-age/adults" },
      { title: "How to Improve Your IQ", href: "/how-to-improve-iq" },
    ];
  }
  return [
    { title: `Is ${iq} IQ Good? What It Means`, href: `/is-${iq}-iq-good` },
    { title: "What Is IQ? Complete Guide", href: "/what-is-iq" },
    { title: "IQ Score Ranges Explained", href: "/iq-score-ranges" },
    { title: "How to Improve Your IQ", href: "/how-to-improve-iq" },
  ];
}

interface ResultsProps {
  answers: (number | null)[];
  userName: string;
  userEmail: string;
  elapsed: number;
  challengerScore?: { score: number; percentile: number } | null;
  onShowNurture: () => void;
}

const Results = ({ answers, userName, userEmail, elapsed, challengerScore, onShowNurture }: ResultsProps) => {
  const [copied, setCopied] = useState(false);
  const [captureEmail, setCaptureEmail] = useState(userEmail || "");
  const [newsletterOptIn, setNewsletterOptIn] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const correctCount = answers.reduce((acc, a, i) => acc + (a === questions[i].correctIndex ? 1 : 0), 0);
  const iq = calculateIQ(correctCount);
  const label = getIQLabel(iq);
  const percentile = getPercentile(iq);
  const catScores = getCategoryScores(answers);
  const recommendations = getRecommendations(iq);

  const shareUrl = "https://myiqscores.com";
  const shareText = `I just scored ${iq} on a free IQ test — that's the ${percentile}th percentile! 🧠 Think you can beat me? → myiqscores.com`;

  // Fire result_viewed on mount
  useEffect(() => {
    trackResultViewed(iq);
  }, []);

  // Save score to database and send results email
  useEffect(() => {
    const saveAndEmail = async () => {
      try {
        const id = crypto.randomUUID();
        await supabase.from("leads").insert({
          id,
          name: userName,
          email: userEmail,
          iq_score: iq,
          correct_answers: correctCount,
        });

        await supabase.functions.invoke("send-transactional-email", {
          body: {
            templateName: "iq-results",
            recipientEmail: userEmail,
            idempotencyKey: `iq-results-${id}`,
            templateData: {
              name: userName,
              iqScore: iq,
              label,
              percentile,
              correctCount,
              totalQuestions: questions.length,
            },
          },
        });
      } catch (e) {
        console.error("Failed to save score or send email:", e);
      }
    };
    saveAndEmail();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(`${shareText}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    trackResultShared("copy");
  };

  const handleChallenge = () => {
    const code = Math.random().toString(36).slice(2, 8).toUpperCase();
    localStorage.setItem(`iq_challenge_${code}`, JSON.stringify({ score: iq, percentile }));
    const challengeUrl = `https://myiqscores.com/test?ref=${code}`;
    navigator.clipboard.writeText(`I just scored ${iq} on this IQ test 🧠 Think you can beat me? Try it free: ${challengeUrl}`);
    toast.success("Challenge link copied! Send it to a friend");
    trackResultShared("challenge");
    supabase.from("referrals").insert({ referrer_email: userEmail, platform: "challenge" }).then(() => {});
  };

  const handleShare = (platform: string) => {
    trackResultShared(platform as "twitter" | "facebook" | "linkedin" | "whatsapp");
    supabase.from("referrals").insert({ referrer_email: userEmail, platform }).then(() => {});
  };

  const handleEmailCapture = (e: React.FormEvent) => {
    e.preventDefault();
    if (!captureEmail) return;
    localStorage.setItem("iq_report_signup", JSON.stringify({
      email: captureEmail,
      score: iq,
      newsletter: newsletterOptIn,
      savedAt: new Date().toISOString(),
    }));
    setEmailSubmitted(true);
  };

  const catColors: Record<string, string> = {
    "Pattern Recognition": "hsl(var(--primary))",
    "Logical Reasoning": "hsl(var(--secondary))",
    "Verbal": "hsl(var(--success))",
    "Spatial": "#F59E0B",
    "Numerical": "#EC4899",
  };

  return (
    <motion.div
      className="min-h-screen px-4 pt-24 pb-16"
      variants={stagger}
      initial="hidden"
      animate="show"
    >
      <div className="max-w-2xl mx-auto">

        {/* Top leaderboard ad — desktop only */}
        <div className="hidden sm:flex justify-center mb-6">
          <AdUnit slotId={AD_SLOTS.resultsTop} format="display" size="728x90" />
        </div>

        {/* Challenger comparison — shown when arriving via ?ref= */}
        {challengerScore && (
          <motion.div
            variants={fadeUp}
            className="glass-card p-5 mb-6 text-center"
            style={{ border: "1px solid rgba(0,229,255,0.2)" }}
          >
            <p className="text-sm text-muted-foreground mb-3">You were challenged — here's how you compare:</p>
            <div className="flex items-center justify-center gap-8">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Their score</p>
                <p className="text-3xl font-heading font-bold text-muted-foreground">{challengerScore.score}</p>
                <p className="text-xs text-muted-foreground/60">{challengerScore.percentile}th percentile</p>
              </div>
              <div className="text-2xl font-heading font-bold text-primary">vs</div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Your score</p>
                <p className="text-3xl font-heading font-bold gradient-text"><AnimatedNumber target={iq} /></p>
                <p className="text-xs text-muted-foreground/60">{percentile}th percentile</p>
              </div>
            </div>
            {iq > challengerScore.score ? (
              <p className="mt-3 text-success font-semibold text-sm">🏆 You win! You scored higher.</p>
            ) : iq < challengerScore.score ? (
              <p className="mt-3 text-muted-foreground text-sm">They beat you this time — try again?</p>
            ) : (
              <p className="mt-3 text-primary text-sm">It's a tie! Impressive.</p>
            )}
          </motion.div>
        )}

        {/* SECTION A: Free Results */}
        <motion.div variants={fadeUp} className="text-center mb-10">
          <p className="text-muted-foreground text-sm mb-4">
            {userName ? `${userName}, your` : "Your"} Estimated IQ Score
          </p>
          <div className="relative inline-block">
            <div className="text-7xl sm:text-8xl font-heading font-extrabold gradient-text">
              <AnimatedNumber target={iq} />
            </div>
            <motion.div
              className="absolute -inset-6 rounded-full border-2 border-primary/30"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.5, type: "spring" }}
              style={{ animation: "pulse-glow 3s ease-in-out infinite" }}
            />
          </div>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg font-heading font-semibold text-primary"
          >
            {label}
          </motion.p>
          {elapsed > 0 && (
            <p className="text-xs text-muted-foreground/60 mt-2">
              Completed in {formatElapsed(elapsed)}
            </p>
          )}
        </motion.div>

        <motion.div variants={fadeUp} className="glass-card p-6 mb-4">
          <BellCurve iq={iq} />
          <p className="text-center text-sm text-muted-foreground mt-4">
            You scored higher than <span className="text-foreground font-semibold">{percentile}%</span> of test takers
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="glass-card p-6 mb-4">
          {/* IQ Certificate */}
          <IQCertificate
            name={userName}
            score={iq}
            percentile={`${percentile}th`}
            classification={label}
          />

          <h3 className="font-heading font-bold text-foreground mb-4 mt-6">Category Breakdown</h3>
          <div className="space-y-3">
            {categories.map((cat) => {
              const { correct, total } = catScores[cat];
              const pct = (correct / total) * 100;
              return (
                <div key={cat}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">{cat}</span>
                    <span className="text-foreground font-medium">{correct}/{total}</span>
                  </div>
                  <div className="h-2 rounded-full bg-[rgba(255,255,255,0.06)] overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: catColors[cat] }}
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Understanding your score — limitations, honestly stated */}
        <motion.div variants={fadeUp} className="glass-card p-6 mb-4">
          <h3 className="font-heading font-bold text-foreground mb-2">What This Score Means — and What It Doesn't</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            Your result of <span className="text-foreground font-medium">{iq}</span> is an{" "}
            <span className="text-foreground font-medium">estimated IQ-style score</span> based on your
            performance across 30 reasoning questions in five cognitive domains. It places you at
            approximately the {percentile}th percentile relative to a normal distribution with a mean of
            100 and a standard deviation of 15.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            This is an educational estimate, not a clinical measurement. Professionally administered
            tests such as the WAIS or Stanford-Binet are conducted one-on-one by licensed psychologists,
            take over an hour, and are normed on large representative samples. A short online test cannot
            match that precision — factors like fatigue, distraction, device, and familiarity with
            question formats can all shift your result by several points.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This score is not a psychological diagnosis and should not be used for medical, employment,
            or educational placement decisions. Read more in our{" "}
            <Link to="/methodology" className="text-primary hover:underline">methodology</Link> and{" "}
            <Link to="/disclaimer" className="text-primary hover:underline">disclaimer</Link>.
          </p>
        </motion.div>

        {/* Mid-page ad (after limitations section) */}
        <div className="flex justify-center mb-4">
          <AdUnit slotId={AD_SLOTS.resultsMid} format="display" size="300x250" />
        </div>

        {/* SECTION B: Premium Report Upsell */}
        <motion.div
          variants={fadeUp}
          className="glass-card p-6 sm:p-8 mb-4 relative overflow-hidden"
          style={{
            border: "1px solid rgba(0, 229, 255, 0.2)",
            animation: "pulse-glow 3s ease-in-out infinite",
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Lock className="w-5 h-5 text-primary" />
            <h3 className="font-heading font-bold text-foreground text-lg">Unlock Your Full Cognitive Report</h3>
          </div>
          <p className="text-muted-foreground text-sm mb-5">
            Get a detailed 12-page analysis of your cognitive strengths, weaknesses, and personalized improvement plan.
          </p>
          <div className="glass-card p-4 mb-5 space-y-2 text-sm text-muted-foreground">
            {[
              "Detailed score breakdown by all 5 categories",
              "Cognitive strengths & weaknesses deep-dive",
              "Personalized brain training recommendations",
              "How you compare to your age group",
              "Printable IQ Certificate with your name & score",
              "Historical IQ percentile ranking",
              "Shareable social media certificate image",
            ].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-success shrink-0" />
                <span>{t}</span>
              </div>
            ))}
          </div>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-2xl font-heading font-bold text-success">$7.99</span>
            <span className="text-sm text-muted-foreground">one-time purchase</span>
          </div>
          <button
            onClick={() => {
              const url = `${PREMIUM_REPORT_LINK}?prefilled_email=${encodeURIComponent(userEmail)}`;
              window.open(url, "_blank");
            }}
            className="w-full py-3.5 rounded-lg font-heading font-bold text-base bg-success hover:bg-success/90 text-white transition-all hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]"
          >
            Get My Full Report — $7.99
          </button>
          <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground mt-3">
            <Shield className="w-3.5 h-3.5" />
            <span>🔒 Secure payment via Stripe · 30-day money-back guarantee</span>
          </div>
        </motion.div>

        {/* Certificate-only option */}
        <motion.div variants={fadeUp} className="text-center mb-8">
          <button
            onClick={() => {
              const url = `${CERTIFICATE_LINK}?prefilled_email=${encodeURIComponent(userEmail)}`;
              window.open(url, "_blank");
            }}
            className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1.5"
          >
            <Award className="w-4 h-4" />
            Just want the certificate? $3.99
          </button>
        </motion.div>

        {/* SECTION C: Social Sharing */}
        <motion.div variants={fadeUp} className="glass-card p-6 mb-6">
          <h3 className="font-heading font-bold text-foreground text-center mb-4">Share Your IQ Score</h3>
          {/* Shareable score card preview */}
          <div className="glass-card p-6 mb-4 text-center max-w-sm mx-auto" style={{ border: "1px solid rgba(0,229,255,0.15)" }}>
            <p className="text-xs text-muted-foreground mb-2">My IQ Score</p>
            <p className="text-4xl font-heading font-extrabold gradient-text">{iq}</p>
            <p className="text-sm text-primary font-semibold mt-1">{label}</p>
            <p className="text-xs text-muted-foreground mt-2">Scored higher than {percentile}% of test takers</p>
            <p className="text-xs text-muted-foreground/50 mt-3">Take the test at MyIQScores.com</p>
          </div>
          <div className="flex justify-center gap-3 flex-wrap">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 hover:bg-[rgba(255,255,255,0.08)] transition-all hover:scale-105 rounded-lg"
              onClick={() => handleShare("twitter")}
              title="Share on Twitter/X"
            >
              <Twitter className="w-5 h-5 text-muted-foreground" />
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 hover:bg-[rgba(255,255,255,0.08)] transition-all hover:scale-105 rounded-lg"
              onClick={() => handleShare("facebook")}
              title="Share on Facebook"
            >
              <Facebook className="w-5 h-5 text-muted-foreground" />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 hover:bg-[rgba(255,255,255,0.08)] transition-all hover:scale-105 rounded-lg"
              onClick={() => handleShare("linkedin")}
              title="Share on LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground" />
            </a>
            {/* WhatsApp */}
            <a
              href={`https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 hover:bg-[rgba(255,255,255,0.08)] transition-all hover:scale-105 rounded-lg"
              onClick={() => handleShare("whatsapp")}
              title="Share on WhatsApp"
            >
              <svg className="w-5 h-5 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <button
              onClick={handleCopy}
              className="glass-card p-3 hover:bg-[rgba(255,255,255,0.08)] transition-all hover:scale-105 rounded-lg"
              title="Copy link"
            >
              {copied ? <Check className="w-5 h-5 text-success" /> : <Copy className="w-5 h-5 text-muted-foreground" />}
            </button>
          </div>
        </motion.div>

        {/* Challenge a Friend */}
        <motion.div variants={fadeUp} className="text-center mb-6">
          <button
            onClick={handleChallenge}
            className="border border-primary/30 text-primary hover:bg-primary/10 px-6 py-2.5 rounded-lg text-sm font-medium transition-all hover:scale-[1.02]"
          >
            🎯 Challenge a Friend
          </button>
          <p className="text-xs text-muted-foreground/50 mt-2">Generates a unique link — compare scores when they finish</p>
        </motion.div>

        {/* SECTION D: Score-Based Content Recommendations */}
        <motion.div variants={fadeUp} className="glass-card p-6 mb-6">
          <h3 className="font-heading font-bold text-foreground mb-1">Explore Your Score</h3>
          <p className="text-sm text-muted-foreground mb-4">Learn what your IQ of {iq} means in the real world.</p>
          <div className="space-y-2">
            {recommendations.map((rec) => (
              <Link
                key={rec.href}
                to={rec.href}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors py-1.5 group"
              >
                <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
                {rec.title}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* SECTION E: Email Capture */}
        <motion.div variants={fadeUp} className="glass-card p-6 mb-6">
          <h3 className="font-heading font-bold text-foreground mb-1">📧 Get Your Detailed IQ Report</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Enter your email to receive a personalized breakdown of your cognitive strengths, career recommendations based on your score, and tips to improve your IQ.
          </p>
          {emailSubmitted ? (
            <div className="text-center py-3">
              <p className="text-success font-medium">✓ Check your inbox! Your report is on the way.</p>
            </div>
          ) : (
            <form onSubmit={handleEmailCapture} className="space-y-3">
              <input
                type="email"
                value={captureEmail}
                onChange={(e) => setCaptureEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50"
              />
              <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                <input
                  type="checkbox"
                  checked={newsletterOptIn}
                  onChange={(e) => setNewsletterOptIn(e.target.checked)}
                  className="rounded border-[rgba(255,255,255,0.2)] bg-transparent accent-primary"
                />
                Also send me weekly brain teasers
              </label>
              <button
                type="submit"
                className="w-full py-2.5 rounded-lg font-medium text-sm bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 transition-all"
              >
                Send My Report
              </button>
              <p className="text-xs text-muted-foreground/50 text-center">No spam, ever. Unsubscribe anytime.</p>
            </form>
          )}
        </motion.div>

        {/* SECTION F: Email Confirmation (if email was collected upfront) */}
        {userEmail && (
          <motion.div variants={fadeUp} className="glass-card p-4 mb-6 text-center">
            <p className="text-sm text-muted-foreground">
              📧 We've sent your results summary to <span className="text-foreground">{userEmail}</span>
            </p>
            <p className="text-xs text-muted-foreground/60 mt-1">
              Check your inbox for your full score breakdown.
            </p>
          </motion.div>
        )}

        {/* Retake */}
        <motion.div variants={fadeUp} className="text-center mb-2">
          <button
            onClick={() => window.location.assign("/test")}
            className="border border-[rgba(255,255,255,0.15)] text-muted-foreground hover:text-foreground hover:border-[rgba(255,255,255,0.3)] px-6 py-2.5 rounded-lg text-sm font-medium transition-all"
          >
            ↻ Retake the Test
          </button>
        </motion.div>

        {/* Bottom results ad */}
        <div className="flex justify-center mt-6">
          <AdUnit slotId={AD_SLOTS.resultsBottom} format="display" size="responsive" className="w-full" />
        </div>
      </div>
    </motion.div>
  );
};

export default Results;
