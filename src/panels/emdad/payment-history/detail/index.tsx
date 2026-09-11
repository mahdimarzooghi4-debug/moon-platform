import { Link } from "react-router-dom";
import "../../index.css";

const imgLogo = "/assets/emdad/dashboard/logo.png";
const imgDashboard = "/assets/emdad/dashboard/group.svg";
const imgUsers = "/assets/emdad/dashboard/group1.svg";
const imgCertificate = "/assets/emdad/dashboard/certificate-icon.svg";
const imgFundSynergy = "/assets/emdad/dashboard/fund-synergy-icon.svg";
const imgProject = "/assets/emdad/dashboard/group2.svg";
const imgReports = "/assets/emdad/dashboard/group3.svg";
const imgLogout = "/assets/emdad/dashboard/group4.svg";

const flowRows = [
  { id: "2382:363", numberId: "2382:364", textId: "2382:365", top: 67, number: "1", text: "واریز شرکت به حساب کمیته امداد" },
  { id: "2382:366", numberId: "2382:367", textId: "2382:368", top: 133, number: "2", text: "ثبت پرداخت برای پروژه مشخص" },
  { id: "2382:369", numberId: "2382:370", textId: "2382:371", top: 199, number: "3", text: "آزادسازی وجه به استارتاپ پس از کنترل" },
  { id: "2382:372", numberId: "2382:373", textId: "2382:374", top: 265, number: "4", text: "ثبت سهم ۱۰٪ هم‌افزایی صندوق" },
];

const metaRows = [
  { id: "2382:377", labelId: "2382:378", valueId: "2382:379", top: 67, label: "شناسه پرداخت", value: "PAY-۱۴۰۵-۰۰۲۱" },
  { id: "2382:380", labelId: "2382:381", valueId: "2382:382", top: 119, label: "تاریخ پرداخت", value: "۱۴۰۵/۰۶/۲۵" },
  { id: "2382:383", labelId: "2382:384", valueId: "2382:385", top: 171, label: "منبع وجه", value: "شرکت" },
  { id: "2382:386", labelId: "2382:387", valueId: "2382:388", top: 223, label: "مشمول ۱۰٪ صندوق", value: "بله" },
  { id: "2382:389", labelId: "2382:390", valueId: "2382:391", top: 275, label: "وضعیت ماده ۱۷۲", value: "در حال بررسی" },
];

function SidebarLink({ to, label, icon, active = false }: { to: string; label: string; icon: string; active?: boolean }) {
  return (
    <Link to={to} className={`${active ? "bg-[#2094e3]" : ""} content-stretch flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[10px] shrink-0 w-[192px]`}>
      <p className="font-sans font-normal leading-[normal] opacity-90 relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto">{label}</p>
      <div className="overflow-clip relative shrink-0 size-[18px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={icon} /></div>
    </Link>
  );
}

