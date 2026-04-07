#!/usr/bin/env node
import { chromium } from "playwright";

async function run() {
  const browser = await chromium.launch({ headless: true });

  // Desktop
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("http://localhost:60000", { waitUntil: "networkidle", timeout: 15000 });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: "docs/design-references/clone-desktop-v2.png", fullPage: true });
  console.log("OK: Desktop screenshot saved");

  // Mobile
  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await mobile.goto("http://localhost:60000", { waitUntil: "networkidle", timeout: 15000 });
  await mobile.waitForTimeout(2000);
  await mobile.screenshot({ path: "docs/design-references/clone-mobile-v2.png", fullPage: true });
  console.log("OK: Mobile screenshot saved");

  await browser.close();
}

run().catch(console.error);
