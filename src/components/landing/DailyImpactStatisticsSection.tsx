import { Box, Stack, Typography } from "@mui/material";

export function DailyImpactStatisticsSection() {
  return (
    <Box component="section" aria-labelledby="impact-statistics-heading" dir="rtl" sx={{ width: "100%", bgcolor: "#fff", px: { xs: 2, sm: 3, md: 6, lg: "120px" }, py: { xs: 6, md: 7 } }}>
      <Stack spacing={3} alignItems="center" sx={{ maxWidth: 1200, mx: "auto" }}>
        <Typography id="impact-statistics-heading" component="h2" sx={{ color: "#17324d", fontSize: { xs: 24, md: 32 }, fontWeight: 700, textAlign: "center" }}>اثر ماه در یک نگاه</Typography>
        <Typography component="p" sx={{ m: 0, color: "#60758a", fontSize: 14, textAlign: "center" }}>داده‌های نهایی این بخش بعد از افزودن فایل اصلی Anima تکمیل می‌شود.</Typography>
      </Stack>
    </Box>
  );
}
