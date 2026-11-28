import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { resolve } from "node:path";

const require = createRequire(resolve(process.env.MOON_BROWSER_TOOLS, "package.json"));
const { chromium } = require("playwright");
const browser = await chromium.launch({ headless: true });
const base = process.env.MOON_TEST_URL || "http://127.0.0.1:4173";
const marketingPages = ["/", "/startups", "/companies", "/about"];
const extraPages = { "/projects": ".mah-projects-page", "/projects/layout-fixture": ".mah-live-project-detail", "/news": ".mah-live-news", "/news/layout-fixture": ".mah-live-news", "/contact": ".mah-contact-page", "/faq": ".faq-page", "/privacy-policy": ".mah-legal-page", "/terms": ".mah-legal-page", "/how-it-works": ".mah-how-it-works-page", "/article-172-guide": ".article-172-page", "/impact": ".mah-live-impact-page", "/impact-reports": ".mah-live-impact-page", "/projects/layout-fixture/impact-report?reportId=layout-report": ".mah-live-impact-page" };
const pages = [...marketingPages, ...Object.keys(extraPages)];
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
        // Synthetic read-only fixtures exercise populated catalog/news layouts in CI.
        const project = { projectId: "layout-fixture", title: "پروژه آزمایشی چیدمان با عنوان طولانی",
          description: "متن آزمایشی برای بررسی چیدمان در نمایشگر کوچک", startup: "استارتاپ آزمایشی",
          impactArea: "اشتغال", region: "منطقه آزمایشی", targetGroup: "گروه آزمایشی",
          publishedAtUtc: "2026-01-01T00:00:00Z", isClosed: false, fundingCurrency: "IRR",
          targetMinor: "1234567890000", raisedMinor: "123456789000", fundingPercent: 10 };
        const news = { id: "layout-fixture", title: "خبر آزمایشی با عنوان طولانی برای چیدمان موبایل",
          summary: "متن آزمایشی چیدمان خبر در نمایشگر کوچک", status: "published", updatedAtUtc: "2026-01-01T00:00:00Z" };
        if (path.startsWith("/projects")) {
          await page.route("**/api/v1/public/projects", route => route.fulfill({ json: [project] }));
          await page.route("**/api/v1/public/projects/layout-fixture", route => route.fulfill({ json: project }));
        }
        if (path.startsWith("/news")) {
          await page.route("**/api/v1/public/content/news", route => route.fulfill({ json: [news] }));
        }
        const metric = { metricId: "layout-metric", key: "layout_test_metric_long_identifier",
          label: "شاخص آزمایشی چیدمان", unit: "نفر", aggregation: "sum", targetValue: 123456789,
          actualValue: 12345678, sortOrder: 1 };
        const report = { impactReportId: "layout-report", projectId: "layout-fixture", stageId: "layout-stage",
          stageSequenceNumber: 1, stageTitle: "مرحله آزمایشی", title: "گزارش آزمایشی چیدمان",
          summary: "متن آزمایشی گزارش", methodology: "روش آزمایشی", geography: "منطقه آزمایشی",
          publishedAtUtc: "2026-01-01T00:00:00Z", metrics: [metric],
          financialSnapshots: [{ currency: "IRR", approvedExpenseMinor: 123456789000, releasedMinor: 12345678900, capturedAtUtc: "2026-01-01T00:00:00Z" }] };
        await page.route("**/api/v1/public/impact-overview", route => route.fulfill({ json: {
          projectCount: 1234567, reportCount: 1234567, lastPublishedAtUtc: report.publishedAtUtc,
          metrics: [{ ...metric, reportCount: 1 }]
        } }));
        await page.route("**/api/v1/public/impact-reports", route => route.fulfill({ json: [report] }));
        await page.route("**/api/v1/public/impact-reports/layout-report", route => route.fulfill({ json: report }));
        await page.goto(base + path, { waitUntil: "domcontentloaded" });
        const hero = page.locator(".mah-mobile-hero-row");
        const marketing = marketingPages.includes(path);
        const root = marketing ? hero : page.locator(extraPages[path]);
        await root.waitFor({ state: "visible" });
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
          if (marketing) {
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
          } else {
            const desktop = root.locator(":scope > header, :scope > .faq-header");
            assert.equal(await desktop.isVisible(), false, path + " duplicate header");
            if (path === "/projects" || path === "/projects/layout-fixture")
              await root.locator(".mah-public-project-card").first().waitFor();
            if (path === "/news")
              await root.locator(".mah-live-news-card").first().waitFor();
            if (path === "/news/layout-fixture")
              await root.locator(".mah-live-news-article").waitFor();
            if (path === "/contact")
              await root.locator("#mah-support-form").waitFor();
            if (path === "/impact" || path === "/impact-reports" || path.includes("/impact-report?"))
              await root.locator("article").first().waitFor();
            const bad = await root.evaluate(el => {
              const selectors = "section,article,form,input,select,textarea,.mah-mobile-support-topics > div,.mah-contact-info,.mah-live-news-feature,.mah-projects-hero-row,.mah-projects-hero-stats,.mah-how-it-works-page > div,.article-172-page > div";
              return [el, ...el.querySelectorAll(selectors)].flatMap(n => {
                const r = n.getBoundingClientRect();
                return r.width > 0 && (r.left < -1 || r.right > innerWidth + 1)
                  ? [{ class: n.className, left: r.left, right: r.right }] : [];
              });
            });
            assert.deepEqual(bad, [], path + " viewport overflow " + width);
          }
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
  // Receipt UX: keep the actual tracking code and copy action, but do not
  // offer a tracking-navigation button on either registration success page.
  // Synthetic session receipts only; no registration or SMS requests.
  for (const width of [390, 1440]) {
    for (const kind of ["company", "startup"]) {
      const page = await browser.newPage({ viewport: { width, height: 900 } });
      try {
        await page.addInitScript(({kind}) => sessionStorage.setItem(
          "moon-" + kind + "-tracking-code", "1234567890"), {kind});
        await page.route("**/api/**", route => route.fulfill({ status: 503, body: "" }));
        await page.route("**/api/v1/public/company-applications/availability", route => route.fulfill({json:{enabled:true}}));
        await page.route("https://mahcsr.ir/**", route => route.abort());
        await page.goto(base + "/register/" + kind + "/states/success", {waitUntil:"domcontentloaded"});
        await page.getByRole("button", {name:"کپی کد پیگیری", exact:true}).waitFor();
        await page.getByText("۱۲۳۴۵۶۷۸۹۰", {exact:true}).waitFor();
        await page.getByRole("link", {name:"بازگشت به صفحه اصلی", exact:true}).waitFor();
        for (const role of ["button", "link"]) {
          assert.equal(await page.getByRole(role, {name:/^پیگیری (درخواست|ثبت[‌ ]نام)$/}).count(), 0);
        }
        console.log("Registration receipt smoke:", kind, width);
      } finally { await page.close(); }
    }
  }
} finally { await browser.close(); }
