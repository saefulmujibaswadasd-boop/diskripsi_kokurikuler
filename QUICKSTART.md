rapor_otomatis/
│
├── index.html               ← Halaman utama (login + dashboard)
├── style.css                ← Tampilan mewah & modern
├── script.js                ← Fungsi umum (login, tambah siswa, download Excel)
│
├── /modules                 ← Folder modular untuk narasi
│   ├── kokurikuler.js       ← Narasi & fungsi kokurikuler
│   ├── siaga.js             ← Narasi & fungsi pramuka siaga
│   ├── penggalang.js        ← Narasi & fungsi pramuka penggalang
│   └── catatan.js           ← Narasi & fungsi catatan wali kelas
# 📘 Dashboard Rapor Otomatis SD Negeri Wonokerto

Panduan singkat penggunaan sistem rapor otomatis.

---

## 🔐 Login
- Buka `index.html` di browser.
- Masukkan sandi: **saefulsdnwonokerto**.
- Jika benar, dashboard akan terbuka.

---

## 🏠 Langkah Cepat
1. **Input Data Siswa**  
   Isi tabel dengan No, Nama, dan NIS. Klik *Tambah Siswa* untuk menambah baris.

2. **Generate Kokurikuler**  
   Pilih skor tiap aspek (1–4), lalu klik *Generate Kokurikuler* → narasi otomatis muncul.

3. **Generate Ekstrakurikuler**  
   - **Siaga**: isi skor aspek, klik *Generate Siaga*.  
   - **Penggalang**: isi skor aspek, klik *Generate Penggalang*.

4. **Catatan Wali Kelas**  
   Masukkan ranking (1–30), klik *Generate Catatan* → motivasi islami + emoji otomatis muncul.

5. **Export Hasil**  
   Klik *Download Excel* → data tersimpan ke file CSV.

---

## ✨ Catatan
- Sistem berbasis web statis, bisa dijalankan langsung di browser.  
- Bisa dipublikasikan melalui **GitHub Pages** agar mudah diakses online.  
- Narasi dapat disesuaikan di folder `modules/`.

---

© 2026 | Dashboard Rapor Otomatis | SD Negeri Wonokerto

