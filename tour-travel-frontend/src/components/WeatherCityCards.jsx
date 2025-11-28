import React from "react";

const cities = [
  { name: "Shimla", temp: "12°C", icon: "🌤" },
  { name: "Goa", temp: "28°C", icon: "🏖" },
  { name: "Leh", temp: "4°C", icon: "❄️" },
];

export default function WeatherCityCards(){
  return (
    <section className="py-16 px-6 bg-[#071022] text-white">
      <h2 className="text-3xl font-bold text-center mb-6">City Weather Snapshot</h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        {cities.map((c,i)=>(
          <div key={i} className="p-6 rounded-xl backdrop-blur-xl bg-white/5">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-lg">{c.name}</div>
                <div className="text-gray-300">{c.icon}</div>
              </div>
              <div className="text-3xl font-bold">{c.temp}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
