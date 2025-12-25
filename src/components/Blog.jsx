import React from "react";

const articles = [
  {
    image: "/elearning.jpg",
    date: "Oct 24, 2023",
    category: "Education",
    title: "Top 10 Trends in E-Learning for 2024",
    description: "Discover how AI and VR are reshaping the landscape of online education and what it means for students.",
    link: "#"
  },
  {
    image: "/portfolio.jpg",
    date: "Oct 18, 2023",
    category: "Career",
    title: "How to Build a Portfolio that Gets You Hired",
    description: "Tips and tricks from industry experts on showcasing your work effectively to potential employers.",
    link: "#"
  },
  {
    image: "/time-management.jpg",
    date: "Oct 12, 2023",
    category: "Productivity",
    title: "Mastering Time Management for Remote Learning",
    description: "Struggling to balance work and study? Here are 5 proven techniques to stay on track.",
    link: "#"
  }
];

const BlogSection = () => {
  return (
    <section className="bg-[#ffffff] py-16">
      <div className="max-w-6xl w-full mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Latest Articles</h2>
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold px-5 py-2 rounded-lg shadow hover:from-blue-600 hover:to-cyan-600 transition">All Articles</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-gray-400 text-xs mb-2">{article.date} &bull; {article.category}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">{article.description}</p>
                <a href={article.link} className="text-blue-600 font-semibold text-sm hover:underline mt-auto">Read More &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
