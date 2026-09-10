import { ContactInfoColumn } from "./ContactInfoColumn";
import { SupportRequestForm } from "./SupportRequestForm";

export function ContactAndRequestSection() {
  return (
    <div className="flex pt-[20px] pr-[120px] pb-[40px] pl-[120px] gap-[40px] justify-end items-start self-stretch shrink-0 flex-nowrap relative z-[79]">
      <ContactInfoColumn />
      <SupportRequestForm />
    </div>
  );
}
