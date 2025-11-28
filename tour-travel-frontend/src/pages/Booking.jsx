// // src/pages/Booking.jsx
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";

// /**
//  * Booking page that auto-loads tour data from /tour/:id
//  * - If backend is available, it will try to fetch `/api/tours/:id`
//  * - If that fails, it falls back to local demo data
//  *
//  * Note: placeholderImageUrl points to the uploaded file you provided.
//  * If you move the file into your public folder, change the path accordingly
//  * (e.g. "/images.png" or "/videos/city.mp4" for a video).
//  */
// const placeholderImageUrl = "/mnt/data/images.png"; // <-- developer-provided local path

// export default function Booking() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [tour, setTour] = useState(null);
//   const [loadingTour, setLoadingTour] = useState(true);
//   const [error, setError] = useState("");

//   const [form, setForm] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     date: "",
//     travelers: 1,
//     notes: "",
//   });

//   const [submitting, setSubmitting] = useState(false);
//   const [successMsg, setSuccessMsg] = useState("");

//   useEffect(() => {
//     AOS.init({ duration: 900, once: true });
//   }, []);

//   useEffect(() => {
//     // Try fetching tour from backend; fallback to demo data
//     const fetchTour = async () => {
//       setLoadingTour(true);
//       setError("");
//       try {
//         const res = await fetch(`/api/tours/${id}`);
//         if (!res.ok) throw new Error("No backend /api/tours or tour not found");
//         const data = await res.json();
//         setTour(data);
//       } catch (err) {
//         // fallback demo data (so the page always renders)
//         const demo = {
//           id: id || "demo-1",
//           title: "Aurora Trails Expedition",
//           location: "Iceland + Norway",
//           duration: "6 Days",
//           price: 25000,
//           img: placeholderImageUrl,
//           summary:
//             "Experience the breathtaking aurora borealis with a curated 6-day expedition featuring guided treks, photography lessons, and premium cabin stays.",
//         };
//         setTour(demo);
//       } finally {
//         setLoadingTour(false);
//       }
//     };

//     fetchTour();
//   }, [id]);

//   // simple form handler
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((s) => ({ ...s, [name]: value }));
//   };

//   const getTotal = () => {
//     const p = tour?.price || 0;
//     const t = Number(form.travelers) || 1;
//     return p * t;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccessMsg("");

//     // basic validation
//     if (!form.fullName || !form.email || !form.date) {
//       setError("Please fill name, email and travel date.");
//       return;
//     }

//     // If not logged in, redirect to signup
//     const token = localStorage.getItem("token");
//     if (!token) {
//       // Save current intent so user returns after signup (optional)
//       localStorage.setItem("booking_intent", JSON.stringify({ tourId: tour.id, form }));
//       navigate("/signup");
//       return;
//     }

//     // Proceed to submit booking to backend
//     setSubmitting(true);
//     try {
//       const res = await fetch("/api/bookings", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           tourId: tour.id,
//           fullName: form.fullName,
//           email: form.email,
//           phone: form.phone,
//           date: form.date,
//           travelers: Number(form.travelers),
//           notes: form.notes,
//           pricePerPerson: tour.price,
//           totalPrice: getTotal(),
//         }),
//       });

//       if (!res.ok) {
//         const err = await res.json().catch(() => null);
//         throw new Error(err?.message || "Booking failed. Please try again.");
//       }

//       const data = await res.json();
//       setSuccessMsg("Booking successful! Your booking id: " + (data?.id || "—"));
//       // Optionally redirect to booking confirmation or user dashboard
//       // navigate(`/booking/confirmation/${data.id}`);
//     } catch (err) {
//       setError(err.message || "Booking failed");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   if (loadingTour) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#010414] text-white">
//         <div className="text-center">
//           <div className="mb-4 animate-pulse">Loading tour...</div>
//           <div className="text-gray-400">If you have backend, check /api/tours/:id</div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#010414] text-white">
//       <div className="max-w-7xl mx-auto p-6">
//         {/* Breadcrumb */}
//         <div className="mb-6">
//           <Link to="/" className="text-sm text-gray-400 hover:text-white">Home</Link>{" "}
//           <span className="text-gray-500">/</span>{" "}
//           <Link to="/tours" className="text-sm text-gray-400 hover:text-white">Tours</Link>{" "}
//           <span className="text-gray-500">/</span>{" "}
//           <span className="text-sm text-white">{tour?.title || "Tour"}</span>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {/* Left: Tour details */}
//           <div className="md:col-span-2 space-y-6">
//             <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-4">
//               <div className="flex gap-6">
//                 <img
//                   src={tour.img || placeholderImageUrl}
//                   alt={tour.title}
//                   className="w-48 h-36 object-cover rounded-lg"
//                 />
//                 <div>
//                   <h2 className="text-2xl font-bold">{tour.title}</h2>
//                   <p className="text-gray-300 mt-1">{tour.location} • {tour.duration}</p>
//                   <p className="mt-3 text-gray-300">{tour.summary}</p>
//                   <div className="mt-4 text-lg font-semibold text-[#7DF9FF]">₹{tour.price} / person</div>
//                 </div>
//               </div>
//             </div>

