import React, { useState, useEffect, useRef } from 'react';
import InfoCard from './InfoCard';
import AwardsAndAchievements from './AwardsAndAchievements';

function DoctorInfo({
  Photo, Name, Position, CardPosition, info, AwardsData, AwardImage, facebook, instagram, youtube
}) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Trigger when at least 50% of the element is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center lg:items-start lg:justify-between w-screen min-h-screen px-5 md:px-10 xl:px-14 pt-20">
      
      {/* InfoCard */}
      <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
        <InfoCard 
          Photo={Photo} 
          Name={Name} 
          CardPosition={CardPosition} 
          facebook={facebook}  
          instagram={instagram} 
          youtube={youtube} 
        />
      </div>

      {/* Doctor Info */}
      <div className={`flex flex-col gap-3 lg:max-w-[44rem] xl:max-w-5xl transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
        
        <div className='flex flex-col gap-3 lg:pl-6'>
          <h2 className={`font-bold font-ElMessiri text-[#554075] leading-tight transition-all duration-1000 ${isVisible ? 'animate-fadeIn' : ''}`} style={{fontSize:'clamp(36px,5vw,60px)'}}>
            {Name}
          </h2>
          <p className={`text-[#B2A6CE] font-semibold transition-all duration-1000 ${isVisible ? 'animate-fadeIn animation-delay-200' : ''}`} style={{fontSize:'clamp(18px,1.5vw,22px)'}}>
            {Position}
          </p>
          
          {info.map((data, index) => (
            <p key={index} className={`text-[#50535C] transition-all duration-1000 ${isVisible ? 'animate-fadeIn animation-delay-400' : ''}`}>
              {data}
            </p>
          ))}
        </div>

        <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
          <AwardsAndAchievements AwardsData={AwardsData} AwardImage={AwardImage} />
        </div>
      </div>
    </div>
  );
}

export default DoctorInfo;
