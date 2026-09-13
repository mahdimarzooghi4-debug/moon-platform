import { useEffect, useMemo, useState } from "react";
import "../index.css";
import "./index.css";

const REQUESTS_KEY = "mah.fundProjectPaymentRequests.v1";

type PaymentStatus = "pending" | "paid";

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
  paidAt?: string;
  receipt?: string;
};

const logo = "/assets/emdad/dashboard/logo.png";

function readRequests(): FundProjectPaymentRequest[] {
  try {
    const raw = localStorage.getItem(REQUESTS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
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

function navigate(path: string) {
  if (window.location.pathname === path) return;
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

const navItems = [
  ["داشبورد", "/panel/emdad", "⌂"],
  ["درخواست‌های آزادسازی", "/panel/emdad/release-requests", "⇩"],
  ["پرداخت‌های صندوق", "/panel/emdad/fund-payments", "↗"],
  ["تأیید گواهی ماده ۱۷۲", "/panel/emdad/article-172-approvals", "✓"],
  ["هم‌افزایی صندوق", "/panel/emdad/fund-synergy", "%"],
  ["سوابق هم‌افزایی صندوق", "/panel/emdad/fund-synergy/history", "↺"],
  ["سوابق پرداخت", "/panel/emdad/payment-history", "₮"],
  ["گزارش‌های مالی", "/panel/emdad/financial-reports", "▤"],
  ["بازگشت‌های صندوق", "/panel/emdad/fund-returns", "↩"],
] as const;

export default function EmdadFundPaymentsPage() {
  const [requests, setRequests] = useState<FundProjectPaymentRequest[]>(() => readRequests());
  const [view, setView] = useState<PaymentStatus>("pending");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    const sync = () => setRequests(readRequests());
    window.addEventListener("moon:fund-project-payments-changed", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("moon:fund-project-payments-changed", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const pendingCount = requests.filter((request) => request.status === "pending").length;
  const paidCount = requests.filter((request) => request.status === "paid").length;
  const visible = useMemo(
    () => requests.filter((request) => request.status === view).sort((a, b) => b.createdAt.localeCompare(a.createdAt)),
    [requests, view],
  );
  const selected = requests.find((request) => request.id === selectedId) ?? null;

  const approve = () => {
    if (!selected || selected.status !== "pending") return;
    const paidAt = new Date().toISOString();
    const receipt = `FP-${Date.now().toString().slice(-8)}`;
    const updated = requests.map((request) =>
      request.id === selected.id ? { ...request, status: "paid" as const, paidAt, receipt } : request,
    );
    localStorage.setItem(REQUESTS_KEY, JSON.stringify(updated));
    setRequests(updated);
    setSelectedId(selected.id);
    window.dispatchEvent(new CustomEvent("moon:fund-project-payments-changed"));
  };

  return (
    <div className="emdad-panel emdad-fund-payments-panel" data-name="emdad-fund-payments">
      <main className="emdad-fund-payments-main" data-name="Main Content">
        <header className="emdad-fund-payments-header">
          <div>
            <h1>پرداخت‌های صندوق به پروژه‌ها</h1>
            <p>اجرای درخواست‌هایی که مدیر صندوق برای پرداخت از منابع خود صندوق به پروژه ثبت کرده است.</p>
          </div>
          <div className="emdad-fund-payments-count">{faNumber(requests.length)} درخواست</div>
        </header>

        <div className="emdad-fund-payments-tabs">
          <button className="emdad-fund-payments-tab" data-active={view === "pending"} onClick={() => setView("pending")}>
            در انتظار اقدام {faNumber(pendingCount)}
          </button>
          <button className="emdad-fund-payments-tab" data-active={view === "paid"} onClick={() => setView("paid")}>
            پرداخت‌شده {faNumber(paidCount)}
          </button>
        </div>

        <section className="emdad-fund-payments-card">
          <div className="emdad-fund-payments-title">
            <div>
              <h2>{view === "pending" ? "درخواست‌های در انتظار پرداخت" : "پرداخت‌های انجام‌شده"}</h2>
              <p>منبع وجه در این بخش «صندوق» و دریافت‌کننده «پروژه / استارتاپ» است.</p>
            </div>
          </div>

          <div className="emdad-fund-payments-table-head">
            <div>پروژه / دریافت‌کننده</div>
            <div>مرحله</div>
            <div>مبلغ</div>
            <div>تاریخ درخواست</div>
            <div>وضعیت</div>
            <div>اقدام</div>
          </div>

          <div className="emdad-fund-payments-list">
            {visible.length === 0 ? (
              <div className="emdad-fund-payments-empty">
                {view === "pending" ? "درخواست پرداختی از طرف صندوق در انتظار اقدام نیست." : "هنوز پرداختی از منابع صندوق ثبت نشده است."}
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
                  <div>{formatDate(request.createdAt)}</div>
                  <div>
                    <span className="emdad-fund-payments-status" data-status={request.status}>
                      {request.status === "pending" ? "در انتظار پرداخت" : "پرداخت‌شده"}
                    </span>
                  </div>
                  <div>
                    <button className="emdad-fund-payments-review" type="button" onClick={() => setSelectedId(request.id)}>
                      {request.status === "pending" ? "بررسی درخواست" : "مشاهده رسید"}
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </main>

      <aside className="emdad-fund-payments-sidebar" data-name="colored-sidebar">
        <div className="emdad-fund-payments-logo" data-name="brand-logo"><img src={logo} alt="ماه" /></div>
        <div className="emdad-fund-payments-identity"><span>سامانه ماه</span><small>پنل کمیته امداد</small></div>
        {navItems.map(([label, path, icon]) => (
          <button
            key={path}
            type="button"
            className="emdad-fund-payments-nav"
            data-name={path === "/panel/emdad/fund-payments" ? "fund-payments-nav" : undefined}
            data-active={path === "/panel/emdad/fund-payments"}
            onClick={() => navigate(path)}
          >
            <span>{label}</span><span className="emdad-fund-payments-nav-icon">{icon}</span>
          </button>
        ))}
      </aside>

      {selected ? (
        <div className="emdad-fund-payment-modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && setSelectedId(null)}>
          <div className="emdad-fund-payment-modal" role="dialog" aria-modal="true">
            <h2>{selected.status === "pending" ? "بررسی درخواست پرداخت صندوق" : "رسید پرداخت صندوق"}</h2>
            <p>این درخواست توسط مدیر صندوق ثبت شده و مربوط به پرداخت مستقیم از منابع صندوق به مجری پروژه است.</p>
            <div className="emdad-fund-payment-detail-grid">
              <div className="emdad-fund-payment-detail"><span>پروژه</span><strong>{selected.project}</strong></div>
              <div className="emdad-fund-payment-detail"><span>دریافت‌کننده</span><strong>{selected.executor}</strong></div>
              <div className="emdad-fund-payment-detail"><span>مرحله / شرح</span><strong>{selected.stage}</strong></div>
              <div className="emdad-fund-payment-detail"><span>منبع وجه</span><strong>منابع صندوق</strong></div>
              <div className="emdad-fund-payment-detail"><span>مبلغ درخواست</span><strong>{formatAmount(selected.requestedAmount)}</strong></div>
              <div className="emdad-fund-payment-detail"><span>سقف سرمایه‌گذاری</span><strong>{formatAmount(selected.investmentAmount)}</strong></div>
              {selected.status === "paid" ? (
                <>
                  <div className="emdad-fund-payment-detail"><span>تاریخ پرداخت</span><strong>{formatDate(selected.paidAt)}</strong></div>
                  <div className="emdad-fund-payment-detail"><span>شماره رسید</span><strong>{selected.receipt ?? "—"}</strong></div>
                </>
              ) : null}
            </div>
            <div className="emdad-fund-payment-note">{selected.note ? `توضیح مدیر صندوق: ${selected.note}` : "توضیح تکمیلی برای این درخواست ثبت نشده است."}</div>
            <div className="emdad-fund-payment-actions">
              <button type="button" className="emdad-fund-payment-close" onClick={() => setSelectedId(null)}>بستن</button>
              <button type="button" className="emdad-fund-payment-approve" disabled={selected.status === "paid"} onClick={approve}>
                {selected.status === "pending" ? "تأیید و ثبت پرداخت به پروژه" : "پرداخت انجام شده"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
