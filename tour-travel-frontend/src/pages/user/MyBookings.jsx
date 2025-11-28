import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";


export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
  AOS.init({ duration: 900, once: true });

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("token");

      // IMPORTANT: Send token correctly
      const res = await axios.get(
        "http://localhost:5000/api/bookings/my-bookings",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBookings(res.data);
    } catch (err) {
      console.log("API Error:", err.response?.data || err);
    }
  };

  fetchBookings();
}, []);


  return (
    <div className="min-h-screen bg-[#010414] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1
          data-aos="fade-up"
          className="text-4xl font-extrabold text-center mb-10"
        >
          My <span className="text-blue-400">Bookings</span>
        </h1>

        {/* Booking Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {bookings.map((b, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={b.image}
                alt={b.tourName}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold text-blue-300">
                  {b.tourName}
                </h2>

                <p className="text-gray-300 mt-2">
                  <strong>Date:</strong> {b.date}
                </p>
                <p className="text-gray-300">
                  <strong>Travelers:</strong> {b.travelers}
                </p>
                <p className="text-gray-300">
                  <strong>Price:</strong> ₹{b.price}
                </p>

                <div className="mt-4">
                  <span
                    className={`px-4 py-1 text-sm rounded-full ${
                      b.status === "Confirmed"
                        ? "bg-green-500/20 text-green-300 border border-green-500/30"
                        : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                    }`}
                  >
                    {b.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {bookings.length === 0 && (
          <p className="text-center text-gray-400 mt-6 text-lg">
            You have no bookings yet.
          </p>
        )}
      </div>
    </div>
  );
}
