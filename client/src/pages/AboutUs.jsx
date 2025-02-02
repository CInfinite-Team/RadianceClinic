import React,{useEffect} from 'react'
import Navbar from '../components/navbar/Navbar'
import HeroSectionAll from '../components/SharedComponents/HeroSectionAll'
import OurStory from '../components/AboutUS/OurStory'
import DoctorInfo from '../components/AboutUS/DoctorInfo'
import {awardsDataNitin} from '../components/AboutUS/AwardsData'
import {awardsDataRadhika} from '../components/AboutUS/AwardsData'
import {Nitin_Award_Images} from '../components/AboutUS/AwardImages'
import {Radhika_Award_Images} from '../components/AboutUS/AwardImages'
import {NitinInfo} from '../components/AboutUS/InfoParagraph'
import {RadhikaInfo} from '../components/AboutUS/InfoParagraph'
import Nitin from '../assets/Aboutus/Nitin.svg'
import Radhika from '../assets/Aboutus/Radhika.svg'
import Stats from '../components/AboutUS/Stats'
import Testimonial from '../components/SharedComponents/Testimonial'
import Footer from '../components/footer/Footer'



function AboutUs() {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  return (
  <>
  <Navbar />
  <HeroSectionAll Title={'About Us'} Path={'Home'} SubPath={'About Us'} />
  <OurStory />
  <DoctorInfo Photo={Nitin} Name={'Dr. Nitin Barde'} Position={'Founder & Cosmetic Surgeon'} CardPosition={'Cosmetic Surgeon'} info={NitinInfo} AwardsData={awardsDataNitin} AwardImage={Nitin_Award_Images} facebook={'/'} instagram={'/'} youtube={'/'} />
  <DoctorInfo Photo={Radhika} Name={'Dr. Radhika Barde'} Position={'Cosmetic Surgeon'} CardPosition={'Cosmetic Surgeon'} info={RadhikaInfo} AwardsData={awardsDataRadhika} AwardImage={Radhika_Award_Images} facebook={'/'} instagram={'/'} youtube={'/'} />
  <Stats/>
  <Testimonial/>
  <Footer/>
  </>
  )
}

export default AboutUs