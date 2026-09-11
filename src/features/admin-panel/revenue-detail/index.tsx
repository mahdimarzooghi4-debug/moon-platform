import { Link } from "react-router-dom";
import { AdminSidebar } from "../components/AdminSidebar";
import "../index.css";
import "../users-flow.css";
import "../list-flow.css";

const fields = [
  ["پروژه / دوره", "سلامت خانواده"],
  ["منبع درآمد", "کارمزد تأمین مالی"],
  ["پرداخت‌کننده / مبنا", "استارتاپ راهکار نوآور فردا"],
  ["مبلغ مبنا", "۴۰۰ میلیون تومان"],
  ["نرخ", "۴٪"],
  ["درآمد ماه", "۱۶ میلیون تومان"],
] as const;

export default function AdminRevenueDetail() {
  return (
    <div className="admin-panel-shell" data-node-id="2280:1566">
      <main className="admin-users-main" dir="rtl">
        <header className="admin-users-header">
          <div className="admin-users-heading"><h1>جزئیات درآمد</h1><p>مشاهده منبع درآمد، مبلغ مبنا، نرخ و مبلغ درآمد ثبت‌شده</p></div>
          <div className="admin-users-actions"><Link className="admin-users-button admin-users-button-wide" to="/panel/admin/revenues">بازگشت به درآمدها</Link></div>
        </header>
        <section className="admin-form-card">
          <h2>اطلاعات درآمد</h2><p>جزئیات درآمد ثبت‌شده برای نظارت ادمین نمایش داده می‌شود.</p>
          <div className="admin-form-grid">{fields.map(([label, value]) => <div className="admin-form-field" key={label}><label>{label}</label><div className="admin-detail-value">{value}</div></div>)}</div>
        </section>
        <aside className="admin-info-note admin-detail-note">درآمد ماه از دو مسیر ثبت می‌شود: کارمزد پلکانی تأمین مالی استارتاپ‌ها و ۳۰٪ از سود صندوق.</aside>
        <section className="admin-form-actions admin-detail-actions">
          <Link className="admin-users-button admin-users-button-primary" to="/panel/admin/projects/sample">مشاهده پروژه</Link>
          <Link className="admin-users-button" to="/panel/admin/revenues">بازگشت</Link>
          <p className="admin-form-actions-note">آخرین رویداد مالی: امروز، ۱۳:۲۰</p>
        </section>
      </main>
      <AdminSidebar active="revenues" />
    </div>
  );
}
