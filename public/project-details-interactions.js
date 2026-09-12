(() => {
  const isProjectDetails = () => /^\/projects\/[^/]+\/?$/.test(window.location.pathname);
  if (!isProjectDetails()) return;

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

  const upgradeCustomAmount = () => {
    const placeholderSpan = [...document.querySelectorAll('span')].find((span) =>
      span.textContent.includes('مبلغ مورد نظر را وارد کنید')
    );
    if (!placeholderSpan) return;

    const parent = placeholderSpan.parentElement;
    if (parent?.querySelector('input[data-mah-amount-input="1"]')) return;

    const input = document.createElement('input');
    input.type = 'text';
    input.inputMode = 'numeric';
    input.placeholder = 'مبلغ مورد نظر را وارد کنید';
    input.className = placeholderSpan.className;
    input.dataset.mahAmountInput = '1';
    input.setAttribute('aria-label', 'مبلغ دلخواه');
    input.style.border = '0';
    input.style.background = 'transparent';
    input.style.outline = '0';
    input.style.width = '100%';
    input.style.minWidth = '0';
    input.style.direction = 'rtl';
    input.style.textAlign = 'right';
    input.style.color = '#17324d';
    input.style.fontSize = '14px';
    input.style.lineHeight = '22px';
    placeholderSpan.replaceWith(input);
  };

  const bindAmountChoices = () => {
    const labels = ['۵۰۰ هزار تومان', '۱ میلیون تومان', '۵ میلیون تومان', '۱۰ میلیون تومان'];
    labels.forEach((label) => {
      document.querySelectorAll('span').forEach((span) => {
        if (span.textContent.trim() !== label) return;
        const target = clickableTarget(span);
        if (!target || target.dataset.mahAmountChoice) return;
        target.dataset.mahAmountChoice = label;
        target.style.cursor = 'pointer';
        target.setAttribute('role', 'button');
        target.tabIndex = 0;
        const selectAmount = (event) => {
          event?.preventDefault();
          event?.stopPropagation();
          document.querySelectorAll('[data-mah-amount-choice]').forEach((item) => {
            item.style.borderColor = '#e4ebf1';
            item.style.background = 'transparent';
          });
          target.style.borderColor = '#2094e3';
          target.style.background = '#eaf5fd';
          const input = document.querySelector('input[data-mah-amount-input="1"]');
          if (input) {
            input.value = label.replace(/[^۰-۹0-9]/g, '');
            input.dispatchEvent(new Event('input', { bubbles: true }));
          }
        };
        target.addEventListener('click', selectAmount);
        target.addEventListener('keydown', (event) => {
          if (event.key === 'Enter' || event.key === ' ') selectAmount(event);
        });
      });
    });
  };

  const bindParticipationTabs = () => {
    ['مشارکت فردی', 'مشارکت سازمانی'].forEach((label) => {
      document.querySelectorAll('span').forEach((span) => {
        if (span.textContent.trim() !== label) return;
        const target = clickableTarget(span);
        if (!target || target.dataset.mahParticipationTab) return;
        target.dataset.mahParticipationTab = label;
        target.style.cursor = 'pointer';
        target.setAttribute('role', 'button');
        target.tabIndex = 0;
        const selectTab = (event) => {
          event?.preventDefault();
          event?.stopPropagation();
          document.querySelectorAll('[data-mah-participation-tab]').forEach((item) => {
            const active = item.dataset.mahParticipationTab === label;
            item.style.background = active ? '#fff' : 'transparent';
            const text = item.querySelector('span');
            if (text) {
              text.style.fontWeight = active ? '700' : '400';
              text.style.color = active ? '#17324d' : '#60758a';
            }
          });
          document.documentElement.dataset.mahParticipationType =
            label === 'مشارکت سازمانی' ? 'organization' : 'individual';
        };
        target.addEventListener('click', selectTab);
        target.addEventListener('keydown', (event) => {
          if (event.key === 'Enter' || event.key === ' ') selectTab(event);
        });
      });
    });
  };

  const bindContinue = () => {
    document.querySelectorAll('span').forEach((span) => {
      if (span.textContent.trim() !== 'ادامه مشارکت') return;
      const target = clickableTarget(span);
      if (!target || target.dataset.mahContinueBound) return;
      target.dataset.mahContinueBound = '1';
      target.style.cursor = 'pointer';
      target.setAttribute('role', 'button');
      target.tabIndex = 0;
      const activate = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const input = document.querySelector('input[data-mah-amount-input="1"]');
        const amount = input?.value?.trim();
        const participationType = document.documentElement.dataset.mahParticipationType || 'individual';
        const params = new URLSearchParams();
        if (amount) params.set('amount', amount);
        params.set('type', participationType);
        go(`/projects/sustainable-agriculture/participate?${params.toString()}`);
      };
      target.addEventListener('click', activate);
      target.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') activate(event);
      });
    });
  };

  const bindProjectCta = () => {
    bindTextLink(
      'مشارکت در پروژه',
      '/projects/sustainable-agriculture/participate',
      (target) => {
        const text = target.textContent || '';
        // Do not bind the participation-card heading/whole card as a link.
        return !(text.includes('مشارکت فردی') && text.includes('مشارکت سازمانی'));
      },
    );
  };

  const bindAll = () => {
    if (!isProjectDetails()) return;
    bindStaticLinks();
    upgradeCustomAmount();
    bindAmountChoices();
    bindParticipationTabs();
    bindContinue();
    bindProjectCta();
  };

  const start = () => {
    document.documentElement.dataset.mahParticipationType = 'individual';
    bindAll();
    const app = document.getElementById('app') || document.body;
    const observer = new MutationObserver(bindAll);
    observer.observe(app, { childList: true, subtree: true });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
})();
