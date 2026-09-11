import { Link } from "react-router-dom";
import "../../index.css";

const imgLogo = "/assets/emdad/dashboard/logo.png";
const imgStepActive = "/assets/emdad/fund-synergy-allocation/step-active.svg";
const imgStepPending = "/assets/emdad/fund-synergy-allocation/step-pending.svg";
const imgDashboard = "/assets/emdad/dashboard/group.svg";
const imgUsers = "/assets/emdad/dashboard/group1.svg";
const imgCertificate = "/assets/emdad/dashboard/certificate-icon.svg";
const imgFundSynergy = "/assets/emdad/dashboard/fund-synergy-icon.svg";
const imgProject = "/assets/emdad/dashboard/group2.svg";
const imgReports = "/assets/emdad/dashboard/group3.svg";
const imgLogout = "/assets/emdad/dashboard/group4.svg";

const summaryFields = [
  { id: "2234:12", labelId: "2234:13", valueId: "2234:14", left: 774, top: 69, label: "شرکت", value: "پایدار پرداز خلاق آریا", color: "#17324d" },
  { id: "2234:15", labelId: "2234:16", valueId: "2234:17", left: 404, top: 69, label: "شناسه ملی", value: "۱۰۱۰۴۵۸۶۹۲۱", color: "#17324d" },
  { id: "2234:18", labelId: "2234:19", valueId: "2234:20", left: 34, top: 69, label: "پروژه", value: "سلامت خانواده", color: "#17324d" },
  { id: "2234:21", labelId: "2234:22", valueId: "2234:23", left: 774, top: 127, label: "منبع پرداخت", value: "شرکت", color: "#159455" },
  { id: "2234:24", labelId: "2234:25", valueId: "2234:26", left: 404, top: 127, label: "مبلغ پرداخت نقدی", value: "۲۰۰ میلیون تومان", color: "#159455" },
  { id: "2234:27", labelId: "2234:28", valueId: "2234:29", left: 34, top: 127, label: "سهم قابل تخصیص", value: "۲۰ میلیون تومان", color: "#17324d" },
];

const checks = [
  { id: "2234:33", titleId: "2234:34", noteId: "2234:35", pillId: "2234:36", pillTextId: "2234:37", top: 69, title: "منبع پرداخت", note: "پرداخت نقدی با منبع شرکت ثبت شده است", pill: "شرکت", bg: "#eaf8f1", color: "#159455" },
  { id: "2234:38", titleId: "2234:39", noteId: "2234:40", pillId: "2234:41", pillTextId: "2234:42", top: 127, title: "مبنای محاسبه", note: "۱۰٪ از مبلغ ۲۰۰ میلیون تومان", pill: "۲۰ میلیون تومان", bg: "#eaf8f1", color: "#159455" },
  { id: "2234:43", titleId: "2234:44", noteId: "2234:45", pillId: "2234:46", pillTextId: "2234:47", top: 185, title: "منابع صندوق", note: "در این پرداخت از منابع صندوق استفاده نشده است", pill: "مشمول نیست", bg: "#eaf8f1", color: "#159455" },
  { id: "2234:48", titleId: "2234:49", noteId: "2234:50", pillId: "2234:51", pillTextId: "2234:52", top: 243, title: "وضعیت تخصیص", note: "سهم محاسبه شده آماده ثبت در سوابق مالی است", pill: "آماده ثبت", bg: "#edf7fe", color: "#2094e3" },
];

const steps = [
  { id: "2234:56", badgeId: "2234:57", numberId: "2234:58", titleId: "2234:59", noteId: "2234:60", top: 69, n: "۱", title: "ثبت پرداخت شرکت", note: "پرداخت نقدی ۲۰۰ میلیون تومان ثبت شده است", asset: imgStepActive, numberColor: "#fff" },
  { id: "2234:61", badgeId: "2234:62", numberId: "2234:63", titleId: "2234:64", noteId: "2234:65", top: 127, n: "۲", title: "محاسبه سهم ۱۰٪", note: "سهم صندوق برابر ۲۰ میلیون تومان محاسبه شده است", asset: imgStepActive, numberColor: "#fff" },
  { id: "2234:66", badgeId: "2234:67", numberId: "2234:68", titleId: "2234:69", noteId: "2234:70", top: 185, n: "۳", title: "واریز به صندوق", note: "واریز سهم صندوق توسط کمیته امداد ثبت می‌شود", asset: imgStepActive, numberColor: "#fff" },
  { id: "2234:71", badgeId: "2234:72", numberId: "2234:73", titleId: "2234:74", noteId: "2234:75", top: 243, n: "۴", title: "ثبت رسید مالی", note: "رسید تخصیص در سوابق مالی قابل پیگیری می‌شود", asset: imgStepPending, numberColor: "#60758a" },
];

