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
        enum: ['Male', 'Female', 'Other'],
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
        required: true,
        match: [/^\+?[1-9]\d{1,14}$/, 'Please enter a valid phone number'],
    },
    email: {
        type: String,
        trim: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address'],
    },
    maritalStatus: {
        type: String,
        enum: ['Married', 'Unmarried'],
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
        enum: ['Dr. Nitin Barde', 'Dr. Radhika Barde'],
        required: true,
    },
    speciality: {
        type: String,
        enum: ['Hair Treatment', 'Hair Transplant'],
        required: true,
    },
    hairLossDurationMonths: {
        type: Number,
        required: true,
    },
    hairLossType: {
        type: String,
        enum: ['Continuous', 'Intermittent'],
        required: true,
    },
    dailyHairLoss: {
        type: Number,
        required: true,
    },
    skinAllergy: {
        type: Boolean,
        default: false,
    },
    currentTreatment: {
        type: [String],
        enum: ['Oil', 'Shampoo', 'Solution', 'Tablets', 'Ayurvedic', 'Homeopathy', 'None'],
    },
    skinDisorders: {
        type: [String],
        enum: ['Psoriasis', 'Dandruff', 'Itching', 'None'],
    },
    familyHistory: {
        type: [String],
        enum: [
            'Father',
            'Brother',
            'Uncle (Paternal)',
            'Grandfather (Paternal)',
            'Mother',
            'Sister',
            'Uncle (Maternal)',
            'Grandfather (Maternal)',
            'Other',
        ],
    },
    suspectedCause: {
        type: String,
        trim: true,
    },
    sourceOfReferral: {
        type: String,
        enum: ['Website', 'Relatives', 'Newspaper', 'Internet', 'Justdial', 'Friends', 'Others', 'Facebook'],
        required: true,
    },
}, { timestamps: true }); 

const HairForm = mongoose.model('HairForm', HairFormSchema);

module.exports = HairForm;
