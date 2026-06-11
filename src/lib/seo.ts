// Title tag builder: keyword-first, capped at 60 characters.
//
// Tries each hook in order (pass longest/most specific first), preferring a
// version with the brand suffix, then without, then shorter hooks, then the
// bare primary keyword. Returns the first candidate that fits 60 chars.
const BRAND = " | MyIQScores";

export function fitTitle(primary: string, hooks: string[] = []): string {
  for (const hook of [...hooks, ""]) {
    const withBrand = `${primary}${hook}${BRAND}`;
    if (withBrand.length <= 60) return withBrand;
    const bare = `${primary}${hook}`;
    if (bare.length <= 60) return bare;
  }
  return primary;
}

// Use a hand-written override title only when it obeys the 60-char cap and
// contains no em-dash; otherwise fall back to the programmatic formula.
export function preferTitle(override: string | undefined, fallback: string): string {
  if (override && override.length <= 60 && !override.includes("—")) return override;
  return fallback;
}
