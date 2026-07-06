const { Schema } = require('mongoose');

// Mendefinisikan schema untuk 'Post' (dokumen di dalam koleksi)
// Schema ini menentukan struktur data yang akan disimpan di MongoDB
const PostSchema = new Schema({
    title: String,
    content: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User' // Mereferensikan ke model User
    }
}, {
    // timestamps otomatis akan menambahkan 'createdAt' dan 'updatedAt' ke setiap data
    timestamps: true,
});

// Mengekspor schema agar bisa digunakan di tempat lain untuk membuat Model
module.exports = PostSchema;
