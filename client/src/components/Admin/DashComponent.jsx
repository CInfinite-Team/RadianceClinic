import React from 'react';
import PrimaryBtn from '../Buttons/PrimaryBtn';
import Topbar from './Topbar';
import CountBox from './CountBox';

function DashComponent({ selectedLink, handleLinkClick, data }) {
  const dashboardData = data?.data || {};
  const counts = {
    leadsCount: dashboardData.newLeadsToday || 0,
    totalNewForms: dashboardData.totalNewForms || 0,
    totalUpcomingAppointments: dashboardData.totalUpcomingAppointments || 0
  };


  const latestLead = dashboardData.latestContactUsLead || {};
  // console.log(latestLead)
  const upcomingAppointment = dashboardData.upcomingAppointment || {};
  // console.log(upcomingAppointment)

  const formatDate = (dateString) => {
    if (!dateString) return "...";
    return new Date(dateString).toLocaleDateString("en-GB");
  };

  const capitalizeWords = (str) => {
    if (!str) return "...";
    return str.split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  return (
    <>
      {selectedLink === "dashboard" && (
        <>
          <Topbar title={'Welcome, Dr. Barde'} />
          <div className="w-full flex justify-center">
            <div className="w-full max-w-7xl flex flex-wrap  flex-row lg:justify-between  gap-5 mt-6 py-6">
              <CountBox 
                handleLinkClick={handleLinkClick} 
                data={counts} 
                title='New Leads Today' 
                countEntity='leadsCount' 
              />
              <CountBox 
                handleLinkClick={handleLinkClick} 
                data={counts} 
                title='New Forms Today' 
                BtnText='See Forms' 
                countEntity='totalNewForms' 
              />
              <CountBox 
                handleLinkClick={handleLinkClick} 
                data={counts} 
                title='Upcoming Appointments' 
                countEntity='totalUpcomingAppointments' 
              />
            </div>
          </div>

          <div className="w-full max-h-8xl flex justify-center">
            <div className="w-full max-w-7xl flex flex-wrap xl:flex-row flex-col justify-center xl:space-x-6 space-y-6 xl:space-y-0 mt-6 py-6">
              
              {/* Latest Leads Box */}
              <div className='grid grid-cols-1 sm:grid-cols-2 bg-[#F0DFFF] items-start flex-1 w-full p-6 gap-4'>
                <p className="leading-tight text-3xl col-span-full font-bold text-[#463660]">Latest Leads</p>
                
                <div className='flex flex-col col-span-full'>
                  <p className="font-semibold text-[#463660]">Name</p>
                  <p className="text-[#8C74B1] text-2xl font-bold">{capitalizeWords(latestLead.name)}</p>
                </div>

                <div className="flex flex-col">
                  <p className="font-semibold text-[#463660]">Subject</p>
                  <p className="text-[#8C74B1] text-2xl font-bold">{capitalizeWords(latestLead.subject)}</p>
                </div>

                <div className="flex flex-col">
                  <p className="font-semibold text-[#463660]">Generated On</p>
                  <p className="text-[#8C74B1] text-2xl font-bold">{formatDate(latestLead.createdAt)}</p>
                </div>

                <div className="flex flex-col group  relative">
                  <p className="font-semibold text-[#463660]">Email</p>
                  <p className="text-[#8C74B1] text-xl font-bold whitespace-nowrap overflow-clip overflow-ellipsis ">{latestLead.email || "..."}</p>
                  <p className="text-white text-lg px-1 transition duration-500 opacity-0 group-hover:opacity-100 rounded-sm  whitespace-nowrap absolute top-0 backdrop-blur-sm bg-[#00000069] ">{latestLead.email || "..."}</p>
                </div>

                <div className="flex flex-col">
                  <p className="font-semibold text-[#463660]">Phone</p>
                  <p className="text-[#8C74B1] text-2xl font-bold">{latestLead.phone || "..."}</p>
                </div>

                <div className="mt-auto col-span-full">
                  <PrimaryBtn className="text-md w-full px-6 justify-center">See All details</PrimaryBtn>
                </div>
              </div>

              {/* Upcoming Appointments Box */}
              <div className='grid grid-cols-1 sm:grid-cols-2 bg-[#F0DFFF] items-start flex-1 w-full p-6 gap-4'>
                <p className="leading-tight text-3xl col-span-full font-bold text-[#463660]">Upcoming Appointments</p>

                <div className='flex flex-col col-span-full'>
                  <p className="font-semibold text-[#463660]">Name</p>
                  <p className="text-[#8C74B1] text-2xl font-bold">{capitalizeWords(upcomingAppointment.name)}</p>
                </div>

                <div className="flex flex-col">
                  <p className="font-semibold text-[#463660]">Category</p>
                  <p className="text-[#8C74B1] text-2xl font-bold">{capitalizeWords(upcomingAppointment.category)}</p>
                </div>

                <div className="flex flex-col">
                  <p className="font-semibold text-[#463660]">Mode</p>
                  <p className="text-[#8C74B1] text-2xl font-bold">{capitalizeWords(upcomingAppointment.modeOfConsultation)}</p>
                </div>

                <div className="flex flex-col">
                  <p className="font-semibold text-[#463660]">Date</p>
                  <p className="text-[#8C74B1] text-2xl font-bold">{formatDate(upcomingAppointment.appointmentDate)}</p>
                </div>

                <div className="flex flex-col">
                  <p className="font-semibold text-[#463660]">Time</p>
                  <p className="text-[#8C74B1] text-2xl font-bold">{upcomingAppointment.appointmentTime || "..."}</p>
                </div>

                <div className="mt-auto col-span-full">
                  <PrimaryBtn className="text-md w-full px-6 justify-center">See All details</PrimaryBtn>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default DashComponent;