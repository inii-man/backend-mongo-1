# Daftar Perintah (Command) & Shortcut Penting 💻

Berikut adalah daftar perintah terminal dan *shortcut* (jalan pintas) di VS Code yang wajib diketahui oleh pemula saat membuat proyek Node.js.

## 1. Perintah Terminal (NPM & Node)
Perintah ini diketik di dalam Terminal (Command Prompt / PowerShell).

| Perintah | Penjelasan |
| :--- | :--- |
| `npm init -y` | Membuat file `package.json` secara otomatis (langkah pertama membuat proyek). |
| `npm install <nama_paket>` | Menginstal paket/modul (contoh: `npm install express mongoose`). |
| `npm install` | Men-download ulang semua modul yang ada di `package.json` (biasanya dilakukan saat pertama kali meng-clone/download repo). |
| `node index.js` | Menjalankan server secara manual (harus dimatikan & dinyalakan lagi tiap kali ada perubahan kode). |
| `npm run dev` | Menjalankan server dalam mode **Watch** (server akan otomatis *restart* saat kamu klik Save/Simpan). Catatan: Kita membuat _script_ `dev` ini secara manual di dalam `package.json`. |
| `Ctrl + C` | Mematikan server yang sedang berjalan di terminal. |
| `clear` atau `cls` | Membersihkan layar terminal agar rapi kembali. |

## 2. Shortcut Penting di Visual Studio Code (VS Code)

| Shortcut (Windows/Linux) | Shortcut (Mac) | Fungsi |
| :--- | :--- | :--- |
| `Ctrl + S` | `Cmd + S` | Menyimpan perubahan (Save). **Sangat penting!** Jika tidak di-save, server tidak akan membaca kode terbarumu. |
| `Ctrl + \`` (Backtick) | `Cmd + \`` (Backtick) | Membuka / menutup panel Terminal di bagian bawah layar. |
| `Ctrl + B` | `Cmd + B` | Membuka / menutup panel File Explorer di sebelah kiri. |
| `Ctrl + /` | `Cmd + /` | Membuat teks yang disorot menjadi komentar (Comment) / menghilangkan komentar. |
| `Ctrl + F` | `Cmd + F` | Mencari kata/variabel di dalam file yang sedang dibuka. |
| `Alt + Shift + F` | `Option + Shift + F` | Merapikan kode secara otomatis (Format Document). |

## 3. Shortcut untuk Postman / API Tester
Saat mengetes API di Postman atau Thunder Client:
- `Ctrl + Enter` (atau `Cmd + Enter` di Mac): Mengirim _Request_ (sama seperti mengklik tombol "Send").
