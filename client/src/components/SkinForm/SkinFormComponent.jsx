import React, { useState } from 'react';
import axios from 'axios';
import PrimaryBtn from '../../components/Buttons/PrimaryBtn';
import SERVER_URL  from '../../constant.mjs';
import FormInput from '../SharedComponents/FormInput';
const INITIAL_FORM_STATE = {
  firstName: '',
  middleName: '',
  lastName: '',
  DOB: '',
  gender: '',
  address: '',
  city: '',
  mobileNo: '',
  email: '',
  maritalStatus: '',
  spouseName: '',
  occupation: '',
  doctor: '',
  speciality: 'Dermatology',
  skinProblem: '',
  problemDurationMonths: 0,
  medicalConditions: {
    highBloodPressure: false,
    heartDisease: false,
    diabetes: false,
    asthma: false,
    thyroidDisease: false,
    other: ''
  },
  isPregnant: false,
  EDD: '',
  sourceOfReferral: ''
};

const MEDICAL_CONDITIONS = [
  { id: 'highBloodPressure', label: 'High Blood Pressure' },
  { id: 'heartDisease', label: 'Heart Disease' },
  { id: 'diabetes', label: 'Diabetes' },
  { id: 'asthma', label: 'Asthma' },
  { id: 'thyroidDisease', label: 'Thyroid Disease' }
];



function SkinFormComponent() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name.includes('medicalConditions.')) {
      const [_, condition] = name.split('.');
      setFormData(prev => ({
        ...prev,
        medicalConditions: {
          ...prev.medicalConditions,
          [condition]: type === 'checkbox' ? checked : value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'radio' ? value === 'true' : value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await axios.post(`${SERVER_URL}/api/forms/skin`, formData);
      if (response.status === 201) {
        alert('Form submitted successfully!');
        setFormData(INITIAL_FORM_STATE);
      }
    } catch (error) {
      setError('Error submitting form. Please try again.');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-24 px-4 md:px-8 xl:px-32">
      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        <FormInput
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="Enter First Name"
          required
        />

        <FormInput
          label="Middle Name"
          name="middleName"
          value={formData.middleName}
          onChange={handleInputChange}
          placeholder="Enter Middle Name"
        />

        <FormInput
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Enter Last Name"
          required
        />

        <FormInput
          label="Date of Birth"
          name="DOB"
          type="date"
          value={formData.DOB}
          onChange={handleInputChange}
          required
        />

        <FormInput
          label="Gender"
          name="gender"
          type="select"
          value={formData.gender}
          onChange={handleInputChange}
          placeholder="Select Gender"
          options={[
            { value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Others', label: 'Others' }
          ]}
        />

        <FormInput
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          placeholder="Enter Address"
        />

        <FormInput
          label="City"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          placeholder="Enter Your City"
        />

        <FormInput
          label="Mobile Number"
          name="mobileNo"
          type="tel"
          value={formData.mobileNo}
          onChange={handleInputChange}
          placeholder="Enter Mobile Number"
          required
        />

        <FormInput
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter Email"
        />

        <FormInput
          label="Marital Status"
          name="maritalStatus"
          type="select"
          value={formData.maritalStatus}
          onChange={handleInputChange}
          placeholder="Marital Status"
          options={[
            { value: 'Un-married', label: 'Un-married' },
            { value: 'Married', label: 'Married' }
          ]}
        />

        {formData.maritalStatus === 'Married' && (
          <FormInput
            label="Spouse Name"
            name="spouseName"
            value={formData.spouseName}
            onChange={handleInputChange}
            placeholder="Enter Spouse Name"
          />
        )}

        <FormInput
          label="Doctor"
          name="doctor"
          type="select"
          value={formData.doctor}
          onChange={handleInputChange}
          placeholder="Select Doctor"
          required
          options={[
            { value: 'Dr.Nitin', label: 'Dr. Nitin Barde' },
            { value: 'Dr.Radhika', label: 'Dr. Radhika Barde' }
          ]}
        />

        <FormInput
          label="Skin Problem"
          name="skinProblem"
          value={formData.skinProblem}
          onChange={handleInputChange}
          placeholder="Enter Your Problem"
        />

        <FormInput
          label="Problem Duration (in months)"
          name="problemDurationMonths"
          type="number"
          value={formData.problemDurationMonths}
          onChange={handleInputChange}
          placeholder="Enter duration in months"
          required
        />

        <div className="flex flex-col gap-2">
          <label className="text-[#554075] font-bold">Are you Pregnant? (For Females Only*)</label>
          <div className="space-y-2">
            {['Yes', 'No'].map((option) => (
              <div key={option} className="flex gap-2 text-[#554075] font-bold">
                <input
                  type="radio"
                  name="isPregnant"
                  value={option === 'Yes'}
                  checked={formData.isPregnant === (option === 'Yes')}
                  onChange={handleInputChange}
                />
                {option}
              </div>
            ))}
          </div>
        </div>

        {formData.isPregnant && (
          <FormInput
            label="Estimated Due Date (EDD)"
            name="EDD"
            type="date"
            value={formData.EDD}
            onChange={handleInputChange}
            required
          />
        )}

        <FormInput
          label="Source of Reference"
          name="sourceOfReferral"
          type="select"
          value={formData.sourceOfReferral}
          onChange={handleInputChange}
          placeholder="Source of reference"
          required
          options={[
            { value: 'Website', label: 'Website' },
            { value: 'Relatives', label: 'Relatives' },
            { value: 'Newspaper', label: 'Newspaper' },
            { value: 'Justdial', label: 'Justdial' },
            { value: 'Friends', label: 'Friends' },
            { value: 'Facebook', label: 'Facebook' },
            { value: 'Others', label: 'Others' }
          ]}
        />

        <div className="col-span-full">
          <label className="block text-[#554075] font-bold mb-2">Medical Conditions</label>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {MEDICAL_CONDITIONS.map(({ id, label }) => (
              <div key={id} className="flex gap-2 text-[#554075] font-bold">
                <input
                  type="checkbox"
                  name={`medicalConditions.${id}`}
                  checked={formData.medicalConditions[id]}
                  onChange={handleInputChange}
                />
                {label}
              </div>
            ))}
            <div className="flex gap-2 items-center">
              <input
                type="text"
                name="medicalConditions.other"
                value={formData.medicalConditions.other}
                onChange={handleInputChange}
                placeholder="Enter Condition"
                className="text-[#554075] rounded-[3px] border-b border-[#B298DC] p-1 w-full"
              />
              <span className="text-[#554075] font-bold">Other</span>
            </div>
          </div>
        </div>

        <div className="col-span-full">
          <PrimaryBtn
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-fit px-16 items-center justify-center"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </PrimaryBtn>
        </div>
      </form>
    </div>
  );
}

export default SkinFormComponent;