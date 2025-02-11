import React from 'react';

const DataTable = ({ headers, data, handleViewData }) => {
  return (
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
        <tbody >
          {Array.isArray(data) && data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index} className="border-b-8 border-t-8 border-white">
                <td className="px-4 py-2 bg-[#F0DFFF] text-center">{index + 1}</td>
                <td className="px-4 py-2 bg-[#F0DFFF]  text-center">{item.name ? item.name : 'N/A'}</td>
                <td className="px-4 py-2 bg-[#F0DFFF]  text-center">{item.category ? item.category : 'N/A'}</td>
                <td className="px-4 py-2 bg-[#F0DFFF]  text-center">{item.phone ? item.phone : 'N/A'}</td>
                <td className="px-4 py-2 bg-[#F0DFFF]  text-center">
                  <span className="relative inline-flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                  </span>
                </td>
                <td className="px-4 py-2 bg-[#F0DFFF] text-center">
                  <button
                    onClick={() => handleViewData(item)}
                    className="bg-[#725B98] whitespace-nowrap text-white px-4 py-2 rounded-md"
                  >
                    See Details
                  </button>
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
  );
};

export default DataTable;
