// // src/pages/admin/EditTour.jsx

// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { BASE_URL } from "../../config";

// export default function EditTour() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [error, setError] = useState("");

//   const [tour, setTour] = useState({
//     title: "",
//     location: "",
//     duration: "",
//     price: "",
//     description: "",
//     images: [""],
//     highlights: [""],
//     itinerary: [{ day: "", detail: "" }],
//   });

//   // Fetch tour
//   const fetchTour = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.get(`${BASE_URL}/tours/${id}`);
//       const t = res.data.tour;

//       setTour({
//         title: t.title,
//         location: t.location,
//         duration: t.duration,
//         price: t.price,
//         description: t.description,
//         images: t.images.length ? t.images : [""],
//         highlights: t.highlights.length ? t.highlights : [""],
//         itinerary:
//           t.itinerary.length ? t.itinerary : [{ day: "", detail: "" }],
//       });
//     } catch (err) {
//       setError("Failed to load tour");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     AOS.init({ duration: 900, once: true });
//     fetchTour();
//   }, []);

//   // Basic field change
//   const handleChange = (e) => {
//     setTour({ ...tour, [e.target.name]: e.target.value });
//   };

//   // Array fields (images, highlights)
//   const handleArrayChange = (e, index, field) => {
//     const temp = [...tour[field]];
//     temp[index] = e.target.value;
//     setTour({ ...tour, [field]: temp });
//   };

//   // Itinerary changes
//   const handleItineraryChange = (e, index, field) => {
//     const temp = [...tour.itinerary];
//     temp[index][field] = e.target.value;
//     setTour({ ...tour, itinerary: temp });
//   };

//   // Add new field
//   const addField = (field) => {
//     if (field === "itinerary") {
//       setTour({
//         ...tour,
//         itinerary: [...tour.itinerary, { day: "", detail: "" }],
//       });
//     } else {
//       setTour({ ...tour, [field]: [...tour[field], ""] });
//     }
//   };

//   // Submit update
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSaving(true);

//     try {
//       await axios.patch(`${BASE_URL}/tours/${id}`, tour);
//       alert("Tour updated successfully");
//       navigate("/admin/manage-tours");
//     } catch (err) {
//       setError("Failed to update tour");
//     } finally {
//       setSaving(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-[#030617] text-white flex items-center justify-center">
//         Loading...
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#030617] text-white px-6 py-10">
//       <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 p-10 rounded-xl">

//         <h1 className="text-3xl font-bold mb-6">Edit Tour</h1>

//         {error && (
//           <div className="text-red-400 mb-4">{error}</div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-6">

//           {/* Title */}
//           <div>
//             <label>Title</label>
//             <input
//               name="title"
//               value={tour.title}
//               onChange={handleChange}
//               className="input"
//             />
//           </div>

//           {/* Location */}
//           <div>
//             <label>Location</label>
//             <input
//               name="location"
//               value={tour.location}
//               onChange={handleChange}
//               className="input"
//             />
//           </div>

//           {/* Duration */}
//           <div>
//             <label>Duration (Days)</label>
//             <input
//               name="duration"
//               type="number"
//               value={tour.duration}
//               onChange={handleChange}
//               className="input"
//             />
//           </div>

//           {/* Price */}
//           <div>
//             <label>Price (₹)</label>
//             <input
//               name="price"
//               type="number"
//               value={tour.price}
//               onChange={handleChange}
//               className="input"
//             />
//           </div>

//           {/* Description */}
//           <div>
//             <label>Description</label>
//             <textarea
//               name="description"
//               rows="4"
//               value={tour.description}
//               onChange={handleChange}
//               className="input"
//             />
//           </div>

//           {/* Images */}
//           <div>
//             <h3 className="text-xl">Images</h3>
//             {tour.images.map((img, i) => (
//               <input
//                 key={i}
//                 value={img}
//                 onChange={(e) => handleArrayChange(e, i, "images")}
//                 className="input mt-3"
//                 placeholder={`Image URL ${i + 1}`}
//               />
//             ))}
//             <button type="button" className="btn" onClick={() => addField("images")}>
//               + Add Image
//             </button>
//           </div>

//           {/* Highlights */}
//           <div>
//             <h3 className="text-xl">Highlights</h3>
//             {tour.highlights.map((h, i) => (
//               <input
//                 key={i}
//                 value={h}
//                 onChange={(e) => handleArrayChange(e, i, "highlights")}
//                 className="input mt-3"
//                 placeholder={`Highlight ${i + 1}`}
//               />
//             ))}
//             <button type="button" className="btn" onClick={() => addField("highlights")}>
//               + Add Highlight
//             </button>
//           </div>

//           {/* Itinerary */}
//           <div>
//             <h3 className="text-xl">Itinerary</h3>
//             {tour.itinerary.map((it, i) => (
//               <div key={i} className="flex gap-4 mt-3">
//                 <input
//                   value={it.day}
//                   onChange={(e) => handleItineraryChange(e, i, "day")}
//                   className="input"
//                   placeholder="Day"
//                 />
//                 <input
//                   value={it.detail}
//                   onChange={(e) => handleItineraryChange(e, i, "detail")}
//                   className="input flex-1"
//                   placeholder="Detail"
//                 />
//               </div>
//             ))}
//             <button type="button" className="btn" onClick={() => addField("itinerary")}>
//               + Add Day
//             </button>
//           </div>

