import React from 'react'
import SecondaryBtn from '../Buttons/SecondaryBtn';

function Topbar() {
  return (
 <>
   <div className="w-full max-w-7xl mx-auto p-6 bg-[#554078] flex items-center justify-between">
                <p className=" text-xl lg:text-3xl font-semibold text-white ">
                  Welcome, Dr. Barde
                </p>
                <SecondaryBtn  className="!p-0 !py-0" ><a href="/" className='p-4 py-2 whitespace-nowrap'>View Website</a></SecondaryBtn>
              </div>
 </>
  )
}

export default Topbar
