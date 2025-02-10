const fs = require('fs');
const path = require('path');
const Blog = require('../models/Blogs');
const Admin = require('../models/Admin');

const createBlog = async (req, res) => {
    try {
        const { title, introduction, content, category } = req.body;
        const adminId = req.admin.id;

        const admin = await Admin.findById(adminId);
        if (!admin) return res.status(404).json({ message: 'Admin not found' });

        let imageData = null;
        let imageType = null;

        if (req.file) {
            const fileExt = path.extname(req.file.originalname).toLowerCase();

            if (fileExt === '.jpg' || fileExt === '.jpeg') {
                imageType = 'image/jpeg';
            } else if (fileExt === '.png') {
                imageType = 'image/png';
            } else {
                return res.status(400).json({ message: 'Invalid file format! Only JPG, JPEG, and PNG are allowed.' });
            }

            imageData = req.file.buffer;
        }

        const categoryLower = category.toLowerCase();

        const newBlog = new Blog({
            title,
            introduction,
            content,
            category: categoryLower,
            image: imageData ? { data: imageData, contentType: imageType } : undefined,
            admin: {
                name: admin.name,
                speciality: admin.speciality,
                profileImage: admin.profileImage
            },
        });

        await newBlog.save();
        res.status(201).json({ message: 'Blog created successfully', blog: newBlog });
    } catch (error) {
        console.error('Error creating blog:', error.message);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};



const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();

        const blogsWithBase64 = blogs.map(blog => {
            const blogData = blog.toObject();

            if (blogData.image && blogData.image.data) {
                blogData.image = `data:${blogData.image.contentType};base64,${blogData.image.data.toString('base64')}`;
            }

            if (blogData.admin && blogData.admin.profileImage && blogData.admin.profileImage.data) {
                blogData.admin.profileImage = `data:${blogData.admin.profileImage.contentType};base64,${blogData.admin.profileImage.data.toString('base64')}`;
            }

            return blogData;
        });

        res.status(200).json(blogsWithBase64);
    } catch (error) {
        console.error('Error fetching blogs:', error.message);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};


const getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (!blog) return res.status(404).json({ message: 'Blog not found' });

        const blogData = blog.toObject();  

        if (blogData.image && blogData.image.data) {
            blogData.image = `data:${blogData.image.contentType};base64,${blogData.image.data.toString('base64')}`;
        }

        if (blogData.admin && blogData.admin.profileImage && blogData.admin.profileImage.data) {
            blogData.admin.profileImage = `data:${blogData.admin.profileImage.contentType};base64,${blogData.admin.profileImage.data.toString('base64')}`;
        }

        res.status(200).json(blogData);
    } catch (error) {
        console.error('Error fetching blog:', error.message);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);
        if (!blog) return res.status(404).json({ message: 'Blog not found' });

        res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
        console.error('Error deleting blog:', error.message);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

module.exports = { createBlog, getAllBlogs, getBlogById, deleteBlog };
