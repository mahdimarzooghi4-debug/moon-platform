import { useEffect } from "react";

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
          goalBlock.style.direction = "rtl";
          goalBlock.style.textAlign = "right";
        }

        if (goalRow) {
          goalRow.style.direction = "rtl";
          goalRow.style.flexDirection = "row";
          goalRow.style.justifyContent = "space-between";
          goalRow.style.alignItems = "center";
        }
      }
    };

    applyPolish();

    const observer = new MutationObserver(applyPolish);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return null;
}
