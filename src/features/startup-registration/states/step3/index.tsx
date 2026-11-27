import { useState } from "react";
import { registrationDraft, registrationFiles } from "../../draft";
import React from "react";
import RegistrationStepper from "../../RegistrationStepper";
import "./index.css";

export default function Main() {
  const [files, setFiles] = useState({ ...registrationFiles });
  function updateFile(key: "legalDocument" | "identityDocument", file?: File) {
    if (file && (file.size > 4 * 1024 * 1024 || file.size === 0)) {
      window.alert("حداکثر حجم هر مدرک ۴ مگابایت است.");
      return;
    }
    registrationFiles[key] = file;
    setFiles({ ...registrationFiles });
  }
  return (
    <div dir="rtl" className="main-container mah-startup-step3 flex w-[1440px] flex-col items-center flex-nowrap bg-[#f7fafc] relative mx-auto my-0">
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
            <img
              className="w-[137px] h-[46px] shrink-0 object-contain relative z-[6]"
              src="/assets/codia/PHNkOFHS4y.png"
              alt="سامانه ماه"
            />
          </div>
        </div>
      </div>
      <div className="flex pt-[48px] pr-0 pb-[48px] pl-0 flex-col gap-[32px] items-center self-stretch shrink-0 flex-nowrap relative z-[7]">
        <div className="flex w-[1000px] flex-col gap-[24px] items-end shrink-0 flex-nowrap relative z-[8]">
          <div className="flex flex-col gap-[16px] items-end self-stretch shrink-0 flex-nowrap relative z-[9]">
            <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-10">
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
          <RegistrationStepper current={3} />
          <div className="flex pt-[16px] pr-[16px] pb-[16px] pl-[16px] gap-[12px] justify-end items-center self-stretch shrink-0 flex-nowrap bg-[#eaf5fd] rounded-[12px] border-solid border border-[#bee3f8] relative z-[37]">
            <span className="h-[22px] grow shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#2a4365] relative text-right whitespace-nowrap z-[38]">
              پس از تأیید حساب، پروژه‌های اثر اجتماعی، KPIها و برنامه تأمین مالی
              را در پنل استارتاپ ثبت خواهید کرد.
            </span>
            <div className="flex w-[24px] h-[24px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[39]">
              <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-bold leading-[21.875px] text-[#fff] relative text-left whitespace-nowrap z-40">
                i
              </span>
            </div>
          </div>
          <div className="mah-startup-step3-card flex pt-[36px] pr-[36px] pb-[36px] pl-[36px] flex-col gap-[28px] items-end self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[20px] border-solid border border-[#e4ebf1] relative shadow-[0_4px_24px_0_rgba(0,0,0,0.03)] z-[41]">
            <div className="flex flex-col gap-[6px] items-end self-stretch shrink-0 flex-nowrap relative z-[42]">
              <span className="flex w-[184px] h-[28px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[18px] font-bold leading-[28px] text-[#1a202c] relative text-right whitespace-nowrap z-[43]">
                حوزه اثر اجتماعی و مدارک
              </span>
              <span className="flex w-[438px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#718096] relative text-right whitespace-nowrap z-[44]">
                زمینه‌های تأثیرگذاری اجتماعی و مستندات حمایتی استارتاپ خود را
                مشخص کنید.
              </span>
              <div className="h-px self-stretch shrink-0 bg-[url(/assets/codia/yuhk9u3JAv.svg)] bg-cover bg-no-repeat relative z-[45]" />
            </div>
            <div className="flex gap-[16px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[46]">
              <div className="flex w-[450px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[47]">
                <div className="flex w-[161px] gap-[4px] justify-end items-start shrink-0 flex-nowrap relative z-[48]">
                  <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[49]">
                    *
                  </span>
                  <span className="flex w-[150px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-50">
                    تجربه قبلی طرح‌های اثرگذار
                  </span>
                </div>
                <select aria-label="تجربه قبلی طرح‌های اثرگذار" data-registration-field="impactExperience" data-registration-detail="تجربه قبلی طرح‌های اثرگذار" defaultValue={registrationDraft.impactExperience ?? ""} onChange={event => { registrationDraft.impactExperience = event.target.value; }} className="h-12 w-full rounded-lg border border-slate-300 bg-white px-3 text-right text-sm">
                  <option value="">انتخاب کنید</option>
                  <option>نداریم</option>
                  <option>داریم</option>
                </select>
              </div>
              <div className="flex w-[450px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[58]">
                <div className="flex gap-[4px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[59]">
                  <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[60]">
                    *
                  </span>
                  <span className="flex w-[150px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[61]">
                    محدوده جغرافیایی فعالیت
                  </span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[62]">
                  <input aria-label="محدوده جغرافیایی" maxLength={160} data-registration-detail="محدوده جغرافیایی" data-registration-key="coverage" defaultValue={registrationDraft.coverage ?? ""} onChange={event => { registrationDraft.coverage = event.target.value; }} className="min-w-0 w-full bg-transparent text-right text-sm text-[#1a202c]" />
                </div>
              </div>
            </div>
            <div className="flex gap-[16px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[64]">
              <div className="flex w-[450px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[65]">
                <div className="flex gap-[4px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[66]">
                  <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[67]">
                    *
                  </span>
                  <span className="flex w-[98px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[68]">
                    جامعه هدف طرح
                  </span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[69]">
                  <input type="text" required maxLength={200} aria-label="جامعه هدف طرح" data-registration-field="audience" defaultValue={registrationDraft.audience ?? ""} onChange={event => { registrationDraft.audience = event.target.value; }} className="min-w-0 w-full grow bg-transparent text-right text-sm text-[#1a202c] outline-none" />
                </div>
              </div>
              <div className="flex w-[450px] flex-col gap-[8px] items-end shrink-0 flex-nowrap relative z-[71]">
                <div className="flex gap-[4px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[72]">
                  <span className="h-[22px] shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-normal leading-[21.875px] text-[#e53e3e] relative text-left whitespace-nowrap z-[73]">
                    *
                  </span>
                  <span className="flex w-[179px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[74]">
                    حوزه اصلی اثر اجتماعی استارتاپ
                  </span>
                </div>
                <div className="flex h-[48px] pt-0 pr-[16px] pb-0 pl-[16px] gap-[12px] items-center self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[75]">
                  <input aria-label="حوزه اثر اجتماعی" maxLength={160} data-registration-detail="حوزه اثر اجتماعی" data-registration-key="impact" defaultValue={registrationDraft.impact ?? ""} onChange={event => { registrationDraft.impact = event.target.value; }} className="min-w-0 w-full bg-transparent text-right text-sm text-[#1a202c]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[16px] items-end self-stretch shrink-0 flex-nowrap relative z-[77]">
              <span className="flex w-[151px] h-[23px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[15px] font-bold leading-[23px] text-[#2d3748] relative text-right whitespace-nowrap z-[78]">
                فایل‌ها و مدارک استارتاپ
              </span>
              <div className="flex h-[160px] flex-col gap-[12px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#f7fafc] rounded-[12px] border-dashed border border-[#cbd5e0] relative z-[79]">
                <span className="flex w-[325px] h-[25px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[16px] font-semibold leading-[25px] text-[#2d3748] relative text-right whitespace-nowrap z-[80]">
                  فایل Pitch Deck معرفی استارتاپ را بارگذاری کنید *
                </span>
                <span className="flex w-[166px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[81]">
                  فایل PDF، حداکثر حجم ۱۵ مگابایت
                </span>
                <div className="mah-pitch-upload relative z-[82]">
                  <label className="mah-pitch-label">انتخاب فایل PDF<input aria-label="فایل معرفی استارتاپ" type="file" accept=".pdf,application/pdf" onChange={event => { registrationFiles.pitchDeck = event.target.files?.[0]; setFiles({ ...registrationFiles }); }} className="sr-only" /></label>
                  {files.pitchDeck && <bdi className="mah-pitch-name">{files.pitchDeck.name}</bdi>}
                </div>
              </div>
              <div className="flex flex-col gap-[10px] items-end self-stretch shrink-0 flex-nowrap relative z-[84]">
                <span className="flex w-[169px] h-[20px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[13px] font-bold leading-[20px] text-[#718096] relative text-right whitespace-nowrap z-[85]">
                  مدارک حقوقی و هویتی (اختیاری)
                </span>
                {([["legalDocument", "مدرک حقوقی"], ["identityDocument", "مدرک هویتی"]] as const).map(([key, title]) => (
                  <div className="mah-document-row" key={key} dir="rtl">
                    <div className="mah-document-info">
                      <strong>{title}</strong>
                      <small>PDF، JPG، PNG — حداکثر ۴ مگابایت</small>
                      {files[key] ? <bdi dir="auto">{files[key]?.name}</bdi> : <small>فایلی انتخاب نشده است</small>}
                    </div>
                    <div className="mah-document-actions">
                      <label className="mah-document-select">
                        {files[key] ? "تغییر فایل" : "انتخاب فایل"}
                        <input type="file" aria-label={title} className="sr-only" accept=".pdf,.png,.jpg,.jpeg"
                          onChange={event => {
                            const file = event.currentTarget.files?.[0];
                            event.currentTarget.value = "";
                            if (file) updateFile(key, file);
                          }} />
                      </label>
                      {files[key] && <>
                        <button type="button" onClick={() => {
                          const file = files[key];
                          if (!file) return;
                          const url = URL.createObjectURL(file);
                          window.open(url, "_blank", "noopener,noreferrer");
                          window.setTimeout(() => URL.revokeObjectURL(url), 60_000);
                        }}>مشاهده</button>
                        <button type="button" className="mah-document-remove" onClick={() => updateFile(key)}>حذف</button>
                      </>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-[8px] items-end self-stretch shrink-0 flex-nowrap relative z-[98]">
              <div className="flex gap-[4px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[99]">
                <span className="flex w-[152px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-semibold leading-[21.875px] text-[#2d3748] relative text-right whitespace-nowrap z-[100]">
                  توضیحات تکمیلی (اختیاری)
                </span>
              </div>
              <div className="flex h-[96px] pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col items-end self-stretch shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#e4ebf1] relative z-[101]">
                <textarea aria-label="توضیحات تکمیلی" maxLength={160} data-registration-detail="توضیحات تکمیلی" data-registration-key="notes" defaultValue={registrationDraft.notes ?? ""} onChange={event => { registrationDraft.notes = event.target.value; }} className="min-w-0 w-full bg-transparent text-right text-sm text-[#1a202c]"></textarea>
              </div>
            </div>
            <div className="flex pt-[24px] pr-0 pb-0 pl-0 justify-between items-center self-stretch shrink-0 flex-nowrap border-solid border-b border-b-[#e4ebf1] relative z-[103]">
              <div className="flex w-[230px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[104]">
                <div className="flex w-[98px] h-[44px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] items-center shrink-0 flex-nowrap rounded-[12px] border-solid border border-[#e2e8f0] relative z-[105]">
                  <span className="flex w-[58px] h-[22px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[21.875px] text-[#4a5568] relative text-right whitespace-nowrap z-[106]">
                    مرحله قبل
                  </span>
                </div>
                <div className="flex w-[116px] pt-[11px] pr-[20px] pb-[11px] pl-[20px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#2094e3] rounded-[12px] relative z-[107]">
                  <span className="flex w-[76px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff] relative text-center whitespace-nowrap z-[108]">
                    ذخیره و ادامه
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex pt-[24px] pr-0 pb-[40px] pl-0 flex-col gap-[16px] items-end self-stretch shrink-0 flex-nowrap relative z-[109]">
        <div className="flex flex-col gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-[110]">
          <span className="h-[19px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#a0aec0] relative text-center whitespace-nowrap z-[111]">
            اطلاعات شما مطابق سیاست حریم خصوصی سامانه ماه محافظت می‌شود.
          </span>
          <div className="flex w-[180px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[112]">
            <span className="flex w-[76px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[113]">
              قوانین و مقررات
            </span>
            <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#a0aec0] relative text-left whitespace-nowrap z-[114]">
              |
            </span>
            <span className="flex w-[69px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[115]">
              حریم خصوصی
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
