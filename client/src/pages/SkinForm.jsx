import React,{useEffect} from 'react'
import PatientFormsTitle from '../components/SharedComponents/PatientFormsTitle'
import Navbar from '../components/navbar/Navbar'
import SkinFormComponent from '../components/SkinForm/SkinFormComponent'
import Footer from '../components/footer/Footer'
import { Helmet } from 'react-helmet-async'
function SkinForm() {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  return (
   <>
    <Helmet>
      <title>Skin Treatment Patient Form – Radiance Clinic,
      Nagpur</title>
      <meta
      name="description"
      content="Fill out the skin treatment patient form at Radiance
      Clinic to provide your medical history and preferences before your
      appointment in Nagpur."
      />
      <link rel="canonical"
      href="https://radianceclinic.co.in/patient-form/skin" />
    </Helmet>
    <Navbar/>
    <PatientFormsTitle Title='New patient Enrollment For Skin Treatment' />
    <SkinFormComponent/>
    <Footer/>
   </>
  )
}

export default SkinForm