import React from 'react'
import SecondaryBtn from '../Buttons/SecondaryBtn'
import GaugeVisualization from './GaugeVisualizer'
import DataTable from './DataTable'
import Topbar from './Topbar'
function AppointmentAdmin({selectedLink,data,guageTestData,headers,handleViewData}) {
  return (
    <>
       {selectedLink === "appointments" && (
              <>
             <Topbar title={'Appointments'} />
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
    </>
  )
}

export default AppointmentAdmin
