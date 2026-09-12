(() => {
  const isProjectDetails = () => /^\/projects\/[^/]+\/?$/.test(window.location.pathname);
  if (!isProjectDetails()) return;

  const go = (path) => {
    if (window.location.pathname + window.location.search === path) return;
    window.location.assign(path);
  };

  const clickableTarget = (node) =>
    node.closest('div[class*="rounded"]') || node.closest('div[class*="border"]') || node;

  const bindTextLink = (label, path) => {
    document.querySelectorAll('span').forEach((span) => {
      if (span.textContent.trim() !== label) return;
      const target = clickableTarget(span);
      const key = `mahBound${label}`;
      if (target.dataset[key]) return;
      target.dataset[key] = '1';
      target.style.cursor = 'pointer';
      target.setAttribute('role', 'link');
      target.tabIndex = 0;
      const activate = (event) => {
        event.preventDefault();
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
    if (!placeholderSpan || placeholderSpan.dataset.mahAmountInput === '1') return;

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
        if (target.dataset.mahAmountChoice) return;
        target.dataset.mahAmountChoice = label;
        target.style.cursor = 'pointer';
        target.addEventListener('click', () => {
          document.querySelectorAll('[data-mah-amount-choice]').forEach((item) => {
            item.style.borderColor = '#e4ebf1';
            item.style.background = 'transparent';
          });
          target.style.borderColor = '#2094e3';
          target.style.background = '#eaf5fd';
          const input = document.querySelector('input[data-mah-amount-input="1"]');
          if (input) input.value = label.replace(/[^۰-۹0-9]/g, '');
        });
      });
    });
  };

  const bindParticipationTabs = () => {
    ['مشارکت فردی', 'مشارکت سازمانی'].forEach((label) => {
      document.querySelectorAll('span').forEach((span) => {
        if (span.textContent.trim() !== label) return;
        const target = clickableTarget(span);
        if (target.dataset.mahParticipationTab) return;
        target.dataset.mahParticipationTab = label;
        target.style.cursor = 'pointer';
        target.addEventListener('click', () => {
          document.querySelectorAll('[data-mah-participation-tab]').forEach((item) => {
            const active = item.dataset.mahParticipationTab === label;
            item.style.background = active ? '#fff' : 'transparent';
            const text = item.querySelector('span');
            if (text) {
              text.style.fontWeight = active ? '700' : '400';
              text.style.color = active ? '#17324d' : '#60758a';
            }
          });
        });
      });
    });
  };

  const bindContinue = () => {
    document.querySelectorAll('span').forEach((span) => {
      if (span.textContent.trim() !== 'ادامه مشارکت') return;
      const target = clickableTarget(span);
      if (target.dataset.mahContinueBound) return;
      target.dataset.mahContinueBound = '1';
      target.style.cursor = 'pointer';
      target.setAttribute('role', 'button');
      target.tabIndex = 0;
      const activate = (event) => {
        event.preventDefault();
        const input = document.querySelector('input[data-mah-amount-input="1"]');
        const amount = input?.value?.trim();
        const suffix = amount ? `?amount=${encodeURIComponent(amount)}` : '';
        go(`/projects/sustainable-agriculture/participate${suffix}`);
      };
      target.addEventListener('click', activate);
      target.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') activate(event);
      });
    });
  };

  const bindProjectCta = () => {
    bindTextLink('مشارکت در پروژه', '/projects/sustainable-agriculture/participate');
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

  bindAll();
  const observer = new MutationObserver(bindAll);
  observer.observe(document.getElementById('app') || document.body, {
    childList: true,
    subtree: true,
  });
})();
