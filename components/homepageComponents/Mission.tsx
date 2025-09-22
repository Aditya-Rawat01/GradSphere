import React from "react";

const missions = [
  { 
    title: "Empower Students", 
    desc: "We provide students with career guidance, mentorship programs, and opportunities to develop essential skills. Our goal is to help them achieve personal and professional growth while staying connected with alumni for real-world insights.", 
    color: "bg-blue-100 text-blue-800" 
  },
  { 
    title: "Connect Alumni", 
    desc: "Alumni can stay engaged with the university community, network with peers, and give back through mentorship or donations. We facilitate meaningful connections that enable knowledge-sharing and lifelong relationships.", 
    color: "bg-green-100 text-green-800" 
  },
  { 
    title: "Support Universities", 
    desc: "Universities get a centralized platform to manage alumni data, post opportunities, track engagement, and coordinate events. This helps maintain strong alumni relations and enables a collaborative ecosystem for students and staff alike.", 
    color: "bg-yellow-100 text-yellow-800" 
  },
];

const Mission:React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">
      <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
        Our Mission
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {missions.map((mission, index) => (
          <div
            key={index}
            className={`${mission.color} p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer`}
          >
            <h3 className="font-semibold text-xl mb-3">{mission.title}</h3>
            <p className="text-gray-700 text-sm md:text-base">{mission.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mission;


