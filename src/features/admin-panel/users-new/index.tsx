import type { FormEvent } from "react";
import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { AdminSidebar } from "../components/AdminSidebar";
import {
  createAdminOrganization,
  listAdminOrganizations,
  listAdminRoles,
  type AdminOrganization,
  type AdminRole,
} from "../api";
import { provisionAdminUser } from "../management-api";
import {
  readApprovedStartupAccessQueue,
  removeApprovedStartupAccess,
  type ApprovedStartupAccessQueueItem,
} from "../../../shared/approved-startup-access-queue";
import "../index.css";
import "../users-flow.css";
import "./index.css";

function toLatinDigits(value: string) {
  return value
    .replace(/[۰-۹]/g, (digit) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit)))
    .replace(/[٠-٩]/g, (digit) => String("٠١٢٣٤٥٦٧٨٩".indexOf(digit)));
}

function normalizeMobile(value: string) {
  return toLatinDigits(value).replace(/\D/g, "").slice(0, 11);
}

function organizationMatchesRole(organization: AdminOrganization, roleCode: string) {
  if (!roleCode) return true;
  if (roleCode === "startup") return organization.type === "startup";
  if (roleCode === "company") return organization.type === "company";
  if (roleCode === "product_owner" || roleCode === "evaluator") return organization.type === "creative_house";
  if (roleCode === "supervisor") return organization.type === "emdad" || organization.type === "supervisor";
  if (roleCode === "finance") return organization.type === "fund" || organization.type === "fund_manager";
  if (roleCode === "system_admin") return organization.type === "platform";
  return true;
}

