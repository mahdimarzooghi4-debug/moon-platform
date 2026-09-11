import { Link } from "react-router-dom";
import { AdminSidebar } from "../components/AdminSidebar";
import "../index.css";
import "../users-flow.css";
import "../list-flow.css";

const fields = [
  ["نام پروژه", "سلامت خانواده"],
  ["استان", "سیستان و بلوچستان"],
  ["حوزه اثر", "سلامت و بهداشت"],
  ["تأمین فعلی", "۵۱٪"],
  ["هدف تأمین", "۳۵۰ میلیون تومان"],
  ["وضعیت پروژه", "فعال"],
] as const;

export default function AdminProjectDetail() {
  return (
    <div className="admin-panel-shell" data-node-id="2273:338">
      <main className="admin-users-main" dir="rtl">
        <header className="admin-users-header">
          <div className="admin-users-heading"><h1>جزئیات پروژه</h1><p>پایش مدیریتی وضعیت، تأمین مالی و مشخصات پروژه</p></div>
          <div className="admin-users-actions"><Link className="admin-users-button admin-users-button-wide" to="/panel/admin/projects">بازگشت به پروژه‌ها</Link></div>
        </header>
        <section className="admin-form-card">
          <h2>مشخصات پروژه</h2><p>اطلاعات کلیدی پروژه برای نظارت ادمین؛ ارزیابی تخصصی در خانه خلاق انجام می‌شود.</p>
          <div className="admin-form-grid">{fields.map(([label, value]) => <div className="admin-form-field" key={label}><label>{label}</label><div className="admin-detail-value">{value}</div></div>)}</div>
        </section>
        <aside className="admin-info-note admin-detail-note">این صفحه فقط نمای نظارتی ادمین است. تصمیم ارزیابی پروژه و مراحل اجرا در پنل خانه خلاق انجام می‌شود.</aside>
        <section className="admin-form-actions admin-detail-actions">
          <Link className="admin-users-button admin-users-button-primary" to="/panel/admin/funding/sample">مشاهده تأمین مالی</Link>
          <Link className="admin-users-button" to="/panel/admin/projects">بازگشت</Link>
          <p className="admin-form-actions-note">آخرین تغییر وضعیت پروژه: امروز، ۱۲:۱۰</p>
        </section>
      </main>
      <AdminSidebar active="projects" />
    </div>
  );
}
