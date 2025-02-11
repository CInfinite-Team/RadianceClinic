import React from 'react'
import Topbar from './Topbar'
import GaugeVisualization from './GaugeVisualizer'
import DataTable from './DataTable'

function FormsAdmin({selectedLink,guageTestData,data,headers,handleViewData}) {
  return (
    <>
       {selectedLink === "forms" && ( 
              <>
             <Topbar title={'Forms'} />
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
  )
}

export default FormsAdmin
