import { Box, Stack, Typography } from "@mui/material";

export function FeaturedProjectsSection() {
  return (
    <Box component="section" id="projects" aria-labelledby="featured-projects-heading" dir="rtl" sx={{ width: "100%", bgcolor: "#fff", px: { xs: 2, sm: 3, md: 6, lg: "120px" }, py: { xs: 7, md: 12 } }}>
      <Stack spacing={3} alignItems="center" sx={{ maxWidth: 1200, mx: "auto" }}>
        <Typography id="featured-projects-heading" component="h2" sx={{ color: "#17324d", fontSize: { xs: 24, md: 32 }, fontWeight: 800, textAlign: "center" }}>پروژه‌های منتخب</Typography>
        <Typography component="p" sx={{ m: 0, color: "#60758a", fontSize: 14, textAlign: "center" }}>کارت‌های پروژه با داده‌های اصلی Anima در مرحله بعد جایگزین می‌شوند.</Typography>
      </Stack>
    </Box>
  );
}
