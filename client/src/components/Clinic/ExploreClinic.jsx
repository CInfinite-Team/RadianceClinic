import React, { useState, useEffect } from 'react';
import Reception from '../../assets/Clinic/Reception.svg';
import OperationTheater from '../../assets/Clinic/OperationTheater.svg';
import Operation2 from '../../assets/Clinic/Operation2.svg';
import Image3 from '../../assets/Clinic/Image3.svg';

const ExploreClinic = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`flex flex-col justify-center gap-8 my-10 w-screen px-4 md:px-8 lg:px-16 opacity-0 translate-y-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}>
      <h2
        className={`font-bold font-ElMessiri text-[#554075] leading-tight px-1 z-10 opacity-0 translate-y-4 transition-all duration-700 delay-100 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}
        style={{ fontSize: "clamp(36px,4vw,55px)" }}
      >
        Explore The Clinic
      </h2>

      <div className="grid grid-cols-3 gap-2 md:gap-4 lg:gap-5 w-full">
        <div 
          className={`col-span-2 w-fit h-fit opacity-0 translate-y-4 transition-all duration-700 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}
        >
          <img 
            src={Reception} 
            alt="Reception" 
            className="object-cover transition-transform duration-300 hover:z-50  hover:scale-105" 
          />
        </div>
        
        <div 
          className={`w-fit h-fit opacity-0 translate-y-4 transition-all duration-700 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}
        >
          <img 
            src={OperationTheater} 
            alt="Operation Theater" 
            className="object-cover transition-transform duration-300 hover:z-50  hover:scale-105" 
          />
        </div>
        
        <div 
          className={`w-fit h-fit opacity-0 translate-y-4 transition-all duration-700 delay-400 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}
        >
          <img 
            src={Image3} 
            alt="Clinic Image" 
            className="object-cover transition-transform duration-300 hover:z-50  hover:scale-105" 
          />
        </div>
        
        <div 
          className={`col-span-2 w-fit h-fit opacity-0 translate-y-4 transition-all duration-700 delay-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : ''}`}
        >
          <img 
            src={Operation2} 
            alt="Operation Room" 
            className="object-cover transition-transform duration-300 hover:z-50 hover:scale-105" 
          />
        </div>
      </div>
    </div>
  );
};

export default ExploreClinic;