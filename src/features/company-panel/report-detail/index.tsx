import { Link, useParams } from "react-router-dom";
import { CompanySidebar } from "../components/CompanySidebar";
import "../index.css";
import "./index.css";

const kpis = [
  ["افراد بهره‌مند", "۱۰۴٪", "هدف: ۲٬۴۰۰ نفر", "محقق‌شده: ۲٬۵۰۰ نفر"],
  ["پوشش روستاها", "۱۰۵٪", "هدف: ۴۰ روستا", "محقق‌شده: ۴۲ روستا"],
  ["مراکز سلامت", "۱۰۰٪", "هدف: ۸ مرکز", "محقق‌شده: ۸ مرکز"],
  ["پوشش خدمات", "۱۰۶٪", "هدف: ۷۰٪", "محقق‌شده: ۷۴٪"],
] as const;

export default function CompanyFinancialImpactReportDetail() {
  const { reportId = "MAH-R-1405-0018" } = useParams();
  void reportId;

  return (
    <div className="company-panel-shell" data-node-id="1908:2">
      <main className="company-report-detail-page" dir="rtl">
        <header className="company-topbar">
          <div className="company-page-title"><h1>جزئیات گزارش مالی و اثر</h1><p>جزئیات عملکرد، شاخص‌ها، وضعیت مالی و ارزیابی گزارش منتشرشده</p></div>
          <div className="company-top-actions">
            <button type="button" className="company-action company-action-primary company-report-download" title="دریافت گزارش در محصول نهایی فعال می‌شود">دریافت گزارش</button>
            <Link className="company-action company-action-secondary" to="/panel/company/reports">بازگشت به گزارش‌ها</Link>
          </div>
        </header>

        <section className="company-report-overview">
          <div className="company-report-overview-copy"><span>گزارش منتشرشده</span><h2>گزارش عملکرد مرحله اول پروژه سلامت خانواده</h2><p>نتایج پوشش خدمات سلامت، تجهیز مراکز و ارزیابی اولیه بهره‌مندان پروژه</p><b>تأییدشده و منتشرشده</b></div>
          <dl><div><dt>نوع گزارش</dt><dd>میان‌دوره‌ای</dd></div><div><dt>شماره گزارش</dt><dd dir="ltr">MAH-R-۱۴۰۵-۰۰۱۸</dd></div><div><dt>دوره گزارش</dt><dd>شهریور تا آبان ۱۴۰۵</dd></div><div><dt>تاریخ انتشار</dt><dd>۲۰ آذر ۱۴۰۵</dd></div><div><dt>استارتاپ مجری</dt><dd>همراه سلامت</dd></div></dl>
        </section>

        <section className="company-report-status-strip">
          <h2>وضعیت تأیید و پرداخت مرحله</h2>
          <div><article><span>وضعیت گزارش</span><strong className="is-green">تأییدشده</strong></article><article><span>وضعیت مرحله</span><strong>تکمیل‌شده</strong></article><article><span>تحقق KPI مرحله</span><strong className="is-blue">۱۰۰٪</strong></article><article><span>وضعیت سرمایه</span><strong className="is-green">آزادشده</strong></article><article><span>تاریخ تأیید</span><strong>۱۸ آذر ۱۴۰۵</strong></article></div>
        </section>

        <section className="company-report-kpis"><h2>شاخص‌های کلیدی مرحله اول</h2><div>{kpis.map(([name,percent,target,actual]) => <article key={name}><strong>{name}</strong><b>{percent}</b><div><span>{target}</span><em>{actual}</em></div><i><u /></i></article>)}</div></section>

        <div className="company-report-detail-columns">
          <section className="company-report-summary"><h2>خلاصه گزارش</h2><p>در مرحله نخست پروژه، پوشش خدمات سلامت در روستاهای هدف توسعه یافت و مراکز منتخب برای ارائه خدمات پایه تجهیز شدند. طبق داده‌های تأییدشده پروژه، ۲٬۵۰۰ نفر در ۴۲ روستا تحت پوشش قرار گرفته‌اند و ۸ مرکز سلامت فعال هستند. نتایج این مرحله پس از بررسی مستندات و ارزیابی خانه خلاق و نوآوری آینه تأیید شد.</p><aside>شاخص‌های مرحله اول تأیید و مبلغ این مرحله از سوی کمیته امداد برای اجرای پروژه آزاد شده است.</aside></section>
          <section className="company-report-financial"><h2>خلاصه مالی مرحله اول</h2><dl><div><dt>بودجه مصوب مرحله</dt><dd>۵۰ میلیون تومان</dd></div><div><dt>مبلغ آزادشده</dt><dd className="is-green">۵۰ میلیون تومان</dd></div><div><dt>باقی‌مانده مرحله</dt><dd>صفر</dd></div><div><dt>تاریخ پرداخت کمیته امداد</dt><dd>۱۹ آذر ۱۴۰۵</dd></div></dl><span>آزادسازی کل بودجه مرحله اول</span><i><u /></i></section>
        </div>

        <section className="company-report-followup"><h2>ارزیابی و مرحله بعد</h2><div><article><b>تأییدشده</b><strong>خانه خلاق و نوآوری آینه · امتیاز ۹۲ از ۱۰۰</strong><span>مستندات با اهداف مرحله اول تطابق دارد و پروژه آماده ورود به مرحله بعدی است.</span></article><article><strong>مرحله بعدی: گسترش پوشش خدمات سلامت</strong><span>KPI اصلی: توسعه پوشش خدمات و پایش کیفیت مراکز فعال</span><em>بودجه مرحله بعد: در انتظار تصویب · تاریخ هدف: دی ۱۴۰۵</em></article></div></section>
      </main>
      <CompanySidebar active="reports" />
    </div>
  );
}
