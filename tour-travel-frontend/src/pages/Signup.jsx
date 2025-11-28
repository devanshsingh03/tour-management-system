// // src/pages/Signup.jsx
// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { Link } from "react-router-dom";

// export default function Signup() {
//   useEffect(() => {
//     AOS.init({ duration: 900, once: true });
//   }, []);

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const registerUser = () => {
//     if (form.password !== form.confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     alert("User Signup Clicked (Frontend Only)");
//   };

//   return (
//     <div className="min-h-screen w-full bg-[#010414] text-white flex items-center justify-center px-6 relative">

//       {/* Neon Background Glows */}
//       <div className="absolute top-0 left-0 w-80 h-80 bg-[#00F2FE]/20 blur-[150px]"></div>
//       <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#7C4CFF]/20 blur-[150px]"></div>

//       {/* SIGNUP CARD */}
//       <div
//         data-aos="zoom-in"
//         className="relative w-full max-w-lg bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl"
//       >
//         <h2 className="text-3xl font-bold text-center">Create Account</h2>
//         <p className="text-center text-gray-300 mt-2">
//           Join us and start exploring the world
//         </p>

//         {/* NAME */}
//         <div className="mt-8">
//           <label className="text-gray-300 block mb-2">Full Name</label>
//           <input
//             type="text"
//             name="name"
//             onChange={handleChange}
//             className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#00F2FE] outline-none"
//             placeholder="Enter your name"
//           />
//         </div>

//         {/* EMAIL */}
//         <div className="mt-5">
//           <label className="text-gray-300 block mb-2">Email</label>
//           <input
//             type="email"
//             name="email"
//             onChange={handleChange}
//             className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#00F2FE] outline-none"
//             placeholder="Enter your email"
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
//             placeholder="Create password"
//           />
//         </div>

//         {/* CONFIRM PASSWORD */}
//         <div className="mt-5">
//           <label className="text-gray-300 block mb-2">Confirm Password</label>
//           <input
//             type="password"
//             name="confirmPassword"
//             onChange={handleChange}
//             className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#00F2FE] outline-none"
//             placeholder="Re-enter password"
//           />
//         </div>

//         {/* SIGNUP BUTTON */}
//         <button
//           onClick={registerUser}
//           className="w-full mt-6 py-3 rounded-full bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black font-semibold hover:opacity-90 transition"
//         >
//           Sign Up
//         </button>

//         {/* Divider */}
//         <div className="flex items-center my-6">
//           <div className="flex-1 h-px bg-white/10"></div>
//           <span className="px-4 text-gray-400 text-sm">OR</span>
//           <div className="flex-1 h-px bg-white/10"></div>
//         </div>

//         {/* LINK TO LOGIN */}
//         <p className="text-center text-gray-300">
//           Already have an account?{" "}
//           <Link to="/login" className="text-[#00F2FE] hover:underline">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/signup",
        form
      );

      alert("Signup successful! Please login.");
      navigate("/login");
    } catch (err) {
      setErrorMsg(err.response?.data?.message || "Signup failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#010414] flex items-center justify-center text-white px-6">
      <div className="bg-white/10 p-8 rounded-xl w-full max-w-md border border-white/20">

        <h1 className="text-3xl font-bold mb-6 text-center">Create Account</h1>

        {errorMsg && (
          <p className="text-red-400 text-center mb-4">{errorMsg}</p>
        )}

        <form onSubmit={handleSignup} className="space-y-4">

          <div>
            <label className="block mb-1 text-gray-300">Full Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-3 rounded bg-white/20 border border-white/30"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-3 rounded bg-white/20 border border-white/30"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              className="w-full p-3 rounded bg-white/20 border border-white/30"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-[#7DF9FF] to-[#7C4CFF] rounded-lg text-black font-semibold"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>

        </form>

        <p className="text-center mt-6 text-gray-300">
          Already have an account?{" "}
          <span
            className="text-[#7DF9FF] cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
}
