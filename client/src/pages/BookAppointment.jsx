import React,{useEffect} from 'react'
import Navbar from '../components/navbar/Navbar'
import HeroSectionAll from '../components/SharedComponents/HeroSectionAll'
import AppointmentForm from '../components/Appointment/AppointmentForm'
import Footer from '../components/footer/Footer'
import { Helmet } from 'react-helmet-async'

function BookAppointment() {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  return (
    <>
      <Helmet>
        <title>Book Your Appointment – Radiance Clinic, Nagpur</title>
        <meta
        name="description"
        content="Book a consultation at Radiance Clinic for expert skin care, anti-aging, and hair transplant services in Nagpur, India."
        />
        <link rel="canonical"
        href="https://radianceclinic.co.in/book-appointment" />
      </Helmet>
      <Navbar/>
      <HeroSectionAll Title={'Book Your Appointment'} Path={'Home'} SubPath={'Book Your Appointment'} />
     
      <AppointmentForm/>
      <Footer/>
    </>
  )
}

export default BookAppointment