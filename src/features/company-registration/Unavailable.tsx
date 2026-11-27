import { Link } from "react-router-dom";

/**
 * The legacy company registration screens contain sample data and no
 * submission backend. Keep them out of public routes until the real
 * registration, tracking and authorization contract is implemented.
 */
export default function CompanyRegistrationUnavailable() {
  return (
    <main dir="rtl" className="mx-auto flex min-h-screen max-w-3xl items-center px-4 py-12">
      <section className="w-full rounded-2xl border border-slate-200 bg-white p-8 text-right">
        <h1 className="mb-3 text-xl font-bold text-slate-800">ثبت‌نام شرکت‌ها و سازمان‌ها</h1>
        <p role="status" className="leading-8 text-slate-700">
          ثبت‌نام و پیگیری درخواست شرکت‌ها در حال حاضر فعال نیست.
          در این صفحه اطلاعاتی ثبت نمی‌شود و کد رهگیری صادر نمی‌شود.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/" className="rounded-xl border border-slate-200 px-5 py-3 text-slate-700">بازگشت به صفحه اصلی</Link>
          <Link to="/contact" className="rounded-xl bg-[#1476b9] px-5 py-3 text-white">تماس با پشتیبانی</Link>
        </div>
      </section>
    </main>
  );
}
