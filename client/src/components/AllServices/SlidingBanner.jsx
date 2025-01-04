import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HairServiceBanner from "../../assets/AllServices/Banner/HairServiceBanner.svg"
import PrimaryBtn from '../Buttons/PrimaryBtn';
import SecondaryBtn from "../Buttons/SecondaryBtn"

const slides = [
    {
      title: "Hair Transplant",
      description: "Restore your hairline with our advanced hair transplant procedures, offering natural-looking results and boosting your confidence.",
      buttonText: "Learn More",
      image: HairServiceBanner,
    },
    {
      title: "FUE Hair Transplant",
      description: "Experience the cutting-edge Follicular Unit Extraction (FUE) technique for hair transplantation, providing precise and minimally invasive results.",
      buttonText: "Learn More",
      image: HairServiceBanner,
    },
    {
      title: "Female Hair Transplant",
      description: "Specialized hair transplant solutions tailored for women to address hair thinning and balding, enhancing natural hair growth.",
      buttonText: "Learn More",
      image: HairServiceBanner,
    },
    {
      title: "Platelet Rich Plasma Therapy",
      description: "Revitalize your hair growth with PRP therapy, leveraging your body's healing power to stimulate new hair development naturally.",
      buttonText: "Learn More",
      image: HairServiceBanner,
    },
    {
      title: "Eyebrow & Beard Hair Transplant",
      description: "Achieve a fuller look with our eyebrow and beard hair transplant services, designed for natural and long-lasting results.",
      buttonText: "Learn More",
      image: HairServiceBanner,
    },
    {
      title: "Treatment of other kinds of alopecia (Hair Loss)",
      description: "Explore our comprehensive treatments for various types of alopecia, promoting healthier hair and scalp.",
      buttonText: "Learn More",
      image: HairServiceBanner,
    },
    {
      title: "Hair Transplant Repair",
      description: "Enhance or correct previous hair transplant results with our specialized repair services, ensuring your satisfaction.",
      buttonText: "Learn More",
      image: HairServiceBanner,
    },
    {
      title: "Hair Transplant in Nagpur",
      description: "Avail our expert hair transplant services in Nagpur, providing advanced solutions for effective hair restoration.",
      buttonText: "Learn More",
      image: HairServiceBanner,
    }
  ];
  

const SlidingBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative top-0 mx-4 pt-24 sm:mx-8 lg:mx-16 lg:mt-40 lg:pt-2 mb-8">
      <div className="relative w-full bg-[#E2DBFF] overflow-hidden rounded-xl shadow-lg border border-purple-100">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]"
          >
            {/* Mobile Layout */}
            <div className="lg:hidden flex flex-col p-6 sm:p-8 h-full">
              <div className="aspect-[4/3] w-full mb-6">
                <img
                  src={slides[currentIndex].image}
                  alt="Hair treatment visualization"
                  className="w-full h-full object-cover bg-[#554075] rounded-lg shadow-md"
                />
              </div>
              <div className="space-y-4 mb-8">
                <h1 className="text-2xl font-bold text-[#554075] font-ElMessiri">
                  {slides[currentIndex].title}
                </h1>
                <p className="text-[#554075] text-sm leading-relaxed">
                  {slides[currentIndex].description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <PrimaryBtn className="justify-center w-full">   
                      Book Appointment
                    </PrimaryBtn>
                    <PrimaryBtn className="justify-center w-full">
                      {slides[currentIndex].buttonText}
                    </PrimaryBtn>
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex items-center h-full p-16">
              <div className="flex flex-row items-center justify-between w-full gap-16">
                <div className="flex-1 space-y-6 text-left">
                  <h1 className="text-6xl font-bold text-[#554075] leading-tight font-ElMessiri">
                    {slides[currentIndex].title}
                  </h1>
                  <p className="text-[#554075] text-lg">
                    {slides[currentIndex].description}
                  </p>
                  <div className="flex gap-4">
                    <PrimaryBtn className="">
                      Book Appointment
                    </PrimaryBtn>
                    <PrimaryBtn className="">
                      {slides[currentIndex].buttonText}
                    </PrimaryBtn>
                  </div>
                </div>
                <div className="flex-1">
                  <img
                    src={slides[currentIndex].image}
                    alt="Hair treatment visualization"
                    className="rounded-lg shadow-xl bg-[#554075] w-full h-auto object-cover max-w-md mx-auto"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === currentIndex ? 'bg-purple-900' : 'bg-purple-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlidingBanner;