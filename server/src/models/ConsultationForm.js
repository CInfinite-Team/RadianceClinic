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
    status:{
        type: String,
        default: 'Submitted'
    },
    message: { 
        type: String,
    },
    modeOfConsultation: { 
        type: String,
        required: true 
    },
    appointmentDate: { 
        type: Date, 
        required: true 
    },
    appointmentTime:{
        type: String,
        required: true
    }
},{ timestamps: true });

const ConsultationForm = mongoose.model('ConsultationForm', consultationFormSchema);

module.exports = ConsultationForm;
