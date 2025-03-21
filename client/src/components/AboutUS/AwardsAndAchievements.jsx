import React,{useState} from 'react'

function AwardsAndAchievements({AwardsData, AwardImage}) {

  const [TwoLinesOnly, setTwoLinesOnly] = useState(null);
  
  return (
  <>
   <section className="max-w-5xl 2xl:max-w-full mx-auto lg:px-6">
      <h2 className=" font-bold font-ElMessiri text-[#554075] mb-8" style={{fontSize:'clamp(36px,4vw,55px)'}}>Medical Journey</h2>
      
      <div className=" border-l-2 border-[#554075] ml-16">
        {AwardsData.map((award, index) => (
          <div key={index} className="mb-9 relative ml-5">
            <div className="absolute -left-24 2xl:-left-28 top-2.5 px-2 w-fit h-8 2xl:text-2xl bg-[#FCEEFF] text-[#51545D]  flex items-center justify-center">
              {award.year}
            </div>
            <div className="bg-white p-1 ">
              <h3 className=" text-xl sm:text-2xl 2xl:text-4xl font-semibold text-[#554075] font-ElMessiri ">{award.title}</h3>
              <p className=" text-sm sm:text-base text-[#B2A6CE] 2xl:text-2xl mb-2">{award.dateRange}</p>
              <p className=" text-sm sm:text-sm text-[#B2A6CE] 2xl:text-xl mb-2">{award.location}</p>

              <p onMouseEnter={() => setTwoLinesOnly(index)} onMouseLeave={() => setTwoLinesOnly(null)} className={`text-xs 2xl:text-2xl ${TwoLinesOnly ==null || TwoLinesOnly !== index ? 'TwoLinesOnly' : ''} w-[65vw] sm:w-auto sm:text-base text-[#50535C] `}>{award.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="flex gap-16 mt-12 sm:ml-16 ">
        {AwardImage.map((img, index) => (
        <img loading='lazy' width="auto" height="auto" key={index}  src={img} alt="Award 1" className="h-16"/>
     ))} 
      </div> */}
    </section>
  </>
  )
}

export default AwardsAndAchievements
