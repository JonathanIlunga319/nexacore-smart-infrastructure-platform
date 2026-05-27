"use client";

export default function Contact() {
  return (
    <section id="contact" className="px-10 pb-24">

      <h2 className="text-4xl font-bold text-center mb-12">
        Contact NexaCore
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">

        {/* Contact Info */}
        <div className="bg-gray-900 border border-blue-500 p-8 rounded-2xl">

          <h3 className="text-2xl font-bold text-blue-400 mb-6">
            Get In Touch
          </h3>

          <div className="space-y-4 text-gray-300">

            <p>📍 Cape Town, South Africa</p>

            <p>📞 +27 67 745 6249</p>

            <p>📧 info@nexacore.com</p>

            <p>🌐 www.nexacore.com</p>

          </div>

        </div>

        {/* Contact Form */}
        <div className="bg-gray-900 border border-gray-700 p-8 rounded-2xl">

          <form
  className="space-y-5"
  onSubmit={(e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  }}
>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            ></textarea>

            <button
              className="w-full bg-blue-600 hover:bg-blue-700 transition duration-300 py-3 rounded-xl font-bold"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}