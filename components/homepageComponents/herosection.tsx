"use client"
import React from "react";
import heroImg from "./hero.jpg";
import { useRouter } from "next/navigation";

const HeroSection : React.FC= () => {
  const router=useRouter();
  return (
    <section className="relative bg-background text-foreground py-20 flex flex-col md:flex-row items-center justify-center px-6 md:px-20">
      
      {/* Text content */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-5xl font-extrabold mb-4">
          Welcome to Gradsphere
        </h1>
        <p className="text-lg mb-6 text-gray-700">
          Connecting alumni, students, and opportunities. Explore mentorship, internships, events, and more — all in one place.
        </p>
        <button className="px-6 py-3 bg-blue-400 text-white font-semibold rounded-lg hover:bg-blue-500 transition cursor-pointer"  onClick={()=>router.push("/auth/signin")}>
          Get Started
        </button>
      </div>

      {/* Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={heroImg.src}
          alt="Hero"
          className="rounded-xl shadow-md w-full max-w-md"
        />
      </div>

      {/* Optional soft background circles */}
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-200/20 rounded-full"></div>
      <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-200/20 rounded-full"></div>
    </section>
  );
};

export default HeroSection;

