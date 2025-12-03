// src/pages/Tours.jsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { BASE_URL } from "../config";
import { useNavigate } from "react-router-dom";

export default function Tours() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
    window.scrollTo(0, 0);

    fetchTours();
  }, []);

  // Filters
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState(90000);

  const [tours, setTours] = useState([]);

  const categories = [
    "All",
    "Adventure",
    "Mountains",
    "Beach",
    "City",
    "Wildlife",
    "Luxury",
    "Family"
  ];

  // 🟢 Fetch tours from backend
  const fetchTours = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/tours`);
      setTours(res.data);
    } catch (err) {
      console.error("Error loading tours:", err);
    }
  };

  // 🟢 Apply filters
  const filteredTours = tours.filter((t) => {
    const matchesSearch = t.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      category === "All" || (t.category && t.category === category);
    const matchesPrice = t.price <= price;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="w-full text-white bg-[#010414] min-h-screen">

      {/* HERO */}
      <section className="relative h-[45vh] flex items-center justify-center text-center px-6">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1800&q=80"
          alt="Tours"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90"></div>

        <div className="relative z-20">
          <h1 className="text-4xl md:text-6xl font-extrabold" data-aos="fade-up">
            Explore Tours
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-300" data-aos="fade-up" data-aos-delay="150">
            Browse all our premium travel experiences.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-6">Filter Your Perfect Trip</h2>

          <div className="grid md:grid-cols-3 gap-6">

            {/* Search */}
            <div>
              <label className="text-gray-300 mb-2 block">Search Tour</label>
              <input
                className="w-full p-3 rounded-lg bg-white/10 border border-white/10 text-white"
                placeholder="Search…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Category */}
            <div>
              <label className="text-gray-300 mb-2 block">Category</label>
              <select
                className="w-full p-3 rounded-lg bg-white/10 border border-white/10 text-white"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="text-gray-300 mb-2 block">Max Price: ₹{price}</label>
              <input
                type="range"
                min="5000"
                max="90000"
                step="5000"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full"
              />
            </div>

          </div>
        </div>
      </section>

      {/* TOURS GRID */}
      <section className="py-10 px-6">
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

          {filteredTours.length === 0 && (
            <p className="text-center col-span-3 text-gray-400 text-lg">
              No tours found. Try adjusting filters.
            </p>
          )}

          {filteredTours.map((t, i) => (
            <div
              key={t._id}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              onClick={() => navigate(`/tour/${t._id}`)}
              className="rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:scale-[1.03] transition duration-300 cursor-pointer"
            >
              <img src={t.image} alt={t.title} className="h-48 w-full object-cover" />

              <div className="p-5">
                <h3 className="text-xl font-semibold">{t.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{t.location}</p>

                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-bold text-[#7DF9FF]">₹{t.price}</span>

                  <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#7DF9FF] to-[#7C4CFF] text-black font-semibold">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
}
