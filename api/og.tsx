// Dynamic Open Graph image generator (Vercel Edge Function).
//
//   /api/og?type=result&score=127&percentile=96
//   /api/og?type=score&score=127
//   /api/og?type=celebrity&name=Albert%20Einstein&iq=160
//
// Used as og:image on quiz result shares, score pages, and celebrity pages
// so every social share renders a branded, score-specific card.
import { ImageResponse } from "@vercel/og";

export const config = { runtime: "edge" };

const clamp = (n: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, n));

// Normal CDF approximation for percentile/rarity labels.
function pctFor(score: number): number {
  const z = (score - 100) / 15;
  const t = 1 / (1 + 0.3275911 * Math.abs(z) / Math.SQRT2);
  const y =
    1 -
    ((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) *
      t *
      Math.exp(-(z * z) / 2);
  const cdf = 0.5 * (1 + (z < 0 ? -y : y));
  return cdf * 100;
}

export default function handler(req: Request) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type") ?? "result";
  const score = clamp(Number(searchParams.get("score") ?? searchParams.get("iq") ?? 100) || 100, 40, 210);
  const name = (searchParams.get("name") ?? "").slice(0, 40);
  const iqLabel = (searchParams.get("iq") ?? String(score)).slice(0, 12);

  const pct = clamp(Number(searchParams.get("percentile")) || Math.round(pctFor(score)), 1, 99);
  const isCelebrity = type === "celebrity";
  const heading = isCelebrity ? name : type === "score" ? `IQ Score ${score}` : "My IQ Score";
  const sub = isCelebrity
    ? `Estimated IQ: ${iqLabel}`
    : `Higher than ${pct}% of test takers`;
  const badge = isCelebrity ? "ESTIMATED, NOT VERIFIED" : `TOP ${Math.max(1, 100 - pct)}%`;

  // Bar position for the simple distribution strip.
  const marker = clamp(((score - 40) / 160) * 100, 2, 98);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "linear-gradient(135deg, #0b1020 0%, #101a35 55%, #0b2535 100%)",
          color: "#f4f7ff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", fontSize: 36, fontWeight: 700 }}>
            <span style={{ color: "#f4f7ff" }}>My</span>
            <span style={{ color: "#00e5ff" }}>IQ</span>
            <span style={{ color: "#f4f7ff" }}>Scores</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              padding: "8px 20px",
              borderRadius: 999,
              border: "1px solid rgba(0,229,255,0.45)",
              color: "#00e5ff",
              letterSpacing: 2,
            }}
          >
            {badge}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ display: "flex", fontSize: 44, color: "#9fb0d0" }}>{heading}</div>
          <div
            style={{
              display: "flex",
              fontSize: isCelebrity ? 96 : 160,
              fontWeight: 800,
              color: "#00e5ff",
              lineHeight: 1.1,
            }}
          >
            {isCelebrity ? iqLabel : score}
          </div>
          <div style={{ display: "flex", fontSize: 36, color: "#c9d6ef" }}>{sub}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              width: "100%",
              height: 18,
              borderRadius: 999,
              background: "linear-gradient(90deg, #1c2a4a 0%, #00e5ff 50%, #1c2a4a 100%)",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                position: "absolute",
                left: `${marker}%`,
                top: -10,
                width: 6,
                height: 38,
                borderRadius: 4,
                background: "#ffffff",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 18,
              fontSize: 26,
              color: "#9fb0d0",
            }}
          >
            <span>IQ 40</span>
            <span style={{ color: "#00e5ff", fontWeight: 700 }}>
              Take the free test at myiqscores.com
            </span>
            <span>IQ 200</span>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
