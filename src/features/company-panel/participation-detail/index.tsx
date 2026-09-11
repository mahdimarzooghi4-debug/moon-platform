import { Link, useParams } from "react-router-dom";
import { CompanySidebar } from "../components/CompanySidebar";
import "../index.css";
import "./index.css";

const metrics = [
  ["افراد بهره‌مند", "۲٬۵۰۰ فرد"],
  ["پوشش روستایی", "۴۲ روستا"],
  ["مراکز سلامت", "۸ مرکز"],
  ["پوشش خدمات", "۷۴٪ کل"],
] as const;

export default function CompanyOrganizationalParticipationDetail() {
  const { participationId = "MAH-C-1405-0061" } = useParams();
  void participationId;

  return (
    <div className="company-panel-shell" data-node-id="1898:2">
      <main className="company-participation-detail-page" dir="rtl">
        <header className="company-topbar">
          <div className="company-page-title"><h1>جزئیات مشارکت سازمانی</h1><p>پیگیری پرداخت، وضعیت پروژه، گزارش‌ها و گواهی ماده ۱۷۲</p></div>
          <div className="company-top-actions">
            <button className="company-action company-action-primary company-receipt-button" type="button" title="دریافت رسید در محصول نهایی فعال می‌شود">دریافت رسید</button>
            <Link className="company-action company-action-secondary company-participation-back" to="/panel/company/participations">بازگشت به مشارکت‌ها</Link>
          </div>
        </header>

        <section className="company-participation-summary-card">
          <div><span>پروژه</span><h2>سلامت خانواده</h2><p>سلامت و بهداشت · سیستان و بلوچستان</p><small>پیگیری پرداخت، پیشرفت و گزارش اثر از همین مشارکت</small></div>
          <div className="company-participation-summary-amount"><span>مبلغ مشارکت</span><strong>۵۰٬۰۰۰٬۰۰۰ تومان</strong></div>
        </section>

        <div className="company-participation-detail-columns">
          <section className="company-participation-impact-card">
            <h2>وضعیت پروژه و اثر</h2><p>اطلاعات پروژه از داده‌های واقعی لندینگ ماه</p>
            <div className="company-participation-funding"><span>وضعیت تأمین پروژه</span><strong>۶۵٪ تأمین شده</strong><div><i /></div><b>۲۲۸٫۵ میلیون تومان</b><small>هدف: ۳۵۰ میلیون تومان</small></div>
            <div className="company-participation-metrics">{metrics.map(([label,value]) => <article key={label}><span>{label}</span><strong>{value}</strong></article>)}</div>
          </section>

          <section className="company-participation-payment-card">
            <h2>اطلاعات پرداخت</h2><p>مسیر مالی این مشارکت</p>
            <dl>
              <div><dt>مبلغ مشارکت</dt><dd>۵۰٬۰۰۰٬۰۰۰ تومان</dd></div>
              <div><dt>مسیر پرداخت</dt><dd>واریز مستقیم به حساب کمیته امداد</dd></div>
              <div><dt>وضعیت</dt><dd className="is-success">پرداخت موفق</dd></div>
              <div><dt>رسید</dt><dd>رسید MAH-1405-00172</dd></div>
            </dl>
            <aside>صدور گواهی ماده ۱۷۲ منوط به تأیید شرایط قانونی است.</aside>
          </section>
        </div>

        <section className="company-participation-tracking-card">
          <h2>پیگیری مشارکت</h2><p>سه مسیر اصلی بعد از ثبت مشارکت سازمانی</p>
          <div className="company-participation-tracking-grid">
            <article><strong>پرداخت و رسید</strong><span>پرداخت به حساب کمیته امداد ثبت شده و رسید از حساب سازمانی قابل دریافت است.</span></article>
            <Link to="/panel/company/reports"><strong>پیشرفت و گزارش اثر</strong><span>گزارش‌های پروژه پس از انتشار و تأیید از بخش گزارش مالی و اثر قابل مشاهده‌اند.</span></Link>
            <Link to="/panel/company/certificates"><strong>گواهی ماده ۱۷۲</strong><span>وضعیت گواهی از همین مشارکت قابل پیگیری است؛ صدور آن به ضوابط قانونی وابسته است.</span></Link>
          </div>
          <Link className="company-participation-project-link" to="/panel/company/projects/family-health">مشاهده جزئیات پروژه</Link>
        </section>
      </main>
      <CompanySidebar active="participations" />
    </div>
  );
}
