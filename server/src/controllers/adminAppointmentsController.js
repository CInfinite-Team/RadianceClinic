const ConsultationForm = require('../models/ConsultationForm');
const moment = require('moment');

// const getUpcomingAppointments = async (req, res) => {
//     try {
//         const { category } = req.query;

//         const today = moment().startOf('day');

//         const totalUpcomingAppointments = await ConsultationForm.countDocuments({
//             appointmentDate: { $gte: today.toDate() },
//         });

//         const categories = ['Hair Treatment', 'Skin Treatment', 'Laser Treatment', 'Anti-Aging', 'Cosmetics'];

//         let appointments;
//         if (category && categories.includes(category)) {
            
//             appointments = await ConsultationForm.find({
//                 appointmentDate: { $gte: today.toDate() },
//                 category: category,
//             }).sort({ appointmentDate: 1 });
//         } else {
            
//             appointments = await ConsultationForm.find({
//                 appointmentDate: { $gte: today.toDate() },
//             }).sort({ appointmentDate: 1 });
//         }

//         res.status(200).json({
//             success: true,
//             data: {
//                 totalUpcomingAppointments,
//                 appointments
//             },
//         });
//     } catch (error) {
//         console.error('Error fetching upcoming appointments:', error.message);
//         res.status(500).json({
//             success: false,
//             message: 'Internal server error',
//             error: error.message,
//         });
//     }
// };

const getUpcomingAppointments = async (req, res) => {
    try {
        const { category, date, time, modeOfConsultation } = req.body;

        const totalUpcomingAppointments = await ConsultationForm.countDocuments({
            appointmentDate: { $gte: moment().startOf('day').toDate() }
        });

        let query = {
            appointmentDate: { $gte: moment().startOf('day').toDate() }
        };

        if (category) {
            query.category = category;
        }

        if (modeOfConsultation) {
            query.modeOfConsultation = modeOfConsultation;
        }

        if (date) {
            const selectedDate = moment(date, 'YYYY-MM-DD').startOf('day');
            if (selectedDate.isValid()) {
                query.appointmentDate = {
                    $gte: selectedDate.toDate(),
                    $lt: moment(selectedDate).add(1, 'day').toDate()
                };
            }
        }

        if (time) {
            query.appointmentTime = time;
        }

        const appointments = await ConsultationForm.find(query).sort({
            appointmentDate: 1,
            appointmentTime: 1
        });

        res.status(200).json({
            success: true,
            data: {
                totalUpcomingAppointments,
                appointments
            },
        });
    } catch (error) {
        console.error('Error fetching upcoming appointments:', error.message);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message,
        });
    }
};


const getAppointmentDetails = async (req, res) => {
    try {
        const { id } = req.body;
        const appointment = await ConsultationForm.findById(id);
        if (!appointment) {
            return res.status(404).json({
                success: false,
                message: 'appointment not found'
            });
        }
        res.status(200).json({
            success: true,
            data: appointment,
        });
    } catch (error) {
        console.error('Error fetching appointment details:', error.message);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message,
        });
    }
};




module.exports = { getUpcomingAppointments,getAppointmentDetails };