// // import React, { useState, useEffect } from "react";
// // import AOS from "aos";
// // import "aos/dist/aos.css";

// // export default function AddTour() {
// //   const [tour, setTour] = useState({
// //     title: "",
// //     country: "",
// //     price: "",
// //     duration: "",
// //     description: "",
// //     highlights: "",
// //     image: ""
// //   });

// //   const handleChange = (e) => {
// //     setTour({ ...tour, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     alert("Tour Submitted (Frontend only — backend next)");
// //   };

// //   useEffect(() => {
// //     AOS.init({ duration: 900, once: true });
// //   }, []);

// //   return (
// //     <div className="min-h-screen bg-[#030617] text-white px-6 py-10">
// //       <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 backdrop-blur-xl p-10 rounded-2xl shadow-2xl">
        
// //         <h1 
// //           className="text-3xl font-extrabold text-center mb-10"
// //           data-aos="fade-up"
// //         >
// //           Add <span className="text-blue-400">New Tour</span>
// //         </h1>

// //         <form onSubmit={handleSubmit} className="space-y-8">

// //           {/* Title */}
// //           <div data-aos="fade-up">
// //             <label className="block mb-2 text-gray-300">Tour Title</label>
// //             <input
// //               type="text"
// //               name="title"
// //               value={tour.title}
// //               onChange={handleChange}
// //               className="w-full p-3 bg-white/10 border border-white/20 rounded-xl outline-none focus:border-[#00F2FE]"
// //               placeholder="Ex: Bali Adventure Trip"
// //               required
// //             />
// //           </div>

// //           {/* Country */}
// //           <div data-aos="fade-up" data-aos-delay="100">
// //             <label className="block mb-2 text-gray-300">Country</label>
// //             <input
// //               type="text"
// //               name="country"
// //               value={tour.country}
// //               onChange={handleChange}
// //               className="w-full p-3 bg-white/10 border border-white/20 rounded-xl outline-none focus:border-[#00F2FE]"
// //               placeholder="Ex: Indonesia"
// //               required
// //             />
// //           </div>

// //           {/* Price */}
// //           <div data-aos="fade-up" data-aos-delay="200">
// //             <label className="block mb-2 text-gray-300">Price (₹)</label>
// //             <input
// //               type="number"
// //               name="price"
// //               value={tour.price}
// //               onChange={handleChange}
// //               className="w-full p-3 bg-white/10 border border-white/20 rounded-xl outline-none focus:border-[#00F2FE]"
// //               placeholder="Ex: 55000"
// //               required
// //             />
// //           </div>

// //           {/* Duration */}
// //           <div data-aos="fade-up" data-aos-delay="300">
// //             <label className="block mb-2 text-gray-300">Duration (Days)</label>
// //             <input
// //               type="number"
// //               name="duration"
// //               value={tour.duration}
// //               onChange={handleChange}
// //               className="w-full p-3 bg-white/10 border border-white/20 rounded-xl outline-none focus:border-[#00F2FE]"
// //               placeholder="Ex: 7"
// //               required
// //             />
// //           </div>

// //           {/* Description */}
// //           <div data-aos="fade-up" data-aos-delay="400">
// //             <label className="block mb-2 text-gray-300">Description</label>
// //             <textarea
// //               name="description"
// //               value={tour.description}
// //               onChange={handleChange}
// //               rows="4"
// //               className="w-full p-3 bg-white/10 border border-white/20 rounded-xl outline-none focus:border-[#00F2FE]"
// //               placeholder="Write tour description..."
// //               required
// //             ></textarea>
// //           </div>

// //           {/* Highlights */}
// //           <div data-aos="fade-up" data-aos-delay="500">
// //             <label className="block mb-2 text-gray-300">
// //               Highlights (comma separated)
// //             </label>
// //             <input
// //               type="text"
// //               name="highlights"
// //               value={tour.highlights}
// //               onChange={handleChange}
// //               className="w-full p-3 bg-white/10 border border-white/20 rounded-xl outline-none focus:border-[#00F2FE]"
// //               placeholder="Ex: Beaches, Waterfalls, Nightlife"
// //             />
// //           </div>

// //           {/* Image URL */}
// //           <div data-aos="fade-up" data-aos-delay="600">
// //             <label className="block mb-2 text-gray-300">Image URL</label>
// //             <input
// //               type="text"
// //               name="image"
// //               value={tour.image}
// //               onChange={handleChange}
// //               className="w-full p-3 bg-white/10 border border-white/20 rounded-xl outline-none focus:border-[#00F2FE]"
// //               placeholder="Paste image link"
// //               required
// //             />
// //           </div>

