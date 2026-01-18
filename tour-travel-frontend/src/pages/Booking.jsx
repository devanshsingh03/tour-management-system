import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { BASE_URL } from "../config";

export default function Booking() {
  const { id: tourId } = useParams();
  const navigate = useNavigate();

  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // ✅ SINGLE source of truth
  const [form, setForm] = useState({
    travelers: 1,
    date: "",
    phone: "",
    notes: "",
  });

  /* ------------------ LOAD TOUR ------------------ */
  useEffect(() => {
    AOS.init({ duration: 700, once: true });

    const loadTour = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/tours/${tourId}`);
        setTour(res.data);
      } catch (err) {
        alert("Tour not found");
        navigate("/tours");
      } finally {
        setLoading(false);
      }
    };

    loadTour();
  }, [tourId, navigate]);

  /* ------------------ HANDLERS ------------------ */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "travelers" ? Number(value) : value,
    }));
  };

  const totalAmount = () => {
    if (!tour) return 0;
    return Number(form.travelers) * Number(tour.price);
  };

  /* ------------------ SUBMIT BOOKING ------------------ */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.date) {
      alert("Please select travel date");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login to continue booking");
      navigate("/login");
      return;
    }

    setSubmitting(true);

    try {
      const res = await axios.post(
        `${BASE_URL}/bookings/create`,
        {
          tourId,
          travelers: form.travelers,
          dateOfTravel: form.date,          // ✅ travel date
          // phone: form.phone,        // ✅ send phone
          // notes: form.notes,
          // amount: totalAmount(),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // ✅ redirect to payment page
      navigate(`/payment/${res.data.booking._id}`);
    } catch (err) {
      console.error("Booking error:", err);
      alert(err.response?.data?.message || "Booking failed");
    } finally {
      setSubmitting(false);
    }
  };

  /* ------------------ LOADING ------------------ */
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#010414] text-white">
        Loading booking page...
      </div>
    );
  }

  /* ------------------ UI ------------------ */
  return (
    <div className="min-h-screen bg-[#010414] text-white px-6 py-10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

        {/* TOUR INFO */}
        <div data-aos="fade-right" className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <img
            src={tour.images?.[0] || "/placeholder.png"}
            alt={tour.title}
            className="w-full h-64 object-cover rounded-xl"
          />

          <h2 className="text-2xl font-bold mt-4">{tour.title}</h2>
          <p className="text-gray-300">{tour.location}</p>

          <div className="mt-4 flex justify-between">
            <div>
              <p className="text-gray-400">Duration</p>
              <p className="font-semibold">{tour.duration} days</p>
            </div>

            <div>
              <p className="text-gray-400">Price / person</p>
              <p className="font-semibold text-blue-300">
                ₹{tour.price.toLocaleString()}
              </p>
            </div>
          </div>

          <p className="mt-4 text-gray-300 text-sm">{tour.description}</p>
        </div>

        {/* BOOKING FORM */}
        <div data-aos="fade-left" className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-4">Booking Details</h3>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* DATE */}
            <div>
              <label className="text-gray-300 text-sm">Travel Date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full mt-2 p-3 rounded-lg bg-white/10 border border-white/20"
                required
              />
            </div>

            {/* TRAVELERS */}
            <div>
              <label className="text-gray-300 text-sm">Number of Travelers</label>
              <input
                type="number"
                min="1"
                name="travelers"
                value={form.travelers}
                onChange={handleChange}
                className="w-full mt-2 p-3 rounded-lg bg-white/10 border border-white/20"
                required
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="text-gray-300 text-sm">Phone (optional)</label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full mt-2 p-3 rounded-lg bg-white/10 border border-white/20"
              />
            </div>

            {/* NOTES */}
            <div>
              <label className="text-gray-300 text-sm">Notes (optional)</label>
              <textarea
                name="notes"
                rows="3"
                value={form.notes}
                onChange={handleChange}
                className="w-full mt-2 p-3 rounded-lg bg-white/10 border border-white/20"
              />
            </div>

            {/* TOTAL */}
            <div className="mt-4 p-4 bg-black/40 rounded-lg border border-white/10">
              <div className="flex justify-between text-gray-300">
                <span>Total Amount</span>
                <span className="text-xl font-bold text-blue-300">
                  ₹{totalAmount().toLocaleString()}
                </span>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 rounded-full bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black font-semibold hover:opacity-90"
            >
              {submitting ? "Processing..." : "Proceed to Payment"}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
