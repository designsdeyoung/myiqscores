import { motion } from "framer-motion";
import { useState } from "react";
import { Shield, Lock, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { trackEmailCaptured } from "@/lib/analytics";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const ageRanges = ["Under 18", "18-24", "25-34", "35-44", "45-54", "55+"];

interface LeadCaptureProps {
  onSubmit: (data: { name: string; email: string; ageRange: string }) => void;
}

const LeadCapture = ({ onSubmit }: LeadCaptureProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ageRange, setAgeRange] = useState("");
  const [consent, setConsent] = useState(false);

  const isValid = name.trim() && email.includes("@") && ageRange && consent;

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center px-4 pt-20"
      variants={stagger}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={fadeUp} className="glass-card p-8 sm:p-10 w-full max-w-md">
        <motion.h2 variants={fadeUp} className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-2">
          Before we begin...
        </motion.h2>
        <motion.p variants={fadeUp} className="text-muted-foreground text-sm mb-6">
          Set up your profile so we can personalize your results and send your score report.
        </motion.p>

        <motion.div variants={fadeUp} className="space-y-5">
          <div>
            <label className="block text-xs text-muted-foreground mb-1.5 font-medium">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all"
            />
          </div>
          <div>
            <label className="block text-xs text-muted-foreground mb-1.5 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all"
            />
            <p className="text-xs text-muted-foreground/60 mt-1">
              <Mail className="w-3 h-3 inline mr-1" />
              We'll send your detailed score breakdown here.
            </p>
          </div>
          <div>
            <label className="block text-xs text-muted-foreground mb-1.5 font-medium">Age Range</label>
            <select
              value={ageRange}
              onChange={(e) => setAgeRange(e.target.value)}
              className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all appearance-none"
            >
              <option value="" className="bg-[#12183B]">Select age range</option>
              {ageRanges.map((r) => (
                <option key={r} value={r} className="bg-[#12183B]">{r}</option>
              ))}
            </select>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-5">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.04)] text-primary focus:ring-primary/30 accent-primary"
            />
            <span className="text-xs text-muted-foreground leading-relaxed">
              I agree to the{" "}
              <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Privacy Policy
              </a>
              . I consent to receiving my IQ test results, score report, and occasional
              follow-up emails via email. Unsubscribe anytime.
            </span>
          </label>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-6">
          <button
            onClick={() => {
              if (isValid) {
                trackEmailCaptured("pre_test");
                supabase.from("leads").insert({ name, email, age_range: ageRange }).then(({ error }) => {
                  if (error) console.error("Lead insert failed:", error);
                });
                onSubmit({ name, email, ageRange });
              }
            }}
            disabled={!isValid}
            className="glow-button w-full text-base"
          >
            Begin Test →
          </button>
        </motion.div>

        {/* Trust badges */}
        <motion.div variants={fadeUp} className="mt-6 space-y-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground/70">
            <Shield className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
            <span>We <strong className="text-foreground/80">never sell</strong> your data. Ever. Your information stays private.</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground/70">
            <Lock className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
            <span>No spam. No third parties. Unsubscribe anytime with one click.</span>
          </div>
        </motion.div>

        <motion.p variants={fadeUp} className="text-center text-xs text-muted-foreground/50 mt-4">
          100% free. No credit card. No hidden charges.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default LeadCapture;
