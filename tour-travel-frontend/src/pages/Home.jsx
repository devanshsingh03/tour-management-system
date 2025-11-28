// // src/pages/Home.jsx
// import React, { useEffect, useRef, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useNavigate } from "react-router-dom";

// // Imported Sections (kept main ones; inline sections used for Trending & Categories to ensure interaction here)
// import ToursCarousel from "../components/ToursCarousel";
// import AIAssistant from "../components/AIAssistant";
// import PricingPlans from "../components/PricingPlans";
// import CyberTestimonials from "../components/CyberTestimonials";
// import AnimatedStats from "../components/AnimatedStats";
// import FaqAccordion from "../components/FaqAccordion";
// import WeatherCityCards from "../components/WeatherCityCards";

// export default function Home() {
//   useEffect(() => {
//     AOS.init({ duration: 900, once: true });
//   }, []);

//   const navigate = useNavigate();

//   // Cursor follow glow
//   const [cursor, setCursor] = useState({ x: -200, y: -200 });
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const box = containerRef.current;
//     if (!box) return;

//     const move = (e) => {
//       const rect = box.getBoundingClientRect();
//       setCursor({
//         x: e.clientX - rect.left,
//         y: e.clientY - rect.top,
//       });
//     };

//     const leave = () => setCursor({ x: -200, y: -200 });

//     box.addEventListener("mousemove", move);
//     box.addEventListener("mouseleave", leave);

//     return () => {
//       box.removeEventListener("mousemove", move);
//       box.removeEventListener("mouseleave", leave);
//     };
//   }, []);

//   // Hologram cards data (Feature Experience)
//   const hologramCards = [
//     {
//       title: "Holographic Himalaya",
//       subtitle: "Immersive mountain journeys",
//       img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
//     },
//     {
//       title: "Neon Coastlines",
//       subtitle: "Bioluminescent beach escapes",
//       img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
//     },
//     {
//       title: "Aurora Trails",
//       subtitle: "Northern lights & night safaris",
//       img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
//     },
//   ];

//   // Trending destinations (inline interactive data)
//   const trendingDestinations = [
//     {
//       name: "Bali",
//       subtitle: "Tropical escape with beaches & temples",
//       img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
//     },
//     {
//       name: "Paris",
//       subtitle: "City of love, culture & beautiful streets",
//       img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
//     },
//     {
//       name: "Dubai",
//       subtitle: "Luxury city with futuristic attractions",
//       img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80",
//     },
//   ];

//   // Explore categories
//   const categories = [
//     { name: "Adventure", subtitle: "Thrilling experiences await!" },
//     { name: "Family Trips", subtitle: "Perfect vacations for your family" },
//     { name: "Luxury Tours", subtitle: "Top-notch comfort & 5-star experience" },
//     { name: "Wellness", subtitle: "Retreats for mind & body" },
//   ];

//   // helper: slugify strings for route params
//   const slugify = (text) =>
//     text
//       .toString()
//       .toLowerCase()
//       .trim()
//       .replace(/[\s_]+/g, "-")
//       .replace(/[^a-z0-9-]/g, "")
//       .replace(/-+/g, "-");

//   // keyboard-accessible navigate helper
//   const handleKeyNav = (e, path) => {
//     if (e.key === "Enter" || e.key === " ") {
//       e.preventDefault();
//       navigate(path);
//     }
//   };

//   return (
//     <div
//   ref={containerRef}
//   className="relative w-full text-white bg-[#010414] overflow-visible"

// >

//       {/* ================================
//           CURSOR HOLOGRAM GLOW
//       ================================= */}
//       <div
//         className="pointer-events-none fixed z-[999] -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
//         style={{
//           left: cursor.x,
//           top: cursor.y,
//           width: 200,
//           height: 200,
//           borderRadius: "50%",
//           background:
//             "radial-gradient(circle at 30% 30%, rgba(0,200,255,0.25), rgba(124,76,255,0.12) 40%, transparent 60%)",
//         }}
//       />

//       {/* ================================
//           HERO SECTION (VIDEO FUTURISTIC)
//       ================================= */}
//       <section className="relative h-screen w-full overflow-hidden">
//         {/* Background Video */}
//         <video
//           src="/videos/city.mp4"
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         {/* Overlay (dark gradient) */}
//         <div className="absolute inset-0 bg-black/60"></div>

