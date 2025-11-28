// // // // // src/pages/SingleTour.jsx
// // // // import React, { useEffect } from "react";
// // // // import AOS from "aos";
// // // // import "aos/dist/aos.css";
// // // // import { useParams, useNavigate } from "react-router-dom";

// // // // // Defensive import: if the file doesn't exist this will still throw — we'll catch below
// // // // let ALL_TOURS;
// // // // try {
// // // //   // adjust path if your data file location differs
// // // //   // eslint-disable-next-line import/no-unresolved
// // // //   ALL_TOURS = require("../data/tours").ALL_TOURS;
// // // // } catch (err) {
// // // //   // keep ALL_TOURS undefined, will show an error message below
// // // //   // eslint-disable-next-line no-console
// // // //   console.error("Failed to import ../data/tours — make sure file exists and exports ALL_TOURS", err);
// // // // }

// // // // export default function SingleTour() {
// // // //   const { id } = useParams(); // route: /tour/:id
// // // //   const navigate = useNavigate();

// // // //   useEffect(() => {
// // // //     AOS.init({ duration: 900, once: true });
// // // //     window.scrollTo(0, 0);
// // // //   }, []);

// // // //   // Defensive: log what we received
// // // //   // eslint-disable-next-line no-console
// // // //   console.log("SingleTour params id:", id, "ALL_TOURS keys:", ALL_TOURS ? Object.keys(ALL_TOURS) : "ALL_TOURS undefined");

// // // //   // If tours data missing -> show friendly message
// // // //   if (!ALL_TOURS) {
// // // //     return (
// // // //       <div className="min-h-screen bg-[#010414] text-white flex items-center justify-center p-6">
// // // //         <div className="max-w-xl text-center">
// // // //           <h2 className="text-2xl font-bold mb-3">Tours data not loaded</h2>
// // // //           <p className="text-gray-300 mb-4">
// // // //             The tours dataset (`src/data/tours.js`) could not be found or imported. Check the console for details.
// // // //           </p>
// // // //           <button
// // // //             onClick={() => navigate("/tours")}
// // // //             className="px-4 py-2 rounded bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black"
// // // //           >
// // // //             Back to Tours
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   const tour = ALL_TOURS[id];

// // // //   if (!tour) {
// // // //     // eslint-disable-next-line no-console
// // // //     console.warn(`Tour with id "${id}" not found in ALL_TOURS. Available:`, Object.keys(ALL_TOURS));
// // // //     return (
// // // //       <div className="min-h-screen bg-[#010414] text-white flex items-center justify-center p-6">
// // // //         <div className="max-w-xl text-center">
// // // //           <h2 className="text-2xl font-bold mb-3">Tour not found</h2>
// // // //           <p className="text-gray-300 mb-4">We couldn't find a tour matching <code className="bg-white/5 p-1 rounded">{id}</code>.</p>
// // // //           <button
// // // //             onClick={() => navigate("/tours")}
// // // //             className="px-4 py-2 rounded bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black"
// // // //           >
// // // //             Back to Tours
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="w-full bg-[#010414] text-white">
// // // //       <section className="relative h-[50vh] flex items-center justify-center">
// // // //         <img src={tour.images?.[0]} alt={tour.title} className="absolute inset-0 w-full h-full object-cover opacity-40" />
// // // //         <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
// // // //         <div className="relative z-20 text-center px-6">
// // // //           <h1 className="text-4xl md:text-6xl font-extrabold">{tour.title}</h1>
// // // //           <p className="text-gray-300 text-lg mt-3">{tour.location} • {tour.duration}</p>
// // // //         </div>
// // // //       </section>

// // // //       <section className="py-12 px-6 max-w-7xl mx-auto">
// // // //         <h2 className="text-3xl font-bold mb-6">Gallery</h2>
// // // //         <div className="grid md:grid-cols-3 gap-6">
// // // //           {(tour.images || []).map((img, i) => (
// // // //             <img key={i} src={img} alt={`${tour.title} ${i+1}`} className="h-64 w-full object-cover rounded-xl shadow-lg" />
// // // //           ))}
// // // //         </div>
// // // //       </section>

// // // //       <section className="py-12 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
// // // //         <div className="md:col-span-2">
// // // //           <h2 className="text-3xl font-bold">Overview</h2>
// // // //           <p className="text-gray-300 mt-4">{tour.description}</p>

