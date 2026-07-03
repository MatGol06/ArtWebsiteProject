# 📝 Project Requirements

## Tinjauan Keseluruhan (Overview)
Laman web ini adalah sebuah platform bercerita (storytelling) interaktif. Ia membimbing pelawat melalui bilik-bilik galeri maya sebelum memaparkan karya seni atau luahan utama di bilik terakhir.

## Keperluan Fungsian (Functional Requirements)
1. **Skrin Pemuatan (Loading Screen):**
   - Perlu memaparkan progres palsu (0-100%).
   - Teks "The Art Gallery of You" terpapar.
   - Perlu hilang perlahan-lahan sebelum memaparkan bilik pertama.

2. **Kursor Interaktif (Custom Cursor):**
   - Kursor tetikus bulat yang menggunakan *spring physics*.
   - Kursor harus membesar (*expand*) apabila diletakkan di atas butang, pautan, atau elemen yang boleh diklik.

3. **Audio Latar Belakang (Ambient Music):**
   - Pemain audio terbina yang sentiasa ada di bucu skrin.
   - Butang *play/pause* untuk kawalan pelawat.

4. **Navigasi Bilik (Room Tracking):**
   - Nombor bilik semasa (Exhibit 01, 02) harus dikemas kini secara automatik berdasarkan kedudukan *scroll* pelawat.

5. **Interaksi Skrol (Scroll-based Interactions):**
   - Semua elemen harus masuk secara berperingkat (*staggered fade in/slide up*) mengikut *scroll* pengguna.
   - Terdapat efek paralaks untuk menyerlahkan pergerakan pada gambar/memori.

6. **Pendedahan Akhir (The Reveal):**
   - Bilik terakhir perlu disembunyikan isinya.
   - Isinya hanya akan terpapar sekiranya pengguna meletakkan kursor (*hover*) atau berinteraksi dengannya.
