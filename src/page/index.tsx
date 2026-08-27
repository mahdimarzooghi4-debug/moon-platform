import React from "react";
import "./index.css";

const ASSET = "/assets/mah/";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center justify-center rounded-[12px] bg-[#eaf5fd] px-[12px] py-[6px] text-[12px] font-normal leading-[20px] text-[#2094e3]">
      {children}
    </span>
  );
}

const features = [
  ["مدیریت محتوای عمومی", "login-maintenance-file.svg"],
  ["بازبینی و انتشار کنترل‌شده", "login-maintenance-shield.svg"],
  ["ثبت و ردیابی تغییرات", "login-maintenance-clock-small.svg"],
] as const;

export default function Main() {
  return (
    <main
      className="main-container mx-auto flex h-[900px] w-[1440px] items-start bg-[#f7fafc]"
      dir="ltr"
      data-name="mah-cms-login-maintenance"
    >
      <section
        className="flex h-full w-[648px] shrink-0 flex-col items-center justify-center bg-[#f7fafc] p-[48px]"
        dir="rtl"
      >
        <div className="flex w-full max-w-[480px] flex-col items-start gap-[28px]">
          <div className="flex w-full flex-col items-start gap-[24px] rounded-[24px] border border-[#e4ebf1] bg-white p-[36px] shadow-[0_4px_8px_rgba(23,46,71,0.08)]">
            <div className="flex w-full flex-col items-end gap-[16px]">
              <div className="flex size-[56px] shrink-0 items-center justify-center rounded-full bg-[#eaf5fd]">
                <img
                  src={`${ASSET}login-maintenance-clock.svg`}
                  alt=""
                  className="size-[24px]"
                />
              </div>

              <div className="flex w-full flex-col items-end gap-[8px]">
                <Badge>به‌روزرسانی دوره‌ای</Badge>
                <h1 className="m-0 w-full text-right text-[22px] font-bold leading-normal text-[#17324d]">
                  مدیریت محتوا در حال به‌روزرسانی است
                </h1>
                <p className="m-0 w-full text-right text-[14px] font-normal leading-[22px] text-[#60758a]">
                  در این مدت وب‌سایت عمومی در دسترس است، اما ورود به CMS موقتاً امکان‌پذیر نیست.
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col gap-[12px] text-[13px] leading-normal">
              <div
                className="flex w-full items-center justify-between border-b border-[#e4ebf1] pb-[8px]"
                dir="ltr"
              >
                <span className="font-bold text-[#17324d]" dir="rtl">
                  ۲۴ مرداد، ساعت ۱۸:۰۰
                </span>
                <span className="font-normal text-[#60758a]" dir="rtl">
                  زمان تخمینی پایان
                </span>
              </div>
              <div
                className="flex w-full items-center justify-between border-b border-[#e4ebf1] pb-[8px]"
                dir="ltr"
              >
                <span className="font-normal text-[#17324d]" dir="rtl">
                  امروز، ساعت ۱۴:۰۰
                </span>
                <span className="font-normal text-[#60758a]" dir="rtl">
                  شروع عملیات
                </span>
              </div>
            </div>

            <div className="flex w-full flex-col items-end gap-[8px] text-right text-[13px] font-bold text-[#2094e3]">
              <a href="#" className="underline underline-offset-2">
                مشاهده وب‌سایت عمومی ماه
              </a>
              <a href="#" className="underline underline-offset-2">
                گزارش مشکلات فنی به پشتیبانی
              </a>
            </div>
          </div>

          <footer className="flex w-full flex-col items-center gap-[12px] text-[#60758a]">
            <nav className="flex items-start justify-center gap-[16px] text-[13px]" dir="rtl">
              <span>راهنمای امنیت حساب</span>
              <span>|</span>
              <span>شرایط استفاده</span>
              <span>|</span>
              <span>حریم خصوصی</span>
            </nav>
            <p className="m-0 text-[11px] font-normal leading-normal">
              © سامانه ماه · مدیریت مسئولیت اجتماعی هوشمند
            </p>
          </footer>
        </div>
      </section>

      <section
        className="flex h-full w-[792px] shrink-0 flex-col items-end justify-between border-l border-[#e4ebf1] bg-[#eaf5fd] p-[64px]"
        dir="rtl"
      >
        <header className="flex w-full items-center justify-end">
          <div className="h-[46px] w-[137px] overflow-hidden">
            <img
              src={`${ASSET}logo.png`}
              alt="ماه"
              className="h-full w-full object-contain"
            />
          </div>
        </header>

        <div className="flex w-full flex-col items-end gap-[32px]">
          <div className="flex w-full flex-col items-end gap-[12px]">
            <Badge>مدیریت محتوای عمومی</Badge>
            <h2 className="m-0 w-full text-right text-[32px] font-bold leading-normal text-[#17324d]">
              مدیریت شفاف محتوای سامانه ماه
            </h2>
            <p className="m-0 w-full text-right text-[15px] font-normal leading-[26px] text-[#60758a]">
              این بخش فقط در اختیار اعضای تأییدشده تیم محتوا، بازبین‌ها و ناشران سامانه قرار دارد. دسترسی به پنل CMS مشمول سیاست‌ها و راهنمای امنیت حساب است.
            </p>
          </div>

          <div className="flex w-full flex-col items-start gap-[16px]">
            {features.map(([label, icon]) => (
              <div
                key={label}
                className="flex w-full items-center justify-end gap-[12px]"
                dir="ltr"
              >
                <span className="text-right text-[14px] font-medium leading-normal text-[#17324d]" dir="rtl">
                  {label}
                </span>
                <span className="flex size-[32px] shrink-0 items-center justify-center rounded-[8px] border border-[#e4ebf1] bg-white">
                  <img src={`${ASSET}${icon}`} alt="" className="size-[16px]" />
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full items-center justify-end gap-[8px]" dir="ltr">
          <p className="m-0 min-w-0 flex-1 text-right text-[12px] font-normal leading-normal text-[#60758a]" dir="rtl">
            دسترسی به این بخش براساس نقش سازمانی و مجوزهای تأییدشده انجام می‌شود.
          </p>
          <img
            src={`${ASSET}login-maintenance-lock.svg`}
            alt=""
            className="size-[14px] shrink-0"
          />
        </div>
      </section>
    </main>
  );
}
