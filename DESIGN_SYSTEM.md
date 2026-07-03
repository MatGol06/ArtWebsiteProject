# 🎨 Design System

## 1. Warna (Color Palette)
Laman web ini menggunakan tona lembut (*soft pastel*) dengan kontras gelap untuk tajuk.

| Nama Warna | Variable CSS | Hex Code | Penggunaan |
| --- | --- | --- | --- |
| Background | `--color-background` | `#FFF8FB` | Latar belakang utama (putih merah jambu). |
| Surface | `--color-surface` | `#FFFFFF` | Latar belakang komponen/kotak (putih bersih). |
| Primary Pink | `--color-primary-pink` | `#F8BBD9` | Warna latar alternatif / Serlahan blok. |
| Accent | `--color-accent` | `#EC4899` | Warna utama untuk butiran penting. |
| Text Main | `--color-text-main` | `#2D2D2D` | Warna utama untuk teks dan tajuk (kelabu gelap). |
| Text Muted | `--color-secondary-text`| `#6B7280` | Warna teks penerangan, tarikh, *placeholder*. |

## 2. Tipografi (Typography)
- **Heading Font:** `Cormorant Garamond`, serif. (Klasik, elegan, rasa seperti galeri seni tradisional).
- **Body Font:** `Inter`, sans-serif. (Moden, bersih, mudah dibaca untuk kandungan panjang).

## 3. Susun Atur (Spacing & Grid)
- **Container:** `max-w-6xl` (untuk lebar maksimum), `max-w-4xl` untuk ruang bacaan agar tidak terlalu lebar.
- **Padding:** 
  - `px-4` untuk mudah alih, `py-20` atau `py-32` untuk memberikan "ruang bernafas" (negative space) yang sinonim dengan galeri seni.

## 4. Ikon (Icons)
- Menggunakan `lucide-react`.
- Contoh: `<Volume2 />` dan `<VolumeX />` untuk kawalan audio.