//         {/* Content */}
//         <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
//           <h1
//             data-aos="fade-up"
//             className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg"
//           >
//             Explore The World With <span className="text-blue-400">TourX</span>
//           </h1>

//           <p
//             data-aos="fade-up"
//             data-aos-delay="200"
//             className="mt-4 text-lg md:text-2xl text-gray-300 max-w-2xl"
//           >
//             Discover breathtaking destinations, unforgettable experiences, and
//             seamless travel planning.
//           </p>

//           <div className="mt-8 flex gap-4">
//             <button
//               data-aos="zoom-in"
//               data-aos-delay="400"
//               onClick={() => navigate("/destination/bali")}
//               onKeyDown={(e) => handleKeyNav(e, "/destination/bali")}
//               className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg rounded-full shadow-xl hover:opacity-90 transition"
//             >
//               Start Your Journey →
//             </button>

//             <button
//               data-aos="zoom-in"
//               data-aos-delay="500"
//               onClick={() => navigate("/holographic-journey")}
//               onKeyDown={(e) => handleKeyNav(e, "/holographic-journey")}
//               className="px-6 py-4 border border-white/20 text-white rounded-full hover:bg-white/5 transition"
//             >
//               Holographic Experience
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* ================================
//           HOLOGRAM FEATURE CARDS (interactive -> /experience/:slug)
//       ================================= */}
//       <section className="relative -mt-24 px-6 pb-6 z-40">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
//           {hologramCards.map((c, i) => {
//             const route = `/experience/${slugify(c.title)}`;
//             return (
//               <article
//                 key={i}
//                 data-aos="fade-up"
//                 data-aos-delay={i * 140}
//                 className="backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden group cursor-pointer"
//                 role="button"
//                 tabIndex={0}
//                 onClick={() => navigate(route)}
//                 onKeyDown={(e) => handleKeyNav(e, route)}
//                 aria-label={`Open experience ${c.title}`}
//               >
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={c.img}
//                     alt={c.title}
//                     className="h-44 w-full object-cover group-hover:scale-110 transition duration-500"
//                   />
//                   {/* small holographic shimmer */}
//                   <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent to-white/5 opacity-0 group-hover:opacity-40 transition" />
//                 </div>

//                 <div className="p-5">
//                   <h3 className="text-xl font-semibold">{c.title}</h3>
//                   <p className="text-gray-400 mt-2">{c.subtitle}</p>

//                   <div className="mt-4 flex items-center justify-between gap-4">
//                     <span className="px-3 py-1 rounded-md text-sm bg-white/5">
//                       Immersive
//                     </span>

//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         navigate(route);
//                       }}
//                       onKeyDown={(e) => {
//                         if (e.key === "Enter") navigate(route);
//                       }}
//                       className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#7DF9FF] to-[#7C4CFF] text-black font-semibold"
//                     >
//                       Explore
//                     </button>
//                   </div>
//                 </div>
//               </article>
//             );
//           })}
//         </div>
//       </section>

//       {/* ================================
//           TOURS CAROUSEL (existing component)
//       ================================= */}
//       <ToursCarousel />

//       {/* ================================
//           TRENDING DESTINATIONS (interactive -> /destination/:slug)
//       ================================= */}
//       <section className="py-12 px-6 bg-[#031424]">
//         <div className="max-w-7xl mx-auto">
//           <h2 data-aos="fade-up" className="text-3xl font-bold mb-6">
//             Trending Destinations
//           </h2>

//           <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {trendingDestinations.map((d, idx) => {
//               const route = `/destination/${slugify(d.name)}`;
//               return (
//                 <div
//                   key={idx}
//                   data-aos="fade-up"
//                   data-aos-delay={idx * 120}
//                   role="button"
//                   tabIndex={0}
//                   onClick={() => navigate(route)}
//                   onKeyDown={(e) => handleKeyNav(e, route)}
//                   className="relative rounded-2xl overflow-hidden cursor-pointer border border-white/10 shadow-lg"
//                   aria-label={`Open destination ${d.name}`}
//                 >
//                   <img
//                     src={d.img}
//                     alt={d.name}
//                     className="w-full h-48 object-cover group-hover:scale-105 transition"
//                   />
//                   <div className="p-4 bg-gradient-to-t from-black/60 to-transparent absolute bottom-0 left-0 right-0">
//                     <h3 className="text-xl font-semibold">{d.name}</h3>
//                     <p className="text-gray-300 text-sm">{d.subtitle}</p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ================================
//           EXPLORE CATEGORIES (interactive -> /category/:slug)
//       ================================= */}
//       <section className="py-12 px-6">
//         <div className="max-w-7xl mx-auto">
//           <h2 data-aos="fade-up" className="text-3xl font-bold mb-6">
//             Explore Categories
//           </h2>

