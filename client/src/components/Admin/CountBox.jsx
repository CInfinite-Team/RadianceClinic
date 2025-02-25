import React from 'react'
import SecondaryBtn from '../Buttons/SecondaryBtn'
function CountBox({handleLinkClick,data,title,BtnText='View all Leads', countEntity,hiddenBtn=false}) {
  return (
    <>
    <div className=" bg-[#554078]  lg:max-w-max  w-full p-2 pb-0 px-3 flex flex-col justify-between  relative">
                    <p className={` ${hiddenBtn ? '!text-center lg:!text-[22px] xl:!text-[25px]' : ''} top-4 left-4 text-[40px] lg:text-[16px] text-center lg:text-left xl:text-[28px] leading-tight font-bold text-white`} >{title}</p>
                    <div className={` ${hiddenBtn ? 'justify-center xl:px-14':' justify-between'} flex flex-col lg:flex-row items-center lg:items-end gap-4`}>
                    <p className=" text-[140px] lg:text-8xl leading-tight xl:text-9xl font-bold text-white" >{data ? data[countEntity] : 0}</p>
                    <SecondaryBtn onClick={() => handleLinkClick('leads')} title={BtnText}  className={`mb-4 ${hiddenBtn ? 'hidden' : ''} whitespace-nowrap w-full lg:w-fit justify-center lg:!text-xs xl:!text-sm !py-2`} >{BtnText}</SecondaryBtn>                
                      </div>
                   
                    </div>
    </>
  )
}

export default CountBox
