const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    introduction: {
        type: String,
        required: true,
    },
    content: [
        {
            heading: { type: String, required: true },
            body: { type: String, required: true },
        },
    ],
    image: {
        data: {
            type: Buffer,
            required: false,
        },
        contentType: {
            type: String,
            required: false,
        }},
    category: {
        type: String,
        default: 'General',
        required: true,
    },
    admin: {
        name: { type: String, required: true },
        speciality: { type: String, required: true },
        profileImage: {
            data: Buffer,
        },
    },
}, { timestamps: true });

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;
