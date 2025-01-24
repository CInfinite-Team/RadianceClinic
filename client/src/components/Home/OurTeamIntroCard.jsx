import React from 'react'
import PrimaryBtn from '../Buttons/PrimaryBtn'

import Appointment from '../../assets/SharedAssets/Appointment'
import TiledArrow from '../../assets/SharedAssets/TiledArrow.svg'
import Instagram from '../../assets/Home/Instagram.svg'
import Facebook from '../../assets/Home/Facebook.svg'
import Youtube from '../../assets/Home/Youtube.svg'
import GrayFlower from '../../assets/SharedAssets/GrayFlower.svg'
import PurpleCircle from '../../assets/SharedAssets/PurpleCircle.svg'

function OurTeamIntroCard({Data}) {
  return (
   <>
    <div className='flex flex-col lg:flex-row items-center relative justify-between bg-[#FDF2FF] px-3 md:px-10 py-16'>

    <div className='flex flex-col gap-8  order-2 lg:order-1'>


{/* {NitinData.map((data,index)=>( */}
    <div  className='flex flex-col '>
 <h1  className='font-ElMessiri text-[#554075] font-bold leading-tight mb-2' style={{fontSize:'clamp(36px,6vw,60px)'}}>{Data.name}</h1>
 <p className='text-[#B2A6CE] font-Inter font-semibold mb-8' style={{fontSize:'clamp(18px,1.5vw,22px)'}}>{Data.position}</p>
 
{ Data.description.map((desc,index)=>(
    
 <p key={index}  className='max-w-[640px] xl:max-w-[740px] text-[#50535C] mb-6 text-sm md:text-base xl:text-lg ' >{desc}</p>


))}
</div>

<div className='flex items-center flex-wrap gap-5'>
 <PrimaryBtn className='z-10'>Book Appointment <Appointment size={'24px'} /> </PrimaryBtn>
  <button className='p-4 z-10 rounded-full bg-white'><img src={TiledArrow} alt="" /></button>
  <div className='flex gap-4 items-center'>
        <p className='text-lg font-semibold text-[#7E719E]  '>Follow :</p>
        <a href={Data.InsagramLink}><img src={Instagram} alt="" className='w-6' /></a>
        <a href={Data.FacebookLink}><img src={Facebook} alt="" className='w-6' /></a>
        <a href={Data.YoutubeLink}><img src={Youtube} alt="" className='w-7' /></a>
  </div>
</div>
</div>

<img src={Data.Image} alt="" className='z-[0] md:max-w-[80%] lg:max-w-[350px] xl:max-w-[450px] order-1 lg:order-2 -translate-y-14' />
        <img src={GrayFlower} alt="" className='absolute bottom-0 right-0 z-0 max-w-[250px] ' />
        <img src={PurpleCircle} alt="" className='absolute hidden lg:block bottom-20 2xl:bottom-16 lg:right-72 xl:right-[430px] 2xl:right-[500px] z-0 max-w-[100px] ' />

    </div>
   </>
  )
}

export default OurTeamIntroCard
