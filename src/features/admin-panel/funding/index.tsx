import { Link } from "react-router-dom";
import { AdminSidebar } from "../components/AdminSidebar";
import "../index.css";
import "../users-flow.css";
import "../list-flow.css";

const ASSET_ROOT = "/assets/admin-panel";

const flows = [
  { name: "سلامت خانواده", meta: "شرکت: پایدار پرداز خلاق آریا", source: "شرکت", status: "در حال تأمین", amount: "۵۰۰ میلیون تومان", last: "پرداخت نقدی" },
  { name: "مهارت برای نوجوانان", meta: "مدیر اجرا: راهکار نوآور فردا", source: "صندوق", status: "تأمین‌شده", amount: "۳۲۰ میلیون تومان", last: "تخصیص صندوق" },
  { name: "اشتغال زنان روستایی", meta: "مدیر اجرا: فناوری سلامت نوین", source: "ترکیبی", status: "در حال تأمین", amount: "۴۸۰ میلیون تومان", last: "شرکت + صندوق" },
];

export default function AdminFunding() {
  return (
    <div className="admin-panel-shell" data-node-id="2257:2">
      <main className="admin-users-main" dir="rtl">
        <header className="admin-users-header">
          <div className="admin-users-heading"><h1>تأمین مالی</h1><p>پایش منابع تأمین، جریان‌های مالی و وضعیت تأمین پروژه‌ها در سامانه ماه</p></div>
          <div className="admin-users-actions"><button className="admin-users-button admin-list-static-control" type="button" aria-disabled="true">خروجی مالی</button></div>
        </header>

        <section className="admin-users-kpis" aria-label="شاخص‌های تأمین مالی">
          <article className="admin-users-kpi"><img src={`${ASSET_ROOT}/users-active.svg`} alt="" /><span>کل تأمین مالی</span><strong>۱۸٫۴</strong><small>میلیارد تومان منابع جذب‌شده</small></article>
          <article className="admin-users-kpi"><img src={`${ASSET_ROOT}/users-roles.svg`} alt="" /><span>منابع شرکت‌ها</span><strong>۱۲٫۷</strong><small>میلیارد تومان پرداخت نقدی شرکت‌ها</small></article>
          <article className="admin-users-kpi"><img src={`${ASSET_ROOT}/users-review.svg`} alt="" /><span>منابع صندوق</span><strong>۵٫۷</strong><small>میلیارد تومان از منابع صندوق</small></article>
          <article className="admin-users-kpi"><img src={`${ASSET_ROOT}/users-blocked.svg`} alt="" /><span>جریان‌های فعال</span><strong>۸</strong><small>جریان تأمین مالی در حال پیگیری</small></article>
        </section>

        <section className="admin-users-toolbar">
          <div className="admin-users-control admin-list-static-control">جستجو در پروژه، شرکت یا منبع</div>
          <div className="admin-users-control admin-list-static-control">همه منابع</div>
          <div className="admin-users-control admin-list-static-control">همه وضعیت‌ها</div>
          <div className="admin-users-count">۲۴ جریان</div>
        </section>

        <section className="admin-users-table-card admin-list-table-compact">
          <h2>جریان‌های تأمین مالی</h2><p>منبع پول، مبلغ و وضعیت جریان تأمین هر پروژه را پایش کنید</p>
          <div className="admin-users-table">
            <div className="admin-users-row admin-users-table-head"><span>پروژه / حوزه</span><span>منبع تأمین</span><span>وضعیت</span><span>مبلغ تأمین</span><span>آخرین جریان</span><span>اقدام</span></div>
            {flows.map((flow, index) => (
              <div className="admin-users-row" key={flow.name}>
                <div className="admin-user-cell"><strong>{flow.name}</strong><small>{flow.meta}</small></div>
                <span>{flow.source}</span>
                <span className="admin-status-pill admin-status-active">{flow.status}</span>
                <span>{flow.amount}</span>
                <span className="admin-access-pill admin-access-full">{flow.last}</span>
                <Link className="admin-user-action" to={`/panel/admin/funding/${index + 1}`}>مشاهده</Link>
              </div>
            ))}
            <div className="admin-pagination"><span>نمایش ۱ تا ۳ از ۲۴ جریان</span><div className="admin-pagination-controls"><button className="admin-page-control admin-list-static-control" type="button" aria-disabled="true">بعدی</button><span className="admin-page-number">۱</span><button className="admin-page-control" type="button" disabled>قبلی</button></div></div>
          </div>
        </section>
        <aside className="admin-info-note">ادمین فقط جریان تأمین مالی را پایش می‌کند؛ ثبت تخصیص ۱۰٪ منابع شرکت در پنل کمیته امداد و مدیریت سرمایه صندوق در پنل مدیر صندوق انجام می‌شود.</aside>
      </main>
      <AdminSidebar active="funding" />
    </div>
  );
}
