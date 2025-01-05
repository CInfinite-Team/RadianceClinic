const mongoose = require('mongoose');

const SkinFormSchema = new mongoose.Schema({
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
    enum: ['Single', 'Married'],
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
    default: 'Dermatology',
  },
  skinProblem: {
    type: String,
    required: true,
    trim: true,
  },
  problemDurationMonths: {
    type: Number,
    required: true,
  },
  medicalConditions: {
    highBloodPressure: { type: Boolean, default: false },
    heartDisease: { type: Boolean, default: false },
    diabetes: { type: Boolean, default: false },
    asthma: { type: Boolean, default: false },
    thyroidDisease: { type: Boolean, default: false },
    other: { type: String, trim: true },
  },
  isPregnant: {
    type: Boolean,
    default: false,
  },
  EDD: {
    type: Date,
    required: function () {
      return this.isPregnant;
    },
  },
  sourceOfReferral: {
    type: String,
    enum: ['Website', 'Relatives', 'Newspaper', 'Internet', 'Justdial', 'Friends', 'Others', 'Facebook'],
    required: true,
  },
}, { timestamps: true });

const SkinForm = mongoose.model('SkinForm', SkinFormSchema);

module.exports = SkinForm;
