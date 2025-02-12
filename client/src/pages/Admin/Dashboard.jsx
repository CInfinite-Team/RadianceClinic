import { React, useState, useEffect } from 'react';
import axios from 'axios';
import Left_Panel from '../../components/Admin/Left_Panel.jsx';
import DashComponent from '../../components/Admin/DashComponent.jsx';
import LeadsAdmin from '../../components/Admin/LeadsAdmin.jsx';
import AppointmentAdmin from '../../components/Admin/AppointmentAdmin.jsx';
import FormsAdmin from '../../components/Admin/FormsAdmin.jsx';
import Cookies from 'js-cookie';
import SERVER_URL from '../../constant.mjs';

const Dashboard = () => {
  const [selectedLink, setSelectedLink] = useState('dashboard');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loginTokenCookie = Cookies.get('LoginStatus');
  const token = loginTokenCookie ? JSON.parse(loginTokenCookie).token : null;
  
  const getHeaders = () => ({
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });

  const API_ENDPOINTS = {
    dashboard: '/api/admin/dashboard',
    leads: '/api/admin/leads',
    appointments: '/api/admin/appointments',
    forms: '/api/admin/forms'
  };

  const fetchFunctions = {
    dashboard: async () => {
      try {
        const response = await axios.get(SERVER_URL + API_ENDPOINTS.dashboard, getHeaders());
        if (response.data.success) {
          setData(response.data);
        } else {
          throw new Error(response.data.message || 'Failed to fetch dashboard data');
        }
      } catch (error) {
        setError(error.message);
        console.error('Dashboard fetch error:', error);
      }
    },

    leads: async () => {
      try {
        const response = await axios.get(SERVER_URL + API_ENDPOINTS.leads, getHeaders());
        if (response.data.success) {
          setData(response.data);
        } else {
          throw new Error(response.data.message || 'Failed to fetch leads data');
        }
      } catch (error) {
        setError(error.message);
        console.error('Leads fetch error:', error);
      }
    },

    appointments: async () => {
      try {
        const response = await axios.get(SERVER_URL + API_ENDPOINTS.appointments, getHeaders());
        if (response.data.success) {
          setData(response.data);
        } else {
          throw new Error(response.data.message || 'Failed to fetch appointments data');
        }
      } catch (error) {
        setError(error.message);
        console.error('Appointments fetch error:', error);
      }
    },

    forms: async () => {
      try {
        const response = await axios.get(SERVER_URL + API_ENDPOINTS.forms, getHeaders());
        if (response.data.success) {
          setData(response.data);
        } else {
          throw new Error(response.data.message || 'Failed to fetch forms data');
        }
      } catch (error) {
        setError(error.message);
        console.error('Forms fetch error:', error);
      }
    }
  };

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    setLoading(true);
    setData(null);
    setError(null);
  };

  const refreshData = async () => {
    if (fetchFunctions[selectedLink]) {
      setLoading(true);
      await fetchFunctions[selectedLink]();
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (fetchFunctions[selectedLink]) {
        await fetchFunctions[selectedLink]();
      }
      setLoading(false);
    };

    fetchData();
  }, [selectedLink]);

  const headers = ['Sr. No', 'Name', 'Category', 'Contact', 'Status', 'Actions'];

  const handleViewData = async (id, type) => {
    try {
      const endpoint = type === 'lead'
        ? `${SERVER_URL}/api/admin/leads/${id}`
        : `${SERVER_URL}/api/admin/appointments/${id}`;

      const response = await axios.get(endpoint, getHeaders());
      if (response.data.success) {
        console.log('View details:', response.data.data);
      }
    } catch (error) {
      console.error('Error fetching details:', error);
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Left_Panel handleLinkClick={handleLinkClick} selectedLink={selectedLink} />
      <div className="flex-[3] bg-white p-2 md:p-6 overflow-y-auto">
        {loading ? (
          <div className='flex w-full h-[90vh] items-center justify-center'>
            <p className="rounded-full border-2 animate-spin border-r-0 border-[#725B98] p-12"></p>
          </div>) : error ? (
          <div className="text-red-500 text-center p-4">
            {error}
          </div>
        ) : (
          <div>
            <DashComponent 
              selectedLink={selectedLink} 
              data={data} 
              handleLinkClick={handleLinkClick} 
            />
            <AppointmentAdmin 
              selectedLink={selectedLink} 
              data={data} 
              handleViewData={handleViewData}
              headers={headers}
            />
            <LeadsAdmin 
              selectedLink={selectedLink} 
              data={data} 
              handleViewData={handleViewData}
              headers={headers}
            />
            <FormsAdmin 
              selectedLink={selectedLink} 
              data={data} 
              handleViewData={handleViewData}
              onRefresh={refreshData}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;