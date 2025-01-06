import React from 'react'
import BeforeAfterimg from '../../assets/Clinic/BeforeAfter.svg'
import PrimaryBtn from '../Buttons/PrimaryBtn'
import Appointment from '../../assets/SharedAssets/Appointment'

function BeforeAfter() {
  return (
   <>
    <div className='flex flex-col w-screen relative gap-10 px-2 md:px-4 lg:px-10 xl:px-16 my-10'>
   
    <h2
          className=" font-bold font-ElMessiri text-[#554075] leading-tight  px-1 z-10 "
          style={{ fontSize: "clamp(36px,4vw,55px)" }}
        >
          Before & After
        </h2>

        <img src={BeforeAfterimg} alt="" className='w-full' />
        <PrimaryBtn className='items-center rounded-full !w-12 lg:!w-16 p-0 !h-12 lg:!h-16 justify-center absolute right-3 md:right-14 bottom-2 flex xl:hidden'><Appointment size={'24px'} /></PrimaryBtn>
        <PrimaryBtn className='items-center justify-center absolute right-20 bottom-0 xl:bottom-7 hidden xl:flex'>Book Appointment <Appointment size={'24px'} /></PrimaryBtn>

    </div>
   </>
  )
}

export default BeforeAfter
