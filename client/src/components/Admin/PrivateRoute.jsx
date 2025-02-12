import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import SERVER_URL from "../../constant.mjs"

const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoadingPri, setIsLoadingPri] = useState(true);

  useEffect(() => {
      const loginTokenCookie = Cookies.get('LoginStatus');
            if (loginTokenCookie && loginTokenCookie !== '{}' && loginTokenCookie !== 'null') {
              
              setIsAuthenticated(true);
              setIsLoadingPri(false);
              return;
            } else {
            
              setIsAuthenticated(false);
              setIsLoadingPri(false);
            }
  }, []);

  if (isLoadingPri) {
    return (
        <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-[#ffaaaa]"></div>
      </div>
    );
  }

  // If not authenticated, redirect to login
  return isAuthenticated ? children : <Navigate to="/admin-login" />;

};

export default PrivateRoute;
