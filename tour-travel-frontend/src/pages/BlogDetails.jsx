// src/pages/BlogDetails.jsx
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // SAME POSTS DATA AS Blog.jsx
  const posts = [
    {
      id: 1,
      title: "Top 5 Futuristic Destinations for 2025",
      category: "Travel Tech",
      img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
      desc: "Explore the next-gen travel spots powered by immersive technologies.",
      content: `
        Travel in 2025 is transforming with next-gen technologies like AR previews,
        AI-powered itinerary building, smart destinations, and holographic guides.
        This article explores 5 futuristic travel destinations you must add to your bucket list.
        These include Iceland’s digital aurora dome, Dubai’s AI city district, Tokyo’s holo-parks,
        Norway’s midnight-sun AR trails, and Seoul’s future-culture hubs.
      `,
    },
    {
      id: 2,
      title: "Best Beaches to Visit in India",
      category: "Beach",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      desc: "From Goa to Andamans — these beaches are paradise.",
      content: `
        India is home to some of the world's most breathtaking beaches.
        Whether you love golden sands, adventure water sports, or peaceful sunsets,
        India offers something for everyone. Goa, Gokarna, Andaman Islands, Kovalam,
        and Varkala top the list for 2025.
      `,
    },
    {
      id: 3,
      title: "10 Adventure Trips You Must Try",
      category: "Adventure",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      desc: "Mountains, rivers, forests — push your limits!",
      content: `
        Adventure travel is rising globally, and 2025 brings a powerful list of adrenaline-filled experiences.
        From Himalayan trekking to river rafting in Rishikesh, sky diving in Dubai,
        scuba diving in the Andamans, and desert safaris — this list covers it all.
      `,
    },
    {
      id: 4,
      title: "How AI Helps Plan Your Perfect Trip",
      category: "Travel Tech",
      img: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
      desc: "AI is changing how travelers choose destinations.",
      content: `
        Artificial Intelligence now powers almost every step of travel planning.
        It creates personalised itineraries, predicts weather, suggests destinations,
        automates bookings, and even estimates budgets.
        This article explains why AI is the future of smart travel.
      `,
    },
    {
      id: 5,
      title: "Top 7 City Tours for 2025",
      category: "City",
      img: "https://images.unsplash.com/photo-1494526585095-c41746248156",
      desc: "Urban exploration at its finest — curated for you.",
      content: `
        City tours are becoming smarter, more immersive, and deeply cultural.
        Explore 2025’s top urban destinations including Paris, New York,
        Seoul, Dubai, Singapore, Istanbul, and Tokyo.
      `,
    },
    {
      id: 6,
      title: "Essential Travel Tips for First Timers",
      category: "Tips",
      img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
      desc: "Avoid mistakes, travel smarter.",
      content: `
        First-time traveling? Don't worry!
        This article covers packing tips, airport hacks, budgeting,
        safety guidelines, and important do’s and don’ts for beginners.
      `,
    },
  ];

  const post = posts.find((p) => p.id === Number(id));

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="text-white p-10 text-center">
        <h2>Article not found.</h2>
      </div>
    );
  }

  const related = posts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#010414] text-white">

      {/* HERO */}
      <section className="relative h-[55vh] flex items-center justify-center">
        <img
          src={post.img + "?auto=format&w=1600&q=80"}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90"></div>

        <div className="relative z-20 text-center px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold">{post.title}</h1>
          <p className="mt-4 text-lg text-gray-300">{post.desc}</p>

          <button
            onClick={() => navigate(-1)}
            className="mt-6 px-6 py-2 rounded-full border border-white/20 hover:bg-white/10 transition"
          >
            ← Back to Blog
          </button>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <div className="bg-white/5 backdrop-blur-xl p-8 rounded-xl border border-white/10">

          {/* Meta */}
          <p className="text-[#7DF9FF] text-sm mb-3">Category: {post.category}</p>
          <p className="text-gray-400 text-sm mb-8">Published • 2025</p>

          {/* Content */}
          <p className="text-gray-200 leading-relaxed whitespace-pre-line">
            {post.content}
          </p>

          {/* Share */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-3">Share This Article</h3>
            <div className="flex gap-4">
              <button className="px-4 py-2 rounded-lg bg-white/10 border border-white/20">Facebook</button>
              <button className="px-4 py-2 rounded-lg bg-white/10 border border-white/20">Twitter</button>
              <button className="px-4 py-2 rounded-lg bg-white/10 border border-white/20">Instagram</button>
            </div>
          </div>

        </div>
      </section>

      {/* RELATED ARTICLES */}
      <section className="py-12 px-6 bg-gradient-to-r from-[#02101E] to-[#081827]">
        <h2 className="text-3xl font-bold text-center mb-8">Related Articles</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {related.length ? (
            related.map((p) => (
              <div
                key={p.id}
                onClick={() => navigate(`/blog/${p.id}`)}
                className="cursor-pointer bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:scale-[1.03] transition"
              >
                <img src={p.img + "?auto=format&w=800"} className="h-40 w-full object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center col-span-3">No related articles.</p>
          )}
        </div>
      </section>

    </main>
  );
}
