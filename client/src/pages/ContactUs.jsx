import React from 'react'
import HeroSectionAll from '../components/SharedComponents/HeroSectionAll'
import Navbar from '../components/navbar/Navbar'
import ContactSection from '../components/ContactUs/ContactSection'

function ContactUs() {
  return (
    <>
      <Navbar/>
      <HeroSectionAll Title={'ContactUs'} Path={'Home'} SubPath={'Contact Us'} />
      <ContactSection/>
    </>
  )
}

export default ContactUs