const { Sequelize, DataTypes, Op } = require('sequelize');

// Menginisialisasi koneksi Sequelize (Slides 55)
// Ganti 'database', 'username', dan 'password' dengan konfigurasi MySQL/PostgreSQL Anda
const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql' // atau 'postgres', 'sqlite', 'mariadb', 'mssql'
});

// Mendefinisikan Model (Schema) di Sequelize (Slide 56)
const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER
    }
}, {
    // Opsi lainnya bisa ditaruh di sini
});

const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT
});

// Membuat Relasi (Slide 57)
User.hasMany(Post); // Satu User punya banyak Post (One-to-Many)
Post.belongsTo(User); // Satu Post milik satu User

async function testSequelize() {
    try {
        // Melakukan sinkronisasi database (Slide 59)
        // DDL secara otomatis dieksekusi (membuat table jika belum ada)
        await sequelize.sync({ force: true });
        console.log("Semua model berhasil disinkronisasi ke database.");

        // Contoh Query (Slide 58)
        // const users = await User.findAll({
        //     where: {
        //         name: 'Elice',
        //         age: {
        //             [Op.lt]: 20, // Kurang dari 20
        //             [Op.gte]: 10 // Lebih dari sama dengan 10
        //         }
        //     },
        //     include: Post // Otomatis melakukan JOIN dengan tabel Post
        // });

    } catch (error) {
        console.error("Gagal melakukan sinkronisasi:", error);
    }
}

// testSequelize();

module.exports = { sequelize, User, Post };
