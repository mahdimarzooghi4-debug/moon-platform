import { Box, Button, Stack, Typography } from "@mui/material";

type ProjectMetric = {
  label: string;
  value: string;
};

type Project = {
  id: string;
  title: string;
  province: string;
  field: string;
  image: string;
  metrics: ProjectMetric[];
  raised: string;
  goal: string;
  percentage: number;
};

const projects: Project[] = [
  {
    id: "family-health",
    title: "سلامت خانواده",
    province: "سیستان و بلوچستان",
    field: "سلامت و بهداشت",
    image: "/assets/frame-3.png",
    metrics: [
      { label: "پوشش روستایی", value: "۴۲ روستا" },
      { label: "افراد بهره‌مند", value: "۲٬۵۰۰ فرد" },
      { label: "پوشش خدمات", value: "۷۴٪ کل" },
      { label: "مراکز سلامت", value: "۸ مرکز" },
    ],
    raised: "۱۷۸٫۵ میلیون تومان",
    goal: "۳۵۰ میلیون",
    percentage: 51,
  },
  {
    id: "skills-for-teens",
    title: "مهارت برای نوجوانان",
    province: "اصفهان",
    field: "آموزش و اشتغال",
    image: "/assets/frame.png",
    metrics: [
      { label: "فرصت شغلی", value: "۹۰ فرصت" },
      { label: "آموزش‌دیده", value: "۳۵۰ نوجوان" },
      { label: "اشتغال‌پذیری", value: "۷۰٪ افزایش" },
      { label: "مراکز علمی", value: "۱۲ مدرسه" },
    ],
    raised: "۲۹۶ میلیون تومان",
    goal: "۴۰۰ میلیون",
    percentage: 74,
  },
  {
    id: "rural-women-employment",
    title: "اشتغال زنان روستایی",
    province: "گلستان",
    field: "کسب‌وکار و اشتغال",
    image: "/assets/frame-2.png",
    metrics: [
      { label: "افراد بهره‌مند", value: "۴۵۰ فرد" },
      { label: "فرصت شغلی", value: "۱۲۰ فرصت" },
      { label: "توسعه درآمدی", value: "۳۰٪ افزایش" },
      { label: "پوشش جغرافیایی", value: "۲۵ روستا" },
    ],
    raised: "۲۳۲ میلیون تومان",
    goal: "۴۰۰ میلیون",
    percentage: 58,
  },
];

