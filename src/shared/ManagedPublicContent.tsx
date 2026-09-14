import { useEffect } from "react";
import { listPublicNews, loadPublicHeroVideo } from "../features/admin-panel/management-api";

const numberFa = new Intl.NumberFormat("fa-IR");

function normalize(value: string | null | undefined) {
  return (value ?? "").replace(/\s+/g, " ").trim();
}

function findLandingHero(root: HTMLElement) {
  return Array.from(root.querySelectorAll<HTMLElement>("div")).find((node) => {
    const className = typeof node.className === "string" ? node.className : "";
    return className.includes("h-[380px]") && className.includes("rounded-[24px]") && className.includes("overflow-hidden");
  }) ?? null;
}

function mountHero(root: HTMLElement, sourceUrl: string) {
  const target = findLandingHero(root);
  if (!target) return false;

  target.querySelector("[data-mah-managed-hero]")?.remove();
  const video = document.createElement("video");
  video.dataset.mahManagedHero = "true";
  video.src = sourceUrl;
  video.autoplay = true;
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.preload = "metadata";
  video.setAttribute("aria-hidden", "true");
  Object.assign(video.style, {
    position: "absolute",
    inset: "0",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    pointerEvents: "none",
    zIndex: "0",
  });
  target.prepend(video);
  void video.play().catch(() => undefined);
  return true;
}

function updatePublishedCount(root: HTMLElement, count: number) {
  const label = Array.from(root.querySelectorAll<HTMLElement>("span")).find(
    (node) => normalize(node.textContent) === "اخبار منتشرشده",
  );
  const container = label?.parentElement;
  if (!container) return;
  const value = Array.from(container.querySelectorAll<HTMLElement>("span")).find((node) => node !== label);
  if (value) value.textContent = numberFa.format(count);
}

function applyManagedNews(root: HTMLElement, items: Awaited<ReturnType<typeof listPublicNews>>) {
  updatePublishedCount(root, items.length);
  const first = items[0];
  if (!first) return;

  const spans = Array.from(root.querySelectorAll<HTMLElement>("span"));
  const title = root.querySelector<HTMLElement>("[data-mah-managed-news-title]") ?? spans.find((node) =>
    normalize(node.textContent) === "گزارش اثر اجتماعی سامانه ماه در سال ۱۴۰۴ منتشر شد",
  );
  if (title) {
    title.dataset.mahManagedNewsTitle = "true";
    title.textContent = first.title;
    title.setAttribute("title", first.title);
  }

  const summary = root.querySelector<HTMLElement>("[data-mah-managed-news-summary]") ?? spans.find((node) =>
    normalize(node.textContent).startsWith("این گزارش، نتایج پروژه‌های تأییدشده سامانه ماه"),
  );
  if (summary) {
    summary.dataset.mahManagedNewsSummary = "true";
    summary.textContent = first.summary;
    summary.setAttribute("title", first.summary);
  }
}

export default function ManagedPublicContent() {
  useEffect(() => {
    let disposed = false;
    let objectUrl = "";
    let observer: MutationObserver | null = null;

    const pathname = window.location.pathname;
    const isManagedNewsPage = pathname === "/news" || pathname === "/news/social-impact-1404";
    if (pathname !== "/" && !isManagedNewsPage) return;

    const waitForRoot = (apply: (root: HTMLElement) => boolean | void) => {
      const run = () => {
        const root = document.querySelector<HTMLElement>(".main-container");
        if (!root) return false;
        const result = apply(root);
        return result !== false;
      };

      if (run()) return;
      observer = new MutationObserver(() => {
        if (run()) {
          observer?.disconnect();
          observer = null;
        }
      });
      observer.observe(document.body, { childList: true, subtree: true });
    };

    if (pathname === "/") {
      loadPublicHeroVideo()
        .then((blob) => {
          if (disposed || !blob) return;
          objectUrl = URL.createObjectURL(blob);
          waitForRoot((root) => mountHero(root, objectUrl));
        })
        .catch(() => undefined);
    } else {
      listPublicNews()
        .then((items) => {
          if (disposed) return;
          waitForRoot((root) => {
            applyManagedNews(root, items);
            return true;
          });
        })
        .catch(() => undefined);
    }

    return () => {
      disposed = true;
      observer?.disconnect();
      document.querySelector("[data-mah-managed-hero]")?.remove();
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, []);

  return null;
}
