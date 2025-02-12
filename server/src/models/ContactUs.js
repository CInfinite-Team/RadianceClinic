const mongoose = require('mongoose');

const ContactUsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: String,
        trim: true,
    },
    status:{
        type: String,
        default: 'Submitted'
    },
    subject: {
        type: String,
        required: true,
        trim: true,
    },
    message: {
        type: String,
        required: true,
        trim: true,
    },
    
}, { timestamps: true });


const ContactUs = mongoose.model('ContactUs', ContactUsSchema);

module.exports = ContactUs;
