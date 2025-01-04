import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import SlidingBanner from '../components/AllServices/SlidingBanner';

function Services(category) {
  return (
    <div>
      <Navbar />
      <SlidingBanner category={category} ></SlidingBanner>
      <Footer></Footer>
    </div>
  );
}

export default Services;
