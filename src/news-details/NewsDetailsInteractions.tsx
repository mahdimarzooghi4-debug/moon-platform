import { useEffect } from "react";

function normalizedText(node: Element) {
  return (node.textContent ?? "").replace(/\s+/g, " ").trim();
}

function removeOnlineButtons(root: HTMLElement) {
  root.querySelectorAll<HTMLElement>("span, p, div").forEach((node) => {
    if (normalizedText(node) !== "مشاهده آنلاین") return;

    const target = node.closest<HTMLElement>("button") ?? node.parentElement;
    if (!target) return;

    target.style.display = "none";
  });
}

export default function NewsDetailsInteractions() {
  useEffect(() => {
    if (!/^\/news\/[^/]+$/.test(window.location.pathname)) return;

    const applyEnhancements = () => {
      const root = document.querySelector<HTMLElement>(".main-container");
      if (root) removeOnlineButtons(root);
    };

    applyEnhancements();

    const observer = new MutationObserver(applyEnhancements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return null;
}
