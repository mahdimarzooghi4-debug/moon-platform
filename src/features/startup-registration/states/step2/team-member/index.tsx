import { FormEvent, useState } from "react";

const STEP2_PATH = "/register/startup/states/step2";

export default function StartupTeamMemberAddPage() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [employmentType, setEmploymentType] = useState<"full-time" | "part-time">("full-time");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");

  function goBack() {
    window.location.assign(STEP2_PATH);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const member = {
      name: name.trim(),
      role: role.trim(),
      employmentType,
      phone: phone.trim(),
      email: email.trim(),
      linkedin: linkedin.trim(),
    };

    sessionStorage.setItem("mah-startup-team-member", JSON.stringify(member));
    window.location.assign(`${STEP2_PATH}?memberAdded=1`);
  }

  return (
    <div className="min-h-screen bg-[#f7fafc] font-['Vazirmatn']" dir="ltr">
      <header className="flex h-[80px] items-center justify-between border-b border-[#e4ebf1] bg-white px-[120px]">
        <div className="flex items-center gap-[20px] text-[14px] font-medium" dir="rtl">
          <button type="button" onClick={() => window.location.assign("/auth")} className="text-[#718096]">
            بازگشت به ورود
          </button>
          <button type="button" onClick={() => window.location.assign("/")} className="text-[#2094e3]">
            بازگشت به صفحه اصلی
          </button>
        </div>
        <img src="/assets/codia/PHNkOFHS4y.png" alt="سامانه ماه" className="h-[46px] w-[137px] object-contain" />
      </header>

      <main className="mx-auto flex w-[1000px] flex-col gap-[24px] py-[48px]" dir="rtl">
        <section className="flex flex-col gap-[16px]">
          <div className="flex items-center justify-between">
            <span className="text-[14px] font-normal text-[#159455]">✓ ذخیره خودکار انجام شد</span>
            <div className="flex items-center gap-[16px]">
              <span className="rounded-[8px] bg-[#eaf5fd] px-[12px] py-[4px] text-[13px] font-medium text-[#2094e3]">
                مرحله ۲ از ۴
              </span>
              <h1 className="m-0 text-[24px] font-bold text-[#1a202c]">افزودن عضو جدید به تیم</h1>
            </div>
          </div>
          <p className="m-0 text-right text-[14px] text-[#718096]">
            مشخصات عضو اصلی تیم استارتاپ را وارد کنید. این اطلاعات در بخش «محصول و تیم» نمایش داده می‌شود.
          </p>
        </section>

        <section className="flex items-center justify-center gap-[16px] py-[16px] text-[14px]">
          <div className="flex items-center gap-[8px] text-[#718096]">
            <span>بازبینی و ارسال</span><span className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#e2e8f0] text-[12px] font-bold">۴</span>
          </div>
          <div className="flex items-center gap-[8px] text-[#718096]">
            <span>اثر اجتماعی و مدارک</span><span className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#e2e8f0] text-[12px] font-bold">۳</span><span className="h-px w-[40px] bg-[#e2e8f0]" />
          </div>
          <div className="flex items-center gap-[8px] font-bold text-[#2094e3]">
            <span>محصول و تیم</span><span className="flex h-[28px] w-[28px] items-center justify-center rounded-full border-[1.5px] border-[#2094e3] bg-[#eaf5fd] text-[12px]">۲</span><span className="h-px w-[40px] bg-[#2094e3]" />
          </div>
          <div className="flex items-center gap-[8px] text-[#159455]">
            <span>اطلاعات پایه</span><span className="flex h-[28px] w-[28px] items-center justify-center rounded-full border-[1.5px] border-[#159455] bg-[#eaf8f0] text-[12px] font-bold">✓</span>
          </div>
        </section>

        <form onSubmit={handleSubmit} className="flex flex-col gap-[28px] rounded-[20px] border border-[#e4ebf1] bg-white p-[36px] shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
          <div className="flex flex-col gap-[6px] border-b border-[#e4ebf1] pb-[16px] text-right">
            <h2 className="m-0 text-[18px] font-bold text-[#1a202c]">اطلاعات عضو تیم</h2>
            <p className="m-0 text-[14px] text-[#718096]">نام، نقش و نوع همکاری عضو را تکمیل کنید.</p>
          </div>

          <div className="grid grid-cols-2 gap-[16px]">
            <label className="flex flex-col gap-[8px] text-right text-[14px] font-semibold text-[#2d3748]">
              <span>نام و نام خانوادگی <b className="text-[#e53e3e]">*</b></span>
              <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="مثلاً مریم احمدی" className="h-[48px] rounded-[12px] border border-[#e4ebf1] px-[16px] text-right font-normal" />
            </label>
            <label className="flex flex-col gap-[8px] text-right text-[14px] font-semibold text-[#2d3748]">
              <span>سمت در استارتاپ <b className="text-[#e53e3e]">*</b></span>
              <input required value={role} onChange={(e) => setRole(e.target.value)} placeholder="مثلاً مدیر محصول" className="h-[48px] rounded-[12px] border border-[#e4ebf1] px-[16px] text-right font-normal" />
            </label>
          </div>

          <div className="flex flex-col gap-[8px] text-right">
            <span className="text-[14px] font-semibold text-[#2d3748]">نوع همکاری <b className="text-[#e53e3e]">*</b></span>
            <div className="flex justify-end gap-[24px] text-[14px] text-[#4a5568]">
              <label className="flex cursor-pointer items-center gap-[8px]"><input type="radio" checked={employmentType === "part-time"} onChange={() => setEmploymentType("part-time")} /> پاره‌وقت</label>
              <label className="flex cursor-pointer items-center gap-[8px]"><input type="radio" checked={employmentType === "full-time"} onChange={() => setEmploymentType("full-time")} /> تمام‌وقت</label>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[16px]">
            <label className="flex flex-col gap-[8px] text-right text-[14px] font-semibold text-[#2d3748]">
              <span>شماره موبایل</span>
              <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="۰۹۱۲۳۴۵۶۷۸۹" inputMode="tel" className="h-[48px] rounded-[12px] border border-[#e4ebf1] px-[16px] text-right font-normal" />
            </label>
            <label className="flex flex-col gap-[8px] text-right text-[14px] font-semibold text-[#2d3748]">
              <span>ایمیل</span>
              <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" type="email" dir="ltr" className="h-[48px] rounded-[12px] border border-[#e4ebf1] px-[16px] text-right font-normal" />
            </label>
          </div>

          <label className="flex flex-col gap-[8px] text-right text-[14px] font-semibold text-[#2d3748]">
            <span>لینکدین یا شبکه اجتماعی (اختیاری)</span>
            <input value={linkedin} onChange={(e) => setLinkedin(e.target.value)} placeholder="linkedin.com/in/..." dir="ltr" className="h-[48px] rounded-[12px] border border-[#e4ebf1] px-[16px] text-right font-normal" />
          </label>

          <div className="flex items-center justify-between border-t border-[#e4ebf1] pt-[24px]">
            <button type="button" onClick={goBack} className="h-[44px] rounded-[12px] border border-[#e2e8f0] px-[20px] text-[14px] font-medium text-[#4a5568]">
              انصراف و بازگشت
            </button>
            <button type="submit" className="h-[44px] rounded-[12px] bg-[#2094e3] px-[24px] text-[14px] font-medium text-white">
              افزودن عضو به تیم
            </button>
          </div>
        </form>
      </main>

      <footer className="pb-[40px] pt-[24px] text-center text-[12px] text-[#a0aec0]" dir="rtl">
        اطلاعات شما مطابق سیاست حریم خصوصی سامانه ماه محافظت می‌شود.
      </footer>
    </div>
  );
}
