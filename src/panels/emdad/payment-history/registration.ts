import "./registration.css";

const ROOT_SELECTOR = '[data-name="emdad-payment-history"]';
const PAYMENTS_KEY = "mah.emdad.recordedPayments.v1";

type PaymentSource = "company" | "fund";
type PaymentContextType = "release" | "fund-payment" | "synergy";

type PaymentDraft = {
  source?: PaymentSource;
  project?: string;
  stage?: string;
  amount?: number;
  paidAt?: string;
  note?: string;
  title?: string;
  description?: string;
  contextType?: PaymentContextType;
  contextId?: string;
};

type EmdadPayment = {
  id: string;
  source: PaymentSource;
  project: string;
  stage: string;
  amount: number;
  paidAt: string;
  trackingCode: string;
  note?: string;
  createdAt: string;
  contextType?: PaymentContextType;
  contextId?: string;
};

function normalize(value: string | null | undefined) {
  return (value ?? "").replace(/\s+/g, " ").trim();
}

function faNumber(value: number) {
  return new Intl.NumberFormat("fa-IR", { maximumFractionDigits: 0 }).format(value);
}

function formatAmount(value: number) {
  return `${faNumber(value)} تومان`;
}

function readPayments(): EmdadPayment[] {
  try {
    const raw = localStorage.getItem(PAYMENTS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is EmdadPayment =>
      Boolean(
        item &&
          typeof item.id === "string" &&
          (item.source === "company" || item.source === "fund") &&
          typeof item.project === "string" &&
          typeof item.stage === "string" &&
          typeof item.amount === "number" &&
          Number.isFinite(item.amount) &&
          typeof item.paidAt === "string" &&
          typeof item.trackingCode === "string" &&
          typeof item.createdAt === "string",
      ),
    );
  } catch {
    return [];
  }
}

function writePayments(payments: EmdadPayment[]) {
  localStorage.setItem(PAYMENTS_KEY, JSON.stringify(payments));
  window.dispatchEvent(new CustomEvent("moon:emdad-payments-changed"));
}

function parseAmount(value: string) {
  const normalized = value
    .replace(/[۰-۹]/g, (digit) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit)))
    .replace(/[٠-٩]/g, (digit) => String("٠١٢٣٤٥٦٧٨٩".indexOf(digit)))
    .replace(/[٬,\s]/g, "");
  const amount = Number(normalized);
  return Number.isFinite(amount) ? amount : 0;
}

function createElement<K extends keyof HTMLElementTagNameMap>(tag: K, className?: string) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  return element;
}

function closeModal() {
  document.querySelector<HTMLElement>(".emdad-payment-modal-backdrop")?.remove();
}

function openModal(draft: PaymentDraft = {}) {
  closeModal();

  const backdrop = createElement("div", "emdad-payment-modal-backdrop");
  const modal = createElement("section", "emdad-payment-modal");
  modal.setAttribute("dir", "rtl");
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-labelledby", "emdad-payment-modal-title");

  modal.innerHTML = `
    <header class="emdad-payment-modal-header">
      <div>
        <h2 id="emdad-payment-modal-title">${draft.title ?? "ثبت پرداخت انجام‌شده"}</h2>
        <p>${draft.description ?? "پرداختی که کمیته امداد انجام داده است ثبت و اعلام می‌شود."}</p>
      </div>
      <button type="button" class="emdad-payment-modal-close" aria-label="بستن">×</button>
    </header>
    <form class="emdad-payment-form">
      <div class="emdad-payment-form-grid">
        <label>
          <span>منبع وجه</span>
          <select name="source" required>
            <option value="company">شرکت</option>
            <option value="fund">صندوق ماه</option>
          </select>
        </label>
        <label>
          <span>پروژه / ذی‌نفع</span>
          <input name="project" type="text" placeholder="نام پروژه" required />
        </label>
        <label>
          <span>مرحله / شرح پرداخت</span>
          <input name="stage" type="text" placeholder="مثلاً مرحله دوم" required />
        </label>
        <label>
          <span>مبلغ پرداخت (تومان)</span>
          <input name="amount" inputmode="numeric" type="text" placeholder="مثلاً 240000000" required />
        </label>
        <label>
          <span>تاریخ پرداخت</span>
          <input name="paidAt" type="date" required />
        </label>
        <label>
          <span>شماره پیگیری / رسید</span>
          <input name="trackingCode" type="text" placeholder="شماره مرجع بانکی" required />
        </label>
      </div>
      <label class="emdad-payment-note">
        <span>توضیحات</span>
        <textarea name="note" rows="3" placeholder="توضیح اختیاری درباره پرداخت"></textarea>
      </label>
      <p class="emdad-payment-form-error" aria-live="polite"></p>
      <footer class="emdad-payment-modal-actions">
        <button type="button" class="emdad-payment-secondary">انصراف</button>
        <button type="submit" class="emdad-payment-primary">ثبت و اعلام پرداخت</button>
      </footer>
    </form>
  `;

  backdrop.appendChild(modal);
  document.body.appendChild(backdrop);

  const today = new Date().toISOString().slice(0, 10);
  const sourceInput = modal.querySelector<HTMLSelectElement>('select[name="source"]');
  const projectInput = modal.querySelector<HTMLInputElement>('input[name="project"]');
  const stageInput = modal.querySelector<HTMLInputElement>('input[name="stage"]');
  const amountInput = modal.querySelector<HTMLInputElement>('input[name="amount"]');
  const dateInput = modal.querySelector<HTMLInputElement>('input[name="paidAt"]');
  const noteInput = modal.querySelector<HTMLTextAreaElement>('textarea[name="note"]');

  if (sourceInput) sourceInput.value = draft.source ?? "company";
  if (projectInput) projectInput.value = draft.project ?? "";
  if (stageInput) stageInput.value = draft.stage ?? "";
  if (amountInput && draft.amount && draft.amount > 0) amountInput.value = String(draft.amount);
  if (dateInput) dateInput.value = draft.paidAt ?? today;
  if (noteInput) noteInput.value = draft.note ?? "";

  modal.querySelector<HTMLButtonElement>(".emdad-payment-modal-close")?.addEventListener("click", closeModal);
  modal.querySelector<HTMLButtonElement>(".emdad-payment-secondary")?.addEventListener("click", closeModal);
  backdrop.addEventListener("mousedown", (event) => {
    if (event.target === backdrop) closeModal();
  });

  modal.querySelector<HTMLFormElement>(".emdad-payment-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const source = data.get("source") === "fund" ? "fund" : "company";
    const project = normalize(String(data.get("project") ?? ""));
    const stage = normalize(String(data.get("stage") ?? ""));
    const amount = parseAmount(String(data.get("amount") ?? ""));
    const paidAt = normalize(String(data.get("paidAt") ?? ""));
    const trackingCode = normalize(String(data.get("trackingCode") ?? ""));
    const note = normalize(String(data.get("note") ?? ""));
    const error = modal.querySelector<HTMLElement>(".emdad-payment-form-error");

    if (!project || !stage || !paidAt || !trackingCode || amount <= 0) {
      if (error) error.textContent = "پروژه، مرحله، مبلغ، تاریخ و شماره پیگیری را کامل کنید.";
      return;
    }

    const payment: EmdadPayment = {
      id: `EMDAD-PAY-${Date.now()}`,
      source,
      project,
      stage,
      amount,
      paidAt,
      trackingCode,
      note: note || undefined,
      createdAt: new Date().toISOString(),
      contextType: draft.contextType,
      contextId: draft.contextId,
    };

    writePayments([payment, ...readPayments()]);
    window.dispatchEvent(
      new CustomEvent("moon:emdad-payment-recorded", {
        detail: {
          payment,
          contextType: draft.contextType,
          contextId: draft.contextId,
        },
      }),
    );
    closeModal();
    applyPaymentHistory();
  });

  if (draft.project) {
    modal.querySelector<HTMLInputElement>('input[name="trackingCode"]')?.focus();
  } else {
    projectInput?.focus();
  }
}

