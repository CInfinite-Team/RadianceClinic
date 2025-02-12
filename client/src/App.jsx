import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import BookAppointment from './pages/BookAppointment';
import PrivateRoute from './components/Admin/PrivateRoute';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Clinic from './pages/Clinic';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import SkinForm from './pages/SkinForm';
import HairForm from './pages/HairForm';
import Dashboard from './pages/Admin/Dashboard';
import SpecificService from './pages/SpecificService';
import Login from './components/Admin/Login';
import QuickLinks from './pages/QuickLinks';
import FormDetailPopup from './components/Admin/FormDetailPopup';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement:' 404 error',
    },
    {
      path: '/book-appointment',
      element: <BookAppointment />,
    },
    // {
    //   path: '/services',
    //   element: <Services category="all" />,
    // },
    {
      path: '/services/hair',
      element: <Services category="hair" />,
    },
    {
      path: '/services/skin',
      element: <Services category="skin" />,
    },
    {
      path: '/services/laser',
      element: <Services category="laser" />,
    },
    {
      path: '/services/anti-aging',
      element: <Services category="anti-aging" />,
    },
    {
      path: '/services/cosmetic-surgery',
      element: <Services category="cosmetic" />,
    },
    {
      path: '/about-us',
      element: <AboutUs/>,
    },
    {
      path: '/clinic',
      element: <Clinic/>,
    },
    {
      path: '/blog',
      element: <Blog/>,
    },
    {
      path: '/contact-us',
      element: <ContactUs/>,
    },
    {
      path: '/FormDetailPopup',
      element: <FormDetailPopup/>,
    },
    {
      path: '/patient-form/skin',
      element: <SkinForm/>,
    },
    {
      path: '/patient-form/hair',
      element: <HairForm/>,
    },
    {
      path: '/specific-service',
      element: <SpecificService/>,
    },
    {
      path: '/quick-links',
      element: <QuickLinks/>,
    },
  
    {
      path: '/admin-login',
      element: <Login />,  
    },
   
   
    {
      path: '/admin-dashboard',
      element: (
        <PrivateRoute>
          <Dashboard />
          </PrivateRoute>
    
      ), 
    },

  ]);

  return <RouterProvider router={router} />;

}

export default App;
