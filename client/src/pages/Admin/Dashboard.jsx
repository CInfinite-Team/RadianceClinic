import { React, useState, useEffect } from 'react';
import Left_Panel from '../../components/Admin/Left_Panel.jsx';
import PrimaryBtn from '../../components/Buttons/PrimaryBtn';
import SecondaryBtn from '../../components/Buttons/SecondaryBtn';
import GaugeVisualization from '../../components/Admin/GaugeVisualizer';
import DataTable from '../../components/Admin/DataTable';
import Topbar from '../../components/Admin/Topbar.jsx';
import CountBox from '../../components/Admin/CountBox.jsx';

const Dashboard = () => {
  const [selectedLink, setSelectedLink] = useState('dashboard');  //Default set to Dashboard
  const [data, setData] = useState({}); // State to store the fetched data    (1 for now for development) ~ will set to null later
  
  const guageTestData = [
    { name: "Hair", value: 10, color: "#926FB0" },                                 //DUMMY TESTING ON Guage Meter
    { name: "Skin", value: 20, color: "#564375" },
    // { name: "Blue", value: 30, color: "#0000FF" },
  ];
  const headers = ['Sr. No', 'Name', 'Type', 'For', 'Status', ''];
  
  const Paneldata = [                                                            //DUMMY DATA                
    {
      "leadsCount": "13",
      "appointmentsCount": "32",
      "formCount": "31",
      "LatestLead": {
        "category": "skin",
        "username": "Amit Das",
        "status": "Active",
        "leadFor": "Dr. Nitin Barde",
        "uploadDate": "2024-12-15T08:00:00Z"
      },
      "AppointmentData": {
        "category": "skin",
        "username": "Amit Das",
        "status": "Active",
        "onDate": "2024-12-15T08:00:00Z",
        "nextDate": "2024-12-17T08:00:00Z"

      }
    }
  ]

  //Get Today's Date
  const currentDate = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD 

  // Function to fetch data based on selected link
  const fetchData = (link) => {
    setData({});
    switch (link) {
      case 'dashboard':
        return fetch('https://497c7338-5376-407b-a22c-a95ce2eea7b9.mock.pstmn.io/dashboard') // Replace with actual API endpoint
          .then(response => response.json())
          .then(data => setData(data));
      case 'leads':
        return fetch(`/api/leadsdata?date=${currentDate}`) // Replace with actual API endpoint
          .then(response => response.json())
          .then(data => setData(data));
      case 'appointments':
        return fetch('https://497c7338-5376-407b-a22c-a95ce2eea7b9.mock.pstmn.io/leads') // Replace with actual API endpoint
          .then(response => response.json())
          .then(data => setData(data));
      case 'forms':
        return fetch(`/api/formsdata?date=${currentDate}`) // Replace with actual API endpoint
          .then(response => response.json())
          .then(data => setData(data));
      default:
        setData({});
    }
  };

  // Trigger data fetch whenever the selectedLink state changes
  useEffect(() => {
    fetchData(selectedLink);
  }, [selectedLink]);

  const handleLinkClick = (link) => {
    setData({});
    setSelectedLink(link);
  };

  const handleViewData = (item) => {
    //To be Coded
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Panel */}
      <Left_Panel handleLinkClick={handleLinkClick} selectedLink={selectedLink}/>

     
      {/* Right Panel */}
      <div className="flex-[3] bg-white p-6 overflow-y-auto">
        
        <div>
        {data ? (
          <>
            {selectedLink === "dashboard" && ( <>
            <Topbar/>
              <div className="w-full flex justify-center">
                <div className="w-full max-w-7xl flex flex-wrap flex-row justify-center gap-5 mt-6 py-6">
                  {/* Box 1 */}
                  <CountBox handleLinkClick={handleLinkClick} data={data} title='New Leads Today' />
                  {/* Box 2 */}
                  <CountBox handleLinkClick={handleLinkClick} data={data} title='Appointments Today' />
                   {/* Box 3 */}
                  <CountBox handleLinkClick={handleLinkClick} data={data} title='Forms Filled Today' />
                
                </div>
              </div>
              <div className="w-full max-h-8xl flex justify-center">
                <div className="w-full max-w-7xl flex flex-wrap xl:flex-row flex-col justify-center xl:space-x-6 space-y-6 xl:space-y-0 mt-6 py-6">
                  {/* Box 1 */}
                  <div className="flex-1 bg-[#F0DFFF] p-6 flex flex-col justify-between relative">
                    <p className="absolute top-4 left-4 text-3xl font-bold text-[#463660] px-6">Latest Leads</p>
                    <div className="mt-6 space-y-6 py-5">
                    <div className="px-5">
                      <p className="font-semibold text-[#463660]">Name</p>
                      <p className="text-[#8C74B1] text-2xl font-bold">{Paneldata.length > 0 
                                                                      ? Paneldata[0].LatestLead["username"]
                                                                      .split(' ') 
                                                                      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) 
                                                                      .join(' ') 
                                                                      : "..."}</p>
                    </div>
                      <div className="flex space-x-6">
                        <div className="flex flex-col px-5 space-y-6 w-1/2">
                          {/* Treatments Section */}
                          <div className="flex flex-col">
                            <p className="font-semibold text-[#463660]">Treatments</p>
                            <p className="text-[#8C74B1] text-2xl font-bold">{Paneldata.length > 0 ? Paneldata[0].LatestLead["category"].charAt(0).toUpperCase() + Paneldata[0].LatestLead["category"].slice(1).toLowerCase(): "..."}</p>
                          </div>

                          {/* Lead Stage Section */}
                          <div className="flex flex-col">
                            <p className="font-semibold text-[#463660]">Lead Stage</p>
                            <p className="text-[#8C74B1] text-2xl font-bold">{Paneldata.length > 0 ? Paneldata[0].LatestLead["status"].charAt(0).toUpperCase() + Paneldata[0].LatestLead["status"].slice(1).toLowerCase(): "..."}</p>
                          </div>
                        </div>

                        {/* Column 2: Generated On and Lead For */}
                        <div className="flex flex-col px-5 space-y-6 w-1/2">
                          {/* Generated On Section */}
                          <div className="flex flex-col">
                            <p className="font-semibold text-[#463660]">Generated On</p>
                            <p className="text-[#8C74B1] text-2xl font-bold">{Paneldata.length > 0 ? new Date(Paneldata[0].LatestLead["uploadDate"]).toLocaleDateString("en-GB"): "..."}</p>
                          </div>

                          {/* Lead For Section */}
                          <div className="flex flex-col">
                            <p className="font-semibold text-[#463660]">Lead For</p>
                            <p className="text-[#8C74B1] text-2xl font-bold">{Paneldata.length > 0 
                                                                      ? Paneldata[0].LatestLead["leadFor"]
                                                                      .split(' ') 
                                                                      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) 
                                                                      .join(' ') 
                                                                      : "..."}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <PrimaryBtn children={"View All details"} className="text-md w-full px-6 justify-center" />
                    </div>
                  </div>

                  {/* Box 2 */}
                  <div className="flex-1 bg-[#F0DFFF] p-6 flex flex-col justify-between relative">
                  <p className="absolute top-4 left-4 text-3xl font-bold text-[#463660] px-6">Upcoming Appointments</p>
                    <div className="mt-6 space-y-6 py-5">
                    <div className="px-5">
                      <p className="font-semibold text-[#463660]">Name</p>
                      <p className="text-[#8C74B1] text-2xl font-bold">{Paneldata.length > 0 
                                                                      ? Paneldata[0].AppointmentData["username"]
                                                                      .split(' ') 
                                                                      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) 
                                                                      .join(' ') 
                                                                      : "..."}</p>
                    </div>
                      <div className="flex space-x-6">
                        <div className="flex flex-col px-5 space-y-6 w-1/2">
                          <div className="flex flex-col">
                            <p className="font-semibold text-[#463660]">Treatments</p>
                            <p className="text-[#8C74B1] text-2xl font-bold">{Paneldata.length > 0 ? Paneldata[0].AppointmentData["category"].charAt(0).toUpperCase() + Paneldata[0].AppointmentData["category"].slice(1).toLowerCase(): "..."}</p>
                          </div>
                          <div className="flex flex-col">
                            <p className="font-semibold text-[#463660]">Next Appointment</p>
                            <p className="text-[#8C74B1] text-2xl font-bold">{Paneldata.length > 0 ? new Date(Paneldata[0].AppointmentData["nextDate"]).toLocaleDateString("en-GB"): "..."}</p>
                          </div>
                        </div>
                        <div className="flex flex-col px-5 space-y-6 w-1/2">
                          <div className="flex flex-col">
                            <p className="font-semibold text-[#463660]">Treatment Stage</p>
                            <p className="text-[#8C74B1] text-2xl font-bold">{Paneldata.length > 0 ? Paneldata[0].AppointmentData["status"].charAt(0).toUpperCase() + Paneldata[0].AppointmentData["status"].slice(1).toLowerCase(): "..."}</p>
                          </div>

                          <div className="flex flex-col">
                            <p className="font-semibold text-[#463660]">Appointment on</p>
                            <p className="text-[#8C74B1] text-2xl font-bold">{Paneldata.length > 0 ? new Date(Paneldata[0].AppointmentData["onDate"]).toLocaleDateString("en-GB"): "..."}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <PrimaryBtn children={"View All details"} className="text-md w-full px-6 justify-center" />
                    </div>
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
                    <p className="text-9xl p-5 font-bold text-white mt-8">{data.length > 0 ? data[0].AppointmentsCount : 0}</p>
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
