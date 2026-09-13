import { useEffect } from "react";
import "./FaqPolish.css";

export default function FaqInteractions() {
  useEffect(() => {
    if (window.location.pathname !== "/faq") return;

    const applyHeaderPolish = () => {
      const actions = document.querySelector<HTMLElement>(".faq-header-actions");
      if (!actions) return;

      const login = actions.querySelector<HTMLAnchorElement>('a[href="/auth"]');
      if (login) {
        login.classList.remove("faq-btn-primary");
        login.classList.add("faq-btn-secondary", "faq-login-btn");
      }

      if (!actions.querySelector(".faq-start-participation")) {
        const start = document.createElement("a");
        start.className = "faq-btn faq-btn-primary faq-start-participation";
        start.href = "/projects";
        start.textContent = "شروع مشارکت";
        actions.insertBefore(start, actions.firstChild);
      }
    };

    applyHeaderPolish();

    const observer = new MutationObserver(applyHeaderPolish);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return null;
}
