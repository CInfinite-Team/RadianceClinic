import React, { useEffect, useState } from 'react'
import { QuickLinkData } from './QuickLinkData'
import HeroSectionAll from '../SharedComponents/HeroSectionAll';
import AppointmentForm from '../Appointment/AppointmentForm';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { useLocation } from 'react-router-dom';
function QuickLinkDescription() {

  const [Data,setData]=useState([null])
  const location = useLocation();
  useEffect(() => {
    const currentPath = location.pathname;

    Object.keys(QuickLinkData).forEach((city) => {
      QuickLinkData[city].forEach((linkData) => {
        if (currentPath.includes(linkData.href)) {
          setData(linkData);
        }
      });
    });
  }, [location]);
  return (
    <>
    <Navbar/>
    <HeroSectionAll Title={'Book Your Appointment'} Path={'Home'} SubPath={'Book Your Appointment'} />
    <AppointmentForm/>
    <div className='bg-[#fef7ff] py-24 px-4 md:px-4 xl:px-20'>
    <h1 className='font-ElMessiri text-[#554075] text-center font-bold leading-tight animate-fadeIn' style={{ fontSize: 'clamp(36px,6vw,60px)' }}>
            {Data.text}
            </h1>
       <p className='font-semibold text-center text-[#392c4e]'>{Data.description}</p>
    </div>
    <Footer/>
    </>
  )
}

export default QuickLinkDescription
