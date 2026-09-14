import { useEffect, useMemo, useState } from "react";
import { AdminSidebar } from "../components/AdminSidebar";
import {
  ADMIN_NEWS_CHANGED,
  deleteAdminNews,
  loadHeroVideo,
  readAdminNews,
  readHeroVideoMeta,
  removeHeroVideo,
  saveAdminNews,
  saveHeroVideo,
  type AdminNewsItem,
} from "../../../shared/admin-content-store";
import "../index.css";
import "../final-flow.css";

const numberFa = new Intl.NumberFormat("fa-IR");

type ContentTab = "news" | "hero";

export default function AdminContentManagement() {
  const [tab, setTab] = useState<ContentTab>("news");
  const [news, setNews] = useState<AdminNewsItem[]>(() => readAdminNews());
  const [selectedId, setSelectedId] = useState(() => readAdminNews()[0]?.id ?? "");
  const [title, setTitle] = useState(() => readAdminNews()[0]?.title ?? "");
  const [summary, setSummary] = useState(() => readAdminNews()[0]?.summary ?? "");
  const [status, setStatus] = useState<AdminNewsItem["status"]>(() => readAdminNews()[0]?.status ?? "draft");
  const [heroMeta, setHeroMeta] = useState(() => readHeroVideoMeta());
  const [heroFile, setHeroFile] = useState<File | null>(null);
  const [heroUrl, setHeroUrl] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const refresh = () => setNews(readAdminNews());
    window.addEventListener(ADMIN_NEWS_CHANGED, refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener(ADMIN_NEWS_CHANGED, refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);

  useEffect(() => {
    if (heroFile) {
      const url = URL.createObjectURL(heroFile);
      setHeroUrl(url);
      return () => URL.revokeObjectURL(url);
    }

    let active = true;
    let objectUrl = "";
    loadHeroVideo()
      .then((blob) => {
        if (!active || !blob) return;
        objectUrl = URL.createObjectURL(blob);
        setHeroUrl(objectUrl);
      })
      .catch(() => setHeroUrl(""));
    return () => {
      active = false;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [heroFile, heroMeta]);

  const publishedCount = news.filter((item) => item.status === "published").length;
  const draftCount = news.filter((item) => item.status === "draft").length;
  const summaryCards = useMemo(() => [
    ["اخبار منتشرشده", numberFa.format(publishedCount)],
    ["پیش‌نویس خبر", numberFa.format(draftCount)],
    ["ویدئوی هیرو", heroMeta ? "ثبت‌شده" : "بدون ویدئو"],
    ["کل اخبار", numberFa.format(news.length)],
  ] as const, [draftCount, heroMeta, news.length, publishedCount]);

  const selectNews = (item: AdminNewsItem) => {
    setSelectedId(item.id);
    setTitle(item.title);
    setSummary(item.summary);
    setStatus(item.status);
    setMessage("");
  };

  const newNews = () => {
    setSelectedId(`news-${Date.now()}`);
    setTitle("");
    setSummary("");
    setStatus("draft");
    setMessage("خبر جدید؛ عنوان و خلاصه را وارد کنید.");
  };

  const saveNews = () => {
    if (!title.trim() || !summary.trim()) {
      setMessage("عنوان و خلاصه خبر الزامی است.");
      return;
    }
    const item = saveAdminNews({ id: selectedId || `news-${Date.now()}`, title: title.trim(), summary: summary.trim(), status });
    setSelectedId(item.id);
    setNews(readAdminNews());
    setMessage("خبر ذخیره شد.");
  };

  const removeNews = () => {
    if (!selectedId) return;
    deleteAdminNews(selectedId);
    const next = readAdminNews();
    setNews(next);
    const first = next[0];
    setSelectedId(first?.id ?? "");
    setTitle(first?.title ?? "");
    setSummary(first?.summary ?? "");
    setStatus(first?.status ?? "draft");
    setMessage("خبر حذف شد.");
  };

  const persistHero = async () => {
    if (!heroFile) {
      setMessage("ابتدا فایل ویدئو را انتخاب کنید.");
      return;
    }
    if (!heroFile.type.startsWith("video/")) {
      setMessage("فایل انتخابی باید ویدئو باشد.");
      return;
    }
    const meta = await saveHeroVideo(heroFile);
    setHeroMeta(meta);
    setHeroFile(null);
    setMessage("ویدئوی هیرو ذخیره شد.");
  };

  const clearHero = async () => {
    await removeHeroVideo();
    setHeroMeta(null);
    setHeroFile(null);
    setHeroUrl("");
    setMessage("ویدئوی هیرو حذف شد.");
  };

  return (
    <div className="admin-panel-shell" data-node-id="2357:2">
      <main className="admin-final-main" dir="rtl">
        <header className="admin-final-header">
          <div className="admin-final-heading">
            <h1>مدیریت محتوا</h1>
            <p>مدیریت ویدئوی هیرو و اخبار عمومی از یک صفحه مدیریتی مشترک</p>
          </div>
        </header>

        <section className="admin-content-summary">
          {summaryCards.map(([label, value]) => <article className="admin-final-card" key={label}><span>{label}</span><strong>{value}</strong></article>)}
        </section>

        <section className="admin-content-tabs admin-final-card" aria-label="بخش‌های محتوا">
          <button className={`admin-content-tab${tab === "news" ? " is-active" : ""}`} type="button" onClick={() => { setTab("news"); setMessage(""); }}>اخبار و رویدادها</button>
          <button className={`admin-content-tab${tab === "hero" ? " is-active" : ""}`} type="button" onClick={() => { setTab("hero"); setMessage(""); }}>ویدئوی هیرو</button>
          <span className="admin-content-auto">محتوای عمومی: قابل مدیریت</span>
        </section>

        {tab === "news" ? (
          <section className="admin-content-row">
            <article className="admin-content-editor admin-final-card">
              <h2>ویرایش خبر</h2><p>عنوان، خلاصه و وضعیت انتشار را تغییر دهید.</p>
              <div className="admin-mini-field"><label>عنوان خبر</label><input className="admin-content-input" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="عنوان خبر" /></div>
              <div className="admin-mini-field"><label>وضعیت</label><select className="admin-content-input" value={status} onChange={(event) => setStatus(event.target.value as AdminNewsItem["status"])}><option value="published">منتشرشده</option><option value="draft">پیش‌نویس</option></select></div>
              <div className="admin-mini-field"><label>خلاصه</label><textarea className="admin-content-input admin-content-textarea" value={summary} onChange={(event) => setSummary(event.target.value)} placeholder="خلاصه خبر برای نمایش عمومی" /></div>
              <div className="admin-content-editor-actions"><button className="primary" type="button" onClick={saveNews}>ذخیره تغییرات</button><button type="button" onClick={removeNews} disabled={!selectedId}>حذف خبر</button></div>
              {message ? <div className="admin-content-message">{message}</div> : null}
            </article>

            <article className="admin-content-list admin-final-card">
              <div className="admin-content-list-head"><div><h2>اخبار و رویدادها</h2><p>انتخاب، انتشار و ویرایش محتوای خبری</p></div><button className="admin-content-new" type="button" onClick={newNews}>خبر جدید</button></div>
              <div className="admin-content-table" role="table" aria-label="اخبار و رویدادها">
                <div className="admin-content-table-row head" role="row"><span>عنوان خبر</span><span>وضعیت</span><span>به‌روزرسانی</span><span>اقدام</span></div>
                {news.map((item) => (
                  <div className="admin-content-table-row" role="row" key={item.id}>
                    <span className="admin-content-title">{item.title}</span>
                    <span className={`admin-content-status ${item.status === "published" ? "green" : "blue"}`}>{item.status === "published" ? "منتشرشده" : "پیش‌نویس"}</span>
                    <span>{new Date(item.updatedAt).toLocaleDateString("fa-IR")}</span>
                    <button className="admin-content-action-button" type="button" onClick={() => selectNews(item)}>ویرایش</button>
                  </div>
                ))}
              </div>
              <div className="admin-content-footer">نمایش {numberFa.format(news.length)} خبر</div>
            </article>
          </section>
        ) : (
          <section className="admin-content-hero admin-final-card">
            <div className="admin-content-hero-copy"><h2>ویدئوی هیرو صفحه اصلی</h2><p>فایل MP4 یا WebM را انتخاب کنید. ویدئو در مرورگر مدیریت ذخیره می‌شود تا زمان اتصال CMS Backend.</p><div className="admin-content-hero-meta">{heroMeta ? `فایل فعلی: ${heroMeta.name} — ${numberFa.format(Math.round(heroMeta.size / 1024 / 1024))} MB` : "هنوز ویدئویی ثبت نشده است."}</div><input className="admin-content-file" type="file" accept="video/mp4,video/webm,video/*" onChange={(event) => setHeroFile(event.target.files?.[0] ?? null)} /><div className="admin-content-hero-actions"><button className="admin-users-button admin-users-button-primary" type="button" onClick={persistHero}>ذخیره ویدئو</button><button className="admin-users-button" type="button" onClick={clearHero} disabled={!heroMeta && !heroFile}>حذف ویدئو</button></div>{message ? <div className="admin-content-message">{message}</div> : null}</div>
            <div className="admin-content-video-preview">{heroUrl ? <video src={heroUrl} controls playsInline /> : <span>پیش‌نمایش ویدئو</span>}</div>
          </section>
        )}

        <aside className="admin-content-note"><strong>مدیریت محتوا در یک صفحه</strong><span>ویدئوی هیرو و اخبار از همین صفحه مدیریت می‌شوند. ذخیره دائمی سازمانی بعد از اضافه‌شدن API CMS جایگزین store مرورگر خواهد شد.</span></aside>
      </main>
      <AdminSidebar active="content" />
    </div>
  );
}
