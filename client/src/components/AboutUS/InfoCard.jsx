import React from 'react'
// import Nitin from '../../assets/Aboutus/Nitin.svg'
import {Link} from 'react-router-dom'
import Facebook from '../../assets/SharedAssets/facebook.svg'
import Instagram from '../../assets/SharedAssets/Instagram.svg'
import Youtube from '../../assets/SharedAssets/youtube.svg'
function InfoCard({Photo,Name,CardPosition,facebook,instagram,youtube}) {
  return (
    <>
        <div className='flec flex-col items-center justify-center px-6 py-4 infocardshadow rounded-md xl:px-8 w-fit h-fit xl:py-4 gap-3 bg-[#FCEBFF] '>
            <img src={Photo} alt="" />
            <div className='flex flex-col items-center justify-center py-2 gap-5 '>
                <div className='flex flex-col items-center justify-center'>
                <p className='font-ElMessiri font-bold text-center text-lg text-[#554075] w-full leading-5 '>{Name}</p>
                <p className=' font-bold text-lg text-center text-[#B2A6CE] w-full '>{CardPosition}</p>
                </div>

                <div className='flex gap-5 bg-white px-5 py-1 '>
                    <Link to={facebook} > <img src={Instagram} alt="" /> </Link>
                    <Link to={instagram} > <img src={Facebook} alt="" /> </Link>
                    <Link to={youtube} > <img src={Youtube} alt="" /> </Link>
                </div>

            </div>
            <Link to={'/appointment'} className=' underline text-[#3A2953] text-xl font-ElMessiri font-bold w-full ' >Book Appointment</Link>
        </div>
    </>
  )
}

export default InfoCard
