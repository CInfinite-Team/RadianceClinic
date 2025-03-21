import React from 'react';
import { para } from './Paragraph';
import Logo from "../../assets/logo.svg";
import GrayFlower from '../../assets/SharedAssets/GrayFlower.svg';
import PrimaryBtn from '../Buttons/PrimaryBtn';
import Appointment from '../../assets/SharedAssets/Appointment';

function OurStory() {
  return (
    <>
      <div className='flex flex-col lg:flex-row justify-between items-center relative min-h-screen 2xl:min-h-fit 2xl:py-20 w-screen px-5 md:px-10 xl:px-14 pt-20 pb-10 bg-[#FCEBFF]'>
        
        <div className='flex flex-col gap-8 order-2 lg:order-1'>
          <div className='flex flex-col'>
            <h2 className='font-ElMessiri text-[#554075] font-bold leading-tight animate-fadeIn' style={{ fontSize: 'clamp(36px,6vw,60px)' }}>
              Our Story
            </h2>
            <p className='text-[#B2A6CE] font-Inter font-semibold animate-fadeIn animation-delay-200' style={{ fontSize: 'clamp(18px,1.5vw,40px)' }}>
              Our Journey Towards Excellence
            </p>
          </div>

          {para.map((data, index) => (
            <p key={index} className='lg:w-[50vw] 2xl:w-[60vw] font-Inter text-[#50535C] lg:text-base 2xl:text-3xl animate-fadeIn animation-delay-400'>
              {data}
            </p>
          ))}

<PrimaryBtn title='Book Your Appointment' className="hover:scale-105 animate-fadeIn animation-delay-600 !p-0 !py-0 z-10 transition">
                        <a href='/book-appointment' className='p-4 py-3 gap-2 flex 2xl:py-5'> Book Appointment <Appointment size={'24px'} />  </a>
                        </PrimaryBtn>
        </div>

        <div className='px-10 pb-20 lg:p-20 z-10 order-1 lg:order-2'>
          <img loading='lazy' width="auto" height="auto" src={Logo} alt="" className='w-[317px] 2xl:w-[417px] animate-fadeIn animation-delay-800' />
        </div>

        <img loading='lazy' width="auto" height="auto" src={GrayFlower} alt="" className='absolute bottom-0 right-0 z-0 max-w-[300px] 2xl:max-w-[500px] 2xl:!w-[500px] animate-fadeIn animation-delay-1000' />
      </div>
    </>
  );
}

export default OurStory;
