"use client";

import { Camera, Shield, NetworkIcon } from "lucide-react";

export default function Dashboard() {
  return (
    <section id="dashboard" className="px-10 pb-24">

      <h2 className="text-4xl font-bold text-center mb-12">
        Live Infrastructure Dashboard
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Network Status */}
        <div className="bg-gray-900 border border-blue-500 p-6 rounded-2xl hover:scale-105 transition duration-300">

          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-blue-400">
              Network Status
            </h3>

            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
          </div>

          <p className="text-5xl font-bold mb-2">
            ONLINE
          </p>

          <p className="text-gray-400">
            Enterprise systems operational
          </p>

        </div>

        {/* Cameras */}
        <div className="bg-gray-900 border border-green-500 p-6 rounded-2xl hover:scale-105 transition duration-300">

          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-green-400">
              Active Cameras
            </h3>

            <Camera className="text-green-400" />
          </div>

          <p className="text-5xl font-bold mb-2">
            128
          </p>

          <p className="text-gray-400">
            Surveillance devices online
          </p>

        </div>

        {/* Security Alerts */}
        <div className="bg-gray-900 border border-red-500 p-6 rounded-2xl hover:scale-105 transition duration-300">

          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-red-400">
              Security Alerts
            </h3>

            <Shield className="text-red-400" />
          </div>

          <p className="text-5xl font-bold mb-2">
            02
          </p>

          <p className="text-gray-400">
            Threat detections today
          </p>

        </div>

        {/* Uptime */}
        <div className="bg-gray-900 border border-yellow-500 p-6 rounded-2xl hover:scale-105 transition duration-300">

          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-yellow-400">
              System Uptime
            </h3>

            <NetworkIcon className="text-yellow-400" />
          </div>

          <p className="text-5xl font-bold mb-2">
            99.9%
          </p>

          <p className="text-gray-400">
            Infrastructure availability
          </p>

        </div>

      </div>

    </section>
  );
}