import { clearSession } from "../../auth/oidc";

const CREATIVE_HOUSE_ROOT = ".creative-house-dashboard";
const DEV_PANEL_PREVIEW_KEY = "moon.auth.dev-panel-preview";
const REPORT_DETAIL_RETURN_KEY = "mah.creativeHouse.reportDetailReturnTo.v1";

const SETTINGS_ROOT = `${CREATIVE_HOUSE_ROOT}[data-name="ayeneh-settings"]`;
const REPORT_DETAIL_ROOT = `${CREATIVE_HOUSE_ROOT}[data-name="ayeneh-report-detail"]`;
const STARTUP_DETAIL_ROOT = `${CREATIVE_HOUSE_ROOT}[data-name="ayeneh-startup-evaluation-detail"]`;
const MILESTONE_DETAIL_ROOT = `${CREATIVE_HOUSE_ROOT}[data-name="ayeneh-milestone-evaluation-detail"]`;
const HISTORY_ROOT = `${CREATIVE_HOUSE_ROOT}[data-name="ayeneh-evaluation-history"]`;

const MILESTONE_LIST_ROUTE = "/panel/creative-house/milestone-evaluations";
const REPORTS_ROUTE = "/panel/creative-house/reports";
const HISTORY_ROUTE = "/panel/creative-house/evaluation-history";
const DOCUMENTS_ROUTE = "/projects/impact-report/documents";
const MILESTONE_DECISION_STORAGE_KEY =
  "mah.creativeHouse.milestoneEvaluationDecision.v1";

const SETTINGS_LEGAL_ROUTES = new Map<string, string>([
  ["legal-row-0", "/terms"],
  ["legal-row-1", "/privacy-policy"],
]);

