import React from 'react'
import { memo } from 'react'

const PrimaryBtn= memo(({children,className,type,onClick}) => {
  return (
   <button  onClick={onClick} type={type} className={`p-4 2xl:text-3xl flex py-3 transition duration-500 w-fit h-fit border-2 border-[#725B98] rounded-[5px] font-Inter font-bold bg-[#725B98] ${className} text-white hover:bg-transparent hover:text-[#725B98] gap-2 transition-all duration-500 `}>
    {children}
   </button>
  )
});

export default PrimaryBtn
