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

function rightAlignRelatedNewsCards(root: HTMLElement) {
  const row = findSectionRow(root, "مطالب مرتبط با این گزارش");
  if (!row) return;

  // Keep the three-card visual order unchanged. Only the content inside each
  // generated card is forced into a physical right-aligned Persian layout.
  row.style.direction = "ltr";

  Array.from(row.children).forEach((card) => {
    if (!(card instanceof HTMLElement)) return;

    card.setAttribute("dir", "rtl");
    card.style.direction = "rtl";
    card.style.textAlign = "right";
    card.style.alignItems = "stretch";

    const cardChildren = Array.from(card.children).filter(
      (child): child is HTMLElement => child instanceof HTMLElement,
    );
    if (cardChildren.length < 2) return;

    // Generated news cards use the last direct child as the text/content area.
    const content = cardChildren[cardChildren.length - 1];
    content.setAttribute("dir", "rtl");
    content.style.direction = "rtl";
    content.style.width = "100%";
    content.style.alignItems = "stretch";
    content.style.textAlign = "right";

    const directContentChildren = Array.from(content.children).filter(
      (child): child is HTMLElement => child instanceof HTMLElement,
    );

    directContentChildren.forEach((item) => {
      item.setAttribute("dir", "rtl");
      item.style.direction = "rtl";
      item.style.width = "100%";
      item.style.maxWidth = "100%";
      item.style.textAlign = "right";
    });

    // First content row is category/date. Keep date on the physical right and
    // category on the left exactly like the design.
    const metaRow = directContentChildren[0];
    if (metaRow) {
      metaRow.style.display = "flex";
      metaRow.style.flexDirection = "row";
      metaRow.style.direction = "rtl";
      metaRow.style.justifyContent = "space-between";
      metaRow.style.alignItems = "center";
      metaRow.style.width = "100%";

      Array.from(metaRow.children).forEach((item) => {
        if (!(item instanceof HTMLElement)) return;
        item.style.width = "auto";
        item.style.maxWidth = "none";
        item.style.display = "block";
        item.style.direction = "rtl";
        item.style.textAlign = "right";
        item.style.justifyContent = "initial";
      });
    }

    content.querySelectorAll<HTMLElement>("span, p, a").forEach((text) => {
      text.setAttribute("dir", "rtl");
      text.style.direction = "rtl";
      text.style.textAlign = "right";
    });

    // Generated title/description spans have fixed widths; stretching them is
    // required for text-align:right to reach the card's right padding edge.
    directContentChildren.slice(1).forEach((item) => {
      if (normalizedText(item).includes("مطالعه خبر")) return;
      item.style.width = "100%";
      item.style.maxWidth = "100%";
      item.style.justifyContent = "flex-start";
      item.style.textAlign = "right";
    });

    // Keep the CTA at the physical right edge regardless of inherited RTL/LTR
    // flex behavior.
    const ctaText = Array.from(
      content.querySelectorAll<HTMLElement>("span, p, a"),
    ).find((node) => normalizedText(node).includes("مطالعه خبر"));

    if (ctaText) {
      ctaText.style.width = "auto";
      ctaText.style.maxWidth = "none";
      ctaText.style.display = "inline-flex";
      ctaText.style.direction = "rtl";
      ctaText.style.textAlign = "right";
      ctaText.style.justifyContent = "flex-start";

      const ctaRow = ctaText.parentElement;
      if (ctaRow instanceof HTMLElement) {
        ctaRow.style.width = "100%";
        ctaRow.style.direction = "ltr";
        ctaRow.style.display = "flex";
        ctaRow.style.justifyContent = "flex-end";
        ctaRow.style.alignItems = "center";
        ctaRow.style.textAlign = "right";
      }
    }
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
      rightAlignRelatedNewsCards(root);
      rightAlignProjectCards(root);
    };

    applyEnhancements();

    const observer = new MutationObserver(applyEnhancements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return null;
}
