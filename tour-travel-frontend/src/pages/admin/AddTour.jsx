// src/pages/admin/AddTour.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../config";

export default function AddTour() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const [tour, setTour] = useState({
    title: "",
    location: "",
    duration: "",
    price: "",
    description: "",
    images: [""],
    highlights: [""],
    itinerary: [{ day: "", detail: "" }],
  });

  const handleChange = (e) => {
    setTour({ ...tour, [e.target.name]: e.target.value });
  };

  const handleArrayChange = (e, index, field) => {
    const updated = [...tour[field]];
    updated[index] = e.target.value;
    setTour({ ...tour, [field]: updated });
  };

  const handleItineraryChange = (e, index, field) => {
    const updated = [...tour.itinerary];
    updated[index][field] = e.target.value;
    setTour({ ...tour, itinerary: updated });
  };

  const addField = (field) => {
    if (field === "itinerary") {
      setTour({
        ...tour,
        itinerary: [...tour.itinerary, { day: "", detail: "" }],
      });
    } else {
      setTour({ ...tour, [field]: [...tour[field], ""] });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login as admin first");
      return navigate("/admin/login");
    }

    const payload = {
      title: tour.title,
      location: tour.location,
      duration: Number(tour.duration),
      price: Number(tour.price),
      description: tour.description,
      images: tour.images.filter((x) => x && x.trim() !== ""),
      highlights: tour.highlights.filter((x) => x && x.trim() !== ""),
      itinerary: tour.itinerary.filter(
        (d) => (d.day && d.day.trim() !== "") || (d.detail && d.detail.trim() !== "")
      ),
    };

    try {
      await axios.post(`${BASE_URL}/tours/add`, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("Tour added successfully");
      navigate("/admin/manage-tours");
    } catch (err) {
      console.error("Add tour error:", err);
      alert(err.response?.data?.message || "Failed to add tour");
    }
  };

  // Utility Tailwind classes used:
  const inputClass =
    "w-full p-3 bg-white/10 border border-white/20 rounded-xl outline-none focus:border-[#00F2FE]";
  const labelClass = "block mb-2 text-gray-300";

  return (
    <div className="min-h-screen bg-[#030617] text-white px-6 py-10">
      <div
        data-aos="zoom-in"
        className="max-w-4xl mx-auto bg-white/5 border border-white/10 
        backdrop-blur-xl p-10 rounded-2xl shadow-2xl"
      >
        <h1 className="text-3xl font-extrabold text-center mb-10">
          Add <span className="text-[#00F2FE]">New Tour</span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Title */}
          <div>
            <label className={labelClass}>Tour Title</label>
            <input
              type="text"
              name="title"
              className={inputClass}
              placeholder="Ex: Bali Adventure Tour"
              value={tour.title}
              onChange={handleChange}
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className={labelClass}>Location</label>
            <input
              type="text"
              name="location"
              className={inputClass}
              placeholder="Ex: Bali, Indonesia"
              value={tour.location}
              onChange={handleChange}
              required
            />
          </div>

          {/* Duration & Price */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Duration (Days)</label>
              <input
                type="number"
                name="duration"
                className={inputClass}
                placeholder="Ex: 7"
                value={tour.duration}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className={labelClass}>Price (₹)</label>
              <input
                type="number"
                name="price"
                className={inputClass}
                placeholder="Ex: 25000"
                value={tour.price}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className={labelClass}>Description</label>
            <textarea
              name="description"
              rows="4"
              className={inputClass}
              placeholder="Enter full tour description…"
              value={tour.description}
              onChange={handleChange}
            />
          </div>

          {/* Images */}
          <div>
            <h3 className="text-xl font-semibold">Images</h3>
            {tour.images.map((img, i) => (
              <input
                key={i}
                placeholder={`Image URL ${i + 1}`}
                className={`${inputClass} mt-3`}
                value={img}
                onChange={(e) => handleArrayChange(e, i, "images")}
              />
            ))}
            <button
              type="button"
              className="mt-3 px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 text-sm"
              onClick={() => addField("images")}
            >
              + Add Image
            </button>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="text-xl font-semibold">Highlights</h3>
            {tour.highlights.map((h, i) => (
              <input
                key={i}
                placeholder={`Highlight ${i + 1}`}
                className={`${inputClass} mt-3`}
                value={h}
                onChange={(e) => handleArrayChange(e, i, "highlights")}
              />
            ))}
            <button
              type="button"
              className="mt-3 px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 text-sm"
              onClick={() => addField("highlights")}
            >
              + Add Highlight
            </button>
          </div>

          {/* Itinerary */}
          <div>
            <h3 className="text-xl font-semibold">Itinerary</h3>
            {tour.itinerary.map((d, i) => (
              <div key={i} className="flex gap-4 mt-3">
                <input
                  placeholder="Day"
                  className={inputClass}
                  value={d.day}
                  onChange={(e) => handleItineraryChange(e, i, "day")}
                />
                <input
                  placeholder="Detail"
                  className={`${inputClass} flex-1`}
                  value={d.detail}
                  onChange={(e) => handleItineraryChange(e, i, "detail")}
                />
              </div>
            ))}
            <button
              type="button"
              className="mt-3 px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 text-sm"
              onClick={() => addField("itinerary")}
            >
              + Add Day
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-6 py-3 rounded-full 
            bg-gradient-to-r from-[#00F2FE] to-[#7C4CFF] 
            text-black font-bold hover:opacity-90 transition"
          >
            Save Tour
          </button>
        </form>
      </div>
    </div>
  );
}
