import { Box, Stack, Typography } from "@mui/material";

const trustedPartners = [
  { name: "راهکار نو", icon: "/assets/vector-5.svg" },
  { name: "پیشرو", icon: "/assets/vector-7.svg" },
  { name: "هم‌آفرین", icon: "/assets/vector-9.svg" },
  { name: "فردای روشن", icon: "/assets/vector-6.svg" },
  { name: "توسعه آریا", icon: "/assets/vector-8.svg" },
  { name: "سپهر نو", icon: "/assets/vector-10.svg" },
];

export function TrustedPartnersSection() {
  return (
    <Box component="section" aria-labelledby="trusted-partners-heading" dir="rtl" sx={{ width: "100%", px: { xs: 2, sm: 3, md: 6, lg: "120px" }, py: { xs: 6, md: 8 } }}>
      <Stack spacing={4} alignItems="center" sx={{ maxWidth: 1200, mx: "auto" }}>
        <Stack component="header" spacing={1} alignItems="center" sx={{ textAlign: "center" }}>
          <Typography id="trusted-partners-heading" component="h2" sx={{ color: "#17324d", fontSize: { xs: 24, sm: 28, md: 32 }, fontWeight: 700 }}>شرکت‌هایی که به ماه اعتماد کرده‌اند</Typography>
          <Typography component="p" sx={{ color: "#60758a", fontSize: 14 }}>همراهان سازمانی در مسیر سرمایه‌گذاری اجتماعی شفاف و اثرگذار</Typography>
        </Stack>
        <Box component="ul" aria-label="فهرست شرکای مورد اعتماد" sx={{ width: "100%", m: 0, p: 0, listStyle: "none", display: "grid", gridTemplateColumns: { xs: "repeat(2,minmax(0,1fr))", sm: "repeat(3,minmax(0,1fr))", lg: "repeat(6,minmax(0,1fr))" }, gap: 3 }}>
          {trustedPartners.map((partner) => <Box component="li" key={partner.name} sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1.25, opacity: .7 }}><Typography component="span" sx={{ color: "#606d7c", fontSize: { xs: 17, md: 22 }, fontWeight: 700, whiteSpace: "nowrap" }}>{partner.name}</Typography><Box aria-hidden="true" sx={{ width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "#2094e3", borderRadius: "12px" }}><Box component="img" src={partner.icon} alt="" sx={{ width: 14, height: 14 }} /></Box></Box>)}
        </Box>
      </Stack>
    </Box>
  );
}
