const SUCCESS_PATH = "/panel/emdad/release-requests/success";
const SUCCESS_ROOT = '[data-name="emdad-release-success"]';
const REQUESTS_KEY = "mah.creativeHouse.releaseRequests.v1";
const SELECTED_KEY = "mah.creativeHouse.releaseRequests.selected.v1";
const PAYMENTS_KEY = "mah.emdad.recordedPayments.v1";

type ReleaseRequest = {
  id: string;
  project?: string;
  stage?: string;
  amount?: number;
  status?: string;
  createdAt?: string;
};

type RecordedPayment = {
  contextType?: string;
  contextId?: string;
};

function normalize(value: unknown) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

function readArray<T>(key: string): T[] {
  try {
    const parsed = JSON.parse(localStorage.getItem(key) ?? "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function getRequest() {
  const requests = readArray<ReleaseRequest>(REQUESTS_KEY).filter(
    (item) => item && typeof item.id === "string",
  );
  const selectedId = localStorage.getItem(SELECTED_KEY);
  const selected = selectedId ? requests.find((item) => item.id === selectedId) : undefined;
  if (selected) return selected;

  return [...requests].sort((a, b) =>
    normalize(b.createdAt).localeCompare(normalize(a.createdAt)),
  )[0] ?? null;
}

function hasRecordedPayment(requestId: string) {
  return readArray<RecordedPayment>(PAYMENTS_KEY).some(
    (payment) => payment?.contextType === "release" && payment.contextId === requestId,
  );
}

function openPayment(request: ReleaseRequest, event: MouseEvent) {
  event.preventDefault();
  event.stopPropagation();

  window.dispatchEvent(
    new CustomEvent("moon:emdad-open-payment-registration", {
      detail: {
        source: "company",
        project: normalize(request.project) || "پروژه",
        stage: normalize(request.stage) || "مرحله آزادسازی",
        amount: typeof request.amount === "number" && Number.isFinite(request.amount) ? request.amount : 0,
        note: "ثبت پرداخت آزادسازی وجه توسط کمیته امداد",
        title: "ثبت پرداخت و رسید آزادسازی وجه",
        description: "مشخصات پرداخت انجام‌شده توسط امداد و شماره پیگیری بانکی را ثبت کنید.",
        contextType: "release",
        contextId: request.id,
      },
    }),
  );
}

function applyReleaseSuccessPaymentAction() {
  if (window.location.pathname !== SUCCESS_PATH) return;

  const root = document.querySelector<HTMLElement>(SUCCESS_ROOT);
  if (!root) return;
  const actions =
    root.querySelector<HTMLElement>('[data-name="success-actions"]') ??
    root.querySelector<HTMLElement>('[data-node-id="2143:165"]');
  const request = getRequest();
  if (!actions || !request) return;

  let button = actions.querySelector<HTMLButtonElement>('[data-emdad-release-payment-action="true"]');
  if (!button) {
    button = document.createElement("button");
    button.type = "button";
    button.dataset.emdadReleasePaymentAction = "true";
    button.setAttribute("dir", "rtl");
    Object.assign(button.style, {
      position: "absolute",
      left: "423px",
      top: "85px",
      width: "210px",
      height: "42px",
      border: "1px solid #2094e3",
      borderRadius: "9px",
      background: "#2094e3",
      color: "#fff",
      fontFamily: '"Vazirmatn", sans-serif',
      fontSize: "11px",
      fontWeight: "600",
      cursor: "pointer",
      zIndex: "20",
    });
    actions.appendChild(button);
  }

  const paid = hasRecordedPayment(request.id);
  button.disabled = paid;
  button.textContent = paid ? "پرداخت ثبت شد" : "ثبت پرداخت و رسید";
  button.style.background = paid ? "#e9f8f1" : "#2094e3";
  button.style.borderColor = paid ? "#bfe5d1" : "#2094e3";
  button.style.color = paid ? "#159455" : "#fff";
  button.style.cursor = paid ? "default" : "pointer";
  button.onclick = paid ? null : (event) => openPayment(request, event);

  const badge = root.querySelector<HTMLElement>('[data-name="status-badge"] p');
  if (badge) badge.textContent = paid ? "تکمیل‌شده" : "در انتظار ثبت پرداخت";
}

window.addEventListener("popstate", () => requestAnimationFrame(applyReleaseSuccessPaymentAction));
window.addEventListener("moon:emdad-payments-changed", () =>
  requestAnimationFrame(applyReleaseSuccessPaymentAction),
);
window.addEventListener("moon:emdad-payment-recorded", () =>
  requestAnimationFrame(applyReleaseSuccessPaymentAction),
);

const start = () => {
  applyReleaseSuccessPaymentAction();
  if (!document.body) return;

  let scheduled = false;
  new MutationObserver((mutations) => {
    const relevant = mutations.some((mutation) =>
      Array.from(mutation.addedNodes).some((node) => {
        if (!(node instanceof Element)) return false;
        return node.matches(SUCCESS_ROOT) || Boolean(node.querySelector(SUCCESS_ROOT));
      }),
    );
    if (!relevant || scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      applyReleaseSuccessPaymentAction();
    });
  }).observe(document.body, { childList: true, subtree: true });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start, { once: true });
} else {
  start();
}
