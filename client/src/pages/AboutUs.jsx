import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HeroSectionAll from '../components/SharedComponents/HeroSectionAll'
import OurStory from '../components/AboutUS/OurStory'
import AwardsAndAchievements from '../components/AboutUS/AwardsAndAchievements'
import  {awardsDataNitin} from '../components/AboutUS/AwardsData.js'
import  {awardsDataRadhika} from '../components/AboutUS/AwardsData.js'
import {Nitin_Award_Images} from '../components/AboutUS/AwardImages.js'
import {Radhika_Award_Images} from '../components/AboutUS/AwardImages.js'
function AboutUs() {
  return (
  <>
  <Navbar />
  <HeroSectionAll Title={'About Us'} Path={'Home'} SubPath={'About Us'} />
  <OurStory />
  <AwardsAndAchievements AwardsData={awardsDataNitin} AwardImage={Nitin_Award_Images} />
  </>
  )
}

export default AboutUs