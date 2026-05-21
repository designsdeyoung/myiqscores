import { useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain } from "lucide-react";
import Navbar from "@/components/Navbar";
import BackgroundEffect from "@/components/BackgroundEffect";
import Landing from "@/components/Landing";
import Quiz from "@/components/Quiz";
import Processing from "@/components/Processing";
import Results from "@/components/Results";
import EmailNurture from "@/components/EmailNurture";
import SEOHead from "@/components/SEOHead";

type Screen = "landing" | "quiz" | "processing" | "results";

const pageTransition = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" as const } },
  exit: { opacity: 0, scale: 0.98, transition: { duration: 0.25 } },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "MyIQScores Free IQ Test",
  url: "https://www.myiqscores.com/test",
  description: "Take a free IQ-style reasoning test online with instant educational results.",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

const Index = () => {
  const [screen, setScreen] = useState<Screen>("landing");
  const [userData, setUserData] = useState({ name: "", email: "", ageRange: "" });
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [elapsed, setElapsed] = useState(0);
  const [showNurture, setShowNurture] = useState(false);
  const [challengerScore, setChallengerScore] = useState<{ score: number; percentile: number } | null>(null);

  // Check for ?ref= challenge param on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get("ref");
    if (ref) {
      const stored = localStorage.getItem(`iq_challenge_${ref}`);
      if (stored) {
        try {
          setChallengerScore(JSON.parse(stored));
        } catch {
          localStorage.removeItem(`iq_challenge_${ref}`);
        }
      }
    }
  }, []);

  const handleQuizComplete = useCallback((ans: (number | null)[], quizElapsed: number) => {
    setAnswers(ans);
    setElapsed(quizElapsed);
    setScreen("processing");
  }, []);

  const handleProcessingDone = useCallback(() => {
    setScreen("results");
    // Show nurture bar after 10 seconds on results page
    setTimeout(() => setShowNurture(true), 10000);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SEOHead
        title="Free IQ Test — 30 Questions, Instant Score, No Paywall | MyIQScores"
        description="Take a free online IQ-style reasoning test. 30 questions, instant educational results, score ranges, and cognitive learning guides. No sign-up or paywall."
        canonicalUrl="https://www.myiqscores.com"
        jsonLd={websiteSchema}
      />
      <BackgroundEffect />
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.div key={screen} {...pageTransition}>
          {screen === "landing" && <Landing onStart={() => setScreen("quiz")} />}
          {screen === "quiz" && <Quiz onComplete={handleQuizComplete} />}
          {screen === "processing" && <Processing onDone={handleProcessingDone} />}
          {screen === "results" && (
            <Results
              answers={answers}
              userName={userData.name}
              userEmail={userData.email}
              elapsed={elapsed}
              challengerScore={challengerScore}
              onShowNurture={() => setShowNurture(true)}
            />
          )}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {showNurture && screen === "results" && (
          <EmailNurture email={userData.email} onClose={() => setShowNurture(false)} />
        )}
      </AnimatePresence>

      {/* Footer — show on landing and results screens */}
      {(screen === "landing" || screen === "results") && (
        <footer className="relative z-10 border-t border-[rgba(255,255,255,0.06)] mt-8">
          <div className="max-w-6xl mx-auto px-4 py-12">
            {/* Footer CTA bar */}
            <div className="text-center mb-10 pb-10 border-b border-[rgba(255,255,255,0.06)]">
              <p className="text-muted-foreground text-sm mb-3">Ready to find out your IQ?</p>
              <Link to="/" className="glow-button inline-block">Take the Free IQ Test →</Link>
            </div>

            {/* 4-column link grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm mb-10">
              {/* Col 1: Learn */}
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-3">Learn</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><Link to="/what-is-iq" className="hover:text-foreground transition-colors">What Is IQ?</Link></li>
                  <li><Link to="/iq-score-ranges" className="hover:text-foreground transition-colors">IQ Score Ranges</Link></li>
                  <li><Link to="/iq-percentile-chart" className="hover:text-foreground transition-colors">IQ Bell Curve</Link></li>
                  <li><Link to="/iq-vs-eq" className="hover:text-foreground transition-colors">IQ vs EQ</Link></li>
                  <li><Link to="/how-to-improve-iq" className="hover:text-foreground transition-colors">How to Improve IQ</Link></li>
                  <li><Link to="/types-of-iq-tests" className="hover:text-foreground transition-colors">Types of IQ Tests</Link></li>
                </ul>
              </div>

              {/* Col 2: Famous IQs */}
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-3">Famous IQs</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><Link to="/famous-iq/albert-einstein" className="hover:text-foreground transition-colors">Albert Einstein</Link></li>
                  <li><Link to="/famous-iq/elon-musk" className="hover:text-foreground transition-colors">Elon Musk</Link></li>
                  <li><Link to="/famous-iq/stephen-hawking" className="hover:text-foreground transition-colors">Stephen Hawking</Link></li>
                  <li><Link to="/famous-iq/taylor-swift" className="hover:text-foreground transition-colors">Taylor Swift</Link></li>
                  <li><Link to="/famous-iq/donald-trump" className="hover:text-foreground transition-colors">Donald Trump</Link></li>
                  <li><Link to="/famous-iq" className="hover:text-foreground transition-colors">All Famous IQs</Link></li>
                </ul>
              </div>

              {/* Col 3: Tools & Tests */}
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-3">Tools &amp; Tests</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><Link to="/" className="hover:text-foreground transition-colors">Free IQ Test</Link></li>
                  <li><Link to="/iq-test" className="hover:text-foreground transition-colors">What Is an IQ Test?</Link></li>
                  <li><Link to="/practice-iq-test" className="hover:text-foreground transition-colors">Practice IQ Test</Link></li>
                  <li><Link to="/average-iq" className="hover:text-foreground transition-colors">Average IQ Score</Link></li>
                  <li><Link to="/sat-to-iq" className="hover:text-foreground transition-colors">SAT to IQ</Link></li>
                  <li><Link to="/iq-percentile-chart" className="hover:text-foreground transition-colors">IQ Percentile Chart</Link></li>
                </ul>
              </div>

              {/* Col 4: Company */}
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-3">Company</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
                  <li><Link to="/how-it-works" className="hover:text-foreground transition-colors">How It Works</Link></li>
                  <li><Link to="/methodology" className="hover:text-foreground transition-colors">Methodology</Link></li>
                  <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
                  <li><Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
                  <li><Link to="/disclaimer" className="hover:text-foreground transition-colors">Disclaimer</Link></li>
                </ul>
              </div>
            </div>

            {/* Brand row */}
            <div className="pt-6 border-t border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary" />
                <span className="font-heading font-bold text-foreground">
                  My<span className="text-primary">IQ</span>Scores<sup className="text-[8px] text-muted-foreground/50 ml-0.5">™</sup>
                </span>
                <span className="text-muted-foreground text-xs ml-2">— Free IQ estimate and learning guides.</span>
              </div>
              <span className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} MyIQScores™. All rights reserved.</span>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Index;
