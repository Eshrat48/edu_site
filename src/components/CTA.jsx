import React from "react";

const AcademyCTASection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-16 rounded-3xl">
      <div className="max-w-6xl w-full mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Join the Academy LMS Today</h2>
        <p className="text-white text-lg mb-8 opacity-90">Start your learning journey or share your expertise with our community.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-50 hover:scale-105 transition">I'm a Student</button>
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:from-pink-600 hover:to-purple-600 hover:scale-105 transition">Become an Instructor</button>
        </div>
      </div>
    </section>
  );
};

export default AcademyCTASection;
