// src/pages/Category.jsx
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// NOTE: we still keep category -> exampleTours names; Category page will navigate to /tour/:slug
export default function Category() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const MOCK = {
    adventure: {
      title: "Adventure",
      desc: "High-energy trips: trekking, rafting, and more.",
      exampleTours: ["Mountain Trekking 7D", "Whitewater Rafting Day Tour", "Aurora Trails Expedition"],
    },
    "family-trips": {
      title: "Family Trips",
      desc: "Kid-friendly plans and relaxed itineraries.",
      exampleTours: ["Family Beach Week", "Theme Park Weekend"],
    },
    "luxury-tours": {
      title: "Luxury Tours",
      desc: "5-star hotels, private drivers, bespoke experiences.",
      exampleTours: ["Luxury Dubai 5N", "Private Island Retreat"],
    },
    wellness: {
      title: "Wellness",
      desc: "Retreats and spa packages for renewal.",
      exampleTours: ["Yoga Retreat 5D", "Spa & Detox Week"],
    },
  };

  const data = MOCK[slug] || {
    title: slug?.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()) || "Category",
    desc: "Category content coming soon.",
    exampleTours: [],
  };

  useEffect(() => {
    document.title = `${data.title} — Tours — TourX`;
    window.scrollTo(0, 0);
  }, [slug]);

  // small slugify helper to create consistent tour slugs
  const slugify = (text) =>
    text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/[\s_]+/g, "-")
      .replace(/[^a-z0-9-]/g, "")
      .replace(/-+/g, "-");

  return (
    <main className="min-h-screen bg-[#010414] text-white py-12 px-6">
      <div className="max-w-5xl mx-auto p-6 bg-black/40 rounded-2xl shadow-lg">
        <button onClick={() => navigate(-1)} className="mb-4 px-3 py-2 rounded-md border border-white/10 text-sm">← Back</button>

        <h1 className="text-3xl font-bold">{data.title}</h1>
        <p className="text-gray-300 mt-2">{data.desc}</p>

        <div className="mt-6">
          <h3 className="text-xl font-semibold">Example Tours</h3>
          <ul className="mt-3 space-y-2">
            {data.exampleTours.length ? (
              data.exampleTours.map((t, i) => {
                const tourSlug = slugify(t); // create slug from tour name
                return (
                  <li key={i} className="p-3 rounded-md bg-white/5 flex justify-between items-center">
                    <span>{t}</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => navigate(`/tour/${tourSlug}`)}
                        className="px-3 py-1 rounded-md bg-gradient-to-r from-[#7DF9FF] to-[#7C4CFF] text-black"
                      >
                        View Tour
                      </button>
                      <button
                        onClick={() => navigate(`/tour/${tourSlug}`)}
                        className="px-3 py-1 rounded-md border border-white/10 text-sm"
                      >
                        Details
                      </button>
                    </div>
                  </li>
                );
              })
            ) : (
              <li className="text-gray-400">No tours in this category yet.</li>
            )}
          </ul>
        </div>
      </div>
    </main>
  );
}
