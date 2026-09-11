import { Link } from "react-router-dom";
import { AdminSidebar } from "../components/AdminSidebar";
import "../index.css";
import "../users-flow.css";

const fields = [
  ["نام و نام خانوادگی", "مریم احمدی"],
  ["شماره موبایل", "۰۹۱۲•••••••"],
  ["ایمیل", "m.ahmadi@example.ir"],
  ["سازمان / مجموعه", "راهکار نوآور فردا"],
  ["نقش کاربری", "استارتاپ"],
  ["وضعیت حساب", "فعال"],
] as const;

export default function AdminUserDetail() {
  return (
    <div className="admin-panel-shell" data-node-id="2273:114">
      <main className="admin-users-main" dir="rtl">
        <header className="admin-users-header">
          <div className="admin-users-heading">
            <h1>جزئیات کاربر</h1>
            <p>مشاهده و مدیریت اطلاعات حساب و سطح دسترسی کاربر</p>
          </div>
          <div className="admin-users-actions">
            <Link className="admin-users-button admin-users-button-wide" to="/panel/admin/users">بازگشت به کاربران</Link>
          </div>
        </header>

        <section className="admin-form-card">
          <h2>اطلاعات حساب کاربری</h2>
          <p>اطلاعات هویتی و دسترسی کاربر را بررسی کنید.</p>
          <div className="admin-form-grid">
            {fields.map(([label, value]) => (
              <div className="admin-form-field" key={label}>
                <label>{label}</label>
                <input className="admin-form-input" defaultValue={value} />
              </div>
            ))}
          </div>
        </section>

        <aside className="admin-info-note admin-info-note-tall">ادمین می‌تواند اطلاعات حساب و سطح دسترسی را مدیریت کند؛ ارزیابی عملکرد یا تصمیم‌گیری تخصصی این کاربر در پنل نقش مربوط انجام می‌شود.</aside>

        <section className="admin-form-actions">
          <button className="admin-users-button admin-users-button-primary admin-action-disabled" type="button" aria-disabled="true">ذخیره تغییرات</button>
          <button className="admin-users-button admin-action-disabled" type="button" aria-disabled="true">مسدود کردن</button>
          <p className="admin-form-actions-note">آخرین فعالیت: امروز، ۱۰:۴۵</p>
        </section>
      </main>
      <AdminSidebar active="users" />
    </div>
  );
}
