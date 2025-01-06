import React from 'react'
import PrimaryBtn from '../Buttons/PrimaryBtn'
import Appointment from '../../assets/SharedAssets/Appointment'

function Treatments() {
  return (
    <>
    <div className='flex flex-col gap-10 px-2 md:px-4 lg:px-10 xl:px-16 my-10'>
    <h2
          className=" font-bold font-ElMessiri text-[#554075] leading-tight  px-1 z-10 "
          style={{ fontSize: "clamp(36px,4vw,55px)" }}
        >
          Treatments
        </h2>
        
        <div className='flex flex-col  lg:flex-row gap-5 xl:gap-10'>
            
            <video className='bg-black w-full lg:w-[60%] xl:w-1/2 aspect-video' src=""></video>

            <div className='flex flex-col bg-[#E2DBFF] p-5 gap-2 lg:max-w-[400px] xl:max-w-[573px]'>
                <h4 className='font-ElMessiri text-[#554075] font-bold' style={{fontSize:'clamp(20px,3vw,42px)'}}>Hair Treatment</h4>
                    <p className='text-[#554075] pb-2 text-sm md:text-base xl:text-lg' >Hair treatment can be a transformative experience, boosting both confidence and appearance. With the right care and attention, hair treatments restore shine, strength, and vitality to dull or damaged hair. Whether it's through nourishing masks, deep conditioning, or specialized treatments, healthy, vibrant hair becomes a reality. These treatments not only help in repairing damage caused by styling, heat, or environmental factors but also prevent future breakage, leaving hair softer, smoother, and more manageable. Embracing hair treatment is an investment in self-care.</p>
                    <PrimaryBtn className='w-full md:w-fit items-center justify-center'>Book Appointment  <Appointment size={'24px'} /></PrimaryBtn>

            </div>

        </div>



    </div>
    </>
  )
}

export default Treatments
