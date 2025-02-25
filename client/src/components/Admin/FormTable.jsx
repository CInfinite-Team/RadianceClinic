import { useState } from 'react';
import PrimaryBtn from '../Buttons/PrimaryBtn';
import StatusUpdate from './StatusUpdate';

function FormTable({ data, handleViewData, onStatusUpdate }) {
  const headers = ['Sr. No', 'Name', 'Category', 'Contact', 'Lead for', 'Status', 'Actions'];
  const [activeId, setActiveId] = useState(null);

  return (
    <>
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full table-auto border-collapse rounded-md">
          <thead>
            <tr className="bg-[#554078] text-white text-xl font-inter">
              {headers.map((header, index) => (
                <th key={index} className="px-4 py-2 text-center whitespace-nowrap">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data) && data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index} className="border-b-8 border-t-8 border-white">
                  <td className="px-4 py-2 bg-[#F0DFFF] text-center">{index + 1}</td>
                  <td className="px-4 py-2 bg-[#F0DFFF] text-center">
                    {item.firstName && item.middleName && item.lastName
                      ? item.firstName + ' ' + item.middleName + ' ' + item.lastName
                      : 'N/A'}
                  </td>
                  <td className="px-4 py-2 bg-[#F0DFFF] text-center">
                    {item.category ? item.category : 'N/A'}
                  </td>
                  <td className="px-4 py-2 bg-[#F0DFFF] text-center">
                    {item.mobileNo ? item.mobileNo : 'N/A'}
                  </td>
                  <td className="px-4 py-2 bg-[#F0DFFF] text-center">{item.doctor ? item.doctor : 'N/A'}</td>
                  <td className="px-4 py-2 bg-[#F0DFFF] items-center gap-2 text-center">
                    <div
                      onClick={() => setActiveId(item._id)}
                      className="inline-flex items-center cursor-pointer gap-2"
                    >
                      <span className="whitespace-nowrap">{item.status || 'N/A'}</span>
                      <span className="relative inline-flex h-3 w-3">
                        <span
                          className={`absolute inline-flex h-full w-full animate-ping rounded-full ${
                            item.status === 'Submitted'
                              ? 'bg-blue-400'
                              : item.status === 'Contacted'
                              ? 'bg-yellow-400'
                              : item.status === 'Accepted'
                              ? 'bg-green-400'
                              : item.status === 'In Progress'
                              ? 'bg-orange-400'
                              : item.status === 'Closed'
                              ? 'bg-purple-400'
                              : item.status === 'Cancelled'
                              ? 'bg-red-400'
                              : 'bg-gray-400' 
                          } opacity-75`}
                        ></span>
                        <span
                          className={`relative inline-flex h-3 w-3 rounded-full ${
                            item.status === 'Submitted'
                              ? 'bg-blue-500'
                              : item.status === 'Contacted'
                              ? 'bg-yellow-500'
                              : item.status === 'Accepted'
                              ? 'bg-green-500'
                              : item.status === 'In Progress'
                              ? 'bg-orange-500'
                              : item.status === 'Closed'
                              ? 'bg-purple-500'
                              : item.status === 'Cancelled'
                              ? 'bg-red-500'
                              : 'bg-gray-500' 
                          }`}
                        ></span>
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-2 bg-[#F0DFFF] text-center">
                    <PrimaryBtn
                    title='See Details'
                      onClick={() => handleViewData(item)}
                      className="whitespace-nowrap !py-2"
                    >
                      See Details
                    </PrimaryBtn>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={headers.length} className="px-4 py-2 text-center">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {activeId && (
        <StatusUpdate
          setShowStatusUpdate={() => setActiveId(null)}
          ShowStatusUpdate={!!activeId}
          id={activeId}
          route='updateFormStatus'
          onStatusUpdate={onStatusUpdate}
        />
      )}
    </>
  );
}

export default FormTable;