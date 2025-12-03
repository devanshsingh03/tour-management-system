// // src/pages/HologramDemo.jsx
// import React, { useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// export default function HologramDemo() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Read model + title passed from routes
//   const { modelSrc, title } = location.state || {
//     modelSrc: "https://modelviewer.dev/shared-assets/models/glTF-Sample-Models/2.0/Earth/Earth.gltf",
//     title: "The",
//   };

//   useEffect(() => {
//     document.title = `${title} Holographic Demo — TourX`;
//     window.scrollTo(0, 0);
//   }, [title]);

//   return (
//     <div className="relative min-h-screen w-full bg-[#010414] flex items-center justify-center px-6 overflow-hidden">

//       {/* Floating Lights */}
//       <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

//       {/* Back */}
//       <button
//         onClick={() => navigate(-1)}
//         className="absolute top-6 left-6 px-4 py-2 text-white border border-white/20 rounded-lg hover:bg-white/10 transition"
//       >
//         ← Back
//       </button>

//       {/* Main Card */}
//       <div className="relative z-10 max-w-3xl w-full bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-2xl">

//         {/* Title */}
//         <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
//           {title} Holographic Tour Demo
//         </h1>

//         <p className="text-gray-300 text-center max-w-xl mx-auto mb-8">
//           Rotate, zoom, or activate AR mode to experience a next-gen holographic travel preview.
//         </p>

//         {/* Dynamic 3D Model */}
//         <model-viewer
//           src="https://modelviewer.dev/shared-assets/models/glTF-Sample-Models/2.0/Earth/Earth.gltf"
//           // 🔥 THIS IS NOW DYNAMIC
//           alt="Hologram"
//           auto-rotate
//           camera-controls
//           ar
//           ar-modes="webxr scene-viewer quick-look"
//           shadow-intensity="1"
//           exposure="1.1"
//           style={{
//             width: "100%",
//             height: "500px",
//             borderRadius: "20px",
//           }}
//         ></model-viewer>

//         {/* Buttons */}
//         <div className="mt-8 flex flex-wrap justify-center gap-4">
//           <button
//             onClick={() => navigate("/holographic-journey")}
//             className="px-6 py-3 rounded-full bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black font-semibold shadow-lg"
//           >
//             Explore More Holograms
//           </button>

//           <button
//             onClick={() => navigate("/tours")}
//             className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition"
//           >
//             View Other Destinations
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// src/pages/HologramDemo.jsx
import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function HologramDemo() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Holographic Globe Preview — TourX";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#010414] flex items-center justify-center px-6 overflow-hidden">

      {/* Background Lights */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 px-4 py-2 text-white border border-white/20 rounded-lg hover:bg-white/10 transition"
      >
        ← Back
      </button>

      {/* Main Card */}
      <div className="relative z-10 max-w-3xl w-full bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-2xl">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          Holographic Globe Demo
        </h1>

        <p className="text-gray-300 text-center max-w-xl mx-auto mb-8">
          A 3D rotating Earth hologram that works for all destinations.
        </p> 

        
        <model-viewer
          src="https://modelviewer.dev/shared-assets/models/glTF-Sample-Models/2.0/Earth/Earth.gltf"
          alt="3D Globe"
          auto-rotate
          camera-controls
          ar
          ar-modes="webxr scene-viewer quick-look"
          shadow-intensity="1"
          exposure="1.2"
          style={{
            width: "100%",
            height: "500px",
            borderRadius: "20px",
          }}
        ></model-viewer>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => navigate("/holographic-journey")}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#00F2FE] to-[#4FACFE] text-black font-semibold shadow-lg"
          >
            Explore More Holograms
          </button>

          <button
            onClick={() => navigate("/tours")}
            className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition"
          >
            View Other Destinations
          </button>
        </div>
      </div>
    </div>
  );
}
