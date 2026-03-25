import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist");
const serverEntry = path.resolve(distDir, "server/entry-server.js");

// Routes to pre-render
const routes = ["/"];

async function prerender() {
  const template = fs.readFileSync(path.resolve(distDir, "index.html"), "utf-8");
  const { render } = await import(serverEntry);

  for (const route of routes) {
    const { html: appHtml, head } = render(route);

    let finalHtml = template;

    // Inject pre-rendered app HTML into the root div
    finalHtml = finalHtml.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    // Inject helmet head tags before </head>
    // Remove the static meta tags that Helmet now manages dynamically
    // (title, description, canonical, og:*, twitter:*)
    finalHtml = finalHtml.replace(
      /<title>.*?<\/title>/,
      "" // Helmet will provide the title
    );

    if (head) {
      finalHtml = finalHtml.replace("</head>", `    ${head}\n  </head>`);
    }

    // Determine output path
    const filePath =
      route === "/"
        ? path.resolve(distDir, "index.html")
        : path.resolve(distDir, route.slice(1), "index.html");

    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(filePath, finalHtml);
    console.log(`Pre-rendered: ${route} → ${path.relative(distDir, filePath)}`);
  }

  // Clean up server build
  fs.rmSync(path.resolve(distDir, "server"), { recursive: true, force: true });

  console.log("Pre-rendering complete!");
}

prerender().catch((err) => {
  console.error("Pre-rendering failed:", err);
  process.exit(1);
});
