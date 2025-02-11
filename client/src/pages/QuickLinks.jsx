import React from 'react'
import HeroSectionAll from '../components/SharedComponents/HeroSectionAll'
import Navbar from '../components/navbar/Navbar'
import QuickLinkSection from '../components/QuickLinks/QuickLinkSection'
import Footer from '../components/footer/Footer'

function QuickLinks() {
  return (
   <>
   <Navbar/>
   <HeroSectionAll Title='Quick Links' Path='Home' SubPath='Quick Links' />
   <QuickLinkSection/>
   <Footer/>
   </>
  )
}

export default QuickLinks
