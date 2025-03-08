import React, { useState } from 'react';
import HeroSectionAll from '../../components/SharedComponents/HeroSectionAll';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Footer from '../../components/footer/Footer';
import Grayflower from '../../assets/SharedAssets/GrayFlower.svg';

function Terms() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };
  const sections = [
    {
      title: "Acceptance of Terms",
      content: "By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Dr. Barde's Radiance website if you do not accept all of the terms and conditions stated on this page."
    },
    {
      title: "Services Provided",
      content: "Dr. Barde's Radiance offers the following services: Cosmetic Dermatology, Laser Treatments, Skincare Consultations, Hair Restoration, and Other Aesthetic Services."
    },
    {
      title: "Intellectual Property Rights",
      content: "Unless otherwise stated, Dr. Barde's Radiance and/or its licensors own the intellectual property rights for all material on the website. All intellectual property rights are reserved."
    },
    {
      title: "User Account",
      content: "If you create an account on our website, you are responsible for maintaining the security of your account and for all activities that occur under the account."
    },
    {
      title: "Limitation of Liability",
      content: "In no event shall Dr. Barde's Radiance, nor any of its officers, directors, and employees, be liable for anything arising out of or in any way connected with your use of this website."
    },
    {
      title: "Governing Law",
      content: "These terms and conditions are governed by and construed in accordance with the laws of India, and you submit to the non-exclusive jurisdiction of the state and federal courts located in India for the resolution of any disputes."
    },
  ];
  

  return (
    <>
      <Helmet>
        <title>Terms and Conditions - Dr. Barde's Radiance Clinic</title>
        <meta name="description" content="Welcome to Dr. Barde's Radiance Clinic. These terms and conditions outline the rules and regulations for the use of Dr. Barde's Radiance Clinic's website." />
        <meta name="keywords" content="terms and conditions, Dr. Barde's Radiance Clinic, terms of service, terms of use, user agreement, website rules, legal terms, usage policy, website terms, legal agreement, site terms, conditions of use" />
        <link rel="canonical" href="/terms-and-condition" />
      </Helmet>

<HeroSectionAll Title="Terms & Conditions" Path="Home/ Legal" SubPath="Terms & Conditions" />
     

      <div className='overflow-x-hidden bg-purple-50 relative py-20'>

        <img src={Grayflower} alt="Filler content" width="auto" height="auto" className=' rotate-12 absolute top-5 right-0 z-0' />
     
      <div className="flex items-center gap-4 w-full justify-center mx-auto">
                 
                  <h3
                    className="font-ElMessiri text-[#554075] font-bold text-center"
                    style={{ fontSize: "clamp(20px, 4vw, 60px)" }}
                  >
                    Terms and Conditions
                  </h3>
                  
                </div>

        <div
        
          className="flex flex-col justify-center items-center min-h-screen w-full relative gap-20 px-4"
        >
          <div className="w-full max-w-4xl 2xl:max-w-screen-2xl bg-purple-100 py-12 px-6 rounded-xl shadow-lg">
            <div className="bg-white w-full rounded-xl overflow-hidden">
              <div className="px-4 sm:px-6 lg:px-8 py-8">
               

                <p
                  className="mb-7 text-center 2xl:!text-[2vw]"
                  style={{ fontSize: "clamp(14px, 4vw, 20px)" }}
                >
                  Welcome to Dr. Barde's Radiance Clinic These terms and conditions outline the rules and regulations for the use of Dr. Barde's Radiance Clinic's Website, located at <a href="/" className='hover:underline underline-offset-2 text-[#a061ff]'>radianceclinic.co.in</a> .
                </p>

                <div className="space-y-4 ">
                  {sections.map((section, index) => (
                    <div
                      key={index}
                      className="border-b transition duration-500 border-gray-200 pb-4"
                    >
                      <button
                        onClick={() => toggleSection(index)}
                        className="w-full flex justify-between items-center text-left text-base sm:text-lg 2xl:!text-[2vw] font-semibold text-gray-800 hover:text-[#644b8a] transition-colors duration-300"
                      >
                        <span className="flex-grow pr-4">{section.title}</span>
                        {openSections[index] ? (
                          <ChevronUp className="text-gray-500 flex-shrink-0 2xl:w-9 2xl:h-9 " />
                        ) : (
                          <ChevronDown className="text-gray-500 flex-shrink-0 2xl:w-9 2xl:h-9" />
                        )}
                      </button>

                      {openSections[index] && (
                        <p className="mt-4 text-gray-600 2xl:!text-[2vw] 2xl:leading-tight text-sm sm:text-base">
                          {section.content}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  <Footer/>
    </>
  );
}

export default Terms;
