import {useState} from 'react'
import PrimaryBtn from '../Buttons/PrimaryBtn';
import Logo from '../../assets/SharedAssets/adminPanel_logo.png';
import dashboard from '../../assets/Admin/dashboard.svg';
// import Blog from '../../assets/Admin/Blog.svg';
import leads from '../../assets/Admin/leads.svg';
import appointments from '../../assets/Admin/appointments.svg';
import forms from '../../assets/Admin/forms.svg';
import { Menu,X } from 'lucide-react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
function Left_Panel({handleLinkClick,selectedLink}) {
    
  const navigate = useNavigate(); 
  
  function Logout(){
    Cookies.remove('LoginStatus');
    navigate('/admin-login');
 }
  const [ShowNavbar,setShowNavbar]=useState(false);

  return (
   <>
    <button onClick={()=> setShowNavbar(!ShowNavbar)} className='fixed left-1 top-2 z-[80] p-1 bg-[#0e0e0e93] transition-all md:hidden duration-500 backdrop-blur-sm rounded-full text-white border '>
   { !ShowNavbar? <Menu size={24}/>
          : <X size={24}/>}
        </button>
   <div className={`flex-1 bg-white h-screen ${ShowNavbar === true ? 'translate-x-0' : '-translate-x-full' } transition-all duration-500 md:translate-x-0 p-6 flex flex-col fixed border-r-2 border-[#3A2E2B] border-opacity-[20%] md:static z-50 items-center `}>
        
       

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
              className="mr-2 w-8 h-8 "
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
              className="mr-2 w-8 h-8"
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
              className="mr-2 w-8 h-8"
              alt="Leads"
            />
            Leads
          </a>
          <a
            href="/admin-forms"
            className={`flex items-center text-[#463660] hover:font-bold  text-sm sm:text-base md:text-lg transition-all duration-200 ${selectedLink === 'forms' ? 'font-bold' : ''}`}
            onClick={() => handleLinkClick('forms')}
          >
            <img
              src={forms}
              className="mr-2 w-6 h-6 "
              alt="Forms"
            />
            Forms
          </a>
          {/* <a
            href="#"
            className={`flex items-center text-[#463660] hover:font-bold  text-sm sm:text-base md:text-lg transition-all duration-200 ${selectedLink === 'forms' ? 'font-bold' : ''}`}
            
          >
            <img
              src={Blog}
              className="mr-2 w-6 h-6 "
              alt="Blog"
            />
            Add Blogs
          </a> */}
        </nav>

        <div className="mt-auto w-full">
          <PrimaryBtn onClick={Logout}
             className={'w-full justify-center !py-2 rounded-md  whitespace-nowrap  '}
        >Log out</PrimaryBtn>
        </div>
      </div>
       
   </>
  )
}

export default Left_Panel
