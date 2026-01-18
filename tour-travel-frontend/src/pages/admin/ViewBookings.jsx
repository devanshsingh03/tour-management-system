// src/pages/admin/ViewBookings.jsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { BASE_URL } from "../../config";

export default function ViewBookings() {
  const [filter, setFilter] = useState("All");
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
    loadBookings();
  }, []);

  const handleStatusChange = async (bookingId, newStatus) => {
  try {
    const token = localStorage.getItem("token");

    await axios.put(
      `${BASE_URL}/bookings/${bookingId}/status`,
      { status: newStatus },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // Update UI immediately
    setBookings((prev) =>
      prev.map((b) =>
        b._id === bookingId ? { ...b, status: newStatus } : b
      )
    );
  } catch (err) {
    alert("Failed to update booking status");
  }
};


  const loadBookings = async () => {
    try {
      setLoading(true);

      const res = await axios.get(`${BASE_URL}/bookings/all`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      setBookings(res.data.bookings || []);
    } catch (err) {
      console.error("Booking load error:", err);
    } finally {
      setLoading(false);
    }
  };

  const filteredBookings =
    filter === "All"
      ? bookings
      : bookings.filter((b) => b.status === filter);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#030617] text-white flex items-center justify-center">
        Loading bookings...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030617] text-white p-10">
      {/* Header */}
      <h1
        data-aos="fade-up"
        className="text-3xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FE] to-[#7C4CFF]"
      >
        View All Bookings
      </h1>

      {/* Filter Buttons */}
      <div data-aos="fade-up" className="flex gap-3 mb-6 flex-wrap">
        {["All", "Confirmed", "Pending", "Cancelled"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-4 py-2 rounded-full border transition ${
              filter === item
                ? "bg-gradient-to-r from-[#00F2FE] to-[#7C4CFF] text-black font-semibold"
                : "border-white/20 hover:bg-white/10"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Bookings Table */}
      <div
        data-aos="fade-up"
        className="overflow-x-auto bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl shadow-xl"
      >
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-white/10 text-gray-300 text-sm">
              <th className="p-4">User</th>
              <th className="p-4">Tour</th>
              <th className="p-4">Date</th>
              <th className="p-4">Travelers</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredBookings.map((b, index) => (
              <tr
                key={b._id}
                className={`border-b border-white/10 ${
                  index % 2 === 0 ? "bg-white/5" : ""
                }`}
              >
                
                <td className="p-4">{b.user?.name || "Unknown User"}</td>
                <td className="p-4">{b.tour?.title || "Unknown Tour"}</td>

                <td className="p-4">
                  {b.createdAt ? b.createdAt.split("T")[0] : "--"}
                </td>
                <td className="p-4">{b.travelers || 1}</td>
                <td className="p-4 text-blue-300">
                  ₹{(b.amount || 0).toLocaleString()}
                </td>

                {/* Status */}
                {/* <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      b.status === "confirmed"
                        ? "bg-green-600/20 text-green-300"
                        : b.status === "pending"
                        ? "bg-yellow-600/20 text-yellow-300"
                        : "bg-red-600/20 text-red-300"
                    }`}
                  >
                    {b.status.charAt(0).toUpperCase() + b.status.slice(1)}
                  </span>
                </td> */}
                <td className="p-4">
  <select
    value={b.status}
    onChange={(e) => handleStatusChange(b._id, e.target.value)}
    className={`px-3 py-1 rounded-full text-sm bg-transparent outline-none cursor-pointer ${
      b.status === "confirmed"
        ? "bg-green-600/20 text-green-300"
        : b.status === "pending"
        ? "bg-yellow-600/20 text-yellow-300"
        : "bg-red-600/20 text-red-300"
    }`}
  >
    <option value="pending" className="text-black">
      Pending
    </option>
    <option value="confirmed" className="text-black">
      Confirmed
    </option>
    <option value="cancelled" className="text-black">
      Cancelled
    </option>
  </select>
</td>

              </tr>
            ))}
          </tbody>
        </table>

        {filteredBookings.length === 0 && (
          <div className="text-center text-gray-400 py-6">
            No bookings found for "{filter}".
          </div>
        )}
      </div>
    </div>
  );
}
