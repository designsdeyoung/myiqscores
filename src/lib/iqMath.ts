// IQ distribution math. Modern IQ tests are normed to mean 100, SD 15;
// every percentile and rarity figure on the site derives from that normal
// distribution so numbers stay consistent across pages and tools.
export const IQ_MEAN = 100;
export const IQ_SD = 15;

// Abramowitz and Stegun formula 7.1.26 approximation of erf, accurate to
// ~1.5e-7, more than enough for display purposes.
function erf(x: number): number {
  const sign = x < 0 ? -1 : 1;
  const ax = Math.abs(x);
  const t = 1 / (1 + 0.3275911 * ax);
  const y =
    1 -
    ((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) *
      t *
      Math.exp(-ax * ax);
  return sign * y;
}

export function normalCdf(z: number): number {
  return 0.5 * (1 + erf(z / Math.SQRT2));
}

// Fraction of the population scoring BELOW the given IQ, as a 0-100 number.
export function iqPercentile(score: number): number {
  return normalCdf((score - IQ_MEAN) / IQ_SD) * 100;
}

// "1 in N people" rarity. For above-average scores this is the rarity of
// scoring at or above; for below-average scores, at or below.
export function iqRarity(score: number): number {
  const p = normalCdf((score - IQ_MEAN) / IQ_SD);
  const tail = score >= IQ_MEAN ? 1 - p : p;
  if (tail <= 0) return Infinity;
  return Math.round(1 / tail);
}

export function ordinal(n: number): string {
  const r = Math.round(n);
  const mod100 = r % 100;
  if (mod100 >= 11 && mod100 <= 13) return `${r}th`;
  switch (r % 10) {
    case 1: return `${r}st`;
    case 2: return `${r}nd`;
    case 3: return `${r}rd`;
    default: return `${r}th`;
  }
}

export function formatRarity(n: number): string {
  if (!Number.isFinite(n)) return "fewer than 1 in a billion";
  return `1 in ${n.toLocaleString("en-US")}`;
}

export function classification(score: number): string {
  if (score >= 145) return "Highly Gifted";
  if (score >= 130) return "Gifted";
  if (score >= 120) return "Superior";
  if (score >= 110) return "High Average";
  if (score >= 90) return "Average";
  if (score >= 80) return "Low Average";
  if (score >= 70) return "Borderline";
  return "Extremely Low";
}
