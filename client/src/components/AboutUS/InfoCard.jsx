import React from 'react'
// import Nitin from '../../assets/Aboutus/Nitin.svg'
import {Link} from 'react-router-dom'
import Facebook from '../../assets/SharedAssets/facebook.svg'
import Instagram from '../../assets/SharedAssets/Instagram.svg'
import Youtube from '../../assets/SharedAssets/youtube.svg'
function InfoCard({Photo,Name,CardPosition,facebook,instagram,youtube}) {
  return (
    <>
        <div className='flex flex-col items-center justify-center px-6 py-4 infocardshadow rounded-md xl:px-8 w-fit h-fit xl:py-4  bg-[#FCEBFF] '>
            <img loading='lazy' width="auto" height="auto" src={Photo} alt="" className='2xl:w-[350px] 2xl:h-[350px] ' />
            <div className='flex flex-col items-center justify-center py-2 gap-5 '>
                <div className='flex flex-col items-center justify-center'>
                <p className='font-ElMessiri font-bold text-center text-lg text-[#554075] w-full 2xl:text-4xl leading-5 '>{Name}</p>
                <p className=' font-bold text-lg text-center text-[#B2A6CE] w-full 2xl:text-3xl '>{CardPosition}</p>
                </div>

                <div className='flex gap-5 bg-white px-5 py-1 '>
                    <Link to={'https://www.instagram.com/radianceclinicnagpur/'} target='_blank' > <img loading='lazy' width="auto" height="auto" src={Instagram} alt="Barde Radience Instagram" className='2xl:w-14 2xl:h-14' /> </Link>
                    <Link to={'https://www.facebook.com/radianceclinicnagpur1/'} target='_blank' > <img loading='lazy' width="auto" height="auto" src={Facebook} alt="Barde Radience Facebook" className='2xl:w-14 2xl:h-14' /> </Link>
                    <Link to={'https://www.youtube.com/channel/UCcca28C8TbpVCiCj2sKsWmw'} target='_blank' > <img loading='lazy' width="auto" height="auto" src={Youtube} alt="Barde Radience Instagram" className='2xl:w-14 2xl:h-14' /> </Link>
                </div>

            </div>
            <Link to={'/appointment'} className=' underline text-[#3A2953] text-xl 2xl:text-4xl text-center font-ElMessiri font-bold w-full ' >Book Appointment</Link>
        </div>
    </>
  )
}

export default InfoCard
