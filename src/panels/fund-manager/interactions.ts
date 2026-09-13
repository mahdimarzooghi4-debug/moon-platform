import { clearSession } from "../../auth/oidc";

const PANEL_PREFIX = "/panel/fund-manager";
const FUNDING_FLOW_PATH = `${PANEL_PREFIX}/funding-flow-control`;
const MATCHED_FLOWS_KEY = "mah.fundManager.matchedFlows.v1";
const REGISTERED_FLOWS_KEY = "mah.fundManager.registeredFlows.v1";

const navRoutes: Record<string, string> = {
  "dashboard-nav": PANEL_PREFIX,
  "startup-evaluations-nav": `${PANEL_PREFIX}/resources`,
  "project-evaluations-nav": `${PANEL_PREFIX}/investments`,
  "milestone-evaluations-nav": `${PANEL_PREFIX}/profit-returns`,
  "reports-nav": `${PANEL_PREFIX}/cycle-returns`,
  "revenues-nav": `${PANEL_PREFIX}/profit-split`,
  "evaluation-history-nav": `${PANEL_PREFIX}/reports`,
  "settings-nav": `${PANEL_PREFIX}/financial-history`,
  "funding-flow-control-nav": FUNDING_FLOW_PATH,
};

const detailRoutes: Record<string, string> = {
  [`${PANEL_PREFIX}/resources`]: `${PANEL_PREFIX}/resources/detail`,
  [`${PANEL_PREFIX}/investments`]: `${PANEL_PREFIX}/investments/detail`,
  [`${PANEL_PREFIX}/profit-returns`]: `${PANEL_PREFIX}/profit-returns/detail`,
  [`${PANEL_PREFIX}/cycle-returns`]: `${PANEL_PREFIX}/cycle-returns/detail`,
  [`${PANEL_PREFIX}/profit-split`]: `${PANEL_PREFIX}/profit-split/detail`,
  [`${PANEL_PREFIX}/reports`]: `${PANEL_PREFIX}/reports/detail`,
  [`${PANEL_PREFIX}/financial-history`]: `${PANEL_PREFIX}/financial-history/detail`,
};

type RegisteredFlow = {
  type: string;
  project: string;
  source: string;
  amount: string;
  date: string;
  reference: string;
  savedAt: string;
};

function isFundManagerPage() {
  return window.location.pathname.startsWith(PANEL_PREFIX);
}

