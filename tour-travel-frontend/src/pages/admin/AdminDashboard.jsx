// // src/pages/admin/AdminDashboard.jsx
// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { FaGlobeAmericas, FaUserFriends, FaReceipt, FaPassport, FaPlus, FaList } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// /**
//  * NOTE: placeholderImage uses the local path you uploaded.
//  */
// const placeholderImage = "/mnt/data/Screenshot (1745).png";

// export default function AdminDashboard() {

//   const navigate = useNavigate();  // ✅ FIXED — correctly inside component

//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//   }, []);


//   // demo stats and data (replace with API data later)
//   const [stats, setStats] = useState({
//     tours: 12,
//     users: 234,
//     bookings: 78,
//     revenue: 125000,
//   });

//   const [recentBookings, setRecentBookings] = useState([
//     {
//       id: "BKG-1001",
//       user: "Anita Sharma",
//       tour: "Swiss Alps Escape",
//       date: "2025-12-20",
//       amount: 45000,
//       status: "Confirmed",
//     },
//     {
//       id: "BKG-1002",
//       user: "Rohan Mehta",
//       tour: "Goa Sun & Surf",
//       date: "2025-11-05",
//       amount: 12000,
//       status: "Pending",
//     },
//     {
//       id: "BKG-1003",
//       user: "Priya Singh",
//       tour: "Desert Dunes Dubai",
//       date: "2025-10-14",
//       amount: 22000,
//       status: "Confirmed",
//     },
//   ]);

//   return (
//     <div className="min-h-screen bg-[#030617] text-white">
//       <div className="flex">
//         {/* Sidebar */}
//         <aside className="w-72 min-h-screen p-6 bg-gradient-to-b from-[#050712]/60 to-[#000000]/40 border-r border-white/5 backdrop-blur-lg">
//           <div className="mb-8 flex items-center gap-3">
//             <img src={placeholderImage} alt="logo" className="w-12 h-12 rounded-lg object-cover shadow-lg ring-1 ring-white/10" />
//             <div>
//               <h3 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FE] to-[#7C4CFF]">TourX Admin</h3>
//               <p className="text-sm text-gray-300">Administrator</p>
//             </div>
//           </div>

//           <nav className="space-y-2">
//             <button className="w-full text-left px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition flex items-center gap-3">
//               <FaGlobeAmericas className="text-xl text-[#00F2FE]" />
//               <span>Dashboard</span>
//             </button>

//             <button
//   onClick={() => navigate("/admin/add-tour")}
//   className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/5 transition flex items-center gap-3"
// >
//   <FaPlus className="text-xl text-[#4FACFE]" />
//   <span>Add Tour</span>
// </button>


//             <button
//   onClick={() => navigate("/admin/manage-tours")}
//   className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/5 transition flex items-center gap-3"
// >
//   <FaList className="text-xl text-[#7C4CFF]" />
//   <span>Manage Tours</span>
// </button>


//             <button
//   onClick={() => navigate("/admin/view-bookings")}
//   className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/5 transition flex items-center gap-3"
// >
//   <FaReceipt className="text-xl text-[#00F2FE]" />
//   <span>View Bookings</span>
// </button>


//             <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/5 transition flex items-center gap-3">
//               <FaUserFriends className="text-xl text-[#4FACFE]" />
//               <span>Manage Users</span>
//             </button>

//             <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-red-600/20 mt-4 transition">
//               Logout
//             </button>
//           </nav>

//           <div className="mt-8 p-3 rounded-lg bg-white/3 border border-white/5 text-sm">
//             <div className="text-gray-300">Quick Actions</div>
//             <div className="flex gap-2 mt-3">
//               <button className="flex-1 py-2 rounded-lg bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black font-semibold">New Tour</button>
//               <button className="flex-1 py-2 rounded-lg border border-white/10">Reports</button>
//             </div>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 p-10">
//           <header className="flex items-center justify-between">
//             <div>
//               <h1 className="text-3xl font-extrabold">Admin Dashboard</h1>
//               <p className="text-gray-300 mt-1">Overview of your tours, bookings and revenue</p>
//             </div>

//             <div className="flex items-center gap-4">
//               <div className="text-right">
//                 <div className="text-sm text-gray-400">Welcome back</div>
//                 <div className="font-semibold">Admin</div>
//               </div>
//               <img src={placeholderImage} alt="admin" className="w-12 h-12 rounded-full object-cover ring-2 ring-white/10" />
//             </div>
//           </header>

//           {/* Stats cards */}
//           <section className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
//             <div data-aos="fade-up" className="p-6 rounded-2xl bg-gradient-to-r from-[#021027]/60 to-[#000819]/50 border border-white/6 shadow-lg">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <div className="text-sm text-gray-300">Total Tours</div>
//                   <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FE] to-[#7C4CFF]">{stats.tours}</div>
//                 </div>
//                 <div className="p-3 rounded-lg bg-white/5"><FaPassport className="text-xl text-[#00F2FE]" /></div>
//               </div>
//             </div>

