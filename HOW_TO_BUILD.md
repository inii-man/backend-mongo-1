# Panduan Membuat Repositori Ini Dari Nol (Step-by-Step) 🛠️

Dokumen ini menjelaskan langkah demi langkah (dari awal sampai akhir) bagaimana proyek *Express Playground* ini dibuat. Kamu bisa menggunakan panduan ini untuk membuat proyek baru dari awal di komputermu sendiri.

---

## Langkah 1: Inisialisasi Proyek Baru
Pertama-tama, kita harus membuat folder baru dan menginisialisasi proyek Node.js.

1. Buat folder baru, misalnya `belajar-backend`.
2. Buka folder tersebut di **VS Code**.
3. Buka Terminal di VS Code (`Ctrl + \`` atau `Cmd + \``).
4. Ketik perintah:
   ```bash
   npm init -y
   ```
   **Penjelasan:** Perintah ini akan membuat file `package.json`. File ini adalah "KTP" dari proyek kita yang mencatat nama proyek, versi, dan daftar modul apa saja yang kita gunakan.

---

## Langkah 2: Menginstal Dependensi (Modul)
Kita butuh alat bantu untuk membuat server (Express) dan menghubungkan ke database MongoDB (Mongoose).

1. Di terminal, jalankan perintah:
   ```bash
   npm install express mongoose
   ```
   **Penjelasan:** NPM (Node Package Manager) akan men-download kode Express dan Mongoose dari internet dan menyimpannya di folder `node_modules`. Nama modul juga akan otomatis tercatat di `package.json`.

---

## Langkah 3: Mengatur Script di `package.json`
Agar lebih mudah menjalankan server, kita tambahkan *custom script*.

1. Buka file `package.json`.
2. Cari bagian `"scripts"`, lalu ubah menjadi seperti ini:
   ```json
   "scripts": {
     "start": "node index.js",
     "dev": "node --watch index.js"
   }
   ```
   **Penjelasan:**
   - `"start"`: Perintah standar untuk menjalankan aplikasi.
   - `"dev"`: Menjalankan aplikasi dengan mode `--watch`, artinya Node.js akan "memantau" file `index.js`. Kalau ada kode yang di-save (berubah), server langsung *restart* otomatis.

---

## Langkah 4: Membuat Struktur Folder dan Model (Mongoose)
Kita perlu merancang struktur data (Schema) sebelum mulai membuat rute.

1. Buat folder baru bernama `models`.
2. Di dalam `models`, buat folder bernama `schemas`.
3. Buat dua file schema (Cetakan data):
   - `models/schemas/user.js`: Menentukan bahwa User punya `name`, `age`, dll.
   - `models/schemas/board.js`: Menentukan bahwa Post punya `title`, `content`, dan `author` (yang mereferensikan ke Object ID milik User).
4. Buat file `models/index.js` untuk menggabungkan dan mengubah schema-schema tadi menjadi **Model** yang siap dipakai (dieksport).

*(Kamu bisa melihat isi detail kode dari file-file ini di dalam folder `models` repo ini).*

---

## Langkah 5: Menulis Kode Server Utama (`index.js`)
Ini adalah jantung dari aplikasi kita. Buat file `index.js` di luar folder `models` (di root proyek).
Secara garis besar, urutan kodenya adalah:

1. **Import Modul:**
   ```javascript
   const express = require('express');
   const mongoose = require('mongoose');
   const { Post, User } = require('./models'); // Memanggil model kita
   ```

2. **Inisialisasi Express & Middleware:**
   ```javascript
   const app = express();
   app.use(express.json()); // Wajib! Agar Express paham kalau dikirimi data format JSON
   ```

3. **Koneksi ke Database:**
   ```javascript
   mongoose.connect('mongodb://localhost:27017/playground_db');
   ```

4. **Membuat Routes (API Endpoint):**
   Di bagian ini, kita membuat rute HTTP seperti `app.get()`, `app.post()`, `app.put()`, dan `app.delete()`. 
   - Di dalam rute ini kita memanggil fungsi Mongoose seperti `User.create()`, `Post.find()`, `Post.findByIdAndUpdate()`.
   - Untuk menggabungkan data Post dengan User aslinya, kita tambahkan fungsi `.populate('author')`.

5. **Menyalakan Server:**
   ```javascript
   app.listen(3000, () => {
       console.log('Server berjalan di port 3000');
   });
   ```

---

## Langkah 6: Membuat File Pendukung (Opsional tapi Penting)
- Buat file `.gitignore` (ketik manual) lalu isi dengan `node_modules/` dan `._*` agar file-file sampah/besar tidak ikut terupload jika proyek ini ditaruh di GitHub.

---

## Langkah 7: Jalankan dan Uji Coba!
Semua kode sudah siap! Sekarang saatnya pembuktian.
1. Jalankan MongoDB di komputermu (atau pastikan koneksi ke Atlas aktif).
2. Jalankan perintah ini di Terminal VS Code:
   ```bash
   npm run dev
   ```
3. Buka **Postman** (Atau Thunder Client).
4. Mulai tembak URL (contoh: `POST http://localhost:3000/api/users`) untuk melihat data masuk ke database.

**SELESAI! 🎉** 
Begitulah alur kerja (workflow) dari nol sampai menjadi sebuah API sederhana yang utuh.
