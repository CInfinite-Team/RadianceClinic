import React, { useState } from 'react';
import PrimaryBtn from '../Buttons/PrimaryBtn';
import { X } from 'lucide-react';
import axios from 'axios';
import Cookies from 'js-cookie';
import SERVER_URL from '../../constant.mjs';

function StatusUpdate({ setShowStatusUpdate, ShowStatusUpdate, id, onStatusUpdate }) {
  const [selectedStatus, setSelectedStatus] = useState(null);
const[StatusLoading,setSatusLoading]=useState(false)
  const handleStatusUpdate = async () => {
    setSatusLoading(true);
    const loginTokenCookie = Cookies.get('LoginStatus');
    const token = loginTokenCookie ? JSON.parse(loginTokenCookie).token : null;

    if (!selectedStatus) {
      alert('Please select a status');
      return;
    }

    try {
      const response = await axios.post(
        `${SERVER_URL}/api/admin/updateFormStatus`,
        { id, status: selectedStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Status updated successfully:', response.data);
      setShowStatusUpdate(false);
      if (onStatusUpdate) {
        onStatusUpdate();
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-[#00000013] backdrop-blur-sm transition-opacity duration-300 ${
          ShowStatusUpdate ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <button
          className='absolute right-4 top-4 text-white'
          onClick={() => setShowStatusUpdate(false)}
        >
          <X size={32} />
        </button>

        <div className='flex flex-col items-center py-4 bg-white rounded-lg gap-4 shadow-lg'>
          {[
            { label: 'Submitted', color: 'blue' },
            { label: 'Contacted', color: 'yellow' },
            { label: 'Accepted', color: 'green' },
            { label: 'In Progress', color: 'orange' },
            { label: 'Closed', color: 'purple' },
            { label: 'Cancelled', color: 'red' },
          ].map((status, index) => (
            <button
              key={index}
              onClick={() => setSelectedStatus(status.label)}
              className={`flex p-3 px-10 gap-2 items-center justify-between w-full ${
                selectedStatus === status.label ? 'bg-[#f0deff] font-bold' : ''
              }`}
            >
              <span>{status.label}</span>
              <span className="relative inline-flex h-3 w-3">
                <span
                  className={`absolute inline-flex h-full w-full animate-ping rounded-full bg-${status.color}-400 opacity-75`}
                ></span>
                <span
                  className={`relative inline-flex h-3 w-3 rounded-full bg-${status.color}-500`}
                ></span>
              </span>
            </button>
          ))}

          <PrimaryBtn onClick={handleStatusUpdate}>{ StatusLoading ? 'Updatig...' : 'Update Status'}</PrimaryBtn>
        </div>
      </div>
    </>
  );
}

export default StatusUpdate;