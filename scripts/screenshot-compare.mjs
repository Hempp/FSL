#!/usr/bin/env node
import { chromium } from "playwright";

const FIGMA_URL = "https://www.figma.com/proto/0hjHuw0wu6Mp5L1JZOVOq3/fundamentalsportslabs--Copy-?node-id=1-18";
const CLONE_URL = "http://localhost:60000";

async function run() {
  const browser = await chromium.launch({ headless: true });

  // Screenshot the Figma prototype
  console.log("Capturing Figma prototype...");
  const figmaPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  try {
    await figmaPage.goto(FIGMA_URL, { waitUntil: "networkidle", timeout: 30000 });
    // Wait for Figma to render
    await figmaPage.waitForTimeout(8000);
    await figmaPage.screenshot({ path: "docs/design-references/figma-prototype-desktop.png", fullPage: true });
    console.log("OK: Figma desktop screenshot saved");
  } catch (e) {
    console.error("Figma screenshot error:", e.message);
    // Try a viewport screenshot instead of full page
    try {
      await figmaPage.screenshot({ path: "docs/design-references/figma-prototype-desktop.png" });
      console.log("OK: Figma viewport screenshot saved (fallback)");
    } catch (e2) {
      console.error("Figma fallback failed:", e2.message);
    }
  }
  await figmaPage.close();

  // Screenshot our clone - desktop
  console.log("\nCapturing clone at desktop (1440px)...");
  const clonePage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await clonePage.goto(CLONE_URL, { waitUntil: "networkidle", timeout: 15000 });
  await clonePage.waitForTimeout(2000);
  await clonePage.screenshot({ path: "docs/design-references/clone-desktop-full.png", fullPage: true });
  console.log("OK: Clone desktop full-page screenshot saved");

  // Screenshot our clone - mobile
  console.log("\nCapturing clone at mobile (390px)...");
  const mobilePage = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await mobilePage.goto(CLONE_URL, { waitUntil: "networkidle", timeout: 15000 });
  await mobilePage.waitForTimeout(2000);
  await mobilePage.screenshot({ path: "docs/design-references/clone-mobile-full.png", fullPage: true });
  console.log("OK: Clone mobile full-page screenshot saved");

  await browser.close();
  console.log("\nDone! Screenshots saved to docs/design-references/");
}

run().catch(console.error);
