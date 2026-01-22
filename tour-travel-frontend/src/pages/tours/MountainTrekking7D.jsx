// import MountainTrekking7d from "../../data/tours/mountainTrekking7d";

// export default function MountainTrekking7D() {
//   const tour = MountainTrekking7d;

//   return (
//     <div className="min-h-screen bg-[#010414] text-white">
//       {/* ================= HERO ================= */}
//       <section className="relative h-[75vh]">
//         <img
//           src={tour.images[0]}
//           alt={tour.title}
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

//         <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-end pb-16">
//           <div>
//             <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
//               {tour.title}
//             </h1>
//             <p className="text-lg text-gray-300 mb-2">
//               📍 {tour.location}
//             </p>
//             <p className="text-gray-200 max-w-2xl">
//               {tour.description}
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ================= CONTENT ================= */}
//       <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
//         {/* LEFT CONTENT */}
//         <div className="md:col-span-2">
//           {/* HIGHLIGHTS */}
//           <h2 className="text-3xl font-bold mb-6">Highlights</h2>

//           <div className="grid sm:grid-cols-2 gap-4 mb-14">
//             {tour.highlights.map((h, i) => (
//               <div
//                 key={i}
//                 className="p-5 rounded-xl bg-[#020817] border border-white/10 hover:border-blue-500/40 transition"
//               >
//                 <span className="text-blue-400 mr-2">✔</span>
//                 {h}
//               </div>
//             ))}
//           </div>

//           {/* ITINERARY */}
//           <h2 className="text-3xl font-bold mb-6">Day-wise Itinerary</h2>

//           <div className="space-y-4">
//             {tour.itinerary.map((day, i) => (
//               <div
//                 key={i}
//                 className="p-5 rounded-xl bg-[#020817] border border-white/10"
//               >
//                 <h4 className="font-semibold text-lg mb-1">
//                   {day.day}
//                 </h4>
//                 <p className="text-gray-300">{day.detail}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT CARD */}
//         <div className="sticky top-28 h-fit">
//           <div className="rounded-2xl bg-[#020817] border border-white/10 p-6 shadow-xl">
//             <div className="flex justify-between mb-4">
//               <span className="text-gray-400">Duration</span>
//               <span className="font-semibold">{tour.duration}</span>
//             </div>

//             <div className="flex justify-between mb-6">
//               <span className="text-gray-400">Price</span>
//               <span className="text-3xl font-bold text-blue-400">
//                 ₹{tour.price}
//               </span>
//             </div>

//             <button className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 font-semibold text-lg hover:opacity-90 transition">
//               Book This Trek
//             </button>

//             <p className="text-xs text-gray-400 mt-4 text-center">
//               No cost EMI • Instant confirmation
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


import mountainTrekking7d from "../../data/tours/mountainTrekking7d";

export default function MountainTrekking7D() {
  const tour = mountainTrekking7d;

  return (
    <div className="min-h-screen bg-[#010414] text-white">
      <img
        src={tour.images[0]}
        alt={tour.title}
        className="w-full h-[400px] object-cover"
      />

      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-4xl font-bold mt-6">{tour.title}</h1>
        <p className="text-gray-400">{tour.location}</p>
        <p className="mt-4">{tour.description}</p>

        <h2 className="text-2xl font-semibold mt-8">Highlights</h2>
        <ul className="list-disc pl-6 mt-3">
          {tour.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>

        <p className="text-3xl font-bold mt-8">₹{tour.price}</p>
      </div>
    </div>
  );
}
