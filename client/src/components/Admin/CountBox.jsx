import React from 'react'
import SecondaryBtn from '../Buttons/SecondaryBtn'
function CountBox({handleLinkClick,data,title,BtnText='View all Leads', countEntity,hiddenBtn=false}) {
  return (
    <>
    <div className=" bg-[#554078] min-w-[293px] w-fit p-2 px-3 flex flex-col gap-1 relative">
                    <p className=" top-4 left-4 text-[28px] leading-tight font-bold text-white">{title}</p>
                    <div className='flex  items-end gap-4'>
                    <p className=" text-8xl sm:text-9xl font-bold text-white">{data.length > 0 ? data[0][countEntity] : 0}</p>
                    <SecondaryBtn onClick={() => handleLinkClick('leads')}  className={`mb-4 ${hiddenBtn ? 'hidden' : ''} whitespace-nowrap  !py-2`} >{BtnText}</SecondaryBtn>                
                      </div>
                   
                    </div>
    </>
  )
}

export default CountBox
