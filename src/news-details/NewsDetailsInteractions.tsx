import { useEffect } from "react";

const ONLINE_REPORT_ROUTE = "/impact-reports";

function normalizedText(node: Element) {
  return (node.textContent ?? "").replace(/\s+/g, " ").trim();
}

function enhanceOnlineButtons(root: HTMLElement) {
  root.querySelectorAll<HTMLElement>("span, p, div").forEach((node) => {
    if (normalizedText(node) !== "مشاهده آنلاین") return;

    const target = node.closest<HTMLElement>("button") ?? node.parentElement ?? node;
    if (target.dataset.mahOnlineReportRoute) return;

    target.dataset.mahOnlineReportRoute = ONLINE_REPORT_ROUTE;
    target.setAttribute("role", "link");
    target.setAttribute("tabindex", "0");
    target.style.cursor = "pointer";
  });
}

function navigate(target: HTMLElement) {
  const route = target.dataset.mahOnlineReportRoute;
  if (route) window.location.assign(route);
}

export default function NewsDetailsInteractions() {
  useEffect(() => {
    if (!/^\/news\/[^/]+$/.test(window.location.pathname)) return;

    const applyEnhancements = () => {
      const root = document.querySelector<HTMLElement>(".main-container");
      if (root) enhanceOnlineButtons(root);
    };

    applyEnhancements();

    const observer = new MutationObserver(applyEnhancements);
    observer.observe(document.body, { childList: true, subtree: true });

    const handleClick = (event: MouseEvent) => {
      const element = (event.target as Element | null)?.closest<HTMLElement>(
        "[data-mah-online-report-route]",
      );
      if (!element) return;
      event.preventDefault();
      navigate(element);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      const element = (event.target as Element | null)?.closest<HTMLElement>(
        "[data-mah-online-report-route]",
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