//             {/* Itinerary / Details (placeholder) */}
//             <div className="rounded-2xl p-6 border border-white/10 bg-white/5">
//               <h3 className="text-xl font-semibold mb-3">What to expect</h3>
//               <ul className="text-gray-300 space-y-2 list-inside list-disc">
//                 <li>Professional guide and local experiences</li>
//                 <li>Accommodation & meals included (as per plan)</li>
//                 <li>Transportation as per itinerary</li>
//                 <li>Small groups for better experience</li>
//               </ul>
//             </div>

//             {/* Notes / FAQ */}
//             <div className="rounded-2xl p-6 border border-white/10 bg-white/5">
//               <h3 className="text-xl font-semibold mb-3">Important Notes</h3>
//               <ul className="text-gray-300 space-y-2 list-inside list-disc">
//                 <li>Booking is subject to availability</li>
//                 <li>Cancellation policy applies</li>
//                 <li>Ensure passports/IDs are valid for travel</li>
//               </ul>
//             </div>
//           </div>

//           {/* Right: Booking Card */}
//           <div className="space-y-6">
//             <div className="rounded-2xl p-6 border border-white/10 bg-white/5">
//               <h3 className="text-2xl font-bold">Book This Tour</h3>
//               <p className="text-gray-300 mt-2">Fill details to reserve your spot.</p>

//               <form onSubmit={handleSubmit} className="mt-4 space-y-4">
//                 <div>
//                   <label className="text-sm text-gray-300">Full Name</label>
//                   <input
//                     name="fullName"
//                     value={form.fullName}
//                     onChange={handleChange}
//                     className="w-full mt-2 p-3 rounded-lg bg-black/40 border border-white/10"
//                     placeholder="Your full name"
//                   />
//                 </div>

//                 <div>
//                   <label className="text-sm text-gray-300">Email</label>
//                   <input
//                     name="email"
//                     type="email"
//                     value={form.email}
//                     onChange={handleChange}
//                     className="w-full mt-2 p-3 rounded-lg bg-black/40 border border-white/10"
//                     placeholder="you@example.com"
//                   />
//                 </div>

//                 <div>
//                   <label className="text-sm text-gray-300">Phone</label>
//                   <input
//                     name="phone"
//                     value={form.phone}
//                     onChange={handleChange}
//                     className="w-full mt-2 p-3 rounded-lg bg-black/40 border border-white/10"
//                     placeholder="+91 98765 43210"
//                   />
//                 </div>

//                 <div>
//                   <label className="text-sm text-gray-300">Travel Date</label>
//                   <input
//                     name="date"
//                     type="date"
//                     value={form.date}
//                     onChange={handleChange}
//                     className="w-full mt-2 p-3 rounded-lg bg-black/40 border border-white/10"
//                   />
//                 </div>

//                 <div>
//                   <label className="text-sm text-gray-300">Travelers</label>
//                   <input
//                     name="travelers"
//                     type="number"
//                     min="1"
//                     value={form.travelers}
//                     onChange={handleChange}
//                     className="w-full mt-2 p-3 rounded-lg bg-black/40 border border-white/10"
//                   />
//                 </div>

//                 <div>
//                   <label className="text-sm text-gray-300">Notes (optional)</label>
//                   <textarea
//                     name="notes"
//                     value={form.notes}
//                     onChange={handleChange}
//                     rows="3"
//                     className="w-full mt-2 p-3 rounded-lg bg-black/40 border border-white/10"
//                     placeholder="Any special requests..."
//                   />
//                 </div>

