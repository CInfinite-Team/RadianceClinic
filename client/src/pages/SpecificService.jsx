import React,{useEffect,useState} from 'react'
import PrimaryBtn from '../components/Buttons/PrimaryBtn'
import Appointment from '../assets/SharedAssets/Appointment'
import HairTransplant from '../assets/Services/HairTransplant.svg'
import HairTransplantP from '../assets/Services/Process/HairTransplantP.svg'
import HeroSectionAll from '../components/SharedComponents/HeroSectionAll'

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

                <p className='text-[#554075] font-medium xl:w-[650px] text-center md:text-left xl:text-2xl'>
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

        </div>

    </>
  )
}

export default SpecificService
