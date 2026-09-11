import { Link } from "react-router-dom";
import { AdminSidebar } from "../components/AdminSidebar";
import "../index.css";
import "../users-flow.css";
import "../final-flow.css";

const fields = [
  ["شرکت", "پروژه‌ها، پرداخت‌ها و گواهی‌های خودش"],
  ["استارتاپ", "پروژه‌ها و گزارش‌های اجرایی خودش"],
  ["خانه خلاق", "ارزیابی و تأیید تخصصی"],
  ["کمیته امداد", "وجوه، ماده ۱۷۲ و هم‌افزایی صندوق"],
  ["مدیر صندوق", "مدیریت سرمایه، بازده و بازتخصیص"],
  ["ادمین", "کاربران، تنظیمات و نظارت کلان"],
] as const;

export default function AdminAccessPolicy() {
  return (
    <div className="admin-panel-shell" data-node-id="2273:674">
      <main className="admin-users-main" dir="rtl">
        <header className="admin-users-header">
          <div className="admin-users-heading">
            <h1>سیاست سطح دسترسی</h1>
            <p>تعریف مرز دسترسی نقش‌ها و اصول کنترل دسترسی سامانه</p>
          </div>
          <div className="admin-users-actions">
            <Link className="admin-users-button admin-users-button-wide" to="/panel/admin/settings">بازگشت به تنظیمات</Link>
          </div>
        </header>

        <section className="admin-form-card">
          <h2>مرز دسترسی نقش‌ها</h2>
          <p>هر نقش فقط به داده‌ها و عملیات موردنیاز وظیفه خود دسترسی دارد.</p>
          <div className="admin-form-grid">
            {fields.map(([label, value]) => (
              <div className="admin-form-field" key={label}>
                <label>{label}</label>
                <div className="admin-detail-value admin-access-policy-field">{value}</div>
              </div>
            ))}
          </div>
        </section>

        <aside className="admin-info-note admin-info-note-tall">اصل دسترسی حداقلی رعایت می‌شود؛ ادمین نباید جایگزین عملیات مالی کمیته امداد، تصمیم تخصصی خانه خلاق یا مدیریت سرمایه مدیر صندوق شود.</aside>

        <section className="admin-form-actions admin-access-actions">
          <button className="admin-users-button admin-users-button-primary admin-action-disabled" type="button" aria-disabled="true">ذخیره سیاست</button>
          <Link className="admin-users-button" to="/panel/admin/settings">بازگشت تنظیمات</Link>
          <p className="admin-form-actions-note">تمام تغییرات سیاست دسترسی در رویدادهای مدیریتی ثبت می‌شود.</p>
        </section>
      </main>
      <AdminSidebar active="settings" />
    </div>
  );
}
