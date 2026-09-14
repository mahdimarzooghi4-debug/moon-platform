import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AdminSidebar } from "../components/AdminSidebar";
import { downloadCsv } from "../export-csv";
import { listAdminManagedProjects } from "../management-api";
import {
  ADMIN_PROJECT_STORE_CHANGED,
  readAdminProjects,
  type AdminProjectRecord,
} from "../project-store";
import "../index.css";
import "../users-flow.css";
import "../list-flow.css";

const ASSET_ROOT = "/assets/admin-panel";
const numberFa = new Intl.NumberFormat("fa-IR");
const isDevelopment = Boolean(import.meta.env.DEV);

function toProjectRecord(item: Awaited<ReturnType<typeof listAdminManagedProjects>>[number]): AdminProjectRecord {
  return {
    id: item.id,
    name: item.name,
    province: item.province,
    track: item.track,
    fundingPercent: item.fundingPercent,
    fundingTarget: item.fundingTarget,
    status: item.status,
    stage: item.stage,
  };
}

export default function AdminProjects() {
  const [projects, setProjects] = useState<AdminProjectRecord[]>(() => readAdminProjects());
  const [query, setQuery] = useState("");
  const [province, setProvince] = useState("");
  const [status, setStatus] = useState("");
  const [sourceMessage, setSourceMessage] = useState("");

  useEffect(() => {
    let active = true;
    const refreshFallback = () => {
      if (active && isDevelopment) setProjects(readAdminProjects());
    };

    listAdminManagedProjects()
      .then((items) => {
        if (!active) return;
        setProjects(items.map(toProjectRecord));
        setSourceMessage("");
      })
      .catch(() => {
        if (!active) return;
        if (isDevelopment) {
          setProjects(readAdminProjects());
          setSourceMessage("Backend در دسترس نیست؛ داده نمونه توسعه نمایش داده می‌شود.");
        } else {
          setProjects([]);
          setSourceMessage("دریافت پروژه‌ها از سرور انجام نشد.");
        }
      });

    window.addEventListener(ADMIN_PROJECT_STORE_CHANGED, refreshFallback);
    window.addEventListener("storage", refreshFallback);
    return () => {
      active = false;
      window.removeEventListener(ADMIN_PROJECT_STORE_CHANGED, refreshFallback);
      window.removeEventListener("storage", refreshFallback);
    };
  }, []);

  const provinces = useMemo(() => Array.from(new Set(projects.map((item) => item.province))), [projects]);
  const filtered = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("fa");
    return projects.filter((item) => {
      const matchesQuery = !normalized || item.name.toLocaleLowerCase("fa").includes(normalized) || item.track.toLocaleLowerCase("fa").includes(normalized);
      const matchesProvince = !province || item.province === province;
      const matchesStatus = !status || item.status === status;
      return matchesQuery && matchesProvince && matchesStatus;
    });
  }, [projects, province, query, status]);

  const activeCount = projects.filter((item) => item.status === "فعال").length;
  const averageFunding = projects.length ? Math.round(projects.reduce((sum, item) => sum + item.fundingPercent, 0) / projects.length) : 0;

  const exportProjects = () => {
    downloadCsv("admin-projects", [
      { label: "نام پروژه", value: (item) => item.name },
      { label: "حوزه", value: (item) => item.track },
      { label: "استان", value: (item) => item.province },
      { label: "وضعیت", value: (item) => item.status },
      { label: "تأمین مالی (%)", value: (item) => item.fundingPercent },
      { label: "هدف تأمین", value: (item) => item.fundingTarget },
      { label: "مرحله", value: (item) => item.stage },
    ], filtered);
  };

  return (
    <div className="admin-panel-shell" data-node-id="2252:185">
      <main className="admin-users-main" dir="rtl">
        <header className="admin-users-header">
          <div className="admin-users-heading"><h1>پروژه‌ها</h1><p>پایش و مدیریت اطلاعات پروژه‌ها، تأمین مالی و روند اجرای طرح‌ها</p></div>
          <div className="admin-users-actions"><button className="admin-users-button" type="button" onClick={exportProjects}>خروجی پروژه‌ها</button></div>
        </header>

        <section className="admin-users-kpis" aria-label="شاخص‌های پروژه‌ها">
          <article className="admin-users-kpi"><img src={`${ASSET_ROOT}/users-active.svg`} alt="" /><span>پروژه‌های فعال</span><strong>{numberFa.format(activeCount)}</strong><small>وضعیت فعال در فهرست مدیریتی</small></article>
          <article className="admin-users-kpi"><img src={`${ASSET_ROOT}/users-roles.svg`} alt="" /><span>کل پروژه‌ها</span><strong>{numberFa.format(projects.length)}</strong><small>قابل مشاهده و ویرایش توسط مدیر</small></article>
          <article className="admin-users-kpi"><img src={`${ASSET_ROOT}/users-review.svg`} alt="" /><span>استان‌ها</span><strong>{numberFa.format(provinces.length)}</strong><small>پراکندگی جغرافیایی پروژه‌ها</small></article>
          <article className="admin-users-kpi"><img src={`${ASSET_ROOT}/users-blocked.svg`} alt="" /><span>میانگین تأمین</span><strong>{numberFa.format(averageFunding)}٪</strong><small>میانگین پیشرفت تأمین مالی</small></article>
        </section>

        <section className="admin-users-toolbar">
          <input className="admin-users-control" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="جستجو در نام پروژه یا حوزه" />
          <select className="admin-users-control" value={province} onChange={(event) => setProvince(event.target.value)}><option value="">همه استان‌ها</option>{provinces.map((item) => <option key={item} value={item}>{item}</option>)}</select>
          <select className="admin-users-control" value={status} onChange={(event) => setStatus(event.target.value)}><option value="">همه وضعیت‌ها</option><option value="فعال">فعال</option><option value="در انتظار گزارش">در انتظار گزارش</option><option value="متوقف">متوقف</option></select>
          <div className="admin-users-count">{numberFa.format(filtered.length)} پروژه</div>
        </section>

        <section className="admin-users-table-card admin-list-table-compact">
          <h2>فهرست پروژه‌ها</h2><p>مدیر می‌تواند پروژه را باز کند، اطلاعات مدیریتی را تغییر دهد و از نتیجه فیلترشده خروجی بگیرد.</p>
          {sourceMessage ? <p className="admin-form-actions-note">{sourceMessage}</p> : null}
          <div className="admin-users-table">
            <div className="admin-users-row admin-users-table-head"><span>پروژه / حوزه</span><span>استان</span><span>وضعیت</span><span>تأمین مالی</span><span>مرحله</span><span>اقدام</span></div>
            {filtered.map((project) => (
              <div className="admin-users-row" key={project.id}>
                <div className="admin-user-cell"><strong>{project.name}</strong><small>حوزه: {project.track}</small></div>
                <span>{project.province}</span>
                <span className={`admin-status-pill ${project.status === "فعال" ? "admin-status-active" : "admin-status-review"}`}>{project.status}</span>
                <span>{numberFa.format(project.fundingPercent)}٪</span>
                <span className="admin-access-pill admin-access-full">{project.stage}</span>
                <Link className="admin-user-action" to={`/panel/admin/projects/${project.id}`}>مشاهده / ویرایش</Link>
              </div>
            ))}
            <div className="admin-pagination"><span>نمایش {numberFa.format(filtered.length)} پروژه</span><div className="admin-pagination-controls"><button className="admin-page-control" type="button" disabled>‹</button><span className="admin-page-number">۱</span><button className="admin-page-control" type="button" disabled>›</button></div></div>
          </div>
        </section>
        <aside className="admin-info-note">اطلاعات مدیریتی پروژه از API پنل مدیر خوانده و ذخیره می‌شود؛ ارزیابی تخصصی و تصمیم فنی همچنان در نقش خانه خلاق انجام می‌شود.</aside>
      </main>
      <AdminSidebar active="projects" />
    </div>
  );
}
