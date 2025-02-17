import React,{useEffect} from 'react'
import Navbar from '../components/navbar/Navbar'
import HeroSectionHome from '../components/Home/HeroSectionHome'
import ExploreClinic from '../components/Home/ExploreClinic'
import HomeTestimonial from '../components/Home/HomeTestimonial'
import MeetOurTeam from './MeetOurTeam'
import Faq from '../components/Home/Faq'
import Footer from '../components/footer/Footer'
import { Helmet } from 'react-helmet-async'

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  return (
    <>
    <Helmet>
      <title>Radiance Clinic: Skin Care & Hair Transplant, Nagpur</title>
      <meta
        name="description"
        content="Radiance Clinic offers cutting-edge skin care, anti-aging treatments, and hair transplants with premium cosmetic dermatology by Drs Nitin & Radhika Barde in Nagpur India"
      />
      <link rel="canonical" href="https://radianceclinic.co.in/" />
    </Helmet>

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