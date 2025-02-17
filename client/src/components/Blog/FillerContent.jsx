import React from "react"
import Appointment from "../../assets/SharedAssets/Appointment"
import PrimaryBtn from "../Buttons/PrimaryBtn"
import SecondaryBtn from "../Buttons/SecondaryBtn"
import BeforeAfter from "../../assets/Clinic/BeforeAfter.svg"


function FillerContent(){
    return(
        <>
            <div className='grid md:grid-cols-2 gap-2 p-5 xl:p-10 items-stretch'>
                <div className="flex flex-col gap-2">
                    <div className='bg-[#E2DBFF] p-5 flex-1 flex flex-col justify-between'>
                        <h4 className='font-Inter text-[#554075] font-bold' style={{ fontSize: 'clamp(20px,3vw,42px)' }}>
                            Discover Confidence Through Expert Care</h4>
                        <p className='text-[#8C73B3] font-Inter font-bold pb-2 text-sm md:text-base xl:text-lg'>
                            Book your consultation today and take the first step toward revitalizing your hair and skin health.</p>
                        <PrimaryBtn className='w-full md:w-fit items-center justify-center'>Book Appointment <Appointment size={'24px'} /></PrimaryBtn>
                    </div>

                    <div className='bg-[#554075] p-5 flex-1 flex flex-col justify-between'>
                        <h4 className='font-Inter text-[#E2DBFF] font-bold' style={{ fontSize: 'clamp(20px,3vw,42px)' }}>
                            Empowered Beauty, Expertly Delivered.</h4>
                        <p className='text-[#E2DBFF] font-Inter font-bold pb-2 text-sm md:text-base xl:text-lg'>
                            Explore personalized treatments for hair restoration and skincare that redefine beauty and self-confidence at Dr Barde’s Radience.</p>
                        <SecondaryBtn className='w-full md:w-fit items-center justify-center'>Book Appointment <Appointment size={'24px'} /></SecondaryBtn>
                    </div>
                </div>

  
                <div className='bg-[#E2DBFF] p-5 flex flex-col justify-between gap-2'>
                    <h4 className='font-Inter text-[#554075] font-bold' style={{ fontSize: 'clamp(20px,3vw,42px)' }}>
                    Transform Your Look, Transform Your Life</h4>
                    <p className='text-[#8C73B3] font-Inter font-bold pb-2 text-sm md:text-base xl:text-lg'>
                    Book your consultation today and take the first step toward revitalizing your hair and skin health.</p>
                    <img loading='lazy' width="auto" height="auto" src={BeforeAfter} alt="" className='w-full' />
                </div>
            </div>

        </>
    )}
    export default FillerContent