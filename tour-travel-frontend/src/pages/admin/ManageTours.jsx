import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ManageTours() {
  const navigate = useNavigate();

  const [tours, setTours] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 900, once: true });

    // Dummy data - backend later
    setTours([
      {
        id: 1,
        title: "Bali Adventure",
        country: "Indonesia",
        price: 55000,
        duration: 7,
        image:
          "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80",
      },
      {
        id: 2,
        title: "Swiss Alps Escape",
        country: "Switzerland",
        price: 120000,
        duration: 5,
        image:
          "https://images.unsplash.com/photo-1500048993959-d1a9035a6e56?q=80",
      },
      {
        id: 3,
        title: "Dubai Desert Safari",
        country: "UAE",
        price: 45000,
        duration: 3,
        image:
          "https://images.unsplash.com/photo-1534278931828-2e38d9d5f52b?q=80",
      },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-[#030617] text-white p-10">
      <h1
        data-aos="fade-up"
        className="text-3xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FE] to-[#7C4CFF]"
      >
        Manage Tours
      </h1>

      {/* Table Wrapper */}
      <div
        data-aos="fade-up"
        className="overflow-x-auto bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl shadow-xl"
      >
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-white/10 text-gray-300 text-sm">
              <th className="p-4">Image</th>
              <th className="p-4">Title</th>
              <th className="p-4">Country</th>
              <th className="p-4">Price</th>
              <th className="p-4">Duration</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {tours.map((tour, index) => (
              <tr
                key={tour.id}
                className={`border-b border-white/10 ${
                  index % 2 === 0 ? "bg-white/5" : ""
                }`}
              >
                {/* Image */}
                <td className="p-4">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-20 h-16 rounded-lg object-cover shadow-md"
                  />
                </td>

                <td className="p-4 font-semibold">{tour.title}</td>

                <td className="p-4 text-gray-300">{tour.country}</td>

                <td className="p-4 text-blue-300">
                  ₹{tour.price.toLocaleString()}
                </td>

                <td className="p-4 text-purple-300">{tour.duration} days</td>

                {/* Actions */}
                <td className="p-4 flex justify-center gap-4">
                  <button
                    onClick={() => navigate(`/admin/edit-tour/${tour.id}`)}
                    className="px-4 py-2 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-300 hover:bg-blue-600/30 transition flex items-center gap-2"
                  >
                    <FaEdit />
                    Edit
                  </button>

                  <button
                    className="px-4 py-2 rounded-lg bg-red-600/20 border border-red-500/40 text-red-300 hover:bg-red-600/30 transition flex items-center gap-2"
                  >
                    <FaTrash />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {tours.length === 0 && (
          <div className="text-center text-gray-400 py-6">
            No tours found.
          </div>
        )}
      </div>
    </div>
  );
}
