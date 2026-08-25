import React from "react";
import "./index.css";

export default function Main() {
  return (
    <div className="main-container flex w-[1440px] flex-col items-start flex-nowrap bg-[#fcfbf8] relative overflow-hidden mx-auto my-0">
      <div className="flex pt-[12px] pr-[40px] pb-[12px] pl-[40px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#111e30] relative">
        <div className="flex w-[509px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[1]">
          <div className="flex w-[145px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[2]">
            <div className="w-[105px] shrink-0 font-['Vazirmatn'] text-[14px] font-medium leading-[22px] relative text-center whitespace-nowrap z-[3]">
              <span className="font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#111e30] relative text-center">
                بازگشت به مدیریت
              </span>
            </div>
          </div>
          <div className="flex w-[160px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[4]">
            <div className="w-[120px] shrink-0 font-['Vazirmatn'] text-[14px] font-medium leading-[22px] relative text-center whitespace-nowrap z-[5]">
              <span className="font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#111e30] relative text-center">
                مقایسه با نسخه Live
              </span>
            </div>
          </div>
          <div className="flex w-[180px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[6]">
            <span className="flex w-[140px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[7]">
              اشتراک لینک پیش‌نمایش
            </span>
          </div>
        </div>
        <div className="flex w-[293px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[8]">
          <div className="flex w-[116px] pt-[4px] pr-[8px] pb-[4px] pl-[8px] items-start shrink-0 flex-nowrap bg-[#c27a10] rounded-[8px] relative z-[9]">
            <span className="flex w-[100px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#fff] relative text-right whitespace-nowrap z-10">
              پیش‌نویس نسخه ۲۵
            </span>
          </div>
          <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-left whitespace-nowrap z-[11]">
            پیش‌نمایش — عمومی نیست
          </span>
        </div>
      </div>
      <div className="flex w-[1440px] flex-col items-center shrink-0 flex-nowrap bg-[#fcfbf8] relative overflow-hidden z-[12]">
        <div className="flex pt-[16px] pr-[120px] pb-[16px] pl-[120px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] border-solid border-b border-b-[#e4ebf1] relative z-[13]">
          <div className="flex w-[384px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[14]">
            <div className="flex w-[120px] h-[44px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border-[1.5px] border-[#2094e3] relative overflow-hidden z-[15]">
              <span className="flex w-[65px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#2094e3] relative text-center whitespace-nowrap z-[16]">
                ورود کاربران
              </span>
            </div>
            <div className="flex w-[120px] h-[44px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border-[1.5px] border-[#2094e3] relative overflow-hidden z-[17]">
              <span className="flex w-[89px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#2094e3] relative text-center whitespace-nowrap z-[18]">
                پیگیری مشارکت
              </span>
            </div>
            <div className="flex w-[120px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[19]">
              <span className="flex w-[82px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-20">
                شروع مشارکت
              </span>
            </div>
          </div>
          <div className="flex w-[630px] gap-[40px] justify-end items-center shrink-0 flex-nowrap relative z-[21]">
            <div className="flex w-[453px] gap-[24px] items-center shrink-0 flex-nowrap relative z-[22]">
              <span className="flex w-[45px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[23]">
                درباره ما
              </span>
              <span className="flex w-[60px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[24]">
                تماس با ما
              </span>
              <span className="flex w-[52px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[25]">
                {" "}
                شرکت‌ها
              </span>
              <span className="flex w-[66px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[26]">
                {" "}
                استارتاپ‌ها
              </span>
              <span className="flex w-[41px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[27]">
                پروژه‌ها
              </span>
              <span className="flex w-[69px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[28]">
                صفحه اصلی
              </span>
            </div>
            <div className="w-[137px] h-[46px] shrink-0 bg-[url(/assets/codia-homepage-preview/VWWCoao7va.png)] bg-cover bg-no-repeat relative z-[29]" />
          </div>
        </div>
        <div className="flex pt-[96px] pr-[120px] pb-[96px] pl-[120px] flex-col gap-[64px] items-center self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] relative overflow-hidden z-30">
          <div className="flex gap-[64px] items-center self-stretch shrink-0 flex-nowrap relative z-[31]">
            <div className="flex flex-col items-center grow shrink-0 basis-0 flex-nowrap relative z-[32]">
              <div className="flex h-[380px] flex-col justify-center items-center self-stretch shrink-0 flex-nowrap bg-[rgba(17,30,48,0.06)] bg-[url(/assets/codia-homepage-preview/ffKxvMGtJX.png)] bg-cover bg-no-repeat rounded-[24px] relative overflow-hidden z-[33]">
                <div className="flex h-[71px] pt-0 pr-0 pb-0 pl-0 justify-between items-start shrink-0 flex-nowrap absolute top-[19px] left-[19px] right-[19px] z-[34]" />
                <div className="flex w-[72px] h-[72px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[36px] relative z-[35]">
                  <div className="flex w-[24px] h-[24px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[36]">
                    <div className="w-[24px] h-[24px] shrink-0 bg-[url(/assets/codia-homepage-preview/rUttUJU2ZO.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[37]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[24px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[38]">
              <div className="flex flex-col gap-[16px] items-end self-stretch shrink-0 flex-nowrap relative z-[39]">
                <span className="flex w-[568px] h-[204px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[48px] font-extrabold leading-[68px] text-[#17324d] relative text-right z-40">
                  تغییر یک سرنوشت، از انتخاب ساده امروز ما شروع می‌شود
                </span>
              </div>
              <div className="flex w-[301px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[41]">
                <div className="flex w-[167px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[42]">
                  <span className="flex w-[119px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#2094e3] relative text-center whitespace-nowrap z-[43]">
                    معرفی ماه در ۹۰ ثانیه
                  </span>
                </div>
                <div className="flex w-[122px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[44]">
                  <span className="flex w-[82px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[45]">
                    شروع مشارکت
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex pt-[56px] pr-[120px] pb-[56px] pl-[120px] flex-col gap-[28px] items-end self-stretch shrink-0 flex-nowrap bg-[#fff] relative overflow-hidden z-[46]">
          <div className="flex justify-center items-center self-stretch shrink-0 flex-nowrap relative overflow-hidden z-[47]">
            <div className="flex w-[339px] flex-col gap-[6px] items-center shrink-0 flex-nowrap relative overflow-hidden z-[48]">
              <span className="flex w-[182px] h-[50px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[32px] font-bold leading-[50px] text-[#17324d] relative text-center whitespace-nowrap z-[49]">
                اثر ماه تا امروز
              </span>
              <span className="flex w-[339px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-center whitespace-nowrap z-50">
                آمار پروژه‌های تأییدشده و مشارکت‌های ثبت‌شده در سامانه ماه
              </span>
            </div>
          </div>
          <div className="flex pt-[28px] pr-[40px] pb-[28px] pl-[40px] gap-[16px] justify-end items-center self-stretch shrink-0 flex-nowrap relative overflow-hidden z-[51]">
            <div className="flex w-[211px] pt-[18px] pr-[18px] pb-[18px] pl-[18px] flex-col gap-[6px] items-end shrink-0 flex-nowrap rounded-[16px] border-solid border border-[#e5edf7] relative overflow-hidden shadow-[0_4px_12px_0_rgba(12,30,63,0.05)] z-[52]">
              <div className="flex w-[36px] h-[36px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#fcecdb] rounded-[18px] relative overflow-hidden z-[53]">
                <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/codia-homepage-preview/vLcHSObUGY.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[54]" />
              </div>
              <div className="flex w-[141px] gap-[6px] items-baseline shrink-0 flex-nowrap relative overflow-hidden z-[55]">
                <span className="flex w-[72px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[56]">
                  میلیارد تومان
                </span>
                <span className="flex w-[63px] h-[50px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[32px] font-bold leading-[50px] text-[#17324d] relative text-right whitespace-nowrap z-[57]">
                  ۱۸٫۴
                </span>
              </div>
              <span className="flex w-[87px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e9811b] relative text-right whitespace-nowrap z-[58]">
                منابع جذب‌شده
              </span>
            </div>
            <div className="flex w-[211px] pt-[18px] pr-[18px] pb-[18px] pl-[18px] flex-col gap-[6px] items-end shrink-0 flex-nowrap rounded-[16px] border-solid border border-[#e5edf7] relative overflow-hidden shadow-[0_4px_12px_0_rgba(12,30,63,0.05)] z-[59]">
              <div className="flex w-[36px] h-[36px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#f5f0e3] rounded-[18px] relative overflow-hidden z-[60]">
                <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/codia-homepage-preview/KScGgWtdiZ.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[61]" />
              </div>
              <div className="flex w-[71px] gap-[6px] items-baseline shrink-0 flex-nowrap relative overflow-hidden z-[62]">
                <span className="flex w-[28px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[63]">
                  پروژه
                </span>
                <span className="flex w-[37px] h-[50px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[32px] font-bold leading-[50px] text-[#17324d] relative text-right whitespace-nowrap z-[64]">
                  ۲۴
                </span>
              </div>
              <span className="flex w-[81px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#c5a056] relative text-right whitespace-nowrap z-[65]">
                پروژه‌های فعال
              </span>
            </div>
            <div className="flex w-[211px] pt-[18px] pr-[18px] pb-[18px] pl-[18px] flex-col gap-[6px] items-end shrink-0 flex-nowrap rounded-[16px] border-solid border border-[#e5edf7] relative overflow-hidden shadow-[0_4px_12px_0_rgba(12,30,63,0.05)] z-[66]">
              <div className="flex w-[36px] h-[36px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#eaf8f0] rounded-[18px] relative overflow-hidden z-[67]">
                <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/codia-homepage-preview/PKQ5REy63k.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[68]" />
              </div>
              <div className="flex w-[136px] gap-[6px] items-baseline shrink-0 flex-nowrap relative overflow-hidden z-[69]">
                <span className="flex w-[73px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[70]">
                  فرصت شغلی
                </span>
                <span className="flex w-[57px] h-[50px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[32px] font-bold leading-[50px] text-[#17324d] relative text-right whitespace-nowrap z-[71]">
                  ۳۴۶
                </span>
              </div>
              <span className="flex w-[97px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#159455] relative text-right whitespace-nowrap z-[72]">
                اشتغال ایجادشده
              </span>
            </div>
            <div className="flex w-[211px] pt-[18px] pr-[18px] pb-[18px] pl-[18px] flex-col gap-[6px] items-end shrink-0 flex-nowrap rounded-[16px] border-solid border border-[#e5edf7] relative overflow-hidden shadow-[0_4px_12px_0_rgba(12,30,63,0.05)] z-[73]">
              <div className="flex w-[36px] h-[36px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#fff6e5] rounded-[18px] relative overflow-hidden z-[74]">
                <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/codia-homepage-preview/h8LidgeQTA.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[75]" />
              </div>
              <div className="flex w-[112px] gap-[6px] items-baseline shrink-0 flex-nowrap relative overflow-hidden z-[76]">
                <span className="flex w-[17px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[77]">
                  نفر
                </span>
                <span className="flex w-[89px] h-[50px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[32px] font-bold leading-[50px] text-[#17324d] relative text-right whitespace-nowrap z-[78]">
                  ۱۲٬۸۴۰
                </span>
              </div>
              <span className="flex w-[70px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#c27a10] relative text-right whitespace-nowrap z-[79]">
                افراد بهره‌مند
              </span>
            </div>
            <div className="flex w-[211px] pt-[18px] pr-[18px] pb-[18px] pl-[18px] flex-col gap-[6px] items-end shrink-0 flex-nowrap rounded-[16px] border-solid border border-[#e5edf7] relative overflow-hidden shadow-[0_4px_12px_0_rgba(12,30,63,0.05)] z-[80]">
              <div className="flex w-[36px] h-[36px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[18px] relative overflow-hidden z-[81]">
                <div className="w-[21.17px] h-[22.271px] shrink-0 bg-[url(/assets/codia-homepage-preview/7gB7oOfWY6.svg)] bg-[length:100%_100%] bg-no-repeat relative z-[82]" />
              </div>
              <div className="flex w-[125px] gap-[6px] items-baseline shrink-0 flex-nowrap relative overflow-hidden z-[83]">
                <span className="flex w-[49px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[84]">
                  استارتاپ
                </span>
                <span className="flex w-[70px] h-[50px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[32px] font-bold leading-[50px] text-[#17324d] relative text-right whitespace-nowrap z-[85]">
                  ۱٬۲۵۰
                </span>
              </div>
              <span className="flex w-[99px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[86]">
                تعداد استارتاپ ها
              </span>
            </div>
          </div>
        </div>
        <div className="flex pt-[96px] pr-[120px] pb-[96px] pl-[120px] flex-col gap-[40px] items-center self-stretch shrink-0 flex-nowrap relative z-[87]">
          <div className="flex flex-col gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-[88]">
            <span className="h-[38px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-extrabold leading-[37.5px] text-[#17324d] relative text-center whitespace-nowrap z-[89]">
              مسیرهای ورود و مشارکت در ماه
            </span>
            <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-center whitespace-nowrap z-[90]">
              متناسب با نقش خود، مسیر مناسب را انتخاب کنید.
            </span>
          </div>
          <div className="flex h-[432px] gap-[24px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[91]">
            <div className="flex w-[384px] pt-[32px] pr-[32px] pb-[32px] pl-[32px] flex-col gap-[24px] items-end self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e4ebf1] relative overflow-hidden z-[92]">
              <div className="flex flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap relative overflow-hidden z-[93]">
                <div className="flex w-[48px] h-[48px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#e0f2fe] rounded-[16px] relative z-[94]">
                  <div className="w-[24px] h-[24px] shrink-0 rounded-[4px] relative overflow-hidden z-[95]">
                    <div className="w-[18px] h-[18px] bg-[url(/assets/codia-homepage-preview/c61aKOyg1L.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[96] mt-[3px] mr-0 mb-0 ml-[3px]" />
                  </div>
                </div>
                <span className="h-[31px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[20px] font-bold leading-[31px] text-[#17324d] relative text-right whitespace-nowrap z-[97]">
                  برای استارتاپ‌ها
                </span>
                <span className="flex w-[320px] h-[44px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right z-[98]">
                  پروژه اثر اجتماعی خود را ثبت کنید و پس از ارزیابی برای جذب
                  سرمایه آماده شوید.
                </span>
              </div>
              <div className="flex flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap relative overflow-hidden z-[99]">
                <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[100]">
                  ✔ ثبت پروژه و شاخص‌های اثر اجتماعی
                </span>
                <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[101]">
                  ✔ ارزیابی توسط خانه خلاق و نوآوری آینه
                </span>
                <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[102]">
                  ✔ تعریف KPI و امکان تأمین مالی مرحله‌ای
                </span>
              </div>
              <div className="self-stretch grow shrink-0 basis-0 relative overflow-hidden z-[103]" />
              <div className="flex flex-col justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[104]">
                <div className="flex h-[44px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] justify-center items-center self-stretch shrink-0 flex-nowrap rounded-[12px] relative overflow-hidden z-[105]">
                  <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#fff] relative text-center whitespace-nowrap z-[106]">
                    ثبت‌نام استارتاپ
                  </span>
                </div>
              </div>
            </div>
            <div className="flex w-[384px] pt-[32px] pr-[32px] pb-[32px] pl-[32px] flex-col gap-[24px] items-end self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[24px] border-solid border-2 border-[#2094e3] relative overflow-hidden shadow-[0_8px_20px_0_rgba(12,51,114,0.12)] z-[107]">
              <div className="flex flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap relative z-[108]">
                <div className="flex w-[48px] h-[48px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#e0f2fe] rounded-[16px] relative z-[109]">
                  <div className="flex w-[24px] h-[24px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[110]">
                    <div className="w-[24px] h-[24px] shrink-0 bg-[url(/assets/codia-homepage-preview/mux0SbkiVW.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[111]" />
                  </div>
                </div>
                <span className="h-[31px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[20px] font-bold leading-[31px] text-[#17324d] relative text-right whitespace-nowrap z-[112]">
                  برای شرکت‌ها و سازمان‌ها
                </span>
                <span className="flex w-[320px] h-[44px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right z-[113]">
                  سرمایه‌گذاری اجتماعی سازمان خود را شفاف، قابل‌اندازه‌گیری و
                  قابل‌گزارش مدیریت کنید.
                </span>
              </div>
              <div className="flex flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap relative z-[114]">
                <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[115]">
                  ✔ حساب سازمانی
                </span>
                <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[116]">
                  ✔ گزارش مالی و اثر اجتماعی
                </span>
                <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[117]">
                  ✔ امکان دریافت گواهی ماده ۱۷۲
                </span>
              </div>
              <div className="self-stretch grow shrink-0 basis-0 relative overflow-hidden z-[118]" />
              <div className="flex flex-col justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[119]">
                <div className="flex h-[44px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] justify-center items-center self-stretch shrink-0 flex-nowrap rounded-[12px] relative overflow-hidden z-[120]">
                  <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#fff] relative text-center whitespace-nowrap z-[121]">
                    ورود شرکت‌ها
                  </span>
                </div>
              </div>
            </div>
            <div className="flex pt-[32px] pr-[32px] pb-[32px] pl-[32px] flex-col gap-[24px] items-end self-stretch grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[24px] border-solid border-2 border-[#e4ebf1] relative overflow-hidden z-[122]">
              <div className="flex flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap relative z-[123]">
                <div className="flex w-[48px] h-[48px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#e0f2fe] rounded-[16px] relative z-[124]">
                  <div className="flex w-[24px] h-[24px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[125]">
                    <div className="w-[24px] h-[24px] shrink-0 bg-[url(/assets/codia-homepage-preview/awwAe5WvfV.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[126]" />
                  </div>
                </div>
                <span className="h-[31px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[20px] font-bold leading-[31px] text-[#17324d] relative text-right whitespace-nowrap z-[127]">
                  برای افراد حقیقی
                </span>
                <span className="flex w-[320px] h-[44px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right z-[128]">
                  سریع و بدون ساخت حساب کاربری در پروژه‌های اثر اجتماعی مشارکت
                  کنید.
                </span>
              </div>
              <div className="flex flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap relative z-[129]">
                <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[130]">
                  ✔ بدون ثبت‌نام
                </span>
                <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[131]">
                  ✔ فقط شماره موبایل و کد تأیید
                </span>
                <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[132]">
                  ✔ بدون گواهی مالیاتی
                </span>
              </div>
              <div className="self-stretch grow shrink-0 basis-0 relative overflow-hidden z-[133]" />
              <div className="flex flex-col justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[134]">
                <div className="flex h-[44px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] justify-center items-center self-stretch shrink-0 flex-nowrap rounded-[12px] relative overflow-hidden z-[135]">
                  <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#fff] relative text-center whitespace-nowrap z-[136]">
                    مشارکت فردی
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex pt-[96px] pr-[120px] pb-[96px] pl-[120px] flex-col gap-[40px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] relative z-[137]">
          <div className="flex flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap relative z-[138]">
            <span className="h-[44px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[28px] font-extrabold leading-[43.75px] text-[#17324d] relative text-center whitespace-nowrap z-[139]">
              یک پروژه را انتخاب کن
            </span>
            <span className="h-[23px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-normal leading-[23px] text-[#60758a] relative text-center whitespace-nowrap z-[140]">
              اثر اجتماعی هر پروژه از قبل مشخص، تأییدشده و قابل‌اندازه‌گیری است
            </span>
          </div>
          <div className="flex gap-[24px] items-start self-stretch shrink-0 flex-nowrap relative z-[141]">
            <div className="flex h-[567px] pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-start grow shrink-0 basis-0 flex-nowrap bg-[#fcfbf8] rounded-[24px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[142]">
              <div className="flex h-[180px] flex-col items-start self-stretch shrink-0 flex-nowrap bg-[url(/assets/codia-homepage-preview/09RokiO9uG.png)] bg-cover bg-no-repeat rounded-[16px] relative overflow-hidden z-[143]" />
              <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[144]">
                <div className="flex gap-[8px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[145]">
                  <span className="flex w-[114px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[146]">
                    حوزه: سلامت و بهداشت
                  </span>
                  <span className="flex w-[3px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[147]">
                    |
                  </span>
                  <span className="flex w-[133px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[148]">
                    استان: سیستان و بلوچستان
                  </span>
                </div>
                <span className="h-[28px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#17324d] relative text-right whitespace-nowrap z-[149]">
                  سلامت خانواده
                </span>
              </div>
              <div className="flex flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap relative z-[150]">
                <div className="flex gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[151]">
                  <div className="flex flex-col gap-[2px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[152]">
                    <span className="flex w-[60px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[153]">
                      افراد بهره‌مند
                    </span>
                    <span className="flex w-[54px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[154]">
                      ۲٬۵۰۰ فرد
                    </span>
                  </div>
                  <div className="flex flex-col gap-[2px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[155]">
                    <span className="flex w-[77px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[156]">
                      پوشش روستایی
                    </span>
                    <span className="flex w-[52px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[157]">
                      ۴۲ روستا
                    </span>
                  </div>
                </div>
                <div className="flex gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[158]">
                  <div className="flex flex-col gap-[2px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[159]">
                    <span className="flex w-[61px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[160]">
                      مراکز سلامت
                    </span>
                    <span className="flex w-[36px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[161]">
                      ۸ مرکز
                    </span>
                  </div>
                  <div className="flex flex-col gap-[2px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[162]">
                    <span className="flex w-[72px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[163]">
                      پوشش خدمات
                    </span>
                    <span className="flex w-[44px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[164]">
                      ۷۴٪ کل
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[165]">
                <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[166]">
                  <span className="flex w-[88px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[167]">
                    هدف: ۳۵۰ میلیون
                  </span>
                  <span className="flex w-[96px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#17324d] relative text-right whitespace-nowrap z-[168]">
                    ۱۷۸٫۵ میلیون تومان
                  </span>
                </div>
                <div className="flex h-[8px] justify-end items-start self-stretch shrink-0 flex-nowrap bg-[#e4ebf1] rounded-[4px] relative overflow-hidden z-[169]">
                  <div className="w-[158px] self-stretch shrink-0 bg-[#2094e3] relative z-[170]" />
                </div>
                <span className="h-[19px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[171]">
                  ۵۱٪ تأمین شده
                </span>
              </div>
              <div className="self-stretch grow shrink-0 basis-0 relative overflow-hidden z-[172]" />
              <div className="flex justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[173]">
                <div className="flex pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center grow shrink-0 basis-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[174]">
                  <span className="flex w-[107px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-right whitespace-nowrap z-[175]">
                    مشاهده و مشارکت
                  </span>
                </div>
              </div>
            </div>
            <div className="flex h-[567px] pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-start grow shrink-0 basis-0 flex-nowrap bg-[#fcfbf8] rounded-[24px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[176]">
              <div className="flex h-[180px] flex-col items-start self-stretch shrink-0 flex-nowrap bg-[url(/assets/codia-homepage-preview/s16Q0myuAj.png)] bg-cover bg-no-repeat rounded-[16px] relative overflow-hidden z-[177]" />
              <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[178]">
                <div className="flex gap-[8px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[179]">
                  <span className="flex w-[107px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[180]">
                    حوزه: آموزش و اشتغال
                  </span>
                  <span className="flex w-[3px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[181]">
                    |
                  </span>
                  <span className="flex w-[71px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[182]">
                    استان: اصفهان
                  </span>
                </div>
                <span className="h-[28px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#17324d] relative text-right whitespace-nowrap z-[183]">
                  مهارت برای نوجوانان
                </span>
              </div>
              <div className="flex flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap relative z-[184]">
                <div className="flex gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[185]">
                  <div className="flex flex-col gap-[2px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[186]">
                    <span className="flex w-[54px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[187]">
                      آموزش‌دیده
                    </span>
                    <span className="flex w-[68px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[188]">
                      ۳۵۰ نوجوان
                    </span>
                  </div>
                  <div className="flex flex-col gap-[2px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[189]">
                    <span className="flex w-[62px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[190]">
                      فرصت شغلی
                    </span>
                    <span className="flex w-[53px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[191]">
                      ۹۰ فرصت
                    </span>
                  </div>
                </div>
                <div className="flex gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[192]">
                  <div className="flex flex-col gap-[2px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[193]">
                    <span className="flex w-[52px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[194]">
                      مراکز علمی
                    </span>
                    <span className="flex w-[54px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[195]">
                      ۱۲ مدرسه
                    </span>
                  </div>
                  <div className="flex flex-col gap-[2px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[196]">
                    <span className="flex w-[62px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[197]">
                      اشتغال‌پذیری
                    </span>
                    <span className="flex w-[66px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[198]">
                      ۷۰٪ افزایش
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[199]">
                <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[200]">
                  <span className="flex w-[85px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[201]">
                    هدف: ۴۰۰ میلیون
                  </span>
                  <span className="flex w-[85px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#17324d] relative text-right whitespace-nowrap z-[202]">
                    ۲۹۶ میلیون تومان
                  </span>
                </div>
                <div className="flex h-[8px] justify-end items-start self-stretch shrink-0 flex-nowrap bg-[#e4ebf1] rounded-[4px] relative overflow-hidden z-[203]">
                  <div className="w-[230px] self-stretch shrink-0 bg-[#2094e3] relative z-[204]" />
                </div>
                <span className="h-[19px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[205]">
                  ۷۴٪ تأمین شده
                </span>
              </div>
              <div className="self-stretch grow shrink-0 basis-0 relative overflow-hidden z-[206]" />
              <div className="flex justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[207]">
                <div className="flex pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center grow shrink-0 basis-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[208]">
                  <span className="flex w-[107px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-right whitespace-nowrap z-[209]">
                    مشاهده و مشارکت
                  </span>
                </div>
              </div>
            </div>
            <div className="flex h-[567px] pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-start grow shrink-0 basis-0 flex-nowrap bg-[#fcfbf8] rounded-[24px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[210]">
              <div className="flex h-[180px] flex-col items-start self-stretch shrink-0 flex-nowrap bg-[url(/assets/codia-homepage-preview/R4fH6vpsc0.png)] bg-cover bg-no-repeat rounded-[16px] relative overflow-hidden z-[211]" />
              <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[212]">
                <div className="flex gap-[8px] justify-end items-end self-stretch shrink-0 flex-nowrap relative z-[213]">
                  <span className="flex w-[120px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[214]">
                    حوزه: کسب‌وکار و اشتغال
                  </span>
                  <span className="flex w-[3px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[215]">
                    |
                  </span>
                  <span className="flex w-[70px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[216]">
                    استان: گلستان
                  </span>
                </div>
                <span className="h-[28px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#17324d] relative text-right whitespace-nowrap z-[217]">
                  اشتغال زنان روستایی
                </span>
              </div>
              <div className="flex flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap relative z-[218]">
                <div className="flex gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[219]">
                  <div className="flex flex-col gap-[2px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[220]">
                    <span className="flex w-[62px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[221]">
                      فرصت شغلی
                    </span>
                    <span className="flex w-[58px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[222]">
                      ۱۲۰ فرصت
                    </span>
                  </div>
                  <div className="flex flex-col gap-[2px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[223]">
                    <span className="flex w-[60px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[224]">
                      افراد بهره‌مند
                    </span>
                    <span className="flex w-[45px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[225]">
                      ۴۵۰ فرد
                    </span>
                  </div>
                </div>
                <div className="flex gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[226]">
                  <div className="flex flex-col gap-[2px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[227]">
                    <span className="flex w-[85px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[228]">
                      پوشش جغرافیایی
                    </span>
                    <span className="flex w-[52px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[229]">
                      ۲۵ روستا
                    </span>
                  </div>
                  <div className="flex flex-col gap-[2px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[230]">
                    <span className="flex w-[68px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[231]">
                      توسعه درآمدی
                    </span>
                    <span className="flex w-[67px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[232]">
                      ۳۰٪ افزایش
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[233]">
                <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[234]">
                  <span className="flex w-[85px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[235]">
                    هدف: ۴۰۰ میلیون
                  </span>
                  <span className="flex w-[87px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#17324d] relative text-right whitespace-nowrap z-[236]">
                    ۲۳۲ میلیون تومان
                  </span>
                </div>
                <div className="flex h-[8px] justify-end items-start self-stretch shrink-0 flex-nowrap bg-[#e4ebf1] rounded-[4px] relative overflow-hidden z-[237]">
                  <div className="w-[180px] self-stretch shrink-0 bg-[#2094e3] relative z-[238]" />
                </div>
                <span className="h-[19px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[239]">
                  ۵۸٪ تأمین شده
                </span>
              </div>
              <div className="self-stretch grow shrink-0 basis-0 relative overflow-hidden z-[240]" />
              <div className="flex justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[241]">
                <div className="flex pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center grow shrink-0 basis-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[242]">
                  <span className="flex w-[107px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-right whitespace-nowrap z-[243]">
                    مشاهده و مشارکت
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[146px] pt-[20px] pr-0 pb-0 pl-0 gap-[8px] items-center shrink-0 flex-nowrap relative z-[244]">
            <div className="flex w-[16px] h-[16px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[245]">
              <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia-homepage-preview/pXBaKv0Aqj.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[246]" />
            </div>
            <span className="flex w-[122px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[247]">
              مشاهده همه پروژه‌ها
            </span>
          </div>
        </div>
        <div className="flex pt-[64px] pr-[120px] pb-[64px] pl-[120px] flex-col gap-[32px] items-center self-stretch shrink-0 flex-nowrap relative z-[248]">
          <div className="flex flex-col gap-[8px] items-center self-stretch shrink-0 flex-nowrap relative z-[249]">
            <span className="h-[50px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[32px] font-bold leading-[50px] text-[#17324d] relative text-center whitespace-nowrap z-[250]">
              شرکت‌هایی که به ماه اعتماد کرده‌اند
            </span>
            <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-center whitespace-nowrap z-[251]">
              همراهان سازمانی در مسیر سرمایه‌گذاری اجتماعی شفاف و اثرگذار
            </span>
          </div>
          <div className="flex pt-0 pr-[24px] pb-0 pl-[24px] justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[252]">
            <div className="flex w-[120px] h-[38px] gap-[10px] justify-center items-center shrink-0 flex-nowrap opacity-70 relative z-[253]">
              <span className="flex w-[75px] h-[34px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[22px] font-bold leading-[34px] text-[#606d7c] relative text-center whitespace-nowrap z-[254]">
                راهکار نو
              </span>
              <div className="flex w-[36px] h-[36px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[255]">
                <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/codia-homepage-preview/QmbC3QC2KZ.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[256]" />
              </div>
            </div>
            <div className="flex w-[100px] h-[38px] gap-[10px] justify-center items-center shrink-0 flex-nowrap opacity-70 relative z-[257]">
              <span className="flex w-[54px] h-[34px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[22px] font-bold leading-[34px] text-[#606d7c] relative text-center whitespace-nowrap z-[258]">
                پیشرو
              </span>
              <div className="flex w-[36px] h-[36px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[259]">
                <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/codia-homepage-preview/ASZ5PRqzqK.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[260]" />
              </div>
            </div>
            <div className="flex w-[125px] h-[38px] gap-[10px] justify-center items-center shrink-0 flex-nowrap opacity-70 relative z-[261]">
              <span className="flex w-[79px] h-[34px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[22px] font-bold leading-[34px] text-[#606d7c] relative text-center whitespace-nowrap z-[262]">
                هم‌آفرین
              </span>
              <div className="flex w-[36px] h-[36px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[263]">
                <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/codia-homepage-preview/J0ypy0zPqN.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[264]" />
              </div>
            </div>
            <div className="flex w-[153px] h-[38px] gap-[10px] justify-center items-center shrink-0 flex-nowrap opacity-70 relative z-[265]">
              <span className="flex w-[107px] h-[34px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[22px] font-bold leading-[34px] text-[#606d7c] relative text-center whitespace-nowrap z-[266]">
                فردای روشن
              </span>
              <div className="flex w-[36px] h-[36px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[267]">
                <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/codia-homepage-preview/6u3V1LwCfT.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[268]" />
              </div>
            </div>
            <div className="flex w-[138px] h-[38px] gap-[10px] justify-center items-center shrink-0 flex-nowrap opacity-70 relative z-[269]">
              <span className="flex w-[92px] h-[34px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[22px] font-bold leading-[34px] text-[#606d7c] relative text-center whitespace-nowrap z-[270]">
                توسعه آریا
              </span>
              <div className="flex w-[36px] h-[36px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[271]">
                <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/codia-homepage-preview/RcR30hdb2n.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[272]" />
              </div>
            </div>
            <div className="flex w-[115px] h-[38px] gap-[10px] justify-center items-center shrink-0 flex-nowrap opacity-70 relative z-[273]">
              <span className="flex w-[69px] h-[34px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[22px] font-bold leading-[34px] text-[#606d7c] relative text-center whitespace-nowrap z-[274]">
                سپهر نو
              </span>
              <div className="flex w-[36px] h-[36px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[275]">
                <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/codia-homepage-preview/zC7wTnusGf.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[276]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex pt-[96px] pr-[120px] pb-[96px] pl-[120px] flex-col gap-[40px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] relative z-[277]">
          <div className="flex justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[278]">
            <div className="flex flex-col gap-[12px] items-center grow shrink-0 basis-0 flex-nowrap relative z-[279]">
              <span className="h-[50px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[32px] font-extrabold leading-[50px] text-[#17324d] relative text-center whitespace-nowrap z-[280]">
                آخرین اخبار و روایت‌های اثر
              </span>
              <span className="h-[25px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-normal leading-[25px] text-[#60758a] relative text-center whitespace-nowrap z-[281]">
                تازه‌ترین خبرها، گزارش‌ها و نتایج پروژه‌های اجتماعی ماه
              </span>
            </div>
          </div>
          <div className="flex gap-[24px] items-start self-stretch shrink-0 flex-nowrap relative z-[282]">
            <div className="flex h-[421px] flex-col items-start grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative overflow-hidden shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[283]">
              <div className="flex h-[180px] flex-col items-start self-stretch shrink-0 flex-nowrap bg-[url(/assets/codia-homepage-preview/drZ0UQbK8Z.png)] bg-cover bg-no-repeat relative overflow-hidden z-[284]" />
              <div className="flex h-[241px] pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[285]">
                <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[286]">
                  <span className="flex w-[71px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[287]">
                    ۲۰ مرداد ۱۴۰۵
                  </span>
                  <div className="flex w-[56px] pt-[4px] pr-[10px] pb-[4px] pl-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#e0f2fe] rounded-[12px] relative z-[288]">
                    <span className="flex w-[36px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[289]">
                      پروژه‌ها
                    </span>
                  </div>
                </div>
                <span className="flex w-[336px] h-[56px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[18px] font-bold leading-[28.125px] text-[#17324d] relative text-right overflow-hidden z-[290]">
                  آغاز مرحله دوم تأمین مالی پروژه اشتغال زنان روستایی
                </span>
                <span className="flex w-[336px] h-[44px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right overflow-hidden z-[291]">
                  پس از تأیید تحقق KPIهای مرحله نخست، تأمین مالی مرحله دوم این
                  پروژه آغاز شد.
                </span>
                <div className="self-stretch grow shrink-0 basis-0 relative overflow-hidden z-[292]" />
                <div className="flex pt-[8px] pr-0 pb-0 pl-0 gap-[8px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[293]">
                  <span className="flex w-[65px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[294]">
                    مطالعه خبر
                  </span>
                </div>
              </div>
            </div>
            <div className="flex h-[421px] flex-col items-start grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative overflow-hidden shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[295]">
              <div className="flex h-[180px] flex-col items-start self-stretch shrink-0 flex-nowrap bg-[url(/assets/codia-homepage-preview/H5P0BjEWK5.png)] bg-cover bg-no-repeat relative overflow-hidden z-[296]" />
              <div className="flex h-[241px] pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[297]">
                <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[298]">
                  <span className="flex w-[68px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[299]">
                    ۱۶ مرداد ۱۴۰۵
                  </span>
                  <div className="flex w-[82px] pt-[4px] pr-[10px] pb-[4px] pl-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf8f0] rounded-[12px] relative z-[300]">
                    <span className="flex w-[62px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#159455] relative text-right whitespace-nowrap z-[301]">
                      همراهان ماه
                    </span>
                  </div>
                </div>
                <span className="flex w-[336px] h-[56px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[18px] font-bold leading-[28.125px] text-[#17324d] relative text-right overflow-hidden z-[302]">
                  پیوستن سه شرکت جدید به شبکه همراهان سازمانی ماه
                </span>
                <span className="flex w-[336px] h-[44px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right overflow-hidden z-[303]">
                  سه مجموعه جدید برای سرمایه‌گذاری شفاف در پروژه‌های اثر اجتماعی
                  به سامانه ماه پیوستند.
                </span>
                <div className="self-stretch grow shrink-0 basis-0 relative overflow-hidden z-[304]" />
                <div className="flex pt-[8px] pr-0 pb-0 pl-0 gap-[8px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[305]">
                  <span className="flex w-[65px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[306]">
                    مطالعه خبر
                  </span>
                </div>
              </div>
            </div>
            <div className="flex h-[421px] flex-col items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative overflow-hidden shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[307]">
              <div className="flex h-[180px] flex-col items-start self-stretch shrink-0 flex-nowrap bg-[url(/assets/codia-homepage-preview/GXmDqfeWXm.png)] bg-cover bg-no-repeat relative overflow-hidden z-[308]" />
              <div className="flex h-[241px] pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[309]">
                <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[310]">
                  <span className="flex w-[67px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[311]">
                    ۱۰ مرداد ۱۴۰۵
                  </span>
                  <div className="flex w-[66px] pt-[4px] pr-[10px] pb-[4px] pl-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#fff6e5] rounded-[12px] relative z-[312]">
                    <span className="flex w-[46px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#c5a056] relative text-right whitespace-nowrap z-[313]">
                      گزارش اثر
                    </span>
                  </div>
                </div>
                <span className="h-[28px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#17324d] relative text-right overflow-hidden whitespace-nowrap z-[314]">
                  انتشار گزارش اثر اجتماعی فصل بهار ۱۴۰۵
                </span>
                <span className="flex w-[336px] h-[44px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right overflow-hidden z-[315]">
                  نتایج اشتغال، آموزش، سلامت و توانمندسازی پروژه‌های فعال ماه
                  منتشر شد.
                </span>
                <div className="self-stretch grow shrink-0 basis-0 relative overflow-hidden z-[316]" />
                <div className="flex pt-[8px] pr-0 pb-0 pl-0 gap-[8px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[317]">
                  <span className="flex w-[65px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[318]">
                    مطالعه خبر
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[155px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[319]">
            <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia-homepage-preview/fdUOQMkyoD.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[320]" />
            <span className="flex w-[107px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[321]">
              مشاهده همه اخبار
            </span>
            <div className="flex w-[16px] h-[16px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[322]" />
          </div>
        </div>
        <div className="flex pt-[80px] pr-[120px] pb-[80px] pl-[120px] flex-col gap-[24px] items-center self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] border-solid border-t border-t-[#e4ebf1] border-solid border-b border-b-[#e4ebf1] relative z-[323]">
          <span className="h-[50px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[32px] font-extrabold leading-[50px] text-[#17324d] relative text-center whitespace-nowrap z-[324]">
            کمتر از یک دقیقه تا شروع یک اثر
          </span>
          <span className="h-[20px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[20px] text-[#60758a] relative text-center whitespace-nowrap z-[325]">
            پرداخت امن به حساب کمیته امداد و امکان پیگیری نتیجه مشارکت
          </span>
          <div className="flex w-[122px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[326]">
            <span className="flex w-[82px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[327]">
              شروع مشارکت{" "}
            </span>
          </div>
        </div>
        <div className="flex pt-[80px] pr-[120px] pb-[40px] pl-[120px] flex-col gap-[64px] items-start self-stretch shrink-0 flex-nowrap bg-[#111e30] relative z-[328]">
          <div className="flex gap-[48px] items-start self-stretch shrink-0 flex-nowrap relative z-[329]">
            <div className="flex w-[220px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[330]">
              <span className="flex w-[59px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[331]">
                ارتباط با ما
              </span>
              <span className="flex w-[115px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[332]">
                تلفن: ۰۲۱-۸۸۸۸۸۸۸۸
              </span>
              <span className="flex w-[156px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[333]">
                ایمیل: info@mahplatform.ir
              </span>
              <div className="flex w-[48px] pt-[8px] pr-0 pb-0 pl-0 gap-[12px] items-center shrink-0 flex-nowrap relative z-[334]">
                <div className="flex w-[18px] h-[18px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[335]">
                  <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/codia-homepage-preview/tv2pn3bnvE.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[336]" />
                </div>
                <div className="flex w-[18px] h-[18px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[337]">
                  <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/codia-homepage-preview/gk10aEqKPN.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[338]" />
                </div>
              </div>
            </div>
            <div className="flex w-[150px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[339]">
              <span className="flex w-[39px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[340]">
                حقوقی
              </span>
              <span className="flex w-[82px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[341]">
                قوانین و مقررات
              </span>
              <span className="flex w-[75px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[342]">
                حریم خصوصی
              </span>
            </div>
            <div className="flex w-[160px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[343]">
              <span className="flex w-[49px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[344]">
                پشتیبانی
              </span>
              <span className="flex w-[55px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[345]">
                تماس با ما
              </span>
              <span className="flex w-[77px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[346]">
                سؤالات متداول
              </span>
              <span className="flex w-[82px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[347]">
                پیگیری مشارکت
              </span>
            </div>
            <div className="flex w-[180px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[348]">
              <span className="flex w-[83px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[349]">
                دسترسی سریع
              </span>
              <span className="flex w-[38px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[350]">
                پروژه‌ها
              </span>
              <span className="flex w-[69px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[351]">
                برای شرکت‌ها
              </span>
              <span className="flex w-[71px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[352]">
                نحوه مشارکت
              </span>
              <span className="flex w-[84px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[353]">
                ثبت‌نام استارتاپ
              </span>
              <span className="flex w-[80px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[354]">
                اخبار و رویدادها
              </span>
            </div>
            <div className="flex w-[298px] h-[182px] flex-col gap-[14px] items-end shrink-0 flex-nowrap relative z-[355]">
              <div className="w-[210px] h-[70px] shrink-0 bg-[url(/assets/codia-homepage-preview/rnccs7kzug.png)] bg-cover bg-no-repeat relative z-[356]" />
              <span className="flex w-[298px] h-[44px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[22px] text-[#e4ebf1] relative text-right z-[357]">
                سامانه مشارکت در پروژه‌های اثر اجتماعی با مسیر مالی شفاف و اثر
                قابل‌اندازه‌گیری.
              </span>
            </div>
          </div>
          <div className="flex pt-[20px] pr-0 pb-0 pl-0 flex-col gap-[4px] items-center self-stretch shrink-0 flex-nowrap border-solid border-b border-b-[rgba(255,255,255,0.12)] relative z-[358]">
            <span className="flex w-[219px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#e4ebf1] relative text-center whitespace-nowrap z-[359]">
              طراحی و توسعه با هدف ارتقای عدالت اجتماعی
            </span>
            <span className="flex w-[203px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#e4ebf1] relative text-center whitespace-nowrap z-[360]">
              تمامی حقوق برای سامانه ماه محفوظ است.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
