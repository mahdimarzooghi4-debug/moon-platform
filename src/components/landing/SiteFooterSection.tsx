import { Box, Link, Stack, Typography } from "@mui/material";

const quickLinks = ["پروژه‌ها", "برای شرکت‌ها", "نحوه مشارکت", "ثبت‌نام استارتاپ", "اخبار و رویدادها"];
const supportLinks = ["تماس با ما", "سؤالات متداول", "پیگیری مشارکت"];
const legalLinks = ["قوانین و مقررات", "حریم خصوصی"];

function FooterLinkGroup({ title, links }: { title: string; links: string[] }) {
  return <Box component="nav" aria-label={title} sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}><Typography component="h2" sx={{ color: "#fff", fontSize: 14, fontWeight: 700 }}>{title}</Typography>{links.map((link) => <Link key={link} href="#" sx={{ color: "#e4ebf1", fontSize: 13, "&:hover": { opacity: .8 } }}>{link}</Link>)}</Box>;
}

export function SiteFooterSection() {
  return (
    <Box component="footer" id="contact" dir="rtl" sx={{ width: "100%", bgcolor: "#111e30", px: { xs: 2, sm: 3, md: 6, lg: "120px" }, pt: { xs: 6, md: 10 }, pb: 5 }}>
      <Stack spacing={8} sx={{ maxWidth: 1200, mx: "auto" }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2,minmax(0,1fr))", md: "repeat(3,minmax(0,1fr))", lg: "220px 150px 160px 180px minmax(240px,298px)" }, gap: { xs: 5, lg: 6 }, alignItems: "start" }}>
          <Box component="address" sx={{ m: 0, fontStyle: "normal", display: "flex", flexDirection: "column", gap: 1.5 }}><Typography component="h2" sx={{ color: "#fff", fontSize: 14, fontWeight: 700 }}>ارتباط با ما</Typography><Link href="tel:+982188888888" sx={{ color: "#e4ebf1", fontSize: 13 }}>تلفن: ۰۲۱-۸۸۸۸۸۸۸۸</Link><Link href="mailto:info@mahplatform.ir" sx={{ color: "#e4ebf1", fontSize: 13 }}>ایمیل: info@mahplatform.ir</Link><Box component="img" src="/assets/social-icons.svg" alt="شبکه‌های اجتماعی ماه" sx={{ width: "auto", height: 26, mt: 1, alignSelf: "flex-start" }} /></Box>
          <FooterLinkGroup title="حقوقی" links={legalLinks} /><FooterLinkGroup title="پشتیبانی" links={supportLinks} /><FooterLinkGroup title="دسترسی سریع" links={quickLinks} />
          <Box component="section" aria-label="درباره سامانه ماه" sx={{ display: "flex", flexDirection: "column", gap: 1.75 }}><Box component="img" src="/assets/footer-logo.png" alt="سامانه ماه" sx={{ width: { xs: 180, md: 210 }, height: "auto", maxHeight: 70, objectFit: "contain", alignSelf: "flex-start" }} /><Typography component="p" sx={{ m: 0, color: "#e4ebf1", fontSize: 13, lineHeight: "22px" }}>سامانه مشارکت در پروژه‌های اثر اجتماعی با مسیر مالی شفاف و اثر قابل‌اندازه‌گیری.</Typography></Box>
        </Box>
        <Stack spacing={.5} alignItems="center" sx={{ pt: 2.5, borderTop: "1px solid rgba(255,255,255,.12)", textAlign: "center" }}><Typography component="p" sx={{ m: 0, color: "#e4ebf1", fontSize: 12 }}>طراحی و توسعه با هدف ارتقای عدالت اجتماعی</Typography><Typography component="p" sx={{ m: 0, color: "#e4ebf1", fontSize: 12 }}>تمامی حقوق برای سامانه ماه محفوظ است.</Typography></Stack>
      </Stack>
    </Box>
  );
}
