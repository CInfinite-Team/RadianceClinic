const express = require('express');
const { getAllBlogs, getBlogById } = require('../controllers/userBlogController');
const {getBookedSlots} = require('../controllers/appointmentPage');
const userRouter = express.Router();

userRouter.get('/blogs', getAllBlogs);
userRouter.get('/blogsById', getBlogById);
userRouter.get('/appointmentSlots', getBookedSlots);

module.exports = userRouter;
