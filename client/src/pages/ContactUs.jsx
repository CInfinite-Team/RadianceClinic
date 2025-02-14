import React,{useEffect} from 'react'
import HeroSectionAll from '../components/SharedComponents/HeroSectionAll'
import Navbar from '../components/navbar/Navbar'
import ContactSection from '../components/ContactUs/ContactSection'
import ContactPlate from '../components/ContactUs/ContactPlate'
import Map from '../components/ContactUs/Map'
import Footer from '../components/footer/Footer'
function ContactUs() {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  return (
    <>
      <Navbar/>
      <HeroSectionAll Title={'Contact Us'} Path={'Home'} SubPath={'Contact Us'} />
      <ContactSection/>
      <ContactPlate/>
      <Map/>
      <Footer/>
    </>
  )
}

export default ContactUs