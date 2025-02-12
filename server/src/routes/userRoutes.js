const express = require('express');
const { getAllBlogs, getBlogById } = require('../controllers/userBlogController');

const userRouter = express.Router();

userRouter.get('/blogs', getAllBlogs);
userRouter.get('/blogsById', getBlogById);

module.exports = userRouter;
