/* ==========================================================================
   Zoo Street Skaters — Activity & Event Detail Modals
   ========================================================================== */

(function () {
  'use strict';

  const detailModal = document.getElementById('detail-modal');
  const modalTag = document.getElementById('detail-modal-tag');
  const modalTitle = document.getElementById('detail-modal-title');
  const modalImg = document.getElementById('detail-modal-img');
  const modalDesc = document.getElementById('detail-modal-desc');
  const modalMeta = document.getElementById('detail-modal-meta');
  const modalClose = document.getElementById('detail-modal-close');
  const modalAction = document.getElementById('detail-modal-action');

  if (!detailModal) return;

  const DETAIL_DATA = {
    'activity-freestyle': {
      tag: 'SKATING DISCIPLINE',
      title: 'Freestyle Slalom',
      img: 'assets/images/activities/freestyle.jpg',
      alt: 'Skater berlatih teknik freestyle slalom di antara cone',
      desc: 'Latihan keseimbangan, kelincahan kaki, dan kontrol skate di antara barisan cone. Cocok untuk yang ingin melatih dasar footwork dari level paling awal hingga trik slalom.',
      meta: [
        'Level: Pemula hingga Menengah (latihan bertahap dari basic stride & balance)',
        'Perlengkapan: Inline skate, cone latihan (tersedia bersama komunitas), helm & pelindung',
        'Fokus: Kontrol tubuh, footwork, dan konsistensi teknik'
      ],
      ctaText: 'Cek Jadwal Latihan',
      ctaHref: '#schedule'
    },
    'activity-urban': {
      tag: 'STREET & CITY',
      title: 'Urban Skating',
      img: 'assets/images/activities/urban.jpg',
      alt: 'Komunitas meluncur bersama di jalur kota Surabaya pada sore hari',
      desc: 'Menjelajah rute kota Surabaya bersama rombongan dengan ritme santai dan terjaga. Fokus pada teknik pengereman aman, membaca kondisi aspal, dan meluncur bersama tim.',
      meta: [
        'Level: Pemula yang sudah bisa jalan & rem dasar hingga skater berpengalaman',
        'Perlengkapan: Wajib helm, pelindung pergelangan tangan/lutut, dan lampu kecil jika malam',
        'Fokus: Endurance, teknik braking di jalan rata, dan kebersamaan tim'
      ],
      ctaText: 'Lihat Rute & Jadwal',
      ctaHref: '#schedule'
    },
    'activity-skatepark': {
      tag: 'RAMPS & TRICKS',
      title: 'Skate Park',
      img: 'assets/images/activities/skatepark.jpg',
      alt: 'Inline skater berlatih di area ramp skatepark',
      desc: 'Sesi latihan di area skatepark untuk mengenal transisi ramp, pumping, drop-in dasar, hingga trik park secara aman bersama teman-teman yang saling menjaga.',
      meta: [
        'Level: Terbuka untuk pemula yang ingin mencoba ramp rendah maupun skater agresif/park',
        'Perlengkapan: Wajib helm, wrist guard, knee pad, dan elbow pad',
        'Spot Referensi: Skatepark Monkasel Surabaya'
      ],
      ctaText: 'Cek Lokasi Monkasel',
      ctaHref: '#schedule'
    },
    'activity-gathering': {
      tag: 'SOCIAL & BEGINNERS',
      title: 'Community Gathering',
      img: 'assets/images/activities/gathering.jpg',
      alt: 'Anggota Zoo Street Skaters berkumpul santai dan berkenalan di plaza kota',
      desc: 'Titik temu paling santai untuk kenalan dengan anggota baru, sharing soal ukuran roda dan perawatan bearing, pemanasan bareng, dan foto dokumentasi.',
      meta: [
        'Level: 100% ramah pemula — baru punya skate atau baru belajar berdiri tetap disambut',
        'Suasana: Santai, suportif, tanpa tekanan kompetisi',
        'Fokus: Kenalan, tanya jawab gear, dan mulai meluncur bareng'
      ],
      ctaText: 'Gabung Komunitas',
      ctaHref: '#join'
    },
    'event-cityroll': {
      tag: 'COMMUNITY EVENT · MVP INFO',
      title: 'Surabaya Sunday City Roll',
      img: 'assets/images/events/event-cityroll.jpg',
      alt: 'Rombongan inline skater meluncur bersama di jalanan kota saat pagi hari',
      desc: 'Agenda city roll santai di area bebas kendaraan dan koridor kota Surabaya. Terbuka untuk seluruh anggota komunitas dan teman baru yang ingin merasakan serunya meluncur bersama.',
      meta: [
        'Waktu: Minggu Pagi (Detail jam & titik kumpul diumumkan H-2 di Instagram & WhatsApp)',
        'Lokasi: Koridor Taman Bungkul / Pusat Kota Surabaya',
        'Catatan: Informasi statis komunitas — tidak memerlukan pendaftaran tiket online'
      ],
      ctaText: 'Tanya Info di WhatsApp',
      ctaHref: '#join'
    },
    'event-clinic': {
      tag: 'BEGINNER SESSION · MVP INFO',
      title: 'Beginner Balance & Brake Clinic',
      img: 'assets/images/events/event-clinic.jpg',
      alt: 'Skater pemula didampingi saat berlatih keseimbangan dan teknik pengereman',
      desc: 'Sesi khusus pendampingan pemula bersama skater senior Zoo Street Skaters. Membahas cara jatuh aman, posisi lutut yang tepat, stride awal, dan teknik heel/T-brake.',
      meta: [
        'Waktu: Sesi Akhir Pekan (Jadwal menyesuaikan pengumuman resmi Instagram)',
        'Lokasi: Area Datar Balai Kota / Taman Bungkul Surabaya',
        'Catatan: Cukup hadir ke titik kumpul membawa inline skate dan protektor dasar'
      ],
      ctaText: 'Siap Ikut Sesi Berikutnya',
      ctaHref: '#join'
    }
  };

  let lastTrigger = null;

  function openDetailModal(key, triggerEl) {
    const data = DETAIL_DATA[key];
    if (!data) return;

    lastTrigger = triggerEl;
    modalTag.textContent = data.tag;
    modalTitle.textContent = data.title;
    modalImg.src = data.img;
    modalImg.alt = data.alt;
    modalDesc.textContent = data.desc;

    modalMeta.innerHTML = '';
    data.meta.forEach((line) => {
      const li = document.createElement('li');
      li.textContent = line;
      modalMeta.appendChild(li);
    });

    modalAction.textContent = data.ctaText;
    modalAction.setAttribute('href', data.ctaHref);

    detailModal.classList.add('is-open');
    detailModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
    modalClose.focus();
  }

  function closeDetailModal() {
    detailModal.classList.remove('is-open');
    detailModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');

    if (lastTrigger && typeof lastTrigger.focus === 'function') {
      lastTrigger.focus();
      lastTrigger = null;
    }
  }

  document.querySelectorAll('[data-modal-key]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const key = trigger.getAttribute('data-modal-key');
      openDetailModal(key, trigger);
    });
  });

  modalAction.addEventListener('click', () => {
    closeDetailModal();
  });

  modalClose.addEventListener('click', closeDetailModal);

  detailModal.addEventListener('click', (event) => {
    if (event.target === detailModal) {
      closeDetailModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && detailModal.classList.contains('is-open')) {
      event.preventDefault();
      closeDetailModal();
    }
  });
})();