// // // //           <h3 className="text-2xl font-semibold mt-10">Highlights</h3>
// // // //           <ul className="mt-4 space-y-3 text-gray-300">
// // // //             {(tour.highlights || []).map((h, i) => <li key={i} className="bg-white/5 p-3 rounded-lg">✔ {h}</li>)}
// // // //           </ul>

// // // //           <h3 className="text-2xl font-semibold mt-10">Itinerary</h3>
// // // //           <div className="mt-4 space-y-4">
// // // //             {(tour.itinerary || []).map((d, i) => (
// // // //               <div key={i} className="p-4 bg-white/5 rounded-xl">
// // // //                 <h4 className="text-xl font-semibold">{d.day}</h4>
// // // //                 <p className="text-gray-300">{d.detail}</p>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>

// // // //         <div className="bg-white/5 p-6 rounded-2xl border border-white/10 h-fit sticky top-10">
// // // //           <h3 className="text-2xl font-bold">Book This Tour</h3>
// // // //           <p className="text-gray-300 mt-3">Reserve your slot today!</p>
// // // //           <div className="mt-5">
// // // //             <span className="text-3xl font-extrabold text-[#7DF9FF]">₹{tour.price}</span>
// // // //           </div>
// // // //           <button className="mt-6 w-full px-6 py-3 bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black font-semibold rounded-full">
// // // //             Book Now
// // // //           </button>
// // // //         </div>
// // // //       </section>
// // // //     </div>
// // // //   );
// // // // }


// // // // src/pages/SingleTour.jsx
// // // import React, { useEffect } from "react";
// // // import AOS from "aos";
// // // import "aos/dist/aos.css";
// // // import { useParams, useNavigate } from "react-router-dom";
// // // import { ALL_TOURS } from "../data/tours"; // ES module import

// // // export default function SingleTour() {
// // //   const { id } = useParams(); // route: /tour/:id
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     AOS.init({ duration: 900, once: true });
// // //     window.scrollTo(0, 0);
// // //   }, []);

// // //   // debug log
// // //   // eslint-disable-next-line no-console
// // //   console.log("SingleTour id:", id, "ALL_TOURS keys:", ALL_TOURS ? Object.keys(ALL_TOURS) : "undefined");

// // //   if (!ALL_TOURS) {
// // //     return (
// // //       <div className="min-h-screen bg-[#010414] text-white flex items-center justify-center p-6">
// // //         <div className="max-w-xl text-center">
// // //           <h2 className="text-2xl font-bold mb-3">Tours data not loaded</h2>
// // //           <p className="text-gray-300 mb-4">Make sure <code>src/data/tours.js</code> exists and exports <code>ALL_TOURS</code>.</p>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   const tour = ALL_TOURS[id];

// // //   if (!tour) {
// // //     return (
// // //       <div className="min-h-screen bg-[#010414] text-white flex items-center justify-center p-6">
// // //         <div className="max-w-xl text-center">
// // //           <h2 className="text-2xl font-bold mb-3">Tour not found</h2>
// // //           <p className="text-gray-300 mb-4">No tour found for <code>{id}</code>.</p>
// // //           <button onClick={() => navigate("/tours")} className="mt-4 px-4 py-2 rounded bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black">
// // //             Back to Tours
// // //           </button>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="w-full bg-[#010414] text-white">
// // //       <section className="relative h-[50vh] flex items-center justify-center">
// // //         <img src={tour.images?.[0]} alt={tour.title} className="absolute inset-0 w-full h-full object-cover opacity-40" />
// // //         <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
// // //         <div className="relative z-20 text-center px-6">
// // //           <h1 className="text-4xl md:text-6xl font-extrabold">{tour.title}</h1>
// // //           <p className="text-gray-300 text-lg mt-3">{tour.location} • {tour.duration}</p>
// // //         </div>
// // //       </section>

// // //       <section className="py-12 px-6 max-w-7xl mx-auto">
// // //         <h2 className="text-3xl font-bold mb-6">Gallery</h2>
// // //         <div className="grid md:grid-cols-3 gap-6">
// // //           {(tour.images || []).map((img, i) => (
// // //             <img key={i} src={img} alt={`${tour.title} ${i+1}`} className="h-64 w-full object-cover rounded-xl shadow-lg" />
// // //           ))}
// // //         </div>
// // //       </section>

