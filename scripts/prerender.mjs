import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

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
  "/tests/abstract-reasoning",
  "/what-is-intelligence",
  "/questions",
  "/tools",
  "/tools/iq-percentile-calculator",
  "/tools/sat-to-iq-converter",
  "/tools/iq-rarity",
  "/tools/celebrity-iq-match",
  "/tools/reaction-time-test",
  "/tools/number-memory-test",
  "/iq-test-for-kids",
  "/iq-test-for-teens",
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

function buildRoutes({ iqScores, countrySlugs, careerSlugs, famousPersonSlugs, ageGroupSlugs, conditionSlugs, stateSlugs, mythSlugs, majorSlugs, compareSlugs, citySlugs, questionSlugs }) {
  return [
    ...staticRoutes,
    ...(questionSlugs || []).map((s) => `/questions/${s}`),
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

const SITE_URL = "https://www.myiqscores.com";
const repoRoot = path.resolve(__dirname, "..");

// Last git commit date (YYYY-MM-DD) across one or more files; falls back to today.
const gitDateCache = new Map();
function gitDate(...files) {
  let max = "";
  for (const file of files) {
    if (!gitDateCache.has(file)) {
      try {
        const out = execSync(`git log -1 --format=%cs -- "${file}"`, {
          cwd: repoRoot,
          encoding: "utf-8",
        }).trim();
        gitDateCache.set(file, out);
      } catch {
        gitDateCache.set(file, "");
      }
    }
    const d = gitDateCache.get(file);
    if (d > max) max = d;
  }
  return max || new Date().toISOString().slice(0, 10);
}

// Map static routes to their page component file by parsing App.tsx, so
// each route's <lastmod> reflects the component's last real content change.
function buildStaticRouteSources() {
  const appSrc = fs.readFileSync(path.resolve(repoRoot, "src/App.tsx"), "utf-8");
  const imports = new Map();
  for (const m of appSrc.matchAll(/import\s+(\w+)\s+from\s+"\.\/((?:pages|components)\/[^"]+)"/g)) {
    imports.set(m[1], `src/${m[2]}`);
  }
  const routeToFile = new Map();
  for (const m of appSrc.matchAll(/<Route\s+path="(\/[^"]*)"\s+element={<(\w+)\s*\/>}/g)) {
    const file = imports.get(m[2]);
    if (file) routeToFile.set(m[1], file);
  }
  return routeToFile;
}

// Segmented sitemaps. Each route lands in exactly the first segment whose
// matcher hits; lastmod comes from the data files powering that template.
const SEGMENTS = [
  {
    file: "sitemap-scores.xml",
    match: (r) => /^\/is-\d+-iq-good$/.test(r),
    sources: ["src/data/iqScoreData.ts", "src/data/iqExtendedData.ts", "src/data/iqExtendedDataMid.ts", "src/data/iqExtendedDataHigh.ts"],
  },
  {
    file: "sitemap-celebrities.xml",
    match: (r) => r.startsWith("/famous-iq/"),
    sources: ["src/data/famousIQData.ts"],
  },
  {
    file: "sitemap-countries.xml",
    match: (r) => r.startsWith("/average-iq/") || r.startsWith("/average-iq-by-state/") || r.startsWith("/iq-by-city/"),
    sources: ["src/data/countryIQData.ts", "src/data/countryExtendedData.ts", "src/data/stateIQData.ts", "src/data/cityIQData.ts"],
  },
  {
    file: "sitemap-careers.xml",
    match: (r) => r.startsWith("/iq-needed-for/") || r.startsWith("/iq-by-major/"),
    sources: ["src/data/careerIQData.ts", "src/data/careerExtendedData.ts", "src/data/majorIQData.ts"],
  },
  {
    file: "sitemap-topics.xml",
    match: (r) => r.startsWith("/iq-by-age/") || r.startsWith("/iq-and/") || r.startsWith("/iq-myths/") || r.startsWith("/iq-compare/") || r === "/questions" || r.startsWith("/questions/"),
    sources: ["src/data/ageIQData.ts", "src/data/conditionIQData.ts", "src/data/iqMythData.ts", "src/data/iqCompareData.ts", "src/data/questionsData.ts"],
  },
  {
    file: "sitemap-tools.xml",
    match: (r) => r === "/tools" || r.startsWith("/tools/"),
    sources: [],
  },
  {
    file: "sitemap-blog.xml",
    match: (r) => r === "/blog" || r.startsWith("/blog/"),
    sources: [],
  },
  {
    file: "sitemap-core.xml",
    match: () => true,
    sources: [],
  },
];

function writeFileBoth(name, content) {
  fs.writeFileSync(path.resolve(distDir, name), content);
  fs.writeFileSync(path.resolve(repoRoot, "public", name), content);
}

function urlEntry(route, lastmod) {
  const loc = route === "/" ? SITE_URL : `${SITE_URL}${route}`;
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
}

function writeSitemaps(routes) {
  const uniqueRoutes = [...new Set(routes)];
  const staticSources = buildStaticRouteSources();
  const indexEntries = [];

  for (const segment of SEGMENTS) {
    const segmentRoutes = uniqueRoutes.filter((r) => segment.match(r));
    if (segmentRoutes.length === 0) continue;
    uniqueRoutes.splice(0, uniqueRoutes.length, ...uniqueRoutes.filter((r) => !segment.match(r)));

    const segmentDate = segment.sources.length ? gitDate(...segment.sources) : null;
    let maxDate = segmentDate || "0000";
    const urls = segmentRoutes
      .map((route) => {
        const lastmod = segmentDate || (staticSources.has(route) ? gitDate(staticSources.get(route)) : gitDate("src/App.tsx"));
        if (lastmod > maxDate) maxDate = lastmod;
        return urlEntry(route, lastmod);
      })
      .join("\n");

    writeFileBoth(
      segment.file,
      `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    );
    indexEntries.push({ file: segment.file, lastmod: maxDate, count: segmentRoutes.length });
  }

  const index = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${indexEntries
    .map((e) => `  <sitemap>\n    <loc>${SITE_URL}/${e.file}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n  </sitemap>`)
    .join("\n")}\n</sitemapindex>\n`;
  writeFileBoth("sitemap.xml", index);

  console.log(
    `Sitemaps: ${indexEntries.map((e) => `${e.file.replace("sitemap-", "").replace(".xml", "")}=${e.count}`).join(", ")}`,
  );
}

async function prerender() {
  const template = fs.readFileSync(path.resolve(distDir, "index.html"), "utf-8");
  const serverModule = await import(serverEntry);
  const {
    render,
    preloadAllPages,
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
    questionSlugs,
  } = serverModule;

  const routes = buildRoutes({ iqScores, countrySlugs, careerSlugs, famousPersonSlugs, ageGroupSlugs, conditionSlugs, stateSlugs, mythSlugs, majorSlugs, compareSlugs, citySlugs, questionSlugs });

  // Resolve all lazy route modules so renderToString never hits an
  // unresolved Suspense boundary (which would prerender empty pages).
  await preloadAllPages();

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
  writeSitemaps(routes);

  console.log("Pre-rendering complete!");
}

prerender().catch((err) => {
  console.error("Pre-rendering failed:", err);
  process.exit(1);
});
