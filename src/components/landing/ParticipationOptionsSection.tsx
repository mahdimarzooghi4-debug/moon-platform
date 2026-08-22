import { Box, Button, Stack, Typography } from "@mui/material";

type ParticipationOption = { id: string; title: string; description: string; features: string[]; buttonLabel: string; image: string; highlighted?: boolean };

const participationOptions: ParticipationOption[] = [
  { id: "startup", title: "برای استارتاپ‌ها", description: "پروژه اثر اجتماعی خود را ثبت کنید و پس از ارزیابی برای جذب سرمایه آماده شوید.", features: ["ثبت پروژه و شاخص‌های اثر اجتماعی", "ارزیابی توسط خانه خلاق و نوآوری آینه", "تعریف KPI و امکان تأمین مالی مرحله‌ای"], buttonLabel: "ثبت‌نام استارتاپ", image: "/assets/vector-4.svg" },
  { id: "organization", title: "برای شرکت‌ها و سازمان‌ها", description: "سرمایه‌گذاری اجتماعی سازمان خود را شفاف، قابل‌اندازه‌گیری و قابل‌گزارش مدیریت کنید.", features: ["حساب سازمانی", "گزارش مالی و اثر اجتماعی", "امکان دریافت گواهی ماده ۱۷۲"], buttonLabel: "ورود شرکت‌ها", image: "/assets/vector-2.svg", highlighted: true },
  { id: "individual", title: "برای افراد حقیقی", description: "سریع و بدون ساخت حساب کاربری در پروژه‌های اثر اجتماعی مشارکت کنید.", features: ["بدون ثبت‌نام", "فقط شماره موبایل و کد تأیید", "بدون گواهی مالیاتی"], buttonLabel: "مشارکت فردی", image: "/assets/vector-3.svg" },
];

export function ParticipationOptionsSection() {
  const handleParticipationClick = (optionId: string) => window.dispatchEvent(new CustomEvent("participation-option-selected", { detail: { optionId } }));
  return (
    <Box component="section" aria-labelledby="participation-options-heading" dir="rtl" sx={{ width: "100%", bgcolor: "#fcfbf8", px: { xs: 2, sm: 3, md: 6, lg: "120px" }, py: { xs: 7, md: 12 } }}>
      <Stack spacing={5} alignItems="center" sx={{ maxWidth: 1200, mx: "auto" }}>
        <Stack component="header" spacing={1.5} alignItems="center" sx={{ textAlign: "center" }}>
          <Typography id="participation-options-heading" component="h2" sx={{ color: "#17324d", fontSize: { xs: 22, sm: 24 }, fontWeight: 800 }}>مسیرهای ورود و مشارکت در ماه</Typography>
          <Typography component="p" sx={{ color: "#60758a", fontSize: 14 }}>متناسب با نقش خود، مسیر مناسب را انتخاب کنید.</Typography>
        </Stack>
        <Box role="list" sx={{ width: "100%", display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))", lg: "repeat(3, minmax(0, 1fr))" }, gap: 3 }}>
          {participationOptions.map((option) => (
            <Box component="article" key={option.id} role="listitem" aria-labelledby={`${option.id}-title`} sx={{ minHeight: { lg: 432 }, display: "flex", flexDirection: "column", gap: 3, p: { xs: 3, md: 4 }, bgcolor: "#fff", borderRadius: "24px", border: option.highlighted ? "2px solid #2094e3" : "1px solid #e4ebf1", boxShadow: option.highlighted ? "0 8px 20px rgba(12,51,114,.12)" : "none" }}>
              <Stack spacing={1.5} alignItems="flex-end">
                <Box aria-hidden="true" sx={{ width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "#e0f2fe", borderRadius: "16px" }}><Box component="img" src={option.image} alt="" sx={{ width: 24, height: 24 }} /></Box>
                <Typography id={`${option.id}-title`} component="h3" sx={{ width: "100%", color: "#17324d", fontSize: 20, fontWeight: 700, textAlign: "right" }}>{option.title}</Typography>
                <Typography component="p" sx={{ width: "100%", color: "#60758a", fontSize: 14, lineHeight: 1.8, textAlign: "right" }}>{option.description}</Typography>
              </Stack>
              <Stack component="ul" spacing={1.5} sx={{ p: 0, m: 0, listStyle: "none" }}>{option.features.map((feature) => <Box component="li" key={feature} sx={{ display: "flex", gap: 1, color: "#60758a", fontSize: 14 }}><Box component="span" aria-hidden="true" sx={{ color: "#2094e3", fontWeight: 700 }}>✓</Box><Box component="span">{feature}</Box></Box>)}</Stack>
              <Box sx={{ flexGrow: 1 }} />
              <Button onClick={() => handleParticipationClick(option.id)} sx={{ width: "100%", color: "#fff", background: "linear-gradient(90deg,#2094e3 0%,#15b2c1 100%)", "&:hover": { background: "linear-gradient(90deg,#1785cf 0%,#12a3b1 100%)" } }}>{option.buttonLabel}</Button>
            </Box>
          ))}
        </Box>
      </Stack>
    </Box>
  );
}
