import React, { useState, useEffect  } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import PrimaryBtn from '../Buttons/PrimaryBtn';
import AppointmentCalendar from './AppointmentCalendar';
import SERVER_URL from '../../constant.mjs';
import {whychoose} from './Whychoose.js';
import { ChevronRight,ChevronLeft } from 'lucide-react';

function AppointmentForm() {
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-next-arrow" onClick={onClick}>
          <ChevronLeft/>
      </div>
    );
  };
  
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-prev-arrow" onClick={onClick}>
        <ChevronRight/>
      </div>
    );
  };
  
  // Slider Settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    consultationMode: '',
    message: '',
    /* agreedToTerms: false*/
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
   
    if (!selectedDate || !selectedTime) {
      setError('Please select both appointment date and time');
      window.scrollTo({
        top: document.querySelector('.appointment-calendar').offsetTop,
        behavior: 'smooth',
      });
      return;
    }
  
    setLoading(true);
    setError('');
    setSuccess('');
  
    try {
     
      // const formattedDate = selectedDate.toLocaleDateString('en-GB', {
      //   day: '2-digit',
      //   month: '2-digit',
      //   year: 'numeric',
      // });
  
   
      // const formDataObj = new FormData();
      // formDataObj.append('name', formData.name);
      // formDataObj.append('email', formData.email);
      // formDataObj.append('phone', formData.phone);
      // formDataObj.append('category', formData.category);
      // formDataObj.append('message', formData.message);
      // formDataObj.append('modeOfConsultation', formData.consultationMode);
      // formDataObj.append('appointmentDate', formattedDate); 
      // formDataObj.append('appointmentTime', selectedTime);
  
      // console.log([...formDataObj.entries()]);
      console.log(selectedDate);
      const response = await axios.post(`${SERVER_URL}/api/forms/consultation`, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category: formData.category,
        message: formData.message,
        modeOfConsultation: formData.consultationMode,
        appointmentDate: selectedDate,
        appointmentTime: selectedTime
      });
  
      setSuccess('Appointment booked successfully!');
     
      setFormData({
        name: '',
        email: '',
        phone: '',
        category: '',
        consultationMode: '',
        message: '',
      });
      setSelectedDate(null);
      setSelectedTime(null);
      setReload(!reload);
    } catch (err) {
      console.error(err.response?.data || err.message);
      setError(
        err.response?.data?.message || 'Something went wrong. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };
  

 
  const isFormValid = () => {
    return (
      formData.name &&
      formData.email &&
      formData.phone &&
      formData.category &&
      formData.consultationMode &&
      /*formData.agreedToTerms &&*/
      selectedDate &&
      selectedTime
    );
  };

  return (
    <>
     <div className="flex flex-col overflow-hidden relative pt-12 items-center   gap-5  bg-[#FDF2FF] ">
        <h2
          className=" font-bold font-ElMessiri text-[#554075] leading-tight text-center px-1 z-10 "
          style={{ fontSize: "clamp(36px,4vw,55px)" }}
        >
           Expert Skin and Hair Care Awaits
        </h2>
        <p className="text-sm sm:text-base w-[97%] md:w-[80%] lg:w-[60%] xl:w-[60%] text-center text-[#554075] z-10">
        Schedule your hair transplant in Nagpur or skin treatment with the best skin clinic in Nagpur. Fill out the form below to get started!   </p>

      </div>
      <div className={`grid grid-cols-1 lg:grid-cols-3 pb-24 pt-8 px-4 md:px-4 xl:px-20 bg-[#fef7ff] transition  duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      
      
        <form onSubmit={handleSubmit} className='bg-white col-span-2 relative overflow-visible gap-12 z-10 p-7 flex flex-col shadow-lg shadow-[#E0D1F7]'>
          {error && <div className="text-red-500 mb-4 p-3 bg-red-50 rounded animate-fadeIn">{error}</div>}
          {success && <div className="text-green-500 mb-4 p-3 bg-green-50 rounded animate-fadeIn">{success}</div>}

              <div className='grid md:grid-cols-2 gap-12'>
            <div className='flex flex-col gap-3' 
                  style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                  transition: `all 0.5s ease-out ${ 0.2}s`
                }}>
              <label htmlFor="name" className='text-[#554075] font-bold'>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder='Enter Your Name'
                className='text-[#554075] rounded-[3px] border border-[#B298DC] p-3'
                required
              />
            </div>

            <div className='flex flex-col gap-3'
             style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
              transition: `all 0.5s ease-out ${ 0.2}s`
            }}>
              <label htmlFor="email" className='text-[#554075] font-bold'>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder='Enter Your Email'
                className='text-[#554075] rounded-[3px] border border-[#B298DC] p-3'
                required
              />
            </div>

            <div className='flex flex-col gap-3'
             style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
              transition: `all 0.5s ease-out ${ 0.2}s`
            }}>
              <label htmlFor="phone" className='text-[#554075] font-bold'>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder='Enter Your Mobile No'
                className='text-[#554075] rounded-[3px] border border-[#B298DC]  p-3'
                required
              />
            </div>

            <div className='flex flex-col gap-3'
             style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
              transition: `all 0.5s ease-out ${ 0.2}s`
            }}>
              <label htmlFor="category" className='text-[#554075] font-bold'>Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className='text-[#554075] rounded-[3px] border border-[#B298DC]  p-3'
                required
              >
                <option value="">Select Category</option>
                <option value="Hair">Hair</option>
                <option value="Skin">Skin</option>
              </select>
            </div>
          </div>

          <div className=''
           style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
            transition: `all 0.5s ease-out ${ 0.2}s`
          }}>
            <label className='text-[#554075] font-bold text-[15px] lg:text-[13px] 2xl:text-base'>
              Mode Of Consultation
            </label>
            <br />
            <div className='inline-flex gap-2 mr-10 text-[#554075] mt-2 font-bold'>
              <input
                type="radio"
                name="consultationMode"
                value="onCall"
                checked={formData.consultationMode === 'onCall'}
                onChange={handleInputChange}
                required
              />
              On Call
            </div>
            <div className='inline-flex gap-2 text-[#554075] font-bold' 
             style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
              transition: `all 0.5s ease-out ${ 0.2}s`
            }}>
              <input
                type="radio"
                name="consultationMode"
                value="inPerson"
                checked={formData.consultationMode === 'inPerson'}
                onChange={handleInputChange}
              />
              In Person
            </div>
          </div>

          <div className='flex flex-col gap-3'
           style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
            transition: `all 0.5s ease-out ${ 0.2}s`
          }}>
            <label htmlFor="message" className='text-[#554075] font-bold'>Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={5}
              placeholder='Your Message'
              className='text-[#554075] resize-none rounded-[3px] border border-[#B298DC] p-3'
            />
          </div>

          <label
            className="relative flex-1 items-center gap-2 max-h-3 flex"
            style={{ fontSize: "clamp(10px, 2vw, 15px)" }}
          >
            <input
              className="border-[#B9832B] w-fit border p-1 rounded-lg"
              type="checkbox"
              name="agreedToTerms"
            //   checked={formData.agreedToTerms}
            //   onChange={handleInputChange}
              required
            />
            <span className='text-[#AB9DCD]'>
              I agree with{' '}
              <a href="/terms-and-conditions" target="_blank" className="hover:underline cursor-pointer text-[#554075]">
                Terms of Use
              </a>{' '}
              and{' '}
              <a href="/privacy-policy" target="_blank" className="hover:underline cursor-pointer text-[#554075]">
                Privacy Policy
              </a>
            </span>
          </label>

          <PrimaryBtn
          title= {loading ? 'Submitting...' : 'Submit'}
            type="submit"
            disabled={loading || !isFormValid()}
            className='items-center justify-center px-16 gap-3'
          >
            {loading ? 'Submitting...' : 'Submit'}
          </PrimaryBtn>
        </form>

        <div className="appointment-calendar"
         style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
          transition: 'all 0.5s ease-out 1s'
        }}>
          <AppointmentCalendar
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
            reload={reload}
          />
        </div>
      </div>

      <div className='w-full bg-[#fef7ff] pb-10 justify-center items-center gap-3 text-[#554075] font-bold flex'
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.5s ease-out 0.5s'
        }}>
        <div className='bg-[#554075] w-44 lg:w-52 xl:w-96 h-[1px]'></div>
        <div className='text-xs text-center sm:text-left lg:text-base'>
          Note:- Online Consultation Charges Rs. 600 Per Session(if chosen)
        </div>
        <div className='bg-[#554075] w-44 lg:w-52 xl:w-96 h-[1px]'></div>
      </div>

      <div className='flex flex-col px-1 pt-10  bg-[#FDF2FF] items-center'>
        <h2 className='font-bold font-ElMessiri mb-2 text-[#554075] leading-tight text-center px-1 z-10' style={{ fontSize: 'clamp(36px,4vw,55px)' }}>
        Why Choose Radinace Clinic ?
        </h2>

        <p className=" w-[97%] md:w-[80%] lg:w-[60%] xl:w-[60%] text-[#554075] z-10 text-center">
        Why choose Radinace Clinic? We provide expert medical care with personalized treatment plans tailored to your needs. Our clinic combines advanced technology, a compassionate team of professionals, and a welcoming environment to ensure you receive the best possible care and comfort.    
          </p>

          <div className="col-span-1 md:p-5 mb-10 relative h-full w-full z-10 lg:p-0  transition-opacity duration-1000 delay-500 opacity-100">
      <Slider {...sliderSettings} className='h-full my-6 w-full  mx-auto'>
        {whychoose.map((item, index) => (
          <div key={index} className="relative flex items-center justify-center my-20 w-full">

          <div className=' bg-[#FDF2FF] rounded-md p-2 infocardshadow w-[80%] xl:w-[50%] mx-auto  z-10 flex flex-col items-center justify-center gap-5'>
          
          <h3 className='text-2xl font-bold font-ElMessiri text-[#554075] text-center '>{item.title}</h3>
          <p className="  text-[#554075] mx-auto z-10 text-center">
      {item.description}   
          </p>
          </div>
        </div>))}

       
        
       
      </Slider>
    </div>
      </div>
      {/* <div className='flex flex-col gap-7 px-1 py-10  bg-[#FDF2FF] items-center'>
        <h2 className='font-bold font-ElMessiri text-[#554075] leading-tight text-center px-1 z-10' style={{ fontSize: 'clamp(36px,4vw,55px)' }}>
        How to Book Your Appointment
        </h2>

        <p className=" w-[97%] md:w-[92%]  text-[#554075] z-10">
        Booking your appointment is fast and simple. Just fill out the form above, and our team will contact you within 24 hours to confirm your consultation. Whether you’re looking for a hair transplant in Nagpur or advanced skin care solutions, we’re here to guide you every step of the way.       </p>

      </div> */}
    </>
  );
}

export default AppointmentForm;