// // //       <section className="py-12 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
// // //         <div className="md:col-span-2">
// // //           <h2 className="text-3xl font-bold">Overview</h2>
// // //           <p className="text-gray-300 mt-4">{tour.description}</p>

// // //           <h3 className="text-2xl font-semibold mt-10">Highlights</h3>
// // //           <ul className="mt-4 space-y-3 text-gray-300">
// // //             {(tour.highlights || []).map((h, i) => <li key={i} className="bg-white/5 p-3 rounded-lg">✔ {h}</li>)}
// // //           </ul>

// // //           <h3 className="text-2xl font-semibold mt-10">Itinerary</h3>
// // //           <div className="mt-4 space-y-4">
// // //             {(tour.itinerary || []).map((d, i) => (
// // //               <div key={i} className="p-4 bg-white/5 rounded-xl">
// // //                 <h4 className="text-xl font-semibold">{d.day}</h4>
// // //                 <p className="text-gray-300">{d.detail}</p>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         <div className="bg-white/5 p-6 rounded-2xl border border-white/10 h-fit sticky top-10">
// // //           <h3 className="text-2xl font-bold">Book This Tour</h3>
// // //           <p className="text-gray-300 mt-3">Reserve your slot today!</p>
// // //           <div className="mt-5">
// // //             <span className="text-3xl font-extrabold text-[#7DF9FF]">₹{tour.price}</span>
// // //           </div>
// // //           <button className="mt-6 w-full px-6 py-3 bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black font-semibold rounded-full">Book Now</button>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // }


// // // src/pages/SingleTour.jsx
// // import React, { useEffect } from "react";
// // import AOS from "aos";
// // import "aos/dist/aos.css";
// // import { useParams, useNavigate } from "react-router-dom";
// // import { ALL_TOURS } from "../data/tours";

// // export default function SingleTour() {
// //   const { id } = useParams();
// //   const navigate = useNavigate();
// //   const tour = ALL_TOURS[id];

// //   useEffect(() => {
// //     AOS.init({ duration: 900, once: true });
// //     window.scrollTo(0, 0);
// //   }, [id]);

// //   if (!tour) {
// //     return (
// //       <div className="min-h-screen bg-[#010414] text-white flex items-center justify-center">
// //         <h1 className="text-3xl font-bold">Tour Not Found</h1>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="w-full bg-[#010414] text-white">

// //       {/* =====================================================
// //           HERO SECTION – Cinematic, Premium
// //       ====================================================== */}
// //       <section className="relative h-[60vh] flex items-center justify-center">
// //         <img
// //           src={tour.images[0]}
// //           alt={tour.title}
// //           className="absolute inset-0 w-full h-full object-cover opacity-40"
// //         />
// //         <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-[#010414]"></div>

// //         <div className="relative z-20 max-w-3xl text-center px-6">
// //           <h1 data-aos="fade-up" className="text-5xl md:text-6xl font-extrabold drop-shadow-xl">
// //             {tour.title}
// //           </h1>
// //           <p data-aos="fade-up" data-aos-delay="150" className="text-gray-300 text-lg mt-4">
// //             {tour.location} • {tour.duration}
// //           </p>
// //         </div>
// //       </section>

// //       {/* =====================================================
// //           IMAGE GALLERY – Premium Grid
// //       ====================================================== */}
// //       <section className="py-16 px-6 max-w-7xl mx-auto">
// //         <h2 data-aos="fade-right" className="text-3xl font-bold mb-8">
// //           Gallery
// //         </h2>

// //         <div className="grid md:grid-cols-3 gap-6">
// //           {tour.images.map((img, i) => (
// //             <div key={i} data-aos="zoom-in">
// //               <img
// //                 src={img}
// //                 className="rounded-xl shadow-xl h-64 w-full object-cover hover:scale-[1.03] transition"
// //               />
// //             </div>
// //           ))}
// //         </div>
// //       </section>

// //       {/* =====================================================
// //           TOUR DETAILS + STICKY BOOKING CARD
// //       ====================================================== */}
// //       <section className="py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        
// //         {/* LEFT CONTENT */}
// //         <div className="md:col-span-2">

// //           {/* Overview */}
// //           <h2 data-aos="fade-right" className="text-3xl font-bold">Overview</h2>
// //           <p data-aos="fade-up" className="text-gray-300 mt-4 leading-relaxed">
// //             {tour.description}
// //           </p>

