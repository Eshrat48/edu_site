import React from "react";

const courses = [
  {
    category: "Design",
    image: "/course-design.jpg",
    rating: 4.8,
    reviews: "1.2k",
    students: "2.1k",
    duration: "12h 30m",
    title: "Mastering UI/UX Design with Figma",
    instructor: "Sarah Jenkins",
    price: "$49.99"
  },
  {
    category: "Development",
    image: "/course-dev.jpg",
    rating: 4.9,
    reviews: "850",
    students: "1.7k",
    duration: "24h 15m",
    title: "Complete Python Bootcamp for Zero to Hero",
    instructor: "David Chen",
    price: "$69.99"
  },
  {
    category: "Marketing",
    image: "/course-marketing.jpg",
    rating: 4.7,
    reviews: "540",
    students: "1.1k",
    duration: "8h 45m",
    title: "Digital Marketing Strategy 2024 Edition",
    instructor: "Emily Rose",
    price: "$39.99"
  }
];

const FeaturedCoursesSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl w-full mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-2">Featured Courses</h2>
        <p className="text-gray-500 text-center mb-10">Pick from our curated list of top-rated courses</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {courses.map((course) => (
            <div key={course.title} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col">
              <div className="relative">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                <span className="absolute top-4 left-4 bg-white text-xs font-bold px-3 py-1 rounded shadow text-gray-700">{course.category}</span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-yellow-500 text-sm font-bold flex items-center gap-1">
                    <svg className="w-4 h-4 inline" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.462a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.388-2.462a1 1 0 00-1.175 0l-3.388 2.462c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.174 9.393c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.966z" /></svg>
                    {course.rating}
                  </span>
                  <span className="text-gray-400 text-xs">({course.reviews})</span>
                  <span className="text-gray-400 text-xs">{course.duration}</span>
                  <span className="text-gray-400 text-xs">{course.students} students</span>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{course.title}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </span>
                  <span className="text-gray-700 text-sm font-medium">{course.instructor}</span>
                </div>
                <div className="flex items-center justify-between border-t pt-4">
                  <span className="text-blue-600 font-bold text-lg">{course.price}</span>
                  <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-sm px-4 py-2 rounded-lg shadow hover:from-blue-600 hover:to-cyan-600 hover:scale-105 transition">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold px-6 py-3 rounded-lg shadow hover:from-pink-600 hover:to-purple-600 hover:scale-105 transition">Explore All Courses</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoursesSection;
