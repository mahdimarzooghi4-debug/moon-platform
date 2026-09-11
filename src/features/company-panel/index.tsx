import { Link } from "react-router-dom";
import { CompanySidebar } from "./components/CompanySidebar";
import "./index.css";

const ASSET_ROOT = "/assets/company-panel";

const metrics = [
  {
    label: "پروژه‌های قابل مشارکت",
    value: "۳",
    suffix: "پروژه",
    icon: "kpi-projects.svg",
    tone: "projects",
  },
  {
    label: "پروژه‌های مشارکت‌شده",
    value: "—",
    suffix: "پس از مشارکت",
    icon: "kpi-participations.svg",
    tone: "participations",
  },
  {
    label: "میزان مشارکت شرکت",
    value: "—",
    suffix: "تومان",
    icon: "kpi-amount.svg",
    tone: "amount",
  },
  {
    label: "وضعیت گواهی ماده ۱۷۲",
    value: "—",
    suffix: "قابل پیگیری",
    icon: "kpi-certificate.svg",
    tone: "certificate",
  },
] as const;

const projects = [
  {
    id: "family-health",
    title: "سلامت خانواده",
    domain: "سلامت و بهداشت",
    funded: "۵۱٪",
    target: "۳۵۰ میلیون تومان",
  },
  {
    id: "teen-skills",
    title: "مهارت برای نوجوانان",
    domain: "آموزش و اشتغال",
    funded: "۷۴٪",
    target: "۴۰۰ میلیون تومان",
  },
  {
    id: "rural-women-employment",
    title: "اشتغال زنان روستایی",
    domain: "کسب‌وکار و اشتغال",
    funded: "۵۸٪",
    target: "۴۰۰ میلیون تومان",
  },
] as const;

export default function CompanyMainDashboard() {
  return (
    <div className="company-panel-shell" data-node-id="1821:583">
      <main className="company-dashboard" dir="rtl">
        <header className="company-topbar">
          <div className="company-page-title">
            <h1>داشبورد حساب سازمانی</h1>
            <p>مدیریت مشارکت‌های سازمانی، گزارش مالی و اثر اجتماعی</p>
          </div>
          <div className="company-top-actions">
            <Link className="company-action company-action-primary" to="/panel/company/projects">
              مشاهده پروژه‌ها
            </Link>
            <Link className="company-action company-action-secondary" to="/panel/company/certificates">
              گواهی ماده ۱۷۲
            </Link>
          </div>
        </header>

        <section className="company-metrics" aria-label="نمای کلی حساب سازمانی">
          {metrics.map((metric) => (
            <article key={metric.label} className={`company-metric company-metric-${metric.tone}`}>
              <div className="company-metric-icon">
                <img src={`${ASSET_ROOT}/${metric.icon}`} alt="" />
              </div>
              <span className="company-metric-label">{metric.label}</span>
              <div className="company-metric-value">
                <strong>{metric.value}</strong>
                <span>{metric.suffix}</span>
              </div>
              <div className="company-metric-accent" />
            </article>
          ))}
        </section>

        <section className="company-card company-participations-card">
          <div className="company-section-heading">
            <div>
              <h2>مشارکت‌های شرکت</h2>
              <p>هنوز مشارکتی ثبت نشده است؛ برای شروع یکی از پروژه‌های فعال را انتخاب کنید.</p>
            </div>
            <Link className="company-account-chip" to="/panel/company/account">
              حساب سازمانی
            </Link>
          </div>

          <div className="company-empty-state">
            <strong>هنوز مشارکتی ثبت نشده است</strong>
            <span>برای شروع مشارکت سازمانی، یکی از پروژه‌های فعال را انتخاب کنید.</span>
            <Link to="/panel/company/projects">مشاهده پروژه‌ها</Link>
          </div>
        </section>

        <section className="company-card company-projects-card">
          <div className="company-section-heading">
            <div>
              <h2>پروژه‌های قابل مشارکت</h2>
              <p>پروژه‌های فعال لندینگ ماه برای مشارکت سازمانی</p>
            </div>
            <span className="company-active-count">۳ پروژه فعال</span>
          </div>

          <div className="company-project-table" role="table" aria-label="پروژه‌های قابل مشارکت">
            <div className="company-project-row company-project-header" role="row">
              <span role="columnheader">پروژه</span>
              <span role="columnheader">حوزه اثر</span>
              <span role="columnheader">تأمین فعلی</span>
              <span role="columnheader">هدف تأمین</span>
              <span role="columnheader">اقدام</span>
            </div>
            {projects.map((project) => (
              <div className="company-project-row" role="row" key={project.id}>
                <strong role="cell">{project.title}</strong>
                <span role="cell">{project.domain}</span>
                <span className="company-funded" role="cell">{project.funded}</span>
                <span role="cell">{project.target}</span>
                <Link role="cell" className="company-participate-button" to={`/panel/company/projects/${project.id}/participate`}>
                  مشارکت در پروژه
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>

      <CompanySidebar active="dashboard" />
    </div>
  );
}
