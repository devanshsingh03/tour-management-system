import React from "react";

export default function TrendingGrid() {
  const items = [
    { name: "Reykjavik", img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" },
    { name: "Goa Beaches", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
    { name: "Ladakh", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470" },
    { name: "Sundarbans", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
  ];

  return (
    <section className="py-16 px-6 bg-[#071128] text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Trending Destinations</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((it, i) => (
          <div key={i} className="relative overflow-hidden rounded-xl group tilt">
            <img src={it.img + "?auto=format&fit=crop&w=1000&q=80"} alt={it.name} className="w-full h-48 object-cover group-hover:scale-110 transition" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white font-semibold">{it.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
