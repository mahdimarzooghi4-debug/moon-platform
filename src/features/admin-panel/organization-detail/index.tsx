import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AdminSidebar } from "../components/AdminSidebar";
import { listAdminOrganizations, setAdminOrganizationStatus, type AdminOrganization } from "../api";
import { getOrganizationOverride, saveOrganizationOverride } from "../organization-overrides";
import "../index.css";
import "../users-flow.css";
import "../list-flow.css";

const typeLabel: Record<string, string> = { company: "شرکت", startup: "استارتاپ" };

const demoDetails: Record<string, { manager: string; mobile: string; extraLabel: string; extraValue: string }> = {
  "org-company-a": { manager: "مریم کریمی", mobile: "09121234567", extraLabel: "شناسه ملی", extraValue: "14009876543" },
  "org-company-b": { manager: "رضا نادری", mobile: "09123334455", extraLabel: "شناسه ملی", extraValue: "14008765432" },
  "org-startup-a": { manager: "الهام موسوی", mobile: "09125556677", extraLabel: "حوزه فعالیت", extraValue: "فناوری سبز و اشتغال" },
};

export default function AdminOrganizationDetail() {
  const { organizationId } = useParams();
  const [organization, setOrganization] = useState<AdminOrganization | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);
  const [startupName, setStartupName] = useState("");
  const [manager, setManager] = useState("");
  const [mobile, setMobile] = useState("");
  const [activityArea, setActivityArea] = useState("");

  const applyOrganization = (found: AdminOrganization) => {
    setOrganization(found);
    const details = demoDetails[found.organizationId];
    const override = getOrganizationOverride(found.organizationId);
    setStartupName(override?.name ?? found.name);
    setManager(override?.manager ?? details?.manager ?? "");
    setMobile(override?.mobile ?? details?.mobile ?? "");
    setActivityArea(override?.activityArea ?? details?.extraValue ?? "");
  };

  const load = async () => {
    if (!organizationId) return;
    const items = await listAdminOrganizations();
    const found = items.find((item) => item.organizationId === organizationId) ?? null;
    if (!found) throw new Error("organization_not_found");
    applyOrganization(found);
  };

  useEffect(() => {
    let active = true;
    if (!organizationId) {
      setError("شناسه سازمان معتبر نیست.");
      setLoading(false);
      return () => { active = false; };
    }
    listAdminOrganizations()
      .then((items) => {
        if (!active) return;
        const found = items.find((item) => item.organizationId === organizationId) ?? null;
        if (!found) { setError("شرکت یا استارتاپ موردنظر پیدا نشد."); return; }
        applyOrganization(found);
      })
      .catch(() => { if (active) setError("دریافت اطلاعات حساب ناموفق بود."); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [organizationId]);

  const details = organization ? demoDetails[organization.organizationId] : undefined;
  const isCompany = organization?.type === "company";
  const isStartup = organization?.type === "startup";

  const companyFields = useMemo(() => {
    if (!organization || !isCompany) return [];
    return [
      ["نام مجموعه", organization.name], ["شناسه سازمان", organization.organizationId], ["نوع حساب", typeLabel[organization.type] ?? organization.type],
      ["مسئول حساب", details?.manager ?? "ثبت نشده"], ["شماره تماس", details?.mobile ?? "ثبت نشده"], [details?.extraLabel ?? "اطلاعات تکمیلی", details?.extraValue ?? "ثبت نشده"],
      ["اعضای فعال", String(organization.activeMemberCount)], ["تاریخ ایجاد", new Date(organization.createdAtUtc).toLocaleDateString("fa-IR")], ["وضعیت حساب", "فعال؛ بدون نیاز به فعال‌سازی"],
    ] as const;
  }, [details, isCompany, organization]);

  const saveStartup = () => {
    if (!organization || !isStartup) return;
    saveOrganizationOverride({ organizationId: organization.organizationId, name: startupName.trim(), manager: manager.trim(), mobile: mobile.trim(), activityArea: activityArea.trim() });
    setSaved(true);
  };

  const toggleStatus = async () => {
    if (!organization || saving || isCompany) return;
    setSaving(true); setError("");
    try {
      await setAdminOrganizationStatus(organization.organizationId, organization.status === "active" ? "inactive" : "active");
      await load();
    } catch { setError("تغییر وضعیت استارتاپ انجام نشد."); }
    finally { setSaving(false); }
  };

  return (
    <div className="admin-panel-shell" data-node-id="2273:226">
      <main className="admin-users-main" dir="rtl">
        <header className="admin-users-header">
          <div className="admin-users-heading"><h1>جزئیات شرکت / استارتاپ</h1><p>شرکت قابل مشاهده است و اطلاعات استارتاپ توسط مدیر قابل ویرایش است.</p></div>
          <div className="admin-users-actions"><Link className="admin-users-button admin-users-button-wide" to="/panel/admin/organizations">بازگشت به فهرست</Link></div>
        </header>

        <section className="admin-form-card">
          <h2>{isStartup ? "ویرایش اطلاعات استارتاپ" : "اطلاعات شرکت"}</h2>
          <p>{isStartup ? "مدیر سامانه می‌تواند مشخصات مدیریتی استارتاپ را اصلاح کند." : "اطلاعات شرکت برای مشاهده مدیریتی نمایش داده می‌شود و نیاز به فعال‌سازی ندارد."}</p>
          {loading ? <p className="admin-form-actions-note">در حال دریافت اطلاعات…</p> : null}
          {error ? <p className="admin-form-actions-note">{error}</p> : null}

          {isStartup && organization ? (
            <div className="admin-form-grid">
              <div className="admin-form-field"><label>نام استارتاپ</label><input className="admin-form-input" value={startupName} onChange={(event) => { setStartupName(event.target.value); setSaved(false); }} /></div>
              <div className="admin-form-field"><label>مسئول حساب</label><input className="admin-form-input" value={manager} onChange={(event) => { setManager(event.target.value); setSaved(false); }} /></div>
              <div className="admin-form-field"><label>شماره تماس</label><input className="admin-form-input" dir="ltr" value={mobile} onChange={(event) => { setMobile(event.target.value); setSaved(false); }} /></div>
              <div className="admin-form-field"><label>حوزه فعالیت</label><input className="admin-form-input" value={activityArea} onChange={(event) => { setActivityArea(event.target.value); setSaved(false); }} /></div>
              <div className="admin-form-field"><label>شناسه سازمان</label><div className="admin-detail-value">{organization.organizationId}</div></div>
              <div className="admin-form-field"><label>اعضای فعال</label><div className="admin-detail-value">{organization.activeMemberCount}</div></div>
            </div>
          ) : (
            <div className="admin-form-grid">{companyFields.map(([label, value]) => <div className="admin-form-field" key={label}><label>{label}</label><div className="admin-detail-value">{value}</div></div>)}</div>
          )}
        </section>

        <aside className="admin-info-note admin-detail-note">{isCompany ? "شرکت پس از ثبت مستقیم قابل استفاده است و مرحله فعال‌سازی جداگانه ندارد." : "تغییرات پروفایل استارتاپ در store مدیریتی ثبت می‌شود؛ تغییر وضعیت فعال/غیرفعال همچنان از API سازمان انجام می‌شود."}</aside>

        <section className="admin-form-actions admin-detail-actions">
          {isStartup ? <button className="admin-users-button admin-users-button-primary" type="button" onClick={saveStartup}>ذخیره مشخصات</button> : null}
          {isStartup ? <button className="admin-users-button" type="button" disabled={!organization || saving} onClick={toggleStatus}>{saving ? "در حال ثبت…" : organization?.status === "active" ? "غیرفعال کردن" : "فعال کردن"}</button> : null}
          <Link className="admin-users-button" to="/panel/admin/users/new">تخصیص دسترسی</Link>
          <p className="admin-form-actions-note">{saved ? "تغییرات استارتاپ ثبت شد." : `اعضای فعال: ${organization?.activeMemberCount ?? "—"}`}</p>
        </section>
      </main>
      <AdminSidebar active="organizations" />
    </div>
  );
}
