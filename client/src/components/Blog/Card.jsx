import React from 'react';
import PrimaryBtn from '../Buttons/PrimaryBtn';

const Card = ({ title, description, category, image, username, designation, uploadDate}) => {
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };
const timeAgo = (dateString) => {
  const now = new Date();
  const pastDate = new Date(dateString);
  const diffTime = now - pastDate; // difference in milliseconds
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); // convert to days
  const diffMonths = Math.floor(diffDays / 30); // approximate month difference

  if (diffMonths > 0) {
    return `${diffMonths} months`;
  } else if (diffDays > 0) {
    return `${diffDays} days`;
  } else {
    return 'Today';
  }
};

const formatUploadDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options); // Default locale formatting
};
  
  return (
    <div className="max-w-sm bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden flex flex-col">
      <img src={image} alt={category} className="w-full h-64 object-cover" />
      <div className="p-4 flex flex-col justify-between flex-grow">

        <div className="text-xs text-gray-400 flex items-center space-x-1 font-ElMessiri">
          <span>{formatUploadDate(uploadDate)}</span>
          <span className="text-gray-400">·</span>
          <span>{timeAgo(uploadDate)}</span>
        </div>
        <h3 className="text-xl font-bold text-[#554075] font-ElMessiri">{title}</h3>
        <p className="text-sm text-gray-600 mt-2"> {truncateText(description, 100)}</p>

        {/* User information and button in a flex container */}
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-lg font-semibold text-gray-700 font-ElMessiri">{username}</p>
            <p className="text-xs text-gray-500">{designation}</p>
          </div>
          <PrimaryBtn
            children = {'Read More'} className = {''}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
