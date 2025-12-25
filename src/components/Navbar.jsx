import React, { useState } from "react";

const Navbar = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-blue-100 shadow-sm">
        <div className="max-w-6xl w-full mx-auto flex items-center h-20 px-6">
          {/* Logo and Brand */}
          <div className="flex items-center gap-0.5 min-w-[180px]">
            <img src="/logo.jpg" alt="EduX Logo" className="h-10 w-10 object-contain" />
            <span className="font-black text-3xl text-blue-700 tracking-tight font-sans animate-pulse transition-all duration-500">EduX</span>
          </div>
          {/* Search Bar */}
          <div className="hidden md:flex flex-1 justify-start ml-8">
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full max-w-[230px] bg-gray-100 border border-gray-200 rounded-lg px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400 shadow"
              aria-label="Search"
            />
          </div>
          {/* Navigation Links */}
          <div className="hidden md:flex gap-8 ml-8">
            <a href="#" className="text-gray-900 font-bold text-xl hover:text-blue-600 transition-colors duration-200" onClick={e => { e.preventDefault(); onNavigate && onNavigate('home'); }}>Home</a>
            <a href="#" className="text-gray-900 font-bold text-xl hover:text-blue-600 transition-colors duration-200" onClick={e => { e.preventDefault(); onNavigate && onNavigate('courses'); }}>Courses</a>
            <a href="#" className="text-gray-900 font-bold text-xl hover:text-blue-600 transition-colors duration-200">Mentors</a>
            <a href="#" className="text-gray-900 font-bold text-xl hover:text-blue-600 transition-colors duration-200">Blog</a>
          </div>
          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3 ml-8">
            <button className="font-bold text-white bg-gradient-to-r from-blue-500 to-blue-700 px-7 py-3 rounded-xl shadow-lg text-xl transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-blue-800 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300">Log In</button>
            <button className="font-bold text-white bg-gradient-to-r from-pink-500 to-purple-600 px-7 py-3 rounded-xl shadow-lg text-xl transition-all duration-300 hover:scale-105 hover:from-pink-600 hover:to-purple-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-pink-300">Sign Up</button>
          </div>
          {/* Hamburger Menu Button */}
          <button
            className="md:hidden ml-auto p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-6 py-4 space-y-4">
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400 shadow"
                aria-label="Search"
              />
              <div className="flex flex-col space-y-2">
                <a href="#" className="text-gray-900 font-bold text-lg hover:text-blue-600 transition-colors duration-200" onClick={e => { e.preventDefault(); onNavigate && onNavigate('home'); setIsOpen(false); }}>Home</a>
                <a href="#" className="text-gray-900 font-bold text-lg hover:text-blue-600 transition-colors duration-200" onClick={e => { e.preventDefault(); onNavigate && onNavigate('courses'); setIsOpen(false); }}>Courses</a>
                <a href="#" className="text-gray-900 font-bold text-lg hover:text-blue-600 transition-colors duration-200" onClick={() => setIsOpen(false)}>Mentors</a>
                <a href="#" className="text-gray-900 font-bold text-lg hover:text-blue-600 transition-colors duration-200" onClick={() => setIsOpen(false)}>Blog</a>
              </div>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <button className="font-bold text-white bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-2 rounded-lg shadow-lg text-lg transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-blue-800 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300">Log In</button>
                <button className="font-bold text-white bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-2 rounded-lg shadow-lg text-lg transition-all duration-300 hover:scale-105 hover:from-pink-600 hover:to-purple-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-pink-300">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </nav>
      <div className="h-16" />
    </>
  );
};

export default Navbar;
