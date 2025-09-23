// About.tsx
import React from "react";

const aboutPoints = [
  { icon: "🎓", text: "Connecting students with alumni for mentorship and guidance." },
  { icon: "🤝", text: "Creating a strong professional network for everyone." },
  { icon: "💼", text: "Providing access to internships, jobs, and volunteering opportunities." },
  { icon: "📅", text: "Organizing events, workshops, and seminars regularly." },
];

const About:React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">
      <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
        About Us
      </h2>
      <p className="max-w-4xl mx-auto text-center text-gray-700 mb-10 text-lg">
        Gradsphere is a centralized platform connecting students, alumni, and universities. 
        We aim to empower students with mentorship, create networking opportunities for alumni, 
        and provide universities with an efficient way to manage alumni data.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {aboutPoints.map((point, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer text-center"
          >
            <div className="text-4xl mb-4">{point.icon}</div>
            <p className="text-gray-700">{point.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
