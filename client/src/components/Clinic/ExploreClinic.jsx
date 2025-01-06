import React from 'react'
import Reception from '../../assets/Clinic/Reception.svg'
import OperationTheater from '../../assets/Clinic/OperationTheater.svg'
import Operation2 from '../../assets/Clinic/Operation2.svg'
import Image3 from '../../assets/Clinic/Image3.svg'
function ExploreClinic() {
  return (
   <>
        <div className='flex flex-col justify-center gap-8 my-10  w-screen px-4 md:px-8 lg:px-16'>
        <h2
          className=" font-bold font-ElMessiri text-[#554075] leading-tight  px-1 z-10 "
          style={{ fontSize: "clamp(36px,4vw,55px)" }}
        >
          Explore The Clinic
        </h2>

        <div className='grid grid-cols-3 gap-2 md:gap-4 lg:gap-5 w-full '>
            <div className='col-span-2 w-fit h-fit'><img src={Reception} alt="" className='object-cover' /></div>
            <div className='w-fit h-fit'><img src={OperationTheater} alt="" className='object-cover' /></div>
            <div className=' w-fit h-fit'><img src={Image3} alt="" className='object-cover' /></div>
            <div className='col-span-2 w-fit h-fit'><img src={Operation2} alt="" className='object-cover' /></div>
        </div>
        </div>
   </>
  )
}

export default ExploreClinic
