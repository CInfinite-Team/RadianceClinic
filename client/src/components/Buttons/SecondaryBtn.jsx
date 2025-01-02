import React from 'react'
import { memo } from 'react'
const SecondaryBtn = memo(({children,className}) => {
  return (
    <button className={`p-4 flex py-3 border-2 border-[#725B98] rounded-[5px] font-Inter font-bold bg-[#D4B7DA] ${className} text-white hover:bg-[#f2def7] hover:text-[#725B98] gap-2 transition-all duration-500 `}>
              {children}
    </button>
  )
})

export default SecondaryBtn