export default function EmdadPaymentDetail() {
  return (
    <div className="emdad-panel bg-[#f5f8fb] relative w-full h-full" data-node-id="2382:212" data-name="emdad-payment-detail">
      <div className="absolute bg-[#f6f9fc] content-stretch flex flex-col gap-[16px] h-[900px] items-start left-0 overflow-clip px-[28px] py-[22px] top-0 w-[1216px]" data-node-id="2382:213" data-name="Main Content">
        <div className="h-[64px] overflow-clip relative shrink-0 w-full" data-node-id="2382:349" data-name="header">
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[32px] justify-center leading-[0] left-[1132px] text-[#17324d] text-[22px] text-right top-[16px] w-[482px]" data-node-id="2382:350"><p className="leading-[normal]" dir="auto">جزئیات پرداخت</p></div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[22px] justify-center leading-[0] left-[1132px] text-[#61758a] text-[11px] text-right top-[45px] w-[632px]" data-node-id="2382:351"><p className="leading-[normal]" dir="auto">مشاهده مسیر مالی، منبع پرداخت و وضعیت تخصیص مرتبط</p></div>
          <Link to="/panel/emdad/payment-history" className="absolute bg-white block border border-[#dbe5f0] border-solid h-[38px] left-0 overflow-clip rounded-[12px] top-[10px] w-[170px]" data-node-id="2382:352" data-name="back-to-payments"><div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[38px] justify-center leading-[0] left-[84px] text-[#17324d] text-[11px] text-center top-[18px] w-[150px]" data-node-id="2382:353"><p className="leading-[normal]" dir="auto">بازگشت به سوابق پرداخت</p></div></Link>
        </div>

        <div className="[word-break:break-word] bg-white border border-[#dbe5f0] border-solid h-[128px] leading-[0] overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2382:354" data-name="payment-summary">
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-bold h-[28px] justify-center left-[1131px] text-[#17324d] text-[17px] text-right top-[33px] w-[342px]" data-node-id="2382:355"><p className="leading-[normal]" dir="auto">شرکت توسعه پایدار آریا</p></div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[24px] justify-center left-[1131px] text-[#2094e3] text-[12px] text-right top-[67px] w-[342px]" data-node-id="2382:356"><p className="leading-[normal]" dir="auto">پروژه: سلامت خانواده</p></div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[22px] justify-center left-[619px] text-[#61758a] text-[10px] text-right top-[30px] w-[150px]" data-node-id="2382:357"><p className="leading-[normal]" dir="auto">مبلغ پرداخت</p></div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[26px] justify-center left-[619px] text-[#17324d] text-[13px] text-right top-[60px] w-[190px]" data-node-id="2382:358"><p className="leading-[normal]" dir="auto">۲۰۰ میلیون تومان</p></div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[28px] justify-center left-[209px] text-[#17324d] text-[12px] text-center top-[57px] w-[180px]" data-node-id="2382:359"><p className="leading-[normal]" dir="auto">تأییدشده</p></div>
        </div>

        <div className="[word-break:break-word] h-[360px] leading-[0] overflow-clip relative shrink-0 w-full" data-node-id="2382:360" data-name="payment-detail-grid">
          <div className="absolute bg-white border border-[#dbe5f0] border-solid h-[360px] left-[590px] overflow-clip rounded-[12px] top-0 w-[570px]" data-node-id="2382:361" data-name="flow-card">
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-bold h-[34px] justify-center left-[545px] text-[#17324d] text-[17px] text-right top-[34px] w-[522px]" data-node-id="2382:362"><p className="leading-[normal]" dir="auto">مسیر جریان وجه</p></div>
            {flowRows.map((row) => (
              <div key={row.id} className="absolute bg-[#f9fbfe] border border-[#dbe5f0] border-solid h-[52px] left-[19px] overflow-clip rounded-[12px] w-[530px]" style={{ top: row.top }} data-node-id={row.id} data-name="flow-row">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-bold h-[52px] justify-center left-[488px] text-[#2094e3] text-[12px] text-center top-[25px] w-[42px]" data-node-id={row.numberId}><p className="leading-[normal]">{row.number}</p></div>
                <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[52px] justify-center left-[449px] text-[#17324d] text-[11px] text-right top-[25px] w-[430px]" data-node-id={row.textId}><p className="leading-[normal]" dir="auto">{row.text}</p></div>
              </div>
            ))}
          </div>

          <div className="absolute bg-white border border-[#dbe5f0] border-solid h-[360px] left-0 overflow-clip rounded-[12px] text-right top-0 w-[550px]" data-node-id="2382:375" data-name="meta-card">
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-bold h-[34px] justify-center left-[525px] text-[#17324d] text-[17px] top-[34px] w-[502px]" data-node-id="2382:376"><p className="leading-[normal]" dir="auto">اطلاعات پرداخت</p></div>
            {metaRows.map((row) => (
              <div key={row.id} className="absolute bg-[#f9fbfe] border border-[#dbe5f0] border-solid h-[42px] left-[19px] overflow-clip rounded-[12px] w-[510px]" style={{ top: row.top }} data-node-id={row.id} data-name="meta-row">
                <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[42px] justify-center left-[489px] text-[#61758a] text-[10px] top-[20px] w-[205px]" data-node-id={row.labelId}><p className="leading-[normal]" dir="auto">{row.label}</p></div>
                <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[42px] justify-center left-[264px] text-[#17324d] text-[11px] top-[20px] w-[245px]" data-node-id={row.valueId}><p className="leading-[normal]" dir="auto">{row.value}</p></div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-[#dbe5f0] border-solid h-[90px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2382:392" data-name="receipt-card">
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[28px] justify-center leading-[0] left-[1135px] text-[#17324d] text-[14px] text-right top-[23px] w-[1112px]" data-node-id="2382:393"><p className="leading-[normal]" dir="auto">رسید و مستندات</p></div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[36px] justify-center leading-[0] left-[923px] text-[#61758a] text-[10px] text-right top-[57px] w-[900px]" data-node-id="2382:394"><p className="leading-[normal]" dir="auto">رسید واریز شرکت، ثبت تخصیص پروژه و سابقه آزادسازی وجه در این پرونده نگهداری می‌شود.</p></div>
          <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[42px] justify-center leading-[0] left-[99px] text-[#2094e3] text-[10px] text-center top-[44px] w-[160px]" data-node-id="2382:395"><p className="leading-[normal]" dir="auto">مشاهده رسید</p></div>
          <button type="button" className="absolute bg-[rgba(255,255,255,0)] block cursor-pointer h-[42px] left-[19px] top-[23px] w-[160px]" data-node-id="2557:17" data-name="action-hotspot" aria-label="مشاهده رسید" />
        </div>

        <div className="bg-[#e8f4fc] border border-[#bfdef5] border-solid h-[92px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2382:396" data-name="payment-note">
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[56px] justify-center leading-[0] left-[1135px] text-[#61758a] text-[11px] text-right top-[45px] w-[1112px]" data-node-id="2382:397"><p className="leading-[normal]" dir="auto">اگر منبع این پرداخت از خود صندوق باشد، سهم ۱۰٪ هم‌افزایی مجدد محاسبه نمی‌شود. این قاعده فقط برای پرداخت نقدی با منبع شرکت اعمال می‌شود.</p></div>
        </div>
      </div>

      <div className="absolute bg-[#17324d] content-stretch flex flex-col gap-[10px] h-[900px] items-end left-[1216px] pb-[18px] pt-[20px] px-[16px] top-0 w-[224px]" data-node-id="2382:281" data-name="colored-sidebar">
        <div className="bg-white content-stretch flex h-[56px] items-center justify-end overflow-clip px-[10px] py-[8px] relative rounded-[12px] shrink-0 w-[192px]" data-node-id="2382:282" data-name="brand-logo">
          <div className="h-[40px] relative shrink-0 w-[118px]" data-node-id="2382:283"><div className="absolute inset-0 overflow-hidden pointer-events-none"><img alt="" className="absolute h-full left-[5.28%] max-w-none top-0 w-[100.73%]" src={imgLogo} /></div></div>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[3px] h-[64px] items-start justify-end overflow-clip px-[8px] py-[7px] relative shrink-0 text-center w-[192px]" data-node-id="2382:284" data-name="panel-identity">
          <p className="font-sans font-medium h-[24px] leading-[normal] relative shrink-0 text-[13px] text-white w-[176px]" dir="auto" data-node-id="2382:285">سامانه ماه</p>
          <div className="flex flex-col font-sans font-normal h-[18px] justify-center leading-[0] relative shrink-0 text-[#d8e7f3] text-[10px] w-[176px]" data-node-id="2382:286"><p className="leading-[normal]" dir="auto">پنل کمیته امداد</p></div>
        </div>
        <SidebarLink to="/panel/emdad" label="داشبورد" icon={imgDashboard} />
        <SidebarLink to="/panel/emdad/release-requests" label="درخواست‌های آزادسازی" icon={imgUsers} />
        <SidebarLink to="/panel/emdad/article172-approvals" label="تأیید گواهی ماده ۱۷۲" icon={imgCertificate} />
        <SidebarLink to="/panel/emdad/fund-synergy" label="هم‌افزایی صندوق" icon={imgFundSynergy} />
        <SidebarLink to="/panel/emdad/fund-synergy/history" label="سوابق هم‌افزایی صندوق" icon={imgProject} />
        <SidebarLink to="/panel/emdad/payment-history" label="سوابق پرداخت" icon={imgProject} active />
        <SidebarLink to="/panel/emdad/financial-reports" label="گزارش‌های مالی" icon={imgReports} />
        <SidebarLink to="/panel/emdad/fund-returns" label="منابع برگشتی صندوق" icon={imgProject} />
        <div className="flex-[1_0_0] min-h-px relative w-[192px]" data-node-id="2382:340" data-name="sidebar-spacer" />
        <button type="button" className="bg-white content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end opacity-96 overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2382:341" data-name="logout-nav">
          <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#17324d] text-[12px] text-right w-[142px]" dir="auto">خروج از سیستم</p>
          <div className="overflow-clip relative shrink-0 size-[18px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogout} /></div>
        </button>
      </div>
    </div>
  );
}
