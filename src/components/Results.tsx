import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Shield, Twitter, Facebook, Linkedin, Copy, Check, Lock, Award } from "lucide-react";
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

interface ResultsProps {
  answers: (number | null)[];
  userName: string;
  userEmail: string;
  onShowNurture: () => void;
}

const Results = ({ answers, userName, userEmail, onShowNurture }: ResultsProps) => {
  const [copied, setCopied] = useState(false);
  const [checkoutLoading, setCheckoutLoading] = useState<string | null>(null);

  const correctCount = answers.reduce((acc, a, i) => acc + (a === questions[i].correctIndex ? 1 : 0), 0);
  const iq = calculateIQ(correctCount);
  const label = getIQLabel(iq);
  const percentile = getPercentile(iq);
  const catScores = getCategoryScores(answers);

  const shareText = `I scored ${iq} on the MyIQScores IQ Test! 🧠 Take yours:`;
  const shareUrl = "https://myiqscores.com";

  // Save score to database
  useEffect(() => {
    const saveScore = async () => {
      try {
        await supabase.from("leads").insert({
          name: userName,
          email: userEmail,
          iq_score: iq,
          correct_answers: correctCount,
        });
      } catch (e) {
        console.error("Failed to save score:", e);
      }
    };
    saveScore();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCheckout = (product: string) => {
    const link = product === "premium_report" ? PREMIUM_REPORT_LINK : CERTIFICATE_LINK;
    const url = `${link}?prefilled_email=${encodeURIComponent(userEmail)}`;
    window.open(url, "_blank");
  };

  const handleChallenge = () => {
    navigator.clipboard.writeText(`I just scored ${iq} on this IQ test. Think you can beat me? 🧠 Try it free: myiqscores.com`);
    toast.success("Copied! Send it to a friend");

    // Track referral
    supabase.from("referrals").insert({ referrer_email: userEmail, platform: "challenge" }).then(() => {});
  };

  const handleShare = (platform: string) => {
    supabase.from("referrals").insert({ referrer_email: userEmail, platform }).then(() => {});
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
        {/* Ad slot — enable when traffic reaches 10K/mo */}

        {/* SECTION A: Free Results */}
        <motion.div variants={fadeUp} className="text-center mb-10">
          <p className="text-muted-foreground text-sm mb-4">
            {userName ? `${userName}, your` : "Your"} IQ Score
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
        </motion.div>

        <motion.div variants={fadeUp} className="glass-card p-6 mb-4">
          <BellCurve iq={iq} />
          <p className="text-center text-sm text-muted-foreground mt-4">
            You scored higher than <span className="text-foreground font-semibold">{percentile}%</span> of test takers
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="glass-card p-6 mb-8">
          <h3 className="font-heading font-bold text-foreground mb-4">Category Breakdown</h3>
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

        {/* SECTION B: Premium Report Upsell */}
        <motion.div
          variants={fadeUp}
          className="glass-card p-6 sm:p-8 mb-4 relative overflow-hidden"
          style={{
            border: "1px solid rgba(0, 229, 255, 0.2)",
            animation: "pulse-glow 3s ease-in-out infinite",
          }}
        >
          <div className="absolute top-3 right-3 bg-success/20 text-success text-xs font-bold px-2 py-1 rounded-full animate-pulse">
            60% Off — Limited Time
          </div>
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
            <span className="text-muted-foreground line-through text-sm">$19.99</span>
            <span className="text-2xl font-heading font-bold text-success">$7.99</span>
          </div>
          <button
            onClick={() => handleCheckout("premium_report")}
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
            onClick={() => handleCheckout("certificate")}
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
          <div className="flex justify-center gap-3">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`I just scored ${iq} on my IQ test! 🧠 Think you can beat me? Take the free test →`)}&url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 hover:bg-[rgba(255,255,255,0.08)] transition-all hover:scale-105 rounded-lg"
              onClick={() => handleShare("twitter")}
            >
              <Twitter className="w-5 h-5 text-muted-foreground" />
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 hover:bg-[rgba(255,255,255,0.08)] transition-all hover:scale-105 rounded-lg"
              onClick={() => handleShare("facebook")}
            >
              <Facebook className="w-5 h-5 text-muted-foreground" />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 hover:bg-[rgba(255,255,255,0.08)] transition-all hover:scale-105 rounded-lg"
              onClick={() => handleShare("linkedin")}
            >
              <Linkedin className="w-5 h-5 text-muted-foreground" />
            </a>
            <button
              onClick={handleCopy}
              className="glass-card p-3 hover:bg-[rgba(255,255,255,0.08)] transition-all hover:scale-105 rounded-lg"
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
        </motion.div>

        {/* SECTION D: Email Confirmation */}
        <motion.div variants={fadeUp} className="glass-card p-4 mb-6 text-center">
          <p className="text-sm text-muted-foreground">
            📧 We've sent your results summary to <span className="text-foreground">{userEmail}</span>
          </p>
          <p className="text-xs text-muted-foreground/60 mt-1">
            Check your inbox for your score breakdown and a special 24-hour discount on the full report.
          </p>
        </motion.div>

        {/* Ad slot — enable when traffic reaches 10K/mo */}
      </div>
    </motion.div>
  );
};

export default Results;