function readArray<T>(key: string): T[] {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeArray<T>(key: string, values: T[]) {
  localStorage.setItem(key, JSON.stringify(values));
}

function normalizedText(value: string | null | undefined) {
  return (value ?? "").replace(/\s+/g, " ").trim();
}

function setButtonLabel(button: HTMLButtonElement, label: string) {
  const labelNode = button.querySelector<HTMLElement>("p");
  if (labelNode) {
    if (normalizedText(labelNode.textContent) !== label) labelNode.textContent = label;
    return;
  }
  if (normalizedText(button.textContent) !== label) button.textContent = label;
}

function getFundingFlowRoot(root: ParentNode = document) {
  return root.querySelector<HTMLElement>('[data-name="fund-manager-funding-flow-control"]');
}

function getFlowProjectName(row: HTMLElement) {
  return normalizedText(row.querySelector<HTMLElement>(":scope > div p")?.textContent);
}

function markFlowMatched(row: HTMLElement, button: HTMLButtonElement) {
  if (button.dataset.flowMatched === "true") return;

  button.dataset.flowMatched = "true";
  button.disabled = true;
  setButtonLabel(button, "تطبیق شد");
  row.classList.add("fund-flow-row-matched");

  const columns = row.querySelectorAll<HTMLElement>(":scope > div");
  const status = columns.item(3);
  const statusLabel = status?.querySelector<HTMLElement>("p");
  if (statusLabel && normalizedText(statusLabel.textContent) !== "تطبیق‌شده") {
    statusLabel.textContent = "تطبیق‌شده";
  }
  if (status) status.style.color = "#149e57";
}

function syncFundingFlowKpi(root: HTMLElement) {
  const registered = readArray<RegisteredFlow>(REGISTERED_FLOWS_KEY);
  if (!registered.length) return;

  const totalLabel = root.querySelector<HTMLElement>('[data-name="kpi-row"] [data-node-id="2384:176"] p');
  const nextText = `${(12 + registered.length).toLocaleString("fa-IR")} جریان`;
  if (totalLabel && normalizedText(totalLabel.textContent) !== nextText) totalLabel.textContent = nextText;
}

function restoreFundingFlowMatches(root: HTMLElement) {
  const matchedProjects = new Set(readArray<string>(MATCHED_FLOWS_KEY));
  if (!matchedProjects.size) return;

  root.querySelectorAll<HTMLElement>('[data-name="flow-row"]').forEach((row) => {
    const projectName = getFlowProjectName(row);
    const button = row.querySelector<HTMLButtonElement>("button");
    if (button && matchedProjects.has(projectName)) markFlowMatched(row, button);
  });
}

function setupFundingPagination(root: HTMLElement) {
  const pagination = root.querySelector<HTMLElement>('[data-name="pagination"]');
  const control = pagination?.querySelector<HTMLButtonElement>('[data-name="pagination-controls-button"]');
  const label = control?.querySelector<HTMLElement>("p");
  const flowList = root.querySelector<HTMLElement>('[data-name="flow-list"]');
  if (!pagination || !control || !label || !flowList || control.dataset.flowPaginationReady === "true") return;

  control.dataset.flowPaginationReady = "true";
  control.setAttribute("aria-label", "صفحه‌بندی جریان‌های تأمین مالی");
  label.innerHTML = [
    '<span data-flow-page-action="prev">قبلی</span>',
    '<span data-flow-page="1">۱</span>',
    '<span data-flow-page="2">۲</span>',
    '<span data-flow-page="3">۳</span>',
    '<span data-flow-page-action="next">بعدی</span>',
  ].join("");

  const emptyState = document.createElement("div");
  emptyState.className = "fund-flow-page-empty";
  emptyState.hidden = true;
  emptyState.textContent = "برای این صفحه داده نمونه‌ای در فرانت‌اند ثبت نشده است.";
  flowList.appendChild(emptyState);

  setFundingPage(root, 1);
}

function setFundingPage(root: HTMLElement, page: number) {
  const safePage = Math.min(3, Math.max(1, page));
  root.dataset.flowPage = String(safePage);

  root.querySelectorAll<HTMLElement>("[data-flow-page]").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.flowPage === String(safePage));
  });

  const rows = root.querySelectorAll<HTMLElement>('[data-name="flow-row"]');
  rows.forEach((row) => {
    row.hidden = safePage !== 1;
  });

  const emptyState = root.querySelector<HTMLElement>(".fund-flow-page-empty");
  if (emptyState) emptyState.hidden = safePage === 1;

  const counter = root.querySelector<HTMLElement>('[data-name="pagination"] [data-node-id="2384:221"] p');
  const start = (safePage - 1) * 4 + 1;
  const end = safePage * 4;
  const counterText = `نمایش ${start.toLocaleString("fa-IR")} تا ${end.toLocaleString("fa-IR")} از ۱۲`;
  if (counter && normalizedText(counter.textContent) !== counterText) counter.textContent = counterText;
}

function syncFundingFlowControls(root: ParentNode = document) {
  if (window.location.pathname !== FUNDING_FLOW_PATH) return;
  const page = getFundingFlowRoot(root) ?? getFundingFlowRoot(document);
  if (!page) return;

  setupFundingPagination(page);
  restoreFundingFlowMatches(page);
  syncFundingFlowKpi(page);
}

function applyDestinations(root: ParentNode = document) {
  if (!isFundManagerPage()) return;

  Object.entries(navRoutes).forEach(([name, route]) => {
    root.querySelectorAll<HTMLElement>(`[data-name="${name}"]`).forEach((element) => {
      if (element instanceof HTMLAnchorElement && element.getAttribute("href") !== route) {
        element.setAttribute("href", route);
      }
      element.style.cursor = "pointer";
      if (!(element instanceof HTMLAnchorElement)) {
        element.setAttribute("role", "link");
        element.tabIndex = 0;
      }
    });
  });

  const fallbackDetail = detailRoutes[window.location.pathname];
  if (fallbackDetail) {
    root.querySelectorAll<HTMLAnchorElement>('a[data-name="action"]').forEach((anchor) => {
      if (!anchor.getAttribute("href")) anchor.setAttribute("href", fallbackDetail);
    });
  }

  syncFundingFlowControls(root);
}

applyDestinations();

if (document.body) {
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (!mutation.addedNodes.length) continue;
      applyDestinations();
      break;
    }
  }).observe(document.body, { childList: true, subtree: true });
}

