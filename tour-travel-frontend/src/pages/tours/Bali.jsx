import React from "react";
import { useNavigate } from "react-router-dom";
import baliImage from "../../assets/images/bali.jpg"; // use image, not GLB

export default function Bali() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() =>
        navigate("/hologram-demo", {
          state: {
            title: "Bali",
            modelSrc: "../../assets/images/bali.jpg",  // ❤️ THIS loads Bali hologram image
          },
        })
      }
      className="px-6 py-3 bg-blue-600 text-white rounded-lg"
    >
      View Bali Hologram
    </button>
  );
}
