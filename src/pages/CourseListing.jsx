import React from "react";

const courses = [
  {
    image: "/course-design.jpg",
    title: "Mastering UI/UX Design with Figma",
    instructor: "Sarah Jenkins",
    duration: "12h 30m",
    students: "2.1k",
    price: "$49.99",
    category: "Design"
  },
  {
    image: "/course-dev.jpg",
    title: "Complete Python Bootcamp for Zero to Hero",
    instructor: "David Chen",
    duration: "24h 15m",
    students: "1.7k",
    price: "$69.99",
    category: "Development"
  },
  {
    image: "/course-marketing.jpg",
    title: "Digital Marketing Strategy 2024 Edition",
    instructor: "Emily Rose",
    duration: "8h 45m",
    students: "1.1k",
    price: "$39.99",
    category: "Marketing"
  },
];

const CourseListingPage = ({ onViewDetails }) => {
  return (
    <main className="bg-[#f9f6f2] w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] min-h-screen py-16">
      <div className="max-w-6xl w-full mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-64 bg-white rounded-2xl shadow-md p-6 mb-8 md:mb-0">
          <h3 className="font-bold text-lg mb-4">Categories</h3>
          <ul className="space-y-2">
            <li><button className="text-left w-full bg-white text-blue-700 font-semibold rounded-lg py-2 px-2 border border-blue-100 hover:bg-blue-50 transition">Design</button></li>
            <li><button className="text-left w-full bg-white text-blue-700 font-semibold rounded-lg py-2 px-2 border border-blue-100 hover:bg-blue-50 transition">Development</button></li>
            <li><button className="text-left w-full bg-white text-blue-700 font-semibold rounded-lg py-2 px-2 border border-blue-100 hover:bg-blue-50 transition">Marketing</button></li>
            <li><button className="text-left w-full bg-white text-blue-700 font-semibold rounded-lg py-2 px-2 border border-blue-100 hover:bg-blue-50 transition">Business</button></li>
            <li><button className="text-left w-full bg-white text-blue-700 font-semibold rounded-lg py-2 px-2 border border-blue-100 hover:bg-blue-50 transition">Lifestyle</button></li>
          </ul>
        </aside>
        {/* Course Grid */}
        <section className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {courses.map((course, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col">
                <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <span className="bg-blue-100 text-blue-600 text-xs font-bold px-3 py-1 rounded mb-2 self-start">{course.category}</span>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{course.title}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </span>
                    <span className="text-gray-700 text-sm font-medium">{course.instructor}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <span>{course.duration}</span>
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center justify-between border-t pt-4 mt-auto">
                    <span className="text-blue-600 font-bold text-lg">{course.price}</span>
                    <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-sm px-4 py-2 rounded-lg shadow hover:from-blue-600 hover:to-cyan-600 hover:scale-105 transition" onClick={onViewDetails}>View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-4">
            <button className="px-4 py-2 rounded bg-blue-500 text-white font-bold border border-blue-500 shadow">1</button>
            <button className="px-4 py-2 rounded bg-white text-blue-700 font-bold border border-blue-100 hover:bg-blue-50 transition shadow">2</button>
            <button className="px-4 py-2 rounded bg-white text-blue-700 font-bold border border-blue-100 hover:bg-blue-50 transition shadow">3</button>
            <button className="px-4 py-2 rounded bg-white text-blue-700 font-bold border border-blue-100 hover:bg-blue-50 transition shadow">Next &rarr;</button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default CourseListingPage;
