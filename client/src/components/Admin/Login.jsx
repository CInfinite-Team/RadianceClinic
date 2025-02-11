import React, { useState, useEffect } from 'react';
import Image from '../../assets/Admin/Admin.svg';
import PrimaryBtn from '../Buttons/PrimaryBtn';
import Logo from '../../assets/Admin/LoginLogo.svg'
import { useNavigate } from 'react-router-dom'; 
import Cookies from 'js-cookie';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
// import { ToastContainer, toast, Slide } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import SERVER_URL from '../../constant.mjs';
import Plantall1 from '../../assets/SharedAssets/Plantall1.png';
import Plantall2 from '../../assets/SharedAssets/Plantall2.png';


const Login = () => {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading2, setIsLoading2] = useState(true);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return emailRegex.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      setIsLoading(false);
      return;
    }
  
    setError('');
    try {
      const response = await axios.post(`${SERVER_URL}/login`, {
        email: email,
        password: password,
      });
  
      const data = response.data;
  
      // Set cookie with token data and 24-hour expiration
      Cookies.set('LoginStatus', JSON.stringify(data), { 
        expires: 1, // 1 day
        path: '/',
        secure: true,
        sameSite: 'strict'
      });
  
      // Navigate to dashboard
      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Error during login:', error);
      setError(error.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  

  useEffect(() => {
    const checkIfAuthenticated = async () => {
      try {
        const loginTokenCookie = Cookies.get('LoginStatus');
        
        if (!loginTokenCookie) {
          setIsAuthenticated(false);
          setIsLoading2(false);
          return;
        }

        const tokenData = JSON.parse(loginTokenCookie);

        const response = await axios.get(
          `${SERVER_URL}/login`,
          {
            headers: {
              Authorization: `Bearer ${tokenData.token}`,
            },
          }
        );

        if (response.data.authenticated) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Token verification error:', error);
        Cookies.remove('LoginStatus');
        setIsAuthenticated(false);
      } finally {
        setIsLoading2(false);
      }
    };

    checkIfAuthenticated();
  }, []);

  if (isLoading2) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-3 border-[#ffaaaa]"></div>
      </div>
    );
  }

  // If authenticated, redirect to dashboard
  if (isAuthenticated) {
    return <Navigate to="/admin/dashboard" />;
  }


  return (
    <>


    <div className="min-h-screen flex">

    <div className="hidden lg:block lg:w-1/2 bg-cover bg-right-top " style={{
        backgroundImage: `url(${Image})`
      }}>
      </div>

      {/* Left Side - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center relative items-center p-8 bg-white">
      <img src={Plantall1} alt="" className='fixed w-44 md:w-60 lg:hidden left-0 top-0' />
      <img src={Plantall2} alt="" className='fixed w-44 md:w-52 lg:hidden right-0 -bottom-12' />
        <div className="w-full max-w-md z-50 backdrop-blur-sm py-5 p-2 rounded-md bg-[#ffffff83]">
          <div className=" mb-5">
          <div className="mb-2 flex justify-center">
            <img src={Logo} loading="eager"  width={'auto'} height={'auto'} className="w-[260px] md:w-[360px] pt-1"/>
          </div>
          
          
          
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
          <div className="flex flex-col gap-2">
              <label htmlFor="Email" className="text-[#554075] font-bold">Email</label>
              <input 
                type="email" 
                name='Email'
                placeholder="Enter Your Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-[#554075] rounded-[3px]  bg-[#F3EFFA] w-full  p-3 focus:border focus:border-purple-700"
                required 
              />
              {error && (
                <div className="text-red-500 border-red-500 text-sm">{error}</div>
              )}
            </div>

            <div className="flex flex-col gap-2">
            <label htmlFor="Email" className="text-[#554075] font-bold">Password</label>
              <input 
                type="password" 
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-[#554075] rounded-[3px]  w-full bg-[#F3EFFA] p-3 focus:border focus:border-purple-700"
                required 
              />
            </div>

            <PrimaryBtn 
              type="submit" 
              disabled={isLoading}
              className="w-full justify-center !py-2 transition duration-300 disabled:opacity-50"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </PrimaryBtn>
          </form>
        </div>
      </div>

      {/* Right Side - Image */}
      
    </div>
    </>
  );
};

export default Login;