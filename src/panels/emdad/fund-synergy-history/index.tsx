import { Link } from "react-router-dom";
import "../index.css";

const imgLogo = "/assets/emdad/dashboard/logo.png";
const imgSummaryTotal = "/assets/emdad/fund-synergy-history/summary-total.svg";
const imgSummaryRecorded = "/assets/emdad/fund-synergy-history/summary-recorded.svg";
const imgSummaryShare = "/assets/emdad/fund-synergy-history/summary-share.svg";
const imgDashboard = "/assets/emdad/dashboard/group.svg";
const imgUsers = "/assets/emdad/dashboard/group1.svg";
const imgCertificate = "/assets/emdad/dashboard/certificate-icon.svg";
const imgFundSynergy = "/assets/emdad/dashboard/fund-synergy-icon.svg";
const imgProject = "/assets/emdad/dashboard/group2.svg";
const imgReports = "/assets/emdad/dashboard/group3.svg";
const imgLogout = "/assets/emdad/dashboard/group4.svg";

const summaryCards = [
  { id: "2237:8", dotId: "2237:9", labelId: "2237:10", valueId: "2237:11", noteId: "2237:12", left: 0, asset: imgSummaryTotal, label: "کل هم‌افزایی‌ها", value: "۳ مورد", valueColor: "#159455", note: "همه رکوردهای ثبت‌شده و در انتظار" },
  { id: "2237:13", dotId: "2237:14", labelId: "2237:15", valueId: "2237:16", noteId: "2237:17", left: 394, asset: imgSummaryRecorded, label: "تخصیص‌های ثبت‌شده", value: "۲ مورد", valueColor: "#2094e3", note: "دارای رسید و ثبت مالی" },
  { id: "2237:18", dotId: "2237:19", labelId: "2237:20", valueId: "2237:21", noteId: "2237:22", left: 788, asset: imgSummaryShare, label: "جمع سهم صندوق", value: "۵۵ میلیون تومان", valueColor: "#17324d", note: "۱۰٪ منابع نقدی شرکت‌ها" },
];

const rows = [
  {
    id: "2237:40", indexId: "2237:41", projectId: "2237:42", companyId: "2237:43", paymentId: "2237:44", shareId: "2237:45", statusId: "2237:46", statusTextId: "2237:47", actionId: "2237:48", actionTextId: "2237:49", dateId: "2237:157", receiptId: "2237:158",
    top: 129, index: "۱", project: "سلامت خانواده", company: "پایدار پرداز خلاق آریا · منبع: شرکت", payment: "۲۰۰ میلیون تومان", share: "۲۰ میلیون تومان", status: "در انتظار تخصیص", statusBg: "#fff6e4", statusColor: "#a86b08", date: "امروز", receipt: "—", action: "ثبت تخصیص", actionTo: "/panel/emdad/fund-synergy/allocation", actionClass: "bg-[#2094e3]", actionTextClass: "text-white", actionBorder: "",
  },
  {
    id: "2237:137", indexId: "2237:138", projectId: "2237:139", companyId: "2237:140", paymentId: "2237:141", shareId: "2237:142", statusId: "2237:143", statusTextId: "2237:144", actionId: "2237:145", actionTextId: "2237:146", dateId: "2237:159", receiptId: "2237:160",
    top: 201, index: "۲", project: "مهارت برای نوجوانان", company: "راهکار نوآور فردا · منبع: شرکت", payment: "۱۵۰ میلیون تومان", share: "۱۵ میلیون تومان", status: "تخصیص ثبت شد", statusBg: "#e9f8f0", statusColor: "#159455", date: "۱۴۰۵/۰۶/۰۱", receipt: "۸۷۲۴۵۱", action: "مشاهده رسید", actionTo: "/panel/emdad/payment-history/detail", actionClass: "bg-white", actionTextClass: "text-[#2094e3]", actionBorder: "border border-[#d9e5ee] border-solid",
  },
  {
    id: "2237:147", indexId: "2237:148", projectId: "2237:149", companyId: "2237:150", paymentId: "2237:151", shareId: "2237:152", statusId: "2237:153", statusTextId: "2237:154", actionId: "2237:155", actionTextId: "2237:156", dateId: "2237:161", receiptId: "2237:162",
    top: 273, index: "۳", project: "اشتغال زنان روستایی", company: "همراه توسعه پایدار · منبع: شرکت", payment: "۲۰۰ میلیون تومان", share: "۲۰ میلیون تومان", status: "تخصیص ثبت شد", statusBg: "#e9f8f0", statusColor: "#159455", date: "۱۴۰۵/۰۵/۲۸", receipt: "۸۷۰۹۳۲", action: "مشاهده رسید", actionTo: "/panel/emdad/payment-history/detail", actionClass: "bg-white", actionTextClass: "text-[#2094e3]", actionBorder: "border border-[#d9e5ee] border-solid",
  },
];

