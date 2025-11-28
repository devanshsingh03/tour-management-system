// src/pages/Payment.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Payment() {
  const { id } = useParams();  // booking or tour id
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState(0);

  const [card, setCard] = useState({
    number: "",
    expiry: "",
    cvv: "",
    name: ""
  });

  useEffect(() => {
    AOS.init({ duration: 900, once: true });

    // normally you fetch from backend:
    // GET /api/payments/booking/:id
    // here: frontend dummy
    setTimeout(() => {
      setAmount(34999);   // demo amount
      setLoading(false);
    }, 600);
  }, []);

  const handleChange = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };

  const handlePayment = () => {
    if (!card.number || !card.expiry || !card.cvv || !card.name) {
      alert("Fill all card details!");
      return;
    }

    alert("Payment success demo (frontend only)");
    navigate("/payment-success");
  };

  if (loading)
    return (
      <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center">
        <div className="text-gray-300 animate-pulse">Loading payment...</div>
      </div>
    );

  return (
    <div className="min-h-screen bg-[#020617] text-white px-6 py-12">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">

        {/* Left — Order Details */}
        <div
          data-aos="fade-right"
          className="bg-white/5 rounded-2xl border border-white/10 p-6 backdrop-blur-xl shadow-xl"
        >
          <h2 className="text-2xl font-bold mb-4">
            Payment <span className="text-blue-400">Summary</span>
          </h2>

          <div className="text-gray-300">
            <p className="mb-1">Booking ID: {id}</p>
            <p className="mb-1">Tour: Bali Adventure</p>
            <p className="mb-1">Travelers: 2</p>
            <p className="mb-1">Date: 15 Dec 2025</p>
          </div>

          <div className="mt-6 p-4 bg-black/40 rounded-xl border border-white/10">
            <div className="flex justify-between text-gray-300">
              <span>Amount</span>
              <span>₹{amount.toLocaleString()}</span>
            </div>

            <div className="flex justify-between text-gray-300 mt-2">
              <span>Taxes & Fees</span>
              <span>₹1,000</span>
            </div>

            <div className="flex justify-between mt-4 text-xl">
              <span className="font-bold">Total</span>
              <span className="font-extrabold text-blue-300">
                ₹{(amount + 1000).toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Right — Card Form */}
        <div
          data-aos="fade-left"
          className="bg-white/5 rounded-2xl border border-white/10 p-6 backdrop-blur-xl shadow-xl"
        >
          <h2 className="text-2xl font-bold mb-4">
            Enter <span className="text-blue-400">Card Details</span>
          </h2>

          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-300">Card Holder Name</label>
              <input
                type="text"
                name="name"
                value={card.name}
                onChange={handleChange}
                className="w-full mt-2 p-3 rounded-lg bg-white/10 border border-white/20 outline-none 
                           focus:border-[#00F2FE]"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Card Number</label>
              <input
                type="text"
                name="number"
                value={card.number}
                onChange={handleChange}
                maxLength="16"
                className="w-full mt-2 p-3 rounded-lg bg-white/10 border border-white/20 outline-none 
                           focus:border-[#00F2FE]"
                placeholder="1234 5678 9012 3456"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-300">Expiry</label>
                <input
                  type="text"
                  name="expiry"
                  value={card.expiry}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  className="w-full mt-2 p-3 rounded-lg bg-white/10 border border-white/20 outline-none 
                             focus:border-[#00F2FE]"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300">CVV</label>
                <input
                  type="password"
                  name="cvv"
                  maxLength="4"
                  value={card.cvv}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 rounded-lg bg-white/10 border border-white/20 outline-none 
                             focus:border-[#00F2FE]"
                  placeholder="123"
                />
              </div>
            </div>

            {/* Pay Button */}
            <button
              onClick={handlePayment}
              className="w-full mt-4 py-3 rounded-full bg-gradient-to-r 
                         from-[#00F2FE] to-[#4FACFE] text-black font-bold 
                         text-lg hover:opacity-90 transition"
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
