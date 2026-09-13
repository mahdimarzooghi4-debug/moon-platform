const PANEL_PREFIX = "/panel/fund-manager";

type FilterConfig = {
  primaryIndex: number;
  secondary: "chip" | number;
};

const LIST_CONFIG: Record<string, FilterConfig> = {
  [`${PANEL_PREFIX}/resources`]: { primaryIndex: 1, secondary: "chip" },
  [`${PANEL_PREFIX}/investments`]: { primaryIndex: 0, secondary: "chip" },
  [`${PANEL_PREFIX}/profit-returns`]: { primaryIndex: 0, secondary: "chip" },
  [`${PANEL_PREFIX}/cycle-returns`]: { primaryIndex: 0, secondary: "chip" },
  [`${PANEL_PREFIX}/profit-split`]: { primaryIndex: 0, secondary: "chip" },
  [`${PANEL_PREFIX}/reports`]: { primaryIndex: 2, secondary: 0 },
  [`${PANEL_PREFIX}/financial-history`]: { primaryIndex: 2, secondary: 3 },
};

function normalize(value: string | null | undefined) {
  return (value ?? "").replace(/\s+/g, " ").trim();
}

function getRows(root: ParentNode) {
  return Array.from(root.querySelectorAll<HTMLElement>('[data-name="resource-row"]'));
}

function getDirectText(row: HTMLElement, index: number) {
  const columns = Array.from(row.querySelectorAll<HTMLElement>(":scope > p"));
  return normalize(columns[index]?.textContent);
}

function getSecondaryText(row: HTMLElement, source: FilterConfig["secondary"]) {
  if (source === "chip") {
    return normalize(row.querySelector<HTMLElement>(':scope > [data-name="chip"] p')?.textContent);
  }
  return getDirectText(row, source);
}

function unique(values: string[]) {
  return Array.from(new Set(values.filter(Boolean)));
}

function applyListFilters(root: HTMLElement, config: FilterConfig) {
  const filters = root.querySelector<HTMLElement>('[data-name="filters"]');
  if (!filters) return;

  const search = filters.querySelector<HTMLInputElement>('input[data-name="search-box"]');
  const primaryButton = filters.querySelector<HTMLButtonElement>('button[data-name="filter-source"]');
  const secondaryButton = filters.querySelector<HTMLButtonElement>('button[data-name="filter-status"]');
  const query = normalize(search?.value).toLocaleLowerCase("fa-IR");
  const primary = primaryButton?.dataset.filterValue ?? "";
  const secondary = secondaryButton?.dataset.filterValue ?? "";

  let visible = 0;
  getRows(root).forEach((row) => {
    const searchMatch = !query || normalize(row.textContent).toLocaleLowerCase("fa-IR").includes(query);
    const primaryMatch = !primary || getDirectText(row, config.primaryIndex) === primary;
    const secondaryMatch = !secondary || getSecondaryText(row, config.secondary) === secondary;
    const show = searchMatch && primaryMatch && secondaryMatch;
    row.style.display = show ? "" : "none";
    if (show) visible += 1;
  });

  const counter = filters.querySelector<HTMLElement>(':scope > [data-name="chip"] p');
  if (counter) {
    if (!counter.dataset.counterSuffix) {
      counter.dataset.counterSuffix = normalize(counter.textContent).replace(/^[\d۰-۹٠-٩٫٬.]+\s*/, "") || "مورد";
    }
    const next = `${visible.toLocaleString("fa-IR")} ${counter.dataset.counterSuffix}`;
    if (normalize(counter.textContent) !== next) counter.textContent = next;
  }
}

function setupSearch(filters: HTMLElement, root: HTMLElement, config: FilterConfig) {
  const existingInput = filters.querySelector<HTMLInputElement>('input[data-name="search-box"]');
  if (existingInput) return;

  const searchButton = filters.querySelector<HTMLButtonElement>('button[data-name="search-box"]');
  if (!searchButton) return;

  const placeholder = normalize(searchButton.querySelector("p")?.textContent) || "جستجو";
  const input = document.createElement("input");
  input.type = "search";
  input.setAttribute("data-name", "search-box");
  input.setAttribute("aria-label", placeholder);
  input.placeholder = placeholder;
  input.className = `${searchButton.className} fund-manager-filter-input`;
  input.autocomplete = "off";
  searchButton.replaceWith(input);
  input.addEventListener("input", () => applyListFilters(root, config));
}

function setupCyclingFilter(
  button: HTMLButtonElement | null,
  options: string[],
  root: HTMLElement,
  config: FilterConfig,
) {
  if (!button || button.dataset.filterReady === "true") return;
  const label = button.querySelector<HTMLElement>("p");
  if (!label) return;

  button.dataset.filterReady = "true";
  button.dataset.allLabel = normalize(label.textContent);
  button.dataset.filterIndex = "0";

  button.addEventListener("click", (event) => {
    event.preventDefault();
    const allOptions = ["", ...options];
    const nextIndex = (Number(button.dataset.filterIndex ?? "0") + 1) % allOptions.length;
    const nextValue = allOptions[nextIndex] ?? "";
    button.dataset.filterIndex = String(nextIndex);
    button.dataset.filterValue = nextValue;
    button.dataset.filterActive = nextValue ? "true" : "false";
    const nextLabel = nextValue || button.dataset.allLabel || "همه";
    if (normalize(label.textContent) !== nextLabel) label.textContent = nextLabel;
    applyListFilters(root, config);
  });
}

function setupCurrentList() {
  const config = LIST_CONFIG[window.location.pathname];
  if (!config) return;

  const root = document.querySelector<HTMLElement>(".fund-manager-panel");
  const filters = root?.querySelector<HTMLElement>('[data-name="filters"]');
  if (!root || !filters || filters.dataset.listControlsReady === "true") return;

  filters.dataset.listControlsReady = "true";
  const rows = getRows(root);
  setupSearch(filters, root, config);

  const primaryOptions = unique(rows.map((row) => getDirectText(row, config.primaryIndex)));
  const secondaryOptions = unique(rows.map((row) => getSecondaryText(row, config.secondary)));
  setupCyclingFilter(filters.querySelector<HTMLButtonElement>('button[data-name="filter-source"]'), primaryOptions, root, config);
  setupCyclingFilter(filters.querySelector<HTMLButtonElement>('button[data-name="filter-status"]'), secondaryOptions, root, config);
  applyListFilters(root, config);
}

setupCurrentList();

if (document.body) {
  new MutationObserver((mutations) => {
    if (!LIST_CONFIG[window.location.pathname]) return;
    if (!mutations.some((mutation) => mutation.addedNodes.length > 0)) return;
    setupCurrentList();
  }).observe(document.body, { childList: true, subtree: true });
}
