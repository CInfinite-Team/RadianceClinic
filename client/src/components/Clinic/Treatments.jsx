import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import PrimaryBtn from '../Buttons/PrimaryBtn';
import Appointment from '../../assets/SharedAssets/Appointment';
import { treatmentClinic } from './TreatmentClinic';
import SecondaryBtn from '../Buttons/SecondaryBtn';

function Treatments() {
  const videoRef = useRef(null);
  const [currentData, setCurrentData] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Memoize the change image function to avoid unnecessary re-creation
  const ChangeImg = useCallback(() => {
    setCurrentData((prev) => (prev === treatmentClinic.length - 1 ? 0 : prev + 1));
  }, []);

  // Start image carousel effect
  useEffect(() => {
    const interval = setInterval(ChangeImg, 3000);
    return () => clearInterval(interval); // Clean up on unmount
  }, [ChangeImg]);

  // Intersection observer for element visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Disconnect after it's visible
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Memoize current clinic data to avoid recalculating on every render
  const currentClinicData = useMemo(() => treatmentClinic[currentData], [currentData]);

  return (
    <div ref={videoRef} className='flex flex-col gap-10 px-2 md:px-4 lg:px-10 xl:px-16 my-10'>
      <h2
        className={`font-bold font-ElMessiri text-[#554075] leading-tight px-1 z-10 transition-all delay-500 duration-700 ease-out ${
          isVisible ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ fontSize: 'clamp(36px,4vw,55px)' }}
      >
        Treatments
      </h2>

      <div className='flex flex-col lg:flex-row gap-5 2xl:justify-between xl:gap-10'>
        <div
          className={`w-full lg:w-[60%] xl:w-1/2 relative transition-all duration-700 delay-200 ease-out ${
            isVisible ? 'translate-y-0' : '-translate-x-full'
          }`}
        >
          <img
            className='bg-black w-full h-full will-change-auto object-cover transition-transform duration-500 hover:scale-[1.02]'
            src={currentClinicData.Image}
            alt={currentClinicData.Heading}
            loading="lazy" // Lazy load image
          />
        </div>

        <div
          className={`flex flex-col bg-[#E2DBFF] p-5 2xl:p-10 gap-2 lg:max-w-[400px] xl:max-w-[573px] 2xl:max-w-[50vw] transition-all duration-700 delay-300 ease-out ${
            isVisible ? 'translate-y-0' : 'translate-x-full'
          }`}
        >
          <h3
            className={`font-ElMessiri text-[#554075] will-change-auto font-bold transition-all duration-500 ease-out ${
              isVisible ? 'translate-y-0' : 'translate-x-full'
            }`}
            style={{ fontSize: 'clamp(20px,3vw,100px)' }}
          >
            {currentClinicData.Heading}
          </h3>
          <p
            className={`text-[#554075] pb-2 2xl:pb-8 text-sm will-change-auto md:text-base xl:text-lg 2xl:text-[1.5vw] 2xl:leading-tight opacity-0 translate-y-2 transition-all duration-500 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : ''
            }`}
          >
            {currentClinicData.Description}
          </p>
          <div
            className={`opacity-0 flex gap-4 translate-y-2 transition-all duration-500 delay-600 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : ''
            }`}
          >
            <PrimaryBtn title='Book Your Appointment ' className='w-full md:w-fit items-center justify-center !p-0 !py-0 transition-transform duration-300'>
              <a href='/book-appointment' className='p-4 py-3 gap-2 2xl:p-5 flex items-center'>
                Book Your Appointment <Appointment size={'24px'} />
              </a>
            </PrimaryBtn>
            <SecondaryBtn title='Learn More' className='w-full md:w-fit items-center justify-center !p-0 !py-0 transition-transform duration-300'>
              <a href={currentClinicData.Href} className='p-4 py-3 gap-2 2xl:p-5 flex items-center'>
                Learn More
              </a>
            </SecondaryBtn>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Treatments;
