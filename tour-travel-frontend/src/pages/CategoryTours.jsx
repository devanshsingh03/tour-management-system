// src/pages/CategoryTours.jsx
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function CategoryTours() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // REAL IDs (EXACTLY SAME AS ALL_TOURS KEYS)
  const TOURS = {
    adventure: [
      {
        id: "mountain-trekking-7d",
        title: "Mountain Trekking 7D",
        price: "₹22,000",
        img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: "whitewater-rafting-day-tour",
        title: "Whitewater Rafting Day Tour",
        price: "₹9,500",
        img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: "aurora-trails-expedition",
        title: "Aurora Trails Expedition",
        price: "₹25,000",
        img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
      }
    ],

    "family-trips": [
      {
        id: "family-beach-week",
        title: "Family Beach Week",
        price: "₹18,000",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: "theme-park-weekend",
        title: "Theme Park Weekend",
        price: "₹7,000",
        img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80",
      }
    ],

    "luxury-tours": [
      {
        id: "luxury-dubai-5n",
        title: "Luxury Dubai 5N",
        price: "₹60,000",
        img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: "private-island-retreat",
        title: "Private Island Retreat",
        price: "₹85,000",
        img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      }
    ],

    wellness: [
      {
        id: "yoga-retreat-5d",
        title: "Yoga Retreat 5D",
        price: "₹22,000",
        img: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      },
      {
        id: "spa-detox-week",
        title: "Spa & Detox Week",
        price: "₹40,000",
        img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80",
      }
    ]
  };

  const tours = TOURS[slug] || [];

  useEffect(() => {
    document.title = `${slug.toUpperCase()} — Tours • TourX`;
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="min-h-screen bg-[#010414] text-white p-6">
      <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 border border-white/20 rounded-lg mb-6"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold mb-4">
        {slug.replace(/-/g, " ").toUpperCase()} Tours
      </h1>

      {tours.length === 0 && (
        <p className="text-gray-400">No tours available in this category.</p>
      )}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tours.map((t) => (
          <div
            key={t.id}
            onClick={() => navigate(`/tour/${t.id}`)}
            className="cursor-pointer bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
          >
            <img src={t.img} className="h-48 w-full object-cover" />

            <div className="p-4">
              <h3 className="text-lg font-semibold">{t.title}</h3>
              <p className="text-gray-300">{t.price}</p>

              <button className="mt-3 px-4 py-2 rounded-lg bg-gradient-to-r from-[#7DF9FF] to-[#7C4CFF] text-black font-semibold">
                View Tour
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
