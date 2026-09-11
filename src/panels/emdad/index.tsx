import "./index.css";

const imgChatGptImage1 = "/assets/emdad/dashboard/logo.png";
const imgAccent = "/assets/emdad/dashboard/accent.svg";
const imgAccent1 = "/assets/emdad/dashboard/accent1.svg";
const imgAccent2 = "/assets/emdad/dashboard/accent2.svg";
const imgAccent3 = "/assets/emdad/dashboard/accent3.svg";
const imgGroup = "/assets/emdad/dashboard/group.svg";
const imgGroup1 = "/assets/emdad/dashboard/group1.svg";
const imgCertificateIcon = "/assets/emdad/dashboard/certificate-icon.svg";
const imgFundSynergyIcon = "/assets/emdad/dashboard/fund-synergy-icon.svg";
const imgGroup2 = "/assets/emdad/dashboard/group2.svg";
const imgGroup3 = "/assets/emdad/dashboard/group3.svg";
const imgGroup4 = "/assets/emdad/dashboard/group4.svg";

export default function EmdadMainDashboard() {
  return (
    <div className="emdad-panel bg-[#f5f8fb] relative w-full h-full" data-node-id="2106:3" data-name="emdad-main-dashboard">
      <div className="absolute bg-[#f5f8fb] content-stretch flex flex-col gap-[16px] h-[1266px] items-end left-0 overflow-clip px-[28px] py-[22px] top-0 w-[1216px]" data-node-id="2114:2" data-name="Main Content">
        <div className="[word-break:break-word] bg-white border border-[#e4ebf1] border-solid content-stretch flex flex-col gap-[4px] h-[84px] items-end leading-[0] px-[20px] py-[12px] relative rounded-[12px] shrink-0 text-right w-full" data-node-id="2114:3" data-name="header">
          <div className="flex flex-col font-sans font-medium justify-center relative shrink-0 text-[#17324d] text-[22px] w-full" data-node-id="2114:4">
            <p className="leading-[normal]" dir="auto">
              داشبورد کمیته امداد
            </p>
          </div>
          <div className="flex flex-col font-sans font-normal justify-center relative shrink-0 text-[#60758a] text-[11px] w-full" data-node-id="2114:5">
            <p className="leading-[normal]" dir="auto">
              مدیریت آزادسازی وجه، گواهی ماده ۱۷۲ و هم‌افزایی صندوق
            </p>
          </div>
        </div>
        <div className="content-stretch flex gap-[20px] items-center justify-end relative shrink-0 w-full" data-node-id="2140:4" data-name="kpi-row">
          <div className="bg-white border border-[#e4ebf1] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[114px] items-end min-w-px p-[16px] relative rounded-[12px]" data-node-id="2114:21" data-name="kpi-card">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="2140:5" data-name="kpi-top">
              <div className="relative shrink-0 w-[8px] h-[8px]" data-node-id="2114:25" data-name="accent">
                <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgAccent} />
              </div>
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-sans font-normal justify-center leading-[0] min-w-px relative text-[#60758a] text-[11px] text-right" data-node-id="2114:22">
                <p className="leading-[normal]" dir="auto">
                  درخواست‌های ماده ۱۷۲
                </p>
              </div>
            </div>
            <div className="[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#17324d] text-[21px] text-right w-full" data-node-id="2114:23">
              <p className="leading-[normal]" dir="auto">
                ۳
              </p>
            </div>
            <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[#60758a] text-[10px] text-right w-full" data-node-id="2114:24">
              <p className="leading-[normal]" dir="auto">
                درخواست نیازمند بررسی
              </p>
            </div>
          </div>
          <div className="bg-white border border-[#e4ebf1] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[114px] items-end min-w-px p-[16px] relative rounded-[12px]" data-node-id="2114:16" data-name="kpi-card">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="2140:6" data-name="kpi-top">
              <div className="relative shrink-0 w-[8px] h-[8px]" data-node-id="2114:20" data-name="accent">
                <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgAccent1} />
              </div>
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-sans font-normal justify-center leading-[0] min-w-px relative text-[#60758a] text-[11px] text-right" data-node-id="2114:17">
                <p className="leading-[normal]" dir="auto">
                  پروژه‌های مالی فعال
                </p>
              </div>
            </div>
            <div className="[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#2094e3] text-[21px] text-right w-full" data-node-id="2114:18">
              <p className="leading-[normal]">۳</p>
            </div>
            <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[#60758a] text-[10px] text-right w-full" data-node-id="2114:19">
              <p className="leading-[normal]" dir="auto">
                پروژه دارای مرحله مالی فعال
              </p>
            </div>
          </div>
          <div className="bg-white border border-[#e4ebf1] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[114px] items-end min-w-px p-[16px] relative rounded-[12px]" data-node-id="2114:11" data-name="kpi-card">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="2140:7" data-name="kpi-top">
              <div className="relative shrink-0 w-[8px] h-[8px]" data-node-id="2114:15" data-name="accent">
                <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgAccent2} />
              </div>
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-sans font-normal justify-center leading-[0] min-w-px relative text-[#60758a] text-[11px] text-right" data-node-id="2114:12">
                <p className="leading-[normal]" dir="auto">
                  آزادسازی تکمیل‌شده
                </p>
              </div>
            </div>
            <div className="[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#159455] text-[21px] text-right w-full" data-node-id="2114:13">
              <p className="leading-[normal]">۰</p>
            </div>
            <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[#60758a] text-[10px] text-right w-full" data-node-id="2114:14">
              <p className="leading-[normal]" dir="auto">
                در فلو فعلی پروژه
              </p>
            </div>
          </div>
          <div className="bg-white border border-[#e4ebf1] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[114px] items-end min-w-px p-[16px] relative rounded-[12px]" data-node-id="2114:6" data-name="kpi-card">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="2140:8" data-name="kpi-top">
              <div className="relative shrink-0 w-[8px] h-[8px]" data-node-id="2114:10" data-name="accent">
                <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgAccent3} />
              </div>
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-sans font-normal justify-center leading-[0] min-w-px relative text-[#60758a] text-[11px] text-right" data-node-id="2114:7">
                <p className="leading-[normal]" dir="auto">
                  در انتظار آزادسازی
                </p>
              </div>
            </div>
            <div className="[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#c27a10] text-[21px] text-right w-full" data-node-id="2114:8">
              <p className="leading-[normal]">۳</p>
            </div>
            <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[#60758a] text-[10px] text-right w-full" data-node-id="2114:9">
              <p className="leading-[normal]" dir="auto">
                درخواست مرحله تأییدشده
              </p>
            </div>
          </div>
          <div className="bg-white border border-[#e4ebf1] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[114px] items-end min-w-px p-[16px] relative rounded-[12px]" data-node-id="2226:2" data-name="fund-synergy-kpi">
            <a className="content-stretch cursor-pointer flex gap-[8px] items-center relative shrink-0 w-full" data-node-id="2226:3" data-name="kpi-top">
              <div className="relative shrink-0 w-[8px] h-[8px]" data-node-id="2226:4" data-name="accent">
                <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgAccent1} />
              </div>
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-sans font-normal justify-center leading-[0] min-w-px relative text-[#60758a] text-[11px] text-right" data-node-id="2226:5">
                <p className="leading-[normal]" dir="auto">
                  هم‌افزایی صندوق
                </p>
              </div>
            </a>
            <div className="[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#17324d] text-[21px] text-right w-full" data-node-id="2226:6">
              <p className="leading-[normal]" dir="auto">
                ۲۰ میلیون تومان
              </p>
            </div>
            <div className="[word-break:break-word] flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[#60758a] text-[10px] text-right w-full" data-node-id="2226:7">
              <p className="leading-[normal]" dir="auto">
                در انتظار تخصیص ۱۰٪
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-[#e4ebf1] border-solid h-[316px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2133:2" data-name="dashboard-release-requests">
          <div className="absolute h-[50px] left-[19px] top-[13px] w-[1120px]" data-node-id="2140:9" data-name="section-header">
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium justify-center leading-[0] left-[1120px] text-[#17324d] text-[18px] text-right top-[14px] w-[1120px]" data-node-id="2133:3">
              <p className="leading-[normal]" dir="auto">
                درخواست‌های آزادسازی وجه
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal justify-center leading-[0] left-[1120px] text-[#60758a] text-[10px] text-right top-[42px] w-[1120px]" data-node-id="2133:4">
              <p className="leading-[normal]" dir="auto">
                مراحل تأییدشده توسط آینه که منتظر اقدام کمیته امداد هستند.
              </p>
            </div>
            <a className="absolute bg-[#2094e3] content-stretch cursor-pointer flex h-[36px] items-center justify-center left-0 rounded-[8px] top-[6px] w-[236px]" data-node-id="2133:40" data-name="action-button">
              <div className="[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[10px] text-right text-white whitespace-nowrap" data-node-id="2133:41">
                <p className="leading-[normal]" dir="auto">
                  مشاهده همه درخواست‌های آزادسازی
                </p>
              </div>
            </a>
          </div>
          <div className="absolute h-[28px] left-[19px] top-[71px] w-[1120px]" data-node-id="2140:10" data-name="section-top-row">
            <div className="absolute bg-[#fff7e6] border border-[#fff7e6] border-solid content-stretch flex h-[28px] items-center left-[995px] px-[12px] rounded-[14px] top-0" data-node-id="2133:5" data-name="status">
              <div className="[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#c27a10] text-[10px] text-right whitespace-nowrap" data-node-id="2133:6">
                <p className="leading-[normal]" dir="auto">
                  ۳ درخواست نیازمند اقدام
                </p>
              </div>
            </div>
          </div>
          <div className="absolute h-[132px] left-[19px] top-[137px] w-[1120px]" data-node-id="2140:12" data-name="rows">
            <div className="absolute bg-[#f8fafc] border border-[#e4ebf1] border-solid h-[40px] left-0 rounded-[8px] top-0 w-[1120px]" data-node-id="2133:7" data-name="release-request-row">
              <a className="absolute bg-[#2094e3] content-stretch cursor-pointer flex h-[38px] items-center justify-center left-[15px] rounded-[8px] top-0 w-[134px]" data-node-id="2133:16" data-name="action-button">
                <div className="[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[10px] text-right text-white whitespace-nowrap" data-node-id="2133:17">
                  <p className="leading-[normal]" dir="auto">
                    بررسی درخواست
                  </p>
                </div>
              </a>
              <div className="absolute bg-[#e9f8f1] border border-[#e9f8f1] border-solid content-stretch flex h-[28px] items-center justify-center left-[165px] rounded-[14px] top-[5px] w-[140px]" data-node-id="2133:14" data-name="status">
                <div className="[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#159455] text-[10px] text-right whitespace-nowrap" data-node-id="2133:15">
                  <p className="leading-[normal]" dir="auto">
                    تأیید آینه
                  </p>
                </div>
              </div>
              <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[4px] h-[34px] items-end leading-[0] left-[321px] text-right top-[2px] w-[100px]" data-node-id="2140:13" data-name="share-col">
                <div className="flex flex-col font-sans font-normal justify-center relative shrink-0 text-[#60758a] text-[9px] w-full" data-node-id="2133:12">
                  <p className="leading-[normal]" dir="auto">
                    سهم مرحله
                  </p>
                </div>
                <div className="flex flex-col font-sans font-medium justify-center relative shrink-0 text-[#17324d] text-[11px] w-full" data-node-id="2133:13">
                  <p className="leading-[normal]">۲۰٪</p>
                </div>
              </div>
              <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[4px] items-end leading-[0] left-[437px] text-right top-[2px] w-[190px]" data-node-id="2140:14" data-name="stage-col">
                <div className="flex flex-col font-sans font-normal justify-center relative shrink-0 text-[#60758a] text-[9px] w-full" data-node-id="2133:10">
                  <p className="leading-[normal]" dir="auto">
                    مرحله
                  </p>
                </div>
                <div className="flex flex-col font-sans font-medium justify-center relative shrink-0 text-[#17324d] text-[10px] w-full" data-node-id="2133:11">
                  <p className="leading-[normal]" dir="auto">
                    شناسایی و ارزیابی
                  </p>
                </div>
              </div>
              <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[4px] h-[36px] items-end leading-[0] left-[643px] text-right top-px w-[400px]" data-node-id="2140:15" data-name="project-col">
                <div className="flex flex-col font-sans font-medium justify-center relative shrink-0 text-[#17324d] text-[12px] w-full" data-node-id="2133:8">
                  <p className="leading-[normal]" dir="auto">
                    اشتغال زنان روستایی
                  </p>
                </div>
                <div className="flex flex-col font-sans font-normal justify-center relative shrink-0 text-[#60758a] text-[9px] w-full" data-node-id="2133:9">
                  <p className="leading-[normal]" dir="auto">
                    گلستان · کسب‌وکار و اشتغال
                  </p>
                </div>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[22px] justify-center leading-[0] left-[1079px] text-[#17324d] text-[11px] text-center top-[19px] w-[48px]" data-node-id="2159:15">
                <p className="leading-[normal]">۱</p>
              </div>
            </div>
            <div className="absolute bg-[#f8fafc] border border-[#e4ebf1] border-solid h-[40px] left-0 rounded-[8px] top-[46px] w-[1120px]" data-node-id="2133:18" data-name="release-request-row">
              <a className="absolute bg-[#2094e3] content-stretch cursor-pointer flex h-[38px] items-center justify-center left-[15px] rounded-[8px] top-0 w-[134px]" data-node-id="2133:27" data-name="action-button">
                <div className="[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[10px] text-right text-white whitespace-nowrap" data-node-id="2133:28">
                  <p className="leading-[normal]" dir="auto">
                    بررسی درخواست
                  </p>
                </div>
              </a>
              <div className="absolute bg-[#e9f8f1] border border-[#e9f8f1] border-solid content-stretch flex h-[28px] items-center justify-center left-[165px] rounded-[14px] top-[5px] w-[140px]" data-node-id="2133:25" data-name="status">
                <div className="[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#159455] text-[10px] text-right whitespace-nowrap" data-node-id="2133:26">
                  <p className="leading-[normal]" dir="auto">
                    تأیید آینه
                  </p>
                </div>
              </div>
              <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[4px] h-[34px] items-end leading-[0] left-[321px] text-right top-[2px] w-[100px]" data-node-id="2140:16" data-name="share-col">
                <div className="flex flex-col font-sans font-normal justify-center relative shrink-0 text-[#60758a] text-[9px] w-full" data-node-id="2133:23">
                  <p className="leading-[normal]" dir="auto">
                    سهم مرحله
                  </p>
                </div>
                <div className="flex flex-col font-sans font-medium justify-center relative shrink-0 text-[#17324d] text-[11px] w-full" data-node-id="2133:24">
                  <p className="leading-[normal]">-</p>
                </div>
              </div>
              <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[4px] items-end leading-[0] left-[437px] text-right top-[2px] w-[190px]" data-node-id="2140:17" data-name="stage-col">
                <div className="flex flex-col font-sans font-normal justify-center relative shrink-0 text-[#60758a] text-[9px] w-full" data-node-id="2133:21">
                  <p className="leading-[normal]" dir="auto">
                    مرحله
                  </p>
                </div>
                <div className="flex flex-col font-sans font-medium justify-center relative shrink-0 text-[#17324d] text-[10px] w-full" data-node-id="2133:22">
                  <p className="leading-[normal]" dir="auto">
                    مرحله تأییدشده
                  </p>
                </div>
              </div>
              <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[4px] h-[36px] items-end leading-[0] left-[643px] text-right top-px w-[400px]" data-node-id="2140:18" data-name="project-col">
                <div className="flex flex-col font-sans font-medium justify-center relative shrink-0 text-[#17324d] text-[12px] w-full" data-node-id="2133:19">
                  <p className="leading-[normal]" dir="auto">
                    مهارت برای نوجوانان
                  </p>
                </div>
                <div className="flex flex-col font-sans font-normal justify-center relative shrink-0 text-[#60758a] text-[9px] w-full" data-node-id="2133:20">
                  <p className="leading-[normal]" dir="auto">
                    اصفهان · آموزش و اشتغال
                  </p>
                </div>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[22px] justify-center leading-[0] left-[1079px] text-[#17324d] text-[11px] text-center top-[19px] w-[48px]" data-node-id="2159:16">
                <p className="leading-[normal]">۲</p>
              </div>
            </div>
            <div className="absolute bg-[#f8fafc] border border-[#e4ebf1] border-solid h-[40px] left-0 rounded-[8px] top-[92px] w-[1120px]" data-node-id="2133:29" data-name="release-request-row">
              <a className="absolute bg-[#2094e3] content-stretch cursor-pointer flex h-[38px] items-center justify-center left-[15px] rounded-[8px] top-0 w-[134px]" data-node-id="2133:38" data-name="action-button">
                <div className="[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[10px] text-right text-white whitespace-nowrap" data-node-id="2133:39">
                  <p className="leading-[normal]" dir="auto">
                    بررسی درخواست
                  </p>
                </div>
              </a>
              <div className="absolute bg-[#e9f8f1] border border-[#e9f8f1] border-solid content-stretch flex h-[28px] items-center justify-center left-[165px] rounded-[14px] top-[5px] w-[140px]" data-node-id="2133:36" data-name="status">
                <div className="[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#159455] text-[10px] text-right whitespace-nowrap" data-node-id="2133:37">
                  <p className="leading-[normal]" dir="auto">
                    تأیید آینه
                  </p>
                </div>
              </div>
              <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[4px] h-[34px] items-end leading-[0] left-[321px] text-right top-[2px] w-[100px]" data-node-id="2140:19" data-name="share-col">
                <div className="flex flex-col font-sans font-normal justify-center relative shrink-0 text-[#60758a] text-[9px] w-full" data-node-id="2133:34">
                  <p className="leading-[normal]" dir="auto">
                    سهم مرحله
                  </p>
                </div>
                <div className="flex flex-col font-sans font-medium justify-center relative shrink-0 text-[#17324d] text-[11px] w-full" data-node-id="2133:35">
                  <p className="leading-[normal]">-</p>
                </div>
              </div>
              <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[4px] items-end leading-[0] left-[437px] text-right top-[2px] w-[190px]" data-node-id="2140:20" data-name="stage-col">
                <div className="flex flex-col font-sans font-normal justify-center relative shrink-0 text-[#60758a] text-[9px] w-full" data-node-id="2133:32">
                  <p className="leading-[normal]" dir="auto">
                    مرحله
                  </p>
                </div>
                <div className="flex flex-col font-sans font-medium justify-center relative shrink-0 text-[#17324d] text-[10px] w-full" data-node-id="2133:33">
                  <p className="leading-[normal]" dir="auto">
                    مرحله تأییدشده
                  </p>
                </div>
              </div>
              <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[4px] h-[36px] items-end leading-[0] left-[643px] text-right top-px w-[400px]" data-node-id="2140:21" data-name="project-col">
                <div className="flex flex-col font-sans font-medium justify-center relative shrink-0 text-[#17324d] text-[12px] w-full" data-node-id="2133:30">
                  <p className="leading-[normal]" dir="auto">
                    سلامت خانواده
                  </p>
                </div>
                <div className="flex flex-col font-sans font-normal justify-center relative shrink-0 text-[#60758a] text-[9px] w-full" data-node-id="2133:31">
                  <p className="leading-[normal]" dir="auto">
                    سیستان و بلوچستان · سلامت و بهداشت
                  </p>
                </div>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[22px] justify-center leading-[0] left-[1079px] text-[#17324d] text-[11px] text-center top-[19px] w-[48px]" data-node-id="2159:17">
                <p className="leading-[normal]">۳</p>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f8fafc] font-sans font-medium h-[26px] leading-[0] left-[19px] overflow-clip rounded-[8px] text-[#60758a] text-[9px] top-[105px] w-[1120px]" data-node-id="2159:2" data-name="release-table-header">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[26px] justify-center left-[83px] text-center top-[13px] w-[134px]" data-node-id="2159:3">
              <p className="leading-[normal]" dir="auto">
                اقدام
              </p>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[26px] justify-center left-[236px] text-center top-[13px] w-[140px]" data-node-id="2159:4">
              <p className="leading-[normal]" dir="auto">
                وضعیت
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[26px] justify-center left-[422px] text-right top-[13px] w-[100px]" data-node-id="2159:5">
              <p className="leading-[normal]" dir="auto">
                سهم مرحله
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[26px] justify-center left-[628px] text-right top-[13px] w-[190px]" data-node-id="2159:6">
              <p className="leading-[normal]" dir="auto">
                مرحله
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[26px] justify-center left-[1044px] text-right top-[13px] w-[400px]" data-node-id="2159:7">
              <p className="leading-[normal]" dir="auto">
                پروژه
              </p>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[26px] justify-center left-[1080px] text-center top-[13px] w-[48px]" data-node-id="2159:8">
              <p className="leading-[normal]" dir="auto">
                ردیف
              </p>
            </div>
          </div>
          <div className="absolute bg-[#f5f8fb] content-stretch flex h-[40px] items-center justify-between left-[7px] overflow-clip px-[10px] rounded-[8px] top-[277px] w-[1120px]" data-node-id="2207:2" data-name="pagination-footer">
            <div className="content-stretch flex gap-[8px] h-[30px] items-center overflow-clip relative shrink-0" data-node-id="2207:3" data-name="pagination-controls">
              <button className="bg-white border border-[#e4ebf1] border-solid content-stretch cursor-pointer flex h-[30px] items-center justify-center opacity-50 overflow-clip relative rounded-[7px] shrink-0 w-[52px]" data-node-id="2207:4" data-name="pagination-بعدی">
                <div className="[word-break:break-word] flex flex-col font-sans font-medium h-[22px] justify-center leading-[0] relative shrink-0 text-[#17324d] text-[10px] text-center w-[40px]" data-node-id="2207:5">
                  <p className="leading-[normal]" dir="auto">
                    بعدی
                  </p>
                </div>
              </button>
              <div className="bg-[#2094e3] content-stretch flex items-center justify-center overflow-clip relative rounded-[7px] shrink-0 w-[30px] h-[30px]" data-node-id="2207:6" data-name="pagination-active-page">
                <div className="[word-break:break-word] flex flex-col font-sans font-medium h-[22px] justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white w-[24px]" data-node-id="2207:7">
                  <p className="leading-[normal]">۱</p>
                </div>
              </div>
              <button className="bg-white border border-[#e4ebf1] border-solid content-stretch cursor-pointer flex h-[30px] items-center justify-center opacity-50 overflow-clip relative rounded-[7px] shrink-0 w-[52px]" data-node-id="2207:8" data-name="pagination-قبلی">
                <div className="[word-break:break-word] flex flex-col font-sans font-medium h-[22px] justify-center leading-[0] relative shrink-0 text-[#17324d] text-[10px] text-center w-[40px]" data-node-id="2207:9">
                  <p className="leading-[normal]" dir="auto">
                    قبلی
                  </p>
                </div>
              </button>
            </div>
            <div className="[word-break:break-word] flex flex-col font-sans font-normal h-[22px] justify-center leading-[0] relative shrink-0 text-[#60758a] text-[10px] text-right w-[240px]" data-node-id="2207:10">
              <p className="leading-[normal]" dir="auto">
                نمایش ۱ تا ۱ از ۱
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-[#e4ebf1] border-solid h-[330px] overflow-clip relative rounded-[12px] shrink-0 w-full" data-node-id="2133:42" data-name="dashboard-article172-requests">
          <div className="absolute h-[50px] left-[19px] top-[13px] w-[1120px]" data-node-id="2140:22" data-name="section-header">
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium justify-center leading-[0] left-[1120px] text-[#17324d] text-[18px] text-right top-[14px] w-[1120px]" data-node-id="2133:43">
              <p className="leading-[normal]" dir="auto">
                درخواست‌های تأیید گواهی ماده ۱۷۲
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal justify-center leading-[0] left-[1120px] text-[#60758a] text-[10px] text-right top-[42px] w-[1120px]" data-node-id="2133:44">
              <p className="leading-[normal]" dir="auto">
                پرونده‌های شرکت پس از ثبت درخواست، پرداخت واجد شرایط و تکمیل الزامات قانونی.
              </p>
            </div>
            <a className="absolute bg-[#2094e3] content-stretch cursor-pointer flex h-[36px] items-center justify-center left-0 rounded-[8px] top-[6px] w-[236px]" data-node-id="2133:77" data-name="action-button">
              <div className="[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[10px] text-right text-white whitespace-nowrap" data-node-id="2133:78">
                <p className="leading-[normal]" dir="auto">
                  مشاهده همه درخواست‌های ماده ۱۷۲
                </p>
              </div>
            </a>
          </div>
          <div className="absolute h-[28px] left-[19px] top-[71px] w-[1120px]" data-node-id="2140:23" data-name="section-top-row">
            <div className="absolute bg-[#edf7fe] border border-[#fff1ef] border-solid content-stretch flex h-[28px] items-center left-[992px] px-[12px] rounded-[14px] top-0" data-node-id="2133:45" data-name="status">
              <div className="[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#17324d] text-[10px] text-right whitespace-nowrap" data-node-id="2133:46">
                <p className="leading-[normal]" dir="auto">
                  ۳ درخواست نیازمند بررسی
                </p>
              </div>
            </div>
          </div>
          <div className="absolute h-[132px] left-[19px] top-[137px] w-[1120px]" data-node-id="2140:25" data-name="rows">
            <div className="absolute bg-[#f8fafc] border border-[#e4ebf1] border-solid h-[40px] left-0 rounded-[8px] top-0 w-[1120px]" data-node-id="2133:47" data-name="article172-request-row">
              <a className="absolute bg-[#2094e3] content-stretch cursor-pointer flex h-[38px] items-center justify-center left-[15px] rounded-[8px] top-0 w-[120px]" data-node-id="2133:55" data-name="action-button">
                <div className="[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[10px] text-right text-white whitespace-nowrap" data-node-id="2133:56">
                  <p className="leading-[normal]" dir="auto">
                    بررسی پرونده
                  </p>
                </div>
              </a>
              <div className="absolute bg-[#edf7fe] content-stretch flex h-[28px] items-center justify-center left-[151px] rounded-[14px] top-[5px] w-[140px]" data-node-id="2133:53" data-name="status">
                <div className="[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#2094e3] text-[10px] text-right whitespace-nowrap" data-node-id="2133:54">
                  <p className="leading-[normal]" dir="auto">
                    آماده بررسی
                  </p>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col h-[40px] items-center justify-center left-[307px] top-[-1px] w-[548px]" data-node-id="2140:26" data-name="payment-col">
                <div className="bg-[#e9f8f1] border border-[#e9f8f1] border-solid content-stretch flex h-[28px] items-center justify-end relative rounded-[14px] shrink-0 w-[104px]" data-node-id="2133:51" data-name="status">
                  <div className="[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#159455] text-[10px] text-center w-[104px]" data-node-id="2133:52">
                    <p className="leading-[normal]" dir="auto">
                      ثبت شده
                    </p>
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[4px] h-[36px] items-end leading-[0] left-[493px] text-right top-px w-[550px]" data-node-id="2140:27" data-name="project-col">
                <div className="flex flex-col font-sans font-medium justify-center relative shrink-0 text-[#17324d] text-[12px] w-full" data-node-id="2133:48">
                  <p className="leading-[normal]" dir="auto">
                    سلامت خانواده
                  </p>
                </div>
                <div className="flex flex-col font-sans font-normal justify-center relative shrink-0 text-[#60758a] text-[9px] w-full" data-node-id="2133:49">
                  <p className="leading-[normal]" dir="auto">
                    پایدار پرداز خلاق آریا
                  </p>
                </div>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[22px] justify-center leading-[0] left-[1079px] text-[#17324d] text-[11px] text-center top-[19px] w-[48px]" data-node-id="2159:18">
                <p className="leading-[normal]">۱</p>
              </div>
            </div>
            <div className="absolute bg-[#f8fafc] border border-[#e4ebf1] border-solid h-[40px] left-0 rounded-[8px] top-[46px] w-[1120px]" data-node-id="2133:57" data-name="article172-request-row">
              <a className="absolute bg-[#2094e3] content-stretch cursor-pointer flex h-[38px] items-center justify-center left-[15px] rounded-[8px] top-0 w-[120px]" data-node-id="2133:65" data-name="action-button">
                <div className="[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[10px] text-right text-white whitespace-nowrap" data-node-id="2133:66">
                  <p className="leading-[normal]" dir="auto">
                    بررسی پرونده
                  </p>
                </div>
              </a>
              <div className="absolute bg-[#edf7fe] content-stretch flex h-[28px] items-center justify-center left-[151px] rounded-[14px] top-[5px] w-[140px]" data-node-id="2133:63" data-name="status">
                <div className="[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#2094e3] text-[10px] text-right whitespace-nowrap" data-node-id="2133:64">
                  <p className="leading-[normal]" dir="auto">
                    در انتظار بررسی
                  </p>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col h-[40px] items-center justify-center left-[307px] top-[-1px] w-[554px]" data-node-id="2140:28" data-name="payment-col">
                <div className="bg-[#e9f8f1] border border-[#e9f8f1] border-solid content-stretch flex h-[28px] items-center justify-center relative rounded-[14px] shrink-0 w-[104px]" data-node-id="2133:61" data-name="status">
                  <div className="[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#159455] text-[10px] text-center w-[104px]" data-node-id="2133:62">
                    <p className="leading-[normal]" dir="auto">
                      ثبت شده
                    </p>
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[4px] h-[36px] items-end leading-[0] left-[493px] text-right top-px w-[550px]" data-node-id="2140:29" data-name="project-col">
                <div className="flex flex-col font-sans font-medium justify-center relative shrink-0 text-[#17324d] text-[12px] w-full" data-node-id="2133:58">
                  <p className="leading-[normal]" dir="auto">
                    مهارت برای نوجوانان
                  </p>
                </div>
                <div className="flex flex-col font-sans font-normal justify-center relative shrink-0 text-[#60758a] text-[9px] w-full" data-node-id="2133:59">
                  <p className="leading-[normal]" dir="auto">
                    پایدار پرداز خلاق آریا
                  </p>
                </div>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[22px] justify-center leading-[0] left-[1079px] text-[#17324d] text-[11px] text-center top-[19px] w-[48px]" data-node-id="2159:19">
                <p className="leading-[normal]">۲</p>
              </div>
            </div>
            <div className="absolute bg-[#f8fafc] border border-[#e4ebf1] border-solid h-[40px] left-0 rounded-[8px] top-[92px] w-[1120px]" data-node-id="2133:67" data-name="article172-request-row">
              <a className="absolute bg-[#2094e3] content-stretch cursor-pointer flex h-[38px] items-center justify-center left-[15px] rounded-[8px] top-0 w-[120px]" data-node-id="2133:75" data-name="action-button">
                <div className="[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[10px] text-right text-white whitespace-nowrap" data-node-id="2133:76">
                  <p className="leading-[normal]" dir="auto">
                    بررسی پرونده
                  </p>
                </div>
              </a>
              <div className="absolute bg-[#edf7fe] content-stretch flex h-[28px] items-center justify-center left-[151px] rounded-[14px] top-[5px] w-[140px]" data-node-id="2133:73" data-name="status">
                <div className="[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#2094e3] text-[10px] text-right whitespace-nowrap" data-node-id="2133:74">
                  <p className="leading-[normal]" dir="auto">
                    در انتظار بررسی
                  </p>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col h-[40px] items-center justify-center left-[307px] top-[-1px] w-[552px]" data-node-id="2140:30" data-name="payment-col">
                <div className="bg-[#e9f8f1] border border-[#e9f8f1] border-solid content-stretch flex h-[28px] items-center justify-center relative rounded-[14px] shrink-0 w-[104px]" data-node-id="2133:71" data-name="status">
                  <div className="[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#159455] text-[10px] text-center w-[104px]" data-node-id="2133:72">
                    <p className="leading-[normal]" dir="auto">
                      ثبت شده
                    </p>
                  </div>
                </div>
              </div>
              <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[4px] h-[36px] items-end leading-[0] left-[493px] text-right top-px w-[550px]" data-node-id="2140:31" data-name="project-col">
                <div className="flex flex-col font-sans font-medium justify-center relative shrink-0 text-[#17324d] text-[12px] w-full" data-node-id="2133:68">
                  <p className="leading-[normal]" dir="auto">
                    اشتغال زنان روستایی
                  </p>
                </div>
                <div className="flex flex-col font-sans font-normal justify-center relative shrink-0 text-[#60758a] text-[9px] w-full" data-node-id="2133:69">
                  <p className="leading-[normal]" dir="auto">
                    پایدار پرداز خلاق آریا
                  </p>
                </div>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[22px] justify-center leading-[0] left-[1079px] text-[#17324d] text-[11px] text-center top-[19px] w-[48px]" data-node-id="2159:20">
                <p className="leading-[normal]">۳</p>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f8fafc] font-sans font-medium h-[26px] leading-[0] left-[19px] overflow-clip rounded-[8px] text-[#60758a] text-[9px] top-[105px] w-[1120px]" data-node-id="2159:9" data-name="article172-table-header">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[26px] justify-center left-[76px] text-center top-[13px] w-[120px]" data-node-id="2159:10">
              <p className="leading-[normal]" dir="auto">
                اقدام
              </p>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[26px] justify-center left-[222px] text-center top-[13px] w-[140px]" data-node-id="2159:11">
              <p className="leading-[normal]" dir="auto">
                وضعیت بررسی
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[26px] justify-center left-[623px] text-right top-[15px] w-[315px]" data-node-id="2159:12">
              <p className="leading-[normal]" dir="auto">
                پرداخت واجد شرایط
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[26px] justify-center left-[1044px] text-right top-[13px] w-[550px]" data-node-id="2159:13">
              <p className="leading-[normal]" dir="auto">
                پروژه / شرکت
              </p>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[26px] justify-center left-[1080px] text-center top-[13px] w-[48px]" data-node-id="2159:14">
              <p className="leading-[normal]" dir="auto">
                ردیف
              </p>
            </div>
          </div>
          <div className="absolute bg-[#f5f8fb] content-stretch flex h-[40px] items-center justify-between left-[19px] overflow-clip px-[10px] rounded-[8px] top-[267px] w-[1120px]" data-node-id="2207:12" data-name="pagination-footer">
            <div className="content-stretch flex gap-[8px] h-[30px] items-center overflow-clip relative shrink-0" data-node-id="2207:13" data-name="pagination-controls">
              <button className="bg-white border border-[#e4ebf1] border-solid content-stretch cursor-pointer flex h-[30px] items-center justify-center opacity-50 overflow-clip relative rounded-[7px] shrink-0 w-[52px]" data-node-id="2207:14" data-name="pagination-بعدی">
                <div className="[word-break:break-word] flex flex-col font-sans font-medium h-[22px] justify-center leading-[0] relative shrink-0 text-[#17324d] text-[10px] text-center w-[40px]" data-node-id="2207:15">
                  <p className="leading-[normal]" dir="auto">
                    بعدی
                  </p>
                </div>
              </button>
              <div className="bg-[#2094e3] content-stretch flex items-center justify-center overflow-clip relative rounded-[7px] shrink-0 w-[30px] h-[30px]" data-node-id="2207:16" data-name="pagination-active-page">
                <div className="[word-break:break-word] flex flex-col font-sans font-medium h-[22px] justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white w-[24px]" data-node-id="2207:17">
                  <p className="leading-[normal]">۱</p>
                </div>
              </div>
              <button className="bg-white border border-[#e4ebf1] border-solid content-stretch cursor-pointer flex h-[30px] items-center justify-center opacity-50 overflow-clip relative rounded-[7px] shrink-0 w-[52px]" data-node-id="2207:18" data-name="pagination-قبلی">
                <div className="[word-break:break-word] flex flex-col font-sans font-medium h-[22px] justify-center leading-[0] relative shrink-0 text-[#17324d] text-[10px] text-center w-[40px]" data-node-id="2207:19">
                  <p className="leading-[normal]" dir="auto">
                    قبلی
                  </p>
                </div>
              </button>
            </div>
            <div className="[word-break:break-word] flex flex-col font-sans font-normal h-[22px] justify-center leading-[0] relative shrink-0 text-[#60758a] text-[10px] text-right w-[240px]" data-node-id="2207:20">
              <p className="leading-[normal]" dir="auto">
                نمایش ۱ تا ۱ از ۱
              </p>
            </div>
          </div>
        </div>
        <a className="bg-white block border border-[#e4ebf1] border-solid cursor-pointer h-[296px] overflow-clip relative rounded-[12px] shrink-0 w-[1160px]" data-node-id="2227:2" data-name="dashboard-fund-synergy">
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[28px] justify-center leading-[0] left-[1131px] text-[#17324d] text-[18px] text-right top-[29px] w-[372px]" data-node-id="2227:3">
            <p className="leading-[normal]" dir="auto">
              هم‌افزایی صندوق
            </p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[18px] justify-center leading-[0] left-[1131px] text-[#60758a] text-[10px] text-right top-[52px] w-[482px]" data-node-id="2227:4">
            <p className="leading-[normal]" dir="auto">
              آخرین پرداخت‌های نقدی با منبع شرکت و سهم ۱۰٪ قابل تخصیص به صندوق
            </p>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f5f8fb] font-sans font-medium h-[36px] leading-[0] left-[19px] overflow-clip rounded-[8px] text-[#60758a] text-[10px] text-right top-[81px] w-[1120px]" data-node-id="2227:5" data-name="table-header">
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[22px] justify-center left-[1104px] top-[18px] w-[74px]" data-node-id="2227:6">
              <p className="leading-[normal]" dir="auto">
                ردیف
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[22px] justify-center left-[1030px] top-[18px] w-[300px]" data-node-id="2227:7">
              <p className="leading-[normal]" dir="auto">
                پروژه / شرکت
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[22px] justify-center left-[730px] top-[18px] w-[210px]" data-node-id="2227:8">
              <p className="leading-[normal]" dir="auto">
                مبلغ پرداخت نقدی
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[22px] justify-center left-[520px] top-[18px] w-[160px]" data-node-id="2227:9">
              <p className="leading-[normal]" dir="auto">
                سهم ۱۰٪ صندوق
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[22px] justify-center left-[360px] top-[18px] w-[155px]" data-node-id="2227:10">
              <p className="leading-[normal]" dir="auto">
                وضعیت
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col h-[22px] justify-center left-[205px] top-[18px] w-[185px]" data-node-id="2227:11">
              <p className="leading-[normal]" dir="auto">
                اقدام
              </p>
            </div>
          </div>
          <div className="absolute bg-[#f5f8fb] border border-[#e4ebf1] border-solid h-[64px] left-[19px] overflow-clip rounded-[8px] top-[129px] w-[1120px]" data-node-id="2227:12" data-name="fund-synergy-row">
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[44px] justify-center leading-[0] left-[1103px] text-[#17324d] text-[12px] text-right top-[31px] w-[74px]" data-node-id="2227:13">
              <p className="leading-[normal]">۱</p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[22px] justify-center leading-[0] left-[1029px] text-[#17324d] text-[12px] text-right top-[18px] w-[300px]" data-node-id="2227:14">
              <p className="leading-[normal]" dir="auto">
                سلامت خانواده
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[18px] justify-center leading-[0] left-[1029px] text-[#60758a] text-[10px] text-right top-[40px] w-[300px]" data-node-id="2227:15">
              <p className="leading-[normal]" dir="auto">
                پایدار پرداز خلاق آریا · منبع: شرکت
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[40px] justify-center leading-[0] left-[729px] text-[#17324d] text-[11px] text-right top-[29px] w-[210px]" data-node-id="2227:16">
              <p className="leading-[normal]" dir="auto">
                ۲۰۰ میلیون تومان
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[40px] justify-center leading-[0] left-[519px] text-[#17324d] text-[12px] text-right top-[29px] w-[160px]" data-node-id="2227:17">
              <p className="leading-[normal]" dir="auto">
                ۲۰ میلیون تومان
              </p>
            </div>
            <div className="absolute bg-[#e8f7ef] h-[28px] left-[214px] overflow-clip rounded-[14px] top-[17px] w-[135px]" data-node-id="2227:18" data-name="status">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[20px] justify-center leading-[0] left-[66px] text-[#159455] text-[11px] text-center top-[14px] w-[116px]" data-node-id="2227:19">
                <p className="leading-[normal]" dir="auto">
                  در انتظار تخصیص
                </p>
              </div>
            </div>
            <div className="absolute bg-[#2094e3] border border-[#2094e3] border-solid cursor-pointer h-[38px] left-[27px] overflow-clip rounded-[8px] top-[12px] w-[160px]" data-node-id="2227:20" data-name="detail-button">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[24px] justify-center leading-[0] left-[74px] text-[12px] text-center text-white top-[18px] w-[130px]" data-node-id="2227:21">
                <p className="leading-[normal]" dir="auto">
                  ثبت تخصیص
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#ebf6fd] h-[28px] left-[19px] overflow-clip rounded-[8px] top-[253px] w-[1120px]" data-node-id="2227:22" data-name="table-note">
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[20px] justify-center leading-[0] left-[1104px] text-[#60758a] text-[10px] text-right top-[14px] w-[1088px]" data-node-id="2227:23">
              <p className="leading-[normal]" dir="auto">
                پرداخت‌هایی که منبع آن‌ها صندوق است در این بخش نمایش داده نمی‌شوند و مشمول تخصیص ۱۰٪ نیستند.
              </p>
            </div>
          </div>
          <div className="absolute bg-[#f5f8fb] content-stretch flex h-[40px] items-center justify-between left-[19px] overflow-clip px-[10px] rounded-[8px] top-[205px] w-[1120px]" data-node-id="2227:24" data-name="pagination-footer">
            <div className="content-stretch flex gap-[8px] h-[30px] items-center overflow-clip relative shrink-0" data-node-id="2227:25" data-name="pagination-controls">
              <div className="bg-white border border-[#e4ebf1] border-solid content-stretch cursor-pointer flex h-[30px] items-center justify-center opacity-50 overflow-clip relative rounded-[7px] shrink-0 w-[52px]" data-node-id="2227:26" role="button" tabIndex="0" data-name="pagination-بعدی">
                <div className="[word-break:break-word] flex flex-col font-sans font-medium h-[22px] justify-center leading-[0] relative shrink-0 text-[#17324d] text-[10px] text-center w-[40px]" data-node-id="2227:27">
                  <p className="leading-[normal]" dir="auto">
                    بعدی
                  </p>
                </div>
              </div>
              <div className="bg-[#2094e3] content-stretch flex items-center justify-center overflow-clip relative rounded-[7px] shrink-0 w-[30px] h-[30px]" data-node-id="2227:28" data-name="pagination-active-page">
                <div className="[word-break:break-word] flex flex-col font-sans font-medium h-[22px] justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white w-[24px]" data-node-id="2227:29">
                  <p className="leading-[normal]">۱</p>
                </div>
              </div>
              <div className="bg-white border border-[#e4ebf1] border-solid content-stretch cursor-pointer flex h-[30px] items-center justify-center opacity-50 overflow-clip relative rounded-[7px] shrink-0 w-[52px]" data-node-id="2227:30" role="button" tabIndex="0" data-name="pagination-قبلی">
                <div className="[word-break:break-word] flex flex-col font-sans font-medium h-[22px] justify-center leading-[0] relative shrink-0 text-[#17324d] text-[10px] text-center w-[40px]" data-node-id="2227:31">
                  <p className="leading-[normal]" dir="auto">
                    قبلی
                  </p>
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] flex flex-col font-sans font-normal h-[22px] justify-center leading-[0] relative shrink-0 text-[#60758a] text-[10px] text-right w-[240px]" data-node-id="2227:32">
              <p className="leading-[normal]" dir="auto">
                نمایش ۱ تا ۱ از ۱
              </p>
            </div>
          </div>
          <div className="absolute bg-[#2094e3] content-stretch flex h-[36px] items-center justify-center left-[19px] rounded-[8px] top-[13px] w-[236px]" data-node-id="2227:33" data-name="view-all-fund-synergy">
            <div className="[word-break:break-word] flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[10px] text-right text-white whitespace-nowrap" data-node-id="2227:34">
              <p className="leading-[normal]" dir="auto">
                مشاهده همه هم‌افزایی‌ها
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="absolute bg-[#17324d] content-stretch flex flex-col gap-[10px] h-[1266px] items-end left-[1216px] pb-[18px] pt-[20px] px-[16px] top-0 w-[224px]" data-node-id="2106:4" data-name="colored-sidebar">
        <div className="bg-white content-stretch flex h-[56px] items-center justify-end overflow-clip px-[10px] py-[8px] relative rounded-[12px] shrink-0 w-[192px]" data-node-id="2106:5" data-name="brand-logo">
          <div className="h-[40px] relative shrink-0 w-[118px]" data-node-id="2106:6" data-name="ChatGPT Image ۲۹ مرداد ۱۴۰۵، ۱۵_۱۶_۳۵ 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-[5.28%] max-w-none top-0 w-[100.73%]" src={imgChatGptImage1} />
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[3px] h-[64px] items-start justify-end overflow-clip px-[8px] py-[7px] relative shrink-0 text-center w-[192px]" data-node-id="2106:7" data-name="panel-identity">
          <p className="font-sans font-medium h-[24px] leading-[normal] relative shrink-0 text-[13px] text-white w-[176px]" dir="auto" data-node-id="2106:8">
            سامانه ماه
          </p>
          <div className="flex flex-col font-sans font-normal h-[18px] justify-center leading-[0] relative shrink-0 text-[#d8e7f3] text-[10px] w-[176px]" data-node-id="2106:9">
            <p className="leading-[normal]" dir="auto">
              پنل کمیته امداد
            </p>
          </div>
        </div>
        <div className="bg-[#2094e3] content-stretch flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[10px] shrink-0 w-[192px]" data-node-id="2106:10" data-name="dashboard-nav">
          <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2106:11">
            داشبورد
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2106:12" data-name="dashboard-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2106:13" data-name="Frame">
              <div className="absolute inset-[11.11%]" data-node-id="2106:14" data-name="Group">
                <div className="absolute inset-[-5.71%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[10px] shrink-0 w-[192px]" data-node-id="2106:19" data-name="release-requests-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] opacity-90 relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2106:20">
            درخواست‌های آزادسازی
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2106:21" data-name="users-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2106:22" data-name="Frame">
              <div className="absolute inset-[22.22%_13.89%_19.44%_13.89%]" data-node-id="2106:23" data-name="Group">
                <div className="absolute inset-[-7.62%_-6.15%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup1} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a className="block cursor-pointer h-[38px] overflow-clip relative rounded-[8px] shrink-0 w-[192px]" data-node-id="2110:2" data-name="article-172-approvals-nav">
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal leading-[normal] left-[152px] text-[#edf5fc] text-[12px] text-right top-[9.5px] w-[142px]" dir="auto" data-node-id="2110:3">
            تأیید گواهی ماده ۱۷۲
          </p>
          <div className="absolute left-[162px] w-[18px] h-[18px] top-[10px]" data-node-id="2110:4" data-name="certificate-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgCertificateIcon} />
          </div>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[10px] shrink-0 w-[192px]" data-node-id="2223:2" data-name="fund-synergy-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] opacity-90 relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2223:3">
            هم‌افزایی صندوق
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="2226:8" data-name="fund-synergy-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgFundSynergyIcon} />
          </div>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[10px] shrink-0 w-[192px]" data-node-id="2237:163" data-name="fund-synergy-history-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] opacity-90 relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2237:164">
            سوابق هم‌افزایی صندوق
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2237:165" data-name="project-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2237:166" data-name="Frame">
              <div className="absolute inset-[27.78%_19.44%_22.22%_16.67%]" data-node-id="2237:167" data-name="Group">
                <div className="absolute inset-[-8.89%_-6.96%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup2} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[10px] shrink-0 w-[192px]" data-node-id="2106:26" data-name="payment-history-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] opacity-90 relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2106:27">
            سوابق پرداخت
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2106:28" data-name="project-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2106:29" data-name="Frame">
              <div className="absolute inset-[27.78%_19.44%_22.22%_16.67%]" data-node-id="2106:30" data-name="Group">
                <div className="absolute inset-[-8.89%_-6.96%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup2} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[10px] shrink-0 w-[192px]" data-node-id="2106:34" data-name="financial-reports-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] opacity-90 relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2106:35">
            گزارش‌های مالی
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2106:36" data-name="milestone-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2106:37" data-name="Frame">
              <div className="absolute inset-[13.89%_11.11%]" data-node-id="2106:38" data-name="Group">
                <div className="absolute inset-[-6.15%_-5.71%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup3} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[10px] shrink-0 w-[192px]" data-node-id="2382:398" data-name="fund-returns-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] opacity-90 relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2382:399">
            منابع برگشتی صندوق
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2382:400" data-name="project-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2382:401" data-name="Frame">
              <div className="absolute inset-[27.78%_19.44%_22.22%_16.67%]" data-node-id="2382:402" data-name="Group">
                <div className="absolute inset-[-8.89%_-6.96%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup2} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <div className="flex-[1_0_0] min-h-px relative w-[192px]" data-node-id="2106:56" data-name="sidebar-spacer" />
        <button className="bg-white content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end opacity-96 overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2106:57" data-name="logout-nav">
          <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[#17324d] text-[12px] text-right w-[142px]" dir="auto" data-node-id="2106:58">
            خروج از سیستم
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2106:59" data-name="logout-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2106:60" data-name="Frame">
              <div className="absolute inset-[16.67%_11.11%_16.67%_19.44%]" data-node-id="2106:61" data-name="Group">
                <div className="absolute inset-[-6.67%_-6.4%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup4} />
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}