import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WhitePlant from '../../assets/Aboutus/WhitePlant.svg';
import Leaf from '../../assets/SharedAssets/Leaf.svg';
import Whiteobject from '../../assets/SharedAssets/Whiteobject.svg';
import { TestimonialHomeHair, TestimonialHomeSkin, TestimonialHomeLaser } from '../Home/TestimonialHomeData';
import PrimaryBtn from '../Buttons/PrimaryBtn';
import BookInterest from './BookInterest';
import TestimonialCardNew from './TestimonialCardNew';

function HomeTestimonial() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedData, setSelectedData] = useState(TestimonialHomeHair);
  const [showPopup, setShowPopup] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [playingVideo, setPlayingVideo] = useState(null);
  const [activeCategory, setActiveCategory] = useState('hair');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('testimonial-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    fade: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
        },
      },
    ],
  };

  const handleCategoryChange = (category, data) => {
    setActiveCategory(category);
    setSelectedData(data);
  };

  return (
    <>
      <div className={`${showPopup ? 'block' : 'hidden'} backdrop-blur-2xl overflow-y-auto fixed bg-[#0000004b] z-[99999999999999] top-0 left-0 w-screen h-screen flex items-center justify-center transition-all duration-300`}>
        <BookInterest Showpopup={setShowPopup} />
      </div>
      
      <div id="testimonial-section" className="py-10 bg-[#FDF2FF] relative overflow-hidden">
        <div className="flex flex-col justify-center relative items-center  w-screen bg-[#FDF2FF]">
          {/* Background Images */}
          <img loading='lazy' width="auto" height="auto"
            src={WhitePlant}
            alt=""
            className={`absolute hidden md:block -bottom-20 xl:bottom-16 2xl:-bottom-8 left-0 mix-blend-plus-lighter max-w-[343px] z-0 transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}
          />
          <img loading='lazy' width="auto" height="auto"
            src={Leaf}
            alt=""
            className={`absolute md:right-20 top-1/2 right-0 md:top-36 lg:top-28 xl:top-20 max-w-[343px] z-0 transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            } animate-float`}
          />
          <img loading='lazy' width="auto" height="auto"
            src={Whiteobject}
            alt=""
            className={`absolute bottom-5 right-[10vw] lg:right-[20vw] xl:right-[30vw] md:bottom-20 lg:bottom-7 xl:bottom-24 max-w-[200px] z-0 transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            } `}
          />

          {/* Header Section */}
          <div className={`flex flex-col justify-center mb-10 items-center gap-5 transition-all delay-300 duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h2 className="font-bold font-ElMessiri text-[#554075] leading-tight text-center px-1 z-10" 
                style={{ fontSize: 'clamp(36px,4vw,55px)' }}>
              What Our Patients Say
            </h2>
            <p className="text-sm sm:text-base w-[97%] md:w-[80%] lg:w-[60%] xl:w-[60%] text-center text-[#554075] z-10">
              Here are some of the reviews that our patients gave us according to our treatments on Google
            </p>
          </div>

          {/* Testimonial Slider */}
          <div className={`w-full md:px-32 lg:px-12 transition-all delay-300 duration-700 transform ${
            isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}>
            <Slider className=' sm:h-[600px] md:h-[450px] lg:h-[440px] 2xl:h-full px-7 md:px-0' {...sliderSettings}>
              {selectedData.map((data, index) => (
                <TestimonialCardNew
                  key={index}
                  data={data}
                  index={index}
                  playingVideo={playingVideo}
                  setPlayingVideo={setPlayingVideo}
                  hoveredIndex={hoveredIndex}
                  setHoveredIndex={setHoveredIndex}
                  setShowPopup={setShowPopup}
                />
              ))}
            </Slider>
          </div>
          
          {/* <div className={`flex gap-5 z-10 transition-all duration-1000 delay-500 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <PrimaryBtn 
              onClick={() => handleCategoryChange('hair', TestimonialHomeHair)} 
              className={`w-24 items-center justify-center transition-all duration-300 hover:scale-105 ${
                activeCategory === 'hair' ? 'ring-4 ring-purple-300' : ''
              }`}
            >
              Hair
            </PrimaryBtn>
            <PrimaryBtn 
              onClick={() => handleCategoryChange('skin', TestimonialHomeSkin)} 
              className={`w-24 items-center justify-center transition-all duration-300 hover:scale-105 ${
                activeCategory === 'skin' ? 'ring-4 ring-purple-300' : ''
              }`}
            >
              Skin
            </PrimaryBtn>
            <PrimaryBtn 
              onClick={() => handleCategoryChange('laser', TestimonialHomeLaser)} 
              className={`w-24 items-center justify-center transition-all duration-300 hover:scale-105 ${
                activeCategory === 'laser' ? 'ring-4 ring-purple-300' : ''
              }`}
            >
              Laser
            </PrimaryBtn>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default HomeTestimonial;