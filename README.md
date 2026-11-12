# Zoo Street Skaters — Surabaya Urban Skate Community Website

Website komunitas inline skating **Zoo Street Skaters** (Surabaya, Indonesia) untuk UTS Pemrograman Antarmuka Web.
Dibangun dengan pendekatan **Urban Editorial + Street Culture** menggunakan **HTML5 Semantic**, **CSS3**, dan **Bootstrap 5.3** (tanpa JavaScript buatan sendiri).

**Tagline:** *ROLL TOGETHER. GROW TOGETHER.*

---

## 1. Pembagian Tugas Tim

| Anggota | Peran | Tanggung Jawab |
| --- | --- | --- |
| **Farhan** | Project Lead | Project initialization, Global Design System (`css/style.css`), `index.html`, `activities.html`, serta integrasi & konsistensi seluruh halaman |
| **Gansa** | Frontend Developer | Pengembangan konten & styling halaman `register.html`, `about.html`, dan `terima-kasih.html` |
| **Rivan** | Frontend Developer | Pengembangan konten & styling halaman `gallery.html` menggunakan CSS Grid `repeat(auto-fit, minmax(...))` |

---

## 2. Struktur Proyek

```text
zoo-street-skaters/
├── index.html          # Homepage (Farhan)
├── activities.html     # Activities & Weekly Schedule (Farhan)
├── register.html       # Starter semantic HTML untuk Gansa
├── about.html          # Starter semantic HTML untuk Gansa
├── gallery.html        # Starter semantic HTML untuk Rivan
├── terima-kasih.html   # Starter semantic HTML untuk Gansa
├── css/
│   └── style.css       # Single global stylesheet (12-section contract)
├── img/
│   ├── logo/           # Logo Zoo Street Skaters
│   ├── hero/           # Foto hero & about preview (+ varian 640w)
│   ├── activities/     # Foto 4 aktivitas utama (+ varian 640w)
│   ├── gallery/        # Aset dokumentasi galeri untuk Rivan
│   └── events/         # Aset foto kegiatan/event
└── README.md
```

---

## 3. Global Design Tokens (`css/style.css`)

| Kategori | Token CSS | Nilai |
| --- | --- | --- |
| Primary | `--color-ink-black` | `#171719` |
| Primary | `--color-street-purple` | `#963bce` |
| Primary | `--color-pure-white` | `#ffffff` |
| Accent | `--color-neon-pink` | `#f0449b` |
| Accent | `--color-skate-yellow` | `#f6ca38` |
| Accent | `--color-concrete` | `#303035` |
| Neutral | `--color-surface` | `#252529` |
| Neutral | `--color-muted-text` | `#b8b8be` |
| Neutral | `--color-border` | `#414148` |
| Typography | `--font-heading` / `--font-body` | `Space Grotesk` / `Inter` |
| Layout | `--container-max` | `75rem` (`1200px`) |
| Spacing | `--space-1` .. `--space-30` | Kelipatan `4px` (`0.25rem` .. `7.5rem`) |
| Radii | `--radius-sm` / `--radius-md` / `--radius-lg` | `4px` / `8px` / `12px` |

---

## 4. Kontrak Kolaborasi CSS (`css/style.css`)

Semua halaman **wajib** memuat `css/style.css` setelah Bootstrap 5.3 CSS dan mengikuti urutan bagian:

1. Design Tokens
2. Reset & Base
3. Global Components (`.site-*`)
4. Navbar & Footer (`.site-header`, `.site-navbar`, `.site-footer`)
5. Home — Farhan (`.home-*`)
6. Activities — Farhan (`.activities-*`)
7. Register — Gansa (`.register-*`)
8. About — Gansa (`.about-*`)
9. Gallery — Rivan (`.gallery-*`)
10. Responsive (`@media (min-width: 48rem)` & `@media (min-width: 64rem)`)
11. Dark Mode (`@media (prefers-color-scheme: dark)`)
12. Reduced Motion (`@media (prefers-reduced-motion: reduce)`)

### Aturan Wajib untuk Semua Anggota
- **Jangan** membuat file CSS atau HTML tambahan tanpa koordinasi.
- **Jangan** menambahkan JavaScript buatan sendiri (hanya gunakan `bootstrap.bundle.min.js`).
- **Jangan** menggunakan selector ID (`#id`), `!important`, atau inline `style=""`.
- Gunakan token `var(--...)` untuk seluruh warna, font, spacing, dan radius.
- Pertahankan header (`<header>`), skip link, dan footer (`<footer>`) agar tetap konsisten di semua halaman.
- Pastikan setiap halaman memiliki tepat satu `<main>`, tepat satu `<h1>`, dan `aria-current="page"` pada link navbar yang aktif.

---

## 5. Menjalankan Secara Lokal

Buka folder proyek di VS Code dan jalankan menggunakan ekstensi **Live Server** dari `index.html`, atau gunakan static file server lokal.
