import React, { useRef, useState } from "react";
import "./index.css";

export default function Main() {
  const [otpRequested, setOtpRequested] = useState(false);
  const [otpDigits, setOtpDigits] = useState(["", "", "", "", "", ""]);
  const otpRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleOtpChange = (index: number, value: string) => {
    const digit = value.replace(/\D/g, "").slice(-1);
    const next = [...otpDigits];
    next[index] = digit;
    setOtpDigits(next);
    if (digit && index < 5) otpRefs.current[index + 1]?.focus();
  };

  const handleOtpKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && !otpDigits[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="main-container flex w-[1440px] h-[1984px] flex-col justify-between items-center flex-nowrap bg-[#f7fafc] relative mx-auto my-0">
      <div className="flex h-[80px] pt-0 pr-[120px] pb-0 pl-[120px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] border-solid border-t border-t-[#e4ebf1] relative">
        <div className="flex w-[237px] gap-[20px] items-center shrink-0 flex-nowrap relative z-[1]">
          <span className="flex w-[87px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#718096] relative text-right whitespace-nowrap z-[2]">
            بازگشت به ورود
          </span>
          <span className="flex w-[130px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#2094e3] relative text-right whitespace-nowrap z-[3]">
            بازگشت به صفحه اصلی
          </span>
        </div>
        <div className="flex w-[137px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[4]">
          <div className="flex w-[137px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[5]">
            <div className="w-[137px] h-[46px] shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/fdy2TS149S.png)] bg-cover bg-no-repeat relative z-[6]" />
          </div>
        </div>
      </div>
      <div className="flex pt-[48px] pr-0 pb-[48px] pl-0 flex-col gap-[32px] items-center self-stretch shrink-0 flex-nowrap relative z-[7]">
        <div className="flex w-[1000px] flex-col gap-[24px] items-end shrink-0 flex-nowrap relative z-[8]">
          <div className="flex flex-col gap-[16px] items-end self-stretch shrink-0 flex-nowrap relative z-[9]">
            <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-10">
              <div className="flex w-[144px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[11]">
                <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#159455] relative text-left whitespace-nowrap z-[12]">
                  ✓ ذخیره خودکار انجام شد
                </span>
              </div>
              <div className="flex w-[402px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[13]">
                <div className="flex w-[170px] pt-[4px] pr-[12px] pb-[4px] pl-[12px] items-start shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[8px] relative z-[14]">
                  <span className="h-[20px] shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-medium leading-[20px] text-[#2094e3] relative text-left whitespace-nowrap z-[15]">
                    زمان تقریبی تکمیل: ۷ دقیقه
                  </span>
                </div>
                <span className="flex w-[216px] h-[38px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[24px] font-bold leading-[37.5px] text-[#1a202c] relative text-right whitespace-nowrap z-[16]">
                  ایجاد حساب استارتاپی
                </span>
              </div>
            </div>
            <span className="h-[22px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#718096] relative text-right whitespace-nowrap z-[17]">
              اطلاعات استارتاپ و تیم خود را تکمیل کنید تا درخواست شما توسط خانه
              خلاق بررسی شود.
            </span>
          </div>
          <div className="flex pt-[16px] pr-0 pb-[16px] pl-0 gap-[16px] justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[18]">
            <div className="flex w-[117px] h-[36px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[19]">
              <span className="flex w-[81px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#718096] relative text-right whitespace-nowrap z-20">
                بازبینی و ارسال
              </span>
              <div className="flex w-[28px] h-[28px] justify-center items-center shrink-0 flex-nowrap bg-[#e2e8f0] rounded-[14px] relative z-[21]">
                <span className="flex w-[8px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[22]">
                  ۴
                </span>
              </div>
            </div>
            <div className="flex w-[196px] h-[36px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[23]">
              <span className="flex w-[112px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#718096] relative text-right whitespace-nowrap z-[24]">
                اثر اجتماعی و مدارک
              </span>
              <div className="flex w-[28px] h-[28px] justify-center items-center shrink-0 flex-nowrap bg-[#e2e8f0] rounded-[14px] relative z-[25]">
                <span className="flex w-[9px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[26]">
                  ۳
                </span>
              </div>
              <div className="w-[40px] h-px shrink-0 relative z-[27]" />
            </div>
            <div className="flex w-[161px] h-[36px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[28]">
              <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#718096] relative text-left whitespace-nowrap z-[29]">
                محصول و تیم
              </span>
              <div className="flex w-[28px] h-[28px] justify-center items-center shrink-0 flex-nowrap bg-[#e2e8f0] rounded-[14px] relative z-30">
                <span className="flex w-[7px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[31]">
                  ۲
                </span>
              </div>
              <div className="w-[40px] h-px shrink-0 relative z-[32]" />
            </div>
            <div className="flex w-[154px] h-[36px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[33]">
              <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#2094e3] relative text-left whitespace-nowrap z-[34]">
                اطلاعات پایه
              </span>
              <div className="flex w-[28px] h-[28px] justify-center items-center shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[14px] border-solid border-[1.5px] border-[#2094e3] relative z-[35]">
                <span className="flex w-[4px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-bold leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[36]">
                  ۱
                </span>
              </div>
              <div className="w-[40px] h-px shrink-0 relative z-[37]" />
            </div>
          </div>
          <div className="flex pt-[36px] pr-[36px] pb-[36px] pl-[36px] flex-col gap-[28px] items-end self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[20px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_24px_0_rgba(0,0,0,0.03)] z-[38]">
            <div className="flex flex-col gap-[6px] items-end self-stretch shrink-0 flex-nowrap relative z-[39]">
              <span className="flex w-[115px] h-[28px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#1a202c] relative text-right whitespace-nowrap z-40">
                معرفی استارتاپ
              </span>
              <span className="flex w-[276px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#718096] relative text-right whitespace-nowrap z-[41]">
                اطلاعات اولیه استارتاپ و نماینده اصلی را وارد کنید.
              </span>
              <div className="h-px self-stretch shrink-0 relative z-[42]" />
            </div>
            <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[43]">
              <span className="flex w-[86px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[44]">
                لوگوی استارتاپ
              </span>
              <div className="flex w-[306px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[45]">
                <div className="flex w-[226px] flex-col gap-[4px] items-end shrink-0 flex-nowrap relative z-[46]">
                  <div className="flex w-[85px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] items-start shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[8px] relative z-[47]">
                    <span className="flex w-[61px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-semibold leading-[18.75px] text-[#2094e3] relative text-right whitespace-nowrap z-[48]">
                      بارگذاری لوگو
                    </span>
                  </div>
                  <span className="flex w-[226px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#a0aec0] relative text-right whitespace-nowrap z-[49]">
                    حداکثر حجم فایل ۵ مگابایت (PNG, JPG, SVG)
                  </span>
                </div>
                <div className="flex w-[64px] h-[64px] justify-center items-center shrink-0 flex-nowrap bg-[#edf2f7] rounded-[32px] border-solid border border-[#e2e8f0] relative z-50">
                  <span className="flex w-[20px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[51]">
                    لوگو
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-[16px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[52]">
              <div className="flex w-[450px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[53]">
                <div className="flex gap-[4px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[54]">
                  <span className="flex w-[121px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[55]">
                    نام انگلیسی (اختیاری)
                  </span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[56]">
                  <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#a0aec0] relative text-right whitespace-nowrap z-[57]">
                    Startup name
                  </span>
                </div>
              </div>
              <div className="flex w-[450px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[58]">
                <div className="flex gap-[4px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[59]">
                  <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[60]">*</span>
                  <span className="flex w-[108px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[61]">نام فارسی استارتاپ</span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[62]"><span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[63]">سامانه ماه</span></div>
              </div>
            </div>
            <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[64]"><span className="flex w-[58px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[65]">شعار کوتاه</span><div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[66]"><span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#1a202c] relative text-right whitespace-nowrap z-[67]">سامانه هوشمند مدیریت و شتابدهی طرح‌های فناورانه خلاق</span></div></div>
            <div className="flex gap-[16px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[68]"><div className="flex w-[450px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[69]"><span className="font-['Vazirmatn'] text-[14px] font-semibold text-[#2d3748]">سال شروع فعالیت</span><div className="flex h-[48px] px-[16px] items-center self-stretch bg-[#fff] rounded-[12px] border border-[#e4ebf1]"><span className="grow text-[14px] text-[#1a202c] text-right">۱۴۰۰</span></div></div><div className="flex w-[450px] flex-col gap-[8px] items-end"><span className="font-['Vazirmatn'] text-[14px] font-semibold text-[#2d3748]">وضعیت حقوقی *</span><div className="flex h-[48px] gap-[16px] items-center"><span>تیم استارتاپی فاقد شرکت</span><span>○</span><span>در حال ثبت</span><span>○</span><strong>شرکت ثبت‌شده</strong><span className="text-[#2094e3]">●</span></div></div></div>
            <div className="flex gap-[16px] justify-end items-start self-stretch shrink-0"><div className="flex w-[450px] flex-col gap-[8px] items-end"><span className="font-['Vazirmatn'] text-[14px] font-semibold">شهر *</span><div className="flex h-[48px] px-[16px] items-center self-stretch bg-white rounded-[12px] border border-[#e4ebf1]"><span className="grow text-right">تهران</span></div></div><div className="flex w-[450px] flex-col gap-[8px] items-end"><span className="font-['Vazirmatn'] text-[14px] font-semibold">استان *</span><div className="flex h-[48px] px-[16px] items-center self-stretch bg-white rounded-[12px] border border-[#e4ebf1]"><span className="grow text-right">تهران</span></div></div></div>
            <div className="flex gap-[16px] justify-end items-start self-stretch shrink-0"><div className="flex w-[450px] flex-col gap-[8px] items-end"><span className="font-['Vazirmatn'] text-[14px] font-semibold">مرحله رشد استارتاپ *</span><div className="flex h-[48px] px-[16px] items-center self-stretch bg-white rounded-[12px] border border-[#e4ebf1]"><span className="grow text-right">MVP (نمونه محصول اولیه فعال)</span></div></div><div className="flex w-[450px] flex-col gap-[8px] items-end"><span className="font-['Vazirmatn'] text-[14px] font-semibold">حوزه فعالیت استارتاپ *</span><div className="flex h-[48px] px-[16px] items-center self-stretch bg-white rounded-[12px] border border-[#e4ebf1]"><span className="grow text-right">خدمات دیجیتال، صنایع خلاق، فناوری مالی</span></div></div></div>
            <div className="flex gap-[16px] justify-end items-start self-stretch shrink-0"><div className="flex w-[450px] flex-col gap-[8px] items-end"><span className="font-['Vazirmatn'] text-[14px] font-semibold">شبکه اجتماعی یا لینکداین استارتاپ</span><div className="flex h-[48px] px-[16px] items-center self-stretch bg-white rounded-[12px] border border-[#e4ebf1]"><span className="grow text-right text-[#a0aec0]">linkedin.com/company/startup</span></div></div><div className="flex w-[450px] flex-col gap-[8px] items-end"><span className="font-['Vazirmatn'] text-[14px] font-semibold">وب‌سایت</span><div className="flex h-[48px] px-[16px] items-center self-stretch bg-white rounded-[12px] border border-[#e4ebf1]"><span className="grow text-right">https://mahsystem.ir</span></div></div></div>
            <div className="flex flex-col gap-[6px] items-end self-stretch"><span className="font-['Vazirmatn'] text-[18px] font-bold text-[#1a202c]">اطلاعات نماینده اصلی</span><span className="text-[14px] text-[#718096]">اطلاعات نماینده به عنوان مدیر اصلی حساب ثبت خواهد شد.</span><div className="h-px self-stretch bg-[#e4ebf1]" /></div>
            <div className="flex gap-[16px] justify-end items-start self-stretch"><div className="flex w-[450px] flex-col gap-[8px] items-end"><span className="font-['Vazirmatn'] text-[14px] font-semibold">نام خانوادگی نماینده *</span><div className="flex h-[48px] px-[16px] items-center self-stretch bg-white rounded-[12px] border border-[#e4ebf1]"><span className="grow text-right">علوی</span></div></div><div className="flex w-[450px] flex-col gap-[8px] items-end"><span className="font-['Vazirmatn'] text-[14px] font-semibold">نام نماینده *</span><div className="flex h-[48px] px-[16px] items-center self-stretch bg-white rounded-[12px] border border-[#e4ebf1]"><span className="grow text-right">علی</span></div></div></div>
            <div className="flex gap-[16px] justify-end items-start self-stretch"><div className="flex w-[450px] flex-col gap-[8px] items-end"><span className="font-['Vazirmatn'] text-[14px] font-semibold">سمت در استارتاپ *</span><div className="flex h-[48px] px-[16px] items-center self-stretch bg-white rounded-[12px] border border-[#e4ebf1]"><span className="grow text-right">مدیر عامل و هم‌بنیان‌گذار</span></div></div><div className="flex w-[450px] flex-col gap-[8px] items-end"><span className="font-['Vazirmatn'] text-[14px] font-semibold">کد ملی نماینده *</span><div className="flex h-[48px] px-[16px] items-center self-stretch bg-white rounded-[12px] border border-[#e4ebf1]"><span className="grow text-right">۰۰۲۴۵۶۷۸۹۱</span></div></div></div>
            <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0">
              <span className="font-['Vazirmatn'] text-[14px] font-semibold text-[#2d3748]">شماره موبایل *</span>
              <div className="flex h-[48px] px-[16px] gap-[12px] items-center self-stretch bg-white rounded-[12px] border border-[#e4ebf1]">
                <button type="button" onClick={() => setOtpRequested(true)} className="px-[12px] py-[6px] bg-[#eaf5fd] rounded-[8px] text-[12px] font-semibold text-[#2094e3] cursor-pointer">دریافت کد تأیید</button>
                <span className="grow text-[14px] text-[#1a202c] text-right">۰۹۱۲۳۴۵۶۷۸۹</span>
              </div>
              {otpRequested && (
                <div className="startup-otp-panel">
                  <div className="startup-otp-copy">
                    <strong>کد تأیید را وارد کنید</strong>
                    <span>کد ۶ رقمی ارسال‌شده به شماره موبایل را وارد کنید.</span>
                  </div>
                  <div className="startup-otp-boxes" dir="ltr">
                    {otpDigits.map((digit, index) => (
                      <input
                        key={index}
                        ref={(node) => { otpRefs.current[index] = node; }}
                        value={digit}
                        onChange={(event) => handleOtpChange(index, event.target.value)}
                        onKeyDown={(event) => handleOtpKeyDown(index, event)}
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={1}
                        aria-label={`رقم ${index + 1} کد تأیید`}
                        className="startup-otp-input"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0"><span className="font-['Vazirmatn'] text-[14px] font-semibold">ایمیل مکاتبات رسمی *</span><div className="flex h-[48px] px-[16px] items-center self-stretch bg-white rounded-[12px] border border-[#e4ebf1]"><span className="grow text-right">info@mahsystem.ir</span></div></div>
            <div className="flex pt-[24px] justify-between items-center self-stretch border-t border-[#e4ebf1]"><div className="flex"><div className="flex px-[20px] py-[11px] justify-center items-center bg-[#2094e3] rounded-[12px]"><span className="text-[14px] font-medium text-white">ذخیره و ادامه</span></div></div></div>
          </div>
        </div>
      </div>
      <div className="flex pt-[24px] pr-0 pb-[40px] pl-0 flex-col gap-[16px] items-end self-stretch shrink-0 flex-nowrap relative z-[174]">
        <div className="flex flex-col gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-[175]">
          <span className="h-[19px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#a0aec0] relative text-center whitespace-nowrap z-[176]">اطلاعات شما مطابق سیاست حریم خصوصی سامانه ماه محافظت می‌شود.</span>
          <div className="flex w-[180px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[177]"><span className="text-[12px] text-[#718096]">قوانین و مقررات</span><span className="text-[#a0aec0]">|</span><span className="text-[12px] text-[#718096]">حریم خصوصی</span></div>
        </div>
      </div>
    </div>
  );
}
