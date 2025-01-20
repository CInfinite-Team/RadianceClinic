import { React, useState, useEffect } from 'react';
import Logo from '../../assets/SharedAssets/adminPanel_logo.png';
import dashboard from '../../assets/Admin/dashboard.png';
import leads from '../../assets/Admin/leads.png';
import appointments from '../../assets/Admin/appointments.png';
import forms from '../../assets/Admin/forms.png';
import PrimaryBtn from '../../components/Buttons/PrimaryBtn';

const Dashboard = () => {
  const [selectedLink, setSelectedLink] = useState('dashboard');  //Default set to Dashboard
  const [data, setData] = useState(null); // State to store the fetched data

  // Function to fetch data based on selected link
  const fetchData = (link) => {
    // Simulate fetching data with different content for each link
    switch (link) {
      case 'dashboard':
        return fetch('/api/dashboard') // Replace with actual API endpoint
          .then(response => response.json())
          .then(data => setData(data));
      case 'leads':
        return fetch('/api/leads') // Replace with actual API endpoint
          .then(response => response.json())
          .then(data => setData(data));
      case 'appointments':
        return fetch('/api/appointments') // Replace with actual API endpoint
          .then(response => response.json())
          .then(data => setData(data));
      case 'forms':
        return fetch('/api/forms') // Replace with actual API endpoint
          .then(response => response.json())
          .then(data => setData(data));
      default:
        setData(null);
    }
  };

  // Trigger data fetch whenever the selectedLink state changes
  useEffect(() => {
    fetchData(selectedLink);
  }, [selectedLink]);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <div className="flex h-screen">
      {/* Left Panel */}
      <div className="flex-[1] bg-white p-6 flex flex-col items-center">
        <div className="text-center mb-6 pb-6">
          <img src={Logo} alt="Logo" className="h-auto w-auto" />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-4">
          <a
            href="#"
            className={`flex items-center text-[#463660] hover:font-bold  text-sm sm:text-base md:text-lg transition-all duration-200 ${selectedLink === 'dashboard' ? 'font-bold' : ''}`}
            onClick={() => handleLinkClick('dashboard')}
          >
            <img
              src={dashboard}
              className="mr-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
              alt="Dashboard"
            />
            Dashboard
          </a>
          <a
            href="#"
            className={`flex items-center text-[#463660] hover:font-bold  text-sm sm:text-base md:text-lg transition-all duration-200 ${selectedLink === 'appointments' ? 'font-bold' : ''}`}
            onClick={() => handleLinkClick('appointments')}
          >
            <img
              src={appointments}
              className="mr-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
              alt="Appointments"
            />
            Appointments
          </a>
          <a
            href="#"
            className={`flex items-center text-[#463660] hover:font-bold  text-sm sm:text-base md:text-lg transition-all duration-200 ${selectedLink === 'leads' ? 'font-bold' : ''}`}
            onClick={() => handleLinkClick('leads')}
          >
            <img
              src={leads}
              className="mr-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
              alt="Leads"
            />
            Leads
          </a>
          <a
            href="#"
            className={`flex items-center text-[#463660] hover:font-bold  text-sm sm:text-base md:text-lg transition-all duration-200 ${selectedLink === 'forms' ? 'font-bold' : ''}`}
            onClick={() => handleLinkClick('forms')}
          >
            <img
              src={forms}
              className="mr-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
              alt="Forms"
            />
            Forms
          </a>
        </nav>

        <div className="mt-auto">
          <PrimaryBtn
            children={'Log out'}
            className={'px-20 py-2 rounded-md xs:px-2 sm:px-6 md:px-20 xs:text-xs md:text-lg'}
          />
        </div>
      </div>

      <div className="w-[2px] bg-gray-300"></div>

      {/* Right Panel */}
      <div className="flex-[3] bg-white p-6">
        <h2 className="text-xl font-bold">
          {selectedLink.charAt(0).toUpperCase() + selectedLink.slice(1)} Panel
        </h2>
        {/* Displaying the fetched data dynamically */}
        <div>
          {data ? (
            <pre>{JSON.stringify(data, null, 2)}</pre> // Display the fetched data in a formatted way
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
