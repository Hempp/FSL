#!/usr/bin/env node
import { writeFile, mkdir } from "fs/promises";

// Highly targeted photos for FSL's mission areas
const photos = [
  // HERO — Urban youth sports, high energy
  { url: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=1920&q=95&fm=jpg", path: "public/images/premium/hero-urban-basketball.jpg" },

  // MISSION — Coach mentoring youth athlete
  { url: "https://images.unsplash.com/photo-1594882645126-14020914d58d?w=1400&q=90&fm=jpg", path: "public/images/premium/coach-mentoring.jpg" },

  // PROGRAMS — Sport-specific
  { url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1000&q=90&fm=jpg", path: "public/images/premium/basketball-hoop.jpg" },
  { url: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1000&q=90&fm=jpg", path: "public/images/premium/youth-soccer-game.jpg" },
  { url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1000&q=90&fm=jpg", path: "public/images/premium/strength-training.jpg" },
  { url: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=1000&q=90&fm=jpg", path: "public/images/premium/football-youth.jpg" },

  // MENTAL HEALTH — Mindfulness, wellness, meditation
  { url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1000&q=90&fm=jpg", path: "public/images/premium/meditation-peace.jpg" },
  { url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1000&q=90&fm=jpg", path: "public/images/premium/yoga-wellness.jpg" },

  // FINANCIAL LITERACY — Money, education, planning
  { url: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1000&q=90&fm=jpg", path: "public/images/premium/financial-planning.jpg" },
  { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=90&fm=jpg", path: "public/images/premium/financial-data.jpg" },

  // TECHNOLOGY — Kids coding, STEM
  { url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1000&q=90&fm=jpg", path: "public/images/premium/tech-coding.jpg" },
  { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1000&q=90&fm=jpg", path: "public/images/premium/tech-collaboration.jpg" },

  // COMMUNITY — Group activities, teamwork
  { url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=90&fm=jpg", path: "public/images/premium/community-group.jpg" },
  { url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1400&q=90&fm=jpg", path: "public/images/premium/community-together.jpg" },

  // EVENTS — Action shots
  { url: "https://images.unsplash.com/photo-1461896836934-bd45ba9b5f14?w=1000&q=90&fm=jpg", path: "public/images/premium/event-action.jpg" },
  { url: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=1000&q=90&fm=jpg", path: "public/images/premium/event-training-field.jpg" },

  // CTA — Inspiring, dramatic
  { url: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=1920&q=95&fm=jpg", path: "public/images/premium/cta-dramatic.jpg" },

  // AVATARS — Diverse, realistic
  { url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=85&fm=jpg", path: "public/images/premium/avatar-male-1.jpg" },
  { url: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&q=85&fm=jpg", path: "public/images/premium/avatar-female-1.jpg" },
  { url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=85&fm=jpg", path: "public/images/premium/avatar-male-2.jpg" },

  // DONATE — Emotional, impactful
  { url: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1400&q=90&fm=jpg", path: "public/images/premium/donate-kids.jpg" },

  // ABOUT — Team/organizational
  { url: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=90&fm=jpg", path: "public/images/premium/team-meeting.jpg" },
];

async function download(url, path) {
  try {
    const res = await fetch(url, { redirect: "follow" });
    if (!res.ok) { console.error(`FAIL ${res.status}: ${path}`); return false; }
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir("public/images/premium", { recursive: true });
    await writeFile(path, buf);
    const kb = (buf.length / 1024).toFixed(0);
    console.log(`OK: ${path.replace('public/images/premium/', '')} (${kb}KB)`);
    return true;
  } catch (e) { console.error(`ERR: ${path} - ${e.message}`); return false; }
}

const queue = [...photos];
let success = 0;
async function worker() {
  while (queue.length) {
    const item = queue.shift();
    if (item && await download(item.url, item.path)) success++;
  }
}
await Promise.all([worker(), worker(), worker(), worker()]);
console.log(`\nDone! ${success}/${photos.length} photos downloaded.`);
