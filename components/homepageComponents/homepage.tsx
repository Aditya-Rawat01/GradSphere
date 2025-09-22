import React from "react";
import Navbar from "./navbar";
import Hero from "./herosection";
import Mission from "./Mission";
import Features from "./Features";
import About from "./about";
import Footer from "./footer";

const Homepage:React.FC = () => {
  return (
    <div >
      <Navbar/>
      <Hero />
      <Mission />
      <Features />
      <About />
      <Footer />
    </div>
  );
};

export default Homepage;