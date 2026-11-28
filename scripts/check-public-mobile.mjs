import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { resolve } from "node:path";

const require = createRequire(resolve(process.env.MOON_BROWSER_TOOLS, "package.json"));
const { chromium } = require("playwright");
const browser = await chromium.launch({ headless: true });
const base = process.env.MOON_TEST_URL || "http://127.0.0.1:4173";
const pages = ["/", "/startups", "/companies", "/about"];
try {
  for (const width of [320, 390, 768, 1024, 1440]) {
    for (const path of pages) {
      const page = await browser.newPage({ viewport: { width, height: 900 } });
      try {
        // Layout-only check: no production calls and no invented business data.
        await page.route("**/api/**", route => route.fulfill({ status: 503, body: "" }));
        await page.route("https://mahcsr.ir/**", route => route.abort());
        await page.goto(base + path, { waitUntil: "domcontentloaded" });
        const hero = page.locator(".mah-mobile-hero-row");
        await hero.waitFor({ state: "visible" });
        await page.locator("body.mah-public-rtl").waitFor();
        const header = page.locator(".mah-mobile-public-header");
        assert.equal(await header.isVisible(), width <= 1024, path + " header " + width);
        if (width <= 1024) {
          const summary = header.locator("summary");
          await summary.click();
          assert.equal(await header.getByRole("navigation").isVisible(), true);
          assert.equal(await header.getByRole("navigation").locator("a").count(), 6);
          await summary.press("Escape");
          assert.equal(await header.getByRole("navigation").isVisible(), false);
          const boxes = await hero.evaluate(el => {
            const media = el.querySelector(".mah-mobile-hero-media");
            const copy = el.querySelector(".mah-mobile-hero-copy");
            return [el, media, copy].map(n => {
              const r = n.getBoundingClientRect();
              return { x: r.x, right: r.right, top: r.top, bottom: r.bottom, width: r.width };
            });
          });
          for (const box of boxes) assert.ok(box.x >= -1 && box.right <= width + 1 && box.width > 0, path + " hero bounds " + width + JSON.stringify(box));
          assert.ok(boxes[2].bottom <= boxes[1].top + 1, path + " hero copy above media " + width);
        }
        console.log("Public layout smoke:", path, width);
      } finally { await page.close(); }
    }
  }
} finally { await browser.close(); }
