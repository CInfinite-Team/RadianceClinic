import React from 'react'
import SecondaryBtn from '../Buttons/SecondaryBtn'
import GaugeVisualization from './GaugeVisualizer'
import DataTable from './DataTable'
import Topbar from './Topbar'

function LeadsAdmin({selectedLink,headers,data,handleViewData,guageTestData}) {
  return (
    <>
      {selectedLink === "leads" && (
              <>
              

              <Topbar title={'Leads'} />
              
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
    </>
  )
}

export default LeadsAdmin
