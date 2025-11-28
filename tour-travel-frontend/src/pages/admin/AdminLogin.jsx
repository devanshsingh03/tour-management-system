// // src/pages/admin/AdminLogin.jsx
// import React, { useState, useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function AdminLogin() {
//   useEffect(() => {
//     AOS.init({ duration: 900, once: true });
//   }, []);

//   const [form, setForm] = useState({ email: "", password: "" });

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleAdminLogin = () => {
//     alert("Admin Login Clicked (Frontend Only)");
//   };

//   return (
//     <div className="min-h-screen w-full bg-[#0A0F1F] text-white flex items-center justify-center px-6 relative">

//       {/* Futuristic glow orbs */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-[#7C4CFF]/20 blur-[120px]"></div>
//       <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#00F2FE]/20 blur-[120px]"></div>

//       {/* LOGIN CARD */}
//       <div
//         data-aos="zoom-in"
//         className="relative w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-lg"
//       >
//         <h1 className="text-3xl font-bold text-center">Admin Panel</h1>
//         <p className="text-center text-gray-300 mt-1">Secure Login</p>

//         {/* EMAIL */}
//         <div className="mt-8">
//           <label className="text-gray-300 block mb-2">Admin Email</label>
//           <input
//             type="email"
//             name="email"
//             onChange={handleChange}
//             className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#00F2FE] outline-none"
//             placeholder="Enter admin email"
//           />
//         </div>

//         {/* PASSWORD */}
//         <div className="mt-5">
//           <label className="text-gray-300 block mb-2">Password</label>
//           <input
//             type="password"
//             name="password"
//             onChange={handleChange}
//             className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#00F2FE] outline-none"
//             placeholder="Enter admin password"
//           />
//         </div>

//         {/* LOGIN BUTTON */}
//         <button
//           onClick={handleAdminLogin}
//           className="w-full mt-6 py-3 rounded-full bg-gradient-to-r from-[#00F2FE] to-[#7C4CFF] text-black font-semibold hover:opacity-90 transition"
//         >
//           Login
//         </button>

//         {/* ADMIN SIGNUP LINK */}
//         <p className="text-center text-gray-300 mt-6">
//           Want to add a new admin?{" "}
//           <a href="/admin/signup" className="text-[#00F2FE] hover:underline">
//             Create Admin
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }


// // // import React, { useState } from "react";
// // // import axios from "axios";
// // // import { useNavigate } from "react-router-dom";

// // // export default function AdminLogin() {
// // //   const [form, setForm] = useState({ email: "", password: "" });
// // //   const navigate = useNavigate();

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     try {
// // //       const res = await axios.post("http://localhost:5000/api/admin/login", form);

// // //       localStorage.setItem("token", res.data.token);
// // //       localStorage.setItem("role", res.data.role);

// // //       navigate("/admin/dashboard");
// // //     } catch (err) {
// // //       alert(err.response?.data?.message || "Login Failed");
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-[#010414] text-white flex items-center justify-center">
// // //       <form onSubmit={handleSubmit} className="bg-white/10 p-8 rounded-xl w-96">

// // //         <h2 className="text-3xl font-bold mb-6 text-center">Admin Login</h2>

// // //         <input
// // //           type="email"
// // //           placeholder="Email"
// // //           className="w-full mb-3 p-3 rounded bg-white/10 border border-white/20"
// // //           onChange={(e) => setForm({ ...form, email: e.target.value })}
// // //         />

// // //         <input
// // //           type="password"
// // //           placeholder="Password"
// // //           className="w-full mb-3 p-3 rounded bg-white/10 border border-white/20"
// // //           onChange={(e) => setForm({ ...form, password: e.target.value })}
// // //         />

// // //         <button className="w-full mt-3 py-3 bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black rounded-lg font-bold">
// // //           Login
// // //         </button>
// // //       </form>
// // //     </div>
// // //   );
// // // }



// src/pages/admin/AdminLogin.jsx
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleAdminLogin = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (!res.ok) return alert(data.message);

    localStorage.setItem("token", data.token);
    localStorage.setItem("role", "admin");

    window.location.href = "/admin/dashboard";
  } catch (err) {
    alert("Login failed");
  }
};


  return (
    <div className="min-h-screen w-full bg-[#0A0F1F] text-white flex items-center justify-center px-6 relative">

      <div className="absolute top-0 left-0 w-72 h-72 bg-[#7C4CFF]/20 blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#00F2FE]/20 blur-[120px]"></div>

      <div
        data-aos="zoom-in"
        className="relative w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-lg"
      >
        <h1 className="text-3xl font-bold text-center">Admin Panel</h1>
        <p className="text-center text-gray-300 mt-1">Secure Login</p>

        <div className="mt-8">
          <label className="text-gray-300 block mb-2">Admin Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#00F2FE] outline-none"
            placeholder="Enter admin email"
          />
        </div>

        <div className="mt-5">
          <label className="text-gray-300 block mb-2">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#00F2FE] outline-none"
            placeholder="Enter admin password"
          />
        </div>

        <button
          onClick={handleAdminLogin}
          className="w-full mt-6 py-3 rounded-full bg-gradient-to-r from-[#00F2FE] to-[#7C4CFF] text-black font-semibold hover:opacity-90 transition"
        >
          Login
        </button>

        <p className="text-center text-gray-300 mt-6">
          Want to add a new admin?{" "}
          <a href="/admin/signup" className="text-[#00F2FE] hover:underline">
            Create Admin
          </a>
        </p>
      </div>
    </div>
  );
}

