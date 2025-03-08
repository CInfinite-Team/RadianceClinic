import React from 'react'

function Terms() {
  return (
   <>
    return (
    <div className="bg-gradient-to-r from-purple-200 via-purple-300 to-purple-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md py-4">
        <nav className="container mx-auto flex justify-between items-center px-4">
          <img
            src="https://your-logo-url.com/logo.png"
            alt="Logo"
            className="h-12"
          />
          <ul className="flex space-x-8">
            <li>
              <a href="#" className="text-gray-700 hover:text-purple-700">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-purple-700">
                Book Appointment
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-purple-700">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-purple-700">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-purple-700">
                Clinic
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-purple-700">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto flex items-center justify-between mt-16 px-4">
        {/* Left Section: Text and Buttons */}
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-serif text-purple-900 leading-tight mb-6">
            Beauty redefined,
            <br />
            care perfected.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Our signature treatments are designed to enhance natural beauty. We
            use advanced techniques to refresh, nourish, and bring out your
            skin's radiance, giving you a flawless glow.
          </p>
          <div className="flex space-x-4">
            <button className="bg-purple-700 text-white px-6 py-3 rounded-md shadow-md hover:bg-purple-600 transition">
              Book Appointment
            </button>
            <button className="border-2 border-purple-700 text-purple-700 px-6 py-3 rounded-md hover:bg-purple-100 transition">
              Explore Skin Treatments
            </button>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="hidden md:block w-1/2">
          <img
            src="https://your-image-url.com/beauty-model.jpg"
            alt="Model"
            className="rounded-lg shadow-lg"
          />
        </div>
      </main>
    </div>
  );
   </>
  )
}

export default Terms
