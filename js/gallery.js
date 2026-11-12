/* ==========================================================================
   Zoo Street Skaters — Gallery Filter & Lightbox
   ========================================================================== */

(function () {
  'use strict';

  const filterButtons = document.querySelectorAll('.filter-btn[data-filter]');
  const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
  const galleryStatus = document.getElementById('gallery-status');

  const lightbox = document.getElementById('gallery-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxCategory = document.getElementById('lightbox-category');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  if (!galleryItems.length || !lightbox) return;

  let activeFilter = 'all';
  let currentIndex = 0;
  let lastTrigger = null;

  function getVisibleItems() {
    return galleryItems.filter((item) => !item.hasAttribute('hidden'));
  }

  function applyFilter(category) {
    activeFilter = category;
    let visibleCount = 0;

    galleryItems.forEach((item) => {
      const itemCategory = item.getAttribute('data-category');
      const matches = category === 'all' || itemCategory === category;
      if (matches) {
        item.removeAttribute('hidden');
        visibleCount += 1;
      } else {
        item.setAttribute('hidden', '');
      }
    });

    filterButtons.forEach((btn) => {
      const isSelected = btn.getAttribute('data-filter') === category;
      btn.classList.toggle('is-active', isSelected);
      btn.setAttribute('aria-pressed', String(isSelected));
    });

    if (galleryStatus) {
      const label = category === 'all' ? 'semua kategori' : `kategori ${category}`;
      galleryStatus.textContent = `Menampilkan ${visibleCount} foto (${label}). Klik foto mana saja untuk memperbesar.`;
    }
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter') || 'all';
      applyFilter(category);
    });
  });

  function renderLightbox(index) {
    const visibleItems = getVisibleItems();
    if (!visibleItems.length) return;

    currentIndex = (index + visibleItems.length) % visibleItems.length;
    const item = visibleItems[currentIndex];
    const img = item.querySelector('img');
    const caption = item.getAttribute('data-caption') || (img ? img.alt : '');
    const categoryLabel = item.getAttribute('data-category-label') || activeFilter;

    if (img && lightboxImg) {
      lightboxImg.src = img.currentSrc || img.src;
      lightboxImg.alt = img.alt;
    }
    if (lightboxCaption) {
      lightboxCaption.textContent = caption;
    }
    if (lightboxCategory) {
      lightboxCategory.textContent = categoryLabel;
    }
    if (lightboxCounter) {
      lightboxCounter.textContent = `${currentIndex + 1} / ${visibleItems.length}`;
    }
  }

  function openLightbox(triggerItem) {
    const visibleItems = getVisibleItems();
    const index = visibleItems.indexOf(triggerItem);
    if (index === -1) return;

    lastTrigger = triggerItem;
    renderLightbox(index);
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');

    if (lightboxClose) {
      lightboxClose.focus();
    }
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');

    if (lastTrigger && typeof lastTrigger.focus === 'function') {
      lastTrigger.focus();
      lastTrigger = null;
    }
  }

  galleryItems.forEach((item) => {
    item.addEventListener('click', () => openLightbox(item));
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', () => renderLightbox(currentIndex - 1));
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', () => renderLightbox(currentIndex + 1));
  }

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (!lightbox.classList.contains('is-open')) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      closeLightbox();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      renderLightbox(currentIndex - 1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      renderLightbox(currentIndex + 1);
    }
  });
})();
