import React from 'react'
import ExploreClinic from '../components/Clinic/ExploreClinic'
import HeroSectionAll from '../components/SharedComponents/HeroSectionAll'
import Treatments from '../components/Clinic/Treatments'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import BeforeAfter from '../components/Clinic/BeforeAfter'

function Clinic() {
  return (
   <>
   <Navbar/>
   <HeroSectionAll Title={'Clinic'} Path={'Home'} SubPath={'Clinic'} />
    <ExploreClinic/>
    <Treatments/>
    <BeforeAfter/>
    <Footer/>
   </>
  )
}

export default Clinic