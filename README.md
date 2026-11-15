# Zoo Street Skaters — Surabaya Urban Skate Community Website

Website resmi komunitas inline skating **Zoo Street Skaters Surabaya** untuk UTS Pemrograman Antarmuka Web.
Dibangun dengan pendekatan **Urban Editorial + Street Culture** menggunakan **HTML5 Semantic**, **CSS3**, dan **Bootstrap 5.3** (tanpa JavaScript buatan sendiri).

**Tagline:** *ROLL TOGETHER. GROW TOGETHER.*

---

## 1. Pembagian Tugas Tim

| Anggota | Peran | Tanggung Jawab |
| --- | --- | --- |
| **Farhan** | Project Lead | Project initialization, Global Design System (`css/style.css`), `index.html`, `activities.html`, integrasi & konsistensi seluruh website |
| **Gansa** | Frontend Developer | Pengembangan halaman `register.html`, `about.html`, dan `terima-kasih.html` |
| **Rivan** | Frontend Developer | Pengembangan halaman `gallery.html` menggunakan CSS Grid `repeat(auto-fill, minmax(14rem, 1fr))` |

---

## 2. Struktur Proyek

```text
zoo-street-skaters/
├── index.html          # Homepage (Farhan)
├── activities.html     # Activities & Weekly Sessions (Farhan)
├── register.html       # Halaman pendaftaran anggota (Area kerja Gansa)
├── about.html          # Halaman profil & FAQ komunitas (Gansa / Farhan)
├── gallery.html        # Halaman dokumentasi galeri (Rivan)
├── terima-kasih.html   # Halaman konfirmasi formulir (Gansa)
├── css/
│   └── style.css       # Single global stylesheet (Tokens, ZSS Components, Responsive)
├── img/
│   ├── logo/           # Logo Zoo Street Skaters
│   ├── hero/           # Foto hero & dokumentasi
│   ├── activities/     # Foto aktivitas skate
│   ├── gallery/        # Aset dokumentasi foto komunitas
│   └── events/         # Aset foto kegiatan/event
└── README.md           # Dokumentasi proyek & instruksi tim
```

---

## 3. Global Design Tokens (`css/style.css`)

| Kategori | Token CSS | Nilai | Fungsi |
| --- | --- | --- | --- |
| Primary | `--ink` | `#171719` | Background utama website (Dark identity) |
| Primary | `--purple` | `#963bce` | Warna aksen brand utama & background CTA band |
| Primary | `--white` | `#ffffff` | Teks heading & konten kontras tinggi |
| Accent | `--pink` | `#f0449b` | Aksen hover tombol, link hover, & bullet values |
| Accent | `--yellow` | `#f6ca38` | Link default, focus-visible outline, & active indicator |
| Accent | `--concrete` | `#303035` | Background kartu `.zss-card` & section `.alt` |
| Neutral | `--border-color` | `#4a4a52` | Border form controls & kartu |
| Typography | `--font-display` | `Bebas Neue` | Heading display utama (`.display-font`) |
| Typography | `--font-heading` | `Space Grotesk` | Sub-heading, navbar brand, & accordion |
| Typography | `--font-body` | `Inter` | Body text standar (line-height `1.65`) |

---

## 4. Komponen Utama Design System

- **Navbar Sticky:** `.zss-nav` dengan `.navbar-brand`, `.nav-link` (indikator aktif `.active` dengan warna kuning dan underline ungu), serta tombol CTA `.btn-zss`.
- **Display Heading:** `.display-font` menggunakan tipografi bold street culture `Bebas Neue` dengan skala `clamp()`.
- **Page Hero:** `.page-hero` dengan gradient latar belakang diagonal ungu-gelap.
- **Alternating Sections:** `.section` bergantian dengan `.section.alt` (background `--concrete`).
- **Card System:** `.zss-card` dengan auto-contrast (otomatis berlatar `--ink` saat berada di dalam `.section.alt`).
- **Media Placeholders & Photos:** `.ph` dengan diagonal stripes dan `aspect-ratio: 4/3` atau `.tall` (`4/5`).
- **Jadwal Sesi:** `.zss-table` responsif di dalam `.table-responsive`.
- **CTA Band:** `.cta-band` dengan background ungu kontras dan tombol interaktif.
- **Form Controls:** `.form-control` & `.form-select` berpenampilan dark-surface dengan border fokus warna kuning.

---

## 5. Menjalankan Secara Lokal

Buka folder proyek di VS Code dan jalankan menggunakan ekstensi **Live Server** dari `index.html`, atau jalankan static server:
```bash
python -m http.server 8000
```
Buka browser di `http://localhost:8000/`.
