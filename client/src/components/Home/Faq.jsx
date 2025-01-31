import React, { useState } from 'react';
import PrimaryBtn from '../../components/Buttons/PrimaryBtn';
import QueDropDown from './QueDropDown';
import { Search } from 'lucide-react';
import { faqData } from '../../components/Home/FaqData';
import Leafs from '../../assets/SharedAssets/Leafs.svg'

function Faq() {
  const [selectedCategory, setSelectedCategory] = useState(''); 
  const [searchTerm, setSearchTerm] = useState(''); 

  const filteredFaqs = faqData.filter((data) => {
    const matchesCategory = selectedCategory ? data.category === selectedCategory : true;
    const matchesSearch = data.Question.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <div className='w-screen relative bg-[#93A7B1] overflow-hidden min-h-[105vh] gap-14 justify-between items-center flex flex-col lg:flex-row px-5 lg:px-10  xl:px-40 p-20'>
      <img src={Leafs} alt="" className='  h-1/2 lg:h-full -top-32 md:top-0 left-0 z-0 mix-blend-plus-lighter absolute' />

        <div className='flex z-10  flex-col lg:w-[30%] gap-5'>


          <h1 className='font-ElMessiri text-white font-bold leading-tight' style={{fontSize: 'clamp(36px,6vw,60px)'}}>
            Frequently Asked Questions
          </h1>

          {/* Filters */}
          <div className='relative w-full'>
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

          
          <div className='flex w-full justify-center gap-4'>
            <PrimaryBtn
              className='px-8'
              onClick={() => setSelectedCategory('hair')} 
            >
              Hair
            </PrimaryBtn>
            <PrimaryBtn
              className='px-8'
              onClick={() => setSelectedCategory('skin')}
            >
              Skin
            </PrimaryBtn>
           
          </div>
        </div>

        {/* FAQ Section */}
        <div className='flex z-10  flex-col w-full lg:w-[50%] gap-5'>
          {filteredFaqs.splice(0, 6).map((data, index) => (
            <QueDropDown key={index} Question={data.Question} Answer={data.Answer} opened={false} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Faq;
