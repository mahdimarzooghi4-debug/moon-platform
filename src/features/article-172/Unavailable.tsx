import { Link } from "react-router-dom";

function CertificateUnavailable({ company }: { company: boolean }) {
  return (
    <main dir="rtl" className="mx-auto flex min-h-screen max-w-3xl items-center px-4 py-12">
      <section className="w-full rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 text-right">
        <h1 className="mb-4 text-xl font-bold text-[#17324d]">{company ? "گواهی ماده ۱۷۲" : "بررسی و صدور گواهی ماده ۱۷۲"}</h1>
        <p role="status" className="leading-8 text-slate-700">
          {company ? "مشاهده گواهی‌های رسمی در حال حاضر از این بخش فعال نیست." : "فرایند عملیاتی بررسی و صدور رسمی گواهی در این بخش هنوز فعال نیست."}
          {" "}این صفحه هیچ گواهی، شماره نامه یا تأییدیه رسمی صادر نمی‌کند.
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-600">مرجع صدور رسمی گواهی کمیته امداد امام خمینی (ره) است. ثبت‌نام شرکت یا ثبت پرداخت به‌تنهایی به معنی صدور گواهی نیست.</p>
        <Link to={company ? "/panel/company" : "/panel/emdad"} className="mt-6 inline-block rounded-xl bg-[#1476b9] px-5 py-3 text-sm text-white">بازگشت به پنل</Link>
      </section>
    </main>
  );
}
export function CompanyCertificateUnavailable() { return <CertificateUnavailable company={true} />; }
export function EmdadCertificateUnavailable() { return <CertificateUnavailable company={false} />; }
