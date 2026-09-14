import { useEffect } from "react";
import "./FaqPolish.css";

export default function FaqInteractions() {
  useEffect(() => {
    const applyFaqPolish = () => {
      if (window.location.pathname !== "/faq") return;

      const actions = document.querySelector<HTMLElement>(".faq-header-actions");
      if (actions) {
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
      }

      document.querySelectorAll<HTMLElement>(".faq-feedback").forEach((feedback) => feedback.remove());
    };

    applyFaqPolish();

    const observer = new MutationObserver(applyFaqPolish);
    observer.observe(document.body, { childList: true, subtree: true });

    const onNavigation = () => window.setTimeout(applyFaqPolish, 0);
    window.addEventListener("popstate", onNavigation);
    window.addEventListener("hashchange", onNavigation);
    document.addEventListener("click", onNavigation);

    return () => {
      observer.disconnect();
      window.removeEventListener("popstate", onNavigation);
      window.removeEventListener("hashchange", onNavigation);
      document.removeEventListener("click", onNavigation);
    };
  }, []);

  return null;
}
