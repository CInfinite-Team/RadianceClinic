import React from 'react';
import PrimaryBtn from '../Buttons/PrimaryBtn';

const Card = ({id, title, description, category, image, username, designation, uploadDate,UserPhoto}) => {



  const truncateText = (text, maxLength) => {
    console.log(UserPhoto)
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
    <div className="w-full bg-white border relative border-gray-300 rounded-lg shadow-lg overflow-hidden flex flex-col">
      <span className='px-4 rounded-xl bg-[#0000006c] backdrop-blur-md top-2 left-2 font-ElMessiri absolute text-white w-fit'>{category}</span>
      <img loading='lazy' width="auto" height="auto" src={`${image}`} alt={title} className="w-full h-64 object-fit" />
      <div className="p-4 flex flex-col justify-between flex-grow">

        <div className="text-xs text-gray-400 flex items-center space-x-1 font-ElMessiri">
          <span>{formatUploadDate(uploadDate)}</span>
          <span className="text-gray-400">·</span>
          <span>{timeAgo(uploadDate)}</span>
        </div>
        <h3 className="text-xl 2xl:text-2xl font-bold text-[#554075] font-ElMessiri">{title}</h3>
        <p className="text-sm text-gray-600 2xl:text-xl mt-2"> {truncateText(description, 100)}</p>

        {/* User information and button in a flex container */}
        <div className="mt-4 flex flex-wrap  md:items-center justify-between gap-6">
          <div className='flex items-center  gap-4'>
          <img loading='lazy' width="auto" height="auto" src={UserPhoto} alt="" className=' w-16 h-16 2xl:w-20 2xl:h-20 rounded-full object-cover' />
          <div>
            <p className="text-lg font-semibold text-gray-700 2xl:text-3xl font-ElMessiri">{username}</p>
            <p className="text-xs text-gray-500 2xl:text-xl ">{designation}</p>
          </div>
          </div>
          <PrimaryBtn
          title='Read More'
            className = 'w-full !p-0 !py-0 justify-center md:w-fit mt-4 md:mt-0'
          ><a className='p-4 py-3 2xl:font-medium ' href={`/BlogSpecific?id=${id}`}>Read More</a></PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default Card;
