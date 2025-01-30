import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import SlidingBanner from '../components/AllServices/SlidingBanner';
import Servicescarousel from '../components/servicespage/servicescarousel';
import { Hairtreatments,Skintreatments } from '../components/servicespage/Treatments';
import PrimaryBtn from '../components/Buttons/PrimaryBtn';
import Testimonial from '../components/SharedComponents/Testimonial';

function Services(category) {
  return (
    <div>
      <Navbar />
      <SlidingBanner category={category} />
      <div className=' px-5 lg:px-10 gap-10 py-20'>
      <h1 className='font-ElMessiri text-[#554075] font-bold leading-tight text-left' style={{fontSize:'clamp(36px,6vw,60px)'}}>Services that we offer</h1>

      <Servicescarousel Data={Hairtreatments} Title={'HAIR'} />
      <Servicescarousel Data={Skintreatments} Title={'SKIN'} />
      <PrimaryBtn className='mx-auto mt-10'> Explore Our Services </PrimaryBtn>
      </div>

      <Testimonial/>

      <Footer></Footer>
    </div>
  );
}

export default Services;
