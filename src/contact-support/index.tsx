import "./index.css";
import { MainNavigationSection } from "./sections/MainNavigationSection";
import { BreadcrumbSection } from "./sections/BreadcrumbSection";
import { SupportHeroSection } from "./sections/SupportHeroSection";
import { SupportTopicsSection } from "./sections/SupportTopicsSection";
import { QuickLinksSection } from "./sections/QuickLinksSection";
import { ContactAndRequestSection } from "./sections/ContactAndRequestSection";
import { FaqSection } from "./sections/FaqSection";
import { TrackingActionsSection } from "./sections/TrackingActionsSection";
import SupportSuccessPage from "./SupportSuccessPage";

export default function Main() {
  const trackingCode = new URLSearchParams(window.location.search).get("submitted");

  if (trackingCode) {
    return <SupportSuccessPage trackingCode={trackingCode} />;
  }

  return (
    <div className="main-container flex w-[1440px] flex-col items-center flex-nowrap bg-[#fcfbf8] relative overflow-hidden mx-auto my-0">
      <MainNavigationSection />
      <BreadcrumbSection />
      <SupportHeroSection />
      <SupportTopicsSection />
      <QuickLinksSection />
      <ContactAndRequestSection />
      <FaqSection />
      <TrackingActionsSection />
    </div>
  );
}
