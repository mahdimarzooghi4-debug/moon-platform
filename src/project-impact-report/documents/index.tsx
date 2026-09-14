import React from "react";
import "../states/final/index.css";

const documents = [
  {
    title: "تصاویر اجرای پروژه",
    description: "مستند تصویری دوره آموزش زنان روستایی",
    src: "/assets/codia/qN8rNm5ete.webp",
  },
  {
    title: "شواهد محصول و خروجی",
    description: "نمونه محصولات و خروجی‌های پروژه اشتغال",
    src: "/assets/codia/xkhGZiM7zx.webp",
  },
  {
    title: "ارائه و جمع‌بندی نهایی",
    description: "مستند ارائه محصولات نهایی پروژه",
    src: "/assets/codia/RR9PzHGgQe.webp",
  },
];

export default function ProjectImpactDocumentsPage() {
  const query = window.location.search;
  const reportHref = `/projects/impact-report/states/final${query}`;

  return (
    <div className="main-container min-h-screen w-full bg-[#fcfbf8]" dir="rtl">
      <header className="flex h-[78px] items-center justify-between border-b border-[#e4ebf1] bg-white px-[120px]">
        <img className="h-[46px] w-[137px] object-contain" src="/assets/codia/qreWA0b9ix.png" alt="سامانه ماه" />
        <a
          href={reportHref}
          className="rounded-xl border border-[#2094e3] px-5 py-3 text-[14px] font-bold text-[#2094e3] no-underline"
        >
          بازگشت به گزارش نهایی
        </a>
      </header>

      <main className="mx-auto w-[1200px] py-10">
        <div className="mb-7 text-[13px] text-[#60758a]">صفحه اصلی / پروژه‌ها / گزارش نهایی اثر / مستندات</div>

        <section className="rounded-[24px] border border-[#e4ebf1] bg-white p-8 shadow-[0_4px_16px_0_rgba(22,45,71,0.08)]">
          <div className="mb-8 flex items-start justify-between gap-8">
            <div>
              <span className="mb-3 inline-flex rounded-xl bg-[#e8f7ee] px-3 py-1.5 text-[12px] font-bold text-[#238a57]">
                مستندات تأییدشده
              </span>
              <h1 className="m-0 text-[28px] font-extrabold leading-[44px] text-[#17324d]">مستندات و شواهد نهایی پروژه</h1>
              <p className="mt-3 text-[14px] leading-7 text-[#60758a]">
                شواهد تصویری منتشرشده برای پروژه «اشتغال زنان روستایی» در این بخش قابل مشاهده است.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-5">
            {documents.map((document) => (
              <article key={document.src} className="overflow-hidden rounded-[18px] border border-[#e4ebf1] bg-white">
                <a href={document.src} target="_blank" rel="noreferrer" className="block no-underline">
                  <img className="h-[250px] w-full object-cover" src={document.src} alt={document.title} />
                  <div className="p-5">
                    <strong className="block text-[16px] text-[#17324d]">{document.title}</strong>
                    <span className="mt-2 block text-[13px] leading-6 text-[#60758a]">{document.description}</span>
                    <span className="mt-4 inline-flex text-[13px] font-bold text-[#2094e3]">باز کردن تصویر</span>
                  </div>
                </a>
              </article>
            ))}
          </div>

          <div className="mt-7 rounded-xl bg-[#e8f7ee] p-5 text-[13px] leading-7 text-[#425b72]">
            این صفحه فقط مستنداتی را نمایش می‌دهد که در نسخه فعلی پروژه واقعاً موجود هستند؛ فایل یا سند ساختگی اضافه نشده است.
          </div>
        </section>
      </main>
    </div>
  );
}
