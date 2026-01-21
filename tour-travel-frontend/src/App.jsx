// src/App.jsx
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import AIAssistant from "./components/AIAssistant";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

import Tours from "./pages/Tours";
import SingleTour from "./pages/SingleTour";
import Booking from "./pages/Booking";
import Payment from "./pages/Payment";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentFailed from "./pages/PaymentFailed";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import UserDashboard from "./pages/user/UserDashboard";
import MyBookings from "./pages/user/MyBookings";

// Admin
import AdminLogin from "./pages/admin/AdminLogin";
import AdminSignup from "./pages/admin/AdminSignup";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddTour from "./pages/admin/AddTour";
import ManageTours from "./pages/admin/ManageTours";
import EditTour from "./pages/admin/EditTour";
import ViewBookings from "./pages/admin/ViewBookings";

import Experience from "./pages/Experience";
import Destination from "./pages/Destination";
import Category from "./pages/Category";
import HolographicJourney from "./pages/HolographicJourney";
import HologramDemo from "./pages/HologramDemo";
import CategoryTours from "./pages/CategoryTours";

import BlogDetails from "./pages/BlogDetails";
import Bali from "./pages/tours/Bali";
import Goa from "./pages/tours/Goa";

import AdminProtected from "./components/AdminProtected";

// AOS Animation
import AOS from "aos";
import "aos/dist/aos.css";

function LayoutWrapper({ children }) {
  const location = useLocation();

  const hideNavbar = location.pathname.startsWith("/admin");
  
  const hideVoiceAssistant = location.pathname === "/" || location.pathname.startsWith("/admin");

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
      {!hideNavbar && <AIAssistant />}
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <BrowserRouter>
      <LayoutWrapper>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Interactive Pages */}
          <Route path="/experience/:slug" element={<Experience />} />
          <Route path="/destination/:slug" element={<Destination />} />
          <Route path="/category/:slug" element={<Category />} />
          <Route path="/category/:slug/tours" element={<CategoryTours />} />
          <Route path="/holographic-journey" element={<HolographicJourney />} />
          <Route path="/hologram-demo" element={<HologramDemo />} />

          {/* Basic Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />

          {/* Tours */}
          <Route path="/tours" element={<Tours />} />
          <Route path="/tour/:id" element={<SingleTour />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/payment/:id" element={<Payment />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/payment-failed" element={<PaymentFailed />} />

          {/* User Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* User Dashboard */}
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/my-bookings" element={<MyBookings />} />

          {/* Admin Auth */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/signup" element={<AdminSignup />} />

          {/* Admin Protected Pages */}
          <Route
            path="/admin/dashboard"
            element={
              <AdminProtected>
                <AdminDashboard />
              </AdminProtected>
            }
          />

          <Route
            path="/admin/add-tour"
            element={
              <AdminProtected>
                <AddTour />
              </AdminProtected>
            }
          />

          <Route
            path="/admin/manage-tours"
            element={
              <AdminProtected>
                <ManageTours />
              </AdminProtected>
            }
          />

          <Route
            path="/admin/edit-tour/:id"
            element={
              <AdminProtected>
                <EditTour />
              </AdminProtected>
            }
          />

          <Route
            path="/admin/view-bookings"
            element={
              <AdminProtected>
                <ViewBookings />
              </AdminProtected>
            }
          />

          {/* Tourism Microsites */}
          <Route path="/hologram-bali" element={<Bali />} />
          <Route path="/hologram-goa" element={<Goa />} />

        </Routes>
      </LayoutWrapper>
    </BrowserRouter>
  );
}

export default App;
