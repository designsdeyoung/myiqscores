// Sitewide internal linking engine.
//
// Every programmatic page family had the same orphan bug: sibling links were
// chosen with .slice(0, N) in data-file order, so the first few entries in
// each file collected hundreds of inbound links while later entries got none
// (387 orphan pages in the Phase 1 audit). This module distributes links
// evenly: each page links to its ring neighbors (index +/-1, +/-2 with
// wrap-around), which guarantees every entry receives the same number of
// inbound sibling links. Cross-family links rotate by index so hub-adjacent
// core pages also receive steady inbound coverage.
//
// ContentPage merges these auto links into its "You Might Also Like" grid on
// every page, so adding an entry to any data file automatically wires it
// into the link graph.
//
// Data comes from the generated compact link index (scripts/gen-link-index),
// NOT the full data files: this module is in every page's JS graph, and the
// full data files total ~2MB while the index is ~57KB.
import {
  famousIndex,
  careerIndex,
  majorIndex,
  cityIndex,
  countryIndex,
  stateIndex,
  conditionIndex,
  mythIndex,
  compareIndex,
  ageIndex,
  scoreIndex,
} from "@/generated/linkIndex";
import { blogPosts } from "@/data/blogPosts";

export interface LinkItem {
  title: string;
  href: string;
}

// Ring neighbors: alternating +1, -1, +2, -2... around `index`, wrapping.
// Every element of `items` is returned by exactly `count` distinct indices,
// so inbound link counts stay uniform across the whole family.
export function ringNeighbors<T>(items: T[], index: number, count: number): T[] {
  const n = items.length;
  if (n <= 1) return [];
  const picked: T[] = [];
  for (let step = 1; picked.length < Math.min(count, n - 1); step++) {
    picked.push(items[(index + step) % n]);
    if (picked.length < Math.min(count, n - 1)) {
      picked.push(items[(index - step + n * step) % n]);
    }
  }
  return picked;
}

// Deterministically rotate a list by seed, so different pages spread their
// picks across the full candidate pool instead of all choosing the head.
export function rotated<T>(items: T[], seed: number): T[] {
  const n = items.length;
  if (n === 0) return items;
  const offset = ((seed % n) + n) % n;
  return [...items.slice(offset), ...items.slice(0, offset)];
}

// Round-robin pick from evergreen core pages so each receives steady inbound
// links from large page families.
const CORE_RESOURCES: LinkItem[] = [
  { title: "Highest IQ Ever Recorded", href: "/highest-iq-ever" },
  { title: "What Is a Genius IQ?", href: "/genius-iq" },
  { title: "IQ of US Presidents", href: "/iq-of-presidents" },
  { title: "What Is a Low IQ?", href: "/low-iq" },
  { title: "IQ Percentile Chart", href: "/iq-percentile-chart" },
  { title: "What Is a Good IQ Score?", href: "/good-iq-score" },
  { title: "Average IQ Score Guide", href: "/average-iq" },
  { title: "ASVAB to IQ Conversion", href: "/asvab-to-iq" },
];

const coreResource = (seed: number): LinkItem =>
  CORE_RESOURCES[((seed % CORE_RESOURCES.length) + CORE_RESOURCES.length) % CORE_RESOURCES.length];

// Nearest integer score that actually has a /is-X-iq-good page (estimates
// like 225+ exceed the 40-200 page range).
export const nearestScore = (iq: number): number => {
  let nearest = scoreIndex[0];
  for (const s of scoreIndex) if (Math.abs(s - iq) < Math.abs(nearest - iq)) nearest = s;
  return nearest;
};

const nearestScorePage = (iq: number): LinkItem | null => {
  if (!Number.isFinite(iq)) return null;
  const s = nearestScore(iq);
  return { title: `Is ${s} IQ Good?`, href: `/is-${s}-iq-good` };
};

export const parseIQ = (estimated: string): number => {
  const nums = estimated.match(/\d+/g)?.map(Number) ?? [];
  if (nums.length === 0) return NaN;
  return Math.round(nums.reduce((a, b) => a + b, 0) / nums.length);
};

type Family = {
  prefix: string;
  resolve: (slug: string) => LinkItem[];
};

