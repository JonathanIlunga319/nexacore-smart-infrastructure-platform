"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-10 py-24 text-center"
    >

      {/* Animated Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute inset-0 bg-blue-500/10 blur-3xl"></div>

      {/* Animated Badge */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="inline-block mb-6 px-4 py-2 rounded-full border border-blue-500 text-blue-400 text-sm tracking-widest uppercase"
      >
        Smart Infrastructure Platform
      </motion.div>

      {/* Animated Title */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="text-6xl font-extrabold text-blue-500 mb-6 drop-shadow-[0_0_25px_rgba(59,130,246,0.7)]"
      >
        NexaCore Smart Infrastructure
      </motion.h1>

      {/* Animated Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.2 }}
        className="text-xl text-gray-300 max-w-3xl mx-auto leading-9"
      >

        <span className="text-blue-400 animate-pulse">
          Enterprise Networking
        </span>

        {" • "} CCTV Surveillance {" • "}

        <span className="text-red-400 animate-pulse">
          Fire Detection
        </span>

        {" • "} Smart Automation {" • "}

        <span className="text-green-400 animate-pulse">
          AI Security Systems
        </span>

      </motion.p>

      {/* Animated Buttons */}
    <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1, duration: 1 }}
  className="flex flex-col md:flex-row justify-center gap-6 mt-10"
>

  <a
    href="#services"
    className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition duration-300 shadow-[0_0_25px_rgba(59,130,246,0.5)] px-8 py-4 rounded-2xl text-lg font-semibold inline-block"
  >
    Explore Services
  </a>

  <a
    href="#projects"
    className="border border-gray-600 hover:border-blue-400 hover:text-blue-400 hover:scale-105 transition duration-300 px-8 py-4 rounded-2xl text-lg inline-block"
  >
    View Projects
  </a>

</motion.div>

    </section>
  );
}