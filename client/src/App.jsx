import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoadingAnimation from './components/Loading/LoadingAnimation';
import Terms from './pages/Legal/Terms';
import PrivacyPolicy from './pages/Legal/Privacy_Policy';
const Home = lazy(() => import('./pages/Home'));
const BookAppointment = lazy(() => import('./pages/BookAppointment'));
const PrivateRoute = lazy(() => import('./components/Admin/PrivateRoute'));
const Services = lazy(() => import('./pages/Services'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Clinic = lazy(() => import('./pages/Clinic'));
const Blog = lazy(() => import('./pages/Blog'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const SkinForm = lazy(() => import('./pages/SkinForm'));
const HairForm = lazy(() => import('./pages/HairForm'));
const Dashboard = lazy(() => import('./pages/Admin/Dashboard'));
const SpecificService = lazy(() => import('./pages/SpecificService'));
const Login = lazy(() => import('./components/Admin/Login'));
const QuickLinks = lazy(() => import('./pages/QuickLinks'));
const FormDetailPopup = lazy(() => import('./components/Admin/FormDetailPopup'));
const QuickLinkDescription = lazy(() => import('./components/QuickLinks/QuickLinkDescription'));
const SpecificBlogPage = lazy(() => import('./pages/SpecificBlogPage'));

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
      path: '/terms-and-conditions',
      element: <Terms  />,
    },
    {
      path: '/privacy-policy',
      element: <PrivacyPolicy  />,
    },
   
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
      path: '/services/hair/hair-transplant',
      element: <SpecificService />,
    },
    {
      path: '/services/hair/fue-hair-transplant',
      element: <SpecificService />,
    },
    {
      path: '/services/hair/female-hair-transplant',
      element: <SpecificService />,
    },
    {
      path: '/services/hair/prp-therapy',
      element: <SpecificService />,
    },
    {
      path: '/services/hair/eyebrow-beard-hair-transplant',
      element: <SpecificService />,
    },
    {
      path: '/services/hair/alopecia-treatment',
      element: <SpecificService />,
    },
    {
      path: '/services/skin/pimple-treatment',
      element: <SpecificService />,
    },
    {
      path: '/services/skin/acne-scar-treatment',
      element: <SpecificService />,
    },
    {
      path: '/services/skin/rejuvenation',
      element: <SpecificService />,
    },
    {
      path: '/services/skin/chemical-peels',
      element: <SpecificService />,
    },
    {
      path: '/services/skin/meso-glow',
      element: <SpecificService />,
    },
    {
      path: '/services/skin/pigment-reduction',
      element: <SpecificService />,
    },
    {
      path: '/services/skin/microdermabrasion',
      element: <SpecificService />,
    },
    {
      path: '/services/cosmetic-surgery',
      element: <SpecificService />,
    },
    {
      path: '/services/laser/permanent-hair-removal',
      element: <SpecificService />,
    },
    {
      path: '/services/laser/tattoo-removal',
      element: <SpecificService />,
    },
    {
      path: '/services/laser/laser-facial-carbon-peels',
      element: <SpecificService />,
    },
    {
      path: '/services/laser/pigmentation-removal',
      element: <SpecificService />,
    },
    {
      path: '/services/laser/laser-skin-rejuvenation',
      element: <SpecificService />,
    },
    {
      path: '/services/laser/stretch-marks-reduction',
      element: <SpecificService />,
    },
    {
      path: '/services/laser/body-face-contouring',
      element: <SpecificService />,
    },
    {
      path: '/services/anti-aging/botox',
      element: <SpecificService />,
    },
    {
      path: '/services/anti-aging/dermal-filler',
      element: <SpecificService />,
    },
    {
      path: '/services/anti-aging/hand-feet-rejuvenation',
      element: <SpecificService />,
    },
    {
      path: '/services/anti-aging/skin-tightening',
      element: <SpecificService />,
    },
    {
      path: '/services/anti-aging/thread-lift',
      element: <SpecificService />,
    },
    {
      path: '/services/anti-aging/autologous-fat-transfer',
      element: <SpecificService />,
    },
    {
      path: '/services/anti-aging/vampire-facelift',
      element: <SpecificService />,
    },
    {
      path: '/services/cosmetic-surgery/wart-mole-removal',
      element: <SpecificService />,
    },
    {
      path: '/services/cosmetic-surgery/vitiligo-surgery',
      element: <SpecificService />,
    },
    {
      path: '/services/cosmetic-surgery/ear-lobe-repair',
      element: <SpecificService />,
    },
    {
      path: '/services/cosmetic-surgery/scar-revision',
      element: <SpecificService />,
    },
    {
      path: '/services/cosmetic-surgery/vampire-facelift',
      element: <SpecificService />,
    },
    {
      path: '/services/cosmetic-surgery/vampire-facelift',
      element: <SpecificService />,
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
      path:'/BlogSpecific',
      element:<SpecificBlogPage/>
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

    { path: '/hair-transplant-in-nagpur', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-specialist-in-nagpur', element: <QuickLinkDescription/> },
    { path: '/dermatologist-in-nagpur', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-clinic-in-nagpur', element: <QuickLinkDescription/> },
    { path: '/best-hair-transplant-clinic-in-nagpur', element: <QuickLinkDescription/> },
    { path: '/top-rated-hair-specialist-in-nagpur', element: <QuickLinkDescription/> },
    { path: '/laser-hair-removal-in-nagpur', element: <QuickLinkDescription/> },
    { path: '/tattoo-removal-in-nagpur', element: <QuickLinkDescription/> },
    { path: '/vampire-facial-in-nagpur', element: <QuickLinkDescription/> },
    { path: '/prp-therapy-treatment-in-nagpur', element: <QuickLinkDescription/> },
    { path: '/skin-specialist-in-nagpur', element: <QuickLinkDescription/> },
    { path: '/skin-clinic-in-nagpur', element: <QuickLinkDescription/> },
    { path: '/skin-doctor-in-nagpur', element: <QuickLinkDescription/> },
    { path: '/hydra-facial-in-nagpur', element: <QuickLinkDescription/> },
    { path: '/botox-treatment-in-nagpur', element: <QuickLinkDescription/> },
    { path: '/fillers-treatment-in-nagpur', element: <QuickLinkDescription/> },
    { path: '/carbon-peel-treatment-in-nagpur', element: <QuickLinkDescription/> },
    { path: '/scar-removal-in-nagpur', element: <QuickLinkDescription/> },
    { path: '/ear-piercing-in-nagpur', element: <QuickLinkDescription/> },
    { path: '/best-skin-specialist-in-nagpur', element: <QuickLinkDescription/> },
    { path: '/best-dermatologist-in-nagpur', element: <QuickLinkDescription/> },
    { path: '/cosmetologist-in-nagpur', element: <QuickLinkDescription/> },
    { path: '/best-cosmetologist-in-nagpur', element: <QuickLinkDescription/> },
    { path: '/best-hair-transplant-in-nagpur', element: <QuickLinkDescription/> },
    { path: '/best-hair-transplant-specialist-doctor-in-nagpur', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-in-akola', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-specialist-in-akola', element: <QuickLinkDescription/> },
    { path: '/dermatologist-in-akola', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-in-rajangaon', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-specialist-in-rajangaon', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-clinic-in-rajangaon', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-doctor-in-rajangaon', element: <QuickLinkDescription/> },
    { path: '/top-rated-hair-transplant-specialist-in-rajangaon', element: <QuickLinkDescription/> },
    { path: '/top-rated-hair-transplant-doctor-in-rajangaon', element: <QuickLinkDescription/> },
    { path: '/prp-treatment-in-rajangaon', element: <QuickLinkDescription/> },
    { path: '/prp-therapy-in-rajangaon', element: <QuickLinkDescription/> },
    { path: '/skin-specialist-in-rajangaon', element: <QuickLinkDescription/> },
    { path: '/skin-doctor-in-rajangaon', element: <QuickLinkDescription/> },
    { path: '/skin-clinic-in-rajangaon', element: <QuickLinkDescription/> },
    { path: '/dermatologist-in-rajangaon', element: <QuickLinkDescription/> },
    { path: '/cosmetologist-in-rajangaon', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-in-harda', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-specialist-in-harda', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-clinic-in-harda', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-doctor-in-harda', element: <QuickLinkDescription/> },
    { path: '/top-rated-hair-transplant-specialist-in-harda', element: <QuickLinkDescription/> },
    { path: '/top-rated-hair-transplant-doctor-in-harda', element: <QuickLinkDescription/> },
    { path: '/prp-treatment-in-harda', element: <QuickLinkDescription/> },
    { path: '/prp-therapy-in-harda', element: <QuickLinkDescription/> },
    { path: '/skin-specialist-in-harda', element: <QuickLinkDescription/> },
    { path: '/skin-doctor-in-harda', element: <QuickLinkDescription/> },
    { path: '/skin-clinic-in-harda', element: <QuickLinkDescription/> },
    { path: '/dermatologist-in-harda', element: <QuickLinkDescription/> },
    { path: '/cosmetologist-in-harda', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-in-chandrapur', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-specialist-in-chandrapur', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-clinic-in-chandrapur', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-doctor-in-chandrapur', element: <QuickLinkDescription/> },
    { path: '/top-rated-hair-transplant-specialist-in-chandrapur', element: <QuickLinkDescription/> },
    { path: '/top-rated-hair-transplant-doctor-in-chandrapur', element: <QuickLinkDescription/> },
    { path: '/prp-treatment-in-chandrapur', element: <QuickLinkDescription/> },
    { path: '/prp-therapy-in-chandrapur', element: <QuickLinkDescription/> },
    { path: '/skin-specialist-in-chandrapur', element: <QuickLinkDescription/> },
    { path: '/skin-doctor-in-chandrapur', element: <QuickLinkDescription/> },
    { path: '/skin-clinic-in-chandrapur', element: <QuickLinkDescription/> },
    { path: '/dermatologist-in-chandrapur', element: <QuickLinkDescription/> },
    { path: '/cosmetologist-in-chandrapur', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-in-katni', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-specialist-in-katni', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-clinic-in-katni', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-doctor-in-katni', element: <QuickLinkDescription/> },
    { path: '/top-rated-hair-transplant-specialist-in-katni', element: <QuickLinkDescription/> },
    { path: '/top-rated-hair-transplant-doctor-in-katni', element: <QuickLinkDescription/> },
    { path: '/prp-treatment-in-katni', element: <QuickLinkDescription/> },
    { path: '/prp-therapy-in-katni', element: <QuickLinkDescription/> },
    { path: '/skin-specialist-in-katni', element: <QuickLinkDescription/> },
    { path: '/skin-doctor-in-katni', element: <QuickLinkDescription/> },
    { path: '/skin-clinic-in-katni', element: <QuickLinkDescription/> },
    { path: '/dermatologist-in-katni', element: <QuickLinkDescription/> },
    { path: '/cosmetologist-in-katni', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-in-narsinghpur', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-specialist-in-narsinghpur', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-clinic-in-narsinghpur', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-doctor-in-narsinghpur', element: <QuickLinkDescription/> },
    { path: '/top-rated-hair-transplant-specialist-in-narsinghpur', element: <QuickLinkDescription/> },
    { path: '/top-rated-hair-transplant-doctor-in-narsinghpur', element: <QuickLinkDescription/> },
    { path: '/prp-treatment-in-narsinghpur', element: <QuickLinkDescription/> },
    { path: '/prp-therapy-in-narsinghpur', element: <QuickLinkDescription/> },
    { path: '/skin-specialist-in-narsinghpur', element: <QuickLinkDescription/> },
    { path: '/skin-doctor-in-narsinghpur', element: <QuickLinkDescription/> },
    { path: '/skin-clinic-in-narsinghpur', element: <QuickLinkDescription/> },
    { path: '/dermatologist-in-narsinghpur', element: <QuickLinkDescription/> },
    { path: '/cosmetologist-in-narsinghpur', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-in-amravati', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-specialist-in-amravati', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-clinic-in-amravati', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-doctor-in-amravati', element: <QuickLinkDescription/> },
    { path: '/top-rated-hair-transplant-specialist-in-amravati', element: <QuickLinkDescription/> },
    { path: '/top-rated-hair-transplant-doctor-in-amravati', element: <QuickLinkDescription/> },
    { path: '/prp-treatment-in-amravati', element: <QuickLinkDescription/> },
    { path: '/prp-therapy-in-amravati', element: <QuickLinkDescription/> },
    { path: '/skin-specialist-in-amravati', element: <QuickLinkDescription/> },
    { path: '/skin-doctor-in-amravati', element: <QuickLinkDescription/> },
    { path: '/skin-clinic-in-amravati', element: <QuickLinkDescription/> },
    { path: '/dermatologist-in-amravati', element: <QuickLinkDescription/> },
    { path: '/cosmetologist-in-amravati', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-in-ambikapur', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-specialist-in-ambikapur', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-clinic-in-ambikapur', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-doctor-in-ambikapur', element: <QuickLinkDescription/> },
    { path: '/top-rated-hair-transplant-specialist-in-ambikapur', element: <QuickLinkDescription/> },
    { path: '/top-rated-hair-transplant-doctor-in-ambikapur', element: <QuickLinkDescription/> },
    { path: '/prp-treatment-in-ambikapur', element: <QuickLinkDescription/> },
    { path: '/prp-therapy-in-ambikapur', element: <QuickLinkDescription/> },
    { path: '/skin-specialist-in-ambikapur', element: <QuickLinkDescription/> },
    { path: '/skin-doctor-in-ambikapur', element: <QuickLinkDescription/> },
    { path: '/skin-clinic-in-ambikapur', element: <QuickLinkDescription/> },
    { path: '/dermatologist-in-ambikapur', element: <QuickLinkDescription/> },
    { path: '/cosmetologist-in-ambikapur', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-in-bhandara', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-specialist-in-bhandara', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-clinic-in-bhandara', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-doctor-in-bhandara', element: <QuickLinkDescription/> },
    { path: '/top-rated-hair-transplant-specialist-in-bhandara', element: <QuickLinkDescription/> },
    { path: '/top-rated-hair-transplant-doctor-in-bhandara', element: <QuickLinkDescription/> },
    { path: '/prp-treatment-in-bhandara', element: <QuickLinkDescription/> },
    { path: '/prp-therapy-in-bhandara', element: <QuickLinkDescription/> },
    { path: '/skin-specialist-in-bhandara', element: <QuickLinkDescription/> },
    { path: '/skin-doctor-in-bhandara', element: <QuickLinkDescription/> },
    { path: '/skin-clinic-in-bhandara', element: <QuickLinkDescription/> },
    { path: '/dermatologist-in-bhandara', element: <QuickLinkDescription/> },
    { path: '/cosmetologist-in-bhandara', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-in-mandla', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-specialist-in-mandla', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-clinic-in-mandla', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-doctor-in-mandla', element: <QuickLinkDescription/> },
    { path: '/top-rated-hair-transplant-specialist-in-mandla', element: <QuickLinkDescription/> },
    { path: '/top-rated-hair-transplant-doctor-in-mandla', element: <QuickLinkDescription/> },
    { path: '/prp-treatment-in-mandla', element: <QuickLinkDescription/> },
    { path: '/prp-therapy-in-mandla', element: <QuickLinkDescription/> },
    { path: '/skin-specialist-in-mandla', element: <QuickLinkDescription/> },
    { path: '/skin-doctor-in-mandla', element: <QuickLinkDescription/> },
    { path: '/skin-clinic-in-mandla', element: <QuickLinkDescription/> },
    { path: '/dermatologist-in-mandla', element: <QuickLinkDescription/> },
    { path: '/cosmetologist-in-mandla', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-in-wardha', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-specialist-in-wardha', element: <QuickLinkDescription/> },
    { path: '/dermatologist-in-wardha', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-in-gondia', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-specialist-in-gondia', element: <QuickLinkDescription/> },
    { path: '/dermatologist-in-gondia', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-in-raipur', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-specialist-in-raipur', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-clinic-in-raipur', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-doctor-in-raipur', element: <QuickLinkDescription/> },
    { path: '/top-rated-hair-transplant-specialist-in-raipur', element: <QuickLinkDescription/> },
    { path: '/top-rated-hair-transplant-doctor-in-raipur', element: <QuickLinkDescription/> },
    { path: '/prp-treatment-in-raipur', element: <QuickLinkDescription/> },
    { path: '/prp-therapy-in-raipur', element: <QuickLinkDescription/> },
    { path: '/skin-specialist-in-raipur', element: <QuickLinkDescription/> },
    { path: '/skin-doctor-in-raipur', element: <QuickLinkDescription/> },
    { path: '/skin-clinic-in-raipur', element: <QuickLinkDescription/> },
    { path: '/dermatologist-in-raipur', element: <QuickLinkDescription/> },
    { path: '/cosmetologist-in-raipur', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-in-bilaspur', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-specialist-in-bilaspur', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-clinic-in-bilaspur', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-doctor-in-bilaspur', element: <QuickLinkDescription/> },
    { path: '/top-rated-hair-transplant-specialist-in-bilaspur', element: <QuickLinkDescription/> },
    { path: '/top-rated-hair-transplant-doctor-in-bilaspur', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-in-korba', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-specialist-in-korba', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-clinic-in-korba', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-doctor-in-korba', element: <QuickLinkDescription/> },
    { path: '/top-rated-hair-transplant-specialist-in-korba', element: <QuickLinkDescription/> },
    { path: '/top-rated-hair-transplant-doctor-in-korba', element: <QuickLinkDescription/> },
    { path: '/prp-treatment-in-korba', element: <QuickLinkDescription/> },
    { path: '/prp-therapy-in-korba', element: <QuickLinkDescription/> },
    { path: '/skin-specialist-in-korba', element: <QuickLinkDescription/> },
    { path: '/skin-doctor-in-korba', element: <QuickLinkDescription/> },
    { path: '/skin-clinic-in-korba', element: <QuickLinkDescription/> },
    { path: '/dermatologist-in-korba', element: <QuickLinkDescription/> },
    { path: '/cosmetologist-in-korba', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-in-jabalpur', element: <QuickLinkDescription/> },
    { path: '/hair-transplant-specialist-in-jabalpur', element: <QuickLinkDescription/> },
    { path: '/dermatologist-in-jabalpur', element: <QuickLinkDescription/> },
  ]);

  return (
    <Suspense fallback={<LoadingAnimation />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