//                 {error && <div className="text-sm text-red-400">{error}</div>}
//                 {successMsg && <div className="text-sm text-green-400">{successMsg}</div>}

//                 <div className="mt-4">
//                   <button
//                     type="submit"
//                     disabled={submitting}
//                     className="w-full py-3 rounded-full bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black font-semibold hover:opacity-90 transition"
//                   >
//                     {(!localStorage.getItem("token")) ? "Login / Signup to Book" : (submitting ? "Booking..." : `Book Now • ₹${getTotal()}`)}
//                   </button>
//                 </div>
//               </form>
//             </div>

//             {/* Price Summary */}
//             <div className="rounded-2xl p-6 border border-white/10 bg-white/5">
//               <h4 className="text-lg font-semibold">Price Summary</h4>
//               <div className="mt-4 flex justify-between text-gray-300">
//                 <div>Price per person</div>
//                 <div>₹{tour.price}</div>
//               </div>
//               <div className="mt-2 flex justify-between text-gray-300">
//                 <div>Travelers</div>
//                 <div>{form.travelers}</div>
//               </div>
//               <div className="mt-4 border-t border-white/10 pt-4 flex justify-between font-bold">
//                 <div>Total</div>
//                 <div>₹{getTotal()}</div>
//               </div>
//               <button
//                 onClick={() => {
//                   // If not logged in, go to signup
//                   if (!localStorage.getItem("token")) {
//                     navigate("/signup");
//                     return;
//                   }
//                   // else scroll to form submit
//                   document.querySelector("form")?.scrollIntoView({ behavior: "smooth" });
//                 }}
//                 className="mt-6 w-full py-2 rounded-lg border border-white/10 text-white hover:bg-white/5 transition"
//               >
//                 Proceed
//               </button>
//             </div>

//             {/* Refund / Support */}
//             <div className="rounded-2xl p-4 border border-white/10 bg-white/5 text-sm text-gray-300">
//               <strong>Need help?</strong>
//               <p className="text-gray-400 mt-2">Contact support at support@tourx.ai or call +91 98765 43210</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// src/pages/Booking.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

// placeholder image (uploaded file will be transformed into a URL by the environment)
const placeholderImage = "/mnt/data/Screenshot (1745).png";

