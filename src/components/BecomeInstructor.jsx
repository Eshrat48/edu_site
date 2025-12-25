import React from "react";

const BecomeInstructorSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl w-full mx-auto px-4">
        <div className="bg-blue-500 rounded-3xl flex flex-col md:flex-row items-center p-10 md:p-14 shadow-lg">
          <div className="flex-1 text-white md:pr-10 mb-8 md:mb-0 items-start text-left flex flex-col">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Become an Instructor</h2>
            <p className="mb-8 text-base md:text-lg font-medium opacity-90">Share your knowledge with millions of students around the world. Teach what you love and earn money.</p>
            <div className="flex gap-4">
              <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold px-6 py-3 rounded-lg shadow hover:from-pink-600 hover:to-purple-600 hover:scale-105 transition-transform duration-200">Start Teaching Today</button>
              <button className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg border border-blue-100 shadow hover:bg-blue-100 hover:text-blue-700 hover:scale-105 transition-transform duration-200">Learn More</button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="/instructor.jpg" alt="Instructor Illustration" className="w-[420px] h-[300px] object-contain rounded-2xl shadow-md bg-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeInstructorSection;
