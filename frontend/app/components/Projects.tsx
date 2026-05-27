"use client";

export default function Projects() {
  return (
    <section id="projects" className="px-10 pb-24">

      <h2 className="text-4xl font-bold text-center mb-12">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {/* Project 1 */}
        <div className="bg-gray-900 border border-blue-500 rounded-2xl overflow-hidden hover:scale-105 transition duration-300">

          <div className="h-52 bg-gradient-to-br from-blue-600 to-cyan-500"></div>

          <div className="p-6">

            <h3 className="text-2xl font-bold text-blue-400 mb-3">
              Smart Enterprise Network
            </h3>

            <p className="text-gray-400 mb-4">
              Secure enterprise infrastructure with VLANs,
              OSPF routing, firewalls and centralized monitoring.
            </p>

            <button className="text-blue-400 hover:text-white transition">
              View Project →
            </button>

          </div>

        </div>

        {/* Project 2 */}
        <div className="bg-gray-900 border border-red-500 rounded-2xl overflow-hidden hover:scale-105 transition duration-300">

          <div className="h-52 bg-gradient-to-br from-red-600 to-orange-500"></div>

          <div className="p-6">

            <h3 className="text-2xl font-bold text-red-400 mb-3">
              Smart Fire Detection
            </h3>

            <p className="text-gray-400 mb-4">
              Intelligent fire alarm systems with emergency
              automation and live alert monitoring.
            </p>

            <button className="text-red-400 hover:text-white transition">
              View Project →
            </button>

          </div>

        </div>

        {/* Project 3 */}
        <div className="bg-gray-900 border border-green-500 rounded-2xl overflow-hidden hover:scale-105 transition duration-300">

          <div className="h-52 bg-gradient-to-br from-green-600 to-emerald-500"></div>

          <div className="p-6">

            <h3 className="text-2xl font-bold text-green-400 mb-3">
              AI CCTV Surveillance
            </h3>

            <p className="text-gray-400 mb-4">
              AI-powered smart cameras with facial recognition,
              motion tracking and real-time analytics.
            </p>

            <button className="text-green-400 hover:text-white transition">
              View Project →
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}