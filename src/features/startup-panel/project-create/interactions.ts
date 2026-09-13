import "./interactive-rows.css";

const PROJECT_CREATE_ROOT = '.startup-panel-page[data-name^="startup-project-create-step"]';

function clearRowInputs(row: HTMLElement) {
  row.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("input, textarea").forEach((field) => {
    field.value = "";
  });
}

function toPersianNumber(value: number) {
  return String(value).replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]);
}

function enableDynamicLayout(card: HTMLElement) {
  card.classList.add("has-dynamic-rows");
}

function refreshDynamicLayout(card: HTMLElement) {
  if (!card.querySelector('[data-dynamic-row="kpi"], [data-dynamic-row="cost"], [data-dynamic-row="phase"]')) {
    card.classList.remove("has-dynamic-rows");
  }
}

function addPhase(card: HTMLElement) {
  const rows = card.querySelectorAll<HTMLElement>(".startup-create-phase-grid");
  const source = rows.item(rows.length - 1);
  if (!source) return;

  const clone = source.cloneNode(true) as HTMLElement;
  clearRowInputs(clone);
  clone.dataset.dynamicRow = "phase";
  clone.classList.add("startup-create-added-row");

  const number = clone.querySelector<HTMLElement>(".startup-create-phase-number");
  if (number) number.textContent = `فاز ${toPersianNumber(rows.length + 1)}`;

  source.insertAdjacentElement("afterend", clone);
  enableDynamicLayout(card);

  clone.querySelector<HTMLInputElement>("input")?.focus();
}

function addDataRow(card: HTMLElement, kind: "kpi" | "cost") {
  const selector = kind === "kpi" ? ".startup-create-kpi-row" : ".startup-create-cost-row";
  const rows = card.querySelectorAll<HTMLElement>(selector);
  const source = rows.item(rows.length - 1);
  if (!source) return;

  const clone = source.cloneNode(true) as HTMLElement;
  clearRowInputs(clone);
  clone.dataset.dynamicRow = kind;
  clone.classList.add("startup-create-added-row");

  const action = clone.querySelector<HTMLButtonElement>(".startup-create-outline-action");
  if (action) {
    action.textContent = kind === "kpi" ? "حذف شاخص" : "حذف ردیف هزینه";
    action.classList.add("startup-create-remove-row");
    action.setAttribute("aria-label", kind === "kpi" ? "حذف شاخص" : "حذف ردیف هزینه");
  }

  source.insertAdjacentElement("afterend", clone);
  enableDynamicLayout(card);

  clone.querySelector<HTMLInputElement>("input")?.focus();
}

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;

  const button = target.closest<HTMLButtonElement>("button.startup-create-outline-action");
  if (!button || !button.closest(PROJECT_CREATE_ROOT)) return;

  const card = button.closest<HTMLElement>(".startup-create-card");
  if (!card) return;

  if (button.classList.contains("startup-create-remove-row")) {
    const row = button.closest<HTMLElement>("[data-dynamic-row]");
    if (row) {
      row.remove();
      refreshDynamicLayout(card);
    }
    return;
  }

  const label = button.textContent?.trim() ?? "";

  if (card.classList.contains("is-step-2") && label === "افزودن فاز") {
    addPhase(card);
    return;
  }

  if (card.classList.contains("is-step-3") && label === "افزودن شاخص") {
    addDataRow(card, "kpi");
    return;
  }

  if (card.classList.contains("is-step-3") && label === "افزودن ردیف هزینه") {
    addDataRow(card, "cost");
  }
});
