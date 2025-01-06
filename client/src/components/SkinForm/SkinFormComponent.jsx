import React from 'react'
import PrimaryBtn from '../../components/Buttons/PrimaryBtn'

function SkinFormComponent() {
  return (
    <>
     <div className='flex flex-col gap-10 py-24 px-4 md:px-8 xl:px-32 '>
        <form className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-start '>
        <div className='flex flex-col justify-between gap-2 '>
            <label htmlFor="Mobile" className='text-[#554075] font-bold '>First Name</label>
            <input type="tel" name='Mobile' placeholder='Enter First Name' className='text-[#554075] rounded-[3px] border border-[#B298DC] w-[90vw] md:w-[40vw] xl:w-[360px] p-3 ' />
            </div> 
        <div className='flex flex-col justify-between gap-2 '>
            <label htmlFor="Mobile" className='text-[#554075] font-bold '>Middle Name</label>
            <input type="tel" name='Mobile' placeholder='Enter Middle Name' className='text-[#554075] rounded-[3px] border border-[#B298DC] w-[90vw] md:w-[40vw] xl:w-[360px] p-3 ' />
            </div> 
        <div className='flex flex-col justify-between gap-2 '>
            <label htmlFor="Mobile" className='text-[#554075] font-bold '>Last Name</label>
            <input type="tel" name='Mobile' placeholder='Enter Last Name' className='text-[#554075] rounded-[3px] border border-[#B298DC] w-[90vw] md:w-[40vw] xl:w-[360px] p-3 ' />
            </div> 
        <div className='flex flex-col justify-between gap-2 '>
            <label htmlFor="DOB" className='text-[#554075] font-bold '>Date of Birth</label>
            <input type="date" name='DOB' placeholder='Enter Date of Birth' className='text-[#554075] rounded-[3px] border border-[#B298DC] w-[90vw] md:w-[40vw] xl:w-[360px] p-3 ' />
            </div> 
        <div className='flex flex-col justify-between gap-2 '>
            <label htmlFor="Gender" className='text-[#554075] font-bold '>Gender</label>
            <select name='Gender' placeholder='Enter Gender' className='text-[#554075] rounded-[3px] border border-[#B298DC] w-[90vw] md:w-[40vw] xl:w-[360px] p-3 ' >
            <option value="" >Select Gender</option>
                <option value="Male" >Male</option>
                <option value="Female" >Female</option>
                <option value="Others" >Others</option>
            </select>
            </div> 
        <div className='flex flex-col justify-between gap-2 '>
            <label htmlFor="Address" className='text-[#554075] font-bold '>Address</label>
            <input type="text" name='Address' placeholder='Enter Address' className='text-[#554075] rounded-[3px] border border-[#B298DC] w-[90vw] md:w-[40vw] xl:w-[360px] p-3 ' />
            </div> 
        <div className='flex flex-col justify-between gap-2 '>
            <label htmlFor="City" className='text-[#554075] font-bold '>City</label>
            <input type="text" name='City' placeholder='Enter Your City' className='text-[#554075] rounded-[3px] border border-[#B298DC] w-[90vw] md:w-[40vw] xl:w-[360px] p-3 ' />
            </div> 
        <div className='flex flex-col justify-between gap-2 '>
            <label htmlFor="Mobile" className='text-[#554075] font-bold '>Mobile Number</label>
            <input type="tel" name='Mobile' placeholder='Enter Mobile Number' className='text-[#554075] rounded-[3px] border border-[#B298DC] w-[90vw] md:w-[40vw] xl:w-[360px] p-3 ' />
            </div> 
        <div className='flex flex-col justify-between gap-2 '>
            <label htmlFor="Email" className='text-[#554075] font-bold '>Email</label>
            <input type="email" name='Email' placeholder='Enter Email' className='text-[#554075] rounded-[3px] border border-[#B298DC] w-[90vw] md:w-[40vw] xl:w-[360px] p-3 ' />
            </div> 
        <div className='flex flex-col justify-between gap-2 '>
            <label htmlFor="Marital" className='text-[#554075] font-bold '>Marital Status</label>
            <select  name='Marital'  className='text-[#554075] rounded-[3px] border border-[#B298DC] w-[90vw] md:w-[40vw] xl:w-[360px] p-3 ' >
                <option value="" > Marital Status</option>
                <option value="Un-married" >Un-married</option>
                <option value="Female" >Married</option>
            </select>
            </div> 
        <div className='flex flex-col justify-between gap-2 '>
            <label htmlFor="Spouse" className='text-[#554075] font-bold '>Spouse Name </label>
            <input type="text" name='Spouse' placeholder='Enter Spouse Name ' className='text-[#554075] rounded-[3px] border border-[#B298DC] w-[90vw] md:w-[40vw] xl:w-[360px] p-3 ' />
            </div> 
        <div className='flex flex-col justify-between gap-2 '>
            <label htmlFor="Occupation" className='text-[#554075] font-bold '>Occupation</label>
            <input type="text" name='Occupation' placeholder='Enter Occupation' className='text-[#554075] rounded-[3px] border border-[#B298DC] w-[90vw] md:w-[40vw] xl:w-[360px] p-3 ' />
            </div> 
        <div className='flex flex-col justify-between gap-2 '>
            <label htmlFor="Doctor" className='text-[#554075] font-bold '>Doctor</label>
            <select name="Doctor" className='text-[#554075] rounded-[3px] border border-[#B298DC] w-[90vw] md:w-[40vw] xl:w-[360px] p-3 ' >
            <option value="">Select Doctor</option>
            <option value="Dr.Nitin">Dr.Nitin Barde</option>
            <option value="Dr.Radhika">Dr.Radhika Barde</option>
           
            </select>
            </div> 

            <div className='flex flex-col justify-between gap-2 '>
            <label htmlFor="Specialty" className='text-[#554075] font-bold '>Specialty</label>
            <select  name='Specialty'  className='text-[#554075] rounded-[3px] border border-[#B298DC] w-[90vw] md:w-[40vw] xl:w-[360px] p-3 ' >
                <option value="" >Select Specialty</option>
                <option value="Hair Transplant" >Hair Transplant</option>
                <option value="Hair Treatment" >Hair Treatment</option>
            </select>
            </div> 
            

            <div className='flex flex-col justify-between gap-2 '>
            <label htmlFor="Problem" className='text-[#554075] font-bold text-[15px] 2xl:text-base '>Skin Problem</label>
            <input type="text" name='Problem' placeholder='Enter Your Problem' className='text-[#554075] rounded-[3px] border border-[#B298DC] w-[90vw] md:w-[40vw] xl:w-[360px] p-3 ' />
            </div> 

            <div className='flex flex-col justify-between gap-2 '>
            <label htmlFor="Since" className='text-[#554075] font-bold '>Since How Long You Have this Problem ?</label>
            <input type="text" name='Since' placeholder='In Months and Weeks' className='text-[#554075] rounded-[3px] border border-[#B298DC] w-[90vw] md:w-[40vw] xl:w-[360px] p-3 ' />
            </div> 

            <div className='flex flex-col justify-between gap-2 '>
            <label htmlFor="Alergy" className='text-[#554075] font-bold '>Do You Any Allergies?</label>
            <input type="text" name='Alergy' placeholder='Enter Skin Alergy or Disorder' className='text-[#554075] rounded-[3px] border border-[#B298DC] w-[90vw] md:w-[40vw] xl:w-[360px] p-3 ' />
            </div> 
            
            
            <div className='flex flex-col justify-between gap-2 '>
            <label htmlFor="Current" className='text-[#554075] font-bold text-[15px] lg:text-[13px] 2xl:text-base'>Are you Pregnant?(For Females Only*) </label>
           <div className='flex gap-2 text-[#554075] font-bold '><input type="radio" id="html" name="Yes" value="Yes"/>Yes</div> 
           <div className='flex gap-2 text-[#554075] font-bold '><input type="radio" id="html" name="Yes" value="Yes"/>No</div> 
        </div> 

        <div className='flex flex-col justify-between gap-2 '>
            <label htmlFor="Due" className='text-[#554075] font-bold '>If yes, then mention Estimated Due Date(EDD)?</label>
            <input type="date" name='Due'  className='text-[#554075] rounded-[3px] border border-[#B298DC] w-[90vw] md:w-[40vw] xl:w-[360px] p-3 ' />
            </div> 

           
            <div className='flex flex-col justify-between gap-2 '>
            <label htmlFor="Current" className='text-[#554075] font-bold '>Source of reference</label>
            <select  name='Specialty'  className='text-[#554075] rounded-[3px] border border-[#B298DC] w-[90vw] md:w-[40vw] xl:w-[360px] p-3 ' >
                <option value="" >Source of reference</option>
            </select>
            </div> 


            <div className='flex flex-col justify-between gap-2 '>
            <label htmlFor="Conditions" className='text-[#554075] font-bold '>Do You Have Any Following Conditions?</label>
            <select  name='Conditions'  className='text-[#554075] rounded-[3px] border border-[#B298DC] w-[90vw] md:w-[40vw] xl:w-[360px] p-3 ' >
                <option value="" >Select Conditions</option>
                <option value="High Blood Pressure" >High Blood Pressure</option>
                <option value="Heart Disease" >Heart Disease</option>
                <option value="Diabetes" >Diabetes</option>
                <option value="Asthma" >Asthma</option>
                <option value="Thyroid Disease" >Thyroid Disease</option>
                <option value="Other" >Other</option>
            </select>
            </div> 

            
        </form>

        
        <PrimaryBtn className='w-full sm:w-fit px-16 items-center justify-center'>Submit</PrimaryBtn>
       
        </div>
            
    </>
  )
}

export default SkinFormComponent
