import React from "react";

export default function CyberTestimonials() {
  const reviews = [
    { name: "Anita", msg: "The futurist trip made me feel alive!" },
    { name: "Karan", msg: "Seamless booking, unforgettable experience." },
    { name: "Maya", msg: "Holographic preview was impressive!" },
  ];

  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Traveler Voices</h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="p-6 rounded-xl bg-gradient-to-br from-white/6 to-white/3 backdrop-blur-xl">
            <p className="italic text-gray-100">“{r.msg}”</p>
            <div className="mt-4 font-semibold">{r.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
