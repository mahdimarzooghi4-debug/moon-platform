import { useEffect, useMemo, useState } from "react";
import EmdadSharedSidebar from "../SharedSidebar";
import "../index.css";
import "./index.css";

const REQUESTS_KEY = "mah.fundProjectPaymentRequests.v1";

type PaymentStatus = "pending_admin" | "approved" | "rejected" | "paid";
type ExecutionView = "approved" | "paid";

type FundProjectPaymentRequest = {
  id: string;
  project: string;
  executor: string;
  stage: string;
  investmentAmount: number;
  requestedAmount: number;
  note: string;
  status: PaymentStatus;
  createdAt: string;
  approvedAt?: string;
  rejectedAt?: string;
  paidAt?: string;
  receipt?: string;
};

function normalizeRequest(item: unknown): FundProjectPaymentRequest | null {
  if (!item || typeof item !== "object") return null;
  const value = item as Record<string, unknown>;
  const rawStatus = value.status === "pending" ? "pending_admin" : value.status;
  if (
    typeof value.id !== "string" ||
    typeof value.project !== "string" ||
    typeof value.executor !== "string" ||
    typeof value.stage !== "string" ||
    typeof value.investmentAmount !== "number" ||
    typeof value.requestedAmount !== "number" ||
    typeof value.note !== "string" ||
    typeof value.createdAt !== "string" ||
    !["pending_admin", "approved", "rejected", "paid"].includes(String(rawStatus))
  ) return null;

  const legacySyntheticPayment =
    rawStatus === "paid" && typeof value.receipt === "string" && value.receipt.startsWith("FP-");
  const status = legacySyntheticPayment ? "approved" : rawStatus;

  return {
    id: value.id,
    project: value.project,
    executor: value.executor,
    stage: value.stage,
    investmentAmount: value.investmentAmount,
    requestedAmount: value.requestedAmount,
    note: value.note,
    status: status as PaymentStatus,
    createdAt: value.createdAt,
    approvedAt: typeof value.approvedAt === "string" ? value.approvedAt : undefined,
    rejectedAt: typeof value.rejectedAt === "string" ? value.rejectedAt : undefined,
    paidAt: !legacySyntheticPayment && typeof value.paidAt === "string" ? value.paidAt : undefined,
    receipt: !legacySyntheticPayment && typeof value.receipt === "string" ? value.receipt : undefined,
  };
}

