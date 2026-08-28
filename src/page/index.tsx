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
          <img
            className="w-[137px] h-[46px] shrink-0 object-cover relative z-[16]"
            src="/assets/codia/JDtkk6VPDf.png"
            alt="سامانه ماه"
          />
        </div>
      </div>
      <div className="flex pt-[24px] pr-[120px] pb-0 pl-[120px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[17]">
        <span className="flex w-[157px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[18]">
          صفحه اصلی / نتایج جست‌وجو
        </span>
      </div>
      <div className="flex pt-[24px] pr-[120px] pb-[16px] pl-[120px] flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[19]">
        <div className="w-[398px] shrink-0 font-['Vazirmatn'] text-[28px] font-extrabold leading-[43.75px] relative text-right whitespace-nowrap z-20">
          <span className="font-['Vazirmatn'] text-[28px] font-extrabold leading-[43.75px] text-[#17324d] relative text-right">
            نتایج جست‌وجو برای{" "}
          </span>
          <span className="font-['Vazirmatn'] text-[28px] font-extrabold leading-[43.75px] text-[#2094e3] relative text-right">
            «اشتغال زنان»
          </span>
        </div>
      </div>
      <div className="flex pt-[8px] pr-[120px] pb-[16px] pl-[120px] items-start self-stretch shrink-0 flex-nowrap relative z-[21]">
        <div className="flex flex-col gap-[4px] items-start grow shrink-0 basis-0 flex-nowrap relative z-[22]">
          <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border-[1.5px] border-[#2094e3] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-[23]">
            <div className="flex w-[97px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[24]">
              <span className="flex w-[57px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[25]">
                جست‌وجو
              </span>
            </div>
            <div className="flex gap-[8px] items-center grow shrink-0 basis-0 flex-nowrap relative z-[26]">
              <div className="w-[16px] h-[16px] shrink-0 bg-[url(/assets/codia/exbt1jHZTd.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[27]" />
              <span className="h-[23px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-normal leading-[23px] text-[#17324d] relative text-right whitespace-nowrap z-[28]">
                اشتغال زنان
              </span>
              <div className="w-[20px] h-[20px] shrink-0 bg-[url(/assets/codia/ALOAaKraBx.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[29]" />
            </div>
          </div>
          <div className="flex pt-[20px] pr-[20px] pb-[20px] pl-[20px] flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[16px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_16px_0_rgba(22,45,71,0.08)] z-30">
            <div className="flex flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[31]">
              <span className="flex w-[54px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[32]">
                پیشنهادها
              </span>
              <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[33]">
                <div className="flex pt-[8px] pr-0 pb-[8px] pl-0 justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[34]">
                  <div className="w-[14px] h-[14px] shrink-0 relative overflow-hidden z-[35]">
                    <div className="w-[8.168px] h-[8.168px] bg-[url(/assets/codia/SVCKbOyOXz.svg)] bg-[length:100%_100%] bg-no-repeat relative overflow-hidden z-[36] mt-[2.914px] mr-0 mb-0 ml-[2.916px]" />
                  </div>
                  <div className="flex w-[229px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[37]">
                    <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[38]">
                      پروژه اثر اجتماعی
                    </span>
                    <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-left whitespace-nowrap z-[39]">
                      اشتغال زنان روستایی
                    </span>
                    <div className="w-[16px] h-[16px] shrink-0 relative overflow-hidden z-40">
                      <div className="w-[12.8px] h-[12.8px] bg-[url(/assets/codia/Cv5LHPOOJb.svg)] bg-[length:100%_100%] bg-no-repeat relative overflow-hidden z-[41] mt-[1.602px] mr-0 mb-0 ml-[1.602px]" />
                    </div>
                  </div>
                </div>
                <div className="flex pt-[8px] pr-0 pb-[8px] pl-0 justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[42]">
                  <div className="w-[14px] h-[14px] shrink-0 relative overflow-hidden z-[43]">
                    <div className="w-[8.168px] h-[8.168px] bg-[url(/assets/codia/aCBXPV7BJ1.svg)] bg-[length:100%_100%] bg-no-repeat relative overflow-hidden z-[44] mt-[2.914px] mr-0 mb-0 ml-[2.916px]" />
                  </div>
                  <div className="flex w-[171px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[45]">
                    <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[46]">
                      حوزه اثر
                    </span>
                    <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-left whitespace-nowrap z-[47]">
                      آموزش مهارت زنان
                    </span>
                    <div className="w-[16px] h-[16px] shrink-0 relative overflow-hidden z-[48]">
                      <div className="w-[12.8px] h-[12.8px] bg-[url(/assets/codia/4pssSeTA7y.svg)] bg-[length:100%_100%] bg-no-repeat relative overflow-hidden z-[49] mt-[1.602px] mr-0 mb-0 ml-[1.602px]" />
                    </div>
                  </div>
                </div>
                <div className="flex pt-[8px] pr-0 pb-[8px] pl-0 justify-between items-center self-stretch shrink-0 flex-nowrap relative z-50">
                  <div className="w-[14px] h-[14px] shrink-0 relative overflow-hidden z-[51]">
                    <div className="w-[8.168px] h-[8.168px] bg-[url(/assets/codia/95EHrTDohb.svg)] bg-[length:100%_100%] bg-no-repeat relative overflow-hidden z-[52] mt-[2.914px] mr-0 mb-0 ml-[2.916px]" />
                  </div>
                  <div className="flex w-[214px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[53]">
                    <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[54]">
                      گزارش‌های عمومی
                    </span>
                    <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-left whitespace-nowrap z-[55]">
                      گزارش اثر اشتغال
                    </span>
                    <div className="w-[16px] h-[16px] shrink-0 relative overflow-hidden z-[56]">
                      <div className="w-[12.8px] h-[12.8px] bg-[url(/assets/codia/x7ftHeF5v3.svg)] bg-[length:100%_100%] bg-no-repeat relative overflow-hidden z-[57] mt-[1.602px] mr-0 mb-0 ml-[1.602px]" />
                    </div>
                  </div>
                </div>
                <div className="flex pt-[8px] pr-0 pb-[8px] pl-0 justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[58]">
                  <div className="w-[14px] h-[14px] shrink-0 relative overflow-hidden z-[59]">
                    <div className="w-[8.168px] h-[8.168px] bg-[url(/assets/codia/kBcGUG8Dgr.svg)] bg-[length:100%_100%] bg-no-repeat relative overflow-hidden z-[60] mt-[2.914px] mr-0 mb-0 ml-[2.916px]" />
                  </div>
                  <div className="flex w-[232px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[61]">
                    <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[62]">
                      استارتاپ‌ها
                    </span>
                    <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-left whitespace-nowrap z-[63]">
                      استارتاپ‌های حوزه اشتغال
                    </span>
                    <div className="w-[16px] h-[16px] shrink-0 relative overflow-hidden z-[64]">
                      <div className="w-[12.8px] h-[12.8px] bg-[url(/assets/codia/2NCRaFcw4A.svg)] bg-[length:100%_100%] bg-no-repeat relative overflow-hidden z-[65] mt-[1.602px] mr-0 mb-0 ml-[1.602px]" />
                    </div>
                  </div>
                </div>
                <div className="flex pt-[8px] pr-0 pb-[8px] pl-0 justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[66]">
                  <div className="w-[14px] h-[14px] shrink-0 relative overflow-hidden z-[67]">
                    <div className="w-[8.168px] h-[8.168px] bg-[url(/assets/codia/zWg68Zb3bb.svg)] bg-[length:100%_100%] bg-no-repeat relative overflow-hidden z-[68] mt-[2.914px] mr-0 mb-0 ml-[2.916px]" />
                  </div>
                  <div className="flex w-[256px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[69]">
                    <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#60758a] relative text-left whitespace-nowrap z-[70]">
                      موقعیت جغرافیایی
                    </span>
                    <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#17324d] relative text-left whitespace-nowrap z-[71]">
                      پروژه‌های استان گلستان
                    </span>
                    <div className="w-[16px] h-[16px] shrink-0 relative overflow-hidden z-[72]">
                      <div className="w-[12.8px] h-[12.8px] bg-[url(/assets/codia/dYMEbBtBZd.svg)] bg-[length:100%_100%] bg-no-repeat relative overflow-hidden z-[73] mt-[1.602px] mr-0 mb-0 ml-[1.602px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-px self-stretch shrink-0 bg-[url(/assets/codia/MVhjQtgBNF.svg)] bg-cover bg-no-repeat relative z-[74]" />
            <div className="flex flex-col gap-[12px] items-start self-stretch shrink-0 flex-nowrap relative z-[75]">
              <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[76]">
                <span className="flex w-[135px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#2094e3] relative text-right underline whitespace-nowrap z-[77]">
                  پاک‌کردن جست‌وجوهای اخیر
                </span>
                <span className="flex w-[101px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#60758a] relative text-right whitespace-nowrap z-[78]">
                  جست‌وجوهای اخیر
                </span>
              </div>
              <div className="flex flex-col gap-[8px] items-start self-stretch shrink-0 flex-nowrap relative z-[79]">
                <div className="flex pt-[8px] pr-0 pb-[8px] pl-0 justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[80]">
                  <div className="w-[14px] h-[14px] shrink-0 relative overflow-hidden z-[81]">
                    <div className="w-[8.168px] h-[8.168px] bg-[url(/assets/codia/gitHUXaA8s.svg)] bg-[length:100%_100%] bg-no-repeat relative overflow-hidden z-[82] mt-[2.914px] mr-0 mb-0 ml-[2.916px]" />
                  </div>
                  <div className="flex w-[111px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[83]">
                    <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#17324d] relative text-left whitespace-nowrap z-[84]">
                      توسعه روستایی
                    </span>
                    <div className="w-[16px] h-[16px] shrink-0 relative overflow-hidden z-[85]">
                      <div className="w-[12.8px] h-[12.8px] bg-[url(/assets/codia/01jYmd5q4Q.svg)] bg-[length:100%_100%] bg-no-repeat relative overflow-hidden z-[86] mt-[1.602px] mr-0 mb-0 ml-[1.602px]" />
                    </div>
                  </div>
                </div>
                <div className="flex pt-[8px] pr-0 pb-[8px] pl-0 justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[87]">
                  <div className="w-[14px] h-[14px] shrink-0 relative overflow-hidden z-[88]">
                    <div className="w-[8.168px] h-[8.168px] bg-[url(/assets/codia/RecEXTCFMh.svg)] bg-[length:100%_100%] bg-no-repeat relative overflow-hidden z-[89] mt-[2.914px] mr-0 mb-0 ml-[2.916px]" />
                  </div>
                  <div className="flex w-[112px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[90]">
                    <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#17324d] relative text-left whitespace-nowrap z-[91]">
                      آموزش نوجوانان
                    </span>
                    <div className="w-[16px] h-[16px] shrink-0 relative overflow-hidden z-[92]">
                      <div className="w-[12.8px] h-[12.8px] bg-[url(/assets/codia/UycGJTV4vw.svg)] bg-[length:100%_100%] bg-no-repeat relative overflow-hidden z-[93] mt-[1.602px] mr-0 mb-0 ml-[1.602px]" />
                    </div>
                  </div>
                </div>
                <div className="flex pt-[8px] pr-0 pb-[8px] pl-0 justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[94]">
                  <div className="w-[14px] h-[14px] shrink-0 relative overflow-hidden z-[95]">
                    <div className="w-[8.168px] h-[8.168px] bg-[url(/assets/codia/Oz8690hd8V.svg)] bg-[length:100%_100%] bg-no-repeat relative overflow-hidden z-[96] mt-[2.914px] mr-0 mb-0 ml-[2.916px]" />
                  </div>
                  <div className="flex w-[121px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[97]">
                    <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#17324d] relative text-left whitespace-nowrap z-[98]">
                      سلامت خانواده‌ها
                    </span>
                    <div className="w-[16px] h-[16px] shrink-0 relative overflow-hidden z-[99]">
                      <div className="w-[12.8px] h-[12.8px] bg-[url(/assets/codia/Td6NRB4FM7.svg)] bg-[length:100%_100%] bg-no-repeat relative overflow-hidden z-[100] mt-[1.602px] mr-0 mb-0 ml-[1.602px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[332px] pt-[24px] pr-[120px] pb-[48px] pl-[120px] flex-col gap-[20px] items-start self-stretch shrink-0 flex-nowrap bg-[url(/assets/codia/We7J4ReJU9.svg)] bg-cover bg-no-repeat relative z-[101]" />
      <div className="flex pt-[80px] pr-[120px] pb-[40px] pl-[120px] flex-col gap-[64px] items-start self-stretch shrink-0 flex-nowrap bg-[#111e30] relative z-[102]">
        <div className="flex gap-[48px] items-start self-stretch shrink-0 flex-nowrap relative z-[103]">
          <div className="flex w-[220px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[104]">
            <span className="flex w-[59px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[105]">
              ارتباط با ما
            </span>
            <span className="flex w-[115px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[106]">
              تلفن: ۰۲۱-۸۸۸۸۸۸۸۸
            </span>
            <span className="flex w-[156px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[107]">
              ایمیل: info@mahplatform.ir
            </span>
            <div className="flex w-[48px] pt-[8px] pr-0 pb-0 pl-0 gap-[12px] items-center shrink-0 flex-nowrap relative z-[108]">
              <div className="flex w-[18px] h-[18px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[109]">
                <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/codia/H81E2J6AZ7.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[110]" />
              </div>
              <div className="flex w-[18px] h-[18px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[111]">
                <div className="w-[18px] h-[18px] shrink-0 bg-[url(/assets/codia/vgcEectNH9.svg)] bg-cover bg-no-repeat relative overflow-hidden z-[112]" />
              </div>
            </div>
          </div>
          <div className="flex w-[150px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[113]">
            <span className="flex w-[39px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[114]">
              حقوقی
            </span>
            <span className="flex w-[82px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[115]">
              قوانین و مقررات
            </span>
            <span className="flex w-[75px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[116]">
              حریم خصوصی
            </span>
          </div>
          <div className="flex w-[160px] h-[182px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[117]">
            <span className="flex w-[49px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[118]">
              پشتیبانی
            </span>
            <span className="flex w-[55px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[119]">
              تماس با ما
            </span>
            <span className="flex w-[77px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[120]">
              سؤالات متداول
            </span>
            <span className="flex w-[82px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[121]">
              پیگیری مشارکت
            </span>
          </div>
          <div className="flex w-[180px] flex-col gap-[12px] items-end shrink-0 flex-nowrap relative z-[122]">
            <span className="flex w-[83px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-right whitespace-nowrap z-[123]">
              دسترسی سریع
            </span>
            <span className="flex w-[38px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[124]">
              پروژه‌ها
            </span>
            <span className="flex w-[69px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[125]">
              برای شرکت‌ها
            </span>
            <span className="flex w-[71px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[126]">
              نحوه مشارکت
            </span>
            <span className="flex w-[84px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[127]">
              ثبت‌نام استارتاپ
            </span>
            <span className="flex w-[80px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#e4ebf1] relative text-right whitespace-nowrap z-[128]">
              اخبار و رویدادها
            </span>
          </div>
          <div className="flex w-[298px] h-[182px] flex-col gap-[14px] items-end shrink-0 flex-nowrap relative z-[129]">
            <img
              className="w-[210px] h-[70px] shrink-0 object-cover relative z-[130]"
              src="/assets/codia/QzaOmD3sk4.png"
              alt="سامانه ماه"
              loading="lazy"
            />
            <span className="flex w-[298px] h-[44px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[13px] font-normal leading-[22px] text-[#e4ebf1] relative text-right z-[131]">
              سامانه مشارکت در پروژه‌های اثر اجتماعی با مسیر مالی شفاف و اثر
              قابل‌اندازه‌گیری.
            </span>
          </div>
        </div>
        <div className="flex pt-[20px] pr-0 pb-0 pl-0 flex-col gap-[4px] items-center self-stretch shrink-0 flex-nowrap border-solid border-b border-b-[rgba(255,255,255,0.12)] relative z-[132]">
          <span className="flex w-[219px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#e4ebf1] relative text-center whitespace-nowrap z-[133]">
            طراحی و توسعه با هدف ارتقای عدالت اجتماعی
          </span>
          <span className="flex w-[203px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#e4ebf1] relative text-center whitespace-nowrap z-[134]">
            تمامی حقوق برای سامانه ماه محفوظ است.
          </span>
        </div>
      </div>
    </div>
  );
}
