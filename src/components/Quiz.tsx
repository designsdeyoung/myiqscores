import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { questions } from "@/data/questions";
import { Check, Zap } from "lucide-react";
import { trackQuizQuestionAnswered, trackQuizCompleted } from "@/lib/analytics";
import AdUnit from "./AdUnit";
import { AD_SLOTS } from "@/config/adsense";

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

// Ad cadence: one ad opportunity per 5-question block (6 per completed quiz,
// plus the two section-break screens). The ad slot is keyed by block — NOT by
// question — so moving through questions within a block never forces a new ad
// request. This keeps request volume reasonable and viewability high, per
// Google Publisher Policies on ad refresh and accidental-click avoidance.
const QUESTIONS_PER_AD_BLOCK = 5;

const Quiz = ({ onComplete }: QuizProps) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(30).fill(null));
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const [direction, setDirection] = useState(1);
  const [showInterstitial, setShowInterstitial] = useState(false);
  const [interstitialSection, setInterstitialSection] = useState(1);

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

  const handleSelect = (i: number) => {
    setSelectedOption(i);
    const a = [...answers];
    a[currentQ] = i;
    setAnswers(a);
    trackQuizQuestionAnswered(currentQ + 1);
  };

  const handleNext = () => {
    if (currentQ === 9 || currentQ === 19) {
      setInterstitialSection(currentQ === 9 ? 1 : 2);
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
  const adBlock = Math.floor(currentQ / QUESTIONS_PER_AD_BLOCK);

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

          <button onClick={continueAfterInterstitial} className="glow-button px-8 py-3">
            Continue →
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

        {/* Section-break ad — below the card, well clear of the Continue button */}
        <div className="w-full max-w-lg mt-8 flex justify-center">
          <AdUnit
            slotId={AD_SLOTS.quizInterstitial}
            format="display"
            size="300x250"
          />
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
            Question <span className="text-foreground">{currentQ + 1}</span> of 30
          </span>
          <span className="font-mono text-xs text-muted-foreground">
            ⏱ {formatTime(elapsed)}
          </span>
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

      {/* Main content. Ad units live OUTSIDE the per-question animation and are
          keyed by 5-question block, so a new ad request only happens once per
          block — never on every question. */}
      <div className="flex-1 flex items-center justify-center px-4 pt-16 pb-8">
        <div className="w-full max-w-2xl">
          {/* Desktop leaderboard ad — hidden on mobile, refreshes per 5-question block */}
          <div className="hidden sm:flex justify-center mb-4">
            <AdUnit
              key={`quiz-top-${adBlock}`}
              slotId={AD_SLOTS.quizTop}
              format="display"
              size="728x90"
            />
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentQ}
              custom={direction}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 50 }}
              transition={{ duration: 0.18, ease: "easeInOut" }}
            >
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

              {/* Next button */}
              <div className="mt-5 flex justify-end">
                <button
                  onClick={handleNext}
                  disabled={selectedOption === null}
                  className="glow-button text-sm px-6 py-3"
                >
                  {currentQ === 29 ? "See My Results →" : "Next →"}
                </button>
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

          {/* Bottom rectangle ad — below the progress strip, well clear of the
              Next button, refreshes once per 5-question block */}
          <div className="mt-8 flex justify-center">
            <AdUnit
              key={`quiz-bottom-${adBlock}`}
              slotId={AD_SLOTS.quizBottom}
              format="display"
              size="300x250"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
