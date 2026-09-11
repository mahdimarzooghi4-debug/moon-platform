import { Link, useParams } from "react-router-dom";
import { CompanySidebar } from "../components/CompanySidebar";
import "../index.css";
import "./index.css";

const PROJECT_IMAGE = "/assets/company-panel/project-family-health.png";

export default function CompanyProjectDetail() {
  const { projectId = "family-health" } = useParams();

  return (
    <div className="company-panel-shell" data-node-id="1875:2">
      <main className="company-project-detail-page" dir="rtl">
        <header className="company-topbar">
          <div className="company-page-title">
            <h1>جزئیات پروژه</h1>
            <p>مشاهده اطلاعات و وضعیت تأمین پروژه برای مشارکت سازمانی</p>
          </div>
          <div className="company-top-actions">
            <Link className="company-action company-action-primary" to="/panel/company/participations">
              مشارکت‌های سازمانی
            </Link>
            <Link className="company-action company-action-secondary company-detail-back" to="/panel/company/projects">
              بازگشت به پروژه‌ها
            </Link>
          </div>
        </header>

        <section className="company-detail-card company-project-summary-card">
          <img src={PROJECT_IMAGE} alt="" className="company-detail-project-image" />
          <div className="company-detail-project-copy">
            <span>پروژه اثر اجتماعی</span>
            <h2>سلامت خانواده</h2>
            <p>حوزه: سلامت و بهداشت</p>
            <p>استان: سیستان و بلوچستان</p>
            <b>قابل مشارکت</b>
          </div>
        </section>

        <section className="company-detail-card company-impact-metrics-card">
          <h2>شاخص‌های اثر اجتماعی</h2>
          <div className="company-impact-metric-grid">
            <article><span>افراد بهره‌مند</span><strong>۲٬۵۰۰ فرد</strong></article>
            <article><span>پوشش روستایی</span><strong>۴۲ روستا</strong></article>
            <article><span>مراکز سلامت</span><strong>۸ مرکز</strong></article>
            <article><span>پوشش خدمات</span><strong>۷۴٪ کل</strong></article>
          </div>
        </section>

        <section className="company-detail-card company-funding-card">
          <div className="company-funding-main">
            <h2>وضعیت تأمین مالی</h2>
            <strong>۵۱٪ تأمین شده</strong>
            <div className="company-detail-progress"><i /></div>
            <div className="company-funding-numbers">
              <div><span>تأمین‌شده</span><b>۱۷۸٫۵ میلیون تومان</b></div>
              <div><span>هدف تأمین</span><b>۳۵۰ میلیون تومان</b></div>
            </div>
          </div>
          <div className="company-organization-participation-card">
            <h3>مشارکت سازمانی</h3>
            <p>پرداخت واجد شرایط مستقیماً به حساب کمیته امداد انجام می‌شود.</p>
            <div className="company-article-status">گواهی ماده ۱۷۲ تابع ضوابط قانونی است</div>
            <Link to={`/panel/company/projects/${projectId}/participate`}>مشارکت در پروژه</Link>
          </div>
        </section>

        <section className="company-detail-card company-participation-guide-card">
          <h2>نحوه مشارکت سازمانی</h2>
          <p>فرآیند کلی مشارکت شرکت در پروژه‌های اثر اجتماعی</p>
          <div className="company-guide-grid">
            <article><b>۱</b><div><strong>انتخاب پروژه</strong><span>پروژه مناسب را از فهرست پروژه‌های اثر اجتماعی انتخاب کنید.</span></div></article>
            <article><b>۲</b><div><strong>پرداخت مستقیم</strong><span>پرداخت واجد شرایط به حساب کمیته امداد انجام می‌شود.</span></div></article>
            <article><b>۳</b><div><strong>پیگیری گزارش</strong><span>گزارش مالی و اثر اجتماعی از پنل سازمانی قابل پیگیری است.</span></div></article>
          </div>
        </section>
      </main>

      <CompanySidebar active="projects" />
    </div>
  );
}
