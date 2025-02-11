import React from 'react'
import SecondaryBtn from '../Buttons/SecondaryBtn';

function Topbar({title}) {
  return (
 <>
   <div className="w-full md:max-w-7xl md:mx-auto p-4 md:p-6 gap-2 bg-[#554078] flex items-center justify-between">
                <p className=" text-lg lg:text-3xl font-semibold text-white ">
                 {title} 
                </p>
                <SecondaryBtn  className="!p-0 !py-0" ><a href="/" className='p-4 py-2 whitespace-nowrap'>View Website</a></SecondaryBtn>
              </div>
 </>
  )
}

export default Topbar