//           {/* Save Button */}
//           <button
//             type="submit"
//             className="py-3 px-6 bg-blue-500 rounded-lg font-bold"
//             disabled={saving}
//           >
//             {saving ? "Saving..." : "Save Changes"}
//           </button>

//         </form>
//       </div>
//     </div>
//   );
// }

// src/pages/admin/EditTour.jsx

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { BASE_URL } from "../../config";

export default function EditTour() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

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

  // Fetch tour
  
  const fetchTour = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const res = await axios.get(`${BASE_URL}/tours/${id}`,{
        headers: {Authorization :`Bearer ${token}`}
      });
      const t = res.data;

      setTour({
        title: t.title,
        location: t.location,
        duration: t.duration,
        price: t.price,
        description: t.description,
        images: t.images.length ? t.images : [""],
        highlights: t.highlights.length ? t.highlights : [""],
        itinerary:
          t.itinerary.length ? t.itinerary : [{ day: "", detail: "" }],
      });
    } catch (err) {
      setError("Failed to load tour");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
    fetchTour();
  }, []);

  // Basic field change
  const handleChange = (e) => {
    setTour({ ...tour, [e.target.name]: e.target.value });
  };

  // Array fields (images, highlights)
  const handleArrayChange = (e, index, field) => {
    const temp = [...tour[field]];
    temp[index] = e.target.value;
    setTour({ ...tour, [field]: temp });
  };

  // Itinerary changes
  const handleItineraryChange = (e, index, field) => {
    const temp = [...tour.itinerary];
    temp[index][field] = e.target.value;
    setTour({ ...tour, itinerary: temp });
  };

  // Add new field
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

  // Submit update
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const token = localStorage.getItem("token");
      await axios.put(`${BASE_URL}/tours/${id}`, tour,{
        headers: {Authorization: `Bearer ${token}`}
      });
      alert("Tour updated successfully");
      navigate("/admin/manage-tours");
    } catch (err) {
      setError("Failed to update tour");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#030617] text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030617] text-white px-6 py-10">
      <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 p-10 rounded-xl">

        <h1 className="text-3xl font-bold mb-6">Edit Tour</h1>

        {error && (
          <div className="text-red-400 mb-4">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Title */}
          <div>
            <label>Title</label>
            <input
              name="title"
              value={tour.title}
              onChange={handleChange}
              className="input"
            />
          </div>

          {/* Location */}
          <div>
            <label>Location</label>
            <input
              name="location"
              value={tour.location}
              onChange={handleChange}
              className="input"
            />
          </div>

          {/* Duration */}
          <div>
            <label>Duration (Days)</label>
            <input
              name="duration"
              type="number"
              value={tour.duration}
              onChange={handleChange}
              className="input"
            />
          </div>

          {/* Price */}
          <div>
            <label>Price (₹)</label>
            <input
              name="price"
              type="number"
              value={tour.price}
              onChange={handleChange}
              className="input"
            />
          </div>

          {/* Description */}
          <div>
            <label>Description</label>
            <textarea
              name="description"
              rows="4"
              value={tour.description}
              onChange={handleChange}
              className="input"
            />
          </div>

          {/* Images */}
          <div>
            <h3 className="text-xl">Images</h3>
            {tour.images.map((img, i) => (
              <input
                key={i}
                value={img}
                onChange={(e) => handleArrayChange(e, i, "images")}
                className="input mt-3"
                placeholder={`Image URL ${i + 1}`}
              />
            ))}
            <button type="button" className="btn" onClick={() => addField("images")}>
              + Add Image
            </button>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="text-xl">Highlights</h3>
            {tour.highlights.map((h, i) => (
              <input
                key={i}
                value={h}
                onChange={(e) => handleArrayChange(e, i, "highlights")}
                className="input mt-3"
                placeholder={`Highlight ${i + 1}`}
              />
            ))}
            <button type="button" className="btn" onClick={() => addField("highlights")}>
              + Add Highlight
            </button>
          </div>

          {/* Itinerary */}
          <div>
            <h3 className="text-xl">Itinerary</h3>
            {tour.itinerary.map((it, i) => (
              <div key={i} className="flex gap-4 mt-3">
                <input
                  value={it.day}
                  onChange={(e) => handleItineraryChange(e, i, "day")}
                  className="input"
                  placeholder="Day"
                />
                <input
                  value={it.detail}
                  onChange={(e) => handleItineraryChange(e, i, "detail")}
                  className="input flex-1"
                  placeholder="Detail"
                />
              </div>
            ))}
            <button type="button" className="btn" onClick={() => addField("itinerary")}>
              + Add Day
            </button>
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="py-3 px-6 bg-blue-500 rounded-lg font-bold"
            disabled={saving}
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>

        </form>
      </div>
    </div>
  );
}