function navigateWithinApp(route: string) {
  window.history.pushState({}, "", route);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

function normalizeText(value: string | null | undefined) {
  return value?.replace(/\s+/g, " ").trim() ?? "";
}

function decorateGlobalActions(root: ParentNode = document) {
  root
    .querySelectorAll<HTMLButtonElement>(`${CREATIVE_HOUSE_ROOT} [data-name="logout-nav"]`)
    .forEach((button) => {
      button.type = "button";
      button.setAttribute("aria-label", "خروج از سیستم");
    });

  root
    .querySelectorAll<HTMLButtonElement>(`${SETTINGS_ROOT} button[data-name^="legal-row-"]`)
    .forEach((button) => {
      button.type = "button";
      const route = SETTINGS_LEGAL_ROUTES.get(button.dataset.name ?? "");
      if (route) button.setAttribute("aria-label", `مشاهده ${normalizeText(button.textContent)}`);
    });

  const reportDetail = root.querySelector<HTMLElement>(REPORT_DETAIL_ROOT);
  if (reportDetail) {
    const returnTo = sessionStorage.getItem(REPORT_DETAIL_RETURN_KEY) ?? REPORTS_ROUTE;
    const reportsBack = reportDetail.querySelector<HTMLAnchorElement>('[data-name="back-button"]');
    const historyBack = reportDetail.querySelector<HTMLAnchorElement>(
      '[data-name="back-to-evaluation-history"]',
    );

    if (returnTo === HISTORY_ROUTE) {
      reportsBack?.setAttribute("hidden", "true");
      historyBack?.removeAttribute("hidden");
      historyBack?.setAttribute("href", HISTORY_ROUTE);
    } else {
      historyBack?.setAttribute("hidden", "true");
      reportsBack?.removeAttribute("hidden");
      reportsBack?.setAttribute("href", REPORTS_ROUTE);
    }
  }

  root.querySelectorAll<HTMLElement>(MILESTONE_DETAIL_ROOT).forEach((screen) => {
    const options = Array.from(
      screen.querySelectorAll<HTMLButtonElement>('button[data-name="decision-option"]'),
    );

    options.forEach((option, index) => {
      option.type = "button";
      option.setAttribute("role", "radio");
      option.dataset.decisionValue = ["approve", "request-revision", "reject"][index] ?? `option-${index + 1}`;
      if (!option.hasAttribute("data-selected")) option.dataset.selected = "false";
      option.setAttribute("aria-checked", option.dataset.selected === "true" ? "true" : "false");
    });

    const save = screen.querySelector<HTMLAnchorElement>('[data-name="save-decision"]');
    save?.setAttribute("href", MILESTONE_LIST_ROUTE);

    const back = screen.querySelector<HTMLAnchorElement>('[data-name="back-to-list"]');
    back?.setAttribute("href", MILESTONE_LIST_ROUTE);
  });

  root
    .querySelectorAll<HTMLButtonElement>(`${STARTUP_DETAIL_ROOT} button[data-name="document-row"]`)
    .forEach((button) => {
      button.type = "button";
      button.setAttribute("aria-label", `مشاهده ${normalizeText(button.textContent)}`);
    });

  decorateHistoryPagination(root);
  decorateListPagination(root);
}

function selectMilestoneDecision(screen: HTMLElement, selected: HTMLButtonElement) {
  screen
    .querySelectorAll<HTMLButtonElement>('button[data-name="decision-option"]')
    .forEach((option) => {
      const isSelected = option === selected;
      option.dataset.selected = isSelected ? "true" : "false";
      option.setAttribute("aria-checked", isSelected ? "true" : "false");
      option.style.boxShadow = isSelected ? "inset 0 0 0 2px #2094e3" : "none";
    });
}

function saveMilestoneDecision(screen: HTMLElement) {
  const selected = screen.querySelector<HTMLButtonElement>(
    'button[data-name="decision-option"][data-selected="true"]',
  );

  if (!selected) {
    window.alert("لطفاً یک تصمیم نهایی برای گزارش مرحله انتخاب کنید.");
    return false;
  }

  localStorage.setItem(
    MILESTONE_DECISION_STORAGE_KEY,
    JSON.stringify({
      decision: selected.dataset.decisionValue ?? "",
      label: normalizeText(selected.textContent),
      savedAt: new Date().toISOString(),
    }),
  );

  return true;
}

function decorateHistoryPagination(root: ParentNode = document) {
  const screen = root.querySelector<HTMLElement>(HISTORY_ROOT);
  if (!screen) return;

  if (!screen.dataset.historyPage) screen.dataset.historyPage = "1";
  renderHistoryPagination(screen);
}

function renderHistoryPagination(screen: HTMLElement) {
  const currentPage = Number(screen.dataset.historyPage ?? "1");
  const pageOne = screen.querySelector<HTMLElement>('[data-node-id="1801:133"]');
  const pageTwo = screen.querySelector<HTMLElement>('[data-name="page-2"]');
  const previous = screen.querySelector<HTMLElement>('[data-name="prev-disabled"]');
  const next = screen.querySelector<HTMLElement>('[data-name="next"]');
  const counter = Array.from(screen.querySelectorAll<HTMLElement>("p")).find((item) =>
    normalizeText(item.textContent).startsWith("صفحه "),
  );

  const setPageVisual = (element: HTMLElement | null, active: boolean) => {
    if (!element) return;
    element.style.background = active ? "#2094e3" : "#ffffff";
    element.style.borderColor = active ? "#2094e3" : "#dde6ed";
    element.style.cursor = "pointer";
    element.setAttribute("role", "button");
    element.tabIndex = 0;
    const label = element.querySelector<HTMLElement>("p");
    if (label) label.style.color = active ? "#ffffff" : "#60758a";
  };

  setPageVisual(pageOne, currentPage === 1);
  setPageVisual(pageTwo, currentPage === 2);

  const setArrow = (element: HTMLElement | null, enabled: boolean) => {
    if (!element) return;
    element.style.opacity = enabled ? "1" : "0.35";
    element.style.pointerEvents = enabled ? "auto" : "none";
    element.style.cursor = enabled ? "pointer" : "default";
    element.setAttribute("role", "button");
    element.tabIndex = enabled ? 0 : -1;
  };

  setArrow(previous, currentPage > 1);
  setArrow(next, currentPage < 2);
  const counterText = `صفحه ${currentPage === 1 ? "۱" : "۲"} از ۲`;
  if (counter && normalizeText(counter.textContent) !== counterText) {
    counter.textContent = counterText;
  }
}

const PAGINATED_LISTS = [
  '.creative-house-dashboard[data-name="ayeneh-startup-evaluations"]',
  '.creative-house-dashboard[data-name="ayeneh-project-evaluations"]',
  '.creative-house-dashboard[data-name="ayeneh-milestone-evaluations"]',
];

function decorateListPagination(root: ParentNode = document) {
  PAGINATED_LISTS.forEach((selector) => {
    root.querySelectorAll<HTMLElement>(selector).forEach((screen) => {
      if (!screen.dataset.prototypePage) screen.dataset.prototypePage = "1";
      renderListPagination(screen);
    });
  });
}

function renderListPagination(screen: HTMLElement) {
  const current = Number(screen.dataset.prototypePage ?? "1");
  const footer = screen.querySelector<HTMLElement>('[data-name="pagination-footer"]');
  if (!footer) return;

  const active = footer.querySelector<HTMLElement>('[data-name="page-active"]');
  const buttons = Array.from(footer.querySelectorAll<HTMLButtonElement>('button[data-name="page-button"]'));
  const counter = Array.from(footer.querySelectorAll<HTMLElement>("p")).find((item) =>
    normalizeText(item.textContent).startsWith("صفحه "),
  );

  if (active) {
    active.setAttribute("role", "button");
    active.tabIndex = 0;
    active.dataset.pageTarget = "1";
    active.style.cursor = "pointer";
    active.style.background = current === 1 ? "#2094e3" : "#ffffff";
    active.style.borderColor = current === 1 ? "#2094e3" : "#dde7f0";
    const label = active.querySelector<HTMLElement>("p");
    if (label) label.style.color = current === 1 ? "#ffffff" : "#60758a";
  }

  buttons.forEach((button) => {
    button.type = "button";
    const label = normalizeText(button.textContent);
    const pageTarget = label === "۲" ? 2 : label === "۳" ? 3 : null;
    if (pageTarget) {
      button.dataset.pageTarget = String(pageTarget);
      const isActive = current === pageTarget;
      button.style.background = isActive ? "#2094e3" : "#ffffff";
      button.style.borderColor = isActive ? "#2094e3" : "#dde7f0";
      const text = button.querySelector<HTMLElement>("p");
      if (text) text.style.color = isActive ? "#ffffff" : "#60758a";
    }
  });

  const counterText = `صفحه ${["۱", "۲", "۳"][current - 1] ?? "۱"} از ۳`;
  if (counter && normalizeText(counter.textContent) !== counterText) {
    counter.textContent = counterText;
  }
}

function handleHistoryPagination(target: Element) {
  const screen = target.closest<HTMLElement>(HISTORY_ROOT);
  if (!screen) return false;

  const current = Number(screen.dataset.historyPage ?? "1");
  let nextPage = current;

  if (target.closest('[data-node-id="1801:133"]')) nextPage = 1;
  else if (target.closest('[data-name="page-2"]')) nextPage = 2;
  else if (target.closest('[data-name="prev-disabled"]')) nextPage = Math.max(1, current - 1);
  else if (target.closest('[data-name="next"]')) nextPage = Math.min(2, current + 1);
  else return false;

  screen.dataset.historyPage = String(nextPage);
  renderHistoryPagination(screen);
  return true;
}

function handleListPagination(target: Element) {
  const screen = PAGINATED_LISTS.map((selector) => target.closest<HTMLElement>(selector)).find(Boolean);
  if (!screen) return false;

  const footer = target.closest<HTMLElement>('[data-name="pagination-footer"]');
  if (!footer) return false;

  const current = Number(screen.dataset.prototypePage ?? "1");
  const pageTarget = target.closest<HTMLElement>('[data-page-target]')?.dataset.pageTarget;
  const label = normalizeText(target.closest<HTMLButtonElement>('button[data-name="page-button"]')?.textContent);

  let nextPage = pageTarget ? Number(pageTarget) : current;
  if (!pageTarget && label === "‹") nextPage = Math.max(1, current - 1);
  if (!pageTarget && label === "›") nextPage = Math.min(3, current + 1);
  if (nextPage === current && !pageTarget && label !== "‹" && label !== "›") return false;

  screen.dataset.prototypePage = String(nextPage);
  renderListPagination(screen);
  return true;
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

  const logout = target.closest<HTMLButtonElement>(
    `${CREATIVE_HOUSE_ROOT} [data-name="logout-nav"]`,
  );
  if (logout) {
    event.preventDefault();
    clearSession();
    sessionStorage.removeItem(DEV_PANEL_PREVIEW_KEY);
    window.location.assign("/auth");
    return;
  }

  const legalButton = target.closest<HTMLButtonElement>(
    `${SETTINGS_ROOT} button[data-name^="legal-row-"]`,
  );
  if (legalButton) {
    const route = SETTINGS_LEGAL_ROUTES.get(legalButton.dataset.name ?? "");
    if (!route) return;
    event.preventDefault();
    navigateWithinApp(route);
    return;
  }

  const reportBack = target.closest<HTMLAnchorElement>(
    `${REPORT_DETAIL_ROOT} [data-name="back-button"], ${REPORT_DETAIL_ROOT} [data-name="back-to-evaluation-history"]`,
  );
  if (reportBack) {
    const route = reportBack.dataset.name === "back-to-evaluation-history" ? HISTORY_ROUTE : REPORTS_ROUTE;
    event.preventDefault();
    navigateWithinApp(route);
    return;
  }

  const milestoneOption = target.closest<HTMLButtonElement>(
    `${MILESTONE_DETAIL_ROOT} button[data-name="decision-option"]`,
  );
  if (milestoneOption) {
    const screen = milestoneOption.closest<HTMLElement>(MILESTONE_DETAIL_ROOT);
    if (!screen) return;
    event.preventDefault();
    selectMilestoneDecision(screen, milestoneOption);
    return;
  }

  const milestoneSave = target.closest<HTMLAnchorElement>(
    `${MILESTONE_DETAIL_ROOT} [data-name="save-decision"]`,
  );
  if (milestoneSave) {
    const screen = milestoneSave.closest<HTMLElement>(MILESTONE_DETAIL_ROOT);
    if (!screen) return;
    event.preventDefault();
    if (saveMilestoneDecision(screen)) navigateWithinApp(MILESTONE_LIST_ROUTE);
    return;
  }

  const milestoneBack = target.closest<HTMLAnchorElement>(
    `${MILESTONE_DETAIL_ROOT} [data-name="back-to-list"]`,
  );
  if (milestoneBack) {
    event.preventDefault();
    navigateWithinApp(MILESTONE_LIST_ROUTE);
    return;
  }

  const startupDocument = target.closest<HTMLButtonElement>(
    `${STARTUP_DETAIL_ROOT} button[data-name="document-row"]`,
  );
  if (startupDocument) {
    event.preventDefault();
    if (normalizeText(startupDocument.textContent).includes("فایل نهایی نمایش داده نشده")) {
      window.alert("فایل نهایی این مدرک هنوز در دسترس نیست.");
      return;
    }
    navigateWithinApp(DOCUMENTS_ROUTE);
    return;
  }

  if (handleHistoryPagination(target)) {
    event.preventDefault();
    return;
  }

  if (handleListPagination(target)) {
    event.preventDefault();
  }
});

const start = () => {
  decorateGlobalActions();
  const observer = new MutationObserver(() => decorateGlobalActions());
  observer.observe(document.body, { childList: true, subtree: true });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start, { once: true });
} else {
  start();
}
