import React from 'react'
import PrimaryBtn from '../Buttons/PrimaryBtn';
import Logo from '../../assets/SharedAssets/adminPanel_logo.png';
import dashboard from '../../assets/Admin/dashboard.png';
import leads from '../../assets/Admin/leads.png';
import appointments from '../../assets/Admin/appointments.png';
import forms from '../../assets/Admin/forms.png';

function Left_Panel({handleLinkClick,selectedLink}) {
  return (
   <>
   <div className="flex-[1] bg-white h-screen p-6 flex flex-col items-center ">
        <div className="text-center mb-6 pb-6">
          <img src={Logo} alt="Logo" className="h-auto w-auto" />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-4">
          <a
            href="#"
            className={`flex items-center text-[#463660] hover:font-bold text-sm sm:text-base md:text-lg transition-all duration-200 ${selectedLink === 'dashboard' ? 'font-bold' : ''}`}
            onClick={() => handleLinkClick('dashboard')}
          >
            <img
              src={dashboard}
              className="mr-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
              alt="Dashboard"
            />
            Dashboard
          </a>
          <a
            href="#"
            className={`flex items-center text-[#463660] hover:font-bold  text-sm sm:text-base md:text-lg transition-all duration-200 ${selectedLink === 'appointments' ? 'font-bold' : ''}`}
            onClick={() => handleLinkClick('appointments')}
          >
            <img
              src={appointments}
              className="mr-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
              alt="Appointments"
            />
            Appointments
          </a>
          <a
            href="#"
            className={`flex items-center text-[#463660] hover:font-bold  text-sm sm:text-base md:text-lg transition-all duration-200 ${selectedLink === 'leads' ? 'font-bold' : ''}`}
            onClick={() => handleLinkClick('leads')}
          >
            <img
              src={leads}
              className="mr-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
              alt="Leads"
            />
            Leads
          </a>
          <a
            href="#"
            className={`flex items-center text-[#463660] hover:font-bold  text-sm sm:text-base md:text-lg transition-all duration-200 ${selectedLink === 'forms' ? 'font-bold' : ''}`}
            onClick={() => handleLinkClick('forms')}
          >
            <img
              src={forms}
              className="mr-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
              alt="Forms"
            />
            Forms
          </a>
        </nav>

        <div className="mt-auto">
          <PrimaryBtn
             className={'px-20 py-2 rounded-md xs:px-2 sm:px-6 md:px-20 xs:text-xs md:text-lg'}
        >Log out</PrimaryBtn>
        </div>
      </div>
       <div className="w-[2px] bg-gray-300"></div>
   </>
  )
}

export default Left_Panel
