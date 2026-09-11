import { Link } from "react-router-dom";
import { AdminSidebar } from "../components/AdminSidebar";
import "../index.css";
import "../users-flow.css";
import "../list-flow.css";

const fields = [
  ["نام مجموعه", "پایدار پرداز خلاق آریا"],
  ["شناسه / مدیر حساب", "شناسه ملی: ۱۰۱۰••••••••"],
  ["نوع حساب", "شرکت"],
  ["مسئول حساب", "علی رضایی"],
  ["پروژه‌های فعال", "۳ پروژه"],
  ["وضعیت حساب", "فعال"],
] as const;

export default function AdminOrganizationDetail() {
  return (
    <div className="admin-panel-shell" data-node-id="2273:226">
      <main className="admin-users-main" dir="rtl">
        <header className="admin-users-header">
          <div className="admin-users-heading"><h1>جزئیات شرکت / استارتاپ</h1><p>نمای مدیریتی حساب، وضعیت فعالیت و پروژه‌های مرتبط</p></div>
          <div className="admin-users-actions"><Link className="admin-users-button admin-users-button-wide" to="/panel/admin/organizations">بازگشت به فهرست</Link></div>
        </header>

        <section className="admin-form-card">
          <h2>اطلاعات مجموعه</h2>
          <p>مشخصات حساب و وضعیت فعالیت مجموعه در سامانه.</p>
          <div className="admin-form-grid">
            {fields.map(([label, value]) => <div className="admin-form-field" key={label}><label>{label}</label><div className="admin-detail-value">{value}</div></div>)}
          </div>
        </section>

        <aside className="admin-info-note admin-detail-note">شرکت‌ها برای ورود به پنل نیاز به تأیید ادمین ندارند. بررسی مدیریتی این صفحه برای وضعیت حساب و استارتاپ‌های نیازمند تکمیل استفاده می‌شود.</aside>

        <section className="admin-form-actions admin-detail-actions">
          <Link className="admin-users-button admin-users-button-primary" to="/panel/admin/projects/sample">مشاهده پروژه‌ها</Link>
          <button className="admin-users-button admin-list-static-control" type="button" aria-disabled="true">غیرفعال کردن</button>
          <p className="admin-form-actions-note">آخرین فعالیت مجموعه: امروز، ۱۰:۴۵</p>
        </section>
      </main>
      <AdminSidebar active="organizations" />
    </div>
  );
}
