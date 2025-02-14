import React, { useState } from 'react';
import axios from 'axios';
import SERVER_URL  from '../../constant.mjs';
import Cookies from 'js-cookie';
import PrimaryBtn from '../Buttons/PrimaryBtn';

function BlogAdd({ selectedLink }) {
  const [activeTab, setActiveTab] = useState('blogDetails');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    introduction: '',
    category: '',
    contentSections: [{ heading: '', body: '' }],
    adminName: '',
    adminSpecialty: '',
  });
  const [image, setImage] = useState(null);
  const [adminImage, setAdminImage] = useState(null);
  const [adminData, setAdminData] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [previewAdminImage, setPreviewAdminImage] = useState(null);

  const loginTokenCookie = Cookies.get('LoginStatus');
  const token = loginTokenCookie ? JSON.parse(loginTokenCookie).token : null;

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    if (name === 'heading' || name === 'body') {
      const contentSections = [...formData.contentSections];
      contentSections[index][name] = value;
      setFormData({ ...formData, contentSections });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 1024 * 1024) {
      alert("File size should be 1MB or less");
      return;
    }

    if (!file.type.match(/^image\/(jpeg|jpg|png)$/)) {
      alert("Only JPG, JPEG, and PNG files are allowed");
      return;
    }

    if (type === 'blog') {
      setImage(file);
      setPreviewImage(URL.createObjectURL(file));
    } else if (type === 'admin') {
      setAdminImage(file);
      setPreviewAdminImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('introduction', formData.introduction);
      formDataToSend.append('category', formData.category.toLowerCase());
      
      // Convert contentSections to the proper format expected by the server
      const content = formData.contentSections.map(section => ({
        heading: section.heading,
        body: section.body
      }));
      
      // Send content as a proper object, not a stringified array
      formDataToSend.append('content', JSON.stringify(content));
      
      if (image) {
        formDataToSend.append('image', image);
      }

      if (adminImage) {
        formDataToSend.append('adminImage', adminImage);
      }

      // Add admin details if they exist
      if (formData.adminName) {
        formDataToSend.append('adminName', formData.adminName);
      }
      if (formData.adminSpecialty) {
        formDataToSend.append('adminSpecialty', formData.adminSpecialty);
      }

      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      };

      const response = await axios.post(
        `${SERVER_URL}/api/admin/blogs`,
        formDataToSend,
        config
      );

      if (response.status === 201) {
        setAdminData(response.data.blog.admin);
        // Reset form
        setFormData({
          title: '',
          introduction: '',
          category: '',
          contentSections: [{ heading: '', body: '' }],
          adminName: '',
          adminSpecialty: '',
        });
        setImage(null);
        setAdminImage(null);
        setPreviewImage(null);
        setPreviewAdminImage(null);
        alert('Blog created successfully!');
      }
    } catch (error) {
      console.error('Error creating blog:', error);
      const errorMessage = error.response?.data?.message || 'Error creating blog';
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleAddSection = () => {
    setFormData({
      ...formData,
      contentSections: [...formData.contentSections, { heading: '', body: '' }],
    });
  };



  return (
    <>
      {selectedLink === 'blogs' && (
        <div className="flex flex-col items-center min-h-screen bg-gray-50 p-6">
          <div className="w-full max-w-4xl bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h1 className="text-2xl font-semibold text-gray-900">Upload Blog (Admin)</h1>
            </div>

            {/* Warning Message */}
            <div className="mx-6 mt-6 p-4 bg-purple-100 border border-purple-200 rounded-lg">
              <p className="text-purple-800 text-sm">
                <span className="font-semibold">Note:</span> The uploaded images should be of size 1MB or less.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex border-b-2 space-x-6 px-6 mt-6">
              <button
                onClick={() => setActiveTab('blogDetails')}
                className={`py-2 text-sm font-medium ${
                  activeTab === 'blogDetails' ? 'text-black border-b-2 border-black' : 'text-gray-400'
                }`}
              >
                Blog Details
              </button>
              <button
                onClick={() => setActiveTab('adminDetails')}
                className={`py-2 text-sm font-medium ${
                  activeTab === 'adminDetails' ? 'text-black border-b-2 border-black' : 'text-gray-400'
                }`}
              >
                Admin Details
              </button>
              <button
                onClick={() => setActiveTab('preview')}
                className={`py-2 text-sm font-medium ${
                  activeTab === 'preview' ? 'text-black border-b-2 border-black' : 'text-gray-400'
                }`}
              >
                Preview
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Blog Details Tab */}
              {activeTab === 'blogDetails' && (
                <div className="p-6">
                  <div className="flex space-x-6">
                    <div className="w-1/2 border-dashed border-2 border-gray-300 p-6 rounded-lg">
                      <label htmlFor="blogImage" className="block w-full h-full my-a text-center cursor-pointer">
                        <div className="text-gray-500 text-sm flex flex-col w-full h-full items-center justify-center">
                          <svg className="w-12 h-12 mb-3" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>Upload Blog Cover Image</span>
                          <input
                            type="file"
                            id="blogImage"
                            className="hidden"
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, 'blog')}
                          />
                          {image && <p className="mt-2 text-green-500">{image.name}</p>}
                        </div>
                      </label>
                    </div>

                    <div className="w-1/2 space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Blog Title</label>
                        <input
                          type="text"
                          name="title"
                          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg"
                          value={formData.title}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">Introduction</label>
                        <textarea
                          name="introduction"
                          rows={3}
                          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg"
                          value={formData.introduction}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">Category</label>
                        <select
                          name="category"
                          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg"
                          value={formData.category}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select Category</option>
                          <option value="skin">Skin</option>
                          <option value="hair">Hair</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Content Sections */}
                  {formData.contentSections.map((section, index) => (
                    <div key={index} className="mt-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
                      <h3 className="font-medium text-gray-900">Content Section {index + 1}</h3>
                      <div className="mt-4 space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Heading</label>
                          <input
                            type="text"
                            name="heading"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg"
                            value={section.heading}
                            onChange={(e) => handleInputChange(e, index)}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Body</label>
                          <textarea
                            name="body"
                            rows={4}
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg"
                            value={section.body}
                            onChange={(e) => handleInputChange(e, index)}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  ))}

                  <button
                    type="button"
                    className="mt-4 w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                    onClick={handleAddSection}
                  >
                    Add Another Content Section
                  </button>
                </div>
              )}

              {/* Admin Details Tab */}
              {activeTab === 'adminDetails' && (
                <div className="p-6">
                  <div className="flex space-x-6">
                    <div className="w-1/2 border-dashed border-2 border-gray-300 p-6 rounded-lg">
                      <label htmlFor="adminImage" className="block w-full h-full text-center cursor-pointer">
                        <div className="text-gray-500 text-sm flex flex-col items-center justify-center">
                          <svg className="w-12 h-12 mb-3" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>Upload Admin Photo</span>
                          <input
                            type="file"
                            id="adminImage"
                            className="hidden"
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, 'admin')}
                          />
                          {adminImage && <p className="mt-2 text-green-500">{adminImage.name}</p>}
                        </div>
                      </label>
                    </div>

                    <div className="w-1/2 space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Admin Name</label>
                        <input
                          type="text"
                          name="adminName"
                          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg"
                          value={formData.adminName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">Specialty</label>
                        <input
                          type="text"
                          name="adminSpecialty"
                          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg"
                          value={formData.adminSpecialty}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Preview Tab */}
              {activeTab === 'preview' && (
                <div className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold">{formData.title}</h2>
{
                     previewImage  && (
    <div className="mt-4">
      <img
        src={previewImage}
        alt="Blog preview"
        className="max-w-full h-auto rounded-lg"
        style={{ maxHeight: '200px' }}
      />
    </div>
  )
}
                      <p className="mt-2 text-gray-600">{formData.introduction}</p>
                    </div>

                    {formData.contentSections.map((section, index) => (
                      <div key={index} className="space-y-2">
                        <h3 className="text-lg font-semibold">{section.heading}</h3>
                        <p className="text-gray-700">{section.body}</p>
                      </div>
                    ))}

                    <div className="pt-6 border-t">
                      <h3 className="text-lg font-semibold">Author Information</h3>
                      <div className="mt-4 flex items-center space-x-4">
                        {adminImage && (
                          <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
                            <img
                              src={URL.createObjectURL(adminImage)}
                              alt="Admin Preview"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <div>
                          <p className="font-medium">{formData.adminName}</p>
                          <p className="text-gray-600">{formData.adminSpecialty}</p>
                        </div></div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Submit Button - Always visible at bottom */}
                <div className="p-6 border-t border-gray-200">
                  <PrimaryBtn
                    type="submit"
                    disabled={loading}
                    className="w-full !py-2 justify-center "
                  >
                    {loading ? 'Submitting....' : 'Submit'}
                  </PrimaryBtn>
                </div>
              </form>

              {/* Admin Data Section - Shows after successful submission */}
              {adminData && (
                <div className="p-6 border-t border-gray-200">
                  <h2 className="text-xl font-bold mb-4">Blog Posted By</h2>
                  <div className="flex items-center space-x-4">
                  {
                      previewAdminImage && (
    <div className="w-16 h-16 rounded-full overflow-hidden">
      <img
        src={previewAdminImage}
        alt="Admin preview"
        className="w-full h-full object-cover"
      />
    </div>
  )
}
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Name: {adminData.name}</p>
                      <p className="text-sm text-gray-600">Specialty: {adminData.speciality}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        
      )}
    </>
  );
}

export default BlogAdd;