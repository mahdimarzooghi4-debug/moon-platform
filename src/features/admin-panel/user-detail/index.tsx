import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AdminSidebar } from "../components/AdminSidebar";
import {
  getAdminUser,
  setAdminMembershipActive,
  setAdminUserActive,
  type AdminUser,
} from "../api";
import "../index.css";
import "../users-flow.css";

export default function AdminUserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const refresh = async () => {
    if (!id) return;
    const next = await getAdminUser(id);
    setUser(next);
  };

  useEffect(() => {
    let active = true;
    if (!id) {
      setError("شناسه کاربر معتبر نیست.");
      setLoading(false);
      return () => {
        active = false;
      };
    }

    getAdminUser(id)
      .then((next) => {
        if (active) setUser(next);
      })
      .catch(() => {
        if (active) setError("دریافت اطلاعات کاربر از سرور ناموفق بود.");
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [id]);

  const fields = useMemo(() => {
    if (!user) return [];
    const activeMemberships = user.memberships.filter((membership) => membership.isActive);
    return [
      ["نام نمایشی", user.displayName || "ثبت نشده"],
      ["شناسه هویتی Keycloak", user.externalSubject],
      ["سازمان‌های فعال", activeMemberships.map((membership) => membership.organizationName).join("، ") || "بدون سازمان"],
      ["نقش‌های فعال", activeMemberships.map((membership) => membership.roleName).join("، ") || "بدون نقش"],
      ["تعداد Membership", String(user.memberships.length)],
      ["وضعیت حساب", user.isActive ? "فعال" : "غیرفعال"],
    ] as const;
  }, [user]);

  const toggleUser = async () => {
    if (!user || saving) return;
    setSaving(true);
    setError("");
    try {
      await setAdminUserActive(user.userId, !user.isActive);
      await refresh();
    } catch {
      setError(user.isActive ? "غیرفعال‌کردن حساب انجام نشد." : "فعال‌کردن حساب انجام نشد.");
    } finally {
      setSaving(false);
    }
  };

  const toggleMembership = async (membershipId: string, nextActive: boolean) => {
    if (saving) return;
    setSaving(true);
    setError("");
    try {
      await setAdminMembershipActive(membershipId, nextActive);
      await refresh();
    } catch {
      setError("تغییر وضعیت عضویت انجام نشد.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="admin-panel-shell" data-node-id="2273:114">
      <main className="admin-users-main" dir="rtl">
        <header className="admin-users-header">
          <div className="admin-users-heading">
            <h1>جزئیات کاربر</h1>
            <p>مشاهده و مدیریت حساب و Membershipهای واقعی کاربر</p>
          </div>
          <div className="admin-users-actions">
            <Link className="admin-users-button admin-users-button-wide" to="/panel/admin/users">بازگشت به کاربران</Link>
          </div>
        </header>

        <section className="admin-form-card">
          <h2>اطلاعات حساب کاربری</h2>
          <p>اطلاعات این صفحه از Backend Identity خوانده می‌شود.</p>
          {loading ? <p className="admin-form-actions-note">در حال دریافت اطلاعات…</p> : null}
          {error ? <p className="admin-form-actions-note">{error}</p> : null}
          <div className="admin-form-grid">
            {fields.map(([label, value]) => (
              <div className="admin-form-field" key={label}>
                <label>{label}</label>
                <div className="admin-detail-value">{value}</div>
              </div>
            ))}
          </div>
        </section>

        {user ? (
          <section className="admin-users-table-card">
            <h2>عضویت‌ها و نقش‌ها</h2>
            <p>فعال یا غیرفعال‌کردن Membership مستقیماً روی دسترسی سازمانی کاربر اثر می‌گذارد.</p>
            <div className="admin-users-table">
              <div className="admin-users-row admin-users-table-head"><span>سازمان</span><span>نوع</span><span>نقش</span><span>وضعیت</span><span>شناسه</span><span>اقدام</span></div>
              {user.memberships.map((membership) => (
                <div className="admin-users-row" key={membership.membershipId}>
                  <span>{membership.organizationName}</span>
                  <span>{membership.organizationType}</span>
                  <span>{membership.roleName}</span>
                  <span className={`admin-status-pill ${membership.isActive ? "admin-status-active" : "admin-status-review"}`}>{membership.isActive ? "فعال" : "غیرفعال"}</span>
                  <span>{membership.membershipId.slice(0, 8)}…</span>
                  <button className="admin-user-action" type="button" disabled={saving} onClick={() => toggleMembership(membership.membershipId, !membership.isActive)}>{membership.isActive ? "لغو دسترسی" : "فعال‌سازی"}</button>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <aside className="admin-info-note admin-info-note-tall">تمام تغییرات وضعیت حساب و Membership در Audit ثبت می‌شوند. سیستم اجازه نمی‌دهد مدیر سامانه حساب خودش را از همین API غیرفعال کند.</aside>

        <section className="admin-form-actions">
          <button className="admin-users-button admin-users-button-primary" type="button" disabled={!user || saving} onClick={toggleUser}>{saving ? "در حال ثبت…" : user?.isActive ? "مسدود کردن حساب" : "فعال کردن حساب"}</button>
          <Link className="admin-users-button" to="/panel/admin/users/new">افزودن دسترسی جدید</Link>
          <p className="admin-form-actions-note">تغییرات پس از ثبت در درخواست بعدی `/api/v1/me` اعمال می‌شوند.</p>
        </section>
      </main>
      <AdminSidebar active="users" />
    </div>
  );
}