//           <div className="flex flex-wrap gap-4">
//             {categories.map((cat, i) => {
//               const route = `/category/${slugify(cat.name)}`;
//               return (
//                 <div
//                   key={i}
//                   role="button"
//                   tabIndex={0}
//                   onClick={() => navigate(route)}
//                   onKeyDown={(e) => handleKeyNav(e, route)}
//                   data-aos="fade-up"
//                   data-aos-delay={i * 80}
//                   className="min-w-[200px] cursor-pointer p-6 rounded-2xl bg-gradient-to-br from-[#02121a] to-[#072034] border border-white/10 shadow-lg transform hover:-translate-y-1 transition"
//                   aria-label={`Explore category ${cat.name}`}
//                 >
//                   <h3 className="text-xl font-semibold">{cat.name}</h3>
//                   <p className="text-gray-400 mt-2">{cat.subtitle}</p>
//                   <div className="mt-4 inline-flex items-center gap-2 text-sm text-blue-300 font-medium">
//                     <span>View Tours</span>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ================================
//           AI ASSISTANT & PRICING & TESTIMONIALS
//       ================================= */}
       

//       <PricingPlans />
//       <CyberTestimonials />
//       <AnimatedStats />

//       {/* ================================
//           AR PREVIEW (keeps same, clickable AR explore)
//       ================================= */}
//       <section className="py-20 px-6 bg-[#060b18] text-white">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//           {/* Text Section */}
//           <div data-aos="fade-right">
//             <h2 className="text-4xl font-bold mb-4">AR Preview</h2>
//             <p className="text-gray-300 mb-6 text-lg">
//               Explore our tours in Augmented Reality. Rotate the model, zoom in, and even place it in your room using AR mode.
//             </p>
//             <button
//               onClick={() => navigate("/experience/ar-preview")}
//               onKeyDown={(e) => handleKeyNav(e, "/experience/ar-preview")}
//               className="px-6 py-3 rounded-full bg-gradient-to-r from-[#24C6DC] to-[#514A9D] text-black font-bold shadow-lg hover:opacity-90 transition"
//             >
//               Explore AR Tours
//             </button>
//           </div>

//           {/* 3D Model Section */}
//           <div data-aos="zoom-in" className="bg-black/30 border border-white/10 p-4 rounded-2xl backdrop-blur-xl shadow-lg">
//             {/* model-viewer is used as in your original file; kept as-is */}
//             <model-viewer
//               src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
//               alt="3D Astronaut"
//               auto-rotate
//               rotation-per-second="20deg"
//               camera-controls
//               ar
//               ar-modes="webxr scene-viewer quick-look"
//               disable-tap
//               exposure="1.1"
//               shadow-intensity="1"
//               style={{
//                 width: "100%",
//                 height: "420px",
//                 borderRadius: "20px",
//               }}
//             />
//           </div>
//         </div>
//       </section>

//       <FaqAccordion />
//       <WeatherCityCards />

//       {/* ================================
//           FINAL CTA -> /holographic-journey
//       ================================= */}
//       <section className="py-16 px-6 bg-gradient-to-r from-[#02203A] to-[#081827]">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
//           <div>
//             <h3 className="text-3xl font-bold">Ready for a holographic journey?</h3>
//             <p className="text-gray-300 mt-2">Plan your next futuristic trip with us.</p>
//           </div>

