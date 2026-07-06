// Mengimpor module 'express' dan 'mongoose'
const express = require('express');
const mongoose = require('mongoose');

// Mengimpor model 'Post' dan 'User' yang sudah kita buat di folder models
const { Post, User } = require('./models');

const app = express();
const PORT = 3000;

app.use(express.json());

// Menghubungkan ke MongoDB
mongoose.connect('mongodb://localhost:27017/playground_db');

// Event Koneksi Mongoose (Slide 51)
mongoose.connection.on('connected', () => {
    console.log('Berhasil terhubung ke MongoDB! 🎉');
});
mongoose.connection.on('disconnected', () => {
    console.log('Koneksi ke MongoDB terputus.');
});
mongoose.connection.on('reconnected', () => {
    console.log('Berhasil terhubung kembali ke MongoDB.');
});
mongoose.connection.on('reconnectFailed', () => {
    console.error('Gagal menghubungkan kembali ke MongoDB.');
});
mongoose.connection.on('error', (err) => {
    console.error('Error pada koneksi MongoDB:', err);
});

// ==== ROUTE UNTUK USER (Pembuatan Data Relasi) ==== //
app.post('/api/users', async (req, res) => {
    try {
        const createdUser = await User.create(req.body);
        res.json({ pesan: 'User berhasil dibuat', data: createdUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ==== ROUTE UNTUK MONGODB (CRUD) ==== //

// 1. CREATE: Menambahkan data baru
app.post('/api/posts', async (req, res) => {
    try {
        // author diisi dengan ID (ObjectId) dari User
        const createdPost = await Post.create({
            title: req.body.title,
            content: req.body.content,
            author: req.body.author
        });
        res.json({ pesan: 'Post berhasil dibuat', data: createdPost });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 2. READ: Mengambil semua data & MENDEMONSTRASIKAN POPULATE (Slide 45)
app.get('/api/posts', async (req, res) => {
    try {
        // .populate('author') akan mengambil data User asli, bukan hanya ID-nya
        const posts = await Post.find({}).populate('author');
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 2b. ADVANCED QUERY (Slide 40)
app.get('/api/users/advanced', async (req, res) => {
    try {
        // Mendemonstrasikan operator query tingkat lanjut seperti $in, $gte, dan $or
        const users = await User.find({
            $or: [
                { age: { $gte: 20 } }, // Umur >= 20
                { languages: { $in: ['javascript', 'python'] } } // Atau bisa bahasa js/python
            ]
        });
        res.json({
            pesan: 'Contoh Query tingkat lanjut ($or, $gte, $in)',
            data: users
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 3. READ 1 DATA: Mengambil data berdasarkan ID
app.get('/api/posts/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate('author');
        if (!post) return res.status(404).json({ pesan: 'Post tidak ditemukan' });
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 4. UPDATE: Mengubah data berdasarkan ID
app.put('/api/posts/:id', async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id, 
            req.body,
            { new: true }
        );
        res.json({ pesan: 'Post berhasil diubah', data: updatedPost });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 5. DELETE: Menghapus data berdasarkan ID
app.delete('/api/posts/:id', async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.json({ pesan: 'Post berhasil dihapus' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ==================================== //

// Membuat Route (rute) GET untuk path utama ('/')
app.get('/', (req, res) => {
    res.send('Halo! Selamat datang di Express & MongoDB Playground!');
});

app.listen(PORT, () => {
    console.log(`Server sudah berhasil berjalan di http://localhost:${PORT}`);
});
