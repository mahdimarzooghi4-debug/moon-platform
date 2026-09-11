import { Link } from "react-router-dom";
import { StartupSidebar } from "../components/StartupSidebar";
import "../index.css";
import "./index.css";

const flowSteps = [
  { number: "۱", title: "ارسال پروژه", status: "انجام شد", state: "done" },
  { number: "۲", title: "ارزیابی پروژه", status: "در حال بررسی", state: "active" },
  { number: "۳", title: "اعلام نتیجه", status: "پس از ارزیابی", state: "pending" },
  { number: "۴", title: "شروع اجرای مرحله", status: "پس از تأیید پروژه", state: "pending" },
] as const;

export default function StartupProjectSubmitted() {
  return (
    <div className="startup-panel-page" data-node-id="2025:2" data-name="startup-project-submitted">
      <StartupSidebar active="projects" />

      <main className="startup-dashboard-content startup-submitted-content">
        <header className="startup-topbar">
          <div className="startup-page-title">
            <h1>ارسال پروژه</h1>
            <p>پروژه برای ارزیابی ثبت شد</p>
          </div>
          <div className="startup-top-actions">
            <Link className="startup-button startup-button-secondary startup-submitted-back" to="/panel/startup/projects">
              بازگشت به پروژه‌ها
            </Link>
          </div>
        </header>

        <section className="startup-submitted-card" data-name="project-submission-status">
          <div className="startup-submitted-success" aria-hidden="true">✓</div>
          <h2>پروژه برای ارزیابی ارسال شد</h2>
          <p className="startup-submitted-lead">
            اطلاعات پروژه ثبت شده و برای بررسی به خانه خلاق و نوآوری آینه ارسال شده است.
          </p>
          <span className="startup-submitted-status">در انتظار ارزیابی پروژه</span>

          <div className="startup-submitted-notice" data-name="evaluation-notice">
            <strong>مرحله بعدی: ارزیابی پروژه</strong>
            <p>تا پیش از تأیید پروژه، اجرای مراحل پروژه آغاز نمی‌شود. نتیجه ارزیابی از پنل قابل پیگیری است.</p>
          </div>

          <h3 className="startup-submitted-flow-title">مسیر بعد از ارسال پروژه</h3>
          <div className="startup-submitted-flow">
            {flowSteps.map((step) => (
              <div className={`startup-submitted-flow-step is-${step.state}`} key={step.number}>
                <span className="startup-submitted-flow-number">{step.number}</span>
                <div>
                  <strong>{step.title}</strong>
                  <small>{step.status}</small>
                </div>
              </div>
            ))}
          </div>

          <div className="startup-submitted-evaluator" data-name="evaluator-info">
            <span>مرجع ارزیابی</span>
            <strong>خانه خلاق و نوآوری آینه</strong>
          </div>

          <div className="startup-submitted-actions">
            <Link className="startup-submitted-primary" to="/panel/startup/projects">مشاهده پروژه‌های من</Link>
            <Link className="startup-submitted-secondary" to="/panel/startup">بازگشت به داشبورد</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
