import React,{useEffect} from 'react'
import ExploreClinic from '../components/Clinic/ExploreClinic'
import HeroSectionAll from '../components/SharedComponents/HeroSectionAll'
import Treatments from '../components/Clinic/Treatments'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import BeforeAfter from '../components/Clinic/BeforeAfter'
import { Helmet } from 'react-helmet-async'

function Clinic() {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  return (
   <>
   <Helmet>
     <title>Radiance Clinic: Skin, Anti-Aging & Hair Transplant in Nagpur</title>
     <meta
      name="description"
      content="Explore Radiance Clinic's state-of-the-art facilities in
      Nagpur. We offer advanced skin and hair treatments in a comfortable
      and modern environment."
      />
      <link rel="canonical" href="https://radianceclinic.co.in/clinic" />
   </Helmet>
   <Navbar/>
   <HeroSectionAll Title={'Clinic'} Path={'Home'} SubPath={'Clinic'} />
    <ExploreClinic/>
    <Treatments/>
    <BeforeAfter/>
    <Footer/>
   </>
  )
}

export default Clinic