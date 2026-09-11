import { Link, useParams } from "react-router-dom";
import { StageLifecycleFlow } from "../components/StageLifecycleFlow";
import { StartupSidebar } from "../components/StartupSidebar";
import "../index.css";
import "./index.css";

export default function StartupStageFundReleased() {
  const { projectId = "rural-women", stageId = "1" } = useParams();
  const projectPath = `/panel/startup/projects/${projectId}`;
  const stagesPath = `${projectPath}/stages`;
  const stagePath = `${stagesPath}/${stageId}`;
  const evaluationPath = `${stagePath}/report/evaluation/approved`;

  return (
    <div
      className="startup-panel-page startup-stage-fund-released-page"
      data-node-id="2060:2"
      data-name="startup-stage-fund-released"
    >
      <StartupSidebar active="reports" />

      <main className="startup-stage-fund-released-content">
        <header className="startup-stage-fund-released-topbar">
          <div>
            <h1>آزادسازی وجه مرحله</h1>
            <p>تأیید آزادسازی منابع مرحله و فعال‌شدن مرحله بعد</p>
          </div>
          <Link to={evaluationPath}>بازگشت به نتیجه ارزیابی</Link>
        </header>

        <section className="startup-stage-fund-released-summary" data-name="fund-release-summary">
          <div className="startup-stage-fund-released-summary-head">
            <div>
              <h2>آزادسازی وجه مرحله انجام شد</h2>
              <p>پروژه: اشتغال زنان روستایی · مرحله اول: شناسایی و ارزیابی</p>
            </div>
            <span>آزاد شده توسط کمیته امداد</span>
          </div>
          <p className="startup-stage-fund-released-lead">
            پس از تأیید ارزیابی مرحله توسط خانه خلاق و نوآوری آینه، آزادسازی سهم این مرحله توسط کمیته امداد انجام شده و مرحله بعد برای اجرا فعال است.
          </p>
          <dl>
            <div><dt>مرحله تکمیل‌شده</dt><dd className="is-green">شناسایی و ارزیابی</dd></div>
            <div><dt>سهم مرحله از منابع</dt><dd>۲۰٪</dd></div>
            <div><dt>نتیجه ارزیابی</dt><dd className="is-green">تأیید شده</dd></div>
            <div><dt>وضعیت مالی</dt><dd className="is-green">آزادسازی انجام شد</dd></div>
          </dl>
        </section>

        <section className="startup-stage-fund-released-flow" data-name="release-flow">
          <h2>تکمیل چرخه مرحله اول</h2>
          <p>همه گام‌های مرحله اول تکمیل شده‌اند و پروژه می‌تواند وارد مرحله اجرایی بعدی شود.</p>
          <StageLifecycleFlow mode="released" />
        </section>

        <div className="startup-stage-fund-released-cards">
          <section className="startup-stage-fund-released-next" data-name="next-stage-card">
            <div className="startup-stage-fund-released-next-head">
              <div>
                <h2>مرحله دوم فعال شد</h2>
                <strong>آموزش مهارتی</strong>
              </div>
              <span>آماده شروع</span>
            </div>
            <p>پس از تکمیل مرحله اول، مرحله دوم برای شروع اجرا در دسترس قرار گرفته است.</p>
            <dl>
              <div><dt>بازه زمانی</dt><dd>ماه ۲ تا ۴</dd></div>
              <div><dt>سهم مرحله</dt><dd>۲۵٪</dd></div>
              <div className="is-wide"><dt>KPI آزادسازی</dt><dd>تکمیل آموزش ۹۰٪ افراد انتخاب‌شده</dd></div>
            </dl>
            <Link to={stagesPath}>مشاهده مراحل پروژه</Link>
          </section>

          <section className="startup-stage-fund-released-completed" data-name="completed-stage-card">
            <h2>مرحله اول تکمیل شد</h2>
            <dl>
              <div><dt>وضعیت اجرا</dt><dd>تکمیل شده</dd></div>
              <div><dt>ارزیابی آینه</dt><dd>تأیید شده</dd></div>
              <div><dt>آزادسازی وجه</dt><dd>انجام شده</dd></div>
              <div><dt>گزارش اثر مرحله</dt><dd>منتشر شده</dd></div>
            </dl>
            <div>این مرحله بسته شده و سابقه گزارش و ارزیابی آن قابل پیگیری است.</div>
          </section>
        </div>

        <section className="startup-stage-fund-released-actions" data-name="next-action">
          <div>
            <h2>پروژه آماده ادامه اجراست</h2>
            <p>مرحله اول تکمیل و وجه آن آزاد شده است. از اینجا می‌توانید مراحل پروژه را ببینید و اجرای مرحله دوم را ادامه دهید.</p>
          </div>
          <div className="startup-stage-fund-released-buttons">
            <Link className="is-primary" to={stagesPath}>مشاهده مراحل پروژه</Link>
            <Link className="is-secondary" to={projectPath}>مشاهده پروژه</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
