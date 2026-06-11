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
import { famousIQData } from "@/data/famousIQData";
import { careerIQData } from "@/data/careerIQData";
import { majorIQData } from "@/data/majorIQData";
import { cityIQData } from "@/data/cityIQData";
import { countryIQData } from "@/data/countryIQData";
import { stateIQData } from "@/data/stateIQData";
import { conditionIQData } from "@/data/conditionIQData";
import { iqMythData } from "@/data/iqMythData";
import { iqCompareData } from "@/data/iqCompareData";
import { ageIQData } from "@/data/ageIQData";
import { iqScores } from "@/data/iqScoreData";
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

const coreResource = (seed: number): LinkItem => CORE_RESOURCES[((seed % CORE_RESOURCES.length) + CORE_RESOURCES.length) % CORE_RESOURCES.length];

// Nearest integer score that actually has a /is-X-iq-good page (estimates
// like 225+ exceed the 40-200 page range).
export const nearestScore = (iq: number): number => {
  let nearest = iqScores[0];
  for (const s of iqScores) if (Math.abs(s - iq) < Math.abs(nearest - iq)) nearest = s;
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
      const i = famousIQData.findIndex((p) => p.slug === slug);
      if (i < 0) return [];
      const links = ringNeighbors(famousIQData, i, 4).map((p) => ({
        title: `${p.name}'s IQ (${p.estimatedIQ})`,
        href: `/famous-iq/${p.slug}`,
      }));
      const score = nearestScorePage(parseIQ(famousIQData[i].estimatedIQ));
      if (score) links.push(score);
      links.push({ title: "Famous People IQ Scores (Full List)", href: "/famous-iq" });
      links.push(coreResource(i));
      return links;
    },
  },
  {
    prefix: "/iq-needed-for/",
    resolve: (slug) => {
      const i = careerIQData.findIndex((c) => c.slug === slug);
      if (i < 0) return [];
      const links = ringNeighbors(careerIQData, i, 4).map((c) => ({
        title: `IQ Needed to Be a ${c.career}`,
        href: `/iq-needed-for/${c.slug}`,
      }));
      const mid = Math.round((careerIQData[i].minIQ + careerIQData[i].maxIQ) / 2);
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
      const i = majorIQData.findIndex((m) => m.slug === slug);
      if (i < 0) return [];
      const links = ringNeighbors(majorIQData, i, 4).map((m) => ({
        title: `Average IQ for ${m.major} Majors`,
        href: `/iq-by-major/${m.slug}`,
      }));
      const career = careerIQData[i % careerIQData.length];
      links.push({ title: `IQ Needed to Be a ${career.career}`, href: `/iq-needed-for/${career.slug}` });
      links.push({ title: "Average IQ by College Major", href: "/iq-by-major" });
      links.push(coreResource(i));
      return links;
    },
  },
  {
    prefix: "/iq-by-city/",
    resolve: (slug) => {
      const i = cityIQData.findIndex((c) => c.slug === slug);
      if (i < 0) return [];
      const links = ringNeighbors(cityIQData, i, 4).map((c) => ({
        title: `Average IQ in ${c.city}`,
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
      const i = stateIQData.findIndex((s) => s.slug === slug);
      if (i < 0) return [];
      const links = ringNeighbors(stateIQData, i, 4).map((s) => ({
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
      const i = countryIQData.findIndex((c) => c.slug === slug);
      if (i < 0) return [];
      const links = ringNeighbors(countryIQData, i, 4).map((c) => ({
        title: `Average IQ in ${c.name}`,
        href: `/average-iq/${c.slug}`,
      }));
      links.push({ title: "Average IQ by Country (Full Ranking)", href: "/average-iq-by-country" });
      const city = cityIQData[i % cityIQData.length];
      links.push({ title: `Average IQ in ${city.city}`, href: `/iq-by-city/${city.slug}` });
      links.push(coreResource(i));
      return links;
    },
  },
  {
    prefix: "/iq-and/",
    resolve: (slug) => {
      const i = conditionIQData.findIndex((c) => c.slug === slug);
      if (i < 0) return [];
      const links = ringNeighbors(conditionIQData, i, 4).map((c) => ({
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
      const i = iqMythData.findIndex((m) => m.slug === slug);
      if (i < 0) return [];
      const links = ringNeighbors(iqMythData, i, 4).map((m) => ({
        title: m.title,
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
      const i = iqCompareData.findIndex((c) => c.slug === slug);
      if (i < 0) return [];
      const links = ringNeighbors(iqCompareData, i, 4).map((c) => ({
        title: c.title,
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
      const i = ageIQData.findIndex((a) => a.slug === slug);
      if (i < 0) return [];
      const links = ringNeighbors(ageIQData, i, 4).map((a) => ({
        title: `Average IQ for ${a.ageGroup}`,
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
    const i = iqScores.indexOf(score);
    if (i < 0) return [];
    const links = ringNeighbors(iqScores, i, 4).map((s) => ({
      title: `Is ${s} IQ Good?`,
      href: `/is-${s}-iq-good`,
    }));
    links.push({ title: "IQ Score Ranges Chart", href: "/iq-score-ranges" });
    links.push(coreResource(score));
    return links;
  }

  if (CONVERTER_LINKS[pathname]) return CONVERTER_LINKS[pathname];

  for (const family of families) {
    if (pathname.startsWith(family.prefix)) {
      return family.resolve(pathname.slice(family.prefix.length));
    }
  }
  return [];
}
