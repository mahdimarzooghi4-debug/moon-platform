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

function openPayment(draft: PaymentDraft, event: MouseEvent) {
  event.preventDefault();
  event.stopImmediatePropagation();
  window.dispatchEvent(new CustomEvent("moon:emdad-open-payment-registration", { detail: draft }));
}

function releaseDraft(): PaymentDraft | null {
  const request = selectedById(RELEASE_REQUESTS_KEY, RELEASE_SELECTED_KEY);
  if (!request || request.status !== "pending" || typeof request.id !== "string") return null;
  return {
    source: "company",
    project: normalize(String(request.project ?? "")),
    stage: normalize(String(request.stage ?? "")),
    amount: numberValue(request.amount),
    note: "آزادسازی مرحله تأییدشده توسط خانه خلاق",
    title: "ثبت پرداخت آزادسازی وجه",
    description: "پس از تأیید آزادسازی، مشخصات پرداخت امداد و شماره رسید را ثبت کنید.",
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

function synergyDraft(): PaymentDraft | null {
  const request = selectedById(SYNERGY_REQUESTS_KEY, SYNERGY_SELECTED_KEY);
  if (!request || request.status !== "pending" || typeof request.id !== "string") return null;
  return {
    source: "company",
    project: normalize(String(request.project ?? "")),
    stage: "واریز سهم ۱۰٪ هم‌افزایی به صندوق ماه",
    amount: numberValue(request.fundShare),
    note: `شرکت: ${normalize(String(request.company ?? ""))}`,
    title: "ثبت پرداخت سهم هم‌افزایی صندوق",
    description: "پس از تأیید تخصیص، واریز سهم ۱۰٪ به صندوق و شماره رسید را در همین مرحله ثبت کنید.",
    contextType: "synergy",
    contextId: request.id,
  };
}

window.addEventListener(
  "click",
  (event) => {
    if (event.button !== 0) return;
    const target = event.target;
    if (!(target instanceof Element)) return;

    const releaseApprove = target.closest<HTMLElement>(
      '[data-name="emdad-release-request-detail"] [data-name="approve-release-button"]',
    );
    if (releaseApprove) {
      const draft = releaseDraft();
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
      const draft = synergyDraft();
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
});
