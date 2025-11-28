import React from "react";
import { useNavigate } from "react-router-dom";
import goaImage from "../../assets/images/goa.jpg";

export default function Goa() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() =>
        navigate("/hologram-demo", {
          state: {
            title: "Goa",
            modelSrc: goaImage,
          },
        })
      }
      className="px-6 py-3 bg-blue-600 text-white rounded-lg"
    >
      View Goa Hologram
    </button>
  );
}
