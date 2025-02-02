import React,{useEffect} from 'react'
import Navbar from '../components/navbar/Navbar'
import PatientFormsTitle from '../components/SharedComponents/PatientFormsTitle'
import HairformComponent from '../components/HairForm/HairFormComponent.jsx'
import Footer from '../components/footer/Footer'

function HairForm() {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  return (
   <>
   <Navbar/>
    <PatientFormsTitle Title='New patient Enrollment For Hair Treatment' />
    <HairformComponent/>
    <Footer/>
   </>
  )
}

export default HairForm
