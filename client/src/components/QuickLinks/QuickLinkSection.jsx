import React from 'react'
import { QuickLinkData } from './QuickLinkData'
import { Sparkles, Sparkle } from 'lucide-react';

function QuickLinkSection() {
  const City1 = ['Nagpur', 'Akola', 'Rajangaon', 'Harda', 'Chandrapur'];
  const City2 = ['Katni', 'Narsinghpur', 'Amravati', 'Ambikapur', 'Bhandara'];
  const City3 = ['Mandla', 'Wardha', 'Gondia', 'Raipur', 'Bilaspur', 'Korba', 'Jabalpur'];

  return (
    <>
      <div className='flex flex-wrap justify-between text-[#392c4e] bg-[#FDF2FF] p-8 py-20'>
        {/* City1 Links */}
        <div className='flex flex-col gap-2'>
          {City1.map((city, index) => (
            <div className='flex flex-col gap-2 pb-5' key={index}>
              <p className='font-semibold text-lg flex items-center gap-2'>
                <Sparkles size={20} /> {city}
              </p>
              {QuickLinkData[city]?.map((linkData, linkIndex) => (
                <div key={linkIndex} className='flex flex-col pl-2 pb-2 group'>
                  <a 
                    href={linkData.href+`?Description=${linkData.description}&Title=${linkData.text}`} 
                    className='flex gap-2 items-center transition duration-500 hover:font-semibold group-hover:-translate-y-1'>
                    <Sparkle 
                      size={18} 
                      className='group-hover:fill-[#9f8cbd] group-hover:stroke-[#9f8cbd] transition duration-700' 
                    /> 
                    {linkData.text}
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* City2 Links */}
        <div className='flex flex-col gap-2'>
          {City2.map((city, index) => (
            <div className='flex flex-col gap-2 pb-5' key={index}>
              <p className='font-semibold text-lg flex items-center gap-2'>
                <Sparkles size={20} /> {city}
              </p>
              {QuickLinkData[city]?.map((linkData, linkIndex) => (
                <div key={linkIndex} className='flex flex-col pl-2 pb-2 group'>
                  <a 
                    href={linkData.href+`?Description=${linkData.description}&Title=${linkData.text}`} 
                    className='flex gap-2 items-center transition duration-500 hover:font-semibold group-hover:-translate-y-1'>
                    <Sparkle 
                      size={18} 
                      className='group-hover:fill-[#9f8cbd] group-hover:stroke-[#9f8cbd] transition duration-700' 
                    /> 
                    {linkData.text}
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* City3 Links */}
        <div className='flex flex-col gap-2'>
          {City3.map((city, index) => (
            <div className='flex flex-col gap-2 pb-5' key={index}>
              <p className='font-semibold text-lg flex items-center gap-2'>
                <Sparkles size={20} /> {city}
              </p>
              {QuickLinkData[city]?.map((linkData, linkIndex) => (
                <div key={linkIndex} className='flex flex-col pl-2 pb-2 group'>
                  <a 
                    href={linkData.href+`?Description=${linkData.description}&Title=${linkData.text}`} 
                    className='flex gap-2 items-center transition duration-500 hover:font-semibold group-hover:-translate-y-1'>
                    <Sparkle 
                      size={18} 
                      className='group-hover:fill-[#9f8cbd] group-hover:stroke-[#9f8cbd] transition duration-700' 
                    /> 
                    {linkData.text}
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default QuickLinkSection;
