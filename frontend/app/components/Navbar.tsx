"use client";

import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-blue-500/20 shadow-[0_0_25px_rgba(59,130,246,0.15)]">

      <div className="flex items-center justify-between px-8 py-6">

        {/* Logo */}
        <div className="flex items-center gap-2 text-3xl font-bold text-blue-500">
          <Shield className="text-blue-500" />
          <h1>NexaCore</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-gray-300 font-medium">

          <a href="#home" className="hover:text-white transition">
            Home
          </a>

          <a href="#services" className="hover:text-white transition">
            Services
          </a>

          <a href="#dashboard" className="hover:text-white transition">
            Dashboard
          </a>

          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>

        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-8 pb-6 text-gray-300 font-medium bg-black/90">

          <a href="#home">Home</a>
          {/* Mobile Menu */}
{open && (
  <div className="md:hidden flex flex-col gap-4 px-8 pb-6 text-gray-300 font-medium bg-black/90">

    <a
      href="#home"
      className="hover:text-blue-400 transition duration-300"
    >
      Home
    </a>

    <a
      href="#services"
      className="hover:text-blue-400 transition duration-300"
    >
      Services
    </a>

    <a
      href="#dashboard"
      className="hover:text-blue-400 transition duration-300"
    >
      Dashboard
    </a>

    <a
      href="#projects"
      className="hover:text-blue-400 transition duration-300"
    >
      Projects
    </a>

    <a
      href="#contact"
      className="hover:text-blue-400 transition duration-300"
    >
      Contact
    </a>

  </div>
)}
          <a href="#services">Services</a>

          <a href="#dashboard">Dashboard</a>

          <a href="#projects">Projects</a>

          <a href="#contact">Contact</a>

        </div>
      )}

    </nav>
  );
}