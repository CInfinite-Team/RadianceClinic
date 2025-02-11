import React from 'react'
import PrimaryBtn from '../Buttons/PrimaryBtn';
import Topbar from './Topbar';
import CountBox from './CountBox';
function DashComponent({selectedLink,handleLinkClick,data,Paneldata}) {
  return (
    <>
       {selectedLink === "dashboard" && ( <>
            <Topbar title={'Welcome, Dr. Barde'}/>
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
                  <div className='grid grid-cols-1 sm:grid-cols-2 bg-[#F0DFFF] items-start flex-1 w-full p-6 gap-4'>
                    
                  <p className="leading-tight text-3xl col-span-full font-bold text-[#463660] ">Latest Leads</p>

                    <div className='flex flex-col col-span-full'>
                    <p className="font-semibold text-[#463660]">Name</p>
                      <p className="text-[#8C74B1] text-2xl font-bold">{Paneldata.length > 0 
                                                                      ? Paneldata[0].LatestLead["username"]
                                                                      .split(' ') 
                                                                      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) 
                                                                      .join(' ') 
                                                                      : "..."}</p>
                    </div>

                    <div className="flex flex-col">
                      <p className="font-semibold text-[#463660]">Treatments</p>
                      <p className="text-[#8C74B1] text-2xl font-bold">{Paneldata.length > 0 ? Paneldata[0].LatestLead["category"].charAt(0).toUpperCase() + Paneldata[0].LatestLead["category"].slice(1).toLowerCase(): "..."}</p>
                    </div>


                    <div className="flex flex-col">
                            <p className="font-semibold text-[#463660]">Generated On</p>
                            <p className="text-[#8C74B1] text-2xl font-bold">{Paneldata.length > 0 ? new Date(Paneldata[0].LatestLead["uploadDate"]).toLocaleDateString("en-GB"): "..."}</p>
                          </div>


                    <div className="flex flex-col">
                      <p className="font-semibold text-[#463660]">Lead Stage</p>
                      <p className="text-[#8C74B1] text-2xl font-bold">{Paneldata.length > 0 ? Paneldata[0].LatestLead["status"].charAt(0).toUpperCase() + Paneldata[0].LatestLead["status"].slice(1).toLowerCase(): "..."}</p>
                    </div>     

                   

                          <div className="flex flex-col">
                            <p className="font-semibold text-[#463660]">Lead For</p>
                            <p className="text-[#8C74B1] text-2xl font-bold">{Paneldata.length > 0 
                                                                      ? Paneldata[0].LatestLead["leadFor"]
                                                                      .split(' ') 
                                                                      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) 
                                                                      .join(' ') 
                                                                      : "..."}</p>
                          </div>

                          <div className="mt-auto col-span-full">
                      <PrimaryBtn  className="text-md  w-full px-6 justify-center" >See All details</PrimaryBtn>
                    </div>

                  </div>

                  {/* Box 2 */}
                  <div className='grid grid-cols-1 sm:grid-cols-2 bg-[#F0DFFF] items-start flex-1 w-full p-6 gap-4'>
                    
                  <p className="leading-tight text-3xl col-span-full font-bold text-[#463660] ">Upcoming Appointments</p>

                    <div className='flex flex-col col-span-full'>
                    
                      <p className="font-semibold text-[#463660]">Name</p>
                      <p className="text-[#8C74B1] text-2xl font-bold">{Paneldata.length > 0 
                                                                      ? Paneldata[0].AppointmentData["username"]
                                                                      .split(' ') 
                                                                      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) 
                                                                      .join(' ') 
                                                                      : "..."}</p>
                   
                    </div>

                    <div className="flex flex-col">
                            <p className="font-semibold text-[#463660]">Treatments</p>
                            <p className="text-[#8C74B1] text-2xl font-bold">{Paneldata.length > 0 ? Paneldata[0].AppointmentData["category"].charAt(0).toUpperCase() + Paneldata[0].AppointmentData["category"].slice(1).toLowerCase(): "..."}</p>
                          </div>


                          <div className="flex flex-col">
                            <p className="font-semibold text-[#463660]">Treatment Stage</p>
                            <p className="text-[#8C74B1] text-2xl font-bold">{Paneldata.length > 0 ? Paneldata[0].AppointmentData["status"].charAt(0).toUpperCase() + Paneldata[0].AppointmentData["status"].slice(1).toLowerCase(): "..."}</p>
                          </div>

                          <div className="flex flex-col">
                            <p className="font-semibold text-[#463660]">Next Appointment</p>
                            <p className="text-[#8C74B1] text-2xl font-bold">{Paneldata.length > 0 ? new Date(Paneldata[0].AppointmentData["nextDate"]).toLocaleDateString("en-GB"): "..."}</p>
                          </div>

                   

                          
                          <div className="flex flex-col">
                            <p className="font-semibold text-[#463660]">Appointment on</p>
                            <p className="text-[#8C74B1] text-2xl font-bold">{Paneldata.length > 0 ? new Date(Paneldata[0].AppointmentData["onDate"]).toLocaleDateString("en-GB"): "..."}</p>
                          </div>

                          <div className="mt-auto col-span-full">
                          <PrimaryBtn  className="text-md  w-full px-6 justify-center" >See All details</PrimaryBtn>
                          </div>

                  </div>
                  

                </div>
              </div>
              </>
            )}
    </>
  )
}

export default DashComponent
