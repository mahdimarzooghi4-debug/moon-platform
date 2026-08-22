import { Box, Link, Stack, Typography } from "@mui/material";

type NewsItem = { id: string; image: string; date: string; category: string; categoryBackground: string; categoryColor: string; title: string; description: string; href: string };
const newsItems: NewsItem[] = [
  { id: "rural-women-employment", image: "/assets/image-2.png", date: "۲۰ مرداد ۱۴۰۵", category: "پروژه‌ها", categoryBackground: "#e0f2fe", categoryColor: "#2094e3", title: "آغاز مرحله دوم تأمین مالی پروژه اشتغال زنان روستایی", description: "پس از تأیید تحقق KPIهای مرحله نخست، تأمین مالی مرحله دوم این پروژه آغاز شد.", href: "#rural-women-employment" },
  { id: "organizational-partners", image: "/assets/image-3.png", date: "۱۶ مرداد ۱۴۰۵", category: "همراهان ماه", categoryBackground: "#eaf8f0", categoryColor: "#159455", title: "پیوستن سه شرکت جدید به شبکه همراهان سازمانی ماه", description: "سه مجموعه جدید برای سرمایه‌گذاری شفاف در پروژه‌های اثر اجتماعی به سامانه ماه پیوستند.", href: "#organizational-partners" },
  { id: "spring-impact-report", image: "/assets/image-4.png", date: "۱۰ مرداد ۱۴۰۵", category: "گزارش اثر", categoryBackground: "#fff6e5", categoryColor: "#c5a056", title: "انتشار گزارش اثر اجتماعی فصل بهار ۱۴۰۵", description: "نتایج اشتغال، آموزش، سلامت و توانمندسازی پروژه‌های فعال ماه منتشر شد.", href: "#spring-impact-report" },
];

export function NewsAndEventsSection() {
  return (
    <Box component="section" aria-labelledby="news-and-events-heading" dir="rtl" sx={{ width: "100%", bgcolor: "#fff", px: { xs: 2, sm: 3, md: 6, lg: "120px" }, py: { xs: 7, md: 12 } }}>
      <Stack spacing={5} alignItems="center" sx={{ maxWidth: 1200, mx: "auto" }}>
        <Stack component="header" spacing={1.5} alignItems="center" sx={{ textAlign: "center" }}><Typography id="news-and-events-heading" component="h2" sx={{ color: "#17324d", fontSize: { xs: 24, sm: 28, md: 32 }, fontWeight: 800 }}>آخرین اخبار و روایت‌های اثر</Typography><Typography component="p" sx={{ color: "#60758a", fontSize: { xs: 14, md: 16 } }}>تازه‌ترین خبرها، گزارش‌ها و نتایج پروژه‌های اجتماعی ماه</Typography></Stack>
        <Box sx={{ width: "100%", display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2,minmax(0,1fr))", lg: "repeat(3,minmax(0,1fr))" }, gap: 3 }}>
          {newsItems.map((item) => <Box component="article" key={item.id} sx={{ display: "flex", flexDirection: "column", overflow: "hidden", bgcolor: "#fff", border: "1px solid #e4ebf1", borderRadius: "16px", boxShadow: "0 4px 16px rgba(23,46,71,.08)" }}><Box component="img" src={item.image} alt={item.title} sx={{ width: "100%", height: 180, objectFit: "cover" }} /><Stack spacing={1} sx={{ p: 3, flexGrow: 1, minHeight: 241 }}><Stack direction="row" justifyContent="space-between" alignItems="center"><Box component="span" sx={{ px: 1.25, py: .5, borderRadius: "12px", bgcolor: item.categoryBackground, color: item.categoryColor, fontSize: 12, fontWeight: 700 }}>{item.category}</Box><Typography component="time" sx={{ color: "#60758a", fontSize: 13 }}>{item.date}</Typography></Stack><Typography component="h3" sx={{ color: "#17324d", fontSize: 18, fontWeight: 700, lineHeight: 1.7 }}><Link href={item.href} color="inherit">{item.title}</Link></Typography><Typography component="p" sx={{ color: "#60758a", fontSize: 14, lineHeight: 1.8 }}>{item.description}</Typography><Box sx={{ flexGrow: 1 }} /><Link href={item.href} aria-label={`مطالعه خبر: ${item.title}`} sx={{ color: "#2094e3", fontSize: 14, fontWeight: 700 }}>مطالعه خبر</Link></Stack></Box>)}
        </Box>
        <Link href="#all-news" sx={{ color: "#2094e3", fontSize: 14, fontWeight: 700 }}>مشاهده همه اخبار</Link>
      </Stack>
    </Box>
  );
}
