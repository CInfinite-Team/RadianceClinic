import React from 'react'
import HappyPatient from '../../assets/Aboutus/HappyPatient.svg'
import NonSurgical from '../../assets/Aboutus/NonSurgical.svg'
import SurgicalPatient from '../../assets/Aboutus/SurgicalPatient.svg'
import CountUp from '../Animations/CountUp'
const Statsdata=[
    {
        Number: '10000',
        text: 'Happy Patients',
        img: HappyPatient
    },
    {
        Number: '6000',
        text: 'Non-Surgical Patients',
        img: NonSurgical
    },
    {
        Number: '4000',
        text: 'Surgical Patients',
        img: SurgicalPatient
    },
]

function Stats() {
  return (
    <>
    <div className='flex flex-col gap-20 md:gap-0 md:flex-row md:justify-between md:px-10 lg:px-20 xl:px-36 mt-10 mb-20'>
    {Statsdata.map((data, index) => (
    <div key={index} className='flex flex-col items-center gap-3'>
    <p className='text-[#8C73B3] text-3xl xl:text-5xl text-center font-bold'>
    <CountUp
  from={0}
  to={data.Number}
  separator=","
  direction="up"
  duration={0.5}
  className="count-up-text"
/>+
    </p>
    <p className='font-ElMessiri text-[#554075] text-center font-bold text-xl xl:text-3xl'>{data.text}</p>
    <img src={data.img} alt="" className='max-w-[90px] xl:max-w-[117px] ' />
    </div>
))}
    </div>
    </>
  )
}

export default Stats
