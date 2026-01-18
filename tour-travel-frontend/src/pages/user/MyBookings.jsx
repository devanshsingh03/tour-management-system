// src/pages/user/MyBookings.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../config";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadBookings = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/bookings/my-bookings`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setBookings(res.data.bookings || []);
    } catch (err) {
      console.error("Failed to fetch bookings:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBookings();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#010414] text-white flex items-center justify-center">
        Loading your bookings...
      </div>
    );
  }
  const statusStyles = {
  confirmed: "bg-green-600/20 text-green-400",
  pending: "bg-yellow-600/20 text-yellow-400",
  cancelled: "bg-red-600/20 text-red-400",
};



  return (
    <div className="min-h-screen bg-[#010414] text-white p-10">
      <h1 className="text-3xl font-bold mb-6">My Bookings</h1>

      {bookings.length === 0 ? (
        <p className="text-gray-400">You have no bookings yet.</p>
      ) : (
        <div className="space-y-6">
          {bookings.map((b) => (
           
           <div
            

              key={b._id}
              className="bg-white/5 p-6 rounded-xl border border-white/10"
            >
              <h2 className="text-xl font-bold">
                {b.tour?.title || "Tour"}
              </h2>

              <p className="text-gray-300 mt-2">
                Price: ₹{b.amount} | Travelers: {b.travelers || 1}
              </p>

              <p className="text-gray-400 mt-1">
                Booking Date:{" "}
                {b.createdAt ? b.createdAt.split("T")[0] : "—"}
              </p>

              <p className="mt-2">
                Status:{" "}
                <span
  className={`px-3 py-1 rounded-full text-sm font-medium ${
    statusStyles[b.status?.toLowerCase()] || "bg-gray-600/20 text-gray-400"
  }`}
>
  {b.status.charAt(0).toUpperCase() + b.status.slice(1)}
</span>

              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
