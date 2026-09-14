import { useEffect } from "react";
import { listPublicNews, loadPublicHeroVideo, loadPublicNewsImage } from "../features/admin-panel/management-api";
import { loadNewsImage, readAdminNews } from "./admin-content-store";

const numberFa = new Intl.NumberFormat("fa-IR");
const isDevelopment = Boolean(import.meta.env.DEV);

function normalize(value: string | null | undefined) {
  return (value ?? "").replace(/\s+/g, " ").trim();
}

function findLandingHero(root: HTMLElement) {
  return Array.from(root.querySelectorAll<HTMLElement>("div")).find((node) => {
    const className = typeof node.className === "string" ? node.className : "";
    return className.includes("h-[380px]") && className.includes("rounded-[24px]") && className.includes("overflow-hidden");
  }) ?? null;
}

function findManagedNewsImage(root: HTMLElement, pathname: string) {
  const widthToken = pathname === "/news" ? "w-[520px]" : "w-[1200px]";
  const heightToken = pathname === "/news" ? "h-[320px]" : "h-[500px]";
  return Array.from(root.querySelectorAll<HTMLElement>("div")).find((node) => {
    const className = typeof node.className === "string" ? node.className : "";
    return className.includes(widthToken) && className.includes(heightToken) && className.includes("rounded-[16px]");
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

function mountNewsImage(root: HTMLElement, pathname: string, sourceUrl: string) {
  const target = findManagedNewsImage(root, pathname);
  if (!target) return false;
  target.dataset.mahManagedNewsImage = "true";
  target.style.backgroundImage = `url("${sourceUrl}")`;
  target.style.backgroundSize = "cover";
  target.style.backgroundPosition = "center";
  target.style.backgroundRepeat = "no-repeat";
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

type PublicNewsLike = { id: string; title: string; summary: string };

function applyManagedNews(root: HTMLElement, items: PublicNewsLike[]) {
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
      const applyNewsAndImage = async (items: PublicNewsLike[], imageLoader: (id: string) => Promise<Blob | null>) => {
        if (disposed) return;
        waitForRoot((root) => {
          applyManagedNews(root, items);
          return true;
        });
        const first = items[0];
        if (!first) return;
        const blob = await imageLoader(first.id).catch(() => null);
        if (disposed || !blob) return;
        objectUrl = URL.createObjectURL(blob);
        waitForRoot((root) => mountNewsImage(root, pathname, objectUrl));
      };

      listPublicNews()
        .then((items) => applyNewsAndImage(items, loadPublicNewsImage))
        .catch(() => {
          if (!isDevelopment) return;
          const items = readAdminNews()
            .filter((item) => item.status === "published")
            .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
          return applyNewsAndImage(items, loadNewsImage);
        });
    }

    return () => {
      disposed = true;
      observer?.disconnect();
      document.querySelector("[data-mah-managed-hero]")?.remove();
      const managedNewsImage = document.querySelector<HTMLElement>("[data-mah-managed-news-image]");
      if (managedNewsImage) {
        managedNewsImage.style.removeProperty("background-image");
        managedNewsImage.style.removeProperty("background-size");
        managedNewsImage.style.removeProperty("background-position");
        managedNewsImage.style.removeProperty("background-repeat");
        delete managedNewsImage.dataset.mahManagedNewsImage;
      }
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, []);

  return null;
}
