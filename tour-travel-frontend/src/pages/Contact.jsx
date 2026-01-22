// // src/pages/Contact.jsx
// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function Contact() {
//   useEffect(() => {
//     AOS.init({ duration: 900, once: true });
//   }, []);

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const sendMessage = () => {
//     alert("Message Sent Successfully! (Frontend only)");
//   };

//   return (
//     <div className="w-full text-white bg-[#010414]">

//       {/* HERO CONTACT */}
//       <section className="relative h-[50vh] flex items-center justify-center text-center px-6">
//         <img
//           src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=80"
//           alt="Contact"
//           className="absolute inset-0 w-full h-full object-cover opacity-30"
//         />

//         <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>

//         <div className="relative z-20">
//           <h1 className="text-4xl md:text-6xl font-extrabold" data-aos="fade-up">
//             Contact Us
//           </h1>
//           <p
//             data-aos="fade-up"
//             data-aos-delay="150"
//             className="mt-4 text-lg max-w-2xl mx-auto text-gray-300"
//           >
//             We’re here to help! Reach out for bookings, inquiries, or support.
//           </p>
//         </div>
//       </section>

//       {/* CONTACT INFO CARDS */}
//       <section className="py-16 px-6">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

//           {/* Phone */}
//           <div
//             data-aos="fade-up"
//             className="p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition"
//           >
//             <h3 className="text-xl font-semibold">📞 Phone</h3>
//             <p className="text-gray-300 mt-2">+91 98765 43210</p>
//           </div>

//           {/* Email */}
//           <div
//             data-aos="fade-up"
//             data-aos-delay="120"
//             className="p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition"
//           >
//             <h3 className="text-xl font-semibold">📧 Email</h3>
//             <p className="text-gray-300 mt-2">support@tourx.ai</p>
//           </div>

//           {/* Location */}
//           <div
//             data-aos="fade-up"
//             data-aos-delay="240"
//             className="p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition"
//           >
//             <h3 className="text-xl font-semibold">📍 Location</h3>
//             <p className="text-gray-300 mt-2">Indore, Madhya Pradesh, India</p>
//           </div>
//         </div>
//       </section>

//       {/* CONTACT FORM */}
//       <section className="py-16 px-6 bg-gradient-to-r from-[#07112A] to-[#081827]">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

//           {/* LEFT SIDE TEXT */}
//           <div data-aos="fade-right">
//             <h2 className="text-3xl md:text-4xl font-bold">Send a Message</h2>
//             <p className="text-gray-300 mt-4">
//               Have questions about a tour, booking, or custom trip?  
//               Just send us a message — we usually reply within a few hours.
//             </p>

//             <div className="mt-6 space-y-4 text-gray-300">
//               <p>✔ Quick Responses</p>
//               <p>✔ 24/7 Support</p>
//               <p>✔ Personalized Assistance</p>
//             </div>
//           </div>

//           {/* FORM */}
//           <div data-aos="fade-left" className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">

//             {/* Name */}
//             <div className="mb-4">
//               <label className="text-gray-300 mb-1 block">Your Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 className="w-full p-3 rounded-lg bg-white/10 border border-white/10"
//                 placeholder="Enter your name"
//               />
//             </div>

//             {/* Email */}
//             <div className="mb-4">
//               <label className="text-gray-300 mb-1 block">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 className="w-full p-3 rounded-lg bg-white/10 border border-white/10"
//                 placeholder="Enter your email"
//               />
//             </div>

//             {/* Subject */}
//             <div className="mb-4">
//               <label className="text-gray-300 mb-1 block">Subject</label>
//               <input
//                 type="text"
//                 name="subject"
//                 value={form.subject}
//                 onChange={handleChange}
//                 className="w-full p-3 rounded-lg bg-white/10 border border-white/10"
//                 placeholder="Booking, Inquiry, Support…"
//               />
//             </div>

//             {/* Message */}
//             <div className="mb-4">
//               <label className="text-gray-300 mb-1 block">Message</label>
//               <textarea
//                 name="message"
//                 rows="5"
//                 value={form.message}
//                 onChange={handleChange}
//                 className="w-full p-3 rounded-lg bg-white/10 border border-white/10"
//                 placeholder="Write your message..."
//               ></textarea>
//             </div>

//             <button
//               onClick={sendMessage}
//               className="w-full mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black font-semibold"
//             >
//               Send Message
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* MAP SECTION */}
//       <section className="py-16 px-6">
//         <h2 className="text-3xl font-bold text-center mb-6">Our Location</h2>

