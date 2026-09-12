import React from "react";
import { checkoutAssets } from "./checkout-utils";

export function CheckoutHeader({ onBack }: { onBack: () => void }) {
  return (
    <>
      <header className="flex h-20 w-full items-center justify-between border-b border-[#e4ebf1] bg-white px-[120px] py-4">
        <div className="flex items-center gap-6">
          <button type="button" onClick={onBack} className="cursor-pointer border-0 bg-transparent p-0 text-[14px] font-medium text-[#60758a] underline">انصراف و بازگشت به پروژه</button>
          <div className="flex items-center gap-2 rounded-xl bg-[#eaf5fd] px-3 py-1.5" dir="rtl">
            <span className="text-[12px] font-medium text-[#2094e3]">پرداخت امن از طریق درگاه رسمی</span>
            <img src={checkoutAssets.lock} alt="" className="h-3.5 w-3.5" />
          </div>
        </div>
        <div className="flex items-center gap-6" dir="rtl">
          <img src={checkoutAssets.logo} alt="سامانه ماه" className="h-[46px] w-[137px] object-contain" />
          <div className="h-6 w-px bg-[#e4ebf1]" />
          <strong className="text-[18px] leading-7">تکمیل مشارکت</strong>
        </div>
      </header>
      <section className="w-full px-[120px] pb-2 pt-6 text-right" dir="rtl">
        <p className="m-0 text-[13px] leading-5 text-[#60758a]">پروژه‌ها / اشتغال زنان روستایی / تکمیل مشارکت</p>
      </section>
      <section className="flex w-full flex-col items-center gap-4 px-[120px] pb-8 pt-4">
        <div className="flex w-[600px] items-center justify-center gap-6" dir="ltr">
          <div className="flex items-center gap-2" dir="rtl"><div className="flex h-6 w-6 items-center justify-center rounded-full border-[1.5px] border-[#e4ebf1] text-[11px] text-[#60758a]">۳</div><span className="text-[13px] text-[#60758a]">پرداخت نهایی</span></div>
          <div className="h-px w-10 bg-[#e4ebf1]" />
          <div className="flex items-center gap-2" dir="rtl"><div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2094e3] text-[11px] font-bold text-white">۲</div><span className="text-[13px] font-bold text-[#17324d]">تأیید اطلاعات</span></div>
          <div className="h-px w-10 bg-[#2094e3]" />
          <div className="flex items-center gap-2" dir="rtl"><div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#eaf5fd]"><img src={checkoutAssets.completedStep} alt="" className="h-3 w-3" /></div><span className="text-[13px] font-medium text-[#2094e3]">انتخاب مبلغ</span></div>
        </div>
        <p className="m-0 w-full text-center text-[14px] text-[#60758a]" dir="rtl">پس از تأیید اطلاعات، برای پرداخت به درگاه رسمی منتقل می‌شوید.</p>
      </section>
    </>
  );
}

function FooterButton({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return <button type="button" onClick={onClick} className="cursor-pointer border-0 bg-transparent p-0 text-right text-[13px] leading-5 text-[#e4ebf1] hover:text-white">{children}</button>;
}

export function CheckoutFooter({ navigateTo }: { navigateTo: (path: string) => void }) {
  return (
    <footer className="flex w-full flex-col gap-16 bg-[#111e30] px-[120px] pb-10 pt-20 text-right" dir="ltr">
      <div className="flex w-full items-start gap-12">
        <div className="flex w-[220px] flex-col items-end gap-3" dir="rtl">
          <strong className="text-[14px] text-white">ارتباط با ما</strong>
          <span className="text-[13px] text-[#e4ebf1]" dir="ltr">تلفن: ۰۲۱-۶۶۴۸۵۳۷۴</span>
          <span className="text-[13px] text-[#e4ebf1]" dir="ltr">ایمیل: info@mahcsr.ir</span>
          <span className="w-[220px] text-right text-[12px] leading-5 text-[#e4ebf1]">آدرس: تهران، خیابان انقلاب، خیابان رازی، کوچه شهبازیان، پلاک ۲۲</span>
          <div className="flex items-center gap-3 pt-2"><img src={checkoutAssets.telegram} alt="تلگرام" className="h-[18px] w-[18px]" /><img src={checkoutAssets.eitaa} alt="ایتا" className="h-[18px] w-[18px]" /></div>
        </div>
        <div className="flex h-[182px] w-[150px] flex-col items-end gap-3" dir="rtl"><strong className="text-[14px] text-white">حقوقی</strong><FooterButton onClick={() => navigateTo("/terms")}>قوانین و مقررات</FooterButton><FooterButton onClick={() => navigateTo("/privacy-policy")}>حریم خصوصی</FooterButton></div>
        <div className="flex h-[182px] w-[160px] flex-col items-end gap-3" dir="rtl"><strong className="text-[14px] text-white">پشتیبانی</strong><FooterButton onClick={() => navigateTo("/contact")}>تماس با ما</FooterButton><FooterButton onClick={() => navigateTo("/faq")}>سؤالات متداول</FooterButton><FooterButton onClick={() => navigateTo("/participation/track")}>پیگیری مشارکت</FooterButton></div>
        <div className="flex w-[180px] flex-col items-end gap-3" dir="rtl"><strong className="text-[14px] text-white">دسترسی سریع</strong><FooterButton onClick={() => navigateTo("/projects")}>پروژه‌ها</FooterButton><FooterButton onClick={() => navigateTo("/companies")}>برای شرکت‌ها</FooterButton><FooterButton onClick={() => navigateTo("/how-it-works")}>نحوه مشارکت</FooterButton><FooterButton onClick={() => navigateTo("/register/startup")}>ثبت‌نام استارتاپ</FooterButton><FooterButton onClick={() => navigateTo("/news")}>اخبار و رویدادها</FooterButton></div>
        <div className="flex h-[182px] w-[298px] flex-col items-end gap-3.5" dir="rtl"><img src={checkoutAssets.footerLogo} alt="سامانه ماه" className="h-[70px] w-[210px] object-contain" /><p className="m-0 w-full text-[13px] leading-[22px] text-[#e4ebf1]">سامانه مشارکت در پروژه‌های اثر اجتماعی با مسیر مالی شفاف و اثر قابل‌اندازه‌گیری.</p></div>
      </div>
      <div className="flex w-full flex-col items-center gap-1 border-t border-white/10 pt-5 text-center text-[12px] text-[#e4ebf1]" dir="rtl"><span>طراحی و توسعه با هدف ارتقای عدالت اجتماعی</span><span>تمامی حقوق برای سامانه ماه محفوظ است.</span></div>
    </footer>
  );
}
