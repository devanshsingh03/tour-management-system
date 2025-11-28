// src/pages/PaymentSuccess.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PaymentSuccess() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center px-6">
      <div
        data-aos="zoom-in"
        className="max-w-lg w-full bg-white/5 border border-white/10 rounded-2xl p-10 shadow-xl backdrop-blur-xl text-center"
      >
        <div className="text-green-400 text-6xl mb-4 animate-pulse">✓</div>

        <h1 className="text-3xl font-extrabold mb-2">
          Payment <span className="text-green-400">Successful!</span>
        </h1>

        <p className="text-gray-300 mb-6">
          Your booking has been confirmed.  
          You will receive an email shortly with all the details.
        </p>

        <div className="mt-8 flex flex-col gap-4">
          <Link
            to="/my-bookings"
            className="py-3 rounded-full bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black font-semibold"
          >
            View My Bookings
          </Link>

          <Link
            to="/"
            className="py-3 rounded-full border border-white/10 hover:bg-white/5 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
