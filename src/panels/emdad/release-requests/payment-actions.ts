const RELEASE_QUEUE_PATH = "/panel/emdad/release-requests";
const RELEASE_REQUESTS_KEY = "mah.creativeHouse.releaseRequests.v1";
const QUEUE_ROOT = '[data-name="emdad-release-requests"]';

type ReleaseRequest = {
  id: string;
  project?: string;
  stage?: string;
  amount?: number;
  status?: string;
  emdadApprovedAt?: string;
  receipt?: string;
};

function normalize(value: string | null | undefined) {
  return (value ?? "").replace(/\s+/g, " ").trim();
}

function readRequests(): ReleaseRequest[] {
  try {
    const parsed = JSON.parse(localStorage.getItem(RELEASE_REQUESTS_KEY) ?? "[]");
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item): item is ReleaseRequest => Boolean(item && typeof item === "object" && typeof item.id === "string"),
    );
  } catch {
    return [];
  }
}

function paymentDraft(request: ReleaseRequest) {
  return {
    source: "company" as const,
    project: normalize(request.project) || "پروژه",
    stage: normalize(request.stage) || "مرحله تأییدشده",
    amount: typeof request.amount === "number" && Number.isFinite(request.amount) ? request.amount : 0,
    note: "آزادسازی مرحله تأییدشده توسط خانه خلاق",
    title: "ثبت پرداخت آزادسازی وجه",
    description: "آزادسازی تأیید شده است؛ مشخصات پرداخت امداد و شماره رسید را ثبت کنید.",
    contextType: "release" as const,
    contextId: request.id,
  };
}

function styleActionStack(wrapper: HTMLElement) {
  wrapper.style.display = "flex";
  wrapper.style.flexDirection = "column";
  wrapper.style.alignItems = "stretch";
  wrapper.style.justifyContent = "center";
  wrapper.style.gap = "4px";
  wrapper.style.minWidth = "0";
  wrapper.style.height = "100%";
}

function stylePaymentButton(button: HTMLButtonElement, enabled: boolean, complete: boolean) {
  button.type = "button";
  button.style.width = "100%";
  button.style.height = "28px";
  button.style.padding = "0 8px";
  button.style.borderRadius = "7px";
  button.style.fontFamily = '"Vazirmatn", sans-serif';
  button.style.fontSize = "9px";
  button.style.fontWeight = "600";
  button.style.cursor = enabled ? "pointer" : "default";

  if (complete) {
    button.style.border = "1px solid #bfe8d2";
    button.style.background = "#e8faf0";
    button.style.color = "#149e57";
    button.style.opacity = "1";
    return;
  }

  if (enabled) {
    button.style.border = "1px solid #2094e3";
    button.style.background = "#2094e3";
    button.style.color = "#fff";
    button.style.opacity = "1";
    return;
  }

  button.style.border = "1px solid #dbe5f0";
  button.style.background = "#f5f8fb";
  button.style.color = "#8092a3";
  button.style.opacity = "1";
}

function decorateQueue() {
  if (window.location.pathname !== RELEASE_QUEUE_PATH) return;
  const root = document.querySelector<HTMLElement>(QUEUE_ROOT);
  if (!root) return;

  const requests = new Map(readRequests().map((request) => [request.id, request] as const));

  root.querySelectorAll<HTMLButtonElement>("[data-release-request-id]").forEach((reviewButton) => {
    const id = reviewButton.dataset.releaseRequestId;
    if (!id) return;
    const request = requests.get(id);
    if (!request) return;

    let wrapper = reviewButton.parentElement?.matches('[data-emdad-release-action-stack="true"]')
      ? (reviewButton.parentElement as HTMLElement)
      : null;

    if (!wrapper) {
      wrapper = document.createElement("div");
      wrapper.dataset.emdadReleaseActionStack = "true";
      reviewButton.replaceWith(wrapper);
      wrapper.appendChild(reviewButton);
      reviewButton.style.width = "100%";
      reviewButton.style.height = "28px";
      reviewButton.style.padding = "0 8px";
      reviewButton.style.fontSize = "9px";
      reviewButton.style.borderRadius = "7px";
    }

    styleActionStack(wrapper);

    let paymentButton = wrapper.querySelector<HTMLButtonElement>('[data-emdad-release-payment="true"]');
    if (!paymentButton) {
      paymentButton = document.createElement("button");
      paymentButton.dataset.emdadReleasePayment = "true";
      wrapper.appendChild(paymentButton);
    }

    const approved = typeof request.emdadApprovedAt === "string" && request.emdadApprovedAt.length > 0;
    const complete = typeof request.receipt === "string" && normalize(request.receipt).length > 0;
    const enabled = approved && !complete;

    paymentButton.disabled = !enabled;
    paymentButton.textContent = complete
      ? "پرداخت ثبت شد"
      : enabled
        ? "ثبت پرداخت و رسید"
        : "ثبت پرداخت پس از تأیید";
    stylePaymentButton(paymentButton, enabled, complete);

    if (paymentButton.dataset.bound !== "true") {
      paymentButton.dataset.bound = "true";
      paymentButton.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        const currentId = reviewButton.dataset.releaseRequestId;
        if (!currentId) return;
        const current = readRequests().find((item) => item.id === currentId);
        if (!current || !current.emdadApprovedAt || current.receipt) return;
        window.dispatchEvent(
          new CustomEvent("moon:emdad-open-payment-registration", {
            detail: paymentDraft(current),
          }),
        );
      });
    }
  });
}

window.addEventListener("popstate", () => requestAnimationFrame(decorateQueue));
window.addEventListener("moon:creative-house-release-requests-changed", () => requestAnimationFrame(decorateQueue));
window.addEventListener("moon:emdad-payment-recorded", () => requestAnimationFrame(decorateQueue));

const start = () => {
  decorateQueue();
  if (!document.body) return;

  let scheduled = false;
  new MutationObserver((mutations) => {
    const relevant = mutations.some((mutation) =>
      Array.from(mutation.addedNodes).some((node) => {
        if (!(node instanceof Element)) return false;
        return (
          node.matches(QUEUE_ROOT) ||
          node.matches("[data-release-request-id]") ||
          Boolean(node.querySelector(QUEUE_ROOT)) ||
          Boolean(node.querySelector("[data-release-request-id]"))
        );
      }),
    );
    if (!relevant || scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      decorateQueue();
    });
  }).observe(document.body, { childList: true, subtree: true });
};

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start, { once: true });
else start();
