import type { FormEvent } from "react";
import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AdminSidebar } from "../components/AdminSidebar";
import {
  listAdminOrganizations,
  listAdminRoles,
  type AdminOrganization,
  type AdminRole,
} from "../api";
import { createAdminProvisioningRecord } from "../provisioning-store";
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
  if (roleCode === "company_manager") return organization.type === "company";
  if (roleCode === "creative_house") return organization.type === "creative_house";
  if (roleCode === "emdad") return organization.type === "emdad" || organization.type === "supervisor";
  if (roleCode === "fund_manager") return organization.type === "fund" || organization.type === "fund_manager";
  if (roleCode === "system_admin") return organization.type === "platform";
  return true;
}

export default function AdminAddUser() {
  const navigate = useNavigate();
  const [organizations, setOrganizations] = useState<AdminOrganization[]>([]);
  const [roles, setRoles] = useState<AdminRole[]>([]);
  const [displayName, setDisplayName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [roleCode, setRoleCode] = useState("");
  const [organizationId, setOrganizationId] = useState("");
  const [startupName, setStartupName] = useState("");
  const [activityArea, setActivityArea] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    Promise.allSettled([listAdminOrganizations(), listAdminRoles()])
      .then(([organizationsResult, rolesResult]) => {
        if (!active) return;
        if (organizationsResult.status === "fulfilled") {
          setOrganizations(organizationsResult.value.filter((item) => item.status === "active"));
        }
        if (rolesResult.status === "fulfilled") {
          setRoles(rolesResult.value);
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
  }, []);

  const selectedRole = useMemo(
    () => roles.find((role) => role.code === roleCode),
    [roleCode, roles],
  );
  const isStartupRole = roleCode === "startup_manager";
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
      (isStartupRole ? startupName.trim() : selectedOrganization),
  );

  const submitUser = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formIsValid || !selectedRole || saving) return;

    setSaving(true);
    setError("");

    const organizationName = isStartupRole ? startupName.trim() : selectedOrganization?.name ?? "";
    const organizationType = isStartupRole ? "startup" : selectedOrganization?.type ?? "";
    const finalOrganizationId = isStartupRole
      ? `pending-startup:${startupName.trim().replace(/\s+/g, "-").toLocaleLowerCase("fa")}`
      : selectedOrganization?.organizationId ?? "";

    createAdminProvisioningRecord({
      displayName: displayName.trim(),
      mobile,
      email: email.trim(),
      roleCode: selectedRole.code,
      roleName: selectedRole.name,
      organizationId: finalOrganizationId,
      organizationName,
      organizationType,
      startupName: isStartupRole ? startupName.trim() : "",
      activityArea: isStartupRole ? activityArea.trim() : "",
    });

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
                <label htmlFor="admin-person-email">ایمیل (اختیاری)</label>
                <input id="admin-person-email" className="admin-form-input" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="name@example.com" type="email" dir="ltr" disabled={saving} />
              </div>
              <div className="admin-form-field">
                <label>وضعیت دعوت</label>
                <div className="admin-detail-value">پس از ثبت، حساب در وضعیت دعوت‌شده قرار می‌گیرد و اعلان برای ارسال آماده می‌شود.</div>
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
                    setRoleCode(event.target.value);
                    setOrganizationId("");
                    if (event.target.value !== "startup_manager") {
                      setStartupName("");
                      setActivityArea("");
                    }
                  }}
                  disabled={loading || saving || roles.length === 0}
                  required
                >
                  <option value="">انتخاب نقش</option>
                  {roles.map((role) => <option value={role.code} key={role.roleId}>{role.name}</option>)}
                </select>
              </div>

              {!isStartupRole ? (
                <div className="admin-form-field">
                  <label htmlFor="admin-user-org">سازمان / مجموعه</label>
                  <select id="admin-user-org" className="admin-form-input" value={organizationId} onChange={(event) => setOrganizationId(event.target.value)} disabled={loading || saving} required>
                    <option value="">انتخاب سازمان فعال</option>
                    {organizationOptions.map((organization) => (
                      <option value={organization.organizationId} key={organization.organizationId}>{organization.name}</option>
                    ))}
                  </select>
                </div>
              ) : (
                <>
                  <div className="admin-form-field">
                    <label htmlFor="admin-startup-name">نام استارتاپ</label>
                    <input id="admin-startup-name" className="admin-form-input" value={startupName} onChange={(event) => setStartupName(event.target.value)} placeholder="نام استارتاپ" disabled={saving} required />
                  </div>
                  <div className="admin-form-field">
                    <label htmlFor="admin-startup-area">حوزه فعالیت</label>
                    <input id="admin-startup-area" className="admin-form-input" value={activityArea} onChange={(event) => setActivityArea(event.target.value)} placeholder="مثلاً سلامت و بهداشت" disabled={saving} />
                  </div>
                </>
              )}
            </div>

            {isStartupRole ? (
              <div className="admin-startup-direct-note">
                <strong>ساخت استارتاپ از همین صفحه</strong>
                <span>مدیر سامانه مشخصات شخص و استارتاپ را وارد می‌کند؛ رکورد دعوت و دسترسی اولیه ساخته می‌شود و اعلان ورود برای شخص در صف ارسال قرار می‌گیرد.</span>
              </div>
            ) : null}

            {error ? <p className="admin-form-actions-note">{error}</p> : null}
          </section>

          <aside className="admin-info-note admin-info-note-tall">Backend فعلی ایجاد هویت جدید در Keycloak و ارسال واقعی SMS را هنوز پیاده نکرده است؛ بنابراین این فرم رکورد دعوت را ثبت می‌کند و تا اتصال سرویس هویت/پیامک، وضعیت اعلان به‌صورت «در انتظار اتصال سرویس» نمایش داده می‌شود.</aside>

          <section className="admin-form-actions">
            <button className="admin-users-button admin-users-button-primary" type="submit" disabled={loading || saving || !formIsValid}>{saving ? "در حال ثبت…" : "ساخت حساب و ثبت نقش"}</button>
            <Link className="admin-users-button" to="/panel/admin/users">انصراف</Link>
            <p className="admin-form-actions-note">برای استارتاپ، مشخصات مجموعه همین‌جا ثبت می‌شود؛ برای شرکت، سازمان موجود بدون مرحله تأیید جداگانه انتخاب می‌شود.</p>
          </section>
        </form>
      </main>
      <AdminSidebar active="users" />
    </div>
  );
}