export default function Booking() {
  const { id } = useParams(); // tour id from route
  const navigate = useNavigate();

  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // form
  const [form, setForm] = useState({
    travelers: 1,
    date: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    notes: "",
  });

  useEffect(() => {
    AOS.init({ duration: 700, once: true });

    // try to fetch tour from backend, fallback to demo
    const fetchTour = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`/api/tours/${id}`);
        setTour(res.data);
      } catch (err) {
        // fallback demo tour so UI stays functional
        setTour({
          _id: id || "1",
          title: "Bali Adventure Tour",
          location: "Bali, Indonesia",
          price: 29999,
          duration: 7,
          img: placeholderImage,
          summary: "Explore beaches, rice terraces and vibrant culture.",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchTour();

    // prefill contact info if user logged in
    try {
      const savedUser = JSON.parse(localStorage.getItem("user"));
      if (savedUser) {
        setForm((f) => ({
          ...f,
          contactName: savedUser.name || "",
          contactEmail: savedUser.email || "",
        }));
      }
    } catch (e) {}
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const totalAmount = () => {
    if (!tour) return 0;
    const travellers = Number(form.travelers) || 1;
    return travellers * Number(tour.price || 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // basic validation
    if (!form.date || !form.contactName || !form.contactEmail) {
      alert("Please fill required fields: Date, name and email.");
      setSubmitting(false);
      return;
    }

    const payload = {
      tour: tour._id,
      travelers: Number(form.travelers),
      date: form.date,
      amount: totalAmount(),
      contact: {
        name: form.contactName,
        email: form.contactEmail,
        phone: form.contactPhone,
      },
      notes: form.notes,
    };

    try {
      const token = localStorage.getItem("token");
      // If backend exists, this will create a booking for the logged-in user
      const res = await axios.post(
        "/api/bookings",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Booking created successfully.");
      // redirect to my bookings page
      navigate("/my-bookings");
    } catch (err) {
      // if backend isn't ready, show a preview of booking and allow user to continue
      console.error(err);
      alert(
        "Could not create booking (backend may be offline). The frontend preview will act as a client-side booking now."
      );
      // store booking locally for demo (optional)
      const localBookings = JSON.parse(localStorage.getItem("demo_bookings") || "[]");
      localBookings.push({ id: `demo_${Date.now()}`, ...payload, tourTitle: tour.title });
      localStorage.setItem("demo_bookings", JSON.stringify(localBookings));
      navigate("/my-bookings");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading || !tour)
    return (
      <div className="min-h-screen bg-[#010414] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="mb-2 animate-pulse">Loading booking details...</div>
          <div className="text-gray-400 text-sm">Fetching tour info...</div>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-[#010414] text-white px-6 py-12">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left: Tour preview */}
        <div data-aos="fade-right" className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
          <img src={tour.img || placeholderImage} alt={tour.title} className="w-full h-60 object-cover rounded-lg shadow-md" />

          <h2 className="text-2xl font-extrabold mt-4">{tour.title}</h2>
          <p className="text-gray-300 mt-2">{tour.location}</p>

          <div className="mt-4">
            <div className="text-gray-300">Duration</div>
            <div className="text-lg font-semibold">{tour.duration} days</div>
          </div>

          <div className="mt-4">
            <div className="text-gray-300">Price per traveler</div>
            <div className="text-2xl font-extrabold text-blue-300">₹{Number(tour.price).toLocaleString()}</div>
          </div>

          <div className="mt-6 text-gray-300">
            <h4 className="font-semibold mb-2">Summary</h4>
            <p className="text-sm">{tour.summary}</p>
          </div>
        </div>

        {/* Right: Booking form */}
        <div data-aos="fade-left" className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
          <h3 className="text-xl font-semibold">Book this tour</h3>

          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div>
              <label className="text-sm text-gray-300">Select date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full mt-2 p-3 rounded-lg bg-white/10 border border-white/20 outline-none focus:border-[#00F2FE]"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm text-gray-300">Travelers</label>
                <input
                  type="number"
                  name="travelers"
                  value={form.travelers}
                  onChange={handleChange}
                  min={1}
                  className="w-full mt-2 p-3 rounded-lg bg-white/10 border border-white/20 outline-none focus:border-[#00F2FE]"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300">Phone (optional)</label>
                <input
                  type="text"
                  name="contactPhone"
                  value={form.contactPhone}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 rounded-lg bg-white/10 border border-white/20 outline-none focus:border-[#00F2FE]"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-300">Your name</label>
              <input
                type="text"
                name="contactName"
                value={form.contactName}
                onChange={handleChange}
                className="w-full mt-2 p-3 rounded-lg bg-white/10 border border-white/20 outline-none focus:border-[#00F2FE]"
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Email</label>
              <input
                type="email"
                name="contactEmail"
                value={form.contactEmail}
                onChange={handleChange}
                className="w-full mt-2 p-3 rounded-lg bg-white/10 border border-white/20 outline-none focus:border-[#00F2FE]"
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Additional notes (optional)</label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                className="w-full mt-2 p-3 rounded-lg bg-white/10 border border-white/20 outline-none focus:border-[#00F2FE]"
                rows={3}
              />
            </div>

            {/* Summary */}
            <div className="mt-2 p-4 rounded-lg bg-black/40 border border-white/10">
              <div className="flex justify-between">
                <div className="text-gray-300">Subtotal</div>
                <div className="font-semibold">₹{Number(tour.price).toLocaleString()}</div>
              </div>
              <div className="flex justify-between mt-1">
                <div className="text-gray-300">Travelers</div>
                <div className="font-semibold">{form.travelers}</div>
              </div>

              <div className="flex justify-between mt-3 text-xl">
                <div className="font-bold">Total</div>
                <div className="font-extrabold text-blue-300">₹{totalAmount().toLocaleString()}</div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 py-3 rounded-full bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black font-semibold hover:opacity-90 transition"
              >
                {submitting ? "Processing..." : "Confirm Booking"}
              </button>

              <button
                type="button"
                onClick={() => navigate(-1)}
                className="py-3 px-4 rounded-full border border-white/10 hover:bg-white/5"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
