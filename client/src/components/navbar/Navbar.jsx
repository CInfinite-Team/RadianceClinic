import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from "../../assets/logo.svg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed font-Inter font-semibold lg:text-xs xl:text-sm 2xl:text-base w-full lg:w-auto lg:top-6 lg:left-6 z-[9999999] lg:right-6 transition-all duration-500 delay-300 transform ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      <nav className={`bg-white shadow-md px-10 transition-all duration-300 ${scrolled ? 'lg:bg-opacity-95' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center h-20 relative">
            {/* Mobile menu button */}
            <div className="lg:hidden absolute right-0">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="p-2 text-gray-700 hover:text-[#725B98] transition-colors duration-300"
              >
                {isOpen ? <X size={24} className="transform rotate-0 hover:rotate-90 transition-transform duration-300" /> : <Menu size={24} />}
              </button>
            </div>

            {/* Left Navigation */}
            <div className={`hidden lg:flex gap-10 xl:gap-20 flex-1 justify-start transition-all delay-300 duration-500 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              {['Home', 'Book Appointment', 'Services', 'About Us'].map((item, index) => (
                <Link 
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                  className="text-black hover:text-[#725B98] transition-all duration-300 hover:scale-105"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {item}
                  {item === 'Services' && (
                    <svg className="w-4 h-4 ml-1 inline transition-transform duration-300 group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M10 12l-5-5h10z"/>
                    </svg>
                  )}
                </Link>
              ))}
            </div>

            {/* Center Logo */}
            <div className={`absolute lg:static lg:translate-x-0 left-4 transform -translate-x-1/2 transition-all delay-300 duration-500 ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}>
              <Link to="/" className="hover:scale-105 transition-transform duration-300 inline-block">
                <img src={Logo} alt="Logo" className="h-16 w-auto" />
              </Link>
            </div>

            {/* Right Navigation */}
            <div className={`hidden lg:flex gap-14 xl:gap-24 flex-1 justify-end transition-all delay-700 duration-500 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              {['Clinic', 'Blog', 'Contact Us', 'Patient Form'].map((item, index) => (
                <Link 
                  key={item}
                  to={`/${item.toLowerCase().replace(' ', '-')}`}
                  className="text-black hover:text-[#725B98] transition-all duration-300 hover:scale-105"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {item}
                  {item === 'Patient Form' && (
                    <svg className="w-4 h-4 ml-1 inline transition-transform duration-300 group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M10 12l-5-5h10z"/>
                    </svg>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <ul className="space-y-2 pb-4">
              {[
                'Home', 'Book Appointment', 'Services', 'About Us',
                'Clinic', 'Blog', 'Contact Us', 'Patient Form'
              ].map((item, index) => (
                <li key={item} className={`transform transition-all duration-500 ${
                  isOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`} style={{ transitionDelay: `${index * 50}ms` }}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="block px-4 py-2 text-black hover:text-[#725B98] hover:bg-gray-50 transition-all duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;