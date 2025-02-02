import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from "../../assets/logo.svg";

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
    <nav className={`fixed font-Inter font-semibold lg:text-xs xl:text-sm 2xl:text-base w-full lg:w-auto lg:top-6 lg:left-6 z-[9999999] lg:right-6 transition-all duration-500 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
      <div className={`bg-white shadow-md px-10 transition-all duration-300 ${scrolled ? 'lg:bg-opacity-95' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center h-20 relative">
            {/* Mobile menu button */}
            <div className="lg:hidden absolute right-0">
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-700 hover:text-[#725B98] ">
                {isOpen ? <X size={24} className="transform rotate-0 hover:rotate-90 transition-transform duration-300" /> : <Menu size={24} />}
              </button>
            </div>

            {/* Left Navigation */}
            <div className={`hidden lg:flex gap-10 xl:gap-20 flex-1 justify-start transition-all delay-500 duration-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <Link to="/" className="text-black hover:text-[#725B98]" >Home</Link>
              <Link to="/book-appointment" className="text-black hover:text-[#725B98]" >Book Appointment</Link>
              <div className="relative group">
                <Link to="#" className="text-black hover:text-[#725B98] flex items-center" >
                  Services
                  <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-5-5h10z" /></svg>
                </Link>
                <ul className="absolute left-0 mt-2 w-48 group-hover:translate-y-0 -translate-y-5 bg-white border border-gray-200 rounded shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <li><Link to="/services/hair" className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-[#725B98]">Hair</Link></li>
                  <li><Link to="/services/skin" className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-[#725B98]">Skin</Link></li>
                  <li><Link to="/services/laser" className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-[#725B98]">Laser</Link></li>
                  <li><Link to="/services/anti-aging" className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-[#725B98]">Anti-Aging</Link></li>
                  <li><Link to="/services/cosmetic-surgery" className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-[#725B98]">Cosmetic Surgery</Link></li>
                </ul>
              </div>
              <Link to="/about-us" className="text-black hover:text-[#725B98]" >About Us</Link>
            </div>

            {/* Center Logo */}
            <div className="absolute hover:scale-110 transition-transform duration-500 lg:static lg:translate-x-0 left-4 transform -translate-x-1/2">
              <Link to="/">
                <img src={Logo} alt="Logo" className="h-16 w-auto" />
              </Link>
            </div>

            {/* Right Navigation */}
            <div className={`hidden lg:flex gap-14 xl:gap-24 flex-1 justify-end transition-all delay-700 duration-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <Link to="/clinic" className="text-black hover:text-[#725B98]" >Clinic</Link>
              <Link to="/blog" className="text-black hover:text-[#725B98]" >Blog</Link>
              <Link to="/contact-us" className="text-black hover:text-[#725B98]" >Contact Us</Link>
              <div className="relative group">
                <Link to="#" className="text-black hover:text-[#725B98] flex items-center" >
                  Patient Form
                  <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-5-5h10z" /></svg>
                </Link>
                <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:translate-y-0 -translate-y-5 -translate-x-10 group-hover:visible transition-all duration-300">
                  <li><Link to="/patient-form/hair" className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-[#725B98]">Hair</Link></li>
                  <li><Link to="/patient-form/skin" className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-[#725B98]">Skin</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} pb-4`}>
            <ul className="space-y-2">
              <li><Link to="/" className="block px-4 py-2 text-black hover:text-[#725B98]">Home</Link></li>
              <li><Link to="/book-appointment" className="block px-4 py-2 text-black hover:text-[#725B98]">Book Appointment</Link></li>
              <li className="relative">
                <button
                  onClick={() => document.getElementById('services-mobile').classList.toggle('hidden')}
                  className="w-full text-left px-4 py-2 text-black hover:text-[#725B98] flex items-center justify-between"
                >
                  Services
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-5-5h10z" /></svg>
                </button>
                <ul id="services-mobile" className="hidden pl-8 py-2 space-y-2">
                  <li><Link to="/services/hair" className="block px-4 py-2 text-black hover:text-[#725B98]">Hair</Link></li>
                  <li><Link to="/services/skin" className="block px-4 py-2 text-black hover:text-[#725B98]">Skin</Link></li>
                  <li><Link to="/services/laser" className="block px-4 py-2 text-black hover:text-[#725B98]">Laser</Link></li>
                  <li><Link to="/services/anti-aging" className="block px-4 py-2 text-black hover:text-[#725B98]">Anti-Aging</Link></li>
                  <li><Link to="/services/cosmetic-surgery" className="block px-4 py-2 text-black hover:text-[#725B98]">Cosmetic Surgery</Link></li>
                </ul>
              </li>
              <li><Link to="/about-us" className="block px-4 py-2 text-black hover:text-[#725B98]">About Us</Link></li>
              <li><Link to="/clinic" className="block px-4 py-2 text-black hover:text-[#725B98]">Clinic</Link></li>
              <li><Link to="/blog" className="block px-4 py-2 text-black hover:text-[#725B98]">Blog</Link></li>
              <li><Link to="/contact-us" className="block px-4 py-2 text-black hover:text-[#725B98]">Contact Us</Link></li>
              <li className="relative">
                <button
                  onClick={() => document.getElementById('patient-form-mobile').classList.toggle('hidden')}
                  className="w-full text-left px-4 py-2 text-black hover:text-[#725B98] flex items-center justify-between"
                >
                  Patient Form
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-5-5h10z" /></svg>
                </button>
                <ul id="patient-form-mobile" className="hidden pl-8 py-2 space-y-2">
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
