import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HeroSectionHome from '../components/Home/HeroSectionHome'
// import HeroSectionAll from '../components/SharedComponents/HeroSectionAll'
function Home() {
  return (
    <>
    <Navbar />
    <HeroSectionHome />
    {/* <HeroSectionAll Title={'About Us'} Path={'Home'} SubPath={'About Us'} /> */}

    {/* <div>Home</div> */}
    </>
  )
}

export default Home