//         <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-lg">
          
//           <iframe
//             title="map"
//             src="https://maps.google.com/maps?q=Indore&t=&z=13&ie=UTF8&iwloc=&output=embed"
//             className="w-full h-[400px]"
//             loading="lazy"
//           ></iframe>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-16 px-6 bg-gradient-to-r from-[#02203A] to-[#081827] text-center">
//         <h2 className="text-3xl font-bold">Ready to Start Your Journey?</h2>
//         <p className="text-gray-300 mt-2">We’ll help you build the perfect trip.</p>

//         <button className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black font-semibold">
//           Explore Tours
//         </button>
//       </section>
//     </div>
//   );
// }

// src/pages/Contact.jsx
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const sendMessage = () => {
    alert("Message Sent Successfully! (Frontend only)");
  };

  return (
    <div className="w-full text-white bg-[#010414]">

      {/* HERO CONTACT */}
      <section className="relative h-[50vh] flex items-center justify-center text-center px-6">
        <img
          src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=80"
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>

        <div className="relative z-20">
          <h1 className="text-4xl md:text-6xl font-extrabold" data-aos="fade-up">
            Contact Us
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="mt-4 text-lg max-w-2xl mx-auto text-gray-300"
          >
            We’re here to help! Reach out for bookings, inquiries, or support.
          </p>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

          {/* Phone */}
          <div
            data-aos="fade-up"
            className="p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition"
          >
            <h3 className="text-xl font-semibold">📞 Phone</h3>
            <p className="text-gray-300 mt-2">+91 6261585881</p>
          </div>

          {/* Email */}
          <div
            data-aos="fade-up"
            data-aos-delay="120"
            className="p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition"
          >
            <h3 className="text-xl font-semibold">📧 Email</h3>
            <p className="text-gray-300 mt-2">1412devansh@gmail.com</p>
          </div>

          {/* Location */}
          <div
            data-aos="fade-up"
            data-aos-delay="240"
            className="p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition"
          >
            <h3 className="text-xl font-semibold">📍 Location</h3>
            <p className="text-gray-300 mt-2">Indore, Madhya Pradesh, India</p>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#07112A] to-[#081827]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE TEXT */}
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold">Send a Message</h2>
            <p className="text-gray-300 mt-4">
              Have questions about a tour, booking, or custom trip?  
              Just send us a message — we usually reply within a few hours.
            </p>

            <div className="mt-6 space-y-4 text-gray-300">
              <p>✔ Quick Responses</p>
              <p>✔ 24/7 Support</p>
              <p>✔ Personalized Assistance</p>
            </div>
          </div>

          {/* FORM */}
          <div data-aos="fade-left" className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10">

            {/* Name */}
            <div className="mb-4">
              <label className="text-gray-300 mb-1 block">Your Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white/10 border border-white/10"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="text-gray-300 mb-1 block">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white/10 border border-white/10"
                placeholder="Enter your email"
              />
            </div>

            {/* Subject */}
            <div className="mb-4">
              <label className="text-gray-300 mb-1 block">Subject</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white/10 border border-white/10"
                placeholder="Booking, Inquiry, Support…"
              />
            </div>

            {/* Message */}
            <div className="mb-4">
              <label className="text-gray-300 mb-1 block">Message</label>
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white/10 border border-white/10"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              onClick={sendMessage}
              className="w-full mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black font-semibold"
            >
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Our Location</h2>

        <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-lg">
          
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=Indore&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[400px]"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#02203A] to-[#081827] text-center">
        <h2 className="text-3xl font-bold">Ready to Start Your Journey?</h2>
        <p className="text-gray-300 mt-2">We’ll help you build the perfect trip.</p>

        <button className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black font-semibold">
          Explore Tours
        </button>
      </section>
    </div>
  );
}
