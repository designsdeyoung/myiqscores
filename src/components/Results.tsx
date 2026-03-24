import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Shield, Twitter, Facebook, Linkedin, Copy, Check, Lock } from "lucide-react";
import { questions } from "@/data/questions";
import { calculateIQ, getIQLabel, getPercentile, getCategoryScores, categories } from "@/data/questions";

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
    const iqVal = 55 + (x / width) * 90; // 55-145 range
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
          <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline points={points.join(" ")} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <polygon points={`0,${height} ${points.join(" ")} ${width},${height}`} fill="url(#bellGrad)" />
      <motion.circle
        cx={markerX} cy={markerY} r="5" fill="#00E5FF"
        initial={{ scale: 0 }} animate={{ scale: 1 }}
        transition={{ delay: 1.6, type: "spring", stiffness: 300 }}
      />
      <motion.circle
        cx={markerX} cy={markerY} r="10" fill="none" stroke="#00E5FF" strokeWidth="1" opacity="0.4"
        initial={{ scale: 0 }} animate={{ scale: [1, 1.5, 1] }}
        transition={{ delay: 1.8, duration: 2, repeat: Infinity }}
      />
      <text x={markerX} y={height + 15} textAnchor="middle" fill="#00E5FF" fontSize="10" fontFamily="var(--font-mono)">
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

  const correctCount = answers.reduce((acc, a, i) => acc + (a === questions[i].correctIndex ? 1 : 0), 0);
  const iq = calculateIQ(correctCount);
  const label = getIQLabel(iq);
  const percentile = getPercentile(iq);
  const catScores = getCategoryScores(answers);

  const shareText = `I scored ${iq} on the MyIQScores IQ Test! 🧠 Take yours:`;
  const shareUrl = window.location.href;

  const handleCopy = () => {
    navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePremium = () => {
    alert("Payment integration coming soon — your results have been saved!");
  };

  const catColors: Record<string, string> = {
    "Pattern Recognition": "#00E5FF",
    "Logical Reasoning": "#8B5CF6",
    "Verbal": "#22C55E",
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
        {/* IQ Score */}
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

        {/* Bell curve */}
        <motion.div variants={fadeUp} className="glass-card p-6 mb-4">
          <BellCurve iq={iq} />
          <p className="text-center text-sm text-muted-foreground mt-4">
            You scored higher than <span className="text-foreground font-semibold">{percentile}%</span> of test takers
          </p>
        </motion.div>

        {/* Category breakdown */}
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

        {/* Premium upsell */}
        <motion.div variants={fadeUp} className="glass-card p-6 sm:p-8 mb-8 border border-primary/20 relative overflow-hidden">
          <div className="absolute top-3 right-3 bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded-full">
            Limited Time — 75% Off
          </div>
          <div className="flex items-center gap-2 mb-2">
            <Lock className="w-5 h-5 text-primary" />
            <h3 className="font-heading font-bold text-foreground text-lg">Unlock Your Full Cognitive Report</h3>
          </div>
          <p className="text-muted-foreground text-sm mb-5">
            Get a 12-page detailed analysis of your cognitive strengths, weaknesses, and personalized improvement tips.
          </p>
          <div className="glass-card p-4 mb-5 space-y-2 text-sm text-muted-foreground" style={{ filter: "blur(0px)" }}>
            {[
              "Detailed score breakdown by category",
              "Cognitive strengths & weaknesses analysis",
              "Personalized brain training recommendations",
              "Comparison with your age group",
              "Printable PDF certificate with your IQ score",
              "Historical IQ percentile ranking",
            ].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-success shrink-0" />
                <span>{t}</span>
              </div>
            ))}
          </div>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-muted-foreground line-through text-sm">$19.99</span>
            <span className="text-2xl font-heading font-bold text-foreground">$4.99</span>
          </div>
          <button onClick={handlePremium} className="glow-button w-full text-base mb-3">
            Get My Full Report — $4.99
          </button>
          <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <Shield className="w-3.5 h-3.5" />
            <span>30-day money-back guarantee</span>
          </div>
        </motion.div>

        {/* Email confirmation */}
        <motion.div variants={fadeUp} className="glass-card p-4 mb-6 text-center">
          <p className="text-sm text-muted-foreground">
            📧 We've emailed your results summary to <span className="text-foreground">{userEmail}</span>
          </p>
        </motion.div>

        {/* Social sharing */}
        <motion.div variants={fadeUp} className="text-center mb-8">
          <p className="text-sm text-muted-foreground mb-3">Share your IQ score</p>
          <div className="flex justify-center gap-3">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 hover:bg-[rgba(255,255,255,0.08)] transition-colors rounded-lg"
            >
              <Twitter className="w-5 h-5 text-muted-foreground" />
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 hover:bg-[rgba(255,255,255,0.08)] transition-colors rounded-lg"
            >
              <Facebook className="w-5 h-5 text-muted-foreground" />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 hover:bg-[rgba(255,255,255,0.08)] transition-colors rounded-lg"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground" />
            </a>
            <button onClick={handleCopy} className="glass-card p-3 hover:bg-[rgba(255,255,255,0.08)] transition-colors rounded-lg">
              {copied ? <Check className="w-5 h-5 text-success" /> : <Copy className="w-5 h-5 text-muted-foreground" />}
            </button>
          </div>
        </motion.div>

        {/* Challenge a friend */}
        <motion.div variants={fadeUp} className="text-center">
          <button
            onClick={() => {
              navigator.clipboard.writeText(shareUrl);
              onShowNurture();
            }}
            className="text-primary hover:underline text-sm font-medium"
          >
            🎯 Challenge a Friend
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Results;
