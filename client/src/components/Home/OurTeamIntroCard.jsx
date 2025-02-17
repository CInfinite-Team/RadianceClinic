import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PrimaryBtn from '../Buttons/PrimaryBtn';
import Appointment from '../../assets/SharedAssets/Appointment';
import TiledArrow from '../../assets/SharedAssets/TiledArrow.svg';
import Instagram from '../../assets/Home/Instagram.svg';
import Facebook from '../../assets/Home/Facebook.svg';
import Youtube from '../../assets/Home/Youtube.svg';
import GrayFlower from '../../assets/SharedAssets/GrayFlower.svg';
import PurpleCircle from '../../assets/SharedAssets/PurpleCircle.svg';

function OurTeamIntroCard({ Data }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`team-card-${Data.name}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [Data.name]);

  return (
    <div 
      id={`team-card-${Data.name}`}
      className='flex flex-col lg:flex-row items-center gap-6 relative justify-between bg-[#FDF2FF] px-3 md:px-10 py-16 rounded-lg transition-all duration-300 hover:shadow-xl'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`flex flex-col gap-8 order-2 lg:order-1 transition-all duration-700 transform ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}>
        <div className='flex flex-col'>
          <h2 
            className='font-ElMessiri text-[#554075] font-bold leading-tight mb-2 ' 
            style={{fontSize:'clamp(36px,6vw,60px)'}}
          >
            {Data.name}
          </h2>
          <p 
            className='text-[#B2A6CE] font-Inter font-semibold mb-8 transition-all duration-500' 
            style={{fontSize:'clamp(18px,1.5vw,22px)'}}
          >
            {Data.position}
          </p>
          
          {Data.description.map((desc, index) => (
            <p 
              key={index}
              className={`max-w-[640px] xl:max-w-[740px] text-[#50535C] mb-6 text-sm md:text-base xl:text-lg transition-all duration-500 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {desc}
            </p>
          ))}
        </div>

        <div className={`flex items-center flex-wrap gap-5 transition-all duration-700 delay-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
           <PrimaryBtn className="hover:scale-105 !p-0 !py-0 z-10 transition-transform">
                        <Link to='/book-appointment' className='p-4 py-3 flex'> Book Appointment <Appointment size={'24px'} />  </Link>
                        </PrimaryBtn>
          <a href='/about-us' className="p-4 rounded-full bg-white hover:rotate-45 transition-transform duration-500">
                                     <img width="auto" loading='lazy' height="auto" src={TiledArrow} alt="" />
        </a>
          <div className='flex gap-4 items-center'>
            <p className='text-lg font-semibold text-[#7E719E]'>Follow :</p>
            <a href={Data.InsagramLink} className="hover:scale-110 hover:-translate-y-1 duration-500 transition-transform">
              <img loading='lazy' width="auto" height="auto" src={Instagram} alt="" className='w-6' />
            </a>
            <a href={Data.FacebookLink} className="hover:scale-110 hover:-translate-y-1 duration-500 transition-transform">
              <img loading='lazy' width="auto" height="auto" src={Facebook} alt="" className='w-6' />
            </a>
            <a href={Data.YoutubeLink} className="hover:scale-110 hover:-translate-y-1 duration-500 transition-transform">
              <img loading='lazy' width="auto" height="auto" src={Youtube} alt="" className='w-7' />
            </a>
          </div>
        </div>
      </div>

      <img loading='lazy' width="auto" height="auto" 
        src={Data.Image} 
        alt="" 
        className={`z-[0] md:max-w-[78%] lg:max-w-[300px] xl:max-w-[430px] order-1 lg:order-2  transition-all duration-700 transform hover:scale-105 ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      />
      
      <img loading='lazy' width="auto" height="auto" 
        src={GrayFlower} 
        alt="" 
        className={`absolute bottom-0 right-0 z-0 max-w-[250px] transition-all duration-1000 ${
          isHovered ? 'rotate-180' : 'rotate-0'
        } animate-float`}
      />
      
      <img loading='lazy' width="auto" height="auto" 
        src={PurpleCircle} 
        alt="" 
        className={`absolute hidden lg:block bottom-20 2xl:bottom-16 lg:right-72 xl:right-[430px] 2xl:right-[500px] z-0 max-w-[100px] transition-all duration-700 ${
          isHovered ? 'scale-150' : 'scale-100'
        } animate-pulse`}
      />
    </div>
  );
}

export default OurTeamIntroCard;