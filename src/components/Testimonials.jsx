import React from "react";

const testimonials = [
  {
    text: "The UI/UX course was a game changer for me. I went from knowing nothing to landing a junior designer role in just 3 months. The community support is incredible.",
    name: "Alexa Johnson",
    role: "Product Designer",
    avatar: "/avatar1.jpg"
  },
  {
    text: "Highly recommend the Python bootcamp. The instructors explain complex concepts in a way that's easy to understand. Best investment I've made for my skills.",
    name: "James Wilson",
    role: "Software Engineer",
    avatar: "/avatar2.jpg"
  },
  {
    text: "I started the Digital Marketing course to help my small business. The ROI has been amazing. My sales increased by 40% after implementing the strategies.",
    name: "Maria Garcia",
    role: "Business Owner",
    avatar: "/avatar3.jpg"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="bg-gradient-to-br from-white to-blue-50 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-16">
      <div className="max-w-6xl w-full mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-2">What our students say</h2>
        <p className="text-gray-500 text-center mb-10">Join a community of lifelong learners who are transforming their careers.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md p-8 flex flex-col h-full items-start border border-gray-100">
              <span className="text-blue-500 mb-4">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M7.17 6.17A5.97 5.97 0 006 10v2a2 2 0 002 2h2v2H6a2 2 0 01-2-2v-2a8 8 0 018-8v2a6 6 0 00-4.83 2.17zM17.17 6.17A5.97 5.97 0 0016 10v2a2 2 0 002 2h2v2h-4a2 2 0 01-2-2v-2a8 8 0 018-8v2a6 6 0 00-4.83 2.17z" /></svg>
              </span>
              <p className="text-gray-800 mb-6">“{t.text}”</p>
              <div className="flex items-center mt-auto">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full mr-3 object-cover" />
                <div>
                  <span className="font-bold text-gray-900 block">{t.name}</span>
                  <span className="text-gray-500 text-sm">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
