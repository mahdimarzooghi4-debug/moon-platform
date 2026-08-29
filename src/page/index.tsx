import React from "react";
import "./index.css";

export default function Main() {
  return <main className="main-container flex min-h-[900px] w-[1440px] bg-[#f4f7f9] text-[#17324d]" dir="rtl">
    <section className="relative flex w-[792px] flex-col bg-[#eaf5fd] px-[72px] py-[64px]">
      <img className="self-end h-[46px] w-[137px] object-contain" src="/assets/codia/6PbU3hBgAg.png" alt="سامانه ماه" />
      <div className="my-auto">
        <span className="text-[12px] font-bold text-[#2094e3]">مدیریت محتوای عمومی</span>
        <h1 className="mt-7 text-[32px] font-extrabold">مدیریت شفاف محتوای سامانه ماه</h1>
        <p className="mt-5 max-w-[650px] text-[15px] leading-8 text-[#60758a]">این بخش فقط در اختیار اعضای تأییدشده تیم محتوا، بازبین‌ها و ناشران قرار دارد. دسترسی به پنل CMS مشمول سیاست‌ها و راهنمای امنیت حساب است.</p>
        <ul className="mt-8 space-y-5 text-[14px] font-bold">
          {["مدیریت محتوای عمومی","بازبینی و انتشار کنترل‌شده","ثبت و ردیابی تغییرات"].map((x,i)=><li className="flex items-center gap-3" key={x}><span className="grid h-8 w-8 place-items-center rounded-lg bg-white text-[#2094e3] shadow-sm">{["▢","♢","◷"][i]}</span>{x}</li>)}
        </ul>
      </div>
      <p className="flex items-center gap-2 text-[12px] text-[#60758a]"><span aria-hidden="true">♙</span> دسترسی به این بخش براساس نقش سازمانی و مجوزهای تأییدشده انجام می‌شود.</p>
    </section>

    <section className="flex w-[648px] flex-col items-center justify-center px-[84px]">
      <div className="w-full rounded-[24px] border border-[#dbe4ec] bg-white p-9 shadow-[0_8px_22px_rgba(22,45,71,0.08)]">
        <span className="inline-flex rounded-xl bg-[#fef0ee] px-4 py-2 text-[12px] font-bold text-[#d92d20]">خطای دسترسی</span>
        <h2 className="mt-4 text-[22px] font-extrabold">دسترسی CMS برای این حساب فعال نیست</h2>
        <p className="mt-3 text-[14px] leading-7 text-[#60758a]">احراز هویت انجام شد، اما نقش فعال مدیریت محتوا برای این حساب پیدا نشد.</p>
        <div role="alert" className="mt-6 rounded-xl bg-[#fef0ee] p-5 text-[13px] leading-7 text-[#b42318]">لطفاً با مدیر سیستم سازمان خود یا بخش پشتیبانی فنی مکاتبه کنید تا دسترسی شما تعریف و فعال گردد.</div>
        <button className="mt-6 w-full rounded-xl bg-[#2094e3] py-3.5 text-[14px] font-bold text-white">بازگشت به وب‌سایت ماه</button>
        <button className="mt-3 w-full rounded-xl border border-[#dbe4ec] py-3.5 text-[14px] font-bold text-[#2094e3]">درخواست بررسی دسترسی</button>
        <button className="mt-5 w-full text-[13px] font-bold text-[#60758a]">خروج از حساب کاربری</button>
      </div>
      <div className="mt-8 text-center text-[12px] leading-8 text-[#60758a]"><div className="flex gap-5"><a href="#">راهنمای امنیت حساب</a><span>|</span><a href="#">شرایط استفاده</a><span>|</span><a href="#">حریم خصوصی</a></div><p>© سامانه ماه • مدیریت مسئولیت اجتماعی هوشمند</p></div>
    </section>
  </main>;
}
