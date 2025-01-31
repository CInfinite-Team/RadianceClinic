import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonial from '../../assets/SharedAssets/testimonial.svg';
import InvertedComa from '../../assets/SharedAssets/InvertedComa.svg';
import WhitePlant from '../../assets/Aboutus/WhitePlant.svg';
import Leaf from '../../assets/SharedAssets/Leaf.svg';
import Whiteobject from '../../assets/SharedAssets/Whiteobject.svg';
import { TestimonialHomeHair, TestimonialHomeSkin, TestimonialHomeLaser } from '../Home/TestimonialHomeData';
import PrimaryBtn from '../Buttons/PrimaryBtn';
import BookInterest from './BookInterest';

function HomeTestimonial() {
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

  const [selectedData, setSelectedData] = useState(TestimonialHomeHair);
  const [showPopup,setShowPopup] = useState(false);

  return (
    <>
    <div className={` ${showPopup ? 'block' : 'hidden'} backdrop-blur-2xl overflow-y-auto fixed bg-[#0000004b] z-[99999999999999] top-0 left-0 w-screen h-screen flex items-center justify-center `}>
    <BookInterest Showpopup={setShowPopup}  />
    </div>
      <div className="py-10 bg-[#FDF2FF]">
        <div className="flex flex-col justify-center relative items-center md:min-h-screen w-screen bg-[#FDF2FF]">
          {/* Background images */}
          <img
            src={WhitePlant}
            alt=""
            className="absolute hidden md:block -bottom-20 xl:bottom-16 2xl:-bottom-8 left-0 mix-blend-plus-lighter max-w-[343px] z-0"
          />
          <img
            src={Leaf}
            alt=""
            className="absolute md:right-20 top-1/2 right-0 md:top-36 lg:top-28 xl:top-20 max-w-[343px] z-0"
          />
          <img
            src={Whiteobject}
            alt=""
            className="absolute bottom-5 right-[10vw] lg:right-[20vw] xl:right-[30vw] md:bottom-20 lg:bottom-7 xl:bottom-24 max-w-[200px] z-0"
          />

          {/* Section title */}
          <div className="flex flex-col justify-center mb-10 items-center gap-5">
            <h2 className="font-bold font-ElMessiri text-[#554075] leading-tight text-center px-1 z-10" style={{ fontSize: 'clamp(36px,4vw,55px)' }}>
              What Our Patients Say
            </h2>
            <p className="text-sm sm:text-base w-[97%] md:w-[80%] lg:w-[60%] xl:w-[60%] text-center text-[#554075] z-10">
              Here are some of the reviews that our patients gave us according to our treatments on Google
            </p>
          </div>

          {/* Slider component */}
          <div className="w-full   md:px-32 lg:px-12">
            <Slider className=' sm:h-[650px]  lg:h-[740px] px-7 md:px-0' {...sliderSettings}>
              {selectedData.map((data, index) => (
                <div key={index} className=" flex flex-col relative rounded-[5px] group overflow-hidden z-20 border border-[#A287CF] bg-white max-w-[350px] lg:min-h-[600px] max-h-[600px] p-4 justify-center sm:ml-36  md:ml-20 mb-10 items-center">
                  <div className="bg-[#fdf2ff39] justify-center opacity-0 flex transition-all duration-500 group-hover:opacity-100 w-full left-0 top-0 h-full backdrop-blur-lg items-center z-50 absolute">
                    <button
                      // href={
                      //   selectedData === TestimonialHomeHair
                      //     ? '/patient-form/hair'
                      //     : selectedData === TestimonialHomeSkin
                      //     ? '/patient-form/skin'
                      //     : '/book-appointment'
                      // }
                      onClick={() => setShowPopup(true)}
                      className="underline font-ElMessiri font-bold text-xl text-[#554075]"
                    >
                      Register Interest
                    </button>
                  </div>
                  <div className="w-[180px] h-[180px] md:w-[200px] md:h-[200px] lg:w-[260px] lg:h-[260px] mb-3 relative aspect-square mx-auto rounded-full">
                    <img src={testimonial} alt="" className="object-cover" />
                    <div className="p-2 md:p-3 lg:p-4 rounded-full bg-white absolute right-0 bottom-0">
                      <img src={InvertedComa} alt="" className="w-8" />
                    </div>
                  </div>

                  <div className="flex flex-col mb-3">
                    <h3 className=" text-2xl font-bold md:text-4xl text-[#4d3c69] text-center font-ElMessiri z-10">{data.Treatment}</h3>
                    <p className="text-[#41335A] text-center text-xl font-ElMessiri font-bold z-10">{data.Name}</p>
                    <p className="text-[#554075] text-center z-10">{data.Position}</p>
                  </div>

                  <p className="text-[#554075] text-center z-10">‘‘{data.Review}’’</p>
                </div>
              ))}
            </Slider>
          </div>

          {/* Buttons to switch testimonials */}
          <div className="flex gap-5 z-10">
            <PrimaryBtn onClick={() => setSelectedData(TestimonialHomeHair)} className="w-24 items-center justify-center">
              Hair
            </PrimaryBtn>
            <PrimaryBtn onClick={() => setSelectedData(TestimonialHomeSkin)} className="w-24 items-center justify-center">
              Skin
            </PrimaryBtn>
            <PrimaryBtn onClick={() => setSelectedData(TestimonialHomeLaser)} className="w-24 items-center justify-center">
              Laser
            </PrimaryBtn>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeTestimonial;
