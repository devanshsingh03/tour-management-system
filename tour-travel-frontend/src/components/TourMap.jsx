import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import ALL_TOURS  from "../data/tours";
import { useNavigate } from "react-router-dom";
import L from "leaflet";

// 🔥 Fix Leaflet marker icons (Vite fix)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const TourMap = () => {
  const navigate = useNavigate();

  return (
    <div style={{ height: "450px", width: "100%" }}>
      <MapContainer
        center={[20.5937, 78.9629]}
        zoom={2}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {Object.entries(ALL_TOURS).map(([slug, tour]) => (
          <Marker key={slug} position={[tour.lat, tour.lng]}>
            <Popup>
              {/* Image */}
              <img
                src={tour.images?.[0]}
                alt={tour.title}
                className="w-full h-28 object-cover rounded-md mb-2"
              />

              {/* Details */}
              <h4 className="font-semibold text-sm">{tour.title}</h4>
              <p className="text-xs text-gray-600">{tour.location}</p>
              <p className="text-xs mt-1">₹{tour.price}</p>

              {/* Button */}
              <button
                onClick={() => navigate(`/tours`)}
                className="mt-2 w-full px-3 py-1 text-xs rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                View Details
              </button>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default TourMap;
