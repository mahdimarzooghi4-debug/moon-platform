import "./index.css";

const imgChatGptImage1 = "/assets/fund-manager/dashboard/logo.png";
const imgFrame = "/assets/fund-manager/dashboard/frame.svg";
const imgFrame1 = "/assets/fund-manager/dashboard/frame1.svg";
const imgFrame2 = "/assets/fund-manager/dashboard/frame2.svg";
const imgFrame3 = "/assets/fund-manager/dashboard/frame3.svg";
const imgGroup = "/assets/fund-manager/dashboard/group.svg";
const imgGroup1 = "/assets/fund-manager/dashboard/group1.svg";
const imgGroup2 = "/assets/fund-manager/dashboard/group2.svg";
const imgGroup3 = "/assets/fund-manager/dashboard/group3.svg";
const imgGroup4 = "/assets/fund-manager/dashboard/group4.svg";
const imgGroup5 = "/assets/fund-manager/dashboard/group5.svg";
const imgSettingsIcon = "/assets/fund-manager/dashboard/settings-icon.svg";
const imgGroup6 = "/assets/fund-manager/dashboard/group6.svg";

export default function FundManagerMainDashboard() {
  return (
    <div className="bg-[#f5f8fb] content-stretch flex items-start relative w-full h-full" data-node-id="2284:3" data-name="fund-manager-main-dashboard">
      <div className="bg-[#f5f8fb] content-stretch flex flex-col gap-[16px] h-[900px] items-start px-[28px] py-[22px] relative shrink-0 w-[1216px]" data-node-id="2284:4" data-name="Main Content">
        <div className="bg-[#f5f8fb] content-stretch flex h-[54px] items-center justify-between relative shrink-0 w-[1160px]" data-node-id="2284:5" data-name="Top Bar">
          <div className="[word-break:break-word] bg-white content-stretch flex flex-col gap-[2px] h-[50px] items-end leading-[normal] relative shrink-0 text-right w-[520px]" data-node-id="2284:11" data-name="Page Title">
            <p className="font-sans font-bold relative shrink-0 text-[#17324d] text-[22px] w-full" dir="auto" data-node-id="2284:12">
              داشبورد مدیریت صندوق
            </p>
            <p className="font-sans font-normal relative shrink-0 text-[#60758a] text-[11px] w-full" dir="auto" data-node-id="2284:13">
              پایش منابع صندوق، سرمایه‌گذاری، سود و بازگشت منابع به چرخه تأمین مالی
            </p>
          </div>
        </div>
        <div className="bg-[#f5f8fb] content-stretch flex gap-[12px] h-[104px] items-start relative shrink-0 w-[1160px]" data-node-id="2284:14" data-name="Overview Metrics">
          <div className="bg-white border border-[#e4ebf1] border-solid content-stretch drop-shadow-[0px_3px_5px_rgba(23,46,71,0.06)] flex flex-col gap-[4px] h-[104px] items-start px-[16px] py-[12px] relative rounded-[14px] shrink-0 w-[281px]" data-node-id="2284:15" data-name="Startup Count">
            <p className="[word-break:break-word] font-sans font-normal leading-[normal] min-w-full relative shrink-0 text-[#60758a] text-[11px] text-right w-[min-content]" dir="auto" data-node-id="2284:16">
              اصل سرمایه صندوق
            </p>
            <div className="[word-break:break-word] bg-white content-stretch flex gap-[6px] h-[38px] items-center justify-end leading-[normal] relative shrink-0 text-right w-[249px]" data-node-id="2284:17" data-name="value">
              <p className="font-sans font-normal relative shrink-0 text-[#60758a] text-[11px] w-[46px]" dir="auto" data-node-id="2284:18">
                ​
              </p>
              <p className="font-sans font-bold h-[38px] relative shrink-0 text-[#17324d] text-[20px] w-[220px]" dir="auto" data-node-id="2284:19">
                ۱ میلیارد تومان
              </p>
            </div>
            <div className="bg-[#c27a10] h-[3px] relative rounded-[2px] shrink-0 w-[249px]" data-node-id="2284:20" data-name="accent" />
            <div className="absolute bg-[#eaf5fd] left-[15px] overflow-clip rounded-[10px] w-[36px] h-[36px] top-[11px]" data-node-id="2284:21" data-name="kpi-icon-badge">
              <div className="absolute left-[9px] w-[18px] h-[18px] top-[9px]" data-node-id="2284:22" data-name="Frame">
                <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgFrame} />
              </div>
            </div>
          </div>
          <div className="bg-white border border-[#e4ebf1] border-solid content-stretch drop-shadow-[0px_3px_5px_rgba(23,46,71,0.06)] flex flex-col gap-[4px] h-[104px] items-start px-[16px] py-[12px] relative rounded-[14px] shrink-0 w-[281px]" data-node-id="2284:26" data-name="Active Projects">
            <p className="[word-break:break-word] font-sans font-normal leading-[normal] min-w-full relative shrink-0 text-[#60758a] text-[11px] text-right w-[min-content]" dir="auto" data-node-id="2284:27">
              سهم بازگشت سود
            </p>
            <div className="[word-break:break-word] bg-white content-stretch flex gap-[6px] h-[38px] items-center justify-end leading-[normal] relative shrink-0 text-right w-[249px]" data-node-id="2284:28" data-name="value">
              <p className="font-sans font-normal relative shrink-0 text-[#60758a] text-[11px] w-[98px]" dir="auto" data-node-id="2284:29">
                ​
              </p>
              <p className="font-sans font-bold h-[38px] relative shrink-0 text-[#17324d] text-[20px] w-[220px]" dir="auto" data-node-id="2284:30">
                ۷۰٪
              </p>
            </div>
            <div className="bg-[#c5a056] h-[3px] relative rounded-[2px] shrink-0 w-[249px]" data-node-id="2284:31" data-name="accent" />
            <div className="absolute bg-[#f4f0ff] left-[15px] overflow-clip rounded-[10px] w-[36px] h-[36px] top-[11px]" data-node-id="2284:32" data-name="kpi-icon-badge">
              <div className="absolute left-[9px] w-[18px] h-[18px] top-[9px]" data-node-id="2284:33" data-name="Frame">
                <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgFrame1} />
              </div>
            </div>
          </div>
          <div className="bg-white border border-[#e4ebf1] border-solid content-stretch drop-shadow-[0px_3px_5px_rgba(23,46,71,0.06)] flex flex-col gap-[4px] h-[104px] items-start px-[16px] py-[12px] relative rounded-[14px] shrink-0 w-[281px]" data-node-id="2284:36" data-name="Raised Funds">
            <p className="[word-break:break-word] font-sans font-normal leading-[normal] min-w-full relative shrink-0 text-[#60758a] text-[11px] text-right w-[min-content]" dir="auto" data-node-id="2284:37">
              سهم درآمد ماه
            </p>
            <div className="[word-break:break-word] bg-white content-stretch flex gap-[6px] h-[38px] items-center justify-end leading-[normal] relative shrink-0 text-right w-[249px]" data-node-id="2284:38" data-name="value">
              <p className="font-sans font-normal relative shrink-0 text-[#60758a] text-[11px] w-[44px]" dir="auto" data-node-id="2284:39">
                ​
              </p>
              <p className="font-sans font-bold h-[38px] relative shrink-0 text-[#17324d] text-[20px] w-[220px]" dir="auto" data-node-id="2284:40">
                ۳۰٪
              </p>
            </div>
            <div className="bg-[#159455] h-[3px] relative rounded-[2px] shrink-0 w-[249px]" data-node-id="2284:41" data-name="accent" />
            <div className="absolute bg-[#fff6e5] left-[15px] overflow-clip rounded-[10px] w-[36px] h-[36px] top-[11px]" data-node-id="2284:42" data-name="kpi-icon-badge">
              <div className="absolute left-[9px] w-[18px] h-[18px] top-[9px]" data-node-id="2284:43" data-name="Frame">
                <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgFrame2} />
              </div>
            </div>
          </div>
          <div className="bg-white border border-[#e4ebf1] border-solid content-stretch drop-shadow-[0px_3px_5px_rgba(23,46,71,0.06)] flex flex-col gap-[4px] h-[104px] items-start px-[16px] py-[12px] relative rounded-[14px] shrink-0 w-[281px]" data-node-id="2284:46" data-name="Beneficiaries">
            <p className="[word-break:break-word] font-sans font-normal leading-[normal] min-w-full relative shrink-0 text-[#60758a] text-[11px] text-right w-[min-content]" dir="auto" data-node-id="2284:47">
              مالک اصل سرمایه
            </p>
            <div className="[word-break:break-word] bg-white content-stretch flex gap-[6px] h-[38px] items-center justify-end leading-[normal] relative shrink-0 text-right w-[249px]" data-node-id="2284:48" data-name="value">
              <p className="font-sans font-normal relative shrink-0 text-[#60758a] text-[11px] w-[80px]" dir="auto" data-node-id="2284:49">
                ​
              </p>
              <p className="font-sans font-bold h-[38px] relative shrink-0 text-[#17324d] text-[20px] w-[220px]" dir="auto" data-node-id="2284:50">
                کمیته امداد
              </p>
            </div>
            <div className="bg-[#2094e3] h-[3px] relative rounded-[2px] shrink-0 w-[249px]" data-node-id="2284:51" data-name="accent" />
            <div className="absolute bg-[#eaf8f0] left-[15px] overflow-clip rounded-[10px] w-[36px] h-[36px] top-[11px]" data-node-id="2284:52" data-name="kpi-icon-badge">
              <div className="absolute left-[9px] w-[18px] h-[18px] top-[9px]" data-node-id="2284:53" data-name="Frame">
                <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgFrame3} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-[#e4ebf1] border-solid h-[264px] overflow-clip relative rounded-[14px] shadow-[0px_3px_5px_0px_rgba(23,46,71,0.06)] shrink-0 w-[1160px]" data-node-id="2284:55" data-name="platform-activity">
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-medium h-[32px] leading-[normal] left-[1135px] text-[#17324d] text-[18px] text-right top-[15px] w-[388px]" dir="auto" data-node-id="2284:56">
            آخرین ورودی‌های صندوق
          </p>
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[1135px] text-[#60758a] text-[11px] text-right top-[47px] w-[588px]" dir="auto" data-node-id="2284:57">
            تخصیص‌های ۱۰٪ ثبت‌شده از پرداخت‌های نقدی شرکت‌ها — داده نمونه برای نمایش داشبورد
          </p>
          <div className="absolute bg-[#e8f5fc] h-[28px] left-[15px] overflow-clip rounded-[7px] top-[15px] w-[132px]" data-node-id="2284:58" data-name="account-tag">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[18px] leading-[normal] left-[66px] text-[#2094e3] text-[11px] text-center top-[5px] w-[108px]" dir="auto" data-node-id="2284:59">
              ورودی هم‌افزایی
            </p>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f6f9fc] font-sans font-medium h-[38px] leading-[normal] left-[15px] overflow-clip rounded-[7px] text-[#60758a] text-[11px] text-right top-[81px] w-[1128px]" data-node-id="2284:60" data-name="participation-header">
            <p className="-translate-x-full absolute h-[24px] left-[1104px] top-[7px] w-[228px]" dir="auto" data-node-id="2284:61">
              پروژه
            </p>
            <p className="-translate-x-full absolute h-[24px] left-[858px] top-[7px] w-[174px]" dir="auto" data-node-id="2284:62">
              شرکت
            </p>
            <p className="-translate-x-full absolute h-[24px] left-[632px] top-[7px] w-[136px]" dir="auto" data-node-id="2284:63">
              مبلغ پرداخت شرکت
            </p>
            <p className="-translate-x-full absolute h-[24px] left-[434px] top-[7px] w-[124px]" dir="auto" data-node-id="2284:64">
              سهم ۱۰٪ صندوق
            </p>
            <p className="-translate-x-full absolute h-[24px] left-[189px] top-[7px] w-[165px]" dir="auto" data-node-id="2284:65">
              وضعیت
            </p>
          </div>
          <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[40px] left-[15px] overflow-clip rounded-[8px] top-[125px] w-[1128px]" data-node-id="2284:66" data-name="participation-row">
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[32px] justify-center leading-[0] left-[1103px] text-[#17324d] text-[11px] text-right top-[19px] w-[228px]" data-node-id="2284:67">
              <p className="leading-[normal]" dir="auto">
                سلامت خانواده
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[32px] justify-center leading-[0] left-[857px] text-[#60758a] text-[11px] text-right top-[19px] w-[174px]" data-node-id="2284:68">
              <p className="leading-[normal]" dir="auto">
                پایدار پرداز خلاق آریا
              </p>
            </div>
            <div className="absolute bg-[#e9f8f0] h-[24px] left-[521px] overflow-clip rounded-[7px] top-[7px] w-[134px]" data-node-id="2284:69" data-name="status-chip">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[20px] justify-center leading-[0] left-[67px] text-[#159455] text-[10px] text-center top-[12px] w-[122px]" data-node-id="2284:70">
                <p className="leading-[normal]" dir="auto">
                  ۲۰۰ میلیون تومان
                </p>
              </div>
            </div>
            <div className="absolute bg-[#e8f4fc] h-[24px] left-[331px] overflow-clip rounded-[7px] top-[7px] w-[126px]" data-node-id="2284:71" data-name="status-chip">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[20px] justify-center leading-[0] left-[63px] text-[#2094e3] text-[10px] text-center top-[12px] w-[114px]" data-node-id="2284:72">
                <p className="leading-[normal]" dir="auto">
                  ۲۰ میلیون تومان
                </p>
              </div>
            </div>
            <div className="absolute bg-[#fff6e4] h-[24px] left-[77px] overflow-clip rounded-[7px] top-[7px] w-[180px]" data-node-id="2284:73" data-name="status-chip">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[20px] justify-center leading-[0] left-[90px] text-[#a86b08] text-[10px] text-center top-[12px] w-[168px]" data-node-id="2284:74">
                <p className="leading-[normal]" dir="auto">
                  ثبت شد
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[40px] left-[15px] overflow-clip rounded-[8px] top-[169px] w-[1128px]" data-node-id="2284:75" data-name="participation-row">
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[32px] justify-center leading-[0] left-[1103px] text-[#17324d] text-[11px] text-right top-[19px] w-[228px]" data-node-id="2284:76">
              <p className="leading-[normal]" dir="auto">
                مهارت برای نوجوانان
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[32px] justify-center leading-[0] left-[857px] text-[#60758a] text-[11px] text-right top-[19px] w-[174px]" data-node-id="2284:77">
              <p className="leading-[normal]" dir="auto">
                توسعه پایدار پارس
              </p>
            </div>
            <div className="absolute bg-[#e9f8f0] h-[24px] left-[521px] overflow-clip rounded-[7px] top-[7px] w-[134px]" data-node-id="2284:78" data-name="status-chip">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[20px] justify-center leading-[0] left-[67px] text-[#159455] text-[10px] text-center top-[12px] w-[122px]" data-node-id="2284:79">
                <p className="leading-[normal]" dir="auto">
                  ۴۰۰ میلیون تومان
                </p>
              </div>
            </div>
            <div className="absolute bg-[#e8f4fc] h-[24px] left-[331px] overflow-clip rounded-[7px] top-[7px] w-[126px]" data-node-id="2284:80" data-name="status-chip">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[20px] justify-center leading-[0] left-[63px] text-[#2094e3] text-[10px] text-center top-[12px] w-[114px]" data-node-id="2284:81">
                <p className="leading-[normal]" dir="auto">
                  ۴۰ میلیون تومان
                </p>
              </div>
            </div>
            <div className="absolute bg-[#fff6e4] h-[24px] left-[77px] overflow-clip rounded-[7px] top-[7px] w-[180px]" data-node-id="2284:82" data-name="status-chip">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[20px] justify-center leading-[0] left-[90px] text-[#a86b08] text-[10px] text-center top-[12px] w-[168px]" data-node-id="2284:83">
                <p className="leading-[normal]" dir="auto">
                  در انتظار واریز
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[40px] left-[15px] overflow-clip rounded-[8px] top-[213px] w-[1128px]" data-node-id="2284:84" data-name="participation-row">
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[32px] justify-center leading-[0] left-[1103px] text-[#17324d] text-[11px] text-right top-[19px] w-[228px]" data-node-id="2284:85">
              <p className="leading-[normal]" dir="auto">
                اشتغال زنان روستایی
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[32px] justify-center leading-[0] left-[857px] text-[#60758a] text-[11px] text-right top-[19px] w-[174px]" data-node-id="2284:86">
              <p className="leading-[normal]" dir="auto">
                راهکار نوآور فردا
              </p>
            </div>
            <div className="absolute bg-[#eef2fa] h-[24px] left-[521px] overflow-clip rounded-[7px] top-[7px] w-[134px]" data-node-id="2284:87" data-name="status-chip">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[20px] justify-center leading-[0] left-[67px] text-[#526d82] text-[10px] text-center top-[12px] w-[122px]" data-node-id="2284:88">
                <p className="leading-[normal]" dir="auto">
                  ۳۰۰ میلیون تومان
                </p>
              </div>
            </div>
            <div className="absolute bg-[#e8f4fc] h-[24px] left-[331px] overflow-clip rounded-[7px] top-[7px] w-[126px]" data-node-id="2284:89" data-name="status-chip">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[20px] justify-center leading-[0] left-[63px] text-[#2094e3] text-[10px] text-center top-[12px] w-[114px]" data-node-id="2284:90">
                <p className="leading-[normal]" dir="auto">
                  ۳۰ میلیون تومان
                </p>
              </div>
            </div>
            <div className="absolute bg-[#fff6e4] h-[24px] left-[77px] overflow-clip rounded-[7px] top-[7px] w-[180px]" data-node-id="2284:91" data-name="status-chip">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[20px] justify-center leading-[0] left-[90px] text-[#a86b08] text-[10px] text-center top-[12px] w-[168px]" data-node-id="2284:92">
                <p className="leading-[normal]" dir="auto">
                  ثبت شد
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-[#e4ebf1] border-solid h-[380px] overflow-clip relative rounded-[14px] shrink-0 w-[1160px]" data-node-id="2284:93" data-name="active-funding-projects">
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-medium h-[32px] leading-[normal] left-[1135px] text-[#17324d] text-[18px] text-right top-[13px] w-[388px]" dir="auto" data-node-id="2284:94">
            چرخه سود و بازگشت به تأمین مالی
          </p>
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[1135px] text-[#60758a] text-[11px] text-right top-[45px] w-[588px]" dir="auto" data-node-id="2284:95">
            سود صندوق پس از شناسایی به نسبت ۷۰٪ بازگشت به چرخه و ۳۰٪ درآمد ماه تقسیم می‌شود
          </p>
          <div className="absolute bg-[#e8f5fc] h-[28px] left-[15px] overflow-clip rounded-[7px] top-[15px] w-[126px]" data-node-id="2284:96" data-name="active-projects-count">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[18px] leading-[normal] left-[63px] text-[#149454] text-[11px] text-center top-[5px] w-[106px]" dir="auto" data-node-id="2284:97">
              مدل ۷۰ / ۳۰
            </p>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f6f9fc] font-sans font-medium h-[38px] leading-[normal] left-[15px] overflow-clip rounded-[7px] text-[#60758a] text-[11px] text-right top-[81px] w-[1128px]" data-node-id="2284:98" data-name="eligible-header">
            <p className="-translate-x-full absolute h-[24px] left-[1104px] top-[7px] w-[228px]" dir="auto" data-node-id="2284:99">
              دوره
            </p>
            <p className="-translate-x-full absolute h-[24px] left-[858px] top-[7px] w-[184px]" dir="auto" data-node-id="2284:100">
              سود شناسایی‌شده
            </p>
            <p className="-translate-x-full absolute h-[24px] left-[656px] top-[7px] w-[120px]" dir="auto" data-node-id="2284:101">
              بازگشت ۷۰٪
            </p>
            <p className="-translate-x-full absolute h-[24px] left-[518px] top-[7px] w-[130px]" dir="auto" data-node-id="2284:102">
              سهم ماه ۳۰٪
            </p>
            <p className="-translate-x-full absolute h-[24px] left-[159px] top-[7px] w-[135px]" dir="auto" data-node-id="2284:103">
              وضعیت
            </p>
          </div>
          <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[62px] left-[15px] overflow-clip rounded-[8px] top-[125px] w-[1128px]" data-node-id="2284:104" data-name="eligible-project-row">
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-medium h-[24px] leading-[normal] left-[1103px] text-[#17324d] text-[11px] text-right top-[14px] w-[228px]" dir="auto" data-node-id="2284:105">
              دوره مالی ۱۴۰۵/۰۶
            </p>
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[24px] leading-[normal] left-[857px] text-[#60758a] text-[11px] text-right top-[14px] w-[184px]" dir="auto" data-node-id="2284:106">
              ۱۲۰ میلیون تومان
            </p>
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-medium h-[24px] leading-[normal] left-[655px] text-[#149454] text-[11px] text-right top-[14px] w-[120px]" dir="auto" data-node-id="2284:107">
              ۸۴ میلیون تومان
            </p>
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[24px] leading-[normal] left-[517px] text-[#60758a] text-[11px] text-right top-[14px] w-[130px]" dir="auto" data-node-id="2284:108">
              ۳۶ میلیون تومان
            </p>
            <div className="absolute bg-[#2094e3] h-[34px] left-[23px] overflow-clip rounded-[8px] top-[13px] w-[138px]" data-node-id="2284:109" data-name="participate-button">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-medium h-[20px] leading-[normal] left-[69px] text-[11px] text-center text-white top-[7px] w-[118px]" dir="auto" data-node-id="2284:110">
                نهایی‌شده
              </p>
            </div>
          </div>
          <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[62px] left-[15px] overflow-clip rounded-[8px] top-[199px] w-[1128px]" data-node-id="2284:111" data-name="eligible-project-row">
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-medium h-[24px] leading-[normal] left-[1103px] text-[#17324d] text-[11px] text-right top-[14px] w-[228px]" dir="auto" data-node-id="2284:112">
              دوره مالی ۱۴۰۵/۰۵
            </p>
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[24px] leading-[normal] left-[857px] text-[#60758a] text-[11px] text-right top-[14px] w-[184px]" dir="auto" data-node-id="2284:113">
              ۹۰ میلیون تومان
            </p>
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-medium h-[24px] leading-[normal] left-[655px] text-[#149454] text-[11px] text-right top-[14px] w-[120px]" dir="auto" data-node-id="2284:114">
              ۶۳ میلیون تومان
            </p>
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[24px] leading-[normal] left-[517px] text-[#60758a] text-[11px] text-right top-[14px] w-[130px]" dir="auto" data-node-id="2284:115">
              ۲۷ میلیون تومان
            </p>
            <div className="absolute bg-[#2094e3] h-[34px] left-[23px] overflow-clip rounded-[8px] top-[13px] w-[138px]" data-node-id="2284:116" data-name="participate-button">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-medium h-[20px] leading-[normal] left-[69px] text-[11px] text-center text-white top-[7px] w-[118px]" dir="auto" data-node-id="2284:117">
                نهایی‌شده
              </p>
            </div>
          </div>
          <div className="absolute bg-white border border-[#e4ebf1] border-solid h-[62px] left-[15px] overflow-clip rounded-[8px] top-[273px] w-[1128px]" data-node-id="2284:118" data-name="eligible-project-row">
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-medium h-[24px] leading-[normal] left-[1103px] text-[#17324d] text-[11px] text-right top-[14px] w-[228px]" dir="auto" data-node-id="2284:119">
              دوره جاری
            </p>
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[24px] leading-[normal] left-[857px] text-[#60758a] text-[11px] text-right top-[14px] w-[184px]" dir="auto" data-node-id="2284:120">
              —
            </p>
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-medium h-[24px] leading-[normal] left-[655px] text-[#149454] text-[11px] text-right top-[14px] w-[120px]" data-node-id="2284:121">
              —
            </p>
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[24px] leading-[normal] left-[517px] text-[#60758a] text-[11px] text-right top-[14px] w-[130px]" dir="auto" data-node-id="2284:122">
              —
            </p>
            <div className="absolute bg-[#2094e3] h-[34px] left-[23px] overflow-clip rounded-[8px] top-[13px] w-[138px]" data-node-id="2284:123" data-name="participate-button">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-medium h-[20px] leading-[normal] left-[69px] text-[11px] text-center text-white top-[7px] w-[118px]" dir="auto" data-node-id="2284:124">
                در حال محاسبه
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#17324d] content-stretch flex flex-col gap-[10px] h-[900px] items-end pb-[18px] pt-[20px] px-[16px] relative shrink-0 w-[224px]" data-node-id="2284:125" data-name="colored-sidebar">
        <div className="bg-white content-stretch flex h-[56px] items-center justify-end overflow-clip px-[10px] py-[8px] relative rounded-[12px] shrink-0 w-[192px]" data-node-id="2284:126" data-name="brand-logo">
          <div className="h-[40px] relative shrink-0 w-[118px]" data-node-id="2284:127" data-name="ChatGPT Image ۲۹ مرداد ۱۴۰۵، ۱۵_۱۶_۳۵ 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-[5.28%] max-w-none top-0 w-[100.73%]" src={imgChatGptImage1} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[64px] items-start justify-end overflow-clip px-[8px] py-[7px] relative shrink-0 w-[192px]" data-node-id="2284:128" data-name="panel-identity">
          <p className="[word-break:break-word] font-sans font-bold h-[39px] leading-[normal] relative shrink-0 text-[13px] text-center text-white w-[176px]" dir="auto" data-node-id="2284:129">
            مدیر صندوق ماه
          </p>
        </div>
        <div className="bg-[#2094e3] content-stretch flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2284:130" data-name="dashboard-nav">
          <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2284:131">
            داشبورد
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2284:132" data-name="dashboard-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2284:133" data-name="Frame">
              <div className="absolute inset-[11.11%]" data-node-id="2284:134" data-name="Group">
                <div className="absolute inset-[-5.71%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2284:139" data-name="startup-evaluations-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2284:140">
            منابع صندوق
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2284:141" data-name="users-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2284:142" data-name="Frame">
              <div className="absolute inset-[22.22%_13.89%_19.44%_13.89%]" data-node-id="2284:143" data-name="Group">
                <div className="absolute inset-[-7.62%_-6.15%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup1} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2284:146" data-name="project-evaluations-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2284:147">
            سرمایه‌گذاری‌ها
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2284:148" data-name="project-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2284:149" data-name="Frame">
              <div className="absolute inset-[27.78%_19.44%_22.22%_16.67%]" data-node-id="2284:150" data-name="Group">
                <div className="absolute inset-[-8.89%_-6.96%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup2} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2284:154" data-name="milestone-evaluations-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2284:155">
            سود و بازده
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2284:156" data-name="milestone-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2284:157" data-name="Frame">
              <div className="absolute inset-[13.89%_11.11%]" data-node-id="2284:158" data-name="Group">
                <div className="absolute inset-[-6.15%_-5.71%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup3} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2284:163" data-name="reports-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2284:164">
            بازگشت به چرخه
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2284:165" data-name="reports-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2284:166" data-name="Frame">
              <div className="absolute inset-[13.89%_22.22%_16.67%_22.22%]" data-node-id="2284:167" data-name="Group">
                <div className="absolute inset-[-6.4%_-8%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup4} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2284:171" data-name="revenues-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2284:172">
            تقسیم سود ۷۰/۳۰
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2284:173" data-name="history-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2284:174" data-name="Frame">
              <div className="absolute inset-[13.89%_16.67%]" data-node-id="2284:175" data-name="Group">
                <div className="absolute inset-[-6.15%_-6.67%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup5} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2284:178" data-name="evaluation-history-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2284:179">
            گزارش‌های صندوق
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2284:180" data-name="history-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2284:181" data-name="Frame">
              <div className="absolute inset-[13.89%_16.67%]" data-node-id="2284:182" data-name="Group">
                <div className="absolute inset-[-6.15%_-6.67%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup5} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2284:185" data-name="settings-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2284:186">
            سوابق مالی
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="2284:187" data-name="settings-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgSettingsIcon} />
          </div>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2384:250" data-name="funding-flow-control-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2384:251">
            کنترل جریان تأمین مالی
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2384:252" data-name="users-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2384:253" data-name="Frame">
              <div className="absolute inset-[22.22%_13.89%_19.44%_13.89%]" data-node-id="2384:254" data-name="Group">
                <div className="absolute inset-[-7.62%_-6.15%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup1} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <div className="flex-[1_0_0] min-h-px relative w-[192px]" data-node-id="2284:190" data-name="sidebar-spacer" />
        <button className="bg-white content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end opacity-96 overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2284:191" data-name="logout-nav">
          <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[#17324d] text-[12px] text-right w-[142px]" dir="auto" data-node-id="2284:192">
            خروج از سیستم
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2284:193" data-name="logout-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2284:194" data-name="Frame">
              <div className="absolute inset-[16.67%_11.11%_16.67%_19.44%]" data-node-id="2284:195" data-name="Group">
                <div className="absolute inset-[-6.67%_-6.4%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup6} />
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}