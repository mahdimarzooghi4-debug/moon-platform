import React from "react";
import "./index.css";

export default function Main() {
  return (
    <div className="main-container flex w-[1440px] flex-col items-center flex-nowrap bg-[#fcfbf8] relative overflow-hidden mx-auto my-0">
      <div className="flex pt-[16px] pr-[120px] pb-[16px] pl-[120px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] border-solid border-t border-t-[#e4ebf1] relative">
        <div className="flex w-[384px] gap-[12px] justify-end items-center shrink-0 flex-nowrap relative z-[1]">
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
          <img
            className="w-[137px] h-[46px] shrink-0 object-contain relative z-[16]"
            src="/assets/codia/qreWA0b9ix.png"
            alt="سامانه ماه"
          />
        </div>
      </div>
      <div className="flex pt-[24px] pr-[120px] pb-[8px] pl-[120px] flex-col items-end self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] relative z-[17]">
        <div className="flex justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[18]">
          <span className="flex w-[232px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[19]">
            صفحه اصلی / پروژه‌ها / اشتغال زنان روستایی
          </span>
        </div>
      </div>
      <div className="flex pt-[16px] pr-[120px] pb-[48px] pl-[120px] gap-[48px] justify-end items-start self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] relative z-20">
        <div className="flex w-[520px] flex-col gap-[16px] items-end shrink-0 flex-nowrap relative z-[21]">
          <div className="flex h-[340px] flex-col justify-center items-center self-stretch shrink-0 flex-nowrap rounded-[16px] relative overflow-hidden z-[22]">
            <img
              className="w-full h-full object-cover absolute inset-0"
              src="/assets/codia/qN8rNm5ete.webp"
              alt="زنان روستایی در کارگاه تولید محصولات محلی"
            />
            <div className="flex h-[57px] pt-[16px] pr-[16px] pb-[16px] pl-[16px] justify-between items-start shrink-0 flex-nowrap absolute top-0 left-0 right-0 z-[23]">
              <div className="flex w-[67px] pt-[4px] pr-[8px] pb-[4px] pl-[8px] items-start shrink-0 flex-nowrap bg-[rgba(0,0,0,0.7)] rounded-[8px] relative z-[24]">
                <span className="flex w-[51px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-bold leading-[17px] text-[#fff] relative text-right whitespace-nowrap z-[25]">
                  تصویر پروژه
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[26]">
            <div className="flex w-[26px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[27]">
              <div className="flex w-[26px] pt-[6px] pr-[6px] pb-[6px] pl-[6px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative z-[28]">
                <div className="flex w-[14px] h-[14px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[29]">
                  <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/codia/0QoTAMVLqZ.svg)] bg-cover bg-no-repeat relative z-30" />
                </div>
              </div>
            </div>
            <span className="flex w-[24px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[31]">
              ۱ از ۴
            </span>
            <div className="flex w-[26px] pt-[6px] pr-[6px] pb-[6px] pl-[6px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[8px] border-solid border border-[#e4ebf1] relative rotate-180 z-[32]">
              <div className="flex w-[14px] h-[14px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[33]">
                <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/codia/LnPKCKpf3w.svg)] bg-cover bg-no-repeat relative z-[34]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[632px] flex-col gap-[20px] items-end shrink-0 flex-nowrap relative z-[35]">
          <div className="flex w-[112px] gap-[8px] items-start shrink-0 flex-nowrap relative z-[36]">
            <div className="flex w-[112px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] items-start shrink-0 flex-nowrap bg-[#111e30] rounded-[12px] relative z-[37]">
              <span className="flex w-[88px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#fff] relative text-right whitespace-nowrap z-[38]">
                در حال تأمین مالی
              </span>
            </div>
          </div>
          <span className="flex w-[269px] h-[50px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[32px] font-bold leading-[50px] text-[#17324d] relative text-right whitespace-nowrap z-[39]">
            اشتغال زنان روستایی
          </span>
          <span className="flex w-[632px] h-[52px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[15px] font-normal leading-[26px] text-[#60758a] relative text-right z-40">
            توانمندسازی زنان روستایی استان گلستان از طریق آموزش، تجهیز، توسعه
            محصول و اتصال پایدار به بازار فروش جهت خلق اثر اجتماعی پایدار.
          </span>
          <div className="flex flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap relative z-[41]">
            <div className="flex gap-[24px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[42]">
              <div className="flex flex-col gap-[4px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[43]">
                <span className="flex w-[26px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[44]">
                  استان
                </span>
                <span className="flex w-[42px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[45]">
                  گلستان
                </span>
              </div>
              <div className="flex flex-col gap-[4px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[46]">
                <span className="flex w-[34px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[47]">
                  حوزه اثر
                </span>
                <span className="flex w-[124px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[48]">
                  اشتغال و توانمندسازی
                </span>
              </div>
            </div>
            <div className="flex gap-[24px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[49]">
              <div className="flex flex-col gap-[4px] items-end grow shrink-0 basis-0 flex-nowrap relative z-50">
                <span className="flex w-[66px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[51]">
                  استارتاپ مجری
                </span>
                <span className="flex w-[59px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[52]">
                  راهکار سبز
                </span>
              </div>
              <div className="flex flex-col gap-[4px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[53]">
                <span className="flex w-[55px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[54]">
                  جامعه هدف
                </span>
                <span className="flex w-[112px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[55]">
                  زنان سرپرست خانوار
                </span>
              </div>
            </div>
            <div className="flex gap-[24px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[56]">
              <div className="flex flex-col gap-[4px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[57]">
                <span className="flex w-[112px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[58]">
                  تاریخ شروع پیش‌بینی‌شده
                </span>
                <span className="flex w-[51px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[59]">
                  مهر ۱۴۰۵
                </span>
              </div>
              <div className="flex flex-col gap-[4px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[60]">
                <span className="flex w-[41px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[61]">
                  مدت اجرا
                </span>
                <span className="flex w-[34px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[62]">
                  ۱۲ ماه
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex pt-[20px] pr-[120px] pb-[20px] pl-[120px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#eaf5fd] border-solid border-t border-t-[#e4ebf1] relative z-[63]">
        <div className="flex w-[243px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[64]">
          <span className="flex w-[219px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[65]">
            نتایج پروژه قابل پیگیری و گزارش‌گیری است
          </span>
          <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/FY81D1e1fi.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[66]" />
        </div>
        <div className="flex w-[225px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[67]">
          <span className="flex w-[201px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[68]">
            پرداخت مستقیم به حساب کمیته امداد
          </span>
          <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/h62XfPDb1Z.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[69]" />
        </div>
        <div className="flex w-[305px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[70]">
          <span className="flex w-[281px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[71]">
            اثر پروژه توسط خانه خلاق و نوآوری آینه تأیید شده است
          </span>
          <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/S17KE6d1De.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[72]" />
        </div>
      </div>
      <div className="flex pt-[48px] pr-[120px] pb-[80px] pl-[120px] gap-[32px] items-start self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] relative z-[73]">
        <div className="flex w-[370px] flex-col items-end shrink-0 flex-nowrap relative z-[74]">
          <div className="flex h-[680px] pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[20px] items-end self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e4ebf1] relative z-[75]">
            <span className="h-[28px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#17324d] relative text-right whitespace-nowrap z-[76]">
              مشارکت در پروژه
            </span>
            <div className="flex w-[322px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[77]">
              <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[78]">
                <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[79]">
                  <div className="w-[86px] shrink-0 font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] relative text-right whitespace-nowrap z-[80]">
                    <span className="font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right">
                      هدف:{" "}
                    </span>
                    <span className="font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#60758a] relative text-right">
                      ۴
                    </span>
                    <span className="font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right">
                      ۰۰ میلیون
                    </span>
                  </div>
                  <span className="flex w-[89px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#17324d] relative text-right whitespace-nowrap z-[81]">
                    {" "}
                    ۲۳۲میلیون تومان
                  </span>
                </div>
                <div className="flex h-[8px] justify-end items-start self-stretch shrink-0 flex-nowrap bg-[#e4ebf1] rounded-[4px] relative overflow-hidden z-[82]">
                  <div className="w-[150px] self-stretch shrink-0 bg-[#2094e3] relative z-[83]" />
                </div>
                <span className="flex w-[77px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[84]">
                  ۵۸٪ تأمین شده
                </span>
              </div>
              <div className="flex flex-col gap-[6px] items-end self-stretch shrink-0 flex-nowrap relative z-[85]">
                <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[86]">
                  <span className="flex w-[96px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[87]">
                    ۲۳۲ میلیون تومان
                  </span>
                  <span className="flex w-[80px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[88]">
                    مبلغ تأمین‌شده
                  </span>
                </div>
                <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[89]">
                  <span className="flex w-[92px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[90]">
                    ۱۶۸ میلیون تومان
                  </span>
                  <span className="flex w-[76px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[91]">
                    مبلغ باقی‌مانده
                  </span>
                </div>
                <div className="flex justify-between items-start self-stretch shrink-0 flex-nowrap relative z-[92]">
                  <span className="flex w-[62px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[93]">
                    ۸۶ مشارکت
                  </span>
                  <span className="flex w-[104px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[94]">
                    تعداد کل مشارکت‌ها
                  </span>
                </div>
              </div>
            </div>
            <div className="flex pt-[4px] pr-[4px] pb-[4px] pl-[4px] items-start self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] rounded-[12px] relative z-[95]">
              <div className="flex pt-[8px] pr-0 pb-[8px] pl-0 justify-center items-start grow shrink-0 basis-0 flex-nowrap relative z-[96]">
                <span className="flex w-[86px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[97]">
                  مشارکت سازمانی
                </span>
              </div>
              <div className="flex pt-[8px] pr-0 pb-[8px] pl-0 justify-center items-start grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[8px] relative z-[98]">
                <span className="flex w-[73px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[99]">
                  مشارکت فردی
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[100]">
              <div className="flex gap-[8px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[101]">
                <div className="flex pt-[10px] pr-0 pb-[10px] pl-0 justify-center items-start grow shrink-0 basis-0 flex-nowrap rounded-[10px] border-solid border border-[#e4ebf1] relative z-[102]">
                  <span className="flex w-[76px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[103]">
                    ۱ میلیون تومان
                  </span>
                </div>
                <div className="flex pt-[10px] pr-0 pb-[10px] pl-0 justify-center items-start grow shrink-0 basis-0 flex-nowrap rounded-[10px] border-solid border border-[#e4ebf1] relative z-[104]">
                  <span className="flex w-[76px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[105]">
                    ۵۰۰ هزار تومان
                  </span>
                </div>
              </div>
              <div className="flex gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[106]">
                <div className="flex pt-[10px] pr-0 pb-[10px] pl-0 justify-center items-start grow shrink-0 basis-0 flex-nowrap rounded-[10px] border-solid border border-[#e4ebf1] relative z-[107]">
                  <span className="flex w-[81px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[108]">
                    ۱۰ میلیون تومان
                  </span>
                </div>
                <div className="flex pt-[10px] pr-0 pb-[10px] pl-0 justify-center items-start grow shrink-0 basis-0 flex-nowrap rounded-[10px] border-solid border border-[#e4ebf1] relative z-[109]">
                  <span className="flex w-[80px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[110]">
                    ۵ میلیون تومان
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[6px] items-end self-stretch shrink-0 flex-nowrap relative z-[111]">
              <span className="flex w-[56px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[112]">
                مبلغ دلخواه
              </span>
              <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] justify-between items-center self-stretch shrink-0 flex-nowrap rounded-[10px] border-solid border border-[#e4ebf1] relative z-[113]">
                <span className="flex w-[32px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-right whitespace-nowrap z-[114]">
                  تومان
                </span>
                <span className="flex w-[149px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[115]">
                  مبلغ مورد نظر را وارد کنید...
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-[116]">
              <div className="flex pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[117]">
                <span className="flex w-[79px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[118]">
                  ادامه مشارکت
                </span>
              </div>
              <span className="flex w-[198px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#2094e3] relative text-right underline whitespace-nowrap z-[119]">
                مشارکت سازمانی چگونه انجام می‌شود؟
              </span>
            </div>
            <div className="h-px self-stretch shrink-0 bg-[url(/assets/codia/2r6f1Pmvgo.svg)] bg-cover bg-no-repeat relative z-[120]" />
            <div className="flex flex-col gap-[6px] items-end self-stretch shrink-0 flex-nowrap relative z-[121]">
              <span className="flex w-[250px] h-[18px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[18px] text-[#60758a] relative text-right whitespace-nowrap z-[122]">
                • برای مشارکت فردی نیازی به ساخت حساب کاربری نیست.
              </span>
              <span className="flex w-[215px] h-[18px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[18px] text-[#60758a] relative text-right whitespace-nowrap z-[123]">
                • برای مشارکت فردی گواهی مالیاتی صادر نمی‌شود.
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-[798px] flex-col gap-[48px] items-end shrink-0 flex-nowrap relative z-[124]">
          <div className="flex h-[125px] flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap relative z-[125]">
            <span className="h-[31px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[20px] font-bold leading-[31px] text-[#17324d] relative text-right whitespace-nowrap z-[126]">
              درباره پروژه
            </span>
            <span className="flex w-[798px] h-[78px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[15px] font-normal leading-[26px] text-[#60758a] relative text-right z-[127]">
              پروژه اشتغال زنان روستایی با هدف ایجاد مسیر درآمد پایدار برای زنان
              سرپرست خانوار در روستاهای استان گلستان اجرا می‌شود. در این پروژه،
              بهره‌مندان پس از شناسایی و ارزیابی اولیه، در دوره‌های مهارتی و
              کسب‌وکار شرکت می‌کنند، تجهیزات متناسب با فعالیت خود را دریافت
              می‌کنند و از طریق شبکه فروش راهکار سبز به بازارهای محلی و آنلاین
              متصل می‌شوند.
            </span>
          </div>
          <div className="h-px self-stretch shrink-0 bg-[url(/assets/codia/7ZKiS9JxA5.svg)] bg-cover bg-no-repeat relative z-[128]" />
          <div className="flex flex-col gap-[20px] items-end self-stretch shrink-0 flex-nowrap relative z-[129]">
            <span className="flex w-[120px] h-[31px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[20px] font-bold leading-[31px] text-[#17324d] relative text-right whitespace-nowrap z-[130]">
              مسئله و راهکار
            </span>
            <div className="flex gap-[24px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[131]">
              <div className="flex flex-col gap-[12px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[132]">
                <span className="flex w-[70px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#17324d] relative text-right whitespace-nowrap z-[133]">
                  راهکار پروژه
                </span>
                <div className="flex w-[154px] gap-[8px] justify-end items-center shrink-0 flex-nowrap relative z-[134]">
                  <span className="flex w-[132px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[135]">
                    شناسایی زنان واجد شرایط
                  </span>
                  <div className="flex w-[14px] h-[14px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[136]">
                    <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/codia/QXgc8Wnrj0.svg)] bg-cover bg-no-repeat relative z-[137]" />
                  </div>
                </div>
                <div className="flex w-[167px] gap-[8px] justify-end items-center shrink-0 flex-nowrap relative z-[138]">
                  <span className="flex w-[145px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[139]">
                    ارزیابی مهارت و ظرفیت تولید
                  </span>
                  <div className="flex w-[14px] h-[14px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[140]">
                    <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/codia/sSk73sfH1d.svg)] bg-cover bg-no-repeat relative z-[141]" />
                  </div>
                </div>
                <div className="flex w-[197px] gap-[8px] justify-end items-center shrink-0 flex-nowrap relative z-[142]">
                  <span className="flex w-[175px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[143]">
                    آموزش تولید، قیمت‌گذاری و فروش
                  </span>
                  <div className="flex w-[14px] h-[14px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[144]">
                    <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/codia/NynkMZmHen.svg)] bg-cover bg-no-repeat relative z-[145]" />
                  </div>
                </div>
                <div className="flex w-[165px] gap-[8px] justify-end items-center shrink-0 flex-nowrap relative z-[146]">
                  <span className="flex w-[143px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[147]">
                    تأمین تجهیزات ضروری تولید
                  </span>
                  <div className="flex w-[14px] h-[14px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[148]">
                    <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/codia/ifmWKmAAjt.svg)] bg-cover bg-no-repeat relative z-[149]" />
                  </div>
                </div>
                <div className="flex w-[165px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[150]">
                  <span className="flex w-[143px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[151]">
                    توسعه محصول و بسته‌بندی
                  </span>
                  <div className="flex w-[14px] h-[14px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[152]">
                    <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/codia/ydh0wd36Fg.svg)] bg-cover bg-no-repeat relative z-[153]" />
                  </div>
                </div>
                <div className="flex w-[182px] gap-[8px] justify-end items-center shrink-0 flex-nowrap relative z-[154]">
                  <span className="flex w-[160px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[155]">
                    اتصال به بازارهای محلی و آنلاین
                  </span>
                  <div className="flex w-[14px] h-[14px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[156]">
                    <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/codia/CsdjrV0zPq.svg)] bg-cover bg-no-repeat relative z-[157]" />
                  </div>
                </div>
                <div className="flex w-[182px] gap-[8px] justify-end items-center shrink-0 flex-nowrap relative z-[158]">
                  <span className="flex w-[160px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[159]">
                    پایش درآمد و اشتغال ایجادشده
                  </span>
                  <div className="flex w-[14px] h-[14px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[160]">
                    <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/codia/mSLyOsuNkH.svg)] bg-cover bg-no-repeat relative z-[161]" />
                  </div>
                </div>
                <div className="flex w-[178px] gap-[8px] justify-end items-center shrink-0 flex-nowrap relative z-[162]">
                  <span className="flex w-[156px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[163]">
                    گزارش‌دهی مستمر اثر اجتماعی
                  </span>
                  <div className="flex w-[14px] h-[14px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[164]">
                    <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/codia/c5Bhtt7N8T.svg)] bg-cover bg-no-repeat relative z-[165]" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[12px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[166]">
                <span className="flex w-[94px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#17324d] relative text-right whitespace-nowrap z-[167]">
                  مسئله مورد نظر
                </span>
                <span className="flex w-[387px] h-[96px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[14px] font-normal leading-[24px] text-[#60758a] relative text-right z-[168]">
                  عدم دسترسی زنان سرپرست خانوار روستایی به آموزش‌های شغلی
                  پایدار، فقدان ابزار و تجهیزات تولید استاندارد، ناتوانی در
                  تجاری‌سازی، بسته‌بندی، قیمت‌گذاری صحیح و نبود مسیرهای پایدار
                  برای حضور در بازارهای گسترده‌تر ملی و شهری.
                </span>
              </div>
            </div>
          </div>
          <div className="h-px self-stretch shrink-0 bg-[url(/assets/codia/x1QooddVoE.svg)] bg-cover bg-no-repeat relative z-[169]" />
          <div className="flex flex-col gap-[20px] items-end self-stretch shrink-0 flex-nowrap relative z-[170]">
            <div className="flex flex-col gap-[6px] items-end self-stretch shrink-0 flex-nowrap relative z-[171]">
              <span className="h-[31px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[20px] font-bold leading-[31px] text-[#17324d] relative text-right whitespace-nowrap z-[172]">
                اثر اجتماعی مورد انتظار
              </span>
              <span className="h-[20px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[173]">
                شاخص‌های زیر پیش از شروع پروژه تعریف و توسط خانه خلاق بررسی
                شده‌اند.
              </span>
            </div>
            <div className="flex h-[100px] pt-0 pr-0 pb-0 pl-0 gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[174]" />
            <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[12px] relative z-[175]">
              <div className="flex flex-col gap-[2px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[176]">
                <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[177]">
                  سنجش نتایج پس از شروع اجرای پروژه انجام می‌شود
                </span>
                <span className="h-[19px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[178]">
                  مقادیر تحقق‌یافته پس از ثبت گزارش و تأیید خانه خلاق در همین
                  بخش منتشر خواهند شد.
                </span>
              </div>
              <div className="flex w-[18px] h-[18px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[179]">
                <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/codia/GUhhmgtL2C.svg)] bg-cover bg-no-repeat relative z-[180]" />
              </div>
            </div>
          </div>
          <div className="h-px self-stretch shrink-0 bg-[url(/assets/codia/LOiFt4T9SF.svg)] bg-cover bg-no-repeat relative z-[181]" />
          <div className="flex flex-col gap-[20px] items-end self-stretch shrink-0 flex-nowrap relative z-[182]">
            <span className="flex w-[82px] h-[31px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[20px] font-bold leading-[31px] text-[#17324d] relative text-right whitespace-nowrap z-[183]">
              برنامه اجرا
            </span>
            <div className="flex gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[184]">
              <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col gap-[4px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[185]">
                <span className="flex w-[90px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[186]">
                  پایش و گزارش اثر
                </span>
                <span className="flex w-[43px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[187]">
                  ماه ۱۱ و ۱۲
                </span>
                <span className="flex w-[37px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-medium leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[188]">
                  در انتظار
                </span>
              </div>
              <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col gap-[4px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[189]">
                <span className="flex w-[68px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[190]">
                  اتصال به بازار
                </span>
                <span className="flex w-[44px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[191]">
                  ماه ۸ تا ۱۰
                </span>
                <span className="flex w-[37px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-medium leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[192]">
                  در انتظار
                </span>
              </div>
              <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col gap-[4px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[193]">
                <span className="flex w-[78px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[194]">
                  تجهیز و توسعه
                </span>
                <span className="flex w-[43px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[195]">
                  ماه ۵ تا ۷
                </span>
                <span className="flex w-[37px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-medium leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[196]">
                  در انتظار
                </span>
              </div>
              <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col gap-[4px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[197]">
                <span className="flex w-[73px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[198]">
                  آموزش مهارتی
                </span>
                <span className="flex w-[42px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[199]">
                  ماه ۲ تا ۴
                </span>
                <span className="flex w-[37px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-medium leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[200]">
                  در انتظار
                </span>
              </div>
              <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col gap-[4px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#eaf5fd] rounded-[12px] border-solid border border-[#2094e3] relative z-[201]">
                <span className="flex w-[94px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#2094e3] relative text-right whitespace-nowrap z-[202]">
                  شناسایی و ارزیابی
                </span>
                <span className="flex w-[32px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[203]">
                  ماه اول
                </span>
                <span className="flex w-[50px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-medium leading-[17px] text-[#159455] relative text-right whitespace-nowrap z-[204]">
                  آماده شروع
                </span>
              </div>
            </div>
          </div>
          <div className="h-px self-stretch shrink-0 bg-[url(/assets/codia/h2T2bG6Dgx.svg)] bg-cover bg-no-repeat relative z-[205]" />
          <div className="flex flex-col gap-[20px] items-end self-stretch shrink-0 flex-nowrap relative z-[206]">
            <span className="h-[31px] shrink-0 basis-auto font-['Vazirmatn'] text-[20px] font-bold leading-[31px] text-[#17324d] relative text-left whitespace-nowrap z-[207]">
              {" "}
              پرداخت مرحله‌ای
            </span>
            <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[208]">
              <span className="flex w-[721px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[22px] text-[#60758a] relative text-right whitespace-nowrap z-[209]">
                منابع پروژه براساس تحقق شاخص‌های هر مرحله و پس از تأیید خانه
                خلاق و نوآوری آینه، توسط کمیته امداد به استارتاپ مجری پرداخت
                می‌شود.
              </span>
              <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[210]">
                <div className="flex pt-[8px] pr-0 pb-[8px] pl-0 justify-between items-center self-stretch shrink-0 flex-nowrap border-solid border-t border-t-[#e4ebf1] relative z-[211]">
                  <span className="flex w-[90px] h-[20px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#17324d] relative text-center whitespace-nowrap z-[212]">
                    در انتظار شروع
                  </span>
                  <span className="flex w-[48px] h-[20px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-center whitespace-nowrap z-[213]">
                    ۲۰٪
                  </span>
                  <span className="flex w-[430px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[214]">
                    شناسایی ۴۵۰ بهره‌مند واجد شرایط
                  </span>
                  <span className="flex w-[90px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[215]">
                    مرحله اول
                  </span>
                </div>
                <div className="flex pt-[8px] pr-0 pb-[8px] pl-0 justify-between items-center self-stretch shrink-0 flex-nowrap border-solid border-t border-t-[#e4ebf1] relative z-[216]">
                  <span className="flex w-[90px] h-[20px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#60758a] relative text-center whitespace-nowrap z-[217]">
                    قفل‌شده
                  </span>
                  <span className="flex w-[48px] h-[20px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-center whitespace-nowrap z-[218]">
                    ۲۵٪
                  </span>
                  <span className="flex w-[430px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[219]">
                    تکمیل آموزش ۹۰٪ افراد انتخاب‌شده
                  </span>
                  <span className="flex w-[90px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[220]">
                    مرحله دوم
                  </span>
                </div>
                <div className="flex pt-[8px] pr-0 pb-[8px] pl-0 justify-between items-center self-stretch shrink-0 flex-nowrap border-solid border-t border-t-[#e4ebf1] relative z-[221]">
                  <span className="flex w-[90px] h-[20px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#60758a] relative text-center whitespace-nowrap z-[222]">
                    قفل‌شده
                  </span>
                  <span className="flex w-[48px] h-[20px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-center whitespace-nowrap z-[223]">
                    ۲۵٪
                  </span>
                  <span className="flex w-[430px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[224]">
                    تجهیز کارگاهی ۳۶۰ بهره‌مند واجد شرایط
                  </span>
                  <span className="flex w-[90px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[225]">
                    مرحله سوم
                  </span>
                </div>
                <div className="flex pt-[8px] pr-0 pb-[8px] pl-0 justify-between items-center self-stretch shrink-0 flex-nowrap border-solid border-t border-t-[#e4ebf1] relative z-[226]">
                  <span className="flex w-[90px] h-[20px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#60758a] relative text-center whitespace-nowrap z-[227]">
                    قفل‌شده
                  </span>
                  <span className="flex w-[48px] h-[20px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-center whitespace-nowrap z-[228]">
                    ۲۰٪
                  </span>
                  <span className="flex w-[430px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[229]">
                    اتصال ۳۰۰ تولیدکننده به زنجیره فروش
                  </span>
                  <span className="flex w-[90px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[230]">
                    مرحله چهارم
                  </span>
                </div>
                <div className="flex pt-[8px] pr-0 pb-[8px] pl-0 justify-between items-center self-stretch shrink-0 flex-nowrap border-solid border-t border-t-[#e4ebf1] relative z-[231]">
                  <span className="flex w-[90px] h-[20px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#60758a] relative text-center whitespace-nowrap z-[232]">
                    قفل‌شده
                  </span>
                  <span className="flex w-[48px] h-[20px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-center whitespace-nowrap z-[233]">
                    ۱۰٪
                  </span>
                  <span className="flex w-[430px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[234]">
                    تأیید نتایج اشتغال پایدار پس از ۶ ماه
                  </span>
                  <span className="flex w-[90px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[235]">
                    مرحله نهایی
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="h-px self-stretch shrink-0 bg-[url(/assets/codia/qv4aHvPwNH.svg)] bg-cover bg-no-repeat relative z-[236]" />
          <div className="flex flex-col gap-[20px] items-end self-stretch shrink-0 flex-nowrap relative z-[237]">
            <span className="flex w-[150px] h-[31px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[20px] font-bold leading-[31px] text-[#17324d] relative text-right whitespace-nowrap z-[238]">
              برنامه مصرف منابع
            </span>
            <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[16px] items-end self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[239]">
              <div className="flex flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap relative z-[240]">
                <div className="flex gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[241]">
                  <span className="flex w-[40px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[242]">
                    ۳۵٪
                  </span>
                  <div className="flex w-[300px] h-[8px] justify-end items-start shrink-0 flex-nowrap bg-[#e4ebf1] rounded-[4px] relative overflow-hidden z-[243]">
                    <div className="w-[280px] self-stretch shrink-0 bg-[#2094e3] relative z-[244]" />
                  </div>
                  <span className="flex w-[180px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[245]">
                    آموزش و توانمندسازی
                  </span>
                </div>
                <div className="flex gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[246]">
                  <span className="flex w-[40px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[247]">
                    ۳۰٪
                  </span>
                  <div className="flex w-[300px] h-[8px] justify-end items-start shrink-0 flex-nowrap bg-[#e4ebf1] rounded-[4px] relative overflow-hidden z-[248]">
                    <div className="w-[240px] self-stretch shrink-0 bg-[#15b2c1] relative z-[249]" />
                  </div>
                  <span className="flex w-[180px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[250]">
                    تجهیزات تولید کارگاهی
                  </span>
                </div>
                <div className="flex gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[251]">
                  <span className="flex w-[40px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[252]">
                    ۱۵٪
                  </span>
                  <div className="flex w-[300px] h-[8px] justify-end items-start shrink-0 flex-nowrap bg-[#e4ebf1] rounded-[4px] relative overflow-hidden z-[253]">
                    <div className="w-[120px] self-stretch shrink-0 bg-[#c5a056] relative z-[254]" />
                  </div>
                  <span className="flex w-[180px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[255]">
                    توسعه محصول و بسته‌بندی
                  </span>
                </div>
                <div className="flex gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[256]">
                  <span className="flex w-[40px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[257]">
                    ۱۰٪
                  </span>
                  <div className="flex w-[300px] h-[8px] justify-end items-start shrink-0 flex-nowrap bg-[#e4ebf1] rounded-[4px] relative overflow-hidden z-[258]">
                    <div className="w-[80px] self-stretch shrink-0 bg-[#c27a10] relative z-[259]" />
                  </div>
                  <span className="flex w-[180px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[260]">
                    اتصال به بازار و فروش
                  </span>
                </div>
                <div className="flex gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[261]">
                  <span className="flex w-[40px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[262]">
                    ۵٪
                  </span>
                  <div className="flex w-[300px] h-[8px] justify-end items-start shrink-0 flex-nowrap bg-[#e4ebf1] rounded-[4px] relative overflow-hidden z-[263]">
                    <div className="w-[40px] self-stretch shrink-0 bg-[#159455] relative z-[264]" />
                  </div>
                  <span className="flex w-[180px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[265]">
                    پایش و سنجش اثر
                  </span>
                </div>
                <div className="flex gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[266]">
                  <span className="flex w-[40px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[267]">
                    ۵٪
                  </span>
                  <div className="flex w-[300px] h-[8px] justify-end items-start shrink-0 flex-nowrap bg-[#e4ebf1] rounded-[4px] relative overflow-hidden z-[268]">
                    <div className="w-[40px] self-stretch shrink-0 bg-[#92a1bf] relative z-[269]" />
                  </div>
                  <span className="flex w-[180px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#17324d] relative text-right whitespace-nowrap z-[270]">
                    گزارش‌دهی و پشتیبانی اجرا
                  </span>
                </div>
              </div>
              <span className="h-[17px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[271]">
                این ارقام برنامه مصوب مصرف منابع هستند. مبالغ عملکرد واقعی پس از
                ثبت و تأیید گزارش‌های مالی منتشر می‌شوند.
              </span>
            </div>
          </div>
          <div className="h-px self-stretch shrink-0 bg-[url(/assets/codia/TO0Kpoie0J.svg)] bg-cover bg-no-repeat relative z-[272]" />
          <div className="flex flex-col gap-[20px] items-end self-stretch shrink-0 flex-nowrap relative z-[273]">
            <span className="flex w-[203px] h-[31px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[20px] font-bold leading-[31px] text-[#17324d] relative text-right whitespace-nowrap z-[274]">
              مسیر مشارکت تا ایجاد اثر
            </span>
            <div className="flex gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[275]">
              <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col gap-[4px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fcfbf8] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[276]">
                <div className="flex w-[24px] h-[24px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[277]">
                  <span className="h-[17px] shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-bold leading-[17px] text-[#fff] relative text-left whitespace-nowrap z-[278]">
                    ۶
                  </span>
                </div>
                <span className="flex w-[69px] h-[17px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-bold leading-[17px] text-[#17324d] relative text-center whitespace-nowrap z-[279]">
                  گزارش نهایی اثر
                </span>
              </div>
              <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col gap-[4px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fcfbf8] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[280]">
                <div className="flex w-[24px] h-[24px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[281]">
                  <span className="h-[17px] shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-bold leading-[17px] text-[#fff] relative text-left whitespace-nowrap z-[282]">
                    ۵
                  </span>
                </div>
                <span className="flex w-[88px] h-[17px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-bold leading-[17px] text-[#17324d] relative text-center whitespace-nowrap z-[283]">
                  تأیید KPI خانه خلاق
                </span>
              </div>
              <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col gap-[4px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fcfbf8] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[284]">
                <div className="flex w-[24px] h-[24px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[285]">
                  <span className="h-[17px] shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-bold leading-[17px] text-[#fff] relative text-left whitespace-nowrap z-[286]">
                    ۴
                  </span>
                </div>
                <span className="flex w-[79px] h-[17px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-bold leading-[17px] text-[#17324d] relative text-center whitespace-nowrap z-[287]">
                  اجرای مرحله پروژه
                </span>
              </div>
              <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col gap-[4px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fcfbf8] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[288]">
                <div className="flex w-[24px] h-[24px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[289]">
                  <span className="h-[17px] shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-bold leading-[17px] text-[#fff] relative text-left whitespace-nowrap z-[290]">
                    ۳
                  </span>
                </div>
                <span className="flex w-[93px] h-[17px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-bold leading-[17px] text-[#17324d] relative text-center whitespace-nowrap z-[291]">
                  واریز به حساب کمیته
                </span>
              </div>
              <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col gap-[4px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fcfbf8] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[292]">
                <div className="flex w-[24px] h-[24px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[293]">
                  <span className="h-[17px] shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-bold leading-[17px] text-[#fff] relative text-left whitespace-nowrap z-[294]">
                    ۲
                  </span>
                </div>
                <span className="flex w-[57px] h-[17px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-bold leading-[17px] text-[#17324d] relative text-center whitespace-nowrap z-[295]">
                  ثبت مشارکت
                </span>
              </div>
              <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col gap-[4px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fcfbf8] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[296]">
                <div className="flex w-[24px] h-[24px] flex-col justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[297]">
                  <span className="h-[17px] shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-bold leading-[17px] text-[#fff] relative text-left whitespace-nowrap z-[298]">
                    ۱
                  </span>
                </div>
                <span className="flex w-[55px] h-[17px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-bold leading-[17px] text-[#17324d] relative text-center whitespace-nowrap z-[299]">
                  انتخاب پروژه
                </span>
              </div>
            </div>
          </div>
          <div className="h-px self-stretch shrink-0 bg-[url(/assets/codia/SkV1YWxyBh.svg)] bg-cover bg-no-repeat relative z-[300]" />
          <div className="flex flex-col gap-[20px] items-end self-stretch shrink-0 flex-nowrap relative z-[301]">
            <span className="flex w-[123px] h-[31px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[20px] font-bold leading-[31px] text-[#17324d] relative text-right whitespace-nowrap z-[302]">
              استارتاپ مجری
            </span>
            <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[16px] items-end self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[24px] border-solid border border-[#e4ebf1] relative z-[303]">
              <div className="flex w-[259px] justify-between items-center shrink-0 flex-nowrap relative z-[304]">
                <div className="flex w-[255px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[305]">
                  <div className="flex w-[187px] flex-col gap-[2px] items-end shrink-0 flex-nowrap relative z-[306]">
                    <span className="flex w-[68px] h-[25px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#17324d] relative text-right whitespace-nowrap z-[307]">
                      راهکار سبز
                    </span>
                    <span className="flex w-[187px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[308]">
                      حوزه فعالیت: اشتغال و توسعه روستایی
                    </span>
                  </div>
                  <img
                    className="w-[56px] h-[56px] shrink-0 object-cover rounded-[12px] relative z-[309]"
                    src="/assets/codia/m84DzzyvgY.png"
                    alt="نشان راهکار سبز"
                  />
                </div>
              </div>
              <div className="flex gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[310]">
                <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col gap-[4px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fcfbf8] rounded-[12px] relative z-[311]">
                  <span className="flex w-[81px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[312]">
                    میانگین تحقق KPI
                  </span>
                  <span className="flex w-[23px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[313]">
                    ۸۶٪
                  </span>
                </div>
                <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col gap-[4px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fcfbf8] rounded-[12px] relative z-[314]">
                  <span className="flex w-[55px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[315]">
                    افراد بهره‌مند
                  </span>
                  <span className="flex w-[55px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[316]">
                    ۲٬۸۴۰ نفر
                  </span>
                </div>
                <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col gap-[4px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fcfbf8] rounded-[12px] relative z-[317]">
                  <span className="flex w-[90px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[318]">
                    پروژه‌های تکمیل‌شده
                  </span>
                  <span className="flex w-[41px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[319]">
                    ۳ پروژه
                  </span>
                </div>
                <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col gap-[4px] items-center grow shrink-0 basis-0 flex-nowrap bg-[#fcfbf8] rounded-[12px] relative z-[320]">
                  <span className="flex w-[37px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[321]">
                    موقعیت
                  </span>
                  <span className="flex w-[80px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[322]">
                    گرگان، گلستان
                  </span>
                </div>
              </div>
              <span className="flex w-[750px] h-[44px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[22px] text-[#60758a] relative text-right z-[323]">
                راهکار سبز یک استارتاپ پیشرو در زمینه توانمندسازی و اشتغال‌زایی
                روستایی است که از سال ۱۴۰۱ فعالیت خود را با تمرکز بر زنجیره ارزش
                صنایع دستی و محصولات کشاورزی آغاز کرده است.
              </span>
              <div className="flex w-[185px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[324]">
                <span className="flex w-[145px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#2094e3] relative text-center whitespace-nowrap z-[325]">
                  مشاهده پروفایل استارتاپ
                </span>
              </div>
            </div>
          </div>
          <div className="h-px self-stretch shrink-0 bg-[url(/assets/codia/jRO8CTcqWn.svg)] bg-cover bg-no-repeat relative z-[326]" />
          <div className="flex flex-col gap-[20px] items-end self-stretch shrink-0 flex-nowrap relative z-[327]">
            <span className="flex w-[270px] h-[31px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[20px] font-bold leading-[31px] text-[#17324d] relative text-right whitespace-nowrap z-[328]">
              جامعه هدف و محدوده جغرافیایی
            </span>
            <div className="flex gap-[24px] items-start self-stretch shrink-0 flex-nowrap relative z-[329]">
              <div className="flex flex-col gap-[12px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[330]">
                <span className="flex w-[120px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#17324d] relative text-right whitespace-nowrap z-[331]">
                  محدوده اجرای پروژه
                </span>
                <span className="flex w-[387px] h-[44px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[14px] font-normal leading-[22px] text-[#60758a] relative text-right z-[332]">
                  استان گلستان، ۵ شهرستان مخلتف شامل گرگان، آق‌قلا، گنبدکاووس،
                  علی‌آباد و کردکوی، پوشش جامع در سطح ۲۵ روستا.
                </span>
              </div>
              <div className="flex flex-col gap-[12px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[333]">
                <span className="flex w-[161px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#17324d] relative text-right whitespace-nowrap z-[334]">
                  شرایط پذیرش جامعه هدف
                </span>
                <div className="flex w-[163px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[335]">
                  <span className="flex w-[149px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[336]">
                    زنان سرپرست خانوار روستایی
                  </span>
                  <div className="flex w-[6px] h-[6px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[337]">
                    <div className="w-[6px] h-[6px] shrink-0 bg-[url(/assets/codia/m4kgy8OhmX.svg)] bg-cover bg-no-repeat relative z-[338]" />
                  </div>
                </div>
                <div className="flex w-[153px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[339]">
                  <span className="flex w-[139px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[340]">
                    محدوده سنی ۲۰ تا ۵۵ سال
                  </span>
                  <div className="flex w-[6px] h-[6px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[341]">
                    <div className="w-[6px] h-[6px] shrink-0 bg-[url(/assets/codia/st8AKResGa.svg)] bg-cover bg-no-repeat relative z-[342]" />
                  </div>
                </div>
                <div className="flex w-[280px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[343]">
                  <span className="flex w-[266px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[344]">
                    دارای مهارت تولید پایه یا علاقه به کسب مهارتی جدید
                  </span>
                  <div className="flex w-[6px] h-[6px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[345]">
                    <div className="w-[6px] h-[6px] shrink-0 bg-[url(/assets/codia/98h1e8G8ym.svg)] bg-cover bg-no-repeat relative z-[346]" />
                  </div>
                </div>
                <div className="flex w-[239px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[347]">
                  <span className="flex w-[225px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[348]">
                    ساکن در یکی از روستاهای تحت پوشش طرح
                  </span>
                  <div className="flex w-[6px] h-[6px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[349]">
                    <div className="w-[6px] h-[6px] shrink-0 bg-[url(/assets/codia/4J11Ra3s4h.svg)] bg-cover bg-no-repeat relative z-[350]" />
                  </div>
                </div>
                <div className="flex w-[183px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[351]">
                  <span className="flex w-[169px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[352]">
                    متقاضی راه‌اندازی کسب‌وکار پایدار
                  </span>
                  <div className="flex w-[6px] h-[6px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[353]">
                    <div className="w-[6px] h-[6px] shrink-0 bg-[url(/assets/codia/rRSP9YTYkX.svg)] bg-cover bg-no-repeat relative z-[354]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-px self-stretch shrink-0 bg-[url(/assets/codia/R7082h4Pzd.svg)] bg-cover bg-no-repeat relative z-[355]" />
          <div className="flex flex-col gap-[20px] items-end self-stretch shrink-0 flex-nowrap relative z-[356]">
            <span className="flex w-[249px] h-[31px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[20px] font-bold leading-[31px] text-[#17324d] relative text-right whitespace-nowrap z-[357]">
              گزارش‌ها و آخرین به‌روزرسانی‌ها
            </span>
            <div className="flex pt-[40px] pr-[40px] pb-[40px] pl-[40px] flex-col gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[358]">
              <div className="flex w-[32px] h-[32px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[359]">
                <div className="w-[32px] h-[32px] shrink-0 bg-[url(/assets/codia/4y2JnOHE13.svg)] bg-cover bg-no-repeat relative z-[360]" />
              </div>
              <span className="flex w-[185px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#17324d] relative text-right whitespace-nowrap z-[361]">
                هنوز گزارشی منتشر نشده است
              </span>
              <span className="flex w-[440px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[362]">
                پس از شروع پروژه، گزارش‌های مرحله‌ای و نتایج تأییدشده در این بخش
                منتشر می‌شوند.
              </span>
            </div>
          </div>
          <div className="h-px self-stretch shrink-0 bg-[url(/assets/codia/QWRC232t1c.svg)] bg-cover bg-no-repeat relative z-[363]" />
          <div className="flex flex-col gap-[20px] items-end self-stretch shrink-0 flex-nowrap relative z-[364]">
            <span className="flex w-[195px] h-[31px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[20px] font-bold leading-[31px] text-[#17324d] relative text-right whitespace-nowrap z-[365]">
              پرسش‌های متداول پروژه
            </span>
            <div className="flex flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap relative z-[366]">
              <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[367]">
                <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[368]">
                  <div className="flex w-[14px] h-[14px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[369]">
                    <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/codia/y4jn7NbJOO.svg)] bg-cover bg-no-repeat relative z-[370]" />
                  </div>
                  <span className="flex w-[225px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[371]">
                    مشارکت‌ها به چه حسابی واریز می‌شوند؟
                  </span>
                </div>
                <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[22px] text-[#60758a] relative text-right whitespace-nowrap z-[372]">
                  تمام مشارکت‌های نقدی در سامانه ماه مستقیماً به حساب رسمی و تحت
                  نظارت کامل کمیته امداد امام خمینی (ره) واریز می‌شود.
                </span>
              </div>
              <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col items-end self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[373]">
                <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[374]">
                  <div className="flex w-[14px] h-[14px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[375]">
                    <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/codia/tT6D9oGLRq.svg)] bg-cover bg-no-repeat relative z-[376]" />
                  </div>
                  <span className="flex w-[293px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[377]">
                    منابع مالی چه زمانی در اختیار استارتاپ قرار می‌گیرند؟
                  </span>
                </div>
              </div>
              <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col items-end self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[378]">
                <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[379]">
                  <div className="flex w-[14px] h-[14px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[380]">
                    <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/codia/AhvjBvbJmj.svg)] bg-cover bg-no-repeat relative z-[381]" />
                  </div>
                  <span className="flex w-[272px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[382]">
                    آیا مشارکت فردی نیازمند ثبت‌نام در سامانه است؟
                  </span>
                </div>
              </div>
              <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col items-end self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative z-[383]">
                <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[384]">
                  <div className="flex w-[14px] h-[14px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[385]">
                    <div className="w-[14px] h-[14px] shrink-0 bg-[url(/assets/codia/X1pKdS7Gyk.svg)] bg-cover bg-no-repeat relative z-[386]" />
                  </div>
                  <span className="flex w-[307px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[387]">
                    آیا برای مشارکت‌های فردی گواهی مالیاتی صادر می‌شود؟
                  </span>
                </div>
              </div>
            </div>
            <span className="flex w-[154px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#2094e3] relative text-right underline whitespace-nowrap z-[388]">
              مشاهده همه سؤالات متداول
            </span>
          </div>
        </div>
      </div>
      <div className="flex pt-[80px] pr-[120px] pb-[80px] pl-[120px] flex-col gap-[40px] items-end self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] border-solid border-b border-b-[#e4ebf1] relative z-[389]">
        <div className="flex flex-col gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-[390]">
          <span className="flex w-[182px] h-[44px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[28px] font-extrabold leading-[43.75px] text-[#17324d] relative text-center whitespace-nowrap z-[391]">
            پروژه‌های مشابه
          </span>
          <span className="flex w-[346px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-center whitespace-nowrap z-[392]">
            سایر پروژه‌های اثر اجتماعی فعال در حوزه اشتغال و توانمندسازی
          </span>
        </div>
        <div className="flex gap-[24px] items-start self-stretch shrink-0 flex-nowrap relative z-[393]">
          <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[20px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fcfbf8] rounded-[24px] border-solid border border-[#e4ebf1] relative z-[394]">
            <img
              className="h-[180px] self-stretch shrink-0 object-cover rounded-[16px] relative overflow-hidden z-[395]"
              src="/assets/codia/xkhGZiM7zx.webp"
              alt="محصولات تولیدشده در پروژه اشتغال زنان روستایی"
            />
            <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[396]">
              <div className="flex gap-[8px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[397]">
                <span className="flex w-[114px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[398]">
                  حوزه: اشتغال و معیشت
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[399]">
                  |
                </span>
                <span className="flex w-[133px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[400]">
                  استان: سیستان و بلوچستان
                </span>
              </div>
              <span className="h-[28px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#17324d] relative text-right whitespace-nowrap z-[401]">
                توسعه فروش صنایع‌دستی روستایی
              </span>
            </div>
            <div className="flex flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap relative z-[402]">
              <div className="flex gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[403]">
                <div className="flex flex-col gap-[2px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[404]">
                  <span className="flex w-[51px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[405]">
                    شاخص اول
                  </span>
                  <span className="flex w-[53px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[406]">
                    ۶۰ فرصت
                  </span>
                </div>
                <div className="flex flex-col gap-[2px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[407]">
                  <span className="flex w-[53px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[408]">
                    شاخص دوم
                  </span>
                  <span className="flex w-[69px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[409]">
                    ۲۵۰ بهره‌مند
                  </span>
                </div>
              </div>
              <div className="flex gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[410]">
                <div className="flex flex-col gap-[2px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[411]">
                  <span className="flex w-[35px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[412]">
                    محدوده
                  </span>
                  <span className="flex w-[49px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[413]">
                    ۱۸ روستا
                  </span>
                </div>
                <div className="flex flex-col gap-[2px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[414]">
                  <span className="flex w-[37px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[415]">
                    اثر هدف
                  </span>
                  <span className="flex w-[57px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[416]">
                    ۲۵٪ درآمد
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[417]">
              <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[418]">
                <span className="flex w-[52px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[419]">
                  هدف پروژه
                </span>
                <span className="flex w-[88px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#17324d] relative text-right whitespace-nowrap z-[420]">
                  ۳۵۰ میلیون تومان
                </span>
              </div>
              <div className="flex h-[8px] justify-end items-start self-stretch shrink-0 flex-nowrap bg-[#e4ebf1] rounded-[4px] relative overflow-hidden z-[421]">
                <div className="w-[180px] self-stretch shrink-0 bg-[#2094e3] relative z-[422]" />
              </div>
            </div>
            <div className="flex justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[423]">
              <div className="flex pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center grow shrink-0 basis-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[424]">
                <span className="flex w-[107px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[425]">
                  مشاهده و مشارکت
                </span>
              </div>
            </div>
          </div>
          <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[20px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fcfbf8] rounded-[24px] border-solid border border-[#e4ebf1] relative z-[426]">
            <img
              className="h-[180px] self-stretch shrink-0 object-cover rounded-[16px] relative overflow-hidden z-[427]"
              src="/assets/codia/k38ngLiS1o.webp"
              alt="آموزش مهارت به زنان روستایی"
            />
            <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[428]">
              <div className="flex gap-[8px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[429]">
                <span className="flex w-[95px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[430]">
                  حوزه: معیشت پایدار
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[431]">
                  |
                </span>
                <span className="flex w-[61px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[432]">
                  استان: فارس
                </span>
              </div>
              <span className="h-[28px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#17324d] relative text-right whitespace-nowrap z-[433]">
                زنجیره تأمین مشاغل خانگی
              </span>
            </div>
            <div className="flex flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap relative z-[434]">
              <div className="flex gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[435]">
                <div className="flex flex-col gap-[2px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[436]">
                  <span className="flex w-[51px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[437]">
                    شاخص اول
                  </span>
                  <span className="flex w-[59px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[438]">
                    ۱۸۰ فرصت
                  </span>
                </div>
                <div className="flex flex-col gap-[2px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[439]">
                  <span className="flex w-[53px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[440]">
                    شاخص دوم
                  </span>
                  <span className="flex w-[57px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[441]">
                    ۶۲۰ خانوار
                  </span>
                </div>
              </div>
              <div className="flex gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[442]">
                <div className="flex flex-col gap-[2px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[443]">
                  <span className="flex w-[35px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[444]">
                    محدوده
                  </span>
                  <span className="flex w-[41px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[445]">
                    ۱۵ شهر
                  </span>
                </div>
                <div className="flex flex-col gap-[2px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[446]">
                  <span className="flex w-[37px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[447]">
                    اثر هدف
                  </span>
                  <span className="flex w-[65px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[448]">
                    ۲۵٪ کاهش
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[449]">
              <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[450]">
                <span className="flex w-[52px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[451]">
                  هدف پروژه
                </span>
                <span className="flex w-[88px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#17324d] relative text-right whitespace-nowrap z-[452]">
                  ۳۵۰ میلیون تومان
                </span>
              </div>
              <div className="flex h-[8px] justify-end items-start self-stretch shrink-0 flex-nowrap bg-[#e4ebf1] rounded-[4px] relative overflow-hidden z-[453]">
                <div className="w-[180px] self-stretch shrink-0 bg-[#2094e3] relative z-[454]" />
              </div>
            </div>
            <div className="flex justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[455]">
              <div className="flex pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center grow shrink-0 basis-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[456]">
                <span className="flex w-[107px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[457]">
                  مشاهده و مشارکت
                </span>
              </div>
            </div>
          </div>
          <div className="flex pt-[24px] pr-[24px] pb-[24px] pl-[24px] flex-col gap-[20px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fcfbf8] rounded-[24px] border-solid border border-[#e4ebf1] relative z-[458]">
            <img
              className="h-[180px] self-stretch shrink-0 object-cover rounded-[16px] relative overflow-hidden z-[459]"
              src="/assets/codia/RR9PzHGgQe.webp"
              alt="عرضه محصولات محلی زنان روستایی"
            />
            <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[460]">
              <div className="flex gap-[8px] justify-end items-center self-stretch shrink-0 flex-nowrap relative z-[461]">
                <span className="flex w-[103px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[462]">
                  حوزه: آموزش و مهارتی
                </span>
                <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[463]">
                  |
                </span>
                <span className="flex w-[71px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[464]">
                  استان: اصفهان
                </span>
              </div>
              <span className="h-[28px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#17324d] relative text-right whitespace-nowrap z-[465]">
                آموزش کسب‌وکار زنان محلی
              </span>
            </div>
            <div className="flex flex-col gap-[12px] items-end self-stretch shrink-0 flex-nowrap relative z-[466]">
              <div className="flex gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[467]">
                <div className="flex flex-col gap-[2px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[468]">
                  <span className="flex w-[51px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[469]">
                    شاخص اول
                  </span>
                  <span className="flex w-[53px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[470]">
                    ۹۰ فرصت
                  </span>
                </div>
                <div className="flex flex-col gap-[2px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[471]">
                  <span className="flex w-[53px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[472]">
                    شاخص دوم
                  </span>
                  <span className="flex w-[68px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[473]">
                    ۳۵۰ نوجوان
                  </span>
                </div>
              </div>
              <div className="flex gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[474]">
                <div className="flex flex-col gap-[2px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[475]">
                  <span className="flex w-[35px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[476]">
                    محدوده
                  </span>
                  <span className="flex w-[54px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[477]">
                    ۱۲ مدرسه
                  </span>
                </div>
                <div className="flex flex-col gap-[2px] items-end grow shrink-0 basis-0 flex-nowrap relative z-[478]">
                  <span className="flex w-[37px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-normal leading-[17px] text-[#60758a] relative text-right whitespace-nowrap z-[479]">
                    اثر هدف
                  </span>
                  <span className="flex w-[66px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#17324d] relative text-right whitespace-nowrap z-[480]">
                    ۷۰٪ افزایش
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[481]">
              <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[482]">
                <span className="flex w-[52px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-right whitespace-nowrap z-[483]">
                  هدف پروژه
                </span>
                <span className="flex w-[88px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#17324d] relative text-right whitespace-nowrap z-[484]">
                  ۳۵۰ میلیون تومان
                </span>
              </div>
              <div className="flex h-[8px] justify-end items-start self-stretch shrink-0 flex-nowrap bg-[#e4ebf1] rounded-[4px] relative overflow-hidden z-[485]">
                <div className="w-[180px] self-stretch shrink-0 bg-[#2094e3] relative z-[486]" />
              </div>
            </div>
            <div className="flex justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[487]">
              <div className="flex pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center grow shrink-0 basis-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[488]">
                <span className="flex w-[107px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[489]">
                  مشاهده و مشارکت
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex pt-[80px] pr-[120px] pb-[80px] pl-[120px] flex-col gap-[24px] items-center self-stretch shrink-0 flex-nowrap bg-[#fcfbf8] border-solid border-t border-t-[#e4ebf1] border-solid border-b border-b-[#e4ebf1] relative z-[490]">
        <span className="flex w-[455px] h-[44px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[28px] font-extrabold leading-[43.75px] text-[#17324d] relative text-center whitespace-nowrap z-[491]">
          با یک مشارکت، بخشی از این مسیر باشید
        </span>
        <span className="flex w-[700px] h-[44px] justify-center items-start shrink-0 font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#60758a] relative text-center z-[492]">
          مشارکت شما به حساب رسمی کمیته امداد واریز می‌شود و اجرای پروژه براساس
          KPIهای تأییدشده مرحله‌به‌مرحله قابل پیگیری خواهد بود.
        </span>
        <div className="flex w-[319px] gap-[16px] items-start shrink-0 flex-nowrap relative z-[493]">
          <div className="flex w-[170px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[494]">
            <span className="flex w-[130px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#2094e3] relative text-center whitespace-nowrap z-[495]">
              مشاهده پروژه‌های دیگر
            </span>
          </div>
          <div className="flex w-[133px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[496]">
            <span className="flex w-[93px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[497]">
              مشارکت در پروژه
            </span>
          </div>
        </div>
      </div>
      <div className="flex pt-[80px] pr-[120px] pb-[40px] pl-[120px] flex-col gap-[64px] items-end self-stretch shrink-0 flex-nowrap bg-[#111e30] relative z-[498]">
        <div className="flex gap-[48px] items-start self-stretch shrink-0 flex-nowrap relative z-[499]">
          <div className="flex w-[220px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[500]">
            <span className="flex w-[59px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[501]">
              ارتباط با ما
            </span>
            <span className="flex w-[115px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[502]">
              تلفن: ۰۲۱-۸۸۸۸۸۸۸۸
            </span>
            <span className="flex w-[156px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[503]">
              ایمیل: info@mahplatform.ir
            </span>
            <div className="flex w-[48px] pt-[8px] pr-0 pb-0 pl-0 gap-[12px] items-center shrink-0 flex-nowrap relative z-[504]">
              <div className="flex w-[18px] h-[18px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[505]">
                <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/codia/KXDRuRatym.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[506]" />
              </div>
              <div className="flex w-[18px] h-[18px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[507]">
                <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/codia/gSndMiYa1W.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[508]" />
              </div>
            </div>
          </div>
          <div className="flex w-[150px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[509]">
            <span className="flex w-[39px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[510]">
              حقوقی
            </span>
            <span className="flex w-[82px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[511]">
              قوانین و مقررات
            </span>
            <span className="flex w-[75px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[512]">
              حریم خصوصی
            </span>
          </div>
          <div className="flex w-[160px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[513]">
            <span className="flex w-[49px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[514]">
              پشتیبانی
            </span>
            <span className="flex w-[55px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[515]">
              تماس با ما
            </span>
            <span className="flex w-[77px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[516]">
              سؤالات متداول
            </span>
            <span className="flex w-[82px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[517]">
              پیگیری مشارکت
            </span>
          </div>
          <div className="flex w-[180px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[518]">
            <span className="flex w-[83px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[519]">
              دسترسی سریع
            </span>
            <span className="flex w-[38px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[520]">
              پروژه‌ها
            </span>
            <span className="flex w-[69px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[521]">
              برای شرکت‌ها
            </span>
            <span className="flex w-[71px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[522]">
              نحوه مشارکت
            </span>
            <span className="flex w-[84px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[523]">
              ثبت‌نام استارتاپ
            </span>
            <span className="flex w-[80px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[524]">
              اخبار و رویدادها
            </span>
          </div>
          <div className="flex w-[298px] h-[182px] flex-col gap-[14px] items-end shrink-0 flex-nowrap relative z-[525]">
            <img
              className="w-[210px] h-[70px] shrink-0 object-contain relative z-[526]"
              src="/assets/codia/j0Pvw1w6QL.png"
              alt="سامانه ماه"
            />
            <span className="flex w-[298px] h-[44px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[22px] text-[#e4ebf1] relative text-right z-[527]">
              سامانه مشارکت در پروژه‌های اثر اجتماعی با مسیر مالی شفاف و اثر
              قابل‌اندازه‌گیری.
            </span>
          </div>
        </div>
        <div className="flex pt-[20px] pr-0 pb-0 pl-0 flex-col gap-[4px] items-center self-stretch shrink-0 flex-nowrap border-solid border-b border-b-[rgba(255,255,255,0.12)] relative z-[528]">
          <span className="flex w-[219px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#e4ebf1] relative text-center whitespace-nowrap z-[529]">
            طراحی و توسعه با هدف ارتقای عدالت اجتماعی
          </span>
          <span className="flex w-[203px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#e4ebf1] relative text-center whitespace-nowrap z-[530]">
            تمامی حقوق برای سامانه ماه محفوظ است.
          </span>
        </div>
      </div>
    </div>
  );
}
