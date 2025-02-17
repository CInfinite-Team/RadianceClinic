import React,{useEffect} from 'react'
import Navbar from '../components/navbar/Navbar'
import PatientFormsTitle from '../components/SharedComponents/PatientFormsTitle'
import HairformComponent from '../components/HairForm/HairFormComponent.jsx'
import Footer from '../components/footer/Footer'
import { Helmet } from 'react-helmet-async'

function HairForm() {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  return (
   <>
   <Helmet>
    <title>Hair Treatment Patient Form – Radiance Clinic,
    Nagpur</title>
    <meta
    name="description"
    content="Complete the hair treatment patient form at Radiance
    Clinic to share your hair health history and treatment goals prior to
    your Nagpur appointment."
    />
    <link rel="canonical"
    href="https://radianceclinic.co.in/patient-form/hair" />
   </Helmet>
   <Navbar/>
    <PatientFormsTitle Title='New patient Enrollment For Hair Treatment' />
    <HairformComponent/>
    <Footer/>
   </>
  )
}

export default HairForm
