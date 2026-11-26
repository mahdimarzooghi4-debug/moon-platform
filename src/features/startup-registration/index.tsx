import { useEffect, useState } from "react";
import { registrationDraft, registrationFiles } from "./draft";
import React from "react";
import MobileVerification from "./MobileVerification";
import RegistrationStepper from "./RegistrationStepper";
import "./index.css";

export default function Main() {
  const [mobile, setMobile] = useState(registrationDraft.mobile ?? "");
  const [logo, setLogo] = useState(registrationFiles.logo);
  const [logoUrl, setLogoUrl] = useState("");
  useEffect(() => {
    if (!logo) return;
    const url = URL.createObjectURL(logo);
    setLogoUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [logo]);
  return (
    <div dir="rtl" className="main-container flex w-[1440px] h-[1984px] flex-col justify-between items-center flex-nowrap bg-[#f7fafc] relative mx-auto my-0">
      <div className="mah-registration-header flex h-[80px] pt-0 pr-[120px] pb-0 pl-[120px] justify-between items-center self-stretch shrink-0 flex-nowrap bg-[#fff] border-solid border-t border-t-[#e4ebf1] relative">
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
            <div className="mah-registration-title-row flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-10">
              <div className="flex w-[144px] gap-[12px] items-center shrink-0 flex-nowrap relative z-[11]">
                <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#159455] relative text-left whitespace-nowrap z-[12]">

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
          <RegistrationStepper current={1} />
          <div className="flex pt-[36px] pr-[36px] pb-[36px] pl-[36px] flex-col gap-[28px] items-end self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[20px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_24px_0_rgba(0,0,0,0.03)] z-[38]">
            <div className="flex flex-col gap-[6px] items-end self-stretch shrink-0 flex-nowrap relative z-[39]">
              <span className="flex w-[115px] h-[28px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#1a202c] relative text-right whitespace-nowrap z-40">
                معرفی استارتاپ
              </span>
              <span className="flex w-[276px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#718096] relative text-right whitespace-nowrap z-[41]">
                اطلاعات اولیه استارتاپ و نماینده اصلی را وارد کنید.
              </span>
              <div className="h-px self-stretch shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/60DQD7Nyga.png)] bg-cover bg-no-repeat relative z-[42]" />
            </div>
            <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[43]">
              <span className="flex w-[86px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[44]">
                لوگوی استارتاپ
              </span>
              <div className="flex w-[306px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[45]">
                <div className="flex w-[226px] flex-col gap-[4px] items-end shrink-0 flex-nowrap relative z-[46]">
                  <label className="cursor-pointer rounded-[8px] bg-[#eaf5fd] px-3 py-1.5 text-xs font-semibold text-[#2094e3] focus-within:ring-2">
                    بارگذاری لوگو
                    <input type="file" className="sr-only" accept=".png,.jpg,.jpeg,.svg" onChange={event => {
                      const file = event.currentTarget.files?.[0];
                      event.currentTarget.value = "";
                      if (!file) return;
                      if (file.size > 5 * 1024 * 1024) {
                        window.alert("حداکثر حجم لوگو ۵ مگابایت است.");
                        return;
                      }
                      registrationFiles.logo = file;
                      setLogo(file);
                    }} />
                  </label>
                  <span className="flex w-[226px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#a0aec0] relative text-right whitespace-nowrap z-[49]">
                    حداکثر حجم فایل ۵ مگابایت (PNG, JPG, SVG)
                  </span>
                </div>
                <div className="flex w-[64px] h-[64px] justify-center items-center shrink-0 flex-nowrap bg-[#edf2f7] rounded-[32px] border-solid border border-[#e2e8f0] relative z-50">
                  {logoUrl ? <img src={logoUrl} alt="لوگو" className="h-full w-full rounded-full object-cover" />
                    : <span className="text-xs text-[#718096]">لوگو</span>}
                </div>
              </div>
            </div>
            <div className="mah-registration-field-row flex gap-[16px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[52]">
              <div className="flex w-[450px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[53]">
                <div className="flex gap-[4px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[54]">
                  <span className="flex w-[121px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[55]">
                    نام انگلیسی (اختیاری)
                  </span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[56]">
                  <input dir="ltr" aria-label="نام انگلیسی" maxLength={160} data-registration-detail="نام انگلیسی" data-registration-key="englishName" defaultValue={registrationDraft.englishName ?? ""} onChange={event => { registrationDraft.englishName = event.target.value; }} className="min-w-0 w-full bg-transparent text-right text-sm text-[#1a202c]" />
                </div>
              </div>
              <div className="flex w-[450px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[58]">
                <div className="flex gap-[4px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[59]">
                  <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[60]">
                    *
                  </span>
                  <span className="flex w-[108px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[61]">
                    نام فارسی استارتاپ
                  </span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[62]">
                  <input type="text" required maxLength={160} aria-label="نام فارسی استارتاپ" data-registration-field="name" defaultValue={registrationDraft.name ?? ""} onChange={event => { registrationDraft.name = event.target.value; }} className="min-w-0 grow bg-transparent text-right text-sm text-[#1a202c] outline-none" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[64]">
              <div className="flex gap-[4px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[65]">
                <span className="flex w-[60px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[66]">
                  شعار کوتاه
                </span>
              </div>
              <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[67]">
                <input aria-label="شعار کوتاه" maxLength={160} data-registration-detail="شعار کوتاه" data-registration-key="tagline" defaultValue={registrationDraft.tagline ?? ""} onChange={event => { registrationDraft.tagline = event.target.value; }} className="min-w-0 w-full bg-transparent text-right text-sm text-[#1a202c]" />
              </div>
            </div>
            <div className="mah-registration-field-row flex gap-[16px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[69]">
              <div className="flex w-[450px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[70]">
                <div className="flex gap-[4px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[71]">
                  <span className="flex w-[104px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[72]">
                    سال شروع فعالیت
                  </span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[73]">
                  <input aria-label="سال شروع فعالیت" maxLength={160} data-registration-detail="سال شروع فعالیت" data-registration-key="startYear" defaultValue={registrationDraft.startYear ?? ""} onChange={event => { registrationDraft.startYear = event.target.value; }} className="min-w-0 w-full bg-transparent text-right text-sm text-[#1a202c]" />
                </div>
              </div>
              <div className="flex w-[450px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[75]">
                <div className="flex w-[98px] gap-[4px] justify-end items-start shrink-0 flex-nowrap relative z-[76]">
                  <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[77]">
                    *
                  </span>
                  <span className="flex w-[87px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[78]">
                    وضعیت حقوقی
                  </span>
                </div>
                <select aria-label="وضعیت حقوقی" data-registration-field="legalStatus" data-registration-detail="وضعیت حقوقی" defaultValue={registrationDraft.legalStatus ?? ""} onChange={event => { registrationDraft.legalStatus = event.target.value; }} className="h-12 w-full rounded-lg border border-slate-300 bg-white px-3 text-right text-sm">
                  <option value="">انتخاب کنید</option>
                  <option>تیم استارتاپی فاقد شرکت</option>
                  <option>در حال ثبت</option>
                  <option>شرکت ثبت‌شده</option>
                </select>
              </div>
            </div>
            <div className="mah-registration-field-row flex gap-[16px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[89]">
              <div className="flex w-[450px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[90]">
                <div className="flex gap-[4px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[91]">
                  <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[92]">
                    *
                  </span>
                  <span className="flex w-[24px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[93]">
                    شهر
                  </span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[94]">
                  <input aria-label="شهر" maxLength={160} data-registration-detail="شهر" data-registration-key="city" defaultValue={registrationDraft.city ?? ""} onChange={event => { registrationDraft.city = event.target.value; }} className="min-w-0 w-full bg-transparent text-right text-sm text-[#1a202c]" />
                </div>
              </div>
              <div className="flex w-[450px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[96]">
                <div className="flex gap-[4px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[97]">
                  <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[98]">
                    *
                  </span>
                  <span className="flex w-[34px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[99]">
                    استان
                  </span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[100]">
                  <input aria-label="استان" maxLength={160} data-registration-detail="استان" data-registration-key="province" defaultValue={registrationDraft.province ?? ""} onChange={event => { registrationDraft.province = event.target.value; }} className="min-w-0 w-full bg-transparent text-right text-sm text-[#1a202c]" />
                </div>
              </div>
            </div>
            <div className="mah-registration-field-row flex gap-[16px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[102]">
              <div className="flex w-[450px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[103]">
                <div className="flex gap-[4px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[104]">
                  <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[105]">
                    *
                  </span>
                  <span className="flex w-[113px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[106]">
                    مرحله رشد استارتاپ
                  </span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[107]">
                  <input aria-label="مرحله رشد" maxLength={160} data-registration-detail="مرحله رشد" data-registration-key="stage" defaultValue={registrationDraft.stage ?? ""} onChange={event => { registrationDraft.stage = event.target.value; }} className="min-w-0 w-full bg-transparent text-right text-sm text-[#1a202c]" />
                </div>
              </div>
              <div className="flex w-[450px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[109]">
                <div className="flex gap-[4px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[110]">
                  <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[111]">
                    *
                  </span>
                  <span className="flex w-[124px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[112]">
                    حوزه فعالیت استارتاپ
                  </span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[113]">
                  <input aria-label="حوزه فعالیت" maxLength={160} data-registration-detail="حوزه فعالیت" data-registration-key="industry" defaultValue={registrationDraft.industry ?? ""} onChange={event => { registrationDraft.industry = event.target.value; }} className="min-w-0 w-full bg-transparent text-right text-sm text-[#1a202c]" />
                </div>
              </div>
            </div>
            <div className="mah-registration-field-row flex gap-[16px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[115]">
              <div className="flex w-[450px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[116]">
                <div className="flex gap-[4px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[117]">
                  <span className="flex w-[197px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[118]">
                    شبکه اجتماعی یا لینکداین استارتاپ
                  </span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[119]">
                  <input dir="ltr" aria-label="شبکه اجتماعی" maxLength={160} data-registration-detail="شبکه اجتماعی" data-registration-key="social" defaultValue={registrationDraft.social ?? ""} onChange={event => { registrationDraft.social = event.target.value; }} className="min-w-0 w-full bg-transparent text-right text-sm text-[#1a202c]" />
                </div>
              </div>
              <div className="flex w-[450px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[121]">
                <div className="flex gap-[4px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[122]">
                  <span className="flex w-[52px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[123]">
                    وب‌سایت
                  </span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[124]">
                  <input dir="ltr" aria-label="وب‌سایت" maxLength={160} data-registration-detail="وب‌سایت" data-registration-key="website" defaultValue={registrationDraft.website ?? ""} onChange={event => { registrationDraft.website = event.target.value; }} className="min-w-0 w-full bg-transparent text-right text-sm text-[#1a202c]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[6px] items-end self-stretch shrink-0 flex-nowrap relative z-[126]">
              <span className="flex w-[156px] h-[28px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#1a202c] relative text-right whitespace-nowrap z-[127]">
                اطلاعات نماینده اصلی
              </span>
              <span className="flex w-[331px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#718096] relative text-right whitespace-nowrap z-[128]">
                اطلاعات نماینده به عنوان مدیر اصلی حساب ثبت خواهد شد.
              </span>
              <div className="h-px self-stretch shrink-0 bg-[url(https://static.codia.ai/image/2026-08-24/eLJWdr2NsM.png)] bg-cover bg-no-repeat relative z-[129]" />
            </div>
            <div className="mah-registration-field-row flex gap-[16px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[130]">
              <div className="flex w-[450px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[131]">
                <div className="flex gap-[4px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[132]">
                  <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[133]">
                    *
                  </span>
                  <span className="flex w-[113px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[134]">
                    نام خانوادگی نماینده
                  </span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[135]">
                  <input type="text" required maxLength={59} aria-label="نام خانوادگی نماینده" data-registration-field="lastName" defaultValue={registrationDraft.lastName ?? ""} onChange={event => { registrationDraft.lastName = event.target.value; }} className="min-w-0 grow bg-transparent text-right text-sm text-[#1a202c] outline-none" />
                </div>
              </div>
              <div className="flex w-[450px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[137]">
                <div className="flex gap-[4px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[138]">
                  <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[139]">
                    *
                  </span>
                  <span className="flex w-[60px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[140]">
                    نام نماینده
                  </span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[141]">
                  <input type="text" required maxLength={60} aria-label="نام نماینده" data-registration-field="firstName" defaultValue={registrationDraft.firstName ?? ""} onChange={event => { registrationDraft.firstName = event.target.value; }} className="min-w-0 grow bg-transparent text-right text-sm text-[#1a202c] outline-none" />
                </div>
              </div>
            </div>
            <div className="mah-registration-field-row flex gap-[16px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[143]">
              <div className="flex w-[450px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[144]">
                <div className="flex gap-[4px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[145]">
                  <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[146]">
                    *
                  </span>
                  <span className="flex w-[101px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[147]">
                    سمت در استارتاپ
                  </span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[148]">
                  <input aria-label="سمت نماینده" maxLength={160} data-registration-detail="سمت نماینده" data-registration-key="position" defaultValue={registrationDraft.position ?? ""} onChange={event => { registrationDraft.position = event.target.value; }} className="min-w-0 w-full bg-transparent text-right text-sm text-[#1a202c]" />
                </div>
              </div>
              <div className="flex w-[450px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[150]">
                <div className="flex gap-[4px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[151]">
                  <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[152]">
                    *
                  </span>
                  <span className="flex w-[82px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[153]">
                    کد ملی نماینده
                  </span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[154]">
                  <input dir="ltr" aria-label="کد ملی نماینده" inputMode="numeric" required maxLength={10}
                    pattern="[0-9۰-۹٠-٩]{10}" data-registration-field="nationalId"
                    defaultValue={registrationDraft.nationalId ?? ""}
                    onChange={event => { registrationDraft.nationalId = event.target.value; }}
                    className="min-w-0 w-full bg-transparent text-right text-sm text-[#1a202c]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[156]">
              <div className="flex gap-[4px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[157]">
                <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[158]">
                  *
                </span>
                <span className="flex w-[74px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[159]">
                  شماره موبایل
                </span>
              </div>
              <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[160]">
                <MobileVerification mobile={mobile} />
                <input dir="ltr" type="tel" required maxLength={16} aria-label="شماره موبایل" data-registration-field="mobile" value={mobile} onChange={event => { registrationDraft.mobile = event.target.value; setMobile(event.target.value); }} className="min-w-0 grow bg-transparent text-right text-sm text-[#1a202c] outline-none" />
              </div>
            </div>
            <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[164]">
              <div className="flex gap-[4px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[165]">
                <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[166]">
                  *
                </span>
                <span className="flex w-[115px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[167]">
                  ایمیل مکاتبات رسمی
                </span>
              </div>
              <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[168]">
                <input type="email" required maxLength={254} aria-label="ایمیل مکاتبات رسمی" data-registration-field="email" defaultValue={registrationDraft.email ?? ""} onChange={event => { registrationDraft.email = event.target.value; }} className="min-w-0 grow bg-transparent text-right text-sm text-[#1a202c] outline-none" />
              </div>
            </div>
            <div className="flex pt-[24px] pr-0 pb-0 pl-0 justify-between items-center self-stretch shrink-0 flex-nowrap border-solid border-b border-b-[#e4ebf1] relative z-[170]">
              <div className="flex w-[116px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[171]">
                <div className="flex w-[116px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[172]">
                  <span className="flex w-[76px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[173]">
                    ذخیره و ادامه
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex pt-[24px] pr-0 pb-[40px] pl-0 flex-col gap-[16px] items-end self-stretch shrink-0 flex-nowrap relative z-[174]">
        <div className="flex flex-col gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-[175]">
          <span className="h-[19px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#a0aec0] relative text-center whitespace-nowrap z-[176]">
            اطلاعات شما مطابق سیاست حریم خصوصی سامانه ماه محافظت می‌شود.
          </span>
          <div className="flex w-[180px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[177]">
            <span className="flex w-[76px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[178]">
              قوانین و مقررات
            </span>
            <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#a0aec0] relative text-left whitespace-nowrap z-[179]">
              |
            </span>
            <span className="flex w-[69px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[180]">
              حریم خصوصی
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
