import React from 'react';
import { X } from 'lucide-react';
import PrimaryBtn from '../Buttons/PrimaryBtn';
import axios from 'axios'; // Import axios for making API requests
import SERVER_URL from '../../constant.mjs';
import Cookies from 'js-cookie';

function BlogDeletePopUp({ SetShowPopUp, title, id }) {

const loginTokenCookie = Cookies.get('LoginStatus');
  const token = loginTokenCookie ? JSON.parse(loginTokenCookie).token : null;

  const handleDelete = async () => {
    try {
      
      const response = await axios.delete(`${SERVER_URL}/api/admin/blogsById/`, {
       data: {id},
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });

      // Log the response for debugging
      alert('Blog deleted successfully:');

      // Close the pop-up
      SetShowPopUp(false);

      // Optionally, you can refresh the page or update the UI to reflect the deletion
      window.location.reload(); // Reload the page to reflect changes
    } catch (error) {
      console.error('Error deleting blog:', error);

      // Show an error message to the user (optional)
      alert('Failed to delete the blog. Please try again.');
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-50 z-[9999999999] flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg relative">
          {/* Close button */}
          <button
            onClick={() => SetShowPopUp(false)}
            className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>

          {/* Pop-up content */}
          <p>Are you sure you want to delete this blog titled as ({title})?</p>
          <div className="flex gap-4 mt-4">
            <PrimaryBtn onClick={() => SetShowPopUp(false)}>Cancel</PrimaryBtn>
            <PrimaryBtn className="bg-[#e22d2d]" onClick={handleDelete}>
              Delete
            </PrimaryBtn>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDeletePopUp;