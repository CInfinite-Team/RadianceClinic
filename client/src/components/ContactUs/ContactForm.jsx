import React from 'react'
import PrimaryBtn from '../Buttons/PrimaryBtn'
import { ArrowRightCircleIcon } from 'lucide-react'
import leftVector from '../../assets/ContactUs/leftVector.svg'
import rightVector from '../../assets/ContactUs/rightVector.svg'


function ContactForm() {
  return (
   <>
   <div className='relative'>
       <img src={leftVector} alt="" className="absolute hidden md:block -bottom-20 -left-48 xl:-left-72 z-0 max-w-[218px] xl:max-w-[303px]" />
       <img src={rightVector} alt="" className="absolute hidden md:block -bottom-20 -right-48 xl:-right-72 z-0 max-w-[218px] xl:max-w-[303px]" />

    <form action="" className='bg-white relative overflow-visible gap-12 z-10 p-7 flex flex-col shadow-lg shadow-[#E0D1F7] '>




        <div className='grid md:grid-cols-2 gap-12'>
           
        <div className='flex flex-col gap-3 '>
            <label htmlFor="Name" className='text-[#554075] font-bold '>Name</label>
            <input type="text" name='Name' placeholder='Enter Your Name' className='text-[#554075] rounded-[3px] border border-[#B298DC] w-[80vw] md:w-auto xl:w-[417px] p-3 ' />
            </div> 

            <div className='flex flex-col gap-3 '>
            <label htmlFor="Email" className='text-[#554075] font-bold '>Email</label>
            <input type="email" name='Email' placeholder='Enter Your Email' className='text-[#554075] rounded-[3px] border border-[#B298DC] w-[80vw] md:w-auto xl:w-[417px] p-3 ' />
            </div> 

        <div className='flex flex-col gap-3 '>
            <label htmlFor="Mobile" className='text-[#554075] font-bold '>Phone</label>
            <input type="tel" name='Mobile' placeholder='Enter Your Mobile No' className='text-[#554075] rounded-[3px] border border-[#B298DC] w-[80vw] md:w-auto xl:w-[417px] p-3 ' />
            </div> 

            <div className='flex flex-col gap-3 '>
            <label htmlFor="Subject" className='text-[#554075] font-bold '>Subject</label>
            <input type="text" name='Subject' placeholder='Enter Your Subject' className='text-[#554075] rounded-[3px] border border-[#B298DC] w-[80vw] md:w-auto xl:w-[417px] p-3 ' />
            </div> 
           
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

                            <PrimaryBtn className='items-center justify-center gap-3' >Send Message <ArrowRightCircleIcon size={18} /> </PrimaryBtn>

    </form>
    </div>
   </>
  )
}

export default ContactForm
