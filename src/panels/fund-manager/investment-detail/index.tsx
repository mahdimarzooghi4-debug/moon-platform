import "../index.css";

const imgChatGptImage1 = "/assets/fund-manager/investment-detail/logo.png";
const imgGroup = "/assets/fund-manager/investment-detail/dashboard.svg";
const imgGroup1 = "/assets/fund-manager/investment-detail/resources.svg";
const imgGroup2 = "/assets/fund-manager/investment-detail/investments.svg";
const imgGroup3 = "/assets/fund-manager/investment-detail/profits.svg";
const imgGroup4 = "/assets/fund-manager/investment-detail/cycle.svg";
const imgGroup5 = "/assets/fund-manager/investment-detail/history.svg";
const imgSettingsIcon = "/assets/fund-manager/investment-detail/settings.svg";
const imgGroup6 = "/assets/fund-manager/investment-detail/logout.svg";

export default function FundManagerInvestmentDetail() {
  return (
    <div className="fund-manager-panel bg-[#f5f8fb] content-stretch flex items-start relative w-full h-full" data-node-id="2298:169" data-name="fund-manager-investment-detail">
      <div className="bg-[#f5f8fb] content-stretch flex flex-col gap-[16px] h-[900px] items-start px-[28px] py-[22px] relative shrink-0 w-[1216px]" data-node-id="2298:170" data-name="Main Content">
        <div className="bg-[#f5f9fd] h-[58px] overflow-clip relative shrink-0 w-[1160px]" data-node-id="2298:171" data-name="header">
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-bold h-[32px] leading-[normal] left-[1160px] text-[#17324d] text-[23px] text-right top-0 w-[560px]" dir="auto" data-node-id="2298:172">
            جزئیات سرمایه‌گذاری
          </p>
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[1160px] text-[#60758a] text-[12px] text-right top-[34px] w-[640px]" dir="auto" data-node-id="2298:173">
            مشاهده تخصیص منابع صندوق، وضعیت پروژه و سود شناسایی‌شده
          </p>
          <a className="absolute bg-white block border border-[#dbe5f0] border-solid cursor-pointer h-[34px] left-[20px] overflow-clip rounded-[8px] top-[10px] w-[154px]" data-node-id="2298:174" data-name="action">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[76px] text-[#2094e3] text-[11px] text-center top-[5px] w-[142px]" dir="auto" data-node-id="2298:175">
              بازگشت به سرمایه‌گذاری‌ها
            </p>
          </a>
        </div>
        <div className="bg-white border border-[#dbe5f0] border-solid h-[126px] overflow-clip relative rounded-[12px] shrink-0 w-[1160px]" data-node-id="2298:176" data-name="resource-summary">
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-bold leading-[normal] left-[1119px] text-[#17324d] text-[19px] text-right top-[15px] w-[440px]" dir="auto" data-node-id="2298:177">
            سرمایه‌گذاری پروژه سلامت خانواده
          </p>
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[1119px] text-[#60758a] text-[12px] text-right top-[47px] w-[560px]" dir="auto" data-node-id="2298:178">
            تخصیص بخشی از منابع صندوق برای تأمین مالی پروژه منتخب
          </p>
          <div className="absolute bg-[#e8faf0] h-[26px] left-[27px] overflow-clip rounded-[8px] top-[19px] w-[108px]" data-node-id="2298:179" data-name="chip">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[54px] text-[#149e57] text-[11px] text-center top-[3px] w-[96px]" dir="auto" data-node-id="2298:180">
              فعال
            </p>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f5f9fd] font-sans font-normal h-[34px] leading-[normal] left-[27px] overflow-clip rounded-[8px] text-right top-[77px] w-[260px]" data-node-id="2298:181" data-name="summary-field">
            <p className="-translate-x-full absolute h-[20px] left-[248px] text-[#60758a] text-[10px] top-[7px] w-[108px]" dir="auto" data-node-id="2298:182">
              مبلغ سرمایه‌گذاری
            </p>
            <p className="-translate-x-full absolute h-[20px] left-[136px] text-[#17324d] text-[11px] top-[7px] w-[128px]" dir="auto" data-node-id="2298:183">
              ۳۰۰ میلیون تومان
            </p>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f5f9fd] font-sans font-normal h-[34px] leading-[normal] left-[305px] overflow-clip rounded-[8px] text-right top-[77px] w-[260px]" data-node-id="2298:184" data-name="summary-field">
            <p className="-translate-x-full absolute h-[20px] left-[248px] text-[#60758a] text-[10px] top-[7px] w-[108px]" dir="auto" data-node-id="2298:185">
              سود شناسایی‌شده
            </p>
            <p className="-translate-x-full absolute h-[20px] left-[136px] text-[#17324d] text-[11px] top-[7px] w-[128px]" dir="auto" data-node-id="2298:186">
              ۳۶ میلیون تومان
            </p>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f5f9fd] font-sans font-normal h-[34px] leading-[normal] left-[583px] overflow-clip rounded-[8px] text-right top-[77px] w-[260px]" data-node-id="2298:187" data-name="summary-field">
            <p className="-translate-x-full absolute h-[20px] left-[248px] text-[#60758a] text-[10px] top-[7px] w-[108px]" dir="auto" data-node-id="2298:188">
              وضعیت سرمایه‌گذاری
            </p>
            <p className="-translate-x-full absolute h-[20px] left-[136px] text-[#17324d] text-[11px] top-[7px] w-[128px]" dir="auto" data-node-id="2298:189">
              فعال
            </p>
          </div>
          <div className="[word-break:break-word] absolute bg-[#f5f9fd] font-sans font-normal h-[34px] leading-[normal] left-[861px] overflow-clip rounded-[8px] text-right top-[77px] w-[260px]" data-node-id="2298:190" data-name="summary-field">
            <p className="-translate-x-full absolute h-[20px] left-[248px] text-[#60758a] text-[10px] top-[7px] w-[108px]" dir="auto" data-node-id="2298:191">
              تاریخ تخصیص
            </p>
            <p className="-translate-x-full absolute h-[20px] left-[136px] text-[#17324d] text-[11px] top-[7px] w-[128px]" data-node-id="2298:192">
              ۱۴۰۵/۰۶/۱۰
            </p>
          </div>
        </div>
        <div className="content-stretch flex gap-[20px] h-[360px] items-start overflow-clip relative shrink-0 w-[1160px]" data-node-id="2298:193" data-name="detail-main-row">
          <div className="[word-break:break-word] bg-white border border-[#dbe5f0] border-solid h-[360px] leading-[normal] overflow-clip relative rounded-[12px] shrink-0 text-right w-[760px]" data-node-id="2298:194" data-name="source-info">
            <p className="-translate-x-full absolute font-sans font-bold left-[735px] text-[#17324d] text-[18px] top-[15px] w-[306px]" dir="auto" data-node-id="2298:195">
              اطلاعات سرمایه‌گذاری
            </p>
            <p className="-translate-x-full absolute font-sans font-normal h-[20px] left-[735px] text-[#60758a] text-[11px] top-[45px] w-[406px]" dir="auto" data-node-id="2298:196">
              اطلاعات پروژه و ثبت مالی سرمایه‌گذاری صندوق
            </p>
            <div className="absolute bg-[#f5f9fd] font-sans font-normal h-[50px] left-[19px] overflow-clip rounded-[8px] top-[83px] w-[340px]" data-node-id="2298:197" data-name="detail-field">
              <p className="-translate-x-full absolute h-[20px] left-[324px] text-[#60758a] text-[10px] top-[4px] w-[134px]" dir="auto" data-node-id="2298:198">
                استارتاپ / مجری
              </p>
              <p className="-translate-x-full absolute h-[18px] left-[324px] text-[#17324d] text-[11px] top-[25px] w-[310px]" dir="auto" data-node-id="2298:199">
                استارتاپ مجری پروژه
              </p>
            </div>
            <div className="absolute bg-[#f5f9fd] font-sans font-normal h-[50px] left-[375px] overflow-clip rounded-[8px] top-[83px] w-[340px]" data-node-id="2298:200" data-name="detail-field">
              <p className="-translate-x-full absolute h-[20px] left-[324px] text-[#60758a] text-[10px] top-[4px] w-[134px]" dir="auto" data-node-id="2298:201">
                پروژه
              </p>
              <p className="-translate-x-full absolute h-[18px] left-[324px] text-[#17324d] text-[11px] top-[25px] w-[310px]" dir="auto" data-node-id="2298:202">
                سلامت خانواده
              </p>
            </div>
            <div className="absolute bg-[#f5f9fd] font-sans font-normal h-[50px] left-[19px] overflow-clip rounded-[8px] top-[145px] w-[340px]" data-node-id="2298:203" data-name="detail-field">
              <p className="-translate-x-full absolute h-[20px] left-[324px] text-[#60758a] text-[10px] top-[4px] w-[134px]" dir="auto" data-node-id="2298:204">
                نوع تخصیص
              </p>
              <p className="-translate-x-full absolute h-[18px] left-[324px] text-[#17324d] text-[11px] top-[25px] w-[310px]" dir="auto" data-node-id="2298:205">
                تأمین مالی از منابع صندوق
              </p>
            </div>
            <div className="absolute bg-[#f5f9fd] font-sans font-normal h-[50px] left-[375px] overflow-clip rounded-[8px] top-[145px] w-[340px]" data-node-id="2298:206" data-name="detail-field">
              <p className="-translate-x-full absolute h-[20px] left-[324px] text-[#60758a] text-[10px] top-[4px] w-[134px]" dir="auto" data-node-id="2298:207">
                منبع سرمایه
              </p>
              <p className="-translate-x-full absolute h-[18px] left-[324px] text-[#17324d] text-[11px] top-[25px] w-[310px]" dir="auto" data-node-id="2298:208">
                منابع صندوق
              </p>
            </div>
            <div className="absolute bg-[#f5f9fd] font-sans font-normal h-[50px] left-[19px] overflow-clip rounded-[8px] top-[207px] w-[340px]" data-node-id="2298:209" data-name="detail-field">
              <p className="-translate-x-full absolute h-[20px] left-[324px] text-[#60758a] text-[10px] top-[4px] w-[134px]" dir="auto" data-node-id="2298:210">
                مبلغ تخصیص‌یافته
              </p>
              <p className="-translate-x-full absolute h-[18px] left-[324px] text-[#17324d] text-[11px] top-[25px] w-[310px]" dir="auto" data-node-id="2298:211">
                ۳۰۰ میلیون تومان
              </p>
            </div>
            <div className="absolute bg-[#f5f9fd] font-sans font-normal h-[50px] left-[375px] overflow-clip rounded-[8px] top-[207px] w-[340px]" data-node-id="2298:212" data-name="detail-field">
              <p className="-translate-x-full absolute h-[20px] left-[324px] text-[#60758a] text-[10px] top-[4px] w-[134px]" dir="auto" data-node-id="2298:213">
                وضعیت بازده
              </p>
              <p className="-translate-x-full absolute h-[18px] left-[324px] text-[#17324d] text-[11px] top-[25px] w-[310px]" dir="auto" data-node-id="2298:214">
                در حال شناسایی
              </p>
            </div>
            <div className="absolute bg-[#f5f9fd] font-sans font-normal h-[50px] left-[19px] overflow-clip rounded-[8px] top-[269px] w-[340px]" data-node-id="2298:215" data-name="detail-field">
              <p className="-translate-x-full absolute h-[20px] left-[324px] text-[#60758a] text-[10px] top-[4px] w-[134px]" dir="auto" data-node-id="2298:216">
                سود شناسایی‌شده
              </p>
              <p className="-translate-x-full absolute h-[18px] left-[324px] text-[#17324d] text-[11px] top-[25px] w-[310px]" dir="auto" data-node-id="2298:217">
                ۳۶ میلیون تومان
              </p>
            </div>
            <div className="absolute bg-[#f5f9fd] font-sans font-normal h-[50px] left-[375px] overflow-clip rounded-[8px] top-[269px] w-[340px]" data-node-id="2298:218" data-name="detail-field">
              <p className="-translate-x-full absolute h-[20px] left-[324px] text-[#60758a] text-[10px] top-[4px] w-[134px]" dir="auto" data-node-id="2298:219">
                شناسه سرمایه‌گذاری
              </p>
              <p className="-translate-x-full absolute h-[18px] left-[324px] text-[#17324d] text-[11px] top-[25px] w-[310px]" data-node-id="2298:220">
                INV-1405-001
              </p>
            </div>
          </div>
          <div className="bg-white border border-[#dbe5f0] border-solid h-[360px] overflow-clip relative rounded-[12px] shrink-0 w-[380px]" data-node-id="2298:221" data-name="calculation-flow">
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-bold leading-[normal] left-[355px] text-[#17324d] text-[18px] text-right top-[15px] w-[196px]" dir="auto" data-node-id="2298:222">
              چرخه سرمایه‌گذاری
            </p>
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[355px] text-[#60758a] text-[11px] text-right top-[47px] w-[276px]" dir="auto" data-node-id="2298:223">
              وضعیت این تخصیص در چرخه صندوق
            </p>
            <div className="absolute bg-[#e8f5fc] h-[26px] left-[307px] overflow-clip rounded-[8px] top-[93px] w-[40px]" data-node-id="2298:224" data-name="chip">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[20px] text-[#2094e3] text-[11px] text-center top-[3px] w-[28px]" data-node-id="2298:225">
                ۱
              </p>
            </div>
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[24px] leading-[normal] left-[293px] text-[#17324d] text-[12px] text-right top-[85px] w-[184px]" dir="auto" data-node-id="2298:226">
              تخصیص منابع صندوق
            </p>
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[293px] text-[#60758a] text-[11px] text-right top-[113px] w-[184px]" dir="auto" data-node-id="2298:227">
              ۳۰۰ میلیون تومان
            </p>
            <div className="absolute bg-[#dbe5f0] h-[24px] left-[326px] rounded-[1px] top-[135px] w-[2px]" data-node-id="2298:228" data-name="connector" />
            <div className="absolute bg-[#e8f5fc] h-[26px] left-[307px] overflow-clip rounded-[8px] top-[169px] w-[40px]" data-node-id="2298:229" data-name="chip">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[20px] text-[#2094e3] text-[11px] text-center top-[3px] w-[28px]" data-node-id="2298:230">
                ۲
              </p>
            </div>
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[24px] leading-[normal] left-[293px] text-[#17324d] text-[12px] text-right top-[161px] w-[184px]" dir="auto" data-node-id="2298:231">
              اجرای پروژه
            </p>
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[293px] text-[#60758a] text-[11px] text-right top-[189px] w-[184px]" dir="auto" data-node-id="2298:232">
              در حال اجرا
            </p>
            <div className="absolute bg-[#dbe5f0] h-[24px] left-[326px] rounded-[1px] top-[211px] w-[2px]" data-node-id="2298:233" data-name="connector" />
            <div className="absolute bg-[#e8f5fc] h-[26px] left-[307px] overflow-clip rounded-[8px] top-[245px] w-[40px]" data-node-id="2298:234" data-name="chip">
              <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[20px] text-[#2094e3] text-[11px] text-center top-[3px] w-[28px]" data-node-id="2298:235">
                ۳
              </p>
            </div>
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[24px] leading-[normal] left-[293px] text-[#17324d] text-[12px] text-right top-[237px] w-[184px]" dir="auto" data-node-id="2298:236">
              شناسایی سود
            </p>
            <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[293px] text-[#60758a] text-[11px] text-right top-[265px] w-[184px]" dir="auto" data-node-id="2298:237">
              ۳۶ میلیون تومان
            </p>
          </div>
        </div>
        <div className="bg-[#e8f5fc] h-[112px] overflow-clip relative rounded-[12px] shrink-0 w-[1160px]" data-node-id="2298:238" data-name="audit-note">
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-bold h-[26px] leading-[normal] left-[1136px] text-[#17324d] text-[16px] text-right top-[14px] w-[316px]" dir="auto" data-node-id="2298:239">
            ضابطه حقوقی و مالی سرمایه‌گذاری
          </p>
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[44px] leading-[normal] left-[1136px] text-[#60758a] text-[12px] text-right top-[44px] w-[1096px]" dir="auto" data-node-id="2298:240">
            سند فعلی نرخ بازده، نوع ابزار سرمایه‌گذاری و سازوکار حقوقی آن را مشخص نکرده است؛ این موارد باید در سند مستقل حقوقی، مالی، شرعی و حسابداری تصویب شوند و در سامانه بر همان مبنا ثبت شوند.
          </p>
          <div className="absolute bg-[#e8faf0] h-[26px] left-[40px] overflow-clip rounded-[8px] top-[78px] w-[168px]" data-node-id="2298:241" data-name="chip">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[84px] text-[#149e57] text-[11px] text-center top-[3px] w-[156px]" dir="auto" data-node-id="2298:242">
              مطابق ضوابط مصوب
            </p>
          </div>
        </div>
        <div className="bg-white border border-[#dbe5f0] border-solid h-[110px] overflow-clip relative rounded-[12px] shrink-0 w-[1160px]" data-node-id="2298:243" data-name="registration-history">
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-bold h-[26px] leading-[normal] left-[1135px] text-[#17324d] text-[16px] text-right top-[13px] w-[236px]" dir="auto" data-node-id="2298:244">
            سوابق سرمایه‌گذاری
          </p>
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[1135px] text-[#60758a] text-[11px] text-right top-[47px] w-[596px]" dir="auto" data-node-id="2298:245">
            ۱۴۰۵/۰۶/۱۰ — ثبت تخصیص منابع صندوق به پروژه
          </p>
          <p className="-translate-x-full [word-break:break-word] absolute font-sans font-normal h-[22px] leading-[normal] left-[1135px] text-[#60758a] text-[11px] text-right top-[73px] w-[596px]" dir="auto" data-node-id="2298:246">
            امروز — به‌روزرسانی وضعیت پروژه و سود شناسایی‌شده
          </p>
          <div className="absolute bg-[#e8faf0] h-[26px] left-[29px] overflow-clip rounded-[8px] top-[41px] w-[120px]" data-node-id="2298:247" data-name="chip">
            <p className="-translate-x-1/2 [word-break:break-word] absolute font-sans font-normal h-[20px] leading-[normal] left-[60px] text-[#149e57] text-[11px] text-center top-[3px] w-[108px]" dir="auto" data-node-id="2298:248">
              فعال
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#17324d] content-stretch flex flex-col gap-[10px] h-[900px] items-end pb-[18px] pt-[20px] px-[16px] relative shrink-0 w-[224px]" data-node-id="2298:249" data-name="colored-sidebar">
        <div className="bg-white content-stretch flex h-[56px] items-center justify-end overflow-clip px-[10px] py-[8px] relative rounded-[12px] shrink-0 w-[192px]" data-node-id="2298:250" data-name="brand-logo">
          <div className="h-[40px] relative shrink-0 w-[118px]" data-node-id="2298:251" data-name="ChatGPT Image ۲۹ مرداد ۱۴۰۵، ۱۵_۱۶_۳۵ 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-[5.28%] max-w-none top-0 w-[100.73%]" src={imgChatGptImage1} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col h-[64px] items-start justify-end overflow-clip px-[8px] py-[7px] relative shrink-0 w-[192px]" data-node-id="2298:252" data-name="panel-identity">
          <p className="[word-break:break-word] font-sans font-bold h-[39px] leading-[normal] relative shrink-0 text-[13px] text-center text-white w-[176px]" dir="auto" data-node-id="2298:253">
            مدیر صندوق ماه
          </p>
        </div>
        <a href="/panel/fund-manager" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2298:254" data-name="dashboard-nav">
          <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2298:255">
            داشبورد
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2298:256" data-name="dashboard-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2298:257" data-name="Frame">
              <div className="absolute inset-[11.11%]" data-node-id="2298:258" data-name="Group">
                <div className="absolute inset-[-5.71%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/panel/fund-manager/resources" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2298:263" data-name="startup-evaluations-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2298:264">
            منابع صندوق
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2298:265" data-name="users-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2298:266" data-name="Frame">
              <div className="absolute inset-[22.22%_13.89%_19.44%_13.89%]" data-node-id="2298:267" data-name="Group">
                <div className="absolute inset-[-7.62%_-6.15%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup1} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/panel/fund-manager/investments" className="bg-[#2094e3] content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2298:270" data-name="project-evaluations-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2298:271">
            سرمایه‌گذاری‌ها
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2298:272" data-name="project-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2298:273" data-name="Frame">
              <div className="absolute inset-[27.78%_19.44%_22.22%_16.67%]" data-node-id="2298:274" data-name="Group">
                <div className="absolute inset-[-8.89%_-6.96%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup2} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/panel/fund-manager/profit-returns" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2298:278" data-name="milestone-evaluations-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2298:279">
            سود و بازده
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2298:280" data-name="milestone-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2298:281" data-name="Frame">
              <div className="absolute inset-[13.89%_11.11%]" data-node-id="2298:282" data-name="Group">
                <div className="absolute inset-[-6.15%_-5.71%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup3} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/panel/fund-manager/cycle-returns" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2298:287" data-name="reports-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2298:288">
            بازگشت به چرخه
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2298:289" data-name="reports-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2298:290" data-name="Frame">
              <div className="absolute inset-[13.89%_22.22%_16.67%_22.22%]" data-node-id="2298:291" data-name="Group">
                <div className="absolute inset-[-6.4%_-8%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup4} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/panel/fund-manager/profit-split" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2298:295" data-name="revenues-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2298:296">
            تقسیم سود ۷۰/۳۰
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2298:297" data-name="history-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2298:298" data-name="Frame">
              <div className="absolute inset-[13.89%_16.67%]" data-node-id="2298:299" data-name="Group">
                <div className="absolute inset-[-6.15%_-6.67%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup5} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/panel/fund-manager/reports" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2298:302" data-name="evaluation-history-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2298:303">
            گزارش‌های صندوق
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2298:304" data-name="history-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2298:305" data-name="Frame">
              <div className="absolute inset-[13.89%_16.67%]" data-node-id="2298:306" data-name="Group">
                <div className="absolute inset-[-6.15%_-6.67%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup5} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="/panel/fund-manager/financial-history" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2298:309" data-name="settings-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2298:310">
            سوابق مالی
          </p>
          <div className="relative shrink-0 w-[18px] h-[18px]" data-node-id="2298:311" data-name="settings-icon">
            <img alt="" className="absolute block inset-0 max-w-none w-full h-full" src={imgSettingsIcon} />
          </div>
        </a>
        <a href="/panel/fund-manager/funding-flow-control" className="content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2384:278" data-name="funding-flow-control-nav">
          <p className="[word-break:break-word] font-sans font-normal leading-[normal] relative shrink-0 text-[12px] text-right text-white w-[142px]" dir="auto" data-node-id="2384:279">
            کنترل جریان تأمین مالی
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2384:280" data-name="users-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2384:281" data-name="Frame">
              <div className="absolute inset-[22.22%_13.89%_19.44%_13.89%]" data-node-id="2384:282" data-name="Group">
                <div className="absolute inset-[-7.62%_-6.15%]">
                  <img alt="" className="block max-w-none w-full h-full" src={imgGroup1} />
                </div>
              </div>
            </div>
          </div>
        </a>
        <div className="flex-[1_0_0] min-h-px relative w-[192px]" data-node-id="2298:314" data-name="sidebar-spacer" />
        <button className="bg-white content-stretch cursor-pointer flex gap-[10px] h-[38px] items-center justify-end opacity-96 overflow-clip px-[12px] relative rounded-[9px] shrink-0 w-[192px]" data-node-id="2298:315" data-name="logout-nav">
          <p className="[word-break:break-word] font-sans font-medium leading-[normal] relative shrink-0 text-[#17324d] text-[12px] text-right w-[142px]" dir="auto" data-node-id="2298:316">
            خروج از سیستم
          </p>
          <div className="overflow-clip relative shrink-0 w-[18px] h-[18px]" data-node-id="2298:317" data-name="logout-icon">
            <div className="absolute left-0 overflow-clip w-[18px] h-[18px] top-0" data-node-id="2298:318" data-name="Frame">
              <div className="absolute inset-[16.67%_11.11%_16.67%_19.44%]" data-node-id="2298:319" data-name="Group">
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
