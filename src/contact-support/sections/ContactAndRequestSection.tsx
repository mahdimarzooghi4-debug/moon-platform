import { ContactInfoColumn } from "./ContactInfoColumn";
import { SupportRequestForm } from "./SupportRequestForm";

export function ContactAndRequestSection() {
  return (
    <>
    <div dir="rtl" className="self-stretch px-[clamp(16px,8.33vw,120px)] pt-6 text-right"><h2 className="text-2xl font-bold text-[#17324d]">ثبت درخواست پشتیبانی</h2><p className="mt-2 text-sm text-[#60758a]">موضوع را انتخاب کنید و اطلاعات لازم را وارد کنید تا درخواست شما به تیم مرتبط ارسال شود.</p></div>
    <div className="mah-contact-details flex pt-[20px] pr-[120px] pb-[40px] pl-[120px] gap-[40px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[79]">
      <SupportRequestForm />
      <ContactInfoColumn />
    </div>
    </>
  );
}
