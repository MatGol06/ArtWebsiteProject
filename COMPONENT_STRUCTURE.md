# 🧩 Component Structure

## Struktur Direktori
```text
src/
 ├── components/
 │    ├── AudioPlayer.jsx    // Pemain muzik latar di bucu kanan bawah
 │    ├── CustomCursor.jsx   // Kursor kustom beranimasi menggunakan Framer Motion
 │    ├── LoadingScreen.jsx  // Skrin pemuatan awal projek (fake loading progress)
 │    └── Navigation.jsx     // Bar pandu arah atas (Penunjuk Nombor Bilik yang menggunakan mix-blend)
 │
 ├── sections/
 │    ├── Entrance.jsx       // Tajuk pembukaan "The Gallery" berserta teks pengenalan
 │    ├── RoomOne.jsx        // Bilik 01: Ruangan pertama (The First Sketch)
 │    ├── RoomTwo.jsx        // Bilik 02: Memaparkan kotak sifat peribadi (The Colors)
 │    ├── RoomThree.jsx      // Bilik 03: Susun atur Paralaks (Inspiration / Memory boxes)
 │    ├── RoomFour.jsx       // Bilik 04: Reka bentuk buku lakaran (The Letter)
 │    └── RoomFive.jsx       // Bilik 05: Hasil seni terakhir (Confession reveal)
 │
 └── App.jsx                 // Fail induk: Komponen digabungkan bersama efek Lenis dan penjejak tatal (scroll)
```

## Aliran Data (Data Flow)
1. `App.jsx` mengawal state `isLoading` dan `currentRoom`.
2. Setelah `LoadingScreen` selesai, fungsi callback merubah `isLoading` kepada `false`.
3. Pendengar (listener) *scroll* di dalam `App.jsx` menukar state `currentRoom` secara logik ringkas apabila pengguna melepasi posisi *viewport* tertentu dan angka terkini akan dipaparkan pada komponen `Navigation`.
