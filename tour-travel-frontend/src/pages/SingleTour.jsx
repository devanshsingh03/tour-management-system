// src/pages/SingleTour.jsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../config";

export default function SingleTour() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ NEW STATES (SAFE)
  const [travelers, setTravelers] = useState(1);
  const [travelDate, setTravelDate] = useState("");

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
      setTour(res.data);
    } catch (err) {
      console.error("Error fetching tour:", err);
      setError("Failed to load tour");
    } finally {
      setLoading(false);
    }
  };

//   const handleBooking = async () => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       alert("Please login first to book a tour.");
//       return navigate("/login");
//     }

//     if (!travelDate) {
//       return setError("Please select a travel date");
//     }

//     try {
//       setBookingLoading(true);
//       setError("");

      

//       const res = await axios.post(
//   `${BASE_URL}/bookings/create`,
//   {
//     tourId:tour._id,
//     travelers: travelers,
//     dateOfTravel: travelDate, 
//   },
//   {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   }
// );



//       alert("Booking successful!");
//       navigate("/my-bookings");
//     } catch (err) {
//       console.error("Booking error:", err);
//       setError(
//         err?.response?.data?.message || "Failed to create booking. Try again."
//       );
//     } finally {
//       setBookingLoading(false);
//     }
//   };

      const handleBooking = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Please login first to book a tour.");
    return navigate("/login");
  }

  if (!travelDate) {
    return setError("Please select a travel date");
  }

  try {
    setBookingLoading(true);
    setError("");

    // 1️⃣ CREATE BOOKING (paymentStatus = pending)
    const bookingRes = await axios.post(
      `${BASE_URL}/bookings/create`,
      {
        tourId: tour._id,
        travelers: travelers,
        dateOfTravel: travelDate,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const bookingId = bookingRes.data.booking._id;

    // 2️⃣ CREATE PAYMENT ORDER
    const paymentRes = await axios.post(
      `${BASE_URL}/payments/create-order`,
      { bookingId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // 3️⃣ OPEN RAZORPAY
    const options = {
      key: paymentRes.data.key,
      amount: paymentRes.data.amount,
      currency: paymentRes.data.currency,
      name: "Tour Booking",
      description: "Complete your booking payment",
      order_id: paymentRes.data.orderId,

      handler: async function (response) {
        // 4️⃣ VERIFY PAYMENT
        await axios.post(
          `${BASE_URL}/payments/verify`,
          {
            ...response,
            bookingId,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        alert("Booking & Payment Successful!");
        navigate("/payment-success");
      },

      theme: {
        color: "#2563eb",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (err) {
    console.error("Booking/Payment error:", err);
    setError(
      err?.response?.data?.message ||
        "Failed to complete booking. Try again."
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
        <h1 className="text-3xl font-bold">Tour Not Found</h1>
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
        <div className="relative z-20 text-center">
          <h1 className="text-5xl font-extrabold">{tour.title}</h1>
          <p className="text-gray-300 mt-3">
            {tour.location} • {tour.duration} days
          </p>
        </div>
      </section>

      {/* DETAILS + BOOKING */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold">Overview</h2>
          <p className="text-gray-300 mt-4">{tour.description}</p>
        </div>

        {/* BOOKING CARD */}
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 sticky top-10">
          <h3 className="text-2xl font-bold">Book This Tour</h3>

          {/* DATE */}
          <div className="mt-4">
            <label className="text-gray-300 text-sm">Travel Date</label>
            <input
              type="date"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
              className="w-full mt-1 p-2 rounded bg-black/30 border border-white/20"
            />
          </div>

          {/* PASSENGERS */}
          <div className="mt-4">
            <label className="text-gray-300 text-sm">Passengers</label>
            <input
              type="number"
              min="1"
              value={travelers}
              onChange={(e) => setTravelers(Number(e.target.value))}
              className="w-full mt-1 p-2 rounded bg-black/30 border border-white/20"
            />
          </div>

          <div className="mt-4 text-xl">
            Total: ₹{tour.price * travelers}
          </div>

          {error && <p className="text-red-400 mt-2">{error}</p>}

          <button
            onClick={handleBooking}
            disabled={bookingLoading}
            className="mt-6 w-full py-3 rounded-full bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black font-semibold"
          >
            {bookingLoading ? "Processing..." : "Book And Pay"}
          </button>
        </div>
      </section>
    </div>
  );
}
