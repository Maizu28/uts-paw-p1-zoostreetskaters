/* ==========================================================================
   Zoo Street Skaters — Navigation & Mobile Drawer
   ========================================================================== */

(function () {
  'use strict';

  const menuToggle = document.getElementById('menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-drawer__cta');
  const desktopNavLinks = document.querySelectorAll('.nav-link[data-section]');
  const sections = document.querySelectorAll('main section[id]');

  if (!menuToggle || !mobileDrawer) return;

  function openMenu() {
    mobileDrawer.classList.add('is-open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Tutup menu navigasi');
    document.body.classList.add('no-scroll');
  }

  function closeMenu(returnFocus) {
    mobileDrawer.classList.remove('is-open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Buka menu navigasi');
    document.body.classList.remove('no-scroll');
    if (returnFocus) {
      menuToggle.focus();
    }
  }

  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeMenu(false);
    } else {
      openMenu();
    }
  });

  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu(false);
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileDrawer.classList.contains('is-open')) {
      closeMenu(true);
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024 && mobileDrawer.classList.contains('is-open')) {
      closeMenu(false);
    }
  });

  // Active section highlight on scroll
  function setActiveNav(sectionId) {
    desktopNavLinks.forEach((link) => {
      const target = link.getAttribute('data-section');
      link.classList.toggle('is-active', target === sectionId);
    });
  }

  if ('IntersectionObserver' in window && sections.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
  }
})();
