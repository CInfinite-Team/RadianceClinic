import React from 'react';

const DataTable = ({ headers, data, handleViewData }) => {
  return (
    <div className="mt-6">
      <table className="min-w-full table-auto rounded-md">
        <thead>
          <tr className="bg-[#554078] text-white text-xl font-'Inter' ">
            {headers.map((header, index) => (
              <th key={index} className="px-4 whitespace-nowrap py-2">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) && data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.contact}</td>
                <td className="px-4 py-2">{item.status}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleViewData(item)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  >
                    View Data
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
