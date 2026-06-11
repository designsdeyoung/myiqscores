// Standardized test score to estimated IQ conversions.
//
// These are correlation-based estimates, not measurements. SAT/ACT/GRE
// correlate with general cognitive ability at roughly r = 0.7-0.8 in the
// research literature (Frey & Detterman 2004 for the SAT; Koenig et al. 2008
// for the ACT), which is strong but leaves real individual variation: test
// prep, math/verbal imbalance, and testing conditions all move scores.
// Anchor points below follow the published regression mappings; values
// between anchors are linearly interpolated.
export interface ConversionTable {
  id: "sat" | "act" | "gre";
  label: string;
  scoreLabel: string;
  min: number;
  max: number;
  step: number;
  // [testScore, estimatedIQ] anchors, ascending
  anchors: [number, number][];
  note: string;
}

export const CONVERSION_TABLES: ConversionTable[] = [
  {
    id: "sat",
    label: "SAT",
    scoreLabel: "SAT total (400-1600)",
    min: 400,
    max: 1600,
    step: 10,
    anchors: [
      [400, 64], [600, 74], [800, 86], [900, 93], [1000, 100],
      [1100, 107], [1200, 114], [1300, 121], [1400, 129], [1500, 138], [1600, 151],
    ],
    note: "Based on the Frey and Detterman (2004) finding that the SAT functions as a strong proxy for general cognitive ability. Post-2016 scale assumed.",
  },
  {
    id: "act",
    label: "ACT",
    scoreLabel: "ACT composite (1-36)",
    min: 1,
    max: 36,
    step: 1,
    anchors: [
      [7, 70], [11, 80], [15, 90], [19, 99], [22, 105],
      [25, 111], [28, 118], [31, 126], [34, 136], [36, 147],
    ],
    note: "Based on Koenig, Frey and Detterman (2008), which found ACT composite scores correlate about 0.77 with general cognitive ability measures.",
  },
  {
    id: "gre",
    label: "GRE",
    scoreLabel: "GRE total (260-340)",
    min: 260,
    max: 340,
    step: 1,
    anchors: [
      [260, 76], [270, 81], [280, 87], [290, 94], [300, 102],
      [310, 110], [320, 119], [330, 130], [340, 145],
    ],
    note: "GRE takers are a self-selected graduate-bound population, so the same total maps to a higher general-population percentile than a raw score comparison would suggest.",
  },
];

function interpolate(anchors: [number, number][], x: number): number {
  if (x <= anchors[0][0]) return anchors[0][1];
  if (x >= anchors[anchors.length - 1][0]) return anchors[anchors.length - 1][1];
  for (let i = 1; i < anchors.length; i++) {
    if (x <= anchors[i][0]) {
      const [x0, y0] = anchors[i - 1];
      const [x1, y1] = anchors[i];
      return y0 + ((x - x0) / (x1 - x0)) * (y1 - y0);
    }
  }
  return anchors[anchors.length - 1][1];
}

export function testToIQ(table: ConversionTable, testScore: number): number {
  return Math.round(interpolate(table.anchors, testScore));
}

// Reverse direction: estimated test score for a given IQ.
export function iqToTest(table: ConversionTable, iq: number): number {
  const reversed: [number, number][] = table.anchors.map(([t, q]) => [q, t]);
  const raw = interpolate(reversed, iq);
  return Math.round(raw / table.step) * table.step;
}
