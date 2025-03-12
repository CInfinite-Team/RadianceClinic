import {useState} from 'react'
import PrimaryBtn from '../Buttons/PrimaryBtn';
import Logo from '../../assets/Admin/LoginLogo.svg';
import dashboard from '../../assets/Admin/dashboard.svg';
import Blog from '../../assets/Admin/Blog.svg';
import ViewBlog from '../../assets/Admin/ViewBlog.svg';
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
        
       

        <div className="text-center mt-4 pb-6">
          <img loading='lazy' width="auto" height="auto" src={Logo} alt="Logo" className="w-36 md:w-56" />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-4">
          <a
            href="#"
            className={`flex items-center text-[#463660] hover:font-bold text-sm sm:text-base md:text-lg transition-all duration-200 ${selectedLink === 'dashboard' ? 'font-bold' : ''}`}
            onClick={() => handleLinkClick('dashboard')}
          >
            <img loading='lazy' width="auto" height="auto"
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
            <img  loading='lazy' width="auto" height="auto"
              src={appointments}
              className="mr-2 w-7 h-7"
              alt="Appointments"
            />
            Appointments
          </a>
          <a
            href="#"
            className={`flex items-center text-[#463660] hover:font-bold  text-sm sm:text-base md:text-lg transition-all duration-200 ${selectedLink === 'leads' ? 'font-bold' : ''}`}
            onClick={() => handleLinkClick('leads')}
          >
            <img loading='lazy' width="auto" height="auto"
              src={leads}
              className="mr-2 w-8 h-8"
              alt="Leads"
            />
            Leads
          </a>
          <a
            href="#"
            className={`flex items-center text-[#463660] hover:font-bold  text-sm sm:text-base md:text-lg transition-all duration-200 ${selectedLink === 'forms' ? 'font-bold' : ''}`}
            onClick={() => handleLinkClick('forms')}
          >
            <img loading='lazy' width="auto" height="auto"
              src={forms}
              className="mr-2 w-6 h-6 "
              alt="Forms"
            />
            Forms
          </a>
          <a
            href="#"
            className={`flex items-center text-[#463660] hover:font-bold  text-sm sm:text-base md:text-lg transition-all duration-200 ${selectedLink === 'blogs' ? 'font-bold' : ''}`}
            onClick={() => handleLinkClick('blogs')}
          >
            <img loading='lazy' width="auto" height="auto"
              src={Blog}
              className="mr-2 w-[23px] h-[23px] "
              alt="Blog"
            />
            Add Blogs
          </a>
          <a
            href="#"
            className={`flex items-center text-[#463660] hover:font-bold  text-sm sm:text-base md:text-lg transition-all duration-200 ${selectedLink === 'Delblogs' ? 'font-bold' : ''}`}
            onClick={() => handleLinkClick('Delblogs')}
          >
            <img loading='lazy' width="auto" height="auto"
              src={ViewBlog}
              className="mr-2 w-[23px] h-[23px] "
              alt="Blog"
            />
            View Blogs
          </a>
        </nav>

        <div className="mt-auto w-full">
          <PrimaryBtn title='Log out' onClick={Logout}
             className={'w-full justify-center !py-2 rounded-md  whitespace-nowrap  '}
        >Log out</PrimaryBtn>
        </div>
      </div>
       
   </>
  )
}

export default Left_Panel
