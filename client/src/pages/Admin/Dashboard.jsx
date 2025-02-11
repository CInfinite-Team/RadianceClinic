import { React, useState, useEffect } from 'react';
import Left_Panel from '../../components/Admin/Left_Panel.jsx';
import PrimaryBtn from '../../components/Buttons/PrimaryBtn';
import SecondaryBtn from '../../components/Buttons/SecondaryBtn';
import GaugeVisualization from '../../components/Admin/GaugeVisualizer';
import DataTable from '../../components/Admin/DataTable';
import DashComponent from '../../components/Admin/DashComponent.jsx';
import LeadsAdmin from '../../components/Admin/LeadsAdmin.jsx';
import AppointmentAdmin from '../../components/Admin/AppointmentAdmin.jsx';
import FormsAdmin from '../../components/Admin/FormsAdmin.jsx';
// import Topbar from '../../components/Admin/Topbar.jsx';
// import CountBox from '../../components/Admin/CountBox.jsx';

const Dashboard = () => {
  const [selectedLink, setSelectedLink] = useState('dashboard');  //Default set to Dashboard
  const [data, setData] = useState({}); // State to store the fetched data    (1 for now for development) ~ will set to null later
  
  const guageTestData = [
    { name: "Hair", value: 10, color: "#926FB0" },                                 //DUMMY TESTING ON Guage Meter
    { name: "Skin", value: 20, color: "#564375" },
    
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
      <div className="flex-[3] bg-white p-2 md:p-6 overflow-y-auto">
        
        <div>
        {data ? (
          <>
           <DashComponent selectedLink={selectedLink} data={data} Paneldata={Paneldata} handleLinkClick={handleLinkClick} />


            <AppointmentAdmin handleLinkClick={handleLinkClick} selectedLink={selectedLink} data={data} guageTestData={guageTestData} handleViewData={handleViewData} headers={headers} />

            <LeadsAdmin selectedLink={selectedLink} data={data} headers={headers} guageTestData={guageTestData}  handleViewData={handleViewData} />

           <FormsAdmin selectedLink={selectedLink} data={data} headers={headers} guageTestData={guageTestData} handleViewData={handleViewData} />

           
        </>
        ) : (
          <div className='flex w-full h-[90vh] items-center justify-center'>
          <p className=" rounded-full border-2 animate-spin border-r-0 border-[#725B98] p-12"></p>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
