import './App.css'
import Navbar from './components/Navbar'
import { useState, useEffect } from 'react';
import CourseListingPage from './pages/CourseListing';
import CourseDetailPage from './pages/CourseDetail';
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import StatsSection from './components/Stats'
import CategoriesSection from './components/Categories'
import FeaturedCoursesSection from './components/FeaturedCourses'
import TestimonialsSection from './components/Testimonials'
import BecomeInstructorSection from './components/BecomeInstructor'
import AcademyCTASection from './components/CTA'
import BlogSection from './components/Blog'


function App() {
  const [page, setPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <>
      <Navbar onNavigate={setPage} />
      {page === 'courses' ? (
        <>
          <CourseListingPage onViewDetails={() => setPage('course-detail')} />
          <Footer />
        </>
      ) : page === 'course-detail' ? (
        <>
          <CourseDetailPage />
          <Footer />
        </>
      ) : (
        <>
          <HeroSection />
          <StatsSection />
          <CategoriesSection />
          <FeaturedCoursesSection />
          <TestimonialsSection />
          <AcademyCTASection />
          <BecomeInstructorSection />
          <BlogSection />
          <Footer />
        </>
      )}
    </>
  );
}

export default App
