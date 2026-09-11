import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { CompanySidebar } from "../components/CompanySidebar";
import "../index.css";
import "./index.css";

type Report = {
  id: string;
  title: string;
  project: string;
  type: string;
  period: string;
  displayId: string;
  status: string;
};

const reports: Report[] = [
  { id: "MAH-R-1405-0018", title: "گزارش مرحله اول", project: "سلامت خانواده", type: "میان‌دوره‌ای", period: "شهریور تا آبان ۱۴۰۵", displayId: "MAH-R-۱۴۰۵-۰۰۱۸", status: "منتشرشده" },
  { id: "MAH-R-1405-0021", title: "گزارش مرحله دوم", project: "سلامت خانواده", type: "میان‌دوره‌ای", period: "مرداد تا شهریور ۱۴۰۵", displayId: "MAH-R-۱۴۰۵-۰۰۲۱", status: "تأیید و منتشرشده" },
];

const updates = [
  ["۲۰ مرداد ۱۴۰۵", "راه‌اندازی ۳ مرکز سلامت سیار"],
  ["۱۰ مرداد ۱۴۰۵", "گسترش پوشش خدمات به ۱۸ روستای جدید"],
  ["۱ مرداد ۱۴۰۵", "آغاز ارائه خدمات سلامت خانواده"],
] as const;

export default function CompanyFinancialImpactReports() {
  const [query, setQuery] = useState("");
  const [project, setProject] = useState("همه پروژه‌ها");
  const [type, setType] = useState("همه انواع");
  const [status, setStatus] = useState("همه وضعیت‌ها");

  const filtered = useMemo(() => reports.filter((item) => {
    const q = query.trim();
    return (!q || item.title.includes(q) || item.project.includes(q) || item.displayId.toLowerCase().includes(q.toLowerCase()))
      && (project === "همه پروژه‌ها" || item.project === project)
      && (type === "همه انواع" || item.type === type)
      && (status === "همه وضعیت‌ها" || item.status === status);
  }), [query, project, type, status]);

  return (
    <div className="company-panel-shell" data-node-id="1905:2">
      <main className="company-reports-page" dir="rtl">
        <header className="company-topbar">
          <div className="company-page-title"><h1>گزارش مالی و اثر</h1><p>گزارش‌های منتشرشده پروژه‌ها و آخرین به‌روزرسانی‌های اثر اجتماعی</p></div>
          <div className="company-top-actions">
            <Link className="company-action company-action-primary" to="/panel/company/participations">مشارکت‌های سازمانی</Link>
            <Link className="company-action company-action-secondary" to="/panel/company/certificates">گواهی ماده ۱۷۲</Link>
          </div>
        </header>

        <section className="company-report-filters">
          <strong>جست‌وجو و فیلتر</strong>
          <div>
            <input aria-label="جست‌وجوی گزارش" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="جست‌وجوی نام پروژه یا شماره گزارش..." />
            <select aria-label="پروژه" value={project} onChange={(e) => setProject(e.target.value)}><option>همه پروژه‌ها</option><option>سلامت خانواده</option></select>
            <select aria-label="نوع گزارش" value={type} onChange={(e) => setType(e.target.value)}><option>همه انواع</option><option>میان‌دوره‌ای</option></select>
            <select aria-label="وضعیت انتشار" value={status} onChange={(e) => setStatus(e.target.value)}><option>همه وضعیت‌ها</option><option>منتشرشده</option><option>تأیید و منتشرشده</option></select>
          </div>
        </section>

        <section className="company-report-list">
          <div className="company-report-heading"><div><h2>گزارش‌های منتشرشده</h2><p>گزارش‌های تأییدشده پروژه‌های مشارکت‌شده</p></div><span>{filtered.length.toLocaleString("fa-IR")} گزارش منتشرشده</span></div>
          <div className="company-report-table-head"><span>گزارش</span><span>پروژه</span><span>نوع گزارش</span><span>دوره گزارش</span><span>شماره گزارش</span><span>وضعیت</span><span>اقدام</span></div>
          <div className="company-report-table-body">
            {filtered.map((item) => (
              <article className="company-report-row" key={item.id}>
                <strong>{item.title}</strong><span>{item.project}</span><span>{item.type}</span><span>{item.period}</span><span dir="ltr">{item.displayId}</span><b>{item.status}</b><Link to={`/panel/company/reports/${item.id}`}>مشاهده گزارش</Link>
              </article>
            ))}
            {!filtered.length && <div className="company-report-empty">گزارشی با فیلترهای فعلی پیدا نشد.</div>}
          </div>
          <aside className="company-report-review-note">گزارش‌های در حال بررسی پس از تأیید نهایی خانه خلاق و نوآوری آینه در این بخش قابل مشاهده خواهند بود.</aside>
        </section>

        <section className="company-report-updates">
          <h2>آخرین به‌روزرسانی‌های اثر اجتماعی</h2><p>رویدادهای منتشرشده پروژه سلامت خانواده</p>
          <div>{updates.map(([date, text]) => <article key={date}><time>{date}</time><strong>{text}</strong><span>منتشرشده</span></article>)}</div>
        </section>
      </main>
      <CompanySidebar active="reports" />
    </div>
  );
}
