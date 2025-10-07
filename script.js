// ---------- Simple i18n + Theme Toggle (fixed) -----------

// Словарь для перевода интерфейса (en / he)
const t = {
  en: {
    nav_home: 'Home',
    nav_services: 'Services',
    nav_pricing: 'Pricing',
    nav_contact: 'Contact',

    hero_title: 'I build modern, responsive websites for small businesses and personal brands.',
    hero_subtitle: 'Choose a one-time delivery or ongoing support. Fast, clean, and mobile-first.',

    cta_get_started: 'Get Started',
    cta_contact_me: 'Contact Me',

    usp1: 'Fast delivery and clean code',
    usp2: 'SEO-friendly and mobile-first',
    usp3: 'Hosting on GitHub Pages or your domain',
    usp4: 'Clear pricing with flexible support',

    services_title: 'Services',
    s1_title: 'One-time Website',
    s1_desc: 'I create a clean, fast and mobile-friendly site and hand it off to you.',
    s2_title: 'Website + Ongoing Support',
    s2_desc: 'I build your site and provide continuous updates and care.',
    s3_title: 'Extras',
    s3_desc: 'Custom domains, analytics, basic SEO, performance checks.',

    pricing_title: 'Pricing',
    plan_basic_hd: 'Basic — One-time delivery',
    plan_basic_price: 'from ₪500',
    plan_basic_hint: 'Exact quote after a short brief call.',
    plan_basic_1: 'Responsive design (mobile/desktop)',
    plan_basic_2: 'Deployed to GitHub Pages or your hosting',
    plan_basic_3: 'Handover with instructions',

    plan_support_hd: 'Support Plan — Website + Care',
    plan_support_price: '₪100 / month',
    plan_support_hint: 'Includes up to 10 edits per month.',
    plan_support_1: 'Content & visual updates',
    plan_support_2: 'Minor features & bug fixes',
    plan_support_3: 'Performance & uptime checks',

    plan_btn: 'Request a quote',

    contact_title: 'Contact',
    contact_brief_title: 'Brief',
    contact_brief_desc: 'Have a question? Feel free to ask for details.',

    footer_note: 'Web development services in Israel'
  },

  he: {
    nav_home: 'בית',
    nav_services: 'שירותים',
    nav_pricing: 'תמחור',
    nav_contact: 'צור קשר',

    hero_title: 'אני בונה אתרים מודרניים ורספונסיביים לעסקים קטנים ומותגים אישיים.',
    hero_subtitle: 'לבחירה: מסירה חד־פעמית או תחזוקה שוטפת. מהיר, נקי ומותאם לנייד.',

    cta_get_started: 'בוא נתחיל',
    cta_contact_me: 'צור קשר',

    usp1: 'אספקה מהירה וקוד נקי',
    usp2: 'מותאם לנייד וידידותי ל-SEO',
    usp3: 'אירוח ב-GitHub Pages או בדומיין שלך',
    usp4: 'תמחור ברור ותמיכה גמישה',

    services_title: 'שירותים',
    s1_title: 'אתר חד-פעמי',
    s1_desc: 'אבנה אתר נקי, מהיר ומותאם לנייד ואמסור לך אותו.',
    s2_title: 'אתר + תמיכה שוטפת',
    s2_desc: 'אבנה את האתר ואספק עדכונים וטיפול מתמשך.',
    s3_title: 'תוספות',
    s3_desc: 'דומיינים, אנליטיקס, SEO בסיסי, בדיקות ביצועים.',

    pricing_title: 'תמחור',
    plan_basic_hd: 'בסיס — מסירה חד-פעמית',
    plan_basic_price: 'החל מ־₪500',
    plan_basic_hint: 'הצעת מחיר מדויקת אחרי שיחת היכרות קצרה.',
    plan_basic_1: 'עיצוב רספונסיבי (נייד/דסקטופ)',
    plan_basic_2: 'העלאה ל-GitHub Pages או לאחסון שלך',
    plan_basic_3: 'מדריך מסירה מפורט',

    plan_support_hd: 'מסלול תמיכה — אתר + תחזוקה',
    plan_support_price: '₪100 לחודש',
    plan_support_hint: 'כולל עד 10 עדכונים בחודש.',
    plan_support_1: 'עדכוני תוכן ועיצוב',
    plan_support_2: 'שיפורים קטנים ותיקוני תקלות',
    plan_support_3: 'בדיקות ביצועים וזמינות',

    plan_btn: 'בקשת הצעת מחיר',

    contact_title: 'צור קשר',
    contact_brief_title: 'בריף',
    contact_brief_desc: 'יש לך שאלה? אל תהסס לבקש פרטים',

    footer_note: 'שירותי פיתוח אתרים בישראל'
  }
};

// Шорткаты для поиска элементов
const $  = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];

// --- Применение языка ---
function applyI18n(lang) {
  const dict = t[lang] || t.en;

  $$('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });

  const rtl = lang === 'he';
  document.documentElement.lang = lang;
  document.documentElement.dir  = rtl ? 'rtl' : 'ltr';

  localStorage.setItem('lang', lang);

  // Обновляем кнопки переключателя
  $('#lang-en').classList.toggle('active', lang === 'en');
  $('#lang-en').setAttribute('aria-pressed', String(lang === 'en'));

  $('#lang-he').classList.toggle('active', lang === 'he');
  $('#lang-he').setAttribute('aria-pressed', String(lang === 'he'));
}

// --- Применение темы ---
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);

  const isDark = theme === 'dark';
  $('#theme-toggle').classList.toggle('active', isDark);
  $('#theme-toggle').setAttribute('aria-checked', String(isDark));
  $('#theme-label').textContent = isDark ? 'Light' : 'Dark';

  localStorage.setItem('theme', theme);
}

// --- Привязка событий ---
document.addEventListener('DOMContentLoaded', () => {
  // Инициализация из localStorage или системных настроек
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

  const savedLang = localStorage.getItem('lang') || 'en';
  applyI18n(savedLang);

  // Переключение языков
  $('#lang-en').addEventListener('click', () => applyI18n('en'));
  $('#lang-he').addEventListener('click', () => applyI18n('he'));

  // Переключение темы
  const toggle = $('#theme-toggle');
  const toggleTheme = () =>
    setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');

  toggle.addEventListener('click', toggleTheme);
  toggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleTheme();
    }
  });

  // Плавный скролл для навигации
  $$('.links a').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Установка текущего года
  $('#year').textContent = new Date().getFullYear();

  // Контакты (меняются только здесь)
  const EMAIL = 'pavel.beketov.dev@gmail.com';
  const WA = '+972552576965';
  const WA_HUMAN = '+972552576965';

  $('#emailLink').href = `mailto:${EMAIL}`;
  $('#emailLink').textContent = EMAIL;

  $('#waLink').href = `https://wa.me/${WA}`;
  $('#waLink').textContent = WA_HUMAN;
});