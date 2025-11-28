// src/pages/Blog.jsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

export default function Blog() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const navigate = useNavigate();
  const [category, setCategory] = useState("All");
  const [showSubscribe, setShowSubscribe] = useState(false);

  const categories = ["All", "Adventure", "Beach", "City", "Tips", "Travel Tech"];

  const posts = [
    {
      id: 1,
      title: "Top 5 Futuristic Destinations for 2025",
      category: "Travel Tech",
      img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
      desc: "Explore the next-gen travel spots powered by immersive technologies.",
      content: "Full detailed article content for post 1..."
    },
    {
      id: 2,
      title: "Best Beaches to Visit in India",
      category: "Beach",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      desc: "From Goa to Andamans — these beaches are paradise.",
      content: "Full detailed article content for post 2..."
    },
    {
      id: 3,
      title: "10 Adventure Trips You Must Try",
      category: "Adventure",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      desc: "Mountains, rivers, forests — push your limits!",
      content: "Full detailed article content for post 3..."
    },
    {
      id: 4,
      title: "How AI Helps Plan Your Perfect Trip",
      category: "Travel Tech",
      img: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
      desc: "AI is changing how travelers choose destinations.",
      content: "Full detailed article content for post 4..."
    },
    {
      id: 5,
      title: "Top 7 City Tours for 2025",
      category: "City",
      img: "https://images.unsplash.com/photo-1494526585095-c41746248156",
      desc: "Urban exploration at its finest — curated for you.",
      content: "Full detailed article content for post 5..."
    },
    {
      id: 6,
      title: "Essential Travel Tips for First Timers",
      category: "Tips",
      img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
      desc: "Avoid mistakes, travel smarter.",
      content: "Full detailed article content for post 6..."
    }
  ];

  const filteredPosts =
    category === "All" ? posts : posts.filter((p) => p.category === category);

  const featured = posts[0];

  return (
    <div className="w-full text-white bg-[#010414] min-h-screen">

      {/* FEATURED ARTICLE */}
      <section className="relative h-[55vh] flex items-center justify-center px-6 cursor-pointer"
        onClick={() => navigate(`/blog/${featured.id}`)}>
        
        <img
          src={featured.img + "?auto=format&w=1600&q=80"}
          alt="Featured"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90"></div>

        <div className="relative z-20 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold" data-aos="fade-up">
            {featured.title}
          </h1>
          <p className="mt-4 text-lg text-gray-300" data-aos="fade-up" data-aos-delay="150">
            {featured.desc}
          </p>

          <button
            onClick={() => navigate(`/blog/${featured.id}`)}
            data-aos="fade-up"
            data-aos-delay="250"
            className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black font-semibold"
          >
            Read Full Article
          </button>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
          {categories.map((c, i) => (
            <button
              key={i}
              onClick={() => setCategory(c)}
              className={`px-5 py-2 rounded-full border ${
                category === c
                  ? "bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black"
                  : "border-white/20 text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="py-10 px-6">
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredPosts.map((p, i) => (
            <div
              key={p.id}
              data-aos="fade-up"
              data-aos-delay={i * 120}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden hover:scale-[1.03] transition cursor-pointer"
              onClick={() => navigate(`/blog/${p.id}`)}
            >
              <img src={p.img + "?auto=format&w=1000&q=80"} className="w-full h-48 object-cover" />
              <div className="p-5">
                <span className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/20">
                  {p.category}
                </span>
                <h3 className="text-xl font-semibold mt-3">{p.title}</h3>
                <p className="text-gray-300 mt-2 text-sm">{p.desc}</p>

                <button
                  onClick={() => navigate(`/blog/${p.id}`)}
                  className="mt-4 px-5 py-2 rounded-lg bg-gradient-to-r from-[#7DF9FF] to-[#7C4CFF] text-black font-semibold"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRENDING ARTICLES */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#02101E] to-[#081827]">
        <h2 className="text-3xl font-bold text-center mb-10">Trending Articles</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {posts.slice(0, 4).map((p, i) => (
            <div
              key={p.id}
              data-aos="fade-right"
              className="bg-white/5 p-4 rounded-xl flex gap-4 cursor-pointer"
              onClick={() => navigate(`/blog/${p.id}`)}
            >
              <img src={p.img + "?auto=format&w=400&q=80"} className="w-32 h-24 rounded-lg" />
              <div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-gray-300 text-sm mt-1">{p.desc}</p>
                <button className="mt-2 text-[#7DF9FF] text-sm hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SUBSCRIBE CTA */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-[#02203A] to-[#081827]">
        <h2 className="text-3xl font-bold">Want More Travel Stories?</h2>
        <p className="text-gray-300 mt-2">We publish new articles every week.</p>

        <button
          onClick={() => setShowSubscribe(true)}
          className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black font-semibold"
        >
          Subscribe Now
        </button>
      </section>

      {/* SUBSCRIBE MODAL */}
      {showSubscribe && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-xl w-[90%] max-w-md border border-white/20">
            <h3 className="text-2xl font-bold mb-4">Subscribe to Newsletter</h3>
            <input
              className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white"
              placeholder="Enter your email"
            />
            <button className="w-full mt-4 px-5 py-3 rounded-lg bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black font-semibold">
              Subscribe
            </button>

            <button
              onClick={() => setShowSubscribe(false)}
              className="w-full mt-3 py-2 text-gray-300 hover:text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
