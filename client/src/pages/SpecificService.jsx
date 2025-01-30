import React,{useEffect,useState} from 'react'
import PrimaryBtn from '../components/Buttons/PrimaryBtn'
import Appointment from '../assets/SharedAssets/Appointment'
import HairTransplant from '../assets/Services/HairTransplant.svg'
import HairTransplantP from '../assets/Services/Process/HairTransplantP.svg'
import HeroSectionAll from '../components/SharedComponents/HeroSectionAll'
import GrayFlower from '../assets/SharedAssets/GrayFlower.svg'
import AfterCare from '../assets/SharedAssets/AfterCare.svg'

function SpecificService() {
const [Show, setShow] = useState(false);

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const Data = query.get("Data"); // Get the slide index from URL
      if (Data === 'Hair') {
        setShow(true);
      }
      }, [location]);

  return (
    <>

<HeroSectionAll Title={'Hair Transplant'} Path={'Home'} SubPath={'Services / Hair Transplant'} />

    
        <div className={`flex flex-col items-center gap-16 py-20 w-screen px-3 md:px-10 xl:px-28 ${Show ? '' : 'bg-[#E2DBFF]'} `}>

            
{/* Information card */}
            <div className='flex flex-col  lg:flex-row bg-[#E2DBFF] p-4 md:p-8 shadow-2xl items-center gap-10 justify-between w-full'>
            <img src={HairTransplant} alt="" className='md:w-[60%] lg:w-[40%]' />
                <div className='flex flex-col items-center md:items-start  gap-5 lg:w-1/2'>

                <h2 className='font-ElMessiri text-[#554075] font-bold leading-tight text-center md:text-left' style={{fontSize:'clamp(36px,4vw,60px)'}}>What is Hair Trasnsplant</h2>

                <p className='text-[#554075] font-medium 2xl:w-[650px] text-center md:text-left xl:text-2xl'>
                Hair loss is a fairly common problem of urban life today. Balding is major concern for about 60% men as well as a significant 10% of women.  Unsurprisingly, hair transplantation is one of the most common cosmetic surgery people seek. Lack of hair leads to severe loss of self-confidence about one’s appearance and is also lesser attractive.  Hair transplantation services today have advanced by leaps and bounds and very natural looking hair and near-permanent solutions are now available. All degrees of baldness are treated with customized, minimally invasive techniques to achieve desired result.
                </p>

                <PrimaryBtn className='mt-5'>Book Appointment  <Appointment size={'24px'} /></PrimaryBtn>

                </div>

            </div>

            {/* process card */}
            <div className='flex flex-col  bg-[#E2DBFF] p-4 md:p-8 shadow-2xl  gap-10 items-center w-full'>
                <div className='flex flex-col items-center  gap-5 '>

                <h2 className='font-ElMessiri text-[#554075] font-bold leading-tight text-center ' style={{fontSize:'clamp(36px,4vw,60px)'}}>PROCEDURE OVERVIEW</h2>

                <p className='text-[#554075] font-medium text-center  xl:text-2xl'>
                At Radiance, we believe that one size “does not” fit all! Every case is dealt uniquely and the best and most advanced approach is applied for best results. Hair transplant is a minimally invasive technique involving extraction of hair follicles from rear or side areas of the head and surgical implantation into the bald region. The number of hair follicles implanted may vary between forms and degrees of baldness. Apart from traditional transplantation, several state-of-art hair transplantation techniques too are routinely employed depending on the condition and pattern of hair loss in the patient.                </p>

                <img src={HairTransplantP} alt="" className='w-[80%] ' />

                </div>


            </div>


        <div className='flex flex-col gap-10 items-center w-full'>

        <h2 className='font-ElMessiri text-[#554075] font-bold leading-tight text-center ' style={{fontSize:'clamp(36px,4vw,60px)'}}>WHAT YOU SHOULD EXPECT AT RADIANCE CLINIC</h2>


          <div className='flex flex-wrap gap-16 justify-center '>

              
              <div className='flex flex-col relative bg-[#E2DBFF] shadow-xl items-center justify-center gap-10 p-5 w-[300px]'>
              <img src={GrayFlower} alt="" className='absolute bottom-0 right-0 w-[70%] ' />
                <h2 className='font-ElMessiri text-[#554075] z-10 font-bold leading-tight text-center ' style={{fontSize:'clamp(36px,4vw,60px)'}}>Diagonise</h2>
                <h2 className='font-ElMessiri text-[#554075] z-10 font-bold text-center text-9xl leading-[100px]' >1</h2>
                <p className='text-[#554075] font-bold text-center z-10  '>Our experts conduct a detailed study of the skin and hair condition and get to the root cause.</p>
              </div>


              <div className='flex relative flex-col bg-[#E2DBFF] shadow-xl items-center justify-center gap-10 p-5 w-[300px]'>
              <img src={GrayFlower} alt="" className='absolute bottom-0 right-0 w-[70%] ' />

                <h2 className='font-ElMessiri text-[#554075] z-10 font-bold leading-tight text-center ' style={{fontSize:'clamp(36px,4vw,60px)'}}>TREAT</h2>
                <h2 className='font-ElMessiri text-[#554075] z-10 font-bold text-center text-9xl leading-[100px]' >2</h2>
                <p className='text-[#554075] font-bold text-center  z-10 '>Customized treatment plan including advanced technology and services for every patient depending on the expert diagnosis</p>
              </div>

              <div className='flex relative flex-col bg-[#E2DBFF] shadow-xl items-center justify-center gap-10 p-5 w-[300px]'>
              <img src={GrayFlower} alt="" className='absolute bottom-0 right-0 w-[70%] ' />

                <h2 className='font-ElMessiri text-[#554075] font-bold z-10 leading-tight text-center ' style={{fontSize:'clamp(36px,4vw,60px)'}}>MAINTAIN</h2>
                <h2 className='font-ElMessiri text-[#554075] font-bold z-10 text-center text-9xl leading-[100px]' >3</h2>
                <p className='text-[#554075] font-bold text-center z-10  '>Close monitoring of treatment progress along with guidance on the right diet, medications and hair care.</p>
              </div>

          </div>


        </div>

        <div className='flex flex-col  lg:flex-row bg-[#E2DBFF] p-4 md:p-8 shadow-2xl items-center gap-10 justify-between w-full'>
            <img src={AfterCare} alt="" className='md:w-[60%] lg:w-[40%]' />
                <div className='flex flex-col items-center md:items-start  gap-5 lg:w-1/2'>

                <h2 className='font-ElMessiri text-[#554075] font-bold leading-tight text-center md:text-left' style={{fontSize:'clamp(36px,4vw,60px)'}}>AFTERCARE</h2>

                <span className='text-[#554075] mb-4 font-medium xl:w-[650px] text-center md:text-left xl:text-2xl'>
                <span className=' font-bold'>Post-Procedure Consultation: </span>Personalized follow-up sessions to monitor healing and progress.
                </span>
                <span className='text-[#554075] mb-4  font-medium xl:w-[650px] text-center md:text-left xl:text-2xl'>
                <span className=' font-bold'>Specialized Hair Wash Service: </span>Professional washing of the treated area for the first few sessions.
                </span>
                <span className='text-[#554075] mb-4  font-medium xl:w-[650px] text-center md:text-left xl:text-2xl'>
                <span className=' font-bold'>Medication Guidance: </span> Assistance with post-procedure medications and their usage.
                </span>
                <span className='text-[#554075] mb-4  font-medium xl:w-[650px] text-center md:text-left xl:text-2xl'>
                <span className=' font-bold'>Scalp Care Kits: </span> Provide specially formulated shampoos, lotions, and aftercare products.

                </span>
                <span className='text-[#554075] mb-4  font-medium xl:w-[650px] text-center md:text-left xl:text-2xl'>
                <span className=' font-bold'>
                24/7 Support Line: </span> Access to a helpline for any urgent questions or concerns.
                </span>

                <PrimaryBtn className='mt-5'>Book Appointment  <Appointment size={'24px'} /></PrimaryBtn>

                </div>

            </div>


        </div>

    </>
  )
}

export default SpecificService
