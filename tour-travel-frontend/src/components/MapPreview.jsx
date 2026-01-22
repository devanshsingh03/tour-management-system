import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import tours from "../data/tours";

const MapPreview = () => {
  return (
    <div style={{ height: "500px", width: "100%" }}>
      <MapContainer center={[20.5937, 78.9629]} zoom={2} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {tours.map((tour) => (
          <Marker key={tour.id} position={[tour.lat, tour.lng]}>
            <Popup>
              <h4>{tour.name}</h4>
              <p>{tour.location}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapPreview;
