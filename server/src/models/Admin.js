const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    speciality: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    profileImage: {
        data: {
            type: Buffer, // Image data stored as Buffer
            required: false, // Optional in case image is not uploaded
        },
        contentType: {
            type: String,
            required: false, // Optional if no image is uploaded
        }},
}, { timestamps: true });

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;
