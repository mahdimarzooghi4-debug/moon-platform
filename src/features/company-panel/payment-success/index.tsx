import { Link, useParams } from "react-router-dom";
import { CompanySidebar } from "../components/CompanySidebar";
import "../index.css";
import "./index.css";

const PROJECT_IMAGE = "/assets/company-panel/project-family-health.png";

const paymentRows = [
  ["مبلغ مشارکت", "۵۰٬۰۰۰٬۰۰۰ تومان"],
  ["تاریخ و ساعت", "۱۴۰۵/۰۶/۰۲، ۱۴:۳۲"],
  ["کد پیگیری ماه", "MAH-C-1405-0061"],
  ["شماره مرجع بانکی", "938410257631"],
  ["نماینده سازمان", "علیرضا سهرابی · ۰۹۱۲•••۶۷۸۹"],
] as const;

export default function CompanyPaymentSuccess() {
  const { projectId = "family-health" } = useParams();

  return (
    <div className="company-panel-shell" data-node-id="1894:2">
      <main className="company-payment-success-page" dir="rtl">
        <header className="company-topbar">
          <div className="company-page-title">
            <h1>پرداخت موفق</h1>
            <p>مشارکت سازمانی با موفقیت ثبت شد و قابل پیگیری است</p>
          </div>
          <div className="company-top-actions">
            <Link className="company-action company-action-primary" to="/panel/company/participations">مشارکت‌های سازمانی</Link>
            <Link className="company-action company-action-secondary company-success-projects" to="/panel/company/projects">پروژه‌ها</Link>
          </div>
        </header>

        <section className="company-success-overview">
          <div className="company-success-badge">✓</div>
          <div className="company-success-copy">
            <h2>مشارکت سازمانی با موفقیت ثبت شد</h2>
            <p>پرداخت با موفقیت انجام شد و مشارکت شرکت در پروژه ثبت گردید.</p>
            <div className="company-success-project">
              <img src={PROJECT_IMAGE} alt="" />
              <div><span>پروژه</span><strong>سلامت خانواده</strong><small>سلامت و بهداشت · سیستان و بلوچستان</small></div>
            </div>
          </div>
          <div className="company-success-status"><b>پرداخت موفق</b><span>کد پیگیری ماه را برای پیگیری‌های بعدی نگه‌داری کنید.</span></div>
        </section>

        <div className="company-success-columns">
          <section className="company-success-payment-details">
            <h2>جزئیات پرداخت</h2>
            {paymentRows.map(([label, value]) => (
              <div className="company-success-detail-row" key={label}><span>{label}</span><strong dir={value.startsWith("MAH") || /^\d/.test(value) ? "ltr" : undefined}>{value}</strong></div>
            ))}
            <div className="company-success-detail-row company-success-detail-state"><span>وضعیت</span><strong>پرداخت موفق</strong></div>
          </section>

          <aside className="company-success-summary">
            <h2>خلاصه مشارکت</h2>
            <div className="company-success-route"><span>مسیر پرداخت</span><strong>واریز مستقیم به حساب کمیته امداد</strong><small>امکان پیگیری نتیجه مشارکت از پنل سازمانی</small></div>
            <Link className="company-success-certificate" to="/panel/company/certificates"><span>گواهی ماده ۱۷۲</span><strong>مشروط به تأیید شرایط قانونی</strong><small>پرداخت موفق به‌تنهایی تضمین‌کننده صدور گواهی نیست.</small></Link>
            <div className="company-success-actions">
              <button type="button" title="دریافت رسید در محصول نهایی فعال می‌شود">دریافت رسید</button>
              <Link to={`/panel/company/projects/${projectId}`}>بازگشت به پروژه</Link>
            </div>
          </aside>
        </div>

        <section className="company-success-after-payment">
          <h2>بعد از پرداخت</h2>
          <p>مشارکت ثبت شده و ادامه مسیر از پنل سازمانی قابل پیگیری است.</p>
          <div className="company-success-follow-grid">
            <article><b>۱</b><div><strong>ثبت مشارکت</strong><span>پرداخت و اطلاعات پروژه در «مشارکت‌های سازمانی» ثبت می‌شود.</span></div></article>
            <article><b>۲</b><div><strong>پیگیری پروژه</strong><span>پیشرفت و گزارش‌های اثر پروژه از پنل قابل مشاهده است.</span></div></article>
            <Link to="/panel/company/certificates"><b>۳</b><div><strong>گواهی ماده ۱۷۲</strong><span>در صورت احراز شرایط قانونی، وضعیت گواهی قابل پیگیری است.</span></div></Link>
          </div>
        </section>
      </main>
      <CompanySidebar active="participations" />
    </div>
  );
}
