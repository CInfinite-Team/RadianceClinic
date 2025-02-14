import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SERVER_URL from '../../constant.mjs';

function SpecificBlog() {
  const urlParams = new URLSearchParams(window.location.search); // Destructure window.location
  const id = urlParams.get('id');
console.log(id)
  // State definitions
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSection, setSelectedSection] = useState('');

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        // Fix: Add the missing `/` in the API URL
        const response = await axios.get(`${SERVER_URL}/api/user/blogsById`,{id:id});
        setArticle(response.data);
        setSelectedSection(response.data.content[0]?.heading || ''); // Set the first heading as default
        setLoading(false);
      } catch (err) {
        // Improved error handling
        setError(`Failed to fetch blog data: ${err.message}`);
        setLoading(false);
      }
    };

    if (id) {
      fetchBlog(); // Fetch blog if ID exists
    } else {
      setError('No blog ID found in URL'); // Handle case where no ID is present
      setLoading(false);
    }
  }, [id]); // Effect now depends on id

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getContentToShow = () => {
    const selectedContent = article?.content.find(
      (section) => section.heading === selectedSection
    );
    if (selectedContent) {
      return (
        <div>
          <h2 className="text-3xl font-ElMessiri text-[#554075] font-semibold mb-3">
            {selectedContent.heading}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {selectedContent.body}
          </p>
        </div>
      );
    }
  };

  if (loading) return <div>Loading...</div>; // Display loading state
  if (error) return <div>{error}</div>; // Display error message

  return (
    article && (
      <div className="p-24 mx-auto bg-white shadow-lg w-screen flex items-center justify-center rounded-lg overflow-hidden">
        <div className="p-6 w-[90%] ">
          {/* Header Section */}
          <h1 className="font-ElMessiri font-bold text-[#554075] leading-tight" style={{ fontSize: 'clamp(36px,6vw,60px)' }}>
            {article.title}
          </h1>
          <p className="font-medium text-[#B2A6CE] leading-relaxed mb-3" style={{ fontSize: 'clamp(18px,1.5vw,22px)' }}>
            {article.introduction}
          </p>
          <div className="text-sm text-gray-500 mb-5">
            Written by: {article.admin.name} | Published on: {formatDate(article.createdAt)}
          </div>

          {/* Main Image */}
          {article.image && (
            <img
              src={article.image} // Already a base64 string
              alt="Article header"
              className="w-full object-cover rounded-lg"
            />
          )}

          {/* Content Section */}
          <div className="flex gap-2 pt-6">
            {/* Left Navigation */}
            <div className="w-48 flex-shrink-0">
              <div className="flex items-center mb-8 space-x-4">
                {article.admin.profileImage && (
                  <img
                    src={article.admin.profileImage} // Already a base64 string
                    alt="Admin profile"
                    className="w-12 h-12 object-cover rounded-full"
                  />
                )}
                <div>
                  <h3 className="font-medium text-lg">{article.admin.name}</h3>
                  <p className="text-sm text-gray-500">{article.admin.speciality}</p>
                </div>
              </div>

              {/* Sidebar with clickable headings */}
              <div className="space-y-2 sticky top-4 border-l">
                {article.content.map((section, index) => (
                  <div
                    key={index}
                    className={`${
                      selectedSection === section.heading
                        ? 'text-[#554075] font-medium border-l-4 border-[#554075]'
                        : 'text-gray-600'
                    } cursor-pointer hover:text-[#2e2241] w-full hover:bg-purple-100 pl-4`}
                    onClick={() => setSelectedSection(section.heading)}
                  >
                    {section.heading}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1 pl-7 w-full">
              {/* Content dynamically based on the selected heading */}
              {getContentToShow()}
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default SpecificBlog;
