const RELEASE_REQUESTS_KEY = "mah.creativeHouse.releaseRequests.v1";
const RELEASE_SELECTED_KEY = "mah.creativeHouse.releaseRequests.selected.v1";
const FUND_REQUESTS_KEY = "mah.fundProjectPaymentRequests.v1";
const SYNERGY_REQUESTS_KEY = "mah.fundSynergyRequests.v2";
const SYNERGY_SELECTED_KEY = "mah.fundSynergyRequests.selected.v2";

type PaymentSource = "company" | "fund";
type PaymentContextType = "release" | "fund-payment" | "synergy";

type PaymentDraft = {
  source: PaymentSource;
  project: string;
  stage: string;
  amount: number;
  note?: string;
  title: string;
  description: string;
  contextType: PaymentContextType;
  contextId: string;
};

type RecordedPayment = {
  paidAt: string;
  trackingCode: string;
};

function normalize(value: string | null | undefined) {
  return (value ?? "").replace(/\s+/g, " ").trim();
}

function readArray(key: string): Record<string, unknown>[] {
  try {
    const parsed = JSON.parse(localStorage.getItem(key) ?? "[]");
    return Array.isArray(parsed) ? parsed.filter((item) => item && typeof item === "object") : [];
  } catch {
    return [];
  }
}

function writeArray(key: string, values: Record<string, unknown>[], changedEvent: string) {
  localStorage.setItem(key, JSON.stringify(values));
  window.dispatchEvent(new CustomEvent(changedEvent));
}

function numberValue(value: unknown) {
  return typeof value === "number" && Number.isFinite(value) ? value : 0;
}

function selectedById(key: string, selectedKey: string) {
  const selectedId = localStorage.getItem(selectedKey);
  if (!selectedId) return null;
  return readArray(key).find((item) => item.id === selectedId) ?? null;
}

function stopAction(event: MouseEvent) {
  event.preventDefault();
  event.stopImmediatePropagation();
}

function openPayment(draft: PaymentDraft, event: MouseEvent) {
  stopAction(event);
  window.dispatchEvent(new CustomEvent("moon:emdad-open-payment-registration", { detail: draft }));
}

function markApproved(key: string, id: string, changedEvent: string) {
  const updated = readArray(key).map((item) =>
    item.id === id ? { ...item, emdadApprovedAt: new Date().toISOString() } : item,
  );
  writeArray(key, updated, changedEvent);
  requestAnimationFrame(decorateContextActions);
}

function releasePaymentDraft(request: Record<string, unknown>): PaymentDraft | null {
  if (typeof request.id !== "string") return null;
  const approved = typeof request.emdadApprovedAt === "string";
  const awaitingPayment = (request.status === "pending" && approved) || (request.status === "released" && !request.receipt);
  if (!awaitingPayment) return null;
  return {
    source: "company",
    project: normalize(String(request.project ?? "")),
    stage: normalize(String(request.stage ?? "")),
    amount: numberValue(request.amount),
    note: "آزادسازی مرحله تأییدشده توسط خانه خلاق",
    title: "ثبت پرداخت آزادسازی وجه",
    description: "آزادسازی تأیید شده است؛ مشخصات پرداخت امداد و شماره رسید را ثبت کنید.",
    contextType: "release",
    contextId: request.id,
  };
}

function fundPaymentDraft(modal: HTMLElement): PaymentDraft | null {
  const project = normalize(modal.querySelector<HTMLElement>(".emdad-fund-payment-detail strong")?.textContent);
  const requests = readArray(FUND_REQUESTS_KEY);
  const request = requests.find(
    (item) => item.status === "approved" && (!project || normalize(String(item.project ?? "")) === project),
  );
  if (!request || typeof request.id !== "string") return null;
  return {
    source: "fund",
    project: normalize(String(request.project ?? "")),
    stage: normalize(String(request.stage ?? "")),
    amount: numberValue(request.requestedAmount),
    note: normalize(String(request.note ?? "")),
    title: "ثبت پرداخت از محل صندوق",
    description: "وجه صندوق وارد حساب امداد شده است؛ پرداخت انجام‌شده به پروژه و رسید بانکی را ثبت کنید.",
    contextType: "fund-payment",
    contextId: request.id,
  };
}

