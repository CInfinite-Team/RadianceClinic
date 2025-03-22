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
        <title>Book Your Appointment | Radinace Clinic – Hair & Skin Care in Nagpur</title>
        <meta
        name="description"
        content="Schedule your hair transplant or skin treatment consultation at Radinace Clinic in Nagpur. Expert care, personalized solutions. Book now!"
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