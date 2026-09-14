import React from "react";
import "./index.css";

const defaultKpis = [
  ["تکمیل آموزش","۱۲۰ نفر","۱۲۴ نفر","۱۰۳٪"],
  ["ارزیابی مهارت","۱۲۰ نفر","۱۲۰ نفر","۱۰۰٪"],
  ["پوشش جغرافیایی","۱۵ روستا","۱۵ روستا","۱۰۰٪"],
  ["رضایت از آموزش","۸۰٪","۸۷٪","۱۰۹٪"],
];

const companyKpis = [
  ["افراد بهره‌مند","۲٬۴۰۰ نفر","۲٬۵۰۰ نفر","۱۰۴٪"],
  ["پوشش روستاها","۴۰ روستا","۴۲ روستا","۱۰۵٪"],
  ["مراکز سلامت","۸ مرکز","۸ مرکز","۱۰۰٪"],
  ["پوشش خدمات","۷۰٪","۷۴٪","۱۰۶٪"],
];

const defaultCosts = [
  ["۱","طراحی و اجرای آموزش","۶۰ م.ت","۵۸ م.ت"],
  ["۲","ارزیابی مهارت","۲۰ م.ت","۲۰ م.ت"],
  ["۳","اجرای میدانی","۲۵ م.ت","۲۷ م.ت"],
  ["۴","سنجش و گزارش‌دهی","۱۵ م.ت","۱۵ م.ت"],
  ["-","جمع کل","۱۲۰ م.ت","۱۲۰ م.ت"],
];

const companyCosts = [
  ["۱","ارائه خدمات سلامت","۲۰ م.ت","۲۰ م.ت"],
  ["۲","تجهیز مراکز سلامت","۱۵ م.ت","۱۵ م.ت"],
  ["۳","پوشش روستاهای هدف","۱۰ م.ت","۱۰ م.ت"],
  ["۴","پایش و گزارش‌دهی","۵ م.ت","۵ م.ت"],
  ["-","جمع کل","۵۰ م.ت","۵۰ م.ت"],
];

