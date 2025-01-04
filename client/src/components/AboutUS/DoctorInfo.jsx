import React from 'react'
import InfoCard from './InfoCard'
import AwardsAndAchievements from './AwardsAndAchievements'

function DoctorInfo({Photo,Name,Position,CardPosition,info,AwardsData,AwardImage,facebook,instagram,youtube}) {
  return (
   <>
   <div className='flex flex-col lg:flex-row gap-10 lg:gap-0 items-center lg:items-start lg:justify-between w-screen min-h-screen px-5 md:px-10 xl:px-14 pt-20 '>
    <InfoCard Photo={Photo} Name={Name} CardPosition={CardPosition} facebook={facebook}  instagram={instagram} youtube={youtube} />

    <div className='flex flex-col gap-3 lg:max-w-[44rem] xl:max-w-5xl'>

        <div className='flex flex-col  gap-3 lg:pl-6 '>
        <h2 className=" font-bold font-ElMessiri text-[#554075] leading-tight" style={{fontSize:'clamp(36px,5vw,60px)'}}>{Name}</h2>
        <p className='text-[#B2A6CE]  font-semibold ' style={{fontSize:'clamp(18px,1.5vw,22px)'}}>{Position}</p>
           {info.map((data,index)=>(
                    <p key={index} className=' text-[#50535C]  ' >{data}</p>
                )) }
        

        </div>

    <AwardsAndAchievements AwardsData={AwardsData} AwardImage={AwardImage} />

    </div>
   </div>
   </>
  )
}

export default DoctorInfo
