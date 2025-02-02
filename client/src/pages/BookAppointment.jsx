import React,{useEffect} from 'react'
import Navbar from '../components/navbar/Navbar'
import HeroSectionAll from '../components/SharedComponents/HeroSectionAll'
import AppointmentForm from '../components/Appointment/AppointmentForm'
import Footer from '../components/footer/Footer'
function BookAppointment() {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  return (
    <>
      <Navbar/>
      <HeroSectionAll Title={'Consultation Appointment'} Path={'Home'} SubPath={'Consultation Appointment'} />
      <AppointmentForm/>
      <Footer/>
    </>
  )
}

export default BookAppointment