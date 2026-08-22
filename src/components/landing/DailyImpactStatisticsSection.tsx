import { Box, Stack, Typography } from "@mui/material";

type ImpactStatistic = {
  id: string;
  value: string;
  unit: string;
  label: string;
  labelColor: string;
  iconBackground: string;
  iconColor: string;
  icon: "wallet" | "folder" | "briefcase" | "users" | "rocket";
};

const impactStatistics: ImpactStatistic[] = [
  {
    id: "raised-funds",
    value: "۱۸٫۴",
    unit: "میلیارد تومان",
    label: "منابع جذب‌شده",
    labelColor: "#e9811b",
    iconBackground: "#fdeddb",
    iconColor: "#e9811b",
    icon: "wallet",
  },
  {
    id: "active-projects",
    value: "۲۴",
    unit: "پروژه",
    label: "پروژه‌های فعال",
    labelColor: "#c5a056",
    iconBackground: "#f6f0e4",
    iconColor: "#c5a056",
    icon: "folder",
  },
  {
    id: "created-jobs",
    value: "۳۴۶",
    unit: "فرصت شغلی",
    label: "اشتغال ایجادشده",
    labelColor: "#159455",
    iconBackground: "#eaf8f0",
    iconColor: "#159455",
    icon: "briefcase",
  },
  {
    id: "beneficiaries",
    value: "۱۲٬۸۴۰",
    unit: "نفر",
    label: "افراد بهره‌مند",
    labelColor: "#c27a10",
    iconBackground: "#fff6e5",
    iconColor: "#c27a10",
    icon: "users",
  },
  {
    id: "startups",
    value: "۱٬۲۵۰",
    unit: "استارتاپ",
    label: "تعداد استارتاپ ها",
    labelColor: "#2094e3",
    iconBackground: "#eaf5fd",
    iconColor: "#2094e3",
    icon: "rocket",
  },
];

function StatisticIcon({ type, color }: { type: ImpactStatistic["icon"]; color: string }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (type === "wallet") {
    return (
      <Box component="svg" {...common}>
        <path d="M4 7.5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a3 3 0 0 1-3-3v-10a3 3 0 0 1 3-3h10" />
        <path d="M15.5 11.5H20v4h-4.5a2 2 0 1 1 0-4Z" />
      </Box>
    );
  }

  if (type === "folder") {
    return (
      <Box component="svg" {...common}>
        <path d="M3.5 6.5h6l2 2h9v9.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2Z" />
      </Box>
    );
  }

  if (type === "briefcase") {
    return (
      <Box component="svg" {...common}>
        <path d="M9 6V4.5h6V6" />
        <rect x="3.5" y="6" width="17" height="13.5" rx="2" />
        <path d="M3.5 11.5c5 2.5 12 2.5 17 0M10 13h4" />
      </Box>
    );
  }

  if (type === "users") {
    return (
      <Box component="svg" {...common}>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 19c.4-4 2.2-6 5.5-6s5.1 2 5.5 6" />
        <circle cx="17" cy="9" r="2.2" />
        <path d="M15.5 14c3.2-.4 5 1.2 5.5 4" />
      </Box>
    );
  }

  return (
    <Box component="svg" {...common}>
      <path d="M14.5 4.2c2.4-.8 4.2-.6 5.3-.3.3 1.1.5 2.9-.3 5.3-1 2.8-3.2 5-6.4 6.7l-4.9-4.9c1.7-3.2 3.9-5.4 6.3-6.8Z" />
      <circle cx="15.5" cy="8" r="1.5" />
      <path d="m9.5 14.5-3.8.8-1.7 3.2 3.2-1.7.8-3.8M9 10 5.2 9.4 3.5 11l4 1.3M13 14l1.3 4 1.6-1.7-.6-3.8" />
    </Box>
  );
}

export function DailyImpactStatisticsSection() {
  return (
    <Box
      component="section"
      aria-labelledby="impact-statistics-heading"
      dir="rtl"
      sx={{
        width: "100%",
        bgcolor: "#fff",
        px: { xs: 2, sm: 3, md: 6, lg: "120px" },
        py: { xs: 6, md: 7 },
        boxSizing: "border-box",
      }}
    >
      <Stack spacing={3.5} alignItems="center" sx={{ width: "100%", maxWidth: 1200, mx: "auto" }}>
        <Stack spacing={0.75} alignItems="center" sx={{ width: "100%", textAlign: "center" }}>
          <Typography
            id="impact-statistics-heading"
            component="h2"
            sx={{ m: 0, color: "#17324d", fontSize: { xs: 26, md: 32 }, fontWeight: 700, lineHeight: 1.55 }}
          >
            اثر ماه تا امروز
          </Typography>
          <Typography component="p" sx={{ m: 0, color: "#60758a", fontSize: 14, fontWeight: 400, lineHeight: 1.6 }}>
            آمار پروژه‌های تأییدشده و مشارکت‌های ثبت‌شده در سامانه ماه
          </Typography>
        </Stack>

        <Box
          role="list"
          aria-label="آمار اثر سامانه ماه"
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
              md: "repeat(3, minmax(0, 1fr))",
              lg: "repeat(5, minmax(0, 1fr))",
            },
            gap: 2,
            px: { xs: 0, lg: 5 },
            py: { xs: 0, lg: 3.5 },
            direction: "ltr",
            boxSizing: "border-box",
          }}
        >
          {impactStatistics.map((stat) => (
            <Box
              component="article"
              role="listitem"
              key={stat.id}
              dir="rtl"
              sx={{
                minWidth: 0,
                minHeight: 158,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: 0.75,
                p: "18px",
                bgcolor: "#fff",
                border: "1px solid #e5edf7",
                borderRadius: "16px",
                boxShadow: "0 4px 6px rgba(13, 31, 64, 0.05)",
                boxSizing: "border-box",
              }}
            >
              <Box
                aria-hidden="true"
                sx={{
                  width: 36,
                  height: 36,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: stat.iconBackground,
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
              >
                <StatisticIcon type={stat.icon} color={stat.iconColor} />
              </Box>

              <Stack direction="row" spacing={0.75} alignItems="baseline" sx={{ width: "100%", justifyContent: "flex-start" }}>
                <Typography component="strong" sx={{ color: "#17324d", fontSize: 32, fontWeight: 700, lineHeight: 1.55, whiteSpace: "nowrap" }}>
                  {stat.value}
                </Typography>
                <Typography component="span" sx={{ color: "#60758a", fontSize: 14, fontWeight: 500, lineHeight: "22px", whiteSpace: "nowrap" }}>
                  {stat.unit}
                </Typography>
              </Stack>

              <Typography component="p" sx={{ m: 0, width: "100%", color: stat.labelColor, fontSize: 14, fontWeight: 400, lineHeight: "22px", textAlign: "right" }}>
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Stack>
    </Box>
  );
}
