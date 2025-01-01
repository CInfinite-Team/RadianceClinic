import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BookAppointment from './pages/BookAppointment';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Clinic from './pages/Clinic';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import PatientForm from './pages/PatientForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/clinic" element={<Clinic />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/patient-form" element={<PatientForm />} />
      </Routes>
    </Router>
  );
}

export default App;
