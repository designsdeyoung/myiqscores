// GA4 event helpers — all calls go through trackEvent so we get
// a single safety check and easy mocking in tests.
// Tag: G-57H1Q82XZ4 (loaded via gtag in index.html)

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function trackEvent(name: string, params: Record<string, string | number>) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}

// ── Quiz flow ──────────────────────────────────────────────────────────────

export function trackQuizStarted() {
  trackEvent("quiz_started", {
    quiz_type: "iq_test",
    source_page: typeof window !== "undefined" ? window.location.pathname : "/",
  });
}

export function trackQuizQuestionAnswered(questionNumber: number) {
  trackEvent("quiz_question_answered", {
    question_number: questionNumber,
    quiz_type: "iq_test",
  });
}

export function trackQuizCompleted(questionsAnswered: number, timeSpentSeconds: number) {
  trackEvent("quiz_completed", {
    quiz_type: "iq_test",
    questions_answered: questionsAnswered,
    time_spent_seconds: timeSpentSeconds,
  });
}

// ── Results ────────────────────────────────────────────────────────────────

export function trackResultViewed(score: number) {
  trackEvent("result_viewed", {
    score,
    quiz_type: "iq_test",
  });
}

export function trackResultShared(method: "copy" | "twitter" | "facebook" | "linkedin" | "whatsapp" | "challenge") {
  trackEvent("result_shared", {
    method,
    quiz_type: "iq_test",
  });
}

// ── Conversions (mark these as Key Events in GA4 Admin) ────────────────────

export function trackEmailCaptured(source: "pre_test" | "results_inline" | "nurture_bar", newsletterOptIn = false) {
  trackEvent("email_captured", {
    source,
    newsletter_opt_in: newsletterOptIn ? 1 : 0,
  });
}

export function trackNewsletterSubscribed(source: string) {
  trackEvent("newsletter_subscribed", { source });
}

// Fires when a user clicks through to Stripe checkout. GA4 "value" +
// "currency" params make revenue show up in conversion reports.
export function trackPremiumClick(product: "premium_report" | "certificate", value: number) {
  trackEvent("premium_click", {
    product,
    value,
    currency: "USD",
  });
}

export function trackToolUsed(tool: string, params: Record<string, string | number> = {}) {
  trackEvent("tool_used", { tool, ...params });
}

export function trackHubNavigation(hub: string) {
  trackEvent("hub_navigation", { hub });
}
