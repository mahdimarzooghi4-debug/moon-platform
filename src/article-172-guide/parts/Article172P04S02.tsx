import React from "react";

const steps = [
  { label: "ثبت درخواست بررسی", icon: "/assets/codia/pv1SxNjL8Y.svg" },
  { label: "دریافت رسید", icon: "/assets/codia/tFRLN6NHTq.svg" },
  { label: "پرداخت به کمیته امداد", icon: "/assets/codia/sLCn6vrk76.svg" },
  { label: "ثبت مشارکت", icon: "/assets/codia/DKH6OueQrc.svg" },
  { label: "انتخاب پروژه", icon: "/assets/codia/MX1aQWNoFO.svg" },
  { label: "حساب تأییدشده", icon: "/assets/codia/ya4k9TxCqx.svg" },
];

export function Article172P04S02() {
  return (
    <section className="flex flex-col items-start gap-[40px] px-[120px] py-[80px]" data-node-id="745:4432">
      <div className="flex w-full flex-col items-center gap-[12px] text-center">
        <h2 className="font-['Vazirmatn'] text-[28px] font-extrabold leading-[44px] text-[#17324d]" dir="auto">
          پرداخت باید از چه مسیری انجام شود؟
        </h2>
        <p className="w-full font-['Vazirmatn'] text-[15px] font-normal leading-[23px] text-[#60758a]" dir="auto">
          امنیت پرداخت و واریز امن مستقیماً به حساب رسمی همکار جهت اعتبار سنجی
        </p>
      </div>

      <div className="flex w-full items-start justify-center gap-[16px]">
        {steps.map((step, index) => (
          <React.Fragment key={step.label}>
            {index > 0 && (
              <div className="flex h-[86px] w-[16px] shrink-0 items-center justify-center">
                <img src="/assets/codia/ukNyoSxCht.svg" alt="" className="h-[16px] w-[16px]" />
              </div>
            )}
            <div className="flex min-w-0 flex-1 flex-col items-center gap-[10px] rounded-[12px] border border-[#e4ebf1] bg-white p-[16px] shadow-[0_4px_8px_rgba(23,46,71,0.08)]">
              <img src={step.icon} alt="" className="h-[24px] w-[24px]" />
              <p className="whitespace-nowrap text-center font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d]" dir="auto">
                {step.label}
              </p>
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className="w-full rounded-[12px] bg-[#eaf8f0] p-[16px]">
        <p className="w-full text-center font-['Vazirmatn'] text-[14px] font-bold leading-[22px] text-[#159455]" dir="auto">
          🛡 پرداخت مستقیم به استارتاپ در این مسیر معتبر نیست و در سامانه ماه انجام نمی‌شود.
        </p>
      </div>

      <p className="w-full text-center font-['Vazirmatn'] text-[14px] font-normal leading-[22px] text-[#60758a]" dir="auto">
        کمیته امداد دریافت‌کننده رسمی مشارکت است. پرداخت مرحله‌ای منابع به استارتاپ پس از اجرای پروژه و تأیید KPI توسط خانه خلاق انجام می‌شود.
      </p>
    </section>
  );
}
