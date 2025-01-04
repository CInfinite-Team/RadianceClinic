import React from 'react'
import Plantall1 from '../../assets/SharedAssets/Plantall1.png'
import Plantall2 from '../../assets/SharedAssets/Plantall2.png'
function HeroSectionAll({Title,Path ,SubPath}) {
  return (
    <div className='AllheroGradient flex items-center justify-center relative w-screen overflow-hidden h-[60vh]'>
      <img src={Plantall1} alt="" className='absolute  top-0 left-0 max-w-[200px] md:max-w-[280px]' />
      <img src={Plantall2} alt="" className='absolute   -bottom-20 right-0 max-w-[180px] md:max-w-[200px]' />

        <div className='flex flex-col items-center justify-center '>
        <h1 className='font-ElMessiri text-[#554075] font-bold leading-tight mt-4 ' style={{fontSize:'clamp(36px,6vw,80px)'}}>{Title}</h1>
        <h1 className='font-Inter text-[#554075] leading-tight ' style={{fontSize:'clamp(18px,2vw,25px)'}}>{Path} / <span className='text-[#725B98]'>{SubPath}</span> </h1>
        </div>
    </div>
  )
}

export default HeroSectionAll
