import { Link } from "react-router-dom";
import { AdminSidebar } from "../components/AdminSidebar";
import "../index.css";
import "../users-flow.css";
import "../list-flow.css";

const fields = [
  ["پروژه", "سلامت خانواده"],
  ["منبع تأمین", "شرکت"],
  ["تأمین‌کننده", "پایدار پرداز خلاق آریا"],
  ["مبلغ تأمین", "۵۰۰ میلیون تومان"],
  ["آخرین جریان", "پرداخت نقدی شرکت"],
  ["وضعیت", "در حال تأمین"],
] as const;

export default function AdminFundingDetail() {
  return (
    <div className="admin-panel-shell" data-node-id="2273:450">
      <main className="admin-users-main" dir="rtl">
        <header className="admin-users-header">
          <div className="admin-users-heading"><h1>جزئیات تأمین مالی</h1><p>مشاهده منبع پول، مبلغ و آخرین جریان ثبت‌شده برای پروژه</p></div>
          <div className="admin-users-actions"><Link className="admin-users-button admin-users-button-wide" to="/panel/admin/funding">بازگشت به تأمین مالی</Link></div>
        </header>
        <section className="admin-form-card">
          <h2>اطلاعات جریان مالی</h2><p>جزئیات جریان برای نظارت ادمین نمایش داده می‌شود.</p>
          <div className="admin-form-grid">{fields.map(([label, value]) => <div className="admin-form-field" key={label}><label>{label}</label><div className="admin-detail-value">{value}</div></div>)}</div>
        </section>
        <aside className="admin-info-note admin-detail-note">ثبت تخصیص ۱۰٪ منابع شرکت در پنل کمیته امداد و مدیریت منابع و سود صندوق در پنل مدیر صندوق انجام می‌شود.</aside>
        <section className="admin-form-actions admin-detail-actions">
          <Link className="admin-users-button admin-users-button-primary" to="/panel/admin/projects/sample">مشاهده پروژه</Link>
          <Link className="admin-users-button" to="/panel/admin/funding">بازگشت</Link>
          <p className="admin-form-actions-note">آخرین رویداد مالی: امروز، ۱۳:۲۰</p>
        </section>
      </main>
      <AdminSidebar active="funding" />
    </div>
  );
}
