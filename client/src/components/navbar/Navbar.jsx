import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from "../../assets/logo.svg";
import { Hairtreatments, Skintreatments, LaserTreatments, AntiAgingTreatments, CosmeticTreatments } from '../ServicesPage/Treatments';

const serviceItems = {
  hair: {
    category: 'Hair',
    treatments: Hairtreatments
  },
  skin: {
    category: 'Skin',
    treatments: Skintreatments
  },
  laser: {
    category: 'Laser',
    treatments: LaserTreatments
  },
  'anti-aging': {
    category: 'Anti-Aging',
    treatments: AntiAgingTreatments
  },
  'cosmetic-surgery': {
    category: 'Cosmetic-Surgery',
    treatments: CosmeticTreatments
  }
};


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState('');
  const [activeMobileMenus, setActiveMobileMenus] = useState({
    services: false,
    patientForm: false
  });
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState('');

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (submenu) => {
    setActiveSubmenu(submenu);
  };

  const handleMouseLeave = () => {
    setActiveSubmenu('');
  };

  const toggleMobileMenu = (menu) => {
    setActiveMobileMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  const toggleMobileSubmenu = (submenu) => {
    setActiveMobileSubmenu(activeMobileSubmenu === submenu ? '' : submenu);
  };

  return (
    <nav className={`fixed font-Inter font-semibold lg:text-xs xl:text-sm 2xl:text-base w-full lg:w-auto lg:top-6 lg:left-6 z-[9999999] lg:right-6 transition-all duration-500 delay-300 max-h-screen overflow-y-auto lg:overflow-visible smallScrollbar transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
      <div className={`bg-white shadow-md px-3 lg:px-10 transition-all duration-300 ${scrolled ? 'lg:bg-opacity-95' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center h-20 relative">
            {/* Mobile menu button */}
            <div className="lg:hidden absolute right-0">
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-700 hover:text-[#725B98]">
                {isOpen ? <X size={24} className="transform rotate-0 hover:rotate-90 transition-transform duration-300" /> : <Menu size={24} />}
              </button>
            </div>

            {/* Left Navigation */}
            <div className={`hidden lg:flex gap-10 xl:gap-20 flex-1 justify-start transition-all delay-500 duration-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <Link to="/" className="text-black hover:text-[#725B98]">Home</Link>
              <Link to="/book-appointment" className="text-black hover:text-[#725B98]">Book Appointment</Link>
              <div className="relative z-50 group"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}>
                <button className="text-black hover:text-[#725B98] flex items-center">
                  Services
                  <svg className="w-4 h-4 ml-1 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-5-5h10z" /></svg>
                </button>
                <ul className={`absolute left-0 mt-2 z-50 w-48 bg-white border border-gray-200 rounded shadow-md transition-all duration-300 ${activeSubmenu === 'services' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-5'}`}>
                  {Object.entries(serviceItems).map(([key, category]) => (
                    <li key={key} className="relative group/submenu">
                      <div className="flex items-center justify-between text-black hover:bg-gray-100 hover:text-[#725B98] cursor-pointer">
                        <Link to={`/services/${category.category}`} className=' px-4 py-2 w-full '>
                          {category.category}
                        </Link>
                        <svg className="w-4 h-4 ml-1 lg:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-5-5h10z" /></svg>
                        </div>
                      <ul className="absolute left-full z-50 top-0 w-48 bg-white border border-gray-200 rounded shadow-md opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-300">
                        {category.treatments.map((treatment) => (
                          <li key={treatment.CardTitle}>
                             <Link 
                              to={treatment.link}
                              className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-[#725B98]"
                            >
                              <div className="text-sm font-medium">{treatment.CardTitle}</div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/about-us" className="text-black hover:text-[#725B98]">About Us</Link>
            </div>

            {/* Center Logo */}
            <div className="absolute hover:scale-110 transition-transform duration-500 lg:static lg:translate-x-0 left-4 transform -translate-x-1/2">
              <Link to="/">
                <img loading='eager' width="auto" height="auto" src={Logo} alt="Logo" className="h-16 w-auto z-0" />
              </Link>
            </div>

            {/* Right Navigation */}
            <div className={`hidden lg:flex gap-14 xl:gap-24 flex-1 justify-end transition-all delay-700 duration-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <Link to="/clinic" className="text-black hover:text-[#725B98]">Clinic</Link>
              <Link to="/blog" className="text-black hover:text-[#725B98]">Blog</Link>
              <Link to="/contact-us" className="text-black hover:text-[#725B98]">Contact Us</Link>
              <div className="relative group">
                <button className="text-black hover:text-[#725B98] flex items-center">
                  Patient Form
                  <svg className="w-4 h-4 ml-1 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-5-5h10z" /></svg>
                </button>
                <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 -translate-y-5 transition-all duration-300">
                  <li><Link to="/patient-form/hair" className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-[#725B98]">Hair</Link></li>
                  <li><Link to="/patient-form/skin" className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-[#725B98]">Skin</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden  bg-white ${isOpen ? 'block' : 'hidden'} pb-4 `}>
            <ul className="space-y-2">
              <li><Link to="/" className="block px-4 py-2 text-black hover:text-[#725B98]">Home</Link></li>
              <li><Link to="/book-appointment" className="block px-4 py-2 text-black hover:text-[#725B98]">Book Appointment</Link></li>
              <li>
                <button
                  onClick={() => toggleMobileMenu('services')}
                  className="w-full text-left px-4 py-2 text-black hover:text-[#725B98] flex items-center justify-between"
                >
                  Services
                  <svg className={`w-4 h-4 ml-1     ${activeMobileMenus.services ? 'rotate-180' : ''}`}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" ><path d="M10 12l-5-5h10z" /></svg>
              
                </button>
                <ul className={`pl-4 space-y-2 transition-all duration-300 ${activeMobileMenus.services ? 'block' : 'hidden'}`}>
                {Object.entries(serviceItems).map(([key, category]) => (
                    <li key={key}>
                      <button  onClick={() => toggleMobileSubmenu(key)}
                       
                        className="w-full text-left px-4 py-2 text-black hover:text-[#725B98] flex items-center justify-between"
                      >
                       <a  href={`/services/${category.category}`} className='w-[80%] h-full'>  {category.category}</a> 
                        <svg className={`w-4 h-4 ml-1 lg:hidden  ${activeMobileSubmenu === key ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-5-5h10z" /></svg>

                      </button>
                      <ul className={`pl-4 space-y-2 transition-all duration-300 ${activeMobileSubmenu === key ? 'block' : 'hidden'}`}>
                      {category.treatments.map((treatment) => (
                          <li key={treatment.CardTitle}>
                            <Link
                                to={treatment.link}
                                className="block px-4 py-2 text-black hover:text-[#725B98]"
                              >
                                <div className="text-sm font-medium">{treatment.CardTitle}</div>
                              </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </li>
              <li><Link to="/about-us" className="block px-4 py-2 text-black hover:text-[#725B98]">About Us</Link></li>
              <li><Link to="/clinic" className="block px-4 py-2 text-black hover:text-[#725B98]">Clinic</Link></li>
              <li><Link to="/blog" className="block px-4 py-2 text-black hover:text-[#725B98]">Blog</Link></li>
              <li><Link to="/contact-us" className="block px-4 py-2 text-black hover:text-[#725B98]">Contact Us</Link></li>
              <li>
                <button
                  onClick={() => toggleMobileMenu('patientForm')}
                  className="w-full text-left px-4 py-2 text-black hover:text-[#725B98] flex items-center justify-between"
                >
                  Patient Form
                  <svg className={`w-4 h-4 ml-1     ${activeMobileMenus.services ? 'rotate-180' : ''}`}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" ><path d="M10 12l-5-5h10z" /></svg>
                </button>
                <ul className={`pl-4 space-y-2 transition-all duration-300 ${activeMobileMenus.patientForm ? 'block' : 'hidden'}`}>
                  <li><Link to="/patient-form/hair" className="block px-4 py-2 text-black hover:text-[#725B98]">Hair</Link></li>
                  <li><Link to="/patient-form/skin" className="block px-4 py-2 text-black hover:text-[#725B98]">Skin</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;