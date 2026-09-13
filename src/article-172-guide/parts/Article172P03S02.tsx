import React from "react";

const checklistItems = [
  "شناسه ملی شرکت و شماره ثبت اسناد",
  "کد اقتصادی فعال شخصیت حقوقی",
  "روزنامه رسمی آخرین تغییرات و صاحبان امضا",
  "رسید الکترونیکی پرداخت از درگاه معتبر",
  "نام و جزئیات دقیق پروژه اجتماعی در ماه",
  "گواهی هویتی نماینده قانونی معرفی‌شده",
  "نامه رسمی درخواست تاییدیه با امضای مجاز",
  "مستندات احراز صلاحیت و وضعیت مالیاتی",
  "تاییدیه اولیه تحقق شاخص‌های فیزیکی پروژه",
];

export function Article172P03S02() {
  return (
    <section
      className="flex flex-col items-start gap-[40px] bg-white px-[120px] py-[80px]"
      data-node-id="745:4297"
    >
      <div className="flex w-full flex-col items-center gap-[12px] text-center">
        <h2
          className="font-['Vazirmatn'] text-[28px] font-extrabold leading-[44px] text-[#17324d]"
          dir="auto"
        >
          چه اطلاعاتی ممکن است درخواست شود؟
        </h2>
        <p
          className="w-full font-['Vazirmatn'] text-[15px] font-normal leading-[23px] text-[#60758a]"
          dir="auto"
        >
          فهرست دقیق مدارک به نوع مشارکت و ضوابط جاری وابسته است. موارد زیر فقط نمونه عمومی هستند.
        </p>
      </div>

      <div className="flex w-full flex-col items-start gap-[24px] rounded-[24px] border border-[#e4ebf1] bg-[#fcfbf8] p-[32px] shadow-[0_4px_8px_rgba(23,46,71,0.08)]">
        <div className="flex w-full items-center justify-end">
          <h3
            className="text-right font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#17324d]"
            dir="auto"
          >
            نمونه اسناد و مستندات بررسی عمومی
          </h3>
        </div>

        <div className="h-px w-full bg-[#e4ebf1]" />

        <div className="grid w-full grid-cols-3 gap-x-[20px] gap-y-[20px]">
          {checklistItems.map((item) => (
            <div key={item} className="flex min-w-0 items-center justify-end gap-[12px]">
              <p
                className="min-w-0 flex-1 text-right font-['Vazirmatn'] text-[14px] font-normal leading-[22px] text-[#17324d]"
                dir="auto"
              >
                {item}
              </p>
              <img
                src="/assets/codia/article-172-check-circle.svg"
                alt=""
                className="h-[18px] w-[18px] shrink-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
