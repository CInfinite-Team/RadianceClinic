import React from 'react'
import HeroSectionAll from '../SharedComponents/HeroSectionAll';
import AppointmentForm from '../Appointment/AppointmentForm';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

function QuickLinkDescription() {
    const urlParams = new URLSearchParams(location.search);
    // const treatmentData = JSON.parse(urlParams.get('Data'));
    const Description = urlParams.get('Description');
    const Title = urlParams.get('Title');
  return (
    <>
    <Navbar/>
    <HeroSectionAll Title={'Appoitnment'} Path={'Home'} SubPath={'Appoitnment'} />
    <AppointmentForm/>
    <div className='bg-[#fef7ff] py-24 px-4 md:px-4 xl:px-20'>
    <h1 className='font-ElMessiri text-[#554075] text-center font-bold leading-tight animate-fadeIn' style={{ fontSize: 'clamp(36px,6vw,60px)' }}>
            {Title}
            </h1>
       <p className='font-semibold text-center text-[#392c4e]'>{Description}</p>
    </div>
    <Footer/>
    </>
  )
}

export default QuickLinkDescription