//             <div data-aos="fade-up" data-aos-delay="120" className="p-6 rounded-2xl bg-gradient-to-r from-[#021027]/60 to-[#000819]/50 border border-white/6 shadow-lg">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <div className="text-sm text-gray-300">Total Users</div>
//                   <div className="text-3xl font-extrabold text-green-300">{stats.users}</div>
//                 </div>
//                 <div className="p-3 rounded-lg bg-white/5"><FaUserFriends className="text-xl text-green-300" /></div>
//               </div>
//             </div>

//             <div data-aos="fade-up" data-aos-delay="240" className="p-6 rounded-2xl bg-gradient-to-r from-[#021027]/60 to-[#000819]/50 border border-white/6 shadow-lg">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <div className="text-sm text-gray-300">Total Bookings</div>
//                   <div className="text-3xl font-extrabold text-yellow-300">{stats.bookings}</div>
//                 </div>
//                 <div className="p-3 rounded-lg bg-white/5"><FaReceipt className="text-xl text-yellow-300" /></div>
//               </div>
//             </div>

//             <div data-aos="fade-up" data-aos-delay="360" className="p-6 rounded-2xl bg-gradient-to-r from-[#021027]/60 to-[#000819]/50 border border-white/6 shadow-lg">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <div className="text-sm text-gray-300">Total Revenue</div>
//                   <div className="text-3xl font-extrabold text-purple-300">₹{stats.revenue.toLocaleString()}</div>
//                 </div>
//                 <div className="p-3 rounded-lg bg-white/5"><FaGlobeAmericas className="text-xl text-purple-300" /></div>
//               </div>
//             </div>
//           </section>

//           {/* Content area: recent bookings + quick list */}
//           <section className="mt-10 grid md:grid-cols-3 gap-6">
//             <div data-aos="fade-up" className="md:col-span-2 rounded-2xl bg-white/5 border border-white/10 p-6">
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="text-xl font-semibold">Recent Bookings</h3>
//                 <button className="px-4 py-2 rounded-lg bg-white/6 hover:bg-white/10 transition">View all</button>
//               </div>

//               <table className="w-full text-left">
//                 <thead>
//                   <tr className="text-sm text-gray-400 border-b border-white/6">
//                     <th className="py-3">Booking ID</th>
//                     <th className="py-3">User</th>
//                     <th className="py-3">Tour</th>
//                     <th className="py-3">Date</th>
//                     <th className="py-3">Amount</th>
//                     <th className="py-3">Status</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {recentBookings.map((r, i) => (
//                     <tr key={r.id} className={`border-b border-white/6 ${i % 2 === 0 ? "bg-white/2" : ""}`}>
//                       <td className="py-4">{r.id}</td>
//                       <td className="py-4">{r.user}</td>
//                       <td className="py-4">{r.tour}</td>
//                       <td className="py-4">{r.date}</td>
//                       <td className="py-4">₹{r.amount.toLocaleString()}</td>
//                       <td className="py-4">
//                         <span className={`px-3 py-1 rounded-full text-sm ${r.status === "Confirmed" ? "bg-green-600/20 text-green-300" : "bg-yellow-600/20 text-yellow-300"}`}>
//                           {r.status}
//                         </span>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             <aside data-aos="fade-up" className="rounded-2xl bg-white/5 border border-white/10 p-6">
//               <h4 className="font-semibold text-lg">Quick Insights</h4>
//               <ul className="mt-4 space-y-3 text-gray-300">
//                 <li><strong>Top country:</strong> Switzerland</li>
//                 <li><strong>Busiest month:</strong> December</li>
//                 <li><strong>Avg. booking:</strong> ₹37,500</li>
//               </ul>

//               <div className="mt-6">
//                 <button className="w-full py-3 rounded-lg bg-gradient-to-r from-[#00F2FE] to-[#7C4CFF] text-black font-bold">Export CSV</button>
//               </div>
//             </aside>
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// }


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
import { useNavigate } from "react-router-dom";

const placeholderImage = "/admin.png"; // FIXED

