import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import SlidingBanner from '../components/AllServices/SlidingBanner';
import Servicescarousel from '../components/servicespage/servicescarousel';

function Services(category) {
  return (
    <div>
      <Navbar />
      <SlidingBanner category={category} ></SlidingBanner>
      <Servicescarousel/>
      <Footer></Footer>
    </div>
  );
}

export default Services;
