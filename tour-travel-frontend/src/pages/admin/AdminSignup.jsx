// // src/pages/admin/AdminSignup.jsx
// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function AdminSignup() {
//   useEffect(() => {
//     AOS.init({ duration: 900, once: true });
//   }, []);

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     secretKey: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleAdminSignup = () => {
//     if (form.password !== form.confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     alert("Admin Signup Clicked (Frontend Only)");
//   };

//   return (
//     <div className="min-h-screen w-full bg-[#0A0F1F] text-white flex items-center justify-center px-6 relative">

//       {/* Neon glows */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-[#00F2FE]/20 blur-[120px]"></div>
//       <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#7C4CFF]/20 blur-[120px]"></div>

//       {/* Signup Card */}
//       <div
//         data-aos="zoom-in"
//         className="relative w-full max-w-lg bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl"
//       >
//         <h1 className="text-3xl font-bold text-center">Create Admin</h1>
//         <p className="text-center text-gray-300 mt-1">Superadmin Only Area</p>

//         {/* Name */}
//         <div className="mt-6">
//           <label className="text-gray-300 block mb-1">Full Name</label>
//           <input
//             type="text"
//             name="name"
//             onChange={handleChange}
//             className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#00F2FE] outline-none"
//             placeholder="Enter admin name"
//           />
//         </div>

//         {/* Email */}
//         <div className="mt-4">
//           <label className="text-gray-300 block mb-1">Admin Email</label>
//           <input
//             type="email"
//             name="email"
//             onChange={handleChange}
//             className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#00F2FE] outline-none"
//             placeholder="Enter admin email"
//           />
//         </div>

//         {/* Secret Key (to restrict admin creation) */}
//         <div className="mt-4">
//           <label className="text-gray-300 block mb-1">Secret Admin Key</label>
//           <input
//             type="password"
//             name="secretKey"
//             onChange={handleChange}
//             className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#00F2FE] outline-none"
//             placeholder="Enter secret key"
//           />
//           <p className="text-xs text-gray-400 mt-1">
//             Only superadmin knows this key.
//           </p>
//         </div>

//         {/* Password */}
//         <div className="mt-4">
//           <label className="text-gray-300 block mb-1">Password</label>
//           <input
//             type="password"
//             name="password"
//             onChange={handleChange}
//             className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#00F2FE] outline-none"
//             placeholder="Create password"
//           />
//         </div>

//         {/* Confirm Password */}
//         <div className="mt-4">
//           <label className="text-gray-300 block mb-1">Confirm Password</label>
//           <input
//             type="password"
//             name="confirmPassword"
//             onChange={handleChange}
//             className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#00F2FE] outline-none"
//             placeholder="Re-enter password"
//           />
//         </div>

//         {/* Signup Button */}
//         <button
//           onClick={handleAdminSignup}
//           className="w-full mt-6 py-3 rounded-full bg-gradient-to-r from-[#00F2FE] to-[#7C4CFF] text-black font-semibold hover:opacity-90 transition"
//         >
//           Create Admin
//         </button>

//         {/* Back to Admin Login */}
//         <p className="text-center text-gray-300 mt-6">
//           Already an admin?{" "}
//           <a
//             href="/admin/login"
//             className="text-[#00F2FE] hover:underline"
//           >
//             Login Here
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

// // import React, { useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";

// // export default function AdminSignup() {
// //   const [form, setForm] = useState({ name: "", email: "", password: "" });
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       await axios.post("http://localhost:5000/api/admin/signup", form);
// //       alert("Admin Registered Successfully");
// //       navigate("/admin/login");
// //     } catch (err) {
// //       alert(err.response?.data?.message || "Signup Failed");
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-[#010414] text-white flex items-center justify-center">
// //       <form onSubmit={handleSubmit} className="bg-white/10 p-8 rounded-xl w-96">

// //         <h2 className="text-3xl font-bold mb-6 text-center">Admin Signup</h2>

// //         <input
// //           type="text"
// //           placeholder="Name"
// //           className="w-full mb-3 p-3 rounded bg-white/10 border border-white/20"
// //           onChange={(e) => setForm({ ...form, name: e.target.value })}
// //         />

// //         <input
// //           type="email"
// //           placeholder="Email"
// //           className="w-full mb-3 p-3 rounded bg-white/10 border border-white/20"
// //           onChange={(e) => setForm({ ...form, email: e.target.value })}
// //         />

// //         <input
// //           type="password"
// //           placeholder="Password"
// //           className="w-full mb-3 p-3 rounded bg-white/10 border border-white/20"
// //           onChange={(e) => setForm({ ...form, password: e.target.value })}
// //         />

// //         <button className="w-full mt-3 py-3 bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black rounded-lg font-bold">
// //           Create Admin Account
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }

// src/pages/admin/AdminSignup.jsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminSignup() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    secretKey: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleAdminSignup = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/admin/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (!res.ok) return alert(data.message);

    alert("Admin created successfully!");
    window.location.href = "/admin/login";
    
  } catch (error) {
    alert("Signup failed");
  }
};

  return (
    <div className="min-h-screen w-full bg-[#0A0F1F] text-white flex items-center justify-center px-6 relative">

      <div className="absolute top-0 left-0 w-72 h-72 bg-[#00F2FE]/20 blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#7C4CFF]/20 blur-[120px]"></div>

      <div
        data-aos="zoom-in"
        className="relative w-full max-w-lg bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl"
      >
        <h1 className="text-3xl font-bold text-center">Create Admin</h1>
        <p className="text-center text-gray-300 mt-1">Superadmin Only Area</p>

        <div className="mt-6">
          <label className="text-gray-300 block mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#00F2FE] outline-none"
            placeholder="Enter admin name"
          />
        </div>

        <div className="mt-4">
          <label className="text-gray-300 block mb-1">Admin Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#00F2FE] outline-none"
            placeholder="Enter admin email"
          />
        </div>

        <div className="mt-4">
          <label className="text-gray-300 block mb-1">Secret Admin Key</label>
          <input
            type="password"
            name="secretKey"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#00F2FE] outline-none"
            placeholder="Enter secret key"
          />
          <p className="text-xs text-gray-400 mt-1">
            Only superadmin knows this key.
          </p>
        </div>

        <div className="mt-4">
          <label className="text-gray-300 block mb-1">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#00F2FE] outline-none"
            placeholder="Create password"
          />
        </div>

        <div className="mt-4">
          <label className="text-gray-300 block mb-1">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#00F2FE] outline-none"
            placeholder="Re-enter password"
          />
        </div>

        <button
          onClick={handleAdminSignup}
          className="w-full mt-6 py-3 rounded-full bg-gradient-to-r from-[#00F2FE] to-[#7C4CFF] text-black font-semibold hover:opacity-90 transition"
        >
          Create Admin
        </button>

        <p className="text-center text-gray-300 mt-6">
          Already an admin?{" "}
          <a href="/admin/login" className="text-[#00F2FE] hover:underline">
            Login Here
          </a>
        </p>
      </div>
    </div>
  );
}
