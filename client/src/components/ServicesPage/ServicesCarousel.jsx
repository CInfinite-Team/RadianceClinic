import React from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';



const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-[#8972AD] hover:text-purple-900 transition-colors"
  >
    <ChevronRight size={32} />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-[#8972AD] hover:text-purple-900 transition-colors"
  >
    <ChevronLeft size={32} />
  </button>
);

const Servicescarousel = ({Data,Title}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="w-full mx-auto px-4 py-8">
    <h2 className='font-ElMessiri text-[#554075] text-center mb-8 font-bold leading-tight ' style={{fontSize:'clamp(28px,4vw,50px)'}}>{Title}</h2>
      
      <div className="md:px-8">
        <Slider {...settings}>
          {Data.map((treatment, index) => (
            <div key={index} className="px-4">
             <a href={`/specific-service/?Data=${encodeURIComponent(JSON.stringify(treatment))}&Title=${encodeURIComponent(Title)}`} className="flex flex-col items-center">
                <div className="rounded-full border-[6px] border-[#7491A1] p-1 mb-4">
                  <img loading='lazy' width="auto" height="auto"
                    src={treatment.image}
                    alt={treatment.title}
                    className=" w-32 h-32 md:w-48 md:h-48 rounded-full object-cover"
                  />
                </div>
                <h2 className='font-ElMessiri text-center text-[#554075] font-bold leading-tight ' style={{fontSize:'clamp(28px,4vw,30px)'}}>
                  {treatment.title}
                </h2>
                <p className='font-ElMessiri text-center text-[#554075] font-bold leading-tight ' style={{fontSize:'clamp(28px,4vw,30px)'}}>
                  {treatment.subtitle}
                </p>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Servicescarousel;