import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StartupSidebar } from "../components/StartupSidebar";
import {
  currentProjectVersion,
  formatProjectStatus,
  getStartupOrganizationId,
  listStartupProjects,
} from "./api";
import type { StartupProject } from "./api";
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

const faNumber = (value: number) => new Intl.NumberFormat("fa-IR").format(value);

export default function StartupMyProjects() {
  const [projects, setProjects] = useState<StartupProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    getStartupOrganizationId()
      .then(({ organizationId, accessToken }) => listStartupProjects(organizationId, accessToken))
      .then((items) => { if (!cancelled) setProjects(items); })
      .catch(() => { if (!cancelled) setError("دریافت فهرست پروژه‌ها انجام نشد. ورود و دسترسی حساب استارتاپ را بررسی کنید."); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, []);

  const newest = projects[0];

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
            <p>پروژه‌های ثبت‌شده و وضعیت ارزیابی، اجرا و تأمین مالی از این بخش پیگیری می‌شود.</p>
            <small>
              {loading ? "در حال دریافت اطلاعات…" : error || (newest ? `آخرین وضعیت: ${formatProjectStatus(newest.status)}` : "هنوز پروژه‌ای ثبت نشده است.")}
            </small>
          </div>
          <span>{loading ? "—" : `${faNumber(projects.length)} پروژه`}</span>
        </section>

        {error ? <p className="startup-projects-message is-error" role="alert">{error}</p> : null}

        {projects.map((project) => {
          const version = currentProjectVersion(project);
          if (!version) return null;
          return (
            <section className="startup-project-list-card" data-name="projects-list-item" key={project.projectId}>
              <div className="startup-project-list-header">
                <div className="startup-project-list-title">
                  <h2>{version.title}</h2>
                  <p>نسخه {faNumber(version.versionNumber)} · {new Date(project.createdAtUtc).toLocaleDateString("fa-IR")}</p>
                </div>
                <span className="startup-project-stage-chip">{formatProjectStatus(project.status)}</span>
              </div>
              <p className="startup-project-description">{version.description}</p>
              <div className="startup-project-funding">
                <div className="startup-project-funding-main">
                  <strong>وضعیت ثبت پروژه</strong>
                  <span>{project.submittedAtUtc ? `ارسال‌شده در ${new Date(project.submittedAtUtc).toLocaleDateString("fa-IR")}` : "پیش‌نویس در سامانه ذخیره شده است"}</span>
                </div>
                <div className="startup-project-actions">
                  <Link className="startup-project-detail-button" to={`/panel/startup/projects/${project.projectId}`}>مشاهده جزئیات</Link>
                  {project.status === "draft" ? <Link className="startup-project-detail-button is-edit" to={`/panel/startup/projects/new?projectId=${encodeURIComponent(project.projectId)}`}>ادامه و ویرایش</Link> : null}
                </div>
              </div>
            </section>
          );
        })}

        {!loading && !error && projects.length === 0 ? (
          <section className="startup-projects-empty" data-name="projects-empty-state">
            <h2>هنوز پروژه‌ای ثبت نکرده‌اید</h2>
            <p>پروژه واقعی استارتاپ را ثبت کنید تا پس از ارسال، در همین فهرست پیگیری شود.</p>
            <Link className="startup-button startup-button-primary" to="/panel/startup/projects/new">ثبت اولین پروژه</Link>
          </section>
        ) : null}

        <section className="startup-lifecycle-guide" data-node-id="1973:188" data-name="project-lifecycle-guide">
          <div className="startup-lifecycle-heading">
            <h2>مسیر هر پروژه</h2>
            <p>هر پروژه پس از تأیید، مرحله‌به‌مرحله اجرا و ارزیابی می‌شود.</p>
          </div>

          <div className="startup-lifecycle-steps">
            {lifecycleSteps.map((item, index) => {
              const active = index === 0;
              return (
                <div className={`startup-lifecycle-step${active ? " is-active" : ""}`} key={item.number}>
                  <span className="startup-lifecycle-number">
                    <img src={`${ASSET_ROOT}/${active ? "lifecycle-active.svg" : "lifecycle-default.svg"}`} alt="" />
                    <b>{item.number}</b>
                  </span>
                  <strong>{item.title}</strong>
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
