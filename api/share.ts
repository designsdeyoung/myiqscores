// Share teaser endpoint (Vercel Edge Function), served at /share via rewrite.
//
//   /share?s=127&p=96&ref=AB12CD
//
// Social crawlers get a minimal HTML page whose OG tags point at the dynamic
// /api/og image for that exact score, so shared links render a native-looking
// score card. Humans are immediately forwarded to the quiz teaser
// (/test?ref=...&cs=...&cp=...), which shows the challenger's score and a
// prominent "take the test yourself" CTA rather than a full result.
export const config = { runtime: "edge" };

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export default function handler(req: Request) {
  const { searchParams } = new URL(req.url);
  const score = Math.max(40, Math.min(210, Number(searchParams.get("s")) || 100));
  const pct = Math.max(1, Math.min(99, Number(searchParams.get("p")) || 50));
  const ref = (searchParams.get("ref") ?? "").replace(/[^A-Za-z0-9]/g, "").slice(0, 12);

  const site = "https://www.myiqscores.com";
  const ogImage = `${site}/api/og?type=result&score=${score}&percentile=${pct}`;
  const target = `${site}/test?utm_source=share${ref ? `&ref=${ref}` : ""}&cs=${score}&cp=${pct}`;
  const title = `I scored ${score} on this IQ test. Can you beat me?`;
  const description = `A score of ${score} beats ${pct}% of test takers. Take the free 30-question IQ test and see how you compare.`;

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="robots" content="noindex,follow">
<meta name="description" content="${esc(description)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:image" content="${ogImage}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:type" content="website">
<meta property="og:site_name" content="MyIQScores">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${ogImage}">
<meta http-equiv="refresh" content="0;url=${target}">
</head>
<body style="background:#0b1020;color:#f4f7ff;font-family:sans-serif;text-align:center;padding:48px">
<p>Someone scored <strong>${score}</strong> (top ${100 - pct}%).</p>
<p><a style="color:#00e5ff" href="${target}">Take the free IQ test and try to beat it</a></p>
<script>location.replace(${JSON.stringify(target)})</script>
</body>
</html>`;

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
