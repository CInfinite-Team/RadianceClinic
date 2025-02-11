const ContactUs = require('../models/ContactUs');
const HairForm = require('../models/HairForm');
const SkinForm = require('../models/SkinForm');
const ConsultationForm = require('../models/ConsultationForm');
const moment = require('moment');

const getAdminDashboard = async (req, res) => {
    try {
        const today = moment().startOf('day');
        const now = moment();

        // Count of new leads today from ContactUs Form
        const newLeadsToday = await ContactUs.countDocuments({
            createdAt: { $gte: today.toDate() },
        });

        // Count of today's appointments
        const todaysAppointments = await ConsultationForm.countDocuments({
            appointmentDate: { $gte: today.toDate(), $lt: now.endOf('day').toDate() },
        });

        // Count of new forms today from HairForm
        const newHairFormsToday = await HairForm.countDocuments({
            createdAt: { $gte: today.toDate() },
        });

        // Count of new Forms today from SkinForm
        const newSkinFormsToday = await SkinForm.countDocuments({
            createdAt: { $gte: today.toDate() },
        });

        // Total new Forms today
        const totalNewForms = newHairFormsToday + newSkinFormsToday;

        // Latest lead from ContactUs
        const latestContactUsLead = await ContactUs.findOne().sort({ createdAt: -1 });
        // const latestHairLead = await HairForm.findOne().sort({ createdAt: -1 });
        // const latestSkinLead = await SkinForm.findOne().sort({ createdAt: -1 });

        // const latestLeads = [latestContactUsLead, latestHairLead, latestSkinLead];

        // const latestLead = latestLeads.filter(lead => lead !== null)
        //                                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];


        // Upcoming appointment
        const upcomingAppointment = await ConsultationForm.findOne({
            appointmentDate: { $gte: now.toDate() },
        }).sort({ appointmentDate: 1 });

        // Count of upcoming appointments
        const totalUpcomingAppointments = await ConsultationForm.countDocuments({
            appointmentDate: { $gte: now.toDate() },
        });

        res.status(200).json({
            success: true,
            data: {
                newLeadsToday,
                totalNewForms,
                todaysAppointments,
                latestContactUsLead,
                upcomingAppointment,
                totalUpcomingAppointments,
            },
        });
    } catch (error) {
        console.error('Error fetching dashboard data:', error.message);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message,
        });
    }
};

module.exports = { getAdminDashboard };