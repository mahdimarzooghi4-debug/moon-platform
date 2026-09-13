const DETAIL_ROOT_SELECTOR =
  '.creative-house-dashboard[data-name="ayeneh-startup-evaluation-detail"]';
const DECISION_OPTION_SELECTOR = '[data-name^="decision-option-"]';
const SAVE_DECISION_SELECTOR = '[data-name="save-decision"]';
const BACK_TO_LIST_SELECTOR = '[data-name="back-to-list"]';
const DECISION_LIST_ROUTE = "/panel/creative-house/startup-evaluations";
const DECISION_STORAGE_KEY = "mah.creativeHouse.startupEvaluationDecision.v1";

const DECISION_BY_NAME: Record<string, string> = {
  "decision-option-1": "approve",
  "decision-option-2": "needs-completion",
  "decision-option-3": "reject",
};

function navigateWithinApp(route: string) {
  window.history.pushState({}, "", route);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

function applyDetailInteractions(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>(DETAIL_ROOT_SELECTOR).forEach((screen) => {
    const group = screen.querySelector<HTMLElement>(
      '[data-name="evaluation-decision-panel"]',
    );
    group?.setAttribute("role", "radiogroup");
    group?.setAttribute("aria-label", "تصمیم نهایی");

    screen
      .querySelectorAll<HTMLButtonElement>(DECISION_OPTION_SELECTOR)
      .forEach((option) => {
        option.type = "button";
        option.setAttribute("role", "radio");
        if (!option.hasAttribute("data-selected")) {
          option.setAttribute("data-selected", "false");
        }
        option.setAttribute(
          "aria-checked",
          option.getAttribute("data-selected") === "true" ? "true" : "false",
        );
      });

    const save = screen.querySelector<HTMLAnchorElement>(SAVE_DECISION_SELECTOR);
    save?.setAttribute("href", DECISION_LIST_ROUTE);

    const back = screen.querySelector<HTMLAnchorElement>(BACK_TO_LIST_SELECTOR);
    back?.setAttribute("href", DECISION_LIST_ROUTE);
  });
}

function selectDecision(screen: HTMLElement, selected: HTMLButtonElement) {
  screen
    .querySelectorAll<HTMLButtonElement>(DECISION_OPTION_SELECTOR)
    .forEach((option) => {
      const isSelected = option === selected;
      option.setAttribute("data-selected", isSelected ? "true" : "false");
      option.setAttribute("aria-checked", isSelected ? "true" : "false");
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

  const option = target.closest<HTMLButtonElement>(
    `${DETAIL_ROOT_SELECTOR} ${DECISION_OPTION_SELECTOR}`,
  );
  if (option) {
    const screen = option.closest<HTMLElement>(DETAIL_ROOT_SELECTOR);
    if (!screen) return;
    event.preventDefault();
    selectDecision(screen, option);
    return;
  }

  const save = target.closest<HTMLAnchorElement>(
    `${DETAIL_ROOT_SELECTOR} ${SAVE_DECISION_SELECTOR}`,
  );
  if (save) {
    const screen = save.closest<HTMLElement>(DETAIL_ROOT_SELECTOR);
    if (!screen) return;

    const selected = screen.querySelector<HTMLButtonElement>(
      `${DECISION_OPTION_SELECTOR}[data-selected="true"]`,
    );

    if (!selected) {
      event.preventDefault();
      window.alert("لطفاً یک تصمیم نهایی انتخاب کنید.");
      return;
    }

    const decisionName = selected.getAttribute("data-name") ?? "";
    const decision = DECISION_BY_NAME[decisionName] ?? decisionName;

    localStorage.setItem(
      DECISION_STORAGE_KEY,
      JSON.stringify({
        decision,
        label: selected.textContent?.replace(/\s+/g, " ").trim() ?? "",
        savedAt: new Date().toISOString(),
      }),
    );

    event.preventDefault();
    navigateWithinApp(DECISION_LIST_ROUTE);
  }
});

const start = () => {
  applyDetailInteractions();
  const observer = new MutationObserver(() => applyDetailInteractions());
  observer.observe(document.body, { childList: true, subtree: true });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start, { once: true });
} else {
  start();
}
