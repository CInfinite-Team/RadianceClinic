const mongoose = require('mongoose');

const consultationFormSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true
    },
    email: { 
        type: String, 
        required: true 
    },
    phone: { 
        type: String, 
        required: true 
    },
    category: { 
        type: String, 
        required: true 
    },
    message: { 
        type: String, 
        required: true 
    },
    modeOfConsultation: { 
        type: String, 
        enum: ['On Call', 'In Person'], 
        required: true 
    },
    appointmentDate: { 
        type: Date, 
        required: true 
    }
});

const ConsultationForm = mongoose.model('ConsultationForm', consultationFormSchema);

module.exports = ConsultationForm;
