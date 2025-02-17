import React, { useState, useEffect } from 'react';
import PrimaryBtn from '../../components/Buttons/PrimaryBtn';
import QueDropDown from './QueDropDown';
import { Search } from 'lucide-react';
import { faqData } from '../../components/Home/FaqData';
import Leafs from '../../assets/SharedAssets/Leafs.svg'

function Faq() {
  const [selectedCategory, setSelectedCategory] = useState(''); 
  const [searchTerm, setSearchTerm] = useState(''); 
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

    const element = document.getElementById('faq-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const filteredFaqs = faqData.filter((data) => {
    const matchesCategory = selectedCategory ? data.category === selectedCategory : true;
    const matchesSearch = data.Question.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <div id="faq-section" className='w-screen relative bg-[#93A7B1] overflow-hidden min-h-[105vh] gap-14 justify-between items-center flex flex-col lg:flex-row px-5 lg:px-10 xl:px-40 p-20'>
        <img loading='lazy' width="auto" height="auto" 
          src={Leafs} 
          alt="" 
          className='h-1/2 lg:h-full -top-32 md:top-0 left-0 z-0 mix-blend-plus-lighter absolute animate-float' 
        />

        <div className={`flex z-10 flex-col lg:w-[30%] gap-5 transition-all duration-700 transform ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}>
          <h2 className='font-ElMessiri text-white font-bold leading-tight ' 
              style={{fontSize: 'clamp(36px,6vw,60px)'}}>
            Frequently Asked Questions
          </h2>

          <div className='relative w-full transition-all duration-700' style={{ transitionDelay: '200ms' }}>
            <span className='absolute left-3 bottom-4 text-[#554075]'>
              <Search size={20} />
            </span>
            <input
              type="text"
              placeholder="Search"
              className='text-[#554075] rounded-[3px] border border-[#554075] pl-10 w-full p-3'
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
            />
          </div>

          <div className={`flex w-full justify-center gap-4 transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '400ms' }}>
            <PrimaryBtn
              className='px-8   duration-500 transition-transform'
              onClick={() => setSelectedCategory('hair')} 
            >
              Hair
            </PrimaryBtn>
            <PrimaryBtn
              className='px-8 duration-500 transition-transform'
              onClick={() => setSelectedCategory('skin')}
            >
              Skin
            </PrimaryBtn>
          </div>
        </div>

        <div className='flex z-10 flex-col w-full lg:w-[50%] gap-5'>
          {filteredFaqs.splice(0, 6).map((data, index) => (
            <div 
              key={index}
              className={`transition-all duration-700 transform ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <QueDropDown Question={data.Question} Answer={data.Answer} opened={false} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Faq;