//           <div className="flex gap-4">
//             <button
//               onClick={() => navigate("/holographic-journey")}
//               onKeyDown={(e) => handleKeyNav(e, "/holographic-journey")}
//               className="px-6 py-3 bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black rounded-full font-semibold"
//             >
//               Contact Us
//             </button>
//             <button
//               onClick={() => navigate("/holographic-journey")}
//               onKeyDown={(e) => handleKeyNav(e, "/holographic-journey")}
//               className="px-6 py-3 border border-white/20 rounded-full"
//             >
//               Learn More
//             </button>
//           </div>
//         </div>
//       </section>
//       <AIAssistant />
//     </div>
//   );
// }


// src/pages/Home.jsx
import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

// Imported Sections (kept main ones; inline sections used for Trending & Categories)
import ToursCarousel from "../components/ToursCarousel";
import AIAssistant from "../components/AIAssistant";
import PricingPlans from "../components/PricingPlans";
import CyberTestimonials from "../components/CyberTestimonials";
import AnimatedStats from "../components/AnimatedStats";
import FaqAccordion from "../components/FaqAccordion";
import WeatherCityCards from "../components/WeatherCityCards";
import Footer from "../components/Footer";
export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const navigate = useNavigate();

  // Cursor follow glow
  const [cursor, setCursor] = useState({ x: -200, y: -200 });
  const containerRef = useRef(null);

  useEffect(() => {
    const box = containerRef.current;
    if (!box) return;

    const move = (e) => {
      const rect = box.getBoundingClientRect();
      setCursor({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const leave = () => setCursor({ x: -200, y: -200 });

    box.addEventListener("mousemove", move);
    box.addEventListener("mouseleave", leave);

    return () => {
      box.removeEventListener("mousemove", move);
      box.removeEventListener("mouseleave", leave);
    };
  }, []);

  // Hologram cards (Feature Experiences)
  const hologramCards = [
    {
      title: "Holographic Himalaya",
      subtitle: "Immersive mountain journeys",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Neon Coastlines",
      subtitle: "Bioluminescent beach escapes",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Aurora Trails",
      subtitle: "Northern lights & night safaris",
      img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  // Trending Destinations
  const trendingDestinations = [
    {
      name: "Bali",
      subtitle: "Tropical escape with beaches & temples",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Paris",
      subtitle: "City of love, culture & beautiful streets",
      img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Dubai",
      subtitle: "Luxury city with futuristic attractions",
      img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  // Explore categories
  const categories = [
    { name: "Adventure", subtitle: "Thrilling experiences await!" },
    { name: "Family Trips", subtitle: "Perfect vacations for your family" },
    { name: "Luxury Tours", subtitle: "Top-notch comfort & 5-star experience" },
    { name: "Wellness", subtitle: "Retreats for mind & body" },
  ];

  // slugify helper
  const slugify = (text) =>
    text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/[\s_]+/g, "-")
      .replace(/[^a-z0-9-]/g, "")
      .replace(/-+/g, "-");

  // keyboard navigation
  const handleKeyNav = (e, path) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      navigate(path);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full text-white bg-[#010414] overflow-visible"
    >
      {/* Cursor hologram glow */}
      <div
        className="pointer-events-none fixed z-[999] -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
        style={{
          left: cursor.x,
          top: cursor.y,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 30% 30%, rgba(0,200,255,0.25), rgba(124,76,255,0.12) 40%, transparent 60%)",
        }}
      />

      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          src="/videos/city.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
          <h1
            data-aos="fade-up"
            className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg"
          >
            Explore The World With <span className="text-blue-400">TourX</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-4 text-lg md:text-2xl text-gray-300 max-w-2xl"
          >
            Discover breathtaking destinations, unforgettable experiences, and
            seamless travel planning.
          </p>

          <div className="mt-8 flex gap-4">
            <button
              data-aos="zoom-in"
              data-aos-delay="400"
              onClick={() => navigate("/destination/bali")}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg rounded-full shadow-xl hover:opacity-90 transition"
            >
              Start Your Journey →
            </button>

            <button
              data-aos="zoom-in"
              data-aos-delay="500"
              onClick={() => navigate("/holographic-journey")}
              className="px-6 py-4 border border-white/20 text-white rounded-full hover:bg-white/5 transition"
            >
              Holographic Experience
            </button>
          </div>
        </div>
      </section>

      {/* HOLOGRAM FEATURE CARDS */}
      <section className="relative -mt-24 px-6 pb-6 z-40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {hologramCards.map((c, i) => {
            const route = `/experience/${slugify(c.title)}`;
            return (
              <article
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 140}
                className="backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden group cursor-pointer"
                onClick={() => navigate(route)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="h-44 w-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/5 opacity-0 group-hover:opacity-40 transition" />
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-semibold">{c.title}</h3>
                  <p className="text-gray-400 mt-2">{c.subtitle}</p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-md text-sm bg-white/5">
                      Immersive
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(route);
                      }}
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#7DF9FF] to-[#7C4CFF] text-black font-semibold"
                    >
                      Explore
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* TOURS CAROUSEL */}
      <ToursCarousel />

      {/* TRENDING DESTINATIONS */}
      <section className="py-12 px-6 bg-[#031424]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Trending Destinations</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {trendingDestinations.map((d, idx) => {
              const route = `/destination/${slugify(d.name)}`;
              return (
                <div
                  key={idx}
                  data-aos="fade-up"
                  onClick={() => navigate(route)}
                  className="relative rounded-2xl overflow-hidden cursor-pointer border border-white/10 shadow-lg"
                >
                  <img
                    src={d.img}
                    alt={d.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 bg-gradient-to-t from-black/60 to-transparent absolute bottom-0 left-0 right-0">
                    <h3 className="text-xl font-semibold">{d.name}</h3>
                    <p className="text-gray-300 text-sm">{d.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPLORE CATEGORIES */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Explore Categories</h2>

          <div className="flex flex-wrap gap-4">
            {categories.map((cat, i) => {
              const route = `/category/${slugify(cat.name)}`;
              return (
                <div
                  key={i}
                  onClick={() => navigate(route)}
                  className="min-w-[200px] p-6 rounded-2xl cursor-pointer bg-gradient-to-br from-[#02121a] to-[#072034] border border-white/10 shadow-lg hover:-translate-y-1 transition"
                >
                  <h3 className="text-xl font-semibold">{cat.name}</h3>
                  <p className="text-gray-400 mt-2">{cat.subtitle}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm text-blue-300 font-medium">
                    <span>View Tours</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRICING, TESTIMONIALS, STATS */}
      <PricingPlans />
      <CyberTestimonials />
      <AnimatedStats />

      {/* AR PREVIEW SECTION */}
      <section className="py-20 px-6 bg-[#060b18] text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-4xl font-bold mb-4">AR Preview</h2>
            <p className="text-gray-300 mb-6 text-lg">
              Explore our tours in Augmented Reality. Rotate the model, zoom in,
              and even place it in your room using AR mode.
            </p>
            <button
              onClick={() => navigate("/experience/ar-preview")}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#24C6DC] to-[#514A9D] text-black font-bold shadow-lg hover:opacity-90 transition"
            >
              Explore AR Tours
            </button>
          </div>

          {/* ❗ Corrected Model Viewer (No 404 Now!) */}
          <div
            data-aos="zoom-in"
            className="bg-black/30 border border-white/10 p-4 rounded-2xl backdrop-blur-xl shadow-lg"
          >
            <model-viewer
              src="https://modelviewer.dev/shared-assets/models/glTF-Sample-Models/2.0/Earth/glTF/Earth.gltf"
              alt="3D Earth Model"
              auto-rotate
              rotation-per-second="20deg"
              camera-controls
              ar
              ar-modes="webxr scene-viewer quick-look"
              disable-tap
              exposure="1.1"
              shadow-intensity="1"
              style={{
                width: "100%",
                height: "420px",
                borderRadius: "20px",
              }}
            />
          </div>
        </div>
      </section>

      {/* FAQ + Weather */}
      <FaqAccordion />
      <WeatherCityCards />
      <Footer />

      {/* FINAL CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#02203A] to-[#081827]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-3xl font-bold">Ready for a holographic journey?</h3>
            <p className="text-gray-300 mt-2">
              Plan your next futuristic trip with us.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => navigate("/holographic-journey")}
              className="px-6 py-3 bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black rounded-full font-semibold"
            >
              Contact Us
            </button>
            <button
              onClick={() => navigate("/holographic-journey")}
              className="px-6 py-3 border border-white/20 rounded-full"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      <AIAssistant />
    </div>
  );
}
