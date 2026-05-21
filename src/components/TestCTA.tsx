import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface TestCTAProps {
  heading?: string;
  subtext?: string;
  className?: string;
  variant?: "default" | "compact" | "banner";
}

const BADGES = ["Free", "No Sign-Up", "Instant Results"];

const TestCTA = ({
  heading = "Ready to Find Your IQ?",
  subtext = "30 questions. 15 minutes. Instant results — no sign-up, no paywall.",
  className = "",
  variant = "default",
}: TestCTAProps) => {
  if (variant === "compact") {
    return (
      <div className={`text-center ${className}`}>
        <Link to="/" className="glow-button inline-block text-base">
          Take the Free IQ Test →
        </Link>
        <div className="mt-3 flex items-center justify-center gap-4 text-xs text-muted-foreground flex-wrap">
          {BADGES.map((b) => (
            <span key={b} className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              {b}
            </span>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "banner") {
    return (
      <div
        className={`flex items-center justify-between gap-4 glass-card rounded-xl p-4 sm:p-5 ${className}`}
        style={{ borderLeft: "3px solid hsl(var(--primary))" }}
      >
        <p className="text-sm font-semibold text-foreground">
          Take the Free IQ Test — Instant Results
        </p>
        <Link to="/" className="glow-button text-sm px-5 py-2.5 flex-shrink-0">
          Start Now →
        </Link>
      </div>
    );
  }

  return (
    <div
      className={`relative rounded-2xl overflow-hidden p-[1px] ${className}`}
      style={{
        background: "linear-gradient(135deg, hsl(var(--primary) / 0.6), hsl(var(--secondary) / 0.6))",
      }}
    >
      <div className="glass-card rounded-[calc(1rem-1px)] p-8 sm:p-10 text-center relative overflow-hidden">
        <div className="absolute inset-0 shimmer opacity-40 pointer-events-none" />
        <div className="relative z-10">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3">
            {heading}
          </h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto text-sm">
            {subtext}
          </p>
          <Link
            to="/"
            className="glow-button inline-block text-lg"
            style={{ animation: "pulse-glow 3s ease-in-out infinite" }}
          >
            Start Free IQ Test →
          </Link>
          <div className="mt-5 flex items-center justify-center gap-5 text-xs text-muted-foreground flex-wrap">
            {BADGES.map((b) => (
              <span key={b} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestCTA;
