#!/usr/bin/env node
import { chromium } from "playwright";

const FIGMA = "https://www.figma.com/proto/0hjHuw0wu6Mp5L1JZOVOq3/fundamentalsportslabs--Copy-?node-id=1-18&scaling=min-zoom&content-scaling=fixed";

async function run() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  console.log("Loading Figma prototype...");
  await page.goto(FIGMA, { waitUntil: "networkidle", timeout: 45000 });
  await page.waitForTimeout(10000);

  // Click to dismiss any cookie banner
  try {
    const closeBtn = page.locator('button:has-text("Opt out"), button:has-text("Close"), button:has-text("Accept")');
    if (await closeBtn.count() > 0) {
      await closeBtn.first().click();
      await page.waitForTimeout(1000);
    }
  } catch(e) {}

  // Take viewport screenshots as we scroll through
  const sections = [
    { name: "figma-hero", scrollY: 0 },
    { name: "figma-mission", scrollY: 900 },
    { name: "figma-pillars", scrollY: 1800 },
    { name: "figma-programs", scrollY: 2700 },
    { name: "figma-impact", scrollY: 3600 },
    { name: "figma-events", scrollY: 4500 },
    { name: "figma-testimonials", scrollY: 5400 },
    { name: "figma-donate", scrollY: 6300 },
    { name: "figma-footer", scrollY: 7200 },
  ];

  for (const section of sections) {
    // Scroll within the Figma prototype frame
    await page.evaluate((y) => {
      // Try scrolling the prototype frame
      const frame = document.querySelector('[data-testid="prototype-frame"]') ||
                    document.querySelector('.prototype-frame') ||
                    document.querySelector('[class*="prototype"]') ||
                    document.querySelector('iframe');
      if (frame && frame.contentWindow) {
        frame.contentWindow.scrollTo(0, y);
      } else {
        window.scrollTo(0, y);
      }
    }, section.scrollY);
    await page.waitForTimeout(1500);
    await page.screenshot({ path: `docs/design-references/${section.name}.png` });
    console.log(`OK: ${section.name}`);
  }

  await browser.close();
  console.log("Done!");
}

run().catch(console.error);