function SidebarLink({ to, label, icon, active = false }: { to: string; label: string; icon: string; active?: boolean }) {
  return (
    <Link to={to} className={`${active ? "bg-[#2094e3]" : ""} content-stretch flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[10px] shrink-0 w-[192px]`}>
      <p className="font-sans font-normal leading-[normal] opacity-90 relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto">{label}</p>
      <div className="overflow-clip relative shrink-0 size-[18px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={icon} /></div>
    </Link>
  );
}

export default function EmdadFundSynergyHistory() {
  return (
    <div className="emdad-panel bg-[#f5f8fb] relative w-full h-full" data-node-id="2237:2" data-name="emdad-fund-synergy-history">
      <div className="absolute bg-[#f5f8fb] content-stretch flex flex-col gap-[16px] h-[900px] items-start left-0 overflow-clip px-[28px] py-[22px] top-0 w-[1216px]" data-node-id="2237:3" data-name="Main Content">
        <div className="[word-break:break-word] bg-white border border-[#e4ebf1] border-solid h-[72px] leading-[0] overflow-clip relative rounded-[12px] shrink-0 text-right w-full" data-node-id="2237:4" data-name="header">
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[32px] justify-center left-[1131px] text-[#17324d] text-[22px] top-[23px] w-[432px]" data-node-id="2237:5"><p className="leading-[normal]" dir="auto">سوابق هم‌افزایی صندوق</p></div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[20px] justify-center left-[1131px] text-[#60758a] text-[11px] top-[49px] w-[652px]" data-node-id="2237:6"><p className="leading-[normal]" dir="auto">مشاهده و پیگیری همه تخصیص‌های ۱۰٪ منابع نقدی شرکت‌ها به صندوق</p></div>
        </div>

        <div className="h-[92px] overflow-clip relative shrink-0 w-full" data-node-id="2237:7" data-name="summary-row">
          {summaryCards.map((card) => (
            <div key={card.id} className="absolute bg-white border border-[#e4ebf1] border-solid h-[92px] overflow-clip rounded-[12px] top-0 w-[372px]" style={{ left: card.left }} data-node-id={card.id} data-name="summary-card">
              <div className="absolute left-[17px] size-[8px] top-[17px]" data-node-id={card.dotId} data-name="Ellipse"><img alt="" className="absolute block inset-0 max-w-none size-full" src={card.asset} /></div>
              <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[20px] justify-center leading-[0] left-[351px] text-[#60758a] text-[12px] text-right top-[19px] w-[304px]" data-node-id={card.labelId}><p className="leading-[normal]" dir="auto">{card.label}</p></div>
              <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[28px] justify-center leading-[0] left-[351px] text-[22px] text-right top-[47px] w-[334px]" style={{ color: card.valueColor }} data-node-id={card.valueId}><p className="leading-[normal]" dir="auto">{card.value}</p></div>
              <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[16px] justify-center leading-[0] left-[351px] text-[#60758a] text-[10px] text-right top-[72px] w-[334px]" data-node-id={card.noteId}><p className="leading-[normal]" dir="auto">{card.note}</p></div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-[#e4ebf1] border-solid h-[74px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2237:23" data-name="toolbar">
          <button type="button" className="absolute bg-[#f5f8fb] block border border-[#e4ebf1] border-solid cursor-pointer h-[42px] left-[679px] overflow-clip rounded-[8px] top-[15px] w-[452px]" data-node-id="2237:24" data-name="search"><div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[24px] justify-center leading-[0] left-[435px] text-[#60758a] text-[11px] text-right top-[20px] w-[420px]" data-node-id="2237:25"><p className="leading-[normal]" dir="auto">جستجو در شرکت، پروژه یا رسید</p></div></button>
          <button type="button" className="absolute bg-white block border border-[#e4ebf1] border-solid cursor-pointer h-[42px] left-[499px] overflow-clip rounded-[8px] top-[15px] w-[164px]" data-node-id="2237:26" data-name="status-filter"><div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[24px] justify-center left-[147px] text-[#17324d] text-[11px] text-right top-[20px] w-[132px]" data-node-id="2237:27"><p className="leading-[normal]" dir="auto">همه وضعیت‌ها</p></div></button>
          <button type="button" className="absolute bg-white block border border-[#e4ebf1] border-solid cursor-pointer h-[42px] left-[319px] overflow-clip rounded-[8px] top-[15px] w-[164px]" data-node-id="2237:131" data-name="date-filter"><div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[24px] justify-center left-[147px] text-[#17324d] text-[11px] text-right top-[20px] w-[132px]" data-node-id="2237:132"><p className="leading-[normal]" dir="auto">همه تاریخ‌ها</p></div></button>
          <button type="button" className="absolute bg-white block border border-[#e4ebf1] border-solid cursor-pointer h-[42px] left-[139px] overflow-clip rounded-[8px] top-[15px] w-[164px]" data-node-id="2237:133" data-name="source-filter"><div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[24px] justify-center left-[147px] text-[#17324d] text-[11px] text-right top-[20px] w-[132px]" data-node-id="2237:134"><p className="leading-[normal]" dir="auto">منبع: شرکت</p></div></button>
          <div className="absolute bg-[#ebf6fd] h-[28px] left-[19px] overflow-clip rounded-[14px] top-[22px] w-[104px]" data-node-id="2237:28" data-name="count-pill"><div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[20px] justify-center left-[52px] text-[#2094e3] text-[11px] text-center top-[14px] w-[88px]" data-node-id="2237:29"><p className="leading-[normal]" dir="auto">۳ مورد</p></div></div>
        </div>

        <div className="bg-white border border-[#e4ebf1] border-solid h-[500px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2237:30" data-name="fund-synergy-table">
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[28px] justify-center left-[1131px] text-[#17324d] text-[18px] text-right top-[29px] w-[372px]" data-node-id="2237:31"><p className="leading-[normal]" dir="auto">همه هم‌افزایی‌های صندوق</p></div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[18px] justify-center left-[1131px] text-[#60758a] text-[10px] text-right top-[52px] w-[482px]" data-node-id="2237:32"><p className="leading-[normal]" dir="auto">آرشیو کامل تخصیص‌های ناشی از پرداخت نقدی شرکت‌ها به پروژه‌ها</p></div>

          <div className="[word-break:break-word] absolute bg-[#f5f8fb] font-sans font-medium h-[36px] leading-[0] left-[19px] overflow-clip rounded-[8px] text-[#60758a] text-[10px] text-right top-[81px] w-[1120px]" data-node-id="2237:33" data-name="table-header">
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[22px] justify-center left-[1104px] top-[18px] w-[54px]" data-node-id="2237:34"><p className="leading-[normal]" dir="auto">ردیف</p></div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[22px] justify-center left-[1050px] top-[18px] w-[280px]" data-node-id="2237:35"><p className="leading-[normal]" dir="auto">پروژه / شرکت</p></div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[22px] justify-center left-[770px] top-[18px] w-[160px]" data-node-id="2237:36"><p className="leading-[normal]" dir="auto">مبلغ پرداخت نقدی</p></div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[22px] justify-center left-[610px] top-[18px] w-[150px]" data-node-id="2237:37"><p className="leading-[normal]" dir="auto">سهم ۱۰٪ صندوق</p></div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[22px] justify-center left-[460px] top-[18px] w-[140px]" data-node-id="2237:38"><p className="leading-[normal]" dir="auto">وضعیت</p></div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[22px] justify-center left-[320px] top-[18px] w-[115px]" data-node-id="2237:135"><p className="leading-[normal]" dir="auto">تاریخ</p></div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[22px] justify-center left-[205px] top-[18px] w-[100px]" data-node-id="2237:136"><p className="leading-[normal]" dir="auto">رسید</p></div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[22px] justify-center left-[105px] top-[18px] w-[95px]" data-node-id="2237:39"><p className="leading-[normal]" dir="auto">اقدام</p></div>
          </div>

          {rows.map((row) => (
            <div key={row.id} className="absolute bg-[#f5f8fb] border border-[#e4ebf1] border-solid h-[64px] left-[19px] overflow-clip rounded-[8px] w-[1120px]" style={{ top: row.top }} data-node-id={row.id} data-name={row.index === "۱" ? "fund-synergy-row" : "fund-synergy-row-archive"}>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[44px] justify-center left-[1103px] text-[#17324d] text-[12px] text-right top-[31px] w-[54px]" data-node-id={row.indexId}><p className="leading-[normal]">{row.index}</p></div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[22px] justify-center left-[1049px] text-[#17324d] text-[12px] text-right top-[18px] w-[280px]" data-node-id={row.projectId}><p className="leading-[normal]" dir="auto">{row.project}</p></div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[18px] justify-center left-[1049px] text-[#60758a] text-[10px] text-right top-[40px] w-[280px]" data-node-id={row.companyId}><p className="leading-[normal]" dir="auto">{row.company}</p></div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[40px] justify-center left-[769px] text-[#17324d] text-[11px] text-right top-[29px] w-[160px]" data-node-id={row.paymentId}><p className="leading-[normal]" dir="auto">{row.payment}</p></div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[40px] justify-center left-[609px] text-[#17324d] text-[12px] text-right top-[29px] w-[150px]" data-node-id={row.shareId}><p className="leading-[normal]" dir="auto">{row.share}</p></div>
              <div className="absolute h-[28px] left-[319px] overflow-clip rounded-[14px] top-[17px] w-[130px]" style={{ backgroundColor: row.statusBg }} data-node-id={row.statusId} data-name="status"><div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[20px] justify-center left-[65px] text-[11px] text-center top-[14px] w-[116px]" style={{ color: row.statusColor }} data-node-id={row.statusTextId}><p className="leading-[normal]" dir="auto">{row.status}</p></div></div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[40px] justify-center left-[319px] text-[#17324d] text-[11px] text-right top-[29px] w-[115px]" data-node-id={row.dateId}><p className="leading-[normal]" dir="auto">{row.date}</p></div>
              <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[40px] justify-center left-[204px] text-[#17324d] text-[11px] text-right top-[29px] w-[100px]" data-node-id={row.receiptId}><p className="leading-[normal]" dir="auto">{row.receipt}</p></div>
              <Link to={row.actionTo} className={`absolute ${row.actionClass} ${row.actionBorder} block h-[34px] left-[9px] overflow-clip rounded-[8px] top-[14px] w-[95px]`} data-node-id={row.actionId} data-name="detail-button"><div className={`-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[20px] justify-center left-[47px] text-[12px] text-center top-[17px] w-[85px] ${row.actionTextClass}`} data-node-id={row.actionTextId}><p className="leading-[normal]" dir="auto">{row.action}</p></div></Link>
            </div>
          ))}

          <div className="absolute bg-[#f5f8fb] content-stretch flex h-[40px] items-center justify-between left-[19px] overflow-clip px-[10px] rounded-[8px] top-[361px] w-[1120px]" data-node-id="2237:52" data-name="pagination-footer">
            <div className="content-stretch flex gap-[8px] h-[30px] items-center overflow-clip relative shrink-0" data-node-id="2237:53" data-name="pagination-controls">
              <button type="button" className="bg-white border border-[#e4ebf1] border-solid content-stretch cursor-pointer flex h-[30px] items-center justify-center opacity-50 overflow-clip relative rounded-[7px] shrink-0 w-[52px]" data-node-id="2237:54"><div className="font-sans font-medium text-[#17324d] text-[10px] text-center w-[40px]">بعدی</div></button>
              <div className="bg-[#2094e3] content-stretch flex items-center justify-center overflow-clip relative rounded-[7px] shrink-0 size-[30px]" data-node-id="2237:56"><div className="font-sans font-medium text-[10px] text-center text-white w-[24px]">۱</div></div>
              <button type="button" className="bg-white border border-[#e4ebf1] border-solid content-stretch cursor-pointer flex h-[30px] items-center justify-center opacity-50 overflow-clip relative rounded-[7px] shrink-0 w-[52px]" data-node-id="2237:58"><div className="font-sans font-medium text-[#17324d] text-[10px] text-center w-[40px]">قبلی</div></button>
            </div>
            <div className="font-sans font-normal h-[22px] text-[#60758a] text-[10px] text-right w-[240px]" data-node-id="2237:60"><p className="leading-[22px]" dir="auto">نمایش ۱ تا ۳ از ۳</p></div>
          </div>
          <div className="absolute bg-[#ebf6fd] h-[28px] left-[19px] overflow-clip rounded-[8px] top-[413px] w-[1120px]" data-node-id="2237:50" data-name="table-note"><div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[20px] justify-center left-[1104px] text-[#60758a] text-[10px] text-right top-[14px] w-[1088px]" data-node-id="2237:51"><p className="leading-[normal]" dir="auto">این فهرست فقط تخصیص‌های ناشی از پرداخت نقدی با منبع شرکت را ثبت می‌کند؛ منابع صندوق دوباره مشمول ۱۰٪ نیستند.</p></div></div>
        </div>
      </div>

      <div className="absolute bg-[#17324d] content-stretch flex flex-col gap-[10px] h-[900px] items-end left-[1216px] pb-[18px] pt-[20px] px-[16px] top-0 w-[224px]" data-node-id="2237:71" data-name="colored-sidebar">
        <div className="bg-white content-stretch flex h-[56px] items-center justify-end overflow-clip px-[10px] py-[8px] relative rounded-[12px] shrink-0 w-[192px]" data-node-id="2237:72" data-name="brand-logo"><div className="h-[40px] relative shrink-0 w-[118px]" data-node-id="2237:73"><div className="absolute inset-0 overflow-hidden pointer-events-none"><img alt="" className="absolute h-full left-[5.28%] max-w-none top-0 w-[100.73%]" src={imgLogo} /></div></div></div>
        <div className="content-stretch flex flex-col gap-[3px] h-[64px] items-start justify-end overflow-clip px-[8px] py-[7px] relative shrink-0 text-center w-[192px]" data-node-id="2237:74"><p className="font-sans font-medium h-[24px] leading-[normal] relative shrink-0 text-[13px] text-white w-[176px]" dir="auto">سامانه ماه</p><div className="flex flex-col font-sans font-normal h-[18px] justify-center relative shrink-0 text-[#d8e7f3] text-[10px] w-[176px]"><p className="leading-[normal]" dir="auto">پنل کمیته امداد</p></div></div>
        <SidebarLink to="/panel/emdad" label="داشبورد" icon={imgDashboard} />
        <SidebarLink to="/panel/emdad/release-requests" label="درخواست‌های آزادسازی" icon={imgUsers} />
        <SidebarLink to="/panel/emdad/article172-approvals" label="تأیید گواهی ماده ۱۷۲" icon={imgCertificate} />
        <SidebarLink to="/panel/emdad/fund-synergy" label="هم‌افزایی صندوق" icon={imgFundSynergy} />
        <SidebarLink to="/panel/emdad/fund-synergy/history" label="سوابق هم‌افزایی صندوق" icon={imgProject} active />
        <SidebarLink to="/panel/emdad/payment-history" label="سوابق پرداخت" icon={imgProject} />
        <SidebarLink to="/panel/emdad/financial-reports" label="گزارش‌های مالی" icon={imgReports} />
        <SidebarLink to="/panel/emdad/fund-returns" label="منابع برگشتی صندوق" icon={imgProject} />
        <div className="flex-[1_0_0] min-h-px relative w-[192px]" data-node-id="2237:122" data-name="sidebar-spacer" />
        <button type="button" className="bg-white content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end opacity-96 overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2237:123" data-name="logout-nav"><p className="font-sans font-medium leading-[normal] relative shrink-0 text-[#17324d] text-[12px] text-right w-[142px]" dir="auto">خروج از سیستم</p><div className="overflow-clip relative shrink-0 size-[18px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogout} /></div></button>
      </div>
    </div>
  );
}
