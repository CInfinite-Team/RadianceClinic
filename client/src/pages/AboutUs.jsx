import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HeroSectionAll from '../components/SharedComponents/HeroSectionAll'
import OurStory from '../components/AboutUS/OurStory'
function AboutUs() {
  return (
  <>
  <Navbar />
  <HeroSectionAll Title={'About Us'} Path={'Home'} SubPath={'About Us'} />
  <OurStory />
  </>
  )
}

export default AboutUs