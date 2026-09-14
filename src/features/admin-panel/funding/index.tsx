import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AdminSidebar } from "../components/AdminSidebar";
import { downloadCsv } from "../export-csv";
import "../index.css";
import "../users-flow.css";
import "../list-flow.css";

const ASSET_ROOT = "/assets/admin-panel";
const REQUESTS_KEY = "mah.fundProjectPaymentRequests.v1";

type FundPaymentStatus = "pending_admin" | "approved" | "rejected" | "paid";

type FundPaymentRequest = {
  id: string;
  project: string;
  executor: string;
  stage: string;
  investmentAmount: number;
  requestedAmount: number;
  note: string;
  status: FundPaymentStatus;
  createdAt: string;
  approvedAt?: string;
  rejectedAt?: string;
  paidAt?: string;
  receipt?: string;
};

const flows = [
  { name: "سلامت خانواده", meta: "شرکت: پایدار پرداز خلاق آریا", source: "شرکت", status: "در حال تأمین", amount: "۵۰۰ میلیون تومان", last: "پرداخت نقدی" },
  { name: "مهارت برای نوجوانان", meta: "مدیر اجرا: راهکار نوآور فردا", source: "صندوق", status: "تأمین‌شده", amount: "۳۲۰ میلیون تومان", last: "تخصیص صندوق" },
  { name: "اشتغال زنان روستایی", meta: "مدیر اجرا: فناوری سلامت نوین", source: "ترکیبی", status: "در حال تأمین", amount: "۴۸۰ میلیون تومان", last: "شرکت + صندوق" },
];

function normalizeRequest(item: unknown): FundPaymentRequest | null {
  if (!item || typeof item !== "object") return null;
  const value = item as Record<string, unknown>;
  const status = value.status === "pending" ? "pending_admin" : value.status;
  if (
    typeof value.id !== "string" || typeof value.project !== "string" || typeof value.executor !== "string" || typeof value.stage !== "string" ||
    typeof value.investmentAmount !== "number" || typeof value.requestedAmount !== "number" || typeof value.note !== "string" || typeof value.createdAt !== "string" ||
    !["pending_admin", "approved", "rejected", "paid"].includes(String(status))
  ) return null;
  return {
    id: value.id, project: value.project, executor: value.executor, stage: value.stage, investmentAmount: value.investmentAmount, requestedAmount: value.requestedAmount,
    note: value.note, status: status as FundPaymentStatus, createdAt: value.createdAt,
    approvedAt: typeof value.approvedAt === "string" ? value.approvedAt : undefined,
    rejectedAt: typeof value.rejectedAt === "string" ? value.rejectedAt : undefined,
    paidAt: typeof value.paidAt === "string" ? value.paidAt : undefined,
    receipt: typeof value.receipt === "string" ? value.receipt : undefined,
  };
}

function readRequests() {
  try {
    const raw = localStorage.getItem(REQUESTS_KEY);
    if (!raw) return [] as FundPaymentRequest[];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [] as FundPaymentRequest[];
    const requests = parsed.map(normalizeRequest).filter((item): item is FundPaymentRequest => Boolean(item));
    if (parsed.some((item) => item && typeof item === "object" && (item as { status?: unknown }).status === "pending")) localStorage.setItem(REQUESTS_KEY, JSON.stringify(requests));
    return requests;
  } catch { return [] as FundPaymentRequest[]; }
}

function writeRequests(requests: FundPaymentRequest[]) {
  localStorage.setItem(REQUESTS_KEY, JSON.stringify(requests));
  window.dispatchEvent(new CustomEvent("moon:fund-project-payments-changed"));
}

function faNumber(value: number) { return new Intl.NumberFormat("fa-IR", { maximumFractionDigits: 0 }).format(value); }
function formatAmount(value: number) { return `${faNumber(value)} تومان`; }
function formatDate(value?: string) {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";
  try { return new Intl.DateTimeFormat("fa-IR-u-ca-persian", { year: "numeric", month: "2-digit", day: "2-digit" }).format(date); }
  catch { return new Intl.DateTimeFormat("fa-IR").format(date); }
}
function statusLabel(status: FundPaymentStatus) { if (status === "pending_admin") return "در انتظار مدیر ماه"; if (status === "approved") return "تأیید مدیر ماه"; if (status === "rejected") return "رد شده"; return "پرداخت‌شده"; }
function statusClass(status: FundPaymentStatus) { if (status === "pending_admin") return "admin-status-review"; if (status === "rejected") return "admin-access-limited"; return "admin-status-active"; }

