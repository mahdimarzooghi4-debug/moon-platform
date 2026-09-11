import { Link } from "react-router-dom";
import "../index.css";

const imgLogo = "/assets/emdad/dashboard/logo.png";
const imgDashboard = "/assets/emdad/dashboard/group.svg";
const imgUsers = "/assets/emdad/dashboard/group1.svg";
const imgCertificate = "/assets/emdad/dashboard/certificate-icon.svg";
const imgFundSynergy = "/assets/emdad/dashboard/fund-synergy-icon.svg";
const imgProject = "/assets/emdad/dashboard/group2.svg";
const imgReports = "/assets/emdad/dashboard/group3.svg";
const imgLogout = "/assets/emdad/dashboard/group4.svg";

const kpis = [
  { id: "2382:167", valueId: "2382:168", labelId: "2382:169", left: 0, value: "۸۴ میلیون", label: "کل منابع برگشتی" },
  { id: "2382:170", valueId: "2382:171", labelId: "2382:172", left: 293, value: "۶۰ میلیون", label: "تخصیص‌شده" },
  { id: "2382:173", valueId: "2382:174", labelId: "2382:175", left: 586, value: "۲۴ میلیون", label: "مانده قابل تخصیص" },
  { id: "2382:176", valueId: "2382:177", labelId: "2382:178", left: 879, value: "۱ دوره", label: "دوره مالی فعال" },
];

const rows = [
  { id: "2382:188", periodId: "2382:189", amountId: "2382:190", dateId: "2382:191", statusId: "2382:192", refId: "2382:193", hotspotId: "2557:11", top: 137, bg: "bg-white", period: "تابستان ۱۴۰۵", amount: "۸۴ میلیون تومان", date: "۱۴۰۵/۰۶/۲۸", status: "تخصیص جزئی", statusColor: "#2094e3" },
  { id: "2382:194", periodId: "2382:195", amountId: "2382:196", dateId: "2382:197", statusId: "2382:198", refId: "2382:199", hotspotId: "2557:13", top: 207, bg: "bg-[#f9fbfe]", period: "بهار ۱۴۰۵", amount: "۵۶ میلیون تومان", date: "۱۴۰۵/۰۳/۳۱", status: "تخصیص کامل", statusColor: "#17324d" },
  { id: "2382:200", periodId: "2382:201", amountId: "2382:202", dateId: "2382:203", statusId: "2382:204", refId: "2382:205", hotspotId: "2557:15", top: 277, bg: "bg-white", period: "زمستان ۱۴۰۴", amount: "۴۲ میلیون تومان", date: "۱۴۰۴/۱۲/۲۸", status: "تخصیص کامل", statusColor: "#17324d" },
];

function SidebarLink({ to, label, icon, active = false }: { to: string; label: string; icon: string; active?: boolean }) {
  return (
    <Link to={to} className={`${active ? "bg-[#2094e3]" : ""} content-stretch flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[10px] shrink-0 w-[192px]`}>
      <p className="font-sans font-normal leading-[normal] opacity-90 relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto">{label}</p>
      <div className="overflow-clip relative shrink-0 size-[18px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={icon} /></div>
    </Link>
  );
}