export function FeaturedProjectsSection() {
  const handleProjectClick = (projectId: string) => {
    window.dispatchEvent(
      new CustomEvent("featured-project-selected", {
        detail: { projectId },
      }),
    );
  };

  const handleViewAllClick = () => {
    window.dispatchEvent(new CustomEvent("view-all-projects"));
  };

  return (
    <Box
      component="section"
      id="projects"
      aria-labelledby="featured-projects-heading"
      dir="rtl"
      sx={{
        width: "100%",
        bgcolor: "#fff",
        px: { xs: 2, sm: 3, md: 6, lg: "120px" },
        py: { xs: 7, md: 12 },
        boxSizing: "border-box",
      }}
    >
      <Stack spacing={5} alignItems="center" sx={{ width: "100%", maxWidth: 1200, mx: "auto" }}>
        <Stack spacing={1.5} alignItems="center" sx={{ width: "100%", textAlign: "center" }}>
          <Typography
            id="featured-projects-heading"
            component="h2"
            sx={{
              m: 0,
              color: "#17324d",
              fontSize: { xs: 24, md: 28 },
              fontWeight: 800,
              lineHeight: 1.55,
            }}
          >
            یک پروژه را انتخاب کن
          </Typography>
          <Typography component="p" sx={{ m: 0, color: "#60758a", fontSize: { xs: 14, md: 15 }, fontWeight: 400, lineHeight: 1.6 }}>
            اثر اجتماعی هر پروژه از قبل مشخص، تأییدشده و قابل‌اندازه‌گیری است
          </Typography>
        </Stack>

        <Box
          role="list"
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, minmax(0, 1fr))",
              lg: "repeat(3, minmax(0, 1fr))",
            },
            gap: 3,
            alignItems: "stretch",
            direction: "ltr",
          }}
        >
          {projects.map((project) => (
            <Box
              component="article"
              role="listitem"
              key={project.id}
              dir="rtl"
              sx={{
                minWidth: 0,
                minHeight: { xs: "auto", lg: 567 },
                display: "flex",
                flexDirection: "column",
                gap: 2,
                p: 3,
                bgcolor: "#fcfbf8",
                border: "1px solid #e4ebf1",
                borderRadius: "24px",
                boxShadow: "0 4px 16px rgba(23, 46, 71, 0.08)",
                boxSizing: "border-box",
              }}
            >
              <Box
                component="img"
                src={project.image}
                alt={project.title}
                sx={{
                  display: "block",
                  width: "100%",
                  height: 180,
                  objectFit: "cover",
                  borderRadius: "16px",
                  flexShrink: 0,
                  bgcolor: "#eef3f7",
                }}
              />

              <Stack spacing={1} sx={{ width: "100%" }}>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  justifyContent="flex-start"
                  sx={{ width: "100%", minWidth: 0, flexWrap: "wrap" }}
                >
                  <Typography component="span" sx={{ color: "#60758a", fontSize: 12, fontWeight: 400, whiteSpace: "nowrap" }}>
                    استان: {project.province}
                  </Typography>
                  <Typography component="span" aria-hidden="true" sx={{ color: "#60758a", fontSize: 12 }}>
                    |
                  </Typography>
                  <Typography component="span" sx={{ color: "#2094e3", fontSize: 12, fontWeight: 400, whiteSpace: "nowrap" }}>
                    حوزه: {project.field}
                  </Typography>
                </Stack>

                <Typography component="h3" sx={{ m: 0, width: "100%", color: "#17324d", fontSize: 18, fontWeight: 700, lineHeight: 1.55, textAlign: "right" }}>
                  {project.title}
                </Typography>
              </Stack>

              <Box
                component="dl"
                sx={{
                  width: "100%",
                  m: 0,
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gap: "12px 16px",
                  direction: "rtl",
                }}
              >
                {project.metrics.map((metric) => (
                  <Box key={`${project.id}-${metric.label}`} sx={{ minWidth: 0, textAlign: "right" }}>
                    <Typography component="dt" sx={{ m: 0, color: "#60758a", fontSize: 12, fontWeight: 400, lineHeight: 1.55 }}>
                      {metric.label}
                    </Typography>
                    <Typography component="dd" sx={{ m: 0, mt: 0.25, color: "#17324d", fontSize: 14, fontWeight: 700, lineHeight: 1.55 }}>
                      {metric.value}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Stack spacing={1} sx={{ width: "100%" }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: "100%", direction: "rtl" }}>
                  <Typography component="span" sx={{ color: "#17324d", fontSize: 12, fontWeight: 400, whiteSpace: "nowrap" }}>
                    {project.raised}
                  </Typography>
                  <Typography component="span" sx={{ color: "#60758a", fontSize: 12, fontWeight: 400, whiteSpace: "nowrap" }}>
                    هدف: {project.goal}
                  </Typography>
                </Stack>

                <Box
                  role="progressbar"
                  aria-label={`درصد تأمین مالی پروژه ${project.title}`}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={project.percentage}
                  sx={{
                    width: "100%",
                    height: 8,
                    overflow: "hidden",
                    bgcolor: "#e4ebf1",
                    borderRadius: "4px",
                    direction: "rtl",
                  }}
                >
                  <Box sx={{ width: `${project.percentage}%`, height: "100%", bgcolor: "#2094e3" }} />
                </Box>

                <Typography component="p" sx={{ m: 0, width: "100%", color: "#2094e3", fontSize: 12, fontWeight: 700, lineHeight: 1.55, textAlign: "right" }}>
                  {project.percentage.toLocaleString("fa-IR")}٪ تأمین شده
                </Typography>
              </Stack>

              <Box sx={{ flexGrow: 1 }} />

              <Button
                type="button"
                variant="contained"
                disableElevation
                onClick={() => handleProjectClick(project.id)}
                aria-label={`مشاهده و مشارکت در پروژه ${project.title}`}
                sx={{
                  width: "100%",
                  minHeight: 44,
                  mt: "auto",
                  bgcolor: "#2094e3",
                  borderRadius: "12px",
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 500,
                  textTransform: "none",
                  "&:hover": { bgcolor: "#1785cf" },
                }}
              >
                مشاهده و مشارکت
              </Button>
            </Box>
          ))}
        </Box>

        <Button
          type="button"
          variant="text"
          onClick={handleViewAllClick}
          aria-label="مشاهده همه پروژه‌ها"
          sx={{
            minHeight: 42,
            pt: 2.5,
            px: 0.5,
            color: "#2094e3",
            fontSize: 14,
            fontWeight: 700,
            textTransform: "none",
            gap: 1,
            "&:hover": { bgcolor: "transparent", color: "#1785cf" },
          }}
        >
          <Box component="span" aria-hidden="true" sx={{ fontSize: 18, lineHeight: 1 }}>
            ←
          </Box>
          مشاهده همه پروژه‌ها
        </Button>
      </Stack>
    </Box>
  );
}
