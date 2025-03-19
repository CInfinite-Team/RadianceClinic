import React, {useState,useEffect, useRef } from 'react'
import BeforeAfterimg from '../../assets/Clinic/BeforeAfter.svg'
import PrimaryBtn from '../Buttons/PrimaryBtn'
import Appointment from '../../assets/SharedAssets/Appointment'


function BeforeAfter() {


  const Divref=useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
     const observer = new IntersectionObserver(
       ([entry]) => {
         if (entry.intersectionRatio >= 0.2) {
           setIsVisible(true);
           observer.disconnect();
         }
       },
       {
         threshold: 0.2, 
       }
     );
 
     if (Divref.current) {
       observer.observe(Divref.current);
     }
 
     return () => observer.disconnect();
   }, []);

  return (
   <>
    <div ref={Divref} className={`flex flex-col w-screen relative gap-10 px-2 md:px-4 lg:px-10 xl:px-16 my-10 duration-700 delay-500 transition-all ${isVisible ? 'opacity-100' : 'opacity-0' } `}>
   
    <h2
          className=" font-bold font-ElMessiri text-[#554075] leading-tight  px-1 z-10 "
          style={{ fontSize: "clamp(36px,4vw,55px)" }}
        >
          Before & After
        </h2>

        <img loading='lazy' width="auto" height="auto" src={BeforeAfterimg} alt="" className='w-full' />
        <PrimaryBtn title='Book Your Appointment' className='items-center rounded-full !w-12 lg:!w-16 !p-0 !h-12 lg:!h-16 justify-center absolute right-3 md:right-14 bottom-2 flex xl:hidden'> <a href='/book-appointment' className='p-4 py-3 gap-2 flex'><Appointment size={'24px'} />  </a></PrimaryBtn>
        <PrimaryBtn title='Book Your Appointment ' className='items-center justify-center absolute !p-0 !py-0 right-20 bottom-0 xl:bottom-7 hidden xl:flex'> <a href='/book-appointment' className='p-4 py-3 gap-2 flex'> Book Appointment <Appointment size={'24px'} />  </a></PrimaryBtn>

    </div>
   </>
  )
}

export default BeforeAfter
