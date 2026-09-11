import { Link, useParams } from "react-router-dom";
import { StageLifecycleFlow } from "../components/StageLifecycleFlow";
import { StartupSidebar } from "../components/StartupSidebar";
import "../index.css";
import "./index.css";

const evaluationItems = [
  "گزارش اجرای مرحله",
  "KPI و شواهد",
  "فهرست بهره‌مندان",
  "مستندات پشتیبان",
] as const;

export default function StartupStageEvaluationApproved() {
  const { projectId = "rural-women", stageId = "1" } = useParams();
  const projectPath = `/panel/startup/projects/${projectId}`;
  const stagesPath = `${projectPath}/stages`;
  const stagePath = `${stagesPath}/${stageId}`;
  const submittedReportPath = `${stagePath}/report/submitted`;
  const fundReleasePath = `${stagePath}/report/fund-released`;

  return (
    <div
      className="startup-panel-page startup-stage-evaluation-page"
      data-node-id="2056:2"
      data-name="startup-stage-evaluation-approved"
    >
      <StartupSidebar active="reports" />

      <main className="startup-stage-evaluation-content">
        <header className="startup-stage-evaluation-topbar">
          <div>
            <h1>نتیجه ارزیابی مرحله</h1>
            <p>نتیجه بررسی گزارش و مستندات مرحله توسط خانه خلاق و نوآوری آینه</p>
          </div>
          <Link to={submittedReportPath}>بازگشت به گزارش</Link>
        </header>

        <section className="startup-stage-evaluation-summary" data-name="evaluation-result-summary">
          <div className="startup-stage-evaluation-summary-head">
            <div>
              <h2>شناسایی و ارزیابی</h2>
              <p>پروژه: اشتغال زنان روستایی</p>
            </div>
            <span>تأیید شده توسط آینه</span>
          </div>
          <p className="startup-stage-evaluation-lead">
            گزارش و مستندات این مرحله بررسی شده و مرحله از نظر ارزیابی واجد شرایط آزادسازی وجه است.
          </p>
          <dl>
            <div><dt>هدف KPI</dt><dd>۴۵۰ بهره‌مند واجد شرایط</dd></div>
            <div><dt>سهم مرحله</dt><dd>۲۰٪</dd></div>
            <div><dt>نتیجه ارزیابی</dt><dd className="is-green">تأیید شده</dd></div>
            <div><dt>وضعیت مالی</dt><dd className="is-amber">در انتظار آزادسازی وجه</dd></div>
          </dl>
        </section>

        <section className="startup-stage-evaluation-process" data-name="post-evaluation-process">
          <h2>مسیر مرحله پس از ارزیابی</h2>
          <p>سه گام اول تکمیل شده‌اند؛ آزادسازی وجه توسط کمیته امداد انجام می‌شود.</p>
          <StageLifecycleFlow mode="approved" fundReleasePath={fundReleasePath} />
        </section>

        <div className="startup-stage-evaluation-cards">
          <section className="startup-stage-evaluation-details" data-name="evaluation-details">
            <h2>نتیجه ارزیابی آینه</h2>
            <p>نتیجه بررسی اجزای گزارش مرحله</p>
            <dl>
              {evaluationItems.map((item) => (
                <div key={item}>
                  <dt>{item}</dt>
                  <dd>تأیید شد</dd>
                </div>
              ))}
            </dl>
            <div className="startup-stage-evaluation-note">مرحله از نظر ارزیابی واجد شرایط آزادسازی وجه است.</div>
          </section>

          <section className="startup-stage-evaluation-fund" data-name="fund-release-status">
            <h2>وضعیت آزادسازی وجه</h2>
            <dl>
              <div><dt>مرجع آزادسازی</dt><dd>کمیته امداد</dd></div>
              <div><dt>وضعیت</dt><dd className="is-amber">در انتظار آزادسازی</dd></div>
              <div><dt>سهم این مرحله از منابع</dt><dd>۲۰٪</dd></div>
            </dl>
            <div className="startup-stage-evaluation-fund-note">پس از آزادسازی، گزارش اثر مرحله منتشر و مرحله بعد فعال می‌شود.</div>
          </section>
        </div>

        <section className="startup-stage-evaluation-actions" data-name="approved-stage-actions">
          <div>
            <h2>مرحله تأیید شده است</h2>
            <p>در حال حاضر اقدامی از سمت استارتاپ لازم نیست؛ وضعیت آزادسازی وجه از همین مسیر قابل پیگیری است.</p>
          </div>
          <div className="startup-stage-evaluation-buttons">
            <Link className="is-primary" to={stagesPath}>مشاهده مراحل پروژه</Link>
            <Link className="is-secondary" to={submittedReportPath}>مشاهده گزارش ارسال‌شده</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