export default function AdminAddUser() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const approvedStartupId = searchParams.get("approvedStartupId") ?? "";
  const [organizations, setOrganizations] = useState<AdminOrganization[]>([]);
  const [roles, setRoles] = useState<AdminRole[]>([]);
  const [approvedStartup, setApprovedStartup] = useState<ApprovedStartupAccessQueueItem | null>(null);
  const [displayName, setDisplayName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [temporaryPassword, setTemporaryPassword] = useState("");
  const [roleCode, setRoleCode] = useState("");
  const [organizationId, setOrganizationId] = useState("");
  const [loading, setLoading] = useState(true);
  const [organizationName, setOrganizationName] = useState("");
  const [creatingOrganization, setCreatingOrganization] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    if (approvedStartupId) {
      const queueItem = readApprovedStartupAccessQueue().find((item) => item.id === approvedStartupId) ?? null;
      if (queueItem) {
        setApprovedStartup(queueItem);
        setDisplayName(queueItem.managerName);
        setRoleCode("startup");
      } else {
        setError("این استارتاپ دیگر در صف تأییدهای خانه خلاق نیست.");
      }
    }

    Promise.allSettled([listAdminOrganizations(), listAdminRoles()])
      .then(([organizationsResult, rolesResult]) => {
        if (!active) return;
        if (organizationsResult.status === "fulfilled") {
          setOrganizations(organizationsResult.value.filter((item) => item.status === "active"));
        }
        if (rolesResult.status === "fulfilled") {
          setRoles(rolesResult.value.filter((role) => ["product_owner", "evaluator", "supervisor", "finance", "company", "startup"].includes(role.code)));
        }
        if (rolesResult.status === "rejected") {
          setError("دریافت نقش‌های سامانه ناموفق بود.");
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [approvedStartupId]);

  const selectedRole = useMemo(
    () => roles.find((role) => role.code === roleCode),
    [roleCode, roles],
  );
  const isStartupRole = roleCode === "startup";
  const organizationOptions = useMemo(
    () => organizations.filter((organization) => organizationMatchesRole(organization, roleCode)),
    [organizations, roleCode],
  );
  const selectedOrganization = useMemo(
    () => organizationOptions.find((organization) => organization.organizationId === organizationId),
    [organizationId, organizationOptions],
  );
  const mobileIsValid = /^09\d{9}$/.test(mobile);
  const formIsValid = Boolean(
    displayName.trim() &&
      mobileIsValid &&
      selectedRole &&
      (isStartupRole ? selectedOrganization?.type === "startup" : selectedOrganization) &&
      email.trim() && temporaryPassword.length >= 12,
  );

  const newOrganizationType = roleCode === "product_owner" || roleCode === "evaluator"
    ? "creative_house"
    : roleCode === "supervisor" ? "supervisor" : roleCode === "finance" ? "fund_manager" : null;

  async function addOrganization() {
    if (!newOrganizationType || !organizationName.trim() || creatingOrganization) return;
    setCreatingOrganization(true);
    setError("");
    try {
      const organization = await createAdminOrganization({
        name: organizationName.trim(),
        type: newOrganizationType,
      });
      setOrganizations((items) => [...items, organization]);
      setOrganizationId(organization.organizationId);
      setOrganizationName("");
    } catch {
      setError("ثبت سازمان انجام نشد. دوباره وارد پنل شوید یا وضعیت سرویس را بررسی کنید.");
    } finally {
      setCreatingOrganization(false);
    }
  }

  const submitUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formIsValid || !selectedRole || saving) return;

    setSaving(true);
    setError("");

    if (!selectedOrganization) {
      setSaving(false);
      return;
    }

    try {
      await provisionAdminUser({
        displayName: displayName.trim(),
        mobile,
        email: email.trim(),
        temporaryPassword,
        roleCode: selectedRole.code,
        organizationId: selectedOrganization.organizationId,
      });
    } catch (failure) {
      const message = failure instanceof Error ? failure.message : "";
      setError(message === "account_exists_or_pending"
        ? "برای این شماره حساب موجود است یا ساخت آن کامل نشده است."
        : "ساخت حساب کامل نشد. اطلاعات حساب و تنظیمات سرویس هویت را بررسی کنید.");
      setSaving(false);
      return;
    }

    if (approvedStartup && isStartupRole) {
      removeApprovedStartupAccess(approvedStartup.startupName, approvedStartup.managerName);
      navigate("/panel/admin/organizations?accessCreated=1");
      return;
    }

    navigate("/panel/admin/users?provisioned=1");
  };

  return (
    <div className="admin-panel-shell" data-node-id="2249:2">
      <main className="admin-users-main" dir="rtl">
        <header className="admin-users-header">
          <div className="admin-users-heading">
            <h1>تعریف کاربر و نقش</h1>
            <p>مدیر سامانه ابتدا شخص را تعریف می‌کند، سپس نقش و مجموعه مرتبط را مشخص می‌کند.</p>
          </div>
          <div className="admin-users-actions">
            <Link className="admin-users-button admin-users-button-wide" to="/panel/admin/users">بازگشت به کاربران</Link>
          </div>
        </header>

        <form className="admin-users-create-form" onSubmit={submitUser}>
          <section className="admin-form-card admin-access-assignment-card">
            <div className="admin-provisioning-heading">
              <div>
                <h2>۱. مشخصات شخص</h2>
                <p>شخص قبل از تخصیص نقش همین‌جا تعریف می‌شود و لازم نیست از قبل وارد سامانه شده باشد.</p>
              </div>
              <span>تعریف هویت اولیه</span>
            </div>

            <div className="admin-form-grid">
              <div className="admin-form-field">
                <label htmlFor="admin-person-name">نام و نام خانوادگی</label>
                <input id="admin-person-name" className="admin-form-input" value={displayName} onChange={(event) => setDisplayName(event.target.value)} placeholder="مثلاً علی رضایی" disabled={saving} required />
              </div>
              <div className="admin-form-field">
                <label htmlFor="admin-person-mobile">شماره موبایل</label>
                <input id="admin-person-mobile" className="admin-form-input" value={mobile} onChange={(event) => setMobile(normalizeMobile(event.target.value))} placeholder="09xxxxxxxxx" inputMode="numeric" dir="ltr" disabled={saving} required />
                {mobile && !mobileIsValid ? <small className="admin-field-error">شماره موبایل باید ۱۱ رقم و با 09 شروع شود.</small> : null}
              </div>
              <div className="admin-form-field">
                <label htmlFor="admin-person-email">ایمیل</label>
                <input id="admin-person-email" className="admin-form-input" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="name@example.com" type="email" dir="ltr" disabled={saving} required />
              </div>
              <div className="admin-form-field">
                <label htmlFor="admin-person-password">رمز موقت (حداقل ۱۲ کاراکتر)</label>
                <input id="admin-person-password" className="admin-form-input" type="password"
                  autoComplete="new-password" value={temporaryPassword}
                  onChange={(event) => setTemporaryPassword(event.target.value)}
                  minLength={12} maxLength={128} disabled={saving} required />
              </div>
            </div>

            <div className="admin-provisioning-divider" />

            <div className="admin-provisioning-heading">
              <div>
                <h2>۲. نقش و مجموعه</h2>
                <p>شرکت نیاز به تأیید جداگانه ندارد؛ نماینده مستقیماً به شرکت موجود متصل می‌شود.</p>
              </div>
              <span>تخصیص دسترسی</span>
            </div>

            <div className="admin-form-grid">
              <div className="admin-form-field">
                <label htmlFor="admin-user-role">نقش کاربری</label>
                <select
                  id="admin-user-role"
                  className="admin-form-input"
                  value={roleCode}
                  onChange={(event) => {
                    const nextRole = event.target.value;
                    setRoleCode(nextRole);
                    setOrganizationId("");
                    if (nextRole !== "startup") {
                      setStartupName("");
                      setActivityArea("");
                      setApprovedStartup(null);
                    }
                  }}
                  disabled={loading || saving || roles.length === 0}
                  required
                >
                  <option value="">انتخاب نقش</option>
                  {roles.map((role) => <option value={role.code} key={role.roleId}>{role.name}</option>)}
                </select>
              </div>

                <div className="admin-form-field">
                  <label htmlFor="admin-user-org">سازمان / مجموعه</label>
                  <select id="admin-user-org" className="admin-form-input" value={organizationId} onChange={(event) => setOrganizationId(event.target.value)} disabled={loading || saving} required>
                    <option value="">انتخاب سازمان فعال</option>
                    {organizationOptions.map((organization) => (
                      <option value={organization.organizationId} key={organization.organizationId}>{organization.name}</option>
                    ))}
                  </select>
                  {!loading && organizationOptions.length === 0 && (
                    <small>برای این نقش سازمان فعالی در فهرست نیست.</small>
                  )}
                  {!loading && newOrganizationType && (
                    <>
                      <label htmlFor="admin-new-organization">نام سازمان جدید برای این نقش</label>
                      <input id="admin-new-organization" className="admin-form-input"
                        value={organizationName} onChange={(event) => setOrganizationName(event.target.value)}
                        disabled={saving || creatingOrganization} />
                      <button type="button" className="admin-users-button"
                        disabled={saving || creatingOrganization || !organizationName.trim()}
                        onClick={addOrganization}>
                        {creatingOrganization ? "در حال ثبت…" : "افزودن سازمان"}
                      </button>
                    </>
                  )}
                </div>
            </div>

            {error ? <p className="admin-form-actions-note">{error}</p> : null}
          </section>

          <aside className="admin-info-note admin-info-note-tall">کاربر در اولین ورود باید رمز موقت را تغییر دهد. رمز موقت را از طریق یک مسیر امن به کاربر برسانید.</aside>

          <section className="admin-form-actions">
            <button className="admin-users-button admin-users-button-primary" type="submit" disabled={loading || saving || !formIsValid}>{saving ? "در حال ثبت…" : approvedStartup ? "ایجاد دسترسی استارتاپ" : "ساخت حساب و ثبت نقش"}</button>
            <Link className="admin-users-button" to={approvedStartup ? "/panel/admin/organizations" : "/panel/admin/users"}>انصراف</Link>
            <p className="admin-form-actions-note">برای استارتاپ تأییدشده، پس از ثبت شخص و نقش وضعیت آن در «شرکت‌ها و استارتاپ‌ها» به «در انتظار فعال‌سازی» تغییر می‌کند.</p>
          </section>
        </form>
      </main>
      <AdminSidebar active="users" />
    </div>
  );
}
