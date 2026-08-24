import "./index.css";
import { MainNavigationSection } from "./sections/MainNavigationSection";
import { BreadcrumbSection } from "./sections/BreadcrumbSection";
import { SupportHeroSection } from "./sections/SupportHeroSection";
import { SupportTopicsSection } from "./sections/SupportTopicsSection";
import { QuickLinksSection } from "./sections/QuickLinksSection";
import { ContactAndRequestSection } from "./sections/ContactAndRequestSection";
import { FaqSection } from "./sections/FaqSection";
import { TrackingActionsSection } from "./sections/TrackingActionsSection";
import { SiteFooterSection } from "./sections/SiteFooterSection";

export default function Main() {
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
      <SiteFooterSection />
    </div>
  );
}
