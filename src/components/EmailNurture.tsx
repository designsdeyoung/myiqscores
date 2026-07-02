import { motion } from "framer-motion";
import { useState } from "react";
import { X, Brain } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { trackNewsletterSubscribed } from "@/lib/analytics";

interface EmailNurtureProps {
  email: string;
  onClose: () => void;
}

const EmailNurture = ({ email, onClose }: EmailNurtureProps) => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async () => {
    setSubscribed(true);
    trackNewsletterSubscribed("nurture_bar");
    const { error } = await supabase.from("leads").insert({
      email,
      name: "Subscriber",
      newsletter_opt_in: true,
    });
    if (error) {
      console.error("Newsletter subscribe failed:", error);
    }
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 p-4"
    >
      <div className="glass-card border border-primary/20 max-w-lg mx-auto p-5 relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-muted-foreground hover:text-foreground">
          <X className="w-4 h-4" />
        </button>
        {subscribed ? (
          <div className="text-center py-2">
            <Brain className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-foreground font-heading font-bold">You're in! 🎉</p>
            <p className="text-sm text-muted-foreground mt-1">Weekly brain training tips coming to your inbox.</p>
          </div>
        ) : (
          <>
            <p className="font-heading font-bold text-foreground text-sm mb-1">
              Want to improve your IQ? 🧠
            </p>
            <p className="text-xs text-muted-foreground mb-3">
              Get free weekly brain training tips delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                defaultValue={email}
                readOnly
                className="flex-1 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-lg px-3 py-2 text-foreground text-sm"
              />
              <button
                onClick={handleSubscribe}
                className="glow-button text-xs px-4 py-2"
              >
                Subscribe
              </button>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default EmailNurture;
