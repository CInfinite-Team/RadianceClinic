const Blog = require('../models/Blogs');
const Admin = require('../models/Admin');

const createBlog = async (req, res) => {
    try {
        const { title, introduction,content, category } = req.body;
        const adminId = req.admin.id;
        const admin = await Admin.findById(adminId);
        if (!admin) return res.status(404).json({ message: 'Admin not found' });
        console.log(admin);
        let imageBase64 = null;
        if (req.file) {
            imageBase64 = req.file.buffer.toString('base64');
        }
        categoryLower = category.toLowerCase();
        console.log('Category:', categoryLower);
        const newBlog = new Blog({
            title,
            introduction,
            content, 
            image: imageBase64,
            category:categoryLower,
            admin: {
                name: admin.name,
                speciality: admin.speciality, 
                profileImage: admin.profileImage,
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
            if (blog.image && blog.image.data) {
                blog.image = blog.image.data.toString('base64');
            }
            if (blog.admin.profileImage && blog.admin.profileImage.data) {
                blog.admin.profileImage = blog.admin.profileImage.data.toString('base64');
            }
            return blog;
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
        if (blog.image && blog.image.data) {
            blog.image = blog.image.data.toString('base64');
        }
        if (blog.admin.profileImage && blog.admin.profileImage.data) {
            blog.admin.profileImage = blog.admin.profileImage.data.toString('base64');
        }

        res.status(200).json(blog);
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
