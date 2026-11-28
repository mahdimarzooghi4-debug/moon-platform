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
        // Local synthetic fixture to exercise long numbers; never a production value.
        const kpis = { startupCount: 1234567, activeProjectCount: 12345,
          beneficiaryCount: 1234567, jobsCreated: 123456,
          funding: [{ currency: "IRR", amountMinor: 1234567000000000 }] };
        if (path === "/") {
          await page.route("**/api/v1/public/landing-kpis", route =>
            route.fulfill({ json: kpis }));
        }
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
        if (path === "/" && width <= 1024) {
          const numbers = page.locator(".mah-impact-number");
          const fmt = new Intl.NumberFormat("fa-IR", { maximumFractionDigits: 0 });
          const money = new Intl.NumberFormat("fa-IR", { maximumFractionDigits: 1 });
          const expected = [money.format(123456.7), fmt.format(kpis.activeProjectCount),
            fmt.format(kpis.jobsCreated), fmt.format(kpis.beneficiaryCount), fmt.format(kpis.startupCount)];
          await page.waitForFunction(values =>
            Array.from(document.querySelectorAll(".mah-impact-number"), el => el.textContent.trim()).join("|") === values.join("|"), expected);
          assert.equal(await numbers.count(), 5);
          const clipped = await page.locator(".mah-impact-card").evaluateAll(cards =>
            cards.flatMap((card, i) => {
              const bounds = card.getBoundingClientRect();
              const problems = [];
              for (const el of card.querySelectorAll(".mah-impact-number, .mah-impact-unit, .mah-impact-label")) {
                const range = document.createRange();
                range.selectNodeContents(el);
                for (const rect of range.getClientRects()) {
                  if (rect.left < bounds.left - 1 || rect.right > bounds.right + 1 ||
                      rect.top < bounds.top - 1 || rect.bottom > bounds.bottom + 1 ||
                      rect.left < -1 || rect.right > innerWidth + 1)
                    problems.push({ card: i, text: el.textContent.trim(), left: rect.left, right: rect.right });
                }
              }
              return problems;
            }));
          assert.deepEqual(clipped, [], "KPI text clipped at " + width);
        }
        console.log("Public layout smoke:", path, width);
      } finally { await page.close(); }
    }
  }
} finally { await browser.close(); }