// //           {/* Submit */}
// //           <button
// //             type="submit"
// //             data-aos="zoom-in"
// //             className="w-full py-3 mt-6 bg-gradient-to-r from-[#00F2FE] to-[#7C4CFF] rounded-full text-black font-bold hover:opacity-90 transition"
// //           >
// //             Add Tour
// //           </button>

// //         </form>
// //       </div>
// //     </div>
// //   );
// // }


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function AddTour() {
//   const navigate = useNavigate();

//   const [tour, setTour] = useState({
//     title: "",
//     location: "",
//     duration: "",
//     price: "",
//     description: "",
//     images: [""],
//     highlights: [""],
//     itinerary: [{ day: "", detail: "" }]
//   });

//   const handleChange = (e) => {
//     setTour({ ...tour, [e.target.name]: e.target.value });
//   };

//   const handleArrayChange = (e, index, field) => {
//     const updated = [...tour[field]];
//     updated[index] = e.target.value;
//     setTour({ ...tour, [field]: updated });
//   };

//   const handleItineraryChange = (e, index, field) => {
//     const updated = [...tour.itinerary];
//     updated[index][field] = e.target.value;
//     setTour({ ...tour, itinerary: updated });
//   };

//   const addField = (field) => {
//     if (field === "itinerary") {
//       setTour({ ...tour, itinerary: [...tour.itinerary, { day: "", detail: "" }] });
//     } else {
//       setTour({ ...tour, [field]: [...tour[field], ""] });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post("http://localhost:5000/api/tours/add", tour);
//       alert("Tour Added Successfully!");
//       navigate("/admin/manage-tours");
//     } catch (err) {
//       alert(err?.response?.data?.message || "Failed to add tour");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#030617] text-white px-6 py-10">
//     <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 backdrop-blur-xl p-10 rounded-2xl shadow-2xl">

//       <h1 className="text-3xl font-extrabold text-center mb-10">
//         Add <span className="text-blue-400">New Tour</span>
//       </h1>
//       <form onSubmit={handleSubmit} className="mt-6 space-y-4">
//         <input name="title" placeholder="Title" className="input" onChange={handleChange} />
//         <input name="location" placeholder="Location" className="input" onChange={handleChange} />
//         <input name="duration" placeholder="Duration" className="input" onChange={handleChange} />
//         <input name="price" placeholder="Price" className="input" onChange={handleChange} />
//         <textarea name="description" placeholder="Description" className="input" onChange={handleChange} />

//         {/* Images */}
//         <h3 className="text-xl font-semibold">Images</h3>
//         {tour.images.map((img, i) => (
//           <input
//             key={i}
//             placeholder={`Image URL ${i + 1}`}
//             value={img}
//             onChange={(e) => handleArrayChange(e, i, "images")}
//             className="input"
//           />
//         ))}
//         <button type="button" onClick={() => addField("images")} className="btn">+ Add Image</button>

//         {/* Highlights */}
//         <h3 className="text-xl font-semibold">Highlights</h3>
//         {tour.highlights.map((h, i) => (
//           <input
//             key={i}
//             placeholder={`Highlight ${i + 1}`}
//             value={h}
//             onChange={(e) => handleArrayChange(e, i, "highlights")}
//             className="input"
//           />
//         ))}
//         <button type="button" onClick={() => addField("highlights")} className="btn">+ Add Highlight</button>

//         {/* Itinerary */}
//         <h3 className="text-xl font-semibold">Itinerary</h3>
//         {tour.itinerary.map((d, i) => (
//           <div key={i} className="flex gap-4">
//             <input
//               placeholder="Day"
//               value={d.day}
//               onChange={(e) => handleItineraryChange(e, i, "day")}
//               className="input"
//             />
//             <input
//               placeholder="Detail"
//               value={d.detail}
//               onChange={(e) => handleItineraryChange(e, i, "detail")}
//               className="input flex-1"
//             />
//           </div>
//         ))}
//         <button type="button" onClick={() => addField("itinerary")} className="btn">+ Add Day</button>

//         <button type="submit" className="px-6 py-2 bg-blue-500 rounded-lg">Submit</button>
//       </form>
//     </div>
//     </div>
//   );
// }



// src/pages/admin/AddTour.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AddTour() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const [tour, setTour] = useState({
    title: "",
    location: "",
    duration: "",
    price: "",
    description: "",
    images: [""],
    highlights: [""],
    itinerary: [{ day: "", detail: "" }],
  });

  const handleChange = (e) => {
    setTour({ ...tour, [e.target.name]: e.target.value });
  };

  const handleArrayChange = (e, index, field) => {
    const updated = [...tour[field]];
    updated[index] = e.target.value;
    setTour({ ...tour, [field]: updated });
  };

  const handleItineraryChange = (e, index, field) => {
    const updated = [...tour.itinerary];
    updated[index][field] = e.target.value;
    setTour({ ...tour, itinerary: updated });
  };

  const addField = (field) => {
    if (field === "itinerary") {
      setTour({
        ...tour,
        itinerary: [...tour.itinerary, { day: "", detail: "" }],
      });
    } else {
      setTour({ ...tour, [field]: [...tour[field], ""] });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/tours/add", tour);
      alert("Tour Added Successfully!");
    } catch (err) {
      alert(err?.response?.data?.message || "Failed to add tour");
    }
  };

  return (
    <div className="min-h-screen bg-[#030617] text-white px-6 py-10">

      {/* CARD WRAPPER */}
      <div
        data-aos="zoom-in"
        className="max-w-4xl mx-auto bg-white/5 border border-white/10 
        backdrop-blur-xl p-10 rounded-2xl shadow-2xl"
      >
        <h1 className="text-3xl font-extrabold text-center mb-10">
          Add <span className="text-[#00F2FE]">New Tour</span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Title */}
          <div data-aos="fade-up">
            <label className="label">Tour Title</label>
            <input
              type="text"
              name="title"
              className="input"
              placeholder="Ex: Bali Adventure Tour"
              onChange={handleChange}
              required
            />
          </div>

          {/* Location */}
          <div data-aos="fade-up" data-aos-delay="100">
            <label className="label">Location</label>
            <input
              type="text"
              name="location"
              className="input"
              placeholder="Ex: Bali, Indonesia"
              onChange={handleChange}
              required
            />
          </div>

          {/* Duration */}
          <div data-aos="fade-up" data-aos-delay="200">
            <label className="label">Duration (Days)</label>
            <input
              type="number"
              name="duration"
              className="input"
              placeholder="Ex: 7"
              onChange={handleChange}
              required
            />
          </div>

          {/* Price */}
          <div data-aos="fade-up" data-aos-delay="300">
            <label className="label">Price (₹)</label>
            <input
              type="number"
              name="price"
              className="input"
              placeholder="Ex: 25000"
              onChange={handleChange}
              required
            />
          </div>

          {/* Description */}
          <div data-aos="fade-up" data-aos-delay="400">
            <label className="label">Description</label>
            <textarea
              name="description"
              rows="4"
              className="input"
              placeholder="Enter full tour description…"
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Images */}
          <div data-aos="fade-up">
            <h3 className="text-xl font-semibold">Images</h3>
            {tour.images.map((img, i) => (
              <input
                key={i}
                placeholder={`Image URL ${i + 1}`}
                className="input mt-3"
                value={img}
                onChange={(e) => handleArrayChange(e, i, "images")}
              />
            ))}
            <button
              type="button"
              className="add-btn"
              onClick={() => addField("images")}
            >
              + Add Image
            </button>
          </div>

          {/* Highlights */}
          <div data-aos="fade-up">
            <h3 className="text-xl font-semibold">Highlights</h3>
            {tour.highlights.map((h, i) => (
              <input
                key={i}
                placeholder={`Highlight ${i + 1}`}
                className="input mt-3"
                value={h}
                onChange={(e) => handleArrayChange(e, i, "highlights")}
              />
            ))}
            <button
              type="button"
              className="add-btn"
              onClick={() => addField("highlights")}
            >
              + Add Highlight
            </button>
          </div>

          {/* Itinerary */}
          <div data-aos="fade-up">
            <h3 className="text-xl font-semibold">Itinerary</h3>

            {tour.itinerary.map((d, i) => (
              <div key={i} className="flex gap-4 mt-3">
                <input
                  placeholder="Day"
                  className="input"
                  value={d.day}
                  onChange={(e) => handleItineraryChange(e, i, "day")}
                />
                <input
                  placeholder="Detail"
                  className="input flex-1"
                  value={d.detail}
                  onChange={(e) => handleItineraryChange(e, i, "detail")}
                />
              </div>
            ))}

            <button
              type="button"
              className="add-btn"
              onClick={() => addField("itinerary")}
            >
              + Add Day
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            data-aos="zoom-in"
            className="w-full mt-6 py-3 rounded-full 
            bg-gradient-to-r from-[#00F2FE] to-[#7C4CFF] 
            text-black font-bold hover:opacity-90 transition"
          >
            Save Tour
          </button>

        </form>
      </div>
    </div>
  );
}
