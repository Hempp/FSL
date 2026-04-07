#!/usr/bin/env node
import { writeFile, mkdir } from "fs/promises";

// Premium Unsplash photos — youth sports, coaching, community
const photos = [
  // Hero — dramatic action
  { url: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=1920&q=90&fm=jpg", path: "public/images/premium/hero-main.jpg" },
  // Mission — coach with kids
  { url: "https://images.unsplash.com/photo-1529926706528-db9e5010cd3e?w=1200&q=90&fm=jpg", path: "public/images/premium/mission.jpg" },
  // Programs grid
  { url: "https://images.unsplash.com/photo-1461896836934-bd45ba9b5f14?w=800&q=85&fm=jpg", path: "public/images/premium/basketball.jpg" },
  { url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=85&fm=jpg", path: "public/images/premium/soccer.jpg" },
  { url: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=800&q=85&fm=jpg", path: "public/images/premium/training.jpg" },
  { url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=85&fm=jpg", path: "public/images/premium/gym.jpg" },
  { url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=85&fm=jpg", path: "public/images/premium/education.jpg" },
  { url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=85&fm=jpg", path: "public/images/premium/classroom.jpg" },
  // Events
  { url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=85&fm=jpg", path: "public/images/premium/event-basketball.jpg" },
  { url: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=85&fm=jpg", path: "public/images/premium/event-soccer.jpg" },
  { url: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&q=85&fm=jpg", path: "public/images/premium/event-workshop.jpg" },
  // CTA
  { url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1920&q=90&fm=jpg", path: "public/images/premium/cta-bg.jpg" },
  // Testimonial avatars
  { url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&fm=jpg", path: "public/images/premium/avatar-1.jpg" },
  { url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&fm=jpg", path: "public/images/premium/avatar-2.jpg" },
  { url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80&fm=jpg", path: "public/images/premium/avatar-3.jpg" },
];

async function download(url, path) {
  try {
    const res = await fetch(url, { redirect: "follow" });
    if (!res.ok) { console.error(`FAIL ${res.status}: ${path}`); return; }
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir("public/images/premium", { recursive: true });
    await writeFile(path, buf);
    console.log(`OK: ${path} (${(buf.length / 1024).toFixed(0)}KB)`);
  } catch (e) { console.error(`ERR: ${path} - ${e.message}`); }
}

const queue = [...photos];
async function worker() {
  while (queue.length) {
    const item = queue.shift();
    if (item) await download(item.url, item.path);
  }
}
await Promise.all([worker(), worker(), worker()]);
console.log(`\nDone! ${photos.length} premium photos downloaded.`);
