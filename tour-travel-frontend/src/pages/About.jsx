// src/pages/About.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  // Updated Team Members (Your real team)
  const team = [
    {
      name: "Devansh Singh",
      role: "Co-Founder & Full Stack Engineer",
      img: "https://cdn-icons-png.flaticon.com/512/4715/4715330.png",
    },
    {
      name: "Sanskar Chaurasia",
      role: "Backend Engineering & API Specialist",
      img: "https://cdn-icons-png.flaticon.com/512/4715/4715330.png",
    },
    {
      name: "Daksh Shrivastava",
      role: "UI/UX Designer & Frontend Developer",
      img: "https://cdn-icons-png.flaticon.com/512/4715/4715330.png",
    },
    {
      name: "Saksham Jain",
      role: "Cloud & Data Engineering",
      img: "https://cdn-icons-png.flaticon.com/512/4715/4715330.png",
    },
    {
      name: "Sayma Ahmad",
      role: "Quality Analyst & Operations Manager",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400"

    }
  ];

  return (
    <div className="w-full text-white bg-[#010414]">

      {/* HERO SECTION */}
      <section className="relative h-[55vh] flex items-center justify-center text-center px-6">
        <img
          src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=1800"
          alt="About"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>

        <div className="relative z-20">
          <h1 className="text-4xl md:text-6xl font-extrabold" data-aos="fade-up">
            About Us
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="mt-4 text-lg max-w-2xl mx-auto text-gray-300"
          >
            We combine technology, creativity, and exploration to redefine modern travel.
          </p>
        </div>
      </section>

      {/* UPDATED — OUR MISSION */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Mission Text */}
          <div data-aos="fade-right">
            <h2 className="text-4xl font-bold mb-4">Our Mission</h2>

            <p className="text-gray-300 leading-relaxed">
              Our mission is simple — to reshape the future of travel using immersive,
              intelligent, and creative technology. We combine AR previews, holographic
              experiences, and AI-powered planning to help you explore destinations in
              ways that go beyond imagination.
            </p>

            <p className="mt-4 text-gray-400 leading-relaxed">
              Travel should not just be a journey — it should be an experience that feels
              alive, interactive, and deeply personal. That is the future we are building.
            </p>
          </div>

          {/* Premium Image */}
          <div data-aos="fade-left" className="flex justify-center">
            <div className="relative group">

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00F2FE] to-[#7C4CFF]
              opacity-60 blur-2xl group-hover:opacity-80 transition"></div>

              <div className="relative p-1 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=1200"
                  alt="Mission"
                  className="rounded-xl w-[320px] h-[220px] object-contain mx-auto"
                />
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* WHY WE STAND OUT */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#06112A] to-[#081827]">
        <h2 className="text-3xl font-bold text-center mb-8">Why We Stand Out</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

          <div data-aos="zoom-in" className="p-6 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <h3 className="font-bold text-xl mb-2">AI Travel Intelligence</h3>
            <p className="text-gray-300">
              Our AI assistant helps you discover destinations, plan routes, and make
              smart travel decisions instantly.
            </p>
          </div>

          <div data-aos="zoom-in" data-aos-delay="150" className="p-6 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <h3 className="font-bold text-xl mb-2">AR/VR Immersion</h3>
            <p className="text-gray-300">
              Preview trips in AR before you even book — see landscapes and cityscapes in 3D.
            </p>
          </div>

          <div data-aos="zoom-in" data-aos-delay="300" className="p-6 rounded-xl backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            <h3 className="font-bold text-xl mb-2">Hyper-Personalization</h3>
            <p className="text-gray-300">
              We design every itinerary to match YOUR personality, preferences, and rhythm.
            </p>
          </div>

        </div>
      </section>

      {/* UPDATED — OUR JOURNEY (CDAC PERSONAL STORY) */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center">Our Journey</h2>

        <div className="max-w-4xl mx-auto mt-10 space-y-8 border-l border-gray-700 pl-8">

          <div data-aos="fade-right">
            <h3 className="font-semibold text-xl">The CDAC Transformation</h3>
            <p className="text-gray-400 mt-1">
              The foundation of TourX was shaped during my CDAC journey — long nights,
              tough deadlines, creative breakthroughs, and a mindset built to innovate.
            </p>
          </div>

          <div data-aos="fade-right">
            <h3 className="font-semibold text-xl">From Dream to Vision</h3>
            <p className="text-gray-400 mt-1">
              What began as a simple idea turned into a mission: to blend travel with
              futuristic experiences powered by AI, AR, and immersive storytelling.
            </p>
          </div>

          <div data-aos="fade-right">
            <h3 className="font-semibold text-xl">Building the Future</h3>
            <p className="text-gray-400 mt-1">
              With a passionate team and cutting-edge tools, we built a platform that
              transforms how people see the world.
            </p>
          </div>

        </div>
      </section>

      {/* UPDATED — MEET OUR TEAM */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#081827] to-[#02101E]">
        <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {team.map((t, i) => (
            <div
              key={i}
              data-aos="fade-up"
              className="p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 text-center hover:bg-white/10 transition"
            >
              <img
                src={t.img}
                className="w-28 h-28 rounded-full mx-auto object-cover mb-4 border-2 border-white/20"
                alt={t.name}
              />
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <p className="text-gray-400">{t.role}</p>
            </div>
          ))}

        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Our Core Values</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-gray-300">

          <div data-aos="flip-left" className="bg-white/5 p-6 rounded-xl backdrop-blur-xl border border-white/10">
            <h3 className="font-bold text-xl mb-2">Innovation</h3>
            <p>We consistently push boundaries using AR, AI, and immersive tech.</p>
          </div>

          <div data-aos="flip-left" data-aos-delay="100" className="bg-white/5 p-6 rounded-xl backdrop-blur-xl border border-white/10">
            <h3 className="font-bold text-xl mb-2">Transparency</h3>
            <p>Clear pricing, honest recommendations, and real-time support.</p>
          </div>

          <div data-aos="flip-left" data-aos-delay="200" className="bg-white/5 p-6 rounded-xl backdrop-blur-xl border border-white/10">
            <h3 className="font-bold text-xl mb-2">Customer First</h3>
            <p>Your comfort and experience guide everything we build.</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#02203A] to-[#081827] text-center">
        <h2 className="text-3xl font-bold">Ready to Explore the Future of Travel?</h2>
        <p className="text-gray-300 mt-2">Let us design your next holographic journey.</p>

        <button className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black font-semibold">
          Start Planning
        </button>
      </section>

    </div>
  );
}
