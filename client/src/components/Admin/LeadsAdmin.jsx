import React from 'react'
import SecondaryBtn from '../Buttons/SecondaryBtn'
import GaugeVisualization from './GaugeVisualizer'
import DataTable from './DataTable'
import Topbar from './Topbar'
import CountBox from './CountBox'

function LeadsAdmin({selectedLink,headers,data,handleViewData,onRefresh}) {
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
                <div className="w-full  flex flex-wrap flex-row  items-center justify-center lg:justify-between gap-6  mt-6 py-6">
                  
                  {/* <CountBox handleLinkClick={handleLinkClick} data={data} title='Hair Leads' hiddenBtn={true} countEntity='' /> */}
                  {/* Box 1 */}
                  <CountBox data={Count} title='Hair Leads' hiddenBtn={true} countEntity='Hair' />
                
                  
                  {/* Box 2 */}
                  <CountBox data={Count} title='Skin Leads' hiddenBtn={true} countEntity='Skin' />

                  
            
                  {/* Box 3 */}
                  <CountBox data={Count} title='Laser Leads' hiddenBtn={true} countEntity='Laser' />

            
                  {/* Gauge Container */}
                  
                  <div className=" h-[250px] w-[250px] lg:w-[180px] lg:h-[200px] xl:w-[250px] xl:h-[250px] px-5 flex items-center justify-center">
                    <GaugeVisualization data={guageTestData} />
                  </div>
                </div>
              </div>
              <div className="w-full max-w-7xl 2xl:max-w-full overflow-x-auto mx-auto">
                <DataTable headers={headers} route='updateLeadStatus' onStatusUpdate={onRefresh} data={LeadsData} handleViewData={handleViewData} />
              </div>
            </>
            
            )}
    </>
  )
}

export default LeadsAdmin
