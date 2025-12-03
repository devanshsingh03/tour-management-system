// src/pages/SingleTour.jsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../config";

export default function SingleTour() {
  const { id } = useParams();       // MongoDB _id from route /tour/:id
  const navigate = useNavigate();

  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
    window.scrollTo(0, 0);
    fetchTour();
  }, [id]);

  const fetchTour = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.get(`${BASE_URL}/tours/${id}`);
      setTour(res.data.tour);
    } catch (err) {
      console.error("Error fetching tour:", err);
      setError("Failed to load tour");
    } finally {
      setLoading(false);
    }
  };

  const handleBooking = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first to book a tour.");
      return navigate("/login");
    }

    try {
      setBookingLoading(true);
      setError("");

      await axios.post(
        `${BASE_URL}/bookings/create`,
        {
          tourId: tour._id,
          travelers: 1,
          amount: tour.price,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Booking successful!");
      navigate("/user/my-bookings");
    } catch (err) {
      console.error("Booking error:", err);
      setError(
        err?.response?.data?.message || "Failed to create booking. Try again."
      );
    } finally {
      setBookingLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#010414] text-white flex items-center justify-center">
        Loading tour...
      </div>
    );
  }

  if (!tour) {
    return (
      <div className="min-h-screen bg-[#010414] text-white flex items-center justify-center">
        <div>
          <h1 className="text-3xl font-bold mb-4">Tour Not Found</h1>
          <button
            onClick={() => navigate("/tours")}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black font-semibold"
          >
            Back to Tours
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#010414] text-white">

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <img
          src={tour.images?.[0]}
          alt={tour.title}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-[#010414]" />

        <div className="relative z-20 max-w-3xl text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            {tour.title}
          </h1>
          <p className="text-gray-300 text-lg mt-4">
            {tour.location} • {tour.duration} days
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Gallery</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {(tour.images || []).map((img, i) => (
            <img
              key={i}
              src={img}
              className="rounded-xl shadow-xl h-64 w-full object-cover hover:scale-[1.03] transition"
              alt={`${tour.title} ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* DETAILS + BOOKING CARD */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* LEFT SIDE */}
        <div className="md:col-span-2">
          {/* OVERVIEW */}
          <h2 className="text-3xl font-bold">Overview</h2>
          <p className="text-gray-300 mt-4 leading-relaxed">
            {tour.description}
          </p>

          {/* HIGHLIGHTS */}
          <h3 className="text-2xl font-semibold mt-12 mb-3">Highlights</h3>
          <div className="space-y-4">
            {(tour.highlights || []).map((h, i) => (
              <div
                key={i}
                className="bg-white/5 p-3 rounded-xl border border-white/10 flex gap-3"
              >
                <span className="text-[#7DF9FF] text-xl">✔</span>
                <span className="text-gray-300">{h}</span>
              </div>
            ))}
          </div>

          {/* ITINERARY */}
          <h3 className="text-2xl font-semibold mt-12 mb-3">Itinerary</h3>
          <div className="space-y-4">
            {(tour.itinerary || []).map((d, i) => (
              <div
                key={i}
                className="p-4 bg-white/5 border border-white/10 rounded-xl"
              >
                <h4 className="text-xl font-bold">{d.day}</h4>
                <p className="text-gray-300">{d.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* BOOKING CARD */}
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 sticky top-10 h-fit">
          <h3 className="text-2xl font-bold">Book This Tour</h3>
          <p className="text-gray-300 mt-2">Reserve your slot today!</p>

          <div className="mt-6">
            <span className="text-4xl font-bold text-[#7DF9FF]">
              ₹{tour.price}
            </span>
            <span className="text-gray-400 ml-1">/person</span>
          </div>

          {error && (
            <p className="text-red-400 mt-3 text-sm">
              {error}
            </p>
          )}

          <button
            onClick={handleBooking}
            disabled={bookingLoading}
            className="mt-6 w-full py-3 rounded-full bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black font-semibold disabled:opacity-60"
          >
            {bookingLoading ? "Booking..." : "Book Now"}
          </button>
        </div>
      </section>
    </div>
  );
}
