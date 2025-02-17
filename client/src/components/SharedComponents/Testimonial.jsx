import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialSlide from '../AboutUS/TestimonialSlide';
import WhitePlant from '../../assets/Aboutus/WhitePlant.svg';
import Leaf from '../../assets/SharedAssets/Leaf.svg';
import Whiteobject from '../../assets/SharedAssets/Whiteobject.svg';
import Yogesh_review from '../../assets/Home/Review_Hairs/Yogesh_review.mp4';
import Mayur_Karro_Review from '../../assets/Home/Review_Hairs/Mayur_Karro_Review.mp4';
import Mustafa from '../../assets/Home/Review_Hairs/Mustafa.mp4';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  fade: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
};

const TestimonialData = [
  {
    video: Yogesh_review,
    Treatment: 'Hair Transplant',
    Name: 'Yogesh',
    Position: 'Lawyer',
    Review: 'Barde Radiance really the best ever in India mostly Face-lift service is a cosmetic surgical procedure to create a younger appearance in your face. The procedure can reduce the sagging. really the best ever in India mostly Face-lift',
  },
  {
    video: Mayur_Karro_Review,
    Treatment: 'Scalp Micropigmentation',
    Name: 'Mayur Karro',
    Position: 'Lawyer',
    Review: 'Barde Radiance really the best ever in India mostly Face-lift service is a cosmetic surgical procedure to create a younger appearance in your face. The procedure can reduce the sagging. really the best ever in India mostly Face-lift',
  },
  {
    video: Mustafa,
    Treatment: 'PRP Therapy',
    Name: 'Mustafa',
    Position: 'Lawyer',
    Review: 'Barde Radiance really the best ever in India mostly Face-lift service is a cosmetic surgical procedure to create a younger appearance in your face. The procedure can reduce the sagging. really the best ever in India mostly Face-lift',
  },
];

function Testimonial() {
  return (
    <Slider className='overflow-hidden h-[850px] md:h-[750px] lg:h-[800px] pt-10 bg-[#FDF2FF]' {...sliderSettings}>
      {TestimonialData.map((data, index) => (
        <div key={index} className='flex flex-col justify-center relative items-center md:min-h-screen w-screen bg-[#FDF2FF]'>
          <img loading='lazy' width="auto" height="auto" src={WhitePlant} alt="" className='absolute !hidden md:!block -bottom-20 xl:bottom-16 2xl:-bottom-8 left-0 mix-blend-plus-lighter max-w-[343px] z-0' />
          <img loading='lazy' width="auto" height="auto" src={Leaf} alt="" className='absolute md:right-20 top-1/2 right-0 md:top-36 lg:top-28 xl:top-20 max-w-[343px] z-0' />
          <img loading='lazy' width="auto" height="auto" src={Whiteobject} alt="" className='absolute bottom-5 right-[10vw] lg:right-[20vw] xl:right-[30vw] md:bottom-20 lg:bottom-7 xl:bottom-24 max-w-[200px] z-0' />

          <div className='flex flex-col justify-center mb-10 items-center gap-5'>
            <h2 className="font-bold font-ElMessiri text-[#554075] leading-tight text-center px-1 z-10" style={{ fontSize: 'clamp(36px,4vw,55px)' }}>
              What Our Patients Says
            </h2>
            <p className='text-sm sm:text-base w-[97%] md:w-[80%] lg:w-[60%] xl:w-[30%] text-center text-[#554075] z-10'>
              Here are some of the reviews that our patients gave us according to our treatments on Google
            </p>
          </div>

          <TestimonialSlide data={data} />
        </div>
      ))}
    </Slider>
  );
}

export default Testimonial;
