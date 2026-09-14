import type { FormEvent } from "react";
import { useEffect, useMemo, useState } from "react";
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
import {
  APPROVED_STARTUP_ACCESS_QUEUE_CHANGED,
  APPROVED_STARTUP_ACCESS_QUEUE_KEY,
  readApprovedStartupAccessQueue,
  removeApprovedStartupAccess,
  type ApprovedStartupAccessQueueItem,
} from "../../../shared/approved-startup-access-queue";
import "../index.css";
import "../users-flow.css";
import "./index.css";

function normalize(value: string | null | undefined) {
  return (value ?? "").replace(/\s+/g, " ").trim().toLocaleLowerCase("fa");
}

function organizationsFromUsers(users: AdminUser[]): AdminOrganization[] {
  const byId = new Map<string, AdminOrganization>();
  users.forEach((user) => {
    user.memberships.forEach((membership) => {
      const existing = byId.get(membership.organizationId);
      if (existing) {
        if (membership.isActive) existing.activeMemberCount += 1;
        return;
      }
      byId.set(membership.organizationId, {
        organizationId: membership.organizationId,
        name: membership.organizationName,
        type: membership.organizationType,
        status: membership.isActive ? "active" : "inactive",
        createdAtUtc: user.createdAtUtc,
        activeMemberCount: membership.isActive ? 1 : 0,
      });
    });
  });
  return Array.from(byId.values()).filter((item) => item.status === "active");
}

