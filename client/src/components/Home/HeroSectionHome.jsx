import {useState,useEffect} from 'react'
import PrimaryBtn from '../Buttons/PrimaryBtn'
import SecondaryBtn from '../Buttons/SecondaryBtn'
import Appointment from '../../assets/SharedAssets/Appointment'
import HeroImg1 from '../../assets/Home/HeroImg1.svg'
import HeroImg2 from '../../assets/Home/HeroImg2.svg'
import HeroImg3 from '../../assets/Home/HeroImg3.svg'
import Plant from '../../assets/Home/plant.png'
import sparkling from '../../assets/Home/sparkling.svg'
import TiledArrow from '../../assets/SharedAssets/TiledArrow.svg'

function HeroSectionHome() {
    const [currentimg,setCurrentimg] = useState(0);
    const Images =[HeroImg1,HeroImg2,HeroImg3];

    useEffect(() => {
      const interval = setInterval(ChangeImg, 2500);
      return () => clearInterval(interval);
  }, [currentimg]); 

  function ChangeImg() {
      setCurrentimg((prev) => (prev === Images.length - 1 ? 0 : prev + 1));
  }

  return (
    <>
    <div className='w-screen  min-h-screen HeroGradient  flex justify-end md:items-end'>
        <img src={Plant} alt="" className='absolute hidden lg:block w-[250px] xl:w-auto 2xl:w-[190px] top-10 left-6  xl:top-7 2xl:top-14 xl:left-20' />
        <img src={sparkling} alt="" className='absolute hidden lg:block 2xl:w-[80px] top-48 2xl:top-44 left-1/2 -translate-x-28' />
       <div className='flex flex-col lg:flex-row relative justify-between w-full ml-5 xl:ml-20 2xl:ml-36 items-center gap-4 '>
        <div className='flex flex-col mt-32  lg:-translate-y-[30%] xl:-translate-y-[20%] 2xl:-translate-y-[12%] gap-11'>
            <div className='flex flex-col gap-4 justify-center md:items-start'>
            <h1 className='font-ElMessiri text-[#52436A] font-bold text-center lg:text-left leading-[40px] md:leading-[70px] lg:leading-[80px] xl:leading-[91px] text-[45px] md:text-[70px] xl:text-[90px] 2xl:text-[98px] ' >
            Beauty redefined,<br /> care <span className="underline-text font-ElMessiri leading-[40px]">perfected</span>.
            </h1>

            <p className=' max-w-[90vw] mx-auto md:mx-0 md:max-w-[520px] xl:max-w-[680px] text-[#7E7E7E] font-Inter text-[16px] xl:text-[19px] text-center lg:text-left ' >The most common treatment area for fat grafting is the face. Fat may be injected into several areas to restore youthful volume and contours, while also rejuvenating the skin.</p>

            </div>

            <div className='flex flex-col md:flex-row gap-7 items-center '>
                <PrimaryBtn>Book Appointment  <Appointment size={'24px'} /></PrimaryBtn>
                <SecondaryBtn>Explore Skin Treatment</SecondaryBtn>
                <button className='p-4 rounded-full bg-white'><img src={TiledArrow} alt="" /></button>
            </div>

            <div className="flex md:mx-16 lg:mx-0 lg:static translate-x-[8vw] md:translate-x-0 absolute bottom-5 items-center gap-2">
              {Array.from({ length: Images.length }).map((_, index) => (
                <div
                onClick={() => setCurrentimg(index)}
                  key={index}
                  className={`h-1 w-20 md:w-28 rounded-full cursor-pointer transition-all ${index === currentimg ? 'bg-[#9A73B3]' : 'bg-white '} `}
                />
              ))}
            </div>

        </div>
        <img src={Images[currentimg]} loading='eager'  alt="" className={` max-w-[100vw]  md:max-w-[31rem]   will-change-auto lg:max-w-[73vh] xl:max-w-[73vh]  right-0 lg:absolute lg:-right-20 xl:right-0 bottom-0 md:translate-x-[30%] lg:!translate-x-0 -z-10 2xl:max-w-[36rem] ${ currentimg === 2 || currentimg === 1  ? 'md:max-w-[55%] lg:!max-w-[59vh] lg:right-0 md:!translate-x-[41%] lg:translate-x-0 2xl:!max-w-[30rem] xl:!max-w-[60vh]':''} ` }/>
        </div>
      
    </div>
    </>
  )
}

export default HeroSectionHome
