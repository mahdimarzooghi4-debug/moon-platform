const FUNDING_FLOW_PATH = "/panel/fund-manager/funding-flow-control";
const REGISTERED_FLOWS_KEY = "mah.fundManager.registeredFlows.v1";
const DEFAULT_BUTTON_LABEL = "ثبت جریان منابع";

type RegisteredFlow = {
  type: string;
  project: string;
  source: string;
  amount: string;
  date: string;
  reference: string;
  savedAt: string;
};

function normalize(value: string | null | undefined) {
  return (value ?? "").replace(/\s+/g, " ").trim();
}

function readRecords(): RegisteredFlow[] {
  try {
    const raw = localStorage.getItem(REGISTERED_FLOWS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeRecords(records: RegisteredFlow[]) {
  localStorage.setItem(REGISTERED_FLOWS_KEY, JSON.stringify(records));
}

function getPage() {
  return document.querySelector<HTMLElement>('[data-name="fund-manager-funding-flow-control"]');
}

function getFormValues(page: HTMLElement) {
  const values = Array.from(
    page.querySelectorAll<HTMLElement>('[data-name="register-flow-panel"] [data-name="field"] p'),
  ).map((node) => normalize(node.textContent));

  const [type = "", project = "", source = "", amount = "", date = "", reference = ""] = values;
  return { type, project, source, amount, date, reference };
}

function setButtonLabel(button: HTMLButtonElement, label: string) {
  const labelNode = button.querySelector<HTMLElement>("p");
  if (labelNode) {
    if (normalize(labelNode.textContent) !== label) labelNode.textContent = label;
    return;
  }
  if (normalize(button.textContent) !== label) button.textContent = label;
}

function setStatus(page: HTMLElement, message: string, tone: "success" | "warning" | "neutral") {
  const statusBox = page.querySelector<HTMLElement>('[data-name="match-status"]');
  const statusText = statusBox?.querySelector<HTMLElement>("p");
  if (statusText && normalize(statusText.textContent) !== message) statusText.textContent = message;
  if (!statusBox) return;

  const palette = {
    success: { background: "#e8faf0", border: "#bfe8d0", text: "#149e57" },
    warning: { background: "#fff5de", border: "#f0d8a8", text: "#c77a0d" },
    neutral: { background: "#e8f4fc", border: "#bfdef5", text: "#2094e3" },
  }[tone];

  statusBox.style.backgroundColor = palette.background;
  statusBox.style.borderColor = palette.border;
  if (statusText) statusText.style.color = palette.text;
}

function updateTotalKpi(page: HTMLElement, records: RegisteredFlow[]) {
  const totalLabel = page.querySelector<HTMLElement>('[data-name="kpi-row"] [data-node-id="2384:176"] p');
  if (!totalLabel) return;
  const next = `${(12 + records.length).toLocaleString("fa-IR")} جریان`;
  if (normalize(totalLabel.textContent) !== next) totalLabel.textContent = next;
}

function setupEditableFields(page: HTMLElement) {
  page.querySelectorAll<HTMLElement>('[data-name="register-flow-panel"] [data-name="field"] p').forEach((value) => {
    if (value.dataset.flowEditable === "true") return;
    value.dataset.flowEditable = "true";
    value.contentEditable = "true";
    value.spellcheck = false;
    value.tabIndex = 0;
    value.setAttribute("role", "textbox");
    value.classList.add("fund-flow-editable-value");
  });
}

function restoreSavedState() {
  if (window.location.pathname !== FUNDING_FLOW_PATH) return;
  const page = getPage();
  if (!page) return;

  setupEditableFields(page);
  const saveButton = page.querySelector<HTMLButtonElement>('button[data-name="save-flow"]');
  if (!saveButton) return;

  const form = getFormValues(page);
  const records = readRecords();
  updateTotalKpi(page, records);

  if (form.reference && records.some((record) => record.reference === form.reference)) {
    setButtonLabel(saveButton, "جریان ثبت شده ✓");
    saveButton.disabled = true;
    saveButton.dataset.flowSaved = "true";
    setStatus(page, "این جریان با همین شناسه مرجع قبلاً ثبت شده است. برای ثبت جریان جدید، اطلاعات یا شناسه مرجع را تغییر دهید.", "success");
  } else {
    setButtonLabel(saveButton, DEFAULT_BUTTON_LABEL);
    saveButton.disabled = false;
    saveButton.dataset.flowSaved = "false";
  }
}

function handleSave(button: HTMLButtonElement) {
  const page = getPage();
  if (!page) return;

  const form = getFormValues(page);
  if (!form.reference) {
    setStatus(page, "برای ثبت جریان، شناسه مرجع الزامی است.", "warning");
    return;
  }

  const records = readRecords();
  if (records.some((record) => record.reference === form.reference)) {
    setButtonLabel(button, "جریان ثبت شده ✓");
    button.disabled = true;
    button.dataset.flowSaved = "true";
    setStatus(page, "این جریان قبلاً با همین شناسه مرجع ثبت شده است.", "success");
    updateTotalKpi(page, records);
    return;
  }

  const nextRecord: RegisteredFlow = {
    ...form,
    savedAt: new Date().toISOString(),
  };

  const nextRecords = [...records, nextRecord];
  try {
    writeRecords(nextRecords);
  } catch {
    setStatus(page, "ثبت جریان در مرورگر انجام نشد. دوباره تلاش کنید.", "warning");
    return;
  }

  setButtonLabel(button, "جریان ثبت شد ✓");
  button.disabled = true;
  button.dataset.flowSaved = "true";
  setStatus(
    page,
    `جریان «${form.project || "پروژه"}» با شناسه ${form.reference} با موفقیت ثبت شد.`,
    "success",
  );
  updateTotalKpi(page, nextRecords);
}

document.addEventListener(
  "click",
  (event) => {
    if (window.location.pathname !== FUNDING_FLOW_PATH) return;
    const target = event.target;
    if (!(target instanceof Element)) return;

    const saveButton = target.closest<HTMLButtonElement>('button[data-name="save-flow"]');
    if (!saveButton) return;

    event.preventDefault();
    event.stopImmediatePropagation();
    handleSave(saveButton);
  },
  true,
);

document.addEventListener("input", (event) => {
  if (window.location.pathname !== FUNDING_FLOW_PATH) return;
  const target = event.target;
  if (!(target instanceof HTMLElement) || target.dataset.flowEditable !== "true") return;

  const page = getPage();
  const saveButton = page?.querySelector<HTMLButtonElement>('button[data-name="save-flow"]');
  if (!page || !saveButton) return;

  saveButton.disabled = false;
  saveButton.dataset.flowSaved = "false";
  setButtonLabel(saveButton, DEFAULT_BUTTON_LABEL);
  setStatus(page, "اطلاعات جریان ویرایش شد؛ برای ثبت نهایی دکمه پایین را بزنید.", "neutral");
});

restoreSavedState();

if (document.body) {
  new MutationObserver((mutations) => {
    if (window.location.pathname !== FUNDING_FLOW_PATH) return;
    if (!mutations.some((mutation) => mutation.addedNodes.length > 0)) return;
    restoreSavedState();
  }).observe(document.body, { childList: true, subtree: true });
}
