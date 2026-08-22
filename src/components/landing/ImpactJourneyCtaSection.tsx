import { Box, Button, Stack, Typography } from "@mui/material";

export function ImpactJourneyCtaSection() {
  const handleStartParticipation = () => window.dispatchEvent(new CustomEvent("start-participation"));
  return (
    <Box component="section" aria-labelledby="impact-journey-heading" dir="rtl" sx={{ width: "100%", bgcolor: "#fcfbf8", borderTop: "1px solid #e4ebf1", borderBottom: "1px solid #e4ebf1", px: { xs: 2, sm: 3, md: 6, lg: "120px" }, py: { xs: 6, md: 10 } }}>
      <Stack spacing={3} alignItems="center" sx={{ maxWidth: 1200, mx: "auto", textAlign: "center" }}>
        <Typography id="impact-journey-heading" component="h2" sx={{ color: "#17324d", fontSize: { xs: 24, sm: 28, md: 32 }, fontWeight: 800 }}>کمتر از یک دقیقه تا شروع یک اثر</Typography>
        <Typography component="p" sx={{ color: "#60758a", fontSize: 14 }}>پرداخت امن به حساب کمیته امداد و امکان پیگیری نتیجه مشارکت</Typography>
        <Button variant="contained" onClick={handleStartParticipation} aria-label="شروع مشارکت" sx={{ bgcolor: "#2094e3", "&:hover": { bgcolor: "#1785cf" } }}>شروع مشارکت</Button>
      </Stack>
    </Box>
  );
}
