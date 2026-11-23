import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { StartupSidebar } from "../components/StartupSidebar";
import { currentProjectVersion, formatProjectStatus, getStartupOrganizationId, getStartupProject } from "../projects/api";
import type { StartupProject } from "../projects/api";
import "../index.css";
import "../funding-transfer-status.css";
import "./index.css";

type ProposalSteps = Record<string, Record<string, string[]>>;

const faNumber = (value: number) => new Intl.NumberFormat("fa-IR").format(value);

function stepsFrom(value: unknown): ProposalSteps {
  if (!value || typeof value !== "object") return {};
  const steps = (value as { steps?: unknown }).steps;
  return steps && typeof steps === "object" ? steps as ProposalSteps : {};
}

function values(steps: ProposalSteps, step: number, field: string) {
  return steps[String(step)]?.[field] ?? [];
}

export default function StartupProjectDetail() {
  const { projectId = "" } = useParams();
  const [project, setProject] = useState<StartupProject | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    getStartupOrganizationId()
      .then(({ accessToken }) => getStartupProject(projectId, accessToken))
      .then((result) => { if (!cancelled) setProject(result); })
      .catch(() => { if (!cancelled) setError("جزئیات پروژه دریافت نشد. دسترسی حساب استارتاپ را بررسی کنید."); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [projectId]);

  const version = project ? currentProjectVersion(project) : null;
  const proposal = stepsFrom(version?.proposalData);
  const phases = values(proposal, 2, "عنوان فاز");
  const phaseStarts = values(proposal, 2, "تاریخ شروع");
  const phaseEnds = values(proposal, 2, "تاریخ پایان");
  const kpis = values(proposal, 3, "عنوان شاخص");
  const kpiTargets = values(proposal, 3, "مقدار هدف");
  const kpiUnits = values(proposal, 3, "واحد سنجش");
  const kpiMethods = values(proposal, 3, "روش سنجش");
  const projectTitle = version?.title ?? "جزئیات پروژه";

  return (
    <div className="startup-panel-page" data-node-id="2028:2" data-name="startup-project-detail">
      <StartupSidebar active="projects" />
      <main className="startup-dashboard-content startup-project-detail-content">
        <header className="startup-topbar">
          <div className="startup-page-title">
            <h1>جزئیات پروژه</h1>
            <p>مشخصات و اطلاعات ثبت‌شده پروژه</p>
          </div>
          <div className="startup-top-actions">
            <Link className="startup-button startup-button-secondary" to="/panel/startup/projects">بازگشت به پروژه‌ها</Link>
          </div>
        </header>

        {loading ? <p className="startup-projects-message">در حال دریافت جزئیات پروژه…</p> : null}
        {error ? <p className="startup-projects-message is-error" role="alert">{error}</p> : null}

        {project && version ? <>
          <section className="startup-project-detail-summary" data-name="project-summary">
            <div className="startup-project-detail-main-copy">
              <h2>{projectTitle}</h2>
              <p>{version.description}</p>
              <div className="startup-project-detail-chips">
                <span>{formatProjectStatus(project.status)}</span>
                <span>نسخه {faNumber(version.versionNumber)}</span>
              </div>
              <dl className="startup-project-detail-facts">
                <div><dt>حوزه اثر اجتماعی</dt><dd>{values(proposal, 1, "حوزه اثر اجتماعی")[0] || "ثبت نشده"}</dd></div>
                <div><dt>منطقه اجرا</dt><dd>{values(proposal, 1, "موقعیت / منطقه اجرا")[0] || "ثبت نشده"}</dd></div>
                <div><dt>جامعه هدف</dt><dd>{values(proposal, 1, "جامعه هدف")[0] || "ثبت نشده"}</dd></div>
                <div><dt>تاریخ ثبت</dt><dd>{new Date(project.createdAtUtc).toLocaleDateString("fa-IR")}</dd></div>
              </dl>
            </div>
            <div className="startup-project-detail-funding">
              <div className="startup-project-detail-funding-heading"><strong>بودجه درخواستی</strong></div>
              <div className="startup-project-detail-funding-numbers">
                <strong>{version.fundingTargetMinor ? `${faNumber(Math.round(version.fundingTargetMinor / 10))} تومان` : "ثبت نشده"}</strong>
                <span>هدف: {values(proposal, 3, "بودجه کل پروژه (تومان)")[0] || "ثبت نشده"}</span>
              </div>
            </div>
          </section>

          <div className="startup-project-detail-row">
            <section className="startup-project-detail-evaluation" data-name="evaluation-status">
              <h2>وضعیت ارزیابی پروژه</h2>
              <div className="startup-project-detail-evaluation-grid">
                <div><span>وضعیت</span><strong>{formatProjectStatus(project.status)}</strong></div>
                <div><span>زمان ارسال</span><strong>{project.submittedAtUtc ? new Date(project.submittedAtUtc).toLocaleDateString("fa-IR") : "هنوز ارسال نشده"}</strong></div>
              </div>
              <p>نتیجه ارزیابی و اجرای مراحل پس از ثبت توسط مرجع ارزیابی در این بخش نمایش داده می‌شود.</p>
            </section>
            <section className="startup-project-detail-impact" data-name="target-impact">
              <h2>شاخص‌های اثر ثبت‌شده</h2>
              {kpis.length ? <div className="startup-project-detail-impact-grid">
                {kpis.map((label, index) => <div key={`${label}-${index}`}>
                  <strong>{kpiTargets[index] || "—"}</strong>
                  <span>{label}{kpiUnits[index] ? ` · ${kpiUnits[index]}` : ""}</span>
                  {kpiMethods[index] ? <small>{kpiMethods[index]}</small> : null}
                </div>)}
              </div> : <p>هنوز شاخصی ثبت نشده است.</p>}
            </section>
          </div>

          <section className="startup-project-detail-execution" data-name="execution-plan">
            <div className="startup-project-detail-section-heading"><h2>برنامه اجرای پروژه</h2><p>فازهای زمانی ثبت‌شده</p></div>
            <div className="startup-project-detail-steps">
              {phases.length ? phases.map((title, index) => <div className={`startup-project-detail-step${index === 0 ? " is-active" : ""}`} key={`${title}-${index}`}>
                <span className="startup-project-detail-step-number">{faNumber(index + 1)}</span>
                <div><strong>{title}</strong><small>{phaseStarts[index] || "—"} تا {phaseEnds[index] || "—"}</small></div>
              </div>) : <p>هنوز فازی ثبت نشده است.</p>}
            </div>
          </section>

          <section className="startup-project-detail-problem" data-name="problem-solution">
            <h2>مسئله و راهکار پروژه</h2>
            <div className="startup-project-detail-problem-grid">
              <div><strong>مسئله</strong><p>{values(proposal, 1, "مسئله مشخص")[0] || "ثبت نشده"}</p></div>
              <div><strong>راهکار</strong><p>{values(proposal, 2, "راهکار اجرایی")[0] || "ثبت نشده"}</p></div>
            </div>
            <div className="startup-project-detail-problem-grid">
              <div><strong>ریسک‌ها</strong><p>{values(proposal, 4, "ریسک‌های اصلی و راهکار کاهش")[0] || "ثبت نشده"}</p></div>
              <div><strong>برنامه گزارش‌دهی</strong><p>{values(proposal, 4, "زمان ارسال گزارش")[0] || "ثبت نشده"} · {values(proposal, 4, "نوع مستندات")[0] || "نوع مستندات ثبت نشده"}</p></div>
            </div>
          </section>
        </> : null}
      </main>
    </div>
  );
}
