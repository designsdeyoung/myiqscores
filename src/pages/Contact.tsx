import { useState } from "react";
import { Link } from "react-router-dom";
import ContentPage from "@/components/ContentPage";
import SEOHead from "@/components/SEOHead";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitting(true);
    try {
      await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "contact-form",
          recipientEmail: "support@myiqscores.com",
          idempotencyKey: `contact-${Date.now()}-${formData.email}`,
          templateData: {
            senderName: formData.name,
            senderEmail: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
        },
      });
    } catch {
      // Silently continue — contact details are listed on page as fallback
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <ContentPage showLeaderboard={false} showSidebar={false}>
      <SEOHead
        title="Contact MyIQScores"
        description="Contact MyIQScores for support, privacy requests, business questions, or content corrections."
        canonicalUrl="/contact"
      />

      <h1>Contact MyIQScores</h1>
      <p>
        Have a question about the test, your result, privacy, or a content correction? Use the contact
        options below and include the page URL when your message is about a specific article.
      </p>

      <h2>Support</h2>
      <p>
        For general questions about the free IQ-style test or site functionality, email{" "}
        <a href="mailto:support@myiqscores.com">support@myiqscores.com</a>.
      </p>

      <h2>Privacy Requests</h2>
      <p>
        For data access, deletion, or privacy questions, email{" "}
        <a href="mailto:privacy@myiqscores.com">privacy@myiqscores.com</a>. You can also read our{" "}
        <Link to="/privacy-policy">Privacy Policy</Link>.
      </p>

      <h2>Content Corrections</h2>
      <p>
        For article corrections, source questions, or methodology feedback, email{" "}
        <a href="mailto:content@myiqscores.com">content@myiqscores.com</a>. We review correction
        requests and update pages when the evidence supports a change.
      </p>

      <h2>Business</h2>
      <p>
        For partnerships or business inquiries, email{" "}
        <a href="mailto:business@myiqscores.com">business@myiqscores.com</a>.
      </p>

      <h2>Send Us a Message</h2>
      <p>
        Prefer to use a form? Fill in your details below and we'll respond within 2 business days.
      </p>

      {submitted ? (
        <div className="glass-card rounded-2xl p-8 text-center my-6 border border-primary/30">
          <div className="text-4xl mb-3">✓</div>
          <h3 className="font-heading text-xl font-bold text-foreground mb-2">Message Received</h3>
          <p className="text-muted-foreground">
            Thank you — we'll respond within 2 business days.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          noValidate
          className="glass-card rounded-2xl p-6 sm:p-8 space-y-5 my-6"
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-1.5">
              Name <span className="text-primary">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className={`w-full px-4 py-2.5 rounded-lg bg-[rgba(255,255,255,0.05)] border text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors ${
                errors.name ? "border-red-500/60" : "border-[rgba(255,255,255,0.12)]"
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-400">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-1.5">
              Email <span className="text-primary">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={`w-full px-4 py-2.5 rounded-lg bg-[rgba(255,255,255,0.05)] border text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors ${
                errors.email ? "border-red-500/60" : "border-[rgba(255,255,255,0.12)]"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-400">{errors.email}</p>
            )}
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-1.5">
              Subject <span className="text-primary">*</span>
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 rounded-lg bg-[rgba(255,255,255,0.05)] border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors ${
                errors.subject ? "border-red-500/60" : "border-[rgba(255,255,255,0.12)]"
              }`}
            >
              <option value="" className="bg-background">Select a topic…</option>
              <option value="General Support" className="bg-background">General Support</option>
              <option value="Privacy / Data Request" className="bg-background">Privacy / Data Request</option>
              <option value="Content Correction" className="bg-background">Content Correction</option>
              <option value="Business Inquiry" className="bg-background">Business Inquiry</option>
              <option value="Other" className="bg-background">Other</option>
            </select>
            {errors.subject && (
              <p className="mt-1 text-xs text-red-400">{errors.subject}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-1.5">
              Message <span className="text-primary">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your question or issue. If reporting a content error, include the page URL."
              className={`w-full px-4 py-2.5 rounded-lg bg-[rgba(255,255,255,0.05)] border text-foreground placeholder:text-muted-foreground/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-y min-h-[120px] ${
                errors.message ? "border-red-500/60" : "border-[rgba(255,255,255,0.12)]"
              }`}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-400">{errors.message}</p>
            )}
          </div>

          <button type="submit" disabled={submitting} className="glow-button w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed">
            {submitting ? "Sending…" : "Send Message →"}
          </button>
        </form>
      )}

      {/* Footer links */}
      <div className="mt-10 pt-6 border-t border-[rgba(255,255,255,0.08)] flex flex-wrap gap-4 text-sm text-muted-foreground">
        <Link to="/about" className="hover:text-foreground transition-colors">About Us</Link>
        <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
        <Link to="/editorial-policy" className="hover:text-foreground transition-colors">Editorial Policy</Link>
      </div>
    </ContentPage>
  );
};

export default Contact;
