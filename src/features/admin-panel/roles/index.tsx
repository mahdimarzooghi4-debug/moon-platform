import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AdminSidebar } from "../components/AdminSidebar";
import { listAdminRoles, type AdminRole } from "../api";
import "../index.css";
import "../users-flow.css";

const numberFa = new Intl.NumberFormat("fa-IR");

export default function AdminRoleManagement() {
  const [roles, setRoles] = useState<AdminRole[]>([]);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;
    listAdminRoles()
      .then((items) => {
        if (!active) return;
        setRoles(items);
        setFailed(false);
      })
      .catch(() => {
        if (active) setFailed(true);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="admin-panel-shell" data-node-id="2273:2">
      <main className="admin-users-main" dir="rtl">
        <header className="admin-users-header">
          <div className="admin-users-heading">
            <h1>مدیریت نقش‌ها</h1>
            <p>مرور نقش‌های سیستمی و تعداد عضویت‌های فعال هر نقش</p>
          </div>
          <div className="admin-users-actions">
            <Link className="admin-users-button admin-users-button-wide" to="/panel/admin/users">بازگشت به کاربران</Link>
          </div>
        </header>

        <section className="admin-form-card">
          <h2>نقش‌های ثبت‌شده در Backend</h2>
          <p>این نقش‌ها Seed سیستمی هستند؛ تخصیص نقش به کاربر از طریق Membership انجام می‌شود.</p>
          {failed ? <p className="admin-form-actions-note">دریافت نقش‌ها از سرور ناموفق بود.</p> : null}
          <div className="admin-form-grid">
            {!loading && roles.map((role) => (
              <div className="admin-form-field" key={role.roleId}>
                <label>{role.name}</label>
                <div className="admin-detail-value">{role.code} — {numberFa.format(role.activeMemberCount)} عضویت فعال</div>
              </div>
            ))}
          </div>
          {loading ? <p className="admin-form-actions-note">در حال دریافت نقش‌ها…</p> : null}
        </section>

        <aside className="admin-info-note admin-info-note-tall">تعریف نقش‌های پایه و policyهای امنیتی در Backend کنترل می‌شود. این صفحه فعلاً نقش‌های واقعی و میزان استفاده از آن‌ها را نمایش می‌دهد و ویرایش مستقیم policy را مجاز نمی‌کند.</aside>

        <section className="admin-form-actions">
          <Link className="admin-users-button admin-users-button-primary" to="/panel/admin/users/new">افزودن دسترسی</Link>
          <Link className="admin-users-button" to="/panel/admin/users">بازگشت</Link>
          <p className="admin-form-actions-note">هر تخصیص یا لغو Membership در Audit ثبت می‌شود.</p>
        </section>
      </main>
      <AdminSidebar active="users" />
    </div>
  );
}
