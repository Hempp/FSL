#!/usr/bin/env node
import { writeFile, mkdir } from "fs/promises";

// Photos for FSL's 5 sports: Golf, Football, Basketball, Soccer, Track & Field
const photos = [
  // GOLF
  { url: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1000&q=90&fm=jpg", path: "public/images/sports/golf-swing.jpg" },
  { url: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1000&q=90&fm=jpg", path: "public/images/sports/golf-course.jpg" },

  // FOOTBALL
  { url: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=1000&q=90&fm=jpg", path: "public/images/sports/football-action.jpg" },
  { url: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1000&q=90&fm=jpg", path: "public/images/sports/football-field.jpg" },

  // BASKETBALL
  { url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1000&q=90&fm=jpg", path: "public/images/sports/basketball-hoop.jpg" },
  { url: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=1000&q=90&fm=jpg", path: "public/images/sports/basketball-game.jpg" },

  // SOCCER
  { url: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1000&q=90&fm=jpg", path: "public/images/sports/soccer-game.jpg" },
  { url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1000&q=90&fm=jpg", path: "public/images/sports/soccer-field.jpg" },

  // TRACK & FIELD
  { url: "https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?w=1000&q=90&fm=jpg", path: "public/images/sports/track-running.jpg" },
  { url: "https://images.unsplash.com/photo-1532444458054-01a7dd3e9fca?w=1000&q=90&fm=jpg", path: "public/images/sports/track-start.jpg" },

  // HERO — dramatic multi-sport
  { url: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=1920&q=95&fm=jpg", path: "public/images/sports/hero-athlete.jpg" },

  // YOUTH specific
  { url: "https://images.unsplash.com/photo-1529926706528-db9e5010cd3e?w=1200&q=90&fm=jpg", path: "public/images/sports/youth-training.jpg" },
];

async function download(url, path) {
  try {
    const res = await fetch(url, { redirect: "follow" });
    if (!res.ok) { console.error(`FAIL ${res.status}: ${path}`); return false; }
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir("public/images/sports", { recursive: true });
    await writeFile(path, buf);
    console.log(`OK: ${path.split('/').pop()} (${(buf.length/1024).toFixed(0)}KB)`);
    return true;
  } catch (e) { console.error(`ERR: ${path} - ${e.message}`); return false; }
}

const queue = [...photos];
let ok = 0;
async function worker() { while (queue.length) { const i = queue.shift(); if (i && await download(i.url, i.path)) ok++; } }
await Promise.all([worker(), worker(), worker(), worker()]);
console.log(`\nDone! ${ok}/${photos.length} sport photos downloaded.`);
