import { useEffect } from "react";

type Action =
  | { type: "route"; value: string }
  | { type: "print" }
  | { type: "copy" };

const COMMON_ROUTES: Record<string, string> = {
  "ورود کاربران": "/auth",
  "ورود/ثبت نام": "/auth",
  "پیگیری مشارکت": "/participation/track",
  "شروع مشارکت": "/projects",
  "صفحه اصلی": "/",
  "پروژه‌ها": "/projects",
  "استارتاپ‌ها": "/startups",
  "شرکت‌ها": "/companies",
  "تماس با ما": "/contact",
  "درباره ما": "/about",
  "برای شرکت‌ها": "/companies",
  "نحوه مشارکت": "/how-it-works",
  "ثبت‌نام استارتاپ": "/register/startup",
  "سؤالات متداول": "/faq",
  "سوالات متداول": "/faq",
  "قوانین و مقررات": "/terms",
  "حریم خصوصی": "/privacy-policy",
  "اخبار و رویدادها": "/news",
  "گزارش‌های اثر": "/impact-reports",
  "مشاهده گزارش‌های اثر": "/impact-reports",
  "پیگیری ثبت‌نام": "/registration/track",
  "مشاهده پروژه‌ها": "/projects",
};

const STATIC_PUBLIC_PATH = /^(?:\/terms|\/privacy-policy|\/article-172-guide|\/news(?:\/[^/]+)?|\/projects\/[^/]+)$/;

function normalize(value: string | null | undefined) {
  return (value ?? "").replace(/\s+/g, " ").trim();
}

function pageAction(pathname: string, label: string): Action | null {
  const commonRoute = COMMON_ROUTES[label];
  if (commonRoute) return { type: "route", value: commonRoute };

  if (pathname === "/terms") {
    if (label === "چاپ" || label === "دریافت نسخه PDF") return { type: "print" };
    if (label === "کپی لینک") return { type: "copy" };
    if (label === "ثبت درخواست پشتیبانی") return { type: "route", value: "/contact" };
    if (label === "مشاهده سؤالات متداول") return { type: "route", value: "/faq" };
  }

  if (pathname === "/privacy-policy") {
    if (label === "چاپ" || label === "دریافت نسخه PDF") return { type: "print" };
    if (label === "کپی لینک") return { type: "copy" };
    if (label === "ثبت درخواست حریم خصوصی" || label === "تماس با پشتیبانی") {
      return { type: "route", value: "/contact" };
    }
  }

  if (pathname === "/article-172-guide") {
    if (label === "مشاهده شرایط کلی") return { type: "route", value: "/companies" };
    if (label === "ورود به حساب شرکت") return { type: "route", value: "/auth" };
    if (label === "شروع ثبت‌نام شرکت" || label === "درخواست بررسی مستندات") {
      return { type: "route", value: "/register/company" };
    }
    if (label === "پیگیری وضعیت درخواست") {
      return { type: "route", value: "/registration/track" };
    }
  }

  if (pathname === "/news") {
    if (label === "مشاهده گزارش اثر" || label === "مشاهده گزارش‌های اثر") {
      return { type: "route", value: "/impact-reports" };
    }
    if (label === "مرور اثر سامانه ماه") return { type: "route", value: "/impact-overview" };
    if (label === "مطالعه خبر" || label === "مطالعه خبر ←") {
      return { type: "route", value: "/news/social-impact-1404" };
    }
  }

  if (/^\/news\/[^/]+$/.test(pathname)) {
    if (label === "دریافت فایل") return { type: "print" };
    if (label === "مشاهده همه اخبار") return { type: "route", value: "/news" };
    if (label === "مشاهده پروژه" || label === "مشاهده پروژه ←") {
      return { type: "route", value: "/projects" };
    }
  }

  return null;
}

