import "../index.css";

const imgChatGptImage1 = "/assets/fund-manager/funding-flow-control/logo.png";
const imgGroup = "/assets/fund-manager/funding-flow-control/dashboard.svg";
const imgGroup1 = "/assets/fund-manager/funding-flow-control/resources.svg";
const imgGroup2 = "/assets/fund-manager/funding-flow-control/investments.svg";
const imgGroup3 = "/assets/fund-manager/funding-flow-control/profits.svg";
const imgGroup4 = "/assets/fund-manager/funding-flow-control/cycle.svg";
const imgGroup5 = "/assets/fund-manager/funding-flow-control/history.svg";
const imgSettingsIcon = "/assets/fund-manager/funding-flow-control/settings.svg";
const imgGroup6 = "/assets/fund-manager/funding-flow-control/logout.svg";

export default function FundManagerFundingFlowControl() {
  return (
    <div className="fund-manager-panel bg-[#f5f8fb] content-stretch flex items-start relative w-full h-full" data-node-id="2384:2" data-name="fund-manager-funding-flow-control">
      <div className="bg-[#f6f9fc] content-stretch flex flex-col gap-[16px] h-[900px] items-start px-[28px] py-[22px] relative shrink-0 w-[1216px]" data-node-id="2384:3" data-name="Main Content">
        <div className="h-[64px] overflow-clip relative shrink-0 w-[1160px]" data-node-id="2384:169" data-name="header">
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[32px] justify-center leading-[0] left-[1132px] text-[#17324d] text-[22px] text-right top-[16px] w-[562px]" data-node-id="2384:170">
            <p className="leading-[normal]" dir="auto">
              کنترل جریان تأمین مالی
            </p>
          </div>
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[22px] justify-center leading-[0] left-[1132px] text-[#61758a] text-[11px] text-right top-[45px] w-[722px]" data-node-id="2384:171">
            <p className="leading-[normal]" dir="auto">
              تطبیق مسیر شرکت ← کمیته امداد ← استارتاپ و ثبت رخدادهای مالی
            </p>
          </div>
          <button className="absolute bg-[#2094e3] block border border-[#2094e3] border-solid cursor-pointer h-[38px] left-0 overflow-clip rounded-[12px] top-[10px] w-[170px]" data-node-id="2384:172" data-name="register-flow-button">
            <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[38px] justify-center leading-[0] left-[84px] text-[11px] text-center text-white top-[18px] w-[150px]" data-node-id="2384:173">
              <p className="leading-[normal]" dir="auto">
                ثبت جریان منابع
              </p>
            </div>
          </button>
        </div>
        <div className="[word-break:break-word] h-[96px] leading-[0] overflow-clip relative shrink-0 text-center w-[1160px]" data-node-id="2384:174" data-name="kpi-row">
          <div className="absolute bg-white border border-[#dbe5f0] border-solid h-[96px] left-0 overflow-clip rounded-[12px] top-0 w-[281px]" data-node-id="2384:175" data-name="kpi">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-bold h-[34px] justify-center left-[139.5px] text-[#2094e3] text-[18px] top-[34px] w-[253px]" data-node-id="2384:176">
              <p className="leading-[normal]" dir="auto">
                ۱۲ جریان
              </p>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[24px] justify-center left-[139.5px] text-[#61758a] text-[10px] top-[65px] w-[253px]" data-node-id="2384:177">
              <p className="leading-[normal]" dir="auto">
                کل جریان‌های فعال
              </p>
            </div>
          </div>
          <div className="absolute bg-white border border-[#dbe5f0] border-solid h-[96px] left-[293px] overflow-clip rounded-[12px] top-0 w-[281px]" data-node-id="2384:178" data-name="kpi">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-bold h-[34px] justify-center left-[139.5px] text-[#2094e3] text-[18px] top-[34px] w-[253px]" data-node-id="2384:179">
              <p className="leading-[normal]" dir="auto">
                ۹ مورد
              </p>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[24px] justify-center left-[139.5px] text-[#61758a] text-[10px] top-[65px] w-[253px]" data-node-id="2384:180">
              <p className="leading-[normal]" dir="auto">
                تطبیق‌شده
              </p>
            </div>
          </div>
          <div className="absolute bg-white border border-[#dbe5f0] border-solid h-[96px] left-[586px] overflow-clip rounded-[12px] top-0 w-[281px]" data-node-id="2384:181" data-name="kpi">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-bold h-[34px] justify-center left-[139.5px] text-[#2094e3] text-[18px] top-[34px] w-[253px]" data-node-id="2384:182">
              <p className="leading-[normal]" dir="auto">
                ۲ مورد
              </p>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[24px] justify-center left-[139.5px] text-[#61758a] text-[10px] top-[65px] w-[253px]" data-node-id="2384:183">
              <p className="leading-[normal]" dir="auto">
                در انتظار آزادسازی
              </p>
            </div>
          </div>
          <div className="absolute bg-white border border-[#dbe5f0] border-solid h-[96px] left-[879px] overflow-clip rounded-[12px] top-0 w-[281px]" data-node-id="2384:184" data-name="kpi">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-bold h-[34px] justify-center left-[139.5px] text-[#d9592e] text-[18px] top-[34px] w-[253px]" data-node-id="2384:185">
              <p className="leading-[normal]" dir="auto">
                ۱ مورد
              </p>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[24px] justify-center left-[139.5px] text-[#61758a] text-[10px] top-[65px] w-[253px]" data-node-id="2384:186">
              <p className="leading-[normal]" dir="auto">
                نیازمند بررسی
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[20px] h-[570px] items-start relative shrink-0 w-[1160px]" data-node-id="2556:2" data-name="funding-flow-main-row">
          <div className="bg-white border border-[#dbe5f0] border-solid h-[570px] overflow-clip relative rounded-[12px] shrink-0 w-[740px]" data-node-id="2384:187" data-name="flow-list">
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[32px] justify-center leading-[0] left-[715px] text-[#17324d] text-[18px] text-right top-[29px] w-[692px]" data-node-id="2384:188">
              <p className="leading-[normal]" dir="auto">
                جریان‌های تأمین مالی
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[24px] justify-center leading-[0] left-[715px] text-[#61758a] text-[10px] text-right top-[57px] w-[692px]" data-node-id="2384:189">
              <p className="leading-[normal]" dir="auto">
                وضعیت هر جریان از زمان واریز شرکت تا آزادسازی برای استارتاپ کنترل می‌شود.
              </p>
            </div>
            <div className="[word-break:break-word] absolute bg-[#f6f9fc] border border-[#dbe5f0] border-solid font-sans font-medium h-[40px] leading-[0] left-[19px] overflow-clip rounded-[12px] text-[#61758a] text-[10px] text-center top-[85px] w-[700px]" data-node-id="2384:190" data-name="table-head">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[40px] justify-center left-[604px] top-[19px] w-[150px]" data-node-id="2384:191">
                <p className="leading-[normal]" dir="auto">
                  پروژه
                </p>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[40px] justify-center left-[439px] top-[19px] w-[140px]" data-node-id="2384:192">
                <p className="leading-[normal]" dir="auto">
                  شرکت / منبع
                </p>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[40px] justify-center left-[294px] top-[19px] w-[110px]" data-node-id="2384:193">
                <p className="leading-[normal]" dir="auto">
                  مبلغ
                </p>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[40px] justify-center left-[164px] top-[19px] w-[110px]" data-node-id="2384:194">
                <p className="leading-[normal]" dir="auto">
                  وضعیت
                </p>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col h-[40px] justify-center left-[54px] top-[19px] w-[90px]" data-node-id="2384:195">
                <p className="leading-[normal]" dir="auto">
                  کنترل
                </p>
              </div>
            </div>
            <div className="[word-break:break-word] absolute bg-white border border-[#dbe5f0] border-solid h-[64px] leading-[0] left-[19px] overflow-clip rounded-[12px] text-center top-[137px] w-[700px]" data-node-id="2384:196" data-name="flow-row">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[64px] justify-center left-[604px] text-[#17324d] text-[10px] top-[31px] w-[150px]" data-node-id="2384:197">
                <p className="leading-[normal]" dir="auto">
                  سلامت خانواده
                </p>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[64px] justify-center left-[439px] text-[#61758a] text-[10px] top-[31px] w-[140px]" data-node-id="2384:198">
                <p className="leading-[normal]" dir="auto">
                  پایدار پرداز خلاق آریا
                </p>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[64px] justify-center left-[294px] text-[#17324d] text-[10px] top-[31px] w-[110px]" data-node-id="2384:199">
                <p className="leading-[normal]" dir="auto">
                  ۲۰۰ م.ت
                </p>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[64px] justify-center left-[164px] text-[#2094e3] text-[9px] top-[31px] w-[110px]" data-node-id="2384:200">
                <p className="leading-[normal]" dir="auto">
                  واریز تأیید شد
                </p>
              </div>
              <button className="-translate-x-1/2 -translate-y-1/2 absolute cursor-pointer flex flex-col font-sans font-medium h-[64px] justify-center left-[54px] text-[#2094e3] text-[9px] top-[31px] w-[90px]" data-node-id="2384:201">
                <p className="leading-[normal]" dir="auto">
                  تطبیق
                </p>
              </button>
            </div>
            <div className="[word-break:break-word] absolute bg-[#f9fbfe] border border-[#dbe5f0] border-solid h-[64px] leading-[0] left-[19px] overflow-clip rounded-[12px] text-center top-[213px] w-[700px]" data-node-id="2384:202" data-name="flow-row">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[64px] justify-center left-[604px] text-[#17324d] text-[10px] top-[31px] w-[150px]" data-node-id="2384:203">
                <p className="leading-[normal]" dir="auto">
                  اشتغال زنان روستایی
                </p>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[64px] justify-center left-[439px] text-[#61758a] text-[10px] top-[31px] w-[140px]" data-node-id="2384:204">
                <p className="leading-[normal]" dir="auto">
                  گروه بهار
                </p>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[64px] justify-center left-[294px] text-[#17324d] text-[10px] top-[31px] w-[110px]" data-node-id="2384:205">
                <p className="leading-[normal]" dir="auto">
                  ۳۵۰ م.ت
                </p>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[64px] justify-center left-[164px] text-[#2094e3] text-[9px] top-[31px] w-[110px]" data-node-id="2384:206">
                <p className="leading-[normal]" dir="auto">
                  در انتظار آزادسازی
                </p>
              </div>
              <button className="-translate-x-1/2 -translate-y-1/2 absolute cursor-pointer flex flex-col font-sans font-medium h-[64px] justify-center left-[54px] text-[#2094e3] text-[9px] top-[31px] w-[90px]" data-node-id="2384:207">
                <p className="leading-[normal]" dir="auto">
                  تطبیق
                </p>
              </button>
            </div>
            <div className="[word-break:break-word] absolute bg-white border border-[#dbe5f0] border-solid h-[64px] leading-[0] left-[19px] overflow-clip rounded-[12px] text-center top-[289px] w-[700px]" data-node-id="2384:208" data-name="flow-row">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[64px] justify-center left-[604px] text-[#17324d] text-[10px] top-[31px] w-[150px]" data-node-id="2384:209">
                <p className="leading-[normal]" dir="auto">
                  مهارت نوجوانان
                </p>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[64px] justify-center left-[439px] text-[#61758a] text-[10px] top-[31px] w-[140px]" data-node-id="2384:210">
                <p className="leading-[normal]" dir="auto">
                  منبع صندوق
                </p>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[64px] justify-center left-[294px] text-[#17324d] text-[10px] top-[31px] w-[110px]" data-node-id="2384:211">
                <p className="leading-[normal]" dir="auto">
                  ۱۲۰ م.ت
                </p>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[64px] justify-center left-[164px] text-[#2094e3] text-[9px] top-[31px] w-[110px]" data-node-id="2384:212">
                <p className="leading-[normal]" dir="auto">
                  تطبیق‌شده
                </p>
              </div>
              <button className="-translate-x-1/2 -translate-y-1/2 absolute cursor-pointer flex flex-col font-sans font-medium h-[64px] justify-center left-[54px] text-[#2094e3] text-[9px] top-[31px] w-[90px]" data-node-id="2384:213">
                <p className="leading-[normal]" dir="auto">
                  تطبیق
                </p>
              </button>
            </div>
            <div className="[word-break:break-word] absolute bg-[#f9fbfe] border border-[#dbe5f0] border-solid h-[64px] leading-[0] left-[19px] overflow-clip rounded-[12px] text-center top-[365px] w-[700px]" data-node-id="2384:214" data-name="flow-row">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[64px] justify-center left-[604px] text-[#17324d] text-[10px] top-[31px] w-[150px]" data-node-id="2384:215">
                <p className="leading-[normal]" dir="auto">
                  توانمندسازی محلی
                </p>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-normal h-[64px] justify-center left-[439px] text-[#61758a] text-[10px] top-[31px] w-[140px]" data-node-id="2384:216">
                <p className="leading-[normal]" dir="auto">
                  شرکت سپهر
                </p>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[64px] justify-center left-[294px] text-[#17324d] text-[10px] top-[31px] w-[110px]" data-node-id="2384:217">
                <p className="leading-[normal]" dir="auto">
                  ۵۰۰ م.ت
                </p>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-sans font-medium h-[64px] justify-center left-[164px] text-[#d9592e] text-[9px] top-[31px] w-[110px]" data-node-id="2384:218">
                <p className="leading-[normal]" dir="auto">
                  نیازمند بررسی
                </p>
              </div>
              <button className="-translate-x-1/2 -translate-y-1/2 absolute cursor-pointer flex flex-col font-sans font-medium h-[64px] justify-center left-[54px] text-[#2094e3] text-[9px] top-[31px] w-[90px]" data-node-id="2384:219">
                <p className="leading-[normal]" dir="auto">
                  تطبیق
                </p>
              </button>
            </div>
            <div className="absolute bg-[#f6f9fc] border border-[#dbe5f0] border-solid h-[44px] left-[19px] overflow-clip rounded-[12px] top-[463px] w-[700px]" data-node-id="2384:220" data-name="pagination">
              <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[44px] justify-center leading-[0] left-[679px] text-[#61758a] text-[10px] text-right top-[21px] w-[230px]" data-node-id="2384:221">
                <p className="leading-[normal]" dir="auto">
                  نمایش ۱ تا ۴ از ۱۲
                </p>
              </div>
              <button className="absolute block cursor-pointer h-[44px] left-[19px] overflow-clip rounded-[8px] top-[-1px] w-[240px]" data-node-id="2547:400" data-name="pagination-controls-button">
                <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[44px] justify-center leading-[0] left-[120px] text-[#17324d] text-[11px] text-center top-[22px] w-[240px]" data-node-id="2547:401">
                  <p className="leading-[normal] whitespace-pre-wrap" dir="auto">{`قبلی   ۱   ۲   ۳   بعدی`}</p>
                </div>
              </button>
            </div>
          </div>
          <div className="bg-white border border-[#dbe5f0] border-solid h-[570px] overflow-clip relative rounded-[12px] shrink-0 w-[400px]" data-node-id="2384:223" data-name="register-flow-panel">
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-bold h-[32px] justify-center leading-[0] left-[375px] text-[#17324d] text-[18px] text-right top-[29px] w-[352px]" data-node-id="2384:224">
              <p className="leading-[normal]" dir="auto">
                ثبت جریان منابع
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[24px] justify-center leading-[0] left-[375px] text-[#61758a] text-[10px] text-right top-[57px] w-[352px]" data-node-id="2384:225">
              <p className="leading-[normal]" dir="auto">
                ثبت یا تطبیق یک رخداد مالی در همان زنجیره تأمین
              </p>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[18px] justify-center leading-[0] left-[375px] text-[#61758a] text-[9px] text-right top-[94px] w-[166px]" data-node-id="2384:226">
              <p className="leading-[normal]" dir="auto">
                نوع جریان
              </p>
            </div>
            <div className="absolute bg-[#f9fbfe] border border-[#dbe5f0] border-solid h-[38px] left-[23px] overflow-clip rounded-[12px] top-[105px] w-[352px]" data-node-id="2384:227" data-name="field">
              <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[38px] justify-center leading-[0] left-[339px] text-[#17324d] text-[10px] text-right top-[18px] w-[328px]" data-node-id="2384:228">
                <p className="leading-[normal]" dir="auto">
                  واریز شرکت
                </p>
              </div>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[18px] justify-center leading-[0] left-[375px] text-[#61758a] text-[9px] text-right top-[156px] w-[166px]" data-node-id="2384:229">
              <p className="leading-[normal]" dir="auto">
                پروژه
              </p>
            </div>
            <div className="absolute bg-[#f9fbfe] border border-[#dbe5f0] border-solid h-[38px] left-[23px] overflow-clip rounded-[12px] top-[167px] w-[352px]" data-node-id="2384:230" data-name="field">
              <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[38px] justify-center leading-[0] left-[339px] text-[#17324d] text-[10px] text-right top-[18px] w-[328px]" data-node-id="2384:231">
                <p className="leading-[normal]" dir="auto">
                  سلامت خانواده
                </p>
              </div>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[18px] justify-center leading-[0] left-[375px] text-[#61758a] text-[9px] text-right top-[218px] w-[166px]" data-node-id="2384:232">
              <p className="leading-[normal]" dir="auto">
                منبع
              </p>
            </div>
            <div className="absolute bg-[#f9fbfe] border border-[#dbe5f0] border-solid h-[38px] left-[23px] overflow-clip rounded-[12px] top-[229px] w-[352px]" data-node-id="2384:233" data-name="field">
              <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[38px] justify-center leading-[0] left-[339px] text-[#17324d] text-[10px] text-right top-[18px] w-[328px]" data-node-id="2384:234">
                <p className="leading-[normal]" dir="auto">
                  شرکت پایدار پرداز خلاق آریا
                </p>
              </div>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[18px] justify-center leading-[0] left-[375px] text-[#61758a] text-[9px] text-right top-[280px] w-[166px]" data-node-id="2384:235">
              <p className="leading-[normal]" dir="auto">
                مبلغ
              </p>
            </div>
            <div className="absolute bg-[#f9fbfe] border border-[#dbe5f0] border-solid h-[38px] left-[23px] overflow-clip rounded-[12px] top-[291px] w-[352px]" data-node-id="2384:236" data-name="field">
              <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[38px] justify-center leading-[0] left-[339px] text-[#17324d] text-[10px] text-right top-[18px] w-[328px]" data-node-id="2384:237">
                <p className="leading-[normal]" dir="auto">
                  ۲۰۰٬۰۰۰٬۰۰۰ تومان
                </p>
              </div>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[18px] justify-center leading-[0] left-[375px] text-[#61758a] text-[9px] text-right top-[342px] w-[166px]" data-node-id="2384:238">
              <p className="leading-[normal]" dir="auto">
                تاریخ ثبت
              </p>
            </div>
            <div className="absolute bg-[#f9fbfe] border border-[#dbe5f0] border-solid h-[38px] left-[23px] overflow-clip rounded-[12px] top-[353px] w-[352px]" data-node-id="2384:239" data-name="field">
              <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[38px] justify-center leading-[0] left-[339px] text-[#17324d] text-[10px] text-right top-[18px] w-[328px]" data-node-id="2384:240">
                <p className="leading-[normal]">۱۴۰۵/۰۶/۲۵</p>
              </div>
            </div>
            <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[18px] justify-center leading-[0] left-[375px] text-[#61758a] text-[9px] text-right top-[404px] w-[166px]" data-node-id="2384:241">
              <p className="leading-[normal]" dir="auto">
                شناسه مرجع
              </p>
            </div>
            <div className="absolute bg-[#f9fbfe] border border-[#dbe5f0] border-solid h-[38px] left-[23px] overflow-clip rounded-[12px] top-[415px] w-[352px]" data-node-id="2384:242" data-name="field">
              <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[38px] justify-center leading-[0] left-[339px] text-[#17324d] text-[10px] text-right top-[18px] w-[328px]" data-node-id="2384:243">
                <p className="leading-[normal]">PAY-۱۴۰۵-۰۰۲۱</p>
              </div>
            </div>
            <div className="absolute bg-[#e8f4fc] border border-[#bfdef5] border-solid h-[42px] left-[23px] overflow-clip rounded-[12px] top-[483px] w-[352px]" data-node-id="2384:244" data-name="match-status">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[42px] justify-center leading-[0] left-[175px] text-[#2094e3] text-[10px] text-center top-[20px] w-[332px]" data-node-id="2384:245">
                <p className="leading-[normal]" dir="auto">
                  تطبیق با پرداخت و پروژه انجام شد
                </p>
              </div>
            </div>
            <button className="absolute bg-[#2094e3] block border border-[#2094e3] border-solid cursor-pointer h-[42px] left-[23px] overflow-clip rounded-[12px] top-[533px] w-[352px]" data-node-id="2384:246" data-name="save-flow">
              <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-medium h-[42px] justify-center leading-[0] left-[175px] text-[11px] text-center text-white top-[20px] w-[332px]" data-node-id="2384:247">
                <p className="leading-[normal]" dir="auto">
                  ثبت جریان
                </p>
              </div>
            </button>
          </div>
        </div>
        <div className="bg-[#e8f4fc] border border-[#bfdef5] border-solid h-[58px] overflow-clip relative rounded-[12px] shrink-0 w-[1160px]" data-node-id="2384:248" data-name="role-note">
          <div className="-translate-x-full -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-sans font-normal h-[58px] justify-center leading-[0] left-[1135px] text-[#61758a] text-[10px] text-right top-[28px] w-[1112px]" data-node-id="2384:249">
            <p className="leading-[normal]" dir="auto">
              این صفحه برای ثبت و کنترل جریان مالی است؛ تأیید محتوایی پروژه در خانه خلاق و آزادسازی وجه در پنل کمیته امداد انجام می‌شود.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#17324d] content-stretch flex flex-col gap-[10px] items-end pb-[18px] pt-[20px] px-[16px] relative self-stretch shrink-0 w-[224px]" data-node-id="2384:95" data-name="colored-sidebar">
        <div className="bg-white content-stretch flex h-[56px] items-center justify-end overflow-clip px-[10px] py-[8px] relative rounded-[12px] shrink-0 w-[192px]" data-node-id="2384:96" data-name="brand-logo">
          <div className="h-[40px] relative shrink-0 w-[118px]" data-node-id="2384:97" data-name="ChatGPT Image ۲۹ مرداد ۱۴۰۵، ۱۵_۱۶_۳۵ 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-[5.28%] max-w-none top-0 w-[100.73%]" src={imgChatGptImage1} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[64px] items-start justify-end overflow-clip px-[8px] py-[7px] relative shrink-0 w-[192px]" data-node-id="2384:98" data-name="panel-identity">
          <p className="[word-break:break-word] font-sans font-bold h-[39px] leading-[normal] relative shrink-0 text-[13px] text-center text-white w-[176px]" dir="auto" data-node-id="2384:99">
            مدیر صندوق ماه
          </p>
        </div>
        <a href="/panel/fund-manager" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2384:100" data-name="dashboard-nav">
          <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2384:101">
            داشبورد
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2384:102" data-name="dashboard-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2384:103" data-name="Frame">
              <div className="absolute inset-[11.11%]" data-node-id="2384:104" data-name="Group">
                <div className="absolute inset-[-5.71%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/panel/fund-manager/resources" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2384:109" data-name="startup-evaluations-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2384:110">
            منابع صندوق
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2384:111" data-name="users-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2384:112" data-name="Frame">
              <div className="absolute inset-[22.22%_13.89%_19.44%_13.89%]" data-node-id="2384:113" data-name="Group">
                <div className="absolute inset-[-7.62%_-6.15%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup1} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/panel/fund-manager/investments" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2384:116" data-name="project-evaluations-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2384:117">
            سرمایه‌گذاری‌ها
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2384:118" data-name="project-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2384:119" data-name="Frame">
              <div className="absolute inset-[27.78%_19.44%_22.22%_16.67%]" data-node-id="2384:120" data-name="Group">
                <div className="absolute inset-[-8.89%_-6.96%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup2} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/panel/fund-manager/profit-returns" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2384:124" data-name="milestone-evaluations-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2384:125">
            سود و بازده
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2384:126" data-name="milestone-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2384:127" data-name="Frame">
              <div className="absolute inset-[13.89%_11.11%]" data-node-id="2384:128" data-name="Group">
                <div className="absolute inset-[-6.15%_-5.71%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup3} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/panel/fund-manager/cycle-returns" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2384:133" data-name="reports-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2384:134">
            بازگشت به چرخه
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2384:135" data-name="reports-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2384:136" data-name="Frame">
              <div className="absolute inset-[13.89%_22.22%_16.67%_22.22%]" data-node-id="2384:137" data-name="Group">
                <div className="absolute inset-[-6.4%_-8%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup4} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/panel/fund-manager/profit-split" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2384:141" data-name="revenues-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2384:142">
            تقسیم سود ۷۰/۳۰
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2384:143" data-name="history-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2384:144" data-name="Frame">
              <div className="absolute inset-[13.89%_16.67%]" data-node-id="2384:145" data-name="Group">
                <div className="absolute inset-[-6.15%_-6.67%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup5} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/panel/fund-manager/reports" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2384:148" data-name="evaluation-history-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2384:149">
            گزارش‌های صندوق
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2384:150" data-name="history-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2384:151" data-name="Frame">
              <div className="absolute inset-[13.89%_16.67%]" data-node-id="2384:152" data-name="Group">
                <div className="absolute inset-[-6.15%_-6.67%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup5} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/panel/fund-manager/financial-history" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2384:155" data-name="settings-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2384:156">
            سوابق مالی
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="2384:157" data-name="settings-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgSettingsIcon} />
          </div>
        </a>
        <div className="bg-[#2094e3] content-stretch flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2384:355" data-name="funding-flow-control-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2384:356">
            کنترل جریان تأمین مالی
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2384:357" data-name="users-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2384:358" data-name="Frame">
              <div className="absolute inset-[22.22%_13.89%_19.44%_13.89%]" data-node-id="2384:359" data-name="Group">
                <div className="absolute inset-[-7.62%_-6.15%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup1} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] min-h-px relative w-[192px]" data-node-id="2384:160" data-name="sidebar-spacer" />
        <button className="bg-white content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end opacity-96 overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2384:161" data-name="logout-nav">
          <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[#17324d] text-[12px] text-right w-[142px]" dir="auto" data-node-id="2384:162">
            خروج از سیستم
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2384:163" data-name="logout-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2384:164" data-name="Frame">
              <div className="absolute inset-[16.67%_11.11%_16.67%_19.44%]" data-node-id="2384:165" data-name="Group">
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