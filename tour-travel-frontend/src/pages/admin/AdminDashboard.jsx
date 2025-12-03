// src/pages/admin/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaGlobeAmericas,
  FaUserFriends,
  FaReceipt,
  FaPassport,
  FaPlus,
  FaList,
} from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../config";

const placeholderImage = "/admin.png";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const [stats, setStats] = useState({
    tours: 0,
    users: 0,
    bookings: 0,
    revenue: 0,
  });

  const [recentBookings, setRecentBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Verify admin login
  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const role = localStorage.getItem("role");
    const token = localStorage.getItem("token");

    if (!token || role !== "admin") {
      navigate("/admin/login");
    }

    loadDashboard();
  }, []);

  // Load stats + recent bookings from backend
  const loadDashboard = async () => {
    try {
      setLoading(true);

      const res1 = await axios.get(`${BASE_URL}/admin/stats`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      const res2 = await axios.get(`${BASE_URL}/admin/recent-bookings`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      setStats(res1.data);
      setRecentBookings(res2.data.bookings || []);
    } catch (err) {
      console.log("Dashboard error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/admin/login");
  };

  const isActive = (route) =>
    location.pathname === route ? "bg-white/10" : "hover:bg-white/5";

  if (loading) {
    return (
      <div className="min-h-screen bg-[#030617] text-white flex items-center justify-center">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030617] text-white">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-72 min-h-screen p-6 bg-[#050712]/40 border-r border-white/5 backdrop-blur-xl">
          <div className="mb-8 flex items-center gap-3">
            <img
              src={placeholderImage}
              alt="logo"
              className="w-12 h-12 rounded-lg object-cover shadow-lg ring-1 ring-white/10"
            />
            <div>
              <h3 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FE] to-[#7C4CFF]">
                TourX Admin
              </h3>
              <p className="text-sm text-gray-300">Administrator</p>
            </div>
          </div>

          <nav className="space-y-2">
            <button className={`w-full px-4 py-3 rounded-lg flex items-center gap-3 ${isActive("/admin/dashboard")}`}>
              <FaGlobeAmericas className="text-xl text-[#00F2FE]" />
              Dashboard
            </button>

            <button
              onClick={() => navigate("/admin/add-tour")}
              className={`w-full px-4 py-3 rounded-lg flex items-center gap-3 ${isActive("/admin/add-tour")}`}
            >
              <FaPlus className="text-xl text-[#4FACFE]" />
              Add Tour
            </button>

            <button
              onClick={() => navigate("/admin/manage-tours")}
              className={`w-full px-4 py-3 rounded-lg flex items-center gap-3 ${isActive("/admin/manage-tours")}`}
            >
              <FaList className="text-xl text-[#7C4CFF]" />
              Manage Tours
            </button>

            <button
              onClick={() => navigate("/admin/view-bookings")}
              className={`w-full px-4 py-3 rounded-lg flex items-center gap-3 ${isActive("/admin/view-bookings")}`}
            >
              <FaReceipt className="text-xl text-[#00F2FE]" />
              View Bookings
            </button>

            <button
              onClick={handleLogout}
              className="w-full px-4 py-3 rounded-lg hover:bg-red-600/20 transition mt-6"
            >
              Logout
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-10">
          <header className="flex items-center justify-between">
            <h1 className="text-3xl font-extrabold">Admin Dashboard</h1>
            <img
              src={placeholderImage}
              alt="admin"
              className="w-12 h-12 rounded-full ring-2 ring-white/10"
            />
          </header>

          {/* Stats Cards */}
          <section className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Total Tours */}
            <StatCard label="Total Tours" value={stats.tours} icon={<FaPassport />} color="#00F2FE" />

            {/* Users */}
            <StatCard label="Total Users" value={stats.users} icon={<FaUserFriends />} color="#4CDC84" />

            {/* Bookings */}
            <StatCard label="Total Bookings" value={stats.bookings} icon={<FaReceipt />} color="#FFD93D" />

            {/* Revenue */}
            <StatCard
              label="Total Revenue"
              value={"₹" + ((stats.revenue || 0).toLocaleString())}
              icon={<FaGlobeAmericas />}
              color="#C084FC"
            />
          </section>

          {/* Recent Bookings */}
          <section className="mt-10 bg-white/5 border border-white/10 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4">Recent Bookings</h3>

            {recentBookings.length === 0 ? (
              <p className="text-gray-400">No bookings available</p>
            ) : (
              <table className="w-full text-left">
                <thead>
                  <tr className="text-sm text-gray-400 border-b border-white/10">
                    <th className="py-2">User</th>
                    <th className="py-2">Tour</th>
                    <th className="py-2">Amount</th>
                    <th className="py-2">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentBookings.map((b, i) => (
                    <tr key={i} className="border-b border-white/10">
                      <td className="py-3">{b.userId?.name || "User"}</td>
                      <td className="py-3">{b.tourId?.title || "Tour"}</td>
                      <td className="py-3">₹{b.amount}</td>
                      <td className="py-3">{b.createdAt?.split("T")[0]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}

// Stat card component
function StatCard({ label, value, icon, color }) {
  return (
    <div className="p-6 rounded-2xl bg-[#021027]/50 border border-white/10 shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-300 text-sm">{label}</p>
          <h2 className="text-3xl font-extrabold" style={{ color }}>
            {value}
          </h2>
        </div>
        <div className="text-2xl" style={{ color }}>
          {icon}
        </div>
      </div>
    </div>
  );
}
