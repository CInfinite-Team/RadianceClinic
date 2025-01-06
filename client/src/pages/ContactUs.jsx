import React from 'react'
import HeroSectionAll from '../components/SharedComponents/HeroSectionAll'
import Navbar from '../components/navbar/Navbar'
import ContactSection from '../components/ContactUs/ContactSection'
import ContactPlate from '../components/ContactUs/ContactPlate'
import Map from '../components/ContactUs/Map'
import Footer from '../components/footer/Footer'
function ContactUs() {
  return (
    <>
      <Navbar/>
      <HeroSectionAll Title={'ContactUs'} Path={'Home'} SubPath={'Contact Us'} />
      <ContactSection/>
      <ContactPlate/>
      <Map/>
      <Footer/>
    </>
  )
}

export default ContactUs