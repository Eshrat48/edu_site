import React from "react";

const categories = [
  {
    name: "Design",
    icon: (
      <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-50">
        <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 11l6 6M3 21l6-6m0 0l9-9a2.121 2.121 0 113 3l-9 9m-6 6H3v-3" /></svg>
      </span>
    ),
    bg: "bg-blue-50",
    courses: 24
  },
  {
    name: "Development",
    icon: (
      <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-50">
        <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>
      </span>
    ),
    bg: "bg-green-50",
    courses: 31
  },
  {
    name: "Marketing",
    icon: (
      <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-orange-50">
        <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
      </span>
    ),
    bg: "bg-orange-50",
    courses: 18
  },
  {
    name: "Business",
    icon: (
      <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-purple-50">
        <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7v4a1 1 0 001 1h3m10-5h3a1 1 0 011 1v4a1 1 0 01-1 1h-3m-10 4h10m-10 4h10m-10-8V5a1 1 0 011-1h8a1 1 0 011 1v2m-10 8v2a1 1 0 001 1h8a1 1 0 001-1v-2" /></svg>
      </span>
    ),
    bg: "bg-purple-50",
    courses: 15
  },
  {
    name: "Lifestyle",
    icon: (
      <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-pink-50">
        <svg className="w-7 h-7 text-pink-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 7v7m0 0H9m3 0h3" /></svg>
      </span>
    ),
    bg: "bg-pink-50",
    courses: 12
  }
];

const CategoriesSection = () => {
  return (
    <section className="bg-[#f9f6f2] w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] pt-16 pb-12">
      <div className="max-w-6xl w-full mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-2">
          <div className="text-left">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-1">Browse Top Categories</h2>
            <p className="text-gray-500 text-base">Explore our most popular learning paths</p>
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold px-5 py-2 rounded-lg shadow hover:from-blue-600 hover:to-cyan-600 transition mt-2 md:mt-0">All Categories</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((cat) => (
            <div key={cat.name} className="bg-white rounded-xl p-6 flex flex-col items-center shadow-sm border border-gray-100 hover:shadow-lg transition">
              {cat.icon}
              <span className="mt-4 font-bold text-lg text-gray-900">{cat.name}</span>
              <span className="mt-1 text-gray-500 text-sm">{cat.courses} Courses</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
