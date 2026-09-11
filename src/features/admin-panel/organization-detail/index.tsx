import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AdminSidebar } from "../components/AdminSidebar";
import {
  listAdminOrganizations,
  setAdminOrganizationStatus,
  type AdminOrganization,
} from "../api";
import "../index.css";
import "../users-flow.css";
import "../list-flow.css";

const typeLabel: Record<string, string> = {
  company: "شرکت",
  startup: "استارتاپ",
  creative_house: "خانه خلاق",
  fund_manager: "مدیریت صندوق",
  supervisor: "نهاد ناظر",
  platform: "سامانه ماه",
};

export default function AdminOrganizationDetail() {
  const { id } = useParams();
  const [organization, setOrganization] = useState<AdminOrganization | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const load = async () => {
    if (!id) return;
    const items = await listAdminOrganizations();
    const found = items.find((item) => item.organizationId === id) ?? null;
    if (!found) throw new Error("organization_not_found");
    setOrganization(found);
  };

  useEffect(() => {
    let active = true;
    if (!id) {
      setError("شناسه سازمان معتبر نیست.");
      setLoading(false);
      return () => {
        active = false;
      };
    }

    listAdminOrganizations()
      .then((items) => {
        if (!active) return;
        const found = items.find((item) => item.organizationId === id) ?? null;
        if (!found) {
          setError("سازمان موردنظر پیدا نشد.");
          return;
        }
        setOrganization(found);
      })
      .catch(() => {
        if (active) setError("دریافت اطلاعات سازمان از سرور ناموفق بود.");
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [id]);

  const fields = useMemo(() => {
    if (!organization) return [];
    return [
      ["نام مجموعه", organization.name],
      ["شناسه سازمان", organization.organizationId],
      ["نوع حساب", typeLabel[organization.type] ?? organization.type],
      ["اعضای فعال", String(organization.activeMemberCount)],
      ["تاریخ ایجاد", new Date(organization.createdAtUtc).toLocaleDateString("fa-IR")],
      ["وضعیت حساب", organization.status === "active" ? "فعال" : "غیرفعال"],
    ] as const;
  }, [organization]);

  const toggleStatus = async () => {
    if (!organization || saving) return;
    setSaving(true);
    setError("");
    try {
      await setAdminOrganizationStatus(
        organization.organizationId,
        organization.status === "active" ? "inactive" : "active",
      );
      await load();
    } catch {
      setError("تغییر وضعیت سازمان انجام نشد.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="admin-panel-shell" data-node-id="2273:226">
      <main className="admin-users-main" dir="rtl">
        <header className="admin-users-header">
          <div className="admin-users-heading"><h1>جزئیات شرکت / استارتاپ</h1><p>نمای مدیریتی حساب و وضعیت فعالیت سازمان</p></div>
          <div className="admin-users-actions"><Link className="admin-users-button admin-users-button-wide" to="/panel/admin/organizations">بازگشت به فهرست</Link></div>
        </header>

        <section className="admin-form-card">
          <h2>اطلاعات مجموعه</h2>
          <p>مشخصات و وضعیت این حساب مستقیماً از Backend خوانده می‌شود.</p>
          {loading ? <p className="admin-form-actions-note">در حال دریافت اطلاعات…</p> : null}
          {error ? <p className="admin-form-actions-note">{error}</p> : null}
          <div className="admin-form-grid">
            {fields.map(([label, value]) => <div className="admin-form-field" key={label}><label>{label}</label><div className="admin-detail-value">{value}</div></div>)}
          </div>
        </section>

        <aside className="admin-info-note admin-detail-note">غیرفعال‌کردن سازمان باعث می‌شود عضویت‌های آن سازمان در `/api/v1/me` به‌عنوان دسترسی فعال برگردانده نشوند. تغییر وضعیت در Audit ثبت می‌شود.</aside>

        <section className="admin-form-actions admin-detail-actions">
          <button className="admin-users-button admin-users-button-primary" type="button" disabled={!organization || saving} onClick={toggleStatus}>{saving ? "در حال ثبت…" : organization?.status === "active" ? "غیرفعال کردن" : "فعال کردن"}</button>
          <Link className="admin-users-button" to="/panel/admin/users/new">تخصیص دسترسی</Link>
          <p className="admin-form-actions-note">اعضای فعال: {organization?.activeMemberCount ?? "—"}</p>
        </section>
      </main>
      <AdminSidebar active="organizations" />
    </div>
  );
}
