const ContactUs = require('../models/ContactUs');
const HairForm = require('../models/HairForm'); // Import HairForm model
const SkinForm = require('../models/SkinForm'); // Import SkinForm model

const getLeads = async (req, res) => {
    try {
        const { category } = req.query;

        
        const categories = ['Hair', 'Skin', 'Laser', 'Anti Aging', 'Cosmetics'];

    
        const leadCounts = {};

        
        for (const cat of categories) {
            let count = 0;

            
            count += await ContactUs.countDocuments({ subject: cat });

            
            if (cat === 'Hair') {
                count += await HairForm.countDocuments(); 
            }

            
            if (cat === 'Skin') {
                count += await SkinForm.countDocuments(); 
            }

            leadCounts[cat] = count;
        }

        let leads;
        if (category && categories.includes(category)) {
            leads = await ContactUs.find({ subject: category }).sort({ createdAt: -1 });
            if (category === 'Hair') {
                const hairLeads = await HairForm.find().sort({ createdAt: -1 });
                leads = leads.concat(hairLeads);
            }
            if (category === 'Skin') {
                const skinLeads = await SkinForm.find().sort({ createdAt: -1 });
                leads = leads.concat(skinLeads); 
            }
        } else {
            leads = await ContactUs.find().sort({ createdAt: -1 });
            const hairLeads = await HairForm.find().sort({ createdAt: -1 });
            const skinLeads = await SkinForm.find().sort({ createdAt: -1 });
            leads = leads.concat(hairLeads, skinLeads);
        }

        res.status(200).json({
            success: true,
            data: {
                leadCounts,
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
        const { id } = req.params;
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

module.exports = { getLeads, getLeadDetails };