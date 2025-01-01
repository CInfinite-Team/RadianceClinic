import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2D2840] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><Link to="/book-appointment" className="hover:text-gray-300">Book Appointment</Link></li>
              <li><Link to="/hair-form" className="hover:text-gray-300">Hair Form</Link></li>
              <li><Link to="/blog" className="hover:text-gray-300">Blog</Link></li>
              <li><Link to="/about-us" className="hover:text-gray-300">About Us</Link></li>
              <li><Link to="/clinic" className="hover:text-gray-300">Clinic</Link></li>
              <li><Link to="/contact-us" className="hover:text-gray-300">Contact Us</Link></li>
              <li><Link to="/quick-links" className="hover:text-gray-300">Quick Links</Link></li>
            </ul>
          </div>

          {/* Our Services Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/hair" className="hover:text-gray-300">Hair</Link></li>
              <li><Link to="/services/skin" className="hover:text-gray-300">Skin</Link></li>
              <li><Link to="/services/laser" className="hover:text-gray-300">Laser</Link></li>
              <li><Link to="/services/anti-aging" className="hover:text-gray-300">Anti-Aging</Link></li>
              <li><Link to="/services/cosmetic-surgery" className="hover:text-gray-300">Cosmetic Surgery</Link></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>(+91) 9822179877</li>
              <li>(+91) 8888069877</li>
              <li className="text-sm">
                Address: Shop No. 6, Firdoushi Tower,<br />
                Wardha Rd, besides Hitavda Press &<br />
                Shaliini Hospital, near Dhantoli, Nagpur,<br />
                Maharashtra 440012
              </li>
              <li className="text-sm mt-2">Email: radianceclinicnagpur@gmail.com</li>
              <li className="text-sm">Opening Hours: Mon-Sat 10:30am – 08:00pm</li>
            </ul>
          </div>

          {/* Socials Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Socials</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300"><Facebook size={20} /></a>
              <a href="#" className="hover:text-gray-300"><Instagram size={20} /></a>
              <a href="#" className="hover:text-gray-300"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-gray-300"><Youtube size={20} /></a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="border-t border-gray-700 py-4">
        <div className="container mx-auto px-4 text-sm text-center">
          © {currentYear} Radiance Clinic | All Rights Reserved | Design & Developed by Prime Digital
        </div>
      </div>
    </footer>
  );
};

export default Footer;