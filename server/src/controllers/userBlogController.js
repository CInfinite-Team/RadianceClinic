const Blog = require('../models/Blogs');

const getAllBlogs = async (req, res) => {
    try {
        const { category, sort } = req.query; 
        const filter = category ? { category: category.toLowerCase() } : {};
        let sortOrder = {};
        if (sort === 'newest') {
            sortOrder = { createdAt: -1 }; 
        } else if (sort === 'oldest') {
            sortOrder = { createdAt: 1 }; 
        }

        
        const blogs = await Blog.find(filter).sort(sortOrder);
        console.log('Blogs fetched:', blogs);
        res.status(200).json(blogs);
    } catch (error) {
        console.error('Error fetching blogs:', error.message);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};


const getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        console.log('Blog fetched:', blog);
        res.status(200).json(blog);
    } catch (error) {
        console.error('Error fetching blog:', error.message);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

module.exports = { getAllBlogs, getBlogById };
