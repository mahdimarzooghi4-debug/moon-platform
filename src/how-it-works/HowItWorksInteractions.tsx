import { useEffect } from "react";

type Action =
  | { type: "route"; value: string }
  | { type: "scroll"; value: string }
  | { type: "href"; value: string };

const ACTIONS: Record<string, Action> = {
  "ورود کاربران": { type: "route", value: "/auth" },
  "پیگیری مشارکت": { type: "route", value: "/participation/track" },
  "شروع مشارکت": { type: "route", value: "/projects" },
  "درباره ما": { type: "route", value: "/about" },
  "تماس با ما": { type: "route", value: "/contact" },
  "شرکت‌ها": { type: "route", value: "/companies" },
  "برای شرکت‌ها": { type: "route", value: "/companies" },
  "استارتاپ‌ها": { type: "route", value: "/startups" },
  "پروژه‌ها": { type: "route", value: "/projects" },
  "صفحه اصلی": { type: "route", value: "/" },
  "صفحه اصلی / ماه چگونه کار می‌کند": { type: "route", value: "/" },
  "انتخاب مسیر مشارکت": { type: "scroll", value: "مسیرهای مشارکت در پلتفرم ماه" },
  "مشاهده پروژه‌ها": { type: "route", value: "/projects" },
  "شرایط گواهی ماده ۱۷۲": { type: "route", value: "/article-172-guide" },
  "ویژه شرکت‌ها": { type: "route", value: "/companies" },
  "راهنمای استارتاپ‌ها": { type: "route", value: "/startups" },
  "مشاهده گزارش‌های اثر": { type: "route", value: "/impact-reports" },
  "مشاهده همه سوالات متداول ←": { type: "route", value: "/faq" },
  "ثبت‌نام استارتاپ یا شرکت": { type: "route", value: "/auth" },
  "ثبت‌نام استارتاپ": { type: "route", value: "/register/startup" },
  "اخبار و رویدادها": { type: "route", value: "/news" },
  "قوانین و مقررات": { type: "route", value: "/terms" },
  "حریم خصوصی": { type: "route", value: "/privacy-policy" },
  "سؤالات متداول": { type: "route", value: "/faq" },
  "نحوه مشارکت": { type: "route", value: "/how-it-works" },
  "تلفن: ۰۲۱-۸۸۸۸۸۸۸۸": { type: "href", value: "tel:02188888888" },
  "ایمیل: info@mahplatform.ir": { type: "href", value: "mailto:info@mahplatform.ir" },
};

function normalizedText(node: Element) {
  return (node.textContent ?? "").replace(/\s+/g, " ").trim();
}

function buttonTarget(span: HTMLSpanElement) {
  const parent = span.parentElement;
  if (!parent) return span;

  const looksLikeButton =
    parent.children.length === 1 &&
    (parent.className.includes("rounded-[12px]") ||
      parent.className.includes("border-[#2094e3]") ||
      parent.className.includes("bg-[#2094e3]"));

  return looksLikeButton ? parent : span;
}

function enhance(root: HTMLElement) {
  root.querySelectorAll<HTMLSpanElement>("span").forEach((span) => {
    const text = normalizedText(span);
    const action = ACTIONS[text];
    if (!action) return;

    const target = buttonTarget(span);
    if (target.dataset.mahAction) return;

    target.dataset.mahAction = action.type;
    target.dataset.mahTarget = action.value;
    target.setAttribute("role", "link");
    target.setAttribute("tabindex", "0");
    target.style.cursor = "pointer";
  });

  root
    .querySelectorAll<HTMLElement>(
      '[class*="RjfrM4ov5w.png"], [class*="61LMmHHrqJ.png"]',
    )
    .forEach((logo) => {
      if (logo.dataset.mahAction) return;
      logo.dataset.mahAction = "route";
      logo.dataset.mahTarget = "/";
      logo.setAttribute("role", "link");
      logo.setAttribute("tabindex", "0");
      logo.setAttribute("aria-label", "صفحه اصلی");
      logo.style.cursor = "pointer";
    });
}

function runAction(target: HTMLElement) {
  const type = target.dataset.mahAction as Action["type"] | undefined;
  const value = target.dataset.mahTarget;
  if (!type || !value) return;

  if (type === "scroll") {
    const root = document.querySelector<HTMLElement>(".main-container");
    const heading = root
      ? Array.from(root.querySelectorAll("span")).find(
          (node) => normalizedText(node) === value,
        )
      : undefined;
    heading?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  if (type === "href") {
    window.location.href = value;
    return;
  }

  window.location.assign(value);
}

export default function HowItWorksInteractions() {
  useEffect(() => {
    if (window.location.pathname !== "/how-it-works") return;

    const applyEnhancements = () => {
      const root = document.querySelector<HTMLElement>(".main-container");
      if (root) enhance(root);
    };

    applyEnhancements();

    const observer = new MutationObserver(applyEnhancements);
    observer.observe(document.body, { childList: true, subtree: true });

    const handleClick = (event: MouseEvent) => {
      const element = (event.target as Element | null)?.closest<HTMLElement>(
        "[data-mah-action]",
      );
      if (!element) return;
      event.preventDefault();
      runAction(element);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      const element = (event.target as Element | null)?.closest<HTMLElement>(
        "[data-mah-action]",
      );
      if (!element) return;
      event.preventDefault();
      runAction(element);
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      observer.disconnect();
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
}
