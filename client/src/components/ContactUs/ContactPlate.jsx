import {React,useState} from 'react'
import Phone from '../../assets/ContactUs/Phone.svg'
import Email from '../../assets/ContactUs/Email.svg'
import Whatsapp from '../../assets/ContactUs/Whatsapp.svg'
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import Logo from '../../assets/logo.svg'

function ContactPlate() {
    const [IsOpen,setIsOpen]=useState(false);
    function ToggleVisibility(){
            setIsOpen(Prev => !Prev)
    }

  return (
    <>
        <div className={`flex fixed -right-1 rounded-s-lg top-1/2 z-20 bg-white pr-4 justify-start items-center gap-2 p-2 border-2 border-[#997EC1] w-[300px] max-h-[77px] transition-all duration-500 ${IsOpen ? 'translate-x-0' : 'translate-x-[68%]'} `}>
            <button onClick={ToggleVisibility} className='w-fit bg-transparent h-fit text-[#997EC1] '>{IsOpen ? (<ChevronRight  />) :   (<ChevronLeft/>)}</button>
            
            <a href="/"><img loading='lazy' width="auto" height="auto" src={Logo} alt="" className={` ${IsOpen ? 'hidden' : ''} w-16`} /></a>

            <div className='flex justify-between items-center w-full '>
                <a href="/"><img loading='lazy' width="auto" height="auto" src={Phone} alt="" /></a>
                <a href="/"><img loading='lazy' width="auto" height="auto" src={Whatsapp} alt="" /></a>
                <a href="/"><img loading='lazy' width="auto" height="auto" src={Email} alt="" /></a>
                <a href="/"><img  loading='lazy' width="auto" height="auto" src={Logo} alt="" className='w-11' /></a>
            </div>
        </div>
    </>
  )
}

export default ContactPlate
