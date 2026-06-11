// Site audit: inventories every prerendered page (title, meta, word count)
// and builds the internal link graph to find orphan pages (<3 inbound links).
// Run after `npm run build`. Writes AUDIT.md at repo root.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist");
const SITE_URL = "https://www.myiqscores.com";

const TEMPLATES = [
  { match: /^\/is-\d+-iq-good$/, name: "Score (IsXIQGood)", type: "dynamic" },
  { match: /^\/famous-iq\/.+/, name: "Celebrity (FamousIQ)", type: "dynamic" },
  { match: /^\/average-iq\/.+/, name: "Country (CountryIQ)", type: "dynamic" },
  { match: /^\/average-iq-by-state\/.+/, name: "State (StateIQ)", type: "dynamic" },
  { match: /^\/iq-by-city\/.+/, name: "City (CityIQ)", type: "dynamic" },
  { match: /^\/iq-needed-for\/.+/, name: "Career (CareerIQ)", type: "dynamic" },
  { match: /^\/iq-by-major\/.+/, name: "Major (MajorIQ)", type: "dynamic" },
  { match: /^\/iq-by-age\/.+/, name: "Age (AgeIQ)", type: "dynamic" },
  { match: /^\/iq-and\/.+/, name: "Condition (ConditionIQ)", type: "dynamic" },
  { match: /^\/iq-myths\/.+/, name: "Myth (IQMyth)", type: "dynamic" },
  { match: /^\/iq-compare\/.+/, name: "Compare (IQCompare)", type: "dynamic" },
  { match: /^\/blog\/.+/, name: "Blog article", type: "static" },
  { match: /^\/tests\/.+/, name: "Practice test", type: "static" },
];

function templateFor(route) {
  for (const t of TEMPLATES) if (t.match.test(route)) return t;
  return { name: "Core/static page", type: "static" };
}

function* walkPages(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== "assets" && entry.name !== "server") {
      yield* walkPages(full);
    } else if (entry.name === "index.html") {
      yield full;
    }
  }
}

function routeFromFile(file) {
  const rel = path.relative(distDir, path.dirname(file));
  return rel === "" ? "/" : "/" + rel.split(path.sep).join("/");
}

// Decode HTML entities so lengths reflect rendered characters, which is what
// search engines measure.
function decodeEntities(s) {
  return s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function extract(html) {
  const title = decodeEntities((html.match(/<title[^>]*>([\s\S]*?)<\/title>/) || [])[1]?.trim() ?? "");
  const desc =
    (html.match(/<meta\s+name="description"\s+content="([^"]*)"/) ||
      html.match(/<meta\s+content="([^"]*)"\s+name="description"/) ||
      [])[1] ?? "";
  const canonical = (html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"/) || [])[1] ?? "";

  const rootMatch = html.match(/<div id="root">([\s\S]*)<\/div>\s*<script type="module"/);
  const body = rootMatch ? rootMatch[1] : html;
  const text = body
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
  const wordCount = text ? text.split(" ").length : 0;

  const links = new Set();
  const hrefRe = /href="([^"#?]*)(?:[#?][^"]*)?"/g;
  let m;
  while ((m = hrefRe.exec(body))) {
    let href = m[1];
    if (href.startsWith(SITE_URL)) href = href.slice(SITE_URL.length);
    else if (href.startsWith("https://myiqscores.com")) href = href.slice("https://myiqscores.com".length);
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    if (/\.(xml|txt|ico|svg|png|jpg|webp|css|js)$/.test(href)) continue;
    if (href !== "/" && href.endsWith("/")) href = href.slice(0, -1);
    links.add(href || "/");
  }
  return { title, desc, canonical, wordCount, links: [...links] };
}

const pages = new Map();
for (const file of walkPages(distDir)) {
  const route = routeFromFile(file);
  pages.set(route, extract(fs.readFileSync(file, "utf-8")));
}

// Inbound link counts (self-links excluded)
const inbound = new Map([...pages.keys()].map((r) => [r, 0]));
for (const [route, page] of pages) {
  for (const link of page.links) {
    if (link !== route && inbound.has(link)) inbound.set(link, inbound.get(link) + 1);
  }
}

const rows = [...pages.entries()]
  .map(([route, p]) => ({
    route,
    template: templateFor(route),
    ...p,
    inbound: inbound.get(route) ?? 0,
  }))
  .sort((a, b) => a.route.localeCompare(b.route));

// Utility pages are not content pages; the 600-word rule does not apply.
const UTILITY_ROUTES = new Set(["/contact", "/privacy-policy", "/terms-of-service", "/unsubscribe", "/disclaimer"]);
const orphans = rows.filter((r) => r.inbound < 3 && r.route !== "/" && !UTILITY_ROUTES.has(r.route));
const thin = rows.filter((r) => r.wordCount < 600 && !UTILITY_ROUTES.has(r.route));
const longTitles = rows.filter((r) => r.title.length > 60);
const longDescs = rows.filter((r) => r.desc.length > 155);
const missingCanonical = rows.filter((r) => !r.canonical);

