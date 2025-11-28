import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useNavigate } from "react-router-dom";

export default function ToursCarousel() {
  const navigate = useNavigate();

  const slides = [
    {
      title: "Aurora Escape",
      slug: "aurora-trails",
      img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    },
    {
      title: "Neon Coastline",
      slug: "neon-coastlines",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      title: "Hologram Himalaya",
      slug: "holographic-himalaya",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
  ];

  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Featured Experiences
      </h2>

      <div className="max-w-7xl mx-auto">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
        >
          {slides.map((s, i) => (
            <SwiperSlide key={i}>
              <div
                onClick={() => navigate(`/experience/${s.slug}`)}
                className="rounded-xl overflow-hidden shadow-xl transform hover:scale-105
                transition cursor-pointer group"
              >
                <img
                  src={s.img + "?auto=format&fit=crop&w=1200&q=80"}
                  alt={s.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="text-sm mt-2">2–7 days · Customizable · Guided</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
