import React, { memo, useState } from 'react';
import { createPortal } from 'react-dom'; // Import createPortal directly
import PrimaryBtn from '../Buttons/PrimaryBtn';
import BlogDeletePopUp from './BlogDeletePopUp';
const DeleteCard = ({
  id,
  title,
  description,
  category,
  image,
  username,
  designation,
  uploadDate,
  UserPhoto,
}) => {
  const [ShowDetails, setShowDetails] = useState(false);
  const [ShowPopUp, SetShowPopUp] = useState(false);

  const truncateText = (text, maxLength) => {
    console.log(UserPhoto);
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
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="max-w-md bg-white border relative border-gray-300 rounded-lg shadow-lg overflow-hidden flex flex-col">
      <span className="px-4 rounded-xl bg-[#0000006c] backdrop-blur-md top-2 left-2 font-ElMessiri absolute text-white w-fit">
        {category}
      </span>
      <img src={`${image}`} alt={title} className="w-full h-64 object-fit" />
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div className="text-xs text-gray-400 flex items-center space-x-1 font-ElMessiri">
          <span>{formatUploadDate(uploadDate)}</span>
          <span className="text-gray-400">·</span>
          <span>{timeAgo(uploadDate)}</span>
        </div>
        <h3 className="text-xl font-bold text-[#554075] font-ElMessiri">{title}</h3>
        <p className="text-sm text-gray-600 mt-2"> {truncateText(description, 100)}</p>

        {/* User information and button in a flex container */}
        <div className="mt-4 flex flex-col justify-between">
          <div className="flex items-center gap-4">
            <img src={UserPhoto} alt="" className="w-16 h-16 rounded-full object-cover" />
            <div>
              <p className="text-lg font-semibold text-gray-700 font-ElMessiri">{username}</p>
              <p className="text-xs text-gray-500">{designation}</p>
            </div>
          </div>
          <PrimaryBtn className="w-full !p-0 !py-0 justify-center my-4">
            <a href={`/BlogSpecific?id=${id}`} target='_blank' className="p-4 py-3 w-full h-full">
              View Blog
            </a>
          </PrimaryBtn>
          <PrimaryBtn className="w-full !p-0 bg-[#e22d2d] border-[#e22d2d] hover:text-[#e22d2d] !py-0 justify-center">
            <a className="p-4 py-3 w-full h-full" onClick={() => SetShowPopUp(true)}>
              Delete Blog
            </a>
          </PrimaryBtn>
        </div>
      </div>

      {/* Pop-up using createPortal */}
      {ShowPopUp &&
        createPortal(
          <BlogDeletePopUp SetShowPopUp={SetShowPopUp} id={id} title={title} />,
          document.body // Render the pop-up outside the current DOM hierarchy
        )}
    </div>
  );
};

export default memo(DeleteCard);