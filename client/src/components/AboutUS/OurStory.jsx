import React from 'react'
import { para } from './Paragraph'
import Logo from '../../assets/SharedAssets/Logo.png'
import GrayFlower from '../../assets/SharedAssets/GrayFlower.svg'
import PrimaryBtn from '../Buttons/PrimaryBtn'
import Appointment from '../../assets/SharedAssets/Appointment'

function OurStory() {
  return (
    <>
        <div className='flex flex-col lg:flex-row justify-between items-center relative min-h-screen w-screen px-5 md:px-10 xl:px-14 pt-20 pb-10 bg-[#FCEBFF]'>
        
        <div className='flex flex-col gap-8  order-2 lg:order-1'>

           <div className='flex flex-col'>
            <h1 className='font-ElMessiri text-[#554075] font-bold leading-tight' style={{fontSize:'clamp(36px,6vw,60px)'}}>Our Story</h1>
            <p className='text-[#B2A6CE] font-Inter font-semibold' style={{fontSize:'clamp(18px,1.5vw,25px)'}}>Our Journey Towards Excellence</p>
            </div> 
            {para.map((data,index)=>(
            <p key={index} className='lg:w-[50vw] font-Inter text-[#50535C] xl:text-[18px] lg:text-base ' >{data}</p>
        )) }

        <PrimaryBtn>Book Appointment <Appointment size={'24px'} /> </PrimaryBtn>

        </div>

        <div className=' px-10 pb-20 lg:p-20 z-10 order-1 lg:order-2'>
            <img src={Logo} alt="" className='w-[317px] ' />
        </div>
        
        <img src={GrayFlower} alt="" className='absolute bottom-0 right-0 z-0 max-w-[300px] ' />

        </div>
    </>
  )
}

export default OurStory
