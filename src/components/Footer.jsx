import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#181C23] text-gray-300 pt-12 pb-4 mt-16 rounded-t-xl">
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row justify-between gap-8 px-4">
        {/* Left: Logo and Description */}
        <div className="flex-1 min-w-[220px] mb-8 md:mb-0">
          <div className="flex items-center gap-2 mb-3">
            <img src="/logo.jpg" alt="Academy LMS Logo" className="h-7 w-7" />
            <span className="font-bold text-lg text-white">EduSite</span>
          </div>
          <p className="text-gray-400 text-sm mb-4">Empowering learners globally with accessible, high-quality education. Join our community today.</p>
          <div className="flex gap-4 text-xl mt-2">
            <a href="#" className="hover:text-blue-400"><i className="fas fa-globe"></i></a>
            <a href="#" className="hover:text-blue-400"><i className="fas fa-clipboard-list"></i></a>
            <a href="#" className="hover:text-blue-400"><i className="fas fa-rss"></i></a>
          </div>
        </div>
        {/* Company Links */}
        <div className="flex-1 min-w-[120px] mb-8 md:mb-0">
          <h4 className="font-bold text-white mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400">Careers</a></li>
            <li><a href="#" className="hover:text-blue-400">Press</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>
        {/* Community Links */}
        <div className="flex-1 min-w-[120px] mb-8 md:mb-0">
          <h4 className="font-bold text-white mb-3">Community</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400">Learners</a></li>
            <li><a href="#" className="hover:text-blue-400">Partners</a></li>
            <li><a href="#" className="hover:text-blue-400">Developers</a></li>
            <li><a href="#" className="hover:text-blue-400">Blog</a></li>
          </ul>
        </div>
        {/* Stay Updated */}
        <div className="flex-1 min-w-[220px]">
          <h4 className="font-bold text-white mb-3">Stay Updated</h4>
          <p className="text-gray-400 text-sm mb-3">Subscribe to get the latest news and course offers.</p>
          <form className="flex flex-col gap-2">
            <input type="email" placeholder="Your email address" className="bg-[#23272F] text-gray-200 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <button type="submit" className="bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="max-w-6xl w-full mx-auto border-t border-gray-700 mt-10 pt-4 px-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <div className="mb-2 md:mb-0">© 2024 Academy LMS. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-blue-400">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400">Terms of Service</a>
          <a href="#" className="hover:text-blue-400">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
