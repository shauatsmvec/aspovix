document.addEventListener('DOMContentLoaded', () => {
  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById('nav-toggle');
  const siteNav = document.getElementById('site-nav');

  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    siteNav.classList.toggle('open');
  });

  // Close nav when clicking a link (mobile)
  siteNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- Accordion (one open at a time) ---------- */
  const items = document.querySelectorAll('.accordion-item');
  items.forEach(item => {
    const btn = item.querySelector('.accordion-toggle');
    btn.addEventListener('click', () => {
      const isOpen = item.getAttribute('open') === 'true';
      items.forEach(i => i.setAttribute('open', 'false')); // close all
      if (!isOpen) item.setAttribute('open', 'true');
    });
  });

  /* ---------- Smooth scrolling ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