const families: Family[] = [
  {
    prefix: "/famous-iq/",
    resolve: (slug) => {
      const i = famousIndex.findIndex((p) => p.slug === slug);
      if (i < 0) return [];
      const links = ringNeighbors(famousIndex, i, 4).map((p) => ({
        title: `${p.name}'s IQ (${p.iq})`,
        href: `/famous-iq/${p.slug}`,
      }));
      const score = nearestScorePage(famousIndex[i].mid);
      if (score) links.push(score);
      links.push({ title: "Famous People IQ Scores (Full List)", href: "/famous-iq" });
      links.push(coreResource(i));
      return links;
    },
  },
  {
    prefix: "/iq-needed-for/",
    resolve: (slug) => {
      const i = careerIndex.findIndex((c) => c.slug === slug);
      if (i < 0) return [];
      const links = ringNeighbors(careerIndex, i, 4).map((c) => ({
        title: `IQ Needed to Be a ${c.name}`,
        href: `/iq-needed-for/${c.slug}`,
      }));
      const mid = Math.round((careerIndex[i].minIQ + careerIndex[i].maxIQ) / 2);
      const score = nearestScorePage(mid);
      if (score) links.push(score);
      links.push({ title: "IQ by Career Chart", href: "/iq-by-career" });
      links.push(coreResource(i));
      return links;
    },
  },
  {
    prefix: "/iq-by-major/",
    resolve: (slug) => {
      const i = majorIndex.findIndex((m) => m.slug === slug);
      if (i < 0) return [];
      const links = ringNeighbors(majorIndex, i, 4).map((m) => ({
        title: `Average IQ for ${m.name} Majors`,
        href: `/iq-by-major/${m.slug}`,
      }));
      const career = careerIndex[i % careerIndex.length];
      links.push({ title: `IQ Needed to Be a ${career.name}`, href: `/iq-needed-for/${career.slug}` });
      links.push({ title: "Average IQ by College Major", href: "/iq-by-major" });
      links.push(coreResource(i));
      return links;
    },
  },
  {
    prefix: "/iq-by-city/",
    resolve: (slug) => {
      const i = cityIndex.findIndex((c) => c.slug === slug);
      if (i < 0) return [];
      const links = ringNeighbors(cityIndex, i, 4).map((c) => ({
        title: `Average IQ in ${c.name}`,
        href: `/iq-by-city/${c.slug}`,
      }));
      links.push({ title: "Average IQ by City", href: "/iq-by-city" });
      links.push({ title: "Average IQ by Country", href: "/average-iq-by-country" });
      links.push(coreResource(i));
      return links;
    },
  },
  {
    prefix: "/average-iq-by-state/",
    resolve: (slug) => {
      const i = stateIndex.findIndex((s) => s.slug === slug);
      if (i < 0) return [];
      const links = ringNeighbors(stateIndex, i, 4).map((s) => ({
        title: `Average IQ in ${s.name}`,
        href: `/average-iq-by-state/${s.slug}`,
      }));
      links.push({ title: "Average IQ by State (Full Ranking)", href: "/average-iq-by-state" });
      links.push({ title: "Average IQ in the US", href: "/average-iq-us" });
      links.push(coreResource(i));
      return links;
    },
  },
  {
    prefix: "/average-iq/",
    resolve: (slug) => {
      const i = countryIndex.findIndex((c) => c.slug === slug);
      if (i < 0) return [];
      const links = ringNeighbors(countryIndex, i, 4).map((c) => ({
        title: `Average IQ in ${c.name}`,
        href: `/average-iq/${c.slug}`,
      }));
      links.push({ title: "Average IQ by Country (Full Ranking)", href: "/average-iq-by-country" });
      const city = cityIndex[i % cityIndex.length];
      links.push({ title: `Average IQ in ${city.name}`, href: `/iq-by-city/${city.slug}` });
      links.push(coreResource(i));
      return links;
    },
  },
  {
    prefix: "/iq-and/",
    resolve: (slug) => {
      const i = conditionIndex.findIndex((c) => c.slug === slug);
      if (i < 0) return [];
      const links = ringNeighbors(conditionIndex, i, 4).map((c) => ({
        title: `${c.name} and IQ`,
        href: `/iq-and/${c.slug}`,
      }));
      links.push({ title: "What Is a Low IQ?", href: "/low-iq" });
      links.push({ title: "What Is IQ? Complete Guide", href: "/what-is-iq" });
      const post = blogPosts[i % blogPosts.length];
      links.push({ title: post.title, href: `/blog/${post.slug}` });
      return links;
    },
  },
  {
    prefix: "/iq-myths/",
    resolve: (slug) => {
      const i = mythIndex.findIndex((m) => m.slug === slug);
      if (i < 0) return [];
      const links = ringNeighbors(mythIndex, i, 4).map((m) => ({
        title: m.name,
        href: `/iq-myths/${m.slug}`,
      }));
      links.push({ title: "Are IQ Tests Actually Accurate?", href: "/blog/iq-tests-accurate" });
      links.push(coreResource(i));
      return links;
    },
  },
  {
    prefix: "/iq-compare/",
    resolve: (slug) => {
      const i = compareIndex.findIndex((c) => c.slug === slug);
      if (i < 0) return [];
      const links = ringNeighbors(compareIndex, i, 4).map((c) => ({
        title: c.name,
        href: `/iq-compare/${c.slug}`,
      }));
      links.push({ title: "IQ Comparisons (Full List)", href: "/iq-compare" });
      links.push(coreResource(i));
      return links;
    },
  },
  {
    prefix: "/iq-by-age/",
    resolve: (slug) => {
      const i = ageIndex.findIndex((a) => a.slug === slug);
      if (i < 0) return [];
      const links = ringNeighbors(ageIndex, i, 4).map((a) => ({
        title: `Average IQ for ${a.name}`,
        href: `/iq-by-age/${a.slug}`,
      }));
      links.push({ title: "What Happens to IQ With Age", href: "/blog/iq-and-age" });
      links.push(coreResource(i));
      return links;
    },
  },
  {
    prefix: "/blog/",
    resolve: (slug) => {
      const i = blogPosts.findIndex((p) => p.slug === slug);
      if (i < 0) return [];
      const links = ringNeighbors(blogPosts, i, 4).map((p) => ({
        title: p.title,
        href: `/blog/${p.slug}`,
      }));
      links.push({ title: "All IQ Articles", href: "/blog" });
      links.push(coreResource(i));
      return links;
    },
  },
];

