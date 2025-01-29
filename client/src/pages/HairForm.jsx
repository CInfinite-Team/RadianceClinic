import React from 'react'
import Navbar from '../components/navbar/Navbar'
import PatientFormsTitle from '../components/SharedComponents/PatientFormsTitle'
import HairformComponent from '../components/HairForm/HairFormComponent.jsx'
import Footer from '../components/footer/Footer'

function HairForm() {
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
