import React, { useState, useEffect } from 'react';
import PrimaryBtn from '../Buttons/PrimaryBtn';
import Clinic from '../../assets/Home/Clinic.svg';
import { Link } from 'react-router-dom';

function ExploreClinic() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add intersection observer to trigger animations when component is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    const element = document.getElementById('explore-clinic');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div 
      id="explore-clinic"
      className="flex lg:flex-row flex-col items-center justify-center gap-10 px-5 lg:px-10 xl:px-28 lg:justify-between py-16 overflow-hidden"
    >
      <div className={`flex flex-col order-2 lg:order-1 gap-5 transition-all delay-300 duration-1000 transform ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}>
        <h2 
          className="font-bold font-ElMessiri text-[#554075] leading-tight px-1 z-10  " 
          style={{fontSize: 'clamp(36px,4vw,55px)'}}
        >
          Radiance Clinic
        </h2>

        <p className={`xl:text-lg text-[#50535C] lg:w-[450px]  2xl:text-[1.5vw] 2xl:leading-tight 2xl:w-[44vw] xl:w-[575px] transition-all delay-300 duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          Radiance Skin Anti aging and Hair Transplant Clinic is a vision that was founded with the intention of delivering cutting-edge skin care and hair services. We understand that great skin and healthy hair adds a lot to the personality and boosts confidence! Under able hands of Dr. Nitin Barde, who is an expert in advanced skin treatment, rejuvenation and revision services as well as hair restoration and transplantation services, Radiance Clinic is growing to be the best in the field of cosmetic dermatology and treatments. Hair Transplant In Nagpur.
        </p>

        <div className={`transition-all duration-1000 delay-300 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <PrimaryBtn title='Explore Clinic' className="hover:scale-105 !p-0 !py-0 transition-transform">
                          <Link to="/clinic" className='p-4 py-3' >
            Explore Clinic
            </Link >
          </PrimaryBtn>
        </div>
      </div>

      <iframe width="560" height="315" className={`lg:max-w-[460px] 2xl:max-w-[43vw] md:h-[400px] lg:h-[315px] 2xl:h-[23vw] 2xl:aspect-video w-full order-1 lg:order-2 xl:max-w-[593px] transition-all duration-1000 transform hover:scale-[1.02] ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`} src="https://www.youtube.com/embed/9m_8Q2UZieA?si=rnhoelnH08bXrPak" title="YouTube video player"  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      
      {/* <img loading='lazy' width="auto" height="auto" 
        src={Clinic} 
        alt="" 
        className={`lg:max-w-[460px] order-1 lg:order-2 xl:max-w-[593px] transition-all duration-1000 transform hover:scale-[1.02] ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      /> */}
    </div>
  );
}

export default ExploreClinic;