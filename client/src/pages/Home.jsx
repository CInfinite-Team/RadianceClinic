import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HeroSectionHome from '../components/Home/HeroSectionHome'
import ExploreClinic from '../components/Home/ExploreClinic'
import HomeTestimonial from '../components/Home/HomeTestimonial'
import MeetOurTeam from './MeetOurTeam'
import Faq from '../components/Home/Faq'
import Footer from '../components/footer/Footer'
function Home() {
  return (
    <>
    <Navbar />
    <HeroSectionHome />
    <ExploreClinic/>
    <HomeTestimonial/>
    <MeetOurTeam/>
    <Faq/>
    <Footer/>
    </>
  )
}

export default Home