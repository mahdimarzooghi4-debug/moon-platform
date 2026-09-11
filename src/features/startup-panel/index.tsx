import { Link } from "react-router-dom";
import "./index.css";

const ASSET_ROOT = "/assets/startup-panel";

type MetricCardProps = {
  label: string;
  value: string;
  meta: string;
  icon: string;
  iconClass: string;
  accentClass: string;
};

const sidebarItems = [
  { label: "داشبورد", to: "/panel/startup", icon: "nav-dashboard.svg", active: true },
  { label: "پروژه‌های من", to: "/panel/startup/projects", icon: "nav-projects.svg" },
  { label: "مراحل پروژه", to: "/panel/startup/stages", icon: "nav-stages.svg" },
  { label: "گزارش‌ها و مستندات", to: "/panel/startup/reports", icon: "nav-reports.svg" },
  { label: "پروفایل استارتاپ", to: "/panel/startup/profile", icon: "nav-profile.svg" },
  { label: "کارمزد تأمین مالی", to: "/panel/startup/financing-fee", icon: "nav-profile.svg" },
  { label: "تنظیمات", to: "/panel/startup/settings", icon: "nav-settings.svg" },
];

const metrics: MetricCardProps[] = [
  {
    label: "وضعیت تأیید حساب",
    value: "تأیید شده",
    meta: "فعال",
    icon: "kpi-account.svg",
    iconClass: "is-blue",
    accentClass: "is-green",
  },
  {
    label: "مرحله رشد استارتاپ",
    value: "MVP",
    meta: "MVP",
    icon: "kpi-growth.svg",
    iconClass: "is-violet",
    accentClass: "is-gold",
  },
  {
    label: "پروژه‌های ثبت‌شده",
    value: "۱",
    meta: "پروژه",
    icon: "kpi-projects.svg",
    iconClass: "is-amber",
    accentClass: "is-blue",
  },
  {
    label: "گزارش‌های در انتظار ارزیابی",
    value: "۰",
    meta: "گزارش",
    icon: "kpi-reports.svg",
    iconClass: "is-green",
    accentClass: "is-amber",
  },
];

const projectSteps = [
  { number: "۱", title: "تعریف پروژه", hint: "مسیر پروژه", active: true },
  { number: "۲", title: "ارزیابی پروژه" },
  { number: "۳", title: "اجرای مرحله" },
  { number: "۴", title: "ارسال گزارش و مستندات" },
  { number: "۵", title: "ارزیابی مرحله" },
];

function MetricCard({ label, value, meta, icon, iconClass, accentClass }: MetricCardProps) {
  return (
    <div className="startup-kpi-card">
      <div className={`startup-kpi-icon ${iconClass}`}>
        <img src={`${ASSET_ROOT}/${icon}`} alt="" />
      </div>
      <div className="startup-kpi-copy">
        <span>{label}</span>
        <strong>{value}</strong>
        <small>{meta}</small>
      </div>
      <div className={`startup-kpi-accent ${accentClass}`} />
    </div>
  );
}

function StartupSidebar() {
  return (
    <aside className="startup-sidebar" aria-label="ناوبری پنل استارتاپ">
      <div className="startup-brand">
        <img src={`${ASSET_ROOT}/logo.png`} alt="سامانه ماه" />
      </div>

      <div className="startup-identity">
        <strong>سامانه ماه</strong>
        <span>حساب استارتاپی</span>
      </div>

      <nav className="startup-nav">
        {sidebarItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`startup-nav-item${item.active ? " is-active" : ""}`}
          >
            <span>{item.label}</span>
            <img src={`${ASSET_ROOT}/${item.icon}`} alt="" />
          </Link>
        ))}
      </nav>

      <div className="startup-sidebar-spacer" />

      <button className="startup-logout" type="button">
        <span>خروج از سیستم</span>
        <span className="startup-logout-icon" aria-hidden="true" />
      </button>
    </aside>
  );
}

