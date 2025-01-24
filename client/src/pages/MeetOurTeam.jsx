import React from 'react'
import OurTeamIntroCard from '../components/Home/OurTeamIntroCard'
import {NitinData} from '../components/Home/OurTeamData'
import {RadhikaData} from '../components/Home/OurTeamData'

function MeetOurTeam() {
  return (
   <>
    <div className='flex flex-col py-20 w-full px-5 md:px-10 xl:px-28  min-h-screen gap-10 '>

    <h1 className='font-ElMessiri text-[#554075] font-bold leading-tight ' style={{fontSize:'clamp(36px,6vw,60px)'}}>Meet Our Expert Team</h1>
    <OurTeamIntroCard Data={NitinData} />
    <OurTeamIntroCard Data={RadhikaData} />

    </div>
   </>
  )
}

export default MeetOurTeam
