import { Box, Button, Link, Stack } from "@mui/material";

const navigationLinks = [
  { label: "درباره ما", href: "#about" },
  { label: "تماس با ما", href: "#contact" },
  { label: "شرکت‌ها", href: "#companies" },
  { label: "استارتاپ‌ها", href: "#startups" },
  { label: "پروژه‌ها", href: "#projects" },
  { label: "صفحه اصلی", href: "#home" },
];

const actionLinks = [
  { label: "ورود کاربران", href: "#login", variant: "outline" },
  { label: "پیگیری مشارکت", href: "#participation-status", variant: "outline" },
  { label: "شروع مشارکت", href: "#start-participation", variant: "primary" },
] as const;

export function MainNavigationSection() {
  return (
    <Box component="header" id="home" dir="rtl" sx={{ width: "100%", bgcolor: "#fff", borderBottom: "1px solid #e4ebf1", px: { xs: 2, sm: 3, md: 6, lg: "120px" }, py: 2 }}>
      <Box sx={{ maxWidth: 1200, mx: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 3, flexDirection: { xs: "column", lg: "row" } }}>
        <Stack direction="row" spacing={1.5} sx={{ direction: "ltr", width: { xs: "100%", lg: "auto" }, justifyContent: { xs: "center", lg: "flex-start" }, flexWrap: "wrap" }}>
          {actionLinks.map((action) => {
            const isPrimary = action.variant === "primary";
            return (
              <Button key={action.href} component="a" href={action.href} variant={isPrimary ? "contained" : "outlined"} dir="rtl" sx={{ width: 120, borderWidth: isPrimary ? 0 : "1.5px", borderColor: "#2094e3", bgcolor: isPrimary ? "#2094e3" : "#fff", color: isPrimary ? "#fff" : "#2094e3", whiteSpace: "nowrap", "&:hover": { bgcolor: isPrimary ? "#1785cf" : "#f5fbff", borderColor: "#2094e3" }, "&:focus-visible": { outline: "2px solid #2094e3", outlineOffset: "2px" } }}>
                {action.label}
              </Button>
            );
          })}
        </Stack>

        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: { xs: 2, lg: 5 }, width: { xs: "100%", lg: "auto" }, minWidth: 0, direction: "ltr" }}>
          <Box component="nav" aria-label="ناوبری اصلی" sx={{ minWidth: 0, overflowX: { xs: "auto", lg: "visible" }, scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" } }}>
            <Stack component="ul" direction="row" spacing={3} sx={{ direction: "ltr", listStyle: "none", p: 0, m: 0, minWidth: "max-content", alignItems: "center" }}>
              {navigationLinks.map((link) => (
                <Box component="li" key={link.href}>
                  <Link href={link.href} dir="rtl" sx={{ color: "#17324d", fontSize: 14, fontWeight: 500, whiteSpace: "nowrap", "&:hover": { color: "#2094e3" }, "&:focus-visible": { outline: "2px solid #2094e3", outlineOffset: "2px" } }}>
                    {link.label}
                  </Link>
                </Box>
              ))}
            </Stack>
          </Box>

          <Link href="#home" aria-label="صفحه اصلی" sx={{ display: "flex", flexShrink: 0 }}>
            <Box component="img" src="/assets/chatgpt-image-1.png" alt="لوگوی سامانه ماه" sx={{ display: "block", width: { xs: 110, md: 137 }, height: "auto", maxHeight: 46, objectFit: "contain" }} />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