export default function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const role = localStorage.getItem("role");
    const token = localStorage.getItem("token");

    if (!token || role !== "admin") {
      navigate("/admin/login");
    }
  }, []);

  const [stats] = useState({
    tours: 12,
    users: 234,
    bookings: 78,
    revenue: 125000,
  });

  const [recentBookings] = useState([
    {
      id: "BKG-1001",
      user: "Anita Sharma",
      tour: "Swiss Alps Escape",
      date: "2025-12-20",
      amount: 45000,
      status: "Confirmed",
    },
    {
      id: "BKG-1002",
      user: "Rohan Mehta",
      tour: "Goa Sun & Surf",
      date: "2025-11-05",
      amount: 12000,
      status: "Pending",
    },
    {
      id: "BKG-1003",
      user: "Priya Singh",
      tour: "Desert Dunes Dubai",
      date: "2025-10-14",
      amount: 22000,
      status: "Confirmed",
    },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-[#030617] text-white">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-72 min-h-screen p-6 bg-gradient-to-b from-[#050712]/60 to-[#000000]/40 border-r border-white/5 backdrop-blur-lg">
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
            <button className="w-full text-left px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition flex items-center gap-3">
              <FaGlobeAmericas className="text-xl text-[#00F2FE]" />
              <span>Dashboard</span>
            </button>

            <button
              onClick={() => navigate("/admin/add-tour")}
              className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/5 transition flex items-center gap-3"
            >
              <FaPlus className="text-xl text-[#4FACFE]" />
              <span>Add Tour</span>
            </button>

            <button
              onClick={() => navigate("/admin/manage-tours")}
              className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/5 transition flex items-center gap-3"
            >
              <FaList className="text-xl text-[#7C4CFF]" />
              <span>Manage Tours</span>
            </button>

            <button
              onClick={() => navigate("/admin/view-bookings")}
              className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/5 transition flex items-center gap-3"
            >
              <FaReceipt className="text-xl text-[#00F2FE]" />
              <span>View Bookings</span>
            </button>

            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/5 transition flex items-center gap-3">
              <FaUserFriends className="text-xl text-[#4FACFE]" />
              <span>Manage Users</span>
            </button>

            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-3 rounded-lg hover:bg-red-600/20 mt-4 transition"
            >
              Logout
            </button>
          </nav>
        </aside>

        {/* Main */}
        <main className="flex-1 p-10">
          <header className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-extrabold">Admin Dashboard</h1>
              <p className="text-gray-300 mt-1">
                Overview of your tours, bookings and revenue
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-gray-400">Welcome back</div>
                <div className="font-semibold">Admin</div>
              </div>
              <img
                src={placeholderImage}
                alt="admin"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-white/10"
              />
            </div>
          </header>

          {/* Stats */}
          <section className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#021027]/60 to-[#000819]/50 border border-white/6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-300">Total Tours</div>
                  <div className="text-3xl font-extrabold text-[#00F2FE]">
                    {stats.tours}
                  </div>
                </div>
                <FaPassport className="text-2xl text-[#00F2FE]" />
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#021027]/60 to-[#000819]/50 border border-white/6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-300">Total Users</div>
                  <div className="text-3xl font-extrabold text-green-300">
                    {stats.users}
                  </div>
                </div>
                <FaUserFriends className="text-2xl text-green-300" />
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#021027]/60 to-[#000819]/50 border border-white/6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-300">Total Bookings</div>
                  <div className="text-3xl font-extrabold text-yellow-300">
                    {stats.bookings}
                  </div>
                </div>
                <FaReceipt className="text-2xl text-yellow-300" />
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#021027]/60 to-[#000819]/50 border border-white/6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-300">Total Revenue</div>
                  <div className="text-3xl font-extrabold text-purple-300">
                    ₹{stats.revenue.toLocaleString()}
                  </div>
                </div>
                <FaGlobeAmericas className="text-2xl text-purple-300" />
              </div>
            </div>
          </section>

          {/* Recent bookings */}
          <section className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 rounded-2xl bg-white/5 border border-white/10 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Recent Bookings</h3>
                <button className="px-4 py-2 rounded-lg bg-white/6 hover:bg-white/10 transition">
                  View all
                </button>
              </div>

              <table className="w-full text-left">
                <thead>
                  <tr className="text-sm text-gray-400 border-b border-white/6">
                    <th className="py-3">Booking ID</th>
                    <th className="py-3">User</th>
                    <th className="py-3">Tour</th>
                    <th className="py-3">Date</th>
                    <th className="py-3">Amount</th>
                    <th className="py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentBookings.map((r, i) => (
                    <tr
                      key={r.id}
                      className={`border-b border-white/6 ${
                        i % 2 === 0 ? "bg-white/2" : ""
                      }`}
                    >
                      <td className="py-4">{r.id}</td>
                      <td className="py-4">{r.user}</td>
                      <td className="py-4">{r.tour}</td>
                      <td className="py-4">{r.date}</td>
                      <td className="py-4">
                        ₹{r.amount.toLocaleString()}
                      </td>
                      <td className="py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${
                            r.status === "Confirmed"
                              ? "bg-green-600/20 text-green-300"
                              : "bg-yellow-600/20 text-yellow-300"
                          }`}
                        >
                          {r.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <aside className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <h4 className="font-semibold text-lg">Quick Insights</h4>
              <ul className="mt-4 space-y-3 text-gray-300">
                <li>
                  <strong>Top country:</strong> Switzerland
                </li>
                <li>
                  <strong>Busiest month:</strong> December
                </li>
                <li>
                  <strong>Avg. booking:</strong> ₹37,500
                </li>
              </ul>

              <div className="mt-6">
                <button className="w-full py-3 rounded-lg bg-gradient-to-r from-[#00F2FE] to-[#7C4CFF] text-black font-bold">
                  Export CSV
                </button>
              </div>
            </aside>
          </section>
        </main>
      </div>
    </div>
  );
}