export default function EmdadFundReturns() {
  return (
    <div className="emdad-panel bg-[#f5f8fb] relative w-full h-full" data-node-id="2382:2" data-name="emdad-fund-returns">
      <div className="absolute bg-[#f6f9fc] content-stretch flex flex-col gap-[16px] h-[900px] items-start left-0 overflow-clip px-[28px] py-[22px] top-0 w-[1216px]" data-node-id="2382:3" data-name="Main Content">
        <div className="h-[64px] overflow-clip relative shrink-0 w-full" data-node-id="2382:161" data-name="header">
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[32px] justify-center leading-[0] left-[1132px] text-[#17324d] text-[22px] text-right top-[16px] w-[542px]" data-node-id="2382:162"><p className="leading-[normal]" dir="auto">منابع برگشتی صندوق</p></div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[22px] justify-center leading-[0] left-[1132px] text-[#61758a] text-[11px] text-right top-[45px] w-[662px]" data-node-id="2382:163"><p className="leading-[normal]" dir="auto">دریافت و پیگیری سهم ۷۰٪ سود صندوق برای تأمین مالی مجدد</p></div>
          <Link to="/panel/emdad" className="absolute bg-white block border border-[#dbe5f0] border-solid h-[38px] left-0 overflow-clip rounded-[12px] top-[10px] w-[150px]" data-node-id="2382:164" data-name="back-to-dashboard"><div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[38px] justify-center leading-[0] left-[74px] text-[#17324d] text-[11px] text-center top-[18px] w-[130px]" data-node-id="2382:165"><p className="leading-[normal]" dir="auto">بازگشت به داشبورد</p></div></Link>
        </div>

        <div className="[word-break:break-word] h-[96px] leading-[0] overflow-clip relative shrink-0 text-center w-full" data-node-id="2382:166" data-name="kpi-row">
          {kpis.map((kpi) => (
            <div key={kpi.id} className="absolute bg-white border border-[#dbe5f0] border-solid h-[96px] overflow-clip rounded-[12px] top-0 w-[281px]" style={{ left: kpi.left }} data-node-id={kpi.id} data-name="kpi">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-bold h-[34px] justify-center left-[139.5px] text-[#2094e3] text-[18px] top-[34px] w-[253px]" data-node-id={kpi.valueId}><p className="leading-[normal]" dir="auto">{kpi.value}</p></div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[24px] justify-center left-[139.5px] text-[#61758a] text-[10px] top-[65px] w-[253px]" data-node-id={kpi.labelId}><p className="leading-[normal]" dir="auto">{kpi.label}</p></div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-[#dbe5f0] border-solid h-[420px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2382:179" data-name="returns-table">
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[34px] justify-center leading-[0] left-[1135px] text-[#17324d] text-[18px] text-right top-[30px] w-[1112px]" data-node-id="2382:180"><p className="leading-[normal]" dir="auto">سوابق دریافت منابع برگشتی</p></div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[24px] justify-center leading-[0] left-[1135px] text-[#61758a] text-[10px] text-right top-[59px] w-[1112px]" data-node-id="2382:181"><p className="leading-[normal]" dir="auto">هر بازگشت ۷۰٪ سود به‌صورت مستقل ثبت و با تخصیص‌های بعدی قابل تطبیق است.</p></div>
          <div className="[word-break:break-word] absolute bg-[#f6f9fc] border border-[#dbe5f0] border-solid font-sans font-medium h-[40px] leading-[0] left-[19px] overflow-clip rounded-[12px] text-[#61758a] text-[10px] text-center top-[85px] w-[1120px]" data-node-id="2382:182" data-name="table-head">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[40px] justify-center left-[1009px] top-[19px] w-[180px]" data-node-id="2382:183"><p className="leading-[normal]" dir="auto">دوره</p></div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[40px] justify-center left-[789px] top-[19px] w-[180px]" data-node-id="2382:184"><p className="leading-[normal]" dir="auto">مبلغ برگشتی</p></div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[40px] justify-center left-[569px] top-[19px] w-[180px]" data-node-id="2382:185"><p className="leading-[normal]" dir="auto">تاریخ دریافت</p></div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[40px] justify-center left-[349px] top-[19px] w-[180px]" data-node-id="2382:186"><p className="leading-[normal]" dir="auto">وضعیت تخصیص</p></div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[40px] justify-center left-[99px] top-[19px] w-[160px]" data-node-id="2382:187"><p className="leading-[normal]" dir="auto">مرجع</p></div>
          </div>
          {rows.map((row) => (
            <div key={row.id} className={`absolute ${row.bg} border border-[#dbe5f0] border-solid h-[58px] left-[19px] overflow-clip rounded-[12px] w-[1120px]`} style={{ top: row.top }} data-node-id={row.id} data-name="return-row">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[58px] justify-center leading-[0] left-[1009px] text-[#17324d] text-[11px] text-center top-[28px] w-[180px]" data-node-id={row.periodId}><p className="leading-[normal]" dir="auto">{row.period}</p></div>
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[58px] justify-center leading-[0] left-[789px] text-[#17324d] text-[11px] text-center top-[28px] w-[180px]" data-node-id={row.amountId}><p className="leading-[normal]" dir="auto">{row.amount}</p></div>
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[58px] justify-center leading-[0] left-[569px] text-[#61758a] text-[11px] text-center top-[28px] w-[180px]" data-node-id={row.dateId}><p className="leading-[normal]">{row.date}</p></div>
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[58px] justify-center leading-[0] left-[349px] text-[11px] text-center top-[28px] w-[180px]" style={{ color: row.statusColor }} data-node-id={row.statusId}><p className="leading-[normal]" dir="auto">{row.status}</p></div>
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[58px] justify-center leading-[0] left-[99px] text-[#2094e3] text-[10px] text-center top-[28px] w-[160px]" data-node-id={row.refId}><p className="leading-[normal]" dir="auto">ثبت در سوابق</p></div>
              <Link to="/panel/emdad/payment-history/detail" aria-label="ثبت در سوابق" className="absolute bg-transparent block h-[58px] left-[19px] top-[-1px] w-[160px]" data-node-id={row.hotspotId} data-name="action-hotspot" />
            </div>
          ))}
        </div>

        <div className="[word-break:break-word] bg-[#e8f4fc] border border-[#bfdef5] border-solid h-[94px] leading-[0] overflow-clip relative rounded-[12px] shrink-0 text-right w-full" data-node-id="2382:206" data-name="return-rule-note">
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-bold h-[28px] justify-center left-[1135px] text-[#17324d] text-[14px] top-[25px] w-[1112px]" data-node-id="2382:207"><p className="leading-[normal]" dir="auto">قاعده دریافت منابع برگشتی</p></div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[40px] justify-center left-[1135px] text-[#61758a] text-[11px] top-[61px] w-[1112px]" data-node-id="2382:208"><p className="leading-[normal]" dir="auto">سهم ۷۰٪ سود صندوق به حساب کمیته امداد برمی‌گردد و با منابع جدید شرکت‌ها برای تأمین مالی مجدد پروژه‌های منتخب تجمیع می‌شود.</p></div>
        </div>
        <div className="[word-break:break-word] bg-white border border-[#dbe5f0] border-solid h-[86px] leading-[0] overflow-clip relative rounded-[12px] shrink-0 text-right w-full" data-node-id="2382:209" data-name="legal-sharia-note">
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-bold h-[26px] justify-center left-[1135px] text-[#17324d] text-[13px] top-[22px] w-[1112px]" data-node-id="2382:210"><p className="leading-[normal]" dir="auto">کنترل حقوقی، شرعی و حسابداری</p></div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[38px] justify-center left-[1135px] text-[#61758a] text-[10px] top-[54px] w-[1112px]" data-node-id="2382:211"><p className="leading-[normal]" dir="auto">ثبت دریافت و تخصیص این منابع باید مطابق چارچوب مصوب صندوق و ضوابط مالی و شرعی کمیته امداد قابل پیگیری باشد.</p></div>
        </div>
      </div>

      <div className="absolute bg-[#17324d] content-stretch flex flex-col gap-[10px] h-[900px] items-end left-[1216px] pb-[18px] pt-[20px] px-[16px] top-0 w-[224px]" data-node-id="2382:93" data-name="colored-sidebar">
        <div className="bg-white content-stretch flex h-[56px] items-center justify-end overflow-clip px-[10px] py-[8px] relative rounded-[12px] shrink-0 w-[192px]" data-node-id="2382:94" data-name="brand-logo"><div className="h-[40px] relative shrink-0 w-[118px]" data-node-id="2382:95"><div className="absolute inset-0 overflow-hidden pointer-events-none"><img alt="" className="absolute h-full left-[5.28%] max-w-none top-0 w-[100.73%]" src={imgLogo} /></div></div></div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[3px] h-[64px] items-start justify-end overflow-clip px-[8px] py-[7px] relative shrink-0 text-center w-[192px]" data-node-id="2382:96" data-name="panel-identity"><p className="font-sans font-medium h-[24px] leading-[normal] relative shrink-0 text-[13px] text-white w-[176px]" dir="auto" data-node-id="2382:97">سامانه ماه</p><div className="flex flex-col font-sans font-normal h-[18px] justify-center leading-[0] relative shrink-0 text-[#d8e7f3] text-[10px] w-[176px]" data-node-id="2382:98"><p className="leading-[normal]" dir="auto">پنل کمیته امداد</p></div></div>
        <SidebarLink to="/panel/emdad" label="داشبورد" icon={imgDashboard} />
        <SidebarLink to="/panel/emdad/release-requests" label="درخواست‌های آزادسازی" icon={imgUsers} />
        <SidebarLink to="/panel/emdad/article172-approvals" label="تأیید گواهی ماده ۱۷۲" icon={imgCertificate} />
        <SidebarLink to="/panel/emdad/fund-synergy" label="هم‌افزایی صندوق" icon={imgFundSynergy} />
        <SidebarLink to="/panel/emdad/fund-synergy/history" label="سوابق هم‌افزایی صندوق" icon={imgProject} active />
        <SidebarLink to="/panel/emdad/payment-history" label="سوابق پرداخت" icon={imgProject} />
        <SidebarLink to="/panel/emdad/financial-reports" label="گزارش‌های مالی" icon={imgReports} />
        <SidebarLink to="/panel/emdad/fund-returns" label="منابع برگشتی صندوق" icon={imgProject} active />
        <div className="flex-[1_0_0] min-h-px relative w-[192px]" data-node-id="2382:152" data-name="sidebar-spacer" />
        <button type="button" className="bg-white content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end opacity-96 overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2382:153" data-name="logout-nav"><p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#17324d] text-[12px] text-right w-[142px]" dir="auto">خروج از سیستم</p><div className="overflow-clip relative shrink-0 size-[18px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogout} /></div></button>
      </div>
    </div>
  );
}
