"use client"
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const router=useRouter();
  return (
    <nav className="w-full bg-background text-foreground shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <div className="text-2xl font-bold">
          Gradsphere
        </div>

        <div className="flex space-x-4">
          <button className="px-4 py-2 font-semibold rounded-lg border border-gray-300 hover:bg-gray-100 transition cursor-pointer" onClick={()=>router.push("/auth/signin")}>
            Sign In
          </button>
          <button className="px-4 py-2 font-semibold rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 cursor-pointer transition" onClick={()=>router.push("/auth/signin")}>
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

