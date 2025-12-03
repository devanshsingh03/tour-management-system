// // src/pages/admin/eTours.jsx
// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { FaEdit, FaTrash } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { BASE_URL } from "../../config";

// export default function eTours() {
//   const navigate = useNavigate();
//   const [tours, setTours] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fallbackImage = "/placeholder.png"; // <-- PUT an image in /public folder

//   const fetchTours = async () => {
//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");
//       if (!token) {
//         alert("Please login as admin first");
//         return navigate("/admin/login");
//       }

//       const res = await axios.get(`${BASE_URL}/tours/all`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       setTours(res.data || []);
//     } catch (err) {
//       console.error("e tours error:", err);
//       alert(err.response?.data?.message || "Failed to load tours");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     AOS.init({ duration: 900, once: true });
//     fetchTours();
//   }, []);

//   const handleDelete = async (id) => {
//     if (!window.confirm("Delete this tour?")) return;

//     try {
//       const token = localStorage.getItem("token");
//       const res = await axios.delete(`${BASE_URL}/tours/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       alert(res.data.message || "Tour deleted");
//       setTours((prev) => prev.filter((t) => t._id !== id));
//     } catch (err) {
//       console.error("Delete tour error:", err);
//       alert(err.response?.data?.message || "Failed to delete tour");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#030617] text-white p-10">
//       <h1
//         data-aos="fade-up"
//         className="text-3xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FE] to-[#7C4CFF]"
//       >
//         e Tours
//       </h1>

//       {loading ? (
//         <div className="text-center text-gray-300">Loading tours...</div>
//       ) : (
//         <div
//           data-aos="fade-up"
//           className="overflow-x-auto bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl shadow-xl"
//         >
//           <table className="w-full text-left">
//             <thead>
//               <tr className="border-b border-white/10 text-gray-300 text-sm">
//                 <th className="p-4">Image</th>
//                 <th className="p-4">Title</th>
//                 <th className="p-4">Location</th>
//                 <th className="p-4">Price</th>
//                 <th className="p-4">Duration</th>
//                 <th className="p-4 text-center">Actions</th>
//               </tr>
//             </thead>

//             <tbody>
//               {tours.map((tour, index) => (
//                 <tr
//                   key={tour._id}
//                   className={`border-b border-white/10 ${
//                     index % 2 === 0 ? "bg-white/5" : ""
//                   }`}
//                 >
//                   <td className="p-4">
//                     <img
//                       src={tour.images?.[0] || fallbackImage} // <-- FIXED
//                       alt={tour.title}
//                       className="w-20 h-16 rounded-lg object-cover shadow-md"
//                     />
//                   </td>

//                   <td className="p-4 font-semibold">{tour.title}</td>
//                   <td className="p-4 text-gray-300">{tour.location}</td>
//                   <td className="p-4 text-blue-300">
//                     ₹{Number(tour.price).toLocaleString()}
//                   </td>
//                   <td className="p-4 text-purple-300">
//                     {tour.duration} days
//                   </td>

//                   <td className="p-4 flex justify-center gap-4">
//                     <button
//                       onClick={() => navigate(`/admin/edit-tour/${tour._id}`)}
//                       className="px-4 py-2 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-300 hover:bg-blue-600/30 transition flex items-center gap-2"
//                     >
//                       <FaEdit />
//                       Edit
//                     </button>

//                     <button
//                       onClick={() => handleDelete(tour._id)}
//                       className="px-4 py-2 rounded-lg bg-red-600/20 border border-red-500/40 text-red-300 hover:bg-red-600/30 transition flex items-center gap-2"
//                     >
//                       <FaTrash />
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}

//               {tours.length === 0 && (
//                 <tr>
//                   <td colSpan="6" className="p-6 text-center text-gray-400">
//                     No tours found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }


// src/pages/admin/ManageTours.jsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../config";

export default function ManageTours() {
  const navigate = useNavigate();
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const fallbackImage = "/placeholder.png";

  const fetchTours = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const res = await axios.get(`${BASE_URL}/tours/all`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setTours(res.data || []);
    } catch (err) {
      console.error("Manage tours error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
    fetchTours();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this tour?")) return;

    try {
      const token = localStorage.getItem("token");

      await axios.delete(`${BASE_URL}/tours/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setTours((prev) => prev.filter((t) => t._id !== id));
    } catch (err) {
      console.error("Delete tour error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#030617] text-white p-10">
      <h1 className="text-3xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FE] to-[#7C4CFF]">
        Manage Tours
      </h1>

      {loading ? (
        <div className="text-center text-gray-300">Loading tours...</div>
      ) : (
        <div className="overflow-x-auto bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl shadow-xl">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10 text-gray-300 text-sm">
                <th className="p-4">Image</th>
                <th className="p-4">Title</th>
                <th className="p-4">Location</th>
                <th className="p-4">Price</th>
                <th className="p-4">Duration</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {tours.map((tour, index) => (
                <tr
                  key={tour._id}
                  className={`border-b border-white/10 ${
                    index % 2 === 0 ? "bg-white/5" : ""
                  }`}
                >
                  <td className="p-4">
                    <img
                      src={tour.images?.[0] || fallbackImage}
                      alt={tour.title}
                      className="w-20 h-16 rounded-lg object-cover shadow-md"
                    />
                  </td>

                  <td className="p-4 font-semibold">{tour.title}</td>
                  <td className="p-4 text-gray-300">{tour.location}</td>
                  <td className="p-4 text-blue-300">
                    ₹{Number(tour.price).toLocaleString()}
                  </td>
                  <td className="p-4 text-purple-300">
                    {tour.duration} days
                  </td>

                  <td className="p-4 flex justify-center gap-4">
                    <button
                      onClick={() => navigate(`/admin/edit-tour/${tour._id}`)}
                      className="px-4 py-2 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-300 hover:bg-blue-600/30 transition flex items-center gap-2"
                    >
                      <FaEdit />
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(tour._id)}
                      className="px-4 py-2 rounded-lg bg-red-600/20 border border-red-500/40 text-red-300 hover:bg-red-600/30 transition flex items-center gap-2"
                    >
                      <FaTrash />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {tours.length === 0 && (
                <tr>
                  <td colSpan="6" className="p-6 text-center text-gray-400">
                    No tours found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

