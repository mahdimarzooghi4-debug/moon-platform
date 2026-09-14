import { useEffect, useMemo, useState } from "react";
import { AdminSidebar } from "../components/AdminSidebar";
import { downloadCsv } from "../export-csv";
import {
  INDIVIDUAL_PARTICIPATIONS_CHANGED,
  INDIVIDUAL_PARTICIPATIONS_KEY,
  readIndividualParticipations,
  type IndividualParticipation,
} from "../../../shared/individual-participations";
import "../index.css";
import "../users-flow.css";
import "../list-flow.css";

const numberFa = new Intl.NumberFormat("fa-IR");
function formatAmount(value: number) { return `${numberFa.format(value)} تومان`; }
function statusLabel(status: IndividualParticipation["status"]) { if (status === "successful") return "پرداخت موفق"; if (status === "failed") return "ناموفق"; return "در انتظار پرداخت"; }

export default function AdminIndividualParticipations() {
  const [items, setItems] = useState<IndividualParticipation[]>([]);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const refresh = () => setItems(readIndividualParticipations());
    const handleStorage = (event: StorageEvent) => { if (event.key === INDIVIDUAL_PARTICIPATIONS_KEY) refresh(); };
    refresh();
    window.addEventListener(INDIVIDUAL_PARTICIPATIONS_CHANGED, refresh);
    window.addEventListener("storage", handleStorage);
    return () => { window.removeEventListener(INDIVIDUAL_PARTICIPATIONS_CHANGED, refresh); window.removeEventListener("storage", handleStorage); };
  }, []);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("fa");
    return items.filter((item) => {
      const matchesQuery = !normalized || item.participantName.toLocaleLowerCase("fa").includes(normalized) || item.mobile.includes(normalized) || item.projectTitle.toLocaleLowerCase("fa").includes(normalized) || item.startupName.toLocaleLowerCase("fa").includes(normalized) || item.trackingCode.toLocaleLowerCase("en").includes(normalized.toLocaleLowerCase("en"));
      return matchesQuery && (!status || item.status === status);
    });
  }, [items, query, status]);

  const successful = items.filter((item) => item.status === "successful");
  const pending = items.filter((item) => item.status === "pending");
  const totalAmount = successful.reduce((sum, item) => sum + item.amount, 0);
  const uniqueMobiles = new Set(items.map((item) => item.mobile).filter(Boolean)).size;
  const exportRows = () => downloadCsv("admin-individual-participations", [
    { label: "نام مشارکت‌کننده", value: (item) => item.participantName }, { label: "موبایل", value: (item) => item.mobile }, { label: "پروژه", value: (item) => item.projectTitle }, { label: "استارتاپ", value: (item) => item.startupName }, { label: "مبلغ", value: (item) => item.amount }, { label: "وضعیت", value: (item) => statusLabel(item.status) }, { label: "کد پیگیری", value: (item) => item.trackingCode },
  ], filtered);

  return (
    <div className="admin-panel-shell">
      <main className="admin-users-main" dir="rtl">
        <header className="admin-users-header">
          <div className="admin-users-heading"><h1>مشارکت افراد حقیقی</h1><p>نمای متمرکز مشارکت‌های اشخاص حقیقی، وضعیت پرداخت و اطلاعات پیگیری</p></div>
          <div className="admin-users-actions"><button className="admin-users-button" type="button" onClick={exportRows}>خروجی مشارکت‌ها</button></div>
        </header>

        <section className="admin-users-kpis" aria-label="شاخص‌های مشارکت حقیقی">
          <article className="admin-users-kpi"><span>کل مشارکت‌ها</span><strong>{numberFa.format(items.length)}</strong><small>همه رکوردهای ثبت‌شده</small></article>
          <article className="admin-users-kpi"><span>پرداخت موفق</span><strong>{numberFa.format(successful.length)}</strong><small>تراکنش نهایی‌شده</small></article>
          <article className="admin-users-kpi"><span>در انتظار پرداخت</span><strong>{numberFa.format(pending.length)}</strong><small>ارسال‌شده به مسیر پرداخت</small></article>
          <article className="admin-users-kpi"><span>مبلغ موفق</span><strong>{numberFa.format(totalAmount)}</strong><small>{numberFa.format(uniqueMobiles)} شماره موبایل یکتا</small></article>
        </section>

        <section className="admin-users-toolbar" aria-label="فیلتر مشارکت‌ها">
          <input className="admin-users-control" placeholder="جستجو در نام، موبایل، پروژه یا کد پیگیری" value={query} onChange={(event) => setQuery(event.target.value)} />
          <select className="admin-users-control" value={status} onChange={(event) => setStatus(event.target.value)} aria-label="وضعیت پرداخت"><option value="">همه وضعیت‌ها</option><option value="successful">پرداخت موفق</option><option value="pending">در انتظار پرداخت</option><option value="failed">ناموفق</option></select>
          <div className="admin-users-count">{numberFa.format(filtered.length)} مشارکت</div>
        </section>

        <section className="admin-users-table-card">
          <h2>فهرست مشارکت‌های اشخاص حقیقی</h2><p>اطلاعات پرداخت فردی و کد پیگیری ماه در یک نمای مدیریتی جمع شده است.</p><span className="admin-users-table-count">{numberFa.format(filtered.length)} رکورد</span>
          <div className="admin-users-table" role="table" aria-label="فهرست مشارکت‌های حقیقی">
            <div className="admin-users-row admin-users-table-head" role="row"><span>مشارکت‌کننده / موبایل</span><span>پروژه</span><span>مبلغ</span><span>وضعیت</span><span>کد پیگیری</span><span>استارتاپ</span></div>
            {filtered.map((item) => <div className="admin-users-row" role="row" key={item.id}><span className="admin-user-cell"><strong>{item.participantName}</strong><small dir="ltr">{item.mobile || "—"}</small></span><span title={item.projectTitle}>{item.projectTitle}</span><span>{formatAmount(item.amount)}</span><span className={`admin-status-pill ${item.status === "successful" ? "admin-status-active" : "admin-status-review"}`}>{statusLabel(item.status)}</span><span dir="ltr" title={item.trackingCode}>{item.trackingCode}</span><span title={item.startupName}>{item.startupName || "—"}</span></div>)}
          </div>
          <div className="admin-pagination"><span>نمایش {numberFa.format(filtered.length)} مشارکت</span><div className="admin-pagination-controls"><button className="admin-page-control" type="button" disabled>‹</button><span className="admin-page-number">۱</span><button className="admin-page-control" type="button" disabled>›</button></div></div>
        </section>
        <aside className="admin-info-note">اشخاص حقیقی برای مشارکت نیازی به حساب سازمانی ندارند. این صفحه نمای مدیریتی پرداخت‌ها و پیگیری آن‌هاست.</aside>
      </main>
      <AdminSidebar active="individual-participations" />
    </div>
  );
}