export default function AdminAddUser() {
  const navigate = useNavigate();
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [organizations, setOrganizations] = useState<AdminOrganization[]>([]);
  const [roles, setRoles] = useState<AdminRole[]>([]);
  const [approvedStartups, setApprovedStartups] = useState<ApprovedStartupAccessQueueItem[]>([]);
  const [selectedQueueId, setSelectedQueueId] = useState("");
  const [userId, setUserId] = useState("");
  const [organizationId, setOrganizationId] = useState("");
  const [roleCode, setRoleCode] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    const refreshQueue = () => {
      if (active) setApprovedStartups(readApprovedStartupAccessQueue());
    };

    const handleStorage = (event: StorageEvent) => {
      if (event.key === APPROVED_STARTUP_ACCESS_QUEUE_KEY) refreshQueue();
    };

    refreshQueue();
    window.addEventListener(APPROVED_STARTUP_ACCESS_QUEUE_CHANGED, refreshQueue);
    window.addEventListener("storage", handleStorage);

    Promise.allSettled([listAdminUsers(), listAdminOrganizations(), listAdminRoles()])
      .then(([usersResult, organizationsResult, rolesResult]) => {
        if (!active) return;

        const nextUsers = usersResult.status === "fulfilled" ? usersResult.value : [];
        setUsers(nextUsers);

        if (organizationsResult.status === "fulfilled") {
          setOrganizations(organizationsResult.value.filter((item) => item.status === "active"));
        } else {
          setOrganizations(organizationsFromUsers(nextUsers));
        }

        if (rolesResult.status === "fulfilled") {
          setRoles(rolesResult.value);
        }

        if (usersResult.status === "rejected" || rolesResult.status === "rejected") {
          setError("دریافت کاربران یا نقش‌ها از سرور ناموفق بود.");
        } else {
          setError("");
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
      window.removeEventListener(APPROVED_STARTUP_ACCESS_QUEUE_CHANGED, refreshQueue);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const queueRows = useMemo(
    () =>
      approvedStartups.map((item) => {
        const startupName = normalize(item.startupName);
        const managerName = normalize(item.managerName);
        const organization = organizations.find(
          (candidate) =>
            normalize(candidate.type).includes("startup") && normalize(candidate.name) === startupName,
        );
        const user = users.find((candidate) => normalize(candidate.displayName) === managerName && candidate.isActive);
        return { item, organization, user, ready: Boolean(organization && user) };
      }),
    [approvedStartups, organizations, users],
  );

  const selectedQueueItem = useMemo(
    () => approvedStartups.find((item) => item.id === selectedQueueId),
    [approvedStartups, selectedQueueId],
  );

  const chooseApprovedStartup = (queueId: string) => {
    const row = queueRows.find((item) => item.item.id === queueId);
    if (!row?.ready || !row.organization || !row.user) return;
    setSelectedQueueId(queueId);
    setUserId(row.user.userId);
    setOrganizationId(row.organization.organizationId);
    setRoleCode("");
    setError("");
  };

  const submitUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!userId || !organizationId || !roleCode || saving) return;

    setSaving(true);
    setError("");
    try {
      await grantAdminMembership({ userId, organizationId, roleCode });
      if (selectedQueueItem) {
        removeApprovedStartupAccess(selectedQueueItem.startupName, selectedQueueItem.managerName);
      }
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
          <section className="admin-form-card admin-access-assignment-card">
            <h2>تخصیص Membership</h2>
            <p>استارتاپ‌های تأییدشده خانه خلاق ابتدا در صف زیر قرار می‌گیرند؛ نقش نهایی را مدیر سامانه انتخاب می‌کند.</p>

            <div className="admin-approved-startup-queue" aria-label="صف استارتاپ‌های تأییدشده خانه خلاق">
              <div className="admin-approved-startup-queue-head">
                <div>
                  <strong>صف تأییدهای خانه خلاق</strong>
                  <span>استارتاپ تأییدشده پس از همگام‌شدن کاربر و سازمان آماده تخصیص دسترسی می‌شود.</span>
                </div>
                <span className="admin-approved-startup-count">{approvedStartups.length.toLocaleString("fa-IR")} مورد</span>
              </div>

              {queueRows.length ? (
                <div className="admin-approved-startup-list">
                  {queueRows.map(({ item, organization, user, ready }) => (
                    <div className={`admin-approved-startup-row${selectedQueueId === item.id ? " is-selected" : ""}`} key={item.id}>
                      <div className="admin-approved-startup-name">
                        <strong>{item.startupName}</strong>
                        <span>{item.managerName || "مدیر ثبت نشده"}{item.activityArea ? ` · ${item.activityArea}` : ""}</span>
                      </div>
                      <span className={`admin-approved-startup-state ${ready ? "is-ready" : "is-waiting"}`}>
                        {ready ? "آماده تخصیص" : "در انتظار همگام‌سازی"}
                      </span>
                      <span className="admin-approved-startup-sync">
                        {organization ? "سازمان ✓" : "سازمان —"} / {user ? "کاربر ✓" : "کاربر —"}
                      </span>
                      <button
                        className="admin-approved-startup-select"
                        type="button"
                        disabled={!ready || saving}
                        onClick={() => chooseApprovedStartup(item.id)}
                      >
                        {selectedQueueId === item.id ? "انتخاب‌شده" : "انتخاب برای تخصیص"}
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="admin-approved-startup-empty">هنوز استارتاپ تأییدشده‌ای از خانه خلاق در صف تخصیص دسترسی نیست.</div>
              )}
            </div>

            <div className="admin-form-grid">
              <div className="admin-form-field">
                <label htmlFor="admin-user-id">کاربر همگام‌شده</label>
                <select
                  id="admin-user-id"
                  className="admin-form-input"
                  value={userId}
                  onChange={(event) => {
                    setUserId(event.target.value);
                    setSelectedQueueId("");
                  }}
                  disabled={loading || saving}
                  required
                >
                  <option value="">انتخاب کاربر</option>
                  {users.map((user) => (
                    <option value={user.userId} key={user.userId}>{user.displayName || user.externalSubject} {user.isActive ? "" : "(غیرفعال)"}</option>
                  ))}
                </select>
              </div>
              <div className="admin-form-field">
                <label htmlFor="admin-user-org">سازمان / مجموعه</label>
                <select
                  id="admin-user-org"
                  className="admin-form-input"
                  value={organizationId}
                  onChange={(event) => {
                    setOrganizationId(event.target.value);
                    setSelectedQueueId("");
                  }}
                  disabled={loading || saving}
                  required
                >
                  <option value="">انتخاب سازمان فعال</option>
                  {organizations.map((organization) => (
                    <option value={organization.organizationId} key={organization.organizationId}>{organization.name}</option>
                  ))}
                </select>
              </div>
              <div className="admin-form-field">
                <label htmlFor="admin-user-role">نقش کاربری</label>
                <select id="admin-user-role" className="admin-form-input" value={roleCode} onChange={(event) => setRoleCode(event.target.value)} disabled={loading || saving || roles.length === 0} required>
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

          <aside className="admin-info-note admin-info-note-tall">تأیید خانه خلاق فقط استارتاپ را وارد صف تخصیص می‌کند و به‌تنهایی حساب هویتی یا نقش نمی‌سازد. پس از Login/Sync کاربر و ایجاد سازمان در Backend، مدیر سامانه کاربر، سازمان و نقش را نهایی می‌کند.</aside>

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
