import React from 'react'
import SecondaryBtn from '../Buttons/SecondaryBtn'
function CountBox({handleLinkClick,data,title}) {
  return (
    <>
    <div className=" bg-[#554078] w-fit p-2 px-3 flex flex-col gap-1 relative">
                    <p className=" top-4 left-4 text-[28px] leading-tight font-bold text-white">{title}</p>
                    <div className='flex  items-end gap-4'>
                    <p className="text-9xl font-bold text-white">{data.length > 0 ? data[0].leadsCount : 0}</p>
                    <SecondaryBtn onClick={() => handleLinkClick('leads')}  className="mb-4 whitespace-nowrap !py-2" >View All leads</SecondaryBtn>                
                      </div>
                   
                    </div>
    </>
  )
}

export default CountBox
