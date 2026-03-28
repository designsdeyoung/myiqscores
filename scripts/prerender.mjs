import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "../dist");
const serverEntry = path.resolve(distDir, "server/entry-server.js");

// IQ score pages
const iqScores = [40, 45, 50, 55, 60, 65, 68, 70, 72, 75, 76, 78, 80, 82, 84, 85, 86, 88, 90, 92, 95, 96, 98, 100, 102, 104, 105, 106, 108, 110, 112, 114, 115, 118, 119, 120, 122, 125, 128, 130, 132, 135, 138, 140, 142, 145, 148, 150, 155, 160, 165, 170, 180, 200];

// Country pages
const countrySlugs = [
  "japan", "south-korea", "china", "taiwan", "singapore", "hong-kong",
  "netherlands", "switzerland", "finland", "germany", "united-kingdom",
  "ireland", "austria", "belgium", "sweden", "norway", "poland", "france",
  "czech-republic", "hungary", "italy", "spain", "russia", "portugal", "greece",
  "canada", "united-states", "mexico", "australia", "new-zealand",
  "argentina", "colombia", "brazil", "israel", "turkey", "uae", "iran",
  "saudi-arabia", "vietnam", "thailand", "philippines", "indonesia", "pakistan",
  "india", "egypt", "kenya", "south-africa", "nigeria", "ghana", "ethiopia",
];

// Career pages
const careerSlugs = [
  "doctor", "lawyer", "engineer", "software-developer", "teacher",
  "nurse", "accountant", "police-officer", "electrician", "plumber",
  "data-scientist", "architect", "pharmacist", "dentist", "firefighter",
  "military-officer", "professor", "social-worker", "pilot", "judge",
  "psychologist", "veterinarian", "surgeon", "scientist", "graphic-designer",
  "chef", "real-estate-agent", "paramedic", "truck-driver", "journalist",
  "mathematician", "professional-athlete", "welder", "ceo", "mechanic",
  "physical-therapist", "pharmacy-technician", "carpenter",
];

// Routes to pre-render
const routes = [
  "/",
  "/test",
  "/what-is-iq",
  "/iq-score-ranges",
  "/average-iq-by-country",
  ...iqScores.map((s) => `/is-${s}-iq-good`),
  ...countrySlugs.map((s) => `/average-iq/${s}`),
  ...careerSlugs.map((s) => `/iq-needed-for/${s}`),
  "/iq-vs-eq",
  "/sat-to-iq",
  "/how-to-improve-iq",
  "/iq-by-age/children",
  "/iq-by-age/teenagers",
  "/iq-by-age/young-adults",
  "/iq-by-age/adults",
  "/iq-by-age/older-adults",
  "/iq-by-age/seniors",
  "/famous-iq/albert-einstein",
  "/famous-iq/stephen-hawking",
  "/famous-iq/elon-musk",
  "/famous-iq/leonardo-da-vinci",
  "/famous-iq/nikola-tesla",
  "/famous-iq/bill-gates",
  "/famous-iq/marie-curie",
  "/famous-iq/isaac-newton",
  "/famous-iq/steve-jobs",
  "/famous-iq/mark-zuckerberg",
  "/famous-iq/barack-obama",
  "/famous-iq/kim-kardashian",
  "/famous-iq/cristiano-ronaldo",
  "/famous-iq/jeff-bezos",
  "/famous-iq/oprah-winfrey",
  "/famous-iq/richard-feynman",
  "/famous-iq/taylor-swift",
  "/famous-iq/warren-buffett",
  "/famous-iq/kanye-west",
  "/famous-iq/shakira",
  "/famous-iq/benjamin-franklin",
  "/famous-iq/marilyn-monroe",
  "/famous-iq/lebron-james",
  "/famous-iq/donald-trump",
  "/famous-iq/garry-kasparov",
  "/famous-iq/beyonce",
  "/famous-iq/snoop-dogg",
  "/famous-iq/jodie-foster",
  "/famous-iq/dolph-lundgren",
  "/famous-iq/james-woods",
  "/famous-iq/natalie-portman",
  "/iq-myths/do-video-games-make-you-smarter",
  "/iq-myths/mozart-effect-iq",
  "/iq-myths/birth-order-and-iq",
  "/iq-myths/does-iq-determine-success",
  "/iq-myths/iq-gender-differences",
  "/iq-myths/brain-size-and-iq",
  "/iq-myths/does-reading-make-you-smarter",
  "/iq-myths/is-iq-fixed-at-birth",
  "/iq-myths/bilingual-iq",
  "/iq-myths/only-child-iq",
  "/iq-myths/does-iq-decrease-with-age",
  "/iq-myths/does-alcohol-kill-brain-cells",
  "/iq-myths/is-iq-the-same-as-intelligence",
  "/iq-myths/does-marijuana-lower-iq",
  "/iq-myths/are-left-handed-people-smarter",
  "/average-iq-by-state/massachusetts",
  "/average-iq-by-state/new-hampshire",
  "/average-iq-by-state/vermont",
  "/average-iq-by-state/connecticut",
  "/average-iq-by-state/minnesota",
  "/average-iq-by-state/oregon",
  "/average-iq-by-state/washington",
  "/average-iq-by-state/new-jersey",
  "/average-iq-by-state/virginia",
  "/average-iq-by-state/wisconsin",
  "/average-iq-by-state/colorado",
  "/average-iq-by-state/california",
  "/average-iq-by-state/new-york",
  "/average-iq-by-state/illinois",
  "/average-iq-by-state/pennsylvania",
  "/average-iq-by-state/ohio",
  "/average-iq-by-state/texas",
  "/average-iq-by-state/florida",
  "/average-iq-by-state/georgia",
  "/average-iq-by-state/alabama",
  "/average-iq-by-state/louisiana",
  "/average-iq-by-state/mississippi",
  "/average-iq-by-state/north-carolina",
  "/average-iq-by-state/michigan",
  "/average-iq-by-state/arizona",
  "/average-iq-by-state/iowa",
  "/average-iq-by-state/maryland",
  "/average-iq-by-state/montana",
  "/average-iq-by-state/indiana",
  "/average-iq-by-state/south-carolina",
  "/average-iq-by-state/tennessee",
  "/average-iq-by-state/kentucky",
  "/average-iq-by-state/west-virginia",
  "/average-iq-by-state/nevada",
  "/average-iq-by-state/hawaii",
  "/average-iq-by-state/kansas",
  "/average-iq-by-state/utah",
  "/average-iq-by-state/nebraska",
  "/average-iq-by-state/missouri",
  "/average-iq-by-state/south-dakota",
  "/average-iq-by-state/maine",
  "/average-iq-by-state/north-dakota",
  "/average-iq-by-state/idaho",
  "/average-iq-by-state/delaware",
  "/average-iq-by-state/rhode-island",
  "/average-iq-by-state/wyoming",
  "/average-iq-by-state/alaska",
  "/average-iq-by-state/oklahoma",
  "/average-iq-by-state/arkansas",
  "/average-iq-by-state/new-mexico",
  "/highest-iq-ever",
  "/good-iq-score",
  "/genius-iq",
  "/mensa-iq-test",
];

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
