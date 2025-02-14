const Blog = require('../models/Blogs');

const getAllBlogs = async (req, res) => {
    try {
        const { category, sort } = req.query; // Using req.query instead of req.body

        const filter = category ? { category: category.toLowerCase() } : {};

        let sortOrder = {};
        if (sort === 'newest') {
            sortOrder = { createdAt: -1 }; 
        } else if (sort === 'oldest') {
            sortOrder = { createdAt: 1 }; 
        }

        const blogs = await Blog.find(filter).sort(sortOrder);
        
        const blogsWithBase64 = blogs.map(blog => {
            const blogData = blog.toObject();
            
            if (blogData.image && blogData.image.data && blogData.image.contentType) {
                blogData.image = `data:${blogData.image.contentType};base64,${blogData.image.data.toString('base64')}`;
            }

            if (blogData.admin && blogData.admin.profileImage && blogData.admin.profileImage.data && blogData.admin.profileImage.contentType) {
                blogData.admin.profileImage = `data:${blogData.admin.profileImage.contentType};base64,${blogData.admin.profileImage.data.toString('base64')}`;
            }

            return blogData;
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
        const {id} = req.query;
        console.log(id);
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        const blogData = blog.toObject(); 
        
        if (blogData.image && blogData.image.data && blogData.image.contentType) {
            blogData.image = `data:${blogData.image.contentType};base64,${blogData.image.data.toString('base64')}`;
        }

        
        if (blogData.admin && blogData.admin.profileImage && blogData.admin.profileImage.data && blogData.admin.profileImage.contentType) {
            blogData.admin.profileImage = `data:${blogData.admin.profileImage.contentType};base64,${blogData.admin.profileImage.data.toString('base64')}`;
        }
        

        console.log('Blog fetched:', blogData);
        res.status(200).json(blogData);
    } catch (error) {
        console.error('Error fetching blog:', error.message);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};



module.exports = { getAllBlogs, getBlogById };