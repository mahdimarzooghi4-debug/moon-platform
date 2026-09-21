(() => {
  const projectMatch = () => window.location.pathname.match(/^\/projects\/([^/]+)\/?$/);
  const isProjectDetails = () => Boolean(projectMatch());
  if (!isProjectDetails()) return;

  const currentProjectId = () => decodeURIComponent(projectMatch()?.[1] || 'sustainable-agriculture');

  const go = (path) => {
    if (window.location.pathname + window.location.search === path) return;
    window.location.assign(path);
  };

  const clickableTarget = (node) =>
    node.closest('div[class*="rounded"]') || node.closest('div[class*="border"]') || node.parentElement || node;

  const bindTextLink = (label, path, shouldBind) => {
    document.querySelectorAll('span').forEach((span) => {
      if (span.textContent.trim() !== label) return;
      const target = clickableTarget(span);
      if (!target) return;
      if (typeof shouldBind === 'function' && !shouldBind(target, span)) return;
      if (target.getAttribute('data-mah-bound-path') === path) return;
      target.setAttribute('data-mah-bound-path', path);
      target.style.cursor = 'pointer';
      target.setAttribute('role', 'link');
      target.tabIndex = 0;
      const activate = (event) => {
        event.preventDefault();
        event.stopPropagation();
        go(path);
      };
      target.addEventListener('click', activate);
      target.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') activate(event);
      });
    });
  };

  const bindStaticLinks = () => {
    const links = new Map([
      ['ورود کاربران', '/auth'],
      ['پیگیری مشارکت', '/participation/track'],
      ['شروع مشارکت', '/projects'],
      ['صفحه اصلی', '/'],
      ['پروژه‌ها', '/projects'],
      ['استارتاپ‌ها', '/startups'],
      ['شرکت‌ها', '/companies'],
      ['تماس با ما', '/contact'],
      ['درباره ما', '/about'],
      ['مشاهده همه سؤالات متداول', '/faq'],
      ['مشارکت سازمانی چگونه انجام می‌شود؟', '/how-it-works'],
      ['مشاهده پروژه‌های دیگر', '/projects'],
      ['مشاهده پروفایل استارتاپ', '/startups'],
      ['مشاهده و مشارکت', '/projects'],
    ]);
    links.forEach((path, label) => bindTextLink(label, path));
  };

  // The contribution form uses React-owned input, tabs and buttons.
  // Do not bind DOM click handlers to its ancestors: the former
  // "مشارکت در پروژه" heading binder navigated whenever any control was clicked.

  const bindAll = () => {
    if (!isProjectDetails()) return;
    bindStaticLinks();
  };

  const start = () => {
    bindAll();
    const app = document.getElementById('app') || document.body;
    const observer = new MutationObserver(() => {
      bindAll();
    });
    observer.observe(app, { childList: true, subtree: true });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
})();
