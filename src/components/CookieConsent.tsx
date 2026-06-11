import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "myiq_cookie_consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  // Collapsed by default: the full disclosure paragraph was large enough to
  // become the page's LCP element when the banner appears post-hydration.
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // Small delay so it doesn't flash on first paint
      const t = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 z-[100] max-w-2xl mx-auto"
          role="dialog"
          aria-label="Cookie consent"
          aria-live="polite"
        >
          <div className="glass-card rounded-2xl p-5 border border-[rgba(255,255,255,0.1)] shadow-2xl"
            style={{ background: "rgba(10,14,26,0.95)", backdropFilter: "blur(20px)" }}>
            <div className="flex items-start gap-3">
              <Cookie className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground mb-1">
                  We use cookies
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We and our partners (including Google) use cookies for ads and analytics.{" "}
                  {!expanded && (
                    <button onClick={() => setExpanded(true)} className="text-primary hover:underline">
                      Learn more
                    </button>
                  )}
                </p>
                {expanded && (
                  <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                    Google AdSense uses the DART cookie to serve ads based on your visits to this
                    and other sites. You can opt out of personalized ads at{" "}
                    <a
                      href="https://www.google.com/settings/ads"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      google.com/settings/ads
                    </a>
                    . See our{" "}
                    <Link to="/privacy-policy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    for details.
                  </p>
                )}
              </div>
              <button
                onClick={decline}
                className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors ml-1"
                aria-label="Close cookie banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex gap-2 mt-4 justify-end">
              <button
                onClick={decline}
                className="px-4 py-2 text-xs font-medium text-muted-foreground hover:text-foreground border border-[rgba(255,255,255,0.1)] rounded-lg transition-colors"
              >
                Decline non-essential
              </button>
              <button
                onClick={accept}
                className="px-4 py-2 text-xs font-bold text-primary-foreground rounded-lg transition-all hover:opacity-90"
                style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))" }}
              >
                Accept all cookies
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
