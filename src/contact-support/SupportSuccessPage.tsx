import { MainNavigationSection } from "./sections/MainNavigationSection";

export default function SupportSuccessPage({ trackingCode }: { trackingCode: string }) {
  return (
    <div className="main-container flex w-[1440px] min-h-screen flex-col items-center flex-nowrap bg-[#fcfbf8] relative overflow-hidden mx-auto my-0">
      <MainNavigationSection />

      <div className="flex pt-[24px] pr-[120px] pb-0 pl-[120px] justify-end items-start self-stretch shrink-0 flex-nowrap relative">
        <span className="font-['Vazirmatn'] text-[14px] font-normal leading-[22px] text-[#60758a] text-right">
          صفحه اصلی / تماس با ما / ثبت درخواست
        </span>
      </div>

      <main className="flex px-[120px] py-[88px] justify-center items-center self-stretch grow" dir="rtl">
        <section className="flex w-[680px] p-[40px] flex-col gap-[24px] items-center bg-[#fff] rounded-[24px] border border-[#e4ebf1] shadow-[0_8px_28px_rgba(22,45,71,0.08)]">
          <div className="flex w-[72px] h-[72px] justify-center items-center rounded-full bg-[#eaf5fd] text-[#2094e3] text-[36px] font-bold" aria-hidden="true">
            ✓
          </div>

          <div className="flex flex-col gap-[10px] items-center self-stretch">
            <h1 className="m-0 font-['Vazirmatn'] text-[28px] font-extrabold leading-[44px] text-[#17324d] text-center">
              درخواست شما با موفقیت ثبت شد
            </h1>
            <p className="m-0 max-w-[540px] font-['Vazirmatn'] text-[14px] font-normal leading-[24px] text-[#60758a] text-center">
              درخواست شما ثبت شد. کد پیگیری را نگه دارید تا در صورت نیاز بتوانید آن را به تیم پشتیبانی اعلام کنید.
            </p>
          </div>

          <div className="flex w-full p-[20px] flex-col gap-[8px] items-center bg-[#fcfbf8] rounded-[14px] border border-[#e4ebf1]">
            <span className="font-['Vazirmatn'] text-[13px] font-normal leading-[20px] text-[#60758a]">کد پیگیری درخواست</span>
            <bdi dir="ltr" className="font-['Vazirmatn'] text-[20px] font-bold leading-[30px] text-[#17324d] tracking-[0.5px]">
              {trackingCode}
            </bdi>
          </div>

          <div className="flex gap-[12px] justify-center items-center self-stretch">
            <a href="/contact" className="flex min-w-[150px] h-[44px] px-[20px] justify-center items-center rounded-[12px] border border-[#e4ebf1] bg-[#fff] no-underline">
              <span className="font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#2094e3]">ثبت درخواست جدید</span>
            </a>
            <a href="/" className="flex min-w-[150px] h-[44px] px-[20px] justify-center items-center rounded-[12px] bg-[#2094e3] no-underline">
              <span className="font-['Vazirmatn'] text-[14px] font-medium leading-[22px] text-[#fff]">بازگشت به صفحه اصلی</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
