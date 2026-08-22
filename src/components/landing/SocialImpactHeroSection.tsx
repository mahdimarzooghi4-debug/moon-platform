import { Box, Button, Stack, Typography } from "@mui/material";

export function SocialImpactHeroSection() {
  const handleParticipation = () => window.dispatchEvent(new CustomEvent("start-participation"));
  const handleIntroduction = () => window.dispatchEvent(new CustomEvent("play-introduction-video"));

  return (
    <Box component="section" aria-labelledby="social-impact-heading" dir="rtl" sx={{ width: "100%", bgcolor: "#fcfbf8", px: { xs: 2, sm: 3, md: 6, lg: "120px" }, py: { xs: 7, md: 12 } }}>
      <Box sx={{ maxWidth: 1200, mx: "auto", display: "grid", gridTemplateColumns: { xs: "1fr", lg: "repeat(2, minmax(0, 1fr))" }, gap: { xs: 5, lg: 8 }, alignItems: "center", direction: { xs: "rtl", lg: "ltr" } }}>
        <Box dir="rtl" sx={{ minWidth: 0 }}>
          <Box aria-label="بخش معرفی تصویری ماه" sx={{ position: "relative", width: "100%", height: { xs: 260, sm: 320, md: 380 }, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", borderRadius: "24px", bgcolor: "#dfe9f0", backgroundImage: "linear-gradient(rgba(17,30,48,.3), rgba(17,30,48,.3)), url('/assets/hero-cover.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
            <Box component="button" type="button" onClick={handleIntroduction} aria-label="پخش ویدیوی معرفی ماه" sx={{ width: 72, height: 72, p: 0, border: 0, bgcolor: "#2094e3", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", "&:hover": { bgcolor: "#1785cf" }, "&:focus-visible": { outline: "3px solid #fff", outlineOffset: "3px" } }}>
              <Box component="img" src="/assets/image.svg" alt="" aria-hidden="true" sx={{ width: 24, height: 24 }} />
            </Box>
          </Box>
        </Box>

        <Stack dir="rtl" spacing={3} alignItems="flex-end" sx={{ minWidth: 0, gridRow: { xs: 1, lg: "auto" } }}>
          <Typography id="social-impact-heading" component="h1" sx={{ width: "100%", m: 0, color: "#17324d", fontWeight: 800, textAlign: "right", fontSize: { xs: 32, sm: 40, md: 48 }, lineHeight: { xs: 1.6, md: "68px" } }}>
            تغییر یک سرنوشت،<br />از انتخاب ساده امروز ما<br />شروع می‌شود
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ width: { xs: "100%", sm: "auto" }, direction: "ltr" }}>
            <Button variant="outlined" onClick={handleIntroduction} sx={{ width: { xs: "100%", sm: 167 }, bgcolor: "#fff", borderColor: "#e4ebf1", color: "#2094e3", "&:hover": { borderColor: "#2094e3", bgcolor: "#f5fbff" } }}>معرفی ماه در ۹۰ ثانیه</Button>
            <Button variant="contained" onClick={handleParticipation} sx={{ width: { xs: "100%", sm: "auto" }, bgcolor: "#2094e3", "&:hover": { bgcolor: "#1785cf" } }}>شروع مشارکت</Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
