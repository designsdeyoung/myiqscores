import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import BackgroundEffect from "@/components/BackgroundEffect";
import Landing from "@/components/Landing";
import LeadCapture from "@/components/LeadCapture";
import Quiz from "@/components/Quiz";
import Processing from "@/components/Processing";
import Results from "@/components/Results";
import EmailNurture from "@/components/EmailNurture";

type Screen = "landing" | "leadCapture" | "quiz" | "processing" | "results";

const pageTransition = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" as const } },
  exit: { opacity: 0, scale: 0.98, transition: { duration: 0.25 } },
};

const Index = () => {
  const [screen, setScreen] = useState<Screen>("landing");
  const [userData, setUserData] = useState({ name: "", email: "", ageRange: "" });
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [showNurture, setShowNurture] = useState(false);

  const handleLeadSubmit = (data: { name: string; email: string; ageRange: string }) => {
    setUserData(data);
    setScreen("quiz");
  };

  const handleQuizComplete = useCallback((ans: (number | null)[]) => {
    setAnswers(ans);
    setScreen("processing");
  }, []);

  const handleProcessingDone = useCallback(() => {
    setScreen("results");
    // Show nurture bar after 10 seconds on results page
    setTimeout(() => setShowNurture(true), 10000);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BackgroundEffect />
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.div key={screen} {...pageTransition}>
          {screen === "landing" && <Landing onStart={() => setScreen("leadCapture")} />}
          {screen === "leadCapture" && <LeadCapture onSubmit={handleLeadSubmit} />}
          {screen === "quiz" && <Quiz onComplete={handleQuizComplete} />}
          {screen === "processing" && <Processing onDone={handleProcessingDone} />}
          {screen === "results" && (
            <Results
              answers={answers}
              userName={userData.name}
              userEmail={userData.email}
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
    </div>
  );
};

export default Index;