// Tool pages cross-link each other plus the quiz-adjacent core pages.
const TOOL_LINKS: LinkItem[] = [
  { title: "IQ Percentile Calculator", href: "/tools/iq-percentile-calculator" },
  { title: "How Rare Is Your IQ?", href: "/tools/iq-rarity" },
  { title: "SAT, ACT and GRE to IQ Converter", href: "/tools/sat-to-iq-converter" },
  { title: "Celebrity IQ Match", href: "/tools/celebrity-iq-match" },
  { title: "All Free IQ Tools", href: "/tools" },
];

// Conversion pages cross-link each other so none of them orphan.
const CONVERTER_LINKS: Record<string, LinkItem[]> = {};
const converters: LinkItem[] = [
  { title: "SAT to IQ Conversion", href: "/sat-to-iq" },
  { title: "ACT to IQ Conversion", href: "/act-to-iq" },
  { title: "GRE to IQ Conversion", href: "/gre-to-iq" },
  { title: "ASVAB to IQ Conversion", href: "/asvab-to-iq" },
];
for (const c of converters) {
  CONVERTER_LINKS[c.href] = converters.filter((o) => o.href !== c.href);
}

export function getAutoRelatedLinks(pathname: string): LinkItem[] {
  // Score pages: ring over adjacent integer scores plus rotating extras.
  const scoreMatch = pathname.match(/^\/is-(\d+)-iq-good$/);
  if (scoreMatch) {
    const score = Number(scoreMatch[1]);
    const i = scoreIndex.indexOf(score);
    if (i < 0) return [];
    const links = ringNeighbors(scoreIndex, i, 4).map((s) => ({
      title: `Is ${s} IQ Good?`,
      href: `/is-${s}-iq-good`,
    }));
    links.push({ title: "IQ Score Ranges Chart", href: "/iq-score-ranges" });
    links.push(coreResource(score));
    return links;
  }

  if (pathname === "/tools" || pathname.startsWith("/tools/")) {
    return [
      ...TOOL_LINKS.filter((t) => t.href !== pathname),
      { title: "IQ Percentile Chart", href: "/iq-percentile-chart" },
      { title: "IQ Score Ranges Chart", href: "/iq-score-ranges" },
    ];
  }

  if (CONVERTER_LINKS[pathname]) {
    return [
      ...CONVERTER_LINKS[pathname],
      { title: "Interactive Test Score to IQ Converter", href: "/tools/sat-to-iq-converter" },
    ];
  }

  for (const family of families) {
    if (pathname.startsWith(family.prefix)) {
      return family.resolve(pathname.slice(family.prefix.length));
    }
  }
  return [];
}
