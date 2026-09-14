import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AdminSidebar } from "../components/AdminSidebar";
import { getAdminProject, updateAdminProject, type AdminProjectRecord } from "../project-store";
import "../index.css";
import "../users-flow.css";
import "../list-flow.css";

export default function AdminProjectDetail() {
  const { projectId } = useParams();
  const initial = useMemo(() => (projectId ? getAdminProject(projectId) : null), [projectId]);
  const [project, setProject] = useState<AdminProjectRecord | null>(initial);
  const [saved, setSaved] = useState(false);

  const change = <K extends keyof AdminProjectRecord>(key: K, value: AdminProjectRecord[K]) => {
    if (!project) return;
    setProject({ ...project, [key]: value });
    setSaved(false);
  };

  const save = () => {
    if (!project) return;
    const next = updateAdminProject(project.id, {
      name: project.name.trim(),
      province: project.province.trim(),
      track: project.track.trim(),
      fundingPercent: Math.max(0, Math.min(100, Number(project.fundingPercent) || 0)),
      fundingTarget: project.fundingTarget.trim(),
      status: project.status,
      stage: project.stage.trim(),
    });
    if (next) {
      setProject(next);
      setSaved(true);
    }
  };

  return (
    <div className="admin-panel-shell" data-node-id="2273:338">
      <main className="admin-users-main" dir="rtl">
        <header className="admin-users-header">
          <div className="admin-users-heading"><h1>جزئیات پروژه</h1><p>مشاهده و ویرایش اطلاعات مدیریتی پروژه</p></div>
          <div className="admin-users-actions"><Link className="admin-users-button admin-users-button-wide" to="/panel/admin/projects">بازگشت به پروژه‌ها</Link></div>
        </header>

        {!project ? (
          <section className="admin-form-card"><h2>پروژه پیدا نشد</h2><p>شناسه پروژه در فهرست مدیریتی موجود نیست.</p></section>
        ) : (
          <section className="admin-form-card">
            <h2>مشخصات پروژه</h2><p>مدیر می‌تواند داده‌های مدیریتی را اصلاح کند؛ ارزیابی تخصصی پروژه در خانه خلاق باقی می‌ماند.</p>
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

        <aside className="admin-info-note admin-detail-note">تغییرات این نسخه در store مشترک پنل مدیر ثبت می‌شود تا لیست و جزئیات یک داده را نشان دهند. اتصال ذخیره‌سازی دائمی به Backend Admin مرحله بعدی API است.</aside>
        <section className="admin-form-actions admin-detail-actions">
          <button className="admin-users-button admin-users-button-primary" type="button" onClick={save} disabled={!project}>ذخیره تغییرات</button>
          <Link className="admin-users-button" to="/panel/admin/funding/sample">مشاهده تأمین مالی</Link>
          <Link className="admin-users-button" to="/panel/admin/projects">بازگشت</Link>
          <p className="admin-form-actions-note">{saved ? "تغییرات پروژه ثبت شد." : "اطلاعات قابل ویرایش است."}</p>
        </section>
      </main>
      <AdminSidebar active="projects" />
    </div>
  );
}
