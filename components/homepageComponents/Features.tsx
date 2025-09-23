// Features.tsx
import React from "react";

const features = [
  { 
    title: "Students", 
    desc: "Students can explore internships, job opportunities, and mentorship programs. Track events, connect with alumni for guidance, and showcase achievements on their dashboard. Gradsphere empowers students to take charge of their career and personal growth.", 
    color: "bg-blue-100 text-blue-800" 
  },
  { 
    title: "Alumni", 
    desc: "Alumni can network with fellow graduates, guide current students, and stay updated on university events. They can give back through donations, mentorship programs, or sharing job opportunities, maintaining a lifelong connection with the institution.", 
    color: "bg-green-100 text-green-800" 
  },
  { 
    title: "University Staff", 
    desc: "University staff can manage alumni data, post internships and job opportunities, and organize events easily. Gradsphere provides centralized tools to monitor engagement, track contributions, and maintain strong relations with alumni for long-term institutional growth.", 
    color: "bg-yellow-100 text-yellow-800" 
  },
];

const Features:React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
        Features
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, idx) => (
          <div
            key={idx}
            className={`${f.color} p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer`}
          >
            <h3 className="font-semibold text-xl mb-3">{f.title}</h3>
            <p className="text-gray-700 text-sm md:text-base">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
