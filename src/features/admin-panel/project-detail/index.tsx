import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AdminSidebar } from "../components/AdminSidebar";
import { getAdminManagedProject, saveAdminManagedProject } from "../management-api";
import { getAdminProject, updateAdminProject, type AdminProjectRecord } from "../project-store";
import "../index.css";
import "../users-flow.css";
import "../list-flow.css";

const isDevelopment = Boolean(import.meta.env.DEV);

function toProjectRecord(item: Awaited<ReturnType<typeof getAdminManagedProject>>): AdminProjectRecord {
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

export default function AdminProjectDetail() {
  const { projectId } = useParams();
  const [project, setProject] = useState<AdminProjectRecord | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    if (!projectId) {
      setError("شناسه پروژه معتبر نیست.");
      setLoading(false);
      return () => { active = false; };
    }

    getAdminManagedProject(projectId)
      .then((item) => {
        if (active) setProject(toProjectRecord(item));
      })
      .catch(() => {
        if (!active) return;
        const fallback = isDevelopment ? getAdminProject(projectId) : null;
        setProject(fallback);
        setError(fallback ? "Backend در دسترس نیست؛ داده fallback توسعه نمایش داده می‌شود." : "دریافت پروژه از سرور انجام نشد.");
      })
      .finally(() => { if (active) setLoading(false); });

    return () => { active = false; };
  }, [projectId]);

  const change = <K extends keyof AdminProjectRecord>(key: K, value: AdminProjectRecord[K]) => {
    if (!project) return;
    setProject({ ...project, [key]: value });
    setSaved(false);
  };

  const save = async () => {
    if (!project || saving) return;
    setSaving(true);
    setSaved(false);
    setError("");

    const input = {
      name: project.name.trim(),
      province: project.province.trim(),
      track: project.track.trim(),
      fundingPercent: Math.max(0, Math.min(100, Number(project.fundingPercent) || 0)),
      fundingTarget: project.fundingTarget.trim(),
      status: project.status,
      stage: project.stage.trim(),
    };

    try {
      const next = await saveAdminManagedProject(project.id, input);
      setProject(toProjectRecord(next));
      updateAdminProject(project.id, input);
      setSaved(true);
    } catch {
      if (isDevelopment) {
        const next = updateAdminProject(project.id, input);
        if (next) setProject(next);
        setSaved(Boolean(next));
        setError("Backend در دسترس نبود؛ تغییر فقط در fallback توسعه ثبت شد.");
      } else {
        setError("ذخیره تغییرات پروژه در سرور انجام نشد.");
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="admin-panel-shell" data-node-id="2273:338">
      <main className="admin-users-main" dir="rtl">
        <header className="admin-users-header">
          <div className="admin-users-heading"><h1>جزئیات پروژه</h1><p>مشاهده و ویرایش اطلاعات مدیریتی پروژه</p></div>
          <div className="admin-users-actions"><Link className="admin-users-button admin-users-button-wide" to="/panel/admin/projects">بازگشت به پروژه‌ها</Link></div>
        </header>

        {loading ? <section className="admin-form-card"><h2>در حال دریافت پروژه</h2><p>اطلاعات مدیریتی از Backend خوانده می‌شود.</p></section> : !project ? (
          <section className="admin-form-card"><h2>پروژه پیدا نشد</h2><p>{error || "شناسه پروژه در فهرست مدیریتی موجود نیست."}</p></section>
        ) : (
          <section className="admin-form-card">
            <h2>مشخصات پروژه</h2><p>مدیر می‌تواند داده‌های مدیریتی را اصلاح کند؛ تغییرات در Backend ثبت می‌شود و ارزیابی تخصصی پروژه در خانه خلاق باقی می‌ماند.</p>
            {error ? <p className="admin-form-actions-note">{error}</p> : null}
            <div className="admin-form-grid">
              <div className="admin-form-field"><label>نام پروژه</label><input className="admin-form-input" value={project.name} onChange={(event) => change("name", event.target.value)} /></div>
              <div className="admin-form-field"><label>استان</label><input className="admin-form-input" value={project.province} onChange={(event) => change("province", event.target.value)} /></div>
              <div className="admin-form-field"><label>حوزه اثر</label><input className="admin-form-input" value={project.track} onChange={(event) => change("track", event.target.value)} /></div>
              <div className="admin-form-field"><label>تأمین فعلی (%)</label><input className="admin-form-input" type="number" min="0" max="100" value={project.fundingPercent} onChange={(event) => change("fundingPercent", Number(event.target.value))} /></div>
              <div className="admin-form-field"><label>هدف تأمین</label><input className="admin-form-input" value={project.fundingTarget} onChange={(event) => change("fundingTarget", event.target.value)} /></div>
              <div className="admin-form-field"><label>وضعیت پروژه</label><select className="admin-form-input" value={project.status} onChange={(event) => change("status", event.target.value as AdminProjectRecord["status"])}><option value="فعال">فعال</option><option value="در انتظار گزارش">در انتظار گزارش</option><option value="متوقف">متوقف</option></select></div>
              <div className="admin-form-field"><label>مرحله</label><input className="admin-form-input" value={project.stage} onChange={(event) => change("stage", event.target.value)} /></div>
            </div>
          </section>
        )}

        <aside className="admin-info-note admin-detail-note">اطلاعات مدیریتی پروژه از API پنل مدیر ذخیره می‌شود. localStorage فقط fallback محیط توسعه است.</aside>
        <section className="admin-form-actions admin-detail-actions">
          <button className="admin-users-button admin-users-button-primary" type="button" onClick={save} disabled={!project || saving}>{saving ? "در حال ذخیره…" : "ذخیره تغییرات"}</button>
          <Link className="admin-users-button" to="/panel/admin/funding/sample">مشاهده تأمین مالی</Link>
          <Link className="admin-users-button" to="/panel/admin/projects">بازگشت</Link>
          <p className="admin-form-actions-note">{saved ? "تغییرات پروژه در منبع مدیریتی ثبت شد." : "اطلاعات قابل ویرایش است."}</p>
        </section>
      </main>
      <AdminSidebar active="projects" />
    </div>
  );
}
