import "../index.css";

const imgChatGptImage1 = "/assets/fund-manager/financial-history/logo.png";
const imgGroup = "/assets/fund-manager/financial-history/dashboard.svg";
const imgGroup1 = "/assets/fund-manager/financial-history/resources.svg";
const imgGroup2 = "/assets/fund-manager/financial-history/investments.svg";
const imgGroup3 = "/assets/fund-manager/financial-history/profits.svg";
const imgGroup4 = "/assets/fund-manager/financial-history/cycle.svg";
const imgGroup5 = "/assets/fund-manager/financial-history/history.svg";
const imgSettingsIcon = "/assets/fund-manager/financial-history/settings.svg";
const imgGroup6 = "/assets/fund-manager/financial-history/logout.svg";

export default function FundManagerFinancialHistory() {
  return (
    <div className="fund-manager-panel bg-[#f5f8fb] content-stretch flex items-start relative w-full h-full" data-node-id="2326:332" data-name="fund-manager-financial-history">
      <div className="bg-[#f5f8fb] content-stretch flex flex-col gap-[16px] h-[900px] items-start px-[28px] py-[22px] relative shrink-0 w-[1216px]" data-node-id="2326:333" data-name="Main Content">
        <div className="[word-break:break-word] h-[58px] leading-[normal] overflow-clip relative shrink-0 text-right w-[1160px]" data-node-id="2326:334" data-name="header">
          <p className="-translate-x-full absolute font-sans font-bold h-[32px] left-[1160px] text-[#17324d] text-[23px] top-0 w-[560px]" dir="auto" data-node-id="2326:335">
            سوابق مالی
          </p>
          <p className="-translate-x-full absolute font-sans font-normal h-[20px] left-[1160px] text-[#60758a] text-[12px] top-[34px] w-[700px]" dir="auto" data-node-id="2326:336">
            ردیابی یکپارچه تمام رخدادهای مالی صندوق از ورود منابع تا سرمایه‌گذاری، سود و تقسیم
          </p>
        </div>
        <div className="[word-break:break-word] content-stretch flex gap-[16px] h-[94px] items-start leading-[normal] overflow-clip relative shrink-0 text-right w-[1160px]" data-node-id="2326:337" data-name="resources-kpi-row">
          <div className="bg-white border border-[#dbe5f0] border-solid h-[94px] overflow-clip relative rounded-[12px] shrink-0 w-[278px]" data-node-id="2326:338" data-name="kpi-card">
            <p className="-translate-x-full absolute font-sans font-normal h-[20px] left-[261px] text-[#60758a] text-[11px] top-[9px] w-[246px]" dir="auto" data-node-id="2326:339">
              کل منابع ثبت‌شده
            </p>
            <p className="-translate-x-full absolute font-sans font-bold h-[32px] left-[261px] text-[#17324d] text-[19px] top-[33px] w-[246px]" dir="auto" data-node-id="2326:340">
              ۱٫۱۹۷ میلیارد تومان
            </p>
          </div>
          <div className="bg-white border border-[#dbe5f0] border-solid h-[94px] overflow-clip relative rounded-[12px] shrink-0 w-[278px]" data-node-id="2326:341" data-name="kpi-card">
            <p className="-translate-x-full absolute font-sans font-normal h-[20px] left-[261px] text-[#60758a] text-[11px] top-[9px] w-[246px]" dir="auto" data-node-id="2326:342">
              سرمایه‌گذاری ثبت‌شده
            </p>
            <p className="-translate-x-full absolute font-sans font-bold h-[32px] left-[261px] text-[#17324d] text-[19px] top-[33px] w-[246px]" dir="auto" data-node-id="2326:343">
              ۶۵۰ میلیون تومان
            </p>
          </div>
          <div className="bg-white border border-[#dbe5f0] border-solid h-[94px] overflow-clip relative rounded-[12px] shrink-0 w-[278px]" data-node-id="2326:344" data-name="kpi-card">
            <p className="-translate-x-full absolute font-sans font-normal h-[20px] left-[261px] text-[#60758a] text-[11px] top-[9px] w-[246px]" dir="auto" data-node-id="2326:345">
              سود شناسایی‌شده
            </p>
            <p className="-translate-x-full absolute font-sans font-bold h-[32px] left-[261px] text-[#17324d] text-[19px] top-[33px] w-[246px]" dir="auto" data-node-id="2326:346">
              ۲۱۰ میلیون تومان
            </p>
          </div>
          <div className="bg-white border border-[#dbe5f0] border-solid h-[94px] overflow-clip relative rounded-[12px] shrink-0 w-[278px]" data-node-id="2326:347" data-name="kpi-card">
            <p className="-translate-x-full absolute font-sans font-normal h-[20px] left-[261px] text-[#60758a] text-[11px] top-[9px] w-[246px]" dir="auto" data-node-id="2326:348">
              رخدادهای مالی
            </p>
            <p className="-translate-x-full absolute font-sans font-bold h-[32px] left-[261px] text-[#17324d] text-[19px] top-[33px] w-[246px]" dir="auto" data-node-id="2326:349">
              ۲۵ رکورد
            </p>
          </div>
        </div>
        <div className="bg-white border border-[#dbe5f0] border-solid h-[72px] overflow-clip relative rounded-[12px] shrink-0 w-[1160px]" data-node-id="2326:350" data-name="filters">
          <button className="absolute bg-[#f5f9fd] block border border-[#dbe5f0] border-solid cursor-pointer h-[42px] left-[605px] overflow-clip rounded-[8px] top-[13px] w-[520px]" data-node-id="2326:351" data-name="search-box">
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[505px] text-[#60758a] text-[12px] text-right top-[9px] w-[492px]" dir="auto" data-node-id="2326:352">
              جستجو در شرح رخداد، شناسه مالی یا پروژه
            </p>
          </button>
          <button className="absolute bg-white block border border-[#dbe5f0] border-solid cursor-pointer h-[42px] left-[375px] overflow-clip rounded-[8px] top-[13px] w-[210px]" data-node-id="2326:353" data-name="filter-source">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[104px] text-[#17324d] text-[12px] text-center top-[9px] w-[186px]" dir="auto" data-node-id="2326:354">
              همه نوع جریان‌ها
            </p>
          </button>
          <button className="absolute bg-white block border border-[#dbe5f0] border-solid cursor-pointer h-[42px] left-[145px] overflow-clip rounded-[8px] top-[13px] w-[210px]" data-node-id="2326:355" data-name="filter-status">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[104px] text-[#17324d] text-[12px] text-center top-[9px] w-[186px]" dir="auto" data-node-id="2326:356">
              همه دوره‌ها
            </p>
          </button>
          <div className="absolute bg-[#e8f5fc] h-[26px] left-[15px] overflow-clip rounded-[8px] top-[21px] w-[112px]" data-node-id="2326:357" data-name="chip">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[56px] text-[#2094e3] text-[11px] text-center top-[3px] w-[100px]" dir="auto" data-node-id="2326:358">
              ۲۵ رکورد
            </p>
          </div>
        </div>
        <div className="bg-white border border-[#dbe5f0] border-solid h-[470px] overflow-clip relative rounded-[12px] shrink-0 w-[1160px]" data-node-id="2326:359" data-name="resources-table">
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-bold leading-[normal] left-[1135px] text-[#17324d] text-[18px] text-right top-[13px] w-[416px]" dir="auto" data-node-id="2326:360">
            فهرست سوابق مالی صندوق
          </p>
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[1135px] text-[#60758a] text-[11px] text-right top-[43px] w-[616px]" dir="auto" data-node-id="2326:361">
            هر رخداد مالی با مبلغ، تاریخ، شناسه و نوع جریان به‌صورت قابل پیگیری ثبت می‌شود.
          </p>
          <div className="[word-break:break-word] absolute bg-[#f5f9fd] font-sans font-normal h-[38px] leading-[normal] left-[15px] overflow-clip rounded-[8px] text-[#60758a] text-[11px] text-center top-[79px] w-[1128px]" data-node-id="2326:362" data-name="table-header">
            <p className="-translate-x-1/2 absolute h-[20px] left-[968px] top-[9px] w-[272px]" dir="auto" data-node-id="2326:363">
              رخداد مالی
            </p>
            <p className="-translate-x-1/2 absolute h-[20px] left-[732px] top-[9px] w-[160px]" dir="auto" data-node-id="2326:364">
              مبلغ
            </p>
            <p className="-translate-x-1/2 absolute h-[20px] left-[566px] top-[9px] w-[132px]" dir="auto" data-node-id="2326:365">
              نوع جریان
            </p>
            <p className="-translate-x-1/2 absolute h-[20px] left-[420px] top-[9px] w-[120px]" dir="auto" data-node-id="2326:366">
              تاریخ
            </p>
            <p className="-translate-x-1/2 absolute h-[20px] left-[268px] top-[9px] w-[144px]" dir="auto" data-node-id="2326:367">
              شناسه
            </p>
            <p className="-translate-x-1/2 absolute h-[20px] left-[98px] top-[9px] w-[148px]" dir="auto" data-node-id="2326:368">
              اقدام
            </p>
          </div>
          <div className="absolute bg-white border border-[#dbe5f0] border-solid h-[52px] left-[15px] overflow-clip rounded-[8px] top-[125px] w-[1128px]" data-node-id="2326:369" data-name="resource-row">
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[1103px] text-[#17324d] text-[12px] text-right top-[13px] w-[272px]" dir="auto" data-node-id="2326:370">
              ورود ۱۰٪ هم‌افزایی صندوق
            </p>
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[731px] text-[#60758a] text-[11px] text-center top-[13px] w-[160px]" dir="auto" data-node-id="2326:371">
              +۲۰ میلیون تومان
            </p>
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[565px] text-[#17324d] text-[11px] text-center top-[13px] w-[132px]" dir="auto" data-node-id="2326:372">
              ورودی
            </p>
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[419px] text-[#60758a] text-[11px] text-center top-[13px] w-[120px]" dir="auto" data-node-id="2326:373">
              ۱۴۰۵/۰۶/۳۰
            </p>
            <div className="absolute bg-[#e8faf0] h-[26px] left-[204px] overflow-clip rounded-[8px] top-[12px] w-[126px]" data-node-id="2326:374" data-name="chip">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[63px] text-[#159e57] text-[11px] text-center top-[3px] w-[114px]" dir="auto" data-node-id="2326:375">
                SYN-1405-019
              </p>
            </div>
            <a href="/panel/fund-manager/financial-history/detail" className="absolute bg-white block border border-[#dbe5f0] border-solid cursor-pointer h-[34px] left-[35px] overflow-clip rounded-[8px] top-[8px] w-[132px]" data-node-id="2326:376" data-name="action">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[65px] text-[#2094e3] text-[11px] text-center top-[5px] w-[120px]" dir="auto" data-node-id="2326:377">
                مشاهده
              </p>
            </a>
          </div>
          <div className="absolute bg-[#f5f9fd] border border-[#dbe5f0] border-solid h-[52px] left-[15px] overflow-clip rounded-[8px] top-[185px] w-[1128px]" data-node-id="2326:378" data-name="resource-row">
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[1103px] text-[#17324d] text-[12px] text-right top-[13px] w-[272px]" dir="auto" data-node-id="2326:379">
              تخصیص سرمایه‌گذاری سلامت خانواده
            </p>
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[731px] text-[#60758a] text-[11px] text-center top-[13px] w-[160px]" dir="auto" data-node-id="2326:380">
              −۳۰۰ میلیون تومان
            </p>
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[565px] text-[#17324d] text-[11px] text-center top-[13px] w-[132px]" dir="auto" data-node-id="2326:381">
              خروجی سرمایه‌گذاری
            </p>
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[419px] text-[#60758a] text-[11px] text-center top-[13px] w-[120px]" dir="auto" data-node-id="2326:382">
              ۱۴۰۵/۰۶/۱۰
            </p>
            <div className="absolute bg-[#e8faf0] h-[26px] left-[204px] overflow-clip rounded-[8px] top-[12px] w-[126px]" data-node-id="2326:383" data-name="chip">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[63px] text-[#159e57] text-[11px] text-center top-[3px] w-[114px]" dir="auto" data-node-id="2326:384">
                INV-1405-001
              </p>
            </div>
            <a href="/panel/fund-manager/financial-history/detail" className="absolute bg-white block border border-[#dbe5f0] border-solid cursor-pointer h-[34px] left-[35px] overflow-clip rounded-[8px] top-[8px] w-[132px]" data-node-id="2326:385" data-name="action">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[65px] text-[#2094e3] text-[11px] text-center top-[5px] w-[120px]" dir="auto" data-node-id="2326:386">
                مشاهده
              </p>
            </a>
          </div>
          <div className="absolute bg-white border border-[#dbe5f0] border-solid h-[52px] left-[15px] overflow-clip rounded-[8px] top-[245px] w-[1128px]" data-node-id="2326:387" data-name="resource-row">
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[1103px] text-[#17324d] text-[12px] text-right top-[13px] w-[272px]" dir="auto" data-node-id="2326:388">
              شناسایی سود دوره ۱۴۰۵/۰۶
            </p>
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[731px] text-[#60758a] text-[11px] text-center top-[13px] w-[160px]" dir="auto" data-node-id="2326:389">
              +۱۲۰ میلیون تومان
            </p>
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[565px] text-[#17324d] text-[11px] text-center top-[13px] w-[132px]" dir="auto" data-node-id="2326:390">
              ثبت سود
            </p>
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[419px] text-[#60758a] text-[11px] text-center top-[13px] w-[120px]" dir="auto" data-node-id="2326:391">
              ۱۴۰۵/۰۶/۳۰
            </p>
            <div className="absolute bg-[#e8faf0] h-[26px] left-[204px] overflow-clip rounded-[8px] top-[12px] w-[126px]" data-node-id="2326:392" data-name="chip">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[63px] text-[#159e57] text-[11px] text-center top-[3px] w-[114px]" dir="auto" data-node-id="2326:393">
                RET-1405-06
              </p>
            </div>
            <a href="/panel/fund-manager/financial-history/detail" className="absolute bg-white block border border-[#dbe5f0] border-solid cursor-pointer h-[34px] left-[35px] overflow-clip rounded-[8px] top-[8px] w-[132px]" data-node-id="2326:394" data-name="action">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[65px] text-[#2094e3] text-[11px] text-center top-[5px] w-[120px]" dir="auto" data-node-id="2326:395">
                مشاهده
              </p>
            </a>
          </div>
          <div className="absolute bg-[#f5f9fd] border border-[#dbe5f0] border-solid h-[52px] left-[15px] overflow-clip rounded-[8px] top-[305px] w-[1128px]" data-node-id="2326:396" data-name="resource-row">
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[1103px] text-[#17324d] text-[12px] text-right top-[13px] w-[272px]" dir="auto" data-node-id="2326:397">
              بازگشت ۷۰٪ سود به چرخه
            </p>
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[731px] text-[#60758a] text-[11px] text-center top-[13px] w-[160px]" dir="auto" data-node-id="2326:398">
              ۸۴ میلیون تومان
            </p>
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[565px] text-[#17324d] text-[11px] text-center top-[13px] w-[132px]" dir="auto" data-node-id="2326:399">
              انتقال داخلی
            </p>
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[419px] text-[#60758a] text-[11px] text-center top-[13px] w-[120px]" dir="auto" data-node-id="2326:400">
              ۱۴۰۵/۰۶/۳۰
            </p>
            <div className="absolute bg-[#e8faf0] h-[26px] left-[204px] overflow-clip rounded-[8px] top-[12px] w-[126px]" data-node-id="2326:401" data-name="chip">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[63px] text-[#159e57] text-[11px] text-center top-[3px] w-[114px]" dir="auto" data-node-id="2326:402">
                CYCLE-1405-06
              </p>
            </div>
            <a href="/panel/fund-manager/financial-history/detail" className="absolute bg-white block border border-[#dbe5f0] border-solid cursor-pointer h-[34px] left-[35px] overflow-clip rounded-[8px] top-[8px] w-[132px]" data-node-id="2326:403" data-name="action">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[65px] text-[#2094e3] text-[11px] text-center top-[5px] w-[120px]" dir="auto" data-node-id="2326:404">
                مشاهده
              </p>
            </a>
          </div>
          <div className="absolute bg-white border border-[#dbe5f0] border-solid h-[52px] left-[15px] overflow-clip rounded-[8px] top-[365px] w-[1128px]" data-node-id="2326:405" data-name="resource-row">
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[1103px] text-[#17324d] text-[12px] text-right top-[13px] w-[272px]" dir="auto" data-node-id="2326:406">
              ثبت سهم درآمد ماه ۳۰٪
            </p>
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[731px] text-[#60758a] text-[11px] text-center top-[13px] w-[160px]" dir="auto" data-node-id="2326:407">
              ۳۶ میلیون تومان
            </p>
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[565px] text-[#17324d] text-[11px] text-center top-[13px] w-[132px]" dir="auto" data-node-id="2326:408">
              خروجی درآمد
            </p>
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[419px] text-[#60758a] text-[11px] text-center top-[13px] w-[120px]" dir="auto" data-node-id="2326:409">
              ۱۴۰۵/۰۶/۳۰
            </p>
            <div className="absolute bg-[#e8faf0] h-[26px] left-[204px] overflow-clip rounded-[8px] top-[12px] w-[126px]" data-node-id="2326:410" data-name="chip">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[63px] text-[#159e57] text-[11px] text-center top-[3px] w-[114px]" dir="auto" data-node-id="2326:411">
                SPLIT-1405-06
              </p>
            </div>
            <a href="/panel/fund-manager/financial-history/detail" className="absolute bg-white block border border-[#dbe5f0] border-solid cursor-pointer h-[34px] left-[35px] overflow-clip rounded-[8px] top-[8px] w-[132px]" data-node-id="2326:412" data-name="action">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[65px] text-[#2094e3] text-[11px] text-center top-[5px] w-[120px]" dir="auto" data-node-id="2326:413">
                مشاهده
              </p>
            </a>
          </div>
          <div className="absolute bg-[#f5f9fd] h-[30px] left-[15px] overflow-clip rounded-[8px] top-[429px] w-[1128px]" data-node-id="2326:414" data-name="pagination">
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[1108px] text-[#60758a] text-[11px] text-right top-[5px] w-[268px]" dir="auto" data-node-id="2326:415">
              نمایش ۱ تا ۵ از ۲۵
            </p>
            <div className="absolute bg-white border border-[#dbe5f0] border-solid h-[34px] left-[24px] opacity-35 overflow-clip rounded-[8px] top-0 w-[84px]" data-node-id="2326:416" data-name="action-disabled">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[41px] text-[#2094e3] text-[11px] text-center top-[5px] w-[72px]" dir="auto" data-node-id="2326:417">
                قبلی
              </p>
            </div>
            <div className="absolute bg-[#2094e3] h-[26px] left-[116px] overflow-clip rounded-[8px] top-[2px] w-[40px]" data-node-id="2326:418" data-name="chip">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[20px] text-[11px] text-center text-white top-[3px] w-[28px]" data-node-id="2326:419">
                ۱
              </p>
            </div>
            <button className="absolute bg-white block border border-[#dbe5f0] border-solid cursor-pointer h-[34px] left-[164px] overflow-clip rounded-[8px] top-0 w-[84px]" data-node-id="2326:420" data-name="action-next">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[41px] text-[#2094e3] text-[11px] text-center top-[5px] w-[72px]" dir="auto" data-node-id="2326:421">
                بعدی
              </p>
            </button>
          </div>
        </div>
        <div className="[word-break:break-word] bg-[#e8f5fc] h-[84px] leading-[normal] overflow-clip relative rounded-[12px] shrink-0 text-right w-[1160px]" data-node-id="2326:422" data-name="scope-note">
          <p className="-translate-x-full absolute font-sans font-bold h-[26px] left-[1136px] text-[#17324d] text-[16px] top-[10px] w-[316px]" dir="auto" data-node-id="2326:423">
            دامنه سوابق مالی
          </p>
          <p className="-translate-x-full absolute font-sans font-normal h-[24px] left-[1136px] text-[#60758a] text-[12px] top-[40px] w-[1096px]" dir="auto" data-node-id="2326:424">
            این صفحه ردپای مدیریتی رخدادهای مالی صندوق را نمایش می‌دهد و جایگزین دفاتر رسمی حسابداری، اسناد بانکی یا مستندات مالی مصوب نیست.
          </p>
        </div>
      </div>
      <div className="bg-[#17324d] content-stretch flex flex-col gap-[10px] h-[900px] items-end pb-[18px] pt-[20px] px-[16px] relative shrink-0 w-[224px]" data-node-id="2326:425" data-name="colored-sidebar">
        <div className="bg-white content-stretch flex h-[56px] items-center justify-end overflow-clip px-[10px] py-[8px] relative rounded-[12px] shrink-0 w-[192px]" data-node-id="2326:426" data-name="brand-logo">
          <div className="h-[40px] relative shrink-0 w-[118px]" data-node-id="2326:427" data-name="ChatGPT Image ۲۹ مرداد ۱۴۰۵، ۱۵_۱۶_۳۵ 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-[5.28%] max-w-none top-0 w-[100.73%]" src={imgChatGptImage1} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[64px] items-start justify-end overflow-clip px-[8px] py-[7px] relative shrink-0 w-[192px]" data-node-id="2326:428" data-name="panel-identity">
          <p className="[word-break:break-word] font-sans font-bold h-[39px] leading-[normal] relative shrink-0 text-[13px] text-center text-white w-[176px]" dir="auto" data-node-id="2326:429">
            مدیر صندوق ماه
          </p>
        </div>
        <a href="/panel/fund-manager" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2326:430" data-name="dashboard-nav">
          <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2326:431">
            داشبورد
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2326:432" data-name="dashboard-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2326:433" data-name="Frame">
              <div className="absolute inset-[11.11%]" data-node-id="2326:434" data-name="Group">
                <div className="absolute inset-[-5.71%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/panel/fund-manager/resources" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2326:439" data-name="startup-evaluations-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2326:440">
            منابع صندوق
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2326:441" data-name="users-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2326:442" data-name="Frame">
              <div className="absolute inset-[22.22%_13.89%_19.44%_13.89%]" data-node-id="2326:443" data-name="Group">
                <div className="absolute inset-[-7.62%_-6.15%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup1} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/panel/fund-manager/investments" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2326:446" data-name="project-evaluations-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2326:447">
            سرمایه‌گذاری‌ها
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2326:448" data-name="project-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2326:449" data-name="Frame">
              <div className="absolute inset-[27.78%_19.44%_22.22%_16.67%]" data-node-id="2326:450" data-name="Group">
                <div className="absolute inset-[-8.89%_-6.96%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup2} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/panel/fund-manager/profit-returns" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2326:454" data-name="milestone-evaluations-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2326:455">
            سود و بازده
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2326:456" data-name="milestone-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2326:457" data-name="Frame">
              <div className="absolute inset-[13.89%_11.11%]" data-node-id="2326:458" data-name="Group">
                <div className="absolute inset-[-6.15%_-5.71%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup3} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/panel/fund-manager/cycle-returns" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2326:463" data-name="reports-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2326:464">
            بازگشت به چرخه
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2326:465" data-name="reports-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2326:466" data-name="Frame">
              <div className="absolute inset-[13.89%_22.22%_16.67%_22.22%]" data-node-id="2326:467" data-name="Group">
                <div className="absolute inset-[-6.4%_-8%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup4} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/panel/fund-manager/profit-split" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2326:471" data-name="revenues-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2326:472">
            تقسیم سود ۷۰/۳۰
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2326:473" data-name="history-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2326:474" data-name="Frame">
              <div className="absolute inset-[13.89%_16.67%]" data-node-id="2326:475" data-name="Group">
                <div className="absolute inset-[-6.15%_-6.67%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup5} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/panel/fund-manager/financial-history" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2326:478" data-name="evaluation-history-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2326:479">
            گزارش‌های صندوق
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2326:480" data-name="history-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2326:481" data-name="Frame">
              <div className="absolute inset-[13.89%_16.67%]" data-node-id="2326:482" data-name="Group">
                <div className="absolute inset-[-6.15%_-6.67%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup5} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <div className="bg-[#2094e3] content-stretch flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2326:485" data-name="settings-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2326:486">
            سوابق مالی
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="2326:487" data-name="settings-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgSettingsIcon} />
          </div>
        </div>
        <a href="/panel/fund-manager/funding-flow-control" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2384:341" data-name="funding-flow-control-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2384:342">
            کنترل جریان تأمین مالی
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2384:343" data-name="users-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2384:344" data-name="Frame">
              <div className="absolute inset-[22.22%_13.89%_19.44%_13.89%]" data-node-id="2384:345" data-name="Group">
                <div className="absolute inset-[-7.62%_-6.15%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup1} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <div className="flex-[1_0_0] min-h-px relative w-[192px]" data-node-id="2326:490" data-name="sidebar-spacer" />
        <button className="bg-white content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end opacity-96 overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2326:491" data-name="logout-nav">
          <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[#17324d] text-[12px] text-right w-[142px]" dir="auto" data-node-id="2326:492">
            خروج از سیستم
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2326:493" data-name="logout-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2326:494" data-name="Frame">
              <div className="absolute inset-[16.67%_11.11%_16.67%_19.44%]" data-node-id="2326:495" data-name="Group">
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