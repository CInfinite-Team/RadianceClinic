import React from 'react'
import PatientFormsTitle from '../components/SharedComponents/PatientFormsTitle'
import Navbar from '../components/navbar/Navbar'
import SkinFormComponent from '../components/SkinForm/SkinFormComponent'
import Footer from '../components/footer/Footer'
function SkinForm() {
  return (
   <>
    <Navbar/>
    <PatientFormsTitle Title='New patient Enrollment For Skin Treatment' />
    <SkinFormComponent/>
    <Footer/>
   </>
  )
}

export default SkinForm