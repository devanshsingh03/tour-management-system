// src/pages/PaymentFailed.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PaymentFailed() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center px-6">
      <div
        data-aos="zoom-in"
        className="max-w-lg w-full bg-white/5 border border-white/10 rounded-2xl p-10 shadow-xl backdrop-blur-xl text-center"
      >
        <div className="text-red-400 text-6xl mb-4 animate-bounce">✕</div>

        <h1 className="text-3xl font-extrabold mb-2">
          Payment <span className="text-red-400">Failed!</span>
        </h1>

        <p className="text-gray-300 mb-6">
          Something went wrong while processing your payment.  
          Your card was NOT charged.
        </p>

        <div className="mt-8 flex flex-col gap-4">
          <Link
            to="/payment-retry"
            className="py-3 rounded-full bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black font-semibold"
          >
            Try Again
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
