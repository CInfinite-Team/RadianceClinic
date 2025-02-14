const HairForm = require('../models/HairForm');
const SkinForm = require('../models/SkinForm');
const moment = require('moment');

const getForms = async (req, res) => {
    try {
        const { formType, date, startDate, endDate } = req.query;

        const totalHairForms = await HairForm.countDocuments();
        const totalSkinForms = await SkinForm.countDocuments();

        let forms = [];

        let hairQuery = {};
        let skinQuery = {};

        if (date) {
            const selectedDate = moment(date, 'YYYY-MM-DD').startOf('day');
            if (selectedDate.isValid()) {
                hairQuery.createdAt = {
                    $gte: selectedDate.toDate(),
                    $lt: moment(selectedDate).add(1, 'day').toDate()
                };
                skinQuery.createdAt = {
                    $gte: selectedDate.toDate(),
                    $lt: moment(selectedDate).add(1, 'day').toDate()
                };
            }
        }

        if (startDate && endDate) {
            const start = moment(startDate, 'YYYY-MM-DD').startOf('day');
            const end = moment(endDate, 'YYYY-MM-DD').endOf('day');
            if (start.isValid() && end.isValid()) {
                hairQuery.createdAt = { $gte: start.toDate(), $lte: end.toDate() };
                skinQuery.createdAt = { $gte: start.toDate(), $lte: end.toDate() };
            }
        }

        if (formType === 'Hair') {
            forms = await HairForm.find(hairQuery).sort({ createdAt: -1 });
        } else if (formType === 'Skin') {
            forms = await SkinForm.find(skinQuery).sort({ createdAt: -1 });
        } else {
            const hairForms = await HairForm.find(hairQuery).sort({ createdAt: -1 });
            const skinForms = await SkinForm.find(skinQuery).sort({ createdAt: -1 });
            forms = [...hairForms, ...skinForms].sort((a, b) => b.createdAt - a.createdAt);
        }

        res.status(200).json({
            success: true,
            data: {
                totalHairForms,
                totalSkinForms,
                forms,
            },
        });
    } catch (error) {
        console.error('Error fetching forms:', error.message);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message,
        });
    }
};

const getFormById = async (req, res) => {
    try {
        const { id } = req.query;

        let form = await HairForm.findById(id);
        if (!form) {
            form = await SkinForm.findById(id);
        }

        if (!form) {
            return res.status(404).json({
                success: false,
                message: 'Form not found'
            });
        }

        res.status(200).json({
            success: true,
            data: form
        });

    } catch (error) {
        console.error('Error fetching form by ID:', error.message);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message,
        });
    }
};

const updateFormStatus = async (req, res) => {
    try {
        const {id, status } = req.body;  // Get new status from request body

        if (!status) {
            return res.status(400).json({
                success: false,
                message: 'Status is required in the request body.',
            });
        }

        let updatedForm = await HairForm.findByIdAndUpdate(
            id,
            { status: status },
            { new: true }
        );

        // If not found in HairForm, check in SkinForm
        if (!updatedForm) {
            updatedForm = await SkinForm.findByIdAndUpdate(
                id,
                { status: status },
                { new: true }
            );
        }

        if (!updatedForm) {
            return res.status(404).json({
                success: false,
                message: 'Form not found with the provided ID.',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Form status updated successfully.',
            data: updatedForm,
        });

    } catch (error) {
        console.error('Error updating form status:', error.message);
        res.status(500).json({
            success: false,
            message: 'Internal server error.',
            error: error.message,
        });
    }
};


module.exports = { getForms, getFormById,updateFormStatus };