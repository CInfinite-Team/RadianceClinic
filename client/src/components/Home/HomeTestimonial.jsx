import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InvertedComa from '../../assets/SharedAssets/InvertedComa.svg';
import WhitePlant from '../../assets/Aboutus/WhitePlant.svg';
import Leaf from '../../assets/SharedAssets/Leaf.svg';
import Whiteobject from '../../assets/SharedAssets/Whiteobject.svg';
import { TestimonialHomeHair, TestimonialHomeSkin, TestimonialHomeLaser } from '../Home/TestimonialHomeData';
import PrimaryBtn from '../Buttons/PrimaryBtn';
import BookInterest from './BookInterest';
import testimonial from '../../assets/SharedAssets/testimonial.svg';
import { Play, Pause } from 'lucide-react';

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
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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

  const handleVideoClick = (index, videoRef) => {
    if (playingVideo === index) {
      videoRef.current.pause();
      setPlayingVideo(null);
    } else {
      if (playingVideo !== null) {
        const prevVideo = document.querySelector(`#video-${playingVideo}`);
        if (prevVideo) prevVideo.pause();
      }
      videoRef.current.play();
      setPlayingVideo(index);
    }
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
        <div className="flex flex-col justify-center relative items-center md:min-h-screen w-screen bg-[#FDF2FF]">
          <img
            src={WhitePlant}
            alt=""
            className={`absolute hidden md:block -bottom-20 xl:bottom-16 2xl:-bottom-8 left-0 mix-blend-plus-lighter max-w-[343px] z-0 transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}
          />
          <img
            src={Leaf}
            alt=""
            className={`absolute md:right-20 top-1/2 right-0 md:top-36 lg:top-28 xl:top-20 max-w-[343px] z-0 transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            } animate-float`}
          />
          <img
            src={Whiteobject}
            alt=""
            className={`absolute bottom-5 right-[10vw] lg:right-[20vw] xl:right-[30vw] md:bottom-20 lg:bottom-7 xl:bottom-24 max-w-[200px] z-0 transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            } `}
          />

          <div className={`flex flex-col justify-center mb-10 items-center gap-5 transition-all delay-300 duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h2 className="font-bold font-ElMessiri text-[#554075] leading-tight text-center px-1 z-10 " 
                style={{ fontSize: 'clamp(36px,4vw,55px)' }}>
              What Our Patients Say
            </h2>
            <p className="text-sm sm:text-base w-[97%] md:w-[80%] lg:w-[60%] xl:w-[60%] text-center text-[#554075] z-10">
              Here are some of the reviews that our patients gave us according to our treatments on Google
            </p>
          </div>

          <div className={`w-full md:px-32 lg:px-12 transition-all delay-300 duration-700 transform ${
            isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}>
            <Slider className='sm:h-[650px] lg:h-[740px] px-7 md:px-0' {...sliderSettings}>
              {selectedData.map((data, index) => {
                const videoRef = React.createRef();
                return (
                  <div 
                    onMouseLeave={() => setHoveredIndex(null)}
                    key={index} 
                    className="flex flex-col relative rounded-[5px] group overflow-hidden z-20 border border-[#A287CF] bg-white max-w-[350px] lg:min-h-[600px] max-h-[600px] p-4 justify-center sm:ml-36 md:ml-20 mb-10 items-center transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                  >
                    <div className={`${hoveredIndex === index ? 'opacity-100 z-50' : ''} opacity-0 bg-[#fdf2ff39] justify-center flex transition-all duration-500 w-full left-0 top-0 h-full backdrop-blur-lg items-center absolute`}>
                      <button
                        onClick={() => setShowPopup(true)}
                        className="underline font-ElMessiri font-bold text-xl text-[#554075] hover:scale-110 transition-transform"
                      >
                        Register Interest
                      </button>
                    </div>
                  
                    <div className="w-[180px] h-[180px] md:w-[200px] md:h-[200px] lg:w-[260px] lg:h-[260px] mb-3 relative aspect-square mx-auto rounded-full transition-transform duration-300 hover:scale-105">
                      {data.video === '' ? (
                        <img src={testimonial} alt="" className="object-cover" />
                      ) : (
                        <div className='rounded-full relative overflow-hidden w-full h-full bg-black'>
                          <button 
                            onClick={() => handleVideoClick(index, videoRef)}
                            className='bg-[#ffffff86] p-2 rounded-full flex items-center justify-center top-1/2 z-30 left-1/2 cursor-pointer absolute -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 hover:scale-110'
                          >
                            <span className='bg-[#ffffff94] rounded-full w-12 h-12 flex items-center justify-center'>
                              {playingVideo === index ? <Pause color='white' /> : <Play color='white' />}
                            </span>
                          </button>

                          <video 
                            id={`video-${index}`}
                            ref={videoRef}
                            src={data.video} 
                            className="w-full h-full" 
                            muted 
                            onEnded={() => setPlayingVideo(null)}
                          />
                        </div>
                      )}

                      <div className="p-2 md:p-3 lg:p-4 rounded-full bg-white shadow-md absolute right-0 bottom-0 animate-bounce">
                        <img src={InvertedComa} alt="" className="w-8" />
                      </div>
                    </div>

                    <div className="flex flex-col mb-3" onMouseEnter={() => setHoveredIndex(index)}>
                      <h3 className="text-2xl font-bold md:text-4xl text-[#4d3c69] text-center font-ElMessiri z-10 hover:scale-105 transition-transform">{data.Treatment}</h3>
                      <p className="text-[#41335A] text-center text-xl font-ElMessiri font-bold z-10">{data.Name}</p>
                      <p className="text-[#554075] text-center z-10">{data.Position}</p>
                      <p className="text-[#554075] text-center mt-3 z-10">''{data.Review}''</p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>

          <div className={`flex gap-5 z-10 transition-all duration-1000 delay-500 transform ${
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
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeTestimonial;