# 🎬 Animation Guide

Setiap bilik dilengkapi koreografi animasi khusus menggunakan **GSAP** (dengan pemalam *ScrollTrigger*) dan **Framer Motion**.

## 1. Komponen Global
- **Loading Screen (Framer Motion):** Disetkan animasi `exit={{ opacity: 0, y: "-100%" }}` untuk meluncur ke atas (keluar skrin) apabila proses siap.
- **Custom Cursor (Framer Motion):** Menggunakan animasi `type: "spring"` untuk bergerak lebih responsif. Parameter seperti kelebaran dan ketinggian (`width`/`height`) ditambah apabila sewaktu *hover* pada kawasan penting atau elemen pautan (`<a>`, `<button>`).

## 2. Sections (GSAP ScrollTrigger)
- **Entrance:** Menggunakan `Framer Motion` untuk *fade-in* (muncul perlahan-lahan) dari kedudukan `y: 30` sebaik sahaja laman pertama kali dimuatkan, berserta *animation pulse* di penunjuk "Scroll to enter".
- **Room 01 (The First Sketch):** 
  - Tajuk dan teks dianimasikan dari bawah ke atas (`y: 50`) dan muncul perlahan-lahan dengan fungsi rentetan masa menggunakan sifat `stagger: 0.2`.
- **Room 02 (The Colors):** 
  - Elemen bagi ketiga-tiga kotak warna dikonfigurasi menggunakan fungsi `ease: "back.out(1.7)"` supaya kotak melantun sedikit seperti getah apabila ditarik ke dalam *viewport*.
- **Room 03 (Inspiration):** 
  - Efek **Paralaks (Parallax)** menggunakan GSAP dengan mengaktifkan `scrub: 1`. 
  - Kotak-kotak memori (`memory-box`) diprogramkan supaya elemen genap memanjang ke arah berlawanan (`-50` hingga `50` paksi-y) apabila tatalan skrin bergerak, menghasilkan ilusi *3D depth*.
- **Room 04 (The Letter):** 
  - Keseluruhan bingkai surat `letter-box` seakan dizum secara halus dengan sifat skala dari `0.95` ke `1`. Perenggan dalam surat diprogramkan *fade-in* dan terapung mengikut urutan (`stagger`).
- **Room 05 (The Masterpiece):** 
  - Menggunakan sepenuhnya sifat animasi CSS Hover.
  - Bahagian depan kanvas yang menghalang "Luahan" diset dengan transisi *opacity* yang mengambil masa 1000 milisaat untuk memberikan kesan pendedahan perlahan apabila penunjuk tetikus bersentuh (hover) dengannya.
