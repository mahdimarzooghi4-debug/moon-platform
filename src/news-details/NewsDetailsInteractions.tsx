import { useEffect } from "react";

function normalizedText(node: Element) {
  return (node.textContent ?? "").replace(/\s+/g, " ").trim();
}

function removeOnlineButtons(root: HTMLElement) {
  root.querySelectorAll<HTMLElement>("span, p").forEach((node) => {
    if (normalizedText(node) !== "مشاهده آنلاین") return;

    // Hide only the button-like element that directly wraps the label.
    // Do not hide the shared actions container because it also contains
    // the adjacent "دریافت فایل" button.
    const target = node.closest<HTMLElement>("button") ?? node.parentElement;
    if (!target) return;

    target.style.display = "none";
  });
}

function findSectionRow(root: HTMLElement, headingText: string) {
  const heading = Array.from(
    root.querySelectorAll<HTMLElement>("span, h1, h2, h3, p"),
  ).find((node) => normalizedText(node) === headingText);

  if (!heading) return null;

  const section = heading.parentElement;
  if (!section) return null;

  const directSibling = heading.nextElementSibling;
  if (
    directSibling instanceof HTMLElement &&
    directSibling.children.length >= 3
  ) {
    return directSibling;
  }

  return (
    Array.from(section.children).find(
      (child): child is HTMLElement =>
        child instanceof HTMLElement &&
        child !== heading &&
        child.children.length >= 3,
    ) ?? null
  );
}

function rightAlignCards(root: HTMLElement, headingText: string) {
  const row = findSectionRow(root, headingText);
  if (!row) return;

  row.setAttribute("dir", "rtl");
  row.style.direction = "rtl";
  row.style.textAlign = "right";

  Array.from(row.children).forEach((child) => {
    if (!(child instanceof HTMLElement)) return;

    child.setAttribute("dir", "rtl");
    child.style.direction = "rtl";
    child.style.textAlign = "right";

    child.querySelectorAll<HTMLElement>("div").forEach((group) => {
      group.setAttribute("dir", "rtl");
      group.style.direction = "rtl";
      group.style.textAlign = "right";

      if (
        group.className.includes("items-start") ||
        group.className.includes("items-end")
      ) {
        group.style.alignItems = "flex-end";
      }
    });

    child.querySelectorAll<HTMLElement>("span, p, a").forEach((text) => {
      text.setAttribute("dir", "rtl");
      text.style.direction = "rtl";
      text.style.textAlign = "right";

      // Generated cards use flex spans with justify-end. In an RTL row that
      // can visually push the copy left, so force the inline start to the
      // right edge of the element.
      if (text.className.includes("flex")) {
        text.style.justifyContent = "flex-start";
      }
    });
  });
}

export default function NewsDetailsInteractions() {
  useEffect(() => {
    if (!/^\/news\/[^/]+$/.test(window.location.pathname)) return;

    const applyEnhancements = () => {
      const root = document.querySelector<HTMLElement>(".main-container");
      if (!root) return;

      removeOnlineButtons(root);
      rightAlignCards(root, "پروژه‌های مرتبط با این گزارش");
      rightAlignCards(root, "مطالب مرتبط با این گزارش");
    };

    applyEnhancements();

    const observer = new MutationObserver(applyEnhancements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return null;
}
