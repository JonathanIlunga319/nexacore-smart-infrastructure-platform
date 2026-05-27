"use client";

export default function Terminal() {
  return (
    <section className="px-10 pb-24">

      <h2 className="text-4xl font-bold text-center mb-12">
        Live Security Terminal
      </h2>

      <div className="max-w-5xl mx-auto bg-black border border-green-500 rounded-2xl shadow-[0_0_40px_rgba(34,197,94,0.3)] overflow-hidden">

        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-900 border-b border-gray-800">

          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>

          <p className="ml-4 text-sm text-gray-400">
            nexacore-security-terminal
          </p>

        </div>

        {/* Terminal Content */}
        <div className="p-6 font-mono text-green-400 space-y-4">

          <p>&gt; Initializing NexaCore Infrastructure...</p>

          <p>&gt; Checking enterprise firewall status...</p>

          <p>&gt; Firewall Status: SECURED</p>

          <p>&gt; Monitoring CCTV network nodes...</p>

          <p>&gt; AI Threat Detection: ACTIVE</p>

          <p>&gt; System Uptime: 99.9%</p>

          <div className="flex items-center">
            <span>&gt; Running live security scan</span>

            <span className="ml-2 w-3 h-6 bg-green-400 animate-pulse"></span>
          </div>

        </div>

      </div>

    </section>
  );
}