function actionTarget(node: HTMLElement) {
  const native = node.closest<HTMLElement>("a, button");
  if (native) return native;

  const parent = node.parentElement;
  if (!parent) return node;

  const className = typeof parent.className === "string" ? parent.className : "";
  const looksLikeControl =
    parent.children.length <= 2 &&
    (className.includes("rounded-[8px]") ||
      className.includes("rounded-[10px]") ||
      className.includes("rounded-[12px]") ||
      className.includes("bg-[#2094e3]") ||
      className.includes("border-[#2094e3]") ||
      className.includes("border-[#e4ebf1]"));

  return looksLikeControl ? parent : node;
}

function hasNativeDestination(target: HTMLElement) {
  if (!(target instanceof HTMLAnchorElement)) return false;
  const href = target.getAttribute("href");
  return Boolean(href && href !== "#" && href !== "javascript:void(0)");
}

function enhance(root: HTMLElement, pathname: string) {
  root.querySelectorAll<HTMLElement>("span, p, a, button").forEach((node) => {
    const action = pageAction(pathname, normalize(node.textContent));
    if (!action) return;

    const target = actionTarget(node);
    if (hasNativeDestination(target) || target.dataset.mahPublicAction) return;

    target.dataset.mahPublicAction = action.type;
    if (action.type === "route") target.dataset.mahPublicTarget = action.value;
    target.setAttribute("role", action.type === "route" ? "link" : "button");
    target.setAttribute("tabindex", "0");
    target.style.cursor = "pointer";
  });

  const firstSection = root.firstElementChild;
  if (firstSection instanceof HTMLElement) {
    const logo = firstSection.querySelector<HTMLElement>('[class~="z-[16]"]');
    if (logo && !logo.dataset.mahPublicAction && !hasNativeDestination(logo)) {
      logo.dataset.mahPublicAction = "route";
      logo.dataset.mahPublicTarget = "/";
      logo.setAttribute("role", "link");
      logo.setAttribute("tabindex", "0");
      logo.setAttribute("aria-label", "صفحه اصلی");
      logo.style.cursor = "pointer";
    }
  }
}

async function copyCurrentLink() {
  const url = window.location.href;
  try {
    await navigator.clipboard.writeText(url);
  } catch {
    const input = document.createElement("textarea");
    input.value = url;
    input.setAttribute("readonly", "true");
    input.style.position = "fixed";
    input.style.opacity = "0";
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
  }
}

function runAction(target: HTMLElement) {
  const type = target.dataset.mahPublicAction;
  if (type === "route") {
    const route = target.dataset.mahPublicTarget;
    if (route && route !== window.location.pathname) window.location.assign(route);
    return;
  }
  if (type === "print") {
    window.print();
    return;
  }
  if (type === "copy") void copyCurrentLink();
}

export default function PublicPageInteractions() {
  useEffect(() => {
    const apply = () => {
      const pathname = window.location.pathname;
      if (!STATIC_PUBLIC_PATH.test(pathname)) return;
      const root = document.querySelector<HTMLElement>(".main-container");
      if (root) enhance(root, pathname);
    };

    apply();
    const observer = new MutationObserver(apply);
    observer.observe(document.body, { childList: true, subtree: true });

    const onClick = (event: MouseEvent) => {
      const target = (event.target as Element | null)?.closest<HTMLElement>("[data-mah-public-action]");
      if (!target) return;
      event.preventDefault();
      runAction(target);
      window.setTimeout(apply, 0);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      const target = (event.target as Element | null)?.closest<HTMLElement>("[data-mah-public-action]");
      if (!target) return;
      event.preventDefault();
      runAction(target);
    };

    const onHistoryNavigation = () => window.setTimeout(apply, 0);
    window.addEventListener("popstate", onHistoryNavigation);
    window.addEventListener("hashchange", onHistoryNavigation);
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      observer.disconnect();
      window.removeEventListener("popstate", onHistoryNavigation);
      window.removeEventListener("hashchange", onHistoryNavigation);
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return null;
}
