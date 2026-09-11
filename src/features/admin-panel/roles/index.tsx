import { Link } from "react-router-dom";
import { AdminSidebar } from "../components/AdminSidebar";
import "../index.css";
import "../users-flow.css";

const roles = [
  ["نقش شرکت", "داشبورد، پروژه‌ها و گواهی ماده ۱۷۲"],
  ["نقش استارتاپ", "پروژه‌ها، گزارش مرحله و سوابق"],
  ["خانه خلاق", "ارزیابی استارتاپ، پروژه و مراحل"],
  ["کمیته امداد", "آزادسازی، ماده ۱۷۲ و هم‌افزایی صندوق"],
  ["مدیر صندوق", "سرمایه صندوق، بازده و تخصیص مجدد"],
  ["ادمین", "مدیریت کاربران و نظارت کلان سامانه"],
] as const;

export default function AdminRoleManagement() {
  return (
    <div className="admin-panel-shell" data-node-id="2273:2">
      <main className="admin-users-main" dir="rtl">
        <header className="admin-users-header">
          <div className="admin-users-heading">
            <h1>مدیریت نقش‌ها</h1>
            <p>تعریف و کنترل سطح دسترسی نقش‌های سامانه ماه</p>
          </div>
          <div className="admin-users-actions">
            <Link className="admin-users-button admin-users-button-wide" to="/panel/admin/users">بازگشت به کاربران</Link>
          </div>
        </header>

        <section className="admin-form-card">
          <h2>سطوح دسترسی نقش‌ها</h2>
          <p>دامنه دسترسی هر نقش را مرور و در صورت نیاز ویرایش کنید.</p>
          <div className="admin-form-grid">
            {roles.map(([role, access]) => (
              <div className="admin-form-field" key={role}>
                <label>{role}</label>
                <input className="admin-form-input" defaultValue={access} />
              </div>
            ))}
          </div>
        </section>

        <aside className="admin-info-note admin-info-note-tall">تغییر سطح دسترسی نقش‌ها باید در سوابق مدیریتی ثبت شود و نباید وظایف عملیاتی نقش‌ها را به ادمین منتقل کند.</aside>

        <section className="admin-form-actions">
          <button className="admin-users-button admin-users-button-primary admin-action-disabled" type="button" aria-disabled="true">ذخیره دسترسی‌ها</button>
          <Link className="admin-users-button" to="/panel/admin/users">بازگشت</Link>
          <p className="admin-form-actions-note">دسترسی‌های جدید پس از ذخیره برای کاربران همان نقش اعمال می‌شود.</p>
        </section>
      </main>
      <AdminSidebar active="users" />
    </div>
  );
}
