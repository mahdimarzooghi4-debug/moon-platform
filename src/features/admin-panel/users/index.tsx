import { Link } from "react-router-dom";
import { AdminSidebar } from "../components/AdminSidebar";
import "../index.css";
import "../users-flow.css";

const ASSET_ROOT = "/assets/admin-panel";

const kpis = [
  { label: "کاربران فعال", value: "۱٬۲۸۴", detail: "حساب فعال در سامانه", icon: "users-active.svg" },
  { label: "نقش‌های سامانه", value: "۵", detail: "نقش عملیاتی اصلی", icon: "users-roles.svg" },
  { label: "حساب‌های نیازمند بررسی", value: "۳", detail: "در انتظار تکمیل یا فعال‌سازی", icon: "users-review.svg" },
  { label: "کاربران مسدود", value: "۲", detail: "دسترسی غیرفعال", icon: "users-blocked.svg" },
] as const;

const users = [
  { id: "maryam-ahmadi", name: "مریم احمدی", org: "پایدار پرداز خلاق آریا", role: "شرکت", status: "فعال", activity: "امروز، ۱۰:۴۵", access: "کامل", review: false },
  { id: "sara-norouzi", name: "سارا نوروزی", org: "خانه خلاق و نوآوری آینه", role: "خانه خلاق", status: "فعال", activity: "امروز، ۰۹:۲۰", access: "کامل", review: false },
  { id: "ali-rezaei", name: "علی رضایی", org: "کمیته امداد", role: "کمیته امداد", status: "فعال", activity: "دیروز، ۱۶:۱۰", access: "کامل", review: false },
  { id: "zahra-karimi", name: "زهرا کریمی", org: "مدیریت صندوق ماه", role: "مدیر صندوق", status: "فعال", activity: "دیروز، ۱۴:۴۰", access: "مالی", review: false },
  { id: "amirhossein-mousavi", name: "امیرحسین موسوی", org: "راهکار نوآور فردا", role: "استارتاپ", status: "نیازمند بررسی", activity: "۲ روز قبل", access: "محدود", review: true },
] as const;

export default function AdminUsersRoles() {
  return (
    <div className="admin-panel-shell" data-node-id="2240:2">
      <main className="admin-users-main" dir="rtl">
        <header className="admin-users-header">
          <div className="admin-users-heading">
            <h1>کاربران و نقش‌ها</h1>
            <p>مدیریت حساب‌های کاربری و دسترسی نقش‌های سامانه ماه</p>
          </div>
          <div className="admin-users-actions">
            <Link className="admin-users-button" to="/panel/admin/roles">مدیریت نقش‌ها</Link>
            <Link className="admin-users-button admin-users-button-primary" to="/panel/admin/users/new">افزودن کاربر</Link>
          </div>
        </header>

        <section className="admin-users-kpis" aria-label="شاخص‌های کاربران">
          {kpis.map((kpi) => (
            <article className="admin-users-kpi" key={kpi.label}>
              <img src={`${ASSET_ROOT}/${kpi.icon}`} alt="" />
              <span>{kpi.label}</span>
              <strong>{kpi.value}</strong>
              <small>{kpi.detail}</small>
            </article>
          ))}
        </section>

        <section className="admin-users-toolbar" aria-label="فیلتر کاربران">
          <input className="admin-users-control" aria-label="جستجو" placeholder="جستجو در نام، سازمان یا شماره تماس" />
          <select className="admin-users-control" aria-label="نقش"><option>همه نقش‌ها</option></select>
          <select className="admin-users-control" aria-label="وضعیت"><option>همه وضعیت‌ها</option></select>
          <span className="admin-users-count">۱٬۲۸۹ کاربر</span>
        </section>

        <section className="admin-users-table-card">
          <h2>فهرست کاربران سامانه</h2>
          <p>حساب‌ها را بر اساس نقش، وضعیت و سازمان مدیریت کنید</p>
          <div className="admin-users-table" role="table" aria-label="فهرست کاربران سامانه">
            <div className="admin-users-row admin-users-table-head" role="row">
              <span>کاربر / سازمان</span><span>نقش</span><span>وضعیت</span><span>آخرین فعالیت</span><span>دسترسی</span><span>اقدام</span>
            </div>
            {users.map((user) => (
              <div className="admin-users-row" role="row" key={user.id}>
                <span className="admin-user-cell"><strong>{user.name}</strong><small>{user.org}</small></span>
                <span>{user.role}</span>
                <span className={`admin-status-pill ${user.review ? "admin-status-review" : "admin-status-active"}`}>{user.status}</span>
                <span>{user.activity}</span>
                <span className={`admin-access-pill ${user.review ? "admin-access-limited" : "admin-access-full"}`}>{user.access}</span>
                <Link className={`admin-user-action${user.review ? " admin-user-action-primary" : ""}`} to={`/panel/admin/users/${user.id}`}>
                  {user.review ? "بررسی" : "مشاهده"}
                </Link>
              </div>
            ))}
          </div>
          <div className="admin-pagination">
            <span>نمایش ۱ تا ۵ از ۱٬۲۸۹</span>
            <div className="admin-pagination-controls">
              <button className="admin-page-control" type="button" aria-disabled="true">بعدی</button>
              <span className="admin-page-number">۱</span>
              <button className="admin-page-control" type="button" disabled>قبلی</button>
            </div>
          </div>
        </section>

        <aside className="admin-info-note">تغییر نقش یا سطح دسترسی باید با ثبت سابقه مدیریتی انجام شود و دسترسی هر نقش فقط در محدوده مسئولیت همان نقش فعال باشد.</aside>
      </main>
      <AdminSidebar active="users" />
    </div>
  );
}
