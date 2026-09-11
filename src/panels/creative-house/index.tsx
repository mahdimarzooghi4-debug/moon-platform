import "./index.css";

const imgChatGptImage1 = "/assets/creative-house/dashboard/logo.png";
const imgFrame = "/assets/creative-house/dashboard/kpi-startups.svg";
const imgFrame1 = "/assets/creative-house/dashboard/kpi-projects.svg";
const imgFrame2 = "/assets/creative-house/dashboard/kpi-funds.svg";
const imgFrame3 = "/assets/creative-house/dashboard/kpi-beneficiaries.svg";
const imgProgressTrack = "/assets/creative-house/dashboard/progress.svg";
const imgDashboardIcon = "/assets/creative-house/dashboard/nav-dashboard.svg";
const imgUsersIcon = "/assets/creative-house/dashboard/nav-startups.svg";
const imgProjectIcon = "/assets/creative-house/dashboard/nav-projects.svg";
const imgMilestoneIcon = "/assets/creative-house/dashboard/nav-milestones.svg";
const imgReportsIcon = "/assets/creative-house/dashboard/nav-reports.svg";
const imgHistoryIcon = "/assets/creative-house/dashboard/nav-history.svg";
const imgSettingsIcon = "/assets/creative-house/dashboard/nav-settings.svg";
const imgLogoutIcon = "/assets/creative-house/dashboard/nav-logout.svg";

