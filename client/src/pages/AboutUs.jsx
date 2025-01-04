import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HeroSectionAll from '../components/SharedComponents/HeroSectionAll'

function AboutUs() {
  return (
  <>
  <Navbar />
  <HeroSectionAll Title={'About Us'} Path={'Home'} SubPath={'About Us'} />
  </>
  )
}

export default AboutUs