#!/usr/bin/env node
import { chromium } from "playwright";

const SITE = "https://fundamentalsportslabs.org";

async function run() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  // 1. Visit homepage and discover all internal links
  console.log("=== CRAWLING SITE ===");
  await page.goto(SITE, { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(3000);

  const links = await page.evaluate(() => {
    const anchors = [...document.querySelectorAll("a[href]")];
    const base = window.location.origin;
    const uniqueLinks = new Set();
    anchors.forEach((a) => {
      const href = a.href;
      if (href.startsWith(base) && !href.includes("#") && !href.includes("wp-") && !href.includes("wp-admin")) {
        uniqueLinks.add(href);
      }
    });
    return [...uniqueLinks];
  });

  console.log(`Found ${links.length} internal pages:`);
  links.forEach((l) => console.log(`  ${l}`));

  // 2. Screenshot homepage sections in detail
  console.log("\n=== DETAILED HOMEPAGE SECTIONS ===");

  // Get all section IDs/offsets
  const sections = await page.evaluate(() => {
    const sectionEls = document.querySelectorAll("section, [id]");
    const results = [];
    sectionEls.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.height > 100 && el.id) {
        results.push({
          id: el.id,
          top: rect.top + window.scrollY,
          height: rect.height,
          tag: el.tagName,
        });
      }
    });
    return results;
  });

  console.log(`Found ${sections.length} sections:`);
  sections.forEach((s) => console.log(`  #${s.id} at y=${Math.round(s.top)} h=${Math.round(s.height)}`));

  // Screenshot each section
  for (const section of sections) {
    await page.evaluate((y) => window.scrollTo(0, y - 50), section.top);
    await page.waitForTimeout(500);
    const name = section.id.replace(/[^a-z0-9-]/gi, "-");
    await page.screenshot({ path: `docs/design-references/original-${name}.png` });
    console.log(`OK: original-${name}.png`);
  }

  // 3. Full-page screenshot at high detail
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: "docs/design-references/original-full-hd.png", fullPage: true });
  console.log("OK: original-full-hd.png");

  // 4. Visit each discovered page
  for (const link of links) {
    if (link === SITE || link === SITE + "/") continue;
    const slug = new URL(link).pathname.replace(/\//g, "-").replace(/^-/, "").replace(/-$/, "") || "index";
    console.log(`\nVisiting: ${link}`);
    try {
      await page.goto(link, { waitUntil: "networkidle", timeout: 15000 });
      await page.waitForTimeout(2000);
      await page.screenshot({ path: `docs/design-references/original-page-${slug}.png`, fullPage: true });
      console.log(`OK: original-page-${slug}.png`);

      // Extract page content
      const content = await page.evaluate(() => {
        return {
          title: document.title,
          h1: [...document.querySelectorAll("h1")].map((e) => e.textContent.trim()),
          h2: [...document.querySelectorAll("h2")].map((e) => e.textContent.trim()),
          forms: document.querySelectorAll("form").length,
          images: document.querySelectorAll("img").length,
          sections: document.querySelectorAll("section, [id]").length,
        };
      });
      console.log(`  Title: ${content.title}`);
      console.log(`  H1s: ${content.h1.join(", ")}`);
      console.log(`  H2s: ${content.h2.join(", ")}`);
      console.log(`  Forms: ${content.forms}, Images: ${content.images}`);
    } catch (e) {
      console.log(`  ERROR: ${e.message}`);
    }
  }

  // 5. Now screenshot our clone for comparison
  console.log("\n=== CLONE COMPARISON ===");
  await page.goto("http://localhost:60000", { waitUntil: "networkidle", timeout: 15000 });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: "docs/design-references/clone-final-full.png", fullPage: true });
  console.log("OK: clone-final-full.png");

  // Section-by-section at same offsets
  const pageHeight = await page.evaluate(() => document.body.scrollHeight);
  const numSections = Math.ceil(pageHeight / 900);
  for (let i = 0; i < numSections; i++) {
    await page.evaluate((y) => window.scrollTo(0, y), i * 900);
    await page.waitForTimeout(400);
    await page.screenshot({ path: `docs/design-references/clone-final-section-${i}.png` });
  }
  console.log(`OK: ${numSections} clone sections captured`);

  await browser.close();
  console.log("\n=== DONE ===");
}

run().catch(console.error);