export default function AyenehMainDashboard() {
  return (
    <div className="creative-house-dashboard bg-[#f5f8fb] content-stretch flex items-start relative w-full h-full" data-node-id="1714:582" data-name="ayeneh-main-dashboard">
      <div className="bg-[#f5f8fb] content-stretch flex flex-col gap-[16px] h-[900px] items-start px-[28px] py-[22px] relative shrink-0 w-[1216px]" data-node-id="1714:583" data-name="Main Content">
        <div className="bg-[#f5f8fb] content-stretch flex h-[54px] items-center justify-between relative shrink-0 w-[1160px]" data-node-id="1714:605" data-name="Top Bar">
          <div className="bg-white content-stretch cursor-pointer flex gap-[8px] h-[38px] items-center relative shrink-0" data-node-id="1714:606" data-name="Top Actions">
            <a className="bg-white border border-[#e4ebf1] border-solid content-stretch flex h-[36px] items-center justify-center px-[14px] py-[7px] relative rounded-[10px] shrink-0 w-[100px]" data-node-id="1714:607" data-name="گزارش اثر">
              <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[#2094e3] text-[12px] text-center whitespace-nowrap" dir="auto" data-node-id="1714:608">
                گزارش‌های آماری
              </p>
            </a>
            <a className="bg-[#2094e3] content-stretch flex h-[36px] items-center justify-center px-[14px] py-[7px] relative rounded-[10px] shrink-0 w-[136px]" data-node-id="1714:609" data-name="همه پروژه‌ها">
              <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap" dir="auto" data-node-id="1714:610">
                همه ارزیابی‌ها
              </p>
            </a>
          </div>
          <div className="[word-break:break-word] bg-white content-stretch flex flex-col gap-[2px] h-[50px] items-end leading-[normal] relative shrink-0 text-right w-[520px]" data-node-id="1714:611" data-name="Page Title">
            <p className="font-sans font-bold relative shrink-0 text-[#17324d] text-[22px] w-full" dir="auto" data-node-id="1714:612">
              داشبورد خانه خلاق و نوآوری آینه
            </p>
            <p className="font-sans font-normal relative shrink-0 text-[#60758a] text-[11px] w-full" dir="auto" data-node-id="1714:613">
              ارزیابی استارتاپ‌ها، پروژه‌ها و مراحل اجرای طرح
            </p>
          </div>
        </div>
        <div className="bg-[#f5f8fb] content-stretch flex gap-[12px] h-[104px] items-start relative shrink-0 w-[1160px]" data-node-id="1714:614" data-name="Overview Metrics">
          <div className="bg-white border border-[#e4ebf1] border-solid content-stretch drop-shadow-[0px_3px_5px_rgba(23,46,71,0.06)] flex flex-col gap-[4px] h-[104px] items-start px-[16px] py-[12px] relative rounded-[14px] shrink-0 w-[281px]" data-node-id="1714:615" data-name="Startup Count">
            <p className="[word-break:break-word] font-sans font-normal leading-[normal] min-w-full relative shrink-0 text-[#60758a] text-[11px] text-right w-[min-content]" dir="auto" data-node-id="1714:616">
              تعداد استارتاپ‌ها
            </p>
            <div className="[word-break:break-word] bg-white content-stretch flex gap-[6px] h-[38px] items-center justify-end leading-[normal] relative shrink-0 text-right w-[249px] whitespace-nowrap" data-node-id="1714:617" data-name="value">
              <p className="font-sans font-normal relative shrink-0 text-[#60758a] text-[11px]" dir="auto" data-node-id="1714:618">
                استارتاپ
              </p>
              <p className="font-sans font-bold relative shrink-0 text-[#17324d] text-[25px]" data-node-id="1714:619">
                ۱٬۲۵۰
              </p>
            </div>
            <div className="bg-[#c27a10] h-[3px] relative rounded-[2px] shrink-0 w-[249px]" data-node-id="1714:620" data-name="accent" />
            <div className="absolute bg-[#eaf5fd] left-[15px] overflow-clip rounded-[10px] w-[36px] h-[36px] top-[11px]" data-node-id="1727:3" data-name="kpi-icon-badge">
              <div className="absolute left-[9px] w-[18px] h-[18px] top-[9px]" data-node-id="1727:4" data-name="Frame">
                <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgFrame} />
              </div>
            </div>
          </div>
          <div className="bg-white border border-[#e4ebf1] border-solid content-stretch drop-shadow-[0px_3px_5px_rgba(23,46,71,0.06)] flex flex-col gap-[4px] h-[104px] items-start px-[16px] py-[12px] relative rounded-[14px] shrink-0 w-[281px]" data-node-id="1714:621" data-name="Active Projects">
            <p className="[word-break:break-word] font-sans font-normal leading-[normal] min-w-full relative shrink-0 text-[#60758a] text-[11px] text-right w-[min-content]" dir="auto" data-node-id="1714:622">
              پروژه‌های فعال
            </p>
            <div className="[word-break:break-word] bg-white content-stretch flex gap-[6px] h-[38px] items-center justify-end leading-[normal] relative shrink-0 text-right w-[249px] whitespace-nowrap" data-node-id="1714:623" data-name="value">
              <p className="font-sans font-normal relative shrink-0 text-[#60758a] text-[11px]" dir="auto" data-node-id="1714:624">
                پروژه
              </p>
              <p className="font-sans font-bold relative shrink-0 text-[#17324d] text-[25px]" data-node-id="1714:625">
                ۲۴
              </p>
            </div>
            <div className="bg-[#c5a056] h-[3px] relative rounded-[2px] shrink-0 w-[249px]" data-node-id="1714:626" data-name="accent" />
            <div className="absolute bg-[#f4f0ff] left-[15px] overflow-clip rounded-[10px] w-[36px] h-[36px] top-[11px]" data-node-id="1727:8" data-name="kpi-icon-badge">
              <div className="absolute left-[9px] w-[18px] h-[18px] top-[9px]" data-node-id="1727:9" data-name="Frame">
                <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgFrame1} />
              </div>
            </div>
          </div>
          <div className="bg-white border border-[#e4ebf1] border-solid content-stretch drop-shadow-[0px_3px_5px_rgba(23,46,71,0.06)] flex flex-col gap-[4px] h-[104px] items-start px-[16px] py-[12px] relative rounded-[14px] shrink-0 w-[281px]" data-node-id="1714:627" data-name="Raised Funds">
            <p className="[word-break:break-word] font-sans font-normal leading-[normal] min-w-full relative shrink-0 text-[#60758a] text-[11px] text-right w-[min-content]" dir="auto" data-node-id="1714:628">
              منابع جذب‌شده
            </p>
            <div className="[word-break:break-word] bg-white content-stretch flex gap-[6px] h-[38px] items-center justify-end leading-[normal] relative shrink-0 text-right w-[249px] whitespace-nowrap" data-node-id="1714:629" data-name="value">
              <p className="font-sans font-normal relative shrink-0 text-[#60758a] text-[11px]" dir="auto" data-node-id="1714:630">
                میلیارد تومان
              </p>
              <p className="font-sans font-bold relative shrink-0 text-[#17324d] text-[25px]" data-node-id="1714:631">
                ۱۸٫۴
              </p>
            </div>
            <div className="bg-[#159455] h-[3px] relative rounded-[2px] shrink-0 w-[249px]" data-node-id="1714:632" data-name="accent" />
            <div className="absolute bg-[#fff6e5] left-[15px] overflow-clip rounded-[10px] w-[36px] h-[36px] top-[11px]" data-node-id="1727:12" data-name="kpi-icon-badge">
              <div className="absolute left-[9px] w-[18px] h-[18px] top-[9px]" data-node-id="1727:13" data-name="Frame">
                <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgFrame2} />
              </div>
            </div>
          </div>
          <div className="bg-white border border-[#e4ebf1] border-solid content-stretch drop-shadow-[0px_3px_5px_rgba(23,46,71,0.06)] flex flex-col gap-[4px] h-[104px] items-start px-[16px] py-[12px] relative rounded-[14px] shrink-0 w-[281px]" data-node-id="1714:633" data-name="Beneficiaries">
            <p className="[word-break:break-word] font-sans font-normal leading-[normal] min-w-full relative shrink-0 text-[#60758a] text-[11px] text-right w-[min-content]" dir="auto" data-node-id="1714:634">
              افراد بهره‌مند
            </p>
            <div className="[word-break:break-word] bg-white content-stretch flex gap-[6px] h-[38px] items-center justify-end leading-[normal] relative shrink-0 text-right w-[249px] whitespace-nowrap" data-node-id="1714:635" data-name="value">
              <p className="font-sans font-normal relative shrink-0 text-[#60758a] text-[11px]" dir="auto" data-node-id="1714:636">
                نفر
              </p>
              <p className="font-sans font-bold relative shrink-0 text-[#17324d] text-[25px]" data-node-id="1714:637">
                ۱۲٬۸۴۰
              </p>
            </div>
            <div className="bg-[#2094e3] h-[3px] relative rounded-[2px] shrink-0 w-[249px]" data-node-id="1714:638" data-name="accent" />
            <div className="absolute bg-[#eaf8f0] left-[15px] overflow-clip rounded-[10px] w-[36px] h-[36px] top-[11px]" data-node-id="1727:16" data-name="kpi-icon-badge">
              <div className="absolute left-[9px] w-[18px] h-[18px] top-[9px]" data-node-id="1727:17" data-name="Frame">
                <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgFrame3} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-[#e4ebf1] border-solid content-stretch drop-shadow-[0px_3px_2.5px_rgba(23,46,71,0.06)] flex flex-col gap-[10px] h-[374px] items-start p-[14px] relative rounded-[14px] shrink-0 w-[1160px]" data-node-id="1714:639" data-name="evaluation-stats-overview">
          <div className="content-stretch flex h-[40px] items-center justify-between overflow-clip relative shrink-0 w-[1132px]" data-node-id="1728:2" data-name="stats-header">
            <div className="bg-[#eaf5fd] content-stretch flex h-[28px] items-center justify-center overflow-clip px-[10px] relative rounded-[9px] shrink-0 w-[110px]" data-node-id="1728:3" data-name="source-chip">
              <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[#2094e3] text-[11px] text-center whitespace-nowrap" dir="auto" data-node-id="1728:4">
                داده‌های لندینگ
              </p>
            </div>
            <p className="[word-break:break-word] font-sans font-bold h-[24px] leading-[normal] relative shrink-0 text-[#17324d] text-[16px] text-right w-[500px]" dir="auto" data-node-id="1728:5">
              مرور آماری ارزیابی و اثر
            </p>
          </div>
          <div className="content-stretch flex gap-[12px] h-[214px] items-start overflow-clip relative shrink-0 w-[1132px]" data-node-id="1728:6" data-name="stats-body">
            <div className="bg-white border border-[#e4ebf1] border-solid content-stretch flex flex-col gap-[9px] h-[214px] items-start overflow-clip pb-[12px] pt-[14px] px-[14px] relative rounded-[14px] shrink-0 w-[360px]" data-node-id="1728:7" data-name="selected-impact-stats">
              <p className="[word-break:break-word] font-sans font-bold h-[22px] leading-[normal] relative shrink-0 text-[#17324d] text-[14px] text-right w-[332px]" dir="auto" data-node-id="1728:8">
                شاخص‌های اثر منتخب
              </p>
              <div className="content-stretch flex h-[44px] items-center justify-between overflow-clip relative shrink-0 w-[332px]" data-node-id="1728:9" data-name="impact-stat-row">
                <div className="bg-[#eaf5fd] content-stretch flex h-[26px] items-center justify-center overflow-clip px-[9px] relative rounded-[9px] shrink-0 w-[80px]" data-node-id="1728:10" data-name="Frame">
                  <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[#2094e3] text-[11px] text-center whitespace-nowrap" data-node-id="1728:11">
                    ۷۴٪
                  </p>
                </div>
                <p className="[word-break:break-word] font-sans font-normal h-[16px] leading-[normal] relative shrink-0 text-[#60758a] text-[10px] text-right w-[90px]" dir="auto" data-node-id="1728:12">
                  پوشش خدمات
                </p>
                <p className="[word-break:break-word] font-sans font-medium h-[18px] leading-[normal] relative shrink-0 text-[#17324d] text-[11px] text-right w-[135px]" dir="auto" data-node-id="1728:13">
                  سلامت خانواده
                </p>
              </div>
              <div className="content-stretch flex h-[44px] items-center justify-between overflow-clip relative shrink-0 w-[332px]" data-node-id="1728:14" data-name="impact-stat-row">
                <div className="bg-[#eaf8f0] content-stretch flex h-[26px] items-center justify-center overflow-clip px-[9px] relative rounded-[9px] shrink-0 w-[80px]" data-node-id="1728:15" data-name="Frame">
                  <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[#159455] text-[11px] text-center whitespace-nowrap" dir="auto" data-node-id="1728:16">
                    ۷۰٪ افزایش
                  </p>
                </div>
                <p className="[word-break:break-word] font-sans font-normal h-[16px] leading-[normal] relative shrink-0 text-[#60758a] text-[10px] text-right w-[90px]" dir="auto" data-node-id="1728:17">
                  اشتغال‌پذیری
                </p>
                <p className="[word-break:break-word] font-sans font-medium h-[18px] leading-[normal] relative shrink-0 text-[#17324d] text-[11px] text-right w-[135px]" dir="auto" data-node-id="1728:18">
                  مهارت برای نوجوانان
                </p>
              </div>
              <div className="content-stretch flex h-[44px] items-center justify-between overflow-clip relative shrink-0 w-[332px]" data-node-id="1728:19" data-name="impact-stat-row">
                <div className="bg-[#fff6e5] content-stretch flex h-[26px] items-center justify-center overflow-clip px-[9px] relative rounded-[9px] shrink-0 w-[80px]" data-node-id="1728:20" data-name="Frame">
                  <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[#c27a10] text-[11px] text-center whitespace-nowrap" dir="auto" data-node-id="1728:21">
                    ۳۰٪ افزایش
                  </p>
                </div>
                <p className="[word-break:break-word] font-sans font-normal h-[16px] leading-[normal] relative shrink-0 text-[#60758a] text-[10px] text-right w-[90px]" dir="auto" data-node-id="1728:22">
                  توسعه درآمدی
                </p>
                <p className="[word-break:break-word] font-sans font-medium h-[18px] leading-[normal] relative shrink-0 text-[#17324d] text-[11px] text-right w-[135px]" dir="auto" data-node-id="1728:23">
                  اشتغال زنان روستایی
                </p>
              </div>
            </div>
            <div className="bg-white border border-[#e4ebf1] border-solid content-stretch flex flex-col gap-[9px] h-[214px] items-start overflow-clip pb-[12px] pt-[14px] px-[16px] relative rounded-[14px] shrink-0 w-[760px]" data-node-id="1728:24" data-name="featured-project-funding">
              <p className="[word-break:break-word] font-sans font-bold h-[22px] leading-[normal] relative shrink-0 text-[#17324d] text-[14px] text-right w-[728px]" dir="auto" data-node-id="1728:25">
                وضعیت تأمین مالی پروژه‌های شاخص
              </p>
              <div className="content-stretch flex h-[44px] items-center justify-between overflow-clip relative shrink-0 w-[728px]" data-node-id="1728:26" data-name="funding-row">
                <p className="[word-break:break-word] font-sans font-bold h-[20px] leading-[normal] relative shrink-0 text-[#2094e3] text-[12px] text-center w-[48px]" data-node-id="1728:27">
                  ۵۱٪
                </p>
                <div className="bg-[#e4ebf1] h-[8px] overflow-clip relative rounded-[4px] shrink-0 w-[320px]" data-node-id="1728:28" data-name="progress-track">
                  <div className="absolute bg-[#2094e3] h-[8px] right-[-0.2px] rounded-[4px] top-0 w-[163.2px]" data-node-id="1728:29" data-name="progress-fill" />
                </div>
                <p className="[word-break:break-word] font-sans font-normal h-[16px] leading-[normal] relative shrink-0 text-[#60758a] text-[10px] text-right w-[120px]" dir="auto" data-node-id="1728:30">
                  سیستان و بلوچستان
                </p>
                <p className="[word-break:break-word] font-sans font-medium h-[18px] leading-[normal] relative shrink-0 text-[#17324d] text-[11px] text-right w-[180px]" dir="auto" data-node-id="1728:31">
                  سلامت خانواده
                </p>
              </div>
              <div className="content-stretch flex h-[44px] items-center justify-between overflow-clip relative shrink-0 w-[728px]" data-node-id="1728:32" data-name="funding-row">
                <p className="[word-break:break-word] font-sans font-bold h-[20px] leading-[normal] relative shrink-0 text-[#2094e3] text-[12px] text-center w-[48px]" data-node-id="1728:33">
                  ۷۴٪
                </p>
                <div className="h-[8px] relative shrink-0 w-[320px]" data-node-id="1728:34" data-name="progress-track">
                  <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgProgressTrack} />
                </div>
                <p className="[word-break:break-word] font-sans font-normal h-[16px] leading-[normal] relative shrink-0 text-[#60758a] text-[10px] text-right w-[120px]" dir="auto" data-node-id="1728:36">
                  اصفهان
                </p>
                <p className="[word-break:break-word] font-sans font-medium h-[18px] leading-[normal] relative shrink-0 text-[#17324d] text-[11px] text-right w-[180px]" dir="auto" data-node-id="1728:37">
                  مهارت برای نوجوانان
                </p>
              </div>
              <div className="content-stretch flex h-[44px] items-center justify-between overflow-clip relative shrink-0 w-[728px]" data-node-id="1728:38" data-name="funding-row">
                <p className="[word-break:break-word] font-sans font-bold h-[20px] leading-[normal] relative shrink-0 text-[#2094e3] text-[12px] text-center w-[48px]" data-node-id="1728:39">
                  ۵۸٪
                </p>
                <div className="bg-[#e4ebf1] h-[8px] overflow-clip relative rounded-[4px] shrink-0 w-[320px]" data-node-id="1728:40" data-name="progress-track">
                  <div className="absolute bg-[#2094e3] h-[8px] right-[0.4px] rounded-[4px] top-0 w-[185.6px]" data-node-id="1728:41" data-name="progress-fill" />
                </div>
                <p className="[word-break:break-word] font-sans font-normal h-[16px] leading-[normal] relative shrink-0 text-[#60758a] text-[10px] text-right w-[120px]" dir="auto" data-node-id="1728:42">
                  گلستان
                </p>
                <p className="[word-break:break-word] font-sans font-medium h-[18px] leading-[normal] relative shrink-0 text-[#17324d] text-[11px] text-right w-[180px]" dir="auto" data-node-id="1728:43">
                  اشتغال زنان روستایی
                </p>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex gap-[10px] h-[74px] items-start leading-[normal] overflow-clip relative shrink-0 text-right w-[1132px]" data-node-id="1728:44" data-name="stats-summary-strip">
            <div className="bg-[#eaf5fd] content-stretch flex flex-col gap-px h-[74px] items-start overflow-clip pb-[8px] pt-[9px] px-[12px] relative rounded-[11px] shrink-0 w-[275.5px]" data-node-id="1728:45" data-name="summary-stat">
              <p className="font-sans font-bold h-[26px] relative shrink-0 text-[#2094e3] text-[18px] w-[251.5px]" data-node-id="1728:46">
                ۳
              </p>
              <p className="font-sans font-normal h-[18px] relative shrink-0 text-[#60758a] text-[10px] w-[251.5px]" dir="auto" data-node-id="1728:47">
                پروژه شاخص
              </p>
            </div>
            <div className="bg-[#f4f0ff] content-stretch flex flex-col gap-px h-[74px] items-start overflow-clip pb-[8px] pt-[9px] px-[12px] relative rounded-[11px] shrink-0 w-[275.5px]" data-node-id="1728:48" data-name="summary-stat">
              <p className="font-sans font-bold h-[26px] relative shrink-0 text-[#7058b8] text-[18px] w-[251.5px]" data-node-id="1728:49">
                ۳
              </p>
              <p className="font-sans font-normal h-[18px] relative shrink-0 text-[#60758a] text-[10px] w-[251.5px]" dir="auto" data-node-id="1728:50">
                استان در پروژه‌های شاخص
              </p>
            </div>
            <div className="bg-[#eaf8f0] content-stretch flex flex-col gap-px h-[74px] items-start overflow-clip pb-[8px] pt-[9px] px-[12px] relative rounded-[11px] shrink-0 w-[275.5px]" data-node-id="1728:51" data-name="summary-stat">
              <p className="font-sans font-bold h-[26px] relative shrink-0 text-[#159455] text-[18px] w-[251.5px]" data-node-id="1728:52">
                ۳
              </p>
              <p className="font-sans font-normal h-[18px] relative shrink-0 text-[#60758a] text-[10px] w-[251.5px]" dir="auto" data-node-id="1728:53">
                حوزه اثر
              </p>
            </div>
            <div className="bg-[#fff6e5] content-stretch flex flex-col gap-px h-[74px] items-start overflow-clip pb-[8px] pt-[9px] px-[12px] relative rounded-[11px] shrink-0 w-[275.5px]" data-node-id="1728:54" data-name="summary-stat">
              <p className="font-sans font-bold h-[26px] relative shrink-0 text-[#c27a10] text-[18px] w-[251.5px]" data-node-id="1728:55">
                ۶۱٪
              </p>
              <p className="font-sans font-normal h-[18px] relative shrink-0 text-[#60758a] text-[10px] w-[251.5px]" dir="auto" data-node-id="1728:56">
                میانگین تأمین پروژه‌های شاخص
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex h-[280px] items-start relative shrink-0 w-[1160px]" data-node-id="1714:730" data-name="startup-list-section">
          <div className="bg-white border border-[#e4ebf1] border-solid content-stretch drop-shadow-[0px_3px_2.5px_rgba(23,46,71,0.06)] flex flex-col gap-[7px] h-[280px] items-end px-[16px] py-[14px] relative rounded-[14px] shrink-0 w-[1160px]" data-node-id="1714:731" data-name="startup-list">
            <div className="content-stretch flex h-[30px] items-center justify-between overflow-clip relative shrink-0 w-[1128px]" data-node-id="1736:2" data-name="startup-list-header">
              <div className="bg-[#eaf5fd] h-[26px] relative rounded-[9px] shrink-0 w-[210px]" data-node-id="1736:3" data-name="data-source-note" />
              <p className="[word-break:break-word] font-sans font-bold leading-[normal] relative shrink-0 text-[#17324d] text-[15px] text-right whitespace-nowrap" dir="auto" data-node-id="1736:5">
                فهرست استارتاپ‌ها
              </p>
            </div>
            <div className="bg-[#f8fbfd] content-stretch flex h-[30px] items-center overflow-clip relative rounded-[8px] shrink-0 w-[1128px]" data-node-id="1736:6" data-name="startup-table-head">
              <div className="content-stretch flex h-[30px] items-center justify-end overflow-clip pr-[12px] relative shrink-0 w-[170px]" data-node-id="1736:7" data-name="header-cell">
                <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[#60758a] text-[10px] text-right whitespace-nowrap" dir="auto" data-node-id="1736:8">
                  مرحله فعلی
                </p>
              </div>
              <div className="content-stretch flex h-[30px] items-center justify-end overflow-clip pr-[12px] relative shrink-0 w-[280px]" data-node-id="1736:9" data-name="header-cell">
                <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[#60758a] text-[10px] text-right whitespace-nowrap" dir="auto" data-node-id="1736:10">
                  حوزه فعالیت
                </p>
              </div>
              <div className="content-stretch flex h-[30px] items-center justify-end overflow-clip pr-[12px] relative shrink-0 w-[240px]" data-node-id="1736:11" data-name="header-cell">
                <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[#60758a] text-[10px] text-right whitespace-nowrap" dir="auto" data-node-id="1736:12">
                  مدیر استارتاپ
                </p>
              </div>
              <div className="content-stretch flex h-[30px] items-center justify-end overflow-clip pr-[12px] relative shrink-0 w-[380px]" data-node-id="1736:13" data-name="header-cell">
                <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[#60758a] text-[10px] text-right whitespace-nowrap" dir="auto" data-node-id="1736:14">
                  نام استارتاپ
                </p>
              </div>
              <div className="content-stretch flex h-[30px] items-center justify-center overflow-clip relative shrink-0 w-[58px]" data-node-id="1806:2" data-name="number-header-cell">
                <div className="[word-break:break-word] flex flex-col font-sans font-medium h-[30px] justify-center leading-[0] relative shrink-0 text-[#60758a] text-[10px] text-center w-[58px]" data-node-id="1806:3">
                  <p className="leading-[normal]" dir="auto">
                    ردیف
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex h-[42px] items-center overflow-clip relative shrink-0 w-[1128px]" data-node-id="1736:15" data-name="startup-row-1">
              <div className="content-stretch flex h-[42px] items-center justify-center overflow-clip relative shrink-0 w-[170px]" data-node-id="1736:16" data-name="stage-cell">
                <div className="bg-[#fff6e3] content-stretch flex h-[24px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-[86px]" data-node-id="1736:17" data-name="stage-chip">
                  <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[#c27a0f] text-[10px] text-right whitespace-nowrap" dir="auto" data-node-id="1736:18">
                    در حال ارزیابی پروژه
                  </p>
                </div>
              </div>
              <div className="content-stretch flex h-[42px] items-center justify-end overflow-clip pr-[12px] relative shrink-0 w-[280px]" data-node-id="1736:19" data-name="domain-cell">
                <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[#17324d] text-[11px] text-right whitespace-nowrap" dir="auto" data-node-id="1736:20">
                  سلامت و بهداشت
                </p>
              </div>
              <div className="content-stretch flex h-[42px] items-center justify-end overflow-clip pr-[12px] relative shrink-0 w-[240px]" data-node-id="1736:21" data-name="manager-cell">
                <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[#60758a] text-[11px] text-right whitespace-nowrap" dir="auto" data-node-id="1736:22">
                  مریم احمدی
                </p>
              </div>
              <div className="content-stretch flex h-[42px] items-center justify-end overflow-clip pr-[12px] relative shrink-0 w-[380px]" data-node-id="1736:23" data-name="startup-cell">
                <div className="[word-break:break-word] content-stretch flex flex-col gap-px items-end leading-[normal] overflow-clip relative shrink-0 text-right whitespace-nowrap" data-node-id="1736:24" data-name="startup-name-and-project">
                  <p className="font-sans font-medium relative shrink-0 text-[#17324d] text-[11px]" dir="auto" data-node-id="1736:25">
                    سلامت‌یار شرق
                  </p>
                  <p className="font-sans font-normal relative shrink-0 text-[#60758a] text-[9px]" dir="auto" data-node-id="1736:26">
                    پروژه: سلامت خانواده
                  </p>
                </div>
              </div>
              <div className="content-stretch flex h-[42px] items-center justify-center overflow-clip relative shrink-0 w-[58px]" data-node-id="1806:4" data-name="row-number-cell">
                <div className="[word-break:break-word] flex flex-col font-sans font-normal h-[42px] justify-center leading-[0] relative shrink-0 text-[#60758a] text-[12px] text-center w-[58px]" data-node-id="1806:5">
                  <p className="leading-[normal]" dir="auto">
                    ۱
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#fdfeff] content-stretch flex h-[42px] items-center overflow-clip relative shrink-0 w-[1128px]" data-node-id="1736:27" data-name="startup-row-2">
              <div className="content-stretch flex h-[42px] items-center justify-center overflow-clip relative shrink-0 w-[170px]" data-node-id="1736:28" data-name="stage-cell">
                <div className="bg-[#ebf6fe] content-stretch flex h-[24px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-[86px]" data-node-id="1736:29" data-name="stage-chip">
                  <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[#2194e3] text-[10px] text-right whitespace-nowrap" dir="auto" data-node-id="1736:30">
                    در حال اجرای مرحله ۱
                  </p>
                </div>
              </div>
              <div className="content-stretch flex h-[42px] items-center justify-end overflow-clip pr-[12px] relative shrink-0 w-[280px]" data-node-id="1736:31" data-name="domain-cell">
                <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[#17324d] text-[11px] text-right whitespace-nowrap" dir="auto" data-node-id="1736:32">
                  آموزش و اشتغال
                </p>
              </div>
              <div className="content-stretch flex h-[42px] items-center justify-end overflow-clip pr-[12px] relative shrink-0 w-[240px]" data-node-id="1736:33" data-name="manager-cell">
                <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[#60758a] text-[11px] text-right whitespace-nowrap" dir="auto" data-node-id="1736:34">
                  علی رضایی
                </p>
              </div>
              <div className="content-stretch flex h-[42px] items-center justify-end overflow-clip pr-[12px] relative shrink-0 w-[380px]" data-node-id="1736:35" data-name="startup-cell">
                <div className="[word-break:break-word] content-stretch flex flex-col gap-px items-end leading-[normal] overflow-clip relative shrink-0 text-right whitespace-nowrap" data-node-id="1736:36" data-name="startup-name-and-project">
                  <p className="font-sans font-medium relative shrink-0 text-[#17324d] text-[11px]" dir="auto" data-node-id="1736:37">
                    آینده‌ساز مهارت
                  </p>
                  <p className="font-sans font-normal relative shrink-0 text-[#60758a] text-[9px]" dir="auto" data-node-id="1736:38">
                    پروژه: مهارت برای نوجوانان
                  </p>
                </div>
              </div>
              <div className="content-stretch flex h-[42px] items-center justify-center overflow-clip relative shrink-0 w-[58px]" data-node-id="1806:6" data-name="row-number-cell">
                <div className="[word-break:break-word] flex flex-col font-sans font-normal h-[42px] justify-center leading-[0] relative shrink-0 text-[#60758a] text-[12px] text-center w-[58px]" data-node-id="1806:7">
                  <p className="leading-[normal]" dir="auto">
                    ۲
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white content-stretch flex h-[42px] items-center overflow-clip relative shrink-0 w-[1128px]" data-node-id="1736:39" data-name="startup-row-3">
              <div className="content-stretch flex h-[42px] items-center justify-center overflow-clip relative shrink-0 w-[170px]" data-node-id="1736:40" data-name="stage-cell">
                <div className="bg-[#ebf9f1] content-stretch flex h-[24px] items-center justify-center overflow-clip relative rounded-[8px] shrink-0 w-[86px]" data-node-id="1736:41" data-name="stage-chip">
                  <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[#149454] text-[10px] text-right whitespace-nowrap" dir="auto" data-node-id="1736:42">
                    آماده آزادسازی وجه
                  </p>
                </div>
              </div>
              <div className="content-stretch flex h-[42px] items-center justify-end overflow-clip pr-[12px] relative shrink-0 w-[280px]" data-node-id="1736:43" data-name="domain-cell">
                <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[#17324d] text-[11px] text-right whitespace-nowrap" dir="auto" data-node-id="1736:44">
                  کسب‌وکار و اشتغال
                </p>
              </div>
              <div className="content-stretch flex h-[42px] items-center justify-end overflow-clip pr-[12px] relative shrink-0 w-[240px]" data-node-id="1736:45" data-name="manager-cell">
                <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[#60758a] text-[11px] text-right whitespace-nowrap" dir="auto" data-node-id="1736:46">
                  زهرا محمدی
                </p>
              </div>
              <div className="content-stretch flex h-[42px] items-center justify-end overflow-clip pr-[12px] relative shrink-0 w-[380px]" data-node-id="1736:47" data-name="startup-cell">
                <div className="[word-break:break-word] content-stretch flex flex-col gap-px items-end leading-[normal] overflow-clip relative shrink-0 text-right whitespace-nowrap" data-node-id="1736:48" data-name="startup-name-and-project">
                  <p className="font-sans font-medium relative shrink-0 text-[#17324d] text-[11px]" dir="auto" data-node-id="1736:49">
                    روستابانوان گلستان
                  </p>
                  <p className="font-sans font-normal relative shrink-0 text-[#60758a] text-[9px]" dir="auto" data-node-id="1736:50">
                    پروژه: اشتغال زنان روستایی
                  </p>
                </div>
              </div>
              <div className="content-stretch flex h-[42px] items-center justify-center overflow-clip relative shrink-0 w-[58px]" data-node-id="1806:8" data-name="row-number-cell">
                <div className="[word-break:break-word] flex flex-col font-sans font-normal h-[42px] justify-center leading-[0] relative shrink-0 text-[#60758a] text-[12px] text-center w-[58px]" data-node-id="1806:9">
                  <p className="leading-[normal]" dir="auto">
                    ۳
                  </p>
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] bg-[#f9fafb] content-stretch flex font-sans font-bold h-[32px] items-center justify-between leading-[normal] overflow-clip px-[10px] relative rounded-[8px] shrink-0 text-[11px] w-[1128px] whitespace-nowrap" data-node-id="2399:2" data-name="startup-pagination-footer">
              <p className="relative shrink-0 text-[#616b7a]" dir="auto" data-node-id="2399:3">
                نمایش ۱ تا ۳ از ۳
              </p>
              <p className="relative shrink-0 text-[#7a8594]" dir="auto" data-node-id="2399:4">
                صفحه ۱ از ۱
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#17324d] content-stretch flex flex-col gap-[10px] h-[900px] items-end pb-[18px] pt-[20px] px-[16px] relative shrink-0 w-[224px]" data-node-id="1714:584" data-name="colored-sidebar">
        <div className="bg-white content-stretch flex h-[56px] items-center justify-end overflow-clip px-[10px] py-[8px] relative rounded-[12px] shrink-0 w-[192px]" data-node-id="1726:2" data-name="brand-logo">
          <div className="h-[40px] relative shrink-0 w-[118px]" data-node-id="1714:585" data-name="ChatGPT Image ۲۹ مرداد ۱۴۰۵، ۱۵_۱۶_۳۵ 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-[5.28%] max-w-none top-0 w-[100.73%]" src={imgChatGptImage1} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[64px] items-start justify-end overflow-clip px-[8px] py-[7px] relative shrink-0 w-[192px]" data-node-id="1726:3" data-name="panel-identity">
          <p className="[word-break:break-word] font-sans font-bold h-[39px] leading-[normal] relative shrink-0 text-[13px] text-center text-white w-[176px]" dir="auto" data-node-id="1726:4">
            خانه خلاق و نوآوری آینه
          </p>
        </div>
        <div className="bg-[#2094e3] content-stretch flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1726:6" data-name="dashboard-nav">
          <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1726:7">
            داشبورد
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1726:8" data-name="dashboard-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgDashboardIcon} />
          </div>
        </div>
        <a className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1726:13" data-name="startup-evaluations-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1726:14">
            ارزیابی استارتاپ‌ها
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1726:15" data-name="users-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgUsersIcon} />
          </div>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1726:20" data-name="project-evaluations-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1726:21">
            ارزیابی پروژه‌ها
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1726:22" data-name="project-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgProjectIcon} />
          </div>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1726:25" data-name="milestone-evaluations-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1726:26">
            ارزیابی مراحل پروژه
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1726:27" data-name="milestone-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgMilestoneIcon} />
          </div>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1726:30" data-name="reports-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1726:31">
            گزارش‌ها
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1726:32" data-name="reports-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgReportsIcon} />
          </div>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1726:37" data-name="evaluation-history-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1726:38">
            سوابق ارزیابی
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1726:39" data-name="history-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgHistoryIcon} />
          </div>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1726:43" data-name="settings-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="1726:44">
            تنظیمات
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1726:45" data-name="settings-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgSettingsIcon} />
          </div>
        </a>
        <div className="flex-[1_0_0] min-h-px relative w-[192px]" data-node-id="1726:48" data-name="sidebar-spacer" />
        <button className="bg-white content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end opacity-96 overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="1726:49" data-name="logout-nav">
          <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[#17324d] text-[12px] text-right w-[142px]" dir="auto" data-node-id="1726:50">
            خروج از سیستم
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="1726:55" data-name="logout-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgLogoutIcon} />
          </div>
        </button>
      </div>
    </div>
  );
}