function QrCode() {
  const pattern = [
    "111111101010101111111","100000100110101000001","101110101010101011101","101110100101001011101","101110101111101011101","100000100010101000001","111111101010101111111",
    "000000001101000000000","110101111011101100101","001101001100010011110","111011101011111010101","001100010100001011010","101111111011101110111","000000001010100010001",
    "111111101111101010111","100000101000100010010","101110101110111110111","101110100011001010000","101110101111111011101","100000101000010000101","111111101101111101111"
  ];
  return <svg className="h-[56px] w-[56px]" viewBox="0 0 21 21" role="img" aria-label="بارکد مشاهده نسخه آنلاین" shapeRendering="crispEdges">{pattern.map((row,y)=>[...row].map((v,x)=>v==="1"?<rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" />:null))}</svg>;
}

export default function Main() {
  const params = new URLSearchParams(window.location.search);
  const isCompanyReport = params.get("source") === "company";
  const reportId = params.get("reportId") || "MAH-R-1405-0018";

  const kpis = isCompanyReport ? companyKpis : defaultKpis;
  const costs = isCompanyReport ? companyCosts : defaultCosts;
  const project = isCompanyReport ? "سلامت خانواده" : "اشتغال زنان روستایی";
  const startup = isCompanyReport ? "همراه سلامت" : "راهکار سبز";
  const summary = isCompanyReport
    ? "در مرحله نخست پروژه، پوشش خدمات سلامت در روستاهای هدف توسعه یافت و مراکز منتخب برای ارائه خدمات پایه تجهیز شدند. طبق داده‌های تأییدشده پروژه، ۲٬۵۰۰ نفر در ۴۲ روستا تحت پوشش قرار گرفته‌اند و ۸ مرکز سلامت فعال هستند. نتایج این مرحله پس از بررسی مستندات و ارزیابی خانه خلاق و نوآوری آینه تأیید شد."
    : "در مرحله نخست پروژه، فرایند شناسایی، ثبت‌نام، ارزیابی مهارت و آموزش اولیه بهره‌مندان انجام شد. در مجموع ۱۲۴ نفر در دوره‌های آموزشی شرکت کردند و ۱۲۰ نفر ارزیابی نهایی را با موفقیت پشت سر گذاشتند. نتایج این مرحله پس از بررسی مستندات و نمونه‌برداری میدانی توسط خانه خلاق و نوآوری آینه تأیید شد.";

  return <>
    {isCompanyReport ? <div className="print-toolbar" dir="rtl">
      <a href={`/panel/company/reports/${reportId}`}>بازگشت به گزارش</a>
      <button type="button" onClick={() => window.print()}>چاپ / ذخیره PDF</button>
    </div> : null}
    <div className="print-page mx-auto flex h-[1123px] w-[794px] flex-col bg-white px-[48px] py-[40px] text-[#111]" dir="rtl">
      <header className="flex items-start justify-between border-b border-black pb-2">
        <h1 className="text-[14px] font-bold">گزارش عملکرد مرحله اول</h1>
        <div className="text-left text-[10px] leading-[18px] text-[#555]"><div>شماره: {isCompanyReport ? "MAH-R-۱۴۰۵-۰۰۱۸" : "MAH-R-۱۴۰۵-۰۰۱۸"}</div><div>تاریخ: ۲۰ آذر ۱۴۰۵</div></div>
      </header>

      <section className="mt-4 border border-[#ccc] p-3 text-[11px] leading-[23px]">
        {[["پروژه:",project],["استارتاپ مجری:",startup],["دوره گزارش:","شهریور تا آبان ۱۴۰۵"],["نوع گزارش:","میان‌دوره‌ای"],["وضعیت:","تأییدشده"]].map(([k,v])=><div className="flex justify-between" key={k}><span>{k}</span><strong>{v}</strong></div>)}
      </section>

      <section className="report-section"><h2>خلاصه گزارش</h2><p>{summary}</p></section>

      <section className="report-section"><h2>شاخص‌های کلیدی عملکرد (KPI)</h2><table><thead><tr><th>شاخص (KPI)</th><th>هدف</th><th>محقق‌شده</th><th>تحقق</th></tr></thead><tbody>{kpis.map(r=><tr key={r[0]}>{r.map(c=><td key={c}>{c}</td>)}</tr>)}</tbody></table></section>

      <section className="report-section"><h2>اطلاعات جمعیتی و جغرافیایی بهره‌مندان</h2><div className="grid grid-cols-2 gap-4"><div className="border border-[#ccc] p-2"><div className="flex justify-between"><span>{isCompanyReport ? "تعداد بهره‌مندان:" : "تعداد شرکت‌کنندگان:"}</span><b>{isCompanyReport ? "۲٬۵۰۰ نفر" : "۱۲۴ نفر"}</b></div><div className="mt-2 flex justify-between"><span>{isCompanyReport ? "مراکز سلامت:" : "زنان سرپرست خانوار:"}</span><b>{isCompanyReport ? "۸ مرکز" : "۷۸ نفر"}</b></div></div><div className="border border-[#ccc] p-2"><div className="flex justify-between"><span>استان:</span><b>{isCompanyReport ? "سیستان و بلوچستان" : "گلستان"}</b></div><div className="mt-2 flex justify-between"><span>روستاها:</span><b>{isCompanyReport ? "۴۲ روستا" : "۱۵ روستا"}</b></div></div></div></section>

      <section className="report-section"><h2>خلاصه مالی و بودجه مرحله اول</h2><div className="mb-2 grid grid-cols-3 gap-4"><div className="border border-[#ccc] p-2"><span>بودجه مصوب:</span><b>{isCompanyReport ? "۵۰ میلیون تومان" : "۱۲۰ میلیون تومان"}</b></div><div className="border border-[#ccc] p-2"><span>{isCompanyReport ? "مبلغ آزادشده:" : "هزینه‌شده:"}</span><b>{isCompanyReport ? "۵۰ میلیون تومان" : "۱۲۰ میلیون تومان"}</b></div><div className="border border-[#ccc] p-2"><span>باقی‌مانده:</span><b>۰</b></div></div><table><thead><tr><th>ردیف</th><th>عنوان هزینه</th><th>مصوب</th><th>{isCompanyReport ? "آزادشده" : "هزینه‌شده"}</th></tr></thead><tbody>{costs.map((r,i)=><tr className={i===costs.length-1?"font-bold bg-[#e1e6ee]":""} key={r[0]}>{r.map(c=><td key={c}>{c}</td>)}</tr>)}</tbody></table></section>

      <section className="report-section"><h2>ارزیابی و جمع‌بندی نهایی</h2><div className="flex items-center justify-between border border-[#ccc] p-3"><div><b>ارزیاب: تیم ارزیابی خانه خلاق</b><span className="mr-8">نتیجه ارزیابی: تأییدشده</span><p className="mt-2">{isCompanyReport ? "مستندات با اهداف مرحله اول تطابق دارد و پروژه آماده ورود به مرحله بعدی گسترش پوشش خدمات سلامت است." : "مستندات ارائه‌شده با اهداف مرحله اول تطابق داشته و KPIهای تعیین‌شده محقق شده‌اند. پروژه آماده ورود به مرحله تجهیز و شروع اشتغال است."}</p></div><div className="shrink-0 text-center"><strong className="text-[16px]">۹۲</strong><span> از ۱۰۰</span></div></div></section>

      <section className="mt-4 flex items-center justify-between"><div className="flex items-center gap-2 border border-[#ccc] p-1"><QrCode /><b className="w-[95px] text-[9px] leading-4">مشاهده نسخه آنلاین و بررسی مستندات</b></div><p className="w-[480px] text-[10px] leading-4 text-[#555]">اطلاعات هویتی بهره‌مندان در این گزارش عمومی نمایش داده نمی‌شود. برای راستی‌آزمایی و دسترسی به اطلاعات تفصیلی، لطفاً نسخه دیجیتال سند را از طریق بارکد مجاور بررسی فرمایید.</p></section>
      <footer className="mt-auto flex justify-between border-t border-[#ccc] pt-2 text-[9px] text-[#555]"><span>این گزارش به‌صورت خودکار از سامانه ماه تولید شده است. | تاریخ تولید: ۲۰ آذر ۱۴۰۵</span><span>صفحه ۱ از ۱</span></footer>
    </div>
  </>;
}
