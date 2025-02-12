const express = require('express');
const { loginAdmin } = require('../controllers/adminController');
const { getAdminDashboard } = require('../controllers/adminDashboardController');
const { getLeads, getLeadDetails } = require('../controllers/adminLeadsController');
const { getUpcomingAppointments, getAppointmentDetails } = require('../controllers/adminAppointmentsController');
const { createBlog, deleteBlog, getAllBlogs, getBlogById } = require('../controllers/blogController');
const { getForms, getFormById,updateStatus } = require('../controllers/adminForms');

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
adminRouter.get('/leadsById', authenticateAdmin, getLeadDetails);

// Upcoming Appointments
adminRouter.get('/appointments', authenticateAdmin, getUpcomingAppointments);
adminRouter.get('/appointmentsById', authenticateAdmin, getAppointmentDetails);

//Forms API
adminRouter.get('/forms', authenticateAdmin, getForms);
adminRouter.get('/formsById', authenticateAdmin, getFormById);
adminRouter.get('/updateFormStatus', authenticateAdmin, updateStatus);

// Blogs API
adminRouter.post('/blogs', authenticateAdmin, upload.single('image'), createBlog);  
adminRouter.get('/blogs', authenticateAdmin, getAllBlogs);  
adminRouter.get('/blogsById', authenticateAdmin, getBlogById); 
adminRouter.delete('/blogsById', authenticateAdmin, deleteBlog);

module.exports = adminRouter;
