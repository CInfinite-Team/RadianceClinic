import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import SlidingBanner from '../components/AllServices/SlidingBanner';

function Services() {
  return (
    <div>
      <Navbar />
      <SlidingBanner></SlidingBanner>
      <Footer></Footer>
    </div>
  );
}

export default Services;
