// src/pages/Login.jsx
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // REAL LOGIN FUNCTION
  const loginUser = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);

      // Save user + token in browser
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", res.data.token);

      alert("Login Successful!");
      navigate("/dashboard"); // redirect user to dashboard

    } catch (error) {
      alert(error.response?.data?.message || "Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#010414] text-white flex items-center justify-center px-6 relative">

      {/* Neon Glow Balls */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#00F2FE]/20 blur-[140px]"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#7C4CFF]/20 blur-[140px]"></div>

      {/* LOGIN CARD */}
      <div
        data-aos="zoom-in"
        className="relative w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-center">Welcome Traveler</h2>
        <p className="text-center text-gray-300 mt-2">
          Login to your travel dashboard
        </p>

        {/* EMAIL */}
        <div className="mt-8">
          <label className="text-gray-300 block mb-2">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#00F2FE] outline-none"
            placeholder="Enter your email"
          />
        </div>

        {/* PASSWORD */}
        <div className="mt-5">
          <label className="text-gray-300 block mb-2">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-[#00F2FE] outline-none"
            placeholder="Enter your password"
          />
        </div>

        {/* FORGOT PASSWORD */}
        <div className="text-right mt-2">
          <button className="text-sm text-[#7DF9FF] hover:underline">
            Forgot Password?
          </button>
        </div>

        {/* LOGIN BUTTON */}
        <button
          onClick={loginUser}
          className="w-full mt-6 py-3 rounded-full bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black font-semibold hover:opacity-90 transition"
        >
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-white/10"></div>
          <span className="px-4 text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-px bg-white/10"></div>
        </div>

        {/* Google Login Button (UI only for now) */}
        <button className="w-full py-3 rounded-full border border-white/20 hover:bg-white/10 transition">
          Continue with Google
        </button>

        {/* GO TO SIGNUP */}
        <p className="text-center text-gray-300 mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-[#00F2FE] hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
