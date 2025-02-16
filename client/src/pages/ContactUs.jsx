import React,{useEffect} from 'react'
import HeroSectionAll from '../components/SharedComponents/HeroSectionAll'
import Navbar from '../components/navbar/Navbar'
import ContactSection from '../components/ContactUs/ContactSection'
import ContactPlate from '../components/ContactUs/ContactPlate'
import Map from '../components/ContactUs/Map'
import Footer from '../components/footer/Footer'
import { Helmet } from 'react-helmet-async'

function ContactUs() {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  return (
    <>
      <Helmet>
        <title>Contact Radiance Clinic: Expert Skin & Hair Transplant, Nagpur</title>
        <meta
        name="description"
        content="Get in touch with Radiance Clinic for appointments and
        inquiries. Reach out to our Nagpur clinic for expert skin and hair
        treatments."
        />
        <link rel="canonical"
        href="https://radianceclinic.co.in/contact-us" />
      </Helmet>
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