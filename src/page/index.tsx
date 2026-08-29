import React from "react";
import "./index.css";

export default function Main() {
  return (
    <div dir="rtl" className="main-container flex w-[1440px] min-h-screen flex-col items-center flex-nowrap bg-[#f7fafc] relative mx-auto my-0">
      {/* Header */}
      <div className="flex h-[80px] pt-0 pr-[120px] pb-0 pl-[120px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] border-solid border-b border-b-[#e5ebf2] relative">
        <div className="flex w-[154px] gap-[8px] justify-center items-center shrink-0 flex-nowrap relative z-[1]">
          <img
            src="/assets/codia-login/image_1149f8d4-b075-4a71-95d3-86a91df0fc34.png"
            className="w-[16px] h-[16px] object-contain shrink-0"
            alt=""
          />
          <span className="flex w-[130px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#2d3d54] relative text-right whitespace-nowrap z-[4]">
            بازگشت به صفحه اصلی
          </span>
        </div>
        <div className="flex gap-[8px] items-center shrink-0 flex-nowrap relative z-[5]">
          <img
            src="/assets/codia-login/image_5ee80d76-e9b9-4e35-8947-724f013e952d.png"
            className="h-[42px] w-auto object-contain"
            alt="ماه"
          />
          <img
            src="/assets/codia-login/image_cccc7ff5-e80c-4394-bf72-e349ffb8412e.png"
            className="h-[32px] w-auto object-contain"
            alt="مسئولیت اجتماعی هوشمند"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex pt-[48px] pr-0 pb-[48px] pl-0 flex-col items-center self-stretch shrink-0 flex-nowrap relative z-[7]">
        <div className="flex w-[780px] pt-[36px] pr-[36px] pb-[36px] pl-[36px] flex-col gap-[28px] items-end shrink-0 flex-nowrap bg-[#fff] rounded-[20px] border-solid border border-[#e4ebf1] relative z-[8]">

          {/* Title Row */}
          <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[9]">
            {/* OTP Badge */}
            <div className="flex pt-[4px] pr-[10px] pb-[4px] pl-[10px] gap-[6px] items-center shrink-0 flex-nowrap bg-[#eaf8f0] rounded-[8px] relative z-10">
              <span className="h-[17px] shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-semibold leading-[17px] text-[#159455] relative text-right whitespace-nowrap z-[11]">
                ورود امن با کد یک‌بار مصرف
              </span>
              <img
                src="/assets/codia-login/image_64e51a1b-ed1a-4814-a6bc-e4fc2ed6c6e5.png"
                className="w-[14px] h-[14px] object-contain shrink-0"
                alt=""
              />
            </div>
            {/* Title + Subtitle */}
            <div className="flex flex-col gap-[6px] items-end shrink-0 flex-nowrap relative z-[14]">
              <span className="h-[38px] shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-bold leading-[37.5px] text-[#1a202c] relative text-right whitespace-nowrap z-[15]">
                ورود به سامانه ماه
              </span>
              <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#718096] relative text-right whitespace-nowrap z-[16]">
                نوع حساب خود را انتخاب کنید و با شماره موبایل وارد شوید.
              </span>
            </div>
          </div>

          {/* Account Type Cards */}
          <div className="flex gap-[16px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[17]">

            {/* Card 1: کاربران داخلی سامانه */}
            <div className="flex h-[180px] pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col gap-[12px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[18]">
              <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[19]">
                <div className="flex w-[18px] h-[18px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[9px] border-solid border border-[#cbd5e1] relative z-20" />
                <div className="flex w-[40px] h-[40px] justify-center items-center shrink-0 flex-nowrap bg-[#f7fafc] rounded-[8px] relative z-[21]">
                  <img
                    src="/assets/codia-login/image_4af5c4ea-5eac-4476-88c5-0af549f81f8a.png"
                    className="w-[22px] h-[22px] object-contain"
                    alt=""
                  />
                </div>
              </div>
              <span className="h-[25px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#1a202c] relative text-right whitespace-nowrap z-[24]">
                کاربران داخلی سامانه
              </span>
              <span className="flex h-[36px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[12px] font-normal leading-[18px] text-[#718096] relative text-right z-[25]">
                خانه خلاق، مدیر ماه، مدیر مالی، مدیر صندوق و کمیته امداد
              </span>
            </div>

            {/* Card 2: استارتاپ‌ها */}
            <div className="flex h-[180px] pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col gap-[12px] items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[26]">
              <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[27]">
                <div className="flex w-[18px] h-[18px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[9px] border-solid border border-[#cbd5e1] relative z-[28]" />
                <div className="flex w-[40px] h-[40px] justify-center items-center shrink-0 flex-nowrap bg-[#f7fafc] rounded-[8px] relative z-[29]">
                  <img
                    src="/assets/codia-login/image_b5d71936-5939-4e9c-ac2d-ae1e5542de98.png"
                    className="w-[22px] h-[22px] object-contain"
                    alt=""
                  />
                </div>
              </div>
              <span className="h-[25px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#1a202c] relative text-right whitespace-nowrap z-[32]">
                استارتاپ‌ها
              </span>
              <span className="flex h-[36px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[12px] font-normal leading-[18px] text-[#718096] relative text-right z-[33]">
                ثبت پروژه، پیگیری ارزیابی، KPI و تأمین مالی
              </span>
            </div>

            {/* Card 3: شرکت‌ها و سازمان‌ها (selected) */}
            <div className="flex h-[180px] pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col gap-[12px] items-end grow shrink-0 basis-0 flex-nowrap rounded-[12px] border-solid border-2 border-[#2094e3] relative z-[34] overflow-hidden">
              <img
                src="/assets/codia-login/image_44e00b99-c069-4de7-aabc-1362f6ea6530.png"
                className="absolute inset-0 w-full h-full object-cover"
                alt=""
                aria-hidden="true"
              />
              <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[35]">
                <img
                  src="/assets/codia-login/image_bc16b6a7-7507-441f-ad70-c0c1aa561b75.png"
                  className="w-[18px] h-[18px] object-contain shrink-0"
                  alt=""
                />
                <div className="flex w-[40px] h-[40px] justify-center items-center shrink-0 flex-nowrap bg-[rgba(32,148,227,0.08)] rounded-[8px] relative z-[37]">
                  <img
                    src="/assets/codia-login/image_56539987-bdfd-4039-bcd7-133348a97d2e.png"
                    className="w-[22px] h-[22px] object-contain"
                    alt=""
                  />
                </div>
              </div>
              <span className="h-[25px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] text-[#2094e3] relative text-right whitespace-nowrap z-40">
                شرکت‌ها و سازمان‌ها
              </span>
              <span className="flex h-[36px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[12px] font-normal leading-[18px] text-[#718096] relative text-right z-[41]">
                مدیریت مشارکت‌های سازمانی، گزارش مالی و گواهی ماده ۱۷۲
              </span>
            </div>
          </div>

          {/* Mobile Number Input */}
          <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[42]">
            <span className="flex h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[43]">
              شماره موبایل
            </span>
            <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[8px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border-2 border-[#2094e3] relative z-[44]">
              <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[45]">
                ۰۹۱۲۱۲۳۴۵۶۷
              </span>
              <img
                src="/assets/codia-login/image_a01dfddd-14be-4156-9eb5-ad192e163fe7.png"
                className="w-[18px] h-[18px] object-contain shrink-0"
                alt=""
              />
            </div>
            <span className="h-[19px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[48]">
              کد تأیید به این شماره ارسال می‌شود.
            </span>
          </div>

          <div role="alert" className="flex w-full items-center gap-[8px] rounded-[10px] border border-[#feb2b2] bg-[#fef0ee] p-[12px] text-[#9b2c2c]">
            <span className="flex-1 text-right font-['Vazirmatn'] text-[13px] font-normal">
              ارسال کد تأیید انجام نشد. لطفاً دوباره تلاش کنید.
            </span>
            <span aria-hidden="true" className="flex h-[16px] w-[16px] items-center justify-center rounded-full border border-[#9b2c2c] text-[11px] font-bold">
              !
            </span>
          </div>

          {/* Submit Button */}
          <div className="flex h-[50px] justify-center items-center self-stretch shrink-0 flex-nowrap rounded-[12px] relative overflow-hidden z-[49]">
            <img
              src="/assets/codia-login/image_ffed5b4d-627b-4861-9f16-41f2feb6866f.png"
              className="absolute inset-0 w-full h-full object-cover"
              alt=""
              aria-hidden="true"
            />
            <span className="flex h-[25px] justify-center items-center shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-semibold leading-[25px] text-white relative text-center whitespace-nowrap z-50">
              ادامه و دریافت کد تأیید
            </span>
          </div>

          {/* Register Link */}
          <div className="flex gap-[4px] justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[51]">
            <span className="flex h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2094e3] relative text-right underline whitespace-nowrap z-[52]">
              ثبت‌نام شرکت
            </span>
            <span className="flex h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#718096] relative text-right whitespace-nowrap z-[53]">
              هنوز حساب سازمانی ندارید؟
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex h-[139px] pt-[24px] pr-0 pb-[24px] pl-0 flex-col gap-[18px] items-center self-stretch shrink-0 flex-nowrap relative z-[54]">
        <div className="flex w-[780px] flex-col gap-[10px] items-center shrink-0 flex-nowrap border-solid border-t border-t-[#e8e8e8] pt-[10px] relative z-[55]">
          <div className="flex w-[780px] justify-center items-center shrink-0 flex-nowrap relative z-[56]">
            <span className="flex h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#718096] relative text-center whitespace-nowrap z-[57]">
              برای مشارکت فردی نیازی به ساخت حساب کاربری نیست.
            </span>
          </div>
          <span className="flex h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2094e3] relative text-center underline whitespace-nowrap z-[58]">
            مشارکت بدون ثبت‌نام
          </span>
        </div>
        <div className="flex h-[19px] flex-col justify-center items-center shrink-0 flex-nowrap relative z-[59]">
          <div className="flex gap-[14px] justify-center items-center shrink-0 flex-nowrap relative z-[60]">
            <span className="flex h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-center underline whitespace-nowrap z-[61]">
              قوانین و مقررات
            </span>
            <span className="flex h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#a0aec0] relative text-center whitespace-nowrap z-[62]">
              |
            </span>
            <span className="flex h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-center underline whitespace-nowrap z-[63]">
              حریم خصوصی
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
