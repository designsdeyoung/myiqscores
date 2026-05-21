import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { questions } from "@/data/questions";
import { Check, Zap, ChevronLeft } from "lucide-react";
import { trackQuizQuestionAnswered, trackQuizCompleted } from "@/lib/analytics";

interface QuizProps {
  onComplete: (answers: (number | null)[], elapsed: number) => void;
}

// Difficulty increases through the 5 categories (6 questions each)
const DIFFICULTIES = [1,1,1,1,1,1, 2,2,2,2,2,2, 3,3,3,3,3,3, 4,4,4,4,4,4, 5,5,5,5,5,5];

// Milestone messages shown below the question card (Q10/Q20 are on interstitials)
const MILESTONES: Record<number, string> = {
  4:  "Good start! 🧠",
  14: "Halfway there — most people slow down here, but not you.",
  24: "Final stretch — 5 questions left!",
};

const adStyle: React.CSSProperties = {
  border: "1px dashed rgba(255,255,255,0.12)",
  backgroundColor: "rgba(255,255,255,0.02)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "8px",
  color: "rgba(255,255,255,0.25)",
  fontSize: "11px",
  letterSpacing: "0.05em",
  textTransform: "uppercase" as const,
};

const Quiz = ({ onComplete }: QuizProps) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(30).fill(null));
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const [direction, setDirection] = useState(1);
  const [showInterstitial, setShowInterstitial] = useState(false);
  const [interstitialSection, setInterstitialSection] = useState(1);
  const [countdown, setCountdown] = useState(5);

  // Elapsed timer — counts UP (not a countdown)
  useEffect(() => {
    const timer = setInterval(() => setElapsed(prev => prev + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const continueAfterInterstitial = useCallback(() => {
    const nextQ = interstitialSection === 1 ? 10 : 20;
    setShowInterstitial(false);
    setDirection(1);
    setSelectedOption(answers[nextQ] ?? null);
    setCurrentQ(nextQ);
  }, [interstitialSection, answers]);

  // Interstitial auto-advance countdown
  useEffect(() => {
    if (!showInterstitial) return;
    if (countdown <= 0) { continueAfterInterstitial(); return; }
    const t = setTimeout(() => setCountdown(c => c - 1), 1000);
    return () => clearTimeout(t);
  }, [showInterstitial, countdown, continueAfterInterstitial]);

  const handleSelect = (i: number) => {
    setSelectedOption(i);
    const a = [...answers];
    a[currentQ] = i;
    setAnswers(a);
    trackQuizQuestionAnswered(currentQ + 1);
  };

  const handleBack = () => {
    if (currentQ === 0) return;
    setDirection(-1);
    const prevQ = currentQ - 1;
    setSelectedOption(answers[prevQ] ?? null);
    setCurrentQ(prevQ);
  };

  // Keyboard shortcuts: 1-4 select option, Enter/ArrowRight advances, ArrowLeft goes back
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (showInterstitial) return;
      if (e.key >= "1" && e.key <= "4") {
        const idx = parseInt(e.key) - 1;
        if (idx < questions[currentQ].options.length) {
          setSelectedOption(idx);
          setAnswers((prev) => { const a = [...prev]; a[currentQ] = idx; return a; });
        }
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentQ, showInterstitial]);

  const handleNext = () => {
    if (currentQ === 9 || currentQ === 19) {
      setInterstitialSection(currentQ === 9 ? 1 : 2);
      setCountdown(5);
      setShowInterstitial(true);
      return;
    }
    if (currentQ === 29) {
      const answeredCount = answers.filter((a) => a !== null).length;
      trackQuizCompleted(answeredCount, elapsed);
      onComplete(answers, elapsed);
      return;
    }
    setDirection(1);
    setSelectedOption(answers[currentQ + 1] ?? null);
    setCurrentQ(q => q + 1);
  };

  const progress = ((currentQ + 1) / 30) * 100;
  const progressColor = progress >= 50 ? "#22c55e" : "hsl(var(--primary))";
  const q = questions[currentQ];
  const difficulty = DIFFICULTIES[currentQ];
  const milestone = MILESTONES[currentQ];

  // ── INTERSTITIAL SCREEN ──────────────────────────────────────────────
  if (showInterstitial) {
    const done = interstitialSection * 10;
    const interPct = (done / 30) * 100;
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-16 pb-8">
        <div className="w-full max-w-lg glass-card p-8 text-center">
          <div className="text-5xl mb-3">✓</div>
          <h2 className="font-heading font-bold text-2xl text-foreground mb-2">
            Section {interstitialSection} Complete!
          </h2>
          <p className="text-muted-foreground mb-1">
            You've answered <span className="text-foreground font-semibold">{done}</span> of 30 questions
          </p>
          <p className="text-primary font-medium text-sm mb-4">
            {interstitialSection === 1
              ? "You're in the zone!"
              : "Almost done! Your brain is warmed up now."}
          </p>
          <p className="text-xs text-muted-foreground mb-6">
            Fun fact: The average person takes 12 minutes to complete this test.
          </p>

          {/* Interstitial ad placeholder */}
          <div
            id="ad-quiz-interstitial"
            className="ad-placeholder mx-auto mb-6"
            style={{ ...adStyle, width: "336px", height: "280px" }}
          >
            Advertisement (336×280)
          </div>

          <p className="text-sm text-muted-foreground mb-4">
            Auto-continue in{" "}
            <span className="text-foreground font-semibold">{countdown}</span>{" "}
            second{countdown !== 1 ? "s" : ""}…
          </p>
          <button onClick={continueAfterInterstitial} className="glow-button px-8 py-3">
            Continue Now →
          </button>

          {/* Progress bar */}
          <div className="mt-8">
            <div className="flex justify-between text-xs text-muted-foreground mb-2">
              <span>{done} / 30 questions</span>
              <span>{Math.round(interPct)}%</span>
            </div>
            <div className="h-2 rounded-full bg-[rgba(255,255,255,0.05)] overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${interPct}%`, backgroundColor: "#22c55e" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── QUESTION VIEW ────────────────────────────────────────────────────
  return (
    <div className="min-h-screen flex flex-col pt-16">
      {/* Fixed top bar: question counter + elapsed timer + progress bar */}
      <div className="fixed top-16 left-0 right-0 z-40 glass-card border-b border-[rgba(255,255,255,0.06)]">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <span className="text-sm text-muted-foreground font-medium">
            Question <span className="text-foreground font-bold">{currentQ + 1}</span> of 30
            <span className="hidden sm:inline text-xs ml-2 text-muted-foreground/50">· {q.category}</span>
          </span>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-muted-foreground">
              ⏱ {formatTime(elapsed)}
            </span>
            {currentQ > 0 && elapsed > 0 && (
              <span className="hidden sm:inline text-xs text-muted-foreground/50">
                ~{formatTime(Math.round((elapsed / currentQ) * (30 - currentQ)))} left
              </span>
            )}
          </div>
        </div>
        <div className="h-0.5 bg-[rgba(255,255,255,0.05)]">
          <motion.div
            className="h-full"
            style={{ backgroundColor: progressColor }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Main content — everything inside AnimatePresence so all content
          (including ad placeholders) remounts on each question, refreshing impressions */}
      <div className="flex-1 flex items-center justify-center px-4 pt-16 pb-8">
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentQ}
              custom={direction}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 50 }}
              transition={{ duration: 0.18, ease: "easeInOut" }}
            >
              {/* Desktop leaderboard ad — hidden on mobile */}
              <div
                id="ad-quiz-top"
                className="ad-placeholder hidden sm:flex justify-center items-center mx-auto mb-4"
                style={{ ...adStyle, width: "728px", height: "90px" }}
              >
                Advertisement (728×90 — Desktop Only)
              </div>

              {/* Question card */}
              <div className="glass-card p-6 sm:p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {q.category}
                  </span>
                  <span
                    className="text-xs text-muted-foreground/50 font-mono tracking-widest"
                    title={`Difficulty ${difficulty} / 5`}
                  >
                    {"●".repeat(difficulty)}{"○".repeat(5 - difficulty)}
                  </span>
                </div>

                <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground leading-snug mb-8">
                  {q.question}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {q.options.map((opt, i) => {
                    const isSelected = selectedOption === i;
                    return (
                      <motion.button
                        key={i}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleSelect(i)}
                        className={`relative text-left p-4 rounded-xl border transition-all duration-200 ${
                          isSelected
                            ? "border-primary bg-primary/10 shadow-[0_0_20px_rgba(0,229,255,0.15)]"
                            : "border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] hover:border-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.06)]"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className={`text-sm sm:text-base ${isSelected ? "text-foreground" : "text-muted-foreground"}`}>
                            <span className="font-medium text-foreground/60 mr-2">
                              {String.fromCharCode(65 + i)})
                            </span>
                            {opt}
                          </span>
                          {isSelected && (
                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="shrink-0">
                              <Check className="w-5 h-5 text-primary" />
                            </motion.div>
                          )}
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Keyboard shortcut hint — desktop only */}
              <p className="hidden sm:block text-xs text-muted-foreground/40 text-right mt-2">
                Press <kbd className="font-mono bg-[rgba(255,255,255,0.06)] px-1.5 py-0.5 rounded text-[10px]">1</kbd>–<kbd className="font-mono bg-[rgba(255,255,255,0.06)] px-1.5 py-0.5 rounded text-[10px]">4</kbd> to select
              </p>

              {/* Milestone encouragement message */}
              {milestone && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 glass-card p-4 rounded-xl border border-primary/20"
                >
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-400 shrink-0" />
                    <span className="text-sm text-muted-foreground">{milestone}</span>
                  </div>
                </motion.div>
              )}

              {/* Navigation buttons */}
              <div className="mt-5 flex items-center justify-between">
                <button
                  onClick={handleBack}
                  disabled={currentQ === 0}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed px-3 py-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  disabled={selectedOption === null}
                  className="glow-button text-sm px-6 py-3"
                >
                  {currentQ === 29 ? "See My Results →" : "Next →"}
                </button>
              </div>

              {/* Mobile bottom ad (300×250) — hidden on desktop */}
              <div
                id="ad-quiz-mobile"
                className="sm:hidden mt-5 flex justify-center"
              >
                <div
                  className="ad-placeholder"
                  style={{ ...adStyle, width: "300px", height: "250px" }}
                >
                  Advertisement (300×250)
                </div>
              </div>

              {/* Desktop bottom rectangle ad (336×280) — hidden on mobile */}
              <div
                id="ad-quiz-bottom"
                className="hidden sm:flex justify-center mt-5"
              >
                <div
                  className="ad-placeholder"
                  style={{ ...adStyle, width: "336px", height: "280px" }}
                >
                  Advertisement (336×280)
                </div>
              </div>

              {/* Bottom progress strip */}
              <div className="mt-5">
                <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
                  <span>{currentQ + 1} / 30</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-[rgba(255,255,255,0.05)] overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: progressColor }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
