// Single source of truth for every indexable route on the site.
// Consumed by scripts/prerender.mjs (via the SSR bundle) to prerender pages
// and generate sitemap.xml. Keep in sync with the <Route> elements in App.tsx —
// the prerender script fails the build if any route here renders the 404 page.
import { iqScores } from "./data/iqScoreData";
import { countrySlugs } from "./data/countryIQData";
import { careerSlugs } from "./data/careerIQData";
import { ageGroupSlugs } from "./data/ageIQData";
import { famousPersonSlugs } from "./data/famousIQData";
import { mythSlugs } from "./data/iqMythData";
import { stateSlugs } from "./data/stateIQData";

const staticRoutes = [
  "/",
  "/test",
  "/what-is-iq",
  "/iq-score-ranges",
  "/average-iq-by-country",
  "/iq-vs-eq",
  "/sat-to-iq",
  "/act-to-iq",
  "/gre-to-iq",
  "/asvab-to-iq",
  "/average-iq-by-state",
  "/how-to-improve-iq",
  "/highest-iq-ever",
  "/good-iq-score",
  "/genius-iq",
  "/mensa-iq-test",
  "/types-of-iq-tests",
  "/iq-percentile-chart",
  "/famous-iq",
  "/iq-by-career",
  "/average-iq-us",
  "/iq-of-presidents",
  "/low-iq",
  "/about",
  "/methodology",
  "/editorial-policy",
  "/contact",
  "/privacy-policy",
  "/terms-of-service",
  "/disclaimer",
  "/cookie-policy",
  "/advertising-policy",
  "/corrections-policy",
];

const blogRoutes = [
  "/blog",
  "/blog/what-is-iq-score",
  "/blog/how-to-increase-iq",
  "/blog/iq-vs-success",
  "/blog/famous-iq-scores",
  "/blog/iq-by-country",
  "/blog/what-is-genius-iq",
  "/blog/iq-tests-accurate",
  "/blog/emotional-intelligence-vs-iq",
  "/blog/fluid-vs-crystallized-intelligence",
  "/blog/flynn-effect",
  "/blog/iq-genetics-nature-vs-nurture",
  "/blog/sleep-and-iq",
  "/blog/nutrition-and-iq",
  "/blog/iq-and-mental-health",
  "/blog/iq-and-workplace",
  "/blog/working-memory-and-iq",
  "/blog/iq-testing-in-children",
  "/blog/exercise-and-iq",
  "/blog/multiple-intelligences-theory",
  "/blog/iq-and-creativity",
  "/blog/iq-and-leadership",
];

// Routes prerendered but kept OUT of the sitemap:
// - /unsubscribe is a noindexed utility page
// - /test canonicalizes to "/" (same quiz component), and sitemaps should
//   list only canonical URLs
export const noSitemapRoutes = ["/unsubscribe", "/test"];

export const prerenderRoutes: string[] = [
  ...staticRoutes,
  ...blogRoutes,
  ...iqScores.map((s) => `/is-${s}-iq-good`),
  ...countrySlugs.map((s) => `/average-iq/${s}`),
  ...careerSlugs.map((s) => `/iq-needed-for/${s}`),
  ...ageGroupSlugs.map((s) => `/iq-by-age/${s}`),
  ...famousPersonSlugs.map((s) => `/famous-iq/${s}`),
  ...mythSlugs.map((s) => `/iq-myths/${s}`),
  ...stateSlugs.map((s) => `/average-iq-by-state/${s}`),
  ...noSitemapRoutes,
];
