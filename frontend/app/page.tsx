"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Statistics from "./components/Statistics";
import Dashboard from "./components/Dashboard";
import Terminal from "./components/Terminal";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AIChat from "./components/AIChat";
import AdminPanel from "./components/AdminPanel";
export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white overflow-hidden">

      {/* Cyber Grid Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.15)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <Navbar />
      <Hero />
      <Services />
      <Statistics />
      <Dashboard />
      <Terminal />
      <Projects />
      <Contact />
      <Footer />
      <AIChat />  
      <AdminPanel />  
    </main>
  );
}