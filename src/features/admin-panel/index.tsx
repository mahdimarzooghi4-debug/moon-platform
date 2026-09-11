import { Link } from "react-router-dom";
import { AdminSidebar } from "./components/AdminSidebar";
import "./index.css";

const ASSET_ROOT = "/assets/admin-panel";

const metrics = [
  { label: "پروژه‌های فعال", value: "۲۴ پروژه", icon: "kpi-projects.svg", tone: "projects" },
  { label: "استارتاپ‌های عضو", value: "۱٬۲۵۰ استارتاپ", icon: "kpi-startups.svg", tone: "startups" },
  { label: "منابع جذب‌شده", value: "۱۸٫۴ میلیارد تومان", icon: "kpi-funds.svg", tone: "funds" },
  { label: "افراد بهره‌مند", value: "۱۲٬۸۴۰ نفر", icon: "kpi-beneficiaries.svg", tone: "beneficiaries" },
] as const;

const activities = [
  { event: "پرداخت نقدی شرکت", role: "شرکت", subject: "سلامت خانواده", status: "ثبت شد", time: "امروز", subjectTone: "green" },
  { event: "تأیید ارزیابی پروژه", role: "خانه خلاق", subject: "مهارت نوجوانان", status: "تأیید شد", time: "۲ ساعت قبل", subjectTone: "green" },
  { event: "ثبت آزادسازی وجه", role: "کمیته امداد", subject: "اشتغال زنان", status: "ثبت شد", time: "امروز", subjectTone: "slate" },
] as const;

const projects = [
  { id: "family-health", title: "سلامت خانواده", domain: "سلامت و بهداشت", funded: "۵۱٪", target: "۳۵۰ میلیون تومان" },
  { id: "teen-skills", title: "مهارت برای نوجوانان", domain: "آموزش و اشتغال", funded: "۷۴٪", target: "۴۰۰ میلیون تومان" },
  { id: "rural-women-employment", title: "اشتغال زنان روستایی", domain: "کسب‌وکار و اشتغال", funded: "۵۸٪", target: "۴۰۰ میلیون تومان" },
] as const;

export default function AdminMainDashboard() {
  return (
    <div className="admin-panel-shell" data-node-id="2230:3">
      <main className="admin-dashboard" dir="rtl">
        <header className="admin-topbar">
          <div className="admin-page-title">
            <h1>داشبورد مدیریت سامانه ماه</h1>
            <p>نظارت کلان بر کاربران، پروژه‌ها، تأمین مالی و عملیات سامانه</p>
          </div>
          <div className="admin-top-actions">
            <Link className="admin-action admin-action-primary" to="/panel/admin/users">
              مدیریت کاربران
            </Link>
            <Link className="admin-action admin-action-secondary" to="/panel/admin/reports">
              گزارش مدیریتی
            </Link>
          </div>
        </header>

        <section className="admin-metrics" aria-label="نمای کلی سامانه">
          {metrics.map((metric) => (
            <article key={metric.label} className={`admin-metric admin-metric-${metric.tone}`}>
              <span className="admin-metric-label">{metric.label}</span>
              <strong>{metric.value}</strong>
              <div className="admin-metric-accent" />
              <div className="admin-metric-icon">
                <img src={`${ASSET_ROOT}/${metric.icon}`} alt="" />
              </div>
            </article>
          ))}
        </section>

        <section className="admin-card admin-activity-card">
          <div className="admin-section-heading">
            <div>
              <h2>آخرین فعالیت‌های سامانه</h2>
              <p>آخرین رویدادهای ثبت‌شده در نقش‌های مختلف سامانه</p>
            </div>
            <span className="admin-overview-chip">نمای کلی</span>
          </div>

          <div className="admin-activity-table" role="table" aria-label="آخرین فعالیت‌های سامانه">
            <div className="admin-activity-row admin-table-header" role="row">
              <span role="columnheader">رویداد</span>
              <span role="columnheader">نقش</span>
              <span role="columnheader">موضوع</span>
              <span role="columnheader">وضعیت</span>
              <span role="columnheader">زمان</span>
            </div>
            {activities.map((activity) => (
              <div className="admin-activity-row" role="row" key={`${activity.event}-${activity.subject}`}>
                <strong role="cell">{activity.event}</strong>
                <span role="cell">{activity.role}</span>
                <span role="cell" className={`admin-chip admin-chip-${activity.subjectTone}`}>{activity.subject}</span>
                <span role="cell" className="admin-chip admin-chip-blue">{activity.status}</span>
                <span role="cell" className="admin-chip admin-chip-gold">{activity.time}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="admin-card admin-funding-card">
          <div className="admin-section-heading">
            <div>
              <h2>پروژه‌های در حال تأمین مالی</h2>
              <p>نمای کلان از پروژه‌های فعال و میزان پیشرفت تأمین منابع</p>
            </div>
            <span className="admin-project-count">۳ پروژه شاخص</span>
          </div>

          <div className="admin-project-table" role="table" aria-label="پروژه‌های در حال تأمین مالی">
            <div className="admin-project-row admin-table-header" role="row">
              <span role="columnheader">پروژه</span>
              <span role="columnheader">حوزه اثر</span>
              <span role="columnheader">تأمین فعلی</span>
              <span role="columnheader">هدف تأمین</span>
              <span role="columnheader">اقدام</span>
            </div>
            {projects.map((project) => (
              <div className="admin-project-row" role="row" key={project.id}>
                <strong role="cell">{project.title}</strong>
                <span role="cell">{project.domain}</span>
                <span className="admin-funded" role="cell">{project.funded}</span>
                <span role="cell">{project.target}</span>
                <Link className="admin-detail-button" role="cell" to={`/panel/admin/projects/${project.id}`}>
                  مشاهده جزئیات
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>

      <AdminSidebar active="dashboard" />
    </div>
  );
}
