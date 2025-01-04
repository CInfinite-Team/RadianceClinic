import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HairServiceBanner from "../../assets/AllServices/Banner/HairServiceBanner.svg"

const slides = [
  {
    title: "PRP THERAPY",
    description: "Stimulate natural hair growth with Platelet-Rich Plasma therapy. A revolutionary treatment that uses your body's own healing mechanisms.",
    buttonText: "Learn More",
    image: HairServiceBanner,
  },
  {
    title: "HAIR TRANSPLANT",
    description: "Advanced hair restoration techniques using the latest technology. Our treatments provide natural-looking, permanent results for those experiencing hair loss.",
    buttonText: "Book Now",
    image: HairServiceBanner,
  },
  {
    title: "SCALP TREATMENT",
    description: "Comprehensive scalp care solutions to maintain healthy hair growth. Our specialized treatments address various scalp conditions.",
    buttonText: "Discover More",
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
    <div className="relative top-0 mx-4 pt-28 sm:mx-8 lg:mx-16 lg:mt-40 mb-8">
      <div className="relative w-full bg-purple-50 overflow-hidden rounded-xl shadow-lg border border-purple-100">
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
                <h1 className="text-2xl font-bold text-purple-900 text-center">
                  {slides[currentIndex].title}
                </h1>
                <p className="text-gray-700 text-sm leading-relaxed text-center">
                  {slides[currentIndex].description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button className="w-full bg-purple-900 text-white py-2.5 rounded-md hover:bg-purple-800 transition-colors text-sm shadow-sm">
                    {slides[currentIndex].buttonText}
                  </button>
                  <button className="w-full border border-purple-900 text-purple-900 py-2.5 rounded-md hover:bg-purple-100 transition-colors text-sm shadow-sm">
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex items-center h-full p-16">
              <div className="flex flex-row items-center justify-between w-full gap-16">
                <div className="flex-1 space-y-6 text-left">
                  <h1 className="text-5xl font-bold text-purple-900 leading-tight">
                    {slides[currentIndex].title}
                  </h1>
                  <p className="text-gray-700 text-lg">
                    {slides[currentIndex].description}
                  </p>
                  <div className="flex gap-4">
                    <button className="bg-purple-900 text-white px-6 py-3 rounded-md hover:bg-purple-800 transition-colors shadow-sm">
                      {slides[currentIndex].buttonText}
                    </button>
                    <button className="border border-purple-900 text-purple-900 px-6 py-3 rounded-md hover:bg-purple-100 transition-colors shadow-sm">
                      Book Appointment
                    </button>
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