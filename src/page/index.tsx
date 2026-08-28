import React, { useState } from "react";
import "./index.css";

type AccountType = "internal" | "startup" | "organization";

const accountTypes: { id: AccountType; label: string; desc: string; icon: string; activeIcon: string }[] = [
  {
    id: "internal",
    label: "کاربران داخلی سامانه",
    desc: "خانه خلاق، مدیر ماه، مدیر مالی، مدیر صندوق و کمیته امداد",
    icon: "https://static.codia.ai/image/2026-08-24/E1C9sGmanM.png",
    activeIcon: "https://static.codia.ai/image/2026-08-24/E1C9sGmanM.png",
  },
  {
    id: "startup",
    label: "استارتاپ‌ها",
    desc: "ثبت پروژه، پیگیری ارزیابی، KPI و تأمین مالی",
    icon: "https://static.codia.ai/image/2026-08-24/dG7pxZZQbL.png",
    activeIcon: "https://static.codia.ai/image/2026-08-24/dG7pxZZQbL.png",
  },
  {
    id: "organization",
    label: "شرکت‌ها و سازمان‌ها",
    desc: "مدیریت مشارکت‌های سازمانی، گزارش مالی و گواهی ماده ۱۷۲",
    icon: "https://static.codia.ai/image/2026-08-24/ew4cMi7vc8.png",
    activeIcon: "https://static.codia.ai/image/2026-08-24/ew4cMi7vc8.png",
  },
];

