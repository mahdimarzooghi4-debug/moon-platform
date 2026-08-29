import React from "react";
import "./index.css";

export default function Main(){
 return <main className="main-container flex min-h-[900px] w-[1440px] flex-col items-center justify-center bg-[#f7fafc] text-[#17324d]" dir="rtl">
  <section className="w-[478px] rounded-[24px] border border-[#dbe4ec] bg-white p-9 shadow-[0_8px_22px_rgba(22,45,71,0.08)]">
   <div className="text-right"><span className="inline-flex rounded-xl bg-[#eaf5fd] px-4 py-2 text-[12px] text-[#2094e3]">مدیریت عمومی محتوا</span><h1 className="mt-4 text-[24px] font-extrabold">ورود به مدیریت محتوا</h1><p className="mt-2 text-[14px] text-[#60758a]">با حساب سازمانی تأییدشده خود وارد شوید.</p></div>
   <button className="mt-6 w-full rounded-xl border border-[#dbe4ec] py-3 text-[14px] font-bold text-[#60758a]">ورود با حساب سازمانی</button>
   <div className="my-8 flex items-center gap-4 text-[12px] text-[#60758a]"><span className="h-px flex-1 bg-[#dbe4ec]"/><span>یا</span><span className="h-px flex-1 bg-[#dbe4ec]"/></div>
   <label className="block text-[13px] font-bold">ایمیل سازمانی<input className="mt-2 h-12 w-full rounded-xl border border-[#edf1f4] bg-[#f7f9fb] px-4 text-left text-[14px] text-[#93a5b7]" value="editor@mah.ir" readOnly dir="ltr"/></label>
   <label className="mt-5 block text-[13px] font-bold">رمز عبور<div className="mt-2 flex h-12 items-center rounded-xl border border-[#edf1f4] bg-[#f7f9fb] px-4"><span className="text-[#9eb0c0]">◉</span><input className="w-full bg-transparent text-left text-[14px] text-[#93a5b7]" value="password" readOnly dir="ltr"/></div></label>
   <div className="mt-6 flex items-center justify-between text-[13px] text-[#60758a]"><label className="flex items-center gap-2"><span className="grid h-5 w-5 place-items-center rounded bg-[#65b9ec] font-bold text-white">✓</span>این دستگاه سازمانی را به خاطر بسپار</label><a href="#">رمز عبور را فراموش کرده‌ام</a></div>
   <button className="mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-[#49a9e3] py-3.5 text-[14px] font-bold text-white"><span className="loader h-5 w-5 rounded-full border-2 border-white/60 border-t-white"/>در حال بررسی اطلاعات...</button>
  </section>
  <footer className="mt-8 text-center text-[12px] leading-8 text-[#60758a]"><div className="flex gap-5"><a href="#">راهنمای امنیت حساب</a><span>|</span><a href="#">شرایط استفاده</a><span>|</span><a href="#">حریم خصوصی</a></div><p>© سامانه ماه • مدیریت مسئولیت اجتماعی هوشمند</p></footer>
 </main>;
}
