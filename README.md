# 📖 Premium 3D Interactive Digital Scrapbook Template

Sebuah template scrapbook digital interaktif 3D yang dibangun dengan React, dirancang untuk mengabadikan momen berharga dengan estetika tulisan tangan yang premium.

[Live Demo Placeholder]

## ✨ Fitur Utama
- **3D Page Flip Animation**: Animasi buka buku yang halus menggunakan CSS 3D transforms.
- **Fully Responsive**: Terpusat secara otomatis dan menyesuaikan skala di semua perangkat (Desktop, Tablet, Mobile).
- **Customizable Themes**: Ubah warna cover, kertas, dan tinta dengan mudah melalui file konfigurasi.
- **Doodle System**: Berbagai pilihan doodle unik (hati, bintang, balon, dll.) untuk menghias halaman.
- **Audio Experience**: Background music dengan tombol Play/Pause yang elegan.
- **Modular Data**: Edit teks, gambar, dan urutan halaman hanya dalam satu file data.

---

## 🛠️ Panduan Penggunaan (How to Use)

### 1. Persiapan Awal
Pastikan Anda sudah menginstal Node.js. Kemudian jalankan:
```bash
npm install
npm run dev
```

### 2. Kustomisasi Global (`src/config.js`)
Buka `src/config.js` untuk mengubah pengaturan dasar:
- `title`: Judul website.
- `theme`: Warna primary, kertas, dan cover.
- `music`: URL lagu background.

### 3. Mengisi Konten (`src/data/data.js`)
Semua konten halaman ada di file ini. Anda bisa menambah halaman baru dengan menambahkan objek ke dalam array `journalData`.
Format halaman:
- `template`: 'cover', 'lined', 'blank', atau 'final'.
- `lines`: Berisi array teks, gambar (`type: "image"`), atau doodle (`type: "doodle"`).

### 4. Mengganti Gambar
Letakkan gambar Anda di folder `src/assets/`, lalu import dan gunakan di `src/data/data.js`.

---

## 🚀 Deployment
Template ini siap dideploy ke platform seperti **Vercel**, **Netlify**, atau **GitHub Pages**.
```bash
npm run build
```
Lalu upload folder `dist` yang dihasilkan.

---

## 📝 Lisensi
Dibuat oleh [Your Name]. Cocok digunakan untuk:
- Hadiah Ulang Tahun Digital
- Anniversary Surprise
- Graduation Memory Book
- Portfolio Kreatif

---

# 📖 English Version

A premium 3D interactive digital scrapbook template built with React, designed to capture precious moments with a beautiful handwritten aesthetic.

## ✨ Key Features
- **3D Page Flip Animation**: Smooth book-opening animation using CSS 3D transforms.
- **Fully Responsive**: Auto-centers and scales across all devices (Desktop, Tablet, Mobile).
- **Customizable Themes**: Easily change cover, paper, and ink colors via the config file.
- **Doodle System**: Variety of unique doodles (hearts, stars, balloons, etc.) to decorate pages.
- **Audio Experience**: Background music with an elegant Play/Pause toggle.
- **Modular Data**: Simple data-driven structure for editing text and images.

---

## 🛠️ Quick Start

1. **Install & Run**:
   ```bash
   npm install
   npm run dev
   ```

2. **Global Config**: Edit `src/config.js` for colors and music.
3. **Edit Content**: Add your memories in `src/data/data.js`.
4. **Deploy**: Run `npm run build` and upload the `dist` folder.

---
Made with ❤️ for beautiful memories.
