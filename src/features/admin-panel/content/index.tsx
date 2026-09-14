import { useEffect, useMemo, useState } from "react";
import { AdminSidebar } from "../components/AdminSidebar";
import {
  deleteAdminHeroVideo,
  deleteAdminManagedNews,
  getAdminHeroVideoMeta,
  listAdminManagedNews,
  loadPublicHeroVideo,
  saveAdminHeroVideo,
  saveAdminManagedNews,
} from "../management-api";
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
  type HeroVideoMeta,
} from "../../../shared/admin-content-store";
import "../index.css";
import "../final-flow.css";
import "./content.css";

const numberFa = new Intl.NumberFormat("fa-IR");
const isDevelopment = Boolean(import.meta.env.DEV);

type ContentTab = "news" | "hero";

function toNewsItem(item: Awaited<ReturnType<typeof listAdminManagedNews>>[number]): AdminNewsItem {
  return {
    id: item.id,
    title: item.title,
    summary: item.summary,
    status: item.status,
    updatedAt: item.updatedAtUtc,
  };
}

function toHeroMeta(item: Awaited<ReturnType<typeof getAdminHeroVideoMeta>>): HeroVideoMeta | null {
  if (!item) return null;
  return {
    name: item.fileName,
    type: item.contentType,
    size: item.size,
    updatedAt: item.updatedAtUtc,
  };
}

