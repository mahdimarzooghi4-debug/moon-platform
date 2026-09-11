import { Link } from "react-router-dom";
import "../index.css";

const imgChatGptImage1 = "/assets/emdad/dashboard/logo.png";
const imgGroup = "/assets/emdad/dashboard/group.svg";
const imgGroup1 = "/assets/emdad/dashboard/group1.svg";
const imgCertificateIcon = "/assets/emdad/dashboard/certificate-icon.svg";
const imgFundSynergyIcon = "/assets/emdad/dashboard/fund-synergy-icon.svg";
const imgGroup2 = "/assets/emdad/dashboard/group2.svg";
const imgGroup3 = "/assets/emdad/dashboard/group3.svg";
const imgGroup4 = "/assets/emdad/dashboard/group4.svg";

export default function EmdadReleaseRequests() {
  return (
    <div className="emdad-panel bg-[#f5f8fb] relative w-full h-full" data-node-id="2113:2" data-name="emdad-release-requests">
      <div className="absolute bg-[#f5f8fb] content-stretch flex flex-col gap-[16px] h-[900px] items-start left-0 overflow-clip px-[28px] py-[22px] top-0 w-[1216px]" data-node-id="2113:3" data-name="Main Content">
        <div className="[word-break:break-word] h-[64px] leading-[0] overflow-clip relative shrink-0 text-right w-full" data-node-id="2113:128" data-name="header">
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium justify-center left-[1132px] text-[#17324d] text-[22px] top-[17px] w-[412px]" data-node-id="2113:129">
            <p className="leading-[normal]" dir="auto">درخواست‌های آزادسازی وجه</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[22px] justify-center left-[1132px] text-[#60758a] text-[11px] top-[45px] w-[712px]" data-node-id="2113:130">
            <p className="leading-[normal]" dir="auto">فهرست مراحل تأییدشده توسط آینه که نیازمند بررسی و آزادسازی وجه هستند</p>
          </div>
        </div>

        <div className="bg-white border border-[#e4ebf1] border-solid h-[78px] relative rounded-[12px] shrink-0 w-full" data-node-id="2113:131" data-name="toolbar">
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[38px] justify-center leading-[0] left-[1131px] text-[#17324d] text-[13px] text-right top-[36px] w-[132px]" data-node-id="2113:132">
            <p className="leading-[normal]" dir="auto">۱ درخواست</p>
          </div>
          <button type="button" className="absolute bg-[#f9fbfd] block border border-[#e4ebf1] border-solid cursor-pointer h-[44px] left-[27px] overflow-clip rounded-[9px] top-[16px] w-[330px]" data-node-id="2113:134" data-name="search-box">
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[44px] justify-center leading-[0] left-[313px] text-[#60758a] text-[11px] text-right top-[21px] w-[298px]" data-node-id="2113:135">
              <p className="leading-[normal]" dir="auto">جستجو در پروژه یا مرحله</p>
            </div>
          </button>
          <button type="button" className="absolute bg-white block border border-[#e4ebf1] border-solid cursor-pointer h-[44px] left-[373px] overflow-clip rounded-[9px] top-[16px] w-[190px]" data-node-id="2113:136" data-name="status-filter">
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[44px] justify-center leading-[0] left-[173px] text-[#17324d] text-[11px] text-right top-[21px] w-[158px]" data-node-id="2113:137">
              <p className="leading-[normal]" dir="auto">همه وضعیت‌ها</p>
            </div>
          </button>
          <div className="absolute bg-[#fff7e8] border border-[#f4d399] border-solid h-[38px] left-[587px] overflow-clip rounded-[19px] top-[19px] w-[150px]" data-node-id="2113:138" data-name="waiting-tab">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[38px] justify-center leading-[0] left-[74px] text-[#c27a10] text-[11px] text-center top-[18px] w-[134px]" data-node-id="2113:139">
              <p className="leading-[normal]" dir="auto">در انتظار اقدام ۱</p>
            </div>
          </div>
          <button type="button" className="absolute bg-[#f9fbfd] block border border-[#e4ebf1] border-solid cursor-pointer h-[38px] left-[749px] overflow-clip rounded-[19px] top-[19px] w-[142px]" data-node-id="2113:140" data-name="released-tab">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[38px] justify-center leading-[0] left-[70px] text-[#60758a] text-[11px] text-center top-[18px] w-[122px]" data-node-id="2113:141">
              <p className="leading-[normal]" dir="auto">آزادسازی‌شده ۰</p>
            </div>
          </button>
        </div>

        <div className="bg-white border border-[#e4ebf1] border-solid h-[360px] relative rounded-[12px] shrink-0 w-full" data-node-id="2113:142" data-name="release-requests-table">
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[28px] justify-center leading-[0] left-[1131px] text-[#17324d] text-[17px] text-right top-[31px] w-[172px]" data-node-id="2113:143">
            <p className="leading-[normal]" dir="auto">درخواست‌ها</p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[22px] justify-center leading-[0] left-[1131px] text-[#60758a] text-[10px] text-right top-[58px] w-[632px]" data-node-id="2113:144">
            <p className="leading-[normal]" dir="auto">هر درخواست پس از تأیید مرحله توسط خانه خلاق و نوآوری آینه وارد این صف می‌شود.</p>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f9fbfd] font-sans font-normal h-[44px] leading-[0] left-[19px] overflow-clip rounded-[8px] text-[#60758a] text-[10px] text-center top-[87px] w-[1120px]" data-node-id="2113:145" data-name="table-header">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[44px] justify-center left-[1015px] top-[22px] w-[170px]" data-node-id="2113:146"><p className="leading-[normal]" dir="auto">پروژه</p></div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[44px] justify-center left-[825px] top-[22px] w-[170px]" data-node-id="2113:147"><p className="leading-[normal]" dir="auto">مرحله</p></div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[44px] justify-center left-[645px] top-[22px] w-[150px]" data-node-id="2113:148"><p className="leading-[normal]" dir="auto">ارزیابی آینه</p></div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[44px] justify-center left-[495px] top-[22px] w-[110px]" data-node-id="2113:149"><p className="leading-[normal]" dir="auto">سهم مرحله</p></div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[44px] justify-center left-[330px] top-[22px] w-[180px]" data-node-id="2113:150"><p className="leading-[normal]" dir="auto">وضعیت</p></div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[44px] justify-center left-[114px] top-[22px] w-[180px]" data-node-id="2113:151"><p className="leading-[normal]" dir="auto">اقدام</p></div>
          </div>
          <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[106px] left-[19px] overflow-clip rounded-[10px] top-[143px] w-[1120px]" data-node-id="2113:152" data-name="request-row">
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[28px] justify-center leading-[0] left-[1099px] text-[#17324d] text-[13px] text-right top-[27px] w-[170px]" data-node-id="2113:153"><p className="leading-[normal]" dir="auto">اشتغال زنان روستایی</p></div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[22px] justify-center leading-[0] left-[1099px] text-[#60758a] text-[10px] text-right top-[55px] w-[170px]" data-node-id="2113:154"><p className="leading-[normal]" dir="auto">گلستان · کسب‌وکار و اشتغال</p></div>
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[28px] justify-center leading-[0] left-[824px] text-[#17324d] text-[12px] text-center top-[41px] w-[170px]" data-node-id="2113:155"><p className="leading-[normal]" dir="auto">شناسایی و ارزیابی</p></div>
            <div className="absolute bg-[#eaf8f0] border border-[#bee5cf] border-solid h-[32px] left-[581px] overflow-clip rounded-[16px] top-[30px] w-[126px]" data-node-id="2113:156" data-name="ayeneh-approved"><div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[32px] justify-center leading-[0] left-[62px] text-[#159455] text-[11px] text-center top-[15px] w-[110px]" data-node-id="2113:157"><p className="leading-[normal]" dir="auto">تأیید شده</p></div></div>
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[32px] justify-center leading-[0] left-[494px] text-[#17324d] text-[13px] text-center top-[43px] w-[110px]" data-node-id="2113:158"><p className="leading-[normal]">۲۰٪</p></div>
            <div className="absolute bg-[#fff7e8] border border-[#f4d399] border-solid h-[32px] left-[254px] overflow-clip rounded-[16px] top-[30px] w-[150px]" data-node-id="2113:159" data-name="release-status"><div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[32px] justify-center leading-[0] left-[74px] text-[#c27a10] text-[11px] text-center top-[15px] w-[134px]" data-node-id="2113:160"><p className="leading-[normal]" dir="auto">در انتظار آزادسازی</p></div></div>
            <Link to="/panel/emdad/release-requests/detail" className="absolute bg-[#2094e3] block border border-[#2094e3] border-solid cursor-pointer h-[44px] left-[23px] overflow-clip rounded-[9px] top-[25px] w-[170px]" data-node-id="2113:161" data-name="review-request-button">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[44px] justify-center leading-[0] left-[84px] text-[12px] text-center text-white top-[21px] w-[150px]" data-node-id="2113:162"><p className="leading-[normal]" dir="auto">بررسی درخواست</p></div>
            </Link>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[28px] justify-center leading-[0] left-[1131px] text-[#60758a] text-[10px] text-right top-[323px] w-[792px]" data-node-id="2113:163"><p className="leading-[normal]" dir="auto">آزادسازی وجه فقط پس از تأیید مرحله توسط آینه و بررسی درخواست توسط کمیته امداد انجام می‌شود.</p></div>
          <div className="absolute bg-[#f9fbfd] content-stretch flex h-[40px] items-center justify-between left-[19px] overflow-clip px-[10px] rounded-[8px] top-[261px] w-[1120px]" data-node-id="2197:2" data-name="pagination-footer">
            <div className="content-stretch flex gap-[8px] h-[30px] items-center overflow-clip relative shrink-0" data-node-id="2197:3" data-name="pagination-controls">
              <button type="button" className="bg-white border border-[#e4ebf1] border-solid content-stretch cursor-pointer flex h-[30px] items-center justify-center opacity-50 overflow-clip relative rounded-[7px] shrink-0 w-[52px]" data-node-id="2197:4" data-name="pagination-بعدی"><div className="[word-break:break-word] flex flex-col font-sans font-medium h-[22px] justify-center leading-[0] relative shrink-0 text-[#17324d] text-[10px] text-center w-[40px]" data-node-id="2197:5"><p className="leading-[normal]" dir="auto">بعدی</p></div></button>
              <div className="bg-[#2094e3] content-stretch flex items-center justify-center overflow-clip relative rounded-[7px] shrink-0 w-[30px] h-[30px]" data-node-id="2197:6" data-name="pagination-active-page"><div className="[word-break:break-word] flex flex-col font-sans font-medium h-[22px] justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white w-[24px]" data-node-id="2197:7"><p className="leading-[normal]">۱</p></div></div>
              <button type="button" className="bg-white border border-[#e4ebf1] border-solid content-stretch cursor-pointer flex h-[30px] items-center justify-center opacity-50 overflow-clip relative rounded-[7px] shrink-0 w-[52px]" data-node-id="2197:8" data-name="pagination-قبلی"><div className="[word-break:break-word] flex flex-col font-sans font-medium h-[22px] justify-center leading-[0] relative shrink-0 text-[#17324d] text-[10px] text-center w-[40px]" data-node-id="2197:9"><p className="leading-[normal]" dir="auto">قبلی</p></div></button>
            </div>
            <div className="[word-break:break-word] flex flex-col font-sans font-normal h-[22px] justify-center leading-[0] relative shrink-0 text-[#60758a] text-[10px] text-right w-[240px]" data-node-id="2197:10"><p className="leading-[normal]" dir="auto">نمایش ۱ تا ۱ از ۱</p></div>
          </div>
        </div>

        <div className="[word-break:break-word] bg-[#edf8fe] border border-[#d0e8f7] border-solid h-[104px] leading-[0] relative rounded-[12px] shrink-0 text-right w-full" data-node-id="2113:164" data-name="process-note">
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[28px] justify-center left-[1131px] text-[#17324d] text-[14px] top-[31px] w-[220px]" data-node-id="2113:165"><p className="leading-[normal]" dir="auto">قاعده این صف</p></div>
          <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[30px] justify-center left-[1131px] text-[#60758a] text-[10px] top-[62px] w-[1012px]" data-node-id="2113:166"><p className="leading-[normal]" dir="auto">این بخش فقط درخواست‌هایی را نمایش می‌دهد که ارزیابی مرحله آن‌ها توسط آینه تأیید شده است. کمیته امداد وارد ارزیابی محتوایی مرحله نمی‌شود.</p></div>
        </div>

        <div className="bg-white border border-[#e4ebf1] border-solid h-[126px] relative rounded-[12px] shrink-0 w-full" data-node-id="2113:167" data-name="footer-info">
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[28px] justify-center leading-[0] left-[1131px] text-[#17324d] text-[14px] text-right top-[31px] w-[228px]" data-node-id="2113:168"><p className="leading-[normal]" dir="auto">پس از بررسی درخواست</p></div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[28px] justify-center leading-[0] left-[1131px] text-[#60758a] text-[11px] text-right top-[63px] w-[822px]" data-node-id="2113:169"><p className="leading-[normal]" dir="auto">در صورت تأیید شرایط آزادسازی، وجه مرحله آزاد می‌شود و سابقه آن در «سوابق پرداخت» ثبت خواهد شد.</p></div>
          <Link to="/panel/emdad/payment-history" className="absolute bg-white block border border-[#e4ebf1] border-solid cursor-pointer h-[44px] left-[27px] overflow-clip rounded-[9px] top-[39px] w-[210px]" data-node-id="2113:170" data-name="view-payment-history"><div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[44px] justify-center leading-[0] left-[104px] text-[#2094e3] text-[12px] text-center top-[21px] w-[190px]" data-node-id="2113:171"><p className="leading-[normal]" dir="auto">مشاهده سوابق پرداخت</p></div></Link>
        </div>
      </div>

      <div className="absolute bg-[#17324d] content-stretch flex flex-col gap-[10px] h-[900px] items-end left-[1216px] pb-[18px] pt-[20px] px-[16px] top-0 w-[224px]" data-node-id="2113:66" data-name="colored-sidebar">
        <div className="bg-white content-stretch flex h-[56px] items-center justify-end overflow-clip px-[10px] py-[8px] relative rounded-[12px] shrink-0 w-[192px]" data-node-id="2113:67" data-name="brand-logo">
          <div className="h-[40px] relative shrink-0 w-[118px]" data-node-id="2113:68" data-name="ChatGPT Image ۲۹ مرداد ۱۴۰۵، ۱۵_۱۶_۳۵ 1"><div className="absolute inset-0 overflow-hidden pointer-events-none"><img alt="" className="absolute h-full left-[5.28%] max-w-none top-0 w-[100.73%]" src={imgChatGptImage1} /></div></div>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[3px] h-[64px] items-start justify-end overflow-clip px-[8px] py-[7px] relative shrink-0 text-center w-[192px]" data-node-id="2113:69" data-name="panel-identity">
          <p className="font-sans font-medium h-[24px] leading-[normal] relative shrink-0 text-[13px] text-white w-[176px]" dir="auto" data-node-id="2113:70">سامانه ماه</p>
          <div className="flex flex-col font-sans font-normal h-[18px] justify-center leading-[0] relative shrink-0 text-[#d8e7f3] text-[10px] w-[176px]" data-node-id="2113:71"><p className="leading-[normal]" dir="auto">پنل کمیته امداد</p></div>
        </div>
        <Link to="/panel/emdad" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[10px] shrink-0 w-[192px]" data-node-id="2113:72" data-name="dashboard-nav">
          <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2113:73">داشبورد</p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2113:74" data-name="dashboard-icon"><div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2113:75" data-name="Frame"><div className="absolute inset-[11.11%]" data-node-id="2113:76" data-name="Group"><div className="absolute inset-[-5.71%]"><img alt="" className="block max-w-none w-full h-full" src={imgGroup} /></div></div></div></div>
        </Link>
        <div className="bg-[#2094e3] content-stretch flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[10px] shrink-0 w-[192px]" data-node-id="2113:81" data-name="release-requests-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] opacity-90 relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2113:82">درخواست‌های آزادسازی</p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2113:83" data-name="users-icon"><div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2113:84" data-name="Frame"><div className="absolute inset-[22.22%_13.89%_19.44%_13.89%]" data-node-id="2113:85" data-name="Group"><div className="absolute inset-[-7.62%_-6.15%]"><img alt="" className="block max-w-none w-full h-full" src={imgGroup1} /></div></div></div></div>
        </div>
        <Link to="/panel/emdad/article-172-approvals" className="block cursor-pointer h-[38px] overflow-clip relative rounded-[8px] shrink-0 w-[192px]" data-node-id="2113:88" data-name="article-172-approvals-nav">
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal leading-[normal] left-[152px] text-[#edf5fc] text-[12px] text-right top-[9.5px] w-[142px]" dir="auto" data-node-id="2113:89">تأیید گواهی ماده ۱۷۲</p>
          <div className="absolute left-[162px] w-[18px] h-[18px] top-[10px]" data-node-id="2113:90" data-name="certificate-icon"><img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgCertificateIcon} /></div>
        </Link>
        <Link to="/panel/emdad/fund-synergy" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[10px] shrink-0 w-[192px]" data-node-id="2223:11" data-name="fund-synergy-nav"><p className="[word-break:break-word] font-sans font-normal leading-[normal] opacity-90 relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2223:12">هم‌افزایی صندوق</p><div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="2226:12" data-name="fund-synergy-icon"><img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgFundSynergyIcon} /></div></Link>
        <Link to="/panel/emdad/fund-synergy/history" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[10px] shrink-0 w-[192px]" data-node-id="2237:171" data-name="fund-synergy-history-nav"><p className="[word-break:break-word] font-sans font-normal leading-[normal] opacity-90 relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2237:172">سوابق هم‌افزایی صندوق</p><div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2237:173" data-name="project-icon"><div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2237:174" data-name="Frame"><div className="absolute inset-[27.78%_19.44%_22.22%_16.67%]" data-node-id="2237:175" data-name="Group"><div className="absolute inset-[-8.89%_-6.96%]"><img alt="" className="block max-w-none w-full h-full" src={imgGroup2} /></div></div></div></div></Link>
        <Link to="/panel/emdad/payment-history" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[10px] shrink-0 w-[192px]" data-node-id="2113:94" data-name="payment-history-nav"><p className="[word-break:break-word] font-sans font-normal leading-[normal] opacity-90 relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2113:95">سوابق پرداخت</p><div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2113:96" data-name="project-icon"><div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2113:97" data-name="Frame"><div className="absolute inset-[27.78%_19.44%_22.22%_16.67%]" data-node-id="2113:98" data-name="Group"><div className="absolute inset-[-8.89%_-6.96%]"><img alt="" className="block max-w-none w-full h-full" src={imgGroup2} /></div></div></div></div></Link>
        <Link to="/panel/emdad/financial-reports" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[10px] shrink-0 w-[192px]" data-node-id="2113:102" data-name="financial-reports-nav"><p className="[word-break:break-word] font-sans font-normal leading-[normal] opacity-90 relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2113:103">گزارش‌های مالی</p><div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2113:104" data-name="milestone-icon"><div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2113:105" data-name="Frame"><div className="absolute inset-[13.89%_11.11%]" data-node-id="2113:106" data-name="Group"><div className="absolute inset-[-6.15%_-5.71%]"><img alt="" className="block max-w-none w-full h-full" src={imgGroup3} /></div></div></div></div></Link>
        <Link to="/panel/emdad/fund-returns" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[10px] shrink-0 w-[192px]" data-node-id="2382:406" data-name="fund-returns-nav"><p className="[word-break:break-word] font-sans font-normal leading-[normal] opacity-90 relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2382:407">منابع برگشتی صندوق</p><div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2382:408" data-name="project-icon"><div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2382:409" data-name="Frame"><div className="absolute inset-[27.78%_19.44%_22.22%_16.67%]" data-node-id="2382:410" data-name="Group"><div className="absolute inset-[-8.89%_-6.96%]"><img alt="" className="block max-w-none w-full h-full" src={imgGroup2} /></div></div></div></div></Link>
        <div className="flex-[1_0_0] min-h-px relative w-[192px]" data-node-id="2113:119" data-name="sidebar-spacer" />
        <button type="button" className="bg-white content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end opacity-[0.96] overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2113:120" data-name="logout-nav">
          <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[#17324d] text-[12px] text-right w-[142px]" dir="auto" data-node-id="2113:121">خروج از سیستم</p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2113:122" data-name="logout-icon"><div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2113:123" data-name="Frame"><div className="absolute inset-[16.67%_11.11%_16.67%_19.44%]" data-node-id="2113:124" data-name="Group"><div className="absolute inset-[-6.67%_-6.4%]"><img alt="" className="block max-w-none w-full h-full" src={imgGroup4} /></div></div></div></div>
        </button>
      </div>
    </div>
  );
}