function synergyPaymentDraft(request: Record<string, unknown>): PaymentDraft | null {
  if (typeof request.id !== "string") return null;
  const approved = typeof request.emdadApprovedAt === "string";
  const awaitingPayment = (request.status === "pending" && approved) || (request.status === "allocated" && !request.receipt);
  if (!awaitingPayment) return null;
  return {
    source: "company",
    project: normalize(String(request.project ?? "")),
    stage: "واریز سهم ۱۰٪ هم‌افزایی به صندوق ماه",
    amount: numberValue(request.fundShare),
    note: `شرکت: ${normalize(String(request.company ?? ""))}`,
    title: "ثبت پرداخت سهم هم‌افزایی صندوق",
    description: "تخصیص تأیید شده است؛ واریز سهم ۱۰٪ به صندوق و شماره رسید را در همین مرحله ثبت کنید.",
    contextType: "synergy",
    contextId: request.id,
  };
}

function setButtonText(button: HTMLElement, text: string) {
  const paragraph = button.querySelector<HTMLElement>("p");
  if (paragraph) paragraph.textContent = text;
  else button.textContent = text;
}

function decorateReleaseQueueActions() {
  if (window.location.pathname !== "/panel/emdad/release-requests") return;
  const requests = readArray(RELEASE_REQUESTS_KEY);
  const byId = new Map(
    requests
      .filter((item) => typeof item.id === "string")
      .map((item) => [String(item.id), item] as const),
  );

  document
    .querySelectorAll<HTMLButtonElement>(
      '[data-name="emdad-release-requests"] [data-release-request-id]',
    )
    .forEach((button) => {
      const id = button.dataset.releaseRequestId;
      if (!id) return;
      const request = byId.get(id);
      if (!request) return;

      const approved = typeof request.emdadApprovedAt === "string";
      const hasReceipt = typeof request.receipt === "string" && normalize(String(request.receipt)).length > 0;
      const row = button.closest<HTMLElement>(".creative-release-queue-row");
      const status = row?.querySelector<HTMLElement>(".creative-release-queue-status");

      if (approved && !hasReceipt) {
        button.dataset.paymentReady = "true";
        button.textContent = "ثبت پرداخت و رسید";
        if (status) {
          status.dataset.paymentStage = "approved";
          status.textContent = "تأیید شده؛ در انتظار پرداخت";
        }
        return;
      }

      delete button.dataset.paymentReady;
      if (status) delete status.dataset.paymentStage;
    });
}

function decorateContextActions() {
  decorateReleaseQueueActions();

  if (window.location.pathname === "/panel/emdad/release-requests/detail") {
    const request = selectedById(RELEASE_REQUESTS_KEY, RELEASE_SELECTED_KEY);
    const button = document.querySelector<HTMLElement>(
      '[data-name="emdad-release-request-detail"] [data-name="approve-release-button"]',
    );
    if (request && button) {
      const approved = typeof request.emdadApprovedAt === "string";
      if ((request.status === "pending" && approved) || (request.status === "released" && !request.receipt)) {
        button.dataset.releaseComplete = "false";
        button.style.setProperty("pointer-events", "auto", "important");
        button.style.removeProperty("opacity");
        setButtonText(button, "ثبت پرداخت و رسید");
      } else if (request.status === "released" && request.receipt) {
        button.dataset.releaseComplete = "true";
        setButtonText(button, "پرداخت ثبت شد");
      }
    }
  }

  if (window.location.pathname === "/panel/emdad/fund-synergy/allocation") {
    const request = selectedById(SYNERGY_REQUESTS_KEY, SYNERGY_SELECTED_KEY);
    const button = document.querySelector<HTMLElement>(
      '[data-name="emdad-fund-synergy-allocation"] [data-name="approve-final"]',
    );
    if (request && button) {
      const approved = typeof request.emdadApprovedAt === "string";
      if ((request.status === "pending" && approved) || (request.status === "allocated" && !request.receipt)) {
        button.removeAttribute("data-moon-allocated");
        button.style.setProperty("pointer-events", "auto", "important");
        button.style.removeProperty("opacity");
        setButtonText(button, "ثبت پرداخت و رسید");
      } else if (request.status === "allocated" && request.receipt) {
        button.dataset.moonAllocated = "true";
        setButtonText(button, "پرداخت ثبت شد");
      }
    }
  }
}

