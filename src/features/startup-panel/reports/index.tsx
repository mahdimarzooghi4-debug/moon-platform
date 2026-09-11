import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { StartupSidebar } from "../components/StartupSidebar";
import "../index.css";
import "./index.css";

type ReportFilter = "all" | "midterm" | "final";

const reports = [
  {
    id: "MAH-R-۱۴۰۵-۰۰۱۸",
    title: "گزارش میان‌دوره‌ای اشتغال زنان روستایی",
    description: "مجری: راهکار سبز",
    type: "میان‌دوره‌ای",
    category: "midterm" as const,
    period: "شهریور تا آبان ۱۴۰۵",
    status: "منتشر شده",
    date: "۲۰ آذر ۱۴۰۵",
  },
  {
    id: "MAH-R-۱۴۰۵-FIN",
    title: "گزارش نهایی اشتغال زنان روستایی",
    description: "تکمیل پروژه: ۲۸ اسفند ۱۴۰۵",
    type: "نهایی",
    category: "final" as const,
    period: "مرداد تا اسفند ۱۴۰۵",
    status: "تکمیل شده",
    date: "۲۸ اسفند ۱۴۰۵",
  },
] as const;

const filters: Array<{ key: ReportFilter; label: string }> = [
  { key: "all", label: "همه گزارش‌ها" },
  { key: "midterm", label: "میان‌دوره‌ای" },
  { key: "final", label: "نهایی" },
];

export default function StartupReportsDocuments() {
  const [filter, setFilter] = useState<ReportFilter>("all");
  const visibleReports = useMemo(
    () => (filter === "all" ? reports : reports.filter((report) => report.category === filter)),
    [filter],
  );

  return (
    <div className="startup-panel-page startup-reports-page" data-node-id="2069:2" data-name="startup-reports-documents">
      <StartupSidebar active="reports" />

      <main className="startup-reports-content">
        <header className="startup-reports-topbar" data-node-id="2070:2" data-name="Top Bar">
          <h1>گزارش‌ها و مستندات</h1>
          <p>پیگیری گزارش‌های پروژه، وضعیت ارزیابی و انتشار مستندات</p>
        </header>

        <section className="startup-reports-filters" data-name="report-filters">
          <h2>فیلتر گزارش‌ها</h2>
          <div className="startup-reports-filter-buttons" role="group" aria-label="نوع گزارش">
            {filters.map((item) => (
              <button
                key={item.key}
                type="button"
                className={filter === item.key ? "is-active" : ""}
                aria-pressed={filter === item.key}
                onClick={() => setFilter(item.key)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button className="startup-reports-project-filter" type="button" aria-disabled="true">
            پروژه: اشتغال زنان روستایی
          </button>
        </section>

        <section className="startup-reports-list" data-name="reports-list">
          <div className="startup-reports-list-heading">
            <div>
              <h2>گزارش‌های پروژه</h2>
              <p>گزارش‌های ثبت‌شده و خروجی‌های ارزیابی پروژه اشتغال زنان روستایی</p>
            </div>
            <span>{visibleReports.length.toLocaleString("fa-IR")} گزارش</span>
          </div>

          <div className="startup-reports-table-head" aria-hidden="true">
            <span>عنوان گزارش</span>
            <span>نوع</span>
            <span>دوره گزارش</span>
            <span>وضعیت</span>
            <span>کد گزارش</span>
            <span>اقدام</span>
          </div>

          <div className="startup-reports-rows">
            {visibleReports.map((report) => (
              <article className="startup-reports-row" key={report.id} data-name="report-row">
                <div className="startup-reports-row-title">
                  <strong>{report.title}</strong>
                  <small>{report.description}</small>
                </div>
                <div className="startup-reports-row-type">{report.type}</div>
                <div className="startup-reports-row-period">{report.period}</div>
                <div className="startup-reports-row-status">
                  <span>{report.status}</span>
                  <small>{report.date}</small>
                </div>
                <div className="startup-reports-row-code">{report.id}</div>
                <Link className="startup-reports-row-action" to="/panel/startup/reports/MAH-R-1405-0018">
                  مشاهده جزئیات
                </Link>
              </article>
            ))}
          </div>

          <div className="startup-reports-publication-note" data-name="publication-note">
            <strong>انتشار گزارش‌ها</strong>
            <span>گزارش‌ها پس از ارزیابی و تأیید خانه خلاق و نوآوری آینه در بخش عمومی سامانه قابل انتشار هستند.</span>
          </div>

          <div className="startup-reports-pagination" data-name="pagination" aria-label="صفحه‌بندی گزارش‌ها">
            <button type="button" disabled aria-label="صفحه قبل">‹</button>
            <span aria-current="page">۱</span>
            <button type="button" disabled aria-label="صفحه بعد">›</button>
          </div>
          <p className="startup-reports-page-count">صفحه ۱ از ۱</p>
        </section>
      </main>
    </div>
  );
}
