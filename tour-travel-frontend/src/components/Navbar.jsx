// import React, { useState, useEffect } from "react";
// import { Link, NavLink } from "react-router-dom";

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const closeMenu = () => setMenuOpen(false);

//   return (
//     <>
//       {/* TOP NAVBAR */}
//       <nav
//         className={`fixed top-0 w-full z-50 transition-all backdrop-blur-xl border-b
//         ${isScrolled ? "bg-black/50 border-white/10" : "bg-black/30 border-transparent"}`}
//       >
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
//           {/* LOGO */}
//           <Link
//             to="/"
//             className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-[#24C6DC] to-[#514A9D] text-transparent bg-clip-text"
//           >
//             TourX
//           </Link>

//           {/* DESKTOP LINKS */}
//           <div className="hidden md:flex items-center gap-8 text-lg font-medium">
//             <NavLink to="/" className="text-white hover:text-[#24C6DC] transition">Home</NavLink>
//             <NavLink to="/about" className="text-white hover:text-[#24C6DC] transition">About</NavLink>
//             <NavLink to="/tours" className="text-white hover:text-[#24C6DC] transition">Tours</NavLink>
//             <NavLink to="/blog" className="text-white hover:text-[#24C6DC] transition">Blog</NavLink>
//             <NavLink to="/contact" className="text-white hover:text-[#24C6DC] transition">Contact</NavLink>
//           </div>

//           {/* DESKTOP AUTH */}
//           <div className="hidden md:flex items-center gap-4">
//             <Link
//               to="/login"
//               className="px-5 py-2 rounded-full text-white border border-white/30 hover:bg-white/10 transition"
//             >
//               Login
//             </Link>

//             <Link
//               to="/signup"
//               className="px-6 py-2 rounded-full bg-gradient-to-r from-[#24C6DC] to-[#514A9D] text-white font-bold hover:opacity-90"
//             >
//               Sign Up
//             </Link>
//           </div>

//           {/* MOBILE HAMBURGER BUTTON */}
//           <button
//             className="md:hidden text-white text-3xl"
//             onClick={() => setMenuOpen(true)}
//           >
//             ☰
//           </button>
//         </div>
//       </nav>

//       {/* MOBILE SIDE MENU */}
//       <div
//         className={`fixed top-0 right-0 h-full w-72 bg-black/60 backdrop-blur-xl border-l border-white/10 shadow-xl z-50 transform transition-transform duration-300
//         ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
//       >
//         <div className="p-6 flex flex-col gap-6 text-white text-lg">

//           {/* CLOSE BUTTON */}
//           <div className="flex justify-end">
//             <button
//               onClick={closeMenu}
//               className="text-3xl text-white hover:text-[#24C6DC] transition"
//             >
//               ✕
//             </button>
//           </div>

//           {/* MOBILE LINKS */}
//           <NavLink
//             onClick={closeMenu}
//             to="/"
//             className="hover:text-[#24C6DC] transition"
//           >
//             Home
//           </NavLink>

//           <NavLink
//             onClick={closeMenu}
//             to="/about"
//             className="hover:text-[#24C6DC] transition"
//           >
//             About
//           </NavLink>

//           <NavLink
//             onClick={closeMenu}
//             to="/tours"
//             className="hover:text-[#24C6DC] transition"
//           >
//             Tours
//           </NavLink>

//           <NavLink
//             onClick={closeMenu}
//             to="/blog"
//             className="hover:text-[#24C6DC] transition"
//           >
//             Blog
//           </NavLink>

//           <NavLink
//             onClick={closeMenu}
//             to="/contact"
//             className="hover:text-[#24C6DC] transition"
//           >
//             Contact
//           </NavLink>

//           <div className="h-px bg-white/10 my-2"></div>

//           {/* MOBILE AUTH */}
//           <Link
//             onClick={closeMenu}
//             to="/login"
//             className="px-5 py-2 rounded-full text-white border border-white/30 hover:bg-white/10 transition text-center"
//           >
//             Login
//           </Link>

//           <Link
//             onClick={closeMenu}
//             to="/signup"
//             className="px-6 py-2 rounded-full bg-gradient-to-r from-[#24C6DC] to-[#514A9D] text-white font-bold hover:opacity-90 text-center"
//           >
//             Sign Up
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }


import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
 const isAdmin = localStorage.getItem("role") === "admin";

  return (
    <>
      {/* TOP NAVBAR */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all backdrop-blur-xl border-b
        ${isScrolled ? "bg-black/50 border-white/10" : "bg-black/30 border-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* LOGO */}
          <Link
            to="/"
            className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-[#24C6DC] to-[#514A9D] text-transparent bg-clip-text"
          >
            TourX
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8 text-lg font-medium">
            <NavLink to="/" className="text-white hover:text-[#24C6DC] transition">Home</NavLink>
            <NavLink to="/about" className="text-white hover:text-[#24C6DC] transition">About</NavLink>
            <NavLink to="/tours" className="text-white hover:text-[#24C6DC] transition">Tours</NavLink>
            <NavLink to="/blog" className="text-white hover:text-[#24C6DC] transition">Blog</NavLink>
            <NavLink to="/contact" className="text-white hover:text-[#24C6DC] transition">Contact</NavLink>

            {/* ⭐ ADMIN LOGIN ADDED HERE */}
            {!isAdmin && (
  <NavLink to="/admin/login" className="hover:text-[#00F2FE] font-semibold">
    Admin
  </NavLink>
)}

          </div>

          {/* DESKTOP AUTH */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/login"
              className="px-5 py-2 rounded-full text-white border border-white/30 hover:bg-white/10 transition"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-[#24C6DC] to-[#514A9D] text-white font-bold hover:opacity-90"
            >
              Sign Up
            </Link>
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE SIDE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-black/60 backdrop-blur-xl border-l border-white/10 shadow-xl z-50 transform transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 flex flex-col gap-6 text-white text-lg">

          {/* CLOSE BUTTON */}
          <div className="flex justify-end">
            <button
              onClick={closeMenu}
              className="text-3xl text-white hover:text-[#24C6DC] transition"
            >
              ✕
            </button>
          </div>

          {/* MOBILE LINKS */}
          <NavLink onClick={closeMenu} to="/" className="hover:text-[#24C6DC] transition">Home</NavLink>
          <NavLink onClick={closeMenu} to="/about" className="hover:text-[#24C6DC] transition">About</NavLink>
          <NavLink onClick={closeMenu} to="/tours" className="hover:text-[#24C6DC] transition">Tours</NavLink>
          <NavLink onClick={closeMenu} to="/blog" className="hover:text-[#24C6DC] transition">Blog</NavLink>
          <NavLink onClick={closeMenu} to="/contact" className="hover:text-[#24C6DC] transition">Contact</NavLink>

          {/* ⭐ MOBILE ADMIN LOGIN */}
          <NavLink
            onClick={closeMenu}
            to="/admin/login"
            className="hover:text-[#00F2FE] transition font-semibold"
          >
            Admin
          </NavLink>

          <div className="h-px bg-white/10 my-2"></div>

          {/* MOBILE AUTH */}
          <Link onClick={closeMenu} to="/login" className="px-5 py-2 rounded-full text-white border border-white/30 hover:bg-white/10 transition text-center">Login</Link>

          <Link onClick={closeMenu} to="/signup" className="px-6 py-2 rounded-full bg-gradient-to-r from-[#24C6DC] to-[#514A9D] text-white font-bold hover:opacity-90 text-center">Sign Up</Link>
        </div>
      </div>
    </>
  );
}
