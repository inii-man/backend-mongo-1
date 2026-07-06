const mongoose = require('mongoose');

// Mengimpor schema yang sudah kita buat
const PostSchema = require('./schemas/board');
const UserSchema = require('./schemas/user');

// Membuat Model dari schema dan mengekspornya
// Model ini yang akan kita gunakan untuk melakukan operasi database (CRUD)
exports.Post = mongoose.model('Post', PostSchema);
exports.User = mongoose.model('User', UserSchema);
