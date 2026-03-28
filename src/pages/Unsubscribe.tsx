import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

type Status = "loading" | "valid" | "already" | "invalid" | "success" | "error";

const Unsubscribe = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    if (!token) { setStatus("invalid"); return; }

    const validate = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${token}`,
          { headers: { apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY } }
        );
        const data = await res.json();
        if (!res.ok) { setStatus("invalid"); return; }
        if (data.valid === false && data.reason === "already_unsubscribed") { setStatus("already"); return; }
        setStatus("valid");
      } catch { setStatus("error"); }
    };
    validate();
  }, [token]);

  const handleUnsubscribe = async () => {
    try {
      const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", {
        body: { token },
      });
      if (error) { setStatus("error"); return; }
      if (data?.reason === "already_unsubscribed") { setStatus("already"); return; }
      setStatus("success");
    } catch { setStatus("error"); }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "radial-gradient(ellipse at 50% 30%, #12183B 0%, #0A0E1A 70%)" }}>
      <div className="glass-card p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-heading font-bold text-foreground mb-4">
          {status === "loading" && "Loading..."}
          {status === "valid" && "Unsubscribe"}
          {status === "already" && "Already Unsubscribed"}
          {status === "invalid" && "Invalid Link"}
          {status === "success" && "Unsubscribed"}
          {status === "error" && "Something Went Wrong"}
        </h1>
        <p className="text-muted-foreground text-sm mb-6">
          {status === "valid" && "Are you sure you want to unsubscribe from MyIQScores emails?"}
          {status === "already" && "You've already been unsubscribed from our emails."}
          {status === "invalid" && "This unsubscribe link is invalid or has expired."}
          {status === "success" && "You've been successfully unsubscribed. You won't receive any more emails from us."}
          {status === "error" && "We couldn't process your request. Please try again later."}
        </p>
        {status === "valid" && (
          <button
            onClick={handleUnsubscribe}
            className="w-full py-3 rounded-lg font-heading font-bold bg-destructive hover:bg-destructive/90 text-destructive-foreground transition-all"
          >
            Confirm Unsubscribe
          </button>
        )}
      </div>
    </div>
  );
};

export default Unsubscribe;
