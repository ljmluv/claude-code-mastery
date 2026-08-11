// 다크모드 토글
const darkModeToggle = document.getElementById('dark-mode-toggle');
const iconMoon = document.getElementById('icon-moon');
const iconSun = document.getElementById('icon-sun');
const THEME_STORAGE_KEY = 'theme';

function applyTheme(theme) {
  const isDark = theme === 'dark';
  document.documentElement.classList.toggle('dark', isDark);
  iconMoon.classList.toggle('hidden', isDark);
  iconSun.classList.toggle('hidden', !isDark);
}

// 저장된 테마가 없으면 기본값은 dark. localStorage에 명시적으로 'light'가 저장된 경우에만 라이트로 시작
const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
applyTheme(storedTheme === 'light' ? 'light' : 'dark');

darkModeToggle.addEventListener('click', () => {
  const nextTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
  applyTheme(nextTheme);
  localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
});

// 모바일 네비게이션 메뉴 토글
const navToggle = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const iconMenu = document.getElementById('icon-menu');
const iconClose = document.getElementById('icon-close');

function setMenuOpen(isOpen) {
  mobileMenu.classList.toggle('hidden', !isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
  iconMenu.classList.toggle('hidden', isOpen);
  iconClose.classList.toggle('hidden', !isOpen);
}

navToggle.addEventListener('click', () => {
  setMenuOpen(mobileMenu.classList.contains('hidden'));
});

mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenuOpen(false));
});

// 스크롤 시 섹션 fade-in 애니메이션
const fadeInSections = document.querySelectorAll('.fade-in');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        sectionObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

fadeInSections.forEach((section) => sectionObserver.observe(section));
