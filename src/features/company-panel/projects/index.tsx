import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { CompanySidebar } from "../components/CompanySidebar";
import "../index.css";
import "./index.css";

const PROJECT_ASSET_ROOT = "/assets/company-panel";

type Project = {
  id: string;
  title: string;
  meta: string;
  domain: string;
  impactPrimary: string;
  impactSecondary: string;
  funded: number;
  fundedAmount: string;
  target: string;
  image: string;
};

const projects: Project[] = [
  {
    id: "family-health",
    title: "سلامت خانواده",
    meta: "سلامت و بهداشت · سیستان و بلوچستان",
    domain: "سلامت و بهداشت",
    impactPrimary: "۲٬۵۰۰ فرد بهره‌مند",
    impactSecondary: "۴۲ روستا",
    funded: 51,
    fundedAmount: "۱۷۸٫۵ میلیون تومان تأمین شده",
    target: "هدف: ۳۵۰ میلیون تومان",
    image: `${PROJECT_ASSET_ROOT}/project-family-health.png`,
  },
  {
    id: "teen-skills",
    title: "مهارت برای نوجوانان",
    meta: "آموزش و اشتغال · اصفهان",
    domain: "آموزش و اشتغال",
    impactPrimary: "۳۵۰ نوجوان آموزش‌دیده",
    impactSecondary: "۹۰ فرصت شغلی",
    funded: 74,
    fundedAmount: "۲۹۶ میلیون تومان تأمین شده",
    target: "هدف: ۴۰۰ میلیون تومان",
    image: `${PROJECT_ASSET_ROOT}/project-teen-skills.png`,
  },
  {
    id: "rural-women-employment",
    title: "اشتغال زنان روستایی",
    meta: "کسب‌وکار و اشتغال · گلستان",
    domain: "کسب‌وکار و اشتغال",
    impactPrimary: "۴۵۰ فرد بهره‌مند",
    impactSecondary: "۱۲۰ فرصت شغلی",
    funded: 58,
    fundedAmount: "۲۳۲ میلیون تومان تأمین شده",
    target: "هدف: ۴۰۰ میلیون تومان",
    image: `${PROJECT_ASSET_ROOT}/project-rural-women-employment.png`,
  },
];

export default function CompanySocialImpactProjects() {
  const [query, setQuery] = useState("");
  const [domain, setDomain] = useState("all");

  const visibleProjects = useMemo(() => {
    const normalizedQuery = query.trim();
    return projects.filter((project) => {
      const matchesQuery = !normalizedQuery || `${project.title} ${project.meta}`.includes(normalizedQuery);
      const matchesDomain = domain === "all" || project.domain === domain;
      return matchesQuery && matchesDomain;
    });
  }, [domain, query]);

  return (
    <div className="company-panel-shell" data-node-id="1845:2">
      <main className="company-projects-page" dir="rtl">
        <header className="company-topbar">
          <div className="company-page-title">
            <h1>پروژه‌های اثر اجتماعی</h1>
            <p>مشاهده پروژه‌های تأییدشده و انتخاب فرصت مناسب برای مشارکت سازمانی</p>
          </div>
          <div className="company-top-actions">
            <Link className="company-action company-action-primary" to="/panel/company/participations">
              مشارکت‌های سازمانی
            </Link>
            <Link className="company-action company-action-secondary" to="/panel/company/certificates">
              گواهی ماده ۱۷۲
            </Link>
          </div>
        </header>

        <section className="company-project-filters" aria-label="فیلتر پروژه‌ها">
          <strong>فیلتر پروژه‌ها</strong>
          <div className="company-project-filter-controls">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="جست‌وجوی پروژه"
              aria-label="جست‌وجوی پروژه"
            />
            <select value={domain} onChange={(event) => setDomain(event.target.value)} aria-label="حوزه اثر">
              <option value="all">حوزه اثر: همه</option>
              <option value="سلامت و بهداشت">سلامت و بهداشت</option>
              <option value="آموزش و اشتغال">آموزش و اشتغال</option>
              <option value="کسب‌وکار و اشتغال">کسب‌وکار و اشتغال</option>
            </select>
            <select defaultValue="available" aria-label="وضعیت پروژه">
              <option value="available">وضعیت: قابل مشارکت</option>
            </select>
            <button type="button" className="company-more-filters" aria-label="فیلترهای بیشتر">
              فیلترها <span>⌄</span>
            </button>
          </div>
        </section>

        <section className="company-project-list-card">
          <div className="company-project-list-heading">
            <div>
              <h2>پروژه‌های قابل مشارکت</h2>
              <p>پروژه‌های شاخص منتشرشده در لندینگ ماه</p>
            </div>
            <span>{visibleProjects.length.toLocaleString("fa-IR")} پروژه فعال</span>
          </div>

          <div className="company-project-list">
            {visibleProjects.map((project) => (
              <article className="company-project-list-row" key={project.id}>
                <img className="company-project-thumbnail" src={project.image} alt="" />
                <div className="company-project-summary">
                  <h3>{project.title}</h3>
                  <p>{project.meta}</p>
                </div>
                <span className="company-project-status">قابل مشارکت</span>
                <div className="company-project-impact">
                  <span>اثر اجتماعی</span>
                  <strong>{project.impactPrimary}</strong>
                  <small>{project.impactSecondary}</small>
                </div>
                <div className="company-project-funding">
                  <span>وضعیت تأمین</span>
                  <strong>{project.funded.toLocaleString("fa-IR")}٪</strong>
                  <div className="company-project-progress" aria-hidden="true">
                    <i style={{ width: `${project.funded}%` }} />
                  </div>
                  <small>{project.fundedAmount}</small>
                  <small>{project.target}</small>
                </div>
                <div className="company-project-actions">
                  <Link className="company-project-details-button" to={`/panel/company/projects/${project.id}`}>
                    مشاهده جزئیات
                  </Link>
                  <Link className="company-project-participate-button" to={`/panel/company/projects/${project.id}/participate`}>
                    مشارکت در پروژه
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <footer className="company-project-pagination">
            <span>نمایش ۱ تا {visibleProjects.length.toLocaleString("fa-IR")} از {visibleProjects.length.toLocaleString("fa-IR")} پروژه</span>
            <div>
              <b>۱</b>
              <span>صفحه ۱ از ۱</span>
            </div>
          </footer>
        </section>
      </main>

      <CompanySidebar active="projects" />
    </div>
  );
}
