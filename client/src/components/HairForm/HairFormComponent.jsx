import React from 'react'
import PrimaryBtn from '../../components/Buttons/PrimaryBtn'

function HairformComponent() {
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
            <label htmlFor="Suffering" className='text-[#554075] font-bold text-[15px] 2xl:text-base '>How long you have been suffering from hairloss?</label>
            <input type="text" name='Suffering' placeholder='Enter In Months And Weeks' className='text-[#554075] rounded-[3px] border border-[#B298DC] w-[90vw] md:w-[40vw] xl:w-[360px] p-3 ' />
            </div> 

            <div className='flex flex-col justify-between gap-2 '>
            <label htmlFor="HairfallStatus" className='text-[#554075] font-bold '>Is hairfall continuous Or intermediate?</label>
            <input type="text" name='HairfallStatus' placeholder='Continuous/ Intermediate' className='text-[#554075] rounded-[3px] border border-[#B298DC] w-[90vw] md:w-[40vw] xl:w-[360px] p-3 ' />
            </div> 

            <div className='flex flex-col justify-between gap-2 '>
            <label htmlFor="Current" className='text-[#554075] font-bold '>Do you suffer from any skin disorder?</label>
            <input type="text" name='Current' placeholder='Enter Skin Alergy or Disorder' className='text-[#554075] rounded-[3px] border border-[#B298DC] w-[90vw] md:w-[40vw] xl:w-[360px] p-3 ' />
            </div> 
            

            <div className='flex flex-col justify-between gap-2 '>
            <label htmlFor="Current" className='text-[#554075] font-bold '>Source of reference</label>
            <select  name='Specialty'  className='text-[#554075] rounded-[3px] border border-[#B298DC] w-[90vw] md:w-[40vw] xl:w-[360px] p-3 ' >
                <option value="" >Source of reference</option>
                {/* <option value="Hair Transplant" >Hair Transplant</option>
                <option value="Hair Treatment" >Hair Treatment</option> */}
            </select>
            </div> 

            <div className='flex flex-col justify-between gap-2 '>
            <label htmlFor="Current" className='text-[#554075] font-bold '>Anyone suffered from Hair loss among your family?</label>
            <select  name='Specialty'  className='text-[#554075] rounded-[3px] border border-[#B298DC] w-[90vw] md:w-[40vw] xl:w-[360px] p-3 ' >
                <option value="" >Select who suffered</option>
                <option value="Father" >Father</option>
                <option value="Mother" >Mother</option>
            </select>            
            </div> 
            
            <div className='flex flex-col justify-between gap-2 '>
            <label htmlFor="Current" className='text-[#554075] font-bold text-[15px] lg:text-[13px] 2xl:text-base'>How are you presently dealing with your hair loss? (current treatment)</label>
            <input type="text" name='Current' placeholder='Current Treatment' className='text-[#554075] rounded-[3px] border border-[#B298DC] w-[90vw] md:w-[40vw] xl:w-[360px] p-3 ' />
            </div> 

           

        </form>

        
        <PrimaryBtn className='w-full sm:w-fit px-16 items-center justify-center'>Submit</PrimaryBtn>
       
        </div>
            
    </>
  )
}

export default HairformComponent
