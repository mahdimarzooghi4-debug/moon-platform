import { Link } from "react-router-dom";
import { StartupSidebar } from "../components/StartupSidebar";
import "../index.css";
import "./index.css";

const ASSET_ROOT = "/assets/startup-panel";

const lifecycleSteps = [
  { number: "۱", title: "تعریف پروژه" },
  { number: "۲", title: "ارزیابی پروژه" },
  { number: "۳", title: "اجرای مرحله" },
  { number: "۴", title: "ارسال گزارش و مستندات" },
  { number: "۵", title: "ارزیابی مرحله" },
  { number: "۶", title: "آزادسازی وجه" },
  { number: "۷", title: "انتشار گزارش اثر" },
];

export default function StartupMyProjects() {
  return (
    <div className="startup-panel-page" data-node-id="1973:2" data-name="startup-my-projects">
      <StartupSidebar active="projects" />

      <main className="startup-dashboard-content startup-my-projects-content">
        <header className="startup-topbar">
          <div className="startup-page-title">
            <h1>پروژه‌های من</h1>
            <p>مدیریت پروژه‌های ثبت‌شده و پیگیری وضعیت ارزیابی و اجرا</p>
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

        <section className="startup-projects-summary" data-node-id="1973:171" data-name="projects-summary">
          <div>
            <h2>پروژه‌های من</h2>
            <p>پروژه ثبت‌شده و وضعیت ارزیابی، اجرای مراحل، گزارش‌ها و تأمین مالی آن از این بخش پیگیری می‌شود.</p>
            <small>۱ پروژه فعال&nbsp;&nbsp;•&nbsp;&nbsp;آخرین وضعیت: مرحله دوم تأمین مالی</small>
          </div>
          <span>۱ پروژه</span>
        </section>

        <section className="startup-project-list-card" data-node-id="1973:177" data-name="projects-list">
          <div className="startup-project-list-header">
            <div className="startup-project-list-title">
              <h2>اشتغال زنان روستایی</h2>
              <p>کسب‌وکار و اشتغال&nbsp;&nbsp;•&nbsp;&nbsp;گلستان</p>
            </div>
            <span className="startup-project-stage-chip">مرحله دوم تأمین مالی</span>
          </div>

          <div className="startup-project-impact-metrics" data-node-id="1984:6" data-name="project-metrics">
            <strong>اثر پروژه</strong>
            <div>
              <span>۱۲۰ فرصت شغلی</span>
              <span>۴۵۰ فرد بهره‌مند</span>
              <span>۲۵ روستا</span>
            </div>
          </div>

          <div className="startup-project-funding" data-node-id="1984:12" data-name="funding-progress">
            <div className="startup-project-funding-main">
              <div className="startup-project-funding-heading">
                <strong>پیشرفت تأمین مالی</strong>
                <span>۵۸٪</span>
              </div>
              <div className="startup-project-funding-row">
                <span className="startup-funding-current">۲۳۲ میلیون تومان</span>
                <div className="startup-list-progress-track"><span /></div>
                <span className="startup-funding-target">هدف: ۴۰۰ میلیون تومان</span>
              </div>
            </div>
            <Link className="startup-project-detail-button" to="/panel/startup/projects/1">
              مشاهده جزئیات پروژه
            </Link>
          </div>
        </section>

        <section className="startup-lifecycle-guide" data-node-id="1973:188" data-name="project-lifecycle-guide">
          <div className="startup-lifecycle-heading">
            <h2>مسیر هر پروژه</h2>
            <p>هر پروژه پس از تأیید، مرحله‌به‌مرحله اجرا و ارزیابی می‌شود.</p>
          </div>

          <div className="startup-lifecycle-steps">
            {lifecycleSteps.map((step, index) => {
              const active = index === 0;
              return (
                <div className={`startup-lifecycle-step${active ? " is-active" : ""}`} key={step.number}>
                  <span className="startup-lifecycle-number">
                    <img
                      src={`${ASSET_ROOT}/${active ? "lifecycle-active.svg" : "lifecycle-default.svg"}`}
                      alt=""
                    />
                    <b>{step.number}</b>
                  </span>
                  <strong>{step.title}</strong>
                </div>
              );
            })}
          </div>

          <div className="startup-lifecycle-note">
            ثبت پروژه فقط پس از تأیید حساب استارتاپ فعال است. تأیید پروژه نیز پیش‌نیاز ورود به اجرای مرحله‌ای است.
          </div>
        </section>
      </main>
    </div>
  );
}
