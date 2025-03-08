const ConsultationForm = require("../models/ConsultationForm");
const moment = require("moment");

// Get all booked slots from today onwards
const getBookedSlots = async (req, res) => {
    try {
        const today = moment().startOf("day").toDate(); // Get today's date at 00:00

        // Fetch booked slots (date and time) from today onwards
        const bookedSlots = await ConsultationForm.find(
            { appointmentDate: { $gte: today } },
            { appointmentDate: 1, appointmentTime: 1, _id: 0 }
        ).sort({ appointmentDate: 1, appointmentTime: 1 });

        res.status(200).json({
            success: true,
            data: bookedSlots,
        });
    } catch (error) {
        console.error("Error fetching booked slots:", error.message);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
};

module.exports = { getBookedSlots };
