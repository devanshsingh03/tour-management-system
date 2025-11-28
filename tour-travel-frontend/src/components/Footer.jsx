// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white py-16 px-6">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        
//         <div>
//           <h3 className="text-xl font-bold mb-4">GoWay</h3>
//           <p className="text-gray-300">Explore the world with curated trips and premium travel experiences.</p>
//         </div>

//         <div>
//           <h4 className="text-lg font-bold mb-4">Quick Links</h4>
//           <ul className="space-y-2 text-gray-300">
//             <li>Home</li>
//             <li>Tours</li>
//             <li>About</li>
//             <li>Contact</li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="text-lg font-bold mb-4">Support</h4>
//           <ul className="space-y-2 text-gray-300">
//             <li>FAQ</li>
//             <li>Customer Support</li>
//             <li>Refund Policy</li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="text-lg font-bold mb-4">Newsletter</h4>
//           <input
//             className="p-3 rounded w-full text-black"
//             placeholder="Your email"
//           />
//           <button className="mt-3 w-full py-3 bg-blue-600 rounded hover:bg-blue-700">
//             Subscribe
//           </button>
//         </div>

//       </div>

//       <p className="text-center text-gray-400 mt-10">
//         © 2025 GoWay. All Rights Reserved.
//       </p>
//     </footer>
//   );
// }



import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0A0F1F] text-white pt-16 pb-8 mt-20 border-t border-white/10">

      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-extrabold">
            TourX<span className="text-[#00F2FE]">.</span>
          </h2>
          <p className="text-gray-400 mt-3">
            Futuristic & premium travel experiences redesigned for the new era.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tours">Tours</Link></li>
            <li><Link to="/experience/explore">Experience</Link></li>
            <li><Link to="/blog">Blogs</Link></li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/about">About</Link></li>
            <li>Help Center</li>
            <li>Terms & Privacy</li>
          </ul>
        </div>

        {/* ⭐ ADMIN ACCESS SECTION (NEW) */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#00F2FE]">
            Admin Access
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>
              <Link
                to="/admin/login"
                className="hover:text-[#00F2FE] transition"
              >
                Admin Login
              </Link>
            </li>

            <li>
              <Link
                to="/admin/signup"
                className="hover:text-[#7C4CFF] transition"
              >
                Admin Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} TourX. All Rights Reserved.
      </div>
    </footer>
  );
}
