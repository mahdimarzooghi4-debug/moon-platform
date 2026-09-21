import React from "react";
import { useParams } from "react-router-dom";
import { STARTUP_SAMPLES } from "./DirectoryControls";

export default function StartupDirectorySampleProfile() {
  const { sampleId } = useParams<{ sampleId: string }>();
  const startup = STARTUP_SAMPLES.find((item) => item.id === sampleId);

  if (!startup) {
    return (
      <main dir="rtl" className="mx-auto min-h-[70vh] max-w-[960px] space-y-[20px] px-[24px] py-[72px] text-right font-['Vazirmatn'] text-[#17324d]">
        <h1 className="text-[26px] font-bold">پروفایل پیدا نشد</h1>
        <p>برای این نشانی، استارتاپی در فهرست نمایشی ماه وجود ندارد.</p>
        <a href="/startups-directory" className="inline-flex rounded-[12px] bg-[#2094e3] px-[20px] py-[12px] text-white">بازگشت به استارتاپ‌ها</a>
      </main>
    );
  }

  return (
    <main dir="rtl" className="min-h-[75vh] bg-[#fcfbf8] px-[20px] py-[32px] text-right font-['Vazirmatn'] text-[#17324d]">
      <div className="mx-auto flex w-full max-w-[1000px] flex-col gap-[24px]">
        <nav aria-label="مسیر صفحه" className="flex flex-wrap items-center justify-start gap-[12px] text-[14px] text-[#60758a]">
          <a href="/" className="text-[#2094e3] hover:underline">صفحه اصلی</a>
          <span aria-hidden="true">/</span>
          <a href="/startups-directory" className="text-[#2094e3] hover:underline">استارتاپ‌ها</a>
          <span aria-hidden="true">/</span>
          <span>{startup.name}</span>
        </nav>
        <section className="flex flex-col gap-[20px] rounded-[24px] border border-[#e4ebf1] bg-white p-[24px] shadow-[0_4px_16px_rgba(22,45,71,0.05)] sm:p-[40px]">
          <span className="w-fit rounded-[8px] bg-[#eaf5fd] px-[10px] py-[5px] text-[12px] text-[#176bac]">
            نمایه نمایشی فهرست استارتاپ‌های ماه
          </span>
          <h1 className="m-0 text-[28px] font-extrabold">{startup.name}</h1>
          <p className="m-0 text-[16px] leading-[30px] text-[#495468]">{startup.summary}</p>
          <dl className="grid grid-cols-1 gap-[16px] border-t border-[#e4ebf1] pt-[24px] sm:grid-cols-2">
            <div className="text-right">
              <dt className="text-[13px] text-[#60758a]">محل فعالیت</dt>
              <dd className="m-0 mt-[5px] font-semibold">{startup.city}، {startup.region}</dd>
            </div>
            <div className="text-right">
              <dt className="text-[13px] text-[#60758a]">حوزه اثر</dt>
              <dd className="m-0 mt-[5px] font-semibold">{startup.impact.join("، ")}</dd>
            </div>
          </dl>
          <p className="m-0 rounded-[12px] bg-[#f2f8ff] p-[14px] text-[13px] leading-[25px] text-[#495468]">
            این نمایه فقط اطلاعات موجود در فهرست نمایشی ماه را نشان می‌دهد؛ اطلاعات ثبتی یا تأیید نهایی استارتاپ از سرور اصلی دریافت نشده است.
          </p>
          <div className="flex flex-wrap items-center justify-start gap-[12px]">
            {startup.projectHref ? (
              <a href={startup.projectHref} className="inline-flex min-h-[42px] items-center justify-center rounded-[12px] bg-[#2094e3] px-[20px] py-[10px] text-[14px] text-white hover:bg-[#167dca]">
                مشاهده پروژه معرفی‌شده
              </a>
            ) : (
              <a href="/projects" className="inline-flex min-h-[42px] items-center justify-center rounded-[12px] bg-[#2094e3] px-[20px] py-[10px] text-[14px] text-white hover:bg-[#167dca]">
                مشاهده فهرست پروژه‌ها
              </a>
            )}
            <a href="/startups-directory" className="inline-flex min-h-[42px] items-center justify-center rounded-[12px] border border-[#2094e3] px-[20px] py-[10px] text-[14px] text-[#176bac] hover:bg-[#eaf5fd]">
              بازگشت به فهرست استارتاپ‌ها
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
