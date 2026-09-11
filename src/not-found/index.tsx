import React from "react";
import "./index.css";

export default function Main() {
  return (
    <div className="main-container flex w-[1440px] flex-col items-start flex-nowrap bg-[#f7fafc] relative mx-auto my-0">
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
            <span className="flex w-[66px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[13]">
              {" "}
              استارتاپ‌ها
            </span>
            <span className="flex w-[41px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[14]">
              پروژه‌ها
            </span>
            <span className="flex w-[69px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[15]">
              صفحه اصلی
            </span>
          </div>
          <div className="w-[137px] h-[46px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/dYONjThJuc.png)] bg-cover bg-no-repeat relative z-[16]" />
        </div>
      </div>
      <div className="flex pt-[60px] pr-[100px] pb-[80px] pl-[100px] flex-col gap-[64px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] relative z-[17]">
        <div className="flex gap-[40px] items-center self-stretch shrink-0 flex-nowrap relative z-[18]">
          <div className="flex h-[400px] items-center grow shrink-0 basis-0 flex-nowrap relative z-[19]">
            <div className="flex flex-col justify-center items-center self-stretch grow shrink-0 basis-0 flex-nowrap relative z-20">
              <div className="w-[320px] h-[320px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/277uYCiWAh.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-[21]" />
              <div className="flex w-[236px] flex-col gap-[20px] items-center shrink-0 flex-nowrap relative z-[22]">
                <span className="h-[188px] shrink-0 basis-auto font-['Vazirmatn'] text-[120px] font-black opacity-[0.15] leading-[187.5px] text-[#2094e3] relative text-left whitespace-nowrap z-[23]">۴۰۴</span>
                <div className="flex w-[236px] gap-[32px] items-center shrink-0 flex-nowrap relative z-[24]">
                  <div className="w-[80px] h-[4px] shrink-0 bg-[#2094e3] rounded-[2px] relative z-[25]" />
                  <div className="w-[12px] h-[12px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/dtSMSAjTe6.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[26]" />
                  <div className="w-[80px] h-[4px] shrink-0 bg-[#2094e3] rounded-[2px] relative z-[27]" />
                </div>
                <div className="flex w-[152px] gap-[64px] items-center shrink-0 flex-nowrap relative z-[28]">
                  <div className="flex w-[8px] flex-col gap-[8px] items-center shrink-0 flex-nowrap relative z-[29]">
                    <div className="w-[8px] h-[8px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/Shm22EqYAy.png)] bg-cover bg-no-repeat rounded-[50%] relative z-30" />
                    <div className="w-[2px] h-[40px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/xuypbsdJ7v.png)] bg-cover bg-no-repeat relative z-[31]" />
                  </div>
                  <div className="flex w-[8px] flex-col gap-[8px] items-center shrink-0 flex-nowrap relative z-[32]">
                    <div className="w-[8px] h-[8px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/oTvpGpOxE2.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[33]" />
                    <div className="w-[2px] h-[40px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/G47PV120ni.png)] bg-cover bg-no-repeat relative z-[34]" />
                  </div>
                  <div className="flex w-[8px] flex-col gap-[8px] items-center shrink-0 flex-nowrap relative z-[35]">
                    <div className="w-[8px] h-[8px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/LarWbS8EsR.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[36]" />
                    <div className="w-[2px] h-[40px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/5LKc3QcYT9.png)] bg-cover bg-no-repeat relative z-[37]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[24px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[38]">
            <div className="flex w-[79px] pt-[4px] pr-[12px] pb-[4px] pl-[12px] items-start shrink-0 flex-nowrap bg-[#fef0ee] rounded-[8px] relative z-[39]">
              <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#d9381e] relative text-left whitespace-nowrap z-40">
                خطای ۴۰۴
              </span>
            </div>
            <div className="flex flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap relative z-[41]">
              <span className="h-[56px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[36px] font-extrabold leading-[56px] text-[#17324d] relative text-right whitespace-nowrap z-[42]">
                این صفحه را پیدا نکردیم
              </span>
              <span className="flex w-[600px] h-[56px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[16px] font-normal leading-[28px] text-[#60758a] relative text-right z-[43]">
                ممکن است نشانی واردشده اشتباه باشد، صفحه جابه‌جا شده باشد یا
                دسترسی عمومی آن تغییر کرده باشد.
              </span>
            </div>
            <div className="flex w-[482px] gap-[12px] items-start shrink-0 flex-nowrap relative z-[44]">
              <div className="flex w-[178px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative overflow-hidden z-[45]">
                <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#fff] relative text-left whitespace-nowrap z-[46]">
                  بازگشت به صفحه اصلی
                </span>
              </div>
              <div className="flex w-[147px] pt-[10px] pr-[12px] pb-[10px] pl-[12px] items-center shrink-0 flex-nowrap relative z-[47]">
                <span className="flex w-[123px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[48]">
                  بازگشت به صفحه قبل{" "}
                </span>
              </div>
              <div className="flex w-[133px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] items-center shrink-0 flex-nowrap rounded-[12px] border-solid border border-[#e4ebf1] relative z-[49]">
                <span className="flex w-[93px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-50">
                  مشاهده پروژه‌ها
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex pt-[32px] pr-[32px] pb-[32px] pl-[32px] flex-col gap-[16px] items-end self-stretch shrink-0 flex-nowrap bg-[#f7fafc] rounded-[20px] relative z-[51]">
          <span className="h-[25px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right whitespace-nowrap z-[52]">
            دنبال چه چیزی می‌گردید؟
          </span>
          <div className="flex gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-[53]">
            <div className="flex pt-[12px] pr-[16px] pb-[12px] pl-[16px] justify-end items-start grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[54]">
              <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[55]">
                نام پروژه، استارتاپ یا خبر را جست‌وجو کنید...
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[24px] items-start self-stretch shrink-0 flex-nowrap relative z-[56]">
          <span className="h-[31px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[20px] font-extrabold leading-[31px] text-[#17324d] relative text-right whitespace-nowrap z-[57]">
            شاید یکی از این مسیرها کمکتان کند
          </span>
          <div className="flex gap-[20px] items-start self-stretch shrink-0 flex-nowrap relative z-[58]">
            <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-start grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[59]">
              <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[60]">
                <span className="h-[28px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#17324d] relative text-right whitespace-nowrap z-[61]">
                  پروژه‌ها
                </span>
                <span className="flex w-[247px] h-[44px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[22px] text-[#60758a] relative text-right z-[62]">
                  پروژه‌های اجتماعی فعال را ببینید و سهمی در تغییر داشته باشید.
                </span>
              </div>
              <div className="flex w-[103px] gap-[4px] items-center shrink-0 flex-nowrap relative z-[63]">
                <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#2094e3] relative text-left whitespace-nowrap z-[64]">
                  ←{" "}
                </span>
                <span className="flex w-[86px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[65]">
                  مشاهده پروژه‌ها
                </span>
              </div>
            </div>
            <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-start grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[66]">
              <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[67]">
                <span className="h-[28px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#17324d] relative text-right whitespace-nowrap z-[68]">
                  پیگیری مشارکت
                </span>
                <span className="flex w-[247px] h-[44px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[22px] text-[#60758a] relative text-right z-[69]">
                  وضعیت پرداخت و میزان اثرگذاری مشارکت خود را بررسی کنید.
                </span>
              </div>
              <div className="flex w-[100px] gap-[4px] items-center shrink-0 flex-nowrap relative z-[70]">
                <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#2094e3] relative text-left whitespace-nowrap z-[71]">
                  ←{" "}
                </span>
                <span className="flex w-[83px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[72]">
                  پیگیری مشارکت
                </span>
              </div>
            </div>
            <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-start grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[73]">
              <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[74]">
                <span className="h-[28px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#17324d] relative text-right whitespace-nowrap z-[75]">
                  سؤالات متداول
                </span>
                <span className="flex w-[247px] h-[44px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[22px] text-[#60758a] relative text-right z-[76]">
                  پاسخ پرسش‌های رایج درباره سامانه و پروژه‌ها را پیدا کنید.
                </span>
              </div>
              <div className="flex w-[105px] gap-[4px] items-center shrink-0 flex-nowrap relative z-[77]">
                <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#2094e3] relative text-left whitespace-nowrap z-[78]">
                  ←{" "}
                </span>
                <span className="flex w-[88px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[79]">
                  مشاهده پاسخ‌ها
                </span>
              </div>
            </div>
            <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-start grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[80]">
              <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[81]">
                <span className="h-[28px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#17324d] relative text-right whitespace-nowrap z-[82]">
                  پشتیبانی
                </span>
                <span className="flex w-[247px] h-[44px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[22px] text-[#60758a] relative text-right z-[83]">
                  اگر لینک یا صفحه‌ای مشکل دارد، با تیم ما در ارتباط باشید.
                </span>
              </div>
              <div className="flex w-[107px] gap-[4px] items-center shrink-0 flex-nowrap relative z-[84]">
                <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#2094e3] relative text-left whitespace-nowrap z-[85]">
                  ←{" "}
                </span>
                <span className="flex w-[90px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[86]">
                  تماس با پشتیبانی
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex pt-[20px] pr-0 pb-[20px] pl-0 gap-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap border-solid border-b border-b-[#e4ebf1] relative z-[87]">
          <span className="flex w-[98px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-right underline whitespace-nowrap z-[88]">
            گزارش این مشکل
          </span>
          <span className="flex w-[428px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[89]">
            اگر از داخل سامانه به این صفحه رسیده‌اید، می‌توانید لینک خراب را
            گزارش کنید:
          </span>
        </div>
      </div>
      <div className="flex pt-[80px] pr-[120px] pb-[40px] pl-[120px] flex-col gap-[64px] items-start self-stretch shrink-0 flex-nowrap bg-[#111e30] relative z-[90]">
        <div className="flex gap-[48px] items-start self-stretch shrink-0 flex-nowrap relative z-[91]">
          <div className="flex w-[220px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[92]">
            <span className="flex w-[59px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[93]">
              ارتباط با ما
            </span>
            <span className="flex w-[115px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[94]">
              تلفن: ۰۲۱-۸۸۸۸۸۸۸۸
            </span>
            <span className="flex w-[156px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[95]">
              ایمیل: info@mahplatform.ir
            </span>
            <div className="flex w-[48px] pt-[8px] pr-0 pb-0 pl-0 gap-[12px] items-center shrink-0 flex-nowrap relative z-[96]">
              <div className="flex w-[18px] h-[18px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[97]">
                <div className="w-[18px] h-[18px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/6rsXajjNn5.png)] bg-cover bg-no-repeat relative overflow-hidden z-[98]" />
              </div>
              <div className="flex w-[18px] h-[18px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[99]">
                <div className="w-[18px] h-[18px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/qipq6kMPDS.png)] bg-cover bg-no-repeat relative overflow-hidden z-[100]" />
              </div>
            </div>
          </div>
          <div className="flex w-[150px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[101]">
            <span className="flex w-[39px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[102]">
              حقوقی
            </span>
            <span className="flex w-[82px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[103]">
              قوانین و مقررات
            </span>
            <span className="flex w-[75px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[104]">
              حریم خصوصی
            </span>
          </div>
          <div className="flex w-[160px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[105]">
            <span className="flex w-[49px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[106]">
              پشتیبانی
            </span>
            <span className="flex w-[55px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[107]">
              تماس با ما
            </span>
            <span className="flex w-[77px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[108]">
              سؤالات متداول
            </span>
            <span className="flex w-[82px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[109]">
              پیگیری مشارکت
            </span>
          </div>
          <div className="flex w-[180px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[110]">
            <span className="flex w-[83px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[111]">
              دسترسی سریع
            </span>
            <span className="flex w-[38px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[112]">
              پروژه‌ها
            </span>
            <span className="flex w-[69px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[113]">
              برای شرکت‌ها
            </span>
            <span className="flex w-[71px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[114]">
              نحوه مشارکت
            </span>
            <span className="flex w-[84px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[115]">
              ثبت‌نام استارتاپ
            </span>
            <span className="flex w-[80px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[116]">
              اخبار و رویدادها
            </span>
          </div>
          <div className="flex w-[298px] h-[182px] flex-col gap-[14px] items-end shrink-0 flex-nowrap relative z-[117]">
            <div className="w-[210px] h-[70px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/AxUGaPcD81.png)] bg-cover bg-no-repeat relative z-[118]" />
            <span className="flex w-[298px] h-[44px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[22px] text-[#e4ebf1] relative text-right z-[119]">
              سامانه مشارکت در پروژه‌های اثر اجتماعی با مسیر مالی شفاف و اثر
              قابل‌اندازه‌گیری.
            </span>
          </div>
        </div>
        <div className="flex pt-[20px] pr-0 pb-0 pl-0 flex-col gap-[4px] items-center self-stretch shrink-0 flex-nowrap border-solid border-b border-b-[rgba(255,255,255,0.12)] relative z-[120]">
          <span className="flex w-[219px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#e4ebf1] relative text-center whitespace-nowrap z-[121]">
            طراحی و توسعه با هدف ارتقای عدالت اجتماعی
          </span>
          <span className="flex w-[203px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#e4ebf1] relative text-center whitespace-nowrap z-[122]">
            تمامی حقوق برای سامانه ماه محفوظ است.
          </span>
        </div>
      </div>
    </div>
  );
}
