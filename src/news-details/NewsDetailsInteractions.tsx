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

      if (text.className.includes("flex")) {
        text.style.justifyContent = "flex-start";
      }
    });
  });
}

function rightAlignProjectCards(root: HTMLElement) {
  const row = findSectionRow(root, "پروژه‌های مرتبط با این گزارش");
  if (!row) return;

  row.setAttribute("dir", "rtl");
  row.style.direction = "rtl";

  Array.from(row.children).forEach((card) => {
    if (!(card instanceof HTMLElement)) return;

    card.setAttribute("dir", "rtl");
    card.style.direction = "rtl";
    card.style.textAlign = "right";
    card.style.alignItems = "stretch";

    const info = card.children[0];
    if (info instanceof HTMLElement) {
      info.style.width = "100%";
      info.style.alignItems = "stretch";
      info.style.textAlign = "right";
      info.style.direction = "rtl";

      const meta = info.children[0];
      if (meta instanceof HTMLElement) {
        meta.style.width = "100%";
        meta.style.direction = "rtl";
        meta.style.justifyContent = "flex-start";
        meta.style.textAlign = "right";
      }

      Array.from(info.children).slice(1).forEach((item) => {
        if (!(item instanceof HTMLElement)) return;
        item.style.width = "100%";
        item.style.maxWidth = "100%";
        item.style.textAlign = "right";
        item.style.justifyContent = "flex-start";
        item.style.direction = "rtl";
      });
    }

    const footer = card.children[1];
    if (footer instanceof HTMLElement) {
      footer.style.width = "100%";
      footer.style.direction = "rtl";
      footer.style.justifyContent = "flex-start";
      footer.style.textAlign = "right";

      const link = footer.querySelector<HTMLElement>("span, a");
      if (link) {
        link.style.width = "100%";
        link.style.textAlign = "right";
        link.style.justifyContent = "flex-start";
        link.style.direction = "rtl";
      }
    }
  });
}

export default function NewsDetailsInteractions() {
  useEffect(() => {
    if (!/^\/news\/[^/]+$/.test(window.location.pathname)) return;

    const applyEnhancements = () => {
      const root = document.querySelector<HTMLElement>(".main-container");
      if (!root) return;

      removeOnlineButtons(root);
      rightAlignCards(root, "مطالب مرتبط با این گزارش");
      rightAlignProjectCards(root);
    };

    applyEnhancements();

    const observer = new MutationObserver(applyEnhancements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return null;
}
