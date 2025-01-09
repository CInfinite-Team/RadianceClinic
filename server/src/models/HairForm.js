const mongoose = require('mongoose');

const HairFormSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    middleName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    DOB: {
        type: Date,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        trim: true,
    },
    city: {
        type: String,
        trim: true,
    },
    mobileNo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
    },
    maritalStatus: {
        type: String,
    },
    spouseName: {
        type: String,
        trim: true,
    },
    occupation: {
        type: String,
        trim: true,
    },
    doctor: {
        type: String,
        required: true,
    },
    speciality: {
        type: String,
        required: true,
    },
    hairLossDurationMonths: {
        type: String,
        required: true,
    },
    hairLossType: {
        type: String,
        required: true,
    },
    dailyHairLoss: {
        type: String,
        required: true,
    },
    skinAllergy: {
        type: Boolean,
        default: false,
    },
    currentTreatment: {
        type: String
    },
    skinDisorders: {
        type: String,
    },
    familyHistory: {
        type: String,
    },
    suspectedCause: {
        type: String,
        trim: true,
    },
    sourceOfReferral: {
        type: String,
    },
}, { timestamps: true }); 

const HairForm = mongoose.model('HairForm', HairFormSchema);

module.exports = HairForm;
