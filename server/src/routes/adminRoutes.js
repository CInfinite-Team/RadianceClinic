const express = require('express');
const { loginAdmin } = require('../controllers/adminController');
const { getAdminDashboard } = require('../controllers/adminDashboardController');
const { getLeads, getLeadDetails } = require('../controllers/adminLeadsController');
const { getUpcomingAppointments, getAppointmentDetails } = require('../controllers/adminAppointmentsController');
const { createBlog, deleteBlog, getAllBlogs, getBlogById } = require('../controllers/blogController');

const authenticateAdmin = require('../middlewares/authMiddleware');
const multer = require('multer');

const adminRouter = express.Router();

// Configure Multer for file uploads (images)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Admin Login
adminRouter.post('/login', loginAdmin);

// Admin Dashboard
adminRouter.get('/dashboard', authenticateAdmin, getAdminDashboard);

// Leads Page API
adminRouter.get('/leads', authenticateAdmin, getLeads);
adminRouter.get('/leads/:id', authenticateAdmin, getLeadDetails);

// Upcoming Appointments
adminRouter.get('/appointments', authenticateAdmin, getUpcomingAppointments);
adminRouter.get('/appointments/:id', authenticateAdmin, getAppointmentDetails);

// Blogs API
adminRouter.post('/blogs', authenticateAdmin, upload.single('image'), createBlog);  
adminRouter.get('/blogs', authenticateAdmin, getAllBlogs);  
adminRouter.get('/blogs/:id', authenticateAdmin, getBlogById); 
adminRouter.delete('/blogs/:id', authenticateAdmin, deleteBlog);

module.exports = adminRouter;
