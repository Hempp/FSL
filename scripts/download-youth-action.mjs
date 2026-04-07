#!/usr/bin/env node
import { writeFile, mkdir } from "fs/promises";

// ONLY youth/teens actively playing FSL's 5 sports + coaching/mentoring
const photos = [
  // Replace yoga/wellness → teen athlete stretching/warmup
  { url: "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=1000&q=90&fm=jpg", path: "public/images/action/teens-stretching.jpg" },

  // Replace financial-savings coins → teens in classroom/workshop
  { url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1000&q=90&fm=jpg", path: "public/images/action/teens-workshop.jpg" },

  // Replace VR/robot → teens with tablets/laptops learning
  { url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1000&q=90&fm=jpg", path: "public/images/action/teens-learning.jpg" },

  // Replace AI data → teens looking at screens together
  { url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&q=90&fm=jpg", path: "public/images/action/teens-collab.jpg" },

  // Replace robot → coach with clipboard/whiteboard
  { url: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1000&q=90&fm=jpg", path: "public/images/action/coach-training.jpg" },

  // Teen basketball action
  { url: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=1000&q=90&fm=jpg", path: "public/images/action/teen-basketball.jpg" },

  // Teen soccer action
  { url: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1000&q=90&fm=jpg", path: "public/images/action/teen-soccer.jpg" },

  // Teen football
  { url: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=1000&q=90&fm=jpg", path: "public/images/action/teen-football.jpg" },

  // Diverse avatar replacements — teens/young people headshots
  { url: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&q=85&fm=jpg", path: "public/images/action/face-1.jpg" },
  { url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=85&fm=jpg", path: "public/images/action/face-2.jpg" },
  { url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=85&fm=jpg", path: "public/images/action/face-3.jpg" },
];

async function download(url, path) {
  try {
    const res = await fetch(url, { redirect: "follow" });
    if (!res.ok) { console.error("FAIL " + res.status + ": " + path.split("/").pop()); return false; }
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir("public/images/action", { recursive: true });
    await writeFile(path, buf);
    console.log("OK: " + path.split("/").pop() + " (" + (buf.length/1024).toFixed(0) + "KB)");
    return true;
  } catch (e) { console.error("ERR: " + path.split("/").pop()); return false; }
}
const queue = [...photos]; let ok = 0;
async function worker() { while (queue.length) { const i = queue.shift(); if (i && await download(i.url, i.path)) ok++; } }
await Promise.all([worker(), worker(), worker(), worker()]);
console.log("\nDone! " + ok + "/" + photos.length);
