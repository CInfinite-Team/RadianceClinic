import { React, useState, useEffect } from 'react';
import Logo from '../../assets/SharedAssets/adminPanel_logo.png';
import dashboard from '../../assets/Admin/dashboard.png';
import leads from '../../assets/Admin/leads.png';
import appointments from '../../assets/Admin/appointments.png';
import forms from '../../assets/Admin/forms.png';
import PrimaryBtn from '../../components/Buttons/PrimaryBtn';
import SecondaryBtn from '../../components/Buttons/SecondaryBtn';
import GaugeVisualization from '../../components/Admin/GaugeVisualizer';
import DataTable from '../../components/Admin/DataTable';

const Dashboard = () => {
  const [selectedLink, setSelectedLink] = useState('dashboard');  //Default set to Dashboard
  const [data, setData] = useState(1); // State to store the fetched data    (1 for now for development) ~ will set to null later
  
  const guageTestData = [
    { name: "Red", value: 10, color: "#FF0000" },                                 //DUMMY TESTING ON Guage Meter
    { name: "Green", value: 20, color: "#00FF00" },
    { name: "Blue", value: 30, color: "#0000FF" },
  ];
  const headers = ['Sr. No', 'Name', 'Type', 'For', 'Status', ''];
  
  

  //Get Today's Date
  const currentDate = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD 

  // Function to fetch data based on selected link
  const fetchData = (link) => {
    switch (link) {
      case 'dashboard':
        return fetch(`/api/dashboard?date=${currentDate}`) // Replace with actual API endpoint
          .then(response => response.json())
          .then(data => setData(data));
      case 'leads':
        return fetch(`/api/leads?date=${currentDate}`) // Replace with actual API endpoint
          .then(response => response.json())
          .then(data => setData(data));
      case 'appointments':
        return fetch(`/api/appointments?date=${currentDate}`) // Replace with actual API endpoint
          .then(response => response.json())
          .then(data => setData(data));
      case 'forms':
        return fetch(`/api/forms?date=${currentDate}`) // Replace with actual API endpoint
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

  const handleViewData = (item) => {
    //To be Coded
  };


  return (
    <div className="flex h-screen">
      {/* Left Panel */}
      <div className="flex-[1] bg-white p-6 flex flex-col items-center ">
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
        {/* Displaying the fetched data dynamically */}
        <div>
        {data ? (
          <>
            {selectedLink === "dashboard" && ( <>
              <div className="w-full max-w-7xl mx-auto p-6 bg-[#554078] flex items-center justify-between">
                <p className="text-3xl font-semibold text-white pl-5">
                  Welcome, Dr. Barde
                </p>
                <SecondaryBtn children={"View Website"} classname={"p-2"} />
              </div>
              <div className="w-full flex justify-center">
                <div className="w-full max-w-7xl flex flex-wrap xl:flex-row flex-col justify-center xl:space-x-6 space-y-6 xl:space-y-0 mt-6 py-6">
                  {/* Box 1 */}
                  <div className="flex-1 bg-[#554078] p-6 flex flex-col justify-between relative">
                    <p className="absolute top-4 left-4 text-3xl font-bold text-white">New Leads Today</p>
                    <p className="text-9xl p-5 font-bold text-white mt-8">10</p>
                    <SecondaryBtn children={"View All leads"} className="absolute bottom-4 right-4 text-md" />
                  </div>
                  {/* Box 2 */}
                  <div className="flex-1 bg-[#554078] p-6 flex flex-col justify-between relative">
                    <p className="absolute top-4 left-4 text-3xl font-bold text-white">Appointments Today</p>
                    <p className="text-9xl p-5 font-bold text-white mt-8">10</p>
                    <SecondaryBtn children={"View all appoinments"} className="absolute bottom-4 right-4 text-sm" />
                  </div>
                  {/* Box 3 */}
                  <div className="flex-1 bg-[#554078] p-6 flex flex-col justify-between relative">
                    <p className="absolute top-4 left-4 text-3xl font-bold text-white">Forms Filled Today</p>
                    <p className="text-9xl p-5 font-bold text-white mt-8">10</p>
                    <SecondaryBtn children={"View All forms"} className="absolute bottom-4 right-4 text-md" />
                  </div>
                </div>
              </div>
              </>
            )}

            {selectedLink === "leads" && (
              <>
              <div className="w-full max-w-7xl mx-auto p-6 bg-[#554078] flex items-center justify-between">
                <p className="text-3xl font-semibold text-white pl-5">Leads</p>
                <SecondaryBtn children={"View Website"} classname={"p-2"} />
              </div>
              
              {/* Responsive Container */}
              <div className="w-full flex justify-center">
                <div className="w-full max-w-7xl flex flex-wrap xl:flex-row flex-col justify-center xl:space-x-6 space-y-6 xl:space-y-0 mt-6 py-6">
                  
                  {/* Box 1 */}
                  <div className="flex-1 bg-[#554078] p-1 md:p-6 flex flex-col justify-between relative w-full max-w-xs md:max-w-md">
                    <p className="absolute pd-5 top-4 left-4 text-xl md:text-2xl lg:text-3xl font-bold text-white">Hair Leads</p>
                    <p className="text-5xl p-5 md:text-7xl lg:text-9xl font-bold text-white mt-8">10</p>
                  </div>
                  
                  {/* Box 2 */}
                  <div className="flex-1 bg-[#554078] p-1 md:p-6 flex flex-col justify-between relative w-full max-w-xs md:max-w-md">
                    <p className="absolute pd-5 top-4 left-4 text-xl md:text-2xl lg:text-3xl font-bold text-white">Skin Leads</p>
                    <p className="text-5xl p-5 md:text-7xl lg:text-9xl font-bold text-white mt-8">10</p>
                  </div>
            
                  {/* Box 3 */}
                  <div className="flex-1 bg-[#554078] p-1 md:p-6 flex flex-col justify-between relative w-full max-w-xs md:max-w-md">
                    <p className="absolute pd-5 top-4 left-4 text-xl md:text-2xl lg:text-3xl font-bold text-white">Laser Leads</p>
                    <p className="text-5xl p-5 md:text-7xl lg:text-9xl font-bold text-white mt-8">10</p>
                  </div>
            
                  {/* Gauge Container */}
                  
                  <div className="pl-6 pr-6 pt-10 2xl:pt-0 2xl:pr-0 w-full max-w-[250px] md:w-[250px] md:h-[250px] h-auto flex items-center justify-center ">
                    <GaugeVisualization data={guageTestData} />
                  </div>
                </div>
              </div>
              <div className="w-full max-w-7xl mx-auto">
                <DataTable headers={headers} data={data} handleViewData={handleViewData} />
              </div>
            </>
            
            )}

            {selectedLink === "appointments" && (
              <>
              <div className="w-full max-w-7xl mx-auto p-6 bg-[#554078] flex items-center justify-between">
                <p className="text-3xl font-semibold text-white pl-5">
                  Appointments
                </p>
                <SecondaryBtn children={"View Website"} classname={"p-2"} />
              </div>
              <div className="w-full flex justify-center">
                <div className="w-full max-w-7xl flex flex-wrap xl:flex-row flex-col justify-between xl:space-x-6 space-y-6 xl:space-y-0 mt-6 py-6">
                  {/* Box 1 */}
                  <div className="flex-1 max-w-md bg-[#554078] p-6 flex flex-col justify-between relative">
                    <p className="absolute top-4 left-4 text-3xl font-bold text-white">Upcoming Appointments</p>
                    <p className="text-9xl p-5 font-bold text-white mt-8">10</p>
                  </div>
                  <div className="w-[250px] h-[250px] px-5 flex items-center justify-center">
                    <GaugeVisualization data={guageTestData} />
                  </div>
                </div>
              </div>
              <div className="w-full max-w-7xl mx-auto">
                <DataTable headers={headers} data={data} handleViewData={handleViewData} />
              </div>
              </>
            )}

            {selectedLink === "forms" && ( 
              <>
              <div className="w-full max-w-7xl mx-auto p-6 bg-[#554078] flex items-center justify-between">
                <p className="text-3xl font-semibold text-white pl-5">
                  Forms
                </p>
                <SecondaryBtn children={"View Website"} classname={"p-2"} />
              </div>
              <div className="w-full flex justify-center">
                <div className="w-full max-w-7xl flex flex-wrap xl:flex-row flex-col justify-between xl:space-x-6 space-y-6 xl:space-y-0 mt-6 py-6">
                  {/* Box 1 */}
                  <div className="flex-1 max-w-md bg-[#554078] p-6 flex flex-col justify-between relative">
                    <p className="absolute top-4 left-4 text-3xl font-bold text-white">Forms Today</p>
                    <p className="text-9xl p-5 font-bold text-white mt-8">10</p>
                  </div>
                  <div className="w-[250px] h-[250px] px-5 flex items-center justify-center">
                    <GaugeVisualization data={guageTestData} />
                  </div>
                </div>
              </div>
              <div className="w-full max-w-7xl mx-auto">
                <DataTable headers={headers} data={data} handleViewData={handleViewData} />
              </div>
            </>
            )}
        </>
        ) : (
          <p className="text-gray-500 mt-6 text-3xl">Loading data...</p>
        )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
