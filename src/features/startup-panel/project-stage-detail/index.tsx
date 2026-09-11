import { Link, useLocation, useParams } from "react-router-dom";
import { StartupSidebar } from "../components/StartupSidebar";
import "../index.css";
import "./index.css";

const objectives = [
  "شناسایی زنان سرپرست خانوار واجد شرایط",
  "ارزیابی اولیه مهارت و ظرفیت تولید",
  "تطبیق افراد با شرایط پذیرش جامعه هدف",
  "تکمیل فهرست ۴۵۰ بهره‌مند واجد شرایط",
] as const;

const requirements = [
  ["گزارش اجرای مرحله", "شرح اقدامات انجام‌شده و نتیجه شناسایی و ارزیابی"],
  ["فهرست بهره‌مندان", "فهرست افراد واجد شرایط مرتبط با KPI مرحله"],
  ["مستندات پشتیبان", "اسناد و شواهد مرتبط با اجرای مرحله"],
] as const;

export default function StartupProjectStageDetail() {
  const { projectId = "rural-women", stageId = "1" } = useParams();
  const location = useLocation();
  const inProgress = location.pathname.endsWith("/in-progress");
  const projectPath = `/panel/startup/projects/${projectId}`;
  const stagesPath = `${projectPath}/stages`;
  const stagePath = `${stagesPath}/${stageId}`;
  const reportPath = `${stagePath}/report`;

  return (
    <div
      className={`startup-panel-page startup-stage-detail-page${inProgress ? " is-in-progress" : " is-ready"}`}
      data-node-id={inProgress ? "2047:2" : "2037:2"}
      data-name={inProgress ? "startup-project-stage-in-progress" : "startup-project-stage-detail"}
    >
      <StartupSidebar active="stages" />

      <main className="startup-dashboard-content startup-stage-detail-content">
        <header className="startup-stage-detail-topbar">
          <div className="startup-stage-detail-title">
            <h1>جزئیات مرحله پروژه</h1>
            <p>مرحله ۱ از پروژه اشتغال زنان روستایی</p>
          </div>
          <Link className="startup-stage-detail-back" to={stagesPath}>بازگشت به مراحل</Link>
        </header>

        <section className="startup-stage-summary" data-name="stage-summary">
          <div className="startup-stage-summary-main">
            <h2>شناسایی و ارزیابی</h2>
            <p>پروژه: اشتغال زنان روستایی</p>
            <span className={`startup-stage-state-chip${inProgress ? " is-progress" : " is-ready"}`}>
              {inProgress ? "در حال اجرا" : "آماده شروع"}
            </span>
            <dl className="startup-stage-summary-facts">
              <div><dt>بازه زمانی</dt><dd>ماه اول</dd></div>
              <div><dt>سهم مرحله از منابع</dt><dd>۲۰٪</dd></div>
              {!inProgress && <div><dt>وضعیت مرحله</dt><dd>آماده شروع</dd></div>}
            </dl>
          </div>

          <div className={`startup-stage-kpi-summary${inProgress ? " is-boxed" : ""}`}>
            <span>KPI آزادسازی مرحله</span>
            <strong>شناسایی ۴۵۰ بهره‌مند واجد شرایط</strong>
            <p>{inProgress ? "پس از پایان مرحله، مقدار تحقق این شاخص همراه گزارش و مستندات ثبت می‌شود." : "تحقق این شاخص باید در گزارش مرحله مستند شود."}</p>
          </div>
        </section>

        <div className="startup-stage-detail-two-column">
          <section className="startup-stage-objectives" data-name="stage-objectives">
            <h2>هدف و خروجی‌های مرحله</h2>
            <p>این مرحله برای شناسایی و ارزیابی اولیه جامعه هدف پروژه انجام می‌شود تا فهرست بهره‌مندان واجد شرایط برای ورود به مراحل بعدی مشخص شود.</p>
            <ul>
              {objectives.map((objective) => <li key={objective}>{objective}</li>)}
            </ul>
          </section>

          <section className="startup-stage-resource" data-name="stage-state-and-resource">
            <h2>وضعیت مرحله و منابع</h2>
            <dl>
              <div><dt>وضعیت اجرا</dt><dd className={inProgress ? "is-blue" : "is-green"}>{inProgress ? "در حال اجرا" : "آماده شروع"}</dd></div>
              <div><dt>وضعیت آزادسازی</dt><dd className="is-amber">پس از ارزیابی مرحله</dd></div>
              <div><dt>سهم این مرحله از منابع</dt><dd>۲۰٪</dd></div>
              <div><dt>مرجع ارزیابی</dt><dd>خانه خلاق و نوآوری آینه</dd></div>
            </dl>
            <p>جزئیات مالی مرحله طبق وضعیت تأییدشده پروژه نمایش داده می‌شود.</p>
          </section>
        </div>

        <section className="startup-stage-requirements" data-name="reporting-requirements">
          <h2>{inProgress ? "گزارش و مستندات موردنیاز برای ارسال" : "گزارش و مستندات موردنیاز پس از اجرای مرحله"}</h2>
          <p>{inProgress ? "برای ارزیابی این مرحله، گزارش اجرا و شواهد مرتبط باید برای خانه خلاق و نوآوری آینه ارسال شود." : "پس از پایان این مرحله، گزارش اجرا و شواهد مرتبط برای ارزیابی خانه خلاق و نوآوری آینه ارسال می‌شود."}</p>
          <div className="startup-stage-requirements-grid">
            {requirements.map(([title, description]) => (
              <div key={title}>
                <strong>{title}</strong>
                <span>{description}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="startup-stage-action-card" data-name="stage-start-action">
          <div>
            <h2>{inProgress ? "مرحله در حال اجرا است" : "مرحله آماده شروع است"}</h2>
            <p>پس از شروع، وضعیت مرحله به «در حال اجرا» تغییر می‌کند. پس از پایان اجرا، گزارش و مستندات مرحله از همین مسیر ارسال می‌شود.</p>
          </div>
          <div className="startup-stage-action-buttons">
            {inProgress ? (
              <Link className="startup-stage-primary-action is-wide" to={reportPath}>ثبت گزارش و مستندات مرحله</Link>
            ) : (
              <Link className="startup-stage-primary-action" to={`${stagePath}/in-progress`}>شروع اجرای مرحله</Link>
            )}
            <Link className="startup-stage-secondary-action" to={projectPath}>مشاهده پروژه</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
