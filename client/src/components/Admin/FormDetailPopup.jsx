import React from 'react'
import {X} from 'lucide-react'
import PopupOverlay1 from '../../assets/Admin/PopupOverlay1.svg'
import PopupOverlay2 from '../../assets/Admin/PopupOverlay2.svg'
function FormDetailPopup({data,onClose,selectedLink}) {
  
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }; 

  const formatTime = (timeString) => {
    const [hour, minute] = timeString.split(':');
    const hourNum = parseInt(hour, 10);
    const ampm = hourNum >= 12 ? 'PM' : 'AM';
    const formattedHour = hourNum % 12 || 12; // convert 0 to 12 for 12 AM
    return `${formattedHour}:${minute} ${ampm}`;
  };
  
  return (
    <>
    <div
        className={`fixed inset-0 z-50 p-4 px-2 md:px-20 lg:px-10 overflow-y-auto xl:px-60 flex lg:items-center  justify-center bg-[#00000013] backdrop-blur-sm transition-opacity duration-300 
        
        }`}
      >

        <div className='flex flex-col lg:flex-row w-full relative bg-white '>
        <button onClick={onClose} className='absolute z-[99999] right-2 top-2 '>
<X size={34} strokeWidth={1.5} />
</button>
            <div className='flex flex-col overflow-x-auto relative w-full min-h-max  lg:max-w-[40%] bg-[#F0DFFF] p-5 '>
            <h1 className='font-ElMessiri  z-10 text-[#554075] font-bold leading-[87px] animate-fadeIn text-[80px] text-center' >
            {selectedLink === 'forms' ? <> {data.firstName}<br /> {data.middleName}<br /> {data.lastName} </>: data.name}
            </h1>
            <p className='font-semibold  z-10 text-[#72629A] text-center text-3xl leading-tight'>{data.occupation ? data.occupation :''}</p>
            <p className=' text-[#72629A]  z-10 text-center leading-tight mt-1'>{data.email ? data.email : ''}</p>

            <div className='grid grid-cols-2 z-10 pl-3  overflow-clip gap-6 mt-10  text-[#50535C]'>
                <p> {selectedLink ==='leads' ? 'Status: '+data.status  : selectedLink==='appointments' ? 'Status: '+data.status : selectedLink ==='forms' ? 'DOB: '+formatDate(data.DOB) : 'DOB: N/A'}</p>
                <p className='whitespace-nowrap'>{selectedLink ==='leads' ?  'MOB: '+data.phone : selectedLink==='appointments' ? 'MOB: '+data.phone : selectedLink ==='forms' ? data.gender : 'N/A'}</p>
                <p className={`${selectedLink ==='leads' ? 'hidden' :''}`}>{  selectedLink==='appointments' ? 'Mode: '+data.modeOfConsultation : selectedLink ==='forms' ? 'City: '+data.city :'City: N/A'}</p>
                <p className={`${selectedLink ==='leads' ? 'hidden' :''}`}>{selectedLink==='appointments' ? 'Time: '+data.appointmentTime : selectedLink ==='forms' ? data.maritalStatus : 'N/A'}</p>
                <p className={`${selectedLink ==='leads' ? 'col-span-full' : ''}`}>{selectedLink ==='leads' ? 'Subject: '+data.subject : selectedLink==='appointments' ? 'Category: '+data.category : selectedLink ==='forms' ? 'MOB: '+data.mobileNo : 'MOB:N/A'}</p>
                {selectedLink==='forms' && <>
                <p className={`${data.speciality ? '' : 'hidden'}`}>{data.speciality}</p>
                <p className={`${data.category ? '' : 'hidden'}`}>{'Category: '+data.category}</p>
                <p className={`${data.status ? '' : 'hidden'}`}>{'Status: '+data.status}</p>
                <p className={`${selectedLink === 'forms' && data.category === 'Hair'  ? '' : selectedLink !== 'forms' ?'' :'hidden' } col-span-full`}>{'Submission Date: '+formatDate(data.createdAt)}</p>   
                </>
}
            </div>

            <img src={PopupOverlay1} className='absolute object-cover mix-blend-multiply z-0 left-0 bottom-0' alt="" />

            </div>

            <div className='flex flex-col relative text-[#463660] w-full gap-5 pl-3 p-8 '
            >
            <img src={PopupOverlay2} className='absolute object-cover  w-full h-full z-0 right-0 bottom-0'  alt="" />

<div className='flex flex-col gap-4 z-10'>
                <p>{selectedLink ==='leads' ? 'Message: '+data.message : selectedLink ==='appointments' ? 'Message: '+data.message : selectedLink ==='forms' ? 'Adress: '+data.address : 'Adress :N/A'}</p>
                <p>{selectedLink === 'leads' ? 'Submission Date: '+formatDate(data.createdAt) : selectedLink ==='appointments' ? 'Appointment Date: '+formatDate(data.appointmentDate) : selectedLink ==='forms' ? 'Spouse Name: '+data.spouseName : 'Spouse Name : N/A' }</p>
                <p className={`${selectedLink === 'forms' && data.category === 'Hair'  ? '' : selectedLink !== 'forms' ?'' :'hidden' }`}>{selectedLink ==='leads' ? 'Updated on: '+formatDate(data.updatedAt) : selectedLink ==='appointments' ? 'Appointment Time: '+formatTime(data.appointmentTime) : selectedLink === 'forms' ? 'Suffuring From Hair Loss Since: '+data.hairLossDurationMonths : 'Suffuring From Hair Loss Since : N/A'}</p>
                <p className={`${selectedLink === 'forms' && data.category === 'Hair'  ? '' : selectedLink !== 'forms' ?'' :'hidden' }`}>{selectedLink ==='leads' ? '' : selectedLink ==='appointments' ? 'Submission Date: '+formatDate(data.createdAt) : selectedLink ==='forms' ? 'Hair Loss Per Day: '+data.dailyHairLoss : 'Hair Loss Per Day : N/A'}</p>
                <p className={`${selectedLink === 'forms' && data.category === 'Hair'  ? '' : selectedLink !== 'forms' ?'' :'hidden' }`}>{selectedLink ==='leads' ? '' : selectedLink ==='appointments' ? 'Updated on: '+formatDate(data.updatedAt) : selectedLink ==='forms' ?  data.skinAllergy ? 'Skin Allergy: Yes':'Skin Allergy: No' : 'Skin Allergy : Yes'}</p>
              { selectedLink ==='forms' && 
                <>
                <p className={`${data.currentTreatment ? '':'hidden'}`}>{data.currentTreatment ? 'Current Treatment: '+data.currentTreatment : ''}</p>
                <p className={`${data.skinDisorders ? '':'hidden'}`}>{'Skin Disorder: '+data.skinDisorders }</p>
                <p className={`${data.familyHistory ? '':'hidden'}`}>{'Family History: '+data.familyHistory }</p>
                <p className={`${data.suspectedCause ? '':'hidden' }`}>{ 'Cause According to Patient: '+data.suspectedCause }</p>
                <p>{data.doctor ? 'Doctor: '+data.doctor : 'Doctor: N/A'}</p>   
                  
                 {selectedLink === 'forms' && data.category === 'Skin'  &&  
                 <>
                 <div className={`flex flex-wrap gap-3  `}>
                  <p>Medical Conditions: Asthma: {data.medicalConditions.asthma ? 'Yes' : 'No'}</p>,
                <p>Diabetes: {data.medicalConditions.diabetes ? 'Yes' : 'No'}</p>,
                <p>Heart Disease: {data.medicalConditions.heartDisease ? 'Yes' : 'No'}</p>,
                <p>High Blood Pressure: {data.medicalConditions.highBloodPressure ? 'Yes' : 'No'}</p>,
                <p>Thyroid Disease: {data.medicalConditions.thyroidDisease ? 'Yes' : 'No'}</p>,
                <p>Other: {data.medicalConditions.other || 'None'}</p>
                  </div>
                   <p>{data.problemDurationMonths ? 'Problem duration in months: '+data.problemDurationMonths : 'Doctor: N/A'}</p>   
                   <p>{data.skinProblem ? "Patient's Skin Problem: "+data.skinProblem : 'Doctor: N/A'}</p>   
                   <p>{data.isPregnant ? 'Is Patient Pregnant: Yes'  : 'Is Patient Pregnant: No'}</p> 
                   <p >{'Submission Date: '+formatDate(data.createdAt)}</p>     
                   </>
                  }

                 
                <p>{data.sourceOfReferral ? 'Source of Referral: '+data.sourceOfReferral : 'Got to Know Us From  : Website'}</p>
                <p className={`${data.hairLossType ? '':'hidden'}`}>{'Hair Loss Type: '+data.hairLossType }</p>   
                <p>{data.updatedAt ? 'Updated on: '+formatDate(data.updatedAt) : 'Updated on: N/A'}</p>
                   
                </>           
                }
                </div>
            </div>

        </div>
        
      </div>
    </>
  )
}

export default FormDetailPopup
