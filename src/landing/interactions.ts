type LandingAction = {
  selector: string;
  href: string;
  label: string;
};

const landingRootSelector = '.main-container:has([class*="4T7A4AiY30.png"])';

const actions: LandingAction[] = [
  { selector: '[class~="z-[2]"]', href: '/auth', label: 'ورود کاربران' },
  { selector: '[class~="z-[4]"]', href: '/participation/track', label: 'پیگیری مشارکت' },
  { selector: '[class~="z-[6]"]', href: '/projects', label: 'شروع مشارکت' },
  { selector: '[class~="z-10"]', href: '/about', label: 'درباره ما' },
  { selector: '[class~="z-[11]"]', href: '/contact', label: 'تماس با ما' },
  { selector: '[class~="z-[12]"]', href: '/companies', label: 'شرکت‌ها' },
  { selector: '[class~="z-[13]"]', href: '/startups', label: 'استارتاپ‌ها' },
  { selector: '[class~="z-[14]"]', href: '/projects', label: 'پروژه‌ها' },
  { selector: '[class~="z-[15]"]', href: '/', label: 'صفحه اصلی' },
  { selector: '[class~="z-[16]"]', href: '/', label: 'لوگوی ماه' },

  { selector: '[class~="z-[22]"]', href: '/how-it-works', label: 'پخش معرفی ماه' },
  { selector: '[class~="z-[29]"]', href: '/how-it-works', label: 'معرفی ماه در ۹۰ ثانیه' },
  { selector: '[class~="z-[31]"]', href: '/projects', label: 'شروع مشارکت' },

  { selector: '[class~="z-[92]"]', href: '/register/startup', label: 'ثبت‌نام استارتاپ' },
  { selector: '[class~="z-[107]"]', href: '/register/company', label: 'ورود شرکت‌ها' },
  { selector: '[class~="z-[122]"]', href: '/projects', label: 'مشارکت فردی' },

  { selector: '[class~="z-[161]"]', href: '/projects', label: 'مشاهده و مشارکت' },
  { selector: '[class~="z-[195]"]', href: '/projects', label: 'مشاهده و مشارکت' },
  { selector: '[class~="z-[229]"]', href: '/projects', label: 'مشاهده و مشارکت' },
  { selector: '[class~="z-[231]"]', href: '/projects', label: 'مشاهده همه پروژه‌ها' },

  { selector: '[class~="z-[280]"]', href: '/news', label: 'مطالعه خبر' },
  { selector: '[class~="z-[292]"]', href: '/news', label: 'مطالعه خبر' },
  { selector: '[class~="z-[304]"]', href: '/news', label: 'مطالعه خبر' },
  { selector: '[class~="z-[306]"]', href: '/news', label: 'مشاهده همه اخبار' },

  { selector: '[class~="z-[313]"]', href: '/projects', label: 'شروع مشارکت' },

  { selector: '[class~="z-[319]"]', href: 'tel:02166485374', label: 'تلفن' },
  { selector: '[class~="z-[320]"]', href: 'mailto:info@mahcsr.ir', label: 'ایمیل' },
  { selector: '[class~="z-[328]"]', href: '/terms', label: 'قوانین و مقررات' },
  { selector: '[class~="z-[329]"]', href: '/privacy-policy', label: 'حریم خصوصی' },
  { selector: '[class~="z-[332]"]', href: '/contact', label: 'تماس با ما' },
  { selector: '[class~="z-[333]"]', href: '/faq', label: 'سؤالات متداول' },
  { selector: '[class~="z-[334]"]', href: '/participation/track', label: 'پیگیری مشارکت' },
  { selector: '[class~="z-[337]"]', href: '/projects', label: 'پروژه‌ها' },
  { selector: '[class~="z-[338]"]', href: '/companies', label: 'برای شرکت‌ها' },
  { selector: '[class~="z-[339]"]', href: '/how-it-works', label: 'نحوه مشارکت' },
  { selector: '[class~="z-[340]"]', href: '/register/startup', label: 'ثبت‌نام استارتاپ' },
  { selector: '[class~="z-[341]"]', href: '/news', label: 'اخبار و رویدادها' },
];

function enhanceLandingLinks() {
  const root = document.querySelector<HTMLElement>(landingRootSelector);
  if (!root) return;

  for (const action of actions) {
    root.querySelectorAll<HTMLElement>(action.selector).forEach((element) => {
      if (element.dataset.landingHref === action.href) return;

      element.dataset.landingHref = action.href;
      element.dataset.landingLabel = action.label;
      element.setAttribute('role', 'link');
      element.setAttribute('aria-label', action.label);
      element.tabIndex = 0;
      element.style.cursor = 'pointer';
    });
  }
}

function followLandingLink(element: HTMLElement) {
  const href = element.dataset.landingHref;
  if (!href) return;
  window.location.assign(href);
}

document.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;

  const actionElement = target.closest<HTMLElement>('[data-landing-href]');
  if (!actionElement || !actionElement.closest(landingRootSelector)) return;

  event.preventDefault();
  followLandingLink(actionElement);
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Enter' && event.key !== ' ') return;

  const target = event.target;
  if (!(target instanceof HTMLElement) || !target.dataset.landingHref) return;
  if (!target.closest(landingRootSelector)) return;

  event.preventDefault();
  followLandingLink(target);
});

const observer = new MutationObserver(() => enhanceLandingLinks());
observer.observe(document.documentElement, { childList: true, subtree: true });
enhanceLandingLinks();