// //           {/* Highlights */}
// //           <h3 data-aos="fade-right" className="text-2xl font-semibold mt-12 mb-3">
// //             Highlights
// //           </h3>

// //           <div className="space-y-4">
// //             {tour.highlights.map((h, i) => (
// //               <div
// //                 key={i}
// //                 data-aos="fade-up"
// //                 className="flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl p-3 rounded-xl"
// //               >
// //                 <span className="text-[#7DF9FF] text-xl">✔</span>
// //                 <span className="text-gray-300">{h}</span>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Itinerary */}
// //           <h3 data-aos="fade-right" className="text-2xl font-semibold mt-12 mb-3">
// //             Itinerary
// //           </h3>

// //           <div className="space-y-4">
// //             {tour.itinerary.map((day, i) => (
// //               <div
// //                 key={i}
// //                 data-aos="fade-up"
// //                 className="p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-xl"
// //               >
// //                 <h4 className="text-xl font-bold">{day.day}</h4>
// //                 <p className="text-gray-300">{day.detail}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* RIGHT – BOOKING CARD */}
// //         <div
// //           data-aos="fade-left"
// //           className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-xl shadow-lg sticky top-10 h-fit"
// //         >
// //           <h3 className="text-2xl font-bold">Book This Tour</h3>
// //           <p className="text-gray-300 mt-2">Reserve your slot today!</p>

// //           <div className="mt-6">
// //             <span className="text-4xl font-bold text-[#7DF9FF]">
// //               ₹{tour.price}
// //             </span>
// //             <span className="text-gray-400 ml-1">/person</span>
// //           </div>

// //           <button
// //             className="mt-6 w-full py-3 rounded-full bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black font-semibold hover:opacity-90 transition"
// //           >
// //             Book Now
// //           </button>
// //         </div>

// //       </section>

// //       {/* =====================================================
// //           CTA
// //       ====================================================== */}
// //       <section className="py-20 text-center bg-gradient-to-r from-[#02203A] to-[#081827]">
// //         <h2 className="text-3xl font-bold">Want a Custom Travel Plan?</h2>
// //         <p className="text-gray-300 mt-2">We design trips based on your lifestyle & budget.</p>
// //         <button className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black font-semibold">
// //           Contact Support
// //         </button>
// //       </section>

// //     </div>
// //   );
// // }


// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useParams, useNavigate } from "react-router-dom";
// import { ALL_TOURS } from "../data/tours";

// export default function SingleTour() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const tour = ALL_TOURS[id];

//   // FIXED — DO NOT add dynamic dependencies here
//   useEffect(() => {
//     AOS.init({ duration: 900, once: true });
//     window.scrollTo(0, 0);
//   }, []);

//   if (!tour) {
//     return (
//       <div className="min-h-screen bg-[#010414] text-white flex items-center justify-center">
//         <div>
//           <h1 className="text-4xl font-bold">Tour Not Found</h1>
//           <p className="text-gray-400 mt-2">ID: {id}</p>
//           <button
//             onClick={() => navigate("/tours")}
//             className="mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black font-semibold"
//           >
//             Back to Tours
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full bg-[#010414] text-white">

//       {/* HERO */}
//       <section className="relative h-[60vh] flex items-center justify-center">
//         <img
//           src={tour.images[0]}
//           alt={tour.title}
//           className="absolute inset-0 w-full h-full object-cover opacity-40"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-[#010414]" />

//         <div className="relative z-20 max-w-3xl text-center px-6">
//           <h1 className="text-5xl md:text-6xl font-extrabold">{tour.title}</h1>
//           <p className="text-gray-300 text-lg mt-4">
//             {tour.location} • {tour.duration}
//           </p>
//         </div>
//       </section>

//       {/* GALLERY */}
//       <section className="py-16 px-6 max-w-7xl mx-auto">
//         <h2 className="text-3xl font-bold mb-8">Gallery</h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           {tour.images.map((img, i) => (
//             <img
//               key={i}
//               src={img}
//               className="rounded-xl shadow-xl h-64 w-full object-cover hover:scale-[1.03] transition"
//             />
//           ))}
//         </div>
//       </section>

//       {/* DETAILS */}
//       <section className="py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

//         <div className="md:col-span-2">
//           <h2 className="text-3xl font-bold">Overview</h2>
//           <p className="text-gray-300 mt-4 leading-relaxed">
//             {tour.description}
//           </p>

//           <h3 className="text-2xl font-semibold mt-12 mb-3">Highlights</h3>
//           <div className="space-y-4">
//             {tour.highlights.map((h, i) => (
//               <div key={i} className="bg-white/5 p-3 rounded-xl border border-white/10 flex gap-3">
//                 <span className="text-[#7DF9FF] text-xl">✔</span>
//                 <span className="text-gray-300">{h}</span>
//               </div>
//             ))}
//           </div>

//           <h3 className="text-2xl font-semibold mt-12 mb-3">Itinerary</h3>
//           <div className="space-y-4">
//             {tour.itinerary.map((d, i) => (
//               <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl">
//                 <h4 className="text-xl font-bold">{d.day}</h4>
//                 <p className="text-gray-300">{d.detail}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="bg-white/5 p-6 rounded-2xl border border-white/10 sticky top-10 h-fit">
//           <h3 className="text-2xl font-bold">Book This Tour</h3>
//           <p className="text-gray-300 mt-2">Reserve your slot today!</p>

//           <div className="mt-6">
//             <span className="text-4xl font-bold text-[#7DF9FF]">
//               ₹{tour.price}
//             </span>
//             <span className="text-gray-400 ml-1">/person</span>
//           </div>

//           <button className="mt-6 w-full py-3 rounded-full bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black font-semibold">
//             Book Now
//           </button>
//         </div>

//       </section>

//     </div>
//   );
// }


import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useParams, useNavigate } from "react-router-dom";
import { ALL_TOURS } from "../data/tours";

