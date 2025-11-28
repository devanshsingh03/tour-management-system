import React from "react";

export default function NeonCategories() {
  const cats = ["Adventure", "Beach", "Wellness", "Wildlife", "City", "Cultural"];
  return (
    <section className="py-16 px-6 bg-[#021022] text-white">
      <h2 className="text-3xl font-bold text-center mb-6">Explore Categories</h2>
      <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-center">
        {cats.map((c,i)=>(
          <div key={i} className="px-5 py-3 rounded-full border border-white/6 backdrop-blur-xl hover:scale-105 transition" style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.02), transparent)"}}>
            {c}
          </div>
        ))}
      </div>
    </section>
  );
}
