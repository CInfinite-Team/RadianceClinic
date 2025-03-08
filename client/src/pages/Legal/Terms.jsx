import React, { useState } from 'react';
import HeroSectionAll from '../../components/SharedComponents/HeroSectionAll';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

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
      content: "By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use MagnifyX's website if you do not accept all of the terms and conditions stated on this page."
    },
    {
      title: "Services Provided",
      content: "MagnifyX offers the following luxury digital marketing services: Luxury Email Marketing, Luxury SEO, Luxury Copywriting, Luxury Social Media, Other Services"
    },
    {
      title: "Intellectual Property Rights",
      content: "Unless otherwise stated, MagnifyX and/or its licensors own the intellectual property rights for all material on MagnifyX. All intellectual property rights are reserved."
    },
    {
      title: "User Account",
      content: "If you create an account on our website, you are responsible for maintaining the security of your account and for all activities that occur under the account."
    },
    {
      title: "Limitation of Liability",
      content: "In no event shall MagnifyX, nor any of its officers, directors, and employees, be liable for anything arising out of or in any way connected with your use of this website."
    },
    {
      title: "Governing Law",
      content: "These terms and conditions are governed by and construed in accordance with the laws of United Kingdom, and you submit to the non-exclusive jurisdiction of the state and federal courts located in United Kingdom for the resolution of any disputes."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Terms and Conditions - MagnifyX</title>
        <meta name="description" content="Welcome to MagnifyX. These terms and conditions outline the rules and regulations for the use of MagnifyX's website." />
        <meta name="keywords" content="terms and conditions, MagnifyX, terms of service, terms of use, user agreement, website rules, legal terms, usage policy, website terms, legal agreement, site terms, conditions of use" />
        <link rel="canonical" href="/terms-and-condition" />
      </Helmet>

<HeroSectionAll Title="Terms & Conditions" Path="Home/ Legal" SubPath="Terms & Conditions" />
     

      <div className='overflow-x-hidden'>
        

        <div
        
          className="flex flex-col justify-center items-center min-h-screen w-full relative gap-20 px-4"
        >
          <div className="w-full max-w-4xl bg-gray-50 py-12 px-4 rounded-xl shadow-lg">
            <div className="bg-white w-full rounded-xl overflow-hidden">
              <div className="px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex items-center gap-4 mb-8 w-full max-w-2xl mx-auto">
                  <div className="border border-black flex-1"></div>
                  <h3
                    className="font-Cormorant font-bold text-center"
                    style={{ fontSize: "clamp(20px, 3vw, 38px)" }}
                  >
                    Terms and Conditions
                  </h3>
                  <div className="border border-black flex-1"></div>
                </div>

                <p
                  className="mb-7 text-center"
                  style={{ fontSize: "clamp(14px, 4vw, 20px)" }}
                >
                  Welcome to MagnifyX These terms and conditions outline the rules and regulations for the use of MagnifyX's Website, located at <a href="/" className='hover:underline underline-offset-2 text-[#09d2ff]'>magnifyx.co.uk</a>.
                </p>

                <div className="space-y-4">
                  {sections.map((section, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-200 pb-4"
                    >
                      <button
                        onClick={() => toggleSection(index)}
                        className="w-full flex justify-between items-center text-left text-base sm:text-lg font-semibold text-gray-800 hover:text-[#c55e3e] transition-colors duration-300"
                      >
                        <span className="flex-grow pr-4">{section.title}</span>
                        {openSections[index] ? (
                          <ChevronUp className="text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="text-gray-500 flex-shrink-0" />
                        )}
                      </button>

                      {openSections[index] && (
                        <p className="mt-4 text-gray-600 text-sm sm:text-base">
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
  
    </>
  );
}

export default Terms;