function readRequests(): FundProjectPaymentRequest[] {
  try {
    const raw = localStorage.getItem(REQUESTS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    const requests = parsed.map(normalizeRequest).filter((item): item is FundProjectPaymentRequest => Boolean(item));
    const needsMigration = parsed.some((item) => {
      if (!item || typeof item !== "object") return false;
      const value = item as Record<string, unknown>;
      return (
        value.status === "pending" ||
        (value.status === "paid" && typeof value.receipt === "string" && value.receipt.startsWith("FP-"))
      );
    });
    if (needsMigration) localStorage.setItem(REQUESTS_KEY, JSON.stringify(requests));
    return requests;
  } catch {
    return [];
  }
}

function faNumber(value: number) {
  return new Intl.NumberFormat("fa-IR", { maximumFractionDigits: 0 }).format(value);
}

function formatAmount(value: number) {
  return `${faNumber(value)} تومان`;
}

function formatDate(value?: string) {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";
  try {
    return new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(date);
  } catch {
    return new Intl.DateTimeFormat("fa-IR").format(date);
  }
}

function openPaymentRegistration(request: FundProjectPaymentRequest) {
  window.dispatchEvent(
    new CustomEvent("moon:emdad-open-payment-registration", {
      detail: {
        source: "fund",
        project: request.project,
        stage: request.stage,
        amount: request.requestedAmount,
        note: request.note,
        title: "ثبت پرداخت از محل صندوق",
        description:
          "وجه صندوق ماه وارد حساب امداد شده است؛ پرداخت انجام‌شده از حساب امداد به پروژه و شماره رسید بانکی را ثبت کنید.",
        contextType: "fund-payment",
        contextId: request.id,
      },
    }),
  );
}

export default function EmdadFundPaymentsPage() {
  const [requests, setRequests] = useState<FundProjectPaymentRequest[]>(() => readRequests());
  const [view, setView] = useState<ExecutionView>("approved");
  const [selectedReceiptId, setSelectedReceiptId] = useState<string | null>(null);

  useEffect(() => {
    const sync = () => setRequests(readRequests());
    window.addEventListener("moon:fund-project-payments-changed", sync);
    window.addEventListener("moon:emdad-payment-recorded", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("moon:fund-project-payments-changed", sync);
      window.removeEventListener("moon:emdad-payment-recorded", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const approvedCount = requests.filter((request) => request.status === "approved").length;
  const paidCount = requests.filter((request) => request.status === "paid").length;
  const eligibleCount = approvedCount + paidCount;
  const visible = useMemo(
    () => requests.filter((request) => request.status === view).sort((a, b) => b.createdAt.localeCompare(a.createdAt)),
    [requests, view],
  );
  const selected = requests.find(
    (request) => request.id === selectedReceiptId && request.status === "paid",
  ) ?? null;

  return (
    <div className="emdad-panel emdad-fund-payments-panel" data-name="emdad-fund-payments">
      <main className="emdad-fund-payments-main" data-name="Main Content">
        <header className="emdad-fund-payments-header">
          <div>
            <h1>پرداخت از محل صندوق</h1>
            <p>مسیر وجه: صندوق ماه → حساب کمیته امداد → پروژه. این بخش فقط اجرای پرداخت تأییدشده و ثبت رسید واقعی را انجام می‌دهد.</p>
          </div>
          <div className="emdad-fund-payments-count">{faNumber(eligibleCount)} درخواست</div>
        </header>

        <div className="emdad-fund-payments-tabs">
          <button className="emdad-fund-payments-tab" data-active={view === "approved"} onClick={() => setView("approved")}>
            در انتظار ثبت پرداخت {faNumber(approvedCount)}
          </button>
          <button className="emdad-fund-payments-tab" data-active={view === "paid"} onClick={() => setView("paid")}>
            پرداخت‌شده {faNumber(paidCount)}
          </button>
        </div>

        <section className="emdad-fund-payments-card">
          <div className="emdad-fund-payments-title">
            <div>
              <h2>{view === "approved" ? "پرداخت‌های تأییدشده آماده اجرا" : "پرداخت‌های ثبت‌شده"}</h2>
              <p>منبع تأمین «صندوق ماه» است و پرداخت واقعی از «حساب کمیته امداد» به پروژه انجام و با رسید بانکی ثبت می‌شود.</p>
            </div>
          </div>

          <div className="emdad-fund-payments-table-head">
            <div>پروژه / دریافت‌کننده</div>
            <div>مرحله</div>
            <div>مبلغ</div>
            <div>تاریخ تأیید مدیر ماه</div>
            <div>وضعیت</div>
            <div>اقدام</div>
          </div>

          <div className="emdad-fund-payments-list">
            {visible.length === 0 ? (
              <div className="emdad-fund-payments-empty">
                {view === "approved" ? "درخواست تأییدشده‌ای برای ثبت پرداخت وجود ندارد." : "هنوز پرداخت واقعی از محل صندوق ثبت نشده است."}
              </div>
            ) : (
              visible.map((request) => (
                <div className="emdad-fund-payments-row" key={request.id}>
                  <div className="emdad-fund-payments-project">
                    {request.project}
                    <small>{request.executor}</small>
                  </div>
                  <div>{request.stage}</div>
                  <div>{formatAmount(request.requestedAmount)}</div>
                  <div>{formatDate(request.approvedAt ?? request.createdAt)}</div>
                  <div>
                    <span className="emdad-fund-payments-status" data-status={request.status}>
                      {request.status === "approved" ? "تأییدشده؛ در انتظار پرداخت" : "پرداخت واقعی ثبت شد"}
                    </span>
                  </div>
                  <div>
                    <button
                      className="emdad-fund-payments-review"
                      type="button"
                      onClick={() => {
                        if (request.status === "approved") openPaymentRegistration(request);
                        else setSelectedReceiptId(request.id);
                      }}
                    >
                      {request.status === "approved" ? "ثبت پرداخت و رسید" : "مشاهده رسید"}
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </main>

      <EmdadSharedSidebar pathname={window.location.pathname} />

      {selected ? (
        <div className="emdad-fund-payment-modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && setSelectedReceiptId(null)}>
          <div className="emdad-fund-payment-modal" role="dialog" aria-modal="true" aria-label="رسید پرداخت از محل صندوق">
            <h2>رسید پرداخت از محل صندوق</h2>
            <p>این پرداخت از منابع صندوق ماه، پس از ورود وجه به حساب کمیته امداد، از حساب امداد به پروژه انجام شده است.</p>
            <div className="emdad-fund-payment-detail-grid">
              <div className="emdad-fund-payment-detail"><span>پروژه</span><strong>{selected.project}</strong></div>
              <div className="emdad-fund-payment-detail"><span>دریافت‌کننده</span><strong>{selected.executor}</strong></div>
              <div className="emdad-fund-payment-detail"><span>مرحله / شرح</span><strong>{selected.stage}</strong></div>
              <div className="emdad-fund-payment-detail"><span>منبع تأمین</span><strong>صندوق ماه</strong></div>
              <div className="emdad-fund-payment-detail"><span>پرداخت‌کننده</span><strong>حساب کمیته امداد</strong></div>
              <div className="emdad-fund-payment-detail"><span>مبلغ پرداخت</span><strong>{formatAmount(selected.requestedAmount)}</strong></div>
              <div className="emdad-fund-payment-detail"><span>تاریخ پرداخت</span><strong>{formatDate(selected.paidAt)}</strong></div>
              <div className="emdad-fund-payment-detail"><span>شماره رسید / پیگیری</span><strong>{selected.receipt ?? "—"}</strong></div>
            </div>
            <div className="emdad-fund-payment-note">{selected.note ? `توضیح درخواست: ${selected.note}` : "توضیح تکمیلی برای این درخواست ثبت نشده است."}</div>
            <div className="emdad-fund-payment-actions">
              <button type="button" className="emdad-fund-payment-close" onClick={() => setSelectedReceiptId(null)}>بستن</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
