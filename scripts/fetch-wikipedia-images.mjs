/**
 * Fetches Wikipedia thumbnail images for all famous people in famousIQData.ts.
 * Outputs a JSON file: scripts/wikipedia-images.json
 * Run: node scripts/fetch-wikipedia-images.mjs
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Extract names and slugs from the TypeScript file via regex
const dataFile = fs.readFileSync(
  path.resolve(__dirname, "../src/data/famousIQData.ts"),
  "utf-8"
);

const entries = [];
const nameRegex = /name:\s*"([^"]+)"/g;
const slugRegex = /slug:\s*"([^"]+)"/g;

let nameMatch;
let slugMatch;
const names = [];
const slugs = [];

while ((nameMatch = nameRegex.exec(dataFile)) !== null) {
  names.push(nameMatch[1]);
}
while ((slugMatch = slugRegex.exec(dataFile)) !== null) {
  slugs.push(slugMatch[1]);
}

for (let i = 0; i < names.length; i++) {
  entries.push({ name: names[i], slug: slugs[i] });
}

console.log(`Found ${entries.length} famous people entries`);

const outputPath = path.resolve(__dirname, "wikipedia-images.json");
const existing = fs.existsSync(outputPath) ? JSON.parse(fs.readFileSync(outputPath, "utf-8")) : {};

async function fetchImage(name) {
  const encoded = encodeURIComponent(name);
  const url = `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&titles=${encoded}&pithumbsize=400&format=json&origin=*`;

  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "MyIQScores/1.0 (educational; contact@myiqscores.com)" },
    });
    if (!res.ok) return null;
    const data = await res.json();
    const pages = data?.query?.pages;
    if (!pages) return null;
    const page = Object.values(pages)[0];
    return page?.thumbnail?.source || null;
  } catch {
    return null;
  }
}

async function main() {
  const results = { ...existing };
  let fetched = 0;
  let found = 0;

  for (const { name, slug } of entries) {
    if (results[slug] !== undefined) continue; // already fetched

    const imageUrl = await fetchImage(name);
    results[slug] = imageUrl || "";

    fetched++;
    if (imageUrl) {
      found++;
      console.log(`✓ ${name}: ${imageUrl.slice(0, 60)}...`);
    } else {
      console.log(`✗ ${name}: no image found`);
    }

    // Rate limit: 5 requests/sec max
    await new Promise((r) => setTimeout(r, 200));

    // Save every 20 entries
    if (fetched % 20 === 0) {
      fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
      console.log(`Saved checkpoint (${fetched} fetched, ${found} found)`);
    }
  }

  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  console.log(`\nDone! ${fetched} fetched, ${found} images found.`);
  console.log(`Results saved to ${outputPath}`);
}

main().catch(console.error);
