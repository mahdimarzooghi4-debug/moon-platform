import { Link } from "react-router-dom";
import { AdminSidebar } from "../components/AdminSidebar";
import "../index.css";
import "../users-flow.css";
import "../list-flow.css";

const ASSET_ROOT = "/assets/admin-panel";

const reports = [
  { title: "گزارش عملکرد پروژه‌ها", meta: "خلاصه وضعیت پروژه‌های سامانه", category: "پروژه‌ها", period: "ماه جاری", metric: "۲۴ پروژه فعال", updated: "امروز، ۱۰:۳۰" },
  { title: "گزارش تأمین مالی", meta: "تجمیع منابع شرکت و صندوق", category: "مالی", period: "ماه جاری", metric: "۱۸٫۴ میلیارد تومان", updated: "امروز، ۰۹:۴۵" },
  { title: "گزارش اثرگذاری", meta: "شاخص‌های خروجی و بهره‌مندی", category: "اثرگذاری", period: "تجمیعی", metric: "۱۲٬۸۴۰ بهره‌مند", updated: "دیروز، ۱۶:۲۰" },
];

export default function AdminReports() {
  return (
    <div className="admin-panel-shell" data-node-id="2262:2">
      <main className="admin-users-main" dir="rtl">
        <header className="admin-users-header">
          <div className="admin-users-heading"><h1>گزارش‌ها</h1><p>گزارش‌های مدیریتی کلان از عملکرد، منابع و اثرگذاری سامانه ماه</p></div>
          <div className="admin-users-actions"><button className="admin-users-button admin-list-static-control" type="button" aria-disabled="true">خروجی گزارش</button></div>
        </header>

        <section className="admin-users-kpis" aria-label="شاخص‌های گزارش">
          <article className="admin-users-kpi"><img src={`${ASSET_ROOT}/users-active.svg`} alt="" /><span>پروژه‌های فعال</span><strong>۲۴</strong><small>پروژه فعال در سامانه</small></article>
          <article className="admin-users-kpi"><img src={`${ASSET_ROOT}/users-roles.svg`} alt="" /><span>استارتاپ‌های فعال</span><strong>۱٬۲۵۰</strong><small>استارتاپ فعال در سامانه</small></article>
          <article className="admin-users-kpi"><img src={`${ASSET_ROOT}/users-review.svg`} alt="" /><span>منابع جذب‌شده</span><strong>۱۸٫۴</strong><small>میلیارد تومان منابع جذب‌شده</small></article>
          <article className="admin-users-kpi"><img src={`${ASSET_ROOT}/users-blocked.svg`} alt="" /><span>افراد بهره‌مند</span><strong>۱۲٬۸۴۰</strong><small>نفر بهره‌مند از پروژه‌ها</small></article>
        </section>

        <section className="admin-users-toolbar">
          <div className="admin-users-control admin-list-static-control">جستجو در عنوان گزارش یا شاخص</div>
          <div className="admin-users-control admin-list-static-control">همه دسته‌ها</div>
          <div className="admin-users-control admin-list-static-control">همه بازه‌ها</div>
          <div className="admin-users-count">۱۲ گزارش</div>
        </section>

        <section className="admin-users-table-card admin-list-table-compact">
          <h2>گزارش‌های مدیریتی سامانه</h2><p>گزارش‌های کلان سامانه را مشاهده و خروجی مدیریتی دریافت کنید</p>
          <div className="admin-users-table">
            <div className="admin-users-row admin-users-table-head"><span>عنوان گزارش</span><span>دسته</span><span>بازه</span><span>شاخص کلیدی</span><span>آخرین به‌روزرسانی</span><span>اقدام</span></div>
            {reports.map((report, index) => (
              <div className="admin-users-row" key={report.title}>
                <div className="admin-user-cell"><strong>{report.title}</strong><small>{report.meta}</small></div>
                <span>{report.category}</span>
                <span className="admin-status-pill admin-status-active">{report.period}</span>
                <span>{report.metric}</span>
                <span className="admin-access-pill admin-access-full">{report.updated}</span>
                <Link className="admin-user-action" to={`/panel/admin/reports/${index + 1}`}>مشاهده</Link>
              </div>
            ))}
            <div className="admin-pagination"><span>نمایش ۱ تا ۳ از ۱۲ گزارش</span><div className="admin-pagination-controls"><button className="admin-page-control admin-list-static-control" type="button" aria-disabled="true">بعدی</button><span className="admin-page-number">۱</span><button className="admin-page-control" type="button" disabled>قبلی</button></div></div>
          </div>
        </section>
        <aside className="admin-info-note">این صفحه گزارش‌های مدیریتی تجمیعی را نمایش می‌دهد؛ عملیات اجرایی و تصمیم‌گیری هر حوزه در پنل نقش مسئول همان فرآیند انجام می‌شود.</aside>
      </main>
      <AdminSidebar active="reports" />
    </div>
  );
}
