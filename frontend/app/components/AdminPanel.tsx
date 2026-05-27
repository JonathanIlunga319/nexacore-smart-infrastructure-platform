"use client";

export default function AdminPanel() {
  return (
    <section className="px-10 pb-24">

      <h2 className="text-4xl font-bold text-center mb-12">
        Admin Control Panel
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-gray-900 border border-blue-500 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-blue-400 mb-3">
            Active Users
          </h3>

          <p className="text-5xl font-bold">
            128
          </p>
        </div>

        <div className="bg-gray-900 border border-red-500 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-red-400 mb-3">
            Threat Alerts
          </h3>

          <p className="text-5xl font-bold">
            03
          </p>
        </div>

        <div className="bg-gray-900 border border-green-500 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-green-400 mb-3">
            Devices Online
          </h3>

          <p className="text-5xl font-bold">
            247
          </p>
        </div>

      </div>

    </section>
  );
}