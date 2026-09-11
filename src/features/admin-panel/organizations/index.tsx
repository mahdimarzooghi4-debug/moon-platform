import { Link } from "react-router-dom";
import { AdminSidebar } from "../components/AdminSidebar";
import "../index.css";
import "../users-flow.css";
import "../list-flow.css";

const ASSET_ROOT = "/assets/admin-panel";

const organizations = [
  { name: "پایدار پرداز خلاق آریا", meta: "شناسه ملی: ۱۰۱۰••••••••", type: "شرکت", status: "فعال", projects: "۳ پروژه", activity: "امروز، ۱۰:۴۵", review: false },
  { name: "راهکار نوآور فردا", meta: "مدیر: امیرحسین موسوی", type: "استارتاپ", status: "فعال", projects: "۲ پروژه", activity: "امروز، ۰۹:۲۰", review: false },
  { name: "فناوری سلامت نوین", meta: "مدیر: مریم احمدی", type: "استارتاپ", status: "فعال", projects: "۱ پروژه", activity: "دیروز، ۱۶:۱۰", review: false },
  { name: "توسعه پایدار پارس", meta: "شناسه ملی: ۱۰۳۰••••••••", type: "شرکت", status: "فعال", projects: "۴ پروژه", activity: "دیروز، ۱۴:۴۰", review: false },
  { name: "آینده‌سازان اجتماعی", meta: "مدیر: سارا رضایی", type: "استارتاپ", status: "نیازمند بررسی", projects: "—", activity: "۲ روز قبل", review: true },
];

export default function AdminOrganizations() {
  return (
    <div className="admin-panel-shell" data-node-id="2243:2">
      <main className="admin-users-main" dir="rtl">
        <header className="admin-users-header">
          <div className="admin-users-heading">
            <h1>شرکت‌ها و استارتاپ‌ها</h1>
            <p>مدیریت حساب سازمان‌ها، استارتاپ‌ها و وضعیت فعالیت آن‌ها در سامانه ماه</p>
          </div>
          <div className="admin-users-actions">
            <button className="admin-users-button admin-list-static-control" type="button" aria-disabled="true">خروجی فهرست</button>
          </div>
        </header>

        <section className="admin-users-kpis" aria-label="شاخص‌های حساب‌ها">
          <article className="admin-users-kpi"><img src={`${ASSET_ROOT}/users-active.svg`} alt="" /><span>شرکت‌های فعال</span><strong>۳۲</strong><small>شرکت فعال در سامانه</small></article>
          <article className="admin-users-kpi"><img src={`${ASSET_ROOT}/users-roles.svg`} alt="" /><span>استارتاپ‌های فعال</span><strong>۱٬۲۵۰</strong><small>استارتاپ فعال در سامانه</small></article>
          <article className="admin-users-kpi"><img src={`${ASSET_ROOT}/users-review.svg`} alt="" /><span>استارتاپ‌های نیازمند بررسی</span><strong>۶</strong><small>فقط استارتاپ‌های نیازمند تکمیل یا بررسی</small></article>
          <article className="admin-users-kpi"><img src={`${ASSET_ROOT}/users-blocked.svg`} alt="" /><span>حساب‌های غیرفعال</span><strong>۴</strong><small>شرکت یا استارتاپ غیرفعال</small></article>
        </section>

        <section className="admin-users-toolbar" aria-label="ابزارهای فهرست">
          <div className="admin-users-control admin-list-static-control">جستجو در نام شرکت، استارتاپ یا شناسه</div>
          <div className="admin-users-control admin-list-static-control">همه نوع‌ها</div>
          <div className="admin-users-control admin-list-static-control">همه وضعیت‌ها</div>
          <div className="admin-users-count">۱٬۲۸۲ حساب</div>
        </section>

        <section className="admin-users-table-card">
          <h2>فهرست شرکت‌ها و استارتاپ‌ها</h2>
          <p>شرکت‌ها بدون تأیید ادمین فعال می‌شوند؛ بررسی فقط برای استارتاپ‌های نیازمند تکمیل انجام می‌شود</p>
          <div className="admin-users-table">
            <div className="admin-users-row admin-users-table-head"><span>سازمان / استارتاپ</span><span>نوع حساب</span><span>وضعیت</span><span>پروژه‌ها</span><span>آخرین فعالیت</span><span>اقدام</span></div>
            {organizations.map((item, index) => (
              <div className="admin-users-row" key={item.name}>
                <div className="admin-user-cell"><strong>{item.name}</strong><small>{item.meta}</small></div>
                <span>{item.type}</span>
                <span className={`admin-status-pill ${item.review ? "admin-status-review" : "admin-status-active"}`}>{item.status}</span>
                <span>{item.projects}</span>
                <span className={`admin-access-pill ${item.review ? "admin-access-limited" : "admin-access-full"}`}>{item.activity}</span>
                <Link className={`admin-user-action${item.review ? " admin-user-action-primary" : ""}`} to={`/panel/admin/organizations/${index + 1}`}>{item.review ? "بررسی" : "مشاهده"}</Link>
              </div>
            ))}
            <div className="admin-pagination">
              <span>نمایش ۱ تا ۵ از ۱٬۲۸۲</span>
              <div className="admin-pagination-controls"><button className="admin-page-control admin-list-static-control" type="button" aria-disabled="true">بعدی</button><span className="admin-page-number">۱</span><button className="admin-page-control" type="button" disabled>قبلی</button></div>
            </div>
          </div>
        </section>

        <aside className="admin-info-note">حساب شرکت پس از ثبت اطلاعات برای پنل فعال است و نیاز به تأیید ادمین ندارد. بررسی این بخش فقط برای استارتاپ‌های نیازمند تکمیل یا وضعیت‌های مدیریتی انجام می‌شود.</aside>
      </main>
      <AdminSidebar active="organizations" />
    </div>
  );
}