document.addEventListener("click", (event) => {
  if (!isFundManagerPage()) return;
  const target = event.target;
  if (!(target instanceof Element)) return;

  const logout = target.closest<HTMLButtonElement>('button[data-name="logout-nav"]');
  if (logout) {
    event.preventDefault();
    clearSession();
    sessionStorage.removeItem("moon.auth.dev-panel-preview");
    localStorage.removeItem("moon.auth.dev-panel-preview");
    window.location.assign("/auth");
    return;
  }

  if (window.location.pathname === FUNDING_FLOW_PATH) {
    const page = getFundingFlowRoot(document);
    if (page) {
      const registerShortcut = target.closest<HTMLButtonElement>('button[data-name="register-flow-button"]');
      if (registerShortcut) {
        event.preventDefault();
        const formPanel = page.querySelector<HTMLElement>('[data-name="register-flow-panel"]');
        if (formPanel) {
          formPanel.scrollIntoView({ behavior: "smooth", block: "center" });
          formPanel.classList.remove("fund-flow-panel-highlight");
          void formPanel.offsetWidth;
          formPanel.classList.add("fund-flow-panel-highlight");
        }
        return;
      }

      const flowButton = target.closest<HTMLButtonElement>('[data-name="flow-row"] button');
      const flowRow = flowButton?.closest<HTMLElement>('[data-name="flow-row"]');
      if (flowButton && flowRow) {
        event.preventDefault();
        const projectName = getFlowProjectName(flowRow);
        const matched = readArray<string>(MATCHED_FLOWS_KEY);
        if (projectName && !matched.includes(projectName)) {
          matched.push(projectName);
          writeArray(MATCHED_FLOWS_KEY, matched);
        }
        markFlowMatched(flowRow, flowButton);
        return;
      }

      const saveFlow = target.closest<HTMLButtonElement>('button[data-name="save-flow"]');
      if (saveFlow) {
        event.preventDefault();
        const fields = Array.from(page.querySelectorAll<HTMLElement>('[data-name="register-flow-panel"] [data-name="field"] p'))
          .map((field) => normalizedText(field.textContent));
        const [type = "", project = "", source = "", amount = "", date = "", reference = ""] = fields;
        const records = readArray<RegisteredFlow>(REGISTERED_FLOWS_KEY);
        const exists = Boolean(reference) && records.some((record) => record.reference === reference);

        if (!exists) {
          records.push({ type, project, source, amount, date, reference, savedAt: new Date().toISOString() });
          writeArray(REGISTERED_FLOWS_KEY, records);
          syncFundingFlowKpi(page);
        }

        const originalLabel = saveFlow.dataset.originalFlowLabel ?? (normalizedText(saveFlow.textContent) || "ثبت جریان");
        saveFlow.dataset.originalFlowLabel = originalLabel;
        setButtonLabel(saveFlow, exists ? "قبلاً ثبت شده" : "جریان ثبت شد");
        saveFlow.disabled = true;

        const status = page.querySelector<HTMLElement>('[data-name="match-status"] p');
        const statusText = exists ? "این شناسه مرجع قبلاً ثبت شده است" : "جریان با موفقیت ثبت شد و آماده پیگیری است";
        if (status && normalizedText(status.textContent) !== statusText) status.textContent = statusText;

        window.setTimeout(() => {
          if (!saveFlow.isConnected) return;
          setButtonLabel(saveFlow, originalLabel);
          saveFlow.disabled = false;
        }, 1600);
        return;
      }

      const pageNumber = target.closest<HTMLElement>("[data-flow-page]");
      if (pageNumber) {
        event.preventDefault();
        setFundingPage(page, Number(pageNumber.dataset.flowPage ?? "1"));
        return;
      }

      const pageAction = target.closest<HTMLElement>("[data-flow-page-action]");
      if (pageAction) {
        event.preventDefault();
        const current = Number(page.dataset.flowPage ?? "1");
        const next = pageAction.dataset.flowPageAction === "prev" ? current - 1 : current + 1;
        setFundingPage(page, next);
        return;
      }
    }
  }

  const nav = target.closest<HTMLElement>("[data-name]");
  const navName = nav?.getAttribute("data-name") ?? "";
  const route = navRoutes[navName];
  if (route && !(nav instanceof HTMLAnchorElement)) {
    event.preventDefault();
    if (window.location.pathname !== route) window.location.assign(route);
    return;
  }

  const backAction = target.closest<HTMLElement>('a[data-name="action"], button[data-name="action"]');
  if (backAction && !backAction.getAttribute("href")) {
    const detailRoute = detailRoutes[window.location.pathname];
    if (detailRoute) {
      event.preventDefault();
      window.location.assign(detailRoute);
    }
  }
});

document.addEventListener("keydown", (event) => {
  if (!isFundManagerPage() || (event.key !== "Enter" && event.key !== " ")) return;
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  const name = target.getAttribute("data-name") ?? "";
  const route = navRoutes[name];
  if (!route || target instanceof HTMLAnchorElement) return;
  event.preventDefault();
  if (window.location.pathname !== route) window.location.assign(route);
});