function SidebarLink({ to, label, icon, active = false, certificate = false }: { to: string; label: string; icon: string; active?: boolean; certificate?: boolean }) {
  return (
    <Link to={to} className={`${active ? "bg-[#2094e3]" : ""} content-stretch flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[10px] shrink-0 w-[192px]`}>
      <p className="font-sans font-normal leading-[normal] opacity-90 relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto">{label}</p>
      {certificate ? (
        <div className="relative shrink-0 size-[18px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={icon} /></div>
      ) : (
        <div className="overflow-clip relative shrink-0 size-[18px]"><div className="absolute left-0 overflow-clip size-[18px] top-0"><div className="absolute inset-[16.67%]"><img alt="" className="block max-w-none size-full" src={icon} /></div></div></div>
      )}
    </Link>
  );
}

export default function EmdadFundSynergyAllocation() {
  return (
    <div className="emdad-panel bg-[#f5f8fb] relative w-full h-full" data-node-id="2234:2" data-name="emdad-fund-synergy-allocation">
      <div className="absolute bg-[#f5f8fb] h-[900px] left-0 overflow-clip top-0 w-[1216px]" data-node-id="2234:3" data-name="Main Content">
        <Link to="/panel/emdad/fund-synergy" className="absolute bg-white block border border-[#e4ebf1] border-solid cursor-pointer h-[64px] left-[28px] overflow-clip rounded-[12px] top-[22px] w-[1160px]" data-node-id="2234:4" data-name="header">
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[30px] justify-center leading-[0] left-[1139px] text-[#17324d] text-[20px] text-right top-[20px] w-[660px]" data-node-id="2234:5"><p className="leading-[normal]" dir="auto">ثبت تخصیص هم‌افزایی صندوق</p></div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[20px] justify-center leading-[0] left-[1139px] text-[#60758a] text-[10px] text-right top-[43px] w-[750px]" data-node-id="2234:6"><p className="leading-[normal]" dir="auto">ثبت و تأیید واریز سهم ۱۰٪ پرداخت نقدی شرکت به صندوق</p></div>
          <div className="absolute bg-[#edf7fe] h-[28px] left-[19px] overflow-clip rounded-[14px] top-[17px] w-[130px]" data-node-id="2234:7" data-name="status"><div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[28px] justify-center leading-[0] left-[65px] text-[#2094e3] text-[11px] text-center top-[14px] w-[114px]" data-node-id="2234:8"><p className="leading-[normal]" dir="auto">در انتظار ثبت</p></div></div>
        </Link>

        <div className="[word-break:break-word] absolute bg-white border border-[#e4ebf1] border-solid h-[190px] leading-[0] left-[28px] overflow-clip rounded-[12px] text-right top-[104px] w-[1160px]" data-node-id="2234:9" data-name="request-summary">
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[28px] justify-center left-[1139px] text-[#17324d] text-[16px] top-[27px] w-[320px]" data-node-id="2234:10"><p className="leading-[normal]" dir="auto">خلاصه پرداخت مشمول</p></div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[18px] justify-center left-[1139px] text-[#60758a] text-[10px] top-[48px] w-[580px]" data-node-id="2234:11"><p className="leading-[normal]" dir="auto">اطلاعات پرداخت نقدی شرکت که مبنای محاسبه سهم صندوق است</p></div>
          {summaryFields.map((field) => (
            <div key={field.id} className="absolute bg-[#f8fafc] h-[48px] overflow-clip rounded-[8px] w-[350px]" style={{ left: field.left, top: field.top }} data-node-id={field.id} data-name="field">
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[17px] justify-center left-[338px] text-[#60758a] text-[10px] top-[12.5px] w-[326px]" data-node-id={field.labelId}><p className="leading-[normal]" dir="auto">{field.label}</p></div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[23px] justify-center left-[338px] text-[12px] top-[32.5px] w-[326px]" style={{ color: field.color }} data-node-id={field.valueId}><p className="leading-[normal]" dir="auto">{field.value}</p></div>
            </div>
          ))}
        </div>

        <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[310px] left-[620px] overflow-clip rounded-[12px] top-[314px] w-[568px]" data-node-id="2234:30" data-name="final-controls">
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[28px] justify-center leading-[0] left-[551px] text-[#17324d] text-[16px] text-right top-[27px] w-[272px]" data-node-id="2234:31"><p className="leading-[normal]" dir="auto">کنترل تخصیص</p></div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[18px] justify-center leading-[0] left-[551px] text-[#60758a] text-[10px] text-right top-[48px] w-[452px]" data-node-id="2234:32"><p className="leading-[normal]" dir="auto">کنترل‌های لازم پیش از ثبت سهم ۱۰٪ برای صندوق</p></div>
          {checks.map((row) => (
            <div key={row.id} className="absolute bg-[#f8fafc] h-[52px] left-[15px] overflow-clip rounded-[8px] w-[536px]" style={{ top: row.top }} data-node-id={row.id} data-name="check-row">
              <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[20px] justify-center leading-[0] left-[516px] text-[#17324d] text-[12px] text-right top-[15px] w-[246px]" data-node-id={row.titleId}><p className="leading-[normal]" dir="auto">{row.title}</p></div>
              <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[18px] justify-center leading-[0] left-[516px] text-[#60758a] text-[10px] text-right top-[34px] w-[352px]" data-node-id={row.noteId}><p className="leading-[normal]" dir="auto">{row.note}</p></div>
              <div className="absolute h-[28px] left-[12px] overflow-clip rounded-[14px] top-[12px] w-[136px]" style={{ backgroundColor: row.bg }} data-node-id={row.pillId} data-name="status"><div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[28px] justify-center leading-[0] left-[68px] text-[11px] text-center top-[14px] w-[120px]" style={{ color: row.color }} data-node-id={row.pillTextId}><p className="leading-[normal]" dir="auto">{row.pill}</p></div></div>
            </div>
          ))}
        </div>

        <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[310px] left-[28px] overflow-clip rounded-[12px] top-[314px] w-[568px]" data-node-id="2234:53" data-name="issuance-process">
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[28px] justify-center leading-[0] left-[551px] text-[#17324d] text-[16px] text-right top-[27px] w-[272px]" data-node-id="2234:54"><p className="leading-[normal]" dir="auto">مسیر ثبت هم‌افزایی</p></div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[18px] justify-center leading-[0] left-[551px] text-[#60758a] text-[10px] text-right top-[48px] w-[452px]" data-node-id="2234:55"><p className="leading-[normal]" dir="auto">مراحل ثبت سهم ۱۰٪ پرداخت شرکت برای صندوق</p></div>
          {steps.map((step) => (
            <div key={step.id} className="absolute bg-[#f8fafc] h-[52px] left-[15px] overflow-clip rounded-[8px] w-[536px]" style={{ top: step.top }} data-node-id={step.id} data-name="process-step">
              <div className="absolute left-[484px] size-[32px] top-[10px]" data-node-id={step.badgeId} data-name="number"><img alt="" className="absolute block inset-0 max-w-none size-full" src={step.asset} /></div>
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium justify-center leading-[0] left-[500px] size-[32px] text-[12px] text-center top-[26px]" style={{ color: step.numberColor }} data-node-id={step.numberId}><p className="leading-[normal]">{step.n}</p></div>
              <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[20px] justify-center leading-[0] left-[472px] text-[#17324d] text-[12px] text-right top-[15px] w-[224px]" data-node-id={step.titleId}><p className="leading-[normal]" dir="auto">{step.title}</p></div>
              <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[18px] justify-center leading-[0] left-[472px] text-[#60758a] text-[10px] text-right top-[34px] w-[356px]" data-node-id={step.noteId}><p className="leading-[normal]" dir="auto">{step.note}</p></div>
            </div>
          ))}
        </div>

        <div className="[word-break:break-word] absolute bg-[#edf7fe] border border-[#cfe8f8] border-solid h-[84px] leading-[0] left-[28px] overflow-clip rounded-[12px] text-right top-[644px] w-[1160px]" data-node-id="2234:76" data-name="role-note">
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[24px] justify-center left-[1139px] text-[#17324d] text-[14px] top-[23px] w-[320px]" data-node-id="2234:77"><p className="leading-[normal]" dir="auto">قاعده تخصیص</p></div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[24px] justify-center left-[1139px] text-[#60758a] text-[11px] top-[49px] w-[940px]" data-node-id="2234:78"><p className="leading-[normal]" dir="auto">این تخصیص فقط برای پرداخت نقدی با منبع شرکت است؛ منابع خود صندوق دوباره مشمول سهم ۱۰٪ نمی‌شوند.</p></div>
        </div>

        <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[124px] left-[28px] overflow-clip rounded-[12px] top-[748px] w-[1160px]" data-node-id="2234:79" data-name="final-decision">
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[26px] justify-center leading-[0] left-[1139px] text-[#17324d] text-[15px] text-right top-[28px] w-[300px]" data-node-id="2234:80"><p className="leading-[normal]" dir="auto">ثبت تخصیص</p></div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[22px] justify-center leading-[0] left-[1139px] text-[#60758a] text-[11px] text-right top-[54px] w-[670px]" data-node-id="2234:81"><p className="leading-[normal]" dir="auto">با تأیید، مبلغ ۲۰ میلیون تومان به‌عنوان هم‌افزایی این پرداخت ثبت می‌شود و رسید آن در سوابق مالی قرار می‌گیرد.</p></div>
          <Link to="/panel/emdad/fund-synergy/success" className="absolute bg-[#2094e3] h-[40px] left-[19px] overflow-clip rounded-[8px] top-[67px] w-[220px]" data-node-id="2234:82" data-name="approve-final"><div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[40px] justify-center leading-[0] left-[110px] text-[12px] text-center text-white top-[20px] w-[200px]" data-node-id="2234:83"><p className="leading-[normal]" dir="auto">تأیید و ثبت تخصیص</p></div></Link>
          <Link to="/panel/emdad/fund-synergy" className="absolute bg-white border border-[#e4ebf1] border-solid h-[40px] left-[251px] overflow-clip rounded-[8px] top-[67px] w-[190px]" data-node-id="2234:84" data-name="back-to-list"><div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[40px] justify-center leading-[0] left-[94px] text-[#17324d] text-[12px] text-center top-[19px] w-[170px]" data-node-id="2234:85"><p className="leading-[normal]" dir="auto">بازگشت به هم‌افزایی‌ها</p></div></Link>
        </div>
      </div>

      <div className="absolute bg-[#17324d] content-stretch flex flex-col gap-[10px] h-[900px] items-end left-[1216px] pb-[18px] pt-[20px] px-[16px] top-0 w-[224px]" data-node-id="2234:146" data-name="colored-sidebar">
        <div className="bg-white content-stretch flex h-[56px] items-center justify-end overflow-clip px-[10px] py-[8px] relative rounded-[12px] shrink-0 w-[192px]" data-node-id="2234:147" data-name="brand-logo"><div className="h-[40px] relative shrink-0 w-[118px]" data-node-id="2234:148"><div className="absolute inset-0 overflow-hidden pointer-events-none"><img alt="" className="absolute h-full left-[5.28%] max-w-none top-0 w-[100.73%]" src={imgLogo} /></div></div></div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[3px] h-[64px] items-start justify-end overflow-clip px-[8px] py-[7px] relative shrink-0 text-center w-[192px]" data-node-id="2234:149" data-name="panel-identity"><p className="font-sans font-medium h-[24px] leading-[normal] relative shrink-0 text-[13px] text-white w-[176px]" dir="auto" data-node-id="2234:150">سامانه ماه</p><div className="flex flex-col font-sans font-normal h-[18px] justify-center leading-[0] relative shrink-0 text-[#d8e7f3] text-[10px] w-[176px]" data-node-id="2234:151"><p className="leading-[normal]" dir="auto">پنل کمیته امداد</p></div></div>
        <SidebarLink to="/panel/emdad" label="داشبورد" icon={imgDashboard} />
        <SidebarLink to="/panel/emdad/release-requests" label="درخواست‌های آزادسازی" icon={imgUsers} />
        <SidebarLink to="/panel/emdad/article172-approvals" label="تأیید گواهی ماده ۱۷۲" icon={imgCertificate} certificate />
        <SidebarLink to="/panel/emdad/fund-synergy" label="هم‌افزایی صندوق" icon={imgFundSynergy} active certificate />
        <SidebarLink to="/panel/emdad/fund-synergy/history" label="سوابق هم‌افزایی صندوق" icon={imgProject} />
        <SidebarLink to="/panel/emdad/payment-history" label="سوابق پرداخت" icon={imgProject} />
        <SidebarLink to="/panel/emdad/financial-reports" label="گزارش‌های مالی" icon={imgReports} />
        <SidebarLink to="/panel/emdad/fund-returns" label="منابع برگشتی صندوق" icon={imgProject} />
        <div className="flex-[1_0_0] min-h-px relative w-[192px]" data-node-id="2234:197" data-name="sidebar-spacer" />
        <button type="button" className="bg-white content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end opacity-96 overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2234:198" data-name="logout-nav"><p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#17324d] text-[12px] text-right w-[142px]" dir="auto" data-node-id="2234:199">خروج از سیستم</p><div className="overflow-clip relative shrink-0 size-[18px]"><div className="absolute left-0 overflow-clip size-[18px] top-0"><div className="absolute inset-[16.67%_11.11%_16.67%_19.44%]"><img alt="" className="block max-w-none size-full" src={imgLogout} /></div></div></div></button>
      </div>
    </div>
  );
}