export default function Main() {
  const [selectedType, setSelectedType] = useState<AccountType>("organization");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const isValidPhone = /^09[0-9]{9}$/.test(phone);

  function handleSubmit() {
    if (!phone) {
      setError("لطفاً شماره موبایل را وارد کنید.");
      return;
    }
    if (!isValidPhone) {
      setError("شماره موبایل وارد شده معتبر نیست.");
      return;
    }
    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1500);
  }

  return (
    <div className="main-container flex w-[1440px] flex-col items-center flex-nowrap bg-[#f7fafc] relative mx-auto my-0">
      {/* Header */}
      <div className="flex h-[80px] pt-0 pr-[120px] pb-0 pl-[120px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] border-solid border-t border-t-[#e5eaf2] relative">
        <div className="flex w-[154px] gap-[8px] justify-center items-center shrink-0 flex-nowrap relative z-[1] cursor-pointer">
          <div className="flex w-[16px] h-[16px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[2]">
            <div className="w-[16px] h-[16px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/aNTM5YrqC4.png)] bg-cover bg-no-repeat relative overflow-hidden z-[3]" />
          </div>
          <span className="flex w-[130px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#2d3d54] relative text-right whitespace-nowrap z-[4]">
            بازگشت به صفحه اصلی
          </span>
        </div>
        <div className="flex w-[137px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[5]">
          <div className="w-[137px] h-[46px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/tuVhD6hxuF.png)] bg-cover bg-no-repeat relative z-[6]" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex pt-[48px] pr-0 pb-[48px] pl-0 flex-col items-center self-stretch shrink-0 flex-nowrap relative z-[7]">
        <div className="flex w-[780px] pt-[36px] pr-[36px] pb-[36px] pl-[36px] flex-col gap-[28px] items-end shrink-0 flex-nowrap bg-[#fff] rounded-[20px] border-solid border border-[#e4ebf1] relative z-[8]">

          {/* Title Row */}
          <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[9]">
            <div className="flex w-[161px] pt-[4px] pr-[10px] pb-[4px] pl-[10px] gap-[6px] items-center shrink-0 flex-nowrap bg-[#eaf8f0] rounded-[8px] relative z-10">
              <span className="flex w-[121px] h-[17px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[11px] font-semibold leading-[17px] text-[#159455] relative text-right whitespace-nowrap z-[11]">
                ورود امن با کد یک‌بار مصرف
              </span>
              <div className="flex w-[14px] h-[14px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[12]">
                <div className="w-[14px] h-[14px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/X9Fy9ixsbg.png)] bg-cover bg-no-repeat relative overflow-hidden z-[13]" />
              </div>
            </div>
            <div className="flex w-[324px] flex-col gap-[6px] items-end shrink-0 flex-nowrap relative z-[14]">
              <span className="flex w-[178px] h-[38px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-bold leading-[37.5px] text-[#1a202c] relative text-right whitespace-nowrap z-[15]">
                ورود به سامانه ماه
              </span>
              <span className="flex w-[324px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#718096] relative text-right whitespace-nowrap z-[16]">
                نوع حساب خود را انتخاب کنید و با شماره موبایل وارد شوید.
              </span>
            </div>
          </div>

          {/* Account Type Cards */}
          <div className="flex gap-[16px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[17]">
            {accountTypes.map((type) => {
              const isActive = selectedType === type.id;
              return (
                <div
                  key={type.id}
                  onClick={() => { setSelectedType(type.id); setError(""); setSent(false); }}
                  className={`flex h-[180px] pt-[16px] pr-[16px] pb-[16px] pl-[16px] flex-col gap-[12px] items-end grow shrink-0 basis-0 flex-nowrap rounded-[12px] border-solid cursor-pointer transition-all relative ${
                    isActive
                      ? "bg-[#eaf5fd] border-2 border-[#2094e3]"
                      : "bg-[#fff] border border-[#e4ebf1] hover:border-[#2094e3] hover:bg-[#f7fbff]"
                  }`}
                >
                  <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative">
                    <div
                      className={`flex w-[18px] h-[18px] items-start shrink-0 flex-nowrap bg-[#fff] rounded-[9px] border-solid relative transition-all ${
                        isActive ? "border-[5px] border-[#2094e3]" : "border border-[#cbd5e1]"
                      }`}
                    />
                    <div
                      className={`flex w-[40px] h-[40px] justify-center items-center shrink-0 flex-nowrap rounded-[8px] relative ${
                        isActive ? "bg-[rgba(32,148,227,0.08)]" : "bg-[#f7fafc]"
                      }`}
                    >
                      <div className="flex w-[22px] h-[22px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden">
                        <div
                          className="w-[22px] h-[22px] shrink-0 bg-cover bg-no-repeat relative overflow-hidden"
                          style={{ backgroundImage: `url(${type.icon})` }}
                        />
                      </div>
                    </div>
                  </div>
                  <span
                    className={`h-[25px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-bold leading-[25px] relative text-right whitespace-nowrap ${
                      isActive ? "text-[#2094e3]" : "text-[#1a202c]"
                    }`}
                  >
                    {type.label}
                  </span>
                  <span className="flex w-full h-[36px] justify-end items-start self-stretch shrink-0 font-['Vazirmatn'] text-[12px] font-normal leading-[18px] text-[#718096] relative text-right">
                    {type.desc}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Phone Input */}
          <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[42]">
            <span className="flex w-[74px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[43]">
              شماره موبایل
            </span>
            <div
              className={`flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[8px] justify-end items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border-2 relative z-[44] transition-colors ${
                error ? "border-[#e53e3e]" : "border-[#2094e3]"
              }`}
            >
              <input
                type="tel"
                dir="rtl"
                value={phone}
                onChange={(e) => { setPhone(e.target.value); setError(""); setSent(false); }}
                placeholder="۰۹۱۲۱۲۳۴۵۶۷"
                className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#1a202c] text-right whitespace-nowrap bg-transparent border-none outline-none placeholder:text-[#a0aec0]"
              />
              <div className="flex w-[18px] h-[18px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[46]">
                <div className="w-[18px] h-[18px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/KVeiGDkpCz.png)] bg-cover bg-no-repeat relative overflow-hidden z-[47]" />
              </div>
            </div>
            <span className="h-[19px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[48]">
              کد تأیید به این شماره ارسال می‌شود.
            </span>
          </div>

          {/* Error Banner */}
          {error && (
            <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] gap-[8px] items-center self-stretch shrink-0 flex-nowrap bg-[#fef0ee] rounded-[10px] border-solid border border-[#feb2b2] relative z-[49]">
              <span className="h-[20px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#9b2c2c] relative text-right whitespace-nowrap z-50">
                {error}
              </span>
              <div className="flex w-[16px] h-[16px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[51]">
                <div className="w-[16px] h-[16px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/mHYOjECEj9.png)] bg-cover bg-no-repeat relative overflow-hidden z-[52]" />
              </div>
            </div>
          )}

          {/* Success Banner */}
          {sent && (
            <div className="flex pt-[12px] pr-[12px] pb-[12px] pl-[12px] gap-[8px] items-center self-stretch shrink-0 flex-nowrap bg-[#eaf8f0] rounded-[10px] border-solid border border-[#9ae6b4] relative z-[49]">
              <span className="grow shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#276749] relative text-right whitespace-nowrap">
                کد تأیید به شماره {phone} ارسال شد.
              </span>
              <div className="flex w-[16px] h-[16px] flex-col justify-center items-center shrink-0 flex-nowrap relative overflow-hidden">
                <div className="w-[16px] h-[16px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/X9Fy9ixsbg.png)] bg-cover bg-no-repeat relative overflow-hidden" />
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="flex h-[50px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-gradient-to-l from-[#159455] to-[#2094e3] rounded-[12px] relative z-[53] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed transition-opacity w-full border-none"
          >
            <span className="font-['Vazirmatn'] text-[16px] font-semibold leading-[25px] text-[#fff] relative text-right whitespace-nowrap z-[54]">
              {loading ? "در حال ارسال..." : "ادامه و دریافت کد تأیید"}
            </span>
          </button>

          {/* Register Link */}
          <div className="flex gap-[4px] justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[55]">
            <span className="flex w-[78px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2094e3] relative text-right underline whitespace-nowrap z-[56] cursor-pointer">
              ثبت‌نام شرکت
            </span>
            <span className="flex w-[154px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#718096] relative text-right whitespace-nowrap z-[57]">
              هنوز حساب سازمانی ندارید؟
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex h-[139px] pt-[24px] pr-0 pb-[24px] pl-0 flex-col gap-[18px] items-center self-stretch shrink-0 flex-nowrap relative z-[58]">
        <div className="flex w-[780px] h-[54px] flex-col gap-[10px] items-center shrink-0 flex-nowrap border-solid border-b border-b-[#e8e8e8] relative z-[59]">
          <div className="flex w-[780px] justify-center items-center shrink-0 flex-nowrap relative z-[60]">
            <span className="flex w-[310px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#718096] relative text-center whitespace-nowrap z-[61]">
              برای مشارکت فردی نیازی به ساخت حساب کاربری نیست.
            </span>
          </div>
          <span className="flex w-[121px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2094e3] relative text-center underline whitespace-nowrap z-[62] cursor-pointer">
            مشارکت بدون ثبت‌نام
          </span>
        </div>
        <div className="flex w-[180px] h-[19px] flex-col justify-center items-center shrink-0 flex-nowrap relative z-[63]">
          <div className="flex w-[176px] gap-[14px] justify-center items-center shrink-0 flex-nowrap relative z-[64]">
            <span className="flex w-[76px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-center underline whitespace-nowrap z-[65] cursor-pointer">
              قوانین و مقررات
            </span>
            <span className="flex w-[3px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#a0aec0] relative text-center whitespace-nowrap z-[66]">
              |
            </span>
            <span className="flex w-[69px] h-[19px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-center underline whitespace-nowrap z-[67] cursor-pointer">
              حریم خصوصی
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