export default function AdminContentManagement() {
  const localInitial = readAdminNews();
  const [tab, setTab] = useState<ContentTab>("news");
  const [news, setNews] = useState<AdminNewsItem[]>(localInitial);
  const [selectedId, setSelectedId] = useState(() => localInitial[0]?.id ?? "");
  const [title, setTitle] = useState(() => localInitial[0]?.title ?? "");
  const [summary, setSummary] = useState(() => localInitial[0]?.summary ?? "");
  const [status, setStatus] = useState<AdminNewsItem["status"]>(() => localInitial[0]?.status ?? "draft");
  const [heroMeta, setHeroMeta] = useState<HeroVideoMeta | null>(() => readHeroVideoMeta());
  const [heroFile, setHeroFile] = useState<File | null>(null);
  const [heroUrl, setHeroUrl] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [backendReady, setBackendReady] = useState(false);

  const applyNews = (items: AdminNewsItem[]) => {
    setNews(items);
    const selected = items.find((item) => item.id === selectedId) ?? items[0];
    if (!selected) {
      setSelectedId("");
      setTitle("");
      setSummary("");
      setStatus("draft");
      return;
    }
    setSelectedId(selected.id);
    setTitle(selected.title);
    setSummary(selected.summary);
    setStatus(selected.status);
  };

  const refreshServerNews = async () => {
    const items = (await listAdminManagedNews()).map(toNewsItem);
    applyNews(items);
    return items;
  };

  useEffect(() => {
    let active = true;
    Promise.all([listAdminManagedNews(), getAdminHeroVideoMeta()])
      .then(([serverNews, serverHero]) => {
        if (!active) return;
        const items = serverNews.map(toNewsItem);
        setBackendReady(true);
        applyNews(items);
        setHeroMeta(toHeroMeta(serverHero));
      })
      .catch(() => {
        if (!active) return;
        setBackendReady(false);
        if (isDevelopment) {
          setNews(readAdminNews());
          setHeroMeta(readHeroVideoMeta());
          setMessage("Backend محتوا در دسترس نیست؛ fallback توسعه فعال است.");
        } else {
          setMessage("دریافت محتوای مدیریتی از سرور انجام نشد.");
        }
      });

    const refreshFallback = () => {
      if (active && !backendReady && isDevelopment) setNews(readAdminNews());
    };
    window.addEventListener(ADMIN_NEWS_CHANGED, refreshFallback);
    window.addEventListener("storage", refreshFallback);
    return () => {
      active = false;
      window.removeEventListener(ADMIN_NEWS_CHANGED, refreshFallback);
      window.removeEventListener("storage", refreshFallback);
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
    const loadPreview = async () => {
      try {
        const blob = await loadPublicHeroVideo();
        if (!active) return;
        if (blob) {
          objectUrl = URL.createObjectURL(blob);
          setHeroUrl(objectUrl);
          return;
        }
      } catch {
        // Fall through to the development browser store.
      }

      if (isDevelopment) {
        try {
          const blob = await loadHeroVideo();
          if (!active || !blob) {
            if (active) setHeroUrl("");
            return;
          }
          objectUrl = URL.createObjectURL(blob);
          setHeroUrl(objectUrl);
        } catch {
          if (active) setHeroUrl("");
        }
      } else if (active) {
        setHeroUrl("");
      }
    };

    void loadPreview();
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

  const persistNews = async () => {
    if (!title.trim() || !summary.trim() || busy) {
      if (!title.trim() || !summary.trim()) setMessage("عنوان و خلاصه خبر الزامی است.");
      return;
    }

    const input = { id: selectedId || `news-${Date.now()}`, title: title.trim(), summary: summary.trim(), status };
    setBusy(true);
    setMessage("");
    try {
      const saved = await saveAdminManagedNews(input);
      setBackendReady(true);
      saveAdminNews({ id: saved.id, title: saved.title, summary: saved.summary, status: saved.status });
      setSelectedId(saved.id);
      await refreshServerNews();
      setMessage("خبر در Backend ذخیره شد و محتوای عمومی به‌روزرسانی شد.");
    } catch {
      if (isDevelopment) {
        const saved = saveAdminNews(input);
        setSelectedId(saved.id);
        setNews(readAdminNews());
        setBackendReady(false);
        setMessage("Backend در دسترس نبود؛ خبر فقط در fallback توسعه ذخیره شد.");
      } else {
        setMessage("ذخیره خبر در سرور انجام نشد.");
      }
    } finally {
      setBusy(false);
    }
  };

  const removeNewsItem = async () => {
    if (!selectedId || busy) return;
    setBusy(true);
    setMessage("");
    try {
      await deleteAdminManagedNews(selectedId);
      deleteAdminNews(selectedId);
      setBackendReady(true);
      const next = await refreshServerNews();
      const first = next[0];
      if (!first) applyNews([]);
      setMessage("خبر از Backend حذف شد.");
    } catch {
      if (isDevelopment) {
        deleteAdminNews(selectedId);
        applyNews(readAdminNews());
        setBackendReady(false);
        setMessage("Backend در دسترس نبود؛ حذف فقط در fallback توسعه اعمال شد.");
      } else {
        setMessage("حذف خبر در سرور انجام نشد.");
      }
    } finally {
      setBusy(false);
    }
  };

  const persistHero = async () => {
    if (!heroFile || busy) {
      if (!heroFile) setMessage("ابتدا فایل ویدئو را انتخاب کنید.");
      return;
    }
    if (!heroFile.type.startsWith("video/")) {
      setMessage("فایل انتخابی باید ویدئو باشد.");
      return;
    }
    if (heroFile.size > 50 * 1024 * 1024) {
      setMessage("حجم ویدئوی هیرو باید حداکثر ۵۰ مگابایت باشد.");
      return;
    }

    setBusy(true);
    setMessage("");
    try {
      const meta = await saveAdminHeroVideo(heroFile);
      setHeroMeta({ name: meta.fileName, type: meta.contentType, size: meta.size, updatedAt: meta.updatedAtUtc });
      setHeroFile(null);
      setBackendReady(true);
      setMessage("ویدئوی هیرو در Backend ذخیره شد و از endpoint عمومی قابل دریافت است.");
    } catch {
      if (isDevelopment) {
        const meta = await saveHeroVideo(heroFile);
        setHeroMeta(meta);
        setHeroFile(null);
        setBackendReady(false);
        setMessage("Backend در دسترس نبود؛ ویدئو فقط در fallback مرورگر ذخیره شد.");
      } else {
        setMessage("ذخیره ویدئوی هیرو در سرور انجام نشد.");
      }
    } finally {
      setBusy(false);
    }
  };

  const clearHero = async () => {
    if (busy) return;
    setBusy(true);
    setMessage("");
    try {
      await deleteAdminHeroVideo();
      if (isDevelopment) await removeHeroVideo().catch(() => undefined);
      setHeroMeta(null);
      setHeroFile(null);
      setHeroUrl("");
      setBackendReady(true);
      setMessage("ویدئوی هیرو از Backend حذف شد.");
    } catch {
      if (isDevelopment) {
        await removeHeroVideo();
        setHeroMeta(null);
        setHeroFile(null);
        setHeroUrl("");
        setBackendReady(false);
        setMessage("Backend در دسترس نبود؛ ویدئوی fallback مرورگر حذف شد.");
      } else {
        setMessage("حذف ویدئوی هیرو در سرور انجام نشد.");
      }
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="admin-panel-shell" data-node-id="2357:2">
      <main className="admin-final-main" dir="rtl">
        <header className="admin-final-header">
          <div className="admin-final-heading">
            <h1>مدیریت محتوا</h1>
            <p>مدیریت دائمی ویدئوی هیرو و اخبار عمومی از یک صفحه مدیریتی مشترک</p>
          </div>
        </header>

        <section className="admin-content-summary">
          {summaryCards.map(([label, value]) => <article className="admin-final-card" key={label}><span>{label}</span><strong>{value}</strong></article>)}
        </section>

        <section className="admin-content-tabs admin-final-card" aria-label="بخش‌های محتوا">
          <button className={`admin-content-tab${tab === "news" ? " is-active" : ""}`} type="button" onClick={() => { setTab("news"); setMessage(""); }}>اخبار و رویدادها</button>
          <button className={`admin-content-tab${tab === "hero" ? " is-active" : ""}`} type="button" onClick={() => { setTab("hero"); setMessage(""); }}>ویدئوی هیرو</button>
          <span className="admin-content-auto">{backendReady ? "CMS Backend: متصل" : "CMS: fallback توسعه"}</span>
        </section>

        {tab === "news" ? (
          <section className="admin-content-row">
            <article className="admin-content-editor admin-final-card">
              <h2>ویرایش خبر</h2><p>عنوان، خلاصه و وضعیت انتشار را تغییر دهید.</p>
              <div className="admin-mini-field"><label>عنوان خبر</label><input className="admin-content-input" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="عنوان خبر" /></div>
              <div className="admin-mini-field"><label>وضعیت</label><select className="admin-content-input" value={status} onChange={(event) => setStatus(event.target.value as AdminNewsItem["status"])}><option value="published">منتشرشده</option><option value="draft">پیش‌نویس</option></select></div>
              <div className="admin-mini-field"><label>خلاصه</label><textarea className="admin-content-input admin-content-textarea" value={summary} onChange={(event) => setSummary(event.target.value)} placeholder="خلاصه خبر برای نمایش عمومی" /></div>
              <div className="admin-content-editor-actions"><button className="primary" type="button" onClick={persistNews} disabled={busy}>{busy ? "در حال ذخیره…" : "ذخیره تغییرات"}</button><button type="button" onClick={removeNewsItem} disabled={!selectedId || busy}>حذف خبر</button></div>
              {message ? <div className="admin-content-message">{message}</div> : null}
            </article>

            <article className="admin-content-list admin-final-card">
              <div className="admin-content-list-head"><div><h2>اخبار و رویدادها</h2><p>انتخاب، انتشار و ویرایش محتوای خبری</p></div><button className="admin-content-new" type="button" onClick={newNews} disabled={busy}>خبر جدید</button></div>
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
            <div className="admin-content-hero-copy"><h2>ویدئوی هیرو صفحه اصلی</h2><p>فایل MP4 یا WebM تا سقف ۵۰ مگابایت را انتخاب کنید. فایل در Backend ذخیره و از مسیر عمومی سایت ارائه می‌شود.</p><div className="admin-content-hero-meta">{heroMeta ? `فایل فعلی: ${heroMeta.name} — ${numberFa.format(Math.round(heroMeta.size / 1024 / 1024))} MB` : "هنوز ویدئویی ثبت نشده است."}</div><input className="admin-content-file" type="file" accept="video/mp4,video/webm,video/*" onChange={(event) => setHeroFile(event.target.files?.[0] ?? null)} /><div className="admin-content-hero-actions"><button className="admin-users-button admin-users-button-primary" type="button" onClick={persistHero} disabled={busy}>{busy ? "در حال ذخیره…" : "ذخیره ویدئو"}</button><button className="admin-users-button" type="button" onClick={clearHero} disabled={busy || (!heroMeta && !heroFile)}>حذف ویدئو</button></div>{message ? <div className="admin-content-message">{message}</div> : null}</div>
            <div className="admin-content-video-preview">{heroUrl ? <video src={heroUrl} controls playsInline /> : <span>پیش‌نمایش ویدئو</span>}</div>
          </section>
        )}

        <aside className="admin-content-note"><strong>مدیریت محتوا در یک صفحه</strong><span>اخبار منتشرشده و ویدئوی هیرو در Backend ذخیره می‌شوند و endpoint عمومی برای مصرف سایت دارند؛ store مرورگر فقط fallback محیط توسعه است.</span></aside>
      </main>
      <AdminSidebar active="content" />
    </div>
  );
}
