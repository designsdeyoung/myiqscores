/**
 * Reads wikipedia-images.json and injects imageUrl fields into famousIQData.ts.
 * Run after fetch-wikipedia-images.mjs.
 * Run: node scripts/inject-wikipedia-images.mjs
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesPath = path.resolve(__dirname, "wikipedia-images.json");
const dataPath = path.resolve(__dirname, "../src/data/famousIQData.ts");

if (!fs.existsSync(imagesPath)) {
  console.error("Run fetch-wikipedia-images.mjs first to generate wikipedia-images.json");
  process.exit(1);
}

const images = JSON.parse(fs.readFileSync(imagesPath, "utf-8"));
let source = fs.readFileSync(dataPath, "utf-8");

// Ensure interface has imageUrl field
if (!source.includes("imageUrl")) {
  source = source.replace(
    "  faqItems: { question: string; answer: string }[];",
    "  imageUrl?: string;\n  faqItems: { question: string; answer: string }[];"
  );
}

let injected = 0;
let skipped = 0;

for (const [slug, imageUrl] of Object.entries(images)) {
  if (!imageUrl) {
    skipped++;
    continue;
  }

  // Find slug: "the-slug" pattern and inject imageUrl before faqItems
  const slugPattern = new RegExp(`(slug:\\s*"${slug.replace(/-/g, "\\-")}",)`, "g");

  if (!slugPattern.test(source)) {
    skipped++;
    continue;
  }

  // Check if already has imageUrl
  const checkPattern = new RegExp(`slug:\\s*"${slug.replace(/-/g, "\\-")}",[^}]*imageUrl:`, "s");
  if (checkPattern.test(source)) {
    skipped++;
    continue;
  }

  // Insert imageUrl after the slug line
  source = source.replace(
    new RegExp(`(slug:\\s*"${slug.replace(/-/g, "\\-")}",)`, "g"),
    `$1\n    imageUrl: "${imageUrl}",`
  );
  injected++;
}

fs.writeFileSync(dataPath, source);
console.log(`Done! Injected ${injected} image URLs, skipped ${skipped}.`);
