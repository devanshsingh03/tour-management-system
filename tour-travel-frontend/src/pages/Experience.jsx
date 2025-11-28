// src/pages/Experience.jsx
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const MOCK = {
  "holographic-himalaya": {
    title: "Holographic Himalaya",
    subtitle: "Immersive mountain journeys",
    desc:
      "Step inside a living, breathing hologram of the Himalayas. Walk valleys, feel wind, and try AR camping.",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
  },
  "neon-coastlines": {
    title: "Neon Coastlines",
    subtitle: "Bioluminescent beach escapes",
    desc: "Glowing shores, night swims, and bioluminescent shows recreated for you.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  },
  "aurora-trails": {
    title: "Aurora Trails",
    subtitle: "Northern lights & night safaris",
    desc: "Experience the aurora in controlled conditions with guided stargazing and story-driven tours.",
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
  },
  "ar-preview": {
    title: "AR Preview",
    subtitle: "Augmented Reality Tour Preview",
    desc: "Preview tours in AR — rotate models, zoom, and place them in your space.",
    img: "https://images.unsplash.com/photo-1547038577-da5f7dd8fc22?auto=format&fit=crop&w=1200&q=80",
  },
};

export default function Experience() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const data = MOCK[slug] || {
    title: slug?.split("-").map(s => s[0].toUpperCase() + s.slice(1)).join(" ") || "Experience",
    subtitle: "",
    desc: "Details coming soon.",
    img: "",
  };

  useEffect(() => {
    document.title = `${data.title} — TourX`;
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <main className="min-h-screen bg-[#010414] text-white py-12 px-6">
      <div className="max-w-5xl mx-auto bg-gradient-to-b from-black/40 to-transparent rounded-2xl p-6 shadow-lg">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 px-3 py-2 rounded-md border border-white/10 text-sm"
        >
          ← Back
        </button>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          {data.img && (
            <img src={data.img} alt={data.title} className="w-full h-72 object-cover rounded-lg" />
          )}

          <div>
            <h1 className="text-3xl font-bold">{data.title}</h1>
            {data.subtitle && <p className="text-gray-300 mt-2">{data.subtitle}</p>}
            <p className="mt-4 text-gray-200 leading-relaxed">{data.desc}</p>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => navigate("/holographic-journey")}
                className="px-5 py-3 rounded-full bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black font-semibold"
              >
                Book Holographic Experience
              </button>
              <button
                onClick={() => navigate("/destination/bali")}
                className="px-5 py-3 rounded-full border border-white/10"
              >
                Explore Related Destinations
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
