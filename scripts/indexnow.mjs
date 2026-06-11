// Submits all sitemap URLs to IndexNow (Bing, Yandex, Seznam, Naver) after a
// production build so new and updated pages get crawled within minutes.
//
// Runs automatically at the end of `npm run build`, but only submits when
// VERCEL_ENV=production (or with --force for manual runs) so local and
// preview builds never ping search engines.
//
// Note: Google does not support IndexNow and retired its sitemap ping
// endpoint in January 2024. Google discovery relies on the Sitemap line in
// robots.txt plus the GSC sitemap submission, which both point at
// /sitemap.xml (the sitemap index).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist");

const HOST = "www.myiqscores.com";
const KEY = "850592b6a75c2e7e076de44a9700fbd6";

const isProduction = process.env.VERCEL_ENV === "production";
const force = process.argv.includes("--force");

if (!isProduction && !force) {
  console.log("IndexNow: skipped (not a production deploy; use --force to submit manually)");
  process.exit(0);
}

const urls = new Set();
for (const file of fs.readdirSync(distDir)) {
  if (!/^sitemap-.*\.xml$/.test(file)) continue;
  const xml = fs.readFileSync(path.resolve(distDir, file), "utf-8");
  for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) urls.add(m[1]);
}

if (urls.size === 0) {
  console.error("IndexNow: no URLs found in dist sitemaps; run the build first");
  process.exit(1);
}

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: `https://${HOST}/${KEY}.txt`,
  urlList: [...urls],
};

try {
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });
  console.log(`IndexNow: submitted ${urls.size} URLs, status ${res.status}`);
  if (!res.ok) {
    console.error(await res.text());
    // Do not fail the build over an indexing ping.
  }
} catch (err) {
  console.error(`IndexNow: submission failed (build continues): ${err.message}`);
}
