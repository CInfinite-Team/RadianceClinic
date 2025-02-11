import React from 'react'
import Topbar from './Topbar'
import GaugeVisualization from './GaugeVisualizer'
import DataTable from './DataTable'
import CountBox from './CountBox'

function FormsAdmin({selectedLink,data,headers,handleViewData}) {
 
  const formData = data?.data?.forms || {};

  const guageTestData = [
    { name: "Hair", value: data?.data?.totalHairForms, color: "#926FB0" },
    { name: "Skin", value: data?.data?.totalSkinForms, color: "#564375" },
   
  ];

  return (
    <>
       {selectedLink === "forms" && ( 
              <>
             <Topbar title={'Forms'} />
              <div className="w-full flex justify-center overflow-hidden">
                <div className="w-full max-w-7xl flex flex-wrap xl:flex-row flex-col justify-between xl:space-x-6 space-y-6 xl:space-y-0 mt-6 py-6">
                  {/* Box 1 */}
                  <CountBox data={formData} title='Forms Today' hiddenBtn={true} countEntity='length' />
                  

                  <div className="w-[250px] h-[250px] mx-auto md:mx-0 px-5 flex items-center justify-center">
                    <GaugeVisualization data={guageTestData} />
                  </div>
                </div>
              </div>
              <div className="w-full max-w-7xl overflow-x-auto mx-auto">
                <DataTable headers={headers} data={data} handleViewData={handleViewData} />
              </div>
            </>
            )}
    </>
  )
}

export default FormsAdmin
