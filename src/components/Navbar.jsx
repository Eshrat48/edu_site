import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-blue-100 shadow-sm">
        <div className="max-w-6xl w-full mx-auto flex items-center h-20 px-6">
          {/* Logo and Brand */}
            <div className="flex items-center min-w-[180px]">
              <img src="/logo.jpg" alt="EduSite Logo" className="h-15 w-15 object-contain" />
              <span className="font-black text-3xl text-blue-700 tracking-tight font-sans animate-pulse transition-all duration-500">EduSite</span>
          </div>
          {/* Search Bar */}
            <div className="flex-1 flex justify-start ml-8">
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full max-w-[230px] bg-gray-100 border border-gray-200 rounded-lg px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400 shadow"
              aria-label="Search"
            />
          </div>
          {/* Navigation Links */}
          <div className="hidden md:flex gap-8 ml-8">
            <a href="#" className="text-gray-900 font-bold text-xl hover:text-blue-600 transition-colors duration-200">Home</a>
            <a href="#" className="text-gray-900 font-bold text-xl hover:text-blue-600 transition-colors duration-200">Courses</a>
            <a href="#" className="text-gray-900 font-bold text-xl hover:text-blue-600 transition-colors duration-200">Mentors</a>
            <a href="#" className="text-gray-900 font-bold text-xl hover:text-blue-600 transition-colors duration-200">Blog</a>
          </div>
          {/* Auth Buttons */}
          <div className="flex items-center gap-3 ml-8">
            <button className="font-bold text-white bg-gradient-to-r from-blue-500 to-blue-700 px-7 py-3 rounded-xl shadow-lg text-xl transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-blue-800 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300">Log In</button>
            <button className="font-bold text-white bg-gradient-to-r from-pink-500 to-purple-600 px-7 py-3 rounded-xl shadow-lg text-xl transition-all duration-300 hover:scale-105 hover:from-pink-600 hover:to-purple-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-pink-300">Sign Up</button>
          </div>
        </div>
      </nav>
      <div className="h-16" /> 
    </>
  );
};

export default Navbar;
