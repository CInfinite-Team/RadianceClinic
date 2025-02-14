import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PrimaryBtn from '../Buttons/PrimaryBtn';
import SecondaryBtn from '../Buttons/SecondaryBtn';
import Appointment from '../../assets/SharedAssets/Appointment';
import HeroImg1 from '../../assets/Home/HeroImg1.svg';
import HeroImg2 from '../../assets/Home/HeroImg2.svg';
import HeroImg3 from '../../assets/Home/HeroImg3.svg';
import Plant from '../../assets/Home/plant.png';
import sparkling from '../../assets/Home/sparkling.svg';
import TiledArrow from '../../assets/SharedAssets/TiledArrow.svg';

function HeroSectionHome() {
    const [currentImg, setCurrentImg] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const Images = [HeroImg1, HeroImg2, HeroImg3];
    const Links=['/services/anti-aging','/services/hair','/services/skin'];
    const SecondBtnText=['Explore Anti-Aging Treatments','Explore Hair Treatments','Explore Skin Treatments'];

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(ChangeImg, 2500);
        return () => clearInterval(interval);
    }, []);

    function ChangeImg() {
        setCurrentImg((prev) => (prev === Images.length - 1 ? 0 : prev + 1));
    }

    
    return (
        <div className="relative w-screen min-h-screen HeroGradient flex justify-end md:items-end overflow-hidden">
            <img 
                src={Plant} 
                alt="" 
                className="absolute hidden lg:block w-[250px] xl:w-auto 2xl:w-[190px] top-10 left-6 xl:top-5 2xl:top-10 xl:left-20 animate-float"
            />
            <img 
                src={sparkling} 
                alt="" 
                className="absolute hidden lg:block 2xl:w-[80px] top-48 2xl:top-44 left-1/2 -translate-x-28 animate-sparkle"
            />
            <div className="flex flex-col lg:flex-row relative justify-between w-full ml-5 xl:ml-20 2xl:ml-36 items-center gap-4">
                <div className={`flex flex-col mt-32 lg:-translate-y-[29%] xl:-translate-y-[20%] 2xl:-translate-y-[10%] gap-11 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                    <div className="flex flex-col gap-4 justify-center md:items-start">
                        <h1 className="font-ElMessiri text-[#52436A] font-bold text-center lg:text-left leading-[40px] md:leading-[70px] lg:leading-[80px] xl:leading-[91px] text-[45px] md:text-[70px] xl:text-[90px] 2xl:text-[98px] animate-fadeIn">
                            Beauty redefined,<br /> care <span className="underline-text font-ElMessiri leading-[40px]">perfected</span>.
                        </h1>

                        <p className="max-w-[90vw] mx-auto md:mx-0 md:max-w-[520px] xl:max-w-[680px] text-[#7E7E7E] font-Inter text-[16px] xl:text-[19px] text-center lg:text-left animate-fadeIn animation-delay-200">
                            Our signature treatments are designed to enhance natural beauty. We use advanced techniques to refresh, nourish, and bring out your skin's radiance, giving you a flawless glow.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-7 items-center animate-fadeIn animation-delay-400">
                        <PrimaryBtn className="hover:scale-105 !p-0 !py-0 transition-transform">
                        <Link to='/book-appointment' className='p-4 py-3 flex'> Book Appointment <Appointment size={'24px'} />  </Link>
                        </PrimaryBtn>
                        <SecondaryBtn className="hover:scale-105 !p-0 !py-0 relative group max-w-[250px]  whitespace-nowrap transition-transform">
                        <Link to={Links[currentImg]} className='p-4 py-3 flex overflow-hidden text-ellipsis' > Explore {SecondBtnText[currentImg]}</Link>
                       <span className='absolute bg-[#0000005d] text-white rounded-md font-normal backdrop-blur-md border-[#d4cafd] border-2 opacity-0 group-hover:opacity-100 transition-all duration-500  -top-12 -left-2 p-1 '>Explore {SecondBtnText[currentImg]}</span>
                        </SecondaryBtn>
                        <a href='/about-us' className="p-4 rounded-full bg-white hover:rotate-45 transition-transform duration-500">
                            <img src={TiledArrow} alt="" />
                        </a>
                    </div>
                    <div className="  transform translate-x-[10%] hidden lg:flex items-center gap-2">
                {Array.from({ length: Images.length }).map((_, index) => (
                    <div
                        onClick={() => setCurrentImg(index)}
                        key={index}
                        className={`h-1 w-20 md:w-28 rounded-full cursor-pointer transition-all duration-500 ${
                            index === currentImg ? 'bg-[#9A73B3] scale-110' : 'bg-white'
                        }`}
                    />
                ))}
            </div>
                </div>

                <img 
                    src={Images[currentImg]} 
                    loading="eager" 
                    alt="" 
                    className={`max-w-[100vw] md:max-w-[31rem] will-change-auto lg:max-w-[73vh] xl:max-w-[73vh] right-0 lg:absolute lg:-right-20 xl:right-0 bottom-0 md:translate-x-[30%] lg:!translate-x-0 -z-10 2xl:max-w-[36rem] transition-all duration-700 transform ${
                        currentImg === 2 || currentImg === 1 
                            ? 'md:max-w-[55%] lg:!max-w-[59vh] lg:right-0 md:!translate-x-[41%] lg:translate-x-0 2xl:!max-w-[30rem] xl:!max-w-[60vh]'
                            : ''
                    } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
                />
            </div>

            {/* Move the indicator div outside the content but inside the outermost container */}
            <div className="absolute bottom-5 left-1/2 lg:left-[22%] lg:hidden lg:bottom-9 transform -translate-x-1/2 flex items-center gap-2">
                {Array.from({ length: Images.length }).map((_, index) => (
                    <div
                        onClick={() => setCurrentImg(index)}
                        key={index}
                        className={`h-1 w-20 md:w-28 rounded-full cursor-pointer transition-all duration-500 ${
                            index === currentImg ? 'bg-[#9A73B3] scale-110' : 'bg-white'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}

export default HeroSectionHome;