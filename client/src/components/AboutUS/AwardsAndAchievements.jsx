import React from 'react'

function AwardsAndAchievements({AwardsData, AwardImage}) {

  
  return (
  <>
   <section className="max-w-5xl mx-auto p-6">
      <h2 className="text-4xl font-bold font-ElMessiri text-[#554075] mb-8">Awards And Achievement</h2>
      
      <div className=" border-l-2 border-[#554075] ml-16">
        {AwardsData.map((award, index) => (
          <div key={index} className="mb-9 relative ml-5">
            <div className="absolute -left-24 top-2.5 px-2 w-fit h-8 bg-[#FCEEFF] text-[#51545D]  flex items-center justify-center">
              {award.year}
            </div>
            <div className="bg-white p-1 ">
              <h3 className="text-2xl font-semibold text-[#554075] font-ElMessiri ">{award.title}</h3>
              <p className="text-base text-[#B2A6CE] mb-2">{award.dateRange}</p>
              <p className="text-[#50535C]">{award.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-16 mt-12 ml-16">
        {AwardImage.map((img, index) => (
        <img key={index}  src={img} alt="Award 1" className="h-16"/>
     ))} 
      </div>
    </section>
  </>
  )
}

export default AwardsAndAchievements
