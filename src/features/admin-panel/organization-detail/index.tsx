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
};

const demoDetails: Record<string, { manager: string; mobile: string; extraLabel: string; extraValue: string }> = {
  "org-company-a": {
    manager: "مریم کریمی",
    mobile: "09121234567",
    extraLabel: "شناسه ملی",
    extraValue: "14009876543",
  },
  "org-company-b": {
    manager: "رضا نادری",
    mobile: "09123334455",
    extraLabel: "شناسه ملی",
    extraValue: "14008765432",
  },
  "org-startup-a": {
    manager: "الهام موسوی",
    mobile: "09125556677",
    extraLabel: "حوزه فعالیت",
    extraValue: "فناوری سبز و اشتغال",
  },
};

export default function AdminOrganizationDetail() {
  const { organizationId } = useParams();
  const [organization, setOrganization] = useState<AdminOrganization | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const load = async () => {
    if (!organizationId) return;
    const items = await listAdminOrganizations();
    const found = items.find((item) => item.organizationId === organizationId) ?? null;
    if (!found) throw new Error("organization_not_found");
    setOrganization(found);
  };

  useEffect(() => {
    let active = true;
    if (!organizationId) {
      setError("شناسه سازمان معتبر نیست.");
      setLoading(false);
      return () => {
        active = false;
      };
    }

    listAdminOrganizations()
      .then((items) => {
        if (!active) return;
        const found = items.find((item) => item.organizationId === organizationId) ?? null;
        if (!found) {
          setError("شرکت یا استارتاپ موردنظر پیدا نشد.");
          return;
        }
        setOrganization(found);
      })
      .catch(() => {
        if (active) setError("دریافت اطلاعات حساب ناموفق بود.");
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [organizationId]);

  const details = organization ? demoDetails[organization.organizationId] : undefined;
  const isCompany = organization?.type === "company";

  const fields = useMemo(() => {
    if (!organization) return [];
    return [
      ["نام مجموعه", organization.name],
      ["شناسه سازمان", organization.organizationId],
      ["نوع حساب", typeLabel[organization.type] ?? organization.type],
      ["مسئول حساب", details?.manager ?? "ثبت نشده"],
      ["شماره تماس", details?.mobile ?? "ثبت نشده"],
      [details?.extraLabel ?? "اطلاعات تکمیلی", details?.extraValue ?? "ثبت نشده"],
      ["اعضای فعال", String(organization.activeMemberCount)],
      ["تاریخ ایجاد", new Date(organization.createdAtUtc).toLocaleDateString("fa-IR")],
      ["وضعیت حساب", isCompany ? "فعال؛ بدون نیاز به فعال‌سازی" : organization.status === "active" ? "فعال" : "غیرفعال"],
    ] as const;
  }, [details, isCompany, organization]);

  const toggleStatus = async () => {
    if (!organization || saving || isCompany) return;
    setSaving(true);
    setError("");
    try {
      await setAdminOrganizationStatus(
        organization.organizationId,
        organization.status === "active" ? "inactive" : "active",
      );
      await load();
    } catch {
      setError("تغییر وضعیت استارتاپ انجام نشد.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="admin-panel-shell" data-node-id="2273:226">
      <main className="admin-users-main" dir="rtl">
        <header className="admin-users-header">
          <div className="admin-users-heading"><h1>جزئیات شرکت / استارتاپ</h1><p>مشخصات حساب، مسئول و وضعیت دسترسی مجموعه</p></div>
          <div className="admin-users-actions"><Link className="admin-users-button admin-users-button-wide" to="/panel/admin/organizations">بازگشت به فهرست</Link></div>
        </header>

        <section className="admin-form-card">
          <h2>اطلاعات مجموعه</h2>
          <p>برای داده‌های توسعه، اطلاعات نمونه تکمیلی هم نمایش داده می‌شود.</p>
          {loading ? <p className="admin-form-actions-note">در حال دریافت اطلاعات…</p> : null}
          {error ? <p className="admin-form-actions-note">{error}</p> : null}
          <div className="admin-form-grid">
            {fields.map(([label, value]) => <div className="admin-form-field" key={label}><label>{label}</label><div className="admin-detail-value">{value}</div></div>)}
          </div>
        </section>

        <aside className="admin-info-note admin-detail-note">
          {isCompany
            ? "شرکت پس از ثبت نیاز به مرحله فعال‌سازی ندارد و حساب آن مستقیم قابل استفاده است."
            : "فعال یا غیرفعال‌کردن استارتاپ روی دسترسی اعضای آن اثر می‌گذارد و باید در Audit ثبت شود."}
        </aside>

        <section className="admin-form-actions admin-detail-actions">
          {!isCompany ? (
            <button className="admin-users-button admin-users-button-primary" type="button" disabled={!organization || saving} onClick={toggleStatus}>{saving ? "در حال ثبت…" : organization?.status === "active" ? "غیرفعال کردن" : "فعال کردن"}</button>
          ) : null}
          <Link className="admin-users-button" to="/panel/admin/users/new">تخصیص دسترسی</Link>
          <p className="admin-form-actions-note">اعضای فعال: {organization?.activeMemberCount ?? "—"}</p>
        </section>
      </main>
      <AdminSidebar active="organizations" />
    </div>
  );
}
