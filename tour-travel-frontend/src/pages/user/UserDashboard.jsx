import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function UserDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    // Get user from localStorage (JWT-based login)
    const savedUser = localStorage.getItem("user");
    if (!savedUser) {
      navigate("/login");
      return;
    }

    setUser(JSON.parse(savedUser));
  }, []);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#010414] text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* Welcome Header */}
        <div
          data-aos="fade-up"
          className="bg-white/10 border border-white/20 rounded-2xl p-8 backdrop-blur-xl shadow-xl"
        >
          <h1 className="text-3xl font-bold">Welcome, <span className="text-blue-400">{user.name}</span> 👋</h1>
          <p className="text-gray-300 mt-2">Here’s your travel dashboard.</p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div
            data-aos="fade-up"
            className="p-6 bg-white/10 border border-white/10 rounded-xl hover:bg-white/20 transition cursor-pointer"
            onClick={() => navigate("/dashboard")}
          >
            <h2 className="text-xl font-semibold">View Profile</h2>
            <p className="text-gray-300 mt-2">See your personal details.</p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="p-6 bg-white/10 border border-white/10 rounded-xl hover:bg-white/20 transition cursor-pointer"
            onClick={() => navigate("/my-bookings")}
          >
            <h2 className="text-xl font-semibold">My Bookings</h2>
            <p className="text-gray-300 mt-2">View your tour bookings.</p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="250"
            className="p-6 bg-white/10 border border-white/10 rounded-xl hover:bg-white/20 transition cursor-pointer"
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("user");
              navigate("/login");
            }}
          >
            <h2 className="text-xl font-semibold">Logout</h2>
            <p className="text-gray-300 mt-2">Exit your account safely.</p>
          </div>

        </div>

        {/* Stats Section */}
        <div
          data-aos="fade-up"
          data-aos-delay="350"
          className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl p-8 mt-12"
        >
          <h2 className="text-2xl font-bold">Your Travel Stats</h2>

          <div className="grid md:grid-cols-3 gap-6 mt-6">

            <div className="text-center p-6 bg-black/40 border border-white/10 rounded-xl">
              <h3 className="text-4xl font-extrabold text-blue-400">0</h3>
              <p className="text-gray-300 mt-2">Bookings</p>
            </div>

            <div className="text-center p-6 bg-black/40 border border-white/10 rounded-xl">
              <h3 className="text-4xl font-extrabold text-green-400">0</h3>
              <p className="text-gray-300 mt-2">Upcoming Trips</p>
            </div>

            <div className="text-center p-6 bg-black/40 border border-white/10 rounded-xl">
              <h3 className="text-4xl font-extrabold text-purple-400">0</h3>
              <p className="text-gray-300 mt-2">Completed</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