function renderPayments(root: HTMLElement) {
  const table = root.querySelector<HTMLElement>('[data-name="payment-history-table"]');
  if (!table) return;

  table.querySelectorAll<HTMLElement>('[data-name="table-header"], [data-name="payment-history-row"], [data-name="pagination-footer"]').forEach((element) => {
    element.style.display = "none";
  });

  table.querySelector<HTMLElement>('[data-emdad-payment-ledger="true"]')?.remove();

  const ledger = createElement("div", "emdad-payment-ledger");
  ledger.dataset.emdadPaymentLedger = "true";
  ledger.setAttribute("dir", "rtl");

  const header = createElement("div", "emdad-payment-ledger-header");
  ["پروژه", "منبع وجه", "مرحله / شرح", "مبلغ", "تاریخ پرداخت", "شماره پیگیری"].forEach((label) => {
    const cell = createElement("span");
    cell.textContent = label;
    header.appendChild(cell);
  });
  ledger.appendChild(header);

  const payments = readPayments();
  if (!payments.length) {
    const empty = createElement("div", "emdad-payment-ledger-empty");
    empty.textContent = "هنوز پرداختی توسط کمیته امداد ثبت نشده است.";
    ledger.appendChild(empty);
  } else {
    payments.forEach((payment) => {
      const row = createElement("div", "emdad-payment-ledger-row");
      const values = [
        payment.project,
        payment.source === "company" ? "شرکت" : "صندوق ماه",
        payment.stage,
        formatAmount(payment.amount),
        payment.paidAt,
        payment.trackingCode,
      ];
      values.forEach((value, index) => {
        const cell = createElement(index === 0 ? "strong" : "span");
        cell.textContent = value;
        row.appendChild(cell);
      });
      ledger.appendChild(row);
    });
  }

  table.appendChild(ledger);

  const countPill = root.querySelector<HTMLElement>('[data-name="count-pill"] p');
  if (countPill) countPill.textContent = `${faNumber(payments.length)} رکورد`;

  const title = table.querySelector<HTMLElement>(":scope > div:first-child p");
  if (title) title.textContent = "پرداخت‌های ثبت و اعلام‌شده";
}

function applyPaymentHistory() {
  if (window.location.pathname !== "/panel/emdad/payment-history") return;
  const root = document.querySelector<HTMLElement>(ROOT_SELECTOR);
  if (!root) return;
  root.querySelector<HTMLElement>('[data-emdad-register-payment="true"]')?.remove();
  renderPayments(root);
}

window.addEventListener("popstate", () => requestAnimationFrame(applyPaymentHistory));
window.addEventListener("moon:emdad-payments-changed", () => requestAnimationFrame(applyPaymentHistory));
window.addEventListener("moon:emdad-open-payment-registration", (event) => {
  const detail = (event as CustomEvent<PaymentDraft>).detail ?? {};
  openModal(detail);
});

const start = () => {
  applyPaymentHistory();
  if (!document.body) return;

  let scheduled = false;
  new MutationObserver((mutations) => {
    const relevant = mutations.some((mutation) =>
      Array.from(mutation.addedNodes).some((node) => {
        if (!(node instanceof Element)) return false;
        return node.matches(ROOT_SELECTOR) || Boolean(node.querySelector(ROOT_SELECTOR));
      }),
    );
    if (!relevant || scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      applyPaymentHistory();
    });
  }).observe(document.body, { childList: true, subtree: true });
};

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start, { once: true });
else start();
