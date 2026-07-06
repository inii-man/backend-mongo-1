const { Schema } = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    languages: [String],
    status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE'],
        default: 'ACTIVE'
    }
}, {
    timestamps: true
});

module.exports = UserSchema;
