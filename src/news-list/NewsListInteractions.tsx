import { useEffect } from "react";

const ACTIONS: Record<string, string> = {
  "مشاهده گزارش اثر": "/impact-reports",
  "مشاهده گزارش‌های اثر": "/impact-reports",
  "مرور اثر سامانه ماه": "/impact-overview",
  "مطالعه خبر": "/news/social-impact-1404",
  "مطالعه خبر ←": "/news/social-impact-1404",
};

function normalizedText(node: Element) {
  return (node.textContent ?? "").replace(/\s+/g, " ").trim();
}

function actionTarget(node: HTMLElement) {
  const parent = node.parentElement;
  if (!parent) return node;

  const looksLikeButton =
    parent.children.length === 1 &&
    (parent.className.includes("rounded-[12px]") ||
      parent.className.includes("bg-[#2094e3]") ||
      parent.className.includes("border-[#e4ebf1]"));

  return looksLikeButton ? parent : node;
}

function enhance(root: HTMLElement) {
  root.querySelectorAll<HTMLElement>("span, p").forEach((node) => {
    const route = ACTIONS[normalizedText(node)];
    if (!route) return;

    const target = actionTarget(node);
    if (target.dataset.mahNewsRoute) return;

    target.dataset.mahNewsRoute = route;
    target.setAttribute("role", "link");
    target.setAttribute("tabindex", "0");
    target.style.cursor = "pointer";
  });
}

function navigate(target: HTMLElement) {
  const route = target.dataset.mahNewsRoute;
  if (route) window.location.assign(route);
}

export default function NewsListInteractions() {
  useEffect(() => {
    if (window.location.pathname !== "/news") return;

    const applyEnhancements = () => {
      const root = document.querySelector<HTMLElement>(".main-container");
      if (root) enhance(root);
    };

    applyEnhancements();

    const observer = new MutationObserver(applyEnhancements);
    observer.observe(document.body, { childList: true, subtree: true });

    const handleClick = (event: MouseEvent) => {
      const element = (event.target as Element | null)?.closest<HTMLElement>(
        "[data-mah-news-route]",
      );
      if (!element) return;
      event.preventDefault();
      navigate(element);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      const element = (event.target as Element | null)?.closest<HTMLElement>(
        "[data-mah-news-route]",
      );
      if (!element) return;
      event.preventDefault();
      navigate(element);
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
