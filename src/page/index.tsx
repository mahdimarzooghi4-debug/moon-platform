import React from "react";
import "./index.css";

export default function Main() {
  return (
    <div className="main-container flex w-[1440px] flex-col items-center flex-nowrap bg-[#fcfbf8] relative overflow-hidden mx-auto my-0">
      <div className="flex pt-[16px] pr-[120px] pb-[16px] pl-[120px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] border-solid border-t border-t-[#e4ebf1] relative">
        <div className="flex w-[384px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[1]">
          <div className="flex w-[120px] h-[44px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border-[1.5px] border-[#2094e3] relative overflow-hidden z-[2]">
            <span className="flex w-[65px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#2094e3] relative text-center whitespace-nowrap z-[3]">
              ورود کاربران
            </span>
          </div>
          <div className="flex w-[120px] h-[44px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border-[1.5px] border-[#2094e3] relative overflow-hidden z-[4]">
            <span className="flex w-[89px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#2094e3] relative text-center whitespace-nowrap z-[5]">
              پیگیری مشارکت
            </span>
          </div>
          <div className="flex w-[120px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[6]">
            <span className="flex w-[82px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[7]">
              شروع مشارکت
            </span>
          </div>
        </div>
        <div className="flex w-[630px] gap-[40px] justify-end items-center shrink-0 flex-nowrap relative z-[8]">
          <div className="flex w-[453px] gap-[24px] items-center shrink-0 flex-nowrap relative z-[9]">
            <span className="flex w-[45px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-10">
              درباره ما
            </span>
            <span className="flex w-[60px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[11]">
              تماس با ما
            </span>
            <span className="flex w-[52px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[12]">
              {" "}
              شرکت‌ها
            </span>
            <span className="flex w-[66px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[13]">
              {" "}
              استارتاپ‌ها
            </span>
            <span className="flex w-[41px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[14]">
              پروژه‌ها
            </span>
            <span className="flex w-[69px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[15]">
              صفحه اصلی
            </span>
          </div>
          <div className="w-[137px] h-[46px] shrink-0 bg-[url(/assets/uszW56JYuC.png)] bg-cover bg-no-repeat relative z-[16]" />
        </div>
      </div>
      <div className="flex pt-[48px] pr-[120px] pb-[48px] pl-[120px] flex-col gap-[20px] items-end self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] border-solid border-t border-t-[#e4ebf1] relative z-[17]">
        <div className="flex justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[18]">
          <span className="flex w-[104px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[19]">
            صفحه اصلی / پروژه‌ها
          </span>
        </div>
        <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-20">
          <div className="flex w-[266px] gap-[24px] items-center shrink-0 flex-nowrap relative z-[21]">
            <div className="flex w-[50px] flex-col gap-[4px] items-center shrink-0 flex-nowrap relative z-[22]">
              <span className="h-[31px] shrink-0 basis-auto font-['Vazirmatn'] text-[20px] font-bold leading-[31px] text-[#17324d] relative text-left whitespace-nowrap z-[23]">
                ۲۴
              </span>
              <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[24]">
                پروژه فعال
              </span>
            </div>
            <div className="w-px h-[40px] shrink-0 bg-[#e4ebf1] relative z-[25]" />
            <div className="flex w-[56px] flex-col gap-[4px] items-center shrink-0 flex-nowrap relative z-[26]">
              <span className="h-[31px] shrink-0 basis-auto font-['Vazirmatn'] text-[20px] font-bold leading-[31px] text-[#17324d] relative text-left whitespace-nowrap z-[27]">
                ۱۲٬۸۴۰
              </span>
              <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[28]">
                فرد بهره‌مند
              </span>
            </div>
            <div className="w-px h-[40px] shrink-0 bg-[#e4ebf1] relative z-[29]" />
            <div className="flex w-[62px] flex-col gap-[4px] items-center shrink-0 flex-nowrap relative z-30">
              <span className="h-[31px] shrink-0 basis-auto font-['Vazirmatn'] text-[20px] font-bold leading-[31px] text-[#17324d] relative text-left whitespace-nowrap z-[31]">
                ۳۴۶
              </span>
              <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[32]">
                فرصت شغلی
              </span>
            </div>
          </div>
          <div className="flex w-[447px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[33]">
            <span className="flex w-[274px] h-[50px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[32px] font-extrabold leading-[50px] text-[#17324d] relative text-right whitespace-nowrap z-[34]">
              پروژه‌های اثر اجتماعی
            </span>
            <span className="flex w-[447px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-normal leading-[23px] text-[#60758a] relative text-right whitespace-nowrap z-[35]">
              پروژه‌ای را انتخاب کنید که اثر آن از قبل مشخص، تأیید و
              قابل‌اندازه‌گیری است.
            </span>
          </div>
        </div>
      </div>
      <div className="flex pt-[24px] pr-[120px] pb-[16px] pl-[120px] flex-col gap-[16px] items-end self-stretch shrink-0 flex-nowrap bg-[#fff] border-solid border-t border-t-[#e4ebf1] relative z-[36]">
        <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[37]">
          <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[38]">
            جست‌وجوی نام پروژه یا استارتاپ...
          </span>
          <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/Ymun0qrWhQ.png)] bg-cover bg-no-repeat relative overflow-hidden z-[39]" />
        </div>
        <div className="flex gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-40">
          <div className="flex pt-[10px] pr-[14px] pb-[10px] pl-[14px] gap-[8px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[10px] border-solid border border-[#e4ebf1] relative z-[41]">
            <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/1hJvv8kSs2.png)] bg-cover bg-no-repeat relative overflow-hidden z-[42]" />
            <span className="h-[19px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#17324d] relative text-right whitespace-nowrap z-[43]">
              جدیدترین
            </span>
          </div>
          <div className="flex pt-[10px] pr-[14px] pb-[10px] pl-[14px] gap-[8px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[10px] border-solid border border-[#e4ebf1] relative z-[44]">
            <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/1R3eTGJGXX.png)] bg-cover bg-no-repeat relative overflow-hidden z-[45]" />
            <span className="h-[19px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#17324d] relative text-right whitespace-nowrap z-[46]">
              پیشرفت تأمین مالی
            </span>
          </div>
          <div className="flex pt-[10px] pr-[14px] pb-[10px] pl-[14px] gap-[8px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[10px] border-solid border border-[#e4ebf1] relative z-[47]">
            <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/sj6xU82mNG.png)] bg-cover bg-no-repeat relative overflow-hidden z-[48]" />
            <span className="h-[19px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#17324d] relative text-right whitespace-nowrap z-[49]">
              وضعیت پروژه
            </span>
          </div>
          <div className="flex pt-[10px] pr-[14px] pb-[10px] pl-[14px] gap-[8px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[10px] border-solid border border-[#e4ebf1] relative z-50">
            <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/Z3czOEVKMN.png)] bg-cover bg-no-repeat relative overflow-hidden z-[51]" />
            <span className="h-[19px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#17324d] relative text-right whitespace-nowrap z-[52]">
              استان
            </span>
          </div>
          <div className="flex pt-[10px] pr-[14px] pb-[10px] pl-[14px] gap-[8px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[10px] border-solid border border-[#e4ebf1] relative z-[53]">
            <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/Ot96SHh4pc.png)] bg-cover bg-no-repeat relative overflow-hidden z-[54]" />
            <span className="h-[19px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#17324d] relative text-right whitespace-nowrap z-[55]">
              جامعه هدف
            </span>
          </div>
          <div className="flex pt-[10px] pr-[14px] pb-[10px] pl-[14px] gap-[8px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[10px] border-solid border border-[#e4ebf1] relative z-[56]">
            <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/WifU92r48w.png)] bg-cover bg-no-repeat relative overflow-hidden z-[57]" />
            <span className="h-[19px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#17324d] relative text-right whitespace-nowrap z-[58]">
              حوزه اثر
            </span>
          </div>
        </div>
        <div className="flex gap-[12px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[59]">
          <div className="flex w-[102px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[60]">
            <span className="flex w-[62px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[61]">
              اعمال فیلتر
            </span>
          </div>
          <div className="flex w-[116px] pt-[10px] pr-[14px] pb-[10px] pl-[14px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#dbe0e8] relative overflow-hidden z-[62]">
            <span className="flex w-[88px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#495468] relative text-right whitespace-nowrap z-[63]">
              پاک کردن فیلترها
            </span>
          </div>
        </div>
      </div>
      <div className="flex pt-[12px] pr-[120px] pb-[12px] pl-[120px] gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[64]">
        <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-left whitespace-nowrap z-[65]">
          پاک‌کردن همه
        </span>
        <div className="flex w-[71px] pt-[6px] pr-[10px] pb-[6px] pl-[10px] gap-[6px] items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[8px] relative z-[66]">
          <div className="w-[10px] h-[10px] shrink-0 bg-[url(/assets/sSvc0ZEmYX.png)] bg-cover bg-no-repeat relative overflow-hidden z-[67]" />
          <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#2094e3] relative text-left whitespace-nowrap z-[68]">
            اشتغال
          </span>
        </div>
        <div className="flex w-[130px] pt-[6px] pr-[10px] pb-[6px] pl-[10px] gap-[6px] items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[8px] relative z-[69]">
          <div className="w-[10px] h-[10px] shrink-0 bg-[url(/assets/ftpLnXRxyU.png)] bg-cover bg-no-repeat relative overflow-hidden z-[70]" />
          <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#2094e3] relative text-left whitespace-nowrap z-[71]">
            زنان سرپرست خانوار
          </span>
        </div>
        <div className="flex w-[72px] pt-[6px] pr-[10px] pb-[6px] pl-[10px] gap-[6px] items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[8px] relative z-[72]">
          <div className="w-[10px] h-[10px] shrink-0 bg-[url(/assets/8cVcbgqJbG.png)] bg-cover bg-no-repeat relative overflow-hidden z-[73]" />
          <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#2094e3] relative text-left whitespace-nowrap z-[74]">
            گلستان
          </span>
        </div>
        <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-left whitespace-nowrap z-[75]">
          فیلترهای فعال:
        </span>
      </div>
      <div className="flex pt-[16px] pr-[120px] pb-[16px] pl-[120px] justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[76]">
        <div className="flex w-[48px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[77]">
          <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/giBWaSKq43.png)] bg-cover bg-no-repeat relative overflow-hidden z-[78]" />
          <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/morRDUR91y.png)] bg-cover bg-no-repeat relative overflow-hidden z-[79]" />
        </div>
        <span className="flex w-[141px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[80]">
          نمایش ۰ پروژه از ۲۴ پروژه
        </span>
      </div>
      <div className="flex pt-[80px] pr-0 pb-[80px] pl-0 flex-col gap-[24px] items-center self-stretch shrink-0 flex-nowrap relative z-[81]">
        <div className="flex w-[72px] h-[72px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[36px] relative z-[82]">
          <div className="w-[32px] h-[32px] shrink-0 bg-[url(/assets/RBu1buZjn6.png)] bg-cover bg-no-repeat relative overflow-hidden z-[83]" />
        </div>
        <div className="flex w-[292px] flex-col gap-[8px] items-center shrink-0 flex-nowrap relative z-[84]">
          <span className="flex w-[269px] h-[31px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[20px] font-bold leading-[31px] text-[#17324d] relative text-right whitespace-nowrap z-[85]">
            پروژه‌ای با این مشخصات پیدا نشد
          </span>
          <span className="flex w-[292px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[86]">
            فیلترها را تغییر دهید یا همه پروژه‌ها را مشاهده کنید.
          </span>
        </div>
        <div className="flex w-[141px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[87]">
          <span className="flex w-[101px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#2094e3] relative text-center whitespace-nowrap z-[88]">
            حذف همه فیلترها
          </span>
        </div>
      </div>
      <div className="flex pt-[80px] pr-[120px] pb-[40px] pl-[120px] flex-col gap-[64px] items-start self-stretch shrink-0 flex-nowrap bg-[#111e30] relative z-[89]">
        <div className="flex gap-[48px] items-start self-stretch shrink-0 flex-nowrap relative z-[90]">
          <div className="flex w-[220px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[91]">
            <span className="flex w-[59px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[92]">
              ارتباط با ما
            </span>
            <span className="flex w-[115px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[93]">
              تلفن: ۰۲۱-۸۸۸۸۸۸۸۸
            </span>
            <span className="flex w-[156px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[94]">
              ایمیل: info@mahplatform.ir
            </span>
            <div className="flex w-[48px] pt-[8px] pr-0 pb-0 pl-0 gap-[12px] items-center shrink-0 flex-nowrap relative z-[95]">
              <div className="flex w-[18px] h-[18px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[96]">
                <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/Pt9NDhMt2W.png)] bg-cover bg-no-repeat relative overflow-hidden z-[97]" />
              </div>
              <div className="flex w-[18px] h-[18px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[98]">
                <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/uYJB9YfarZ.png)] bg-cover bg-no-repeat relative overflow-hidden z-[99]" />
              </div>
            </div>
          </div>
          <div className="flex w-[150px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[100]">
            <span className="flex w-[39px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[101]">
              حقوقی
            </span>
            <span className="flex w-[82px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[102]">
              قوانین و مقررات
            </span>
            <span className="flex w-[75px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[103]">
              حریم خصوصی
            </span>
          </div>
          <div className="flex w-[160px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[104]">
            <span className="flex w-[49px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[105]">
              پشتیبانی
            </span>
            <span className="flex w-[55px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[106]">
              تماس با ما
            </span>
            <span className="flex w-[77px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[107]">
              سؤالات متداول
            </span>
            <span className="flex w-[82px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[108]">
              پیگیری مشارکت
            </span>
          </div>
          <div className="flex w-[180px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[109]">
            <span className="flex w-[83px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[110]">
              دسترسی سریع
            </span>
            <span className="flex w-[38px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[111]">
              پروژه‌ها
            </span>
            <span className="flex w-[69px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[112]">
              برای شرکت‌ها
            </span>
            <span className="flex w-[71px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[113]">
              نحوه مشارکت
            </span>
            <span className="flex w-[84px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[114]">
              ثبت‌نام استارتاپ
            </span>
            <span className="flex w-[80px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[115]">
              اخبار و رویدادها
            </span>
          </div>
          <div className="flex w-[298px] h-[182px] flex-col gap-[14px] items-end shrink-0 flex-nowrap relative z-[116]">
            <div className="w-[210px] h-[70px] shrink-0 bg-[url(/assets/keZahQMtUh.png)] bg-cover bg-no-repeat relative z-[117]" />
            <span className="flex w-[298px] h-[44px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[22px] text-[#e4ebf1] relative text-right z-[118]">
              سامانه مشارکت در پروژه‌های اثر اجتماعی با مسیر مالی شفاف و اثر
              قابل‌اندازه‌گیری.
            </span>
          </div>
        </div>
        <div className="flex pt-[20px] pr-0 pb-0 pl-0 flex-col gap-[4px] items-center self-stretch shrink-0 flex-nowrap border-solid border-b border-b-[rgba(255,255,255,0.12)] relative z-[119]">
          <span className="flex w-[219px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#e4ebf1] relative text-center whitespace-nowrap z-[120]">
            طراحی و توسعه با هدف ارتقای عدالت اجتماعی
          </span>
          <span className="flex w-[203px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#e4ebf1] relative text-center whitespace-nowrap z-[121]">
            تمامی حقوق برای سامانه ماه محفوظ است.
          </span>
        </div>
      </div>
    </div>
  );
}
