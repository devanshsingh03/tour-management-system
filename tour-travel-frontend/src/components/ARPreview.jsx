{/* AR PREVIEW SECTION */}
<section className="py-20 px-6 bg-[#060b18] text-white">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* Text Section */}
    <div data-aos="fade-right">
      <h2 className="text-4xl font-bold mb-4">AR Preview</h2>
      <p className="text-gray-300 mb-6 text-lg">
        Explore our tours in Augmented Reality. Rotate the model,
        zoom in, and even place it in your room using AR mode.
      </p>
      <button className="px-6 py-3 rounded-full bg-gradient-to-r from-[#24C6DC] to-[#514A9D] text-black font-bold shadow-lg hover:opacity-90 transition">
        Explore AR Tours
      </button>
    </div>

    {/* 3D Model Section */}
    <div
      data-aos="zoom-in"
      className="bg-black/30 border border-white/10 p-4 rounded-2xl backdrop-blur-xl shadow-lg"
    >
      <model-viewer
        src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
        alt="3D Travel Model"
        auto-rotate
        camera-controls
        ar
        ar-modes="webxr scene-viewer quick-look"
        disable-tap
        style={{
          width: "100%",
          height: "400px",
          borderRadius: "20px"
        }}
      >
      </model-viewer>
    </div>

  </div>
</section>