export default function SingleTour() {
  const { id } = useParams();
  const navigate = useNavigate();

  const tour = ALL_TOURS[id];

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
    window.scrollTo(0, 0);
  }, []);

  if (!tour) {
    return (
      <div className="min-h-screen bg-[#010414] text-white flex items-center justify-center">
        <div>
          <h1 className="text-4xl font-bold">Tour Not Found</h1>
          <p className="text-gray-400 mt-2">ID: {id}</p>

          <button
            onClick={() => navigate("/tours")}
            className="mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black font-semibold"
          >
            Back to Tours
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#010414] text-white">

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <img
          src={tour.images[0]}
          alt={tour.title}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-[#010414]" />

        <div className="relative z-20 max-w-3xl text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold">{tour.title}</h1>
          <p className="text-gray-300 text-lg mt-4">
            {tour.location} • {tour.duration}
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Gallery</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {tour.images.map((img, i) => (
            <img
              key={i}
              src={img}
              className="rounded-xl shadow-xl h-64 w-full object-cover hover:scale-[1.03] transition"
            />
          ))}
        </div>
      </section>

      {/* DETAILS */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        <div className="md:col-span-2">

          {/* OVERVIEW */}
          <h2 className="text-3xl font-bold">Overview</h2>
          <p className="text-gray-300 mt-4 leading-relaxed">{tour.description}</p>

          {/* HIGHLIGHTS */}
          <h3 className="text-2xl font-semibold mt-12 mb-3">Highlights</h3>
          <div className="space-y-4">
            {tour.highlights.map((h, i) => (
              <div key={i} className="bg-white/5 p-3 rounded-xl border border-white/10 flex gap-3">
                <span className="text-[#7DF9FF] text-xl">✔</span>
                <span className="text-gray-300">{h}</span>
              </div>
            ))}
          </div>

          {/* ITINERARY */}
          <h3 className="text-2xl font-semibold mt-12 mb-3">Itinerary</h3>
          <div className="space-y-4">
            {tour.itinerary.map((d, i) => (
              <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl">
                <h4 className="text-xl font-bold">{d.day}</h4>
                <p className="text-gray-300">{d.detail}</p>
              </div>
            ))}
          </div>

        </div>

        {/* BOOKING CARD */}
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 sticky top-10 h-fit">
          <h3 className="text-2xl font-bold">Book This Tour</h3>
          <p className="text-gray-300 mt-2">Reserve your slot today!</p>

          <div className="mt-6">
            <span className="text-4xl font-bold text-[#7DF9FF]">
              ₹{tour.price}
            </span>
            <span className="text-gray-400 ml-1">/person</span>
          </div>

          <button className="mt-6 w-full py-3 rounded-full bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black font-semibold">
            Book Now
          </button>
        </div>
      </section>

    </div>
  );
}
