// src/pages/admin/EditTour.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

/**
 * NOTE: using the uploaded local file as a placeholder image.
 * Path used:
 * /mnt/data/Screenshot (1745).png
 * Replace with your public URL when ready.
 */
const placeholderImage = "/mnt/data/Screenshot (1745).png";

export default function EditTour() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [tour, setTour] = useState({
    title: "",
    country: "",
    price: "",
    duration: "",
    description: "",
    highlights: "",
    image: "",
  });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    // Try to fetch from backend; fall back to demo data so UI never breaks.
    const fetchTour = async () => {
      setLoading(true);
      setError("");
      try {
        // If you have backend: GET /api/tours/:id
        const res = await axios.get(`/api/tours/${id}`);
        const data = res.data;
        setTour({
          title: data.title || "",
          country: data.location || data.country || "",
          price: data.price || "",
          duration: data.duration || "",
          description: data.summary || data.description || "",
          highlights: (data.highlights && data.highlights.join(", ")) || "",
          image: data.img || data.image || "",
        });
      } catch (err) {
        // fallback demo (so the page is usable without backend)
        setTour({
          title: "Swiss Alps Escape",
          country: "Switzerland",
          price: 120000,
          duration: 5,
          description:
            "A breathtaking alpine tour with guided treks, chalet stays and photography sessions.",
          highlights: "Alps,Photography,Guided-Trek",
          image: placeholderImage,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchTour();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTour((t) => ({ ...t, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    // Basic validation
    if (!tour.title || !tour.country || !tour.price || !tour.duration) {
      setError("Please fill title, country, price and duration.");
      setSaving(false);
      return;
    }

    try {
      // If backend exists, send PATCH (update) request.
      // Otherwise this will fail silently and we show a success message for the demo.
      await axios.patch(
        `/api/tours/${id}`,
        {
          title: tour.title,
          location: tour.country,
          price: Number(tour.price),
          duration: Number(tour.duration),
          summary: tour.description,
          highlights: tour.highlights.split(",").map((s) => s.trim()).filter(Boolean),
          img: tour.image,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token") || ""}` },
        }
      );

      alert("Tour updated (if backend available).");
      // optionally navigate back to manage tours
      navigate("/admin/manage-tours");
    } catch (err) {
      // If backend not present or returns error, show message but keep UI usable
      console.error("Update error:", err);
      setError(err.response?.data?.message || "Failed to update tour (or backend not available).");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#030617] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="mb-2 animate-pulse">Loading tour data...</div>
          <div className="text-gray-400 text-sm">Fetching tour #{id} (or using demo)</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030617] text-white px-6 py-10">
      <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl">
        <div className="flex items-center gap-6 mb-6">
          <img
            src={tour.image || placeholderImage}
            alt={tour.title}
            className="w-28 h-20 rounded-lg object-cover shadow-lg ring-1 ring-white/10"
          />
          <div>
            <h2 className="text-2xl font-extrabold">{tour.title}</h2>
            <p className="text-gray-300 text-sm">{tour.country} • {tour.duration} days</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-300">Title</label>
              <input
                name="title"
                value={tour.title}
                onChange={handleChange}
                className="w-full mt-2 p-3 rounded-xl bg-white/10 border border-white/20 outline-none focus:border-[#00F2FE]"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Country</label>
              <input
                name="country"
                value={tour.country}
                onChange={handleChange}
                className="w-full mt-2 p-3 rounded-xl bg-white/10 border border-white/20 outline-none focus:border-[#00F2FE]"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Price (₹)</label>
              <input
                name="price"
                type="number"
                value={tour.price}
                onChange={handleChange}
                className="w-full mt-2 p-3 rounded-xl bg-white/10 border border-white/20 outline-none focus:border-[#00F2FE]"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Duration (days)</label>
              <input
                name="duration"
                type="number"
                value={tour.duration}
                onChange={handleChange}
                className="w-full mt-2 p-3 rounded-xl bg-white/10 border border-white/20 outline-none focus:border-[#00F2FE]"
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-300">Description</label>
            <textarea
              name="description"
              value={tour.description}
              onChange={handleChange}
              rows="4"
              className="w-full mt-2 p-3 rounded-xl bg-white/10 border border-white/20 outline-none focus:border-[#00F2FE]"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Highlights (comma separated)</label>
            <input
              name="highlights"
              value={tour.highlights}
              onChange={handleChange}
              className="w-full mt-2 p-3 rounded-xl bg-white/10 border border-white/20 outline-none focus:border-[#00F2FE]"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Image URL</label>
            <input
              name="image"
              value={tour.image}
              onChange={handleChange}
              className="w-full mt-2 p-3 rounded-xl bg-white/10 border border-white/20 outline-none focus:border-[#00F2FE]"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {error && <div className="text-red-400">{error}</div>}

          <div className="flex gap-4 items-center">
            <button
              type="submit"
              disabled={saving}
              className="py-3 px-6 rounded-full bg-gradient-to-r from-[#00F2FE] to-[#7C4CFF] text-black font-semibold hover:opacity-90 transition"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>

            <button
              type="button"
              onClick={() => navigate("/admin/manage-tours")}
              className="py-3 px-5 rounded-full border border-white/10 hover:bg-white/5 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