window.addEventListener(
  "click",
  (event) => {
    if (event.button !== 0) return;
    const target = event.target;
    if (!(target instanceof Element)) return;

    const releaseQueueAction = target.closest<HTMLButtonElement>(
      '[data-name="emdad-release-requests"] [data-release-request-id]',
    );
    if (releaseQueueAction?.dataset.releaseRequestId && releaseQueueAction.dataset.paymentReady === "true") {
      const request = readArray(RELEASE_REQUESTS_KEY).find(
        (item) => item.id === releaseQueueAction.dataset.releaseRequestId,
      );
      const draft = request ? releasePaymentDraft(request) : null;
      if (draft) openPayment(draft, event);
      return;
    }

    const releaseApprove = target.closest<HTMLElement>(
      '[data-name="emdad-release-request-detail"] [data-name="approve-release-button"]',
    );
    if (releaseApprove) {
      const request = selectedById(RELEASE_REQUESTS_KEY, RELEASE_SELECTED_KEY);
      if (!request || typeof request.id !== "string") return;
      if (request.status === "pending" && typeof request.emdadApprovedAt !== "string") {
        stopAction(event);
        markApproved(RELEASE_REQUESTS_KEY, request.id, "moon:creative-house-release-requests-changed");
        return;
      }
      const draft = releasePaymentDraft(request);
      if (draft) openPayment(draft, event);
      return;
    }

    const fundApprove = target.closest<HTMLButtonElement>(".emdad-fund-payment-approve");
    if (fundApprove && !fundApprove.disabled) {
      const modal = fundApprove.closest<HTMLElement>(".emdad-fund-payment-modal");
      const draft = modal ? fundPaymentDraft(modal) : null;
      if (draft) openPayment(draft, event);
      return;
    }

    const synergyApprove = target.closest<HTMLElement>(
      '[data-name="emdad-fund-synergy-allocation"] [data-name="approve-final"]',
    );
    if (synergyApprove) {
      const request = selectedById(SYNERGY_REQUESTS_KEY, SYNERGY_SELECTED_KEY);
      if (!request || typeof request.id !== "string") return;
      if (request.status === "pending" && typeof request.emdadApprovedAt !== "string") {
        stopAction(event);
        markApproved(SYNERGY_REQUESTS_KEY, request.id, "moon:fund-synergy-requests-changed");
        return;
      }
      const draft = synergyPaymentDraft(request);
      if (draft) openPayment(draft, event);
    }
  },
  true,
);

window.addEventListener("moon:emdad-payment-recorded", (event) => {
  const detail = (event as CustomEvent<{
    payment?: RecordedPayment;
    contextType?: PaymentContextType;
    contextId?: string;
  }>).detail;
  const payment = detail?.payment;
  const contextType = detail?.contextType;
  const contextId = detail?.contextId;
  if (!payment || !contextType || !contextId) return;

  if (contextType === "release") {
    const updated = readArray(RELEASE_REQUESTS_KEY).map((item) =>
      item.id === contextId
        ? {
            ...item,
            status: "released",
            releasedAt: payment.paidAt,
            receipt: payment.trackingCode,
          }
        : item,
    );
    writeArray(RELEASE_REQUESTS_KEY, updated, "moon:creative-house-release-requests-changed");
    requestAnimationFrame(decorateContextActions);
    return;
  }

  if (contextType === "fund-payment") {
    const updated = readArray(FUND_REQUESTS_KEY).map((item) =>
      item.id === contextId
        ? {
            ...item,
            status: "paid",
            paidAt: payment.paidAt,
            receipt: payment.trackingCode,
          }
        : item,
    );
    writeArray(FUND_REQUESTS_KEY, updated, "moon:fund-project-payments-changed");
    return;
  }

  const updated = readArray(SYNERGY_REQUESTS_KEY).map((item) =>
    item.id === contextId
      ? {
          ...item,
          status: "allocated",
          allocatedAt: payment.paidAt,
          receipt: payment.trackingCode,
        }
      : item,
  );
  writeArray(SYNERGY_REQUESTS_KEY, updated, "moon:fund-synergy-requests-changed");
  requestAnimationFrame(decorateContextActions);
});

window.addEventListener("popstate", () => requestAnimationFrame(decorateContextActions));
window.addEventListener("moon:creative-house-release-requests-changed", () =>
  requestAnimationFrame(decorateContextActions),
);
window.addEventListener("moon:fund-synergy-requests-changed", () => requestAnimationFrame(decorateContextActions));

const start = () => {
  decorateContextActions();
  if (!document.body) return;
  let scheduled = false;
  new MutationObserver((mutations) => {
    const relevant = mutations.some((mutation) =>
      Array.from(mutation.addedNodes).some((node) => {
        if (!(node instanceof Element)) return false;
        return (
          node.matches('[data-name="emdad-release-requests"]') ||
          node.matches('[data-name="emdad-release-request-detail"]') ||
          node.matches('[data-name="emdad-fund-synergy-allocation"]') ||
          Boolean(node.querySelector('[data-name="emdad-release-requests"]')) ||
          Boolean(node.querySelector('[data-name="emdad-release-request-detail"]')) ||
          Boolean(node.querySelector('[data-name="emdad-fund-synergy-allocation"]'))
        );
      }),
    );
    if (!relevant || scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      decorateContextActions();
    });
  }).observe(document.body, { childList: true, subtree: true });
};

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start, { once: true });
else start();