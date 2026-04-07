#!/usr/bin/env node
import { writeFile, mkdir } from "fs/promises";
import { dirname } from "path";

const BASE = "https://fundamentalsportslabs.org/wp-content/uploads/2025/10";

const assets = [
  // Logo
  { url: `${BASE}/ft-logo.png`, path: "public/images/ft-logo.png" },
  // Hero
  { url: `${BASE}/hero-image.png`, path: "public/images/hero-image.png" },
  { url: `${BASE}/cloud-1.png`, path: "public/images/cloud-1.png" },
  // Mission
  { url: `${BASE}/powerin-1.png`, path: "public/images/powerin-1.png" },
  { url: `${BASE}/dreamicon.png`, path: "public/images/dreamicon.png" },
  // Pillars
  { url: `${BASE}/01.png`, path: "public/images/01.png" },
  { url: `${BASE}/02.png`, path: "public/images/02.png" },
  { url: `${BASE}/03.png`, path: "public/images/03.png" },
  { url: `${BASE}/04.png`, path: "public/images/04.png" },
  { url: `${BASE}/dream-image.png`, path: "public/images/dream-image.png" },
  // Programs - icons
  { url: `${BASE}/program-icon01.png`, path: "public/images/program-icon01.png" },
  { url: `${BASE}/trophy.png`, path: "public/images/trophy.png" },
  { url: `${BASE}/program-icon03.png`, path: "public/images/program-icon03.png" },
  { url: `${BASE}/program-icon04.png`, path: "public/images/program-icon04.png" },
  { url: `${BASE}/dna-1.png`, path: "public/images/dna-1.png" },
  { url: `${BASE}/program-icon06.png`, path: "public/images/program-icon06.png" },
  { url: `${BASE}/piggy-bank.png`, path: "public/images/piggy-bank.png" },
  { url: `${BASE}/glasses.png`, path: "public/images/glasses.png" },
  // Programs - background photos
  { url: `${BASE}/92bcf7bcbc.png`, path: "public/images/92bcf7bcbc.png" },
  { url: `${BASE}/Rectangle-19588-1.png`, path: "public/images/Rectangle-19588-1.png" },
  { url: `${BASE}/program-03.png`, path: "public/images/program-03.png" },
  { url: `${BASE}/program-04.png`, path: "public/images/program-04.png" },
  { url: `${BASE}/gettyimages-1139743489-612x612-1.png`, path: "public/images/gettyimages-1139743489-612x612-1.png" },
  { url: `${BASE}/program-06.png`, path: "public/images/program-06.png" },
  { url: `${BASE}/Rectangle-19588.png`, path: "public/images/Rectangle-19588.png" },
  { url: `${BASE}/program-2.png`, path: "public/images/program-2.png" },
  // Impact
  { url: `${BASE}/Youth-Empowered.png`, path: "public/images/Youth-Empowered.png" },
  { url: `${BASE}/Improved-Academics.png`, path: "public/images/Improved-Academics.png" },
  { url: `${BASE}/Graduate-Success-Rate.png`, path: "public/images/Graduate-Success-Rate.png" },
  { url: `${BASE}/Community-Service-Hours.png`, path: "public/images/Community-Service-Hours.png" },
  { url: `${BASE}/communit-image.png`, path: "public/images/communit-image.png" },
  // Donate
  { url: `${BASE}/child.png`, path: "public/images/child.png" },
  // Font
  { url: `${BASE}/bon-vivant.ttf`, path: "public/fonts/bon-vivant.ttf" },
];

async function download(url, path) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`FAIL ${res.status}: ${url}`);
      return;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, buf);
    console.log(`OK: ${path} (${(buf.length / 1024).toFixed(1)}KB)`);
  } catch (e) {
    console.error(`ERR: ${url} - ${e.message}`);
  }
}

// Download 4 at a time
const queue = [...assets];
async function worker() {
  while (queue.length) {
    const item = queue.shift();
    if (item) await download(item.url, item.path);
  }
}
await Promise.all([worker(), worker(), worker(), worker()]);
console.log("\nDone! Downloaded", assets.length, "assets.");
