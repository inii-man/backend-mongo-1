# Express & MongoDB Playground untuk Pemula 🚀

Selamat datang di repositori pembelajaran Express.js dan MongoDB! Repositori ini dibuat khusus untuk pemula yang ingin memahami dasar-dasar pembuatan REST API menggunakan **Express.js** dan database **MongoDB** dengan **Mongoose**.

Setiap baris kode di dalam `index.js` dan file model sudah dilengkapi dengan penjelasan (komentar) bahasa Indonesia agar mudah dipahami.

## 🛠️ Prasyarat

Sebelum memulai, pastikan kamu sudah:
- Menginstal [Node.js](https://nodejs.org/).
- Menginstal [MongoDB Community Server](https://www.mongodb.com/try/download/community) di komputermu, ATAU memiliki akun **MongoDB Atlas** (Cloud).
- Memiliki aplikasi API Tester seperti **Postman**, **Insomnia**, atau ekstensi **Thunder Client** di VS Code.

## 📦 Cara Instalasi

1. **Buka Terminal / Command Prompt**
   Buka terminal kamu, lalu arahkan ke folder (direktori) proyek ini.

2. **Install Dependencies**
   Jalankan perintah berikut untuk menginstal semua modul dari NPM:
   ```bash
   npm install
   ```

## 🗄️ Menyiapkan Database

Secara default, kode di dalam `index.js` akan mencoba terhubung ke database MongoDB lokal:
```javascript
mongoose.connect('mongodb://localhost:27017/playground_db');
```
Pastikan MongoDB (mongod) sudah berjalan di komputermu. Jika menggunakan MongoDB Atlas, ganti URL di atas dengan URI koneksi dari Atlas kamu.

## 🚀 Cara Menjalankan Server

**Mode Development (Watch Mode)**
```bash
npm run dev
```
*Gunakan cara ini saat coding! Server akan otomatis restart setiap kali kamu menyimpan perubahan kode.*

Jika berhasil, kamu akan melihat log di terminal:
```
Server sudah berhasil berjalan di http://localhost:3000
Berhasil terhubung ke MongoDB! 🎉
```

## 🧪 Cara Mencoba Route (Endpoint) API

Berikut adalah daftar endpoint REST API yang bisa kamu tes lewat Postman:

### A. Fitur User (Demonstrasi Query Lanjutan)

1. **Membuat User Baru**
   - **Method**: `POST`
   - **URL**: `http://localhost:3000/api/users`
   - **Body (JSON)**:
     ```json
     {
       "name": "Budi",
       "age": 21,
       "languages": ["javascript", "python"]
     }
     ```
   *(Simpan `_id` user yang berhasil dibuat untuk membuat Post di bawah).*

2. **Mencari User (Contoh Advanced Query)**
   - **Method**: `GET`
   - **URL**: `http://localhost:3000/api/users/advanced`
   - *Mendemonstrasikan filter `$or`, `$gte`, dan `$in`.*

### B. Fitur Post (Demonstrasi CRUD & Populate)

1. **CREATE - Membuat Post Baru**
   - **Method**: `POST`
   - **URL**: `http://localhost:3000/api/posts`
   - **Body (JSON)**:
     ```json
     {
       "title": "Belajar Mongoose",
       "content": "Ini sangat mudah dan seru!",
       "author": "<TULIS_ID_USER_DISINI>"
     }
     ```
   *(Ganti `<TULIS_ID_USER_DISINI>` dengan `_id` user yang dibuat di langkah A.1)*

2. **READ - Mengambil Semua Post (beserta detail User)**
   - **Method**: `GET`
   - **URL**: `http://localhost:3000/api/posts`
   - *Mendemonstrasikan fungsi `.populate()` untuk menggabungkan relasi dokumen, sehingga data author tampil lengkap.*

3. **READ 1 DATA - Mengambil Post Spesifik**
   - **Method**: `GET`
   - **URL**: `http://localhost:3000/api/posts/<TULIS_ID_POST_DISINI>`

4. **UPDATE - Mengubah Post**
   - **Method**: `PUT`
   - **URL**: `http://localhost:3000/api/posts/<TULIS_ID_POST_DISINI>`
   - **Body (JSON)**:
     ```json
     {
       "title": "Belajar Mongoose (Telah Diupdate)",
       "content": "Materinya semakin menarik!"
     }
     ```

5. **DELETE - Menghapus Post**
   - **Method**: `DELETE`
   - **URL**: `http://localhost:3000/api/posts/<TULIS_ID_POST_DISINI>`

## 🗃️ Materi Tambahan: Sequelize ORM
Repositori ini juga menyertakan materi tambahan (Opsional) mengenai **Sequelize ORM** untuk SQL Database (seperti MySQL / PostgreSQL).
Contoh kode untuk koneksi, DDL (Sync), dan relasi One-to-Many dapat dilihat di dalam direktori `sequelize-example/index.js`.

---
*Semangat belajarnya! Silakan ubah struktur Schema di folder `models`, tambah rute baru, dan mainkan kode di `index.js` untuk lebih mahir!*
