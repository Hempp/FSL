#!/usr/bin/env node
import { writeFile, mkdir } from "fs/promises";

// Realistic urban youth sports photos — diverse kids in city settings
const photos = [
  // HERO OPTIONS — dramatic, urban, real kids
  { url: "https://images.unsplash.com/photo-1560012057-4372e14c5085?w=1400&q=95&fm=jpg", path: "public/images/urban/hero-basketball-court.jpg" },
  { url: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?w=1400&q=95&fm=jpg", path: "public/images/urban/hero-streetball.jpg" },
  { url: "https://images.unsplash.com/photo-1547347298-4571f2f9e087?w=1400&q=95&fm=jpg", path: "public/images/urban/hero-running.jpg" },

  // MISSION — coach/mentor with urban youth
  { url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=90&fm=jpg", path: "public/images/urban/friends-group.jpg" },
  { url: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1200&q=90&fm=jpg", path: "public/images/urban/team-huddle.jpg" },

  // PROGRAMS — urban sport-specific
  { url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1000&q=90&fm=jpg", path: "public/images/urban/basketball-rim.jpg" },
  { url: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1000&q=90&fm=jpg", path: "public/images/urban/soccer-ball.jpg" },
  { url: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1000&q=90&fm=jpg", path: "public/images/urban/football-game.jpg" },

  // CTA — powerful, emotional
  { url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1600&q=95&fm=jpg", path: "public/images/urban/cta-athletes.jpg" },

  // ABOUT
  { url: "https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?w=1200&q=90&fm=jpg", path: "public/images/urban/community.jpg" },
];

async function download(url, path) {
  try {
    const res = await fetch(url, { redirect: "follow" });
    if (!res.ok) { console.error("FAIL " + res.status + ": " + path.split("/").pop()); return false; }
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir("public/images/urban", { recursive: true });
    await writeFile(path, buf);
    console.log("OK: " + path.split("/").pop() + " (" + (buf.length/1024).toFixed(0) + "KB)");
    return true;
  } catch (e) { console.error("ERR: " + path.split("/").pop()); return false; }
}

const queue = [...photos];
let ok = 0;
async function worker() { while (queue.length) { const i = queue.shift(); if (i && await download(i.url, i.path)) ok++; } }
await Promise.all([worker(), worker(), worker(), worker()]);
console.log("\nDone! " + ok + "/" + photos.length);
