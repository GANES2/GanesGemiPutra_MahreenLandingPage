# Mahreen Indonesia - Web Developer Internship Test 🇮🇩

Proyek ini adalah *Landing Page* sederhana yang dibuat sebagai bentuk penyelesaian **Tes Kompetensi & Psikotest Web Developer** untuk **Mahreen Indonesia Internship Batch 1**. 

Mengusung tema utama **"Berkarya Untuk Indonesia"**, halaman ini dirancang secara khusus untuk mengajak generasi muda Indonesia agar berani memanfaatkan kreativitas dan teknologi dalam memberikan dampak positif bagi masyarakat luas.

---

## 🎨 Konsep & Desain UI
*Landing page* ini dirancang dengan pendekatan yang sangat modern, rapi, dan profesional:
- **Tema Monokromatik Premium**: Menggunakan palet warna elegan dominan gelap (Charcoal/Hitam), putih bersih, dan aksen *Silver/Gold* yang diadaptasi dari logo Mahreen.
- **Geometri "Tech/Gamer" (*Edgy Notches*)**: Menggunakan potongan asimetris (*clip-path*) pada sudut-sudut tombol, kartu, dan pembatas *section* untuk memberikan kesan dinamis, *bold*, dan sangat modern layaknya antarmuka teknologi tinggi (terinspirasi dari konsep UI *Valorant*).
- **Tipografi Tegas**: Memadukan font `Oswald` (kapital tegas untuk judul) dan `Inter` (bersih dan keterbacaan tinggi untuk paragraf).

## ⚙️ Teknologi yang Digunakan
Proyek ini dibangun menggunakan *tools* modern untuk memastikan performa yang cepat dan struktur kode yang efisien:
- **React.js**: *Library* utama untuk membangun antarmuka pengguna (*User Interface*) berbasis komponen yang modular dan *reusable*.
- **Vite**: Sebagai *build tool* dan *development server* modern yang jauh lebih cepat dibandingkan Create React App (CRA) tradisional.
- **Vanilla CSS (index.css)**: Untuk penataan gaya ( *styling* ) murni guna menjaga kontrol penuh terhadap desain tanpa perlu bergantung pada *framework* eksternal. Memanfaatkan CSS *variables* untuk kemudahan pengaturan tema.
- **Lucide React**: Kumpulan ikon minimalis, elegan, dan ringan berbasis SVG.
- **Google Fonts**: Untuk tipografi eksternal (`Oswald` dan `Inter`).

## 📱 Fitur Utama
1. **Hero Section yang Kuat**: Judul *headline* langsung menyampaikan esensi kampanye disertai animasi *fade-in-up* yang halus.
2. **Tentang Program**: Struktur *grid* responsif yang memaparkan 3 pilar utama (Kreativitas, Optimalisasi Teknologi, Solusi).
3. **Nilai & Dampak**: Menggunakan komponen visual kartu statistik untuk merepresentasikan pencapaian dan tujuan kampanye.
4. **Call To Action (CTA)**: Ajakan proaktif untuk generasi muda agar mulai berkarya sekarang.
5. **Responsif Sepenuhnya**: Layout dirancang menyesuaikan diri (*fluid*) di perangkat Desktop, Tablet, hingga Layar Mobile (dilengkapi *Hamburger Menu*).

---

## 🚀 Cara Menjalankan Project

Jika Anda ingin menjalankan atau mengembangkan proyek ini di lingkungan lokal Anda ( *Local Environment* ), silakan ikuti langkah-langkah berikut:

### Prasyarat
Pastikan komputer Anda sudah terinstal [Node.js](https://nodejs.org/) (versi 16 ke atas direkomendasikan).

### Langkah Instalasi
1. Buka terminal atau *command prompt*.
2. Arahkan direktori ( *cd* ) ke dalam folder *project* ini.
3. Jalankan perintah instalasi dependensi:
   ```bash
   npm install
   ```
4. Setelah instalasi selesai, jalankan *development server*:
   ```bash
   npm run dev
   ```
5. Buka *browser* Anda dan akses URL yang tertera di terminal (biasanya `http://localhost:5173/`).

### Langkah Build untuk Produksi
Jika *project* ini ingin dideploy ke server produksi (misal: Vercel, Netlify), Anda dapat mem- *build* asetnya dengan menjalankan:
```bash
npm run build
```
*(Ini akan menghasilkan folder `dist` yang dioptimasi dan siap untuk di-deploy ke hosting statis).*

---

Dibuat dengan semangat berkarya oleh **Ganes Gemi Putra**.
