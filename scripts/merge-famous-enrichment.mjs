// One-time merge: injects field, sources, and estimatedIQMid into every
// entry of src/data/famousIQData.ts from the agent-produced JSON batches in
// /tmp/famous-enrich/out-*.json. estimatedIQMid is computed here (rounded
// midpoint of the numbers in estimatedIQ) so the math is uniform.
import fs from "node:fs";

const DATA = "src/data/famousIQData.ts";
const ALLOWED_FIELDS = new Set([
  "Science", "Technology", "Business", "Politics", "Music",
  "Acting & Entertainment", "Sports", "Internet & Media",
  "Literature & Arts", "Historical Figures",
]);

const enrichment = new Map();
for (const f of fs.readdirSync("/tmp/famous-enrich").filter((f) => f.startsWith("out-"))) {
  for (const e of JSON.parse(fs.readFileSync(`/tmp/famous-enrich/${f}`, "utf8"))) {
    if (!ALLOWED_FIELDS.has(e.field)) throw new Error(`Bad field for ${e.slug}: ${e.field}`);
    if (!Array.isArray(e.sources) || e.sources.length < 2) throw new Error(`Bad sources for ${e.slug}`);
    for (const s of e.sources) if (s.includes("—")) throw new Error(`Em-dash in sources for ${e.slug}`);
    enrichment.set(e.slug, e);
  }
}
console.log(`Loaded enrichment for ${enrichment.size} slugs`);

let src = fs.readFileSync(DATA, "utf8");

// 1. Interface: add the three fields after estimatedIQ.
const ifaceOld = `export interface FamousIQInfo {
  name: string;
  slug: string;
  estimatedIQ: string;`;
const ifaceNew = `export type FamousField =
  | "Science"
  | "Technology"
  | "Business"
  | "Politics"
  | "Music"
  | "Acting & Entertainment"
  | "Sports"
  | "Internet & Media"
  | "Literature & Arts"
  | "Historical Figures";

export interface FamousIQInfo {
  name: string;
  slug: string;
  estimatedIQ: string;
  /** Rounded midpoint of the estimated range; powers percentile math and tools. */
  estimatedIQMid: number;
  /** Primary domain of fame; powers same-field linking and hub filters. */
  field: FamousField;
  /** Public basis of the estimate; final entry states verification status. */
  sources: string[];`;
if (!src.includes(ifaceOld)) throw new Error("Interface anchor not found");
src = src.replace(ifaceOld, ifaceNew);

// 2. Entries: after each entry's `estimatedIQ: "...",` line, inject the new
// fields. Entries are matched by the slug within the same object block.
const midFromRange = (range) => {
  const nums = (range.match(/\d+/g) || []).map(Number);
  if (!nums.length) throw new Error(`No numbers in estimatedIQ "${range}"`);
  return Math.round(nums.reduce((a, b) => a + b, 0) / nums.length);
};

let injected = 0;
// Split on entry boundaries; each entry block starts with "  {\n    name:"
src = src.replace(
  /( {4}slug: "([^"]+)",[\s\S]*?estimatedIQ: "([^"]+)",\n)/g,
  (whole, block, slug, iq) => {
    const e = enrichment.get(slug);
    if (!e) return whole; // helper-code matches, not entries
    injected++;
    const sourcesTs = e.sources.map((s) => `      ${JSON.stringify(s)},`).join("\n");
    return (
      block +
      `    estimatedIQMid: ${midFromRange(iq)},\n` +
      `    field: ${JSON.stringify(e.field)},\n` +
      `    sources: [\n${sourcesTs}\n    ],\n`
    );
  },
);

if (injected !== enrichment.size) {
  throw new Error(`Injected ${injected}, expected ${enrichment.size}`);
}
fs.writeFileSync(DATA, src);
console.log(`Injected fields into ${injected} entries`);
