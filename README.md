# Mahreen Indonesia - Web Developer Internship Test 🇮🇩

Proyek ini adalah *Landing Page* statis yang dikembangkan sebagai portofolio penyelesaian **Tes Kompetensi & Psikotest Web Developer** untuk **Mahreen Indonesia Internship Batch 1**. 

Mengusung tema utama **"Berkarya Untuk Indonesia"**, halaman ini dirancang untuk mengajak generasi muda Indonesia agar berani memanfaatkan kreativitas dan teknologi dalam memberikan dampak positif bagi masyarakat luas.

---

## 🎨 Konsep & Pendekatan Desain
*Landing page* ini dirancang dengan arsitektur UI/UX yang modern, profesional, dan dinamis:
- **Tema Monokromatik Premium**: Menggunakan palet warna dominan gelap (*Charcoal*/*Navy Dark*) dipadukan dengan aksen *Gold* dan *White* untuk memberikan kesan elegan dan *high-tech*.
- **Geometri "Tech/Gamer" (*Edgy Notches*)**: Mengimplementasikan desain sudut asimetris dan potongan berundak (*jagged cuts*) pada tombol, kartu, dan pembatas *section*. Desain ini terinspirasi dari antarmuka modern (seperti UI *Valorant*) untuk menonjolkan semangat kreativitas tanpa batas.
- **Tipografi Tegas**: Memadukan font `Oswald` (kapital dan tegas untuk *headline*) dengan `Inter` (bersih dan keterbacaan tinggi untuk deskripsi paragraf).

## ⚙️ Detail Teknologi & Tools yang Digunakan
Proyek ini dibangun dari awal (*scratch*) menggunakan *stack* teknologi modern untuk memastikan performa yang cepat, kode yang rapi, dan kemudahan skalabilitas:

1. **React.js**
   *   Berperan sebagai *library* utama untuk membangun antarmuka pengguna (*User Interface*).
   *   Menggunakan pendekatan *Functional Components* murni yang terbagi ke dalam struktur direktori modular (`Hero`, `About`, `Impact`, `CTA`, `Footer`, `Navbar`).
   *   Pemanfaatan *React Hooks* (`useState`, `useEffect`) untuk manajemen *state* UI interaktif, seperti deteksi *scroll* (*glassmorphism effect*) pada navigasi atas dan *toggle mobile menu*.

2. **Vite**
   *   Dipilih sebagai *build tool* utama menggantikan CRA (*Create React App*).
   *   Memberikan waktu pemuatan server (*Hot Module Replacement* / HMR) yang instan di fase *development*.
   *   Melakukan optimasi dan minifikasi otomatis (*Rollup*) saat di-*build* untuk *production*, menghasilkan ukuran *bundle* yang sangat ringan.

3. **Vanilla CSS3 (Advanced Styling)**
   *   Penataan gaya dilakukan secara murni tanpa *framework* eksternal (seperti Bootstrap atau Tailwind) untuk mendemonstrasikan penguasaan fundamental CSS yang kuat.
   *   **CSS Variables**: Mendeklarasikan token desain di `:root` (warna, font, *spacing*, animasi) untuk menjaga konsistensi *design system* di seluruh komponen.
   *   **Clip-Path Polygon**: Memanfaatkan properti `clip-path` dengan titik kordinat dinamis (`calc`, `vw`, `px`) untuk menggambar bentuk pemotongan sudut (*notches*) geometris kompleks murni menggunakan CSS, mengurangi beban aset gambar.
   *   **Fluid Typography**: Menggunakan fungsi CSS modern seperti `clamp()` agar ukuran font membesar dan mengecil secara halus (*fluid*) seiring perubahan resolusi layar.
   *   **Modern Layouting**: Menerapkan kombinasi *Flexbox* dan *CSS Grid Layout* (contoh: `grid-template-columns: repeat(auto-fit, minmax(...))`) guna memastikan halaman 100% responsif dari Desktop hingga Mobile.

4. **Lucide React**
   *   *Library* kumpulan ikon berbasis SVG yang sangat efisien dan ringan. 
   *   Mudah dimodifikasi ukuran dan warnanya secara langsung melalui *props* komponen, memastikan ikon selalu tajam dan selaras dengan tema warna tanpa pecah.

5. **Google Fonts**
   *   Digunakan secara efisien melalui mekanisme *preconnect* untuk mempercepat pemuatan font eksternal (`Oswald` & `Inter`), mencegah *Flash of Unstyled Text* (FOUT).

---

## 📱 Struktur Halaman (Berdasarkan Brief)
Sesuai instruksi soal, proyek ini memiliki struktur informasi yang terpusat:
- ✅ **Hero Section**: *Headline* penyambutan dengan pesan kuat "Saatnya Berkarya Untuk Indonesia".
- ✅ **Tentang Program**: Tiga pilar utama penggerak (Kreativitas, Teknologi, Solusi).
- ✅ **Nilai & Dampak**: Pemaparan statistik konseptual untuk menanamkan visi inklusif program.
- ✅ **Call To Action (CTA)**: Pesan persuasif di bagian akhir untuk mendorong audiens bertindak ("Mulai Berkarya Sekarang").

---

## 🚀 Panduan Eksekusi Project (Local Setup)

Jika *reviewer* atau *developer* lain ingin menjalankan proyek ini secara lokal, ikuti petunjuk berikut:

### Prasyarat
Pastikan sistem operasi Anda telah dilengkapi dengan [Node.js](https://nodejs.org/).

### Langkah Instalasi
1. Lakukan *clone* pada *repository* ini atau *extract* folder proyek.
2. Buka terminal proyek dan jalankan perintah instalasi dependensi (pastikan Anda memiliki koneksi internet):
   ```bash
   npm install
   ```
3. Setelah dependensi berhasil diunduh, jalankan *local server*:
   ```bash
   npm run dev
   ```
4. Buka *browser* Anda dan kunjungi URL `http://localhost:5173/`.

### Langkah Build
Untuk memvalidasi bahwa proyek ini siap tayang (*production-ready*), jalankan perintah:
```bash
npm run build
```
Proyek akan dikompilasi menjadi *static assets* statis dan ringan di dalam folder `dist`.

---
*Dibuat oleh Ganes Gemi Putra untuk keperluan seleksi Mahreen Indonesia Internship Batch 1.*
