export default function Statistics() {
  return (
    <section id="statistics" className="px-10 pb-24">

      <h2 className="text-4xl font-bold text-center mb-12">
        Infrastructure Statistics
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-blue-600/90 backdrop-blur-lg p-8 rounded-2xl text-center transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 ease-in-out shadow-[0_0_30px_rgba(59,130,246,0.5)]">
          <h3 className="text-5xl font-bold">150+</h3>
          <p className="mt-2">CCTV Installations</p>
        </div>

        <div className="bg-gray-900/80 backdrop-blur-lg border border-gray-700 p-8 rounded-2xl text-center hover:scale-105 transition-all duration-500">
          <h3 className="text-5xl font-bold">85+</h3>
          <p className="mt-2 text-gray-400">Fire Alarm Systems</p>
        </div>

        <div className="bg-gray-900/80 backdrop-blur-lg border border-gray-700 p-8 rounded-2xl text-center hover:scale-105 transition-all duration-500">
          <h3 className="text-5xl font-bold">40+</h3>
          <p className="mt-2 text-gray-400">Enterprise Networks</p>
        </div>

        <div className="bg-green-600/90 backdrop-blur-lg p-8 rounded-2xl text-center hover:scale-105 transition-all duration-500">
          <h3 className="text-5xl font-bold">24/7</h3>
          <p className="mt-2">Security Monitoring</p>
        </div>

      </div>

    </section>
  );
}