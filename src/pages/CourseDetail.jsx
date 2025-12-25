import React, { useState } from "react";

const curriculum = [
  {
    title: "Module 1: Introduction",
    lessons: [
      "Welcome & Course Overview",
      "How to Get the Most Out of This Course"
    ]
  },
  {
    title: "Module 2: Core Concepts",
    lessons: [
      "Fundamentals Explained",
      "Practical Examples"
    ]
  },
  {
    title: "Module 3: Advanced Topics",
    lessons: [
      "Deep Dive",
      "Project Work"
    ]
  }
];

const tabs = [
  { name: "Overview" },
  { name: "Curriculum" },
  { name: "Instructor" },
  { name: "FAQ" },
  { name: "Reviews" }
];

const CourseDetailPage = () => {
  const [activeTab, setActiveTab] = useState("Curriculum");
  const [openAccordion, setOpenAccordion] = useState(0);

  return (
    <main className="bg-[#f9f6f2] min-h-screen py-16">
      <div className="max-w-6xl w-full mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-72 bg-[#f9f6f2] rounded-2xl shadow-md p-6 mb-8 md:mb-0 border border-gray-100">
          <img src="/course-design.jpg" alt="Course" className="w-full h-40 object-cover rounded mb-4" />
          <h2 className="font-bold text-2xl text-gray-900 mb-2">Mastering UI/UX Design with Figma</h2>
          <div className="text-gray-500 text-sm mb-4">by Sarah Jenkins</div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-100 text-blue-600 text-xs font-bold px-3 py-1 rounded">Design</span>
            <span className="text-xs text-gray-400">12h 30m</span>
            <span className="text-xs text-gray-400">2.1k students</span>
          </div>
          <div className="text-3xl font-bold text-blue-600 mb-4">$49.99</div>
          <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-3 rounded-lg shadow hover:from-blue-600 hover:to-cyan-600 transition mb-2">Buy Now</button>
          <button className="w-full border border-blue-500 text-blue-600 font-bold py-3 rounded-lg hover:bg-blue-50 transition mb-2">Add to Wishlist</button>
        </aside>
        {/* Main Content */}
        <section className="flex-1">
          {/* Tabs */}
          <div className="flex gap-4 mb-8">
            {tabs.map(tab => (
              <button
                key={tab.name}
                className={`px-5 py-2 rounded-lg font-bold text-lg transition-all ${activeTab === tab.name ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-blue-100'}`}
                onClick={() => setActiveTab(tab.name)}
              >
                {tab.name}
              </button>
            ))}
          </div>
          {activeTab === "Curriculum" && (
            <div className="space-y-4">
              {curriculum.map((mod, idx) => (
                <div key={mod.title} className="bg-[#f9f6f2] rounded-xl shadow border border-gray-100">
                  <button
                    className="w-full flex justify-between items-center px-6 py-4 font-bold text-lg text-left focus:outline-none"
                    onClick={() => setOpenAccordion(openAccordion === idx ? -1 : idx)}
                  >
                    {mod.title}
                    <span>{openAccordion === idx ? "-" : "+"}</span>
                  </button>
                  {openAccordion === idx && (
                    <ul className="px-8 pb-4 list-disc text-gray-700">
                      {mod.lessons.map((lesson, lidx) => (
                        <li key={lidx} className="py-1">{lesson}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
          {activeTab !== "Curriculum" && (
            <div className="bg-white rounded-xl shadow border border-gray-100 p-8 text-gray-400 text-center text-lg">
              {activeTab} content is not implemented in this demo.
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default CourseDetailPage;
