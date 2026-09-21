import React from "react";
import { createPortal } from "react-dom";

type MoonIntroDialogProps = {
  onClose: () => void;
};

export default function MoonIntroDialog({ onClose }: MoonIntroDialogProps) {
  const closeButton = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onEscape);
      previousFocus?.focus();
    };
  }, [onClose]);

  return createPortal(
    <div
      dir="rtl"
      className="fixed inset-0 z-[99999] flex items-center justify-center overflow-y-auto bg-[#111e30]/70 px-[16px] py-[32px] font-['Vazirmatn']"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="mah-intro-dialog-title"
        aria-describedby="mah-intro-dialog-description"
        className="relative flex w-full max-w-[620px] flex-col gap-[18px] rounded-[24px] bg-white p-[24px] text-right text-[#17324d] shadow-2xl sm:p-[36px]"
      >
        <button
          ref={closeButton}
          type="button"
          aria-label="بستن معرفی ماه"
          onClick={onClose}
          className="absolute left-[20px] top-[20px] flex h-[36px] w-[36px] items-center justify-center rounded-[10px] border border-[#e4ebf1] bg-white text-[22px] text-[#17324d] hover:bg-[#eaf5fd] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2094e3]"
        >
          ×
        </button>
        <span className="w-fit rounded-[10px] bg-[#eaf5fd] px-[12px] py-[6px] text-[12px] font-bold text-[#176bac]">
          آشنایی کوتاه با سامانه ماه
        </span>
        <h2 id="mah-intro-dialog-title" className="m-0 pl-[35px] text-[24px] font-extrabold leading-[40px]">
          ماه؛ مشارکت شفاف در پروژه‌های اثر اجتماعی
        </h2>
        <div id="mah-intro-dialog-description" className="flex flex-col gap-[12px] text-[14px] leading-[28px] text-[#495468]">
          <p className="m-0">
            ماه بستری برای آشنایی حامیان و سازمان‌ها با پروژه‌های اجتماعی در حوزه‌هایی مانند اشتغال، آموزش و سلامت است.
          </p>
          <p className="m-0">
            در هر پروژه می‌توانید هدف، میزان منابع موردنیاز، مجری و شاخص‌های اثر اجتماعی را ببینید و درباره مشارکت تصمیم بگیرید.
          </p>
          <p className="m-0">
            در نسخه آزمایشی فعلی، نمایش پروژه‌ها فعال است؛ اتصال کامل پرداخت و اطلاعات اجرایی با راه‌اندازی زیرساخت اصلی تکمیل خواهد شد.
          </p>
        </div>
        <p role="status" className="m-0 rounded-[12px] border border-[#cfe4f8] bg-[#f2f8ff] px-[14px] py-[12px] text-[13px] leading-[25px] text-[#176bac]">
          ویدئوی معرفی ۹۰ ثانیه‌ای هنوز در فایل‌های سایت بارگذاری نشده است. تا آماده‌شدن ویدئو، معرفی کوتاه ماه را همین‌جا می‌خوانید.
        </p>
        <div className="flex flex-wrap gap-[10px] pt-[4px]">
          <a href="/about" className="inline-flex min-h-[42px] items-center justify-center rounded-[12px] bg-[#2094e3] px-[20px] py-[10px] text-[13px] text-white hover:bg-[#167dca]">
            آشنایی بیشتر با ماه
          </a>
          <button type="button" onClick={onClose} className="min-h-[42px] rounded-[12px] border border-[#e4ebf1] bg-white px-[20px] py-[10px] text-[13px] text-[#17324d] hover:bg-[#f2f8ff]">
            بازگشت به صفحه اصلی
          </button>
        </div>
      </section>
    </div>,
    document.body,
  );
}
