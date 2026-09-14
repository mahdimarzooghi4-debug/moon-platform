const STARTUP_LIST_ROOT = '.creative-house-dashboard[data-name="ayeneh-startup-evaluations"]';
const STARTUP_ROW_SELECTOR = '[data-name^="startup-row-"]';
const STARTUP_ACTION_SELECTOR = '[data-name="action-button"]';
const STARTUP_DETAIL_ROUTE = "/panel/creative-house/startup-evaluations/detail";
const STARTUP_SELECTION_KEY = "mah.creativeHouse.startupEvaluationSelection.v1";

export type StartupEvaluationSelection = {
  startupName: string;
  managerName: string;
  activityArea: string;
  selectedAt: string;
};

function normalizeText(value: string | null | undefined) {
  return value?.replace(/\s+/g, " ").trim() ?? "";
}

function navigateWithinApp(route: string) {
  window.history.pushState({}, "", route);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

function readDirectField(row: HTMLElement, index: number) {
  const fields = Array.from(row.querySelectorAll<HTMLElement>(":scope > div"));
  return normalizeText(fields[index]?.textContent);
}

function selectionFromRow(row: HTMLElement): StartupEvaluationSelection | null {
  // Row layout: status, date, activity area, manager, startup name, request subtitle.
  const startupName = readDirectField(row, 4);
  const managerName = readDirectField(row, 3);
  const activityArea = readDirectField(row, 2);
  if (!startupName) return null;

  return {
    startupName,
    managerName,
    activityArea,
    selectedAt: new Date().toISOString(),
  };
}

export function readStartupEvaluationSelection(): StartupEvaluationSelection | null {
  try {
    const raw = sessionStorage.getItem(STARTUP_SELECTION_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<StartupEvaluationSelection>;
    if (
      typeof parsed.startupName !== "string" ||
      typeof parsed.managerName !== "string" ||
      typeof parsed.activityArea !== "string" ||
      typeof parsed.selectedAt !== "string"
    ) {
      return null;
    }
    return {
      startupName: normalizeText(parsed.startupName),
      managerName: normalizeText(parsed.managerName),
      activityArea: normalizeText(parsed.activityArea),
      selectedAt: parsed.selectedAt,
    };
  } catch {
    return null;
  }
}

export function clearStartupEvaluationSelection() {
  sessionStorage.removeItem(STARTUP_SELECTION_KEY);
}

function decorateStartupEvaluationActions(root: ParentNode = document) {
  root
    .querySelectorAll<HTMLAnchorElement>(`${STARTUP_LIST_ROOT} ${STARTUP_ROW_SELECTOR} ${STARTUP_ACTION_SELECTOR}`)
    .forEach((action) => {
      action.setAttribute("href", STARTUP_DETAIL_ROUTE);
      const row = action.closest<HTMLElement>(STARTUP_ROW_SELECTOR);
      const selection = row ? selectionFromRow(row) : null;
      action.setAttribute(
        "aria-label",
        selection?.startupName ? `ارزیابی ${selection.startupName}` : "مشاهده ارزیابی استارتاپ",
      );
    });
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

  const action = target.closest<HTMLAnchorElement>(
    `${STARTUP_LIST_ROOT} ${STARTUP_ROW_SELECTOR} ${STARTUP_ACTION_SELECTOR}`,
  );
  if (!action) return;

  const row = action.closest<HTMLElement>(STARTUP_ROW_SELECTOR);
  if (!row) return;

  const selection = selectionFromRow(row);
  if (!selection) return;

  sessionStorage.setItem(STARTUP_SELECTION_KEY, JSON.stringify(selection));
  event.preventDefault();
  navigateWithinApp(STARTUP_DETAIL_ROUTE);
});

const start = () => {
  decorateStartupEvaluationActions();
  const observer = new MutationObserver(() => decorateStartupEvaluationActions());
  observer.observe(document.body, { childList: true, subtree: true });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start, { once: true });
} else {
  start();
}
