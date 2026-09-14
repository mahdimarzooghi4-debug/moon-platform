import "./dashboard-startup-overview.css";

const DASHBOARD_SECTION_SELECTOR =
  '.creative-house-dashboard[data-name="ayeneh-main-dashboard"] [data-name="startup-list-section"]';

const startups = [
  {
    name: "سلامت‌یار شرق",
    project: "سلامت خانواده",
    manager: "مریم احمدی",
    domain: "سلامت و بهداشت",
    status: "در حال ارزیابی پروژه",
    tone: "warning",
  },
  {
    name: "آینده‌ساز مهارت",
    project: "مهارت برای نوجوانان",
    manager: "علی رضایی",
    domain: "آموزش و اشتغال",
    status: "در حال اجرای مرحله ۱",
    tone: "info",
  },
  {
    name: "روستابانوان گلستان",
    project: "اشتغال زنان روستایی",
    manager: "زهرا محمدی",
    domain: "کسب‌وکار و اشتغال",
    status: "آماده آزادسازی وجه",
    tone: "success",
  },
] as const;

function startupCardMarkup(startup: (typeof startups)[number]) {
  return `
    <article class="creative-house-startup-card">
      <div class="creative-house-startup-card__top">
        <span class="creative-house-startup-card__status is-${startup.tone}">${startup.status}</span>
        <span class="creative-house-startup-card__domain">${startup.domain}</span>
      </div>
      <div class="creative-house-startup-card__body">
        <strong>${startup.name}</strong>
        <span>پروژه: ${startup.project}</span>
      </div>
      <div class="creative-house-startup-card__meta">
        <span>مدیر استارتاپ</span>
        <strong>${startup.manager}</strong>
      </div>
    </article>
  `;
}

function rebuildStartupOverview(section: HTMLElement) {
  if (section.querySelector('[data-name="startup-overview-card"]')) return;

  section.innerHTML = `
    <section class="creative-house-startup-overview" data-name="startup-overview-card" dir="rtl">
      <header class="creative-house-startup-overview__header">
        <div>
          <h2>استارتاپ‌های منتخب</h2>
          <p>آخرین وضعیت ارزیابی و اجرای پروژه‌ها</p>
        </div>
        <a href="/panel/creative-house/startup-evaluations">مشاهده همه</a>
      </header>
      <div class="creative-house-startup-overview__grid">
        ${startups.map(startupCardMarkup).join("")}
      </div>
    </section>
  `;
}

function syncStartupOverview() {
  const section = document.querySelector<HTMLElement>(DASHBOARD_SECTION_SELECTOR);
  if (section) rebuildStartupOverview(section);
}

function navigateWithinApp(route: string) {
  window.history.pushState({}, "", route);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

document.addEventListener("click", (event) => {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return;
  }

  const target = event.target;
  if (!(target instanceof Element)) return;

  const link = target.closest<HTMLAnchorElement>(
    '[data-name="startup-overview-card"] a[href="/panel/creative-house/startup-evaluations"]',
  );
  if (!link) return;

  event.preventDefault();
  navigateWithinApp(link.pathname);
});

const start = () => {
  syncStartupOverview();

  const observer = new MutationObserver(syncStartupOverview);
  observer.observe(document.body, { childList: true, subtree: true });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start, { once: true });
} else {
  start();
}