export default function StartupPanelDashboard() {
  return (
    <div className="startup-panel-page" data-node-id="1951:206" data-name="startup-main-dashboard">
      <StartupSidebar />

      <main className="startup-dashboard-content">
        <header className="startup-topbar">
          <div className="startup-page-title">
            <h1>داشبورد استارتاپ</h1>
            <p>مدیریت پروژه‌ها، مراحل اجرا و گزارش‌ها و مستندات</p>
          </div>
          <div className="startup-top-actions">
            <Link className="startup-button startup-button-secondary" to="/panel/startup/profile">
              پروفایل استارتاپ
            </Link>
            <Link className="startup-button startup-button-primary" to="/panel/startup/projects/new">
              ثبت پروژه جدید
            </Link>
          </div>
        </header>

        <section className="startup-metrics" aria-label="نمای کلی حساب">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </section>

        <section className="startup-status-card">
          <div className="startup-section-heading">
            <div>
              <h2>وضعیت حساب و اقدام بعدی</h2>
              <p>حساب استارتاپ تأیید شده و آماده ورود به مرحله تعریف پروژه است.</p>
            </div>
            <span className="startup-approved-chip">حساب تأییدشده</span>
          </div>

          <div className="startup-status-grid">
            <div className="startup-next-action-card">
              <span className="startup-eyebrow">اقدام بعدی</span>
              <h3>پروژه خود را ثبت کنید</h3>
              <p>
                پس از ثبت پروژه، خانه خلاق و نوآوری آینه آن را ارزیابی می‌کند و در صورت تأیید، اجرای مرحله‌ای آغاز می‌شود.
              </p>
              <Link className="startup-button startup-button-primary startup-next-action-button" to="/panel/startup/projects/new">
                ثبت پروژه جدید
              </Link>
            </div>

            <Link className="startup-profile-summary" to="/panel/startup/profile">
              <h3>پروفایل استارتاپ</h3>
              <dl>
                <div><dt>نام استارتاپ</dt><dd>سامانه ماه</dd></div>
                <div><dt>مرحله رشد استارتاپ</dt><dd>MVP</dd></div>
                <div><dt>حوزه اثر</dt><dd>آموزش، توانمندسازی و اشتغال پایدار</dd></div>
                <div><dt>نماینده اصلی</dt><dd>علی علوی</dd></div>
              </dl>
            </Link>
          </div>
        </section>

        <section className="startup-projects-card">
          <div className="startup-section-heading startup-projects-heading">
            <div>
              <h2>پروژه‌های من</h2>
              <p>پروژه‌های ثبت‌شده و وضعیت ارزیابی و اجرای آن‌ها از این بخش پیگیری می‌شود.</p>
            </div>
            <span className="startup-project-count">۱ پروژه</span>
          </div>

          <div className="startup-dashboard-project">
            <div className="startup-project-info">
              <h3>اشتغال زنان روستایی</h3>
              <p>کسب‌وکار و اشتغال&nbsp;&nbsp;·&nbsp;&nbsp;گلستان</p>
              <div className="startup-impact-summary">
                <strong>اثر پروژه:</strong>
                <span>۱۲۰ فرصت شغلی&nbsp;&nbsp;·&nbsp;&nbsp;۴۵۰ بهره‌مند&nbsp;&nbsp;·&nbsp;&nbsp;۲۵ روستا</span>
              </div>
            </div>

            <div className="startup-funding-summary">
              <span className="startup-project-status">مرحله دوم تأمین مالی</span>
              <div className="startup-funding-title"><strong>پیشرفت تأمین مالی</strong><span>۵۸٪</span></div>
              <div className="startup-progress-track"><span /></div>
              <div className="startup-funding-values"><span>۲۳۲ میلیون تومان</span><span>هدف: ۴۰۰ میلیون تومان</span></div>
            </div>

            <Link className="startup-view-project" to="/panel/startup/projects/1">مشاهده پروژه</Link>
          </div>

          <h3 className="startup-flow-title">مسیر هر پروژه</h3>
          <div className="startup-project-flow">
            {projectSteps.map((step) => (
              <div className={`startup-flow-step${step.active ? " is-active" : ""}`} key={step.number}>
                <span className="startup-flow-number">{step.number}</span>
                <div>
                  <strong>{step.title}</strong>
                  {step.hint ? <small>{step.hint}</small> : null}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
