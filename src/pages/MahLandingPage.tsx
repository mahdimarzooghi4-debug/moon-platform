import { Box } from "@mui/material";
import { DailyImpactStatisticsSection } from "../components/landing/DailyImpactStatisticsSection";
import { FeaturedProjectsSection } from "../components/landing/FeaturedProjectsSection";
import { ImpactJourneyCtaSection } from "../components/landing/ImpactJourneyCtaSection";
import { MainNavigationSection } from "../components/landing/MainNavigationSection";
import { NewsAndEventsSection } from "../components/landing/NewsAndEventsSection";
import { ParticipationOptionsSection } from "../components/landing/ParticipationOptionsSection";
import { SiteFooterSection } from "../components/landing/SiteFooterSection";
import { SocialImpactHeroSection } from "../components/landing/SocialImpactHeroSection";
import { TrustedPartnersSection } from "../components/landing/TrustedPartnersSection";

export function MahLandingPage() {
  return (
    <Box component="main" dir="rtl" sx={{ minHeight: "100vh", width: "100%", overflowX: "hidden", bgcolor: "#fcfbf8" }}>
      <MainNavigationSection />
      <SocialImpactHeroSection />
      <DailyImpactStatisticsSection />
      <ParticipationOptionsSection />
      <FeaturedProjectsSection />
      <TrustedPartnersSection />
      <NewsAndEventsSection />
      <ImpactJourneyCtaSection />
      <SiteFooterSection />
    </Box>
  );
}
