const SkinForm = require('../models/SkinForm');
const HairForm = require('../models/HairForm');
const ContactUs = require('../models/ContactUs');
const ConsultationForm = require('../models/ConsultationForm');

const skinForm = async (req, res) => {
    try {
        const skinForm = new SkinForm(req.body);
        const savedForm = await skinForm.save();

        res.status(201).json({
            message: 'Form submitted successfully',
            data: savedForm,
        });
    } catch (error) {
        console.log("Error in SkinForm controller", error);
        res.status(400).json({
            message: 'Error submitting the form, Error in SkinForm controller',
            error: error.message,
        });
    }
}

const hairForm = async (req, res) => {
    try {
        const hairForm = new HairForm(req.body);
        const savedForm = await hairForm.save();

        res.status(201).json({
            message: 'Form submitted successfully',
            data: savedForm,
        });
    } catch (error) {
        console.log("Error in HairForm controller", error);
        res.status(400).json({
            message: 'Error submitting the form, Error in HairForm controller',
            error: error.message,
        });
    }
}

const contactUsForm = async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;

        const contactForm = new ContactUs({
            name,
            email,
            phone,
            subject,
            message,
        });
        const savedForm = await contactForm.save();
        res.status(201).json({
            message: 'Contact form submitted successfully',
            data: savedForm,
        });
    } catch (error) {
        res.status(400).json({
            message: 'Error submitting the contact form',
            error: error.message,
        });
    }
}

const consultationForm = async (req, res) => {
    try {
        const { name, email, phone, category, message, modeOfConsultation, appointmentDate } = req.body;
        const consultationForm = new ConsultationForm({
            name,
            email,
            phone,
            category,
            message,
            modeOfConsultation,
            appointmentDate,
        });

        const savedForm = await consultationForm.save();
        res.status(201).json({
            message: 'Consultation form submitted successfully',
            data: savedForm,
        });
    } catch (error) {
        res.status(400).json({
            message: 'Error submitting the consultation form',
            error: error.message,
        });
    }
}

module.exports = {
    skinForm, hairForm, contactUsForm,consultationForm
}