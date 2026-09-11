import { Link, useParams } from "react-router-dom";
import { StartupSidebar } from "../components/StartupSidebar";
import "../index.css";
import "./index.css";

const evaluationSteps = [
  { number: "۱", title: "ارسال گزارش", status: "انجام شده", state: "done" },
  { number: "۲", title: "ارزیابی آینه", status: "در حال بررسی", state: "review" },
  { number: "۳", title: "اعلام نتیجه مرحله", status: "پس از ارزیابی", state: "next" },
  { number: "۴", title: "آزادسازی وجه مرحله", status: "در صورت تأیید", state: "pending" },
] as const;

const submittedItems = [
  ["گزارش اجرای مرحله", "ثبت شده"],
  ["مقدار تحقق KPI", "ثبت شده در گزارش"],
  ["فهرست بهره‌مندان", "ارسال شده"],
  ["مستندات پشتیبان", "ارسال شده"],
] as const;

export default function StartupStageReportSubmitted() {
  const { projectId = "rural-women", stageId = "1" } = useParams();
  const projectPath = `/panel/startup/projects/${projectId}`;
  const stagesPath = `${projectPath}/stages`;
  const stagePath = `${stagesPath}/${stageId}`;

  return (
    <div className="startup-panel-page startup-stage-report-submitted-page" data-node-id="2053:2" data-name="startup-stage-report-submitted">
      <StartupSidebar active="reports" />

      <main className="startup-stage-report-submitted-content">
        <header className="startup-stage-report-submitted-topbar">
          <div>
            <h1>گزارش مرحله ارسال شد</h1>
            <p>وضعیت بررسی گزارش و مستندات مرحله توسط خانه خلاق و نوآوری آینه</p>
          </div>
          <Link to={`${stagePath}/in-progress`}>بازگشت به مرحله</Link>
        </header>

        <section className="startup-stage-report-submitted-summary" data-name="submission-status">
          <div className="startup-stage-report-submitted-summary-head">
            <div>
              <h2>شناسایی و ارزیابی</h2>
              <p>پروژه: اشتغال زنان روستایی</p>
            </div>
            <span>در انتظار ارزیابی آینه</span>
          </div>
          <p className="startup-stage-report-submitted-lead">گزارش اجرای مرحله و مستندات مرتبط ثبت شده‌اند و اکنون برای بررسی به خانه خلاق و نوآوری آینه ارسال شده‌اند.</p>
          <dl>
            <div><dt>مرحله</dt><dd>شناسایی و ارزیابی</dd></div>
            <div><dt>هدف KPI</dt><dd>۴۵۰ بهره‌مند واجد شرایط</dd></div>
            <div><dt>سهم مرحله</dt><dd>۲۰٪</dd></div>
            <div><dt>وضعیت گزارش</dt><dd className="is-green">ارسال شده</dd></div>
          </dl>
        </section>

        <section className="startup-stage-report-submitted-flow" data-name="evaluation-flow">
          <h2>مسیر بررسی گزارش مرحله</h2>
          <p>تا پایان ارزیابی، وضعیت مرحله تغییر نمی‌کند و آزادسازی وجه انجام نمی‌شود.</p>
          <div className="startup-stage-report-submitted-flow-grid">
            {evaluationSteps.map((step) => (
              <div className={`startup-stage-report-submitted-flow-step is-${step.state}`} key={step.number}>
                <span>{step.number}</span>
                <div>
                  <strong>{step.title}</strong>
                  <small>{step.status}</small>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="startup-stage-report-submitted-cards">
          <section className="startup-stage-report-submitted-evaluation" data-name="evaluation-status-card">
            <h2>وضعیت ارزیابی</h2>
            <dl>
              <div><dt>مرجع ارزیابی</dt><dd>خانه خلاق و نوآوری آینه</dd></div>
              <div><dt>نتیجه ارزیابی</dt><dd className="is-amber">در انتظار بررسی</dd></div>
            </dl>
            <p>پس از بررسی KPI، گزارش اجرا و مستندات، نتیجه مرحله در همین بخش اعلام می‌شود.</p>
          </section>

          <section className="startup-stage-report-submitted-items" data-name="submitted-documents-card">
            <h2>موارد ارسال‌شده</h2>
            <dl>
              {submittedItems.map(([label, status]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{status}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>

        <section className="startup-stage-report-submitted-waiting" data-name="waiting-action">
          <div>
            <h2>گزارش در صف ارزیابی است</h2>
            <p>در صورت تأیید مرحله توسط آینه، کمیته امداد می‌تواند وجه مربوط به همین مرحله را آزاد کند و سپس مرحله بعدی پروژه فعال می‌شود.</p>
          </div>
          <div>
            <Link className="is-primary" to={stagesPath}>مشاهده مراحل پروژه</Link>
            <Link className="is-secondary" to={projectPath}>مشاهده پروژه</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
