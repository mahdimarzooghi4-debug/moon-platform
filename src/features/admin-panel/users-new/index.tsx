import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AdminSidebar } from "../components/AdminSidebar";
import {
  grantAdminMembership,
  listAdminOrganizations,
  listAdminRoles,
  listAdminUsers,
  type AdminOrganization,
  type AdminRole,
  type AdminUser,
} from "../api";
import "../index.css";
import "../users-flow.css";
import "./index.css";

export default function AdminAddUser() {
  const navigate = useNavigate();
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [organizations, setOrganizations] = useState<AdminOrganization[]>([]);
  const [roles, setRoles] = useState<AdminRole[]>([]);
  const [userId, setUserId] = useState("");
  const [organizationId, setOrganizationId] = useState("");
  const [roleCode, setRoleCode] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    Promise.all([listAdminUsers(), listAdminOrganizations(), listAdminRoles()])
      .then(([nextUsers, nextOrganizations, nextRoles]) => {
        if (!active) return;
        setUsers(nextUsers);
        setOrganizations(nextOrganizations.filter((item) => item.status === "active"));
        setRoles(nextRoles);
      })
      .catch(() => {
        if (active) setError("دریافت اطلاعات دسترسی از سرور ناموفق بود.");
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  const submitUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!userId || !organizationId || !roleCode || saving) return;

    setSaving(true);
    setError("");
    try {
      await grantAdminMembership({ userId, organizationId, roleCode });
      navigate(`/panel/admin/users/${userId}`);
    } catch {
      setError("ثبت دسترسی انجام نشد. کاربر، سازمان و نقش را دوباره بررسی کنید.");
      setSaving(false);
    }
  };

  return (
    <div className="admin-panel-shell" data-node-id="2249:2">
      <main className="admin-users-main" dir="rtl">
        <header className="admin-users-header">
          <div className="admin-users-heading">
            <h1>افزودن دسترسی کاربر</h1>
            <p>اتصال کاربر احراز‌شده به سازمان و نقش عملیاتی در سامانه ماه</p>
          </div>
          <div className="admin-users-actions">
            <Link className="admin-users-button admin-users-button-wide" to="/panel/admin/users">بازگشت به کاربران</Link>
          </div>
        </header>

        <form className="admin-users-create-form" onSubmit={submitUser}>
          <section className="admin-form-card">
            <h2>تخصیص Membership</h2>
            <p>کاربر باید حداقل یک‌بار از مسیر احراز هویت وارد شده و در Backend همگام شده باشد.</p>
            <div className="admin-form-grid">
              <div className="admin-form-field">
                <label htmlFor="admin-user-id">کاربر همگام‌شده</label>
                <select id="admin-user-id" className="admin-form-input" value={userId} onChange={(event) => setUserId(event.target.value)} disabled={loading} required>
                  <option value="">انتخاب کاربر</option>
                  {users.map((user) => (
                    <option value={user.userId} key={user.userId}>{user.displayName || user.externalSubject} {user.isActive ? "" : "(غیرفعال)"}</option>
                  ))}
                </select>
              </div>
              <div className="admin-form-field">
                <label htmlFor="admin-user-org">سازمان / مجموعه</label>
                <select id="admin-user-org" className="admin-form-input" value={organizationId} onChange={(event) => setOrganizationId(event.target.value)} disabled={loading} required>
                  <option value="">انتخاب سازمان فعال</option>
                  {organizations.map((organization) => (
                    <option value={organization.organizationId} key={organization.organizationId}>{organization.name}</option>
                  ))}
                </select>
              </div>
              <div className="admin-form-field">
                <label htmlFor="admin-user-role">نقش کاربری</label>
                <select id="admin-user-role" className="admin-form-input" value={roleCode} onChange={(event) => setRoleCode(event.target.value)} disabled={loading} required>
                  <option value="">انتخاب نقش</option>
                  {roles.map((role) => <option value={role.code} key={role.roleId}>{role.name}</option>)}
                </select>
              </div>
              <div className="admin-form-field">
                <label>وضعیت عضویت</label>
                <div className="admin-detail-value">فعال — پس از ثبت بلافاصله در کنترل دسترسی Backend اعمال می‌شود</div>
              </div>
            </div>
            {error ? <p className="admin-form-actions-note">{error}</p> : null}
          </section>

          <aside className="admin-info-note admin-info-note-tall">این صفحه حساب هویتی جدید در Keycloak نمی‌سازد. فعلاً فقط به کاربری که قبلاً Login و Sync شده است دسترسی سازمانی می‌دهد. Provisioning هویت با SMS/OTP در مرحله اتصال سرویس پیامک بسته می‌شود.</aside>

          <section className="admin-form-actions">
            <button className="admin-users-button admin-users-button-primary" type="submit" disabled={loading || saving || !userId || !organizationId || !roleCode}>{saving ? "در حال ثبت…" : "ثبت دسترسی"}</button>
            <Link className="admin-users-button" to="/panel/admin/users">انصراف</Link>
            <p className="admin-form-actions-note">تخصیص یا فعال‌سازی مجدد Membership با شناسه و Audit مستقل ثبت می‌شود.</p>
          </section>
        </form>
      </main>
      <AdminSidebar active="users" />
    </div>
  );
}
