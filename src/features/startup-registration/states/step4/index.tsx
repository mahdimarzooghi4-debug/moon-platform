import { Link } from "react-router-dom";
import { registrationDraft, registrationFiles, registrationDetails } from "../../draft";
import React from "react";
import RegistrationStepper from "../../RegistrationStepper";
import "./index.css";

export default function Main() {
  return (
    <div dir="rtl" className="main-container mah-startup-step4 flex w-full max-w-[1440px] min-h-screen flex-col justify-between items-center flex-nowrap bg-[#f7fafc] relative mx-auto my-0">
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
              src="/assets/codia/kau2Azafis.png"
              alt="سامانه ماه"
            />
          </div>
        </div>
      </div>
      <div className="flex pt-[48px] pr-0 pb-[48px] pl-0 flex-col gap-[32px] items-center self-stretch shrink-0 flex-nowrap relative z-[7]">
        <div className="mah-review-shell flex w-full max-w-[1000px] flex-col gap-[24px] items-start shrink-0 flex-nowrap relative z-[8]">
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
          <RegistrationStepper current={4} />
          <section className="mah-startup-review" dir="rtl" aria-labelledby="mah-review-title">
            <header className="mah-review-heading">
              <h2 id="mah-review-title">بازبینی درخواست ثبت‌نام</h2>
              <p>قبل از ارسال نهایی، صحت اطلاعات واردشده را کنترل کنید.</p>
            </header>
            <div className="mah-review-grid">
              <article className="mah-review-box">
                <header><h3>اطلاعات پایه استارتاپ</h3><Link to="/register/startup">ویرایش اطلاعات</Link></header>
                <p>نام فارسی استارتاپ: {registrationDraft.name}</p>
              </article>
              <article className="mah-review-box">
                <header><h3>اطلاعات نماینده اصلی</h3><Link to="/register/startup">ویرایش اطلاعات</Link></header>
                <p>نام و نام خانوادگی: {registrationDraft.firstName} {registrationDraft.lastName}</p>
                <p>شماره تماس: <bdi dir="ltr">{registrationDraft.mobile}</bdi></p>
                {registrationDraft.email && <p>ایمیل: <bdi dir="ltr">{registrationDraft.email}</bdi></p>}
                {registrationDraft.nationalId && <p>کد ملی نماینده: <bdi dir="ltr">{registrationDraft.nationalId}</bdi></p>}
              </article>
              <article className="mah-review-box">
                <header><h3>محصول و بازار</h3><Link to="/register/startup/states/step2">ویرایش اطلاعات</Link></header>
                <p>{registrationDraft.product}</p>
                {registrationDraft.description && <p>راهکار: {registrationDraft.description}</p>}
              </article>
              <article className="mah-review-box">
                <header><h3>اعضای تیم</h3><Link to="/register/startup/states/step2">ویرایش اطلاعات</Link></header>
                <p>{registrationDraft.team}</p>
              </article>
              <article className="mah-review-box">
                <header><h3>حوزه اثر اجتماعی</h3><Link to="/register/startup/states/step3">ویرایش اطلاعات</Link></header>
                <p>جامعه هدف: {registrationDraft.audience}</p>
              </article>
              <article className="mah-review-box">
                <header><h3>مدارک بارگذاری‌شده</h3><Link to="/register/startup/states/step3">ویرایش اطلاعات</Link></header>
                <ul>{Object.entries(registrationFiles).filter(([, file]) => Boolean(file)).map(([key, file]) => (
                  <li key={key}><bdi>{file?.name}</bdi></li>
                ))}</ul>
              </article>
            </div>
            {Object.entries(registrationDetails).some(([, value]) => value) && (
              <section className="mah-review-details">
                <h3>اطلاعات تکمیلی</h3>
                <dl>{Object.entries(registrationDetails).filter(([, value]) => value).map(([label, value]) => (
                  <div key={label}><dt>{label}</dt><dd><bdi>{value}</bdi></dd></div>
                ))}</dl>
              </section>
            )}
            <section className="mah-review-consents">
              <h3>تأییدیه و تعهدات</h3>
              <label><input type="checkbox" required data-registration-consent aria-label="تأیید صحت اطلاعات و مدارک" /><span>صحت اطلاعات و مدارک واردشده را کاملاً تأیید می‌کنم.</span></label>
              <label><input type="checkbox" required data-registration-consent aria-label="اجازه بررسی اطلاعات" /><span>اجازه بررسی اطلاعات توسط خانه خلاق و فرآیند پایش سامانه ماه را می‌دهم.</span></label>
              <label><input type="checkbox" required data-registration-consent aria-label="پذیرش قوانین و حریم خصوصی" /><span>قوانین و مقررات عمومی و سیاست حریم خصوصی سامانه ماه را می‌پذیرم.</span></label>
            </section>
            <p className="mah-review-notice">پس از بررسی و تأیید نهایی حساب توسط دبیرخانه خانه خلاق، می‌توانید پروژه خود را ثبت کنید. تأیید حساب یا بررسی محصول به معنی تضمین جذب سرمایه قطعی نیست.</p>
            <div className="mah-review-actions">
              <button type="button">بازگشت و ویرایش</button>
              <button type="button" className="mah-review-submit">ارسال درخواست ثبت‌نام</button>
            </div>
          </section>
        </div>
      </div>
      <div className="flex pt-[24px] pr-0 pb-[40px] pl-0 flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[114]">
        <div className="flex flex-col gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-[115]">
          <span className="h-[19px] self-stretch shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#a0aec0] relative text-center whitespace-nowrap z-[116]">
            اطلاعات شما مطابق سیاست حریم خصوصی سامانه ماه محافظت می‌شود.
          </span>
          <div className="flex w-[180px] gap-[16px] items-center shrink-0 flex-nowrap relative z-[117]">
            <span className="flex w-[76px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[118]">
              قوانین و مقررات
            </span>
            <span className="h-[19px] shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#a0aec0] relative text-left whitespace-nowrap z-[119]">
              |
            </span>
            <span className="flex w-[69px] h-[19px] justify-end items-start shrink-0 basis-auto font-['Vazirmatn'] text-[12px] font-normal leading-[18.75px] text-[#718096] relative text-right whitespace-nowrap z-[120]">
              حریم خصوصی
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
