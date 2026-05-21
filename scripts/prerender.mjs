import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist");
const serverEntry = path.resolve(distDir, "server/entry-server.js");

// Static routes that don't come from data files.
// Dynamic slug arrays (famous people, countries, careers, etc.) are imported
// from the compiled server bundle so new entries flow through automatically.
const staticRoutes = [
  "/",
  // "/test" is the same page as "/" with canonical → "/" — excluded from sitemap
  "/what-is-iq",
  "/iq-score-ranges",
  "/average-iq-by-country",
  "/iq-vs-eq",
  "/sat-to-iq",
  "/act-to-iq",
  "/gre-to-iq",
  "/asvab-to-iq",
  "/how-to-improve-iq",
  "/highest-iq-ever",
  "/good-iq-score",
  "/genius-iq",
  "/mensa-iq-test",
  "/average-iq-us",
  "/iq-of-presidents",
  "/low-iq",
  // Hub pages
  "/average-iq",
  "/iq-test",
  "/practice-iq-test",
  "/tests/logical-reasoning",
  "/tests/pattern-recognition",
  "/tests/verbal-reasoning",
  "/tests/spatial-reasoning",
  "/tests/numerical-reasoning",
  "/tests/memory",
  "/how-it-works",
  "/disclaimer",
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
  "/privacy-policy",
  "/terms-of-service",
  "/about",
  "/methodology",
  "/editorial-policy",
  "/contact",
  "/types-of-iq-tests",
  "/iq-percentile-chart",
  "/famous-iq",
  "/iq-by-career",
  "/iq-compare",
  "/iq-by-major",
  "/iq-by-city",
  "/average-iq-by-state",
  "/blog/can-you-raise-your-iq",
  "/blog/history-of-iq-testing",
  "/blog/iq-and-income",
  "/blog/gifted-children-iq",
  "/blog/iq-and-longevity",
  "/blog/dunning-kruger-effect",
  "/blog/iq-and-age",
  "/blog/twice-exceptional-adhd-high-iq",
  "/blog/poverty-and-iq",
];

function buildRoutes({ iqScores, countrySlugs, careerSlugs, famousPersonSlugs, ageGroupSlugs, conditionSlugs, stateSlugs, mythSlugs, majorSlugs, compareSlugs, citySlugs }) {
  return [
    ...staticRoutes,
    ...iqScores.map((s) => `/is-${s}-iq-good`),
    ...countrySlugs.map((s) => `/average-iq/${s}`),
    ...careerSlugs.map((s) => `/iq-needed-for/${s}`),
    ...famousPersonSlugs.map((s) => `/famous-iq/${s}`),
    ...ageGroupSlugs.map((s) => `/iq-by-age/${s}`),
    ...conditionSlugs.map((s) => `/iq-and/${s}`),
    ...stateSlugs.map((s) => `/average-iq-by-state/${s}`),
    ...mythSlugs.map((s) => `/iq-myths/${s}`),
    ...(majorSlugs || []).map((s) => `/iq-by-major/${s}`),
    ...(compareSlugs || []).map((s) => `/iq-compare/${s}`),
    ...(citySlugs || []).map((s) => `/iq-by-city/${s}`),
  ];
}

const HIGH_PRIORITY_ROUTES = new Set([
  "/what-is-iq", "/iq-score-ranges", "/iq-percentile-chart", "/good-iq-score",
  "/genius-iq", "/how-to-improve-iq", "/average-iq-by-country", "/average-iq-us",
  "/famous-iq", "/iq-by-career", "/average-iq-by-state", "/average-iq",
  "/iq-test", "/practice-iq-test", "/types-of-iq-tests", "/iq-compare",
  "/iq-by-major", "/iq-by-city", "/highest-iq-ever", "/mensa-iq-test",
  "/low-iq", "/iq-vs-eq", "/iq-of-presidents", "/blog",
]);

function writeSitemap(routes) {
  const today = new Date().toISOString().slice(0, 10);
  const uniqueRoutes = [...new Set(routes)];
  const urls = uniqueRoutes
    .map((route) => {
      const loc = route === "/" ? "https://www.myiqscores.com" : `https://www.myiqscores.com${route}`;
      const isHome = route === "/";
      const isBlog = route.startsWith("/blog/");
      const isHub = HIGH_PRIORITY_ROUTES.has(route);
      const priority = isHome ? "1.0" : isHub ? "0.9" : isBlog ? "0.8" : "0.7";
      const changefreq = isHome ? "weekly" : isBlog ? "weekly" : isHub ? "monthly" : "monthly";
      return [
        "  <url>",
        `    <loc>${loc}</loc>`,
        `    <lastmod>${today}</lastmod>`,
        `    <changefreq>${changefreq}</changefreq>`,
        `    <priority>${priority}</priority>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  fs.writeFileSync(path.resolve(distDir, "sitemap.xml"), sitemap);
  fs.writeFileSync(path.resolve(__dirname, "../public/sitemap.xml"), sitemap);
}

async function prerender() {
  const template = fs.readFileSync(path.resolve(distDir, "index.html"), "utf-8");
  const serverModule = await import(serverEntry);
  const {
    render,
    iqScores,
    countrySlugs,
    careerSlugs,
    famousPersonSlugs,
    ageGroupSlugs,
    conditionSlugs,
    stateSlugs,
    mythSlugs,
    majorSlugs,
    compareSlugs,
    citySlugs,
  } = serverModule;

  const routes = buildRoutes({ iqScores, countrySlugs, careerSlugs, famousPersonSlugs, ageGroupSlugs, conditionSlugs, stateSlugs, mythSlugs, majorSlugs, compareSlugs, citySlugs });

  console.log(`Building ${routes.length} pages...`);

  for (const route of routes) {
    const { html: appHtml, head } = render(route);

    let finalHtml = template;

    // Inject pre-rendered app HTML into the root div
    finalHtml = finalHtml.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    // Remove static title so Helmet can inject the correct one
    finalHtml = finalHtml.replace(
      /<title>.*?<\/title>/,
      ""
    );

    if (head) {
      finalHtml = finalHtml.replace("</head>", `    ${head}\n  </head>`);
    }

    // Determine output path
    const filePath =
      route === "/"
        ? path.resolve(distDir, "index.html")
        : path.resolve(distDir, route.slice(1), "index.html");

    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(filePath, finalHtml);
    console.log(`Pre-rendered: ${route} → ${path.relative(distDir, filePath)}`);
  }

  // Clean up server build
  fs.rmSync(path.resolve(distDir, "server"), { recursive: true, force: true });
  writeSitemap(routes);

  console.log("Pre-rendering complete!");
}

prerender().catch((err) => {
  console.error("Pre-rendering failed:", err);
  process.exit(1);
});
