import React from "react";

const StatsSection = () => {
  return (
    <section className="bg-[#eaf1fb] w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-12">
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4">
        <div className="flex-1 flex flex-col items-center text-center">
          <span className="text-4xl md:text-5xl font-extrabold text-blue-600">10k+</span>
          <span className="mt-2 text-gray-700 font-medium">Active Students</span>
        </div>
        <div className="flex-1 flex flex-col items-center text-center">
          <span className="text-4xl md:text-5xl font-extrabold text-blue-600">500+</span>
          <span className="mt-2 text-gray-700 font-medium">Expert Mentors</span>
        </div>
        <div className="flex-1 flex flex-col items-center text-center">
          <span className="text-4xl md:text-5xl font-extrabold text-blue-600">1.2k</span>
          <span className="mt-2 text-gray-700 font-medium">Courses Available</span>
        </div>
        <div className="flex-1 flex flex-col items-center text-center">
          <span className="text-4xl md:text-5xl font-extrabold text-blue-600">4.9</span>
          <span className="mt-2 text-gray-700 font-medium">Average Rating</span>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
