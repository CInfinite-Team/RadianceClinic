import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HeroSectionAll from '../components/SharedComponents/HeroSectionAll'
import SpecificBlog from '../components/Blog/SpecificBlog'
import Footer from '../components/footer/Footer'
function SpecificBlogPage() {
  return (
    <>
    <Navbar/>
    <HeroSectionAll Title={'Blog'} Path={'Home'} SubPath={'Blog'} />
    <SpecificBlog/>
    <Footer/>
    </>
  )
}

export default SpecificBlogPage
