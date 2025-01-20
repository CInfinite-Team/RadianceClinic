import React from 'react'
import PrimaryBtn from '../Buttons/PrimaryBtn'
import Clinic from '../../assets/Home/Clinic.svg'

function ExploreClinic() {
  return (
   <>
   
    <div className='flex lg:flex-row flex-col items-center  justify-center gap-10 px-5 lg:px-10 xl:px-28 lg:justify-between py-16'>

        <div className='flex flex-col order-2 lg:order-1 gap-5'>

        <h2 className=" font-bold font-ElMessiri text-[#554075] leading-tight px-1 z-10 " style={{fontSize:'clamp(36px,4vw,55px)'}}>
        Radiance Clinic
        </h2>

        <p className='xl:text-lg text-[#50535C]  lg:w-[450px] xl:w-[575px] '>
        Radiance Skin Anti aging and Hair Transplant Clinic is a vision that was founded with the intention of delivering cutting-edge skin care and hair services. We understand that great skin and healthy hair adds a lot to the personality and boosts confidence! Under able hands of Dr. Nitin Barde, who is an expert in advanced skin treatment, rejuvenation and revision services as well as hair restoration and transplantation services, Radiance Clinic is growing to be the best in the field of cosmetic dermatology and treatments. Hair Transplant In Nagpur.
        </p>

        <PrimaryBtn>Explore Clinic</PrimaryBtn>

        </div>

        <img src={Clinic} alt="" className=' lg:max-w-[460px] order-1 lg:order-2 xl:max-w-[593px]' />

    </div>

   </>
  )
}

export default ExploreClinic
