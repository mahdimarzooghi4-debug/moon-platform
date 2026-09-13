import { useEffect } from "react";

const PROJECT_GALLERY = [
  {
    src: "/assets/codia/qN8rNm5ete.webp",
    alt: "زنان روستایی در کارگاه تولید محصولات محلی",
  },
  {
    src: "/assets/codia/xkhGZiM7zx.webp",
    alt: "محصولات تولیدشده در پروژه اشتغال زنان روستایی",
  },
  {
    src: "/assets/codia/k38ngLiS1o.webp",
    alt: "آموزش مهارت به زنان روستایی",
  },
  {
    src: "/assets/codia/RR9PzHGgQe.webp",
    alt: "عرضه محصولات محلی زنان روستایی",
  },
] as const;

const PERSIAN_DIGITS = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

function toPersianDigits(value: number) {
  return String(value).replace(/\d/g, (digit) => PERSIAN_DIGITS[Number(digit)]);
}

function normalizedText(node: Element) {
  return (node.textContent ?? "").replace(/\s+/g, " ").trim();
}

function findExactText(root: ParentNode, text: string) {
  return Array.from(root.querySelectorAll<HTMLElement>("span, p, div")).find(
    (node) => normalizedText(node) === text,
  );
}

export default function ProjectDetailsInteractions() {
  useEffect(() => {
    if (!/^\/projects\/[^/]+$/.test(window.location.pathname)) return;

    const applyPolish = () => {
      const root = document.querySelector<HTMLElement>(".main-container");
      if (!root) return;

      const customAmountLabel = findExactText(root, "مبلغ دلخواه");
      if (customAmountLabel) {
        customAmountLabel.style.width = "100%";
        customAmountLabel.style.display = "block";
        customAmountLabel.style.direction = "rtl";
        customAmountLabel.style.textAlign = "right";

        const section = customAmountLabel.parentElement;
        const placeholder = section ? findExactText(section, "مبلغ مورد نظر را وارد کنید...") : undefined;
        const amountBox = placeholder?.parentElement;

        if (section) {
          section.style.width = "100%";
          section.style.alignItems = "stretch";
          section.style.direction = "rtl";
        }

        if (placeholder && amountBox) {
          amountBox.style.direction = "ltr";
          amountBox.style.display = "flex";
          amountBox.style.alignItems = "center";
          amountBox.style.justifyContent = "space-between";
          amountBox.style.gap = "12px";

          placeholder.style.width = "auto";
          placeholder.style.flex = "1 1 auto";
          placeholder.style.display = "flex";
          placeholder.style.justifyContent = "flex-end";
          placeholder.style.direction = "rtl";
          placeholder.style.textAlign = "right";

          const unit = Array.from(amountBox.children).find(
            (child): child is HTMLElement =>
              child instanceof HTMLElement && normalizedText(child) === "تومان",
          );

          if (unit) {
            unit.style.flex = "0 0 auto";
            unit.style.direction = "rtl";
            unit.style.textAlign = "right";
          }
        }
      }

      const goalPrefix = findExactText(root, "هدف:");
      if (goalPrefix) {
        const goalBlock = goalPrefix.parentElement;
        const goalRow = goalBlock?.parentElement;

        if (goalBlock) {
          goalBlock.style.width = "112px";
          goalBlock.style.direction = "rtl";
          goalBlock.style.textAlign = "right";

          const goalParts = Array.from(goalBlock.children).filter(
            (child): child is HTMLElement => child instanceof HTMLElement,
          );
          const valuePart = goalParts[1];
          const suffixPart = goalParts[2];

          if (
            valuePart &&
            suffixPart &&
            normalizedText(valuePart) === "۴" &&
            normalizedText(suffixPart) === "۰۰ میلیون"
          ) {
            valuePart.textContent = "۴۰۰ میلیون";
            valuePart.setAttribute("dir", "rtl");
            valuePart.style.unicodeBidi = "isolate";
            suffixPart.remove();
          }
        }

        if (goalRow) {
          goalRow.style.direction = "rtl";
          goalRow.style.flexDirection = "row";
          goalRow.style.justifyContent = "space-between";
          goalRow.style.alignItems = "center";
        }
      }

      const galleryCounter = Array.from(root.querySelectorAll<HTMLElement>("span")).find((node) =>
        /^[۱۲۳۴] از ۴$/.test(normalizedText(node)),
      );
      const galleryRow = galleryCounter?.parentElement;
      const previousControl = galleryRow?.children.item(0);
      const nextControl = galleryRow?.children.item(2);
      const heroImage =
        root.querySelector<HTMLImageElement>('img[data-project-gallery="true"]') ??
        root.querySelector<HTMLImageElement>('img[src="/assets/codia/qN8rNm5ete.webp"]');

      if (
        galleryCounter &&
        heroImage &&
        previousControl instanceof HTMLElement &&
        nextControl instanceof HTMLElement
      ) {
        heroImage.dataset.projectGallery = "true";
        if (!heroImage.dataset.galleryIndex) heroImage.dataset.galleryIndex = "0";

        const setGalleryImage = (nextIndex: number) => {
          const normalizedIndex = (nextIndex + PROJECT_GALLERY.length) % PROJECT_GALLERY.length;
          const image = PROJECT_GALLERY[normalizedIndex];

          heroImage.src = image.src;
          heroImage.alt = image.alt;
          heroImage.dataset.galleryIndex = String(normalizedIndex);
          galleryCounter.textContent = `${toPersianDigits(normalizedIndex + 1)} از ${toPersianDigits(PROJECT_GALLERY.length)}`;
        };

        const moveGallery = (delta: number) => {
          const currentIndex = Number(heroImage.dataset.galleryIndex ?? "0");
          setGalleryImage(currentIndex + delta);
        };

        const prepareControl = (control: HTMLElement, label: string, delta: number) => {
          control.style.cursor = "pointer";
          control.style.userSelect = "none";
          control.setAttribute("role", "button");
          control.setAttribute("tabindex", "0");
          control.setAttribute("aria-label", label);
          control.onclick = () => moveGallery(delta);
          control.onkeydown = (event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              moveGallery(delta);
            }
          };
        };

        prepareControl(previousControl, "تصویر قبلی پروژه", -1);
        prepareControl(nextControl, "تصویر بعدی پروژه", 1);
      }
    };

    applyPolish();

    const observer = new MutationObserver(applyPolish);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return null;
}
