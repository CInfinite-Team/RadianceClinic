import React from 'react'
import PrimaryBtn from '../Buttons/PrimaryBtn'
import { ArrowRightCircleIcon } from 'lucide-react'
import AppointmentCalendar from './AppointmentCalendar'

function AppointmentForm() {
  return (
   <>
    <div className='grid grid-cols-1 lg:grid-cols-3 py-24 px-4 md:px-4 xl:px-20 bg-[#fef7ff]'>
    <form action="" className='bg-white col-span-2 relative overflow-visible gap-12 z-10 p-7 flex flex-col shadow-lg shadow-[#E0D1F7] '>




<div className='grid md:grid-cols-2 gap-12'>
   
<div className='flex flex-col gap-3 '>
    <label htmlFor="Name" className='text-[#554075] font-bold '>Name</label>
    <input type="text" name='Name' placeholder='Enter Your Name' className='text-[#554075] rounded-[3px] border border-[#B298DC] w-[80vw] md:w-auto xl:w-[370px] p-3 ' />
    </div> 

    <div className='flex flex-col gap-3 '>
    <label htmlFor="Email" className='text-[#554075] font-bold '>Email</label>
    <input type="email" name='Email' placeholder='Enter Your Email' className='text-[#554075] rounded-[3px] border border-[#B298DC] w-[80vw] md:w-auto xl:w-[370px] p-3 ' />
    </div> 

<div className='flex flex-col gap-3 '>
    <label htmlFor="Mobile" className='text-[#554075] font-bold '>Phone</label>
    <input type="tel" name='Mobile' placeholder='Enter Your Mobile No' className='text-[#554075] rounded-[3px] border border-[#B298DC] w-[80vw] md:w-auto xl:w-[370px] p-3 ' />
    </div> 

    <div className='flex flex-col gap-3 '>
    <label htmlFor="Category" className='text-[#554075] font-bold '>Category</label>
    <select type="text" name='Category'  className='text-[#554075] rounded-[3px] border border-[#B298DC] w-[80vw] md:w-auto xl:w-[370px] p-3 ' >
        <option value="">Select Category</option>
        <option value="Hair">Hair</option>
        <option value="Skin">Skin</option>
    </select>
    </div> 
   
</div>

<div className=' '>
            <label htmlFor="Current" className='text-[#554075]  font-bold text-[15px] lg:text-[13px] 2xl:text-base'>Mode Of Consultation</label> <br />
           <div className='inline-flex gap-2 mr-10 text-[#554075] mt-2 font-bold '><input type="radio" id="html" name="Yes" value="Yes"/>On Call</div> 
           <div className='inline-flex gap-2 text-[#554075] font-bold '><input type="radio" id="html" name="Yes" value="Yes"/>In Person</div> 
        </div> 
        

<div className='flex flex-col gap-3'>
<label htmlFor="Message" className='text-[#554075] font-bold '>Your Message</label>
<textarea  name='Message' rows={5} placeholder='Your Message' className='text-[#554075] resize-none rounded-[3px] border border-[#B298DC] p-3 ' />  
</div>





<label
                        className="relative flex-1 items-center gap-2 max-h-3 flex"
                        style={{ fontSize: "clamp(10px, 2vw, 15px)" }}
                        htmlFor="t&c"
                    >
                        <input
                            className="border-[#B9832B]  w-fit border p-1 rounded-lg"
                            required
                            id="t&c"
                            type="checkbox"
                           
                           
                        />
                        <span className='text-[#AB9DCD]'>I agree with <a href="/terms-and-condition" target="_blank" className="hover:underline cursor-pointer text-[#554075]">Terms of Use</a> and <a href="/privacy-policy" target="_blank" className="hover:underline cursor-pointer text-[#554075]">Privacy Policy</a></span> 
                    </label>

                    <PrimaryBtn className='items-center justify-center px-16 gap-3' >Submit </PrimaryBtn>

</form>
<AppointmentCalendar/>
    </div>

    <div className=' w-full bg-[#fef7ff] pb-10 justify-center items-center gap-3 text-[#554075] font-bold flex'> <div className='bg-[#554075] w-44 lg:w-52 xl:w-96 h-[1px]'></div> <div className=' text-xs lg:text-base'>Note:- Online Consultation Charges Rs. 600 Per Session(if chosen)</div> <div className='bg-[#554075] w-44 lg:w-52 xl:w-96 h-[1px]'></div> </div>
   </>
  )
}

export default AppointmentForm
