import React from 'react'
import SecondaryBtn from '../Buttons/SecondaryBtn'
import GaugeVisualization from './GaugeVisualizer'
import DataTable from './DataTable'
import Topbar from './Topbar'
import CountBox from './CountBox'

function AppointmentAdmin({selectedLink,data,headers,handleViewData,handleLinkClick,onRefresh }) {
  const AppointmentData = data?.data || {};

  const Countdata = AppointmentData?.appointments || [];
 
  
    const hairCount = Countdata.filter(app => app.category === 'Hair').length;
    const skinCount = Countdata.filter(app => app.category === 'Skin').length;


    const guageTestData = [
      { name: "Hair", value: hairCount, color: "#926FB0" },
      { name: "Skin", value: skinCount, color: "#564375" },
     
    ];

  return (
    <>
       {selectedLink === "appointments" && (
              <>
             <Topbar title={'Appointments'} />
              <div className="w-full flex justify-center overflow-hidden">
                <div className="w-full  flex flex-wrap flex-row justify-center items-center  lg:justify-start lg:gap-20 xl:gap-40 space-y-6 xl:space-y-0 mt-6 ">
                  {/* Box 1 */}
                  <CountBox handleLinkClick={handleLinkClick} data={AppointmentData} title='Upcoming Appointments' countEntity='totalUpcomingAppointments'/>
                 
                  <div className="h-[250px] w-[250px]   lg:w-[150px] lg:h-[200px] xl:h-[250px] px-5 flex items-center justify-center">
                    <GaugeVisualization data={guageTestData} />
                  </div>
                </div>
              </div>
              <div className="w-full max-w-7xl overflow-x-auto  mx-auto">
                <DataTable headers={headers} route='updateAppointmentStatus' onStatusUpdate={onRefresh} data={Countdata} handleViewData={handleViewData} />
              </div>
              </>
            )}
    </>
  )
}

export default AppointmentAdmin
