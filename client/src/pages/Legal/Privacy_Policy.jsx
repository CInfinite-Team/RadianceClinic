import React, { useState } from 'react';
import HeroSectionAll from '../../components/SharedComponents/HeroSectionAll';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Footer from '../../components/footer/Footer';
import Grayflower from '../../assets/SharedAssets/GrayFlower.svg';
import Navbar from '../../components/navbar/Navbar';
function Privacy_Policy() {
    const [openSections, setOpenSections] = useState({});

    const toggleSection = (sectionId) => {
      setOpenSections(prev => ({
        ...prev,
        [sectionId]: !prev[sectionId]
      }));
    };

    const sections = [
      {
        title: "Introduction",
        content: "At Dr. Barde's Radiance, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you visit our website or use our services."
      },
      {
        title: "Information We Collect",
        content: "We do not collect personal information from general users of the website. However, we may collect information from administrative users such as names, email addresses, and other relevant information required to manage the website."
      },
      {
        title: "How We Use Your Information",
        content: "The information collected from admins is used solely for the purposes of website management, including account creation, security purposes, and communication between the admin and the website team."
      },
      {
        title: "Cookies and Tracking Technologies",
        content: "We do not use cookies or other tracking technologies to collect data from general users of the website. However, we may use cookies to enhance the administrative user experience for secure access."
      },
      {
        title: "Data Sharing and Disclosure",
        content: "Dr. Barde's Radiance does not share personal information with third parties except where required by law or for the purposes of managing the website’s operations (e.g., hosting services, security management)."
      },
      {
        title: "Data Security",
        content: "We implement industry-standard security measures to protect the data of administrative users. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security."
      },
      {
        title: "Your Rights",
        content: "As an admin, you have the right to request access to the information we hold about you, update your information, or request its deletion, subject to any legal obligations we may have to retain such data."
      },
      {
        title: "Changes to This Privacy Policy",
        content: "We reserve the right to update or modify this Privacy Policy at any time. Changes will be posted on this page, and it is your responsibility to review this page periodically for any updates."
      },
      {
        title: "Contact Us",
        content: "If you have any questions or concerns regarding this Privacy Policy, you can contact us at radianceclinicnagpur@gmail.com ."
      }
    ];
    
    
  
    return (
      <>
        <Helmet>
          <title>Privacy Policy - Dr. Barde's Radiance Clinic</title>
           <meta name="description" content="Read the privacy policy of Dr. Barde's Radiance Clinic to understand how we collect, use, and protect your personal information." />
          <meta name="keywords" content="privacy policy, Dr. Barde's Radiance Clinic, data protection, personal information, user privacy, data collection, information security, privacy practices, user data, GDPR compliance, data privacy, data security, personal data protection" />
          <link rel="canonical" href="/privacy-policy" />
        </Helmet>
  <Navbar/>
  <HeroSectionAll Title="Privacy Policy" Path="Home/ Legal" SubPath="Privacy Policy" />
       
  
        <div className='overflow-x-hidden bg-purple-50 relative py-20'>
  
          <img src={Grayflower} alt="Filler content" width="auto" height="auto" className=' rotate-12 absolute top-5 right-0 z-0' />
       
        <div className="flex items-center gap-4 w-full justify-center mx-auto">
                   
                    <h3
                      className="font-ElMessiri text-[#554075] font-bold text-center"
                      style={{ fontSize: "clamp(20px, 4vw, 60px)" }}
                    >
                      Privacy Policy
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
   Dr. Barde's Radiance Clinic ("we", "our", or "us") is committed to protecting and respecting your privacy. This policy sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us.                
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
  
export default Privacy_Policy
