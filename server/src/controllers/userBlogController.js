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
        const blogsWithBase64 = blogs.map(blog => {
            if (blog.image && blog.image.data) {
                blog.image = blog.image.data.toString('base64'); 
            }

            if (blog.admin.profileImage && blog.admin.profileImage.data) {
                blog.admin.profileImage = blog.admin.profileImage.data.toString('base64'); 
            }

            return blog;
        });

        console.log('Blogs fetched:', blogsWithBase64);
        res.status(200).json(blogsWithBase64);
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

        if (blog.image && blog.image.data) {
            blog.image = blog.image.data.toString('base64');  
        }

        
        if (blog.admin.profileImage && blog.admin.profileImage.data) {
            blog.admin.profileImage = blog.admin.profileImage.data.toString('base64'); 
        }

        console.log('Blog fetched:', blog);
        res.status(200).json(blog);
    } catch (error) {
        console.error('Error fetching blog:', error.message);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};


module.exports = { getAllBlogs, getBlogById };
