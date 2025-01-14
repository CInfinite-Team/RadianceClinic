import React, { useState } from 'react';
import FormInput from '../SharedComponents/FormInput';
import PrimaryBtn from '../../components/Buttons/PrimaryBtn';
import axios from 'axios';
import SERVER_URL from '../../constant.mjs';

const HairformComponent = () => {

    const INITIAL_FORM_STATE = {
        firstName: "",
        middleName: "",
        lastName: "",
        DOB: "",
        gender: "",
        address: "",
        city: "",
        mobileNo: "",
        email: "",
        maritalStatus: "",
        spouseName: "",
        occupation: "",
        doctor: "Dr. Radhika Barde",
        speciality: "Hair Treatment",
        hairLossDurationMonths: "",
        hairLossType: "",
        skinAllergy: false,
        sourceOfReferral: "",
        familyHistory: "",
        currentTreatment: "",
        suspectedCause: "",
        dailyHairLoss: "",
        skinDisorder: [],
        // conditions: []
      }


  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value ==='true'
    }));
  };
  
  


  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      if (checked) {
        return {
          ...prev,
          skinDisorder: [...prev.skinDisorder, value]
        };
      } else {
        return {
          ...prev,
          skinDisorder: prev.skinDisorder.filter(condition => condition !== value)
        };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await axios.post(`${SERVER_URL}/api/forms/hair`, formData);
      setSuccess('Form submitted successfully!');
      setFormData(INITIAL_FORM_STATE);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-10 py-24 px-4 md:px-8 xl:px-32">
      <form onSubmit={handleSubmit}  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        <FormInput
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter First Name"
          required
        />
        
        <FormInput
          label="Middle Name"
          name="middleName"
          value={formData.middleName}
          onChange={handleChange}
          placeholder="Enter Middle Name"
        />
        
        <FormInput
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter Last Name"
          required
        />

        <FormInput
          label="Date of Birth"
          name="DOB"
          type="date"
          value={formData.DOB}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Gender"
          name="gender"
          type="select"
          value={formData.gender}
          onChange={handleChange}
          placeholder="Select Gender"
          options={[
            { value: "Male", label: "Male" },
            { value: "Female", label: "Female" },
            { value: "Others", label: "Others" }
          ]}
          required
        />

        <FormInput
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter Address"
          required
        />

        <FormInput
          label="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Enter Your City"
          required
        />

        <FormInput
          label="Mobile Number"
          name="mobileNo"
          type="tel"
          value={formData.mobileNo}
          onChange={handleChange}
          placeholder="Enter Mobile Number"
          required
        />

        <FormInput
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter Email"
          required
        />

        <FormInput
          label="Marital Status"
          name="maritalStatus"
          type="select"
          value={formData.maritalStatus}
          onChange={handleChange}
          placeholder="Select Marital Status"
          options={[
            { value: "Un-married", label: "Un-married" },
            { value: "Married", label: "Married" }
          ]}
          required
        />

        <FormInput
          label="Spouse Name"
          name="spouseName"
          value={formData.spouseName}
          onChange={handleChange}
          placeholder="Enter Spouse Name"
        />

        <FormInput
          label="Occupation"
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
          placeholder="Enter Occupation"
          required
        />

        <FormInput
          label="Doctor"
          name="doctor"
          type="select"
          value={formData.doctor}
          onChange={handleChange}
          placeholder="Select Doctor"
          options={[
            { value: "Dr.Nitin Barde", label: "Dr.Nitin Barde" },
            { value: "Dr.Radhika Barde", label: "Dr.Radhika Barde" }
          ]}
          required
        />

        <FormInput
          label="Specialty"
          name="speciality"
          type="select"
          value={formData.speciality}
          onChange={handleChange}
          placeholder="Select Specialty"
          options={[
            { value: "Hair Transplant", label: "Hair Transplant" },
            { value: "Hair Treatment", label: "Hair Treatment" }
          ]}
          required
        />

        <FormInput
          label="How long have you been suffering from hair loss?"
          name="hairLossDurationMonths"
          value={formData.hairLossDurationMonths}
          onChange={handleChange}
          placeholder="Enter In Months And Weeks"
          required
        />

        <FormInput
          label="How long have you been suffering from hair loss?"
          name="hairLossType"
           type="select"
          value={formData.hairLossType}
          onChange={handleChange}
          placeholder="Select Hairloss Type"
          options={[
            { value: "Continuous", label: "Continuous" },
            { value: "Intermittent", label: "Intermittent" }
          ]}
          required
        />
<div className="flex flex-col gap-2">
          <label className="text-[#554075] font-bold">Do you suffer from any skin allergy?</label>
          <div className="space-y-2">
            {['Yes', 'No'].map((option) => (
              <div key={option} className="flex gap-2 text-[#554075] font-bold">
                <input
                  type="radio"
                  name="skinAllergy"
                  value={option === 'Yes'}
                  checked={formData.skinAllergy === (option === 'Yes')}
                  onChange={handleRadioChange}
                />
                {option}
              </div>
            ))}
          </div>
        </div>

        {/* <FormInput
          label="Do you suffer from any skin allergy?"
          name="skinAllergy"
          value={formData.skinAllergy}
          onChange={handleChange}
          placeholder="Enter Skin Allergy"
        /> */}

        <FormInput
          label="Source of reference"
          name="sourceOfReferral"
          type="select"
          value={formData.sourceOfReferral}
          onChange={handleChange}
          placeholder="Source of reference"
          options={[
            { value: "Friend", label: "Friend" },
            { value: "Internet", label: "Internet" },
            { value: "Advertisement", label: "Advertisement" },
            { value: "Other", label: "Other" }
          ]}
        />

        <FormInput
          label="Has anyone in your family experienced hair loss?"
          name="familyHistory"
          type="select"
          value={formData.familyHistory}
          onChange={handleChange}
          placeholder="Select who suffered"
          options={[
            { value: "Father", label: "Father" },
            { value: "Mother", label: "Mother" },
            { value: "Sibling", label: "Sibling" },
            { value: "None", label: "None" }
          ]}
        />

        <FormInput
          label="How are you presently dealing with your hair loss?"
          name="currentTreatment"
          type="select"
          value={formData.currentTreatment}
          onChange={handleChange}
          placeholder="Select Current Treatment"
          options={[
            { value: "Oil", label: "Oil" },
            { value: "Shampoo", label: "Shampoo" },
            { value: "Solution", label: "Solution" },
            { value: "Tablets", label: "Tablets" },
            { value: "Ayurvedic", label: "Ayurvedic" },
            { value: "Homeopathy", label: "Homeopathy" },
            { value: "None", label: "None" }
          ]}
        />

        <FormInput
          label="What do you think has caused your hair loss?"
          name="suspectedCause"
          value={formData.suspectedCause}
          onChange={handleChange}
          placeholder="What do you think has caused your hair loss?"
        />

        <FormInput
          label="How much hair do you lose per day?"
          name="dailyHairLoss"
          value={formData.dailyHairLoss}
          onChange={handleChange}
          placeholder="How much hair do you lose per day?"
        />

        {/* <FormInput
          label="Do you suffer from any skin disorder?"
          name="skinDisorder"
          value={formData.skinDisorder}
          onChange={handleChange}
          placeholder="Enter Skin Disorder"
        /> */}

        <div className="flex flex-col col-span-full lg:col-span-2 justify-between gap-2">
          <label className="text-[#554075] font-bold">Do you suffer from any skin disorder?</label>
          <div className="md:grid flex flex-row  flex-wrap gap-6 md:grid-cols-5 md:gap-4 lg:grid-cols-8 items-center">
            {["Psoriasis", "Dandruff", "Itching", "None"].map((condition) => (
              <div key={condition} className="flex gap-2 text-[#554075] font-bold">
                <input
                  type="checkbox"
                  value={condition}
                  checked={formData.skinDisorder.includes(condition)}
                  onChange={handleCheckboxChange}
                />
                {condition}
              </div>
            ))}
            <div className="flex gap-2 text-[#554075] font-bold lg:col-span-2 items-center xl:ml-10">
              <input
                type="text"
                placeholder="Enter Condition"
                className="text-[#554075] rounded-[3px] border-b border-[#B298DC] w-[150px] md:w-[50px] xl:w-[130px] p-1"
                value={formData.otherCondition || ""}
                onChange={(e) => setFormData(prev => ({ ...prev, otherCondition: e.target.value }))}
              />
              Other
            </div>
          </div>
        </div>

        <div className="col-span-full">
          <PrimaryBtn
            type="submit"
            className="w-full sm:w-fit px-16 items-center justify-center"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </PrimaryBtn>
          
          {error && <p className="text-red-500 mt-2">{error}</p>}
          {success && <p className="text-green-500 mt-2">{success}</p>}
        </div>
      </form>
    </div>
  );
};

export default HairformComponent;