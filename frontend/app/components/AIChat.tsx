"use client";

import { useState } from "react";
import { Bot, X } from "lucide-react";

export default function AIChat() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 p-4 rounded-full shadow-2xl z-50"
      >
        {open ? <X size={28} /> : <Bot size={28} />}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 bg-gray-950 border border-blue-500 rounded-2xl shadow-[0_0_40px_rgba(59,130,246,0.3)] z-50 overflow-hidden">

          <div className="bg-blue-600 px-4 py-3 font-bold">
            NexaCore AI Assistant
          </div>

          <div className="p-4 h-80 overflow-y-auto text-sm text-gray-300 space-y-4">

            <div className="bg-gray-900 p-3 rounded-xl">
              👋 Welcome to NexaCore Infrastructure.
            </div>

            <div className="bg-blue-600/20 p-3 rounded-xl">
              Ask about networking, CCTV, fire systems or cybersecurity.
            </div>

          </div>

          <div className="p-4 border-t border-gray-800">
            <input
              type="text"
              placeholder="Ask NexaCore AI..."
              className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

        </div>
      )}
    </>
  );
}