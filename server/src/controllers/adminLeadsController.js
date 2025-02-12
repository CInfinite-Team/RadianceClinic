const ContactUs = require('../models/ContactUs');

const getLeads = async (req, res) => {
    try {
        const { category, date, startDate, endDate } = req.body;

        let query = {};

        if (category ) {
            query.subject = category;
        }

        if (date) {
            const selectedDate = moment(date, 'YYYY-MM-DD').startOf('day');
            if (selectedDate.isValid()) {
                query.createdAt = { $gte: selectedDate.toDate(), $lt: moment(selectedDate).add(1, 'day').toDate() };
            }
        }

        if (startDate && endDate) {
            const start = moment(startDate, 'YYYY-MM-DD').startOf('day');
            const end = moment(endDate, 'YYYY-MM-DD').endOf('day');
            if (start.isValid() && end.isValid()) {
                query.createdAt = { $gte: start.toDate(), $lte: end.toDate() };
            }
        }

        const categoryCounts = {};
        const categories = ['Hair', 'Skin', 'Laser', 'Anti-Aging', 'Cosmetics'];

        for (const cat of categories) {
            categoryCounts[cat] = await ContactUs.countDocuments({ subject: cat });
        }

        const leads = await ContactUs.find(query).sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            data: {
                categoryCounts,
                leads,
            },
        });
    } catch (error) {
        console.error('Error fetching leads:', error.message);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message,
        });
    }
};


const getLeadDetails = async (req, res) => {
    try {
        const { id } = req.body;
        const lead = await ContactUs.findById(id);
        if (!lead) {
            return res.status(404).json({
                success: false,
                message: 'Lead not found'
            });
        }
        res.status(200).json({
            success: true,
            data: lead,
        });
    } catch (error) {
        console.error('Error fetching lead details:', error.message);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message,
        });
    }
};
const updateLeadStatus = async (req, res) => {
    try {
        const { id, status } = req.body;

        let updatedLead = await ContactUs.findByIdAndUpdate(id, { status: status }, { new: true });

        if (!updatedLead) {
            return res.status(404).json({
                success: false,
                message: 'Lead not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Lead status updated successfully',
            data: updatedLead
        });
    } catch (error) {
        console.error('Error updating lead status:', error.message);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message,
        });
    }
};

module.exports = { getLeads, getLeadDetails, updateLeadStatus };