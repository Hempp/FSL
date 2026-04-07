#!/usr/bin/env node
import { writeFile, mkdir } from "fs/promises";

// Youth-specific sports photos — kids actually playing the 5 FSL sports
const photos = [
  // YOUTH BASKETBALL
  { url: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=1000&q=90&fm=jpg", path: "public/images/sports/youth-basketball.jpg" },
  { url: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=1000&q=90&fm=jpg", path: "public/images/sports/youth-basketball-2.jpg" },

  // YOUTH SOCCER
  { url: "https://images.unsplash.com/photo-1596731498067-cbe1a79d5e3f?w=1000&q=90&fm=jpg", path: "public/images/sports/youth-soccer.jpg" },
  { url: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1000&q=90&fm=jpg", path: "public/images/sports/youth-soccer-2.jpg" },

  // YOUTH FOOTBALL
  { url: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=1000&q=90&fm=jpg", path: "public/images/sports/youth-football.jpg" },

  // YOUTH GOLF
  { url: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?w=1000&q=90&fm=jpg", path: "public/images/sports/youth-golf.jpg" },

  // YOUTH TRACK
  { url: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1000&q=90&fm=jpg", path: "public/images/sports/youth-track.jpg" },
  { url: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=1000&q=90&fm=jpg", path: "public/images/sports/youth-track-2.jpg" },

  // VR / AI / TECH — youth with technology
  { url: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?w=1000&q=90&fm=jpg", path: "public/images/sports/youth-vr-2.jpg" },
  { url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1000&q=90&fm=jpg", path: "public/images/sports/ai-robot.jpg" },
  { url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1000&q=90&fm=jpg", path: "public/images/sports/ai-data.jpg" },

  // FINANCIAL LITERACY
  { url: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1000&q=90&fm=jpg", path: "public/images/sports/financial-savings.jpg" },

  // MENTAL WELLNESS - youth focused
  { url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1000&q=90&fm=jpg", path: "public/images/sports/wellness-yoga.jpg" },
];

async function download(url, path) {
  try {
    const res = await fetch(url, { redirect: "follow" });
    if (!res.ok) { console.error("FAIL " + res.status + ": " + path.split("/").pop()); return false; }
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir("public/images/sports", { recursive: true });
    await writeFile(path, buf);
    console.log("OK: " + path.split("/").pop() + " (" + (buf.length/1024).toFixed(0) + "KB)");
    return true;
  } catch (e) { console.error("ERR: " + path.split("/").pop()); return false; }
}

const queue = [...photos];
let ok = 0;
async function worker() { while (queue.length) { const i = queue.shift(); if (i && await download(i.url, i.path)) ok++; } }
await Promise.all([worker(), worker(), worker(), worker()]);
console.log("\nDone! " + ok + "/" + photos.length + " youth sport photos.");
