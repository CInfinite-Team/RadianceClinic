import React from 'react'
import { QuickLinkData } from './QuickLinkData'
import { Sparkles,Sparkle } from 'lucide-react';
function QuickLinkSection() {

    const City1=['Nagpur','Akola','Rajangaon','Harda','Chandrapur']
    const City2=['Katni','Narsinghpur','Amravati','Ambikapur','Bhandara'];
    const City3=['Mandla','Wardha','Gondia','Raipur','Bilaspur','Korba','Jabalpur'];
  return (
    <>
    <div className='flex flex-wrap justify-between text-[#392c4e] bg-[#FDF2FF] p-8 py-20 '>
      <div className='flex flex-col gap-2'>
            {City1.map((data,index) => (
                <div className='flex flex-col gap-2 pb-5' key={index}>
                    <p className='font-semibold text-lg flex items-center gap-2'><Sparkles size={20} /> {data}</p>
                  {  
                QuickLinkData[data].map((data, index) => (
                    <div key={index} className='flex flex-col pl-2 pb-2 group'>
                    <a href='/book-appointment' className='flex gap-2 items-center transition duration-500 hover:font-semibold group-hover:-translate-y-1 '> <Sparkle size={18} className='group-hover:fill-[#9f8cbd] group-hover:stroke-[#9f8cbd] transition duration-700' /> {data}</a>
           </div>
                ))}
                </div>
            ))
           }

      </div>
      <div className='flex flex-col gap-2'>
            {City2.map((data,index) => (
                <div className='flex flex-col gap-2 pb-5' key={index}>
                  <p className='font-semibold text-lg flex items-center gap-2'><Sparkles size={20} /> {data}</p>
                  {  
                QuickLinkData[data].map((data, index) => (
                    <div key={index} className='flex flex-col pl-2 pb-2 group'>
                    <a href='/book-appointment' className='flex gap-2 items-center transition duration-500 hover:font-semibold group-hover:-translate-y-1 '> <Sparkle size={18} className='group-hover:fill-[#9f8cbd] group-hover:stroke-[#9f8cbd] transition duration-700' /> {data}</a>
           </div>
                ))}
                </div>
            ))
           }

      </div>
      <div className='flex flex-col gap-2'>
            {City3.map((data,index) => (
                <div className='flex flex-col gap-2 pb-5' key={index}>
                   <p className='font-semibold text-lg flex items-center gap-2'><Sparkles size={20}  /> {data}</p>
                  {  
                QuickLinkData[data].map((data, index) => (
                    <div key={index} className='flex flex-col pl-2 pb-2 group'>
                             <a href='/book-appointment' className='flex gap-2 items-center transition duration-500 hover:font-semibold group-hover:-translate-y-1 '> <Sparkle size={18} className='group-hover:fill-[#9f8cbd] group-hover:stroke-[#9f8cbd] transition duration-700' /> {data}</a>
                    </div>
                ))}
                </div>
            ))
           }

      </div>
      </div>
    </>
  )
}

export default QuickLinkSection
