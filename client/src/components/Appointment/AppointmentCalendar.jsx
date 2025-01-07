import React, { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import GrayFlower from '../../assets/SharedAssets/GrayFlower.svg'

const AppointmentCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);

  // Time slots
  const timeSlots = [
    { time: "10am-11am", available: true },
    { time: "11am-12pm", available: true },
    { time: "12pm-1pm", available: true },
    { time: "2pm-3pm", available: true },
    { time: "3pm-4pm", available: true },
    { time: "4pm-5pm", available: true },
    { time: "5pm-6pm", available: true },
    { time: "6pm-7pm", available: true },
    { time: "7pm-8pm", available: true }
  ];

  // Get days in month
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  // Get first day of month (0 = Sunday)
  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const changeMonth = (increment) => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + increment)));
  };

  // Function to check if the selected date is in the past
  const isPastDate = () => {
    const now = new Date();
    return selectedDate?.getFullYear() < now.getFullYear() ||
           (selectedDate?.getFullYear() === now.getFullYear() && selectedDate?.getMonth() < now.getMonth()) ||
           (selectedDate?.getFullYear() === now.getFullYear() && selectedDate?.getMonth() === now.getMonth() && selectedDate?.getDate() < now.getDate());
  };

  // Function to check if the time slot is in the past
  const isPastTimeSlot = (timeSlot) => {
    const now = new Date();
    const timeMap = {
      "10am-11am": 10,
      "11am-12pm": 11,
      "12pm-1pm": 12,
      "2pm-3pm": 14,
      "3pm-4pm": 15,
      "4pm-5pm": 16,
      "5pm-6pm": 17,
      "6pm-7pm": 18,
      "7pm-8pm": 19
    };
    const timeHour = timeMap[timeSlot];
    return selectedDate?.getDate() === now.getDate() && selectedDate?.getMonth() === now.getMonth() && selectedDate?.getFullYear() === now.getFullYear() && timeHour < now.getHours();
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-8" />);
    }

    // Add actual days
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = selectedDate?.getDate() === day && 
                        selectedDate?.getMonth() === currentDate.getMonth() &&
                        selectedDate?.getFullYear() === currentDate.getFullYear();
      
      days.push(
        <button
          key={day}
          onClick={() => {
            setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
            setSelectedTime(null); // Reset the selected time whenever the date is changed
          }}
          className={`h-8 w-8 rounded-full flex items-center justify-center
            ${isSelected ? 'bg-[#8369a9] text-white' : 'hover:bg-purple-100'}
            ${day === new Date().getDate() && 
              currentDate.getMonth() === new Date().getMonth() &&
              currentDate.getFullYear() === new Date().getFullYear()
              ? 'font-bold' : ''}`}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  return (
    <div className="max-w-md relative mx-auto  mt-10 md:p-6">

    <p className='font-bold text-center mb-2 text-[#554075]'>Appointment Date</p>
        <img src={GrayFlower} alt="" className='absolute -top-20 z-0 w-[904px]' />

     
      <div className='flex flex-col w-full items-center z-10 justify-between relative border border-[#9D74DC] p-2 mb-12 rounded bg-[#FDF2FF]'>
         {/* Calendar Header */}
        <div className="flex items-center justify-between mb-4 w-full">
          <button 
            onClick={() => changeMonth(-1)}
            className="p-2 hover:bg-purple-100 rounded-full"
          >
            <ChevronLeft className="w-5 h-5 text-[#554075]" />
          </button>
          <h2 className="text-lg font-semibold text-[#554075]">
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <button 
            onClick={() => changeMonth(1)}
            className="p-2 hover:bg-purple-100 rounded-full"
          >
            <ChevronRight className="w-5 h-5 text-[#554075]" />
          </button>
        </div>

        {/* Calendar Grid */}
        <div className=" w-full">
          <div className="grid grid-cols-7 gap-1 mb-2">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
              <div key={day} className="h-8 flex items-center justify-center font-bold text-sm text-[#554075]">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1 text-[#554075] ">
            {generateCalendarDays()}
          </div>
        </div>
      </div>

      {/* Time Slots */}
      {selectedDate && (
        <div className="grid grid-cols-3 relative z-10 gap-2">
          {timeSlots.map(({ time, available }) => (
            <button
              key={time}
              disabled={isPastDate() || !available || isPastTimeSlot(time)}
              onClick={() => setSelectedTime(time)}
              className={`py-2 px-4 lg:px-1 xl:px-4 rounded-lg text-sm
                ${selectedTime === time ? 'bg-[#e9d5ff] text-white' : ''}
                ${available && !isPastTimeSlot(time) && !isPastDate()
                  ? 'bg-[#beb0e0] hover:bg-purple-200 text-white' 
                  : 'bg-gray-100 border-2 text-gray-400 cursor-not-allowed'}`}
            >
              {time}
            </button>
          ))}
        </div>
      )}

      {/* Instruction */}
      <div className="mt-4 flex gap-10 relative justify-center text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#554075] rounded"></div>
          <span>Booked</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#beb0e0] rounded"></div>
          <span>Available</span>
        </div>
      </div>
      
    </div>
  );
};

export default AppointmentCalendar;
