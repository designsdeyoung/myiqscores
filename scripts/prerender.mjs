import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist");
const serverEntry = path.resolve(distDir, "server/entry-server.js");

function writeSitemap(routes, noSitemapRoutes) {
  const today = new Date().toISOString().slice(0, 10);
  const excluded = new Set(noSitemapRoutes);
  const uniqueRoutes = [...new Set(routes)].filter((r) => !excluded.has(r));
  const urls = uniqueRoutes
    .map((route) => {
      const loc = route === "/" ? "https://www.myiqscores.com" : `https://www.myiqscores.com${route}`;
      const priority = route === "/" || route === "/test" ? "1.0" : route.includes("/blog") ? "0.8" : "0.7";
      return [
        "  <url>",
        `    <loc>${loc}</loc>`,
        `    <lastmod>${today}</lastmod>`,
        "    <changefreq>monthly</changefreq>",
        `    <priority>${priority}</priority>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  fs.writeFileSync(path.resolve(distDir, "sitemap.xml"), sitemap);
  fs.writeFileSync(path.resolve(__dirname, "../public/sitemap.xml"), sitemap);
  console.log(`Sitemap written: ${uniqueRoutes.length} URLs`);
}

async function prerender() {
  const template = fs.readFileSync(path.resolve(distDir, "index.html"), "utf-8");
  // Routes come from src/routeManifest.ts via the SSR bundle — the single
  // source of truth shared with the app's data files.
  const { render, prerenderRoutes, noSitemapRoutes } = await import(serverEntry);
  const routes = [...new Set(prerenderRoutes)];

  const notFoundRoutes = [];

  for (const route of routes) {
    const { html: appHtml, head } = render(route);

    // Guard: a manifest route that renders the 404 page means the manifest
    // and App.tsx routes have drifted apart. Fail loudly instead of shipping
    // a broken page.
    if (appHtml.includes("Page not found") || appHtml.includes("Page Not Found")) {
      notFoundRoutes.push(route);
      continue;
    }

    let finalHtml = template;

    // Inject pre-rendered app HTML into the root div
    finalHtml = finalHtml.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    // Remove any static title (Helmet provides one per page), then inject
    // helmet head tags before </head>
    finalHtml = finalHtml.replace(/<title>.*?<\/title>/, "");
    if (head) {
      finalHtml = finalHtml.replace("</head>", `    ${head}\n  </head>`);
    }

    const filePath =
      route === "/"
        ? path.resolve(distDir, "index.html")
        : path.resolve(distDir, route.slice(1), "index.html");

    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(filePath, finalHtml);
  }

  console.log(`Pre-rendered ${routes.length - notFoundRoutes.length} routes`);

  if (notFoundRoutes.length > 0) {
    console.error(
      `ERROR: ${notFoundRoutes.length} manifest route(s) rendered the 404 page — src/routeManifest.ts and App.tsx are out of sync:\n` +
        notFoundRoutes.map((r) => `  ${r}`).join("\n")
    );
    process.exit(1);
  }

  // Clean up server build
  fs.rmSync(path.resolve(distDir, "server"), { recursive: true, force: true });
  writeSitemap(routes, noSitemapRoutes);

  console.log("Pre-rendering complete!");
}

prerender().catch((err) => {
  console.error("Pre-rendering failed:", err);
  process.exit(1);
});
