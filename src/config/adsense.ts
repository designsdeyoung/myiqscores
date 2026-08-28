// ─── AdSense configuration ───────────────────────────────────────────────
// ADSENSE_PUB_ID is the site's real publisher ID. It must match:
//   - public/ads.txt          (google.com, pub-… — ads.txt uses the "pub-"
//                              form WITHOUT the "ca-" prefix, per Google docs)
//   - index.html              (adsbygoogle.js ?client= parameter)
//
// ACTIVATION (after AdSense approval):
//   1. Create ad units in the AdSense dashboard and copy each numeric slot ID.
//   2. Replace the "slot-XXXXXXXXX…" placeholders below with the numeric IDs.
//   3. Flip ADSENSE_ENABLED to true.
// Until then, every AdUnit renders nothing (no empty boxes, no fake requests).
export const ADSENSE_PUB_ID = "ca-pub-5051305701488211";
export const ADSENSE_ENABLED = false;

export const AD_SLOTS = {
  leaderboard: "slot-XXXXXXXXX1",
  inArticle1: "slot-XXXXXXXXX2",
  inArticle2: "slot-XXXXXXXXX3",
  sidebar: "slot-XXXXXXXXX4",
  betweenQuestions: "slot-XXXXXXXXX5",
  resultsTop: "slot-XXXXXXXXX6",
  resultsBottom: "slot-XXXXXXXXX7",
  multiplex: "slot-XXXXXXXXX8",
  // Quiz per-question ad zones
  quizTop: "slot-XXXXXXXXX9",
  quizBottom: "slot-XXXXXXXXXA",
  quizMobile: "slot-XXXXXXXXXB",
  quizInterstitial: "slot-XXXXXXXXXC",
  // Results page mid zone
  resultsMid: "slot-XXXXXXXXXD",
};
