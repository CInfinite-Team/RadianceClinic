const express = require('express');
const { loginAdmin } = require('../controllers/adminController');
const { getAdminDashboard } = require('../controllers/adminDashboardController');
const { getLeads,getLeadDetails } = require('../controllers/adminLeadsController');
const {getUpcomingAppointments,getAppointmentDetails} = require('../controllers/adminAppointmentsController');

const authenticateAdmin = require('../middlewares/authMiddleware');

const adminRouter = express.Router();

// Admin Login
adminRouter.post('/login', loginAdmin);

// Admin Dashboard
adminRouter.get('/dashboard', authenticateAdmin, getAdminDashboard);

// Leads Page API
adminRouter.get('/leads', authenticateAdmin, getLeads);
// Get Lead Details by ID
adminRouter.get('/leads/:id', authenticateAdmin, getLeadDetails);

// Upcoming Appointments
adminRouter.get('/appointments', authenticateAdmin, getUpcomingAppointments);
// Appointment Details by ID
adminRouter.get('/appointments/:id', authenticateAdmin, getAppointmentDetails);

module.exports = adminRouter;