// Per-template summary
const byTemplate = new Map();
for (const r of rows) {
  const key = r.template.name;
  if (!byTemplate.has(key))
    byTemplate.set(key, { count: 0, type: r.template.type, words: 0, minWords: Infinity, orphans: 0 });
  const t = byTemplate.get(key);
  t.count++;
  t.words += r.wordCount;
  t.minWords = Math.min(t.minWords, r.wordCount);
  if (r.inbound < 3) t.orphans++;
}

const today = new Date().toISOString().slice(0, 10);
let md = `# MyIQScores.com Site Audit\n\nGenerated: ${today} from \`dist/\` after a full production build. Re-run with \`node scripts/audit.mjs\`.\n\n`;
md += `## Summary\n\n`;
md += `| Metric | Value |\n|---|---|\n`;
md += `| Total prerendered pages | ${rows.length} |\n`;
md += `| Orphan pages (<3 inbound internal links) | ${orphans.length} |\n`;
md += `| Thin pages (<600 words rendered) | ${thin.length} |\n`;
md += `| Titles over 60 chars | ${longTitles.length} |\n`;
md += `| Meta descriptions over 155 chars | ${longDescs.length} |\n`;
md += `| Pages missing canonical | ${missingCanonical.length} |\n\n`;

md += `## Phase 1 technical notes\n\n`;
md += `**Architecture.** Vite + React SPA prerendered to static HTML per route at build time (\`scripts/prerender.mjs\`). Not Next.js: there are no server components, so the "convert to server components" item does not apply. Every page ships fully rendered HTML with title, meta, canonical, OG/Twitter tags, and JSON-LD before hydration.\n\n`;
md += `**Core Web Vitals status.**\n`;
md += `- LCP: fonts preconnect + non-blocking preload with display=swap; AdSense and GA load only after the window load event, keeping them off the critical path.\n`;
md += `- CLS: all ad slots reserve fixed min-heights before the ad loads (\`AdUnit.tsx\`); celebrity page images now render at a fixed 300px height with width/height attributes (was h-auto, a layout-shift source).\n`;
md += `- INP: ads lazy-load via IntersectionObserver with a 200px margin, so main-thread ad work happens near the viewport rather than at load.\n\n`;
md += `**Sitemaps.** \`/sitemap.xml\` is now a sitemap index pointing at sitemap-core, sitemap-scores, sitemap-celebrities, sitemap-countries, sitemap-careers, sitemap-topics, and sitemap-blog. Lastmod dates come from the last git commit touching each route's data file or page component, regenerated on every build.\n\n`;
md += `**Indexing pings.** IndexNow submits all sitemap URLs to Bing/Yandex/Seznam/Naver on every production deploy (\`scripts/indexnow.mjs\`, key file in \`public/\`). Flagged and skipped: the Google sitemap ping endpoint was retired in January 2024 and returns 404, so no Google ping is implemented. Google discovery relies on the robots.txt Sitemap line and the GSC sitemap submission, both pointing at the index.\n\n`;
md += `**Robots.** robots.txt blocks /api/, /admin/, /auth/, and parameterized duplicates (?ref= challenge links, ?utm_ tracking). /test renders the same page as / with a canonical to /, so it stays crawlable without duplication risk.\n\n`;
md += `## Pages by template\n\n`;
md += `| Template | Type | Pages | Avg words | Min words | Orphans |\n|---|---|---|---|---|---|\n`;
for (const [name, t] of [...byTemplate.entries()].sort((a, b) => b[1].count - a[1].count)) {
  md += `| ${name} | ${t.type} | ${t.count} | ${Math.round(t.words / t.count)} | ${t.minWords} | ${t.orphans} |\n`;
}

md += `\n## Orphan pages (fewer than 3 inbound internal links)\n\n`;
if (orphans.length === 0) {
  md += `None. Every page has at least 3 inbound internal links.\n`;
} else {
  md += `| Route | Inbound links | Template |\n|---|---|---|\n`;
  for (const r of orphans.sort((a, b) => a.inbound - b.inbound)) {
    md += `| ${r.route} | ${r.inbound} | ${r.template.name} |\n`;
  }
}

if (thin.length) {
  md += `\n## Thin pages (<600 words)\n\n| Route | Words | Template |\n|---|---|---|\n`;
  for (const r of thin.sort((a, b) => a.wordCount - b.wordCount)) {
    md += `| ${r.route} | ${r.wordCount} | ${r.template.name} |\n`;
  }
}

if (longTitles.length) {
  md += `\n## Titles over 60 characters\n\n| Route | Length | Title |\n|---|---|---|\n`;
  for (const r of longTitles.sort((a, b) => b.title.length - a.title.length)) {
    md += `| ${r.route} | ${r.title.length} | ${r.title.replace(/\|/g, "\\|")} |\n`;
  }
}

md += `\n## Full route inventory\n\n`;
md += `| Route | Template | Type | Words | Inbound | Title chars | Desc chars |\n|---|---|---|---|---|---|---|\n`;
for (const r of rows) {
  md += `| ${r.route} | ${r.template.name} | ${r.template.type} | ${r.wordCount} | ${r.inbound} | ${r.title.length} | ${r.desc.length} |\n`;
}

fs.writeFileSync(path.resolve(__dirname, "../AUDIT.md"), md);
console.log(`AUDIT.md written: ${rows.length} pages, ${orphans.length} orphans, ${thin.length} thin, ${longTitles.length} long titles`);
