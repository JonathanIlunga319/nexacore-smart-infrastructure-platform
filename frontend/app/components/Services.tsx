"use client";

import { Flame, Camera, NetworkIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section
      id="services"
      className="px-10 py-20 grid md:grid-cols-3 gap-8"
    >

      {/* Networking Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-900 p-8 rounded-2xl border border-blue-500 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 ease-in-out hover:shadow-2xl"
      >

        <div className="flex items-center gap-3 mb-4">
          <NetworkIcon className="text-blue-400" size={32} />

          <h2 className="text-2xl font-bold text-blue-400">
            Enterprise Networking
          </h2>
        </div>

        <p className="text-gray-400">
          Secure LAN/WAN infrastructure, routing, switching,
          VLANs, OSPF, BGP and enterprise-grade connectivity.
        </p>

      </motion.div>

      {/* Fire Detection Card */}
      <div className="bg-gray-900 p-8 rounded-2xl border border-red-500 hover:scale-105 transition duration-300 hover:shadow-2xl">

        <div className="flex items-center gap-3 mb-4">
          <Flame className="text-red-400" size={32} />

          <h2 className="text-2xl font-bold text-red-400">
            Fire Detection
          </h2>
        </div>

        <p className="text-gray-400">
          Smart fire alarm systems, sensors, emergency response
          and intelligent monitoring solutions.
        </p>

      </div>

      {/* CCTV Card */}
      <div className="bg-gray-900 p-8 rounded-2xl border border-green-500 hover:scale-105 transition duration-300 hover:shadow-2xl">

        <div className="flex items-center gap-3 mb-4">
          <Camera className="text-green-400" size={32} />

          <h2 className="text-2xl font-bold text-green-400">
            CCTV & Security
          </h2>
        </div>

        <p className="text-gray-400">
          AI-powered surveillance, access control,
          smart cameras and infrastructure protection.
        </p>

      </div>

    </section>
  );
}