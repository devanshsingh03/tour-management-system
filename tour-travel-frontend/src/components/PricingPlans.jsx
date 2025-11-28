import React from "react";

export default function PricingPlans() {
  const plans = [
    { name: "Explorer", price: "₹7,999", perks: ["3 days", "Guided", "Meals"] },
    { name: "Adventurer", price: "₹14,999", perks: ["5 days", "Guide + Transport", "Meals"] },
    { name: "Premium", price: "₹29,999", perks: ["7+ days", "Luxury Stay", "Custom itinerary"] },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-[#071128] to-[#081827] text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Pricing Plans</h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        {plans.map((p, i) => (
          <div key={i} className="p-6 rounded-2xl border border-white/6 backdrop-blur-xl">
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <div className="text-3xl font-bold mt-4">{p.price}</div>
            <ul className="mt-4 space-y-2 text-gray-300">
              {p.perks.map((perk, j) => <li key={j}>• {perk}</li>)}
            </ul>
             <button
    onClick={() => window.location.href = "/signup"}
    className="mt-6 w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:opacity-90 transition"
  >
    Choose
  </button>
          </div>
        ))}
      </div>
    </section>
  );
}
