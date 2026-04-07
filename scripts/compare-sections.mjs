#!/usr/bin/env node
import { chromium } from "playwright";

const ORIGINAL = "https://fundamentalsportslabs.org";
const CLONE = "http://localhost:60000";

async function captureScrollSections(page, prefix, sectionCount) {
  const results = [];
  for (let i = 0; i < sectionCount; i++) {
    const y = i * 900;
    await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
    await page.waitForTimeout(800);
    const path = `docs/design-references/${prefix}-section-${i}.png`;
    await page.screenshot({ path });
    results.push(path);
    console.log(`OK: ${path}`);
  }
  return results;
}

async function run() {
  const browser = await chromium.launch({ headless: true });

  // Original site
  console.log("=== ORIGINAL SITE ===");
  const orig = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await orig.goto(ORIGINAL, { waitUntil: "networkidle", timeout: 30000 });
  await orig.waitForTimeout(3000);
  // Full page
  await orig.screenshot({ path: "docs/design-references/original-full.png", fullPage: true });
  console.log("OK: original full page");
  // Section by section
  await captureScrollSections(orig, "original", 10);
  await orig.close();

  // Clone
  console.log("\n=== CLONE ===");
  const clone = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await clone.goto(CLONE, { waitUntil: "networkidle", timeout: 15000 });
  await clone.waitForTimeout(2000);
  await clone.screenshot({ path: "docs/design-references/clone-full.png", fullPage: true });
  console.log("OK: clone full page");
  await captureScrollSections(clone, "clone", 10);
  await clone.close();

  await browser.close();
  console.log("\nDone! Compare original-section-N.png vs clone-section-N.png");
}

run().catch(console.error);
