import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom';
import PrimaryBtn from '../components/Buttons/PrimaryBtn'
import Appointment from '../assets/SharedAssets/Appointment'

import HeroSectionAll from '../components/SharedComponents/HeroSectionAll'
import GrayFlower from '../assets/SharedAssets/GrayFlower.svg'
import AfterCare from '../assets/SharedAssets/AfterCare.svg'
import Clinic from '../assets/Home/Clinic.svg'
import Faq from '../components/Home/Faq'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'


function SpecificService() {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

const [Show, setShow] = useState(null);
const [Title, setTitle] = useState(null);

const location = useLocation();
useEffect(() => {
  const urlParams = new URLSearchParams(location.search);
  const treatmentData = JSON.parse(urlParams.get('Data'));
  const Title = urlParams.get('Title');
// console.log(treatmentData.CardTitle)
  if (treatmentData) {
    setShow(treatmentData);
    setTitle(Title);
  }
}, [location]);

  return (
    <>
<Navbar/>
<HeroSectionAll Title={Show ? Show.CardTitle :'Loading...'} Path={'Home'} SubPath={`Services / ${Show ? Show.CardTitle :'Loading...'}`} />

    
        <div className={`flex flex-col items-center gap-16 py-20 w-screen px-3 md:px-10 xl:px-28 ${Show ? '' : 'bg-[#E2DBFF]'} `}>

            
{/* Information card */}
            <div className='flex flex-col  lg:flex-row bg-[#E2DBFF] p-4 md:p-8 shadow-2xl items-center gap-10 justify-between w-full'>
           {Show && <img  loading='lazy' width="auto" height="auto" src={Show.Coverimage} alt="" className='md:w-[60%] lg:w-[40%]' />}
                <div className='flex flex-col items-center md:items-start  gap-5 lg:w-[53%]'>

                <h2 className='font-ElMessiri text-[#554075] font-bold leading-tight text-center md:text-left' style={{fontSize:'clamp(36px,4vw,60px)'}}>What is {Show ? Show.CardTitle : 'Loading....'}</h2>

                <p className='text-[#554075] font-medium 2xl:w-[650px] text-center md:text-left xl:text-2xl'>
                {Show ? Show.description : 'Loading....'}
                </p>

                <PrimaryBtn title='Book Appointment' className='mt-5 !p-0 !py-0'> <a href='/book-appointment' className='p-4 py-3 gap-2 flex'> Book Appointment <Appointment size={'24px'} />  </a></PrimaryBtn>

                </div>

            </div>

            {/* process card */}
            <div className='flex flex-col  bg-[#E2DBFF] p-4 md:p-8 shadow-2xl  gap-10 items-center w-full'>
                <div className='flex flex-col items-center  gap-5 '>

                <h2 className='font-ElMessiri text-[#554075] font-bold leading-tight text-center ' style={{fontSize:'clamp(36px,4vw,60px)'}}>PROCEDURE OVERVIEW</h2>

                <p className='text-[#554075] font-medium text-center  xl:text-2xl'>
                {Show ? Show.approach : 'Loading....'}  </p>

                {Show &&
                  <img loading='lazy' width="auto" height="auto" src={Show.Processimage} alt="" className='w-[80%] ' />}

                </div>


            </div>


        <div className='flex flex-col gap-10 items-center w-full'>

        <h2 className='font-ElMessiri text-[#554075] font-bold leading-tight text-center ' style={{fontSize:'clamp(36px,4vw,60px)'}}>WHAT YOU SHOULD EXPECT AT RADIANCE CLINIC</h2>


          <div className='flex flex-wrap gap-16 justify-center '>

              
              <div className='flex flex-col relative bg-[#E2DBFF] shadow-xl items-center justify-start gap-10 p-5 w-[300px]'>
              <img loading='lazy' width="auto" height="auto" src={GrayFlower} alt="" className='absolute bottom-0 right-0 w-[70%] ' />
                <h2 className='font-ElMessiri text-[#554075] z-10 font-bold leading-tight text-center ' style={{fontSize:'clamp(36px,4vw,60px)'}}>Diagonise</h2>
                <h2 className='font-ElMessiri text-[#554075] z-10 font-bold text-center text-9xl leading-[100px]' >1</h2>
                <p className='text-[#554075] font-bold text-center z-10  '> {Show ? Show.Diagnose : 'Loading....'} </p>
              </div>


              <div className='flex relative flex-col bg-[#E2DBFF] shadow-xl items-center justify-start gap-10 p-5 w-[300px]'>
              <img loading='lazy' width="auto" height="auto" src={GrayFlower} alt="" className='absolute bottom-0 right-0 w-[70%] ' />

                <h2 className='font-ElMessiri text-[#554075] z-10 font-bold leading-tight text-center ' style={{fontSize:'clamp(36px,4vw,60px)'}}>TREAT</h2>
                <h2 className='font-ElMessiri text-[#554075] z-10 font-bold text-center text-9xl leading-[100px]' >2</h2>
                <p className='text-[#554075] font-bold text-center  z-10 '>{Show ? Show.Treat : 'Loading....'}</p>
              </div>

              <div className='flex relative flex-col bg-[#E2DBFF] shadow-xl items-center justify-start gap-10 p-5 w-[300px]'>
              <img loading='lazy' width="auto" height="auto" src={GrayFlower} alt="" className='absolute bottom-0 right-0 w-[70%] ' />

                <h2 className='font-ElMessiri text-[#554075] font-bold z-10 leading-tight text-center ' style={{fontSize:'clamp(36px,4vw,60px)'}}>MAINTAIN</h2>
                <h2 className='font-ElMessiri text-[#554075] font-bold z-10 text-center text-9xl leading-[100px]' >3</h2>
                <p className='text-[#554075] font-bold text-center z-10  '>{Show ? Show.Maintain : 'Loading....'}</p>
              </div>

          </div>


        </div>

        <div className={`flex flex-col ${Title ==='HAIR' ? '' : 'hidden'}  lg:flex-row bg-[#E2DBFF] p-4 md:p-8 shadow-2xl items-center gap-10 justify-between w-full`}>
            <img loading='lazy' width="auto" height="auto" src={AfterCare} alt="" className='md:w-[60%] lg:w-[40%]' />
                <div className='flex flex-col items-center md:items-start  gap-5 lg:w-1/2'>

                <h2 className='font-ElMessiri text-[#554075] font-bold leading-tight text-center md:text-left' style={{fontSize:'clamp(36px,4vw,60px)'}}>AFTERCARE</h2>

                {Show ? Show.AfterCare.map((data,index)=>(<span key={index} className='text-[#554075] mb-4 font-medium text-center md:text-left xl:text-2xl' dangerouslySetInnerHTML={{ __html: data }} />  )) : 'Loading...'}
                  
                

                <PrimaryBtn title='Book Appointment' className='mt-5 !p-0 !py-0'> <a href='/book-appointment' className='p-4 py-3 gap-2 flex'> Book Appointment <Appointment size={'24px'} />  </a></PrimaryBtn>

                </div>

            </div>

<div className='flex lg:flex-row flex-col items-center w-full justify-center gap-10 bg-[#E2DBFF] p-4 md:p-8 shadow-2xl lg:justify-between '>

<div className='flex flex-col order-2 lg:order-1 gap-5'>

<h2 className=" font-bold font-ElMessiri text-[#554075] leading-tight px-1 z-10 " style={{fontSize:'clamp(36px,4vw,55px)'}}>
Radiance Clinic
</h2>

<p className='xl:text-lg text-[#554075] font-medium  lg:w-[450px] xl:w-[575px] '>
At Dr. Barde's Radiance, we understand that hair restoration is a personal journey, and we’re committed to providing the highest level of care and expertise. Our clinic combines advanced hair restoration technologies with a personalized approach tailored to each client’s unique needs. Led by experienced professionals, Radiance ensures safe, effective treatments designed to deliver natural and lasting results. Our mission is not only to restore hair but also to boost confidence and enhance well-being. Choose Radiance for a compassionate, results-driven experience that prioritizes your comfort and satisfaction every step of the way.</p>

<PrimaryBtn title='Explore Clinic' className='!p-0 !py-0'><a href="/clinic" className='p-4 py-3'>Explore Clinic</a></PrimaryBtn>

</div>
<iframe width="560" height="315" className={`lg:max-w-[460px] 2xl:max-w-[43vw] md:h-[400px] lg:h-[315px] 2xl:h-[23vw] 2xl:aspect-video w-full order-1 lg:order-2 xl:max-w-[593px] transition-all duration-1000 transform hover:scale-[1.02] `} src="https://www.youtube.com/embed/9m_8Q2UZieA?si=rnhoelnH08bXrPak" title="YouTube video player"  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
{/* <img loading='lazy' width="auto" height="auto" src={Clinic} alt="" className='lg:max-w-[45%] xl:max-w-[460px] order-1 lg:order-2 ' /> */}

</div>

          


        </div>
        <Faq/>
        <Footer/>

    </>
  )
}

export default SpecificService
