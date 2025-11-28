// src/pages/admin/ViewBookings.jsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ViewBookings() {
  const [filter, setFilter] = useState("All");
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 900, once: true });

    // Dummy bookings (replace with API later)
    setBookings([
      {
        id: "BKG-1001",
        user: "Anita Sharma",
        tour: "Swiss Alps Escape",
        date: "2025-12-20",
        travelers: 2,
        amount: 45000,
        status: "Confirmed",
      },
      {
        id: "BKG-1002",
        user: "Rohan Mehta",
        tour: "Dubai Desert Safari",
        date: "2025-11-05",
        travelers: 4,
        amount: 78000,
        status: "Pending",
      },
      {
        id: "BKG-1003",
        user: "Priya Singh",
        tour: "Bali Adventure",
        date: "2025-10-14",
        travelers: 1,
        amount: 22000,
        status: "Cancelled",
      },
      {
        id: "BKG-1004",
        user: "Karan Patel",
        tour: "Manali Snow Tour",
        date: "2025-12-01",
        travelers: 3,
        amount: 33000,
        status: "Confirmed",
      },
    ]);
  }, []);

  const filteredBookings =
    filter === "All"
      ? bookings
      : bookings.filter((b) => b.status === filter);

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
      <div
        data-aos="fade-up"
        className="flex gap-3 mb-6 flex-wrap"
      >
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
              <th className="p-4">Booking ID</th>
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
                key={b.id}
                className={`border-b border-white/10 ${
                  index % 2 === 0 ? "bg-white/5" : ""
                }`}
              >
                <td className="p-4">{b.id}</td>
                <td className="p-4">{b.user}</td>
                <td className="p-4">{b.tour}</td>
                <td className="p-4">{b.date}</td>
                <td className="p-4">{b.travelers}</td>
                <td className="p-4 text-blue-300">
                  ₹{b.amount.toLocaleString()}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      b.status === "Confirmed"
                        ? "bg-green-600/20 text-green-300"
                        : b.status === "Pending"
                        ? "bg-yellow-600/20 text-yellow-300"
                        : "bg-red-600/20 text-red-300"
                    }`}
                  >
                    {b.status}
                  </span>
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
