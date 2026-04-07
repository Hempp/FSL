#!/usr/bin/env node
import { chromium } from "playwright";

async function run() {
  const browser = await chromium.launch({ headless: true });

  // Clone desktop
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("http://localhost:60000", { waitUntil: "networkidle", timeout: 15000 });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: "docs/design-references/clone-desktop-v3.png", fullPage: true });
  console.log("OK: Clone desktop v3");

  // Figma - scroll through and capture sections
  const figma = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await figma.goto("https://www.figma.com/proto/0hjHuw0wu6Mp5L1JZOVOq3/fundamentalsportslabs--Copy-?node-id=1-18&scaling=min-zoom&content-scaling=fixed", { waitUntil: "networkidle", timeout: 30000 });
  await figma.waitForTimeout(8000);

  // Try scrolling the Figma prototype
  for (let i = 0; i < 10; i++) {
    await figma.mouse.wheel(0, 800);
    await figma.waitForTimeout(500);
  }
  await figma.waitForTimeout(2000);
  // Take full page of what we can see
  await figma.screenshot({ path: "docs/design-references/figma-scrolled.png" });
  console.log("OK: Figma scrolled");

  // Scroll back to top for viewport shot
  await figma.evaluate(() => window.scrollTo(0, 0));
  await figma.waitForTimeout(1000);
  await figma.screenshot({ path: "docs/design-references/figma-top.png" });
  console.log("OK: Figma top");

  await browser.close();
}

run().catch(console.error);
