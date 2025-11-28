// src/pages/HolographicJourney.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HolographicJourney() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Holographic Journey — TourX";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-[#00111a] text-white py-16 px-6">
      <div className="max-w-4xl mx-auto bg-gradient-to-b from-black/50 to-transparent rounded-2xl p-8 shadow-lg">
        <button onClick={() => navigate(-1)} className="mb-4 px-3 py-2 rounded-md border border-white/10 text-sm">← Back</button>

        <h1 className="text-4xl font-bold">Holographic Journey</h1>
        <p className="text-gray-300 mt-3">
          Step into a new dimension of travel. Our holographic experiences combine AR, VR, and curated storytelling — perfect for previewing trips or enjoying immersive content from home.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg bg-black/30">
            <h3 className="text-xl font-semibold">Try a Free Demo</h3>
            <p className="text-gray-300 mt-2">Start a 2-minute holographic preview of a popular destination.</p>
            <button
  onClick={() => navigate("/hologram-demo")}
  className="mt-4 px-5 py-3 rounded-full bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black font-semibold"
>
  Launch Demo
</button>

          </div>

          <div className="p-6 rounded-lg bg-black/30">
            <h3 className="text-xl font-semibold">Book a Live Session</h3>
            <p className="text-gray-300 mt-2">Schedule a guided holographic session with an expert host.</p>
            <button onClick={() => navigate("/contact")} className="mt-4 px-5 py-3 rounded-full border border-white/10">Contact Us</button>
          </div>
        </div>
      </div>
    </main>
  );
}
