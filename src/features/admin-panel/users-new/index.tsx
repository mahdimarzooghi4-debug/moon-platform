import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AdminSidebar } from "../components/AdminSidebar";
import "../index.css";
import "../users-flow.css";
import "./index.css";

export default function AdminAddUser() {
  const navigate = useNavigate();

  const submitUser = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/panel/admin/users");
  };

  return (
    <div className="admin-panel-shell" data-node-id="2249:2">
      <main className="admin-users-main" dir="rtl">
        <header className="admin-users-header">
          <div className="admin-users-heading">
            <h1>افزودن کاربر</h1>
            <p>ایجاد حساب کاربری جدید و تعیین نقش و سطح دسترسی در سامانه ماه</p>
          </div>
          <div className="admin-users-actions">
            <Link className="admin-users-button admin-users-button-wide" to="/panel/admin/users">بازگشت به کاربران</Link>
          </div>
        </header>

        <form className="admin-users-create-form" onSubmit={submitUser}>
          <section className="admin-form-card">
            <h2>اطلاعات کاربر جدید</h2>
            <p>اطلاعات پایه کاربر را ثبت کنید؛ نقش انتخاب‌شده پنل و سطح دسترسی او را تعیین می‌کند.</p>
            <div className="admin-form-grid">
              <div className="admin-form-field">
                <label htmlFor="admin-user-name">نام و نام خانوادگی</label>
                <input id="admin-user-name" className="admin-form-input" placeholder="مثال: مریم احمدی" />
              </div>
              <div className="admin-form-field">
                <label htmlFor="admin-user-mobile">شماره موبایل</label>
                <input id="admin-user-mobile" className="admin-form-input" inputMode="tel" placeholder="09xxxxxxxxx" />
              </div>
              <div className="admin-form-field">
                <label htmlFor="admin-user-email">ایمیل</label>
                <input id="admin-user-email" className="admin-form-input" type="email" placeholder="اختیاری" />
              </div>
              <div className="admin-form-field">
                <label htmlFor="admin-user-org">سازمان / مجموعه</label>
                <input id="admin-user-org" className="admin-form-input" placeholder="نام شرکت، استارتاپ یا سازمان" />
              </div>
              <div className="admin-form-field">
                <label htmlFor="admin-user-role">نقش کاربری</label>
                <select id="admin-user-role" className="admin-form-input" defaultValue="">
                  <option value="" disabled>انتخاب نقش</option>
                  <option>شرکت</option><option>استارتاپ</option><option>خانه خلاق</option><option>کمیته امداد</option><option>مدیر صندوق</option>
                </select>
              </div>
              <div className="admin-form-field">
                <label htmlFor="admin-user-status">وضعیت اولیه حساب</label>
                <select id="admin-user-status" className="admin-form-input" defaultValue="فعال"><option>فعال</option><option>غیرفعال</option></select>
              </div>
            </div>
          </section>

          <aside className="admin-info-note admin-info-note-tall">دسترسی کاربر بر اساس نقش انتخاب‌شده فعال می‌شود. حساب‌های شرکت برای ورود به پنل نیاز به تأیید ادمین ندارند؛ ادمین فقط کاربر را ایجاد یا سطح دسترسی او را مدیریت می‌کند.</aside>

          <section className="admin-form-actions">
            <button className="admin-users-button admin-users-button-primary" type="submit">ایجاد کاربر</button>
            <Link className="admin-users-button" to="/panel/admin/users">انصراف</Link>
            <p className="admin-form-actions-note">پس از ایجاد، کاربر با اطلاعات ثبت‌شده وارد پنل متناسب با نقش خود می‌شود.</p>
          </section>
        </form>
      </main>
      <AdminSidebar active="users" />
    </div>
  );
}
