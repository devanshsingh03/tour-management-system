import React from "react";
import { useNavigate } from "react-router-dom";
import parisImage from "../../assets/images/paris.jpg";

export default function Paris() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() =>
        navigate("/hologram-demo", {
          state: {
            title: "Paris",
            modelSrc: parisImage,
          },
        })
      }
      className="px-6 py-3 bg-blue-600 text-white rounded-lg"
    >
      View Paris Hologram
    </button>
  );
}
