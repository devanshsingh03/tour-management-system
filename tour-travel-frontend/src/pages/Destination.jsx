// // src/pages/Destination.jsx
// import React, { useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const MOCK = {
//   bali: {
//     title: "Bali",
//     intro: "Tropical escape with beaches & temples.",
//     highlights: [
//       "Uluwatu cliffs & surf",
//       "Sacred temples and rice terraces",
//       "Beach clubs & nightlife",
//     ],
//     img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
//   },

//   paris: {
//     title: "Paris",
//     intro: "City of love, culture & beautiful streets.",
//     highlights: ["Eiffel Tower", "Louvre", "Seine river cruises"],
//     img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
//   },

//   dubai: {
//     title: "Dubai",
//     intro: "Luxury city with futuristic attractions.",
//     highlights: ["Burj Khalifa", "Desert safaris", "Luxury malls"],
//     img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80",
//   },

//   // ⭐ ADDING MISSING DESTINATIONS ⭐
//   reykjavik: {
//     title: "Reykjavik",
//     intro: "Gateway to Iceland’s magical landscapes.",
//     highlights: [
//       "Northern Lights viewing",
//       "Blue Lagoon hot springs",
//       "Volcanic hiking trails"
//     ],
//     img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
//   },

//   "goa-beaches": {
//     title: "Goa Beaches",
//     intro: "Golden sands, waves, nightlife & relaxation.",
//     highlights: [
//       "Candolim & Calangute beaches",
//       "Water sports & cruises",
//       "Beach shacks & nightlife"
//     ],
//     img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
//   },

//   ladakh: {
//     title: "Ladakh",
//     intro: "Breathtaking mountains & high-altitude adventures.",
//     highlights: [
//       "Pangong Lake",
//       "Magnetic Hill",
//       "Khardung La Pass"
//     ],
//     img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
//   },

//   sundarbans: {
//     title: "Sundarbans",
//     intro: "Mangrove forests & wildlife in their raw form.",
//     highlights: [
//       "Royal Bengal Tiger safari",
//       "Mangrove boat tours",
//       "Biodiversity exploration"
//     ],
//     img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
//   },
// };

// export default function Destination() {
//   const { slug } = useParams();
//   const navigate = useNavigate();
//   const data = (MOCK[slug] || {
//     title: slug?.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()) || "Destination",
//     intro: "Information coming soon.",
//     highlights: [],
//     img: "",
//   });

//   useEffect(() => {
//     document.title = `${data.title} — TourX`;
//     window.scrollTo(0, 0);
//   }, [slug]);

//   return (
//     <main className="min-h-screen bg-[#010414] text-white py-12 px-6">
//       <div className="max-w-4xl mx-auto rounded-2xl p-6 bg-black/40 shadow-lg">
//         <button onClick={() => navigate(-1)} className="mb-4 px-3 py-2 rounded-md border border-white/10 text-sm">
//           ← Back
//         </button>

//         {data.img && <img src={data.img} alt={data.title} className="w-full h-64 object-cover rounded-lg mb-6" />}

//         <h1 className="text-3xl font-bold">{data.title}</h1>
//         <p className="text-gray-300 mt-2">{data.intro}</p>

//         <section className="mt-6">
//           <h3 className="text-xl font-semibold mb-2">Highlights</h3>
//           <ul className="list-disc ml-5 text-gray-200">
//             {data.highlights.length ? (
//               data.highlights.map((h, i) => <li key={i}>{h}</li>)
//             ) : (
//               <li>Highlights coming soon.</li>
//             )}
//           </ul>
//         </section>

//         <div className="mt-6 flex gap-3">
//           <button onClick={() => navigate(`/category/adventure`)} className="px-4 py-2 rounded-md bg-white/5">See Adventure Tours</button>
//           <button onClick={() => navigate("/holographic-journey")} className="px-4 py-2 rounded-md bg-gradient-to-r from-[#24C6DC] to-[#514A9D] text-black">Holographic Preview</button>
//         </div>
//       </div>
//     </main>
//   );
// }

// src/pages/Destination.jsx
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const MOCK = {
  bali: {
    title: "Bali",
    intro: "Tropical escape with beaches & temples.",
    highlights: [
      "Uluwatu cliffs & surf",
      "Sacred temples and rice terraces",
      "Beach clubs & nightlife",
    ],
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },

  paris: {
    title: "Paris",
    intro: "City of love, culture & beautiful streets.",
    highlights: ["Eiffel Tower", "Louvre", "Seine river cruises"],
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
  },

  dubai: {
    title: "Dubai",
    intro: "Luxury city with futuristic attractions.",
    highlights: ["Burj Khalifa", "Desert safaris", "Luxury malls"],
    img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80",
  },

  // ⭐ ADDING MISSING DESTINATIONS ⭐
  reykjavik: {
    title: "Reykjavik",
    intro: "Gateway to Iceland’s magical landscapes.",
    highlights: [
      "Northern Lights viewing",
      "Blue Lagoon hot springs",
      "Volcanic hiking trails"
    ],
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
  },

  "goa-beaches": {
    title: "Goa Beaches",
    intro: "Golden sands, waves, nightlife & relaxation.",
    highlights: [
      "Candolim & Calangute beaches",
      "Water sports & cruises",
      "Beach shacks & nightlife"
    ],
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  },

  ladakh: {
    title: "Ladakh",
    intro: "Breathtaking mountains & high-altitude adventures.",
    highlights: [
      "Pangong Lake",
      "Magnetic Hill",
      "Khardung La Pass"
    ],
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
  },

  sundarbans: {
    title: "Sundarbans",
    intro: "Mangrove forests & wildlife in their raw form.",
    highlights: [
      "Royal Bengal Tiger safari",
      "Mangrove boat tours",
      "Biodiversity exploration"
    ],
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
};

export default function Destination() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const data = (MOCK[slug] || {
    title: slug?.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()) || "Destination",
    intro: "Information coming soon.",
    highlights: [],
    img: "",
  });

  useEffect(() => {
    document.title = `${data.title} — TourX`;
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <main className="min-h-screen bg-[#010414] text-white py-12 px-6">
      <div className="max-w-4xl mx-auto rounded-2xl p-6 bg-black/40 shadow-lg">
        <button onClick={() => navigate(-1)} className="mb-4 px-3 py-2 rounded-md border border-white/10 text-sm">
          ← Back
        </button>

        {data.img && <img src={data.img} alt={data.title} className="w-full h-64 object-cover rounded-lg mb-6" />}

        <h1 className="text-3xl font-bold">{data.title}</h1>
        <p className="text-gray-300 mt-2">{data.intro}</p>

        <section className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Highlights</h3>
          <ul className="list-disc ml-5 text-gray-200">
            {data.highlights.length ? (
              data.highlights.map((h, i) => <li key={i}>{h}</li>)
            ) : (
              <li>Highlights coming soon.</li>
            )}
          </ul>
        </section>

        {/* <div className="mt-6 flex gap-3">
          <button onClick={() => navigate(`/category/adventure`)} className="px-4 py-2 rounded-md bg-white/5">See Adventure Tours</button>
          
        </div> */}

        <div className="mt-6 flex gap-3">
  <button
    onClick={() => navigate(`/tours?destination=${slug}`)}
    className="px-5 py-3 rounded-md bg-gradient-to-r from-blue-500 to-purple-600 text-white"
  >
    View Available Tours
  </button>

  <button
    onClick={() => navigate("/tours")}
    className="px-5 py-3 rounded-md border border-white/10"
  >
    Browse All Tours
  </button>
</div>

      </div>
    </main>
  );
}
