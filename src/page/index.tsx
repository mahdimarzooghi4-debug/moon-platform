import React from "react";
import "./index.css";

function Footer() {
  return <footer className="bg-[#111e30] px-[120px] pb-7 pt-14 text-white">
    <div className="grid grid-cols-[1.7fr_1fr_1fr_1fr_1fr] gap-12">
      <div><img className="mb-5 h-[50px] w-[150px] object-contain brightness-0 invert" src="/assets/codia/j0Pvw1w6QL.png" alt="سامانه ماه" /><p className="text-[13px] leading-7 text-[#c7d2dc]">سامانه مشارکت در پروژه‌های اثر اجتماعی با مسیر مالی شفاف و اثر قابل‌اندازه‌گیری.</p></div>
      <div><h3 className="mb-3 font-bold">دسترسی سریع</h3><p className="text-[13px] leading-8 text-[#c7d2dc]">پروژه‌ها<br />برای شرکت‌ها<br />نحوه مشارکت<br />ثبت‌نام استارتاپ<br />اخبار و رویدادها</p></div>
      <div><h3 className="mb-3 font-bold">پشتیبانی</h3><p className="text-[13px] leading-8 text-[#c7d2dc]">تماس با ما<br />سؤالات متداول<br />پیگیری مشارکت</p></div>
      <div><h3 className="mb-3 font-bold">حقوقی</h3><p className="text-[13px] leading-8 text-[#c7d2dc]">قوانین و مقررات<br />حریم خصوصی</p></div>
      <div><h3 className="mb-3 font-bold">ارتباط با ما</h3><p className="text-[13px] leading-8 text-[#c7d2dc]">تلفن: ۰۲۱-۸۸۸۸۸۸۸۸<br />ایمیل: info@mahplatform.ir</p></div>
    </div>
    <div className="mt-9 border-t border-[#304154] pt-5 text-center text-[12px] leading-6 text-[#93a5b7]">طراحی و توسعه با هدف ارتقای عدالت اجتماعی<br />تمامی حقوق برای سامانه ماه محفوظ است.</div>
  </footer>;
}

export default function Main() {
  return <div className="main-container min-h-screen w-[1440px] bg-[#fcfbf8] text-[#17324d]" dir="rtl">
    <header className="flex h-[80px] items-center justify-between border-b border-[#e4ebf1] bg-white px-[120px]">
      <img className="h-[46px] w-[137px] object-contain" src="/assets/codia/qreWA0b9ix.png" alt="سامانه ماه" />
      <nav className="flex items-center gap-6 text-[14px] font-medium text-[#60758a]"><a className="text-[#17324d]" href="#">صفحه اصلی</a><a className="border-b-2 border-[#2094e3] pb-2 font-bold text-[#2094e3]" href="#">پروژه‌ها</a><a href="#">ورود / ثبت‌نام</a></nav>
    </header>
    <main className="mx-auto min-h-[818px] w-[1200px] py-10">
      <div className="mb-7 text-[13px] text-[#60758a]">صفحه اصلی / پروژه‌ها / اشتغال زنان روستایی / گزارش‌ها / <span className="font-bold text-[#2094e3]">در انتظار تأیید</span></div>
      <h1 className="mb-24 text-[28px] font-extrabold text-[#17324d]">گزارش عملکرد مرحله اول پروژه اشتغال زنان روستایی</h1>
      <section className="mb-8 rounded-[20px] border border-[#f3d4c6] bg-[#fff9f4] px-10 py-9 text-center shadow-[0_5px_15px_rgba(49,38,25,0.06)]">
        <h2 className="text-[20px] font-bold text-[#bf5b00]">این گزارش هنوز برای انتشار عمومی تأیید نشده است.</h2>
        <p className="mx-auto mt-4 max-w-[720px] text-[14px] leading-7 text-[#96510e]">گزارش حاضر در مرحله بررسی فنی توسط کارشناسان و ناظران خانه خلاق قرار دارد و پس از تأیید نهایی، به طور عمومی در سامانه منتشر خواهد شد.</p>
      </section>
      <section className="rounded-[18px] border border-[#dbe4ec] bg-white px-7 py-6 shadow-[0_8px_18px_rgba(22,45,71,0.08)]">
        <h2 className="mb-5 text-[16px] font-bold">مشخصات گزارش ارسالی</h2>
        <dl className="space-y-4 text-[14px]">
          {[["نام پروژه:","اشتغال زنان روستایی (مرحله اول)"],["استارتاپ مجری:","راهکار سبز"],["تاریخ ارسال گزارش:","۱۵ آذر ۱۴۰۵"]].map(([label,value])=><div className="flex justify-between" key={label}><dt className="text-[#60758a]">{label}</dt><dd className="font-bold text-[#17324d]">{value}</dd></div>)}
        </dl>
      </section>
    </main>
    <Footer />
  </div>;
}