export default function AdminFunding() {
  const initialRequests = readRequests();
  const [requests, setRequests] = useState<FundPaymentRequest[]>(initialRequests);
  const [view, setView] = useState<"flows" | "fund-requests">(initialRequests.some((request) => request.status === "pending_admin") ? "fund-requests" : "flows");

  useEffect(() => {
    const sync = () => setRequests(readRequests());
    window.addEventListener("moon:fund-project-payments-changed", sync);
    window.addEventListener("storage", sync);
    return () => { window.removeEventListener("moon:fund-project-payments-changed", sync); window.removeEventListener("storage", sync); };
  }, []);

  const sortedRequests = useMemo(() => [...requests].sort((a, b) => b.createdAt.localeCompare(a.createdAt)), [requests]);
  const pendingCount = requests.filter((request) => request.status === "pending_admin").length;

  const updateStatus = (id: string, status: "approved" | "rejected") => {
    const now = new Date().toISOString();
    const updated = requests.map((request) => {
      if (request.id !== id || request.status !== "pending_admin") return request;
      return status === "approved" ? { ...request, status: "approved" as const, approvedAt: now, rejectedAt: undefined } : { ...request, status: "rejected" as const, rejectedAt: now, approvedAt: undefined };
    });
    setRequests(updated); writeRequests(updated);
  };

  const exportFunding = () => {
    if (view === "flows") {
      downloadCsv("admin-funding-flows", [
        { label: "پروژه", value: (item) => item.name }, { label: "شرح", value: (item) => item.meta }, { label: "منبع", value: (item) => item.source }, { label: "وضعیت", value: (item) => item.status }, { label: "مبلغ", value: (item) => item.amount }, { label: "آخرین جریان", value: (item) => item.last },
      ], flows);
      return;
    }
    downloadCsv("admin-fund-payment-requests", [
      { label: "پروژه", value: (item) => item.project }, { label: "مجری", value: (item) => item.executor }, { label: "مرحله", value: (item) => item.stage }, { label: "مبلغ درخواست", value: (item) => item.requestedAmount }, { label: "وضعیت", value: (item) => statusLabel(item.status) }, { label: "تاریخ", value: (item) => formatDate(item.createdAt) }, { label: "رسید", value: (item) => item.receipt ?? "" },
    ], sortedRequests);
  };

  return (
    <div className="admin-panel-shell" data-node-id="2257:2">
      <main className="admin-users-main" dir="rtl">
        <header className="admin-users-header">
          <div className="admin-users-heading"><h1>تأمین مالی</h1><p>پایش منابع تأمین، جریان‌های مالی و بررسی درخواست‌های پرداخت صندوق در سامانه ماه</p></div>
          <div className="admin-users-actions">
            <button className={`admin-users-button ${view === "fund-requests" ? "admin-users-button-primary" : ""}`} type="button" onClick={() => setView("fund-requests")} aria-pressed={view === "fund-requests"}>درخواست‌های صندوق {pendingCount > 0 ? `(${faNumber(pendingCount)})` : ""}</button>
            <button className="admin-users-button" type="button" onClick={exportFunding}>خروجی مالی</button>
          </div>
        </header>

        <section className="admin-users-kpis" aria-label="شاخص‌های تأمین مالی">
          <article className="admin-users-kpi"><img src={`${ASSET_ROOT}/users-active.svg`} alt="" /><span>کل تأمین مالی</span><strong>۱۸٫۴</strong><small>میلیارد تومان منابع جذب‌شده</small></article>
          <article className="admin-users-kpi"><img src={`${ASSET_ROOT}/users-roles.svg`} alt="" /><span>منابع شرکت‌ها</span><strong>۱۲٫۷</strong><small>میلیارد تومان پرداخت نقدی شرکت‌ها</small></article>
          <article className="admin-users-kpi"><img src={`${ASSET_ROOT}/users-review.svg`} alt="" /><span>منابع صندوق</span><strong>۵٫۷</strong><small>میلیارد تومان از منابع صندوق</small></article>
          <article className="admin-users-kpi"><img src={`${ASSET_ROOT}/users-blocked.svg`} alt="" /><span>درخواست صندوق</span><strong>{faNumber(pendingCount)}</strong><small>در انتظار بررسی مدیر ماه</small></article>
        </section>

        <section className="admin-users-toolbar"><button className="admin-users-control admin-funding-view-control" type="button" onClick={() => setView("flows")}>جریان‌های تأمین مالی</button><button className="admin-users-control admin-funding-view-control" type="button" onClick={() => setView("fund-requests")}>درخواست‌های پرداخت صندوق</button><div className="admin-users-control admin-list-static-control">{view === "flows" ? "همه وضعیت‌ها" : "همه درخواست‌ها"}</div><div className="admin-users-count">{view === "flows" ? "۲۴ جریان" : `${faNumber(requests.length)} درخواست`}</div></section>

        <section className="admin-users-table-card admin-list-table-compact">
          {view === "flows" ? <><h2>جریان‌های تأمین مالی</h2><p>منبع پول، مبلغ و وضعیت جریان تأمین هر پروژه را پایش کنید</p><div className="admin-users-table"><div className="admin-users-row admin-users-table-head"><span>پروژه / حوزه</span><span>منبع تأمین</span><span>وضعیت</span><span>مبلغ تأمین</span><span>آخرین جریان</span><span>اقدام</span></div>{flows.map((flow, index) => <div className="admin-users-row" key={flow.name}><div className="admin-user-cell"><strong>{flow.name}</strong><small>{flow.meta}</small></div><span>{flow.source}</span><span className="admin-status-pill admin-status-active">{flow.status}</span><span>{flow.amount}</span><span className="admin-access-pill admin-access-full">{flow.last}</span><Link className="admin-user-action" to={`/panel/admin/funding/${index + 1}`}>مشاهده</Link></div>)}<div className="admin-pagination"><span>نمایش ۱ تا ۳ از ۲۴ جریان</span><div className="admin-pagination-controls"><button className="admin-page-control" type="button" disabled>‹</button><span className="admin-page-number">۱</span><button className="admin-page-control" type="button" disabled>›</button></div></div></div></> : <><h2>درخواست‌های پرداخت از منابع صندوق</h2><p>مدیر صندوق درخواست را ثبت می‌کند و مدیر ماه پیش از ورود آن به مرحله اجرای پرداخت تصمیم می‌گیرد.</p><div className="admin-users-table admin-fund-request-list"><div className="admin-users-row admin-users-table-head"><span>پروژه / مجری</span><span>مرحله</span><span>مبلغ</span><span>تاریخ درخواست</span><span>وضعیت</span><span>اقدام مدیر ماه</span></div>{sortedRequests.length === 0 ? <div className="admin-fund-request-empty">درخواست پرداختی از طرف مدیر صندوق ثبت نشده است.</div> : sortedRequests.map((request) => <div className="admin-users-row" key={request.id}><div className="admin-user-cell"><strong>{request.project}</strong><small>{request.executor}</small></div><span>{request.stage}</span><span>{formatAmount(request.requestedAmount)}</span><span>{formatDate(request.createdAt)}</span><span className={`admin-status-pill ${statusClass(request.status)}`}>{statusLabel(request.status)}</span><div className="admin-fund-request-actions">{request.status === "pending_admin" ? <><button type="button" className="admin-fund-request-approve" onClick={() => updateStatus(request.id, "approved")}>تأیید</button><button type="button" className="admin-fund-request-reject" onClick={() => updateStatus(request.id, "rejected")}>رد</button></> : request.status === "approved" ? <span>ارسال‌شده برای اجرا</span> : request.status === "paid" ? <span>{request.receipt ? `رسید ${request.receipt}` : "پرداخت تکمیل شد"}</span> : <span>مختومه</span>}</div></div>)}</div></>}
        </section>
        <aside className="admin-info-note">پرداخت از منابع صندوق فقط پس از تأیید مدیر ماه وارد مرحله اجرای پرداخت می‌شود؛ خروجی CSV مطابق نمای فعال صفحه ساخته می‌شود.</aside>
      </main>
      <AdminSidebar active="funding" />
    </div>
  );
}
