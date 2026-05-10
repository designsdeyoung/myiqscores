/**
 * Injects known stable Wikimedia Commons image URLs for famous historical figures.
 * Run: node scripts/inject-known-images.mjs
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.resolve(__dirname, "../src/data/famousIQData.ts");

// Known stable Wikimedia Commons image URLs (all public domain or CC)
const knownImages = {
  "albert-einstein": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/400px-Albert_Einstein_Head.jpg",
  "stephen-hawking": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Stephen_Hawking.StarChild.jpg/400px-Stephen_Hawking.StarChild.jpg",
  "leonardo-da-vinci": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Leonardo_self_portrait_zoomed.jpg/400px-Leonardo_self_portrait_zoomed.jpg",
  "nikola-tesla": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/N.Tesla.JPG/400px-N.Tesla.JPG",
  "marie-curie": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c._1920s.jpg/400px-Marie_Curie_c._1920s.jpg",
  "isaac-newton": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/GodfreyKneller-IsaacNewton-1689.jpg/400px-GodfreyKneller-IsaacNewton-1689.jpg",
  "benjamin-franklin": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Joseph_Siffrein_Duplessis_-_Benjamin_Franklin_-_Google_Art_Project.jpg/400px-Joseph_Siffrein_Duplessis_-_Benjamin_Franklin_-_Google_Art_Project.jpg",
  "richard-feynman": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/RichardFeynman-PhrysicsTeacher.jpg/400px-RichardFeynman-PhrysicsTeacher.jpg",
  "charles-darwin": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Charles_Darwin_seated_crop.jpg/400px-Charles_Darwin_seated_crop.jpg",
  "garry-kasparov": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Garry_Kasparov_in_2022_%28cropped%29.jpg/400px-Garry_Kasparov_in_2022_%28cropped%29.jpg",
  "sigmund-freud": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg/400px-Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg",
  "plato": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Plato_Silanion_Musei_Capitolini_MC1377.jpg/400px-Plato_Silanion_Musei_Capitolini_MC1377.jpg",
  "aristotle": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/400px-Aristotle_Altemps_Inv8575.jpg",
  "socrates": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Socrate_du_Louvre.jpg/400px-Socrate_du_Louvre.jpg",
  "immanuel-kant": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Immanuel_Kant_%28painted_portrait%29.jpg/400px-Immanuel_Kant_%28painted_portrait%29.jpg",
  "napoleon-bonaparte": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg/400px-Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg",
  "michelangelo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Miguel_Ángel%2C_por_Daniele_da_Volterra_%28detalle%29.jpg/400px-Miguel_Ángel%2C_por_Daniele_da_Volterra_%28detalle%29.jpg",
  "galileo-galilei": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg/400px-Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg",
  "william-shakespeare": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/400px-Shakespeare.jpg",
  "voltaire": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Nicolas_de_Largilli%C3%A8re%2C_Voltaire_-_Mus%C3%A9e_Carnavalet_-_1718-1720_%28cropped%29.jpg/400px-Nicolas_de_Largilli%C3%A8re%2C_Voltaire_-_Mus%C3%A9e_Carnavalet_-_1718-1720_%28cropped%29.jpg",
  "charles-dickens": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Dickens_Gurney_head.jpg/400px-Dickens_Gurney_head.jpg",
  "winston-churchill": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Winston_Churchill_1941_photo_by_Yousuf_Karsh.jpg/400px-Winston_Churchill_1941_photo_by_Yousuf_Karsh.jpg",
  "abraham-lincoln": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg/400px-Abraham_Lincoln_O-77_matte_collodion_print.jpg",
  "thomas-jefferson": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Official_Presidential_portrait_of_Thomas_Jefferson_%28by_Rembrandt_Peale%2C_1800%29%28cropped%29.jpg/400px-Official_Presidential_portrait_of_Thomas_Jefferson_%28by_Rembrandt_Peale%2C_1800%29%28cropped%29.jpg",
  "george-washington": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/400px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg",
  "cleopatra": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Kleopatra-VII.-Altes-Museum-Berlin1.jpg/400px-Kleopatra-VII.-Altes-Museum-Berlin1.jpg",
  "alan-turing": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Alan_Turing_Aged_16.jpg/400px-Alan_Turing_Aged_16.jpg",
  "john-von-neumann": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/JohnvonNeumann-LosAlamos.gif/400px-JohnvonNeumann-LosAlamos.gif",
  "stephen-fry": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Stephen_Fry_2012.jpg/400px-Stephen_Fry_2012.jpg",
};

let source = fs.readFileSync(dataPath, "utf-8");

let injected = 0;

for (const [slug, imageUrl] of Object.entries(knownImages)) {
  // Skip if already has imageUrl
  const checkPattern = new RegExp(`slug:\\s*"${slug.replace(/-/g, "\\-")}",[^{]*?imageUrl:`, "s");
  if (checkPattern.test(source)) {
    console.log(`✓ ${slug}: already has imageUrl, skipping`);
    continue;
  }

  // Find the slug line and inject imageUrl after estimatedIQ
  const slugLine = new RegExp(`(slug:\\s*"${slug.replace(/-/g, "\\-")}",)`, "g");
  if (!slugLine.test(source)) {
    console.log(`✗ ${slug}: not found in file`);
    continue;
  }

  source = source.replace(
    new RegExp(`(slug:\\s*"${slug.replace(/-/g, "\\-")}",)`, "g"),
    `$1\n    imageUrl: "${imageUrl}",`
  );
  injected++;
  console.log(`✓ ${slug}: injected`);
}

fs.writeFileSync(dataPath, source);
console.log(`\nDone! Injected ${injected} image URLs.`);
