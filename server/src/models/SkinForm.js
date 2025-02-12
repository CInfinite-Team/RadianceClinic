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
  status:{
    type: String,
    default: 'Submitted'
  },
  category:{
    type: String,
    default: 'Skin'
  },
  DOB: {
    type: Date,
    required: true,
  },

  gender: {
    type: String,
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
    required: true,},
  email: {
    type: String,
    trim: true, },
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
    default: 'Dermatology',
  },
  skinProblem: {
    type: String,
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
    required: true,
  },
}, { timestamps: true });

const SkinForm = mongoose.model('SkinForm', SkinFormSchema);

module.exports = SkinForm;
