# Daftar Command MongoDB & Mongoose 🍃

Dokumen ini berisi daftar perintah (command) yang sering digunakan saat mengoperasikan MongoDB dan menulis kode menggunakan Mongoose (ODM). Sangat berguna sebagai contekan (*cheatsheet*)!

---

## 1. Perintah Mongoose (Dipakai di dalam kode Javascript)

Mongoose menggunakan fungsi (method) Javascript untuk melakukan CRUD (Create, Read, Update, Delete). Anggap `Model` di bawah ini adalah nama model kita, misalnya `Post` atau `User`.

### A. CREATE (Menambahkan Data)
- `Model.create({ ... })`: Menyimpan satu atau banyak dokumen baru sekaligus ke database.

### B. READ (Mencari Data)
- `Model.find({ kondisi })`: Mencari **semua** dokumen yang cocok dengan kondisi. (Contoh: `Post.find({})` mengambil semua post).
- `Model.findOne({ kondisi })`: Mencari **satu** dokumen pertama yang cocok dengan kondisi.
- `Model.findById("string_id_disini")`: Mencari **satu** dokumen secara akurat menggunakan Object ID (`_id`).

### C. UPDATE (Mengubah Data)
- `Model.updateOne({ kondisi }, { data_baru })`: Mengubah satu dokumen saja.
- `Model.updateMany({ kondisi }, { data_baru })`: Mengubah semua dokumen yang memenuhi kondisi.
- `Model.findByIdAndUpdate("id", { data_baru })`: Mencari berdasarkan ID dan mengubah datanya. *(Sering digunakan di API karena sangat praktis).*

### D. DELETE (Menghapus Data)
- `Model.deleteOne({ kondisi })`: Menghapus satu dokumen.
- `Model.deleteMany({ kondisi })`: Menghapus banyak dokumen.
- `Model.findByIdAndDelete("id")`: Menghapus satu dokumen secara instan berdasarkan ID-nya.

---

## 2. Operator Query Lanjutan (Advanced Queries)
Digunakan di dalam parameter fungsi pencarian (seperti di dalam `.find()`) untuk memfilter data lebih detail layaknya sintaks `WHERE` di SQL:

| Operator | Arti | Contoh Penulisan Kode |
| :--- | :--- | :--- |
| **`$lt`** | *Less Than* (Kurang dari) | `{ age: { $lt: 20 } }` *(Mencari umur di bawah 20)* |
| **`$lte`**| *Less Than or Equal* (Kurang dr sama dengan) | `{ age: { $lte: 20 } }` |
| **`$gt`** | *Greater Than* (Lebih besar dari) | `{ age: { $gt: 10 } }` |
| **`$gte`**| *Greater Than or Equal* (Lebih bsr sama dgn) | `{ age: { $gte: 10 } }` |
| **`$in`** | Mencocokkan banyak nilai spesifik (Array) | `{ bahasa: { $in: ['JS', 'Python'] } }` |
| **`$or`** | Kondisi ATAU (salah satu syarat terpenuhi) | `{ $or: [ { age: 20 }, { status: 'Aktif' } ] }` |

---

## 3. MongoDB Shell Command (Dipakai di Terminal)
Jika kamu membuka aplikasi bawaan **Mongo Shell** (`mongosh`) di terminal komputermu, kamu mengoperasikan database murni (tanpa Node.js). Berikut perintah dasar terminalnya:

| Perintah Terminal | Fungsinya |
| :--- | :--- |
| `show dbs` | Melihat daftar semua database yang ada di MongoDB lokalmu. |
| `use nama_db` | Masuk ke database tertentu (misal: `use playground_db`). Jika belum ada, otomatis dibuat. |
| `show collections`| Melihat daftar *collections* (mirip daftar tabel) di database yang sedang aktif. |
| `db.posts.find()` | Melihat semua data yang tersimpan di dalam collection `posts`. |
| `db.posts.insert({ judul: "Halo" })` | Memasukkan satu data manual secara langsung tanpa lewat API/Express. |
| `db.posts.drop()` | Menghapus seluruh isi collection `posts` secara permanen. |
| `db.dropDatabase()`| Menghapus database yang sedang kamu buka secara permanen. |

---
*Tip: Fitur **Populate** (`.populate('nama_field')`) adalah senjata rahasia Mongoose yang bisa kamu gunakan setelah `.find()` atau `.findById()` untuk melakukan proses mirip JOIN (menggabungkan data dari 2 collection yang berelasi).*
