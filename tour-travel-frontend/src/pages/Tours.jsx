// // src/pages/Tours.jsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Tours() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  // Filters
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState(30000);

  const categories = ["All", "Adventure", "Beach", "City", "Mountains", "Wildlife"];

  // Static tour data (replace with backend API later)
  const tours = [
    {
      id: 1,
      title: "Himalayan Expedition",
      category: "Mountains",
      price: 15000,
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      title: "Goa Neon Beach",
      category: "Beach",
      price: 12000,
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      title: "City Night Lights Tour",
      category: "City",
      price: 9000,
      img: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 4,
      title: "Aurora Trails",
      category: "Adventure",
      price: 25000,
      img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 5,
      title: "Wildlife Jungle Safari",
      category: "Wildlife",
      price: 18000,
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 6,
      title: "Desert Night Camping",
      category: "Adventure",
      price: 14000,
      img: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const filteredTours = tours.filter((t) => {
    return (
      t.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || t.category === category) &&
      t.price <= price
    );
  });

  return (
    <div className="w-full text-white bg-[#010414] min-h-screen">

      {/* HERO */}
      <section className="relative h-[45vh] flex items-center justify-center text-center px-6">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1800&q=80"
          alt="Tours"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90"></div>

        <div className="relative z-20">
          <h1 className="text-4xl md:text-6xl font-extrabold" data-aos="fade-up">
            Explore Tours
          </h1>
          <p
            className="mt-4 text-lg max-w-2xl mx-auto text-gray-300"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Choose from futuristic, premium, and personalized travel experiences.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
          
          <h2 className="text-2xl font-bold mb-6">Filter Your Perfect Trip</h2>

          <div className="grid md:grid-cols-3 gap-6">

            {/* Search */}
            <div>
              <label className="text-gray-300 mb-2 block">Search Tour</label>
              <input
                className="w-full p-3 rounded-lg bg-white/10 border border-white/10 text-white"
                placeholder="Search…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Category */}
            <div>
              <label className="text-gray-300 mb-2 block">Category</label>
              <select
                className="w-full p-3 rounded-lg bg-white/10 border border-white/10 text-white"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="text-gray-300 mb-2 block">Max Price: ₹{price}</label>
              <input
                type="range"
                min="5000"
                max="30000"
                step="1000"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full"
              />
            </div>

          </div>
        </div>
      </section>

      {/* TOURS GRID */}
      <section className="py-10 px-6">
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

          {filteredTours.length === 0 && (
            <p className="text-center col-span-3 text-gray-400 text-lg">
              No tours found. Try adjusting filters.
            </p>
          )}

          {filteredTours.map((t, i) => (
            <div
              key={t.id}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:scale-[1.03] transition duration-300"
            >
              <img src={t.img} alt={t.title} className="h-48 w-full object-cover" />

              <div className="p-5">
                <h3 className="text-xl font-semibold">{t.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{t.category}</p>

                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-bold text-[#7DF9FF]">
                    ₹{t.price}
                  </span>

                  <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#7DF9FF] to-[#7C4CFF] text-black font-semibold">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-[#02203A] to-[#081827]">
        <h2 className="text-3xl font-bold">Need a Custom Tour?</h2>
        <p className="text-gray-300 mt-2">
          Tell us what you love, and we’ll design a tailored holographic journey for you.
        </p>
        <button className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black font-semibold">
          Contact Us
        </button>
      </section>

    </div>
  );
}


// // // src/data/tours.js
// // const ALL_TOURS = {
// //   "mountain-trekking-7d": {
// //     title: "Mountain Trekking 7 Days",
// //     location: "Himalayas, India",
// //     duration: "7 Days",
// //     price: 18000,
// //     description: "A thrilling 7-day Himalayan trek covering valleys, peaks, and alpine lakes.",
// //     images: [
// //       "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
// //       "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80"
// //     ],
// //     highlights: ["High-altitude trekking", "Alpine camps", "Glacier lake visit", "Local village exploration"],
// //     itinerary: [
// //       { day: "Day 1", detail: "Arrival + base camp orientation" },
// //       { day: "Day 2", detail: "Trek to campsite" },
// //       { day: "Day 3", detail: "Valley + waterfall hike" },
// //       { day: "Day 4", detail: "Summit attempt" },
// //       { day: "Day 5", detail: "Alpine lake exploration" },
// //       { day: "Day 6", detail: "Return trek" },
// //       { day: "Day 7", detail: "Departure" }
// //     ]
// //   },

// //   "whitewater-rafting-day-tour": {
// //     title: "Whitewater Rafting Day Tour",
// //     location: "Rishikesh, India",
// //     duration: "1 Day",
// //     price: 8000,
// //     description: "Raft through Grade 3–4 rapids with expert instructors on the Ganga River.",
// //     images: [
// //       "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
// //       "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=1200&q=80"
// //     ],
// //     highlights: ["Rapids adventure", "Cliff jumping", "Riverside lunch"],
// //     itinerary: [{ day: "Day 1", detail: "Rafting + cliff jumping + riverside lunch" }]
// //   },

// //   "aurora-trails-expedition": {
// //     title: "Aurora Trails Expedition",
// //     location: "Iceland + Norway",
// //     duration: "6 Days",
// //     price: 25000,
// //     description: "Experience the magical aurora borealis with guided expeditions and night safaris.",
// //     images: [
// //       "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
// //       "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1200&q=80"
// //     ],
// //     highlights: ["Aurora safari", "Ice cave walk", "Glacier trekking", "Photography workshop"],
// //     itinerary: [
// //       { day: "Day 1", detail: "Arrival + tour briefing" },
// //       { day: "Day 2", detail: "Aurora night safari" },
// //       { day: "Day 3", detail: "Glacier walk" }
// //     ]
// //   },

// //   "family-beach-week": {
// //     title: "Family Beach Week",
// //     location: "Goa & Nearby Islands",
// //     duration: "7 Days",
// //     price: 14000,
// //     description: "Relaxing family-friendly beachfront stay with kid-friendly activities and island trips.",
// //     images: [
// //       "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
// //     ],
// //     highlights: ["Beach games", "Island day trip", "Family resort stay"],
// //     itinerary: [{ day: "Day 1", detail: "Arrival + pool day" }]
// //   },

// //   "theme-park-weekend": {
// //     title: "Theme Park Weekend",
// //     location: "Nearby Theme Parks",
// //     duration: "2 Days",
// //     price: 7000,
// //     description: "A fun-packed weekend exploring top theme parks with fast-track passes.",
// //     images: ["https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"],
// //     highlights: ["Fast-track", "Family rides", "Shows"],
// //     itinerary: [{ day: "Day 1", detail: "Theme park day" }]
// //   },

// //   "luxury-dubai-5n": {
// //     title: "Luxury Dubai 5N",
// //     location: "Dubai, UAE",
// //     duration: "5 Nights",
// //     price: 60000,
// //     description: "5-star hotels, private drivers, desert safaris, and VIP experiences.",
// //     images: ["https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80"],
// //     highlights: ["Private tours", "Luxury dining", "Desert safari"],
// //     itinerary: [{ day: "Day 1", detail: "Arrival + private city tour" }]
// //   },

// //   "private-island-retreat": {
// //     title: "Private Island Retreat",
// //     location: "Tropical Islands",
// //     duration: "4 Days",
// //     price: 85000,
// //     description: "Exclusive private island stay with butler service and water sports.",
// //     images: ["https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"],
// //     highlights: ["Private villa", "Butler service", "Water sports"],
// //     itinerary: [{ day: "Day 1", detail: "Transfer to private island" }]
// //   },

// //   "yoga-retreat-5d": {
// //     title: "Yoga Retreat 5D",
// //     location: "Kerala Retreat Center",
// //     duration: "5 Days",
// //     price: 22000,
// //     description: "Daily yoga, healthy meals, and mindfulness workshops.",
// //     images: ["https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"],
// //     highlights: ["Yoga sessions", "Detox meals", "Meditation"],
// //     itinerary: [{ day: "Day 1", detail: "Arrival + intro session" }]
// //   },

// //   "spa-detox-week": {
// //     title: "Spa & Detox Week",
// //     location: "Luxury Wellness Resort",
// //     duration: "7 Days",
// //     price: 40000,
// //     description: "Detox programs, spa treatments, and holistic wellness plans.",
// //     images: ["https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"],
// //     highlights: ["Spa treatments", "Detox meals", "Wellness workshops"],
// //     itinerary: [{ day: "Day 1", detail: "Arrival + consultation" }]
// //   }
// // };
// // }


// // src/pages/Tours.jsx
// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useNavigate } from "react-router-dom";
// import { ALL_TOURS } from "../data/tours"; // Import main tour dataset

// export default function Tours() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     AOS.init({ duration: 900, once: true });
//     window.scrollTo(0, 0);
//   }, []);

//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All");
//   const [price, setPrice] = useState(90000);

//   const categories = [
//     "All",
//     "Adventure",
//     "Mountains",
//     "Beach",
//     "City",
//     "Family",
//     "Luxury",
//     "Wellness",
//     "Wildlife",
//   ];

//   // Convert ALL_TOURS object → array
//   const tours = Object.entries(ALL_TOURS).map(([id, t]) => ({
//     id,
//     ...t,
//   }));

//   // FILTER
//   const filteredTours = tours.filter((tour) => {
//     const matchesSearch = tour.title
//       .toLowerCase()
//       .includes(search.toLowerCase());

//     const matchesPrice = tour.price <= price;

//     const matchesCategory =
//       category === "All" ||
//       tour.title.toLowerCase().includes(category.toLowerCase()) ||
//       (tour.category && tour.category === category);

//     return matchesSearch && matchesCategory && matchesPrice;
//   });

//   return (
//     <div className="w-full text-white bg-[#010414] min-h-screen">
//       {/* HERO */}
//       <section className="relative h-[45vh] flex items-center justify-center text-center px-6">
//         <img
//           src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1800&q=80"
//           alt="Tours"
//           className="absolute inset-0 w-full h-full object-cover opacity-40"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90"></div>

//         <div className="relative z-20">
//           <h1 className="text-4xl md:text-6xl font-extrabold" data-aos="fade-up">
//             Explore Tours
//           </h1>
//           <p
//             className="mt-4 text-lg max-w-2xl mx-auto text-gray-300"
//             data-aos="fade-up"
//             data-aos-delay="150"
//           >
//             Browse all our premium travel experiences.
//           </p>
//         </div>
//       </section>

//       {/* FILTERS */}
//       <section className="py-10 px-6">
//         <div className="max-w-7xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
//           <h2 className="text-2xl font-bold mb-6">Filter Your Perfect Trip</h2>

//           <div className="grid md:grid-cols-3 gap-6">
//             {/* Search */}
//             <div>
//               <label className="text-gray-300 mb-2 block">Search Tour</label>
//               <input
//                 className="w-full p-3 rounded-lg bg-white/10 border border-white/10 text-white"
//                 placeholder="Search…"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//               />
//             </div>

//             {/* Category */}
//             <div>
//               <label className="text-gray-300 mb-2 block">Category</label>
//               <select
//                 className="w-full p-3 rounded-lg bg-white/10 border border-white/10 text-white"
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//               >
//                 {categories.map((c) => (
//                   <option key={c}>{c}</option>
//                 ))}
//               </select>
//             </div>

//             {/* Price */}
//             <div>
//               <label className="text-gray-300 mb-2 block">
//                 Max Price: ₹{price}
//               </label>
//               <input
//                 type="range"
//                 min="5000"
//                 max="90000"
//                 step="5000"
//                 value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//                 className="w-full"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* TOURS GRID */}
//       <section className="py-10 px-6">
//         <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {filteredTours.length === 0 && (
//             <p className="text-center col-span-3 text-gray-400 text-lg">
//               No tours found. Try adjusting filters.
//             </p>
//           )}

//           {filteredTours.map((t, index) => (
//             <div
//               key={t.id}
//               data-aos="fade-up"
//               data-aos-delay={index * 80}
//               className="rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:scale-[1.03] transition duration-300 cursor-pointer"
//               onClick={() => navigate(`/tour/${t.id}`)}
//             >
//               <img
//                 src={t.images?.[0]}
//                 alt={t.title}
//                 className="h-48 w-full object-cover"
//               />

//               <div className="p-5">
//                 <h3 className="text-xl font-semibold">{t.title}</h3>
//                 <p className="text-sm text-gray-400 mt-1">{t.location}</p>

//                 <div className="mt-4 flex justify-between items-center">
//                   <span className="text-lg font-bold text-[#7DF9FF]">
//                     ₹{t.price}
//                   </span>

//                   <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#7DF9FF] to-[#7C4CFF] text-black font-semibold">
//                     View
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-20 px-6 text-center bg-gradient-to-r from-[#02203A] to-[#081827]">
//         <h2 className="text-3xl font-bold">Need a Custom Tour?</h2>
//         <p className="text-gray-300 mt-2">
//           Tell us what you love—we'll design your perfect experience.
//         </p>
//         <button className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black font-semibold">
//           Contact Us
//         </button>
//       </section>
//     </div>
//   );
// }

