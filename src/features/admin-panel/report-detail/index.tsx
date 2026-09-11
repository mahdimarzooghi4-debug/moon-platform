import { Link } from "react-router-dom";
import { AdminSidebar } from "../components/AdminSidebar";
import "../index.css";
import "../users-flow.css";
import "../list-flow.css";

const fields = [
  ["عنوان گزارش", "گزارش عملکرد پروژه‌ها"],
  ["دسته", "پروژه‌ها"],
  ["بازه", "ماه جاری"],
  ["شاخص کلیدی", "۲۴ پروژه فعال"],
  ["آخرین به‌روزرسانی", "امروز، ۱۰:۳۰"],
  ["وضعیت خروجی", "آماده دریافت"],
] as const;

export default function AdminReportDetail() {
  return (
    <div className="admin-panel-shell" data-node-id="2273:562">
      <main className="admin-users-main" dir="rtl">
        <header className="admin-users-header">
          <div className="admin-users-heading"><h1>جزئیات گزارش</h1><p>نمایش شاخص‌ها، دوره و وضعیت آخرین خروجی مدیریتی</p></div>
          <div className="admin-users-actions"><Link className="admin-users-button admin-users-button-wide" to="/panel/admin/reports">بازگشت به گزارش‌ها</Link></div>
        </header>
        <section className="admin-form-card">
          <h2>مشخصات گزارش</h2><p>خلاصه گزارش مدیریتی و شاخص کلیدی آن.</p>
          <div className="admin-form-grid">
            {fields.map(([label, value]) => (
              <div className="admin-form-field" key={label}>
                <label>{label}</label>
                {label === "دسته" ? <Link className="admin-detail-value" to="/panel/admin/projects">{value}</Link> : <div className="admin-detail-value">{value}</div>}
              </div>
            ))}
          </div>
        </section>
        <aside className="admin-info-note admin-detail-note">گزارش‌های ادمین تجمیعی هستند و عملیات اجرایی یا تصمیم‌گیری تخصصی هر حوزه در پنل همان نقش انجام می‌شود.</aside>
        <section className="admin-form-actions admin-detail-actions">
          <button className="admin-users-button admin-users-button-primary admin-list-static-control" type="button" aria-disabled="true">دریافت خروجی</button>
          <Link className="admin-users-button" to="/panel/admin/reports">بازگشت</Link>
          <p className="admin-form-actions-note">فرمت خروجی: گزارش مدیریتی</p>
        </section>
      </main>
      <AdminSidebar active="reports" />
    </div>
  );
}
