import React from 'react'
import SecondaryBtn from '../Buttons/SecondaryBtn'
import GaugeVisualization from './GaugeVisualizer'
import DataTable from './DataTable'
import Topbar from './Topbar'
import CountBox from './CountBox'

function LeadsAdmin({selectedLink,headers,data,handleViewData,handleLinkClick}) {
  console.log(data)
  const LeadsData = data?.data?.leads || {};
  const Count = data?.data?.categoryCounts || {};

  const hairCount = Count.Hair;
  const skinCount = Count.Skin;

  const guageTestData = [
    { name: "Hair", value: hairCount, color: "#926FB0" },
    { name: "Skin", value: skinCount, color: "#564375" },
   
  ];
  return (
    <>
      {selectedLink === "leads" && (
              <>
              

              <Topbar title={'Leads'} />
              
              {/* Responsive Container */}
              <div className="w-full flex justify-center overflow-hidden">
                <div className="w-full max-w-7xl flex flex-wrap xl:flex-row flex-col items-center justify-center xl:space-x-6 space-y-6 xl:space-y-0 mt-6 py-6">
                  
                  {/* <CountBox handleLinkClick={handleLinkClick} data={data} title='Hair Leads' hiddenBtn={true} countEntity='' /> */}
                  {/* Box 1 */}
                  <CountBox data={Count} title='Hair Leads' hiddenBtn={true} countEntity='Hair' />
                
                  
                  {/* Box 2 */}
                  <CountBox data={Count} title='Skin Leads' hiddenBtn={true} countEntity='Skin' />

                  
            
                  {/* Box 3 */}
                  <CountBox data={Count} title='Laser Leads' hiddenBtn={true} countEntity='Laser' />

            
                  {/* Gauge Container */}
                  
                  <div className="w-[250px] h-[250px] px-5 flex items-center justify-center">
                    <GaugeVisualization data={guageTestData} />
                  </div>
                </div>
              </div>
              <div className="w-full max-w-7xl overflow-x-auto mx-auto">
                <DataTable headers={headers} data={LeadsData} handleViewData={handleViewData} />
              </div>
            </>
            
            )}
    </>
  )
}

export default LeadsAdmin
