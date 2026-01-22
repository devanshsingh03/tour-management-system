import { useParams, useNavigate } from "react-router-dom";
import ALL_TOURS from "../../data/tours";

export default function TourDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const tour = ALL_TOURS[slug];

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#010414] text-white">
        <h1 className="text-3xl font-bold">Tour not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#010414] text-white">
      {/* HERO */}
      <section className="relative h-[75vh]">
        <img
          src={tour.images[0]}
          alt={tour.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-end pb-16">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              {tour.title}
            </h1>
            <p className="text-lg text-gray-300 mb-2">
              📍 {tour.location}
            </p>
            <p className="text-gray-200 max-w-2xl">
              {tour.description}
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        {/* LEFT */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-6">Highlights</h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-14">
            {tour.highlights.map((h, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-[#020817] border border-white/10"
              >
                ✔ {h}
              </div>
            ))}
          </div>

          {tour.itinerary && (
            <>
              <h2 className="text-3xl font-bold mb-6">
                Day-wise Itinerary
              </h2>

              <div className="space-y-4">
                {tour.itinerary.map((day, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-xl bg-[#020817] border border-white/10"
                  >
                    <h4 className="font-semibold">{day.day}</h4>
                    <p className="text-gray-300">{day.detail}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* RIGHT CARD */}
        <div className="sticky top-28 h-fit">
          <div className="rounded-2xl bg-[#020817] border border-white/10 p-6">
            <div className="flex justify-between mb-4">
              <span className="text-gray-400">Duration</span>
              <span className="font-semibold">{tour.duration}</span>
            </div>

            <div className="flex justify-between mb-6">
              <span className="text-gray-400">Price</span>
              <span className="text-3xl font-bold text-blue-400">
                ₹{tour.price}
              </span>
            </div>

            <button
              onClick={() => navigate(`/booking/${tour.slug}`)}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 font-semibold text-lg"
            >
              Book This Tour
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}


// import { useParams } from "react-router-dom";
// import ALL_TOURS from "../../data/tours";

// export default function TourDetails() {
//   const { slug } = useParams();
//   const tour = ALL_TOURS[slug];

//   if (!tour) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-white bg-[#010414]">
//         <h1 className="text-3xl font-bold">Tour Not Found</h1>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#010414] text-white">
//       <h1 className="text-4xl font-bold">{tour.title}</h1>
//       <p>{tour.location}</p>
//     </div>
//   );
// }
