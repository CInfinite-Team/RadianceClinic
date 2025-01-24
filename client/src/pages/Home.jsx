import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HeroSectionHome from '../components/Home/HeroSectionHome'
import ExploreClinic from '../components/Home/ExploreClinic'
import HomeTestimonial from '../components/Home/HomeTestimonial'
import MeetOurTeam from './MeetOurTeam'
function Home() {
  return (
    <>
    <Navbar />
    <HeroSectionHome />
    <ExploreClinic/>
    <HomeTestimonial/>
    <MeetOurTeam/>
    </>
  )
}

export default Home