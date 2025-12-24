import React from "react";

const HeroSection = () => {
  return (
    <section className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-4 py-16 px-6">
      {/* Left Sides Content */}
      <div className="flex-2 flex flex-col items-start text-left">
        <div className="mb-4">
          <span className="inline-block bg-blue-50 text-blue-600 font-semibold text-xs rounded-full px-4 py-1 mb-2">NEW COURSES AVAILABLE</span>
        </div>
        <h1 className="font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 text-left">
          Unlock Your Potential with <br />
          <span className="text-blue-600">Online Learning</span>
        </h1>
        <p className="text-gray-500 text-lg mb-8 max-w-md text-left">
          Discover thousands of courses from top experts to boost your career. Learn at your own pace with lifetime access on mobile and desktop.
        </p>
        <div className="flex gap-4 mb-8 justify-start">
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold px-8 py-3 rounded-lg shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-cyan-600 hover:scale-105">Get Started</button>
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold px-8 py-3 rounded-lg shadow-lg transition-all duration-300 hover:from-pink-600 hover:to-purple-600 hover:scale-105">View Courses</button>
        </div>
        <div className="flex items-center gap-2 justify-start">
          {/* Placeholder avatars */}
          <img src="/avatar1.jpg" alt="Student 1" className="w-8 h-8 rounded-full border-2 border-white shadow" />
          <img src="/avatar2.jpg" alt="Student 2" className="w-8 h-8 rounded-full border-2 border-white shadow -ml-2" />
          <img src="/avatar3.jpg" alt="Student 3" className="w-8 h-8 rounded-full border-2 border-white shadow -ml-2" />
          <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full ml-2">+2k</span>
          <span className="text-gray-500 text-sm ml-2">Trusted by 2,000+ students</span>
        </div>
      </div>
      {/* Banner */}
      <div className="flex-1 flex justify-center items-center">
          <div className="relative bg-transparent">
            <img src="/banner.jpg" alt="Online Learning" className="w-[400px] h-[400px] object-cover rounded-2xl" />
          </div>
      </div>
    </section>
  );
};

export default HeroSection;
