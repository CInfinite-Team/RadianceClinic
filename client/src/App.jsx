import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BookAppointment from './pages/BookAppointment';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Clinic from './pages/Clinic';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import SkinForm from './pages/SkinForm';
import HairForm from './pages/HairForm';
import Dashboard from './pages/Admin/Dashboard';
import SpecificService from './pages/SpecificService';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/services" element={<Services category="all"/>} />
        <Route path="/services/hair" element={<Services category="hair" />} />
        <Route path="/services/skin" element={<Services category="skin" />} />
        <Route path="/services/laser" element={<Services category="laser" />} />
        <Route path="/services/anti-aging" element={<Services category="anti-aging" />} />
        <Route path="/services/cosmetic-surgery" element={<Services category="cosmetic" />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/clinic" element={<Clinic />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/patient-form/skin" element={<SkinForm />} />
        <Route path="/patient-form/hair" element={<HairForm />} />
        <Route path="/admin-dashboard" element={<Dashboard />} />
        <Route path="/specific-service" element={<SpecificService />} />
      </Routes>
    </Router>
  );
}

export default App;
