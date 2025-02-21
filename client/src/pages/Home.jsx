import React,{useEffect,useState} from 'react'
import Navbar from '../components/navbar/Navbar'
import HeroSectionHome from '../components/Home/HeroSectionHome'
import ExploreClinic from '../components/Home/ExploreClinic'
import HomeTestimonial from '../components/Home/HomeTestimonial'
import MeetOurTeam from './MeetOurTeam'
import Faq from '../components/Home/Faq'
import Footer from '../components/footer/Footer'
import PrimaryBtn from '../components/Buttons/PrimaryBtn'
import { Helmet } from 'react-helmet-async'
import Servicescarousel from '../components/ServicesPage/ServicesCarousel'
import { Hairtreatments,Skintreatments,LaserTreatments,AntiAgingTreatments,CosmeticTreatments } from '../components/ServicesPage/Treatments'

function Home() {
  const[Showall,setShowall]=useState(false);

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
    <div className='flex flex-col justify-center items-center gap-4 px-5 lg:px-10 xl:px-28 pb-12'>
        <Servicescarousel Title='Hair' Data={Hairtreatments}/>
        <Servicescarousel Title='Skin' Data={Skintreatments}/>
        {Showall && <>
        <Servicescarousel Title='Laser' Data={LaserTreatments}/>
        <Servicescarousel Title='Anti-Aging' Data={AntiAgingTreatments}/>
        <Servicescarousel Title='Cosmetic' Data={CosmeticTreatments}/>
        </>}
        <PrimaryBtn onClick={() => setShowall(!Showall)}>{Showall ? 'Show Less' : 'Show All Services'} </PrimaryBtn>
    </div>
    <Faq/>
    <Footer/>
    </>
  )
}

export default Home