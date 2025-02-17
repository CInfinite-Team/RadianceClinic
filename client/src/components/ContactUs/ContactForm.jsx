import React, { useState,useRef,useEffect } from 'react';
import PrimaryBtn from '../Buttons/PrimaryBtn';
import { ArrowRightCircleIcon } from 'lucide-react';
import leftVector from '../../assets/ContactUs/leftVector.svg';
import rightVector from '../../assets/ContactUs/rightVector.svg';
import axios from 'axios';
import SERVER_URL from '../../constant.mjs';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const formRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.2) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2, 
      }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => observer.disconnect();
  }, []);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await axios.post(`${SERVER_URL}/api/forms/contactUs`, formData);
      setSuccess('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="relative">
        <img loading='lazy' width="auto" height="auto"
          src={leftVector}
          alt=""
          className="absolute hidden md:block -bottom-20 -left-48 xl:-left-72 z-0 max-w-[218px] xl:max-w-[303px]"
        />
        <img loading='lazy' width="auto" height="auto"
          src={rightVector}
          alt=""
          className="absolute hidden md:block -bottom-20 -right-48 xl:-right-72 z-0 max-w-[218px] xl:max-w-[303px]"
        />

        <form ref={formRef} onSubmit={handleSubmit} className='bg-white relative overflow-visible gap-12 z-10 p-7 flex flex-col shadow-lg shadow-[#E0D1F7]  '
         style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(-100px)',
          transition: `all 0.5s ease-out ${ 0.2}s`
        }}>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-3">
              <label htmlFor="name" className="text-[#554075] font-bold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                className="text-[#554075] rounded-[3px] border border-[#B298DC] w-[80vw] md:w-auto xl:w-[417px] p-3"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="email" className="text-[#554075] font-bold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                className="text-[#554075] rounded-[3px] border border-[#B298DC] w-[80vw] md:w-auto xl:w-[417px] p-3"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="phone" className="text-[#554075] font-bold">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Your Mobile No"
                className="text-[#554075] rounded-[3px] border border-[#B298DC] w-[80vw] md:w-auto xl:w-[417px] p-3"
              />
            </div>

            <div className="flex flex-col gap-3">
  <label htmlFor="subject" className="text-[#554075] font-bold">Subject</label>
  <select
    name="subject"
    value={formData.subject}
    onChange={handleChange}
    className="text-[#554075] rounded-[3px] border border-[#B298DC] w-[80vw] md:w-auto xl:w-[417px] p-3"
  >
    <option value="" disabled>Select Subject</option>
    <option value="Hair">Hair</option>
    <option value="Skin">Skin</option>
    <option value="Laser">Laser</option>
    <option value="Anti-Aging">Anti-Aging</option>
    <option value="Cosmetic">Cosmetic</option>
    <option value="General">General</option>
  </select>
</div>

          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="message" className="text-[#554075] font-bold">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Your Message"
              className="text-[#554075] resize-none rounded-[3px] border border-[#B298DC] p-3"
            />
          </div>

          <label className="relative flex-1 items-center gap-2 max-h-3 flex" htmlFor="t&c">
            <input
              className="border-[#B9832B] w-fit border p-1 rounded-lg"
              required
              id="t&c"
              type="checkbox"
            />
            <span className="text-[#AB9DCD]">
              I agree with{' '}
              <a href="/terms-and-condition" target="_blank" className="hover:underline cursor-pointer text-[#554075]">
                Terms of Use
              </a>{' '}
              and{' '}
              <a href="/privacy-policy" target="_blank" className="hover:underline cursor-pointer text-[#554075]">
                Privacy Policy
              </a>
            </span>
          </label>

          <PrimaryBtn className="items-center justify-center gap-3" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'} <ArrowRightCircleIcon size={18} />
          </PrimaryBtn>

          {error && <p className="text-red-500 mt-3">{error}</p>}
          {success && <p className="text-green-500 mt-3">{success}</p>}
        </form>
      </div>
    </>
  );
}

export default ContactForm;
